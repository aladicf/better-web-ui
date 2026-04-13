# Changelog

All notable changes to `better-web-ui` will be documented in this file.

The format is inspired by Keep a Changelog and uses a simple `Added` / `Changed` / `Fixed` / `Removed` structure.

## [Unreleased]

### Changed

- README, contributing guidance, and development docs now use a clearer documentation map, reduce duplicated reference catalogs, and make the shared doctrine index easier to scan and maintain as the repository grows.

## [1.7.0] - 2026-04-13

### Changed

- The shared `component-anatomy` reference now also covers buttons, cards, checkboxes, dividers, dropdowns, tabs, textareas, toasts, toggles, and tooltips, and the related docs were updated so that expanded coverage is easier to discover.
- The shared doctrine now also adds iconography, lists, submit-button guidance, stronger textarea state guidance, baseline-unit rules, and clearer grid/gutter spacing notes in the appropriate component and spacing references.
- React fallback guidance now treats Sonner as the preferred toast layer and Vaul as the preferred drawer primitive for React-based web apps when the codebase does not already have a stronger standard, with linked docs for setup, API, styling, and behavior details.
- New-project form defaults now prefer TanStack Form across supported React, Vue, Angular, Solid, and Svelte stacks when the form architecture is still open, while preserving existing project form libraries first.
- New-project table defaults now prefer TanStack Table across supported React, Vue, Angular, Solid, and Svelte stacks when the table or data-grid architecture is still open, while preserving existing project table/grid libraries first.
- New-project long-list and virtualization defaults now prefer TanStack Virtual across supported React, Vue, Angular, Solid, and Svelte stacks when the virtualization architecture is still open, while preserving existing project virtualization layers first.
- A new shared `text-layout-prediction` reference now documents when a Pretext-like approach is useful for virtualization, wrapped-text sizing, and repeated relayouts without hot-path DOM measurement.
- README, the core `frontend-design` skill, and repo agent guidance now surface a one-glance default-by-problem summary for TanStack Form, TanStack Table, Sonner, Vaul, and Pretext when the stack is still open.
- Next.js-specific guidance now tells agents to prefer the bundled version-matched docs in `node_modules/next/dist/docs/` when present, follow the official AI-agents setup for existing projects, and respect modern `create-next-app` agent-file defaults.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.6.0] - 2026-04-13

### Added

- Shared component-anatomy doctrine for custom or no-library primitive work, covering accordions, avatars, badges, borders, and breadcrumbs.

### Changed

- README, development docs, contributing guidance, agent instructions, and the core frontend-design skill now surface the custom-primitives guidance more clearly alongside the existing process, framework, hierarchy, typography, and color references.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.5.0] - 2026-04-12

### Changed

- Shared hierarchy guidance now covers negative space, proximity, alignment, scan patterns, and stronger layout-flow checks alongside consistency and visual-weight doctrine.
- The `hierarchy` skill now assesses spacing, grouping, alignment, and scan-path problems more explicitly, and points to the spacing and spatial references when hierarchy issues are really layout issues.
- README, development docs, and contributing guidance now surface hierarchy, spacing, and layout-flow references more clearly so users and maintainers can find the right doctrine faster.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.4.0] - 2026-04-12

### Added

- Shared design-process doctrine covering wireframes, styleguide thinking, and when to move into higher-fidelity prototypes.
- Shared framework-official-docs guidance that directs agents to official framework documentation before making framework-specific implementation decisions.

### Changed

- React fallback guidance now includes a curated shortlist of React/shadcn accelerators with direct feature and integration links for theme controls, consent, motion text, testimonial patterns, wheel pickers, and slide actions.
- Astro fallback guidance now prefers HTML-first Astro components plus Tailwind by default, only reaching for React plus `shadcn/ui` when that integration is explicitly requested or already present.
- Typography doctrine now covers emphasis discipline, weight strategy, italics, underlines, capitalization, responsive size strategy, and how to document a reusable typography schema.
- Color doctrine now better covers palette-family selection, color temperature, tint/tone/shade behavior, color psychology as contextual guidance, and practical color-schema planning.
- The `colorize` and `typeset` skills now point more explicitly at the shared doctrine needed to apply those refinements consistently.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.3.0] - 2026-04-10

### Added

- User-facing README guidance for how installed skills are typically invoked, including slash-command usage, natural-language fallback prompting, and clarification that internal `$skill` references are not user commands.
- Shared React fallback guidance for respecting `shadcn create`, `shadcn apply`, and `components.json` baselines instead of reverting customized projects to generic defaults.
- Official upstream documentation bridges for `shadcn/ui`, `shadcn/ui Blocks`, `re-ui`, and Tailwind across maintainer docs, shared references, and deterministic checklists.
- Concise `add-ui` examples for component-led, pattern-led, and block-led requests.

### Changed

- `setup` now captures `components.json` usage, shadcn preset/apply baselines, and Radix-vs-Base-UI ecosystem preferences when they are relevant to future design work.
- README, contributing docs, development docs, and React fallback references now align on where maintainers and agents should look first for shadcn and Tailwind guidance.

### Fixed

- Synced the root package version metadata in `package-lock.json` with the current package version.

## [1.2.0] - 2026-04-10

### Changed

- Stack guidance now explicitly prioritizes detecting an existing project's styling and component libraries first, then respecting explicit user preferences for new projects, and only then falling back to framework-specific defaults.
- Added a framework-specific default matrix covering React-based frameworks, Astro, Laravel + Inertia / React, Vue / Nuxt, Svelte / SvelteKit, Angular, and SolidJS / SolidStart.
- `setup` now records implementation defaults as part of persisted project context so later design work can reuse the detected or chosen stack.
- `add-ui`, `frontend-design`, README, and repo instructions now align on the same stack-selection precedence and preferred defaults.

## [1.1.0] - 2026-04-09

### Added

- Contributor and development guides for maintaining canonical skills and generated wrappers.
- Wrapper-root `README.md` generation and validation.
- OXC-based script linting and stronger repository validation coverage.
- Shared doctrine coverage for UX laws and product principles including Jakob's Law, Fitts's Law, Hick's Law, Miller's Law, Postel's Law, Peak-End Rule, Aesthetic-Usability Effect, von Restorff Effect, Tesler's Law, the Doherty Threshold, safe-power guardrails, and dark-pattern avoidance.
- A `smoke:install` helper script for disposable local install checks and a consolidated `verify` workflow for maintainer validation.
- A contributor path for proposing brand-new skills, including a dedicated issue template.

### Changed

- Maintainer tooling is now pinned to Node `24.14.1`, with repository engines set to `>=24.14.1 <25`.
- Frontmatter parsing now uses structured YAML parsing instead of a custom line parser.
- Skill discovery descriptions, README guidance, and maintainer docs now more clearly distinguish overlapping skills such as `onboard` vs `empty-state` vs `critique` and `polish` vs `delight` vs `bolder` vs `quieter`.
- Runtime/version guidance now documents why both `.nvmrc` and `.node-version` exist and validation now checks that those files stay in sync.
- Workflow docs now standardize on regenerate wrappers before validation when wrapper-affecting changes were made.

### Fixed

- `setup` wording now more clearly explains the canonical `.better-web-ui.md` design-context destination and treats legacy context files as migration-only fallbacks.

## [1.0.0] - 2026-04-09

### Added

- Initial public release of the `better-web-ui` skill library.