# Scenario Brief: build-production-mcp-server

## User and outcome

Developers need to expose an external service to agents through an MCP server whose tools are discoverable, bounded, safe, and useful in real workflows.

## Boundaries

- Not XOPC Connector packaging or a mechanical copy of every REST endpoint.
- External writes remain explicit and authorized; credentials never enter results.
- Protocol, SDK, mock, and live verification are reported separately.

## Evaluation

Fixtures cover discovery, pagination, ambiguous identity, expired auth, rate limits, write preview, partial failure, and a fresh-agent end-to-end task.
