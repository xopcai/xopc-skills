#!/usr/bin/env node
import { createHash } from "node:crypto"
import { spawnSync } from "node:child_process"
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const utf8Flag = 0x0800
const dosTime = 0
const dosDate = 0x0021

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

function stableCompare(left, right) {
  const leftFolded = left.toLowerCase()
  const rightFolded = right.toLowerCase()
  if (leftFolded < rightFolded) return -1
  if (leftFolded > rightFolded) return 1
  if (left < right) return -1
  if (left > right) return 1
  return 0
}

function listFiles(directory) {
  const relativeDirectory = relative(root, directory).replaceAll("\\", "/")
  const result = spawnSync("git", ["ls-files", "-z", "--", relativeDirectory], {
    cwd: root,
    encoding: "utf8",
  })
  if (result.status !== 0) throw new Error(result.stderr || `Unable to list tracked files in ${relativeDirectory}`)
  const prefix = `${relativeDirectory}/`
  const files = result.stdout.split("\0").filter(Boolean).map((path) => {
    if (!path.startsWith(prefix)) throw new Error(`Tracked file escaped Skill directory: ${path}`)
    const name = path.slice(prefix.length)
    const stat = lstatSync(join(directory, name))
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`Unsupported tracked filesystem entry: ${path}`)
    return name
  }).sort(stableCompare)
  if (files.length === 0) {
    throw new Error(`No tracked files found in ${relativeDirectory}`)
  }
  return files
}

const crcTable = Array.from({ length: 256 }, (_, value) => {
  let crc = value
  for (let bit = 0; bit < 8; bit += 1) crc = (crc & 1) === 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1
  return crc >>> 0
})

function crc32(data) {
  let crc = 0xffffffff
  for (const byte of data) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function createZip(entries) {
  if (entries.length === 0) throw new Error("Cannot create an empty ZIP archive")
  const names = new Set()
  const localParts = []
  const centralParts = []
  let offset = 0

  for (const entry of [...entries].sort((a, b) => stableCompare(a.name, b.name))) {
    if (!entry.name || entry.name.startsWith("/") || entry.name.split("/").includes("..") || entry.name.includes("\\")) {
      throw new Error(`Unsafe ZIP entry: ${entry.name}`)
    }
    if (names.has(entry.name)) throw new Error(`Duplicate ZIP entry: ${entry.name}`)
    names.add(entry.name)

    const name = Buffer.from(entry.name, "utf8")
    const data = Buffer.isBuffer(entry.data) ? entry.data : Buffer.from(entry.data)
    if (name.length > 0xffff || data.length > 0xffffffff || offset > 0xffffffff) throw new Error(`ZIP entry is too large: ${entry.name}`)
    const checksum = crc32(data)

    const local = Buffer.alloc(30)
    local.writeUInt32LE(0x04034b50, 0)
    local.writeUInt16LE(20, 4)
    local.writeUInt16LE(utf8Flag, 6)
    local.writeUInt16LE(0, 8)
    local.writeUInt16LE(dosTime, 10)
    local.writeUInt16LE(dosDate, 12)
    local.writeUInt32LE(checksum, 14)
    local.writeUInt32LE(data.length, 18)
    local.writeUInt32LE(data.length, 22)
    local.writeUInt16LE(name.length, 26)
    local.writeUInt16LE(0, 28)
    localParts.push(local, name, data)

    const central = Buffer.alloc(46)
    central.writeUInt32LE(0x02014b50, 0)
    central.writeUInt16LE(20, 4)
    central.writeUInt16LE(20, 6)
    central.writeUInt16LE(utf8Flag, 8)
    central.writeUInt16LE(0, 10)
    central.writeUInt16LE(dosTime, 12)
    central.writeUInt16LE(dosDate, 14)
    central.writeUInt32LE(checksum, 16)
    central.writeUInt32LE(data.length, 20)
    central.writeUInt32LE(data.length, 24)
    central.writeUInt16LE(name.length, 28)
    central.writeUInt16LE(0, 30)
    central.writeUInt16LE(0, 32)
    central.writeUInt16LE(0, 34)
    central.writeUInt16LE(0, 36)
    central.writeUInt32LE(0, 38)
    central.writeUInt32LE(offset, 42)
    centralParts.push(central, name)
    offset += local.length + name.length + data.length
  }

  if (entries.length > 0xffff) throw new Error("ZIP has too many entries")
  const centralDirectory = Buffer.concat(centralParts)
  if (centralDirectory.length > 0xffffffff || offset > 0xffffffff) throw new Error("ZIP archive is too large")
  const end = Buffer.alloc(22)
  end.writeUInt32LE(0x06054b50, 0)
  end.writeUInt16LE(0, 4)
  end.writeUInt16LE(0, 6)
  end.writeUInt16LE(entries.length, 8)
  end.writeUInt16LE(entries.length, 10)
  end.writeUInt32LE(centralDirectory.length, 12)
  end.writeUInt32LE(offset, 16)
  end.writeUInt16LE(0, 20)
  return Buffer.concat([...localParts, centralDirectory, end])
}

function sha256(data) {
  return createHash("sha256").update(data).digest("hex")
}

function withI18nMetadata(skillMarkdown, localizations, skillName) {
  const newline = skillMarkdown.includes("\r\n") ? "\r\n" : "\n"
  const lines = skillMarkdown.split(/\r?\n/)
  if (lines[0] !== "---") throw new Error(`SKILL.md requires YAML frontmatter: ${skillName}`)
  const closing = lines.indexOf("---", 1)
  if (closing === -1) throw new Error(`SKILL.md has unterminated YAML frontmatter: ${skillName}`)
  if (lines.slice(1, closing).some((line) => /^\s+i18n:\s*$/.test(line))) {
    throw new Error(`SKILL.md already contains metadata.i18n: ${skillName}`)
  }

  const block = [
    "  i18n:",
    ...["en", "zh-CN"].flatMap((locale) => {
      const value = localizations?.[locale]
      if (!value?.displayName || !value?.description) throw new Error(`Missing ${locale} localization for ${skillName}`)
      return [
        `    ${locale}:`,
        `      name: ${JSON.stringify(value.displayName)}`,
        `      description: ${JSON.stringify(value.description)}`,
      ]
    }),
  ]
  const metadata = lines.slice(1, closing).findIndex((line) => /^metadata:\s*$/.test(line))
  if (metadata === -1) lines.splice(closing, 0, "metadata:", ...block)
  else lines.splice(metadata + 2, 0, ...block)
  return lines.join(newline)
}

const options = parseArgs(process.argv)
const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"))
const categoryRegistry = JSON.parse(readFileSync(join(root, "registry/categories.json"), "utf8"))
if (categoryRegistry.schemaVersion !== 1 || !Array.isArray(categoryRegistry.categories)) {
  throw new Error("registry/categories.json has an unsupported shape")
}
const categories = categoryRegistry.categories.map((category) => {
  if (typeof category.id !== "string" || typeof category.labels?.en !== "string" || typeof category.labels?.["zh-CN"] !== "string") {
    throw new Error("Every scenario category requires id, labels.en and labels.zh-CN")
  }
  return { id: category.id, labels: { en: category.labels.en, "zh-CN": category.labels["zh-CN"] } }
})
const categoryIds = new Set(categories.map((category) => category.id))
const categoryBySkill = new Map()
for (const category of categoryRegistry.categories) {
  for (const skill of category.skills ?? []) {
    if (categoryBySkill.has(skill)) throw new Error(`Skill belongs to multiple categories: ${skill}`)
    categoryBySkill.set(skill, category.id)
  }
}
const commit = options.commit ?? gitCommit()
if (!/^[a-f0-9]{40}$/.test(commit)) throw new Error("--commit must be a full lowercase Git SHA")
const output = resolve(root, options.out ?? `dist/xopc-skills-${packageJson.version}.zip`)
mkdirSync(dirname(output), { recursive: true })

const catalogFiles = readdirSync(join(root, "registry/skills")).filter((name) => name.endsWith(".json")).sort()
const names = new Set()
const skills = []
const bundleEntries = []
for (const catalogFile of catalogFiles) {
  const catalog = JSON.parse(readFileSync(join(root, "registry/skills", catalogFile), "utf8"))
  if (names.has(catalog.name)) throw new Error(`Duplicate registry Skill: ${catalog.name}`)
  names.add(catalog.name)
  const source = resolve(root, catalog.path)
  const skillsRoot = resolve(root, "skills")
  if (!source.startsWith(`${skillsRoot}/`) || !existsSync(join(source, "SKILL.md")) || !statSync(source).isDirectory()) {
    throw new Error(`Invalid registry path for ${catalog.name}: ${catalog.path}`)
  }
  const parts = catalog.path.split("/")
  if (parts.length !== 3 || parts[2] !== catalog.name) throw new Error(`Skill path must be skills/<scenario>/<name>: ${catalog.path}`)
  const category = categoryBySkill.get(catalog.name)
  if (!category || !categoryIds.has(category)) throw new Error(`Missing display category for ${catalog.name}`)
  const artifactPath = `packages/${catalog.name}.zip`
  const artifact = createZip(listFiles(source).map((name) => ({
    name,
    data: name === "SKILL.md"
      ? withI18nMetadata(readFileSync(join(source, name), "utf8"), catalog.localizations, catalog.name)
      : readFileSync(join(source, name)),
  })))
  bundleEntries.push({ name: artifactPath, data: artifact })
  skills.push({
    name: catalog.name,
    path: catalog.path,
    version: catalog.version,
    category,
    scenarioId: catalog.scenarioId,
    localizations: catalog.localizations,
    artifactPath,
    artifactSha256: sha256(artifact),
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
  schemaVersion: 4,
  catalogVersion: packageJson.version,
  defaultLocale: "en",
  supportedLocales: ["en", "zh-CN"],
  repository: "https://github.com/xopcai/xopc-skills",
  commit,
  categories: categories.filter((category) => skills.some((skill) => skill.category === category.id)),
  skills,
}
bundleEntries.push({ name: "release-manifest.json", data: `${JSON.stringify(manifest, null, 2)}\n` })
const bundle = createZip(bundleEntries)
writeFileSync(output, bundle)
console.log(JSON.stringify({ output, commit, catalogVersion: packageJson.version, skillCount: skills.length, sha256: sha256(bundle) }, null, 2))
