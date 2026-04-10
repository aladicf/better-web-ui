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
7. If behavior changed materially, run `npm run smoke:install` to smoke-test installing at least one skill from the local checkout.

## Pull request checklist

- [ ] Canonical changes were made in `skills/` or other source files, not generated wrappers
- [ ] Wrapper trees were regenerated after any skill rename, add, remove, or frontmatter change
- [ ] `npm run validate` passes locally
- [ ] `npm run smoke:list` passes locally
- [ ] `npm run smoke:install` passes locally when install or discovery behavior changed
- [ ] `README.md` was updated when discoverability or maintainer guidance changed
- [ ] New or changed skills still describe both what they do and when to use them
- [ ] Attribution in [`NOTICE.md`](NOTICE.md) remains accurate

## Quality bar for skills

- Prefer concise, trigger-friendly descriptions.
- Keep `SKILL.md` focused on workflow; move repeated doctrine into `reference/` files.
- Avoid duplicate doctrine across skills when a shared reference would do.
- Preserve canonical naming such as `add-ui` when hosts expose friendlier aliases.

### React fallback defaults

Before adding new React/Tailwind guidance, check the existing source-of-truth docs first:

- [`skills/frontend-design/reference/component-and-block-strategy.md`](skills/frontend-design/reference/component-and-block-strategy.md)
- [`skills/add-ui/reference/component-library-integration.md`](skills/add-ui/reference/component-library-integration.md)
- [`skills/add-ui/assets/component-library-integration-checklist.md`](skills/add-ui/assets/component-library-integration-checklist.md)

Prefer extending those docs over duplicating shadcn/ui, blocks, re-ui, or Tailwind usage guidance elsewhere.

## Proposing a new skill

Before adding a brand-new skill, first check whether the idea should instead:

- strengthen an existing skill
- add a shared reference under `skills/frontend-design/reference/`
- improve README / maintainer guidance rather than creating a new command

Propose a new skill when it has a clearly distinct job, trigger pattern, and workflow that would otherwise create confusion or overload an existing skill.

Good questions to answer before opening a pull request:

- What unique problem does this skill solve?
- Which existing skills are closest, and why are they not enough?
- Should the doctrine live in a shared reference instead of a new skill?
- Will the skill remain broadly useful to the library, not just one narrow project case?

If the answer is still "new skill," follow the adding-a-skill workflow in [`DEVELOPMENT.md`](DEVELOPMENT.md) and update discoverability docs accordingly.

## Questions

- repository rules: [`AGENTS.md`](AGENTS.md)
- maintainer workflow: [`DEVELOPMENT.md`](DEVELOPMENT.md)
- public-facing project context: [`README.md`](README.md)