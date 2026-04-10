# Component Library Integration for add-ui

Use this reference when `add-ui` is generating directions for React-based projects where `shadcn/ui`, `shadcn/ui Blocks`, or `re-ui` may be part of the implementation path.

This reference does **not** replace [artifact taxonomy](./artifact-taxonomy.md) or [request mapping](./request-mapping.md). It explains how component-library choices should influence the five-direction workflow.

For current upstream inventories and implementation details, use the official docs directly:

- [`shadcn/ui` components](https://ui.shadcn.com/docs/components)
- [`shadcn/ui` TanStack Form docs](https://ui.shadcn.com/docs/forms/tanstack-form)
- [`shadcn/ui` Blocks](https://ui.shadcn.com/blocks#blocks)
- [ReUI components](https://reui.io/components)
- [Tailwind utility classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind states and variants](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Tailwind dark mode](https://tailwindcss.com/docs/dark-mode)
- [Tailwind theme variables](https://tailwindcss.com/docs/theme)
- [Tailwind colors](https://tailwindcss.com/docs/colors)
- [Tailwind adding custom styles](https://tailwindcss.com/docs/adding-custom-styles)
- [Tailwind detecting classes in source files](https://tailwindcss.com/docs/detecting-classes-in-source-files)
- [Tailwind functions and directives](https://tailwindcss.com/docs/functions-and-directives)

If the official docs are incomplete or the inventory appears to have changed, do a focused web search and then verify the result against upstream docs before treating it as current.

## Respect existing shadcn customization baselines

Before using the React fallback defaults, check whether the project already has a stronger shadcn-specific baseline:

- a `components.json` file with the shadcn schema
- a project initialized with `npx shadcn create`
- a project updated later with `npx shadcn@latest apply`

If any of those are present, treat the current project styling and component output as the source of truth.

That means matching the existing:

- library choice (Radix or Base UI)
- style or preset baseline
- fonts, icons, and spacing rhythm
- theme tokens, CSS variables, and Tailwind prefix behavior
- alias and registry conventions used by the CLI

Do **not** generate an `add-ui` direction that quietly drifts the project back toward a generic classic shadcn baseline when the current project already has a different preset or geometry.

## First decide what layer should lead

Before generating variations, decide whether the requested artifact should be led by:

- **components** — custom composition from primitives
- **patterns** — reusable local structures built from components
- **blocks** — accelerated starting points for common sections or flows

Use [component and block strategy](../../frontend-design/reference/component-and-block-strategy.md) for the shared definitions.

## Prefer custom composition when

Lead with custom composition when:

- the request is workflow-heavy or product-specific
- information hierarchy matters more than quick scaffolding
- the codebase already has established local patterns
- the artifact needs to feel distinctive rather than merely complete
- the UI is dashboard-like, data-dense, or operational

Typical fits:

- analytics dashboards
- settings
- admin tools
- complex forms
- multi-step application flows
- dense tables and filter surfaces

## Use blocks as accelerators when

Blocks are appropriate when:

- the request is a familiar section type
- the project is still open-ended
- the user values speed to a credible first pass
- the block can save time on layout scaffolding without dictating the final design

Typical fits:

- heroes
- pricing sections
- feature grids
- testimonials
- landing-page sections
- auth entry points

## How to use blocks in a five-variation workflow

A block should not replace variation thinking.

Use blocks to accelerate only part of the workflow:

- one or more directions may start from a block-derived structure
- at least some directions should still explore materially different hierarchy or framing
- do not generate five near-identical block remixes
- if all five directions would collapse into the same scaffold, reduce block reliance and compose more of the structure manually

## Mixing block-derived structure with custom differentiation

Good pattern:

- use a block for early layout or responsive scaffolding
- replace copy, media framing, action hierarchy, and spacing rhythm
- integrate existing local components where the project already has them
- extract a reusable local pattern only if the result is clearly broader than the original block

Bad pattern:

- copy a block almost verbatim
- recolor it five times
- call those five directions

## Artifact-type heuristics

### Marketing surfaces

Start block-friendly, then differentiate aggressively.

### Auth surfaces

Blocks may provide a good scaffold, but trust, clarity, and state handling matter more than decoration.

### Dashboards and data UI

Usually start from components and patterns, not blocks.

### Settings and admin flows

Usually start from components and patterns.

### Content/detail pages

Choose based on density: editorial landing surfaces may benefit from block scaffolding; product-specific detail layouts often want custom composition.

## Existing-library matching rule

If the project already uses `shadcn/ui` or related local wrappers:

- continue with that direction first
- avoid introducing a second overlapping component layer without a strong reason
- prefer matching existing imports, tokens, spacing, and variants over chasing a shinier upstream pattern
- if `components.json`, `shadcn create`, or `shadcn apply` customizations are present, inherit that project's current preset and ecosystem instead of reverting to the default look

## Recommendation behavior inside `add-ui`

When presenting five directions:

- state whether each direction is component-led, pattern-led, or block-led
- explain why that layer suits the artifact
- recommend the option that best balances distinctiveness, maintainability, and speed for the current codebase