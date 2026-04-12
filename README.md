# better-web-ui

`better-web-ui` is an opinionated frontend design skill library for AI coding agents.

It helps agents build, critique, refine, and systematize high-quality UI work without defaulting to generic, low-context design output.

The project is deliberately opinionated about design taste: it optimizes for distinctive, production-grade, high-context interfaces rather than neutral, lowest-common-denominator UI.

The package follows the [Agent Skills](https://agentskills.io/) format and is designed to be installed through the [`skills` CLI](https://skills.sh/docs/cli).

## What this package is for

Use `better-web-ui` when you want an agent to help with:

- multi-variation UI generation for new sections, pages, shells, and components
- broader frontend design direction
- visual hierarchy and layout quality
- typography, color, and spacing systems
- critique and audit passes
- onboarding, empty states, and UX writing
- polish, motion, depth, and standout showcase work

This repository is a **skills package**, not a web app or starter template.

If you want safe, generic UI output above all else, this package is not trying to be that. It is intentionally biased toward stronger design points of view.

If you are evaluating the library quickly, the highest-signal shared references to inspect first are:

- [design process](skills/frontend-design/reference/design-process.md) — when the problem is still fuzzy and needs a cleaner path from wireframes to styleguide thinking to polished output
- [framework official docs](skills/frontend-design/reference/framework-official-docs.md) — when implementation choices depend on the exact frontend framework or meta-framework in use
- [component anatomy](skills/frontend-design/reference/component-anatomy.md) — when a project is building primitives from scratch instead of leaning on a mature component library
- [typography](skills/frontend-design/reference/typography.md) — when text, scale, weight, emphasis, or schema quality is carrying too much of the interface quality burden
- [color and contrast](skills/frontend-design/reference/color-and-contrast.md) — when palette, contrast, hierarchy, or color meaning feels weak or improvised

## What it works with

`better-web-ui` is intentionally **framework-agnostic** and **library-agnostic**.

It can be used with most modern frontend setups, including:

- React / Tanstack Start / Next.js
- Vue / Nuxt
- Svelte / SvelteKit
- Astro
- Solidjs / SolidStart
- plain HTML / CSS / JavaScript
- custom design systems and in-house component libraries

It can also work across common styling approaches such as:

- Tailwind CSS
- CSS modules
- styled-components / CSS-in-JS
- vanilla CSS
- token-based design systems

When a project is **not** using a mature component library, `better-web-ui` also includes shared anatomy guidance for custom primitive work such as buttons, cards, checkboxes, dropdowns, tabs, textareas, toasts, toggles, tooltips, accordions, avatars, badges, borders, breadcrumbs, iconography, lists, and submit actions in [component anatomy](skills/frontend-design/reference/component-anatomy.md).

## How stack defaults are chosen

When an agent using `better-web-ui` needs to make stack decisions, it follows this order:

1. **Existing project setup wins first** — detect the framework, styling system, component library, and design system already present in the codebase and use those before introducing anything new.
2. **Explicit user preferences win second** — if the user is creating a new project and names a styling system or component library, use that as the default.
3. **Framework defaults win third** — if the project is new and the user does not specify styling or component foundations, use the defaults below.

### Framework-specific defaults when the stack is open

This library does **not** require Tailwind or a specific component system.

However, when a project has no established styling or component direction yet, it prefers these defaults:

| Framework / runtime | Styling default | Component / block default |
| --- | --- | --- |
| React-based frameworks and meta-frameworks (`Next.js`, `TanStack Start`, `React Router`, Vite React) | **Tailwind CSS** | **shadcn/ui** components with the Base UI components, plus **shadcn/ui Blocks**, **re-ui**, and a curated React/shadcn accelerator shortlist when helpful |
| Astro | **Tailwind CSS** | **HTML-first Astro components and native elements** by default; only reach for **React** + **shadcn/ui** when the user explicitly wants that integration or the project already uses it |
| Laravel + Inertia / React | **Tailwind CSS** | **shadcn/ui** components with the Base UI components, plus **shadcn/ui Blocks** |
| Vue / Nuxt | **Tailwind CSS** | **Nuxt UI** or **shadcn-vue** |
| Svelte / SvelteKit | **Tailwind CSS** | **shadcn-svelte** |
| Angular | **Tailwind CSS** | **Angular Material** or **ZardUI** |
| SolidJS / SolidStart based meta-frameworks | **Tailwind CSS** | **SolidUI** |

These are gentle defaults, not hard requirements. If a project already uses a different framework, design system, or styling approach, it matches the existing stack instead of forcing a migration just because it is fashionable this week.

For form architecture, when a brand-new project is using React, Vue, Angular, Solid, or Svelte and no stronger form choice has been specified yet, `better-web-ui` should prefer [TanStack Form](https://tanstack.com/form/latest/docs/overview). If the project already uses another form stack, that existing choice wins first.

For tables and data grids, when a brand-new project is using React, Vue, Angular, Solid, or Svelte and no stronger table choice has been specified yet, `better-web-ui` should prefer [TanStack Table](https://tanstack.com/table/latest/docs/introduction). If the project already uses another table/grid stack, that existing choice wins first.

For Astro specifically, the bias should stay with Astro's low-JavaScript model: prefer native HTML elements, Astro components, and Tailwind styling first; only add React islands and `shadcn/ui` when the user explicitly asks for them or the existing codebase already depends on that integration.

For React-based fallback work that is already in the shadcn/Tailwind orbit, `better-web-ui` also keeps a curated shortlist of community accelerators with direct feature and installation links in [react shadcn accelerators](skills/frontend-design/reference/react-shadcn-accelerators.md). That list currently includes `Theme Toggle Effect`, `Consent Manager`, `Theme Switcher`, `Sonner`, `Vaul`, `Shimmering Text`, `Scroll Fade Effect`, `Text Flip`, `Testimonial`, `Testimonial Spotlight`, `Testimonials Marquee`, `React Wheel Picker`, and `Slide to Unlock`.

When a task is tied to a specific frontend framework or meta-framework, agents should also start with the official docs for that framework before locking in implementation details. The shared [framework official docs](skills/frontend-design/reference/framework-official-docs.md) reference points agents to the official starting pages for React, Next.js, React Router, TanStack Start, Astro, Inertia, Vue, Nuxt, Svelte, SvelteKit, Solid, SolidStart, and Angular.

## Runtime requirements

Maintainer tooling in this repository is pinned to Node `24.14.1`.

The package engine policy allows Node `>=24.14.1 <25` so local maintainer and CI behavior stay within the current LTS line.

The repository includes both `.nvmrc` and `.node-version` so different version managers can resolve the same pinned runtime without extra local setup.

- use `nvm use`, `fnm use`, or your preferred version manager with `.nvmrc` / `.node-version`
- run `npm install` before using the maintainer scripts
- use `npm run lint`, `npm run generate:wrappers`, and `npm run validate` from the repository root

## Installation

### Install from GitHub

```bash
npx skills add aladicf/better-web-ui
```

Useful variations:

```bash
npx skills add aladicf/better-web-ui --list
npx skills add aladicf/better-web-ui --all
npx skills add aladicf/better-web-ui --skill add-ui
npx skills add aladicf/better-web-ui --skill add-ui --skill frontend-design
npx skills add aladicf/better-web-ui --skill frontend-design --skill polish
npx skills add aladicf/better-web-ui -g
```

### Install from a local checkout

```bash
npx skills add .
npx skills add . --skill add-ui
```

## How users invoke installed skills

Once `better-web-ui` is installed in a project, users typically invoke skills in one of these ways:

1. **Slash commands when the host exposes them**
	- `/add-ui hero section for a B2B security product homepage`
	- `/setup design context for a B2B operations platform`
	- `/critique this analytics dashboard for hierarchy and cognitive load`

2. **Natural-language prompts when the host does not expose slash commands clearly**
	- `Use add-ui to generate five directions for a pricing section.`
	- `Use setup before designing this app.`
	- `Critique this dashboard for information architecture.`

3. **Skill-name prompting as an explicit fallback**
	- `Use the installed better-web-ui add-ui skill for this request.`

In many hosts, users do **not** need to say `make sure to use better-web-ui skills` if the skills are already installed and the host surfaces them correctly.

Important distinction:

- Slash commands like `/add-ui`, `/setup`, or `/critique` are user-facing when supported by the host.
- Internal references like `$frontend-design` or `$setup` are for skill-to-skill loading inside the library and are **not** commands users type themselves.

Exact slash-command visibility depends on the chat host. If typing `/` does not show the installed commands, users can still ask naturally or explicitly mention the skill name.

### Special note for shadcn projects

If a project was created with `npx shadcn create`, updated with `npx shadcn@latest apply`, or already contains a `components.json` file with the shadcn schema, agents should match that project's existing customization baseline instead of assuming the classic defaults.

That means respecting the project's current:

- component library choice (Radix or Base UI)
- preset or visual style baseline
- theme tokens, colors, spacing, and geometry
- fonts, icons, and Tailwind configuration
- `components.json` settings such as `style`, `tailwind.baseColor`, `tailwind.cssVariables`, `tailwind.prefix`, aliases, registries, `rsc`, and `tsx`

When that configuration is already present, the agent should continue from it instead of resetting the project back to a generic `shadcn/ui` look.

## Using `add-ui`

`add-ui` is the canonical skill name in this repository. Some hosts may expose a friendly `/add` alias, but docs, wrappers, and source files should continue to refer to the skill as `add-ui`.

Example requests:

- `/add-ui hero section for a B2B security product homepage`
- `/add-ui pricing section for a developer tool with monthly and annual billing`
- `/add-ui dashboard shell for an operations analytics platform`
- `/add-ui onboarding flow for a budgeting app aimed at first-time users`
- `/add-ui product comparison table for a high-consideration ecommerce category`

Equivalent host-level alias examples:

- `/add hero section for a B2B security product homepage`
- `/add dashboard shell for an operations analytics platform`

Expected behavior:

- generate **5** genuinely distinct directions
- explain tradeoffs in a compact comparison format
- recommend one direction when the goals clearly favor it
- help preview and apply the selected option

If you are using the React fallback defaults and want the decision logic behind primitives vs patterns vs block accelerators, start with [component library integration for `add-ui`](skills/add-ui/reference/component-library-integration.md) and the companion [component library integration checklist](skills/add-ui/assets/component-library-integration-checklist.md).

## More example requests

### Review and diagnosis

- `/critique this signup flow for trust, hierarchy, and friction`
- `/critique this analytics dashboard for cognitive load and information architecture`
- `/audit this checkout form for accessibility, responsive issues, and anti-patterns`
- `/audit the table component for touch targets, keyboard support, and performance`

### Setup and design direction

- `/setup design context for a B2B operations platform used by analysts all day`
- `/setup design context for a consumer budgeting app that should feel calm and trustworthy`

### Focused improvement requests

- `/distill this settings screen that exposes too many options at once`
- `/hierarchy this pricing page where all three CTAs feel equally loud`
- `/empty-state no-results search state for a documentation product`
- `/polish this dashboard before launch`
- `/optimize laggy filter and autocomplete interactions`
- `/bolder this landing page that feels too safe`
- `/quieter this hero section that feels overstimulating`

## Shared design doctrine

Reusable guidance and anti-pattern references live primarily in [`skills/frontend-design/reference/`](skills/frontend-design/reference/).

When adding or updating skills, prefer linking to shared doctrine there instead of duplicating long guidance blocks in multiple `SKILL.md` files.

### Start here by need

- **Structure, flow, and rough exploration first**
	- [design process](skills/frontend-design/reference/design-process.md)

- **Framework-specific implementation decisions**
	- [framework official docs](skills/frontend-design/reference/framework-official-docs.md)

- **Color systems, palette logic, and contrast**
	- [color and contrast](skills/frontend-design/reference/color-and-contrast.md)
	- [color ramp workflow](skills/frontend-design/reference/color-ramp-workflow.md)
	- [semantic color](skills/frontend-design/reference/semantic-color.md)

- **Typography, reading comfort, and text hierarchy**
	- [typography](skills/frontend-design/reference/typography.md)
	- [text hierarchy and readability](skills/frontend-design/reference/text-hierarchy-and-readability.md)

- **Hierarchy, spacing, grouping, and visual flow**
	- [hierarchy checklist](skills/frontend-design/reference/hierarchy-checklist.md)
	- [spatial design](skills/frontend-design/reference/spatial-design.md)
	- [spacing system](skills/frontend-design/reference/spacing-system.md)

- **Custom primitives and no-library component work**
	- [component anatomy](skills/frontend-design/reference/component-anatomy.md)

- **React/shadcn fallback acceleration**
	- [component and block strategy](skills/frontend-design/reference/component-and-block-strategy.md)
	- [react shadcn accelerators](skills/frontend-design/reference/react-shadcn-accelerators.md)
	- [component library integration for `add-ui`](skills/add-ui/reference/component-library-integration.md)

Helpful starting points:

- [design process](skills/frontend-design/reference/design-process.md) — how to move from wireframes to styleguide thinking to higher-fidelity prototypes without polishing too early
- [framework official docs](skills/frontend-design/reference/framework-official-docs.md) — official documentation map for framework-specific frontend work across React, Next.js, React Router, TanStack Start, Astro, Inertia, Vue, Nuxt, Svelte, SvelteKit, Solid, SolidStart, and Angular
- [typography](skills/frontend-design/reference/typography.md) — detailed doctrine for font choice, scale, weight, emphasis, legibility, and reusable typography schemas
- [text hierarchy and readability](skills/frontend-design/reference/text-hierarchy-and-readability.md) — shared rules for line length, line-height, labels, links, numeric alignment, and visual vs semantic text hierarchy
- [hierarchy checklist](skills/frontend-design/reference/hierarchy-checklist.md) — practical checks for priority, consistency, visual weight, spacing, grouping, alignment, and scan paths
- [spatial design](skills/frontend-design/reference/spatial-design.md) — layout composition, grids, hierarchy through multiple dimensions, optical adjustment, and container-level structure
- [spacing system](skills/frontend-design/reference/spacing-system.md) — how spacing values create grouping, rhythm, and separation instead of arbitrary gaps
- [component anatomy](skills/frontend-design/reference/component-anatomy.md) — practical anatomy guidance for custom or no-library primitives like buttons, cards, checkboxes, dropdowns, tabs, textareas, toasts, toggles, tooltips, accordions, avatars, badges, borders, breadcrumbs, iconography, lists, and submit actions
- [color and contrast](skills/frontend-design/reference/color-and-contrast.md) — palette structure, contrast, color-family selection, temperature, and theme behavior
- [color ramp workflow](skills/frontend-design/reference/color-ramp-workflow.md) — how to build stable tints, tones, shades, and reusable color stops instead of improvising ramps
- [semantic color](skills/frontend-design/reference/semantic-color.md) — how to keep status and state colors meaningful instead of decorative
- [component and block strategy](skills/frontend-design/reference/component-and-block-strategy.md) — when to use primitives, reusable patterns, or prebuilt block accelerators in React-oriented fallback setups
- [react shadcn accelerators](skills/frontend-design/reference/react-shadcn-accelerators.md) — curated community-registry components for React/shadcn fallback setups, with direct links to feature docs and integration guides
- [component library integration for `add-ui`](skills/add-ui/reference/component-library-integration.md) — how those choices affect the five-direction workflow
- [design system alignment](skills/frontend-design/reference/design-system-alignment.md) — how to think about tokens vs components vs patterns without creating system drift

## Skill catalog

The validator checks that every canonical skill name under `skills/` appears in this section, so keep it in sync when adding, removing, or renaming a skill.

### Meta and setup

- `frontend-design` — core design operating model and shared reference set
- `setup` — gather and persist project design context

### Execution skills

- `add-ui` — generate 5 distinct UI directions for a requested section, page, flow, shell, or component, then help preview and apply one
- `adapt` — responsive and context-aware adaptation
- `animate` — motion and micro-interactions
- `arrange` — layout composition, grouping, and spacing rhythm
- `clarify` — UX writing and copy clarity
- `colorize` — color systems and semantic color
- `depth` — elevation, layering, and depth systems
- `distill` — declutter and simplify noisy UI
- `empty-state` — design useful zero-data and no-results states
- `extract` — pull repeated UI into reusable components, patterns, and tokens
- `harden` — edge cases, i18n, errors, overflow, and resilience
- `hierarchy` — priority, emphasis, and action clarity
- `imagery` — screenshots, icons, photos, and media treatment
- `normalize` — bring drifted UI back into alignment with the design system
- `onboard` — first-run, activation, and onboarding strategy that gets users to value quickly
- `typeset` — typography, readability, and type hierarchy

### Review and finishing

- `audit` — technical UI quality checks with scored findings and severity ratings
- `critique` — UX and design critique with scores and prioritized issues across the overall interface, not just a single zero-data surface
- `delight` — add tasteful personality and memorable moments once the fundamentals are already working
- `polish` — final pass for alignment, consistency, and micro-detail quality, not a full tone shift
- `quieter` — reduce visual intensity without losing hierarchy or character
- `bolder` — increase visual confidence, contrast, and impact when the design feels too safe or generic

### Advanced / specialized

- `optimize` — UI performance and rendering optimization
- `showcase` — ambitious, standout, technically impressive UI work

The canonical source of truth for every skill lives under `skills/`.

## Package structure

The canonical source of truth lives in:

```text
skills/
```

Each skill directory contains its own `SKILL.md`, plus optional supporting files such as references, scripts, or assets.

Shared doctrine currently lives primarily under:

```text
skills/frontend-design/reference/
```

## Choosing between similar skills

### `onboard` vs `empty-state` vs `critique`

- Use **`onboard`** when the problem is broader activation strategy: first-run learning, aha moments, progressive teaching, and the path to value.
- Use **`empty-state`** when the work is the zero-data, no-results, permission, or error surface itself.
- Use **`critique`** when you want an overall design review that may evaluate onboarding or empty states as part of a larger experience.

### `polish` vs `delight` vs `bolder` vs `quieter`

- Use **`polish`** for detail cleanup, consistency, spacing, alignment, and state refinement.
- Use **`delight`** for personality, joy, and memorable moments that do not rewrite the whole visual direction.
- Use **`bolder`** when the design is too timid and needs stronger contrast, confidence, and point of view.
- Use **`quieter`** when the design is too loud and needs restraint without losing its structure.

## Compatibility wrapper trees

This repo also ships generated wrapper trees for agent-specific layouts so the same canonical skills can be surfaced in multiple environments:

- `.agents/skills`
- `.github/skills`
- `.claude/skills`
- `.codex/skills`
- `.cursor/skills`
- `.opencode/skills`
- `.pi/skills`

Those wrappers are compatibility shims only. If you are editing the library, edit `skills/` first and regenerate wrappers afterward.

Each wrapper root also includes a generated `README.md` explaining that it is a compatibility shim and pointing back to the canonical `skills/` directory.

| Wrapper root | Purpose |
| --- | --- |
| `.agents/skills` | Generic `.agents` compatibility layout |
| `.github/skills` | GitHub-oriented compatibility layout |
| `.claude/skills` | Claude compatibility layout |
| `.codex/skills` | Codex compatibility layout |
| `.cursor/skills` | Cursor compatibility layout |
| `.opencode/skills` | Opencode compatibility layout |
| `.pi/skills` | Pi compatibility layout |

Exact discovery behavior depends on the host. The purpose of these directories is to keep one canonical skill library while still surfacing thin wrappers in multiple environments.

## Contributor docs

- [`CONTRIBUTING.md`](CONTRIBUTING.md) — pull request expectations, quality bar, and submission checklist
- [`DEVELOPMENT.md`](DEVELOPMENT.md) — local setup, script reference, wrapper generation, and validation details
- [`AGENTS.md`](AGENTS.md) — repository-specific rules for coding agents

## Maintainer workflow

When you add or change a skill:

1. Update the canonical skill in `skills/`
2. Run `npm run lint` if you changed repository scripts or tooling
3. Regenerate wrapper trees with `npm run generate:wrappers`
4. Validate canonical skills, docs, and wrapper sync with `npm run validate`
5. Smoke-test discovery and installation with `npm run smoke:list` and `npm run smoke:install`
6. Update this README if discoverability changed

There is no separate `skills.sh` publish command. A public repo plus successful installs is the publish path.

## Validation

This repository is maintained against the Agent Skills spec and validated with `skills-ref`.

Typical validation flow:

```bash
npm run lint
npm run generate:wrappers
npm run validate
npm run smoke:list
npm run smoke:install
npm run verify
npx skills-ref validate ./skills/frontend-design
```

Repeat for the rest of the canonical skills, or script validation across the full `skills/` directory.

The repository also includes `.github/workflows/validate.yml` to install dependencies, lint repository scripts with OXC, check canonical skill metadata and README sync, validate wrapper root readmes, detect wrapper drift inside the generated wrapper roots, and smoke-test local `skills` CLI discovery on pushes and pull requests.

## Attribution

`better-web-ui` builds on work and ideas from:

- **Paul Bakaus** and **Impeccable** (https://github.com/pbakaus/impeccable)
- **Anthropic’s** original `frontend-design` skill (https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design/skills/frontend-design)
- **Refactoring UI** by **Adam Wathan** and **Steve Schoger** (https://refactoringui.com/)
- **Design for Developers** by **Adrian Twarog** and **George Moller** (https://www.packtpub.com/en-us/product/design-for-developers-9781837027200)
- **Laws of UX** by **Jon Yablonski** (https://lawsofux.com/book/)

See `NOTICE.md` for the attribution chain and source lineage.

## License

This project uses the custom **better-web-ui License** in `LICENSE`.

It is MIT-based but adds source-availability and no-resale restrictions for the library itself, so it should not be described as plain MIT.

## skills.sh listing

`skills.sh` discovery is driven by installs through the `skills` CLI. Based on the current public docs, there is no separate manual registry submission step.