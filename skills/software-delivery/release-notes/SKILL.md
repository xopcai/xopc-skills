---
name: release-notes
description: Turn verified tickets, pull requests, changelogs, and shipped behavior into concise user-facing release notes with benefits, breaking actions, fixes, and evidence status. Use for product release announcements and changelog summaries; do not use to invent roadmap claims or summarize unshipped plans as released.
license: MIT
metadata:
  author: XOPC, adapted from Pawel Huryn
  version: "0.18.2"
---

# Evidence-Based Release Notes

Write for the users affected by what actually shipped. Translate technical inputs into benefits without fabricating performance numbers, availability, compatibility, or customer impact.

## Workflow

1. Establish the release name/version/date, audience, channels, tone, and source-of-truth boundary.
2. Read all supplied tickets, pull requests, changelog entries, docs, and migration notes. Build an evidence table with: change, shipped status, affected users, observable benefit, required action, source, and uncertainty.
3. Exclude planned, merged-but-not-deployed, feature-flagged, internal-only, or unverifiable changes unless the user explicitly wants them labeled as such.
4. Group verified changes into new features, improvements, fixes, breaking changes, deprecations, and security notes. Omit empty sections.
5. Lead with the user outcome, then the behavior. Remove internal codenames, implementation trivia, ticket IDs, and unsupported superlatives.
6. Put migrations, removed behavior, changed defaults, deadlines, and rollback information in an unmistakable “Action required” section.
7. Preserve security-sensitive disclosure boundaries. Do not expose exploit details, private customer information, internal endpoints, or secrets.
8. Cross-check every claim against the evidence table. If a metric such as “3× faster” is not backed by supplied measurement, use a qualitative verified description or omit it.
9. Deliver the notes plus a short editor appendix listing excluded/unverified items and missing links. Do not include the appendix in public copy unless requested.

## Default shape

```markdown
# Product — Version / Date

One sentence describing the release's main user outcome.

## New features
- **Feature:** What users can now do and who benefits.

## Improvements
- **Area:** What became easier, faster, safer, or clearer.

## Fixes
- Fixed a user-observable problem and its affected context.

## Action required
- Who must act, by when, and where the migration instructions live.
```

## Quality checks

- Every public claim maps to a supplied source.
- Shipped status is explicit.
- Breaking changes and deprecations contain an action and deadline when known.
- No ticket IDs, secrets, private names, or unsupported metrics remain.
- A reader can tell whether the change affects them.

## Attribution

Adapted from Paweł Huryn's MIT-licensed `release-notes` Skill. XOPC adds evidence status, shipped-state checks, security disclosure boundaries, and an editor-only uncertainty appendix.
