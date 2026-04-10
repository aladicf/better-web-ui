# Changelog

All notable changes to `better-web-ui` will be documented in this file.

The format is inspired by Keep a Changelog and uses a simple `Added` / `Changed` / `Fixed` / `Removed` structure.

## [Unreleased]

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