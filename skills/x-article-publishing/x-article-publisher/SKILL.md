---
name: x-article-publisher
description: "Convert a supplied Markdown article and authorized images into a reviewable X Articles draft, preserving headings, lists, quotes, links, and media placement. Use when the user asks to prepare or publish an X long-form article; do not use for ordinary short posts, evading platform controls, or publishing without explicit authorization."
license: MIT
metadata:
  author: XOPC, adapted from Qiaomu
  version: "0.17.0"
---

# X Article Publisher

Prepare the article locally, save a draft first, and verify the platform result.

## Workflow

1. Confirm the source Markdown, title, intended X account, target state (`draft` or `published`), platform access, and rights to every image. Reuse the user's authenticated session without requesting passwords, cookies, tokens, or 2FA secrets in chat.
2. Parse frontmatter and body. Resolve the title from an explicit field or H1; ask or propose a reviewable title when absent. Do not invent claims or citations.
3. Normalize supported structures: headings, paragraphs, emphasis, ordered/unordered lists, blockquotes, code, links, and images. Report unsupported or lossy constructs before upload.
4. Resolve local image paths relative to the Markdown file. Verify existence, format, size, alt text, ownership/permission, and intended placement. Do not fetch remote media outside the authorized source set.
5. Produce a local preview or structured block plan and check title, link targets, paragraph order, media order, accessibility text, and character/format constraints against current X documentation or the live editor.
6. Open X Articles using an available browser tool and the user's normal account session. Create a new article and transfer content without bypassing anti-automation, access, subscription, or platform controls.
7. Save as a draft by default. Compare the visible editor content to the source and report any conversion loss.
8. Publish only when the user has explicitly authorized publishing this concrete draft. After the action, verify the visible status and canonical URL; report partial failures without retrying blindly.

## Deliverables

- Source-to-editor conversion report
- Draft title, content, images, and accessibility checks
- Verified draft status, or verified published URL when authorized

## Boundaries

- Platform capabilities and subscription requirements change; verify them at execution time.
- Never store authentication state inside the Skill package or print secret browser data.
- Do not generate clickbait, fabricated metrics, or unlicensed cover art.
