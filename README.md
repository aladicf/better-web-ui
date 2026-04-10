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
| React-based frameworks and meta-frameworks (`Next.js`, `TanStack Start`, `React Router`, Vite React) | **Tailwind CSS** | **shadcn/ui** components in the Base UI direction, plus **shadcn/ui Blocks** and **re-ui** components / blocks when helpful |
| Astro | **Tailwind CSS** | **shadcn/ui** components in the Base UI direction, plus **shadcn/ui Blocks** |
| Laravel + Inertia / React | **Tailwind CSS** | **shadcn/ui** components in the Base UI direction, plus **shadcn/ui Blocks** |
| Vue / Nuxt | **Tailwind CSS** | **Nuxt UI** or **shadcn-vue** |
| Svelte / SvelteKit | **Tailwind CSS** | **shadcn-svelte** |
| Angular | **Tailwind CSS** | **Angular Material** or **ZardUI** |
| SolidJS / SolidStart based meta-frameworks | **Tailwind CSS** | **SolidUI** |

**What this means:** for React-oriented fallback defaults, `shadcn/ui` is the primitive foundation in the Base UI direction, while `shadcn/ui Blocks` and `re-ui` are optional accelerators for common sections and flows. This repository documents **when and how to use those layers**, not a frozen inventory of every upstream component or block. For current availability, check the upstream docs. See [component and block strategy](skills/frontend-design/reference/component-and-block-strategy.md) for the selection guidance behind these defaults.

These are gentle defaults, not hard requirements. If a project already uses a different framework, design system, or styling approach, it matches the existing stack instead of forcing a migration just because it is fashionable this week.

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

Helpful starting points:

- [component and block strategy](skills/frontend-design/reference/component-and-block-strategy.md) — when to use primitives, reusable patterns, or prebuilt block accelerators in React-oriented fallback setups
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

- **Paul Bakaus** and **Impeccable**
- **Anthropic’s** original `frontend-design` skill
- **Refactoring UI** by **Adam Wathan** and **Steve Schoger**

See `NOTICE.md` for the attribution chain and source lineage.

## License

This project uses the custom **better-web-ui License** in `LICENSE`.

It is MIT-based but adds source-availability and no-resale restrictions for the library itself, so it should not be described as plain MIT.

## skills.sh listing

`skills.sh` discovery is driven by installs through the `skills` CLI. Based on the current public docs, there is no separate manual registry submission step.
