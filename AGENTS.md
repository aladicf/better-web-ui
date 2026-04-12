# AGENTS.md

This file gives repository-specific guidance to AI coding agents working on `better-web-ui`.

## Repository purpose

`better-web-ui` is a public Agent Skills package focused on high-quality frontend design work.

It ships:

- a canonical skill package in `skills/`
- shared design doctrine in `skills/frontend-design/reference/`
- generated compatibility wrapper trees for agent-specific layouts
- human-facing docs in `README.md`
- attribution and license context in `NOTICE.md` and `LICENSE`

This is **not** a generic skills starter and **not** a Vercel deployment repo. Keep docs, examples, and contribution guidance specific to this project.

## Source of truth

The canonical source of truth is always:

```text
skills/{skill-name}/
```

Edit canonical skills there.

If a wrapper tree and `skills/` ever disagree, `skills/` is the source of truth.

Wrapper trees such as `.github/skills/...` or `.claude/skills/...` are generated compatibility shims and should not contain original doctrine.

## Repository layout

```text
skills/
  {skill-name}/
    SKILL.md
    reference/        # optional shared or skill-specific docs
    references/       # also acceptable if used intentionally
    scripts/          # optional deterministic helpers
    assets/           # optional templates or static assets

.agents/skills/
.github/skills/
.claude/skills/
.codex/skills/
.cursor/skills/
.opencode/skills/
.pi/skills/
  README.md           # generated wrapper-root guidance
  {skill-name}/
    SKILL.md          # generated wrapper pointing back to skills/{skill-name}/SKILL.md

README.md
CONTRIBUTING.md
DEVELOPMENT.md
CHANGELOG.md
AGENTS.md
CLAUDE.md             # should remain a pointer to AGENTS.md
NOTICE.md
LICENSE
```

## Working rules

## Tooling baseline

- Use Node `24.14.1` for local maintainer work.
- Treat `>=24.14.1 <25` as the supported engine range for repository tooling and CI.
- Run `npm install` before using repository scripts.
- Use `npm run lint` for repository scripts, `npm run generate:wrappers` for compatibility trees, `npm run check:wrapper-drift` for generated wrapper diff checks, and `npm run validate` for canonical skill, doc, and wrapper checks.

### 1. Edit canonical skills first

- Make content changes only in `skills/`
- Regenerate wrappers after adding, removing, renaming, or changing frontmatter for any skill
- Do not hand-maintain divergent logic across wrapper trees

### 2. Keep skill metadata portable

For each `SKILL.md`:

- `name` must match the directory name
- `description` must explain both **what the skill does** and **when to use it**
- keep names lowercase and hyphenated
- prefer concise, trigger-friendly descriptions

If a skill needs an argument hint, store it under `metadata.argument-hint` rather than as a top-level frontmatter field so the skill remains valid against the current Agent Skills validator.

### 3. Prefer progressive disclosure

- Keep `SKILL.md` focused on workflow
- Move reusable doctrine into reference files when a concept appears in 3+ skills
- Prefer pointing multiple skills to `skills/frontend-design/reference/` over duplicating long guidance blocks

### 4. Keep wrappers thin

Each wrapper should:

- copy the canonical frontmatter
- state that it is a compatibility wrapper
- link to `../../../skills/{skill-name}/SKILL.md`

Do not duplicate the full skill body into wrapper trees.

### 5. Preserve project identity

- `README.md` should describe `better-web-ui`, not the general skills ecosystem
- examples should use this skill library's commands and purpose
- docs should reflect the actual repository contents, not hypothetical directories

### 6. Keep stack guidance pragmatic

- Preserve the library's framework-agnostic positioning in public docs and skill guidance
- Detect the current project's styling system and component libraries first, and match those before introducing new defaults
- When a project is building primitives without a mature component library, use `skills/frontend-design/reference/component-anatomy.md` for anatomy guidance on custom components such as buttons, cards, checkboxes, dropdowns, tabs, textareas, toasts, toggles, tooltips, accordions, avatars, badges, borders, breadcrumbs, iconography, lists, and submit actions
- When implementation work is specific to a known frontend framework or meta-framework, consult the official docs for that framework first using `skills/frontend-design/reference/framework-official-docs.md`, then follow the relevant architecture / routing / rendering / data-loading / forms / styling / deployment pages before making framework-specific decisions
- If the user is creating a brand-new project and explicitly names a styling or component library, treat that as the default
- If the user is creating a brand-new project and the form architecture is still open across React, Vue, Angular, Solid, or Svelte, prefer TanStack Form as the default unless the user explicitly asks for another form stack
- If the user is creating a brand-new project and the table or data-grid architecture is still open across React, Vue, Angular, Solid, or Svelte, prefer TanStack Table as the default unless the user explicitly asks for another table/grid stack
- If the user is creating a brand-new project and does not specify implementation preferences, use these fallbacks:
  - React-based frameworks / meta-frameworks (`Next.js`, `TanStack Start`, `React Router`, Vite React) → **Tailwind CSS** + **shadcn/ui** in the Base UI direction, with **shadcn/ui Blocks**, **re-ui**, and the curated shortlist in `skills/frontend-design/reference/react-shadcn-accelerators.md` as preferred accelerators when the feature request matches
  - Astro → **Tailwind CSS** + **HTML-first Astro components / native elements** by default to preserve Astro's low-JS model; only use **React** + **shadcn/ui** when the user explicitly asks for that integration or the existing Astro project already uses it
  - Laravel + Inertia / React → **Tailwind CSS** + **shadcn/ui** in the Base UI direction, with **shadcn/ui Blocks**
  - Vue / Nuxt → **Tailwind CSS** + **Nuxt UI** or **shadcn-vue**
  - Svelte / SvelteKit → **Tailwind CSS** + **shadcn-svelte**
  - Angular → **Tailwind CSS** + **Angular Material** or **ZardUI**
  - SolidJS / SolidStart → **Tailwind CSS** + **SolidUI**
- For React/shadcn fallback work, use `skills/frontend-design/reference/react-shadcn-accelerators.md` when you need direct links to the curated Theme Toggle Effect, Consent Manager, Theme Switcher, Sonner, Vaul, Shimmering Text, Scroll Fade Effect, Text Flip, Testimonial, Testimonial Spotlight, Testimonials Marquee, React Wheel Picker, and Slide to Unlock docs.
- If the official docs still leave gaps after that framework-specific pass, do a focused web search and verify the answer against the official docs before relying on it
- Avoid introducing framework islands or client JavaScript in Astro unless the feature genuinely needs interactivity that Astro-native HTML/CSS cannot cover cleanly
- Do not present those preferences as hard requirements or force them into incompatible or already-established stacks
- When a project already has a framework, design system, or component library, match the existing setup first

## Adding or updating a skill

When creating a new skill:

1. Create `skills/{skill-name}/SKILL.md`
2. Add any supporting docs under `reference/`, `references/`, `scripts/`, or `assets/` as needed
3. Update `README.md` so the skill is discoverable to humans
4. Regenerate all wrapper trees
5. Validate canonical skills
6. Smoke-test local installation via the `skills` CLI

## Wrapper generation contract

Generated wrapper body format should stay consistent:

```md
This compatibility wrapper exposes the `{skill-name}` skill for the `{wrapper-root}` layout while keeping `skills/{skill-name}/SKILL.md` as the canonical source of truth.

Follow the canonical instructions in [../../../skills/{skill-name}/SKILL.md](../../../skills/{skill-name}/SKILL.md).
```

## Validation and release workflow

Before release or after significant skill changes:

1. Run `npm run lint` after changing repository scripts or tooling
2. Regenerate wrappers with `npm run generate:wrappers`
3. Validate canonical skills, docs, wrapper root readmes, and wrapper sync with `npm run validate`
4. Smoke-test discovery with `npm run smoke:list`
5. Smoke-test an actual local install with `npm run smoke:install`
6. Ensure README install instructions still match observed behavior

There is no special `skills.sh` publish command. A public repo plus successful installs is the publish mechanism.

## Human contributor docs

- `CONTRIBUTING.md` documents pull request expectations and the skill quality bar.
- `DEVELOPMENT.md` documents local setup, script usage, and validation coverage.
- Generated wrapper-root `README.md` files explain the compatibility shim contract inside each wrapper tree.

## Attribution and licensing

- Keep attribution in `NOTICE.md`
- Do not remove the Anthropic / Impeccable lineage notes without a strong reason
- When editing `frontend-design`, preserve attribution context unless the underlying dependency story truly changes

## CLAUDE.md

`CLAUDE.md` should remain a simple pointer to `AGENTS.md` unless there is a very specific reason to diverge.