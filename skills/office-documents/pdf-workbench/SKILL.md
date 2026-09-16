---
name: pdf-workbench
description: Read, create, reformat, combine, split, annotate, or fill a PDF when fixed layout and page-level visual verification matter. Use for PDF deliverables or PDF-specific operations; do not use when the requested output should remain an editable Word document.
metadata:
  version: "0.18.2"
---

# PDF Workbench

Determine whether the task is extraction/review, creation, reformatting, page operations, or form filling. Preserve the original file unless the user explicitly requests in-place replacement.

## Work by page and structure

- **Read or review:** extract text and metadata, but render pages when columns, diagrams, signatures, annotations, or visual order affect meaning. Distinguish scanned OCR from embedded text.
- **Create or reformat:** define page size, margins, typography, color, heading hierarchy, tables, figures, links, and print requirements before rendering.
- **Combine, split, rotate, or reorder:** state the page mapping and verify page count, orientation, bookmarks, links, and attachments afterward.
- **Fill forms:** inspect available fields, map supplied values exactly, do not invent signatures or attestations, and verify appearance values on rendered pages.

Use deterministic PDF tooling where available. After any write, reopen the output, validate page count and extractable content, then render every changed page to inspect clipping, overlap, missing glyphs, low-resolution images, broken links, form placement, and unexpected blank pages. Report OCR limitations, inaccessible content, password protection, or unsupported interactive elements.
