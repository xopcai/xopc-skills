# API integration

## User outcome

Connect an application or service to XOPC with a verified protocol, minimal permissions, safe credential handling, and deterministic smoke tests.

## Selected Skills

- `xopc-model-gateway` — XOPC-original migration and validation for OpenAI-compatible model clients.
- `xopc-connector-builder` — XOPC-original manifest, permission, transport, and safety workflow for MCP connectors.
- `mcp-server-builder` — adapted from Anthropic; designs, implements, and evaluates the MCP server behind a service integration.

## Boundary and overlap

The model Skill owns model API compatibility; the connector Skill packages an existing MCP endpoint; the server builder creates the endpoint and its agent-facing tool contract. They do not deploy arbitrary infrastructure or expose local services automatically.

## Evaluated alternatives

- Generic API and OpenAPI Skills remain references; the adopted MCP builder complements rather than replaces product-specific Connector contracts.
- Add a new integration Skill only when its protocol, permission boundary, and verification artifact differ from both existing Skills.
