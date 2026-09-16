---
name: mcp-server-builder
description: Design, implement, and evaluate an MCP server that exposes an external service through discoverable, bounded tools. Use for new or substantially revised MCP servers; do not use for packaging an existing server as an XOPC Connector.
metadata:
  version: "0.18.2"
---

# MCP Server Builder

Build an MCP server around the user journeys the agent must complete, not as a mechanical API wrapper.

## Define the contract

Identify the target service, authentication model, supported clients, transport, and the highest-value read and write journeys. Prefer composable resource-oriented tools, adding workflow tools only where several API calls form a stable user operation.

For every tool define its action-oriented name, concise description, required and optional inputs, bounded output, errors, pagination, and side effects. Separate discovery, read, draft/preview, and mutation operations. Never hide a write behind a broad `fix`, `sync`, or `run` tool.

## Implement safely

- Use the current official MCP SDK for the selected language and verify its version from authoritative documentation.
- Use stdio for local servers and Streamable HTTP for remote services unless the target environment requires otherwise.
- Keep credentials in the host environment or approved secret store; never return them in tool results or logs.
- Validate inputs at the tool boundary. Set timeouts, bound pagination and payload size, and return actionable structured errors.
- Require explicit user authorization immediately before consequential external writes; a prior read request is not authorization to mutate.

## Evaluate as an agent interface

Exercise realistic multi-step tasks, ambiguous lookup, empty results, pagination, expired authentication, rate limits, partial failure, and write confirmation. Check whether a fresh agent can discover the correct tool from names and descriptions without reading server source.

Deliver the server, setup instructions, tool inventory, permission model, evaluation cases, and evidence from protocol inspection plus task runs. Clearly distinguish mocked, local, and live verification.
