# Elevation System

Depth should explain the interface, not decorate it.

## 3–5 Shadow Levels

Most products only need a few semantic elevation levels.

### Example scale
1. **Level 0** — flat / base surface
2. **Level 1** — slightly raised controls (buttons, cards)
3. **Level 2** — floating menus, dropdowns, popovers
4. **Level 3** — dialogs, sheets, prominent overlays
5. **Level 4** — highest temporary UI like tooltips or special toasts

Use semantic meaning first; exact shadow numbers come second.

## Use Shadows Gradually

Shadows should be built up in minimal, deliberate amounts.

- low-opacity shadows often do enough
- darker and larger shadows imply more depth, so use them sparingly
- if a shadow is shouting louder than the component it belongs to, it is probably too strong

In many interfaces, a restrained shadow around `0.1–0.15` opacity is already enough to suggest separation.

## Two-Part Shadow Logic

Many strong shadows are really two shadows doing two jobs:

### Large soft shadow
- suggests distance from the surface
- has a larger blur and broader spread

### Tight dark shadow
- suggests the compressed ambient shadow near the edges
- sharper, darker, smaller blur

As elevation increases, the tight dark shadow usually becomes subtler.

## Raised / Inset / Pressed / Dragged Mapping

### Raised
- subtle top highlight or lighter edge
- shadow beneath
- feels above the page

### Inset
- inner shadow at the top edge
- lighter bottom lip
- feels recessed into the surface

### Pressed
- reduced elevation
- shadow shrinks or disappears
- element shifts inward/downward slightly

### Dragged
- elevation increases
- shadow grows softer and larger
- item feels like it pops forward on the z-axis

## Overlap and Layering

Depth can come from overlap even in flat designs.

Useful patterns:
- cards crossing background boundaries
- floating controls overlapping media
- headers or action bars layered above content

If overlap creates clutter, add invisible spacing or matching background edges to keep layers distinct.

## Flat Depth via Color

Even without strong shadows:
- lighter surfaces tend to feel closer
- darker surfaces tend to feel further back

Use subtle surface shifts to imply depth before reaching for dramatic effects.

## Shadows vs Borders

Sometimes a subtle shadow outlines a surface more gracefully than a border.

When a shadow is already doing the containment work, adding a border on top can make the component feel over-described.

Prefer:

- a light shadow without a competing border when elevation is the real cue
- borders only when state, containment, or contrast needs something more explicit than depth alone

## Practical Uses

Shadows can help with:

- button hover and pressed states
- active or focused form controls when the system supports that cue
- stacked elements where one surface should feel above another
- separating floating UI such as menus, popovers, toasts, and overlays from the base canvas

## Practical Review Questions

- Does each elevation level have a job?
- Are shadows consistent across similar components?
- Do pressed and dragged states feel physically different?
- Are inset elements clearly inset?
- Is depth helping users understand structure and interaction?
- Are borders being used out of habit where a subtle shadow would be cleaner?

---

**Avoid**: Big default drop shadows on everything. Using the same shadow for buttons, popovers, and modals. Adding depth effects with no semantic meaning. Full-opacity shadows. Layering strong borders and strong shadows on the same component without a clear reason.