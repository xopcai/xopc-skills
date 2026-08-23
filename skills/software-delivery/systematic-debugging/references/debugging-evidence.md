# Debugging evidence across boundaries

For each boundary, capture only what is necessary to locate the transition from valid to invalid state:

| Boundary | Useful evidence | Avoid |
|---|---|---|
| client → API | method, path template, status, schema, correlation ID | tokens, raw personal data |
| service → service | destination, timeout, retry count, redacted payload shape | full request bodies by default |
| app → database | query shape, transaction state, row counts, plan | production writes or unrestricted dumps |
| CI → build | step, exit code, tool versions, variable presence | printing secret values |
| queue → worker | message type, age, attempt, idempotency key | replaying production work without approval |

Prefer correlation IDs, hashes, counts, and schema summaries over raw sensitive values. Remove temporary instrumentation added for the investigation unless the user asks to retain an approved diagnostic.
