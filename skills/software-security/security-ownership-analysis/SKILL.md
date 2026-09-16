---
name: security-ownership-analysis
description: Analyze Git history to identify sensitive-code ownership concentration, low bus factor, stale ownership, CODEOWNERS drift, and security maintenance gaps with reproducible CSV and JSON evidence. Use for security-oriented ownership risk; do not use for employee performance scoring, general maintainer lists, or access-control changes.
metadata:
  version: "0.18.0"
---

# Security Ownership Analysis

Confirm repository scope, history window, identity mode, sensitive-path rules, bot exclusions, and the security question. Git history reflects touches, not expertise, authority, availability, or employment status; treat the result as risk evidence rather than a people ranking.

Use the bundled `scripts/analyze_ownership.py` for repeatable, dependency-free analysis when Python and Git are available. Start with a bounded history window on large repositories; choose `--identity`, use repeated `--sensitive` path patterns, and exclude known bots or generated paths with `--exclude-author` and `--exclude-path`. The script writes `files.csv` and `summary.json`; it does not require network access or third-party Python packages.

Review `summary.json` and the highest-risk rows in `files.csv` rather than treating every historical touch equally. Validate suspicious hotspots against current code, recent history, CODEOWNERS, team changes, generated or vendored paths, bulk commits, renames, and identity aliases. Never infer that the most frequent committer is the accountable owner.

Return scope and assumptions, sensitive low-bus-factor hotspots, stale or orphaned areas, declared-versus-observed ownership drift, concentration risks, evidence limitations, and remediation options such as pairing, review rotation, documentation, or ownership updates. Keep personal identity outputs local and share only what the security purpose requires.

The analysis is read-only. Do not change CODEOWNERS, repository permissions, team membership, or employment decisions without separate authorization and human review.
