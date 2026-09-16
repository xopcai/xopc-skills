---
name: agent-cli-builder
description: Design and build a durable agent-friendly CLI for a repeated local workflow or external service. Use when the user wants a reusable command-line product with stable JSON and safe write operations; do not use for one-off scripts or MCP servers.
metadata:
  version: "0.18.0"
---

# Agent CLI Builder

Design around repeated user jobs, not a thin collection of endpoints. Inspect the source service, existing SDKs, authentication, target machines, and installed toolchains before choosing a runtime.

## Command contract

Provide:

- complete `--help` and a machine-readable `doctor` command;
- discovery and resolve commands that turn human names or URLs into stable IDs;
- bounded list/read/search commands with pagination;
- narrowly named write commands with preview or `--dry-run` when feasible;
- stable `--json` success and error shapes;
- an explicit raw escape hatch without making it the only interface.

Prefer environment variables or user config for credentials. Never expose secrets in arguments, output, logs, or process listings. Writes must be recognizable from the command name and must not be smuggled into `sync`, `fix`, or `auto` operations.

## Delivery

Implement using the least surprising installed toolchain or the project's existing language. Add unit tests for parsing and output contracts, integration fixtures for external calls, and smoke tests for install, help, doctor, reads, preview, and error paths. Deliver installation and uninstall instructions plus examples for discovery, read, and write workflows.
