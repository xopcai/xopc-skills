---
name: meeting-to-actions
description: Convert meeting notes or a transcript into decisions, ticket-ready commitments, owners, due dates, open questions, and an approval-ready write-back plan. Use after a meeting; do not use for scheduling, live transcription, or general document summaries.
license: MIT
metadata:
  author: XOPC, adapted from Mohit Aggarwal
  version: "0.18.0"
---

# Meeting to Actions

Preserve what was decided and close the execution loop without inventing commitments.

## Workflow

1. Establish the meeting identity, date/timezone, attendee roster, source completeness, and requested destination format. Treat speaker labels and automatic transcripts as fallible.
2. Separate decisions, explicit commitments, proposals, discussion, open questions, risks, and deferred items. Read [references/commitment-rules.md](references/commitment-rules.md) for ambiguous language.
3. For every action capture: atomic verb, deliverable, exactly one named owner when stated, due date when stated, dependencies, source evidence, and enough context to become a ticket.
4. Mark missing owners or dates as `UNASSIGNED` / `UNKNOWN`; never fill them from role stereotypes or calendar guesses. Surface “someone should” statements as orphans requiring a decision.
5. Record each decision with rationale, dissent/conditions, decision owner, and reopen condition when present. Do not promote a suggestion to a decision.
6. Produce the structured meeting record and a separate proposed write-back plan. Show both to the user before creating tasks, pages, messages, or calendar events.
7. After explicit approval of destinations and exact items, perform only the approved writes. Verify created records and report URLs/IDs. On partial failure, stop and list what succeeded; do not retry blindly.

## Output

```markdown
# <meeting> — <date>
## Executive summary
## Decisions
## Actions
| Action | Owner | Due | Dependency | Evidence |
## Open questions
## Orphans and ambiguities
## Risks / deferred items
## Proposed write-back plan
```

## Hard boundaries

- Never infer attendance, agreement, ownership, deadlines, or factual correctness from conversational confidence.
- Do not reproduce a full transcript unless requested; minimize sensitive personal and HR details.
- Do not send notes, notify people, create tasks, or update calendars without explicit approval.
- This Skill begins with existing notes/transcript; live recording and speech-to-text are separate capabilities.

## Attribution

Adapted from the MIT-licensed `meeting-notes` and `meeting-action-extractor` Skills in `mohitagw15856/pm-claude-skills`. XOPC combines them into one post-meeting outcome, adds source evidence, transcript uncertainty, approval-before-write, verification, and partial-failure handling.
