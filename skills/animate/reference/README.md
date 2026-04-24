# Animate Reference Index

This folder contains the deeper motion doctrine for `animate`.

The files are intentionally granular so the skill can point to precise guidance, but that also makes browsing harder once the library grows. Use this index when you know you need motion help but do not yet know the exact filename.

## Start here

If you only open a few motion references first, start with:

- [animation purpose](./animation-purpose.md) — decide whether the animation should exist at all
- [ease-out default](./ease-out-default.md) — strong default curve starting point
- [easing context](./easing-context.md) — match curve to motion job
- [ui under 300ms](./ui-under-300ms.md) — default duration discipline for product UI
- [transform and opacity only](./transform-opacity-only.md) — performance-safe property choices
- [respect reduced motion](./respect-reduced-motion.md) — accessibility baseline

## Thematic guides

For consolidated guidance organized by motion type rather than granular topic:

- [entrance animations](entrance-animations.md) — elements appearing, revealing, entering the viewport
- [exit animations](exit-animations.md) — elements leaving, dismissing, collapsing
- [gesture interactions](gesture-interactions.md) — drag, swipe, snap, and physically connected motion
- [micro-interactions](micro-interactions.md) — button presses, hover states, toggles, focus, tooltips

## Strategy and timing

- [animation purpose](./animation-purpose.md)
- [interaction frequency](./interaction-frequency.md)
- [immediate feedback actions](./immediate-feedback-actions.md)
- [ui under 300ms](./ui-under-300ms.md)
- [faster improves performance](./faster-improves-performance.md)
- [marketing exception](./marketing-exception.md)

Use these when the question is: should this move, how fast should it move, and is the current motion helping or hurting the product feel?

## Easing and duration

- [ease-out default](./ease-out-default.md)
- [easing context](./easing-context.md)
- [custom easing curves](./custom-easing-curves.md)
- [ease in out on-screen movement](./ease-in-out-on-screen-movement.md)
- [sheet and drawer easing](./sheet-drawer-easing.md)
- [drawer 500ms duration](./drawer-500ms-duration.md)
- [asymmetric press release](./asymmetric-press-release.md)
- [spring motion](./spring-motion.md)

## Feedback, hover, and small interactions

- [button press scale 0.97](./button-press-scale-097.md)
- [hover gap fill](./hover-gap-fill.md)
- [tooltip delay instant followups](./tooltip-delay-instant-followups.md)
- [no animation for keyboard](./no-animation-for-keyboard.md)

## Gesture, drag, and snap behavior

- [damp drag boundaries](./damp-drag-boundaries.md)
- [upward drag friction](./upward-drag-friction.md)
- [momentum dismissal](./momentum-dismissal.md)
- [velocity aware snap points](./velocity-aware-snap-points.md)
- [pointer capture](./pointer-capture.md)
- [scroll drag conflicts](./scroll-drag-conflicts.md)
- [interruptible animations](./interruptible-animations.md)

Use these when touch, swipe, drag, dismissal, or snap behavior needs to feel physically coherent instead of sticky or haunted.

## Accessibility and reduced motion

- [respect reduced motion](./respect-reduced-motion.md)
- [reduced motion not zero](./reduced-motion-not-zero.md)
- [opacity reduced motion fallback](./opacity-reduced-motion-fallback.md)
- [use reduced motion hook](./use-reduced-motion-hook.md)

## Scroll and orchestration

- [scroll animation threshold](./scroll-animation-threshold.md)
- [stagger children orchestration](./stagger-children-orchestration.md)
- [toast stack depth](./toast-stack-depth.md)

## Transform and visual technique

- [clip-path layout free reveals](./clip-path-layout-free-reveals.md)
- [clip-path tab transitions](./clip-path-tab-transitions.md)
- [blur bridge states](./blur-bridge-states.md)
- [origin aware animations](./origin-aware-animations.md)
- [percentage translate y](./percentage-translate-y.md)
- [scale affects children](./scale-affects-children.md)
- [never scale zero](./never-scale-zero.md)
- [preserve 3d effects](./preserve-3d-effects.md)
- [svg path morph disclosure](./svg-path-morph-disclosure.md)

## Performance-sensitive implementation

- [transform opacity only](./transform-opacity-only.md)
- [hardware accelerated busy main thread](./hardware-accelerated-busy-main-thread.md)
- [avoid css variables drag](./avoid-css-variables-drag.md)
- [will-change subpixel shift](./will-change-subpixel-shift.md)

## Source and attribution

- [attribution and sources](./attribution-and-sources.md)

## How to use this folder well

- start with **strategy and timing** when motion feels wrong but you are not sure why
- jump to **gesture** when the issue is drag, swipe, sheet, or snap logic
- jump to **performance-sensitive implementation** when motion is janky under load
- jump to **accessibility** when reduced-motion handling is weak or missing

Granular files are great for precision. This index is here so precision does not come at the cost of discoverability.
