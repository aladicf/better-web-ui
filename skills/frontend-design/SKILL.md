---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality, generating creative, polished code that avoids generic AI aesthetics. Use when the user asks to build web components, pages, artifacts, posters, or applications, or when any design skill requires project context.
license: Apache 2.0. Based on Anthropic's frontend-design skill. See NOTICE.md for attribution.
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

## Refactoring UI Operating Model

Use this decision order before reaching for effects:

1. **Start with a feature, not a shell**: Design the specific user task first. Navigation, chrome, and decorative structure should follow the needs of the feature, not the other way around.
2. **Establish hierarchy in grayscale**: First make the interface clear using spacing, size, weight, contrast, and grouping. If it doesn't work in grayscale, color won't save it.
3. **Define systems before details**: Use constrained scales for spacing, type, color, radius, and elevation. Limit choices to reduce decision fatigue and make the result feel intentional.
4. **Choose personality through concrete levers**: Express tone through font choice, color temperature, border radius, and language — not random effects.
5. **Polish last**: Add color, depth, decoration, motion, and finishing touches only after hierarchy and systems are already working.

**CRITICAL**: Hierarchy beats decoration. Systems beat one-off tweaking. Restraint beats trend-chasing.

## Context Gathering Protocol

Design skills produce generic output without project context. You MUST have confirmed design context before doing any design work.

**Required context** — every design skill needs at minimum:
- **Target audience**: Who uses this product and in what context?
- **Use cases**: What jobs are they trying to get done?
- **Brand personality/tone**: How should the interface feel?

Individual skills may require additional context — check the skill's preparation section for specifics.

**CRITICAL**: You cannot infer this context by reading the codebase. Code tells you what was built, not who it's for or what it should feel like. Only the creator can provide this context.

**Gathering order:**
1. **Check current instructions (instant)**: If your loaded instructions already contain a **Design Context** section, proceed immediately.
2. **Check .better-web-ui.md (fast)**: If not in instructions, read `.better-web-ui.md` from the project root. If it exists and contains the required context, proceed.
3. **Check legacy context files (fallback)**: If `.better-web-ui.md` does not exist yet, read `.better-ui.md` and then `.impeccable.md` from the project root. If either exists and contains the required context, proceed, but prefer migrating to `.better-web-ui.md` when possible.
4. **Run setup (REQUIRED)**: If neither source has context, you MUST run $setup NOW before doing anything else. Do NOT skip this step. Do NOT attempt to infer context from the codebase instead.

## Framework & Library Guidance

This skill library is intentionally framework-agnostic and library-agnostic.

When implementation details matter, use this precedence order:

1. **Detect and match the existing project stack first**
	 - infer the framework / runtime already in use
	 - infer the current styling approach
	 - infer the current component library, design system, and token setup
	 - continue with the existing stack unless the user explicitly asks to change it

2. **Respect explicit user choices for new projects second**
	 - if the user says to use Tailwind, CSS modules, Nuxt UI, shadcn-vue, Angular Material, etc., treat that as the default
	 - if the user runs `setup`, persist those implementation defaults so later design work reuses them

3. **If the project is new and unspecified, use these framework defaults**

	 - **React-based frameworks and meta-frameworks** (`Next.js`, `TanStack Start`, `React Router`, Vite React)
		 - styling: **Tailwind CSS**
		 - components: **shadcn/ui** in the Base UI direction
		 - accelerators: **shadcn/ui Blocks**, **re-ui** components / blocks, and the curated React/shadcn accelerator shortlist in [react shadcn accelerators](reference/react-shadcn-accelerators.md) when the feature request matches

	 - **Astro**
		 - styling: **Tailwind CSS**
		 - components: **HTML-first Astro components and native elements by default**
		 - integration rule: only reach for **React** + **shadcn/ui** when the user explicitly asks for React-compatible component integration or the existing Astro project already uses that stack

	 - **Laravel + Inertia / React**
		 - styling: **Tailwind CSS**
		 - components: **shadcn/ui** in the Base UI direction
		 - accelerators: **shadcn/ui Blocks**

	 - **Vue / Nuxt**
		 - styling: **Tailwind CSS**
		 - components: **Nuxt UI** or **shadcn-vue**

	 - **Svelte / SvelteKit**
		 - styling: **Tailwind CSS**
		 - components: **shadcn-svelte**

	 - **Angular**
		 - styling: **Tailwind CSS**
		 - components: **Angular Material** or **ZardUI**

	 - **SolidJS / Solid-based meta-frameworks**
		 - styling: **Tailwind CSS**
		 - components: **SolidUI**

Treat those as preferred defaults, not universal truths:

- do **not** force React-only component libraries into non-React stacks
- do **not** add React islands to Astro by default when plain Astro components and HTML solve the task cleanly
- do **not** replace an existing design system unless the task explicitly calls for it
- do **not** describe `better-web-ui` itself as Tailwind-only or React-only

When `setup` has already recorded implementation defaults for the project, follow those stored defaults before inventing new ones.

When a project is new and the form architecture is still open, prefer **TanStack Form** across the supported React, Vue, Angular, Solid, and Svelte ecosystems. If the existing project already uses another form library or validation stack, preserve that baseline first instead of forcing a migration.

When a project is new and the table or data-grid architecture is still open, prefer **TanStack Table** across the supported React, Vue, Angular, Solid, and Svelte ecosystems. If the existing project already uses another table/grid stack, preserve that baseline first instead of forcing a migration.

When a project is new and the long-list or virtualization architecture is still open, prefer **TanStack Virtual** across the supported React, Vue, Angular, Solid, and Svelte ecosystems. If the existing project already uses another virtualization approach, preserve that baseline first instead of forcing a migration.

When the stack is still open, keep this shorthand in mind:

- **forms** → **TanStack Form**
- **tables / datagrids** → **TanStack Table**
- **long lists / virtual lists** → **TanStack Virtual**
- **React toasts** → **Sonner**
- **React drawers / bottom sheets** → **Vaul**
- **predictive wrapped-text sizing before DOM measurement** → **Pretext**

Those are defaults, not mandates. Existing project choices still win first.

The goal is pragmatic consistency: framework-agnostic at the library level, with helpful implementation defaults when no stronger project convention exists.

When the project uses a specific frontend framework or meta-framework, consult [framework official docs](reference/framework-official-docs.md) before making framework-specific implementation decisions. Use the official docs to confirm architecture, routing, rendering boundaries, data loading, forms, styling, and deployment expectations instead of guessing from generic cross-framework habits.

For **Next.js** specifically, if the project includes bundled version-matched docs at `node_modules/next/dist/docs/`, read the relevant local Next.js doc there before coding. Treat those bundled docs as the source of truth for the installed version instead of relying on stale memory. If the project is on an older Next.js version that does not bundle docs there yet, follow the official AI-agents setup guidance and codemod path described in [framework official docs](reference/framework-official-docs.md).

When React-based fallback defaults are relevant, use [component and block strategy](reference/component-and-block-strategy.md) to decide when to compose from `shadcn/ui` primitives, when blocks are an appropriate accelerator, and how to avoid shipping generic library output unchanged. Use [react shadcn accelerators](reference/react-shadcn-accelerators.md) when the request maps to a curated community component such as theme controls, consent, text motion, testimonial patterns, wheel pickers, or slide actions.

When the project does **not** have a mature component library and you need to build or refine primitives from scratch, use [component anatomy](reference/component-anatomy.md) for practical anatomy guidance on custom components such as buttons, cards, checkboxes, dropdowns, tabs, textareas, toasts, toggles, tooltips, accordions, avatars, badges, borders, breadcrumbs, iconography, lists, and submit actions.

---

## Design Direction

Commit to a BOLD aesthetic direction:
- **Feature first**: Identify the primary workflow or moment this screen must support before designing the shell around it.
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

Apply a little pessimism up front:
- Design the smallest useful version first.
- Do not imply functionality that isn't ready to exist.
- Use wireframes and rough exploration to make decisions quickly, then build the real thing early and iterate in short cycles.

Use [design process](reference/design-process.md) when the request is still fuzzy, when layout and flow decisions need to be clarified before polish, or when you need a cleaner progression from wireframe to styleguide to prototype.

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work—the key is intentionality, not intensity.

Then implement working code that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

### Typography
→ *Consult [typography reference](reference/typography.md) for scales, pairing, loading strategies, and font-selection heuristics. Use [text hierarchy and readability](reference/text-hierarchy-and-readability.md) for line length, line-height, baseline alignment, label/value treatment, link emphasis, numeric alignment, and semantic vs visual hierarchy.*

Choose fonts that are beautiful, unique, and interesting. Pair a distinctive display font with a refined body font.

**DO**: Use a constrained, hand-crafted type scale; use modular ratios as inspiration, not as a prison
**DO**: Build hierarchy with weight, color, and spacing — not size alone
**DO**: Align mixed font sizes by their baseline when they appear on the same line
**DO**: Tighten headlines carefully and add letter-spacing to all-caps text when readability benefits
**DON'T**: Use overused fonts—Inter, Roboto, Arial, Open Sans, system defaults
**DON'T**: Use monospace typography as lazy shorthand for "technical/developer" vibes
**DON'T**: Use `em`-based type scales for nested UI — they drift off-system fast
**DON'T**: Center long-form text; center works for short statements, not dense reading
**DON'T**: Put large icons with rounded corners above every heading—they rarely add value and make sites look templated

### Color & Theme
→ *Consult [color reference](reference/color-and-contrast.md) for OKLCH, palettes, and dark mode. Use [color ramp workflow](reference/color-ramp-workflow.md) when building or repairing ramps. Use [semantic color](reference/semantic-color.md) when color is carrying status, alerts, or meaning.*

Commit to a cohesive palette. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

**DO**: Start in grayscale, then layer color on top of an already-clear hierarchy
**DO**: Use modern CSS color functions (oklch, color-mix, light-dark) for perceptually uniform, maintainable palettes
**DO**: Define shades up front — greys need a real scale, primary and accent colors need multiple usable stops
**DO**: Tint your neutrals toward your brand hue—even a subtle hint creates subconscious cohesion
**DO**: Prefer dark text on light tinted surfaces when you need accessible, lower-emphasis colored panels
**DON'T**: Use gray text on colored backgrounds—it looks washed out; use a shade of the background color instead
**DON'T**: Blindly `lighten()` or `darken()` your way into 35 nearly identical shades
**DON'T**: Use pure black (#000) or pure white (#fff)—always tint; pure black/white never appears in nature
**DON'T**: Use the AI color palette: cyan-on-dark, purple-to-blue gradients, neon accents on dark backgrounds
**DON'T**: Use gradient text for "impact"—especially on metrics or headings; it's decorative rather than meaningful
**DON'T**: Default to dark mode with glowing accents—it looks "cool" without requiring actual design decisions

### Layout & Space
→ *Consult [spatial reference](reference/spatial-design.md) for grids, rhythm, and container queries. Use [spacing system](reference/spacing-system.md) and [hierarchy checklist](reference/hierarchy-checklist.md) when composition or grouping is weak.*

Create visual rhythm through varied spacing—not the same padding everywhere. Embrace asymmetry and unexpected compositions. Break the grid intentionally for emphasis.

**DO**: Start with more white space than feels necessary, then remove it until the design feels balanced
**DO**: Create visual rhythm through varied spacing—tight groupings, generous separations
**DO**: Use fluid spacing with clamp() that breathes on larger screens
**DO**: Use asymmetry and unexpected compositions; break the grid intentionally for emphasis
**DO**: Keep more space around groups than within them to avoid ambiguous spacing
**DO**: Give components the width they actually need; fixed widths are often better than fluid widths for sidebars, forms, and cards
**DON'T**: Wrap everything in cards—not everything needs a container
**DON'T**: Nest cards inside cards—visual noise, flatten the hierarchy
**DON'T**: Use identical card grids—same-sized cards with icon + heading + text, repeated endlessly
**DON'T**: Use the hero metric layout template—big number, small label, supporting stats, gradient accent
**DON'T**: Center everything—left-aligned text with asymmetric layouts feels more designed
**DON'T**: Stretch every section just because the viewport is wide
**DON'T**: Use the same spacing everywhere—without rhythm, layouts feel monotonous

### Visual Details
→ *Consult [elevation system](reference/elevation-system.md) for shadow levels, raised/inset logic, and depth mapping. Use [surface separation](reference/surface-separation.md) when deciding between spacing, borders, shadows, overlap, and background shifts. Use [finishing touches](reference/finishing-touches.md) for tasteful default upgrades, accent borders, and decorative backgrounds. Use [personality levers](reference/personality-levers.md) when the tone feels vague. Use [ai slop detection](reference/ai-slop-detection.md) when the design risks looking generic or trend-chasing.*

**DO**: Use intentional, purposeful decorative elements that reinforce brand
**DO**: Create a small elevation system; shadows should communicate z-depth, not exist as default garnish
**DO**: Use background shifts, spacing, and subtle shadows before reaching for borders everywhere
**DON'T**: Use glassmorphism everywhere—blur effects, glass cards, glow borders used decoratively rather than purposefully
**DON'T**: Use rounded elements with thick colored border on one side—a lazy accent that almost never looks intentional
**DON'T**: Use sparklines as decoration—tiny charts that look sophisticated but convey nothing meaningful
**DON'T**: Use rounded rectangles with generic drop shadows—safe, forgettable, could be any AI output
**DON'T**: Add realism or depth effects that don't clarify elevation or interaction
**DON'T**: Use modals unless there's truly no better alternative—modals are lazy

### Images & Media
→ *Consult [image treatment](reference/image-treatment.md) when working with photos, screenshots, icons, illustrations, user-uploaded media, overlays, and image readability.*

**DO**: Treat image contrast problems as image-treatment problems first, not typography failures
**DO**: Keep screenshots large or focused enough to communicate something useful
**DO**: Keep icons close to the scale they were designed for unless they were made to scale illustratively
**DO**: Force user-uploaded media into controlled shapes and predictable containers
**DON'T**: Scale screenshots down until they become eye tests
**DON'T**: Blow tiny icons up into chunky placeholders for real illustration
**DON'T**: Let user-uploaded images dictate layout shape or bleed into the background

### Motion
→ *Consult [motion reference](reference/motion-design.md) for timing, easing, and reduced motion.*

Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.

**DO**: Use motion to convey state changes—entrances, exits, feedback
**DO**: Use exponential easing (ease-out-quart/quint/expo) for natural deceleration
**DO**: For height animations, use grid-template-rows transitions instead of animating height directly
**DON'T**: Animate layout properties (width, height, padding, margin)—use transform and opacity only
**DON'T**: Use bounce or elastic easing—they feel dated and tacky; real objects decelerate smoothly

### Interaction
→ *Consult [interaction reference](reference/interaction-design.md) for forms, focus, loading patterns, Jakob's Law, and Fitts's Law. Use [cognitive load](reference/cognitive-load.md) for Hick's Law and Miller's Law in practice. Use [empty-state patterns](reference/empty-state-patterns.md) when a feature has no content yet. Use [pricing and packaging](reference/pricing-and-packaging.md) when working on pricing pages, plan comparison, billing settings, or packaging clarity. Use [paywalls and upgrade flows](reference/paywalls-and-upgrade-flows.md) when designing feature locks, usage limits, trials, or in-product upgrade prompts.*

Use [action hierarchy](reference/action-hierarchy.md) when deciding which controls should lead, recede, disappear, or escalate in destructive confirmations.

Use `empty-state` for zero-data surface design. Use `onboard` for broader activation strategy, aha moments, tours, and first-run education.
Use `optimize` when frequent interactions feel sluggish or break flow. Use `harden` when permissions, destructive actions, automation, or admin power need stronger safeguards.

Make interactions feel fast. Use optimistic UI—update immediately, sync later.

**DO**: Use progressive disclosure—start simple, reveal sophistication through interaction (basic options first, advanced behind expandable sections; hover states that reveal secondary actions)
**DO**: Use familiar patterns for familiar tasks—navigation, search, tabs, dropdowns, tables, filters, forms, pagination, and settings should behave the way strong products already taught users to expect
**DO**: Design empty states that teach the interface, not just say "nothing here"
**DO**: Make every interactive surface feel intentional and responsive
**DO**: Design actions in a real hierarchy — one primary action, a few secondary actions, and quiet tertiary actions
**DO**: Make common actions easy to hit — generous targets, whole-row labels where appropriate, and close placement to the content being acted on
**DON'T**: Repeat the same information—redundant headers, intros that restate the heading
**DON'T**: Invent custom interaction models for standard controls unless the gain is obvious and significant
**DON'T**: Make every button primary—use ghost buttons, text links, secondary styles; hierarchy matters

### Responsive
→ *Consult [responsive reference](reference/responsive-design.md) for mobile-first strategy, fluid design, natural widths, column rebalancing, and container queries.*

**DO**: Use container queries (@container) for component-level responsiveness
**DO**: Adapt the interface for different contexts—don't just shrink it
**DON'T**: Hide critical functionality on mobile—adapt the interface, don't amputate it

### UX Writing
→ *Consult [ux-writing reference](reference/ux-writing.md) for labels, errors, and empty states. Pair it with [pricing and packaging](reference/pricing-and-packaging.md) and [paywalls and upgrade flows](reference/paywalls-and-upgrade-flows.md) when the copy needs to explain plans, billing, renewals, upgrades, or value without sliding into pressure tactics.*

**DO**: Make every word earn its place
**DON'T**: Repeat information users can already see

Use `empty-state` for zero-data surface design. Use `onboard` for broader activation strategy, first-run learning, aha moments, tours, and adoption planning.

### Product Ethics & Defaults

When tradeoffs appear, default to this order:
1. **Clarity**
2. **Task completion speed**
3. **Error prevention**
4. **Familiar interaction patterns**
5. **Visual polish**
6. **Advanced flexibility**

Do not sacrifice the top of the list just to improve the bottom.

#### Never Use Dark Patterns

The interface must not rely on confusion, obstruction, guilt, concealment, or misleading hierarchy to drive product-favoring outcomes.

**DO**:
- make choices, pricing, consent, and consequences easy to understand
- keep unsubscribe, cancellation, privacy, and downgrade paths straightforward
- use truthful warnings, real opt-in, and fair defaults
- preserve user autonomy, informed consent, and reversibility whenever possible

**DON'T**:
- hide important information behind weak contrast, obscure placement, or misleading labels
- make cancellation harder than signup
- preselect exploitative options just to raise conversion
- use fake urgency, fake scarcity, shame copy, or ambiguous destructive confirmations
- improve metrics by making decisions less informed or harder to reverse

---

## The AI Slop Test

**Critical quality check**: If you showed this interface to someone and said "AI made this," would they believe you immediately? If yes, that's the problem.

A distinctive interface should make someone ask "how was this made?" not "which AI made this?"

Review the DON'T guidelines above—they are the fingerprints of AI-generated work from 2024-2025.

Consult [ai slop detection](reference/ai-slop-detection.md) for the consolidated anti-pattern list.

---

## Implementation Principles

Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices across generations.

Remember these quality checks while implementing:
- Can someone identify the primary, secondary, and tertiary elements within two seconds?
- Are spacing, typography, color, radius, and elevation decisions coming from systems instead of one-off tweaks?
- Does the personality come through in font, color, radius, and language?
- Would the design still feel good if color were temporarily removed?

Remember: GPT is capable of extraordinary creative work. Don't hold back—show what can truly be created when thinking outside the box and committing fully to a distinctive vision.