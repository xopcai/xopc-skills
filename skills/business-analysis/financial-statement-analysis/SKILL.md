---
name: financial-statement-analysis
description: Analyze Chinese-enterprise financial statements across periods and turn verified figures into management insight. Use for 财务报表分析、经营财务复盘、杜邦分析、偿债/周转/盈利/现金流质量诊断; do not use for bookkeeping, tax opinions, securities recommendations, statutory audit conclusions, or invoice reconciliation.
metadata:
  version: "0.18.0"
---

# Financial Statement Analysis

Establish the decision question before calculating ratios. Confirm the reporting entity, accounting period, currency and unit, consolidated versus standalone scope, applicable accounting framework, industry, and whether the statements are audited. Treat scanned or manually entered figures as unverified until reconciled.

## Build a trusted input layer

Inventory the balance sheet, income statement, cash-flow statement, notes, and prior periods. Preserve source labels and page or cell references. Normalize names without silently merging unlike concepts; record signs, units, restatements, and missing fields.

Run accounting and period checks where the inputs permit:

- assets equal liabilities plus equity;
- cash movement reconciles opening cash, net change, and closing cash;
- profit, cash flow, and balance-sheet periods align;
- comparative figures use the restated basis when disclosed;
- ratios using stocks use average opening and closing balances, not the closing balance alone.

Stop and request review when a material mismatch cannot be explained. Never invent a missing value to complete a ratio.

## Analyze in layers

Start with size and trend: revenue, gross profit, operating profit, net profit, operating cash flow, assets, debt, equity, and working capital. Separate absolute change, percentage change, and structural share.

Then examine:

1. Profitability: gross margin, operating margin, net margin, ROA, and ROE with consistent numerator and denominator scope.
2. DuPont drivers: net margin, asset turnover, and equity multiplier. Recalculate the product and explain which driver changed.
3. Liquidity and leverage: current and quick ratios, debt structure, interest coverage, and maturity concentration when data exists.
4. Operating efficiency: receivable, inventory, and payable days plus cash-conversion cycle, using average balances and disclosed day-count convention.
5. Cash quality: operating cash flow versus profit, free-cash-flow assumptions, investing intensity, financing dependence, and one-off items.

Use bankruptcy, EVA, valuation, or industry benchmark models only when the model population and required inputs fit the entity. State the formula version, assumptions, date, and source. Do not present a generic threshold as an authoritative China-industry benchmark.

## Form findings

For each finding, show the metric, comparison baseline, likely explanation, alternative explanations, missing evidence, and business implication. Distinguish observation from hypothesis. Cross-check profit movements against working capital and cash rather than ranking the company from one ratio.

Deliver:

- an executive conclusion with the three most decision-relevant findings;
- a source-and-quality note, including unresolved reconciliations;
- a multi-period metric table with formulas and units;
- a driver tree for material changes;
- strengths, warning signals, and questions for management;
- prioritized follow-up actions with owner, evidence needed, and review date.

Label the output as analytical support, not an audit, tax opinion, credit decision, or investment recommendation. Protect payroll, bank, customer, and counterparty data; avoid publishing raw sensitive records.
