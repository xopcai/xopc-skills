---
name: merge-conflict-resolution
description: Resolve an in-progress Git merge, rebase, cherry-pick, or revert conflict by recovering each side's intent, choosing an evidence-backed result, and verifying repository integrity. Use only when Git reports conflicts; do not use for ordinary code review, unrelated test failures, force pushes, or silently discarding either side.
metadata:
  version: "0.18.0"
---

# Merge Conflict Resolution

Confirm the repository, operation in progress, conflicted paths, current branch or detached state, and intended integration target. Inspect status, the merge base, relevant commits, surrounding code, tests, issue or PR context, and repository instructions before editing.

Resolve each hunk from intent rather than marker position. Preserve compatible behavior from both sides. When intents conflict, choose the result that matches the stated integration goal and record the trade-off; ask when that choice would change product behavior. Regenerate lockfiles or generated artifacts from their sources instead of hand-merging them when the repository provides a deterministic generator.

After edits, ensure no conflict markers or unmerged index entries remain. Review the complete staged diff, run formatting and the smallest relevant checks, then broaden validation according to risk. Do not stage unrelated user changes.

Continue the merge, rebase, cherry-pick, or revert only when resolution of the active operation is requested and validation passes. Aborting, skipping commits, rewriting published history, force-pushing, or deleting work requires explicit authorization.

Return the operation and scope, per-file intent decision, validation evidence, unresolved choices, and resulting Git state. Never claim semantic correctness from a clean index alone.
