---
name: add-ui
description: Generate 5 distinct, production-grade UI variations for a requested section, component, page, flow, or shell, then help the user preview and apply one. Use when the user asks to add UI like a hero, pricing, navbar, auth flow, dashboard shell, ecommerce surface, or data component.
metadata:
  argument-hint: "[request]"
---

## MANDATORY PREPARATION

Users start this workflow with `/add-ui`. `add-ui` is the canonical skill name in this repository. Some hosts may expose a friendly `/add` alias, but docs, wrappers, and source files should continue to refer to the skill as `add-ui`.

Once this skill is active, load $frontend-design — it contains the design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding. If no design context exists yet, you MUST load $setup first.

Also gather the smallest set of implementation details needed to generate usable code:

- framework / runtime (React, Next.js, Vue, plain HTML, etc.)
- styling system (Tailwind, CSS modules, styled-components, vanilla CSS, etc.)
- target insertion point (new route, existing page, shared component folder, design system area)
- whether the user wants a section, page, flow, shell, or standalone component
- quality bar (quick draft, production-ready, flagship)

Ask only the missing questions. If you can infer the technical stack from the codebase, do so.

Consult these references as needed:

- [artifact taxonomy](./reference/artifact-taxonomy.md)
- [variation quality bar](./reference/variation-quality-bar.md)
- [preview and apply patterns](./reference/preview-apply-patterns.md)
- [request mapping heuristics](./reference/request-mapping.md)
- [examples and command naming](./reference/examples.md)

Use these deterministic helper assets when they improve consistency across hosts and agents:

- [comparison table template](./assets/comparison-table-template.md)
- [variant naming scheme](./assets/variant-naming-scheme.md)
- [preview page checklist](./assets/preview-page-checklist.md)
- [apply / cleanup checklist](./assets/apply-cleanup-checklist.md)

---

Generate multiple **meaningfully different** UI directions for a requested artifact, help the user compare them, then guide selection and integration.

This skill is for requests like:

- marketing surfaces: hero, features, pricing, testimonials, FAQ, CTA, logo cloud, gallery, blog, about, contact
- navigation and shell: navbar, footer, dashboard shell, onboarding feed, settings, card nav
- auth and account: login, register, forgot password, reset password, verify email, two-factor auth
- commerce: product overview, product category, product list, filters, cart, checkout, reviews, order summary, gift card
- data UI: charts, widgets, data tables, forms, compare views, bento grids, timelines, dashboards

The list is illustrative, not exhaustive.

## Core Operating Rules

1. **Generate real alternatives, not recolors**
   - Variations must differ in layout, hierarchy, density, tone, interaction model, and content framing.
   - Changing only palette, border radius, or icon set does **not** count as a new direction.

2. **Start from the requested job to be done**
   - A pricing section is not just cards.
   - A login screen is not just inputs.
   - A dashboard shell is not just chrome.
   - Anchor every variant in the user's primary task and the product's tone.

3. **Prefer source-based previews over ephemeral DOM tricks**
   - If the host supports previews, generate real components/pages/routes the user can inspect and choose from.
   - Do **not** rely on browser-extension-style DOM injection as the primary workflow. It is fragile and does not create maintainable source code.

4. **Stay opinionated**
   - `better-web-ui` optimizes for distinctive, high-taste output.
   - Do not collapse into the safest possible generic SaaS layout.
   - Use the frontend-design anti-pattern guidance aggressively.

5. **Be integration-aware**
   - Match the project's existing code conventions and folder structure.
   - If a shared UI system already exists, plug into it instead of creating random one-off primitives.
   - If repeated structure emerges across variants, extract sensible shared pieces.

## Workflow

### 1. Classify the request

Use the [artifact taxonomy](./reference/artifact-taxonomy.md) to determine whether the user is asking for a section, page, flow, shell, or data/content component.

Then identify:

- primary user goal
- core content blocks
- critical states (loading, empty, error, success, validation, mobile)
- placement context (new page, inside existing page, inside dashboard, inside marketing site)

### 2. Define 5 distinct directions

Generate **5** candidate directions. Fewer than 3 reduces exploration; more than 5 becomes noise.

Use the [variation quality bar](./reference/variation-quality-bar.md) to ensure the five directions are meaningfully different rather than cosmetic recolors.

Each direction must have:

- **Name**: short, memorable, concept-led
- **Design thesis**: one sentence explaining the idea
- **Why it works**: how it supports the user's goals
- **Key traits**: hierarchy, layout, density, personality, media treatment, action strategy
- **Best fit**: when this direction should be chosen over the others

### 3. Build real candidate artifacts

For each direction, generate a real artifact package.

Prefer:

- real component files
- real route/page files
- real preview shells that switch between variants
- real data mocks or placeholders when needed to make the UI legible

Use the [preview and apply patterns](./reference/preview-apply-patterns.md) to decide how to structure previews, fallback comparison formats, and final integration.

### 4. Make the variants truly comparable

For every variation, include the same practical checkpoints:

- responsive behavior
- accessibility expectations
- key interaction states
- content placeholders or example copy
- implementation notes
- any required supporting components

Do not let one option be a sketch while another is production-grade. Compare like with like.

### 5. Recommend, then let the user choose

After generating the options:

1. summarize the tradeoffs in a compact table
2. recommend one option if the user's goals clearly favor it
3. let the user choose explicitly when multiple directions are viable

Your recommendation should explain **why** the chosen direction best matches:

- audience
- product tone
- information density
- conversion or usability goals
- maintainability in the current codebase

### 6. Apply the chosen direction cleanly

Once a direction is selected:

- integrate it into the requested target location
- preserve project conventions and imports
- extract repeated primitives if they are genuinely reusable
- remove obviously dead temporary scaffolding unless the user wants to keep the alternatives around
- keep preview artifacts only when they remain useful for future iteration

When a reusable pattern emerges, apply the spirit of `extract` — but do not build a bloated design system for one request.

Use the [request mapping heuristics](./reference/request-mapping.md) for artifact-specific priorities such as hero sections, pricing, auth, dashboards, commerce flows, and content surfaces.

## Output Contract

Whenever possible, present results in this order:

1. **What I generated** — requested artifact + number of directions
2. **Variation summary table** — 1/2/3/4/5 with thesis and best-fit use case, using the [comparison table template](./assets/comparison-table-template.md) when helpful
3. **Recommended choice** — if appropriate
4. **Preview/apply notes** — how to inspect or switch among variants
5. **Implementation output** — created/updated files

Use the [variant naming scheme](./assets/variant-naming-scheme.md) to keep labels, file names, and selection mapping deterministic.
Use the [preview page checklist](./assets/preview-page-checklist.md) when building a preview surface.
Use the [apply / cleanup checklist](./assets/apply-cleanup-checklist.md) after the user selects a direction.

## Never Do This

- generate 5 near-identical variants with cosmetic differences only
- inject temporary browser DOM as the main implementation strategy
- ignore the existing codebase structure and styling system
- default to generic startup aesthetics just because the prompt is broad
- make every option loud, card-heavy, gradient-heavy, or animation-heavy
- skip loading/error/empty/mobile states when they materially affect the artifact
- apply a chosen variant without making it clear what changed

Remember: this skill is not a slot machine for interchangeable UI. It is a structured exploration workflow that helps the user choose among genuinely different, production-credible directions and end up with maintainable source code.