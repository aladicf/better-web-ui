---
name: extract
description: Extract reusable components, product patterns, and design tokens into a clearer design system with shared APIs, documented defaults, and better reuse. Use when the user wants to refactor repeated UI, consolidate buttons/cards/forms/sections, build a component library, or turn one-off values into reusable tokens.
metadata:
  argument-hint: "[target]"
---

Identify reusable patterns, components, and design tokens, then extract and consolidate them into the design system for systematic reuse.

The goal is not to capture every value in the codebase. The goal is to create constrained systems that reduce future design decisions and keep the interface coherent.

Consult the [design-system alignment](../frontend-design/reference/design-system-alignment.md) reference for tokens vs components vs patterns, drift, and how to avoid turning inconsistency into token sprawl.

## MANDATORY PREPARATION

Users start this workflow with `/extract`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first.

## Discover

Analyze the target area to identify extraction opportunities:

1. **Find the design system**: Locate your design system, component library, or shared UI directory (grep for "design system", "ui", "components", etc.). Understand its structure:
   - Component organization and naming conventions
   - Design token structure (if any)
   - Documentation patterns
   - Import/export conventions
   
   **CRITICAL**: If no design system exists, ask before creating one. Understand the preferred location and structure first.

2. **Identify patterns**: Look for:
   - **Repeated components**: Similar UI patterns used multiple times (buttons, cards, inputs, etc.)
   - **Hard-coded values**: Colors, spacing, typography, shadows that should be tokens
   - **Inconsistent variations**: Multiple implementations of the same concept (3 different button styles)
   - **Reusable patterns**: Layout patterns, composition patterns, interaction patterns worth systematizing
  - **Missing systems**: Places where the team is clearly re-solving spacing, type, color, radius, or elevation repeatedly

3. **Assess value**: Not everything should be extracted. Consider:
   - Is this used 3+ times, or likely to be reused?
   - Would systematizing this improve consistency?
   - Is this a general pattern or context-specific?
   - What's the maintenance cost vs benefit?

## Plan Extraction

Create a systematic extraction plan:

- **Components to extract**: Which UI elements become reusable components?
- **Tokens to create**: Which hard-coded values become design tokens?
- **System boundaries**: Which token sets should stay intentionally small so they guide decisions instead of documenting chaos?
- **Variants to support**: What variations does each component need?
- **Naming conventions**: Component names, token names, prop names that match existing patterns
- **Migration path**: How to refactor existing uses to consume the new shared versions

**IMPORTANT**: Design systems grow incrementally. Extract what's clearly reusable now, not everything that might someday be reusable.

## Extraction when a component library already exists

If the project already uses a library such as `shadcn/ui`, prefer extracting:

- local wrappers
- reusable compositions
- documented patterns

Do **not** replace upstream primitives with redundant local copies unless the project truly needs a stable customized abstraction.

A good extraction often sits one layer above the library primitive: not another generic `Button`, but a product-specific action bar, filter panel, settings section, or empty-state pattern that uses the existing primitives consistently.

## Extract & Enrich

Build improved, reusable versions:

- **Components**: Create well-designed components with:
  - Clear props API with sensible defaults
  - Proper variants for different use cases
  - Accessibility built in (ARIA, keyboard navigation, focus management)
  - Documentation and usage examples
  
- **Design tokens**: Create tokens with:
  - Clear naming (primitive vs semantic)
  - Proper hierarchy and organization
  - Documentation of when to use each token
  - Constrained scales for spacing, typography, color, radius, and elevation where applicable

Prefer systems like:
- **Spacing**: A small scale with meaningful jumps, not every number between 4 and 64
- **Typography**: A hand-crafted set of sizes and weights for UI roles
- **Color**: Defined ramps instead of ad-hoc lighten/darken variations
- **Elevation**: A few shadows with semantic meaning, not endless custom box-shadows
  
- **Patterns**: Document patterns with:
  - When to use this pattern
  - Code examples
  - Variations and combinations

**NEVER**:
- Extract one-off, context-specific implementations without generalization
- Create components so generic they're useless
- Extract without considering existing design system conventions
- Skip proper TypeScript types or prop documentation
- Create tokens for every single value (tokens should have semantic meaning)
- Turn inconsistency into a token catalog instead of simplifying it into a system

## Migrate

Replace existing uses with the new shared versions:

- **Find all instances**: Search for the patterns you've extracted
- **Replace systematically**: Update each use to consume the shared version
- **Test thoroughly**: Ensure visual and functional parity
- **Delete dead code**: Remove the old implementations

## Document

Update design system documentation:

- Add new components to the component library
- Document token usage and values
- Add examples and guidelines
- Update any Storybook or component catalog

Remember: A good design system is a living system. Extract patterns as they emerge, enrich them thoughtfully, and maintain them consistently.