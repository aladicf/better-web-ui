---
name: empty-state
description: Design focused empty states for zero-data, no-results, permission, and error situations with clear value framing, strong CTAs, and less dead chrome. Use when the user mentions blank pages, zero-data screens, no results, permission states, or dead controls—not broader onboarding strategy.
metadata:
   argument-hint: "[target]"
---

Design or improve empty states so blank areas become useful product moments that teach, orient, and move users toward the next step.

This skill is specifically for zero-data and no-content surfaces. Use `onboard` for broader activation strategy, aha moments, first-run education, tours, and adoption planning.

## MANDATORY PREPARATION

Users start this workflow with `/empty-state`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: the value users should reach from this surface.

---

## Assess the Empty State

Understand what kind of absence you are dealing with:

1. **State type**:
   - First use / never created content
   - No results from search or filters
   - Previously cleared content
   - Permission/access restriction
   - Error while loading content

2. **User question**:
   - What is this area for?
   - Why should I care?
   - What should I do next?

3. **Dead chrome audit**:
   - Are tabs, filters, sidebars, sort controls, or empty toolbars visible even though they do nothing yet?

If any of these are unclear from the codebase, ask the user directly to clarify what you cannot infer.

**CRITICAL**: An empty state is often the user's first impression of a feature. Treat it like a real screen, not a fallback.

## Plan the Empty State

Consult the [empty-state patterns](../frontend-design/reference/empty-state-patterns.md) for the main empty-state types, CTA rules, and chrome-reduction guidance.

Design the state around this structure:
- **What this area is for**
- **Why it’s useful**
- **Primary CTA**
- **Optional template/example**
- **What inactive chrome should disappear for now**

## Build Better Empty States

### First-Use States
- Explain what will appear here
- Frame the value clearly
- Offer the clearest starting action
- Consider a starter template or sample data shortcut

### No-Results States
- Explain that the current query/filter produced nothing
- Offer a recovery action like clearing filters or broadening search
- Preserve enough context so users understand what happened

### Cleared-Content States
- Use a lighter tone than first use
- Offer a simple path back to creation
- Add undo or recovery when appropriate

### Permission States
- Explain the access limitation plainly
- Say who can grant access or what role is needed
- Offer a request-access path when possible

### Error States
- State what failed in simple language
- Provide retry
- Add support/help path when needed

### Reduce Dead Chrome
- Hide tabs, filters, sidebars, or sort controls that provide no value before content exists
- Keep the screen focused on the message and the next step

### Use Visual Interest Carefully
- Illustration or icon is optional, but helpful when it supports comprehension or attention
- The CTA should still be stronger than the decoration

**NEVER**:
- Leave users staring at “No items” with no next step
- Keep inactive controls visible just because the full UI normally has them
- Let the illustration overpower the message and CTA
- Use the same empty-state tone for first use, permissions, and errors

## Verify Empty-State Quality

- **Clarity**: Does the state explain what belongs here?
- **Value framing**: Does it explain why the user should care?
- **Next step**: Is the CTA obvious?
- **Chrome cleanup**: Is inactive UI removed?
- **Appropriate tone**: Does the state match first use / no results / permission / error?

Remember: The best empty states feel like helpful product design, not like the app ran out of things to say.