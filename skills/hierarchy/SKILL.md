---
name: hierarchy
description: Clarify priority and emphasis by fixing unclear primary actions, competing visual weight, loud section titles, and weak label/value treatment. Use when the user mentions hierarchy, prioritization, too much competition, grayscale confusion, loud headings, or unclear primary actions.
metadata:
   argument-hint: "[target]"
---

Assess and improve visual hierarchy so the interface communicates priority immediately instead of making users decode it manually.

Use this when the problem is mainly **priority and emphasis**. If the bigger issue is arbitrary spacing, weak grouping, or monotonous layout rhythm, use `arrange`.

## MANDATORY PREPARATION

Users start this workflow with `/hierarchy`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first.

---

## Assess Hierarchy Problems

Analyze where the interface is failing to prioritize clearly:

1. **Run the grayscale test**:
   - If color disappeared, would the screen still make sense?
   - Can you identify primary, secondary, and tertiary elements within about 2 seconds?

2. **Scan for competition**:
   - Are multiple cards, titles, or buttons equally loud?
   - Are section titles stealing focus from the content they label?
   - Are supporting details too strong relative to the main task?
   - Are heavy icons, bold labels, or dark metadata outweighing the content they are supposed to support?

3. **Check consistency and predictability**:
   - Do action colors and button treatments keep the same meaning across the flow?
   - Are similar success, error, or helper messages written with parallel structure?
   - Are icon styles, typography roles, and familiar layout regions consistent enough that users can transfer what they learned?

4. **Check action priority**:
   - Is there one obvious primary action?
   - Are secondary actions clear but quieter?
   - Are tertiary actions discoverable without competing?

5. **Check labels and values**:
   - Does everything use a rigid `label: value` pattern even when the value is self-explanatory?
   - Should labels be combined with values or de-emphasized?

6. **Check visual harmony**:
   - Is there a clear focal point?
   - Is the page relying on one balance mode everywhere (for example, the same left-right split repeated section after section)?
   - Are text and imagery balanced, or is one accidentally overpowering the other?

7. **Check spacing, proximity, and alignment**:
   - Is space within groups smaller than the space between groups?
   - Are labels, inputs, cards, and navigation items grouped tightly enough to read as related?
   - Are shared alignment lines and container widths helping the screen scan cleanly?
   - Does the page support the right scan pattern for the content density (for example, denser F-pattern scanning vs lighter directed Z-pattern scanning)?

If any of these are unclear from the codebase, ask the user directly to clarify what you cannot infer.

**CRITICAL**: Hierarchy problems are not cosmetic. If users can't tell what matters, the design is failing at communication.

## Plan Hierarchy Fixes

Consult the [hierarchy checklist](../frontend-design/reference/hierarchy-checklist.md) for grayscale tests, label/value handling, action hierarchy, and de-emphasis techniques.
Consult the [text hierarchy and readability](../frontend-design/reference/text-hierarchy-and-readability.md) when title restraint, label/value structure, line length, semantic-vs-visual hierarchy, or weight-versus-contrast balancing are part of the problem.
Consult the [design-system alignment](../frontend-design/reference/design-system-alignment.md) when hierarchy problems are partly caused by inconsistent action styles, icon logic, or drifted component treatments across the product.
Consult the [spatial design](../frontend-design/reference/spatial-design.md) and [spacing system](../frontend-design/reference/spacing-system.md) references when hierarchy problems are really spacing, grouping, or alignment problems in disguise.

Use the shared references as the canonical source for hierarchy and readability doctrine, then focus this skill on fixing priority and emphasis in the actual interface.

Create a plan around these levers:
- **What should be primary?**
- **What should become quieter?**
- **Which labels can be removed, combined, or de-emphasized?**
- **Which actions need differentiated treatments?**
- **Which inconsistencies are teaching the wrong pattern?**
- **What balance mode would make the screen feel clearer and more complete?**
- **What spacing and alignment changes would make grouping more obvious?**
- **What scan path should the layout support?**

## Improve Hierarchy Systematically

### Clarify the Pyramid
- Establish one clear primary focus
- Give secondary and tertiary content visibly quieter treatments
- Use space, weight, contrast, and placement before inventing decorative fixes

### Emphasize by De-emphasizing
- Reduce contrast on competing elements
- Soften secondary icon or text colors
- Quiet sidebars, metadata, and labels before making the hero louder

### Fix Action Hierarchy
- Use one clear primary button style
- Use secondary styles for supportive actions
- Use link-like or tertiary styles for low-frequency actions
- Reserve visually dominant destructive styling for confirmation moments, not every delete button

### Restructure Labels and Values
- Remove labels when the value format is already obvious
- Combine labels and values when that improves scanning
- Treat labels as supporting content by default
- In technical contexts, let labels take slightly more emphasis when users are scanning for specs or field names

### Quiet Section Titles
- Treat section titles like labels unless they truly deserve headline treatment
- Make titles smaller or lower contrast when the content should lead
- Separate semantic importance from visual size; a structurally important heading can still be visually restrained

### Preserve Predictability
- Keep action colors and button styles semantically stable across similar contexts
- Keep repeated message patterns and labels parallel so users learn the system faster
- Keep icon families, layout regions, and familiar navigation structures consistent unless there is a strong workflow reason to change them

### Improve Harmony, Not Just Loudness
- Use symmetry when the section should feel stable and orderly, but avoid repeating the same symmetrical structure everywhere
- Use asymmetry when the screen needs movement or stronger focal direction, but keep the weight balanced
- Use centered or radial emphasis when one item truly deserves unmistakable focus
- Rebalance text and images so neither side accidentally crushes the other

### Use Space to Clarify Priority
- Keep more space around groups than within them
- Increase space around the primary element when it needs stronger focus
- Keep text, controls, and media off container edges unless edge tension is intentional
- Separate different sections enough that users can feel the topic change

### Use Proximity and Alignment Deliberately
- Pull related fields, labels, and support text closer together
- Increase separation between unrelated groups
- Top-align larger neighboring blocks when comparison matters
- Keep major sections aligned to stable container edges so scanning stays effortless
- Choose centered alignment only when the content is compact enough that it still reads clearly

### Support the Intended Scan Pattern
- Use denser left-to-right, top-to-bottom structure for information-heavy screens
- Use cleaner directional composition for lighter, CTA-led screens
- Place anchors like logos, main titles, and primary actions where the eye can find them quickly

### Balance Weight and Contrast
- If icons feel louder than nearby text, soften their contrast before changing everything else
- If separators are too faint, consider a slightly heavier treatment before making them darker and harsher
- Use contrast reduction to quiet heavy elements and weight to support subtle low-contrast elements when needed

**NEVER**:
- Make every section title feel like a headline
- Style every action as primary
- Use color as the only hierarchy tool
- Leave labels at the same visual weight as the data they describe when the data matters more
- Randomly change action meaning, icon logic, or layout patterns that users already learned
- Try to fix weak hierarchy only by adding more decoration

## Verify Hierarchy Improvements

- **Grayscale clarity**: Does it still work without color?
- **2-second scan**: Can users identify the primary action and key content quickly?
- **Action clarity**: Is one action clearly first?
- **Label/value efficiency**: Is data easier to scan after restructuring?
- **Reduced competition**: Do quieter elements actually recede?

Remember: Great hierarchy makes the right thing feel obvious. If users have to study the screen, the hierarchy still needs work.