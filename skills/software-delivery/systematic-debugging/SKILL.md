---
name: systematic-debugging
description: Diagnose a reproducible software defect, failing test, build failure, integration error, or performance regression through evidence, competing hypotheses, and minimal experiments before changing code. Do not use for feature implementation, routine code review, or unexplained fixes without reproduction evidence.
metadata:
  version: "0.18.2"
---

# Systematic Debugging

Find the earliest supported cause before choosing a fix. A plausible explanation is not a root cause until an experiment distinguishes it from alternatives.

## Respect task scope

If the user asks only for diagnosis, stop after the causal explanation and proposed validation. Implement a fix only when the request includes fixing it. Do not expose secrets, production data, or customer payloads while adding diagnostics.

## 1. Reproduce and bound

- Capture the exact command, input, environment, expected result, and observed result.
- Read the complete error and stack, including the first relevant failure rather than only the final wrapper.
- Determine frequency and the smallest known reproduction.
- Compare environments and recent changes without assuming the newest change is causal.
- If reproduction is impossible, define the evidence needed next instead of guessing.

## 2. Locate the failing boundary

Trace the value, state, or control flow backward from the failure. In multi-component systems, inspect what crosses each boundary—request, config, credential presence, serialization, response, and persisted state—using redacted diagnostics.

Find a nearby working example and list meaningful differences. Read [the evidence guide](references/debugging-evidence.md) when the failure crosses services, processes, queues, or CI stages.

## 3. Test one hypothesis at a time

Write the hypothesis in falsifiable form: “X causes Y because Z; if true, changing or observing A should produce B.” Rank alternatives by evidence, not convenience.

Run the smallest safe experiment that separates the leading hypothesis from the next one. Change one variable. Record the result. A failed experiment updates the hypothesis; it does not justify stacking speculative fixes.

Stop and request more context when the next experiment requires production mutation, elevated access, material cost, or data outside the user's authorization.

## 4. Fix at the cause

When authorized to fix:

- create the smallest regression test or deterministic reproduction first;
- change the source of the invalid state, not only the line that crashes;
- avoid bundled cleanup and unrelated refactors;
- re-run the focused reproduction and relevant surrounding tests;
- verify the original symptom, not just the new unit test.

If repeated minimal hypotheses fail, step back and re-check assumptions, environment, and component boundaries. Do not increase patch size to compensate for weak evidence.

## Report

Provide reproduction status, observations, ruled-out hypotheses, root cause with confidence, fix or next experiment, verification evidence, and remaining uncertainty. Clearly distinguish facts from inference.
