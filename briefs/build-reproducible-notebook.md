# Scenario Brief: build-reproducible-notebook

## User and outcome

Analysts, researchers, and educators need a Jupyter notebook that another person can understand and rerun. The output is a valid `.ipynb` structured as an experiment, exploration, tutorial, or careful refactor.

Success means the notebook starts from a deterministic template, establishes state near the top, keeps outputs bounded, records dependencies, protects sensitive data, and runs top-to-bottom or clearly reports why it could not.

## Boundaries

- Not for a plain script, spreadsheet, prose report, or production pipeline.
- Existing notebooks keep their intent and meaningful output unless the user requests a rewrite.
- Overwriting files and installing dependencies require explicit scope.

## Evaluation

Fixtures cover experiment and tutorial scaffolds, hidden-state cleanup, large-output reduction, secret removal, existing-notebook refactor, and a near-miss request for a Python CLI. Deterministic tests validate generated JSON and overwrite refusal.
