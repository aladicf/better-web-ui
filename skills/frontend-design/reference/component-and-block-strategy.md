# Component and Block Strategy

Use this reference when a project uses React-based framework defaults and the component direction is still open.

This library does **not** maintain a frozen catalog of every upstream `shadcn/ui`, `shadcn/ui Blocks`, or `re-ui` offering. Those inventories change quickly. Use the official upstream docs for current availability. Use this reference for **selection strategy**: what each layer is for, when to use it, and how to avoid generic output.

## Official upstream references

Use these as the primary source for current component availability, integration details, and Tailwind implementation behavior:

- [`shadcn/ui` components](https://ui.shadcn.com/docs/components) — browse the current component catalog
- [`shadcn/ui` TanStack Form docs](https://ui.shadcn.com/docs/forms/tanstack-form) — form integration patterns when form architecture matters
- [`shadcn/ui` Blocks](https://ui.shadcn.com/blocks#blocks) — browse block-level accelerators for common screens and sections
- [`shadcn/ui` registry directory](https://ui.shadcn.com/docs/directory) — discover community registries when the core catalog is not enough
- [ReUI components](https://reui.io/components) — browse composed components and in-house workflow-heavy pieces
- [ReUI docs](https://reui.io/docs) — understand registry, Base UI / Radix compatibility, and usage model
- [React shadcn accelerators](./react-shadcn-accelerators.md) — curated shortlist of ChanhDai community-registry components that better-web-ui treats as optional React fallback accelerators
- [Tailwind utility-class guide](https://tailwindcss.com/docs/styling-with-utility-classes) — core utility-first workflow
- [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design) — breakpoint and adaptive layout guidance
- [Tailwind states and variants](https://tailwindcss.com/docs/hover-focus-and-other-states) — `hover:`, `focus:`, group states, and related variants
- [Tailwind dark mode](https://tailwindcss.com/docs/dark-mode) — `dark:` behavior and manual theme toggles
- [Tailwind theme variables](https://tailwindcss.com/docs/theme) — theme tokens and customization
- [Tailwind colors](https://tailwindcss.com/docs/colors) — palette, opacity modifiers, and color variable usage
- [Tailwind adding custom styles](https://tailwindcss.com/docs/adding-custom-styles) — arbitrary values, custom variants, and custom utilities
- [Tailwind detecting classes in source files](https://tailwindcss.com/docs/detecting-classes-in-source-files) — source scanning, static class detection, and safelisting
- [Tailwind functions and directives](https://tailwindcss.com/docs/functions-and-directives) — `@theme`, `@utility`, `@source`, `@apply`, and related directives
- [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide) — important when working in mixed v3/v4 codebases
- [Tailwind install with Vite](https://tailwindcss.com/docs/installation/using-vite) — recommended path for Vite-based stacks
- [Tailwind install with PostCSS](https://tailwindcss.com/docs/installation/using-postcss) — recommended path for PostCSS-based stacks
- [Tailwind framework guides](https://tailwindcss.com/docs/installation/framework-guides) — framework-specific install paths

If the official docs still do not answer the question, do a focused web search and then verify what you find against upstream documentation before making implementation decisions.

## Curated community accelerators for React fallback defaults

When a React/Tailwind/shadcn project is new or still open-ended, `better-web-ui` may also consider the curated shortlist in [React shadcn accelerators](./react-shadcn-accelerators.md).

Use that shortlist when:

- the request clearly maps to an existing community component with strong documentation
- the component page includes a concrete registry install path, usage examples, and API notes
- the dependency model is acceptable for the current framework and browser targets

Do **not** treat the shortlist as mandatory. It is a convenience layer for feature-fit acceleration, not a replacement for project-specific composition judgment.

## Respect `shadcn create`, `shadcn apply`, and `components.json`

When a project was created with `npx shadcn create`, updated with `npx shadcn@latest apply`, or includes a `components.json` file with the shadcn schema, treat that project state as a stronger signal than the generic React fallback defaults.

Important implications from the official docs:

- `shadcn create` is designed to customize the project from the start — component library, icons, base color, theme, fonts, and overall style are part of the chosen baseline.
- The named styles and presets are not just palette swaps; they can change spacing, structure, geometry, and the feel of the generated component code.
- `shadcn apply` can switch presets in an existing project and update theme, colors, CSS variables, fonts, icons, and reinstall existing components to match the new preset.
- `components.json` tells the CLI how the project is configured and can include important signals like `style`, `tailwind.baseColor`, `tailwind.cssVariables`, `tailwind.prefix`, aliases, registries, `rsc`, and `tsx`.
- shadcn now supports both Radix and Base UI ecosystems, and the CLI can auto-detect and transform components or blocks to match the selected library.

Practical rule for agents:

1. Check for `components.json` and treat it as a configuration source, not a random file.
2. Inspect the current theme tokens, CSS variables, fonts, icons, and installed component code before assuming a default shadcn look.
3. If the project has already been customized through `shadcn create` or `shadcn apply`, preserve that baseline.
4. Do **not** "normalize" a customized project back to Vega/new-york/default-looking output just because the task is broad.
5. When the project is already committed to Radix or Base UI, match that ecosystem consistently across primitives, composed components, and blocks.

## Components vs patterns vs blocks

### Components

Small reusable building blocks such as buttons, inputs, selects, popovers, dialogs, tabs, tables, and toasts.

Use components when you need:

- strong integration with an existing codebase
- custom hierarchy, layout, or copy framing
- product-specific behavior
- a composable foundation that can be extended safely

### Patterns

Repeated arrangements built from components, such as filter bars, settings forms, command surfaces, pricing cards, auth panels, empty states, or dashboard widgets.

Use patterns when you need:

- consistency across multiple features
- a shared UX structure without freezing the entire page
- reusable compositions that still allow local variation

### Blocks

Larger prebuilt sections or flows, such as hero sections, pricing sections, feature grids, testimonials, auth screens, or dashboard surfaces.

Use blocks when you need:

- acceleration for common surface types
- a credible starting point for a new screen or section
- fast comparison of multiple directions before refinement

Do not confuse a block with a final design. A block is a head start, not permission to ship generic output unchanged.

## What "Base UI direction" means here

When this library says `shadcn/ui` in the Base UI direction, it means:

- start from composable, production-grade UI primitives
- prefer system-level consistency over one-off decorative flourishes
- customize layout, typography, color, spacing, and tone to fit the product
- treat the library as a foundation, not as the finished brand expression

This is about **how to use the primitives**, not about copying a default demo aesthetic.

## Positioning: `shadcn/ui` vs `shadcn/ui Blocks` vs `re-ui`

### `shadcn/ui`

Use for foundational components and custom product composition.

Best fit:

- application UI
- dashboards
- settings
- data-heavy surfaces
- flows that need product-specific logic or interaction states

### `shadcn/ui Blocks`

Use as a speed layer for common marketing and product surfaces.

Best fit:

- hero sections
- pricing sections
- feature sections
- auth scaffolds
- common landing page structures

### `re-ui`

Use as an accelerator when the project benefits from more prebuilt React/Tailwind composition options around common sections or polished UI structures.

Best fit:

- early exploration
- marketing/product sections where time-to-first-good-version matters
- situations where a prebuilt structure can be refined into a more distinctive direction

Do not treat either block source as mandatory. If the project already has a strong design system, or the request needs a very product-specific structure, compose directly from primitives and local patterns instead.

## Decision order

1. Match the existing project stack and component usage first.
2. If the codebase already uses `shadcn/ui`, extend it before introducing a second component direction.
3. If the request needs custom hierarchy, dense product logic, or strong differentiation, compose from components.
4. If the request is a common section type and speed matters, start from a block and refine aggressively.
5. If repeated structures emerge, extract a reusable pattern rather than keeping many slightly different local copies.

## When to start from primitives instead of blocks

Prefer primitives when:

- the request is data-dense or workflow-heavy
- the UI needs unusual hierarchy or information architecture
- the project already has strong local patterns to match
- the block would require so much restructuring that it stops saving time
- the design needs to feel meaningfully unlike common SaaS templates

## When a block is appropriate

A block is a good accelerator when:

- the request is a familiar section or shell type
- the codebase is still open-ended
- a fast exploration pass is more valuable than precise custom structure on the first draft
- the block gives useful scaffolding for spacing, content grouping, and responsive structure

## How to use blocks without producing generic output

When using a block:

- change the hierarchy to match the product's real priorities
- rewrite copy so it teaches the actual value proposition
- adjust spacing, type, media treatment, and action strategy to fit the chosen tone
- remove decorative filler that does not clarify the task
- extract reusable local patterns only after repeated use is clear

A good result may begin from a block, but it should not still read like a stock block once finished.

## Relationship to `add-ui`, `setup`, and `extract`

- Use `add-ui` to explore multiple directions and decide whether components, patterns, or blocks should lead.
- Use `setup` to record whether a project already uses `shadcn/ui`, whether it is customized, and whether blocks are already part of the stack.
- Use `extract` when repeated local compositions around these libraries deserve a documented shared pattern.