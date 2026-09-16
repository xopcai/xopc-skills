---
name: spec-to-work-items
description: Turn an approved product or engineering specification into small, independently verifiable work items with acceptance criteria, dependencies, and delivery order. Use for implementation breakdown and tracker-ready drafts; do not use to discover requirements, extract existing commitments, implement the work, or silently publish tickets.
metadata:
  version: "0.18.1"
---

# Spec to Work Items

Start from an approved specification, plan, or decision record and identify its outcomes, non-goals, constraints, unresolved questions, affected systems, and acceptance evidence. If requirements are still materially undecided, return the gaps instead of disguising them as tasks.

Inspect the relevant code or operating context when available so work items use the project's vocabulary and reflect real boundaries. Prefer narrow vertical slices that deliver observable behavior through all required layers. Each item must be independently demonstrable or verifiable, sized for one focused implementation context, and explicit about what it does not include.

Represent dependencies as a directed acyclic graph. A dependency exists only when one deliverable truly prevents another from starting or validating. Keep independent work parallel. For wide migrations that cannot remain green as one vertical slice, use expand, migrate in bounded batches, verify, then contract.

Return a numbered work-item set with outcome, acceptance criteria, blocked-by edges, validation method, risks, and open questions, followed by the executable frontier. Check for missing scope, circular dependencies, horizontal layer-only tickets, duplicate outcomes, and oversized items.

Drafting does not authorize creating tracker issues, assigning people, setting dates, or modifying a parent item. Publish only after the user approves the breakdown and destination.
