---
name: jupyter-notebook
description: Create, restructure, or edit a reproducible Jupyter notebook for an experiment, exploratory analysis, or tutorial using deterministic templates and top-to-bottom validation. Use for .ipynb artifacts; do not use when a plain script, spreadsheet, or prose report is the requested deliverable.
metadata:
  version: "0.18.0"
---

# Jupyter Notebook

Create a notebook that another person can read and rerun without hidden state.

## Choose the notebook mode

- **Experiment:** a question, hypothesis, baseline, variables, metrics, findings, and a stop/continue decision.
- **Tutorial:** audience, prerequisites, learning goals, small runnable steps, an exercise, and pitfalls.
- **Refactor:** preserve the existing notebook's intent and outputs while improving reproducibility and narrative.

Confirm the objective, audience, data boundary, runtime, and observable definition of done. Do not embed secrets, private data samples, or credentials in notebook cells or saved outputs.

## Scaffold deterministically

Prefer the bundled `scripts/new_notebook.py` over hand-authoring notebook JSON. Resolve the script relative to this Skill's installed directory and pass an explicit output path:

```bash
python3 <skill-dir>/scripts/new_notebook.py \
  --kind experiment \
  --title "Compare retrieval strategies" \
  --out output/compare-retrieval-strategies.ipynb
```

The helper refuses to overwrite by default. Use `--force` only when the user authorized replacement.

## Build a runnable narrative

- Keep setup and configuration near the top; set seeds where randomness matters.
- Give each code cell one purpose and place concise interpretation near its output.
- Start experiments with the smallest end-to-end baseline.
- Keep outputs bounded; summarize large tables, logs, and arrays.
- Use repository-selected dependencies and record any new dependency rather than silently installing it.
- Preserve `nbformat`, ordered cells, and metadata when editing. Read [notebook structure](references/notebook-structure.md) before raw JSON edits.

Read [experiment patterns](references/experiment-patterns.md) or [tutorial patterns](references/tutorial-patterns.md) for the selected mode.

## Validate

Run the notebook top-to-bottom in a clean kernel when the environment permits. Confirm that early cells establish all state and that the final conclusions match actual outputs. Clear secrets and accidental bulky outputs before delivery.

Use [the quality checklist](references/quality-checklist.md). If execution is unavailable or materially costly, report exactly what was not run and give a reproducible validation command.
