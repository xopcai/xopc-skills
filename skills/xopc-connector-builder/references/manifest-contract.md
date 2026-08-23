# XOPC Connector manifest contract

Observed from the XOPC Store scanner and platform documentation on 2026-08-23. The Store runtime repeats URL, checksum and permission checks during installation.

## Required top-level fields

- `id`: lowercase package name; must equal the published package name.
- `displayName`, `description`, `category`.
- `capabilities`: at least one supported capability.
- `auth.mode`: `none`, `apiKey`, or `oauth`.
- `permissions`: data, network, local execution, and filesystem declaration.
- `runtime.type`: `mcp`, with `serverId` and `serverTemplate`.

Supported categories: `code`, `docs`, `browser`, `data`, `automation`, `custom`.

Supported capabilities: `tools`, `resources`, `prompts`, `context`, `events`, `auth.apiKey`, `auth.oauth`, `runtime.mcp.stdio`, `runtime.mcp.sse`, `runtime.mcp.streamableHttp`.

## Remote runtime

- `serverTemplate.url`: public HTTPS URL.
- `serverTemplate.transport`: `streamable-http` or `sse`.
- `permissions.localExec`: `false`.
- `permissions.filesystem`: empty array.
- `permissions.networkDomains`: contains the exact endpoint hostname.
- No `command`, `args`, `env`, `cwd`, or `workingDirectory`.

## Local reviewed npm runtime

- `runtime.localPackage.registry`: `npm`.
- Exact package `name` and semantic `version`.
- `serverTemplate.command`: `npx`.
- `serverTemplate.args`: exactly `["--yes", "<name>@<version>"]`.
- `permissions.localExec`: `true`; filesystem remains an empty array.

## Setup fields and placeholders

`setup.secrets` and `setup.config` fields require unique keys and labels. Config fields declare one of `string`, `number`, `boolean`, `json`, or `path`.

References must point to declared fields and occupy the complete value:

```json
"Authorization": "{{secrets.apiKey}}"
```

Do not put credentials directly in the manifest.
