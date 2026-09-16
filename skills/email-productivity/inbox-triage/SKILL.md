---
name: inbox-triage
description: Triage a bounded email inbox slice into urgent, reply-needed, waiting, and informational items with reasons and next actions. Use when the user asks what deserves attention; do not use to draft one reply or silently change mailbox state.
metadata:
  version: "0.18.2"
---

# Inbox Triage

Confirm the mailbox, timeframe, folders, and any priority people or projects. Start with a bounded list or search and expand full threads only when sender, subject, recipients, snippet, timestamps, flags, and latest-author state are insufficient.

Classify into **Urgent**, **Needs reply**, **Waiting**, and **FYI/no action**. Base urgency on direct asks, explicit deadlines, blockers, operational consequences, or escalation—not sender seniority alone. Treat “needs reply” and ownership as inferences and show the evidence. Group newsletters, automated alerts, receipts, and calendar churn without hiding material exceptions.

Return scope and coverage, then each item with sender, subject, age, reason, confidence, and likely next action. Call out ambiguous threads separately. Do not claim the entire inbox is clear when only a slice was checked. Moving, deleting, marking read, categorizing, unsubscribing, or sending is a separate mutation requiring explicit user approval.
