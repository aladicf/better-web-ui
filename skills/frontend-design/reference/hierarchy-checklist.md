# Hierarchy Checklist

## Grayscale Test

Temporarily imagine the interface without color. If the layout becomes confusing, color is doing work that spacing, size, weight, and grouping should be doing first.

Ask:
- Can you identify the primary element within 2 seconds?
- Can you identify the secondary element without hunting?
- Do groups still read as groups without borders or fills?

## Consistency Creates Predictability

Hierarchy is not only about what is loudest on one screen. It is also about whether users can transfer what they learned from one screen to the next.

Predictable systems feel easier because users stop re-learning the interface every time they move around.

### Action and color consistency

Keep action meaning stable:

- the same primary action style should keep meaning the same thing across the product
- semantic colors should stay semantically stable (`green` should not mean "accept" on one screen and something unrelated on another)
- destructive actions should not randomly borrow the same treatment as safe primary actions

If a button color or treatment changes from page to page without a real reason, hierarchy becomes less trustworthy.

### Message and label consistency

Keep product language parallel.

Good signs:

- success messages use similar sentence structure
- labels name similar things in similar ways
- repeated flows use the same verbs for the same actions

Inconsistent vocabulary weakens clarity even when the spacing and typography are fine.

### Icon consistency

Use one visual logic per icon set or region whenever possible.

Check for:

- outline and solid styles being mixed without purpose
- icons in the same group using unrelated stroke weights or corner styles
- multiple colors inside one action cluster when only state should vary

Icons should support hierarchy, not create a second competing visual language.

### Layout and location consistency

Users learn where navigation, sidebars, filters, and account actions live.

Before removing or relocating a familiar region, ask:

- does the new location improve the workflow materially?
- or does it only create surprise?

Consistency in placement often matters more than novelty in placement.

### Typography consistency

Typography should teach role through repetition.

Check that:

- the same heading level or UI role keeps a similar visual treatment
- body text does not randomly switch families, weights, or casing patterns
- labels, metadata, and support text are styled consistently enough that users can scan by pattern

## Primary / Secondary / Tertiary Scan

Every meaningful screen should have a readable pyramid of importance.

### Primary
- The main content, decision, or call to action
- Usually gets the strongest combination of space, contrast, size, or weight

### Secondary
- Supports the primary task
- Should be clearly visible but not equally loud

### Tertiary
- Helpful but non-essential details
- Often handled with lower contrast, smaller type, or quieter placement

If multiple elements compete for the top slot, hierarchy is flattened.

## Visual Weight and Harmony

Visual harmony happens when weight feels intentionally distributed instead of accidentally scattered.

Ask:

- is there a clear focal point?
- are secondary elements balancing the primary one or fighting it?
- does the page feel complete, or just full?

### Weight comes from more than size

Visual weight is influenced by:

- **size** — larger elements feel heavier
- **color** — warmer, darker, or more saturated colors usually pull harder than cooler or quieter ones
- **density** — crowded zones feel heavier than open zones
- **contrast** — higher contrast pulls attention first
- **placement** — isolated or elevated elements often gain importance

If everything is similar in size, contrast, and density, the interface has no real focal structure.

### Symmetrical balance

Symmetry can create calm, stability, and professionalism.

Use it when the product or section should feel:

- orderly
- trustworthy
- formal
- composed

But do not repeat the exact same symmetrical structure across every section or the page starts to feel inert.

### Asymmetrical balance

Asymmetry creates movement, energy, and a stronger sense of composition.

It works when one dominant element is balanced by several quieter elements or a carefully weighted supporting column.

Good asymmetry should still feel balanced. "Messy" is not the same thing as dynamic.

### Radial or centered emphasis

Sometimes the right hierarchy move is to make one element unmistakably central, then let other elements support it around that center.

Useful for:

- a featured plan
- a central CTA
- a single metric or hero idea

Even highly expressive layouts still need one clear place for the eye to land first.

### Color harmony in hierarchy

Keep the palette simple enough that weight still reads clearly.

As a practical starting point:

- let one family dominate
- let a second family support
- keep accent moments sparse and intentional

If too many strong colors compete at once, harmony collapses into noise.

## Negative Space as a Hierarchy Tool

Negative space is not leftover space. It is one of the clearest ways to show what belongs together, what deserves emphasis, and when the user should mentally reset before the next section.

Use it through:

- margin between groups
- padding inside containers
- line-height and paragraph spacing in text
- breathing room around focal elements

### Use tighter space inside groups than between groups

The core rule:

- space **within** a group should be smaller
- space **between** groups should be larger

If everything uses the same spacing, the interface flattens into one undifferentiated field.

### Text spacing hierarchy

For text:

- line spacing should usually be tighter than the gap between a heading and its body copy
- heading + supporting paragraph should stay visibly connected
- paragraphs and text blocks should have enough room to read comfortably without floating too far apart

Generous text spacing helps readability. Equal spacing between every text element usually hurts it.

### Don’t confuse separation with abandonment

Too little space makes elements feel cluttered.

Too much space makes related elements feel unrelated.

Check whether the spacing is:

- grouping the right things together
- separating the right things apart
- helping the primary action stand out without isolating it awkwardly

### Container breathing room

Text, images, and controls should not feel jammed against the edges of cards, panels, or wrappers.

If a component touches its container too tightly, the whole interface starts to feel cheap and rushed.

### Section separation

Different sections should usually have enough vertical space between them that users can feel a topic shift.

If two sections carry different messages but are pressed too close together, the page reads as one muddled group.

## Proximity Builds Meaning

Proximity is the flip side of negative space: place related things close together, and separate unrelated things clearly.

Users infer relationship from spacing before they read every label.

### Product and content groupings

In cards, summaries, and content modules:

- image, title, rating, price, and CTA should read as one package when they belong together
- the gap between one card and the next should be clearly larger than the gaps inside the card

If the internal parts drift too far apart, the component stops reading as one object.

### Forms and field groups

Labels should sit closer to their fields than to the next field group.

For forms:

- keep label + input tightly associated
- use larger separation between distinct field groups
- visually group related fields such as personal information vs account information

When all vertical gaps are equal, forms become slower to scan and harder to complete.

### Navigation and utility zones

Not every item in a sidebar or header belongs to the same group.

Examples:

- navigation links should cluster together
- logout, account, or destructive actions often deserve more separation
- logos usually need a little more breathing room from utility links than the links need from each other

## Alignment Creates Order

Alignment is one of the quietest hierarchy tools — and one of the easiest to break.

When related elements share invisible lines, the interface feels deliberate. When they miss those lines without reason, scanning slows down.

### Use consistent container alignment

Across sections, keep major content aligned to a shared container width whenever the page is meant to feel coherent.

Users should not feel the content drifting around horizontally for no reason.

### Top-align unlike blocks by default

When adjacent cards or columns have meaningfully different heights, top alignment is often the clearest default.

It helps users compare starting points and scan the region faster.

### Center-align only when the size difference is small

If neighboring elements differ only slightly in height, centered alignment can feel smoother.

But once the size gap becomes large, centered alignment often makes the relationship feel vague or visually sloppy.

### Left alignment should do most of the work

For most product UI and text-heavy layouts:

- left-align multi-line text
- align related blocks to shared vertical lines
- reserve centered alignment for compact, self-contained moments

### Alignment review questions

- Do related cards start on the same line when they should?
- Are container widths and side padding stable across sections?
- Are elements centered only when that improves clarity instead of weakening it?

## Visual Scan Patterns

Users usually scan before they read.

Design the page so the scan path helps them find the right thing quickly.

### F-pattern

Best for denser, information-heavy layouts.

Useful when users are likely to:

- scan headings and labels first
- move top-to-bottom through structured content
- compare multiple repeated rows or blocks

### Z-pattern

Best for lighter, more directed layouts.

Useful when the page should guide the eye through:

- a logo or anchor point
- navigation or supporting context
- a main statement
- a clear CTA

These patterns are not templates to copy blindly. They are reminders that page structure should support how eyes actually move.

## Label / Value Treatment

Not every value needs a visible label.

### Remove labels when the value is obvious
- Email addresses
- Phone numbers
- Prices
- Dates when context is clear

### Combine label and value when possible
- `12 left in stock` instead of `In stock: 12`
- `3 bedrooms` instead of `Bedrooms: 3`

### When labels are necessary
- Treat them as supporting content by default
- In dense technical contexts, users may scan for the label first, so emphasize labels slightly more

## Action Hierarchy

Most screens should have:
- **1 primary action**
- **0–2 secondary actions**
- **quiet tertiary actions** for low-frequency tasks

Use hierarchy deliberately:
- **Primary**: solid fill or strongest treatment
- **Secondary**: outline or low-contrast surface
- **Tertiary**: link-like or text-level treatment

Destructive actions should not automatically look primary unless the user is inside a confirmation step where destruction is the main task.

## De-emphasis Rules

When something important isn’t standing out, try quieting the competing elements before making the hero even louder.

Use de-emphasis through:
- lower contrast
- lighter weight
- reduced size
- quieter placement
- less surrounding decoration

Avoid using tiny text to de-emphasize important supporting information. Prefer softer color or lower weight while preserving readability.

## Text and Image Balance

Hierarchy also breaks when text and imagery compete clumsily.

Check:

- is text sitting on top of busy image detail where readability drops?
- is one giant image overpowering a weak text block?
- is a long wall of text visually crushing a single small visual?

Better patterns:

- place text where the image has breathing room or calmer contrast
- crop or reposition images so text and image can coexist
- break oversized text blocks into smaller groups when they need to sit beside imagery

The right balance is not a fixed ratio. The goal is that neither side overwhelms the other unless that dominance is intentional.

## Section Title Restraint

Section headings are often labels, not the content itself.

Check:
- Is the title louder than the content it introduces?
- Would a smaller size or softer color improve the relationship?
- Does the section still make sense if the title becomes quieter?

## Quick Review Questions

- What is the first thing the eye lands on?
- What is the second?
- Which elements should recede more?
- Are titles and labels too loud?
- Are action styles matching actual importance?
- Are repeated actions, messages, icons, and layouts consistent enough to feel learnable?
- Is the visual weight balanced, or is one side/zone accidentally too heavy?
- Are text and images supporting each other instead of competing?
- Is spacing within groups clearly smaller than spacing between groups?
- Are proximity and section spacing making group boundaries obvious?
- Are alignment lines helping the layout scan cleanly?
- Does the page support a sensible scan pattern for its content density?

---

**Avoid**: Using color alone to create hierarchy. Styling every action as primary. Leaving labels at the same visual weight as the data they describe. Changing established meanings for action colors or message patterns without reason. Repeating the same layout balance across every section until the page feels mechanical. Using one uniform spacing value everywhere until groups lose structure. Misaligning related content blocks without a compositional reason.