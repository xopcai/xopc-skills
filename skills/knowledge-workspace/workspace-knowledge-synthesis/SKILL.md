---
name: workspace-knowledge-synthesis
description: Synthesize evidence from workplace documents, email, chat, knowledge bases, and task systems into a current answer with deduplication, citations, conflicts, and confidence. Use for cross-source company knowledge questions; do not use for open-web research, simple file lookup, or source-system edits.
metadata:
  version: "0.18.3"
---

# Workspace Knowledge Synthesis

Define the question, relevant time horizon, and allowed sources before searching. Use only sources the user can access; never widen permissions or expose restricted material through a synthesis.

Collect enough context to answer the question, then normalize each useful item with source type, title or location, author when relevant, timestamp, and stable link or identifier. Prefer authoritative sources for policy and approved decisions, but prefer fresher operational evidence for current status. A source's relevance depends on the question; do not apply one universal ranking.

Merge true duplicates while preserving every supporting citation. Keep separate records when conclusions, owners, versions, or time periods differ. Surface conflicts explicitly and explain which evidence is newer or more authoritative without silently declaring uncertain information final.

Return:

1. A direct answer.
2. Findings grouped by topic rather than source system.
3. Material conflicts, stale evidence, and missing access.
4. Confidence for conclusions that depend on incomplete or inconsistent evidence.
5. A compact source list with enough detail to reopen each source.

Do not list raw search results, invent missing decisions, or treat message volume as authority. Searching and synthesis are read-only; editing a wiki, replying, or creating a task is a separate authorized action.
