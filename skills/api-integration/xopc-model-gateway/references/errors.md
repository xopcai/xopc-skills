# XOPC migration error routing

Classify with response evidence before changing code.

| Signal | Likely class | Next check |
|---|---|---|
| 401 | Authentication | Token presence, expiry, audience/scope, Bearer header; never print token |
| 403 | Authorization | Grant/scope or account status; do not work around with another credential |
| 404 on model/request | Catalog or path | Confirm `/v1`, protocol route, and live model ID |
| 409/422 | Request compatibility | Compare rejected field and selected model capability |
| 429 | Quota/rate limit | Respect `Retry-After`; stop bounded retries and report quota state |
| 5xx | Gateway/upstream | Preserve request ID and timing; retry only idempotent requests with a bound |
| stream begins but never completes | Streaming contract | Inspect terminal event, abort/timeout, proxy buffering, and upstream failure event |

Do not convert an unknown failure into “model unavailable” without catalog or response evidence. Do not expose response bodies that may contain user prompts or provider details in public logs.
