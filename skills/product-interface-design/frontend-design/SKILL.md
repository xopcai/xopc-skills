---
name: frontend-design
description: Design or substantially reshape a web interface with a distinctive brief-specific visual direction, responsive implementation, accessible interaction states, and screenshot-based critique. Use for landing pages, product surfaces, dashboards, and UI redesigns; do not use for tiny style fixes or backend-only work.
metadata:
  version: "0.3.0"
---

# Frontend Design

Create an interface whose content, hierarchy, typography, palette, and motion clearly belong to the product. Preserve the user's chosen framework, brand constraints, and functional scope.

## Establish the brief

Before implementation, identify:

- the concrete product or subject;
- the primary audience and the page's single job;
- supplied brand, content, accessibility, framework, and device constraints;
- the existing design system and reusable components, when editing a product.

If a missing choice would materially change the product, ask. Otherwise state a narrow assumption and proceed. Use real supplied content; mark invented examples as placeholders.

## Choose a visual direction

Make a compact design plan before coding:

- **Concept:** one sentence tying the interface to the subject's world.
- **Palette:** 4–6 named colors with exact values and contrast roles.
- **Type:** display, body, and optional utility roles with a clear scale.
- **Layout:** information hierarchy plus a small wireframe for the main viewport.
- **Signature:** one memorable element that serves the brief.
- **Motion:** one justified interaction moment, or an explicit decision to stay still.

Reject choices that could be pasted unchanged into an unrelated product. Avoid fashionable defaults unless the brief genuinely calls for them. Spend visual boldness in one place and keep surrounding elements disciplined.

## Build

- Reuse the project's components and tokens when they fit; extend them deliberately when they do not.
- Encode hierarchy through layout and type, not decorative labels that imply false structure.
- Write interface copy from the user's perspective with consistent action names.
- Support mobile widths, keyboard navigation, visible focus, semantic structure, and reduced motion.
- Keep controls functional. Do not add fake buttons, fabricated metrics, or unsupported claims for visual effect.
- Match implementation complexity to the chosen direction; minimal work still requires precise spacing and states.

## Critique with evidence

Render the actual interface and inspect screenshots at representative desktop and mobile widths when tooling permits. Check:

1. the first viewport communicates the page's job;
2. the signature element is specific rather than ornamental;
3. type, spacing, color, and copy form one system;
4. long text, empty, loading, error, hover, focus, and disabled states remain usable;
5. no overflow, clipped content, illegible contrast, or motion-only information exists.

Fix observed problems and inspect again. If rendering is unavailable, say what remains visually unverified and provide the exact preview command.

## Deliver

Summarize the visual direction, changed files, responsive/accessibility verification, and any unresolved asset or browser risk. Do not claim the design is complete based only on source inspection.
