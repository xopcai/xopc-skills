---
name: incident-response-coordination
description: Coordinate an active production incident from impact triage through mitigation evidence, communication, recovery validation, and blameless review. Use for 线上故障、生产事故、服务中断、告警升级、状态更新和复盘; do not use for ordinary debugging, unapproved production changes, or speculative root-cause claims.
metadata:
  version: "0.18.0"
---

# Incident Response Coordination

Establish the incident clock, affected service and users, observed symptoms, business impact, data or security risk, current owner, communication channel, and organization-specific severity policy. Do not impose a generic SEV definition when local policy exists.

Maintain a timestamped evidence log distinguishing observation, hypothesis, decision, action, and result. Assign incident command, technical lead, communications, and scribe roles when the response size warrants them. Protect responder focus by batching nonessential questions.

Prioritize safe impact reduction. Compare rollback, disablement, traffic shift, scaling, and targeted fix by evidence, reversibility, blast radius, and authorization. Every production mutation needs an owner, expected signal, rollback condition, and observed result. Escalate possible security or data-loss events through the relevant playbook.

Publish factual updates with impact, current status, actions, unknowns, and next update time; never invent an ETA or root cause. Validate recovery through user-facing signals, error and latency metrics, backlog health, and a monitoring window—not merely process restart.

After stabilization, reconstruct the timeline, causal and contributing conditions, detection and response gaps, what helped, and actions with owner, due date, verification method, and priority. Keep the review blameless and evidence-based. Ordinary defect diagnosis remains in `systematic-debugging`.
