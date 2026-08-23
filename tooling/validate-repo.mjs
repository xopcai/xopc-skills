#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { basename, dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const errors = []
const warnings = []

function readJson(relativePath) {
  const path = join(root, relativePath)
  try {
    return JSON.parse(readFileSync(path, "utf8"))
  } catch (error) {
    errors.push(`${relativePath}: invalid JSON (${error.message})`)
    return null
  }
}

function requireString(value, label) {
  if (typeof value !== "string" || !value.trim()) errors.push(`${label}: must be a non-empty string`)
}

function checkUnique(items, key, label) {
  const seen = new Set()
  for (const item of items) {
    const value = item?.[key]
    if (seen.has(value)) errors.push(`${label}: duplicate ${key} '${value}'`)
    seen.add(value)
  }
}

const scenarios = readJson("registry/scenarios.json")
if (scenarios) {
  if (scenarios.schemaVersion !== 1 || !Array.isArray(scenarios.scenarios)) {
    errors.push("registry/scenarios.json: unsupported shape")
  } else {
    checkUnique(scenarios.scenarios, "id", "registry/scenarios.json")
    for (const item of scenarios.scenarios) {
      requireString(item.id, "scenario.id")
      requireString(item.title, `${item.id}.title`)
      requireString(item.domain, `${item.id}.domain`)
      requireString(item.targetOutcome, `${item.id}.targetOutcome`)
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id ?? "")) errors.push(`${item.id}: invalid scenario id`)
      if (!Number.isInteger(item.priority) || item.priority < 0 || item.priority > 18) errors.push(`${item.id}: priority must be 0..18`)
      if (item.briefPath !== undefined && !existsSync(join(root, item.briefPath))) errors.push(`${item.id}: missing briefPath '${item.briefPath}'`)
    }
  }
}

const upstreams = readJson("registry/upstreams.json")
if (upstreams) {
  if (upstreams.schemaVersion !== 1 || !Array.isArray(upstreams.upstreams)) {
    errors.push("registry/upstreams.json: unsupported shape")
  } else {
    checkUnique(upstreams.upstreams, "id", "registry/upstreams.json")
    for (const item of upstreams.upstreams) {
      requireString(item.id, "upstream.id")
      requireString(item.repository, `${item.id}.repository`)
      try {
        const url = new URL(item.repository)
        if (url.protocol !== "https:") errors.push(`${item.id}: repository must use HTTPS`)
      } catch {
        errors.push(`${item.id}: invalid repository URL`)
      }
    }
  }
}

const candidates = readJson("registry/candidates.json")
if (candidates) {
  if (candidates.schemaVersion !== 1 || !Array.isArray(candidates.candidates)) {
    errors.push("registry/candidates.json: unsupported shape")
  } else {
    checkUnique(candidates.candidates, "id", "registry/candidates.json")
    const scenarioIds = new Set(scenarios?.scenarios?.map((item) => item.id) ?? [])
    const upstreamIds = new Set(upstreams?.upstreams?.map((item) => item.id) ?? [])
    for (const item of candidates.candidates) {
      requireString(item.id, "candidate.id")
      requireString(item.upstreamId, `${item.id}.upstreamId`)
      requireString(item.skillPath, `${item.id}.skillPath`)
      if (item.scenarioId !== null && !scenarioIds.has(item.scenarioId)) errors.push(`${item.id}: unknown scenarioId '${item.scenarioId}'`)
      if (!upstreamIds.has(item.upstreamId)) errors.push(`${item.id}: unknown upstreamId '${item.upstreamId}'`)
      if (!Array.isArray(item.strengths) || item.strengths.length === 0) errors.push(`${item.id}: strengths are required`)
      if (!Array.isArray(item.gaps) || item.gaps.length === 0) errors.push(`${item.id}: gaps are required`)
    }
  }
}

const opportunities = readJson("registry/scenario-opportunities.json")
const opportunityIds = new Set()
if (opportunities) {
  if (opportunities.schemaVersion !== 1 || !Array.isArray(opportunities.opportunities)) {
    errors.push("registry/scenario-opportunities.json: unsupported shape")
  } else {
    checkUnique(opportunities.opportunities, "id", "registry/scenario-opportunities.json")
    for (const item of opportunities.opportunities) {
      requireString(item.id, "opportunity.id")
      requireString(item.title, `${item.id}.title`)
      requireString(item.evidenceNeeded, `${item.id}.evidenceNeeded`)
      opportunityIds.add(item.id)
      if (item.status !== "upstream-signal-only") errors.push(`${item.id}: opportunity status must be 'upstream-signal-only'`)
      if (!Array.isArray(item.upstreamSignals) || item.upstreamSignals.length === 0) errors.push(`${item.id}: upstreamSignals are required`)
    }
  }
}

const scenarioGroups = readJson("registry/scenario-groups.json")
if (scenarioGroups) {
  if (scenarioGroups.schemaVersion !== 1 || !Array.isArray(scenarioGroups.groups)) {
    errors.push("registry/scenario-groups.json: unsupported shape")
  } else {
    if (!Number.isInteger(scenarioGroups.maxSkillsPerGroup) || scenarioGroups.maxSkillsPerGroup < 1 || scenarioGroups.maxSkillsPerGroup > 20) {
      errors.push("registry/scenario-groups.json: maxSkillsPerGroup must be 1..20")
    }
    checkUnique(scenarioGroups.groups, "id", "registry/scenario-groups.json")
    const scenarioIds = new Set(scenarios?.scenarios?.map((item) => item.id) ?? [])
    const groupedSkills = new Set()
    for (const group of scenarioGroups.groups) {
      requireString(group.id, "scenarioGroup.id")
      requireString(group.title, `${group.id}.title`)
      if (!Array.isArray(group.scenarioIds) || group.scenarioIds.length === 0) errors.push(`${group.id}: scenarioIds are required`)
      if (!Array.isArray(group.skills)) errors.push(`${group.id}: skills must be an array`)
      if ((group.skills?.length ?? 0) > scenarioGroups.maxSkillsPerGroup) errors.push(`${group.id}: exceeds ${scenarioGroups.maxSkillsPerGroup} Skills`)
      for (const scenarioId of group.scenarioIds ?? []) {
        if (!scenarioIds.has(scenarioId)) errors.push(`${group.id}: unknown scenarioId '${scenarioId}'`)
      }
      for (const skill of group.skills ?? []) {
        if (groupedSkills.has(skill)) errors.push(`${skill}: assigned to more than one scenario group`)
        groupedSkills.add(skill)
      }
    }
  }
}

const intake = readJson("registry/voltagent-intake.json")
const shortlist = readJson("registry/voltagent-shortlist.json")
if (intake && shortlist) {
  if (intake.schemaVersion !== 1 || !Array.isArray(intake.selections)) errors.push("registry/voltagent-intake.json: unsupported shape")
  if (shortlist.schemaVersion !== 1 || !Array.isArray(shortlist.shortlist)) errors.push("registry/voltagent-shortlist.json: unsupported shape")
  const scenarioIds = new Set(scenarios?.scenarios?.map((item) => item.id) ?? [])
  const upstream = upstreams?.upstreams?.find((item) => item.id === intake.source?.upstreamId)
  if (!upstream) errors.push(`voltagent intake: unknown upstreamId '${intake.source?.upstreamId}'`)
  if (upstream && upstream.observedCommit !== intake.source?.commit) errors.push("voltagent intake: commit differs from upstream registry")
  if (shortlist.generatedFrom?.commit !== intake.source?.commit) errors.push("voltagent shortlist: generated commit differs from intake")
  checkUnique(intake.selections ?? [], "label", "registry/voltagent-intake.json")
  checkUnique(shortlist.shortlist ?? [], "label", "registry/voltagent-shortlist.json")

  for (const item of intake.selections ?? []) {
    requireString(item.label, "voltagent selection.label")
    requireString(item.sourceRepository, `${item.label}.sourceRepository`)
    requireString(item.reason, `${item.label}.reason`)
    if (!Number.isInteger(item.priority) || item.priority < 1 || item.priority > 3) errors.push(`${item.label}: priority must be 1..3`)
    if (Boolean(item.scenarioId) === Boolean(item.opportunityId)) errors.push(`${item.label}: set exactly one of scenarioId or opportunityId`)
    if (item.scenarioId && !scenarioIds.has(item.scenarioId)) errors.push(`${item.label}: unknown scenarioId '${item.scenarioId}'`)
    if (item.opportunityId && !opportunityIds.has(item.opportunityId)) errors.push(`${item.label}: unknown opportunityId '${item.opportunityId}'`)
  }

  const selectedLabels = [...(intake.selections ?? [])].map((item) => item.label).sort()
  const generatedLabels = [...(shortlist.shortlist ?? [])].map((item) => item.label).sort()
  if (JSON.stringify(selectedLabels) !== JSON.stringify(generatedLabels)) errors.push("voltagent shortlist: labels differ from intake policy")
  for (const item of shortlist.shortlist ?? []) {
    requireString(item.indexUrl, `${item.label}.indexUrl`)
    requireString(item.originalRepository, `${item.label}.originalRepository`)
    requireString(item.description, `${item.label}.description`)
  }
}

function parseFrontmatter(raw, relativePath) {
  if (!raw.startsWith("---\n")) {
    errors.push(`${relativePath}: missing YAML frontmatter`)
    return null
  }
  const end = raw.indexOf("\n---\n", 4)
  if (end < 0) {
    errors.push(`${relativePath}: unterminated YAML frontmatter`)
    return null
  }
  const fields = {}
  for (const line of raw.slice(4, end).split("\n")) {
    const match = /^([a-zA-Z0-9_-]+):\s*["']?(.*?)["']?$/.exec(line)
    if (match) fields[match[1]] = match[2]
  }
  const metadataVersion = /^metadata:\s*$[\s\S]*?^  version:\s*["']?([^"'\n]+)["']?\s*$/m.exec(raw.slice(4, end))
  if (metadataVersion) fields.metadata_version = metadataVersion[1]
  return fields
}

function walkFiles(dir) {
  if (!existsSync(dir)) return []
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walkFiles(path))
    else if (entry.isFile()) files.push(path)
  }
  return files
}

function findSkillDirs(dir) {
  if (!existsSync(dir)) return []
  const skillDirs = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const path = join(dir, entry.name)
    if (existsSync(join(path, "SKILL.md"))) skillDirs.push(path)
    else skillDirs.push(...findSkillDirs(path))
  }
  return skillDirs
}

const skillsDir = join(root, "skills")
const skillDirs = findSkillDirs(skillsDir)
const skillDirsByName = new Map()
for (const skillDir of skillDirs) {
  const name = basename(skillDir)
  if (skillDirsByName.has(name)) errors.push(`${name}: duplicate distributed Skill name`)
  skillDirsByName.set(name, skillDir)
}

if (scenarioGroups?.groups) {
  const groupedSkills = new Set(scenarioGroups.groups.flatMap((group) => group.skills ?? []))
  for (const skillDir of skillDirs) {
    const name = basename(skillDir)
    if (!groupedSkills.has(name)) errors.push(`${name}: missing primary scenario-group assignment`)
  }
  for (const name of groupedSkills) {
    if (!skillDirsByName.has(name)) errors.push(`registry/scenario-groups.json: unknown distributed Skill '${name}'`)
  }
  for (const group of scenarioGroups.groups) {
    requireString(group.directory, `${group.id}.directory`)
    const groupDir = group.directory ? join(root, group.directory) : null
    if (groupDir && !existsSync(groupDir)) errors.push(`${group.id}: missing scenario directory '${group.directory}'`)
    if (groupDir && existsSync(join(groupDir, "SKILL.md"))) errors.push(`${group.id}: scenario directory must not contain a root SKILL.md`)
    if (groupDir && !existsSync(join(groupDir, "SCENARIO.md"))) errors.push(`${group.id}: missing SCENARIO.md`)
    const allowedScenarios = new Set(group.scenarioIds ?? [])
    for (const name of group.skills ?? []) {
      const catalog = readJson(`registry/skills/${name}.json`)
      if (catalog && !allowedScenarios.has(catalog.scenarioId)) {
        errors.push(`${name}: catalog scenarioId '${catalog.scenarioId}' is outside primary group '${group.id}'`)
      }
      if (catalog && catalog.path && dirname(catalog.path) !== group.directory) {
        errors.push(`${name}: catalog path '${catalog.path}' is outside scenario directory '${group.directory}'`)
      }
    }
  }
}

if (skillDirs.length === 0) warnings.push("No official skills yet; repository is in design stage.")

for (const skillDir of skillDirs) {
  const name = basename(skillDir)
  const relativeDir = relative(root, skillDir)
  const relativeSkill = `${relativeDir}/SKILL.md`
  const skillPath = join(skillDir, "SKILL.md")
  if (!existsSync(skillPath)) {
    errors.push(`${relativeSkill}: missing`)
    continue
  }
  const raw = readFileSync(skillPath, "utf8")
  const fields = parseFrontmatter(raw, relativeSkill)
  if (!fields) continue
  if (fields.name !== name) errors.push(`${relativeSkill}: name must match directory '${name}'`)
  requireString(fields.description, `${relativeSkill}.description`)
  if ((fields.description ?? "").length > 1024) errors.push(`${relativeSkill}: description exceeds 1024 characters`)
  if (raw.split(/\r?\n/).length > 500) errors.push(`${relativeSkill}: exceeds 500 lines; use progressive disclosure`)
  if (/\b(?:TODO|TBD)\b|\[(?:fill|replace|example)(?:[^\]]*)\]/i.test(raw)) errors.push(`${relativeSkill}: contains unfinished placeholders`)

  const linkPattern = /\[[^\]]+\]\((?!https?:|#)([^)]+)\)/g
  for (const match of raw.matchAll(linkPattern)) {
    const target = join(skillDir, match[1].split("#")[0])
    if (!existsSync(target)) errors.push(`${relativeSkill}: broken reference '${match[1]}'`)
  }

  const catalogPath = join(root, "registry", "skills", `${name}.json`)
  const triggerPath = join(root, "evals", name, "trigger-cases.json")
  const taskPath = join(root, "evals", name, "task-cases.json")
  if (!existsSync(catalogPath)) errors.push(`registry/skills/${name}.json: required for every skill`)
  if (!existsSync(triggerPath)) errors.push(`evals/${name}/trigger-cases.json: required for every skill`)
  if (!existsSync(taskPath)) errors.push(`evals/${name}/task-cases.json: required for every skill`)

  if (existsSync(catalogPath)) {
    const catalog = readJson(`registry/skills/${name}.json`)
    if (catalog) {
      if (catalog.schemaVersion !== 1 || catalog.name !== name) errors.push(`registry/skills/${name}.json: unsupported shape or name mismatch`)
      if (catalog.path !== relativeDir) errors.push(`${name}: catalog path must be '${relativeDir}'`)
      if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(catalog.version ?? "")) errors.push(`${name}: invalid catalog version`)
      if (!["experimental", "candidate", "stable", "deprecated"].includes(catalog.stage)) errors.push(`${name}: invalid catalog stage`)
      const scenarioIds = new Set(scenarios?.scenarios?.map((item) => item.id) ?? [])
      if (!scenarioIds.has(catalog.scenarioId)) errors.push(`${name}: unknown catalog scenarioId '${catalog.scenarioId}'`)
      if (!["xopc-original", "xopc-adapted"].includes(catalog.origin)) errors.push(`${name}: invalid origin`)
      requireString(catalog.owner, `${name}.owner`)
      if (catalog.origin === "xopc-adapted") {
        requireString(catalog.source, `${name}.source`)
        if (catalog.source && !existsSync(join(root, catalog.source))) errors.push(`${name}: missing source record '${catalog.source}'`)
        if (catalog.source && existsSync(join(root, catalog.source))) {
          const source = readJson(catalog.source)
          requireString(source?.repository, `${name}.source.repository`)
          requireString(source?.path, `${name}.source.path`)
          requireString(source?.license, `${name}.source.license`)
          if (!/^[0-9a-f]{40}$/.test(source?.commit ?? "")) errors.push(`${name}: source commit must be a full 40-character SHA`)
          if (source?.license !== catalog.license) errors.push(`${name}: source and catalog licenses differ`)
          if (catalog.license === "Apache-2.0" && !existsSync(join(skillDir, "LICENSE.txt"))) errors.push(`${name}: Apache-2.0 package must include LICENSE.txt`)
        }
      }
      const versionInSkill = fields.metadata_version ?? fields.version
      if (versionInSkill && versionInSkill !== catalog.version) errors.push(`${name}: SKILL.md version differs from catalog`)
    }
  }

  if (existsSync(triggerPath)) {
    const trigger = readJson(`evals/${name}/trigger-cases.json`)
    if (trigger) {
      if (trigger.schemaVersion !== 1 || trigger.skill !== name || !Array.isArray(trigger.cases)) errors.push(`evals/${name}/trigger-cases.json: unsupported shape`)
      else {
        checkUnique(trigger.cases, "id", `evals/${name}/trigger-cases.json`)
        const positive = trigger.cases.filter((item) => item.shouldTrigger === true)
        const negative = trigger.cases.filter((item) => item.shouldTrigger === false)
        if (positive.length < 10 || negative.length < 10) errors.push(`${name}: trigger eval requires at least 10 positive and 10 negative cases`)
        for (const item of trigger.cases) {
          requireString(item.id, `${name}.trigger.id`)
          requireString(item.prompt, `${name}.${item.id}.prompt`)
          if (typeof item.shouldTrigger !== "boolean") errors.push(`${name}.${item.id}: shouldTrigger must be boolean`)
        }
      }
    }
  }

  if (existsSync(taskPath)) {
    const task = readJson(`evals/${name}/task-cases.json`)
    if (task) {
      if (task.schemaVersion !== 1 || task.skill !== name || !Array.isArray(task.cases)) errors.push(`evals/${name}/task-cases.json: unsupported shape`)
      else {
        checkUnique(task.cases, "id", `evals/${name}/task-cases.json`)
        if (task.cases.length < 5) errors.push(`${name}: task eval requires at least 5 cases`)
        for (const item of task.cases) {
          requireString(item.id, `${name}.task.id`)
          requireString(item.request, `${name}.${item.id}.request`)
          requireString(item.fixture, `${name}.${item.id}.fixture`)
          if (!Array.isArray(item.expected) || item.expected.length === 0) errors.push(`${name}.${item.id}: expected checks are required`)
          if (!Array.isArray(item.forbidden) || item.forbidden.length === 0) errors.push(`${name}.${item.id}: forbidden behaviors are required`)
        }
      }
    }
  }

  const skillFiles = walkFiles(skillDir)
  const skillBytes = skillFiles.reduce((total, file) => total + statSync(file).size, 0)
  if (skillBytes > 1 * 1024 * 1024) errors.push(`${relativeSkill}: package exceeds XOPC Store 1 MB uncompressed source limit (${skillBytes} bytes)`)
  if (skillFiles.length > 512) errors.push(`${relativeSkill}: package exceeds 512 file limit`)

  for (const file of skillFiles) {
    const relativeFile = file.slice(root.length + 1)
    const lower = file.toLowerCase()
    const fileName = basename(lower)
    if ([".env", "id_rsa", "id_dsa", "credentials.json"].includes(fileName) || [".exe", ".dll", ".dylib", ".so", ".node", ".pem", ".pfx", ".key"].some((suffix) => lower.endsWith(suffix))) {
      errors.push(`${relativeFile}: blocked sensitive, native, or executable artifact`)
    }
    const textExtensions = new Set([".md", ".txt", ".json", ".ipynb", ".yaml", ".yml", ".js", ".mjs", ".ts", ".py", ".sh"])
    const extension = file.slice(file.lastIndexOf("."))
    if (!textExtensions.has(extension)) continue
    const content = readFileSync(file, "utf8")
    if (/-----BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY-----/.test(content)) errors.push(`${file.slice(root.length + 1)}: contains a private key`)
    if (/curl\s+[^\n|]+\|\s*(?:sh|bash)|wget\s+[^\n|]+\|\s*(?:sh|bash)/i.test(content)) errors.push(`${file.slice(root.length + 1)}: contains remote pipe-to-shell execution`)
    if (file.endsWith(".md")) {
      const linkPattern = /\[[^\]]*\]\((?!https?:|#)([^)]+)\)/g
      for (const match of content.matchAll(linkPattern)) {
        const target = join(dirname(file), match[1].split("#")[0])
        if (!existsSync(target)) errors.push(`${relativeFile}: broken reference '${match[1]}'`)
      }
    }
  }
}

if (!existsSync(join(root, "LICENSE"))) errors.push("LICENSE: required before public release")

for (const warning of warnings) console.warn(`WARN ${warning}`)
for (const error of errors) console.error(`ERROR ${error}`)

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error(s).`)
  process.exit(1)
}

console.log(`Validation passed: ${scenarios?.scenarios?.length ?? 0} scenarios, ${scenarioGroups?.groups?.length ?? 0} scenario groups, ${opportunities?.opportunities?.length ?? 0} opportunities, ${upstreams?.upstreams?.length ?? 0} upstreams, ${candidates?.candidates?.length ?? 0} candidates, ${shortlist?.shortlist?.length ?? 0} VoltAgent selections, ${skillDirs.length} skills.`)
