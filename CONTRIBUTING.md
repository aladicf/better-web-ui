# Contributing to better-web-ui

Thanks for improving `better-web-ui`.

This repository is an opinionated Agent Skills library, not a generic starter. Contributions should preserve that identity: distinctive frontend design guidance, thin compatibility wrappers, and canonical skill content under `skills/`.

## Before you start

- read [`README.md`](README.md) for project purpose and install behavior
- read [`AGENTS.md`](AGENTS.md) for repository-specific rules and wrapper contracts
- read [`DEVELOPMENT.md`](DEVELOPMENT.md) for local setup, commands, and validation scope
- use Node `24.14.1` via `.nvmrc` or `.node-version`

## Contribution principles

- edit canonical skills in `skills/`, never wrapper trees
- keep wrapper trees thin and generated
- keep skill metadata portable and lowercase-hyphenated
- reuse shared doctrine in `skills/frontend-design/reference/` when guidance would otherwise be duplicated
- preserve the repository’s design point of view; do not drift toward generic skills-starter language

## Local workflow

1. Run `npm install`.
2. Make changes in the canonical source files.
3. Run `npm run lint` if you changed repository scripts or tooling.
4. Run `npm run generate:wrappers`.
5. Run `npm run validate`.
6. Run `npm run smoke:list`.
7. If behavior changed materially, smoke-test installing at least one skill from the local checkout.

## Pull request checklist

- [ ] Canonical changes were made in `skills/` or other source files, not generated wrappers
- [ ] Wrapper trees were regenerated after any skill rename, add, remove, or frontmatter change
- [ ] `npm run validate` passes locally
- [ ] `npm run smoke:list` passes locally
- [ ] `README.md` was updated when discoverability or maintainer guidance changed
- [ ] New or changed skills still describe both what they do and when to use them
- [ ] Attribution in [`NOTICE.md`](NOTICE.md) remains accurate

## Quality bar for skills

- Prefer concise, trigger-friendly descriptions.
- Keep `SKILL.md` focused on workflow; move repeated doctrine into `reference/` files.
- Avoid duplicate doctrine across skills when a shared reference would do.
- Preserve canonical naming such as `add-ui` when hosts expose friendlier aliases.

## Questions

- repository rules: [`AGENTS.md`](AGENTS.md)
- maintainer workflow: [`DEVELOPMENT.md`](DEVELOPMENT.md)
- public-facing project context: [`README.md`](README.md)