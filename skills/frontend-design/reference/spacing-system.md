# Spacing System

## Meaningful Scale Jumps

A spacing system only helps if adjacent steps feel meaningfully different.

Good scales usually start tighter at the small end and spread out as values grow.

Example UI-friendly scale:
- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 96

If two values are so close that choosing between them feels arbitrary, your scale is too dense to guide decisions.

Define the spacing system early. It is much easier to remove excess space later than to repair a layout built on improvised gaps.

## Baseline Units

A baseline unit gives the system a repeatable measurement for paddings, margins, keylines, gutters, and component spacing.

Two common approaches are:

- **4-point systems** for tighter UI granularity
- **5-point systems** when the product or team already works that way consistently

In this library, the practical default remains **4-point spacing** because it fits dense product UI better and still scales cleanly.

Useful reminder:

- small increments should still come from the same baseline
- equal spacing on all sides should use real steps from the scale
- random values like `1px`, `3px`, `9px`, and `11px` on neighboring edges usually make a component feel accidental instead of refined

If the system is based on 4-point spacing, then values like `4`, `8`, `12`, `16`, `24`, and `32` should do most of the work.

## Grids, Columns, and Gutters

Grid spacing should come from the same baseline logic as the rest of the interface.

Practical rules:

- use consistent gutters between columns
- place elements into a defined column structure instead of manually nudging widths row by row
- keep the repeated grid predictable enough that alignment feels intentional

Common web patterns often use a multi-column system, while product UIs may lean more on repeating module grids and container logic. The exact column count matters less than keeping the rhythm and gutters consistent.

Avoid manually setting one-off widths and mismatched gaps within the same row. When one item gets a `13px` gap and its neighbor gets `6px`, the layout starts to feel accidental.

## Group Spacing Rules

Spacing should communicate structure.

### Within groups
- Use tighter spacing between related elements

### Between groups
- Use noticeably more spacing than inside the group

If the space between items inside a group matches the space between groups, the grouping will feel ambiguous.

## Start With Too Much Whitespace

When composing a layout, begin with more space than you think you need. Then remove space until the result feels balanced.

This usually produces a cleaner result than adding whitespace reactively only after something feels cramped.

## Max-Width vs Fluid Width

Not every component should scale fluidly forever.

### Good candidates for max-width or fixed width
- forms
- sidebars
- readable text blocks
- cards with predictable content

### Good candidates for fluid width
- galleries
- dashboards
- data tables with adaptive columns
- large layout containers

Use the width the content actually wants until the viewport forces compromise.

## Ambiguous Spacing Examples

### Forms
Bad:
- label/input gap = field-group gap

Better:
- tight label/input gap
- larger gap between field groups

### Lists
Bad:
- bullet spacing = internal line-height

Better:
- more space between bullets than between wrapped lines inside one bullet

### Horizontal toolbars
Bad:
- same gap between button clusters as within a cluster

Better:
- tighter spacing inside action groups, larger gaps between groups

## Rhythmic Spacing

Good layouts alternate:
- tight clusters
- medium separations
- generous section breaks

Uniform spacing everywhere creates monotony and weak hierarchy.

## Practical Checks

- Does every gap come from a defined scale?
- Is there more space around groups than inside them?
- Are forms and reading widths capped appropriately?
- Is the layout roomy first, then tightened intentionally?
- Are grid gutters and column gaps coming from the same system instead of one-off values?

---

**Avoid**: Arbitrary 13px / 19px / 27px gaps. Stretching narrow content to full width. Using borders where spacing should create separation.