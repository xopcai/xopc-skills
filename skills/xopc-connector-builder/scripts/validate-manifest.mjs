#!/usr/bin/env node

import { readFileSync } from "node:fs"
import { isIP } from "node:net"
import { resolve } from "node:path"

const path = process.argv[2]
if (!path) throw new Error("Usage: validate-manifest.mjs <xopc.connector.json>")
const errors = []
const warnings = []
let manifest
try { manifest = JSON.parse(readFileSync(resolve(path), "utf8")) } catch (error) { throw new Error(`Invalid JSON: ${error.message}`) }

const record = (value) => Boolean(value) && typeof value === "object" && !Array.isArray(value)
const string = (value) => typeof value === "string" && value.trim().length > 0
const strings = (value) => Array.isArray(value) && value.every(string)
const categories = new Set(["code", "docs", "browser", "data", "automation", "custom"])
const capabilities = new Set(["tools", "resources", "prompts", "context", "events", "auth.apiKey", "auth.oauth", "runtime.mcp.stdio", "runtime.mcp.sse", "runtime.mcp.streamableHttp"])
const placeholder = /^\{\{(secrets|config)\.([A-Za-z0-9_.-]+)\}\}$/

if (!record(manifest)) errors.push("manifest must be an object")
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(manifest?.id ?? "")) errors.push("id must be lowercase kebab-case")
for (const key of ["displayName", "description", "category"]) if (!string(manifest?.[key])) errors.push(`${key} is required`)
if (!categories.has(manifest?.category)) errors.push("unsupported category")
if (!strings(manifest?.capabilities) || manifest.capabilities.length === 0) errors.push("capabilities must be a non-empty string array")
else for (const value of manifest.capabilities) if (!capabilities.has(value)) errors.push(`unsupported capability '${value}'`)

const authMode = manifest?.auth?.mode
if (!["none", "apiKey", "oauth"].includes(authMode)) errors.push("auth.mode must be none, apiKey, or oauth")
if (authMode === "oauth") warnings.push("OAuth publication is blocked until the shared XOPC OAuth broker supports the connector")

const setupKeys = new Set()
for (const group of ["secrets", "config"]) {
  const fields = manifest?.setup?.[group] ?? []
  if (!Array.isArray(fields)) { errors.push(`setup.${group} must be an array`); continue }
  for (const field of fields) {
    if (!record(field) || !string(field.key) || !string(field.label)) { errors.push(`each setup.${group} field needs key and label`); continue }
    const qualified = `${group}:${field.key}`
    if (setupKeys.has(qualified)) errors.push(`duplicate setup field '${qualified}'`)
    setupKeys.add(qualified)
    if (group === "config" && !["string", "number", "boolean", "json", "path"].includes(field.type)) errors.push(`unsupported config type for '${field.key}'`)
  }
}

const runtime = manifest?.runtime
const template = runtime?.serverTemplate
if (!record(runtime) || runtime.type !== "mcp" || !string(runtime.serverId) || !record(template)) errors.push("runtime must define MCP serverId and serverTemplate")

function checkReferences(value) {
  if (typeof value === "string") {
    if (value.includes("{{")) {
      const match = placeholder.exec(value.trim())
      if (!match) errors.push(`placeholder must be a complete value: '${value}'`)
      else if (!setupKeys.has(`${match[1]}:${match[2]}`)) errors.push(`placeholder references undeclared field '${match[1]}.${match[2]}'`)
    }
  } else if (Array.isArray(value)) value.forEach(checkReferences)
  else if (record(value)) Object.values(value).forEach(checkReferences)
}
checkReferences(template)

const permissions = manifest?.permissions
if (!record(permissions)) errors.push("permissions must be an object")
if (!strings(permissions?.filesystem) || permissions.filesystem.length > 0) errors.push("permissions.filesystem must be an empty array")
if (permissions?.data !== undefined && !strings(permissions.data)) errors.push("permissions.data must be a string array")
if (!strings(permissions?.networkDomains)) errors.push("permissions.networkDomains must be a string array")

if (runtime?.localPackage) {
  const local = runtime.localPackage
  const version = /^[0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.-]+)?$/
  if (local.registry !== "npm" || !string(local.name) || !version.test(local.version ?? "")) errors.push("localPackage must pin an exact npm package version")
  if (template?.command !== "npx" || JSON.stringify(template?.args) !== JSON.stringify(["--yes", `${local.name}@${local.version}`])) errors.push("local runtime must use exactly npx --yes <name>@<version>")
  if (permissions?.localExec !== true) errors.push("local runtime must explicitly set permissions.localExec=true")
} else if (record(template)) {
  let url
  try { url = new URL(template.url) } catch { errors.push("remote runtime URL is invalid") }
  if (url) {
    const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, "")
    if (url.protocol !== "https:" || url.username || url.password || host === "localhost" || host.endsWith(".localhost") || isIP(host)) errors.push("remote runtime must use a public credential-free HTTPS URL")
    if (!permissions?.networkDomains?.some((item) => item.toLowerCase() === host)) errors.push("networkDomains must include the endpoint hostname")
  }
  if (!["streamable-http", "sse"].includes(template.transport)) errors.push("remote transport must be streamable-http or sse")
  for (const key of ["command", "args", "env", "cwd", "workingDirectory"]) if (key in template) errors.push(`remote runtime cannot define '${key}'`)
  if (permissions?.localExec !== false) errors.push("remote runtime must explicitly set permissions.localExec=false")
}

for (const warning of warnings) console.warn(`WARN ${warning}`)
for (const error of errors) console.error(`ERROR ${error}`)
if (errors.length > 0) process.exit(1)
console.log(`Valid XOPC connector manifest: ${manifest.id}`)
