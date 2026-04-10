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