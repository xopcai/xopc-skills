#!/usr/bin/env node

const args = process.argv.slice(2)
const value = (name) => {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : undefined
}
const baseUrl = (value("--base-url") ?? "https://router.xopc.ai/v1").replace(/\/$/, "")
const token = process.env.XOPC_ACCESS_TOKEN
const model = value("--model")
const modelsOnly = args.includes("--models-only")
const stream = args.includes("--stream")

if (!token) throw new Error("XOPC_ACCESS_TOKEN is required and is never printed")
if (!modelsOnly && !args.includes("--allow-request")) throw new Error("A completion may consume quota; pass --allow-request after authorization")
if (!modelsOnly && !model) throw new Error("--model is required for a completion; select it from /models")

async function request(path, init = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json", ...init.headers },
    signal: AbortSignal.timeout(30_000)
  })
  if (!response.ok) {
    const requestId = response.headers.get("x-request-id") ?? response.headers.get("request-id")
    throw new Error(`HTTP ${response.status}${requestId ? ` request-id=${requestId}` : ""}`)
  }
  return response
}

const modelsResponse = await request("/models")
const models = await modelsResponse.json()
const ids = Array.isArray(models.data) ? models.data.map((item) => item?.id).filter(Boolean) : []
console.log(JSON.stringify({ check: "models", ok: true, count: ids.length, selectedModelPresent: model ? ids.includes(model) : undefined }))
if (modelsOnly) process.exit(0)
if (!ids.includes(model)) throw new Error(`Model '${model}' is not present in the current catalog`)

const response = await request("/chat/completions", {
  method: "POST",
  body: JSON.stringify({ model, messages: [{ role: "user", content: "Reply with OK." }], max_tokens: 8, stream })
})

if (!stream) {
  const body = await response.json()
  if (!Array.isArray(body.choices) || body.choices.length === 0) throw new Error("Completion response has no choices")
  console.log(JSON.stringify({ check: "chat-completions", ok: true, stream: false, model: body.model ?? model }))
} else {
  const text = await response.text()
  const done = text.split(/\r?\n/).some((line) => line.trim() === "data: [DONE]")
  if (!done) throw new Error("Streaming response did not contain the terminal [DONE] event")
  console.log(JSON.stringify({ check: "chat-completions", ok: true, stream: true, terminalEvent: true, model }))
}
