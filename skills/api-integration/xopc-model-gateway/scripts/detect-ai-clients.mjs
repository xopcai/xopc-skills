#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from "node:fs"
import { extname, join, relative, resolve } from "node:path"

const root = resolve(process.argv[2] ?? process.cwd())
const ignored = new Set([".git", ".next", "build", "coverage", "dist", "node_modules", "vendor"])
const extensions = new Set([".cjs", ".go", ".js", ".jsx", ".mjs", ".py", ".rb", ".ts", ".tsx"])
const signals = [
  ["openai-sdk", /(?:from\s+["']openai["']|require\(["']openai["']\)|from\s+openai\s+import)/],
  ["anthropic-sdk", /(?:@anthropic-ai\/sdk|from\s+anthropic\s+import)/],
  ["openai-endpoint", /api\.openai\.com/],
  ["base-url-config", /\b(?:baseURL|base_url)\b/],
  ["chat-completions", /(?:chat\.completions|chat\/completions)/],
  ["responses-api", /(?:responses\.create|\/responses\b)/],
  ["streaming", /\bstream\s*[:=]\s*(?:true|True)\b/]
]

function files(dir) {
  const result = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) result.push(...files(path))
    else if (entry.isFile() && extensions.has(extname(entry.name)) && statSync(path).size <= 1_000_000) result.push(path)
  }
  return result
}

const findings = []
for (const path of files(root)) {
  const lines = readFileSync(path, "utf8").split(/\r?\n/)
  for (let index = 0; index < lines.length; index += 1) {
    const matched = signals.filter(([, pattern]) => pattern.test(lines[index])).map(([name]) => name)
    if (matched.length > 0) findings.push({ file: relative(root, path), line: index + 1, signals: matched })
  }
}

console.log(JSON.stringify({ root, findings }, null, 2))
