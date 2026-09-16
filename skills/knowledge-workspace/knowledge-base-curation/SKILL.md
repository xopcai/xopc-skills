---
name: knowledge-base-curation
description: Turn a bounded collection of documents into a governed, retrievable knowledge base. Use for 知识库整理、文档入库、分类标签、去重、分块、元数据、过期治理和检索质量; do not use for answering a one-off research question, moving files without approval, or silently rewriting source material.
metadata:
  version: "0.18.1"
---

# Knowledge Base Curation

Confirm the knowledge base's users, decisions it supports, source scope, access policy, target system, retrieval method, and freshness expectations. Inventory sources before proposing taxonomy or movement.

Preserve originals and stable source identity. Record owner, authority, effective date, review date, confidentiality, language, version, and canonical URL or path. Detect exact and semantic duplicates; select a canonical item only with evidence and keep redirects or lineage.

Design the smallest taxonomy that supports retrieval. Prefer a few stable dimensions—domain, artifact type, audience, lifecycle, and sensitivity—over deep folders or uncontrolled tags. Test proposed labels against real queries and ambiguous documents.

Prepare content for retrieval without changing meaning: remove navigation noise, preserve headings and tables, split on semantic boundaries, carry source metadata into every chunk, and keep statements that negate or limit a rule. Never merge conflicting versions into a false consensus.

Deliver an inventory, taxonomy and metadata contract, canonical/duplicate map, ingestion plan, permission exceptions, stale-content queue, and a retrieval test set containing known-answer, ambiguous, negative, and access-controlled queries. Mutations or bulk moves require a preview and explicit approval.
