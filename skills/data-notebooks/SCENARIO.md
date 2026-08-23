# Data notebooks

## User outcome

Create or refactor a Jupyter notebook that communicates an experiment, exploration, or tutorial and reruns top-to-bottom without hidden state.

## Selected Skill

- `jupyter-notebook` — adapted from [OpenAI's Apache-2.0 Jupyter Skill](https://github.com/openai/skills/tree/main/skills/.curated/jupyter-notebook). It is the strongest reviewed notebook-specific candidate and includes deterministic templates plus a standard-library scaffolder.

## Boundary and overlap

This scenario owns `.ipynb` artifact structure and reproducibility. It does not replace spreadsheet analysis, production data pipelines, plain Python scripts, or evidence-based research briefs.

## Evaluated alternatives

- MiniMax spreadsheet and document Skills solve different artifact types and carry heavier runtime workflows.
- The OpenAI source repository is deprecated; XOPC pins the reviewed commit, records divergence, and treats future updates as manual maintenance rather than automatic trust.
