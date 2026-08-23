# Scenario Brief: diagnose-software-defect

## User and outcome

Developers facing a bug, failing test, build error, integration failure, or performance regression need a causal diagnosis and—when requested—a minimal verified fix.

Success means the defect is reproduced or explicitly bounded, observations are separated from hypotheses, an experiment distinguishes alternatives, the root cause explains the symptom, and verification exercises the original failure.

## Boundaries

- Diagnosis does not imply authorization to edit code or mutate production.
- Sensitive diagnostic values are redacted; live probing and elevated access need explicit scope.
- Feature implementation, general review, and speculative “try this” advice are near misses.

## Evaluation

Fixtures cover a stack-trace defect, intermittent race, cross-service config loss, CI-only failure, performance regression, and unavailable reproduction. Grading checks hypothesis falsifiability, minimal experiments, authorization, and root-cause evidence.
