## Request mapping heuristics

Use this reference to shape the five directions for common request types.

When React-based fallback defaults are relevant, pair this with [component library integration](./component-library-integration.md) so you decide not just *what* artifact is being requested, but also whether that artifact should be led by primitives, reusable patterns, or block accelerators.

When a request maps to a component-pattern reference such as accordion, breadcrumb, carousel, slider, date input, date-time picker, navigation menu, comparison, configurator, or table guidance, treat that reference as custom/headless-first by default. If a mature component library already owns the primitive, match the library first and use the reference mainly for fit, composition, defaults, surrounding states, and workflow decisions.

### Hero / landing / CTA

Prioritize:

- hierarchy first
- strong typography
- believable proof
- one obvious primary action

Also:

- match the page promise to the user's likely traffic source and awareness level
- define the value proposition clearly as both the benefit and how the product delivers it
- make the headline outcome-specific, not category-foggy
- do not default to an abstract full-bleed hero image when product clarity, proof, or a tighter product visual would answer the page's first questions better
- keep proof close to the strongest claim
- use CTA text that says what the user gets next, not generic button filler
- handle predictable objections near the relevant CTA, form, or proof point instead of hiding them elsewhere
- keep a secondary CTA quieter and lower-commitment when one is needed
- if a hero uses a carousel, make sure the first panel carries the strongest message and that the content remains reachable elsewhere instead of relying on later slides for discovery

For redesigns of an existing hero, landing page, blog page, login/signup page, or CTA surface:

- preserve the current narrative skeleton when the user asks to keep the essence: section order, proof blocks, CTA placement, and major content zones should usually stay recognizable
- push distinction through typography, palette, copywriting tone, proof styling, imagery direction, spacing rhythm, and detail language before changing the information architecture
- if you offer a stretch direction, label it clearly as the bolder structural departure instead of treating it as the default

Pair this with [../../frontend-design/reference/marketing-copywriting.md](../../frontend-design/reference/marketing-copywriting.md) when the artifact depends on headline quality, section sequencing, CTA strategy, or conversion-aware copy structure.
Pair this with [../../frontend-design/reference/social-proof-patterns.md](../../frontend-design/reference/social-proof-patterns.md) when credibility depends on testimonials, trust badges, customer logos, case studies, or proof placement near the CTA.
Pair this with [../../frontend-design/reference/hero-sections-ux.md](../../frontend-design/reference/hero-sections-ux.md) when the work depends on above-the-fold clarity, hero-image restraint, or choosing a stronger first-screen alternative to a decorative banner.
Pair this with [../../frontend-design/reference/carousel-ux.md](../../frontend-design/reference/carousel-ux.md) when the artifact includes a carousel, swipe gallery, or auto-advancing hero.

### Error states / alerts / recovery

Prioritize:

- clear explanation of what failed
- the fastest likely recovery path
- local context before global alarm
- calm trust over theatrical interruption

Also:

- keep fixable problems close to the field, row, or region that caused them instead of shouting from somewhere unrelated
- prefer inline errors or persistent local alerts before toasts or modals for recoverable issues
- use banners or route-level states when the whole region or page is affected
- include retry, undo, help, or support actions when they materially reduce abandonment
- group repeated failures instead of stacking several alerts in a row
- avoid vague `Something went wrong` copy when the system knows what failed and what users should do next
- if the failure happens during delete, archive, revoke, or other risky operations, preserve context and offer a clear recovery path instead of dumping users into a generic dead end

Pair this with [../../frontend-design/reference/error-recovery.md](../../frontend-design/reference/error-recovery.md) when the request depends on validation behavior, summaries, or recoverable field and form errors.
Pair this with [../../frontend-design/reference/status-communication.md](../../frontend-design/reference/status-communication.md) when the request depends on alert placement, interruption level, banners, toasts, or broader notification hierarchy.
Pair this with [../../frontend-design/reference/destructive-action-ux.md](../../frontend-design/reference/destructive-action-ux.md) when the work depends on delete/archive/remove flows, undo-vs-confirm choices, bulk destructive actions, or post-failure escape hatches.

### Destructive actions / delete / archive / bulk operations

Prioritize:

- honest consequence framing
- reversibility clarity
- scope awareness before commitment
- recovery that preserves momentum

Also:

- decide whether the action is really `Delete`, `Archive`, `Remove`, `Disconnect`, or `Deactivate` instead of using one scary verb for every job
- prefer undo for low-risk reversible single-item actions instead of interruptive confirmation churn
- use confirmation for irreversible, high-consequence, or broad-blast-radius actions
- keep the affected count and eligibility visible for bulk operations instead of hiding scope inside a generic dialog
- preserve selection, show partial success honestly, and offer retry or restore paths when destructive batch work fails

Pair this with [../../frontend-design/reference/destructive-action-ux.md](../../frontend-design/reference/destructive-action-ux.md) when the request involves deletion flows, archive patterns, dangerous bulk actions, undo behavior, or destructive recovery.
Pair this with [../../frontend-design/reference/action-hierarchy.md](../../frontend-design/reference/action-hierarchy.md) when the work depends on how prominently destructive controls should appear before and during confirmation.
Pair this with [../../frontend-design/reference/interface-honesty.md](../../frontend-design/reference/interface-honesty.md) when the copy needs to explain irreversible consequences, retention windows, or decline/escape paths clearly.

### Pricing / comparison / plan selection

Prioritize:

- scanability
- difference clarity
- action confidence
- plan framing that reduces hesitation

Also:

- ask for the pricing metric and target buyer when missing
- make packaging, metric, and price point legible as separate decisions
- show who each tier is for instead of relying on feature sprawl alone
- make annual billing, limits, and enterprise escalation easy to understand
- keep the most decision-shaping differences visible before any long comparison matrix
- keep plan headers available in dense comparison views so users do not lose orientation
- avoid raw horizontal-scroll pricing tables in narrow layouts when tabs, stacked comparisons, or two-plan compare patterns would work better

Pair this with [../../frontend-design/reference/pricing-and-packaging.md](../../frontend-design/reference/pricing-and-packaging.md) when the work touches packaging logic, billing clarity, or pricing-page strategy.

### Feature comparison / product comparison

Prioritize:

- difference clarity
- shortlist management
- decision confidence
- responsive comparison that stays understandable on narrow screens

Also:

- use comparison mainly for considered purchases or ambiguous technical products, not as generic category clutter
- surface pros, cons, highlights, and review-backed clues above the raw spec matrix when that helps users decide faster
- group long attribute sets and let users switch between all attributes, only differences, and only similarities when table length justifies it
- keep product identity visible with sticky headers in long scans
- support add, remove, and reorder flows without sending users back on scavenger hunts for the compare action
- use a persistent compare bar or shortlist surface instead of interruptive lightboxes after every add action
- in narrow layouts, prefer a focused two-item or stepper-based comparison over a squeezed wide-layout clone

Pair this with [../../frontend-design/reference/feature-comparison-ux.md](../../frontend-design/reference/feature-comparison-ux.md) when the request involves side-by-side product comparison, shortlist compare UX, compare bars, difference highlighting, or responsive feature-comparison behavior.

### Paywalls / upgrade prompts / trial expiration

Prioritize:

- value before ask
- timing that follows a real aha or limit moment
- clear explanation of what unlocks and why it matters
- an honest path to dismiss, continue free, or choose a lower-friction alternative when one exists

Also:

- match the prompt type to the situation: feature gate, usage limit, trial ending, or tier upsell
- keep the upgrade path short and in-context
- do not rely on dark patterns to lift conversion

Pair this with [../../frontend-design/reference/paywalls-and-upgrade-flows.md](../../frontend-design/reference/paywalls-and-upgrade-flows.md).
Pair this with [../../frontend-design/reference/interface-honesty.md](../../frontend-design/reference/interface-honesty.md) when the work depends on honest decline paths, transparent renewal language, assertive upgrade framing, or resisting manipulative monetization cues.
Pair this with [../../frontend-design/reference/predictive-and-intent-ui.md](../../frontend-design/reference/predictive-and-intent-ui.md) when the work depends on recommendations, personalized reminders, usage-based relevance, or contextual upsell suggestions that should help without becoming creepy or opaque.

### Onboarding / activation / first-run setup

Prioritize:

- fast time to value
- honest progress and effort framing
- the smallest useful setup path
- clear re-entry for returning users

Also:

- design the first-run sequence around the earliest meaningful success instead of around everything the business eventually wants to collect
- choose tours, checklists, contextual onboarding, and setup wizards by job instead of stacking them all into one ceremonial gauntlet
- request permissions only when their benefit is visible and the user can understand why the ask appears now
- preserve progress when setup is interrupted and make returning-user re-entry shorter, calmer, and more state-aware than the first-run experience
- use honest loading and import states during setup so `preparing your workspace` does not become performance theater

Pair this with [../../frontend-design/reference/onboarding-ux.md](../../frontend-design/reference/onboarding-ux.md) when the request involves activation strategy, first-run sequencing, aha moments, setup wizards, tours, checklists, or returning-user onboarding behavior.
Pair this with [../../frontend-design/reference/behavioral-design.md](../../frontend-design/reference/behavioral-design.md) when the work depends on priming, completion cues, step framing, or reducing abandonment through better sequencing.
Pair this with [../../frontend-design/reference/permissions-and-roles-ux.md](../../frontend-design/reference/permissions-and-roles-ux.md) when onboarding includes invites, role selection, request-access paths, or progressive permission requests.
Pair this with [../../frontend-design/reference/loading-feedback-and-perceived-performance.md](../../frontend-design/reference/loading-feedback-and-perceived-performance.md) when setup, import, or first-run data preparation creates waits that need honest progress feedback.
Pair this with [../../frontend-design/reference/responsive-design.md](../../frontend-design/reference/responsive-design.md) when the onboarding flow, checklist, or setup wizard must reflow across narrow, medium, and split-screen contexts.

### Auth / account / settings

Prioritize:

- clarity
- reassurance
- error resilience
- reduced ambiguity over decorative flourish

Also:

- reduce credential friction: support password managers, pasted credentials, and clear password rules
- explain why extra verification is happening instead of dropping users into mysterious dead ends
- treat recovery as getting back into the account, not just forcing a password reset ceremony
- avoid mystery-disabled primary actions on sign-in, sign-up, verification, and recovery flows; keep the CTA explainable or enabled with clear recovery guidance
- keep social sign-in optional for broad audiences unless the product truly depends on federation
- preserve destination and progress across session expiry or re-authentication when possible
- treat language, country, currency, and similar regional settings as distinct choices when the product serves global users
- avoid assuming IP or browser locale should silently override the user’s intent
- separate personal settings, organization settings, billing, security, and notification preferences according to who is affected and who has permission to change them

For redesigns of existing auth surfaces:

- preserve task order, field expectations, and recovery paths unless the current flow is demonstrably broken
- explore differences through trust tone, copy clarity, typography, color, spacing, and support content more than through novel interaction patterns

Pair this with [../../frontend-design/reference/authentication-and-account-recovery.md](../../frontend-design/reference/authentication-and-account-recovery.md) when the work touches sign-in, sign-up, reset password, magic links, social sign-in, two-factor flows, or access recovery.
Pair this with [../../frontend-design/reference/disabled-buttons-ux.md](../../frontend-design/reference/disabled-buttons-ux.md) when the work depends on blocked `Continue` / `Verify` / `Create account` actions, unavailable states, or in-progress button locking.
Pair this with [../../frontend-design/reference/language-and-locale-selection.md](../../frontend-design/reference/language-and-locale-selection.md) when the work touches language selectors, region pickers, currency preferences, or locale settings.
Pair this with [../../frontend-design/reference/information-architecture-ux.md](../../frontend-design/reference/information-architecture-ux.md) when the work depends on settings structure, role-based grouping, or keeping account and organization scope clear.
Pair this with [../../frontend-design/reference/responsive-design.md](../../frontend-design/reference/responsive-design.md) when settings navigation, authentication forms, or account-management layouts need different structures across narrow, wide, and split-screen contexts.

### Permissions / roles / access management

Prioritize:

- scope clarity
- understandable role models
- real recovery paths for blocked users
- consequence-aware editing for risky changes

Also:

- distinguish role, permission, visibility, and capability instead of flattening them into one fuzzy access concept
- make it obvious whether the user is editing organization, workspace, project, or object-level access
- explain who can grant access and what happens after a `Request access` action instead of leaving users at a 403 dead end
- treat admin/owner transfers, last-admin removal, and broad permission grants as high-consequence edits that need stronger framing than an ordinary dropdown change
- prefer role bundles for most people and expose detailed per-permission editing only when the product genuinely needs it

Pair this with [../../frontend-design/reference/permissions-and-roles-ux.md](../../frontend-design/reference/permissions-and-roles-ux.md) when the request involves role models, request-access flows, access-denied recovery, capability boundaries, or risky permission changes.
Pair this with [../../frontend-design/reference/information-architecture-ux.md](../../frontend-design/reference/information-architecture-ux.md) when the problem is really scope confusion across organization, workspace, project, and object settings.
Pair this with [../../frontend-design/reference/authentication-and-account-recovery.md](../../frontend-design/reference/authentication-and-account-recovery.md) when the issue is identity proof, sign-in recovery, or step-up authentication rather than authorization structure.
Pair this with [../../frontend-design/reference/destructive-action-ux.md](../../frontend-design/reference/destructive-action-ux.md) when the work depends on revoking access, removing admins, or other risky role changes with organizational impact.

### Form completion / blocked CTAs / disabled buttons

Prioritize:

- clear next-step visibility
- obvious explanation for blockage
- accessible recovery guidance
- a real way out when validation or availability fails

Also:

- prefer enabled submit plus clear validation feedback over mystery-disabled primary actions when the task can recover cleanly on submit
- disable actions mainly for true unavailability or short in-progress duplicate-prevention states, not as a vague proxy for hidden validation problems
- explain why an action is unavailable close to the button, especially in long narrow layouts where the root cause may be far away
- use default selections, alternative actions, or support/notify-me paths when those keep users moving more honestly than a blocked CTA
- if a disabled state is necessary, keep keyboard and assistive-technology discoverability in mind instead of turning the control into a silent dead zone

Pair this with [../../frontend-design/reference/disabled-buttons-ux.md](../../frontend-design/reference/disabled-buttons-ux.md) when the request involves disabled submit buttons, blocked progress, unavailable actions, or deciding whether the CTA should stay enabled and explain errors on click.
Pair this with [../../frontend-design/reference/live-validation-ux.md](../../frontend-design/reference/live-validation-ux.md) when the blocked state depends on inline validation timing or structured-field feedback.
Pair this with [../../frontend-design/reference/error-recovery.md](../../frontend-design/reference/error-recovery.md) when the work depends on summaries, jump-links, or field-level recovery after submit.

### Notifications / inbox / activity feed / notification settings

Prioritize:

- clear severity hierarchy
- low interruption by default
- frequency control
- scanability and action clarity

Also:

- distinguish validation, passive indicators, inbox entries, alerts, and notifications instead of treating them as one pattern
- use calm defaults and recommended modes before overwhelming users with a giant toggle wall
- preserve user trust with mute, snooze, digest, summary, or quiet-hours options when volume could grow
- keep human-originated or awaited messages more prominent than generic automated chatter
- make feed rows easy to scan by source, object, urgency, and recency

Pair this with [../../frontend-design/reference/status-communication.md](../../frontend-design/reference/status-communication.md) when the work involves notification centers, reminder settings, badges, push prompts, digest preferences, or activity feeds.
Pair this with [../../frontend-design/reference/interface-honesty.md](../../frontend-design/reference/interface-honesty.md) when the messaging should become more direct, less apologetic, or more trustworthy under interruptions, failures, or reminders.

### Legacy modernization / replacement beta / hybrid old-new flow

Prioritize:

- workflow continuity
- low-risk improvements first
- seam reduction between old and new UI
- trust with heavy users and stakeholders

Also:

- map what must stay behaviorally consistent before exploring visual futures
- prefer improvements that clarify validation, errors, processing, hierarchy, and affordances without breaking critical business logic
- if the request involves a replacement concept, make it clear whether the direction is a legacy upgrade, a parallel beta candidate, or a fuller replacement slice
- use early preview artifacts to help teams compare migration directions, not just aesthetics

Pair this with [../../frontend-design/reference/legacy-modernization.md](../../frontend-design/reference/legacy-modernization.md) when the request touches supplier-built tools, back-office UIs, partial migrations, or high-risk workflow replacement.

### Search / command palette / help search / result pages

Prioritize:

- intent matching
- fast scanability
- zero dead-ends
- query-specific filtering

Also:

- design for the user's language rather than internal taxonomy
- make autosuggest predict goals, not just finish strings
- distinguish command palettes, site search, and filter bars by the job each one is doing
- distinguish result types clearly with labels, thumbnails, or metadata when that improves recognition
- use microcopy around placeholder text, recent searches, related searches, and no-results states to help users recover quickly
- turn zero-results screens into recovery surfaces with suggestions, nearby categories, or support paths
- keep search responsive enough to feel trustworthy, with loading feedback when the wait is noticeable

Pair this with [../../frontend-design/reference/search-and-findability.md](../../frontend-design/reference/search-and-findability.md) when the request involves site search, help-center search, command palettes, autocomplete, result ranking, or no-results recovery.
Pair this with [../../frontend-design/reference/loading-feedback-and-perceived-performance.md](../../frontend-design/reference/loading-feedback-and-perceived-performance.md) when the search experience depends on autosuggest latency, incremental result loading, stale-result states, or honest waiting feedback.
Pair this with [../../frontend-design/reference/predictive-and-intent-ui.md](../../frontend-design/reference/predictive-and-intent-ui.md) when the work depends on recent searches, likely destinations, contextual suggestions, or resume flows that should speed users up without hiding browse/search alternatives.

### Accessibility / keyboard support / component hardening

Prioritize:

- semantic honesty
- visible focus and state clarity
- keyboard parity for every important interaction
- realistic verification of component accessibility claims

Also:

- prefer native elements before custom widget inventions
- make hover-dependent behavior reachable by focus or explicit activation too
- treat focus movement after modals, add/remove actions, and dynamic UI changes as part of the UX, not just implementation trivia
- use more than color alone for current-page or selected-state cues
- treat tiny repeated glitches, state loss, and weak feedback as real UX issues even when QA says the feature technically works
- test semantic states, charts, and selected/current cues under color-vision deficiency rather than assuming contrast alone is enough
- document hidden-content rules, accessible names, and expected keyboard behavior when handing complex components to engineering
- test third-party components with skepticism; ARIA-complete does not automatically mean user-friendly or assistive-tech safe

Pair this with [../../frontend-design/reference/component-accessibility.md](../../frontend-design/reference/component-accessibility.md) when the request involves accessible components, focus indicators, skip links, modal focus handling, hidden content, or vetting third-party component accessibility.
Pair this with [../../frontend-design/reference/colorblindness-ux.md](../../frontend-design/reference/colorblindness-ux.md) when the work depends on semantic color, chart palettes, active-state cues, or non-color-only differentiation.
Pair this with [../../frontend-design/reference/micro-failures-and-perceived-quality.md](../../frontend-design/reference/micro-failures-and-perceived-quality.md) when the interface feels unreliable because of repeated small papercuts, hover traps, weak acknowledgments, or brittle state continuity.

### Navigation / mega menus / section discovery

Prioritize:

- predictability over cleverness
- clear distinction between links and expanders
- hierarchy clarity across wide and narrow layouts
- calmer alternatives when the site is too broad for one overlay to carry honestly

Also:

- prefer explicit tap/click opening over hover-triggered surprise when the navigation is deep or important
- avoid making the same category label both a destination and a disclosure trigger unless the split is unmistakable
- keep search, cart, and other frequent header targets away from accidental-menu territory
- reduce nesting before polishing animations or tunnel math
- in narrow layouts, prefer split menus or accordions before deep overlay stacks when they preserve orientation better
- consider guides, section indexes, or `Browse all` paths when a mega-dropdown is compensating for weak IA

Pair this with [../../frontend-design/reference/navigation-menu-ux.md](../../frontend-design/reference/navigation-menu-ux.md) when the request involves header nav redesigns, mega-dropdowns, deep compact menus, click-vs-hover decisions, or alternative wayfinding for broad sites.
Pair this with [../../frontend-design/reference/information-architecture-ux.md](../../frontend-design/reference/information-architecture-ux.md) when the issue is broader than one menu and really concerns product structure, multi-level wayfinding, settings sprawl, or cross-product organization.
Pair this with [../../frontend-design/reference/responsive-design.md](../../frontend-design/reference/responsive-design.md) when the navigation model needs different hierarchy, reveal, or density strategies across narrow, medium, wide, and split-screen contexts.
Pair this with [../../frontend-design/reference/sidebar-and-footer-ux.md](../../frontend-design/reference/sidebar-and-footer-ux.md) when local sidebars, support rails, or footer wayfinding are part of the shell or discovery model.

### Information architecture / settings / enterprise product structure

Prioritize:

- clear scope at every level
- grouping by task and responsibility
- stable navigation layers
- consistent naming across the product

Also:

- distinguish suite, product, workspace, object, and page scope instead of flattening them into one navigation tier
- organize settings by who is affected and who can change them, not by backend service ownership
- use overview pages to orient and route, not to repeat every metric or link in the product
- keep object detail pages structurally consistent so repeat use builds memory instead of guesswork
- use search and command palettes as accelerators, not as compensation for a product with no coherent map

Pair this with [../../frontend-design/reference/information-architecture-ux.md](../../frontend-design/reference/information-architecture-ux.md) when the request involves large product suites, admin platforms, settings trees, enterprise dashboards, taxonomy, or cross-product wayfinding.
Pair this with [../../frontend-design/reference/navigation-menu-ux.md](../../frontend-design/reference/navigation-menu-ux.md) when that structure needs to be expressed in top-level navigation.
Pair this with [../../frontend-design/reference/breadcrumb-ux.md](../../frontend-design/reference/breadcrumb-ux.md) when users need better location cues or paths back up the hierarchy.
Pair this with [../../frontend-design/reference/search-and-findability.md](../../frontend-design/reference/search-and-findability.md) when vocabulary mismatch or poor search discoverability signals an IA problem underneath.

### FAQ / disclosures / stacked detail sections

Prioritize:

- clear section labels
- generous full-row triggers
- obvious open/closed state
- disclosure that reduces clutter without hiding crucial decisions

Also:

- use accordions when users benefit from scanning headings first and opening a few sections selectively
- avoid using accordions when most sections must be opened anyway or when users need broad side-by-side comparison
- prefer one clear job per tap: expanding the row is usually safer than splitting the label into a link while the icon expands
- if a section also needs a destination page, expose it clearly inside the expanded panel with a `View all` or equivalent link
- decide deliberately whether multiple sections should stay open for comparison, reference, or long filter/settings workflows
- avoid auto-scrolling users after expansion; let them keep control of the reading position

Pair this with [../../frontend-design/reference/accordion-ux.md](../../frontend-design/reference/accordion-ux.md) when the request involves accordions, FAQ groups, expandable policy/spec sections, schedule rows, filter groups, or disclosure-heavy settings surfaces.

### Forms / dates / date-time scheduling

Prioritize:

- fast direct entry for known dates
- low ambiguity about format
- specific validation and recovery
- accessibility across keyboard, touch, and assistive tech

Also:

- distinguish memorable dates from dates users need to choose on a calendar
- prefer three clearly labeled fields for date of birth and other known dates instead of long year dropdowns or native date pickers
- keep labels and examples visible above the fields rather than hiding the format inside placeholders or floating labels
- avoid automatic focus jumps between date fields
- validate late by default for ordinary inputs instead of flashing errors while users are still typing
- validate empty required fields on submit unless interruption clearly helps users
- use reward-early/punish-late behavior so fixed errors clear quickly but newly edited valid fields are not punished too soon
- prioritize copy-paste-friendly acceptance and forgiving normalization for structured values
- use just-in-time verification or explicit `Validate` actions for long restrictive fields when that is calmer than always-on live validation
- use the picker only when users genuinely need help choosing a date rather than recalling one
- for booking or appointment flows, decide whether users care more about the day, the time band, or the exact slot before locking the interaction model
- expose availability, price, or other decisive signals inside the calendar when they materially affect choice
- make date-range selection feel like one coordinated interaction instead of two disconnected calendars
- use quick presets, mini-steppers, or flexible-date shortcuts when near-term or fuzzy scheduling is common

Pair this with [../../frontend-design/reference/date-input-ux.md](../../frontend-design/reference/date-input-ux.md) when the request involves date of birth, memorable dates, calendar widgets, typed date entry, or date-specific form-field redesign.
Pair this with [../../frontend-design/reference/date-time-picker-ux.md](../../frontend-design/reference/date-time-picker-ux.md) when the request involves booking calendars, date-range pickers, flexible dates, time-slot selection, or combined date-and-time scheduling flows.
Pair this with [../../frontend-design/reference/live-validation-ux.md](../../frontend-design/reference/live-validation-ux.md) when the work depends on inline validation timing, field-level feedback strategy, severe-error interrupts, copy-paste-heavy structured input, or validator overrides.
Pair this with [../../frontend-design/reference/error-recovery.md](../../frontend-design/reference/error-recovery.md) when the work depends on clear date validation, incomplete-field handling, or recoverable error messaging.

### Configurators / builders / customizers

Prioritize:

- smart presets before raw choice overload
- clear product preview and price feedback
- predictable step navigation
- responsive interaction that stays usable in narrow and medium-width browsers

Also:

- decide whether the flow is for inspiration, customization, or both before choosing its level of complexity
- use a half-full starting point for complex builders so users are not staring at a blank canvas
- break the option space into manageable steps with clear current-step and completed-step cues
- keep the configured product, price, and summary close to the interaction rather than scattering them across the viewport
- prefer meaningful defaults and recommended options so no step feels like a dead end
- resolve dependencies and incompatibilities as soon as they appear, not only in the final summary
- use sliders only when they speed up exploration; pair them with visible value/output changes and exact-input fallbacks when users may need precision
- make save, share, resume, undo, and reset paths feel trustworthy for long consideration flows
- rethink the interaction in narrow layouts instead of shrinking wide-layout navigation into tiny controls or deep drawers

Pair this with [../../frontend-design/reference/configurator-ux.md](../../frontend-design/reference/configurator-ux.md) when the work involves product builders, customizers, step-based option flows, real-time previews, dependency-heavy selection, or save-and-resume configuration.
Pair this with [../../frontend-design/reference/slider-ux.md](../../frontend-design/reference/slider-ux.md) when the flow depends on range sliders, calculators, dual-handle controls, or slider-driven package exploration.
Pair this with [../../frontend-design/reference/responsive-design.md](../../frontend-design/reference/responsive-design.md) when the builder must re-balance previews, controls, summaries, and steps across narrow, medium, and wide layouts.

### Dashboard / charts / widgets / data tables

Prioritize:

- information hierarchy
- density control
- state handling
- labeling clarity

Also:

- design the dashboard as a decision assistant, not just a monitoring wall
- make the most urgent or consequential KPIs visually lead instead of giving every widget equal weight
- use deltas, meaningful trend sparklines, and short recent-history cues to explain change at a glance
- keep update motion subtle and orientation-preserving rather than flashy
- provide freshness, paused, stale, offline, or reconnecting states when timing or reliability matters
- allow filtering, snapshot, or pause controls when the stream can outpace human comprehension
- personalize prominence, alerting, or defaults by role when the same dashboard serves different decision-makers

Pair this with [../../frontend-design/reference/complex-table-ux.md](../../frontend-design/reference/complex-table-ux.md) when the dashboard includes dense operational tables, editable grids, pinned columns, header filters, or row-command toolbars rather than lightweight summary widgets alone.
Pair this with [../../frontend-design/reference/loading-feedback-and-perceived-performance.md](../../frontend-design/reference/loading-feedback-and-perceived-performance.md) when the surface depends on freshness, stale-data cues, streaming updates, or honest feedback during live refresh and slow data work.
Pair this with [../../frontend-design/reference/predictive-and-intent-ui.md](../../frontend-design/reference/predictive-and-intent-ui.md) when the surface depends on suggested next actions, role-aware prioritization, or resume/recommendation patterns layered on top of a clear dashboard structure.

### Sidebar / footer / support surfaces

Prioritize:

- support content with a real job
- footer usefulness over link dumping
- side content that helps the main task instead of competing with it
- compact-layout compression without hiding key fallback paths

Also:

- question whether a sidebar is helping the current task or merely surviving because the template expects one
- move critical information inline when users truly need it to finish the main job
- keep footers focused on recovery, trust, support, locale, and next-step utility instead of turning them into mini sitemaps with no hierarchy
- adapt sidebars and footers across breakpoints instead of assuming a wide-layout rail can simply shrink into a narrow-layout afterthought

Pair this with [../../frontend-design/reference/sidebar-and-footer-ux.md](../../frontend-design/reference/sidebar-and-footer-ux.md) when the request involves right rails, article sidebars, support panels, persistent summaries, footer redesigns, or end-of-page recovery/navigation surfaces.
Pair this with [../../frontend-design/reference/responsive-design.md](../../frontend-design/reference/responsive-design.md) when those supporting surfaces need different structure, density, or collapse behavior across device contexts.

### Data tables / operational grids

Prioritize:

- clear table type and task fit
- dense but readable scanability
- explicit row/cell/header states
- command logic that matches real operational work

Also:

- distinguish read-only, search, and editable tables early because they need different interactions
- define cells, rows, headers, columns, filters, toolbars, and validation states systematically before polishing the whole table
- use rational default widths, pinned key columns, and manual resizing when dense datasets demand them
- keep command availability, row selection, and bulk action rules explicit instead of relying on hidden logic
- be honest about desktop-first usage when the grid is truly large; convert only smaller tables to cards on narrow screens instead of shrinking giant spreadsheets into confusion

Pair this with [../../frontend-design/reference/complex-table-ux.md](../../frontend-design/reference/complex-table-ux.md) when the request involves dense enterprise tables, search grids, editable tables, pinned columns, row selection, or command-heavy operational data work.
Pair this with [../../frontend-design/reference/feature-comparison-ux.md](../../frontend-design/reference/feature-comparison-ux.md) only when the table is specifically a side-by-side considered-purchase comparison rather than an operational grid.

### Commerce flows

Prioritize:

- friction reduction
- trust signals
- legible totals and decisions
- clean path to completion

Also:

- choose the list continuation pattern by browsing mode: exploratory category browsing can support `Load more` plus lazy-loading, but ranked search results usually need a more deliberate `Load more` or pagination rhythm
- avoid infinite scroll where footer access, backtracking, or careful result comparison matter
- keep filters and sorting stable and close to the results; top-aligned controls often adapt better than heavy sidebars, especially across narrow and wide layouts
- keep filter panels stable while results update; do not auto-scroll, freeze, or collapse the user out of their current narrowing flow
- prefer full-height overlays or calmer top-aligned filter surfaces over cramped narrow-layout split filtering
- keep search visible and predictive when it is a common shortcut through the catalog
- use breadcrumbs when the hierarchy is deep enough that users need help climbing back up through categories, and keep the nearest useful parent obvious in narrow layouts
- make the product page capable of a convincing 30-second pitch above the fold: product name, price, critical options, primary CTA, and high-trust delivery / returns information should be easy to find immediately
- show review trust signals with enough context: decimal rating, rating count, and richer distribution or attribute detail when the purchase is high-consideration
- make negative reviews, customer photos, pros/cons, and recommendation signals work as confidence builders rather than burying them below generic social-proof polish
- allow filters, helpful sorting, and reviewer-like-me context when the review corpus is large enough to justify discovery tooling
- collapse secondary product detail into accordions or linked subsections instead of forcing every detail into the first screenful
- keep auxiliary widgets such as chat, loyalty prompts, or support controls available but visually quiet so they do not derail the buying decision
- match variant controls to the attribute being chosen: swatches for visual choices, buttons/chips for short textual sets, and richer dropdown/list patterns when options are longer or carry metadata
- show unavailable or out-of-stock variant options clearly before the user reaches the final action so the flow feels honest rather than bait-and-switch

Pair this with [../../frontend-design/reference/breadcrumb-ux.md](../../frontend-design/reference/breadcrumb-ux.md) when category depth, product-family navigation, or documentation-like wayfinding is part of the brief.

Pair this with [../../frontend-design/reference/accordion-ux.md](../../frontend-design/reference/accordion-ux.md) when the brief depends on product-detail accordions, FAQ stacks, collapsible shipping/returns/spec sections, or long filter groups.

Pair this with [../../frontend-design/reference/collection-browsing-and-filtering.md](../../frontend-design/reference/collection-browsing-and-filtering.md) when the brief hinges on filters, sorting, result browsing, `Load more`, pagination, infinite scroll, or return-to-list behavior.

Pair this with [../../frontend-design/reference/ecommerce-ux.md](../../frontend-design/reference/ecommerce-ux.md) when the brief spans merchandising, trust, product understanding, cart/checkout flow, support-widget restraint, or commerce-specific responsive behavior across more than one commerce surface.

Pair this with [../../frontend-design/reference/reviews-and-ratings.md](../../frontend-design/reference/reviews-and-ratings.md) when reviews, recommendations, rating distributions, or customer-photo credibility cues materially affect the purchase decision.
Pair this with [../../frontend-design/reference/social-proof-patterns.md](../../frontend-design/reference/social-proof-patterns.md) when testimonials, customer logos, certifications, badges, or case-study proof need to support the buying decision beyond product-review mechanics alone.

### Content surfaces

Prioritize:

- readability
- rhythm
- framing and sequencing of content
- restraint before decoration

Also:

- question whether a carousel is helping discovery or merely compressing unrelated content into one slot
- if a carousel stays, provide clear navigation, visible position, and a cue that more content exists beyond the current panel

For redesigns of existing blog or editorial surfaces:

- keep the reading structure, taxonomy cues, and scan path recognizable unless the user asks for a bigger editorial rethink
- vary the direction through type system, card/article treatment, imagery, density, and framing rather than by disrupting the reading flow

Pair this with [../../frontend-design/reference/carousel-ux.md](../../frontend-design/reference/carousel-ux.md) when the surface includes related-content rails, swipe galleries, or editorial carousels.

### Cards / listings / media blocks

Prioritize:

- card orientation that matches the task
- ratio consistency that supports scanability
- hierarchy between media, text, and action
- responsive adaptation without awkward crop or truncation surprises

Also:

- choose vertical cards for browse-first, image-led discovery unless users clearly need denser per-item text
- choose horizontal cards when the item needs stronger metadata, summary text, or desktop-efficient list scanning
- treat aspect ratio as part of the system, not a one-off styling accident
- vary ratio or orientation only when it adds meaning, emphasis, or a clearer content distinction
- keep action placement, metadata order, and interaction language consistent when the card family changes orientation across contexts

Pair this with [../../frontend-design/reference/aspect-ratio-and-card-orientation.md](../../frontend-design/reference/aspect-ratio-and-card-orientation.md) when the request depends on browse-vs-evaluate cards, media crops, responsive orientation changes, or ratio-driven rhythm.
Pair this with [../../frontend-design/reference/component-anatomy.md](../../frontend-design/reference/component-anatomy.md) when the work also depends on reusable card structure, action placement, and primitive anatomy.

### 404 / not-found / broken-link recovery

Prioritize:

- fast reassurance
- clear recovery navigation
- brand-consistent tone
- low frustration

Also:

- acknowledge the page is missing plainly rather than hiding the error behind cleverness alone
- give at least one obvious way forward such as home, search, previous page, or top destinations
- use humor or friendliness only when it supports the recovery instead of replacing it
- make the recovery actions stronger than the illustration or novelty treatment
- if the site is large, add search or a curated list of likely destinations

Pair this with [../../frontend-design/reference/empty-state-patterns.md](../../frontend-design/reference/empty-state-patterns.md) when the work is specifically about not-found, no-results, permission, or error recovery surfaces.

### 401 / 403 / 429 / 500 / 503 / error-page recovery

Prioritize:

- recovery that matches the failure
- trust and clarity over cleverness
- preserving task context where possible
- calm, brand-consistent tone

Also:

- for `401` or session-expired flows, give users a strong sign-in path and preserve the interrupted destination when possible
- for `403` or access-denied flows, explain the restriction clearly and show request-access, switch-account, or fallback navigation paths
- for `429` or rate-limit states, explain that the limit is temporary and show retry timing if the product knows it
- for `500` or server-error states, provide retry plus a dependable fallback like home, dashboard, or recent stable destinations
- for `503` or maintenance flows, link to status/incident detail and set expectations about timing when known
- keep route-level recovery actions more prominent than illustrations, mascots, or novelty copy

Pair this with [../../frontend-design/reference/empty-state-patterns.md](../../frontend-design/reference/empty-state-patterns.md) when the work is specifically about sign-in-required, access-denied, rate-limited, server-error, maintenance, or not-found recovery surfaces.