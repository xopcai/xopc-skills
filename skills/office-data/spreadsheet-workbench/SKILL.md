---
name: spreadsheet-workbench
description: Create, analyze, edit, format, or validate spreadsheet files such as XLSX, XLSM, CSV, and TSV with formula and workbook-integrity checks. Use when the spreadsheet is an input or deliverable; do not use for databases, notebooks, or prose-only analysis.
metadata:
  version: "0.18.2"
---

# Spreadsheet Workbench

Identify whether the task is read/analyze, create, edit, repair, or validate. Inspect workbook structure before changing it: sheets, named ranges, tables, formulas, charts, pivots, macros, hidden rows/columns, validation, and external links. Never infer an edit location solely from a user's approximate row number when labels or keys can locate it safely.

For analysis, calculate directly from source cells or a parsed table, document filters and missing-value handling, and reconcile key totals. For creation, separate inputs, calculations, and outputs; use formulas for derived values; add units, dates, number formats, source notes, and readable headers. For edits, preserve unrelated sheets, formulas, styles, macros, charts, and metadata; work on a copy unless replacement is requested.

After writing, reopen the workbook and verify sheet names, dimensions, key sample cells, formulas, error values, named objects, and any requested totals. Recalculate with a compatible engine when formula results matter. Render or preview important sheets to inspect clipped headers, unreadable widths, hidden content, poor number formats, and broken charts. Clearly state if macros, pivots, external links, or formula recalculation could not be fully preserved.
