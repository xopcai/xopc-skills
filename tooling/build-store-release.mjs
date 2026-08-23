#!/usr/bin/env node
import { createHash } from "node:crypto"
import { spawnSync } from "node:child_process"
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, utimesSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const fixedTime = new Date("1980-01-01T00:00:00.000Z")

function parseArgs(argv) {
  const options = { out: null, commit: null }
  for (let index = 2; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === "--out") options.out = argv[++index]
    else if (arg.startsWith("--out=")) options.out = arg.slice(6)
    else if (arg === "--commit") options.commit = argv[++index]
    else if (arg.startsWith("--commit=")) options.commit = arg.slice(9)
    else throw new Error(`Unknown argument: ${arg}`)
  }
  return options
}

function gitCommit() {
  const result = spawnSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" })
  if (result.status !== 0) throw new Error(result.stderr || "Unable to resolve git commit")
  return result.stdout.trim()
}

function listFiles(directory) {
  const files = []
  const visit = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const full = join(current, entry.name)
      if (entry.isDirectory()) visit(full)
      else if (entry.isFile()) files.push(relative(directory, full).replaceAll("\\", "/"))
      else throw new Error(`Unsupported filesystem entry: ${full}`)
    }
  }
  visit(directory)
  return files
}

function normalizeTimes(directory) {
  const visit = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name)
      if (entry.isDirectory()) visit(full)
      utimesSync(full, fixedTime, fixedTime)
    }
  }
  visit(directory)
  utimesSync(directory, fixedTime, fixedTime)
}

function zipFiles(directory, output) {
  const files = listFiles(directory)
  if (files.length === 0) throw new Error(`Nothing to archive: ${directory}`)
  rmSync(output, { force: true })
  const result = spawnSync("zip", ["-X", "-q", output, "-@"], {
    cwd: directory,
    input: `${files.join("\n")}\n`,
    encoding: "utf8",
    env: { ...process.env, TZ: "UTC" },
  })
  if (result.status !== 0) throw new Error(result.stderr || `zip failed for ${directory}`)
}

function sha256(file) {
  return createHash("sha256").update(readFileSync(file)).digest("hex")
}

const options = parseArgs(process.argv)
const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"))
const commit = options.commit ?? gitCommit()
if (!/^[a-f0-9]{40}$/.test(commit)) throw new Error("--commit must be a full lowercase Git SHA")
const output = resolve(root, options.out ?? `dist/xopc-skills-${packageJson.version}.zip`)
mkdirSync(dirname(output), { recursive: true })
const temp = mkdtempSync(join(tmpdir(), "xopc-skill-release-"))

try {
  const bundleDir = join(temp, "bundle")
  const packageDir = join(bundleDir, "packages")
  mkdirSync(packageDir, { recursive: true })
  const catalogFiles = readdirSync(join(root, "registry/skills")).filter((name) => name.endsWith(".json")).sort()
  const names = new Set()
  const skills = []
  for (const catalogFile of catalogFiles) {
    const catalog = JSON.parse(readFileSync(join(root, "registry/skills", catalogFile), "utf8"))
    if (names.has(catalog.name)) throw new Error(`Duplicate registry Skill: ${catalog.name}`)
    names.add(catalog.name)
    const source = resolve(root, catalog.path)
    if (!source.startsWith(`${resolve(root, "skills")}/`) || !existsSync(join(source, "SKILL.md")) || !statSync(source).isDirectory()) {
      throw new Error(`Invalid registry path for ${catalog.name}: ${catalog.path}`)
    }
    const parts = catalog.path.split("/")
    if (parts.length !== 3 || parts[2] !== catalog.name) throw new Error(`Skill path must be skills/<group>/<name>: ${catalog.path}`)
    const staged = join(temp, "skills", catalog.name)
    mkdirSync(dirname(staged), { recursive: true })
    cpSync(source, staged, { recursive: true })
    normalizeTimes(staged)
    const artifactPath = `packages/${catalog.name}.zip`
    const artifactFile = join(bundleDir, artifactPath)
    zipFiles(staged, artifactFile)
    utimesSync(artifactFile, fixedTime, fixedTime)
    skills.push({
      name: catalog.name,
      path: catalog.path,
      version: catalog.version,
      scenarioGroup: parts[1],
      scenarioId: catalog.scenarioId,
      artifactPath,
      artifactSha256: sha256(artifactFile),
    })
  }
  const discovered = []
  const visitSkills = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const full = join(directory, entry.name)
      if (entry.isDirectory()) visitSkills(full)
      else if (entry.name === "SKILL.md") discovered.push(dirname(full))
    }
  }
  visitSkills(join(root, "skills"))
  if (discovered.length !== skills.length) throw new Error(`Registry has ${skills.length} Skills but filesystem has ${discovered.length}`)
  const manifest = {
    schemaVersion: 1,
    catalogVersion: packageJson.version,
    repository: "https://github.com/xopcai/xopc-skills",
    commit,
    skills,
  }
  writeFileSync(join(bundleDir, "release-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`)
  utimesSync(join(bundleDir, "release-manifest.json"), fixedTime, fixedTime)
  zipFiles(bundleDir, output)
  console.log(JSON.stringify({ output, commit, catalogVersion: packageJson.version, skillCount: skills.length, sha256: sha256(output) }, null, 2))
} finally {
  rmSync(temp, { recursive: true, force: true })
}
