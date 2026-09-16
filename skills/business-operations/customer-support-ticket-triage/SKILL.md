---
name: customer-support-ticket-triage
description: Triage a customer support ticket by extracting the issue, impact, urgency, evidence, duplicate or known-issue signals, routing, and a grounded initial response. Use for new or escalated support intake; do not use to diagnose an unverified root cause, promise an SLA, or silently change ticket priority or assignment.
metadata:
  version: "0.18.3"
---

# Customer Support Ticket Triage

Read the complete customer message and available account or incident context. Extract the observed problem, symptoms, affected users or workflow, environment, timing, workaround, customer sentiment, and evidence. Separate customer statements from internal facts and hypotheses.

Classify the issue using the organization's taxonomy when available. Otherwise use a small default set: bug, how-to, feature request, billing, account, integration, security, data, or performance. Assess priority from impact and urgency, not tone, customer fame, or unsupported assumptions. Treat possible data exposure, active security incidents, widespread outage, or irreversible loss as immediate escalation candidates.

Search available tickets, known issues, documentation, and incident records for symptom-level matches. Label a duplicate only when evidence links the same underlying issue; similar wording alone is insufficient.

Return issue summary, category, proposed priority with rationale, impact and workaround, related evidence, routing recommendation, missing diagnostic information, escalation triggers, and a concise initial response that acknowledges the issue without promising an unverified cause or resolution time.

Priority, assignment, escalation, customer reply, refund, and account changes remain proposed until explicitly authorized. Never expose internal-only notes, other customers' data, secrets, or security details in the customer-facing response.
