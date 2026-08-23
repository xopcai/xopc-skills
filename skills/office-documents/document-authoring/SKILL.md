---
name: document-authoring
description: Create, edit, format, or restructure a professional Word-compatible document while preserving templates and verifying the rendered result. Use when the requested deliverable is DOCX or an editable formal document; do not use for plain prose, PDFs, spreadsheets, or compliance review.
metadata:
  version: "0.5.0"
---

# Document Authoring

Establish the document purpose, audience, required format, source material, and whether an existing file or template is authoritative. Preserve the user's wording, styles, tracked changes, comments, headers, footers, numbering, tables, links, and accessibility metadata unless the request changes them.

## Route the work

- **Create:** build a clear hierarchy, reusable styles, page setup, navigation, and tables or figures appropriate to the audience.
- **Edit:** change only the requested content and inspect nearby structure so cross-references, numbering, and layout stay coherent.
- **Template fill:** map content into the supplied template rather than recreating its visual system.
- **Redline or review:** keep proposed changes distinguishable and preserve reviewer attribution when the format supports it.

Use an available DOCX library or document tool that preserves the features present in the source. Work on a copy unless the user explicitly selected the original output path. After writing, reopen the file, verify expected text and structure, render every page, and inspect page breaks, clipping, orphan headings, table overflow, image placement, fonts, and headers/footers. Deliver the editable file and state what was structurally and visually verified.
