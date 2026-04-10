---
name: normalize
description: Audit and realign UI to match design system standards, spacing, tokens, and patterns. Use when the user mentions consistency, design drift, mismatched styles, tokens, or wants to bring a feature back in line with the system.
metadata:
   argument-hint: "[feature (page, route, component...)]"
---

Analyze and redesign the feature to perfectly match our design system standards, aesthetics, and established patterns.

Normalization is not just visual cleanup. It is restoring the feature to the system so spacing, type, color, interaction, and hierarchy all speak the same language again.

Consult the [design-system alignment](../frontend-design/reference/design-system-alignment.md) reference for tokens vs components vs patterns, drift, and when to normalize locally versus escalate to system work.
Consult the [interaction design](../frontend-design/reference/interaction-design.md) reference when normalization includes restoring familiar patterns, improving target sizing, or removing bespoke interaction behavior from standard controls.

## MANDATORY PREPARATION

Users start this workflow with `/normalize`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first.

---

## Plan

Before making changes, deeply understand the context:

1. **Discover the design system**: Search for design system documentation, UI guidelines, component libraries, or style guides (grep for "design system", "ui guide", "style guide", etc.). Study it thoroughly until you understand:
   - Core design principles and aesthetic direction
   - Target audience and personas
   - Component patterns and conventions
   - Design tokens (colors, typography, spacing)
   
   **CRITICAL**: If something isn't clear, ask. Don't guess at design system principles.

2. **Analyze the current feature**: Assess what works and what doesn't:
   - Where does it deviate from design system patterns?
   - Which inconsistencies are cosmetic vs. functional?
   - What's the root cause—missing tokens, one-off implementations, or conceptual misalignment?

3. **Create a normalization plan**: Define specific changes that will align the feature with the design system:
   - Which components can be replaced with design system equivalents?
   - Which styles need to use design tokens instead of hard-coded values?
   - How can UX patterns match established user flows?
   - Where have standard interactions drifted away from familiar product conventions without a compelling reason?
   - Which areas feel off because hierarchy is weak, actions are flattened, or spacing is arbitrary rather than systematic?
   
   **IMPORTANT**: Great design is effective design. Prioritize UX consistency and usability over visual polish alone. Think through the best possible experience for your use case and personas first.

## Execute

Systematically address all inconsistencies across these dimensions:

- **Typography**: Use design system fonts, sizes, weights, and line heights. Replace hard-coded values with typographic tokens or classes.
- **Color & Theme**: Apply design system color tokens. Remove one-off color choices that break the palette.
- **Spacing & Layout**: Use spacing tokens (margins, padding, gaps). Align with grid systems and layout patterns used elsewhere.
- **Hierarchy**: Restore primary, secondary, and tertiary emphasis. A normalized feature should make it obvious what matters first.
- **Components**: Replace custom implementations with design system components. Ensure props and variants match established patterns.
- **Motion & Interaction**: Match animation timing, easing, and interaction patterns to other features.
- **Conventional UX patterns**: Realign forms, tables, filters, dialogs, menus, tabs, and settings to recognizable platform/category conventions unless the custom behavior clearly improves the workflow.
- **Responsive Behavior**: Ensure breakpoints and responsive patterns align with design system standards.
- **Accessibility**: Verify contrast ratios, focus states, ARIA labels match design system requirements.
- **Target sizing & placement**: Restore generous hit areas, whole-row labels where appropriate, and action placement that reduces precision work for common tasks.
- **Progressive Disclosure**: Match information hierarchy and complexity management to established patterns.

**NEVER**:
- Create new one-off components when design system equivalents exist
- Hard-code values that should use design tokens
- Introduce new patterns that diverge from the design system
- Compromise accessibility for visual consistency
- Normalize by making everything visually similar while leaving hierarchy unclear

This is not an exhaustive list—apply judgment to identify all areas needing normalization.

## Clean Up

After normalization, ensure code quality:

- **Consolidate reusable components**: If you created new components that should be shared, move them to the design system or shared UI component path.
- **Remove orphaned code**: Delete unused implementations, styles, or files made obsolete by normalization.
- **Verify quality**: Lint, type-check, and test according to repository guidelines. Ensure normalization didn't introduce regressions.
- **Ensure DRYness**: Look for duplication introduced during refactoring and consolidate.

Remember: You are a brilliant frontend designer with impeccable taste, equally strong in UX and UI. Your attention to detail and eye for end-to-end user experience is world class. Execute with precision and thoroughness.