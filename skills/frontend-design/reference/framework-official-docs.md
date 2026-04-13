# Framework Official Docs

Use this reference when a task is clearly tied to a specific frontend framework or meta-framework.

The goal is simple: **before making framework-specific architecture or implementation decisions, consult the official docs for that framework first**. Do not rely on stale memory, generic cross-framework habits, or cargo-culted snippets when the framework has explicit guidance for routing, rendering, data loading, forms, styling, or deployment.

This reference is intentionally a **curated starting map**, not a frozen copy of each ecosystem's documentation. Framework docs evolve quickly. Use the links below to orient yourself, then follow the official docs deeper for the exact feature you are implementing.

## Research workflow

When the project stack is known, do this in order:

1. **Confirm the actual framework in use**
   - Check the existing codebase first.
   - Distinguish plain library usage from a meta-framework (for example `React` vs `Next.js`, `Vue` vs `Nuxt`, `Svelte` vs `SvelteKit`, `Solid` vs `SolidStart`).

2. **Open the official docs entry page for that framework**
   - Start with the framework-specific links below instead of a generic search result.

3. **Read the framework's core architecture pages before coding**
   - project/app structure
   - routing
   - rendering model and server/client boundaries
   - data loading and mutations
   - forms and validation
   - styling and asset handling
   - deployment / SSR / SSG / hydration implications

4. **Then do a focused web search only when needed**
   - If the official docs do not directly answer the version, adapter, or edge-case question, do a focused web search.
   - Verify whatever you find against official docs before treating it as guidance.

## What to check before implementing

When working in a framework-specific stack, review the official docs for the topics most likely to affect correctness:

- how projects are scaffolded and structured
- where routes live and how nested layouts/outlets work
- whether rendering is client-only, server-first, hybrid, or isomorphic by default
- how data loading and mutations are supposed to happen
- how forms, validation, and pending states are expected to work
- how server-only and client-only code should be separated
- how CSS, assets, images, fonts, or framework components are supposed to be wired in
- how deployment mode changes the valid implementation choices

## Official docs starting points

### React

Use when the project is plain React or when a framework-specific answer should be grounded in React's own mental model.

- [React Learn](https://react.dev/learn) — the fastest way to refresh the component model, JSX, state, events, hooks, and data flow
- [React API reference](https://react.dev/reference/react) — hooks, APIs, directives, and low-level reference material
- [Rules of React](https://react.dev/reference/rules) — purity, hook rules, and idiomatic React constraints that affect correctness

Consult React docs first for:

- component composition
- hooks correctness
- state ownership / lifting state
- client component behavior and render purity

### Next.js

Use when the project is Next.js, especially App Router work.

- [Next.js docs](https://nextjs.org/docs)
- [Getting Started](https://nextjs.org/docs/app/getting-started) — installation, project structure, layouts/pages, navigation, data fetching, mutating, caching, CSS, deployment
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) — when code belongs on the server vs client, serialization, provider placement, environment poisoning pitfalls
- [Rendering Philosophy](https://nextjs.org/docs/app/guides/rendering-philosophy) — how Next treats static vs dynamic as a component-level spectrum
- [Forms](https://nextjs.org/docs/app/guides/forms) — Server Actions, validation, pending states, optimistic updates
- [AI Coding Agents](https://nextjs.org/docs/app/guides/ai-agents) — version-matched bundled docs, `AGENTS.md`, `CLAUDE.md`, and local agent setup
- [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app) — modern scaffolding defaults, including `--agents-md` support and `--no-agents-md` opt-out

Consult Next docs first for:

- App Router conventions
- server/client component boundaries
- caching and revalidation
- Server Actions and forms
- deployment/runtime implications

Next.js-specific agent rule for modern projects:

- if the project uses modern Next.js and has bundled docs at `node_modules/next/dist/docs/`, read the relevant local doc there **before** writing Next.js code
- prefer those bundled local docs over stale model memory because they match the exact installed Next.js version
- if the project was created with modern `create-next-app`, expect `AGENTS.md` and `CLAUDE.md` to already exist unless the project opted out with `--no-agents-md`
- for existing projects on `v16.2.0-canary.37` or later, recommend the minimal `AGENTS.md` rule that points agents to `node_modules/next/dist/docs/` and a `CLAUDE.md` file containing `@AGENTS.md`
- for older Next.js projects, use the `npx @next/codemod@latest agents-md` codemod, which writes the docs reference to `.next-docs/`

Practical rule:

- official Next.js web docs are the starting map
- bundled local docs are the source of truth when they exist in the project

### TanStack Start

Use when the project is TanStack Start for React or Solid.

- [TanStack Start docs](https://tanstack.com/start/latest)
- [Getting Started](https://tanstack.com/start/latest/docs/framework/react/getting-started) — official project creation paths, examples, migration links
- [Routing](https://tanstack.com/start/latest/docs/framework/react/guide/routing) — root route, file-based routes, nested routing, generated route tree
- [Execution Model](https://tanstack.com/start/latest/docs/framework/react/guide/execution-model) — critical reading because Start is isomorphic by default
- [Server Functions](https://tanstack.com/start/latest/docs/framework/react/guide/server-functions) — RPC-style server logic, validation, redirects, request handling, progressive enhancement

Consult TanStack Start docs first for:

- isomorphic vs server-only vs client-only execution
- route loaders and where they run
- server functions and validation
- routing/document shell setup
- hydration and environment safety

### React Router

Use when the project is React Router rather than Next or Start.

- [React Router home](https://reactrouter.com/home)
- [Picking a Mode](https://reactrouter.com/start/modes) — decide between Declarative, Data, and Framework modes before assuming architecture
- [Framework installation](https://reactrouter.com/start/framework/installation)
- [Framework routing](https://reactrouter.com/start/framework/routing)

Consult React Router docs first for:

- choosing the correct mode
- route configuration and nested outlets
- route modules, loaders, actions, and rendering strategy

### Astro

Use when the project is Astro or when Astro is hosting components from another frontend framework.

- [Astro getting started](https://docs.astro.build/en/getting-started/)
- [Why Astro?](https://docs.astro.build/en/concepts/why-astro/) — content-driven, server-first, zero-JS-by-default design principles
- [Front-end frameworks](https://docs.astro.build/en/guides/framework-components/) — official integrations, islands, hydration directives, mixing frameworks
- [Styles and CSS](https://docs.astro.build/en/guides/styling/) — scoped styles, global styles, Tailwind, CSS preprocessors, framework-specific styling behavior

Consult Astro docs first for:

- islands architecture and hydration directives
- when to keep things server-rendered vs interactive
- framework integration boundaries
- Astro-specific styling rules and CSS precedence

Default Astro implementation bias:

- prefer Astro components, native HTML elements, and Tailwind-first styling before adding a framework island
- preserve Astro's low-JS / zero-JS-by-default model whenever the feature can be delivered without client-side framework code
- only introduce React-compatible component stacks such as `shadcn/ui` when the user explicitly requests them or the project already depends on that integration

### Inertia

Use when the project is Laravel + Inertia / React, Vue, or Svelte.

- [Inertia introduction](https://inertiajs.com/docs/v3/getting-started/index)
- [How it works](https://inertiajs.com/docs/v3/core-concepts/how-it-works) — understand the server-driven / client-side-swapped model before implementing UI flows
- [Server-side setup](https://inertiajs.com/docs/v3/installation/server-side-setup) — especially relevant for Laravel-root-template and middleware expectations

Consult Inertia docs first for:

- the "modern monolith" model
- how links and visits work
- what lives in controllers vs page components
- Laravel-side setup assumptions

### Vue

Use when the project is plain Vue rather than Nuxt.

- [Vue introduction](https://vuejs.org/guide/introduction.html)
- [Vue quick start](https://vuejs.org/guide/quick-start)
- [Vue routing](https://vuejs.org/guide/scaling-up/routing)
- [Vue SSR guide](https://vuejs.org/guide/scaling-up/ssr)

Consult Vue docs first for:

- Composition API vs Options API expectations
- SFC-based app structure
- whether Vue Router should be used
- SSR constraints like platform APIs, hydration mismatch, and cross-request state pollution

### Nuxt

Use when the project is Nuxt rather than plain Vue.

- [Nuxt introduction](https://nuxt.com/docs/4.x/getting-started/introduction)
- [Nuxt installation](https://nuxt.com/docs/4.x/getting-started/installation)
- [Nuxt rendering modes](https://nuxt.com/docs/4.x/guide/concepts/rendering)
- [Nuxt deployment](https://nuxt.com/docs/4.x/getting-started/deployment)

Consult Nuxt docs first for:

- universal vs client-only vs hybrid rendering
- Nitro server behavior and route rules
- client/server execution expectations in Vue files
- deployment presets and SSR/static tradeoffs

### Svelte

Use when the project is plain Svelte, not SvelteKit.

- [Svelte overview](https://svelte.dev/docs/svelte/overview)
- [Svelte getting started](https://svelte.dev/docs/svelte/getting-started)
- [Svelte tutorial](https://svelte.dev/tutorial)

Consult Svelte docs first for:

- component model and compiler-oriented mental model
- whether plain Svelte is enough or SvelteKit is the better fit
- editor/tooling expectations

### SvelteKit

Use when the project is SvelteKit.

- [SvelteKit introduction](https://svelte.dev/docs/kit/introduction)
- [Creating a project](https://svelte.dev/docs/kit/creating-a-project)
- [Loading data](https://svelte.dev/docs/kit/load)

Consult SvelteKit docs first for:

- route structure and SSR-first defaults
- `load` semantics and the difference between universal and server load functions
- redirects, errors, cookies, headers, streaming, and invalidation behavior

### SolidJS

Use when the project is plain Solid.

- [Solid quick start](https://docs.solidjs.com/quick-start)
- [Intro to reactivity](https://docs.solidjs.com/concepts/intro-to-reactivity)

Consult Solid docs first for:

- signal-based fine-grained reactivity
- tracking scopes and update behavior
- how Solid differs from React-style rerender mental models

### SolidStart

Use when the project is SolidStart rather than plain Solid.

- [SolidStart overview](https://docs.solidjs.com/solid-start)
- [SolidStart getting started](https://docs.solidjs.com/solid-start/getting-started)

Consult SolidStart docs first for:

- application structure
- entry-client / entry-server / app shell responsibilities
- rendering modes and deployment presets
- how the meta-framework changes plain Solid app assumptions

### Angular

Use when the project is Angular.

- [Angular overview](https://angular.dev/overview)
- [Angular installation](https://angular.dev/installation)
- [Angular routing](https://angular.dev/guide/routing)
- [Angular forms](https://angular.dev/guide/forms)
- [Angular SSR / hybrid rendering](https://angular.dev/guide/ssr)

Consult Angular docs first for:

- router conventions and route config features
- reactive vs template-driven forms
- SSR / CSR / prerender route rendering choices
- server-compatible component patterns and DI-based platform access

## Practical rule for agents

If the framework is known, do **not** jump straight from generic frontend instincts to code.

Instead:

- start from the official docs for that exact framework
- read the framework-specific architecture pages that affect the feature
- only then choose implementation details, component libraries, rendering patterns, or deployment-sensitive behavior

This prevents a lot of subtle mistakes — the sneaky kind that look fine in a code review and then explode at runtime.