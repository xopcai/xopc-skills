# Scenario Brief: build-agent-friendly-cli

## User and outcome

Developers need a durable CLI that humans and agents can discover, compose, parse, diagnose, and operate safely across repeated workflows.

## Boundaries

- Not a one-off script, MCP server, or hidden automation daemon.
- Credentials are never accepted through unsafe defaults.
- Writes are narrowly named and previewable where possible.

## Evaluation

Fixtures cover installation, help, doctor, name-to-ID resolution, pagination, JSON compatibility, offline errors, dry run, and uninstall.
