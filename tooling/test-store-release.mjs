#!/usr/bin/env node
import { createHash } from "node:crypto"
import { spawnSync } from "node:child_process"
import { mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

const temp = mkdtempSync(join(tmpdir(), "xopc-release-test-"))
const commit = "a".repeat(40)
try {
  const outputs = [join(temp, "one.zip"), join(temp, "two.zip")]
  for (const output of outputs) {
    const result = spawnSync(process.execPath, ["tooling/build-store-release.mjs", "--commit", commit, "--out", output], { encoding: "utf8" })
    if (result.status !== 0) throw new Error(result.stderr || result.stdout)
  }
  const hash = (file) => createHash("sha256").update(readFileSync(file)).digest("hex")
  if (hash(outputs[0]) !== hash(outputs[1])) throw new Error("Store release build is not deterministic")
  console.log("Store release test passed: two builds are byte-identical.")
} finally {
  rmSync(temp, { recursive: true, force: true })
}
