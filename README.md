# better-web-ui

`better-web-ui` is an opinionated Agent Skills library for developers who can ship code just fine but would prefer the UI not look like it was assembled during a sleep-deprived Figma incident.

It helps AI coding agents generate, critique, refine, and systematize production-grade UI, UX, and motion work without defaulting to bland, generic output. In other words: it's for people who know the difference between “works” and “wow” and would like help crossing that gap without pretending they woke up as a principal product designer.

This repository is a **skills package**, not a starter app or deployment template.

The project follows the [Agent Skills](https://agentskills.io/) format and is designed to be installed through the [`skills` CLI](https://skills.sh/docs/cli).

## Direct `skills.sh` links

If search is being moody, use the direct directory pages:

- [Creator page on `skills.sh`](https://skills.sh/aladicf)
- [Repository page on `skills.sh`](https://skills.sh/aladicf/better-web-ui)
- [Example skill page: `add-ui`](https://skills.sh/aladicf/better-web-ui/add-ui)

The most reliable install command is still:

```bash
npx skills add aladicf/better-web-ui
```

## Inspired by

- **[Impeccable](https://github.com/pbakaus/impeccable)** — by **Paul Bakaus**

- **[Anthropic's upstream better-web-ui / frontend-design lineage](https://github.com/anthropics/claude-code/tree/main/plugins/better-web-ui)** — by **Anthropic**

- **[animations.dev](https://animations.dev/)** and related motion-heavy UI work — by **Emil Kowalski**

- **[Refactoring UI](https://refactoringui.com/)** — by **Adam Wathan** and **Steve Schoger**

- **[Design for Developers](https://www.packtpub.com/en-us/product/design-for-developers-9781837027200)** — by **Adrian Twarog** and **George Moller**

- **[Laws of UX](https://lawsofux.com/book/)** — by **Jon Yablonski**

See [`NOTICE.md`](NOTICE.md) for the fuller attribution chain and source lineage.

## What is this package for

Use `better-web-ui` when you want an agent to help with:

- generating multiple UI directions for new sections, pages, shells, and components
- improving hierarchy, spacing, typography, color, and overall visual quality
- reviewing interfaces for UX issues, accessibility, performance, and polish
- designing empty states, onboarding, motion, depth, and stronger interaction details
- extracting reusable patterns and bringing drifted UI back in line with a system

This library is intentionally opinionated. It optimizes for distinctive, high-context, production-grade interfaces rather than lowest-common-denominator UI.

## What it works with

`better-web-ui` is purposefully framework-agnostic so that everyone can benefit from it.

It is also stack-aware enough to respect what a project already uses.

It works with:

- React, Next.js, React Router, TanStack Start and Vite.
- Vue and Nuxt
- Svelte and SvelteKit
- Astro
- Solid and SolidStart
- plain HTML, CSS, and JavaScript
- custom design systems and in-house component libraries

It also adapts to common styling approaches such as Tailwind CSS, CSS modules, CSS-in-JS, token-based design systems, and vanilla CSS.

When a project already has an established stack, agents should match it first. When the stack is still open, the library provides pragmatic defaults and reference guidance rather than forcing one universal setup.

## Installation

Install from GitHub:

```bash
npx skills add aladicf/better-web-ui
```

You can also browse the live directory entry directly on `skills.sh`:

- [Creator page](https://skills.sh/aladicf)
- [Repository page](https://skills.sh/aladicf/better-web-ui)

Useful variations:

```bash
npx skills add aladicf/better-web-ui --list
npx skills add aladicf/better-web-ui --all
npx skills add aladicf/better-web-ui --skill add-ui --skill critique
npx skills add aladicf/better-web-ui -g
```

The external [`skills` CLI](https://skills.sh/docs/cli) owns the interactive install UI, the `--all` behavior, and the host-to-wrapper-root routing. This repository ships compatibility wrappers for multiple host layouts — including `.github/skills` for GitHub Copilot / VS Code, `.cursor/skills` for Cursor, plus the other supported roots listed below — but it does not contain the editor-detection logic that decides which wrapper root or wrapper-root set gets written during installation.

If a GitHub Copilot / VS Code install lands in `.agents/skills` instead of `.github/skills`, or if the interactive picker does not show an obvious install-all option at the top, that behavior is coming from the upstream `skills` CLI rather than from the canonical skills in this repository. As a current workaround, use `npx skills add aladicf/better-web-ui --all` when you want every skill without manually selecting each entry.

For contributor setup, local installs, and maintainer commands, see [`DEVELOPMENT.md`](DEVELOPMENT.md).

## First thing to do after installing

Run `/setup` first. Yes, before you go off and build the thing.

- **Starting a new project?** Run `/setup` so the skill learns your preferred framework, styling library, component library, and visual direction instead of hallucinating a stack with confidence.
- **Installing into an existing or older project?** Run `/setup` so the skill learns what is already there, or tell it explicitly which framework, styling library, and component library it should preserve.

`/setup` writes that context to `.better-web-ui.md`, so later sessions can keep your project-specific setup instead of guessing.

## Upgrading from older installs

Upgrading from an older install such as `1.5.x` is simple:

1. Reinstall the library with the same scope you use now (`--all` or the same `--skill ...` set).
2. Keep project-specific setup in `.better-web-ui.md`, not inside installed skill files.
3. If you still have legacy `.impeccable.md` context, migrate it into `.better-web-ui.md`.
4. Re-run `/setup` only if your product context, stack, or preferred libraries changed.

That is the whole trick: upgrade the library, keep your project specifics in `.better-web-ui.md`, and newer versions can improve without wiping your setup.

## How to use it

Most hosts expose installed skills either as slash commands or through natural-language prompting.

Example prompts:

- `/add-ui hero section for a B2B security product homepage`
- `/critique this analytics dashboard for hierarchy and cognitive load`
- `/audit this checkout form for accessibility and performance issues`
- `/setup design context for a calm, trustworthy budgeting app`
- `Use animate to improve the motion and feedback in this drawer flow.`

If a host does not surface slash commands clearly, users can still ask for a skill by name in plain language.

## What functionality it includes

At a high level, `better-web-ui` covers four kinds of work:

### Generate and shape UI

- create multiple UI directions with `add-ui`
- improve layout, responsiveness, hierarchy, typography, color, depth, imagery, and motion
- simplify cluttered surfaces and strengthen action clarity

### Review and diagnose problems

- critique overall UX quality with `critique`
- run technical checks with `audit`
- improve performance-sensitive UI with `optimize`

### Handle specific product moments

- design onboarding with `onboard`
- improve empty states with `empty-state`
- tighten UX copy with `clarify`
- harden edge cases, overflow, i18n, and resilience with `harden`

### Systematize and finish work

- extract reusable patterns with `extract`
- normalize drifted UI with `normalize`
- add polish, delight, boldness, or restraint depending on what the interface needs

## Shared design doctrine

The canonical shared reference set lives under [`skills/frontend-design/reference/`](skills/frontend-design/reference/).

If you are evaluating the library quickly, these are the best places to start:

- [design process](skills/frontend-design/reference/design-process.md) — for rough exploration, styleguide thinking, and moving from vague requirements to sharper direction
- [framework official docs](skills/frontend-design/reference/framework-official-docs.md) — for framework-specific implementation decisions and current Motion adapter guidance
- [component anatomy](skills/frontend-design/reference/component-anatomy.md) — for custom primitives, skeletons, comboboxes, disclosure details, and no-library component work
- [motion design](skills/frontend-design/reference/motion-design.md) — for motion principles, interaction feedback, and animation quality
- [native motion with CSS and Tailwind](skills/frontend-design/reference/native-motion-with-css-and-tailwind.md) — for modern CSS, Tailwind, and WAAPI-first implementation guidance
- [typography](skills/frontend-design/reference/typography.md) — for text hierarchy, scale, and readability
- [color and contrast](skills/frontend-design/reference/color-and-contrast.md) — for palette logic, contrast, semantic color, and dark-mode-only color-scheme guidance

For a maintainer-oriented doctrine map and validation workflow, use [`DEVELOPMENT.md`](DEVELOPMENT.md).

## Skill catalog

### Meta and setup

- `frontend-design` — core design operating model and shared reference set
- `setup` — gather and persist project design context

### Execution skills

- `add-ui` — generate 5 distinct UI directions for a requested section, page, flow, shell, or component, then help preview and apply one
- `adapt` — responsive and context-aware adaptation
- `animate` — motion, transitions, gestures, and micro-interactions
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
- `critique` — UX and design critique with scores and prioritized issues across the overall interface
- `delight` — add tasteful personality and memorable moments once the fundamentals are already working
- `polish` — final pass for alignment, consistency, and micro-detail quality
- `quieter` — reduce visual intensity without losing hierarchy or character
- `bolder` — increase visual confidence, contrast, and impact when the design feels too safe or generic

### Advanced / specialized

- `optimize` — UI performance and rendering optimization
- `showcase` — ambitious, standout, technically impressive UI work

The canonical source of truth for every skill lives under `skills/`.

## Compatibility wrapper trees

This repo also ships generated compatibility wrappers so one canonical skill library can surface in multiple agent layouts.

- `.agents/skills`
- `.github/skills`
- `.claude/skills`
- `.codex/skills`
- `.cursor/skills`
- `.opencode/skills`
- `.pi/skills`

Those wrapper trees are shims only. Canonical edits belong in `skills/`. Maintainer workflow details live in [`DEVELOPMENT.md`](DEVELOPMENT.md) and repository-specific editing rules live in [`AGENTS.md`](AGENTS.md).

## Contributing

- [`CONTRIBUTING.md`](CONTRIBUTING.md) — pull request expectations and quality bar
- [`DEVELOPMENT.md`](DEVELOPMENT.md) — maintainer commands, validation, and local setup
- [`AGENTS.md`](AGENTS.md) — repository-specific rules for coding agents

## License

This project uses the custom **better-web-ui License** in [`LICENSE`](LICENSE).

It is MIT-based but adds source-availability and no-resale restrictions for the library itself, so it should not be described as plain MIT.