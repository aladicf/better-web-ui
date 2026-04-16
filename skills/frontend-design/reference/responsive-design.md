# Responsive Design

## Narrow-First: Write It Right

Start with base styles for the narrowest practical layout, then use `min-width` queries to layer complexity. Wide-first (`max-width`) usually means constrained layouts inherit too much baggage too early.

## Breakpoints: Content-Driven

Don't chase device sizes—let content tell you where to break. Start narrow, stretch until design breaks, add breakpoint there. Three breakpoints usually suffice (640, 768, 1024px). Use `clamp()` for fluid values without breakpoints.

## Detect Input Method, Not Just Screen Size

**Screen size doesn't tell you input method.** A laptop with touchscreen, a small window on desktop, a touch-capable convertible—use pointer and hover queries:

```css
/* Fine pointer (mouse, trackpad) */
@media (pointer: fine) {
  .button { padding: 8px 16px; }
}

/* Coarse pointer (touch, stylus) */
@media (pointer: coarse) {
  .button { padding: 12px 20px; }  /* Larger touch target */
}

/* Device supports hover */
@media (hover: hover) {
  .card:hover { transform: translateY(-2px); }
}

/* Device doesn't support hover */
@media (hover: none) {
  .card { /* No hover state - use active instead */ }
}
```

**Critical**: Don't rely on hover for functionality. Coarse-pointer and non-hover users cannot hover.

## Safe Areas: Handle Viewport Insets

Modern browsers can expose display cutouts, rounded corners, and browser-chrome insets. Use `env()` when the edge treatment actually matters:

```css
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* With fallback */
.footer {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
```

**Enable viewport-fit** in your meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## Responsive Images: Get It Right

### srcset with Width Descriptors

```html
<img
  src="hero-800.jpg"
  srcset="
    hero-400.jpg 400w,
    hero-800.jpg 800w,
    hero-1200.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Hero image"
>
```

**How it works**:
- `srcset` lists available images with their actual widths (`w` descriptors)
- `sizes` tells the browser how wide the image will display
- Browser picks the best file based on viewport width AND device pixel ratio

### Picture Element for Art Direction

When you need different crops/compositions (not just resolutions):

```html
<picture>
  <source media="(min-width: 768px)" srcset="wide.jpg">
  <source media="(max-width: 767px)" srcset="tall.jpg">
  <img src="fallback.jpg" alt="...">
</picture>
```

## Layout Adaptation Patterns

**Navigation**: Three stages—compact menu or drawer in narrow layouts, condensed horizontal navigation in medium widths, fuller labeled navigation in wide layouts. **Tables**: Transform to cards or summaries in narrow layouts using `display: block` and `data-label` attributes when the table job changes. **Progressive disclosure**: Use `<details>/<summary>` for content that can collapse in compact layouts.

## You Don’t Have to Fill the Whole Screen

Wide viewports do not obligate wide content.

If a form, article, or card works best at a narrower width, keep it narrow and let the surrounding space breathe.

Prefer:
- natural widths
- max-width constraints
- balanced use of empty space

Avoid stretching content just because the viewport allows it.

## Thinking in Columns

When a narrow core element feels visually stranded in a wide layout, rebalance with columns instead of making the core content too wide.

Good examples:
- form in one column, explanatory text in another
- primary content column plus a supporting panel
- constrained article width with side context

This is often a better responsive move than simply widening the main content block.

## Don’t Force It

Not every screen needs to be dense, and not every wide canvas needs to be fully occupied.

Use the space the layout actually needs, not the space that happens to exist.

## Not All Elements Should Be Fluid

Fluid widths are useful, but not every component benefits from them.

Elements that often deserve fixed or max widths:
- sidebars
- forms
- reading columns
- dialogs
- cards with a natural ideal width

Use fluid behavior where scaling actually improves the experience.

## Don’t Shrink an Element Until You Need To

If a component has an ideal readable width, preserve it until the viewport forces compromise.

Use:
- `max-width`
- natural container sizing
- breakpoint reflow only when necessary

This avoids awkward ranges where a component becomes narrower on larger screens just because a grid says so.

## Relative Sizing Doesn’t Scale

Relationships that work on desktop often need different ratios on smaller screens.

As a rule:
- larger elements should usually shrink faster than smaller ones
- contrast between large and small should often decrease on small screens

Do not assume one proportional relationship should survive every breakpoint unchanged.

## Relationships Within Elements

The same principle applies inside components.

Padding, font size, icon size, and spacing do not always need to scale proportionally.

Often:
- large variants deserve proportionally roomier padding
- small variants need disproportionately tighter padding
- elements should be tuned for feel, not mathematical purity

## Testing: Don't Trust DevTools Alone

DevTools device emulation is useful for layout but misses:

- Actual touch interactions
- Real CPU/memory constraints
- Network latency patterns
- Font rendering differences
- Browser chrome/keyboard appearances

**Test on at least**: One real low-power touch-capable browser, one mainstream laptop/desktop browser, and a constrained mid-width window if relevant. Lower-powered devices reveal performance issues you'll never see on simulators.

For decisions about whether side content should live in a rail, move inline, or drop into a footer/support surface at different breakpoints, also use [sidebar and footer UX](./sidebar-and-footer-ux.md).

---

**Avoid**: wide-first design, filling the whole screen just because you can, making every element fluid by default, proportionally shrinking everything across breakpoints, separate narrow/wide codepaths, ignoring medium-width and landscape states, and assuming all constrained devices are powerful.
