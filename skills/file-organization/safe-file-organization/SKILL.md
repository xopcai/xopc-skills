---
name: safe-file-organization
description: Inventory and safely organize a bounded file collection using content-aware categories, duplicate evidence, a preview plan, collision handling, and a rollback manifest. Use for folder cleanup or archive preparation; do not use for application-specific document analysis or unconfirmed destructive moves and deletion.
metadata:
  version: "0.18.1"
---

# Safe File Organization

Resolve the exact root and exclusions before scanning. Refuse broad or ambiguous destructive targets. Inventory paths, types, sizes, timestamps, and hashes when duplicate detection matters; inspect content only where authorized and necessary for classification.

Design the shallowest useful folder and naming scheme from the user's retrieval needs. Prefer stable, portable names and preserve extensions. Detect collisions, hidden files, symlinks, bundles, and files referenced by projects or applications before proposing changes.

Classify exact duplicates only from strong evidence such as cryptographic hashes. Treat similar names, sizes, or content as review candidates, not safe deletions. Produce a preview mapping from current path to proposed path with reason, collision action, and confidence.

Apply changes only after explicit confirmation. Prefer copy or recoverable moves, verify counts and hashes after execution, and write a rollback manifest. Never delete the last known copy. Report skipped, failed, ambiguous, and externally referenced files.

Do not reorganize repositories, application libraries, cloud-sync internals, or system folders without a purpose-built plan. A request to organize does not imply permission to delete.
