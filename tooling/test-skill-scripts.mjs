#!/usr/bin/env node

import { spawn } from "node:child_process"
import { createServer } from "node:http"
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const temp = mkdtempSync(join(tmpdir(), "xopc-skills-test-"))

function run(command, args, options = {}) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(command, args, { cwd: root, ...options })
    let stdout = ""
    let stderr = ""
    child.stdout.on("data", (data) => { stdout += data })
    child.stderr.on("data", (data) => { stderr += data })
    child.on("error", reject)
    child.on("close", (code) => resolveRun({ code, stdout, stderr }))
  })
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

try {
  const fixture = join(temp, "client")
  mkdirSync(fixture)
  writeFileSync(join(fixture, "app.ts"), 'import OpenAI from "openai"\nconst client = new OpenAI({ baseURL: process.env.AI_URL })\nclient.chat.completions.create({ model: "demo", stream: true })\n')
  const detection = await run("node", ["skills/xopc-model-gateway/scripts/detect-ai-clients.mjs", fixture])
  assert(detection.code === 0, `client detection failed: ${detection.stderr}`)
  const findings = JSON.parse(detection.stdout).findings
  assert(findings.some((item) => item.signals.includes("openai-sdk")), "OpenAI SDK was not detected")
  assert(findings.some((item) => item.signals.includes("streaming")), "streaming call was not detected")

  const validManifest = join(root, "skills/xopc-connector-builder/assets/remote-api-key/xopc.connector.json")
  const valid = await run("node", ["skills/xopc-connector-builder/scripts/validate-manifest.mjs", validManifest])
  assert(valid.code === 0, `valid connector rejected: ${valid.stderr}`)
  const unsafePath = join(temp, "unsafe.connector.json")
  const unsafe = JSON.parse(readFileSync(validManifest, "utf8"))
  unsafe.runtime.serverTemplate.url = "http://127.0.0.1:3000/mcp"
  unsafe.permissions.networkDomains = ["127.0.0.1"]
  writeFileSync(unsafePath, JSON.stringify(unsafe))
  const invalid = await run("node", ["skills/xopc-connector-builder/scripts/validate-manifest.mjs", unsafePath])
  assert(invalid.code !== 0, "unsafe loopback connector was accepted")

  const server = createServer(async (request, response) => {
    if (request.url === "/v1/models") {
      response.setHeader("content-type", "application/json")
      response.end(JSON.stringify({ object: "list", data: [{ id: "xopc/test-model" }] }))
      return
    }
    if (request.url === "/v1/chat/completions" && request.method === "POST") {
      let body = ""
      for await (const chunk of request) body += chunk
      const parsed = JSON.parse(body)
      if (parsed.stream) {
        response.setHeader("content-type", "text/event-stream")
        response.end('data: {"choices":[{"delta":{"content":"OK"}}]}\n\ndata: [DONE]\n\n')
      } else {
        response.setHeader("content-type", "application/json")
        response.end(JSON.stringify({ model: parsed.model, choices: [{ message: { role: "assistant", content: "OK" } }] }))
      }
      return
    }
    response.statusCode = 404
    response.end()
  })
  await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen))
  const address = server.address()
  const base = `http://127.0.0.1:${address.port}/v1`
  const env = { ...process.env, XOPC_ACCESS_TOKEN: "test-secret-must-not-leak" }
  const checks = [
    ["--models-only"],
    ["--model", "xopc/test-model", "--allow-request"],
    ["--model", "xopc/test-model", "--stream", "--allow-request"]
  ]
  for (const extra of checks) {
    const result = await run("node", ["skills/xopc-model-gateway/scripts/smoke-test.mjs", "--base-url", base, ...extra], { env })
    assert(result.code === 0, `gateway smoke test failed: ${result.stderr}`)
    assert(!`${result.stdout}${result.stderr}`.includes(env.XOPC_ACCESS_TOKEN), "gateway smoke test leaked the token")
  }
  await new Promise((resolveClose) => server.close(resolveClose))

  console.log("Skill script tests passed: client detection, connector safety, model discovery, completion, and streaming.")
} finally {
  rmSync(temp, { recursive: true, force: true })
}
