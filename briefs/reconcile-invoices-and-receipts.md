# Scenario Brief: reconcile-invoices-and-receipts

## Outcome

从发票、收据和付款证据生成保留原件、字段可追溯、币种清晰并包含异常队列的核对结果。

## Boundaries

- 不判断税务抵扣资格，不批准报销，不记账或付款。
- OCR 和缺失字段保留置信度与人工复核状态。
- 文件移动、重命名和覆盖必须先预览并确认。

## Evaluation

覆盖扫描质量、多币种、部分付款、重复检测、缺失凭证、文件冲突和算术不一致。
