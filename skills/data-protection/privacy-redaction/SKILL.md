---
name: privacy-redaction
description: Produce and verify a redacted copy of text, tables, images, or documents for a defined sharing purpose. Use for 数据脱敏、隐私清洗、手机号/身份证/银行卡/API 密钥遮盖、匿名化和外发前检查; do not use for compliance certification, deleting originals, or reversible masking without protected key handling.
metadata:
  version: "0.18.0"
---

# Privacy Redaction

Confirm the recipient, purpose, output format, fields needed for utility, applicable organizational policy, and whether consistent pseudonyms or irreversible removal is required. Work on a copy and preserve the original untouched.

Inventory direct identifiers, quasi-identifiers, credentials and secrets, financial and health data, confidential business values, hidden metadata, comments, revision history, filenames, formulas, links, attachments, and image layers. Treat patterns as candidate detection, not proof that all sensitive data was found.

Choose the least revealing transformation that preserves required utility: remove, generalize, tokenize, consistently pseudonymize, or mask. Visual black rectangles are insufficient unless content beneath them is actually removed. Store any reversible mapping separately with restricted access and never bundle it with the output.

Verify by extracting text from the result, searching original sensitive tokens and variants, inspecting rendered pages, checking metadata and embedded objects, and sampling table joins that could re-identify people. Deliver the redacted copy, field/action log without raw secrets, unresolved-review queue, verification results, and residual-risk note. Do not claim anonymization or legal compliance from pattern matching alone.
