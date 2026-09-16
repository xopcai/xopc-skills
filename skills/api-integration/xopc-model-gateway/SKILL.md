---
name: xopc-model-gateway
description: Migrate an existing OpenAI-compatible application to the XOPC Model Gateway and verify model discovery, authentication, non-streaming, and streaming behavior. Use when a developer asks to switch an existing AI client, base URL, or model call to XOPC; do not use for provider administration or general model recommendations.
license: MIT
metadata:
  author: XOPC
  version: "0.18.0"
---

# XOPC Model Gateway Migration

Move one existing application path to XOPC with the smallest safe change, then prove it works. Preserve the user's SDK, architecture, request shape, and selected billing tier unless incompatibility requires a documented change.

## Workflow

1. Discover existing clients and call sites. Run `node scripts/detect-ai-clients.mjs <project-root>` when manual inspection would be incomplete.
2. Confirm the requested call path, language, SDK, protocol, model, streaming behavior, and success criteria. Do not broaden a text migration into image/audio migration.
3. Read [references/protocol.md](references/protocol.md) for endpoint and SDK configuration. Read [references/errors.md](references/errors.md) only when a request fails.
4. Plan a minimal diff. Keep credentials in environment variables or the user's existing secret manager. Never place an access token in source, fixtures, shell history examples, logs, or the final response.
5. Modify only the authorized call path. Do not silently replace a free model with a metered model or remove unsupported parameters without explaining the compatibility decision.
6. Run existing tests. Validate model discovery first, then a bounded real request only after the user has authorized quota or cost consumption:

   ```bash
   XOPC_ACCESS_TOKEN=... node scripts/smoke-test.mjs --models-only
   XOPC_ACCESS_TOKEN=... node scripts/smoke-test.mjs --model <model-id> --allow-request
   XOPC_ACCESS_TOKEN=... node scripts/smoke-test.mjs --model <model-id> --stream --allow-request
   ```

7. Report the files changed, exact checks run, evidence obtained, and any unverified behavior. Never claim success from configuration inspection alone.

## Safety boundaries

- OAuth access tokens are short-lived secrets. Ask the user to complete authorization through the supported client or console; do not ask them to paste a token into ordinary chat.
- A live completion can consume quota or credits. Model listing is not permission to send a completion.
- Diagnose authentication, catalog, quota, compatibility, and upstream failures separately; do not retry mutations or paid requests indefinitely.
- Stop after two unchanged failures from the same class. Preserve the response status/request identifier and ask for the missing authority or product-state change.

## Deliverable

Provide a compatibility inventory, minimal diff, secret-safe configuration example, validation results for the behaviors the application actually uses, and a concise unresolved-risk section.
