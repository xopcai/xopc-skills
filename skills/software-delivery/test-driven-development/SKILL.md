---
name: test-driven-development
description: Implement a behavior change through a verified red-green-refactor loop when the user requests test-driven development or the repository requires it. Do not trigger for general implementation requests that do not select TDD.
metadata:
  version: "0.18.0"
---

# Test-Driven Development

Use TDD when the user requests it or repository policy requires it. Preserve existing user work; do not delete prior implementation merely because it was not test-first.

## Red

Choose one observable behavior and write the smallest test that expresses it through the appropriate public interface. Run that focused test and confirm it fails for the expected behavioral reason—not a syntax, fixture, dependency, or environment error. If it already passes, refine the test or record that the behavior exists.

## Green

Make the smallest production change that satisfies the failing behavior. Run the focused test, then the relevant surrounding suite. Do not add speculative options or unrelated refactors while establishing green.

## Refactor

Improve names and structure only while tests remain green. Repeat with the next behavior. Prefer real collaborators and boundary fakes; use mocks where an external seam would otherwise make the test slow, nondeterministic, or unsafe.

Report each meaningful red and green command, the observed failure reason, the implementation boundary changed, and the final focused plus regression evidence. If the environment prevents a real red-green cycle, say exactly what was not observed.
