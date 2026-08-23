---
name: translation-localization-review
description: Translate or review user-facing content for a target locale while preserving meaning, terminology, variables, links, numbers, and product voice. Use when translation quality and localization consistency matter; do not use for certified translation, legal interpretation, or merely rewriting text in the same language.
metadata:
  version: "0.6.0"
---

# Translation and Localization Review

Confirm source language, target locale, audience, channel, tone, and any glossary or style guide. Locale is more specific than language; preserve a requested regional convention rather than normalizing it away.

Protect non-translatable elements before translation: placeholders, variables, markup, code, URLs, product names, identifiers, legal references, and formatting tokens. Translate for meaning and task success, not word-for-word similarity. Use the supplied terminology consistently and flag ambiguous source text instead of guessing a consequential meaning.

Review the result against the source for omissions, additions, negation, numbers, currencies, dates, units, names, links, placeholders, and tone. Check locale conventions and UI length constraints when relevant. Back-translation may reveal drift but is not proof of quality; prefer direct bilingual comparison.

Return the localized text plus a short QA note listing assumptions, unresolved terms, protected-token checks, and material departures from the source. Keep legal, medical, contractual, and certified-use content marked for qualified human review.

Do not silently rewrite source facts, translate code or identifiers, or claim native-level cultural validation without appropriate evidence.
