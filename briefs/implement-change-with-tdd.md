# Scenario Brief: implement-change-with-tdd

## User and outcome

Engineers explicitly choosing TDD need observable evidence that each test failed for the intended missing behavior before the minimal implementation made it pass.

## Boundaries

- Does not automatically activate for every implementation task.
- Preserves existing user work and repository conventions.
- Environment failures are not counted as a red test.

## Evaluation

Fixtures cover already-passing tests, wrong failure reasons, legacy code, external seams, regression failures, and environments where the red phase cannot run.
