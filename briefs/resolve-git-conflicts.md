# Scenario Brief: resolve-git-conflicts

## Outcome

Resolve an in-progress Git merge, rebase, cherry-pick, or revert conflict by recovering each side's intent, choosing an evidence-backed result, and verifying repository integrity.

## Boundaries

- One primary result and a bounded evidence scope.
- No invented product decisions or silent external mutations.
- Destructive or externally visible actions require explicit authorization.

## Evaluation

Fixtures cover ambiguous intent, incomplete evidence, adjacent Skill requests, user-owned changes, validation failures, and unauthorized writes.
