# Entrance Animations

Use this reference when elements are appearing, revealing, or entering the viewport for the first time. This covers page-load choreography, scroll-triggered reveals, modal and drawer entry, dropdown emergence, and hero section entrances.

## Core Principles

**Ease-out is the default for entrances.** It starts quickly so the interface feels responsive, then settles gently so the finish feels polished.

```css
.popover {
  transition:
    opacity 180ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

.popover[data-open='true'] {
  opacity: 1;
  transform: translateY(0);
}
```

**Never animate entry from `scale(0)`.** Start at `scale(0.95)` or higher so the element keeps believable mass and does not feel like it materializes from nothing.

**Make transform origins match where the motion comes from.** Surfaces such as dropdowns, popovers, and menus should appear to grow from their trigger or anchor edge, not from an arbitrary center point.

```css
.dropdown {
  transform-origin: top center;
  animation: scale-in 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Duration Guidelines

| Context | Duration | Easing |
|---------|----------|--------|
| Dropdowns, tooltips, small reveals | 150-200ms | ease-out |
| Modals, cards, medium surfaces | 200-300ms | ease-out |
| Drawers, sheets, large surfaces | 300-500ms | sheet curve |
| Page load choreography | 200-400ms per element | ease-out, staggered |

Treat **500ms** as a special-case upper bound for bigger surface motion, not as the default for ordinary controls.

## Page Load and Choreography

**Stagger children when orchestration improves comprehension.** Sequential reveals can make a list or grouped surface feel more intentional than having every item arrive at once. Use a small stagger so the motion reads as one orchestrated entrance rather than a slow domino effect.

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}
```

Good uses: compact menu content, cards in a small group, hero copy and supporting elements. Avoid overusing stagger on large lists. Too much delay turns polish into waiting.

**Hero section**: Give the primary story moment a distinct entrance if the product tone supports it. One well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.

## Scroll-Triggered Reveals

Use Intersection Observer for scroll-triggered motion. Stop observing once the motion has completed if it only needs to happen once.

Scroll reveals should trigger before the user has fully passed the element, but not so early that the effect feels detached from scroll context. A starting threshold of roughly **100px from the viewport edge** is a reasonable default.

Prefer transform and opacity for scroll reveals. Avoid animating layout properties that cause reflow.

## Modal and Drawer Entry

Modal and drawer entrances should combine smooth slide with fade, and include a backdrop fade for depth. Match the movement direction to the anchored side:

- Bottom sheets slide up from the bottom
- Side drawers slide from their anchored edge
- Centered modals scale and fade in place

Use the sheet-style curve `cubic-bezier(0.32, 0.72, 0, 1)` for drawers and sheets.

## Clip-Path and Layout-Free Reveals

Use **clip-path**, masks, or composited reveals when you need a layout-free reveal effect that does not cause reflow.

```css
.reveal {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal[data-visible='true'] {
  clip-path: inset(0 0 0 0);
}
```

This is especially useful for tab content transitions, image reveals, and list item entrances where width or height animation would be expensive.

## Reduced Motion for Entrances

When `prefers-reduced-motion` is active, replace spatial entrances with shorter opacity fades or instant state changes. Preserve the functional reveal (the user still sees the content) but remove the travel.

```css
@media (prefers-reduced-motion: reduce) {
  .popover {
    transition: opacity 100ms ease;
    transform: none;
  }
}
```

## Anti-Patterns

- **Animate from `scale(0)`**: Elements should not materialize from nothing. Start at `scale(0.95)` minimum.
- **Long stagger chains on large lists**: Cap total stagger time so the last item does not arrive embarrassingly late.
- **Oversized durations for small elements**: A 500ms tooltip entrance feels sluggish, not refined.
- **Ignoring transform origin**: A dropdown scaling from center feels detached from its trigger.
- **Scroll reveals that fire too late**: If the user has already passed the element, the motion is missed.
- **Layout property animation**: Animating width, height, or top for entrances causes reflow and jank.

## Consult Also

- [ease-out default](ease-out-default.md) — detailed rationale for ease-out as the entrance default
- [stagger children orchestration](stagger-children-orchestration.md) — choreography patterns for grouped reveals
- [origin-aware animations](origin-aware-animations.md) — matching transform origin to trigger position
- [scroll animation threshold](scroll-animation-threshold.md) — fine-tuning scroll trigger distance
- [clip-path layout-free reveals](clip-path-layout-free-reveals.md) — layout-free reveal techniques
- [respect reduced motion](respect-reduced-motion.md) — accessibility baseline for all motion