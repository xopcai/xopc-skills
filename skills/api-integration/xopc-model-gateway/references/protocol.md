# XOPC Model Gateway protocol

Observed from the XOPC platform source on 2026-08-23. Verify changing product details against current XOPC documentation before editing production code.

## Public API

- API base URL: `https://router.xopc.ai/v1`
- Authentication: `Authorization: Bearer <OAuth access token>`
- Model discovery: `GET /v1/models`
- Chat Completions: `POST /v1/chat/completions`
- Responses: `POST /v1/responses`

The gateway also contains image and audio compatibility surfaces, but v0.1 of this Skill intentionally covers language-model migrations only.

## Existing OpenAI SDK

Prefer configuring the installed SDK instead of replacing it. Typical JavaScript and Python clients accept a base URL and API key/token. Match the installed SDK version and its actual option names before editing.

Use `XOPC_BASE_URL` and `XOPC_ACCESS_TOKEN` in examples unless the repository already has a secret naming convention. Do not reuse `OPENAI_API_KEY` when doing so could accidentally route the same secret to the original provider.

## Compatibility checklist

- Locate every constructor and wrapper that can override the base URL.
- Confirm whether the application uses Chat Completions or Responses; do not migrate between protocols unless necessary.
- Query the model catalog instead of inventing or hard-coding a model ID.
- Preserve tool calls, structured output, reasoning options, and streaming only when the selected public model advertises or successfully demonstrates them.
- For streaming, verify the terminal event and error path, not only the first token.
- Preserve request timeouts and abort handling.
