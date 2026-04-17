# Changelog

All notable changes to `better-web-ui` will be documented in this file.

The format is inspired by Keep a Changelog and uses a simple `Added` / `Changed` / `Fixed` / `Removed` structure.

## [Unreleased]

### Changed

- `component-anatomy` and `complex-table-ux` now call out a practical TanStack Table + TanStack Virtual sticky-header guardrail: when wide tables scroll horizontally, both the sticky header container and every header cell need an opaque surface background so body content does not bleed through behind non-pinned headers.

## [2.0.0] - 2026-04-17

### Added

- Shared `onboarding-ux` doctrine now covers first-run sequencing, activation and time-to-value, aha-moment design, tours vs checklists vs contextual onboarding, progressive permission requests, setup wizards, returning-user re-entry, and onboarding metrics and failure modes.
- Shared `permissions-and-roles-ux` doctrine now covers role and permission models, request-access flows, access-denied recovery, admin-vs-member mental models, risky permission changes, and visibility-vs-capability distinctions for enterprise and team products.
- Shared `destructive-action-ux` doctrine now covers soft delete vs hard delete, honest delete/archive/remove labeling, undo vs confirm choices, bulk-action guardrails, and post-error escape hatches for risky flows.
- Shared `information-architecture-ux` doctrine now covers cross-product IA, navigation-layer separation, settings architecture, enterprise product organization, naming consistency, and grouping across large product surfaces.
- Shared `ecommerce-ux` doctrine now covers shopper behavior, narrow-layout commerce resilience, category and product-page clarity, trust layers, product presentation, checkout friction reduction, support-widget restraint, and iteration guidance across the shopping journey.
- Shared `social-proof-patterns` doctrine now covers testimonials, customer logos, case studies, badges, certifications, proof-type selection, proof placement near claims and CTAs, and how to keep credibility signals believable instead of suspiciously perfect.
- Shared `micro-failures-and-perceived-quality` doctrine now covers tiny repeated trust leaks such as weak interaction acknowledgment, vanishing overlays, state loss, performance ambiguity, papercut recovery failures, and how to audit journeys that technically work but still feel broken.
- Shared `hero-sections-ux` doctrine now covers above-the-fold clarity, when a hero section is optional, why abstract hero images often underperform, product/proof-first alternatives, and the performance/narrow-layout/accessibility tradeoffs of top-of-page media.
- Shared `aspect-ratio-and-card-orientation` doctrine now covers ratio tokens, crop rules, repetition-vs-variation rhythm, responsive ratio changes, vertical-vs-horizontal card tradeoffs, browse-vs-evaluate layout choices, and accessibility-aware card/media structure.
- Shared `interface-honesty` doctrine now covers assertive UX language, honest progress and consent messaging, anti-gaslighting microcopy, cancellation and downgrade clarity, upgrade-pressure guardrails, and anti-enshittification product signals.
- Shared `accordion-ux` doctrine now covers when accordions help, when they hide too much, full-row triggers, icon choice and placement, split link-vs-expander tradeoffs, single-open vs multi-open behavior, auto-scroll pitfalls, and accessible disclosure defaults.
- Shared `colorblindness-ux` doctrine now covers non-color-only state design, lightness-aware palette choices, fragile color combinations, chart and legend resilience, semantic-state redundancy, and testing guidance for color-vision deficiencies.
- Shared `disabled-buttons-ux` doctrine now covers blocked CTAs, disabled-by-default risks, enabled-submit alternatives, true-unavailability vs in-progress locking, accessible disabled-state behavior, support/override escape hatches, and measurement of lockouts and abandonment.
- Shared `behavioral-design` doctrine now covers progressive disclosure, priming vs framing, completion cues, decision-support patterns, honest choice architecture, and ethical trigger / reward guidance for behavior-sensitive surfaces.
- Shared `component-accessibility` doctrine now covers keyboard parity, visible focus, skip links, hidden-content strategy, current-page states, modal focus handling, dynamic focus movement, third-party component claims, and accessibility-aware handoff guidance.
- Shared `complex-table-ux` doctrine now covers read-only/search/editable table types, feature-tree planning, cell and header states, pinned columns, resizing, command logic, numeric formatting, validation inside grids, responsive honesty, and accessibility for dense operational data tables.
- Shared `language-and-locale-selection` doctrine now covers language selectors, country and region pickers, regional overrides, currency and shipping preferences, auto-redirect risks, local language labels, and accessible preference-surface patterns for global products.
- Shared `navigation-menu-ux` doctrine now covers mega-dropdown strategy, click-vs-hover behavior, parent-link vs disclosure separation, compact split-menu / accordion patterns, and alternatives for broad site navigation.
- Shared `feature-comparison-ux` doctrine now covers considered-purchase product comparison, metadata quality, pros/cons and highlight layers, difference/similarity modes, sticky headers, compare bars, responsive comparison patterns, reorderable candidates, and shareable/persistent comparison flows.
- Shared `carousel-ux` doctrine now covers when to avoid carousels, when they are appropriate, how to improve discoverability and navigation, how wide and narrow layout controls differ, and how to handle auto-advancing, gesture support, and alternatives more responsibly.
- Shared `slider-ux` doctrine now covers when sliders are the right control, single vs dual sliders, scale design, spacing and hit targets, tick marks, zero-results avoidance, histogram-backed filtering, precise-input fallbacks, continuous feedback, and keyboard/accessibility guardrails.
- Shared `breadcrumb-ux` doctrine now covers when breadcrumbs help, where they belong, how to handle current-page and ancestor links, narrow-layout reduction patterns, and sideways breadcrumb navigation for nested IA.
- Shared `collection-browsing-and-filtering` doctrine now covers comfortable-range filtering, browse-vs-search continuation choices, `Load more` vs pagination vs infinite scroll, filter-panel stability, narrow-layout filter surfaces, and return-to-list restoration.
- Shared `configurator-ux` doctrine now covers responsive product builders, presets and packages, step navigation, real-time previews and pricing, dependency resolution, summary/save flows, and compact-layout configurator behavior.
- Shared `date-input-ux` doctrine now covers date of birth and memorable-date entry, native date-picker pitfalls, when three typed fields beat dropdowns, when calendars are actually helpful, and date-specific validation guidance.
- Shared `date-time-picker-ux` doctrine now covers booking calendars, typed-input fallbacks, default dates, calendar overlays, mini-steppers, flexible dates, date-range flow, time-slot selection, localization, and accessibility guardrails for scheduling flows.
- Shared `live-validation-ux` doctrine now covers blur-vs-real-time timing, empty-field timing, reward-early/punish-late behavior, copy-paste-friendly validation, just-in-time verification, validator override strategy, and when submit-only flows outperform eager inline validation.

### Changed

- `frontend-design`, `onboard`, `harden`, the shared reference index, and `add-ui` request mapping now surface the new onboarding and permissions/roles guidance without adding promotional clutter to the root `README.md`, while also improving discoverability for `responsive-design`, `loading-feedback-and-perceived-performance`, `predictive-and-intent-ui`, and `sidebar-and-footer-ux` through internal doctrine links and clearer taxonomy.
- `authentication-and-account-recovery`, `empty-state-patterns`, `information-architecture-ux`, and `responsive-design` now point more explicitly to adjacent doctrine where auth vs authorization, request-access states, scope confusion, and support-surface decisions would otherwise be easy to misread.
- The shared reference index now classifies `responsive-design` more cleanly under a dedicated responsive/support-surfaces grouping instead of leaving it primarily buried in the broader interaction list, and it now explains the split between `live-validation-ux` and `error-recovery` more explicitly.
- `frontend-design`, `add-ui` request mapping, the shared reference index, `README.md`, and `upcoming-features.md` now surface the new destructive-action and information-architecture guidance so risky action flows and larger-product structure work can reuse shared doctrine instead of relying on scattered notes across error, navigation, search, and settings references.
- `predictive-and-intent-ui` now more explicitly covers useful personalization signals, cross-journey relevance, channel/timing restraint, and helping users with recommendations without turning the product into a creepy or opaque personalization theater.
- `motion-design` now more explicitly covers micro-interaction anatomy, short purposeful feedback, and the difference between useful micro-motion and decorative motion noise.
- `ux-writing` and `marketing-copywriting` now more explicitly cover active voice, second-person clarity, not using copy to point out weak UI, simple landing-page forms, continuity between acquisition source and landing page, navigation restraint on campaign pages, and proof-type choices near CTAs.
- `frontend-design`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new ecommerce and social-proof guidance so commerce, credibility, and personalization-sensitive work can reuse shared doctrine instead of scattering guidance across reviews, marketing copy, and generic interaction notes.
- `text-hierarchy-and-readability` and `marketing-copywriting` now cover sentence chunking, subheadings as signposts, strategic emphasis, bullet-friendly scan structure, whitespace around copy, and above-the-fold clarity so text formatting guidance better supports conversion-sensitive reading without leaning on hype.
- `status-communication` now more explicitly covers error-alert jobs, alert-container choice, recovery actions, and grouping repeated failures so banners, inline errors, and modal alerts are chosen more deliberately.
- `image-treatment`, `frontend-design`, `harden`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new hero-section and micro-failure guidance more explicitly so first-screen strategy and papercut-quality issues can reuse shared doctrine instead of being scattered across imagery, hardening, and generic interaction notes.
- `component-and-block-strategy` and `react-shadcn-accelerators` now call out named `shadcn` style baselines such as the typography-first `Sera` direction more explicitly so style presets are treated as real geometry/type foundations rather than as simple palette swaps.
- `cognitive-load` now more explicitly covers when organized density helps expert workflows, when visible controls are better than concealed simplicity, and why honest structure beats cosmetically sparse interfaces for real product work.
- `frontend-design`, `clarify`, `ux-writing`, `status-communication`, `paywalls-and-upgrade-flows`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new interface-honesty guidance so assertive UX, honest consent/progress language, and anti-manipulative product behavior can reuse one shared doctrine instead of being scattered across copy, ethics, and monetization notes.
- `cognitive-load` now more explicitly covers designing for rushed or interrupted users, reducing load without deleting useful meaning, recognition-over-recall choices like labels over mystery icons, uncertainty-reducing feedback, smarter defaults, and the difference between thoughtful friction and theatrical difficulty.
- `frontend-design`, `component-anatomy`, `image-treatment`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new aspect-ratio/card-orientation guidance more explicitly so ratio and card-direction decisions can reuse one shared doctrine instead of being scattered across image, card, and layout notes.
- `frontend-design`, `component-anatomy`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new accordion guidance more explicitly so FAQ sections, disclosure groups, stacked filters, and product-detail accordions can reuse one shared doctrine instead of relying on a short anatomy note alone.
- `frontend-design`, `component-accessibility`, `color-and-contrast`, `semantic-color`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new colorblindness guidance so semantic color, chart palettes, active-state cues, and status differentiation can reuse one shared doctrine instead of relying on contrast checks alone.
- `frontend-design`, `action-hierarchy`, `component-anatomy`, `live-validation-ux`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new disabled-buttons guidance so blocked submits, unavailable actions, and in-progress CTA locking can reuse one shared doctrine instead of scattering rules across action hierarchy and generic error handling.
- `frontend-design`, `onboard`, the shared reference index, and `README.md` now surface the new behavioral-design guidance more explicitly so onboarding, pricing, and engagement-sensitive UI work can reuse one shared doctrine instead of duplicating scattered advice.
- `frontend-design`, `harden`, `add-ui` request mapping, the shared reference index, `interaction-design`, and `README.md` now surface the new component-accessibility guidance so keyboard-focused interaction work and accessible component review can reuse one cross-cutting doctrine instead of scattering rules across modals, skip links, and isolated component notes.
- `frontend-design`, `component-anatomy`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new complex-table guidance so dense operational tables can reuse one shared doctrine instead of stretching generic table anatomy or comparison-table guidance past their limits.
- `frontend-design`, `harden`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new language/locale-selection guidance more explicitly so global preference and region-selection UX can reuse one shared doctrine instead of relying on scattered i18n notes.
- `frontend-design`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new navigation-menu guidance so mega-dropdown redesigns, header-nav strategy, and deep compact-menu work can reuse one shared doctrine instead of scattering rules across dropdown, accordion, and search references.
- `frontend-design`, `component-anatomy`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new feature-comparison guidance so considered-purchase comparison tables can reuse one shared doctrine instead of borrowing partial rules from pricing comparison, ordinary tables, and collection browsing.
- `frontend-design`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new carousel guidance more explicitly so hero sliders, swipe galleries, testimonial rails, and other multi-panel content can reuse one shared doctrine instead of reinventing carousel rules ad hoc.
- `frontend-design`, `component-anatomy`, `collection-browsing-and-filtering`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new slider guidance more explicitly so range controls, calculators, and slider-backed filters can reuse one shared doctrine instead of relying on scattered fallback notes alone.
- `frontend-design`, `component-anatomy`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new breadcrumb guidance more explicitly so nested navigation and wayfinding work can reuse one shared doctrine instead of relying on a terse component-only note.
- `frontend-design`, `interaction-design`, `component-anatomy`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new collection-browsing and filtering guidance more explicitly so long-list, faceting, and continuation-pattern work can reuse one shared doctrine instead of scattering rules across list and filter sections.
- `frontend-design`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new configurator guidance more explicitly so product-builder and customizer work can reuse one shared doctrine instead of borrowing partial rules from filters, variant pickers, and responsive notes alone.
- `frontend-design`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new date-input guidance so date of birth, memorable-date forms, and picker-vs-typed-date decisions can reuse one shared doctrine instead of relying on generic form-field advice alone.
- `frontend-design`, `date-input-ux`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new date-time-picker guidance so booking calendars, date-range flows, flexible-date exploration, and time-slot scheduling can reuse one shared doctrine instead of overloading the memorable-date guidance.
- `frontend-design`, `error-recovery`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new live-validation guidance so inline validation timing, copy-paste-friendly structured fields, severe-error interrupts, and validator-override decisions can reuse one shared doctrine instead of overloading generic error-recovery advice.

## [1.9.1] - 2026-04-16

### Added

- Shared `design-principles` doctrine now covers how to write practical, decision-making design principles that clarify both preferred defaults and anti-patterns.
- Shared `search-and-findability` doctrine now covers intent-aware site search, synonym and typo tolerance, zero-result recovery, search audits, autosuggest, metadata, and vocabulary gaps.
- Shared `component-anatomy` doctrine now also covers practical filter / faceting guidance including async result updates, slider fallbacks, stable panels, long option groups, result-count apply buttons, and narrow-layout filter surfaces.
- Shared `component-anatomy` doctrine now also covers product/result-list continuation patterns and variant-selector anatomy so catalog-style browsing and option picking can be reasoned about more systematically.
- Shared `component-anatomy` doctrine now also covers KPI cards / dashboard widgets so real-time metrics, delta cues, freshness states, and trustworthy comparison anatomy are easier to design consistently.
- Shared `audience-sensitive-design` doctrine now covers designing for Gen Z, children and parents, and older adults without falling into stereotypes, with guidance on device reality, trust, motivation, and accessibility-sensitive interaction choices.

### Changed

- `interaction-design` now includes clearer decision guidance for choosing between modals, non-modal overlays, drawers, pages, and inline approaches based on task scope and interruption cost.
- `interaction-design` now also covers when to use infinite scroll, `Load more`, or pagination, including guidance for search vs category browsing, narrow-layout thresholds, footer access, and back-button restoration.
- `interaction-design` now also covers real-time dashboard comprehension, update pacing, role-based prioritization, pause/snapshot controls, and quieter motion strategies for live decision surfaces.
- `status-communication` now also covers freshness, staleness, paused/offline/reconnecting states, cached snapshots, and accessibility considerations for trustworthy live-data interfaces.
- `empty-state-patterns` now also covers 404 / not-found recovery, including tone, navigation, and broken-link recovery guidance.
- `search-and-findability` now more explicitly covers command palettes vs site search vs filter bars, search microcopy, placeholder guidance, recent/related search labeling, and empty-submit / no-results recovery patterns.
- `marketing-copywriting` now more explicitly covers landing-page value propositions, objection handling, primary vs secondary CTA discipline, and message flow.
- `add-ui` request mapping now gives stronger commerce-specific guidance for result browsing, product-page above-the-fold summaries, variant selection, and trust-preserving catalog UX.
- `add-ui` request mapping now also gives stronger guidance for real-time dashboards and 404 / broken-link recovery surfaces.
- `frontend-design`, `setup`, `critique`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new principles and search/findability guidance more explicitly.
- `frontend-design`, `setup`, the shared reference index, and `README.md` now surface the new audience-specific guidance more explicitly so age- and life-stage-aware UX work is easier to discover.
- The repository version metadata in `package.json` and `package-lock.json` has been bumped to `2.0.0`.

## [1.9.0] - 2026-04-15

### Added

- A new in-folder index at `skills/frontend-design/reference/README.md` now maps the shared doctrine library by topic so maintainers and users can browse it without already knowing the exact filename.
- A new in-folder index at `skills/animate/reference/README.md` now groups the deeper motion guidance by use case instead of leaving the reference set as a flat filename list.
- Shared `status-communication` doctrine now covers the differences between validation, notifications, indicators, badges, inboxes, activity feeds, digest settings, severity hierarchy, and notification-fatigue mitigation.
- Shared `legacy-modernization` doctrine now covers workflow and dependency mapping, coexistence with modern products, migration-strategy choices, legacy seam pain, public-beta paths, and stakeholder / heavy-user trust building.

### Changed

- `README.md` now surfaces `interaction-design`, `status-communication`, `legacy-modernization`, `cognitive-load`, `hierarchy-checklist`, and `ux-writing` more prominently in the quick-start doctrine list, and links to both reference indexes.
- README now includes a quick skill-picker table that clarifies common ambiguities such as `critique` vs `audit` vs `polish` and `distill` vs `quieter` vs `bolder`.
- The `critique`, `audit`, `polish`, `distill`, `bolder`, and `quieter` skill descriptions now use sharper trigger language to make overlap boundaries clearer.
- `setup` now states more explicitly that `.better-web-ui.md` is the canonical design-context destination, while `.better-ui.md` and `.impeccable.md` are legacy migration inputs only.
- `animate` now links directly to its new reference index so the deeper motion library is easier to browse.
- `add-ui` now explicitly supports redesigning existing surfaces while preserving their recognizable structure, and its request mapping now also covers notification settings / feeds and legacy-modernization scenarios more directly.
- `frontend-design`, `clarify`, `onboard`, `harden`, `normalize`, and `critique` now point more explicitly to the shared doctrine needed for status communication and legacy-system modernization work.
- The repository version metadata in `package.json` and `package-lock.json` has been bumped to `1.9.0`.

## [1.8.2] - 2026-04-14

### Added

- Shared marketing-copywriting doctrine now covers context gathering, outcome-first framing, CTA strategy, lifecycle copy, marketplace listing copy, and ethical psychology for software product surfaces.
- Shared copy-editing doctrine now covers the seven-sweep editing workflow plus quick-pass checks for clarity, proof, specificity, emotional resonance, and zero-risk decision support.

### Changed

- The `clarify` skill now explicitly covers marketing copy as well as UX writing, and points to the new shared copywriting / copy-editing references when the task goes beyond interface microcopy.
- The core `frontend-design` skill, `ux-writing` reference, `onboard` skill, `add-ui` request mapping, and README now surface the new copy guidance so it is easier to find and reuse.
- The repository version metadata in `package.json` and `package-lock.json` has been bumped to `1.8.2`.

## [1.8.1] - 2026-04-13

### Changed

- `README.md` now uses a more human, lightly tongue-in-cheek introduction aimed at developers who want help making better UI, UX, and animation decisions.
- The inspiration and attribution material now appears near the top of `README.md` with clearer spacing, per-source rows, and explicit creator names, while the duplicate attribution section was removed from the bottom of the file.
- README now states the framework-agnostic positioning more explicitly and documents a recommended upgrade path for older installs that preserves project-specific setup in `.better-web-ui.md`.

## [1.8.0] - 2026-04-13

### Added

- The `animate` skill now has its own `reference/` set covering Emil-inspired easing defaults, timing heuristics, gesture handling patterns, polish and reduced-motion patterns, performance-sensitive property choices, transform techniques, strategy heuristics, on-screen movement, drawer timing/easing, spring usage, and explicit source attribution.

### Changed

- README, contributing guidance, and development docs now use a clearer documentation map, reduce duplicated reference catalogs, and make the shared doctrine index easier to scan and maintain as the repository grows.
- Reorganized `README.md` around a shorter, human-first project overview with clearer installation, capability, doctrine, attribution, and contribution sections.
- README and `NOTICE.md` now point Anthropic attribution to the current upstream `better-web-ui` plugin path instead of stale frontend-design links.
- Motion attribution now explicitly credits Emil Kowalski's [animations.dev](https://animations.dev/) course and related open-source motion work where it informs the `animate` skill.
- Shared frontend doctrine now also covers dark-mode-only `color-scheme` guidance, layout-faithful skeleton placeholders, async combobox result stability, Motion adapter guidance for React/Vue/vanilla JS, and SVG path morphing as a refined disclosure-icon animation option.
- Animation doctrine now more explicitly prefers modern CSS, Tailwind utilities, and WAAPI wherever they can solve the motion cleanly, reserving Motion for interactions that genuinely need a heavier framework-linked animation layer.

### Fixed

- Removed a broken Anthropic attribution link discovered during the documentation link audit.
- Synced root package version metadata in `package-lock.json` with the bumped package version.

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