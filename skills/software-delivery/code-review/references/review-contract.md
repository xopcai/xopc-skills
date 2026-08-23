# Review contract

## Severity

- **P0 — release blocking:** reliable data loss, security compromise, destructive behavior, or broad outage in ordinary use.
- **P1 — high:** core behavior is wrong or unavailable for a supported path, with no safe workaround.
- **P2 — medium:** a real defect or maintainability risk affects a narrower path or has a practical workaround.
- **P3 — low:** bounded correctness, clarity, or test weakness worth fixing but unlikely to disrupt ordinary use.

Severity reflects demonstrated impact and likelihood, not reviewer preference. If either is unknown, lower confidence rather than inflating severity.

## Actionable finding test

A finding is ready only when another engineer can answer all four questions:

1. Which changed line or behavior introduces the problem?
2. Under what input, state, environment, or sequence does it occur?
3. What user, system, or maintenance impact follows?
4. What requirement, invariant, or repository standard should hold instead?
