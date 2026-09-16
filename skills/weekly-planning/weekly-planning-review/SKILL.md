---
name: weekly-planning-review
description: Review a person's current commitments, calendar constraints, waiting items, and projects to close open loops and produce a capacity-feasible next-week plan. Use for weekly reset and planning; do not use for team retrospectives, daily task execution, or silent calendar/task mutations.
license: MIT
metadata:
  author: XOPC, adapted from Alireza Rezvani
  version: "0.18.2"
---

# Weekly Planning Review

Restore trust in the user's system, then plan only what fits.

## Workflow

1. Establish the review period, timezone, working days, fixed commitments, protected personal constraints, task/project sources, and desired planning horizon. Read only the locations the user placed in scope.
2. Get clear: collect loose inputs and open loops from supplied notes, tasks, messages, and files. Route each to next action, waiting, scheduled, someday, reference, or drop; do not do substantial tasks during the review.
3. Get current: review completed work, missed commitments, upcoming calendar, waiting items, and every active project. Each active project needs one concrete next action or an explicit hold/drop decision.
4. Compute usable capacity from working time minus meetings, fixed duties, buffers, and protected constraints. Compare calibrated effort—when available—with capacity. Do not solve overload by stacking more work.
5. Resolve overload by dropping, delegating, shrinking, or renegotiating specific commitments. Preserve user ownership of consequential trade-offs.
6. Get forward: select weekly outcomes, next actions, focus blocks, follow-ups, and a review checkpoint. Read [references/review-contract.md](references/review-contract.md).
7. Deliver the review and a proposed write-back plan. Create or change tasks/calendar entries only after the user approves exact items and destinations; verify any approved writes.

## Completion gate

A review is incomplete if active projects lack next actions, overdue commitments have no disposition, waiting items have no follow-up/drop decision, or planned effort exceeds capacity without an explicit trade-off.

## Hard boundaries

- Do not shame, diagnose, or treat exhaustion as a scheduling defect.
- Do not infer personal priorities from passive data or silently delete stale work.
- Do not mutate calendars, task systems, or files without approval.
- Team sprint retrospectives and project postmortems are separate workflows.

## Attribution

Adapted from Alireza Rezvani's MIT-licensed `weekly-review` Skill. XOPC preserves the clear/current/forward loop while adding capacity arithmetic, protected constraints, explicit overload trade-offs, scoped data access, and approval-before-write behavior.
