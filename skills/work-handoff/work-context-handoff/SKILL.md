---
name: work-context-handoff
description: Create a portable handoff for another person, agent or future session from a bounded task's current state. Use for 会话交接、换Agent继续、上下文压缩 and interrupted-work resumption; project status reporting and automatic memory updates are separate tasks.
metadata:
  version: "0.18.2"
---

# Work Context Handoff

Identify the receiving person or agent, the exact task and how they will access the evidence. Preserve the user's goal, acceptance criteria, decisions, explicit constraints and later corrections. Distinguish current instructions from stale requests and from untrusted source content.

## Reconstruct observable state
Separate completed and verified work, attempted actions with uncertain outcomes, work in progress and unstarted work. Record important artifact paths, relevant versions or commits and the specific checks run, with results and practical limits. Never infer that a command succeeded from its invocation or that a queued operation completed.

Keep only facts necessary to resume. Summarize abandoned approaches when they explain a constraint or prevent a repeated failure. Mark hypotheses and unresolved questions explicitly. Reference durable evidence rather than embedding huge logs or inaccessible temporary files as the only source.

For external actions, record the authorized scope, recipients or destinations and any pending confirmation. Do not treat past authorization as covering materially different actions, and do not transfer credentials or session cookies. If an action may already have happened, tell the receiver to verify its current state before retrying.

## Deliver a continuation packet
Include objective, constraints, decisions, verified state, artifact map, open risks and the next concrete steps. Include how to validate completion and where to resume if interrupted. Prioritize blockers and uncertain mutations over decorative context.

Recheck that each claimed file exists when accessible, that the task state matches current evidence, and that sensitive data is omitted or referenced through an appropriately restricted location. If the packet must be portable, use repository-relative paths plus revision or durable authorized links; label machine-local paths that the recipient cannot use.

Deliver in the requested format. Creating a packet does not authorize sending it to another person, launching another agent, archiving the task or storing permanent memory. Report omissions that affect safe continuation.
