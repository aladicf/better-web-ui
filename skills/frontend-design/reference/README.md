# Frontend Design Reference Index

This folder is the shared doctrine layer for `better-web-ui`.

Use it as a map of the map when you know you need guidance but do not yet know which specific reference file to open.

Important default: the more component-shaped references in this folder are mostly for custom primitives, headless implementations, or plain HTML / CSS / JavaScript builds. If a mature component library already handles the primitive well, match that library first and use the pattern docs mainly for fit, structure, defaults, composition, and surrounding UX decisions. Cross-cutting behavior docs such as destructive actions, onboarding, validation, permissions, or status communication still apply even when a mature library is in use.

## Start here

If you only open a few files first, make them these:

- [ux strategy](./ux-strategy.md) — connect UX direction to user segments, priorities, feasibility, and risk
- [audience-sensitive design](./audience-sensitive-design.md) — adapt UX to specific age groups, life stages, gatekeepers, trust models, and accessibility expectations
- [design process](./design-process.md) — move from vague request to clearer direction
- [design principles](./design-principles.md) — turn values and tradeoffs into usable team defaults
- [hierarchy checklist](./hierarchy-checklist.md) — sanity check priority, grouping, and grayscale clarity
- [interaction design](./interaction-design.md) — patterns, focus, loading, overlays, and guardrails
- [micro failures and perceived quality](./micro-failures-and-perceived-quality.md) — tiny repeated jank, weak feedback, state loss, and other trust-eroding papercuts that make products feel broken before they actually crash
- [loading feedback and perceived performance](./loading-feedback-and-perceived-performance.md) — honest waiting states, skeleton decisions, stale-data cues, and trust-preserving loading behavior
- [aspect ratio and card orientation](./aspect-ratio-and-card-orientation.md) — ratio tokens, cropping logic, browse-vs-evaluate card choices, and responsive card/media rhythm
- [hero sections UX](./hero-sections-ux.md) — above-the-fold clarity, hero-image tradeoffs, first-screen proof, and narrow-layout/performance-aware hero decisions
- [component accessibility](./component-accessibility.md) — cross-cutting keyboard support, focus handling, skip links, hidden content, and accessibility checks for custom or third-party components
- [colorblindness UX](./colorblindness-ux.md) — semantic states, chart palettes, non-color-only cues, and lightness-aware color choices for color-vision deficiencies
- [disabled buttons UX](./disabled-buttons-ux.md) — blocked primary actions, disabled submit/continue buttons, in-progress locking, and better alternatives to mystery-disabled CTAs
- [destructive action UX](./destructive-action-ux.md) — soft delete vs hard delete, undo vs confirm, bulk-action guardrails, and recovery after risky actions
- [accordion UX](./accordion-ux.md) — disclosure groups, FAQ sections, stacked detail panels, full-row triggers, and single-open vs multi-open accordion decisions
- [behavioral design](./behavioral-design.md) — progressive disclosure, priming, framing, completion cues, and ethical engagement patterns
- [onboarding UX](./onboarding-ux.md) — first-run sequencing, activation, aha moments, setup wizards, tours-vs-checklists decisions, and returning-user re-entry
- [ecommerce UX](./ecommerce-ux.md) — category/product/checkout design, commerce trust cues, merchandising restraint, and friction-aware shopping flows
- [interface honesty](./interface-honesty.md) — assertive UX language, honest progress and consent copy, anti-gaslighting microcopy, and trust-preserving product behavior
- [information architecture UX](./information-architecture-ux.md) — large-product navigation models, settings architecture, cross-product structure, and grouping across broad surfaces
- [language and locale selection](./language-and-locale-selection.md) — language switches, country selectors, regional overrides, and locale-preference UX
- [navigation menu UX](./navigation-menu-ux.md) — mega-dropdowns, click-vs-hover behavior, compact menu structures, and alternatives for large-site navigation
- [breadcrumb UX](./breadcrumb-ux.md) — breadcrumb placement, current-location clarity, narrow-layout reduction, and sibling-jump wayfinding
- [collection browsing and filtering](./collection-browsing-and-filtering.md) — result-list continuation, comfortable-range filtering, narrow-layout filter surfaces, and browse-vs-search collection UX
- [feature comparison UX](./feature-comparison-ux.md) — considered-purchase comparison tables, shortlist compare flows, difference highlighting, sticky headers, and responsive product comparison
- [configurator UX](./configurator-ux.md) — presets, step navigation, responsive product builders, real-time previews, dependencies, and save/resume configuration UX
- [slider UX](./slider-ux.md) — value and range slider decisions, scale design, histogram-backed filtering, precise fallbacks, and responsive slider behavior
- [carousel UX](./carousel-ux.md) — when to avoid carousels, when they help, and how to make them navigable and accessible when they stay
- [date input UX](./date-input-ux.md) — date of birth, memorable dates, typed-date fields, and when a picker should or should not appear
- [date-time picker UX](./date-time-picker-ux.md) — booking calendars, date ranges, flexible dates, time slots, and combined date-and-time scheduling flows
- [complex table UX](./complex-table-ux.md) — read-only/search/editable table architecture, pinned columns, header filters, command logic, and desktop-first operational grid design
- [live validation UX](./live-validation-ux.md) — blur-vs-real-time timing, reward-early/punish-late behavior, copy-paste-friendly validation, and validator override strategy
- [error recovery](./error-recovery.md) — what users see after failure: summaries, field recovery, retry paths, and fixable error behavior
- [authentication and account recovery](./authentication-and-account-recovery.md) — sign-in, MFA, session expiry, password UX, and recovery-stack guidance
- [permissions and roles UX](./permissions-and-roles-ux.md) — role models, request-access flows, access-denied recovery, risky permission changes, and visibility-vs-capability decisions
- [reviews and ratings](./reviews-and-ratings.md) — product-review trust, rating summaries, and social proof that actually helps decisions
- [social proof patterns](./social-proof-patterns.md) — testimonials, trust badges, customer logos, case studies, and proof placement across marketing and commerce surfaces
- [search and findability](./search-and-findability.md) — site search, autosuggest, zero-results recovery, and intent-aware findability
- [status communication](./status-communication.md) — notifications, validations, badges, inboxes, and attention management
- [legacy modernization](./legacy-modernization.md) — legacy-system UX upgrades, migration strategy, stakeholder trust, and hybrid old/new seams
- [cognitive load](./cognitive-load.md) — simplify decisions, memory burden, and complexity exposure
- [ux writing](./ux-writing.md) — interface microcopy, labels, errors, and confirmations
- [typography](./typography.md) — type scale, hierarchy, pairing, and readability
- [color and contrast](./color-and-contrast.md) — palette structure, contrast, and theme discipline

## Structure and layout

- [spatial design](./spatial-design.md)
- [spacing system](./spacing-system.md)
- [aspect ratio and card orientation](./aspect-ratio-and-card-orientation.md)
- [hierarchy checklist](./hierarchy-checklist.md)
- [surface separation](./surface-separation.md)
- [elevation system](./elevation-system.md)

Use these when the UI feels crowded, flat, ambiguously grouped, or visually monotonous.

## Interaction and product behavior

- [ux strategy](./ux-strategy.md)
- [audience-sensitive design](./audience-sensitive-design.md)
- [interaction design](./interaction-design.md)
- [micro failures and perceived quality](./micro-failures-and-perceived-quality.md)
- [loading feedback and perceived performance](./loading-feedback-and-perceived-performance.md)
- [component accessibility](./component-accessibility.md)
- [colorblindness UX](./colorblindness-ux.md)
- [disabled buttons UX](./disabled-buttons-ux.md)
- [destructive action UX](./destructive-action-ux.md)
- [accordion UX](./accordion-ux.md)
- [behavioral design](./behavioral-design.md)
- [onboarding UX](./onboarding-ux.md)
- [ecommerce UX](./ecommerce-ux.md)
- [language and locale selection](./language-and-locale-selection.md)
- [navigation menu UX](./navigation-menu-ux.md)
- [breadcrumb UX](./breadcrumb-ux.md)
- [collection browsing and filtering](./collection-browsing-and-filtering.md)
- [feature comparison UX](./feature-comparison-ux.md)
- [configurator UX](./configurator-ux.md)
- [slider UX](./slider-ux.md)
- [carousel UX](./carousel-ux.md)
- [date input UX](./date-input-ux.md)
- [date-time picker UX](./date-time-picker-ux.md)
- [error recovery](./error-recovery.md)
- [authentication and account recovery](./authentication-and-account-recovery.md)
- [permissions and roles UX](./permissions-and-roles-ux.md)
- [reviews and ratings](./reviews-and-ratings.md)
- [search and findability](./search-and-findability.md)
- [predictive and intent-driven UI](./predictive-and-intent-ui.md)
- [information architecture UX](./information-architecture-ux.md)
- [status communication](./status-communication.md)
- [legacy modernization](./legacy-modernization.md)
- [cognitive load](./cognitive-load.md)
- [action hierarchy](./action-hierarchy.md)
- [empty-state patterns](./empty-state-patterns.md)

Use these when the problem is not just styling, but how the product behaves, guides, or protects the user.

## Typography and writing

- [design principles](./design-principles.md)
- [typography](./typography.md)
- [text hierarchy and readability](./text-hierarchy-and-readability.md)
- [ux writing](./ux-writing.md)
- [interface honesty](./interface-honesty.md)
- [error recovery](./error-recovery.md)
- [behavioral design](./behavioral-design.md)
- [hero sections UX](./hero-sections-ux.md)
- [marketing copywriting](./marketing-copywriting.md)
- [social proof patterns](./social-proof-patterns.md)
- [copy editing sweeps](./copy-editing-sweeps.md)

Use these when the interface reads poorly, sounds unclear, or needs stronger conversion-aware messaging.

## Honesty, trust, and assertive language

- [interface honesty](./interface-honesty.md)
- [ux writing](./ux-writing.md)
- [status communication](./status-communication.md)
- [paywalls and upgrade flows](./paywalls-and-upgrade-flows.md)

Use these when the problem is not just wording polish, but whether the interface is speaking plainly about errors, progress, consent, exits, upgrades, or user-harming tradeoffs.

## Color, tone, and visual personality

- [color and contrast](./color-and-contrast.md)
- [colorblindness UX](./colorblindness-ux.md)
- [color ramp workflow](./color-ramp-workflow.md)
- [semantic color](./semantic-color.md)
- [personality levers](./personality-levers.md)
- [finishing touches](./finishing-touches.md)
- [ai slop detection](./ai-slop-detection.md)

Use these when the UI needs stronger mood, more systematic ramps, or protection from generic AI aesthetics.

## Color accessibility and semantic-state resilience

- [colorblindness UX](./colorblindness-ux.md)
- [color and contrast](./color-and-contrast.md)
- [semantic color](./semantic-color.md)

Use these when color is carrying meaning in states, charts, legends, selections, or validation feedback and must remain understandable under color-vision deficiencies.

## Motion and implementation

- [motion design](./motion-design.md)
- [CSS, Tailwind, and WAAPI motion](./css-tailwind-and-waapi-motion.md)
- [framework official docs](./framework-official-docs.md)
- [react shadcn accelerators](./react-shadcn-accelerators.md)

For the deeper motion doctrine library, also see the [animate reference index](../../animate/reference/README.md).

## Responsive adaptation and support surfaces

- [responsive design](./responsive-design.md)
- [sidebar and footer UX](./sidebar-and-footer-ux.md)

Use these when the work depends on narrow-first layout strategy, component reflow across contexts, sidebars or right rails, footer utility/recovery paths, or deciding whether secondary content belongs in a peripheral support surface at all.

## Components and systems

- [component anatomy](./component-anatomy.md)
- [aspect ratio and card orientation](./aspect-ratio-and-card-orientation.md)
- [hero sections UX](./hero-sections-ux.md)
- [component accessibility](./component-accessibility.md)
- [accordion UX](./accordion-ux.md)
- [complex table UX](./complex-table-ux.md)
- [component and block strategy](./component-and-block-strategy.md)
- [design-system alignment](./design-system-alignment.md)
- [image treatment](./image-treatment.md)
- [text-layout prediction](./text-layout-prediction.md)

Use these when the work involves reusable primitives, design-system reuse, screenshots/media, or repeated layout logic.

Most of the pattern-specific references in this section are custom/headless-first. If a mature component library already owns the primitive, use them mainly to shape surrounding UX and product decisions rather than to override solid upstream anatomy by default.

## First impressions, hero sections, and above-the-fold messaging

- [hero sections UX](./hero-sections-ux.md)
- [marketing copywriting](./marketing-copywriting.md)
- [image treatment](./image-treatment.md)

Use these when the top of the page needs to explain the product quickly, when a hero image may be doing more harm than good, or when above-the-fold media and copy need to work together.

## Cards, media proportion, and browsing rhythm

- [aspect ratio and card orientation](./aspect-ratio-and-card-orientation.md)
- [component anatomy](./component-anatomy.md)
- [image treatment](./image-treatment.md)

Use these when the work depends on card direction, media ratios, crop rules, list rhythm, browse-vs-evaluate layout choices, or keeping repeated cards comparable across breakpoints.

## Primary actions, disabled states, destructive actions, and blocked progression

- [disabled buttons UX](./disabled-buttons-ux.md)
- [destructive action UX](./destructive-action-ux.md)
- [live validation UX](./live-validation-ux.md)
- [error recovery](./error-recovery.md)
- [action hierarchy](./action-hierarchy.md)

Use these when the work touches disabled submit buttons, blocked CTAs, delete/archive/revoke flows, undo-vs-confirm decisions, bulk destructive work, in-progress action locking, action availability, or deciding whether a primary action should stay enabled and explain errors instead.

## Accordions, disclosures, and stacked detail sections

- [accordion UX](./accordion-ux.md)
- [component anatomy](./component-anatomy.md)
- [component accessibility](./component-accessibility.md)

Use these when the work touches FAQ sections, product-detail accordions, settings groups, filter accordions, schedule reveals, or any disclosure pattern where hit targets, state clarity, and hidden-content behavior matter.

## Accessibility, focus, and keyboard support

- [component accessibility](./component-accessibility.md)
- [interaction design](./interaction-design.md)
- [error recovery](./error-recovery.md)

Use these when the work depends on keyboard parity, focus movement, hidden-content strategy, component semantics, accessible states, or testing whether a component is actually usable with assistive technology.

## Perceived quality, resilience, and papercut failures

- [micro failures and perceived quality](./micro-failures-and-perceived-quality.md)
- [loading feedback and perceived performance](./loading-feedback-and-perceived-performance.md)
- [error recovery](./error-recovery.md)
- [status communication](./status-communication.md)

Use these when the product technically works but feels unreliable because of tiny repeated failures, weak feedback, unstable overlays, state loss, or unhelpful local errors.

## Onboarding, activation, and first-run learning

- [onboarding UX](./onboarding-ux.md)
- [behavioral design](./behavioral-design.md)
- [empty-state patterns](./empty-state-patterns.md)
- [loading feedback and perceived performance](./loading-feedback-and-perceived-performance.md)
- [status communication](./status-communication.md)

Use these when the work depends on first-run sequencing, activation checklists, aha moments, tours vs contextual learning, setup wizards, progressive permission requests, or returning-user re-entry into an unfinished setup flow.

## Product builders, configurators, and guided customization

- [configurator UX](./configurator-ux.md)
- [slider UX](./slider-ux.md)
- [collection browsing and filtering](./collection-browsing-and-filtering.md)
- [responsive design](./responsive-design.md)

Use these when the work involves step-based customization, presets, real-time previews, dependency-heavy option flows, slider-driven value exploration, or responsive product-building interfaces.

## Search, filters, and collection browsing

- [collection browsing and filtering](./collection-browsing-and-filtering.md)
- [slider UX](./slider-ux.md)
- [feature comparison UX](./feature-comparison-ux.md)
- [search and findability](./search-and-findability.md)
- [predictive and intent-driven UI](./predictive-and-intent-ui.md)

Use these when users must narrow, compare, continue, revisit, recover their place across large result sets, or manipulate range filters without precision traps.

## Tables, grids, and operational data

- [complex table UX](./complex-table-ux.md)
- [component anatomy](./component-anatomy.md)
- [feature comparison UX](./feature-comparison-ux.md)

Use these when the work involves dense read-only tables, search tables, editable grids, pinned columns, header filters, row selection, or desktop-first operational data work.

## Sliders and range controls

- [slider UX](./slider-ux.md)

Use this when the work touches loan calculators, pricing/data-plan sliders, range filters, media scrubbers, dual-handle controls, or decisions about whether a slider should become radio buttons, steppers, or direct input instead.

## Comparison, pricing, and decision support

- [feature comparison UX](./feature-comparison-ux.md)
- [pricing and packaging](./pricing-and-packaging.md)

Use these when users need to compare shortlisted products or plans, understand the most meaningful differences quickly, and preserve confidence across longer decision-making journeys.

## Carousels, galleries, and multi-panel browsing

- [carousel UX](./carousel-ux.md)

Use this when the work touches gesture-enabled galleries, testimonial sliders, feature rails, onboarding walkthroughs, hero carousels, or other multi-panel content where discoverability and accessibility are easy to get wrong.

## Navigation and wayfinding

- [information architecture UX](./information-architecture-ux.md)
- [navigation menu UX](./navigation-menu-ux.md)
- [breadcrumb UX](./breadcrumb-ux.md)
- [search and findability](./search-and-findability.md)
- [sidebar and footer UX](./sidebar-and-footer-ux.md)

Use these when users need stronger orientation inside nested structures, clearer suite-vs-product-vs-object scope, better current-location cues, or more predictable ways back up and across a complex product.

## Authentication, permissions, and access control

- [authentication and account recovery](./authentication-and-account-recovery.md)
- [permissions and roles UX](./permissions-and-roles-ux.md)
- [information architecture UX](./information-architecture-ux.md)
- [empty-state patterns](./empty-state-patterns.md)
- [destructive action UX](./destructive-action-ux.md)

Use these when the work touches sign-in, request-access flows, access-denied recovery, admin-vs-member behavior, permission editing, visibility-vs-capability distinctions, or risky role changes.

## Forms, memorable dates, and date selection

- [date input UX](./date-input-ux.md)
- [date-time picker UX](./date-time-picker-ux.md)
- [live validation UX](./live-validation-ux.md)
- [disabled buttons UX](./disabled-buttons-ux.md)
- [error recovery](./error-recovery.md)

Use these when the work depends on date of birth, memorable dates, typed date entry, booking calendars, date ranges, time-slot scheduling, calendar-vs-direct-input decisions, validation timing, blocked CTAs, or date-specific validation and recovery. Use `live-validation-ux` for **when** validation should fire; use `error-recovery` for what happens after validation or submission fails.

## Booking calendars and scheduling flows

- [date-time picker UX](./date-time-picker-ux.md)
- [date input UX](./date-input-ux.md)

Use these when the work touches flight, train, hotel, appointment, restaurant, rental, or availability-driven date/time selection where flexible dates, range picking, and time-slot filtering matter.

## Globalization and regional preferences

- [language and locale selection](./language-and-locale-selection.md)

Use this when the work touches language switching, regional overrides, country or market selection, currency or shipping preferences, or first-visit locale nudges.

## Authentication, pricing, and monetization surfaces

- [authentication and account recovery](./authentication-and-account-recovery.md)
- [ecommerce UX](./ecommerce-ux.md)
- [pricing and packaging](./pricing-and-packaging.md)
- [paywalls and upgrade flows](./paywalls-and-upgrade-flows.md)
- [reviews and ratings](./reviews-and-ratings.md)

## Commerce, trust, and social proof

- [ecommerce UX](./ecommerce-ux.md)
- [reviews and ratings](./reviews-and-ratings.md)
- [social proof patterns](./social-proof-patterns.md)
- [pricing and packaging](./pricing-and-packaging.md)

Use these when the work involves product discovery, product pages, carts, checkout, trust cues, testimonials, ratings, case studies, or conversion-sensitive proof placement.

Use these when the task touches account access, plan comparison, billing clarity, feature gates, or upgrade prompts.

## How to use this folder well

- start with the smallest reference that answers the real problem
- use the grouped sections above when the filename is not obvious
- prefer shared doctrine here over duplicating the same guidance inside many skills
- if a task is clearly framework-specific, open [framework official docs](./framework-official-docs.md) before making architecture calls

This folder exists so individual skills can stay focused while still sharing one coherent design brain.
