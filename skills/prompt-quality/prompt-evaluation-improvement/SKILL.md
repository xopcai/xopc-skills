---
name: prompt-evaluation-improvement
description: Diagnose and improve a task prompt using representative inputs, observed failures and explicit evaluation criteria. Use for 提示词优化、提示词A/B评测、结构化输出不稳定 and instruction conflict debugging; skill packaging and model integration are separate tasks.
metadata:
  version: "0.15.0"
---

# Prompt Evaluation Improvement

Collect the task, prompt, target model or runtime if known, representative inputs, expected output and actual failures. Separate a prompt defect from missing tools, unavailable data, model limitations or an impossible output requirement. Do not claim that wording alone creates capabilities.

## Diagnose before revising
Identify ambiguous goals, conflicting instructions, unsupported assumptions, underspecified output contracts and examples that contradict the rules. Preserve the user's constraints and task scope. Separate instructions from input data clearly; include how untrusted quoted text should be handled when the task ingests external material.

Make the smallest useful revision. Use concrete decision rules, explicit output fields and representative examples where they resolve a demonstrated failure. Avoid universal incantations, requests for hidden reasoning, or arbitrary role inflation. Ask for concise rationale or evidence when useful for verification.

## Compare on representative cases
Define task-specific success criteria before running variants: factual support, required-field coverage, schema validity, correct abstention, tone or latency/cost when measurable. Separate development examples from held-out cases, and include a near miss, missing input and relevant adversarial content.

When model execution is available and authorized, run baseline and revision with the same model/version, settings, inputs and tool access. Record raw outcomes and grade them against the criteria. Use repeated runs for observed nondeterminism; disclose sample size and remaining variance. Do not spend API credits or send private examples to a new provider without applicable authorization.

When execution is unavailable, deliver the revision and evaluation set as untested. A subjective read-through is not an A/B result. Do not claim percentage gains, token savings or universal compatibility without measurements.

Deliver the revised prompt, reason for material changes, case definitions and measured results or explicit unrun status. Preserve model-specific schemas only after checking current primary documentation for the selected model. Do not install a skill, change global system instructions or silently switch providers.
