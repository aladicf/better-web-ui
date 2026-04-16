---
name: audit
description: Run technical quality checks across accessibility, performance, theming, responsive design, and anti-patterns. Generates a scored report with P0-P3 severity ratings and actionable plan. Use when the user wants measurable accessibility, performance, responsive, theming, or anti-pattern findings—not when they mainly want an overall UX critique or final visual/detail polish.
metadata:
  argument-hint: "[area (feature, page, component...)]"
---

## MANDATORY PREPARATION

Users start this workflow with `/audit`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first.

---

Run systematic **technical** quality checks and generate a comprehensive report. Don't fix issues — document them for other commands to address.

This is a code-level audit, not a design critique. Check what's measurable and verifiable in the implementation.

Consult the [hierarchy checklist](../frontend-design/reference/hierarchy-checklist.md) when reviewing grayscale hierarchy, action priority, section-title restraint, and label/value treatment.
Consult the [ai slop detection](../frontend-design/reference/ai-slop-detection.md) when checking for generic trend-driven anti-patterns.
Consult the [action hierarchy](../frontend-design/reference/action-hierarchy.md) when reviewing primary, secondary, tertiary, and destructive actions.
Consult the [semantic color](../frontend-design/reference/semantic-color.md) when checking whether color is communicating state or just decoration.
Consult the [surface separation](../frontend-design/reference/surface-separation.md) when checking whether borders, shadows, cards, overlap, and background shifts are being used intentionally.
Consult the [image treatment](../frontend-design/reference/image-treatment.md) when screenshots, icons, or media handling affect usability or polish.

Still, when the implementation clearly violates the shared design system or obvious Refactoring UI principles — weak hierarchy, arbitrary spacing, gray text on color, every button styled as primary — call it out as an implementation issue, not a matter of taste.

## Diagnostic Scan

Run comprehensive checks across 5 dimensions. Score each dimension 0-4 using the criteria below.

### 1. Accessibility (A11y)

**Check for**:
- **Contrast issues**: Text contrast ratios < 4.5:1 (or 7:1 for AAA)
- **Missing ARIA**: Interactive elements without proper roles, labels, or states
- **Keyboard navigation**: Missing focus indicators, illogical tab order, keyboard traps
- **Semantic HTML**: Improper heading hierarchy, missing landmarks, divs instead of buttons
- **Alt text**: Missing or poor image descriptions
- **Form issues**: Inputs without labels, poor error messaging, missing required indicators

**Score 0-4**: 0=Inaccessible (fails WCAG A), 1=Major gaps (few ARIA labels, no keyboard nav), 2=Partial (some a11y effort, significant gaps), 3=Good (WCAG AA mostly met, minor gaps), 4=Excellent (WCAG AA fully met, approaches AAA)

### 2. Performance

**Check for**:
- **Layout thrashing**: Reading/writing layout properties in loops
- **Expensive animations**: Animating layout properties (width, height, top, left) instead of transform/opacity
- **Interaction latency**: Common actions provide no immediate feedback, rely on blank waits, or miss obvious optimistic/prefetch/progressive-loading opportunities
- **Missing optimization**: Images without lazy loading, unoptimized assets, missing will-change
- **Bundle size**: Unnecessary imports, unused dependencies
- **Render performance**: Unnecessary re-renders, missing memoization

**Score 0-4**: 0=Severe issues (layout thrash, unoptimized everything), 1=Major problems (no lazy loading, expensive animations), 2=Partial (some optimization, gaps remain), 3=Good (mostly optimized, minor improvements possible), 4=Excellent (fast, lean, well-optimized)

### 3. Theming

**Check for**:
- **Hard-coded colors**: Colors not using design tokens
- **Broken dark mode**: Missing dark mode variants, poor contrast in dark theme
- **Inconsistent tokens**: Using wrong tokens, mixing token types
- **Theme switching issues**: Values that don't update on theme change
- **Missing color ramps**: Ad-hoc one-off shades instead of a defined palette
- **Too many shades without system**: Slightly different blues/greys everywhere with no clear ramp

**Score 0-4**: 0=No theming (hard-coded everything), 1=Minimal tokens (mostly hard-coded), 2=Partial (tokens exist but inconsistently used), 3=Good (tokens used, minor hard-coded values), 4=Excellent (full token system, dark mode works perfectly)

### 4. Responsive Design

**Check for**:
- **Fixed widths**: Hard-coded widths that break on narrow viewports
- **Touch targets**: Interactive elements < 44x44px
- **Horizontal scroll**: Content overflow on narrow viewports
- **Text scaling**: Layouts that break when text size increases
- **Missing breakpoints**: No narrow/medium viewport variants

**Score 0-4**: 0=Wide-layout-only (breaks on narrow viewports), 1=Major issues (some breakpoints, many failures), 2=Partial (works across viewports, rough edges), 3=Good (responsive, minor target or overflow issues), 4=Excellent (fluid, all viewports, proper target sizing)

### 5. Anti-Patterns (CRITICAL)

Check against ALL the **DON'T** guidelines in the frontend-design skill and the [ai slop detection](../frontend-design/reference/ai-slop-detection.md) reference. Look for AI slop tells (AI color palette, gradient text, glassmorphism, hero metrics, card grids, generic fonts) and general design anti-patterns (gray on color, nested cards, bounce easing, redundant copy).

Also run these implementation-level hierarchy checks:
- **Hierarchy check**: Can a user identify primary, secondary, and tertiary elements within about 2 seconds?
- **System check**: Do spacing, type, color, radius, and elevation appear to come from systems rather than arbitrary values?
- **Action check**: Is there one obvious primary action, with quieter secondary and tertiary actions?
- **Border check**: Are borders doing work that spacing, contrast, or background shifts should handle instead?
- **Label:value anti-pattern test**: Is data forced into rigid label/value formatting even when values or context already explain themselves?
- **Unnecessary colored-link emphasis test**: Are links colored so loudly that they compete with higher-priority actions or content?
- **Grey-on-color fail test**: Is secondary text on colored surfaces washed out because it uses generic grey instead of a related shade?
- **Ambiguous grouping test**: Are groups separated less clearly than the items inside them?
- **Too-many-font-sizes test**: Has typography drifted into a pile of near-identical sizes without a clear scale?
- **Section title semantic/visual mismatch test**: Are headings visually oversized just because their semantic level sounds important?
- **Right-aligned-numbers test**: Are numeric columns left-aligned where comparison would benefit from right alignment?
- **Section title too loud test**: Are section headings stealing attention from the content they label?
- **Line-length / line-height test**: Are paragraphs too wide for their line-height, or too tightly spaced for comfortable reading?
- **Action hierarchy flattening test**: Are multiple actions styled with the same urgency when only one should lead?
- **Scaled-down screenshot legibility test**: Are screenshots too small to communicate useful detail or structure?
- **Scaled-up icon chunkiness test**: Are tiny icons enlarged far past their intended size?
- **Surface separation test**: Are borders, shadows, cards, and background shifts stacked redundantly instead of chosen intentionally?
- **Overlap clash test**: Are overlapping images/cards colliding without clean separation or readable layering?
- **Dark-pattern check**: Are there misleading labels, preselected exploitative options, obstructed cancellation/consent flows, fake urgency, or hierarchy that pressures the wrong choice?
- **Guardrail check**: Do bulk/destructive/admin/powerful actions lack confirmations, undo, permission boundaries, or other proportional safeguards?

**Score 0-4**: 0=AI slop gallery (5+ tells), 1=Heavy AI aesthetic (3-4 tells), 2=Some tells (1-2 noticeable), 3=Mostly clean (subtle issues only), 4=No AI tells (distinctive, intentional design)

## Generate Report

### Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | ? | [most critical a11y issue or "--"] |
| 2 | Performance | ? | |
| 3 | Responsive Design | ? | |
| 4 | Theming | ? | |
| 5 | Anti-Patterns | ? | |
| **Total** | | **??/20** | **[Rating band]** |

**Rating bands**: 18-20 Excellent (minor polish), 14-17 Good (address weak dimensions), 10-13 Acceptable (significant work needed), 6-9 Poor (major overhaul), 0-5 Critical (fundamental issues)

### Anti-Patterns Verdict
**Start here.** Pass/fail: Does this look AI-generated? List specific tells. Be brutally honest.

Include a one-line hierarchy verdict as part of this section: either the screen has clear hierarchy, or the main ambiguity you observed.

### Executive Summary
- Audit Health Score: **??/20** ([rating band])
- Total issues found (count by severity: P0/P1/P2/P3)
- Top 3-5 critical issues
- Recommended next steps

### Detailed Findings by Severity

Tag every issue with **P0-P3 severity**:
- **P0 Blocking**: Prevents task completion — fix immediately
- **P1 Major**: Significant difficulty or WCAG AA violation — fix before release
- **P2 Minor**: Annoyance, workaround exists — fix in next pass
- **P3 Polish**: Nice-to-fix, no real user impact — fix if time permits

For each issue, document:
- **[P?] Issue name**
- **Location**: Component, file, line
- **Category**: Accessibility / Performance / Theming / Responsive / Anti-Pattern
- **Impact**: How it affects users
- **WCAG/Standard**: Which standard it violates (if applicable)
- **Recommendation**: How to fix it
- **Suggested command**: Which command to use (prefer: /animate, /arrange, /critique, /extract, /polish, /optimize, /audit, /typeset, /bolder, /clarify, /delight, /adapt, /colorize, /quieter, /harden, /distill, /onboard, /normalize, /showcase)

### Patterns & Systemic Issues

Identify recurring problems that indicate systemic gaps rather than one-off mistakes:
- "Hard-coded colors appear in 15+ components, should use design tokens"
- "Interactive targets consistently too small (<44px) throughout narrow-layout flows"
- "Spacing values appear arbitrary; groups and sections don't use a recognizable rhythm"
- "Multiple actions are styled as primary, flattening decision-making"
- "Section titles are consistently louder than the content they introduce"
- "Paragraph widths and line-heights are mismatched across text-heavy screens"

### Positive Findings

Note what's working well — good practices to maintain and replicate.

## Recommended Actions

List recommended commands in priority order (P0 first, then P1, then P2):

1. **[P?] `/command-name`** — Brief description (specific context from audit findings)
2. **[P?] `/command-name`** — Brief description (specific context)

**Rules**: Only recommend commands from: /animate, /arrange, /critique, /extract, /polish, /optimize, /audit, /typeset, /bolder, /clarify, /delight, /adapt, /colorize, /quieter, /harden, /distill, /onboard, /normalize, /showcase. Map findings to the most appropriate command. End with `/polish` as the final step if any fixes were recommended.

After presenting the summary, tell the user:

> You can ask me to run these one at a time, all at once, or in any order you prefer.
>
> Re-run `/audit` after fixes to see your score improve.

**IMPORTANT**: Be thorough but actionable. Too many P3 issues creates noise. Focus on what actually matters.

**NEVER**:
- Report issues without explaining impact (why does this matter?)
- Provide generic recommendations (be specific and actionable)
- Skip positive findings (celebrate what works)
- Forget to prioritize (everything can't be P0)
- Report false positives without verification
- Treat a clear hierarchy failure as subjective fluff — if users can't tell what matters, that is an implementation problem

Remember: You're a technical quality auditor. Document systematically, prioritize ruthlessly, cite specific code locations, and provide clear paths to improvement.