# Adaptation Record: OpenAI Jupyter Notebook

- Repository: https://github.com/openai/skills
- Path / commit: `skills/.curated/jupyter-notebook` at `49f948faa9258a0c61caceaf225e179651397431`
- Accessed: 2026-08-23
- License: Apache-2.0 in the individual Skill directory.
- Decision: Pin and adapt as `jupyter-notebook`.

XOPC retains experiment/tutorial templates, the standard-library scaffolder, progressive references, and top-to-bottom validation. Codex-home paths are removed, default output resolves from the caller's working directory, and explicit output paths are recommended. The adaptation adds overwrite, secret, private-data, dependency-install, large-output, and execution-cost boundaries.

The source repository is deprecated and the reviewed current Plugins repository contains no Jupyter successor, so updates require manual review.
