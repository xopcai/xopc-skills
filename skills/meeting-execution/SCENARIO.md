# Meeting execution

## User outcome

Convert an existing transcript or notes into decisions, evidence-linked actions, owners, dates, open questions, and an approval-safe write-back plan.

## Selected Skill

- `meeting-to-actions` — combines and adapts the focused meeting-note and action-extractor capabilities from [Mohit Aggarwal's PM skills](https://github.com/mohitagw15856/pm-claude-skills). It preserves uncertainty and handles partial write-back failure.

## Boundary and overlap

It starts after meeting evidence exists. Scheduling, meeting preparation, live transcription, generic summarization, and weekly capacity planning are separate intents.

## Evaluated alternatives

- Anthropic meeting-briefing and similar market Skills focus on meeting preparation, so they are adjacent rather than replacements.
- Standalone note and action Skills were merged because users expect one post-meeting outcome and splitting them creates duplicate triggers.
