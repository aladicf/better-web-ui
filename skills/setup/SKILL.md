---
name: setup
description: Gather design context for your project and save it for future design work in a one-time setup. Use when starting a project, defining UI direction, or establishing persistent design guidelines for other better-web-ui skills.
---

Gather design context for this project, then persist it for all future sessions.

## Step 1: Explore the Codebase

Before asking questions, thoroughly scan the project to discover what you can:

- **README and docs**: Project purpose, target audience, any stated goals
- **Package.json / config files**: Tech stack, dependencies, existing design libraries
- **shadcn project config**: `components.json`, shadcn schema usage, CLI-generated configuration, preset clues, Radix vs Base UI choice
- **Styling system**: Tailwind, CSS modules, CSS-in-JS, vanilla CSS, utility systems, tokens
- **Component libraries**: shadcn/ui, Nuxt UI, Angular Material, custom UI packages, in-house systems
- **Form architecture**: TanStack Form, React Hook Form, Formik, vee-validate, Angular forms, custom validation/state wiring
- **Table / data-grid architecture**: TanStack Table, AG Grid, framework-native tables, custom table state wiring
- **Existing components**: Current design patterns, spacing, typography in use
- **Brand assets**: Logos, favicons, color values already defined
- **Design tokens / CSS variables**: Existing color palettes, font stacks, spacing scales
- **Any style guides or brand documentation**

Note what you've learned and what remains unclear.

## Step 2: Ask UX-Focused Questions

ask the user directly to clarify what you cannot infer. Focus only on what you couldn't infer from the codebase:

### Users & Purpose
- Who uses this? What's their context when using it?
- What job are they trying to get done?
- What emotions should the interface evoke? (confidence, delight, calm, urgency, etc.)

### Brand & Personality
- How would you describe the brand personality in 3 words?
- Any reference sites or apps that capture the right feel? What specifically about them?
- What should this explicitly NOT look like? Any anti-references?
- Should the interface feel more serious, playful, elegant, utilitarian, editorial, or something else?
- Should the language be formal, neutral, or conversational?

### Aesthetic Preferences
- Any strong preferences for visual direction? (minimal, bold, elegant, playful, technical, organic, etc.)
- Light mode, dark mode, or both?
- Any colors that must be used or avoided?
- Should corners feel mostly square, gently rounded, or soft and playful?
- Should the palette lean warm, cool, or neutral?

### Accessibility & Inclusion
- Specific accessibility requirements? (WCAG level, known user needs)
- Considerations for reduced motion, color blindness, or other accommodations?

Skip questions where the answer is already clear from the codebase exploration.

### Implementation Defaults
- What framework / runtime should future UI work assume by default?
- If this is a brand-new project, does the user want a specific styling system?
- If this is a brand-new project, does the user want a specific component library or block system?
- Does the project already use a form library or validation stack that later UI work should preserve?
- Does the project already use a table or data-grid library that later UI work should preserve?
- If the project already uses `shadcn/ui`, is it mostly using the upstream primitives directly or local wrappers / compositions built on top of them?
- If relevant, does the project already use `shadcn/ui Blocks` or `re-ui` as accelerators for common sections or flows?
- If relevant, is the project primarily following a Radix-flavored or Base UI-flavored ecosystem for its headless primitives and composed components?
- If the project uses shadcn, does it already have a `components.json` file or signs of `shadcn create` / `shadcn apply` customizations that should be treated as the current baseline?

If the project already has a styling system, component library, form stack, or table/grid stack, treat that as the default unless the user explicitly wants to change it.

If the project is new and the user does not specify implementation preferences, use the framework-default matrix from `frontend-design` and record the result. When the form architecture is still open in a new React, Vue, Angular, Solid, or Svelte project, default to TanStack Form and record that too. When the table or data-grid architecture is still open in those ecosystems, default to TanStack Table and record that too.

## Step 3: Write Design Context

Synthesize your findings and the user's answers into a `## Design Context` section:

```markdown
## Design Context

### Users
[Who they are, their context, the job to be done]

### Brand Personality
[Voice, tone, 3-word personality, emotional goals]

### Aesthetic Direction
[Visual tone, references, anti-references, theme]

### Implementation Defaults
[Detected or chosen framework, styling system, component library defaults, form library / validation defaults, table/data-grid defaults, any block accelerators in use, any relevant Radix-vs-Base-UI ecosystem preference, any important `components.json` / `shadcn create` / `shadcn apply` customizations, and whether they came from the existing codebase, explicit user preference, or framework fallback defaults]

### Design Principles
[3-5 principles derived from the conversation that should guide all design decisions]
```

Derive the principles from concrete levers, not vague aspirations. Prefer things like:
- "Establish hierarchy with spacing and weight before adding color"
- "Use warm neutrals and restrained accent color"
- "Favor editorial typography and mostly square corners"
- "Keep one obvious primary action per screen"

Write this section to `.better-web-ui.md` in the project root. If that file already exists, update the Design Context section in place. If a legacy `.better-ui.md` or `.impeccable.md` file exists, migrate or mirror the Design Context section into `.better-web-ui.md` so better-web-ui has a single canonical project context file going forward.

Legacy files are fallback inputs for migration only. New work should keep `.better-web-ui.md` as the canonical destination.

Make sure the persisted context captures this precedence clearly:

1. detected existing project stack
2. explicit user preference for a new project
3. framework-based fallback defaults

When the distinction matters for React-oriented component ecosystems, also record whether the project is effectively Radix-flavored, Base UI-flavored, or mixed so later design work does not guess.

If shadcn-specific project configuration exists, record it as part of the baseline instead of letting later sessions assume the generic fallback defaults.

Then ask the user whether they'd also like the Design Context appended to `AGENTS.md`. If yes, append or update the section there as well.

Confirm completion and summarize the key design principles that will now guide all future work.