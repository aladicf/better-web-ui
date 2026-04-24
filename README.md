# better-web-ui

`better-web-ui` is an opinionated Agent Skills library for developers who ship code that works and would like the UI to stop looking like a Midjourney prompt of "modern SaaS dashboard."

It gives AI agents taste. Not decoration. Not more purple gradients. Actual design judgment: hierarchy that guides the eye, color that means something, motion that serves a purpose, and interfaces distinctive enough that users do not immediately ask "which AI made this?"

Use it to generate real UI directions, critique what you have, refine typography and spacing, harden edge cases, and extract reusable patterns. It is for people who know the difference between “works” and “wow” and would like help crossing that gap without pretending they woke up as a principal product designer.

This repository is a **skills package**, not a starter app or deployment template.

The project follows the [Agent Skills](https://agentskills.io/) format and is designed to be installed through the [`skills` CLI](https://skills.sh/docs/cli).

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

- generating multiple UI directions for new or existing sections, pages, shells, and components
- improving hierarchy, spacing, typography, color, and overall visual quality
- reviewing interfaces for UX issues, accessibility, performance, and polish
- designing empty states, onboarding, motion, depth, and stronger interaction details
- extracting reusable patterns and bringing drifted UI back in line with a system

This library is intentionally opinionated. It optimizes for distinctive, high-context, production-grade interfaces rather than lowest-common-denominator UI.

## What it works with

`better-web-ui` is purposefully framework-agnostic so that everyone can benefit from it.

It is also stack-aware enough to respect what a project already uses.

It works with:

- React, Next.js, React Router, TanStack Start, and Vite
- Vue and Nuxt
- Svelte and SvelteKit
- Astro
- Solid and SolidStart
- plain HTML, CSS, and JavaScript
- custom design systems and in-house component libraries

It also adapts to common styling approaches such as Tailwind CSS, CSS modules, CSS-in-JS, token-based design systems, and vanilla CSS.

When a project already has an established stack, agents should match it first. When the stack is still open, the library provides pragmatic defaults and reference guidance rather than forcing one universal setup. See [`skills/frontend-design/reference/framework-defaults.md`](skills/frontend-design/reference/framework-defaults.md) for the full precedence order and default matrix.

## Installation

Install from GitHub:

```bash
npx skills add aladicf/better-web-ui
```

Useful variations:

```bash
npx skills add aladicf/better-web-ui --list
npx skills add aladicf/better-web-ui --skill add-ui --skill critique
npx skills add aladicf/better-web-ui --agent claude-code
npx skills add aladicf/better-web-ui -g
```

Do **not** use `--all` unless you explicitly want **all skills installed to all agents**. 

### Supported install targets

If you want one predictable install target, use an explicit upstream `--agent` flag.

These are the exact project-scope install commands this repository documents and supports:

| Supported target | Upstream `--agent` value | Project path the upstream CLI uses | Exact install command |
| --- | --- | --- | --- |
| Universal `.agents` harness | `universal` | `.agents/skills/` | `npx skills add aladicf/better-web-ui --agent universal` |
| GitHub Copilot / VS Code | `github-copilot` | `.agents/skills/` | `npx skills add aladicf/better-web-ui --agent github-copilot` |
| Claude Code | `claude-code` | `.claude/skills/` | `npx skills add aladicf/better-web-ui --agent claude-code` |
| Codex | `codex` | `.agents/skills/` | `npx skills add aladicf/better-web-ui --agent codex` |
| Cursor | `cursor` | `.agents/skills/` | `npx skills add aladicf/better-web-ui --agent cursor` |
| OpenCode | `opencode` | `.agents/skills/` | `npx skills add aladicf/better-web-ui --agent opencode` |
| Pi | `pi` | `.pi/skills/` | `npx skills add aladicf/better-web-ui --agent pi` |

If you only want a subset of skills for one supported target, keep the same `--agent` flag and add `--skill` selectors:

```bash
npx skills add aladicf/better-web-ui --agent github-copilot --skill add-ui --skill critique
npx skills add aladicf/better-web-ui --agent claude-code --skill add-ui --skill audit
npx skills add aladicf/better-web-ui --agent pi --skill setup
```

If you want a global install instead of a project-scoped install, add `-g` to the same command:

```bash
npx skills add aladicf/better-web-ui --agent github-copilot -g
npx skills add aladicf/better-web-ui --agent claude-code -g
npx skills add aladicf/better-web-ui --agent pi -g
```

### Troubleshooting installation surprises

#### Why did many folders get created?

That happens when the upstream `skills` CLI installs to multiple agents instead of one. The two common reasons are:

1. you used `--all`, which upstream defines as all skills to all agents
2. you used the plain interactive install and accepted multiple detected targets

If you want a single target only, reinstall with one explicit `--agent` value from the supported table above.


#### Why did GitHub Copilot, Codex, Cursor, or OpenCode land in `.agents/skills`?

Because that is the upstream project-scope path those agents currently use. In this repository, `.github/skills`, `.codex/skills`, `.cursor/skills`, and `.opencode/skills` are compatibility wrapper trees, not a promise that the upstream installer will choose those exact project directories.

## First thing to do after installing

Run `/setup` first. Yes, before you go off and build the thing.

- **Starting a new project?** Run `/setup` so the skill learns your preferred framework, styling library, component library, and visual direction instead of hallucinating a stack with confidence.
- **Installing into an existing or older project?** Run `/setup` so the skill learns what is already there, or tell it explicitly which framework, styling library, and component library it should preserve.

`/setup` writes that context to `.better-web-ui.md`, so later sessions can keep your project-specific setup instead of guessing.

## Upgrading from older installs

To update an existing install, use the upstream CLI:

```bash
npx skills update
npx skills update add-ui
npx skills update -g
npx skills update -p
npx skills update -y
```

Use `npx skills update` to update everything, or pass one or more skill names to update only those skills. Add `-g` for global installs, `-p` for project installs, and `-y` to skip the scope prompt.

If you are upgrading from an older `better-web-ui` install, keep your project-specific context in `.better-web-ui.md`, and re-run `/setup` only if your stack or preferences changed.

## Removing skills

Use the upstream CLI to remove all skills or only the ones you want:

```bash
npx skills remove
npx skills remove add-ui
npx skills remove --global add-ui
npx skills remove --agent claude-code cursor add-ui
npx skills remove --all
```

Use `npx skills remove` to pick skills interactively. Pass one or more skill names to remove them directly, add `--global` to remove from your user directory, or add `--agent` to remove from specific agents. `--all` removes every installed skill for the selected agents, so use it only when that is really what you want.

If you only want to clear one specific target, keep the agent flag explicit. For example:

```bash
npx skills remove add-ui --agent github-copilot
npx skills remove add-ui --agent claude-code
npx skills remove add-ui --agent pi
```

## How to use it

Most hosts expose installed skills either as slash commands or through natural-language prompting.

Example prompts:

- `/add-ui hero section for a B2B security product homepage`
- `/add-ui redesign this existing landing page while keeping the current section structure; explore five distinct directions through style, color, copy, and typography`
- `/add-ui redesign our existing login/register flow, keep the bones familiar, and give me compare-and-contrast options before applying one`
- `/critique this analytics dashboard for hierarchy and cognitive load`
- `/audit this checkout form for accessibility and performance issues`
- `/setup design context for a calm, trustworthy budgeting app`
- `Use animate to improve the motion and feedback in this drawer flow.`

If a host does not surface slash commands clearly, users can still ask for a skill by name in plain language.

## What functionality it includes

At a high level, `better-web-ui` covers four kinds of work:

### Generate and shape UI

- create multiple UI directions with `add-ui`, including redesigns of existing sections, pages, and flows when the user wants to preserve the recognizable structure but evolve the style and messaging
- improve layout, responsiveness, hierarchy, typography, color, depth, imagery, and motion
- simplify cluttered surfaces and strengthen action clarity

### Review and diagnose problems

- critique overall UX quality, hierarchy, IA, and cognitive load with `critique`
- run measurable accessibility, performance, responsive, theming, and anti-pattern checks with `audit`
- improve performance-sensitive UI with `optimize`

### Handle specific product moments

- design onboarding with `onboard`
- improve empty states with `empty-state`
- tighten UX copy with `clarify`
- harden edge cases, overflow, i18n, and resilience with `harden`

### Systematize and finish work

- extract reusable patterns with `extract`
- normalize drifted UI with `normalize`
- improve legacy or partially migrated surfaces with lower-risk modernization guidance
- add polish, delight, boldness, or restraint depending on what the interface needs

## Shared design doctrine

The canonical shared reference set lives under [`skills/frontend-design/reference/`](skills/frontend-design/reference/).

If you want the map of the map, start with the [frontend-design reference index](skills/frontend-design/reference/README.md).


For a maintainer-oriented doctrine map and validation workflow, use [`DEVELOPMENT.md`](DEVELOPMENT.md).

## Skill catalog

### Meta and setup

- `frontend-design` — core design operating model and shared reference set
- `setup` — gather and persist project design context

### Execution skills

- `add-ui` — generate 5 distinct UI directions for a requested new or existing section, page, flow, shell, or component, then help preview and apply one
- `adapt` — responsive and context-aware adaptation
- `animate` — motion, transitions, gestures, and micro-interactions
- `arrange` — layout composition, grouping, and spacing rhythm
- `clarify` — UX writing and copy clarity
- `colorize` — color systems and semantic color
- `depth` — elevation, layering, and depth systems
- `distill` — declutter and simplify noisy UI
- `empty-state` — design useful zero-data and no-results states
- `extract` — pull repeated UI into reusable components, patterns, and tokens
- `a11y` — systematic accessibility remediation: keyboard, screen readers, contrast, semantics, ARIA, motion sensitivity
- `harden` — edge cases, i18n, errors, overflow, and resilience
- `test` — UI testing strategy: visual regression, interaction testing, and accessibility assertions
- `hierarchy` — priority, emphasis, and action clarity
- `imagery` — screenshots, icons, photos, and media treatment
- `localize` — i18n and localization strategy for multilingual products
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

### Quick skill picker for common ambiguities

| If the problem is... | Use this | Not that |
| --- | --- | --- |
| overall UX quality, hierarchy, IA, or cognitive load | `critique` | `audit` or `polish` |
| measurable accessibility, performance, responsive, theming, or anti-pattern checks | `audit` | `critique` |
| focused accessibility remediation (keyboard, screen reader, ARIA, contrast) | `a11y` | `audit` |
| final alignment, consistency, and detail cleanup after the structure already works | `polish` | `critique` or `audit` |
| too many controls, choices, features, or competing elements | `distill` | `quieter` |
| structure is sound but the UI is too loud, saturated, or aggressive | `quieter` | `distill` |
| the UI feels too bland, safe, or underpowered | `bolder` | `distill` or `quieter` |
| building test coverage, catching visual bugs, or validating UI behavior | `test` | `audit` or `harden` |
| adding multilingual support, locale switching, or regional formatting | `localize` | `harden` |

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

They are also a repository compatibility surface, not a guarantee that the upstream `skills` CLI will write matching project directories for every supported agent. For example, upstream currently routes GitHub Copilot, Codex, Cursor, and OpenCode project installs through `.agents/skills/`.

## Contributing

- [`CONTRIBUTING.md`](CONTRIBUTING.md) — pull request expectations and quality bar
- [`DEVELOPMENT.md`](DEVELOPMENT.md) — maintainer commands, validation, and local setup
- [`AGENTS.md`](AGENTS.md) — repository-specific rules for coding agents

## License

This project uses the custom **better-web-ui License** in [`LICENSE`](LICENSE).

It is MIT-based but adds source-availability and no-resale restrictions for the library itself, so it should not be described as plain MIT.