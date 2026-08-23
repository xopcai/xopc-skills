# Scenario Brief: threat-model-software-system

## User and outcome

Engineering and security teams need a concise threat model grounded in a repository and its deployment assumptions. The output connects trust boundaries and assets to realistic abuse paths, priorities, and testable mitigations.

Success means architectural claims cite evidence, attacker capabilities are calibrated, each threat has a concrete path and impact, existing controls are distinguished from recommendations, and uncertainty remains visible.

## Boundaries

- Explicit threat-model requests only; not a vulnerability scan, penetration test, compliance certification, or generic architecture summary.
- Starts read-only and does not exercise live exploit paths.
- Missing exposure, identity, tenancy, or data context is clarified only when it changes ranking.

## Evaluation

Fixtures cover a multi-tenant API, local CLI, file upload service, background worker, incomplete deployment context, and a prompt asking for certification. Security review measures coverage, evidence, prioritization, and non-overclaiming.
