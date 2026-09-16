---
name: diagram-communication
description: Turn supplied architecture, process, sequence, state, entity, data-flow, or decision information into an accurate diagram specification and verified visual. Use for 架构图、流程图、时序图、状态图、ER图、拓扑图 and Mermaid; do not invent missing systems, certify designs, or use a diagram when a table is clearer.
metadata:
  version: "0.18.2"
---

# Diagram Communication

Identify the question the diagram must answer, audience, source facts, required notation, output format, and editing environment. Choose the smallest suitable form: flowchart for branching work, sequence for interactions over time, state diagram for transitions, ER for data relationships, topology for connectivity, or layered architecture for responsibility boundaries.

Create a semantic inventory before layout: nodes, groups, edges, directions, conditions, multiplicity, trust boundaries, and unknowns. Preserve supplied names and distinguish current state, proposal, and inference. Ask for critical missing relationships; never fill them with plausible-looking architecture.

Lay out the dominant reading path consistently, minimize crossings, group by meaning rather than decoration, and keep labels near their objects. Use color redundantly with shape or text, provide readable contrast and an accessible text summary, and include a legend only when encoding needs one.

Generate Mermaid, SVG, or another requested editable representation using capabilities actually available. Render when possible and inspect clipping, overlaps, arrow direction, label legibility, and consistency at the intended size. Deliver the diagram, source, assumptions, unresolved questions, and short reading guide.
