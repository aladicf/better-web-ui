# Exit Animations

Use this reference when elements are leaving, dismissing, or disappearing from the viewport. This covers modal and drawer dismissal, toast removal, list item deletion, page transitions, and collapse transitions.

## Core Principles

**Exit animations should be faster than entrances.** A good default is roughly **75%** of the enter duration. If an element takes 300ms to appear, it should leave in roughly 200ms.

**Use ease-in or a snappier exit curve for dismissals.** While entrances ease out to feel welcoming, exits can accelerate toward completion because the user has already decided to move on.

```css
.modal-exit {
  transition:
    opacity 150ms cubic-bezier(0.4, 0, 1, 1),
    transform 150ms cubic-bezier(0.4, 0, 1, 1);
}
```

**Exit animations are not optional if the entrance had one.** A one-way animation (enter with motion, leave instantly) feels broken and disorienting. Match the exit to the entrance in direction and property, just faster.

## Duration Guidelines

| Context | Duration | Easing |
|---------|----------|--------|
| Tooltips, dropdowns, small dismissals | 100-150ms | ease-in or snappy |
| Modals, cards, medium surfaces | 150-200ms | ease-in |
| Drawers, sheets, large surfaces | 200-300ms | ease-in or sheet curve |
| Toast removal | 150-200ms | ease-in, with height collapse after fade |

## Dismissal and Removal Patterns

**Toast dismissal**: Fade out first, then collapse height. Do not collapse height while the element is still visible — it creates a jarring layout shift.

**List item deletion**: Animate the item out (fade + slide), then let remaining items slide up to fill the gap. Do not instantly remove the item while others animate around the void.

**Modal/drawer dismissal**: Reverse the entrance direction. If the drawer slid in from the right, it should slide out to the right. Include backdrop fade-out.

**Swipe-to-dismiss**: Use distance plus velocity, not distance alone, to decide whether to complete or cancel the dismissal. See [velocity-aware snap points](velocity-aware-snap-points.md) and [momentum dismissal](momentum-dismissal.md).

## Collapse and Height Transitions

For accordion-like or list collapse, prefer **grid-template-rows** or equivalent layout-friendly patterns over raw `height` animation when possible. If you must animate height, ensure the parent handles overflow correctly and that sibling elements reflow smoothly.

```css
.accordion {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 200ms cubic-bezier(0.4, 0, 1, 1);
}

.accordion[data-open='true'] {
  grid-template-rows: 1fr;
}

.accordion > .content {
  overflow: hidden;
}
```

## Blur as a Bridge

When easing and timing are close but a transition still feels visually harsh, a tiny amount of blur can smooth the handoff between states. Use around **1-2px**, remove it once settled, and do not blur important text long enough to hurt readability.

```css
.button {
  transition:
    background-color 200ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.button:active {
  filter: blur(2px);
}
```

Blur is not a substitute for fixing bad motion fundamentals. Reach for it after timing, easing, and property selection are already in good shape.

## Toast Stack Depth

When multiple toasts are present, use offset, scale, and opacity to imply depth as older toasts exit. The top toast stays full opacity and scale; lower toasts become slightly smaller and dimmer before they too leave.

A starting range of **10-16px** offset per toast level works well. Do not let the stack grow so deep that the bottom toast is unreadable.

## Interruptible Exits

Make exit animations interruptible. If a user dismisses a modal and then immediately reopens it, the exit should not block the new entrance. Cancel the exit animation and begin the entrance.

See [interruptible animations](interruptible-animations.md) for implementation patterns.

## Reduced Motion for Exits

When `prefers-reduced-motion` is active, exits should simplify to short opacity fades or instant removal. Do not force a spatial exit on users who have opted out of motion.

```css
@media (prefers-reduced-motion: reduce) {
  .modal-exit {
    transition: opacity 80ms ease;
    transform: none;
  }
}
```

## Anti-Patterns

- **Instant exit after animated entrance**: A modal that slides in but disappears instantly feels broken.
- **Slower exits than entrances**: The user has already decided to move on; do not make them wait.
- **Height collapse before fade completes**: Collapsing a toast while it is still visible creates layout jump.
- **Exit in the wrong direction**: A drawer that entered from the bottom should not exit to the left.
- **Ignoring velocity in swipe dismissal**: Distance alone makes gestures feel mechanical.
- **Uninterruptible exits**: Users should be able to reverse their decision immediately.

## Consult Also

- [faster improves performance](faster-improves-performance.md) — why faster exits feel better
- [blur bridge states](blur-bridge-states.md) — smoothing harsh transitions
- [toast stack depth](toast-stack-depth.md) — managing multiple dismissals
- [interruptible animations](interruptible-animations.md) — canceling and reversing motion
- [momentum dismissal](momentum-dismissal.md) — gesture-based removal
- [velocity-aware snap points](velocity-aware-snap-points.md) — gesture completion thresholds
- [respect reduced motion](respect-reduced-motion.md) — accessibility baseline