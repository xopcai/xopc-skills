---
name: decision-prototype
description: Build a deliberately throwaway interactive prototype to answer one product, workflow, state-model, or interface decision before production implementation. Use when learning is the deliverable; do not use for production-ready features, general frontend design, architecture documentation, or prototypes that mutate live data.
metadata:
  version: "0.18.0"
---

# Decision Prototype

State one decision question and the evidence that would answer it. Choose the smallest prototype shape that exposes the uncertainty: a self-contained logic simulator for state or workflow behavior, or a few structurally different interface variants for a visual or interaction choice. If the question is already answerable from existing evidence, do not build code.

Mark the artifact as a prototype and keep it isolated from production entry points. Make it trivial to run, use representative but non-sensitive sample data, keep state in memory, and stub every mutation. A logic prototype should expose full relevant state and awkward scenarios in domain language. An interface prototype should compare genuinely different information hierarchies or interactions, not color variations.

Skip production abstractions, persistence, broad error handling, deployment, and unrelated polish. Add only enough instrumentation for a reviewer to observe the decision. Verify that the artifact runs, every scenario or variant is reachable, and no production or external system is modified.

Return the decision question, prototype location and run method, tested scenarios or variants, observations, verdict, remaining uncertainty, and a cleanup or promotion plan. Production implementation must re-establish normal testing, security, accessibility, and maintainability standards; do not merge throwaway scaffolding as production code.

Removing the prototype or promoting any part of it requires review of what evidence would be lost.
