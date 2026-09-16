---
name: xopc-connector-builder
description: Design and validate a least-privilege XOPC Connector manifest for a remote HTTPS MCP service or an explicitly reviewed pinned npm MCP package. Use when packaging an MCP service for the XOPC catalog; do not use to implement the MCP server itself or publish without review.
license: MIT
metadata:
  author: XOPC
  version: "0.18.0"
---

# XOPC Connector Builder

Produce a reviewable connector package whose declared authentication, permissions, endpoint, and runtime match the service users will actually install.

## Workflow

1. Establish the service owner, canonical MCP endpoint, transport, exposed tools/resources, authentication mode, credential scope, data touched, and rollback contact. Do not infer permissions from marketing pages.
2. Choose a runtime:
   - Prefer a provider-maintained public HTTPS MCP endpoint using `streamable-http` or `sse`.
   - Use local stdio only for an explicitly reviewed npm package pinned to an exact version and invoked exactly through `npx --yes <package>@<version>`.
3. Read [references/manifest-contract.md](references/manifest-contract.md). For a remote API-key service, start from `assets/remote-api-key/xopc.connector.json` and replace every example value.
4. Declare only the setup fields and permissions the connector uses. Template placeholders must be complete values such as `{{secrets.apiKey}}`; never interpolate secrets into larger strings.
5. Validate before packaging:

   ```bash
   node scripts/validate-manifest.mjs /path/to/xopc.connector.json
   ```

6. Manually inspect the endpoint identity and the post-install MCP tool list. Compare actual tools and credential scopes with `permissions.data`.
7. Present the manifest, validation evidence, permission summary, unresolved risks, and rollback owner. Publishing or approving is a separate externally mutating step requiring explicit authorization.

## Hard boundaries

- Remote endpoints must be public HTTPS hosts. Reject loopback, `.localhost`, credentials in URLs, and IP literals.
- Remote connectors cannot define commands, process arguments, environment variables, working directories, or filesystem access.
- Do not publish OAuth connectors until the XOPC shared OAuth broker supports that flow.
- Never bundle executable code inside a connector archive.
- Do not describe “read-only” access unless the observed MCP tools and credential scope enforce it.
