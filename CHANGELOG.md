# Changelog

All notable changes to `better-web-ui` are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/) with Added / Changed / Fixed / Removed sections.

## [Unreleased]

## [2.3.0] - 2026-04-24

### Added

- **New `a11y` skill.** Dedicated accessibility remediation workflow covering keyboard navigation, screen reader support, color contrast, semantic HTML, ARIA usage, focus management, and motion sensitivity. Complements `audit` (scoring) and `harden` (general resilience) with systematic implementation guidance.
- **New `test` skill.** UI testing strategy covering visual regression (screenshot diffing, baseline discipline, anti-flake practices), interaction testing (component interactions, user flows, deterministic data), accessibility assertions (automated axe checks, keyboard traversal, screen reader smoke tests), and test pyramid guidance (unit vs integration vs E2E tradeoffs). Includes tool selection matrix for Playwright, Cypress, Chromatic, Storybook Test Runner, and axe-core.
- **New `localize` skill.** Comprehensive i18n and localization workflow covering string management strategy (key-based extraction, ICU MessageFormat, context for translators), locale negotiation and routing (subdirectory vs subdomain vs query param strategies), library selection matrix (react-i18next, Lingui, vue-i18n, svelte-i18n, i18next, FormatJS), RTL and bidirectional text support, text expansion resilience, pluralization and grammar complexity, content beyond strings (images, URLs, SEO, legal), translation workflow (developer handoff, TMS integration, continuous localization), and localized UI testing checklist.
- **New references for accessibility depth:**
  - `accessibility-testing.md` — automated tool integration (axe-core, WAVE, Pa11y), CI workflow guidance, and tool selection matrix.
  - `colorblindness-ux.md` expanded with grayscale-first design workflow, 5-step palette simulation process, and pattern alternatives for charts under color-vision deficiencies.
- **New references for motion and animation:**
  - `scroll-driven-animations.md` — CSS scroll timelines vs JavaScript observers decision criteria, animation range values, practical patterns (progress bars, parallax, reveals), and graceful degradation with Intersection Observer fallback.
  - `view-transitions.md` — same-document and cross-document transitions, named element morphing, custom keyframes, transition types, and accessibility considerations.
- **New references for motion and animation (thematic consolidation):**
  - `entrance-animations.md` — consolidated guidance for elements appearing: ease-out defaults, transform origin discipline, stagger orchestration, scroll-triggered reveals, modal/drawer entry, clip-path layout-free reveals, reduced-motion fallbacks.
  - `exit-animations.md` — consolidated guidance for elements leaving: 75% duration rule, ease-in curves, toast removal, list deletion, collapse patterns, blur bridging, interruptible exits.
  - `gesture-interactions.md` — consolidated guidance for drag/swipe/snap: boundary damping, velocity-aware snap points, momentum dismissal, scroll-drag conflicts, pointer capture, spring motion, visual lift cues.
  - `micro-interactions.md` — consolidated guidance for small feedback: 80ms threshold, button press scale, asymmetric timing, hover gap fill, tooltip escalation, toggle/checkbox transitions, focus states, reduced-motion alternatives.
- **New references for performance:**
  - `container-queries.md` — component-level responsive patterns, `container-type` and `@container` syntax, named containers, practical card and stats-bar patterns, and migration guide from media queries.
  - `core-web-vitals.md` — deep-dive on LCP subparts, INP optimization strategies, CLS prevention, field vs lab measurement, and the `web-vitals` JavaScript library.
- **New problem-to-file lookup table in `add-ui/reference/request-mapping.md`.** 28-row quick-reference mapping common design problems to their corresponding request category files.

### Changed

- **`frontend-design/SKILL.md` Interaction section reorganized.** Previous 6 clusters collapsed into 5 thematic groups: Forms and validation, Navigation and wayfinding, Commerce and content, Feedback and status, Legacy and resilience.
- **`optimize/SKILL.md` expanded with modern performance strategies:**
  - AVIF and WebP format strategy with `<picture>` element fallback patterns.
  - Font subsetting approaches (static, dynamic, critical-glyph) with tools (`pyftsubset`, `subfont`, `glyphhanger`).
  - Critical CSS extraction guidance with inline + async loading pattern and caveats.
  - Container queries integration for component-level responsiveness.
- **`audit/SKILL.md` strengthened with automated testing integration.** New guidance on running axe/WAVE/Pa11y before manual review, treating results as warning systems, and documenting enabled rules.
- **`animate/SKILL.md` now references** `scroll-driven-animations.md` and `view-transitions.md` for scroll-linked and state-transition motion, plus new thematic guides `entrance-animations.md`, `exit-animations.md`, `gesture-interactions.md`, and `micro-interactions.md`.
- **`animate/reference/README.md` updated** with new "Thematic guides" section linking the four consolidated motion references.
- **`frontend-design/reference/README.md` index updated** with new references across accessibility, motion, and performance sections.
- **`README.md` updated.** `test` and `localize` skills added to Execution skills catalog and quick skill picker table.
- **Wrapper count increased from 189 to 203** due to new `test` and `localize` skills across 7 roots.

## [2.2.0] - 2026-04-24

### Changed

- **Design direction system replaced the old "pick an extreme tone" prompt.** Directions now split into structural styles and selective surface treatments. Existing visual systems are preserved by default. Retro, cyber, synthwave, and terminal aesthetics are no longer volunteered from broad prompts.
- **Added the `design-directions` reference.** Covers approved structural directions (Minimalism, Swiss, Editorial, Bento, Constructivism, Flat, Japandi, Bauhaus, Utilitarian, Wabi Sabi, Mid-Century) and expressive treatments (Glassmorphism, Frost UI, Neumorphism, Claymorphism, Mesh Gradients, Outline UI, 3D/Isometric, Organic, Hand-Drawn, Conceptual Sketch, Graffiti, Tenebrism, Neo-Brutalism), plus typographic and motion modifiers.
- **Strengthened landing-page and editorial guardrails.** Better block separation, consistent section spacing, calmer navigation, hero copy placement, headline wrapping, USP framing, credibility sequencing, and image-overlay discipline across `frontend-design`, `add-ui`, and related references.
- Bumped repository version metadata to `2.2.0`.

## [2.1.0] - 2026-04-24

### Changed

- **Sharper skill descriptions.** Canonical descriptions for `adapt`, `delight`, `extract`, `frontend-design`, `setup`, and `showcase` now use clearer user-intent framing, tighter overlap boundaries, and less implementation-heavy trigger wording.
- **Stronger description validation.** Codified `Use when` phrasing, 1024-character limit, and warnings for descriptions missing trigger language or growing unusually long.
- **Stricter spec compliance.** Validation now checks optional frontmatter string fields, 64-character name limit, string-valued metadata, and the 500-line progressive-disclosure recommendation.
- **Sticky-header guardrail for complex tables.** When wide tables scroll horizontally, both the sticky header container and every header cell need an opaque background so body content does not bleed through.
- **Clearer installation guidance.** Removed the old `--all` workaround. Added exact copy-pasteable `--agent` commands per supported target. Clarified that upstream routing may install GitHub Copilot, Codex, Cursor, and OpenCode into `.agents/skills/` even though agent-specific wrapper trees also exist.

## [2.0.0] - 2026-04-17

### Added

- **27 new shared doctrine references** across five categories:
  - **Product strategy and trust:** onboarding UX, permissions and roles UX, destructive action UX, information architecture UX, behavioral design, interface honesty, social proof patterns, micro-failures and perceived quality.
  - **Commerce and media:** ecommerce UX, hero sections UX, aspect ratio and card orientation.
  - **Accessibility and resilience:** component accessibility, colorblindness UX, disabled buttons UX, complex table UX.
  - **Interaction patterns:** accordion UX, carousel UX, slider UX, breadcrumb UX, collection browsing and filtering, configurator UX, feature comparison UX, navigation menu UX.
  - **Forms and scheduling:** date input UX, date-time picker UX, live validation UX.
  - **Global products:** language and locale selection.

### Changed

- **Surfaced new doctrine across the library.** `frontend-design`, `add-ui`, the shared reference index, and `README.md` now link to the new references for onboarding, permissions, destructive actions, ecommerce, hero sections, micro-failures, aspect ratio, accordions, colorblindness, disabled buttons, behavioral design, component accessibility, complex tables, locale selection, navigation menus, feature comparison, carousels, sliders, breadcrumbs, collection browsing, configurators, date inputs, date-time pickers, and live validation.
- **Strengthened existing references.** `predictive-and-intent-ui`, `motion-design`, `ux-writing`, `marketing-copywriting`, `status-communication`, `cognitive-load`, `text-hierarchy-and-readability`, `component-and-block-strategy`, `react-shadcn-accelerators`, `authentication-and-account-recovery`, `empty-state-patterns`, and `responsive-design` all received cross-links and tighter guidance.
- **Responsive-design reference reclassified.** Now lives under a dedicated responsive/support-surfaces grouping. Split between `live-validation-ux` and `error-recovery` is explained more explicitly.

## [1.9.1] - 2026-04-16

### Added

- **`design-principles` reference.** How to write practical, decision-making design principles that clarify preferred defaults and anti-patterns.
- **`search-and-findability` reference.** Intent-aware site search, synonym and typo tolerance, zero-result recovery, autosuggest, metadata, and vocabulary gaps.
- **`component-anatomy` expansions.** Now covers filter and faceting guidance, product and result-list continuation patterns, variant-selector anatomy, and KPI cards and dashboard widgets.
- **`audience-sensitive-design` reference.** Designing for Gen Z, children and parents, and older adults without stereotyping, with guidance on device reality, trust, motivation, and accessibility-sensitive interactions.

### Changed

- **`interaction-design` improvements.** Clearer decision guidance for modals versus overlays versus drawers versus pages. Coverage of infinite scroll versus load-more versus pagination. Real-time dashboard comprehension, update pacing, role-based prioritization, and quieter motion for live decision surfaces.
- **`status-communication` additions.** Freshness, staleness, paused or offline states, cached snapshots, and accessibility for live-data interfaces.
- **`empty-state-patterns` additions.** 404 and not-found recovery, including tone, navigation, and broken-link recovery.
- **`search-and-findability` clarifications.** Command palettes versus site search versus filter bars, search microcopy, placeholder guidance, recent and related search labeling, and empty-submit or no-results recovery.
- **`marketing-copywriting` clarifications.** Landing-page value propositions, objection handling, primary versus secondary CTA discipline, and message flow.
- **`add-ui` request mapping.** Stronger commerce guidance for result browsing, product-page summaries, variant selection, and catalog UX. Also covers real-time dashboards and 404 recovery.
- **Surfaced new references in `frontend-design`, `setup`, `critique`, `add-ui`, the shared reference index, and `README.md`.**
- Bumped repository version metadata to `2.0.0`.

## [1.9.0] - 2026-04-15

### Added

- **`frontend-design/reference/README.md` index.** Maps shared doctrine by topic so maintainers and users can browse without knowing exact filenames.
- **`animate/reference/README.md` index.** Groups deeper motion guidance by use case instead of a flat filename list.
- **`status-communication` reference.** Differences between validation, notifications, indicators, badges, inboxes, activity feeds, digest settings, severity hierarchy, and notification-fatigue mitigation.
- **`legacy-modernization` reference.** Workflow and dependency mapping, coexistence with modern products, migration strategy choices, legacy seam pain, public-beta paths, and stakeholder trust building.

### Changed

- **`README.md` quick-start list.** Now surfaces `interaction-design`, `status-communication`, `legacy-modernization`, `cognitive-load`, `hierarchy-checklist`, and `ux-writing` more prominently. Links to both reference indexes.
- **Quick skill-picker table in README.** Clarifies `critique` versus `audit` versus `polish`, and `distill` versus `quieter` versus `bolder`.
- **Sharper trigger language.** `critique`, `audit`, `polish`, `distill`, `bolder`, and `quieter` descriptions now have clearer overlap boundaries.
- **`setup` context destination.** Now states explicitly that `.better-web-ui.md` is canonical, while `.better-ui.md` and `.impeccable.md` are legacy migration inputs only.
- **`animate` links.** Now points directly to its reference index for easier browsing.
- **`add-ui` redesign support.** Explicitly supports redesigning existing surfaces while preserving recognizable structure. Request mapping now covers notification settings, feeds, and legacy-modernization scenarios.
- **`frontend-design`, `clarify`, `onboard`, `harden`, `normalize`, and `critique` references.** Now point more explicitly to shared doctrine for status communication and legacy modernization.
- Bumped repository version metadata to `1.9.0`.

## [1.8.2] - 2026-04-14

### Added

- **`marketing-copywriting` reference.** Context gathering, outcome-first framing, CTA strategy, lifecycle copy, marketplace listing copy, and ethical psychology for software product surfaces.
- **`copy-editing` reference.** Seven-sweep editing workflow plus quick-pass checks for clarity, proof, specificity, emotional resonance, and zero-risk decision support.

### Changed

- **`clarify` skill scope.** Now explicitly covers marketing copy as well as UX writing. Points to the new copywriting and copy-editing references when the task goes beyond interface microcopy.
- **`frontend-design`, `ux-writing`, `onboard`, `add-ui`, and README.** Now surface the new copy guidance for easier discovery.
- Bumped repository version metadata to `1.8.2`.

## [1.8.1] - 2026-04-13

### Changed

- **Human-first README introduction.** Lighter, developer-focused tone.
- **Attribution and inspiration section.** Moved near the top with clearer spacing, per-source rows, and explicit creator names. Removed duplicate attribution from the bottom of the file.
- **Framework-agnostic positioning.** Stated more explicitly. Added recommended upgrade path for older installs that preserves project-specific setup in `.better-web-ui.md`.

## [1.8.0] - 2026-04-13

### Added

- **`animate` skill reference set.** Covers Emil-inspired easing defaults, timing heuristics, gesture handling patterns, polish and reduced-motion patterns, performance-sensitive property choices, transform techniques, strategy heuristics, on-screen movement, drawer timing and easing, spring usage, and explicit source attribution.

### Changed

- **Documentation map and catalog cleanup.** README, contributing guidance, and development docs now use a clearer map, reduce duplicated reference catalogs, and make the shared doctrine index easier to scan.
- **Reorganized README.** Shorter, human-first overview with clearer installation, capability, doctrine, attribution, and contribution sections.
- **Updated attribution links.** README and `NOTICE.md` now point Anthropic attribution to the current upstream `better-web-ui` plugin path instead of stale frontend-design links.
- **Motion attribution.** Now explicitly credits Emil Kowalski's [animations.dev](https://animations.dev/) course and related open-source motion work.
- **Frontend doctrine additions.** Dark-mode-only `color-scheme` guidance, layout-faithful skeleton placeholders, async combobox result stability, Motion adapter guidance for React, Vue, and vanilla JS, and SVG path morphing for disclosure-icon animation.
- **Animation doctrine clarification.** More explicitly prefers modern CSS, Tailwind utilities, and WAAPI wherever they can solve motion cleanly, reserving Motion for interactions that genuinely need a heavier framework-linked animation layer.

### Fixed

- Removed a broken Anthropic attribution link discovered during the documentation link audit.
- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.7.0] - 2026-04-13

### Changed

- **`component-anatomy` reference expansion.** Now covers buttons, cards, checkboxes, dividers, dropdowns, tabs, textareas, toasts, toggles, and tooltips.
- **Additional shared doctrine.** Iconography, lists, submit-button guidance, stronger textarea state guidance, baseline-unit rules, and clearer grid and gutter spacing notes.
- **React fallback guidance.** Sonner preferred for toasts, Vaul preferred for drawers in React-based web apps when no stronger standard exists.
- **New-project form defaults.** TanStack Form preferred across React, Vue, Angular, Solid, and Svelte when the form architecture is still open.
- **New-project table defaults.** TanStack Table preferred across the same ecosystems when the table or data-grid architecture is still open.
- **New-project virtualization defaults.** TanStack Virtual preferred across the same ecosystems when the virtualization architecture is still open.
- **`text-layout-prediction` reference.** Documents when a Pretext-like approach is useful for virtualization, wrapped-text sizing, and repeated relayouts without hot-path DOM measurement.
- **Default-by-problem summary.** README, core `frontend-design` skill, and repo agent guidance now surface one-glance defaults for TanStack Form, TanStack Table, Sonner, Vaul, and Pretext when the stack is still open.
- **Next.js guidance.** Agents now prefer bundled version-matched docs in `node_modules/next/dist/docs/` when present. Follows the official AI-agents setup path for existing projects and respects modern `create-next-app` agent-file defaults.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.6.0] - 2026-04-13

### Added

- **`component-anatomy` reference.** Custom or no-library primitive work covering accordions, avatars, badges, borders, and breadcrumbs.

### Changed

- README, development docs, contributing guidance, agent instructions, and the core frontend-design skill now surface the custom-primitives guidance more clearly alongside existing process, framework, hierarchy, typography, and color references.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.5.0] - 2026-04-12

### Changed

- **Hierarchy guidance expansion.** Now covers negative space, proximity, alignment, scan patterns, and stronger layout-flow checks alongside consistency and visual-weight doctrine.
- **`hierarchy` skill.** Now assesses spacing, grouping, alignment, and scan-path problems more explicitly. Points to spacing and spatial references when hierarchy issues are really layout issues.
- **Surfaced references.** README, development docs, and contributing guidance now highlight hierarchy, spacing, and layout-flow references more clearly.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.4.0] - 2026-04-12

### Added

- **`design-process` reference.** Wireframes, styleguide thinking, and when to move into higher-fidelity prototypes.
- **`framework-official-docs` reference.** Directs agents to official framework documentation before making framework-specific implementation decisions.

### Changed

- **React fallback guidance.** Curated shortlist of React and shadcn accelerators with direct feature and integration links for theme controls, consent, motion text, testimonial patterns, wheel pickers, and slide actions.
- **Astro fallback guidance.** Prefers HTML-first Astro components plus Tailwind by default. Reaches for React plus shadcn only when explicitly requested or already present.
- **Typography doctrine.** Covers emphasis discipline, weight strategy, italics, underlines, capitalization, responsive size strategy, and how to document a reusable typography schema.
- **Color doctrine.** Better coverage of palette-family selection, color temperature, tint-tone-shade behavior, color psychology as contextual guidance, and practical color-schema planning.
- **`colorize` and `typeset` skills.** Now point more explicitly at the shared doctrine needed to apply refinements consistently.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.3.0] - 2026-04-10

### Added

- **User-facing README guidance.** How installed skills are typically invoked, including slash-command usage, natural-language fallback prompting, and clarification that internal `$skill` references are not user commands.
- **React fallback guidance.** Respecting `shadcn create`, `shadcn apply`, and `components.json` baselines instead of reverting customized projects to generic defaults.
- **Official upstream documentation bridges.** For shadcn/ui, shadcn/ui Blocks, re-ui, and Tailwind across maintainer docs, shared references, and deterministic checklists.
- **`add-ui` examples.** Concise component-led, pattern-led, and block-led request examples.

### Changed

- **`setup` context capture.** Now records `components.json` usage, shadcn preset and apply baselines, and Radix versus Base UI ecosystem preferences when relevant.
- **Alignment across README, contributing docs, development docs, and React fallback references.** All now point to the same source-of-truth docs for shadcn and Tailwind guidance.

### Fixed

- Synced root package version metadata in `package-lock.json` with the current package version.

## [1.2.0] - 2026-04-10

### Changed

- **Stack guidance precedence.** Explicitly prioritizes detecting an existing project's styling and component libraries first, then respecting explicit user preferences for new projects, and only then falling back to framework-specific defaults.
- **Framework-specific default matrix.** Covers React-based frameworks, Astro, Laravel plus Inertia or React, Vue or Nuxt, Svelte or SvelteKit, Angular, and SolidJS or SolidStart.
- **`setup` persistence.** Now records implementation defaults as part of persisted project context so later design work can reuse the detected or chosen stack.
- **Cross-skill alignment.** `add-ui`, `frontend-design`, README, and repo instructions now align on the same stack-selection precedence and preferred defaults.

## [1.1.0] - 2026-04-09

### Added

- **Contributor and development guides.** For maintaining canonical skills and generated wrappers.
- **Wrapper-root README generation and validation.**
- **OXC-based script linting and stronger validation coverage.**
- **Shared doctrine for UX laws and product principles.** Jakob's Law, Fitts's Law, Hick's Law, Miller's Law, Postel's Law, Peak-End Rule, Aesthetic-Usability Effect, von Restorff Effect, Tesler's Law, the Doherty Threshold, safe-power guardrails, and dark-pattern avoidance.
- **`smoke:install` helper and consolidated `verify` workflow.** For disposable local install checks and maintainer validation.
- **Contributor path for proposing new skills.** Includes a dedicated issue template.

### Changed

- **Maintainer tooling pinned to Node `24.14.1`.** Repository engines set to `>=24.14.1 <25`.
- **Frontmatter parsing.** Now uses structured YAML parsing instead of a custom line parser.
- **Skill overlap clarity.** Skill discovery descriptions, README guidance, and maintainer docs now more clearly distinguish overlapping skills such as `onboard` versus `empty-state` versus `critique`, and `polish` versus `delight` versus `bolder` versus `quieter`.
- **Runtime and version guidance.** Documents why both `.nvmrc` and `.node-version` exist. Validation now checks that those files stay in sync.
- **Workflow standardization.** Docs now standardize on regenerating wrappers before validation when wrapper-affecting changes were made.

### Fixed

- **`setup` wording.** More clearly explains the canonical `.better-web-ui.md` destination and treats legacy context files as migration-only fallbacks.

## [1.0.0] - 2026-04-09

### Added

- Initial public release of the `better-web-ui` skill library.
