# Development guide

## Runtime

- Node `24.14.1`
- npm compatible with the pinned Node runtime

The supported engine range for repository tooling is `>=24.14.1 <25`.

Use `.nvmrc` or `.node-version` to align your local environment before running repository scripts.

Both files are intentionally committed for compatibility across version managers:

- `.nvmrc` works well with `nvm`, `fnm`, and similar tools
- `.node-version` is picked up by tools that prefer the generic filename

They should stay in sync and currently both point to Node `24.14.1`.

## Quick start

1. Install dependencies with `npm install`.
2. Edit canonical files under `skills/` or repository source files such as `scripts/` and top-level docs.
3. Regenerate wrappers and validate before committing.

## Source-of-truth rules

- Canonical skill content lives under `skills/`.
- Wrapper trees such as `.github/skills/` and `.cursor/skills/` are generated compatibility shims.
- Each wrapper root also contains a generated `README.md` that explains the shim contract.

## Design context files

The canonical project design-context file for this library is `.better-web-ui.md`.

Some skills still check legacy files such as `.better-ui.md` and `.impeccable.md` for migration compatibility with older projects or earlier tooling conventions.

Treat those legacy files as fallback inputs only. New work should write or update `.better-web-ui.md` so future sessions have a single canonical source of design context.

## Documentation map

When the repo grows, use these files for distinct purposes instead of letting all four become near-duplicates:

- [`README.md`](README.md) — public purpose, stack defaults, doctrine discoverability, and skill catalog
- [`AGENTS.md`](AGENTS.md) — repo rules for coding agents and canonical editing constraints
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — pull request expectations and contributor checklist
- [`DEVELOPMENT.md`](DEVELOPMENT.md) — maintainer commands, validation, and the quick doctrine map below

## High-signal doctrine map

When maintaining `better-web-ui`, these are the fastest in-repo references to check first before editing broader guidance:

Treat [`README.md` → Shared design doctrine](README.md#shared-design-doctrine) as the public annotated index. Treat this section as the faster maintainer map.

### Structure and process

- [`skills/frontend-design/reference/design-process.md`](skills/frontend-design/reference/design-process.md)

### Framework-specific implementation choices

- [`skills/frontend-design/reference/framework-official-docs.md`](skills/frontend-design/reference/framework-official-docs.md)

For Next.js maintenance work specifically, remember that modern Next.js can ship version-matched docs inside `node_modules/next/dist/docs/`, and `create-next-app` now includes `AGENTS.md` / `CLAUDE.md` support by default. Prefer those bundled local docs over memory when the project has them.

### Typography and text quality

- [`skills/frontend-design/reference/typography.md`](skills/frontend-design/reference/typography.md)
- [`skills/frontend-design/reference/text-hierarchy-and-readability.md`](skills/frontend-design/reference/text-hierarchy-and-readability.md)

### Hierarchy, spacing, and layout flow

- [`skills/frontend-design/reference/hierarchy-checklist.md`](skills/frontend-design/reference/hierarchy-checklist.md)
- [`skills/frontend-design/reference/spatial-design.md`](skills/frontend-design/reference/spatial-design.md)
- [`skills/frontend-design/reference/spacing-system.md`](skills/frontend-design/reference/spacing-system.md)

### Performance-sensitive text layout

- [`skills/frontend-design/reference/text-layout-prediction.md`](skills/frontend-design/reference/text-layout-prediction.md)

### Custom primitive component work

- [`skills/frontend-design/reference/component-anatomy.md`](skills/frontend-design/reference/component-anatomy.md)

### Color systems and palette logic

- [`skills/frontend-design/reference/color-and-contrast.md`](skills/frontend-design/reference/color-and-contrast.md)
- [`skills/frontend-design/reference/color-ramp-workflow.md`](skills/frontend-design/reference/color-ramp-workflow.md)
- [`skills/frontend-design/reference/semantic-color.md`](skills/frontend-design/reference/semantic-color.md)

### System alignment and React fallback work

- [`skills/frontend-design/reference/design-system-alignment.md`](skills/frontend-design/reference/design-system-alignment.md)
- [`skills/frontend-design/reference/component-and-block-strategy.md`](skills/frontend-design/reference/component-and-block-strategy.md)
- [`skills/frontend-design/reference/react-shadcn-accelerators.md`](skills/frontend-design/reference/react-shadcn-accelerators.md)
- [TanStack Form overview](https://tanstack.com/form/latest/docs/overview)
- [TanStack Form React quick start](https://tanstack.com/form/latest/docs/framework/react/quick-start)
- [TanStack Table introduction](https://tanstack.com/table/latest/docs/introduction)
- [TanStack Virtual introduction](https://tanstack.com/virtual/latest/docs/introduction)

If you are not sure where to place new doctrine, start by checking those files before creating a new reference. In many cases the right change is to strengthen one of them rather than add another document.

## React fallback reference bridge

When maintaining docs or skills related to the React/Tailwind fallback path, use the official upstream docs as the source of truth for current inventories and implementation details.

Primary in-repo guidance:

- [`skills/frontend-design/reference/component-and-block-strategy.md`](skills/frontend-design/reference/component-and-block-strategy.md)
- [`skills/add-ui/reference/component-library-integration.md`](skills/add-ui/reference/component-library-integration.md)
- [`skills/add-ui/assets/component-library-integration-checklist.md`](skills/add-ui/assets/component-library-integration-checklist.md)

Primary upstream references:

- [`shadcn/ui` components](https://ui.shadcn.com/docs/components)
- [`shadcn/ui` TanStack Form docs](https://ui.shadcn.com/docs/forms/tanstack-form)
- [`shadcn/ui` Blocks](https://ui.shadcn.com/blocks#blocks)
- [`shadcn/ui` registry directory](https://ui.shadcn.com/docs/directory)
- [ReUI components](https://reui.io/components)
- [ReUI docs](https://reui.io/docs)
- [Tailwind utility classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Tailwind states and variants](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind dark mode](https://tailwindcss.com/docs/dark-mode)
- [Tailwind theme variables](https://tailwindcss.com/docs/theme)
- [Tailwind colors](https://tailwindcss.com/docs/colors)
- [Tailwind adding custom styles](https://tailwindcss.com/docs/adding-custom-styles)
- [Tailwind detecting classes in source files](https://tailwindcss.com/docs/detecting-classes-in-source-files)
- [Tailwind functions and directives](https://tailwindcss.com/docs/functions-and-directives)
- [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide)
- [Tailwind install with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Tailwind install with PostCSS](https://tailwindcss.com/docs/installation/using-postcss)
- [Tailwind framework guides](https://tailwindcss.com/docs/installation/framework-guides)

Do not turn those upstream inventories into a frozen in-repo catalog. When the docs still leave gaps, do a focused web search and then verify the result against upstream documentation before updating the library guidance.

## Script reference

- `npm run lint` — lint repository scripts with OXC (`oxlint`)
- `npm run generate:wrappers` — regenerate all wrapper trees and wrapper-root readmes from canonical skills
- `npm run check:wrapper-drift` — fail if tracked generated wrapper outputs differ from the checked-in wrapper roots
- `npm run validate` — validate canonical skill metadata, local markdown links, README skill catalog sync, wrapper root readmes, and wrapper drift
- `npm run validate:wrappers` — validate wrapper trees and wrapper-root readmes only
- `npm run smoke:list` — smoke-test local `skills` CLI discovery from the repository root; verifies that `npx skills add . --list` discovers and lists the canonical skills as expected
- `npm run smoke:install` — perform a disposable local install smoke test for the `add-ui` skill in a temporary directory and verify that the installed skill is listed successfully
- `npm run verify` — run the main maintainer checks in sequence: lint, wrapper generation, validation, discovery smoke test, and install smoke test

## Choosing the right skill

Use these quick triage rules when multiple skills seem close:

- **Too many choices / too much visible complexity** → `distill`
- **Weak grouping / cramped or monotonous layout rhythm** → `arrange`
- **Unclear priority / everything competes / titles too loud** → `hierarchy`
- **Zero-data or no-results surface itself** → `empty-state`
- **Broader first-run education, activation, or aha-moment strategy** → `onboard`
- **Consistency cleanup and micro-detail refinement** → `polish`
- **More personality, joy, or memorable moments** → `delight`
- **Stronger visual confidence and impact** → `bolder`
- **Less visual intensity without losing structure** → `quieter`

If the problem is mainly about deciding what matters first, prefer `hierarchy` before `polish`.
If the problem is mainly about removing user burden, prefer `distill` before adding more UI.

## When to regenerate wrappers

Run `npm run generate:wrappers` when you:

- add a skill
- remove a skill
- rename a skill directory
- change skill frontmatter such as `name`, `description`, or `metadata`
- update wrapper-generation templates or wrapper-root guidance

You usually do **not** need to regenerate wrappers for canonical body-text-only edits that do not affect wrapper output.

If you skip regeneration when it is needed, validation will fail with wrapper-drift errors.

## Recommended workflow

### Adding a skill

1. Create `skills/{skill-name}/SKILL.md`.
2. Add any supporting `reference/`, `references/`, `assets/`, or `scripts/` files.
3. Update [`README.md`](README.md) so the new skill is discoverable.
4. Run `npm run generate:wrappers`.
5. Run `npm run validate`.
6. Run `npm run smoke:list`.
7. Run `npm run smoke:install` when you changed skill inventory, installation guidance, or discovery-related metadata.

### Updating a skill

1. Edit the canonical file in `skills/`.
2. Regenerate wrappers if frontmatter or skill inventory changed.
3. Re-run validation and smoke tests.

### Updating tooling or docs

1. Run `npm run lint` after changing `scripts/` or tooling-related files.
2. Run `npm run validate` to catch README/catalog drift and broken local links.
3. Regenerate wrappers if you changed wrapper templates or wrapper-root guidance.

### Actual local install smoke test

Use `npm run smoke:install` when you want to verify a real local install flow instead of just discovery.

The helper script creates a disposable temporary directory, installs the `add-ui` skill into that temporary project scope, verifies the installed skill appears in `skills list --json`, and then cleans the temp directory up on success.

## Validation coverage

`npm run validate` currently checks:

- skill name matches directory name
- skill names stay lowercase and hyphenated
- `description` is present
- `metadata.argument-hint` is non-empty if present
- top-level docs required for contributors exist
- local markdown links in canonical docs resolve
- the README skill catalog stays in sync with canonical `skills/`
- the README wrapper-root list stays in sync with configured wrapper roots
- wrapper-root `README.md` files match the generated contract
- wrapper `SKILL.md` files match generated output

## CI

GitHub Actions in [`.github/workflows/validate.yml`](.github/workflows/validate.yml) installs dependencies, lints repository scripts, validates canonical skills and wrapper sync, checks wrapper generation idempotency, and runs the local discovery smoke test.

The wrapper-idempotency check is intentionally scoped to the generated wrapper roots rather than the whole repository, so unrelated files such as local package-manager artifacts cannot cause false negatives.