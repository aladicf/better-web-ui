# Development guide

## Runtime

- Node `24.14.1`
- npm compatible with the pinned Node runtime

The supported engine range for repository tooling is `>=24.14.1 <25`.

Use `.nvmrc` or `.node-version` to align your local environment before running repository scripts.

## Quick start

1. Install dependencies with `npm install`.
2. Edit canonical files under `skills/` or repository source files such as `scripts/` and top-level docs.
3. Regenerate wrappers and validate before committing.

## Source-of-truth rules

- Canonical skill content lives under `skills/`.
- Wrapper trees such as `.github/skills/` and `.cursor/skills/` are generated compatibility shims.
- Each wrapper root also contains a generated `README.md` that explains the shim contract.

## Script reference

- `npm run lint` — lint repository scripts with OXC (`oxlint`)
- `npm run generate:wrappers` — regenerate all wrapper trees and wrapper-root readmes from canonical skills
- `npm run check:wrapper-drift` — fail if tracked generated wrapper outputs differ from the checked-in wrapper roots
- `npm run validate` — validate canonical skill metadata, local markdown links, README skill catalog sync, wrapper root readmes, and wrapper drift
- `npm run validate:wrappers` — validate wrapper trees and wrapper-root readmes only
- `npm run smoke:list` — smoke-test local `skills` CLI discovery from the repository root

## Recommended workflow

### Adding a skill

1. Create `skills/{skill-name}/SKILL.md`.
2. Add any supporting `reference/`, `references/`, `assets/`, or `scripts/` files.
3. Update [`README.md`](README.md) so the new skill is discoverable.
4. Run `npm run generate:wrappers`.
5. Run `npm run validate`.
6. Run `npm run smoke:list`.

### Updating a skill

1. Edit the canonical file in `skills/`.
2. Regenerate wrappers if frontmatter or skill inventory changed.
3. Re-run validation and smoke tests.

### Updating tooling or docs

1. Run `npm run lint` after changing `scripts/` or tooling-related files.
2. Run `npm run validate` to catch README/catalog drift and broken local links.
3. Regenerate wrappers if you changed wrapper templates or wrapper-root guidance.

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