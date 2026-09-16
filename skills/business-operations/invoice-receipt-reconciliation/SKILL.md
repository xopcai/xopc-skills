---
name: invoice-receipt-reconciliation
description: Extract and reconcile invoices, receipts, and supporting payment records into an evidence-backed review table while preserving originals and flagging duplicates or mismatches. Use for expense preparation and document organization; do not use for tax deductibility decisions, accounting approval, payment execution, or destructive file moves.
metadata:
  version: "0.18.3"
---

# Invoice and Receipt Reconciliation

Agree on the input set, reporting period, currency handling, and desired grouping. Inventory files before extraction and identify each original by path or stable identifier; never rename, move, overwrite, or delete originals during analysis.

For every document capture document type, vendor, invoice or receipt number, issue date, service period when present, subtotal, tax, total, currency, payment status, payment reference, and source. Record field-level confidence when OCR, handwriting, cropping, or conflicting totals make a value uncertain. Keep the original text or image location as evidence.

Detect potential duplicates using multiple signals such as vendor, identifier, date, amount, file hash, and line items. A shared amount or filename alone is not enough. Reconcile invoice totals against receipts, statements, purchase orders, or reimbursement records only when those sources are supplied. Flag unmatched, overpaid, underpaid, duplicate, missing-document, currency, and arithmetic exceptions for human review.

Return an inventory, normalized reconciliation table, exception queue, totals by requested grouping, and proposed organization plan. Preserve currency separation unless an exchange-rate source and date are explicitly supplied.

Tax category, deductibility, journal posting, reimbursement approval, and payment are professional or external decisions and remain outside this Skill. Any copy, rename, or folder operation requires preview, collision handling, and explicit confirmation.
