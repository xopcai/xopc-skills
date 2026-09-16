---
name: data-visualization-report
description: Turn a validated dataset and business question into an accurate, accessible visualization and concise insight report. Use for a chart, report graphic, or dashboard-ready visual; do not use for general spreadsheet editing, unsupported causal claims, or decorative charts without a decision question.
metadata:
  version: "0.18.1"
---

# Data Visualization Report

Confirm the decision question, audience, dataset, metric definitions, comparison baseline, and output context. Validate row counts, types, missing values, units, timezones, category definitions, and aggregation before drawing conclusions; preserve a link to the source or transformation.

Choose the chart from the relationship: line for time trend, bars for category comparison, histogram or box plot for distribution, scatter for association, and heatmap for a compact matrix. Prefer a table when exact values matter more than shape. Avoid dual axes, truncated bar baselines, excessive categories, and pie charts when comparisons are hard.

Encode color meaningfully with a colorblind-safe palette, label units and time periods, distinguish actual from forecast, and include accessible text describing the main pattern. Titles may state an observed insight but must not claim causality without appropriate analysis.

Render the output and inspect legibility, clipping, scales, labels, legends, empty states, and consistency with the underlying values. Return the visual, source and transformation note, two or three evidence-backed findings, limitations, and reusable generation code when applicable.

Do not hide excluded data, silently impute consequential values, or substitute aesthetics for validation.
