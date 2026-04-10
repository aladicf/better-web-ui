# Component Library Integration Checklist

Use this checklist when `add-ui` is working in a React/Tailwind project where `shadcn/ui`, `shadcn/ui Blocks`, or `re-ui` may influence implementation.

## Detect first

- Does the project already use `shadcn/ui` components or local wrappers around them?
- Are there existing tokens, variants, or spacing conventions that new work should match?
- Are blocks already present in the codebase, or is the stack still open?
- Does the project include a `components.json` file with the shadcn schema?
- Was the project likely initialized with `shadcn create` or updated with `shadcn apply`, based on its preset, component code, tokens, fonts, icons, or docs?
- Is the project effectively Radix-based, Base UI-based, or mixed?

## Decide the lead layer

- Use **components** when the request is workflow-heavy, data-dense, or highly product-specific.
- Use **patterns** when repeated compositions already exist or should be standardized.
- Use **blocks** when the request is a familiar section type and faster scaffolding is genuinely helpful.

## Avoid block-first by default when

- the project already has strong local patterns
- the artifact is dense, operational, or state-heavy
- the block would need major restructuring to fit the product
- five directions would become five cosmetic remixes of the same scaffold

## If using a block

- change hierarchy, copy, and action strategy
- adapt typography, spacing, and media treatment to the product tone
- remove decorative filler
- avoid shipping the upstream shape unchanged
- keep the project's current shadcn preset, component library flavor, and token baseline intact

## Current availability rule

- Do not maintain a frozen local inventory of every upstream component or block.
- Check official upstream documentation for current `shadcn/ui`, `shadcn/ui Blocks`, and `re-ui` availability.
- If the docs still leave gaps, do a focused web search and verify what you find against the upstream docs before relying on it.

## Official docs quick links

- [`shadcn/ui` components](https://ui.shadcn.com/docs/components)
- [`shadcn/ui` TanStack Form docs](https://ui.shadcn.com/docs/forms/tanstack-form)
- [`shadcn/ui` Blocks](https://ui.shadcn.com/blocks#blocks)
- [ReUI components](https://reui.io/components)
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