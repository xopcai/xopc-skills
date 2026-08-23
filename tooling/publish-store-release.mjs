#!/usr/bin/env node
import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const args = process.argv.slice(2)
const publish = args.includes("--publish")
const fileArg = args.find((arg) => !arg.startsWith("--"))
if (!publish) throw new Error("Refusing to publish without --publish")
if (!fileArg) throw new Error("Release bundle path is required")
const apiBase = process.env.XOPC_API_BASE?.replace(/\/$/, "")
const apiKey = process.env.XOPC_API_KEY
if (!apiBase || !apiKey) throw new Error("XOPC_API_BASE and XOPC_API_KEY are required")
const file = resolve(fileArg)
const form = new FormData()
form.set("file", new Blob([Uint8Array.from(readFileSync(file))], { type: "application/zip" }), "xopc-skills-release.zip")
const response = await fetch(`${apiBase}/api/v1/admin/official-skills/releases`, {
  method: "POST",
  headers: { "x-api-key": apiKey },
  body: form,
})
const body = await response.text()
if (!response.ok) throw new Error(`Store publish failed (${response.status}): ${body}`)
console.log(body)
