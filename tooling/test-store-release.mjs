#!/usr/bin/env node
import { createHash } from "node:crypto"
import { spawnSync } from "node:child_process"
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

function readStoredZipEntries(buffer) {
  const entries = new Map()
  let offset = 0
  while (offset + 4 <= buffer.length && buffer.readUInt32LE(offset) === 0x04034b50) {
    const compression = buffer.readUInt16LE(offset + 8)
    if (compression !== 0) throw new Error("Release test only supports stored ZIP entries")
    const size = buffer.readUInt32LE(offset + 18)
    const nameLength = buffer.readUInt16LE(offset + 26)
    const extraLength = buffer.readUInt16LE(offset + 28)
    const nameStart = offset + 30
    const dataStart = nameStart + nameLength + extraLength
    const name = buffer.subarray(nameStart, nameStart + nameLength).toString("utf8")
    entries.set(name, buffer.subarray(dataStart, dataStart + size))
    offset = dataStart + size
  }
  return entries
}

const temp = mkdtempSync(join(tmpdir(), "xopc-release-test-"))
const commit = "a".repeat(40)
try {
  const outputs = [join(temp, "one.zip"), join(temp, "two.zip")]
  const build = (output) => {
    const result = spawnSync(process.execPath, ["tooling/build-store-release.mjs", "--commit", commit, "--out", output], { encoding: "utf8" })
    if (result.status !== 0) throw new Error(result.stderr || result.stdout)
  }
  build(outputs[0])
  const untracked = join(process.cwd(), "skills/api-integration/xopc-model-gateway/.xopc-release-untracked-test")
  writeFileSync(untracked, "generated and intentionally untracked\n")
  try {
    build(outputs[1])
  } finally {
    rmSync(untracked, { force: true })
  }
  const hash = (file) => createHash("sha256").update(readFileSync(file)).digest("hex")
  if (hash(outputs[0]) !== hash(outputs[1])) throw new Error("Store release build is not deterministic")
  const releaseEntries = readStoredZipEntries(readFileSync(outputs[0]))
  const manifest = JSON.parse(releaseEntries.get("release-manifest.json")?.toString("utf8") ?? "null")
  if (manifest?.schemaVersion !== 4 || manifest.defaultLocale !== "en") throw new Error("Release manifest localization contract is missing")
  for (const skill of manifest.skills ?? []) {
    if (!skill.localizations?.en || !skill.localizations?.["zh-CN"]) throw new Error(`Missing manifest localizations for ${skill.name}`)
    const packageEntries = readStoredZipEntries(releaseEntries.get(skill.artifactPath) ?? Buffer.alloc(0))
    const metadata = JSON.parse(packageEntries.get("xopc-skill.json")?.toString("utf8") ?? "null")
    if (metadata?.name !== skill.name || !metadata.localizations?.["zh-CN"]) throw new Error(`Missing package localizations for ${skill.name}`)
  }
  console.log("Store release test passed: builds are deterministic, exclude untracked files, and embed localized metadata.")
} finally {
  rmSync(temp, { recursive: true, force: true })
}
