#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const policyPath = join(root, "registry", "voltagent-intake.json")
const outputPath = join(root, "registry", "voltagent-shortlist.json")
const args = process.argv.slice(2)

function option(name) {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : undefined
}

async function loadReadme(policy) {
  const sourcePath = option("--source")
  if (sourcePath) return readFileSync(resolve(sourcePath), "utf8")

  const gitDir = option("--git-dir")
  if (gitDir) {
    return execFileSync("git", ["show", `${policy.source.commit}:README.md`], {
      cwd: resolve(gitDir),
      encoding: "utf8",
      maxBuffer: 16 * 1024 * 1024
    })
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 30_000)
  try {
    const response = await fetch(policy.source.readmeUrl, { signal: controller.signal })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return await response.text()
  } finally {
    clearTimeout(timer)
  }
}

function parseOfficialEntries(readme) {
  const start = readme.indexOf("Official Claude Skills")
  const end = readme.indexOf("### Community Skills")
  if (start < 0 || end < 0 || end <= start) throw new Error("Could not locate VoltAgent official-skill boundaries")

  const entries = new Map()
  const duplicateLabels = new Set()
  let section = "Official Claude Skills"
  for (const line of readme.slice(start, end).split(/\r?\n/)) {
    const heading = /<summary><h3[^>]*>([^<]+)<\/h3><\/summary>/.exec(line)
    if (heading) section = heading[1].trim()

    const item = /^- \*\*\[([^\]]+)\]\(([^)]+)\)\*\*\s+-\s+(.+)$/.exec(line)
    if (!item) continue
    const [, label, indexUrl, description] = item
    if (entries.has(label)) {
      duplicateLabels.add(label)
      continue
    }
    entries.set(label, { label, indexUrl, description: description.trim(), section })
  }
  return { entries, duplicateLabels: [...duplicateLabels].sort() }
}

function inferDirectGitHubRepository(indexUrl) {
  const url = new URL(indexUrl)
  const parts = url.pathname.split("/").filter(Boolean)
  if (url.hostname === "github.com" && parts.length >= 2) {
    return `https://github.com/${parts[0]}/${parts[1]}`
  }
  return null
}

const policy = JSON.parse(readFileSync(policyPath, "utf8"))
const readme = await loadReadme(policy)
const { entries, duplicateLabels } = parseOfficialEntries(readme)
const missing = policy.selections.filter((selection) => !entries.has(selection.label))
if (missing.length > 0) {
  throw new Error(`Pinned VoltAgent README is missing selections: ${missing.map((item) => item.label).join(", ")}`)
}

const shortlist = policy.selections
  .map((selection) => {
    const { sourceRepository, ...policyFields } = selection
    return {
      ...policyFields,
      ...entries.get(selection.label),
      originalRepository: sourceRepository ?? inferDirectGitHubRepository(entries.get(selection.label).indexUrl)
    }
  })
  .sort((a, b) => a.priority - b.priority || a.label.localeCompare(b.label))

const output = {
  schemaVersion: 1,
  generatedFrom: {
    upstreamId: policy.source.upstreamId,
    commit: policy.source.commit,
    scope: policy.source.scope,
    duplicateLabelsIgnored: duplicateLabels
  },
  disclaimer: "VoltAgent is a prioritized discovery index, not a security, license, or quality approval. Follow every item to its original repository before adoption.",
  shortlist
}
const serialized = `${JSON.stringify(output, null, 2)}\n`

if (args.includes("--check")) {
  const current = readFileSync(outputPath, "utf8")
  if (current !== serialized) {
    console.error("registry/voltagent-shortlist.json is stale; run npm run sync:voltagent")
    process.exit(1)
  }
  console.log(`VoltAgent shortlist is current: ${shortlist.length} selected official skills.`)
} else {
  writeFileSync(outputPath, serialized)
  console.log(`Wrote registry/voltagent-shortlist.json with ${shortlist.length} selected official skills.`)
}
