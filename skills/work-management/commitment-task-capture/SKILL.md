---
name: commitment-task-capture
description: Extract concrete asks, commitments, owners, deadlines, blockers, and evidence from bounded email, chat, meeting, or document sources. Use to build an auditable task intake or follow-up list; do not use for general summaries, project status reports, or silent task creation.
metadata:
  version: "0.18.2"
---

# Commitment Task Capture

First bound the source set by thread, channel, meeting, document collection, topic, or time window. Read enough surrounding context to distinguish a real commitment from a suggestion, status update, or quoted historical task.

Extract only actionable records. For each record capture task, owner, due date, status, blocker or dependency, and source evidence. Mark owner or due date as unknown when not explicit. Preserve the original timezone and distinguish an explicit deadline from inferred urgency.

Merge references to the same commitment when their objective and owner match; retain the freshest status and all useful evidence. Keep records separate when scope, owner, or deliverable differs. Separate tasks owned by the user from tasks owned by others and from items merely awaiting confirmation.

Return an intake table followed by ambiguities and a proposed writeback plan. If no concrete commitment exists, say so. Creating, assigning, updating, or notifying through a task system requires explicit confirmation of the target records and destination; extraction alone never authorizes writes.

Do not invent owners, dates, or completion state. Do not convert every recommendation into a task, and do not hide conflicts between a newer update and an older commitment.
