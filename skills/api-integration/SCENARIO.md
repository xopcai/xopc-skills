# API integration

## User outcome

Connect an application or service to XOPC with a verified protocol, minimal permissions, safe credential handling, and deterministic smoke tests.

## Selected Skills

- `xopc-model-gateway` — XOPC-original migration and validation for OpenAI-compatible model clients.
- `xopc-connector-builder` — XOPC-original manifest, permission, transport, and safety workflow for MCP connectors.

## Boundary and overlap

The model Skill owns model API compatibility; the connector Skill owns tool-service packaging and permissions. They do not design the user's business workflow, deploy arbitrary infrastructure, or expose local services automatically.

## Evaluated alternatives

- Generic API, OpenAPI, and MCP-builder Skills are useful upstream references, but cannot replace product-specific protocol and security contracts.
- Add a new integration Skill only when its protocol, permission boundary, and verification artifact differ from both existing Skills.
