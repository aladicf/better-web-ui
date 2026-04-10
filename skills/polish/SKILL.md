---
name: polish
description: Perform a final quality pass fixing alignment, spacing, consistency, and micro-detail issues before shipping. Use when the user wants finishing touches or detail cleanup—not when the design needs a major tone shift.
metadata:
   argument-hint: "[target]"
---

## MANDATORY PREPARATION

Users start this workflow with `/polish`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: quality bar (MVP vs flagship).

---

Perform a meticulous final pass to catch all the small details that separate good work from great work. The difference between shipped and polished.

Polish should make existing hierarchy and systems more precise. It should not be used to decorate a weak foundation.

Consult the `empty-state` skill when zero-data surfaces themselves need design work. Use `onboard` when the broader activation flow, aha moment, or first-run strategy is the real issue.

## Pre-Polish Assessment

Understand the current state and goals:

1. **Review completeness**:
   - Is it functionally complete?
   - Are there known issues to preserve (mark with TODOs)?
   - What's the quality bar? (MVP vs flagship feature?)
   - When does it ship? (How much time for polish?)

2. **Identify polish areas**:
   - Visual inconsistencies
   - Spacing and alignment issues
   - Interaction state gaps
   - Copy inconsistencies
   - Edge cases and error states
   - Loading and transition smoothness

**CRITICAL**: Polish is the last step, not the first. Don't polish work that's not functionally complete.

## Polish Systematically

Work through these dimensions methodically:

Consult the [hierarchy checklist](../frontend-design/reference/hierarchy-checklist.md) for grayscale tests, action hierarchy, and label/value treatment.
Consult the [text hierarchy and readability](../frontend-design/reference/text-hierarchy-and-readability.md) for line length, line-height, alignment, baseline, and title restraint.
Consult the [action hierarchy](../frontend-design/reference/action-hierarchy.md) when checking whether actions lead or recede correctly.
Consult the [semantic color](../frontend-design/reference/semantic-color.md) when checking alerts, status, and tinted semantic surfaces.
Consult the [design-system alignment](../frontend-design/reference/design-system-alignment.md) when deciding whether a polish issue is really local detail or system drift.
Consult the [surface separation](../frontend-design/reference/surface-separation.md) when borders, cards, shadows, overlap, or background shifts feel noisy or inconsistent.
Consult the [image treatment](../frontend-design/reference/image-treatment.md) when screenshots, icons, or media feel awkward, unreadable, or poorly contained.
Consult the [finishing touches](../frontend-design/reference/finishing-touches.md) when default UI elements, accents, or decorative backgrounds need more intentional refinement.

### Visual Alignment & Spacing

- **Pixel-perfect alignment**: Everything lines up to grid
- **Consistent spacing**: All gaps use spacing scale (no random 13px gaps)
- **Optical alignment**: Adjust for visual weight (icons may need offset for optical centering)
- **Responsive consistency**: Spacing and alignment work at all breakpoints
- **Grid adherence**: Elements snap to baseline grid
- **Group clarity**: There is more space around groups than within them
- **Surface separation**: Borders, shadows, cards, and background shifts are used deliberately instead of all at once

**Check**:
- Enable grid overlay and verify alignment
- Check spacing with browser inspector
- Test at multiple viewport sizes
- Look for elements that "feel" off

### Typography Refinement

- **Hierarchy consistency**: Same elements use same sizes/weights throughout
- **Line length**: 45-75 characters for body text
- **Line height**: Appropriate for font size and context
- **Widows & orphans**: No single words on last line
- **Hyphenation**: Appropriate for language and column width
- **Kerning**: Adjust letter spacing where needed (especially headlines)
- **Font loading**: No FOUT/FOIT flashes
- **Baseline alignment**: Mixed-size text aligns cleanly when sharing a row
- **Link restraint**: Secondary links are not colored so loudly that they compete with the main path
- **Number alignment**: Numeric columns are right-aligned when comparison matters
- **Title restraint**: Section headings support the content instead of overpowering it

### Color & Contrast

- **Contrast ratios**: All text meets WCAG standards
- **Consistent token usage**: No hard-coded colors, all use design tokens
- **Theme consistency**: Works in all theme variants
- **Color meaning**: Same colors mean same things throughout
- **Accessible focus**: Focus indicators visible with sufficient contrast
- **Tinted neutrals**: No pure gray or pure black—add subtle color tint (0.01 chroma)
- **Gray on color**: Never put gray text on colored backgrounds—use a shade of that color or transparency
- **Palette discipline**: Surfaces and accents use defined ramps, not improvised one-off shades

### Interaction States

Every interactive element needs all states:

- **Default**: Resting state
- **Hover**: Subtle feedback (color, scale, shadow)
- **Focus**: Keyboard focus indicator (never remove without replacement)
- **Active**: Click/tap feedback
- **Disabled**: Clearly non-interactive
- **Loading**: Async action feedback
- **Error**: Validation or error state
- **Success**: Successful completion

**Missing states create confusion and broken experiences**.

Make sure action hierarchy remains intact across states: the primary action should still read as primary on hover, focus, active, loading, and disabled.

### Micro-interactions & Transitions

- **Smooth transitions**: All state changes animated appropriately (150-300ms)
- **Consistent easing**: Use ease-out-quart/quint/expo for natural deceleration. Never bounce or elastic—they feel dated.
- **No jank**: 60fps animations, only animate transform and opacity
- **Appropriate motion**: Motion serves purpose, not decoration
- **Reduced motion**: Respects `prefers-reduced-motion`

### Content & Copy

- **Consistent terminology**: Same things called same names throughout
- **Consistent capitalization**: Title Case vs Sentence case applied consistently
- **Grammar & spelling**: No typos
- **Appropriate length**: Not too wordy, not too terse
- **Punctuation consistency**: Periods on sentences, not on labels (unless all labels have them)

### Icons & Images

- **Consistent style**: All icons from same family or matching style
- **Appropriate sizing**: Icons sized consistently for context
- **Proper alignment**: Icons align with adjacent text optically
- **Alt text**: All images have descriptive alt text
- **Loading states**: Images don't cause layout shift, proper aspect ratios
- **Retina support**: 2x assets for high-DPI screens
- **Screenshot legibility**: Screenshots are not scaled so small that their structure becomes useless
- **Icon sizing discipline**: Tiny icons are not enlarged into chunky blobs, and detailed icons are not reduced to mush

### Forms & Inputs

- **Label consistency**: All inputs properly labeled
- **Required indicators**: Clear and consistent
- **Error messages**: Helpful and consistent
- **Tab order**: Logical keyboard navigation
- **Auto-focus**: Appropriate (don't overuse)
- **Validation timing**: Consistent (on blur vs on submit)

### Edge Cases & Error States

- **Loading states**: All async actions have loading feedback
- **Empty states**: Helpful empty states, not just blank space
- **Error states**: Clear error messages with recovery paths
- **Success states**: Confirmation of successful actions
- **Long content**: Handles very long names, descriptions, etc.
- **No content**: Handles missing data gracefully
- **Offline**: Appropriate offline handling (if applicable)
- **Empty-state hierarchy**: Empty states have a clear next action and don't leave dead controls hanging around needlessly

### Responsiveness

- **All breakpoints**: Test mobile, tablet, desktop
- **Touch targets**: 44x44px minimum on touch devices
- **Readable text**: No text smaller than 14px on mobile
- **No horizontal scroll**: Content fits viewport
- **Appropriate reflow**: Content adapts logically

### Performance

- **Fast initial load**: Optimize critical path
- **No layout shift**: Elements don't jump after load (CLS)
- **Smooth interactions**: No lag or jank
- **Optimized images**: Appropriate formats and sizes
- **Lazy loading**: Off-screen content loads lazily

### Code Quality

- **Remove console logs**: No debug logging in production
- **Remove commented code**: Clean up dead code
- **Remove unused imports**: Clean up unused dependencies
- **Consistent naming**: Variables and functions follow conventions
- **Type safety**: No TypeScript `any` or ignored errors
- **Accessibility**: Proper ARIA labels and semantic HTML

## Polish Checklist

Go through systematically:

- [ ] Visual alignment perfect at all breakpoints
- [ ] Spacing uses design tokens consistently
- [ ] Typography hierarchy consistent
- [ ] All interactive states implemented
- [ ] All transitions smooth (60fps)
- [ ] Copy is consistent and polished
- [ ] Icons are consistent and properly sized
- [ ] All forms properly labeled and validated
- [ ] Error states are helpful
- [ ] Loading states are clear
- [ ] Empty states are welcoming
- [ ] Touch targets are 44x44px minimum
- [ ] Contrast ratios meet WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] No console errors or warnings
- [ ] No layout shift on load
- [ ] Works in all supported browsers
- [ ] Respects reduced motion preference
- [ ] Code is clean (no TODOs, console.logs, commented code)

**IMPORTANT**: Polish is about details. Zoom in. Squint at it. Use it yourself. The little things add up.

**NEVER**:
- Polish before it's functionally complete
- Spend hours on polish if it ships in 30 minutes (triage)
- Introduce bugs while polishing (test thoroughly)
- Ignore systematic issues (if spacing is off everywhere, fix the system)
- Perfect one thing while leaving others rough (consistent quality level)
- Use borders, shadows, or color flourishes to hide unresolved hierarchy problems
- Use bright link color, border clutter, or decorative overlap where quieter separation would work better

## Final Verification

Before marking as done:

- **Use it yourself**: Actually interact with the feature
- **Test on real devices**: Not just browser DevTools
- **Ask someone else to review**: Fresh eyes catch things
- **Compare to design**: Match intended design
- **Check all states**: Don't just test happy path

Remember: You have impeccable attention to detail and exquisite taste. Polish until it feels effortless, looks intentional, and works flawlessly. Sweat the details - they matter.