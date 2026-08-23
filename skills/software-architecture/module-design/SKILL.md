---
name: module-design
description: Design or improve a bounded software module so it has a small stable interface, clear seams, local complexity, and realistic test adapters. Use for module boundaries and interface redesign; do not use for ordinary code review or system-wide architecture strategy.
metadata:
  version: "0.4.0"
---

# Module Design

Design a deep module: substantial useful behavior behind a small interface that callers and tests can use without learning the implementation.

## Analyze the current shape

Identify callers, interface obligations, hidden ordering and error contracts, duplicated decisions, dependency construction, and change patterns. Use the deletion test: if deleting the module merely removes a pass-through, it is shallow; if important complexity spreads back across callers, it is earning its boundary.

## Place the seam

Introduce a seam only where behavior actually varies, a side effect needs isolation, or change locality improves. Accept dependencies at the boundary instead of constructing them invisibly. Keep internal seams private; do not expose implementation structure as caller configuration. Prefer one coherent operation over many leaky methods.

## Validate the design

Show the proposed interface, invariants, errors, performance obligations, adapters, migration sequence, and examples from real callers. Test through the public interface using realistic adapters; mocks are appropriate only at true external seams. Compare before and after using interface size, duplicated caller logic, blast radius, and test clarity. Do not implement a broad migration unless the user asks for it.
