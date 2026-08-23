# Scenario Brief: review-code-change-against-spec

## User and outcome

Engineers need an evidence-based review of a bounded diff before merge. The output is an ordered set of actionable findings tied to changed lines, repository standards, and the originating requirement.

Success means real correctness and scope defects are found without style noise, severity matches demonstrated impact, missing specification or test evidence is explicit, and review does not mutate the code.

## Boundaries

- Not a whole-codebase audit, implementation request, or automatic fix workflow.
- Repository rules override generic preferences; automated-lint findings are not repeated without added impact.
- The fixed point and diff scope must be explicit or safely inferred and reported.

## Evaluation

Fixtures include wrong-but-well-styled code, correct-but-nonconforming code, missing spec, empty diff, working-tree review, and false-positive traps. Human review measures precision, recall, evidence, and severity calibration.
