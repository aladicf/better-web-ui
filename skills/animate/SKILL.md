---
name: animate
description: Improve or implement purposeful motion systems, micro-interactions, gestures, and transition behavior for production-grade UI. Use when the user mentions animation, motion, transitions, micro-interactions, hover states, drawers, toasts, gestures, or making the UI feel more alive.
metadata:
  argument-hint: "[target]"
---

Analyze a feature and add motion that improves clarity, feedback, perceived performance, and polish without making the interface feel slow, noisy, or theatrical.

## MANDATORY PREPARATION

Users start this workflow with `/animate`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: performance constraints.

Consult the [motion reference](../frontend-design/reference/motion-design.md) for timing, easing, choreography, and reduced-motion handling.
Consult the [animate reference index](reference/README.md) when you need to browse the deeper motion library by use case instead of guessing filenames.
Consult the [elevation system](../frontend-design/reference/elevation-system.md) when motion should reinforce raised, pressed, inset, dragged, or layered depth.
Consult the [interaction reference](../frontend-design/reference/interaction-design.md) when animation decisions overlap with focus, loading, transitions, or feedback states.
Consult the [component anatomy reference](../frontend-design/reference/component-anatomy.md) when motion affects custom primitives such as buttons, tabs, tooltips, toasts, toggles, drawers, or submit actions.
Consult the [responsive design reference](../frontend-design/reference/responsive-design.md) when motion needs to adapt across small screens, touch contexts, or reduced viewport space.
Consult the [framework official docs reference](../frontend-design/reference/framework-official-docs.md) before making framework-specific animation decisions.
Consult the [React shadcn accelerators reference](../frontend-design/reference/react-shadcn-accelerators.md) when the request overlaps with React toasts, drawers, text motion, or other UI patterns that already have strong accelerators.
Consult the [CSS, Tailwind, and WAAPI motion reference](../frontend-design/reference/css-tailwind-and-waapi-motion.md) to decide when modern CSS, Tailwind, or WAAPI can solve the motion cleanly without reaching for a framework animation library.
Consult [attribution and sources](reference/attribution-and-sources.md) for the source lineage behind this skill's Emil-inspired motion guidance.
Consult [ease-out defaults](reference/ease-out-default.md), [easing by context](reference/easing-context.md), and [custom easing curves](reference/custom-easing-curves.md) when choosing motion curves.
Consult [UI under 300ms](reference/ui-under-300ms.md), [asymmetric press and release timing](reference/asymmetric-press-release.md), [500ms drawer timing](reference/drawer-500ms-duration.md), [faster perceived performance](reference/faster-improves-performance.md), and [tooltip timing escalation](reference/tooltip-delay-instant-followups.md) when the main question is duration rather than easing.
Consult [on-screen movement easing](reference/ease-in-out-on-screen-movement.md), [sheet and drawer easing](reference/sheet-drawer-easing.md), and [spring motion](reference/spring-motion.md) when the motion pattern needs more specific guidance.
Consult [damped drag boundaries](reference/damp-drag-boundaries.md), [upward drag friction](reference/upward-drag-friction.md), [interruptible animations](reference/interruptible-animations.md), [momentum dismissal](reference/momentum-dismissal.md), [pointer capture](reference/pointer-capture.md), [scroll and drag conflicts](reference/scroll-drag-conflicts.md), and [velocity-aware snap points](reference/velocity-aware-snap-points.md) when implementing gesture-heavy surfaces.
Consult [blur-bridged transitions](reference/blur-bridge-states.md), [clip-path tabs](reference/clip-path-tab-transitions.md), [respect reduced motion](reference/respect-reduced-motion.md), [opacity fallback](reference/opacity-reduced-motion-fallback.md), [reduced motion alternatives](reference/reduced-motion-not-zero.md), [Motion's `useReducedMotion`](reference/use-reduced-motion-hook.md), [hover gap fill](reference/hover-gap-fill.md), [scroll reveal thresholds](reference/scroll-animation-threshold.md), [child orchestration](reference/stagger-children-orchestration.md), and [toast stack depth](reference/toast-stack-depth.md) for polish and accessibility refinement.
Consult [transform and opacity only](reference/transform-opacity-only.md), [avoid CSS variables in drag loops](reference/avoid-css-variables-drag.md), [clip-path reveals](reference/clip-path-layout-free-reveals.md), [hardware-accelerated motion under load](reference/hardware-accelerated-busy-main-thread.md), and [surgical `will-change`](reference/will-change-subpixel-shift.md) for performance-sensitive property choices.
Consult [immediate action feedback](reference/immediate-feedback-actions.md), [interaction frequency](reference/interaction-frequency.md), [no keyboard animation](reference/no-animation-for-keyboard.md), [marketing exceptions](reference/marketing-exception.md), and [animation purpose](reference/animation-purpose.md) for strategy-heavy motion decisions.
Consult [preserve-3d effects](reference/preserve-3d-effects.md), [never scale from zero](reference/never-scale-zero.md), [origin-aware animations](reference/origin-aware-animations.md), and [percentage translateY](reference/percentage-translate-y.md) when the question is really about transform technique and spatial feel.
Consult [button press scale 0.97](reference/button-press-scale-097.md), [scale affecting children](reference/scale-affects-children.md), and [SVG path morph disclosure icons](reference/svg-path-morph-disclosure.md) for finer transform polish details.

If the interface already feels laggy under frequent use, also load `optimize`.
If the interface needs stronger resilience around reduced motion, errors, overflow, edge cases, or mixed input modes, also load `harden`.

---

## Attribution and Inspiration

This skill's motion guidance is informed in part by [Emil Kowalski's animations.dev course](https://animations.dev/), especially the emphasis on easing choice, timing, tasteful restraint, springs, and motion that "feels right" in production UI.

It is also informed by Emil's animation-heavy open-source work on [Sonner](https://github.com/emilkowalski/sonner) and [Vaul](https://github.com/emilkowalski/vaul), which are already relevant elsewhere in this library for React toast and drawer guidance.

This repository rewrites those lessons into original, repository-specific guidance rather than reproducing the course materials directly.

---

## Motion Operating Model

Use this decision order before adding any animation:

1. **Fix structure first** — motion should reinforce hierarchy and state, not rescue a confusing layout.
2. **Animate only with a job to do** — every animation should improve feedback, orientation, relationship, or delight.
3. **Bias toward speed** — product UI should feel responsive first and impressive second.
4. **Keep motion interruptible** — new user intent beats finishing the old animation.
5. **Match the input method** — mouse, touch, and keyboard interactions do not all deserve the same motion treatment.
6. **Plan reduced motion up front** — accessibility is part of the system, not a cleanup pass.
7. **Prefer the lightest implementation that fits** — modern CSS and Tailwind first, WAAPI when imperative timing matters, Motion when the interaction genuinely needs it.

Use motion for one or more of these jobs:

- **Feedback** — acknowledge that an action happened
- **Orientation** — help users understand where something came from or where it went
- **Relationship** — show how surfaces, layers, and controls relate spatially
- **Delight** — add warmth or personality after the fundamentals already work

If the animation cannot justify itself with one of those jobs, cut it.

## Assess Motion Opportunities

Analyze where motion would improve the experience:

1. **Identify static areas**:
   - **Missing feedback**: Actions without visual acknowledgment (button clicks, form submission, etc.)
   - **Jarring transitions**: Instant state changes that feel abrupt (show/hide, page loads, route changes)
   - **Unclear relationships**: Spatial or hierarchical relationships that aren't obvious
   - **Lack of delight**: Functional but joyless interactions
   - **Missed guidance**: Opportunities to direct attention or explain behavior

2. **Understand the context**:
   - What's the personality? (Playful vs serious, energetic vs calm)
  - What's the performance budget? (Compact-layout-first? Complex page?)
   - Who's the audience? (Motion-sensitive users? Power users who want speed?)
   - What matters most? (One hero animation vs many micro-interactions?)
   - Which inputs matter? (mouse, touch, keyboard, stylus)
   - Which interactions are high-frequency and should stay especially snappy?

If any of these are unclear from the codebase, ask the user directly to clarify what you cannot infer.

**CRITICAL**: Respect `prefers-reduced-motion`. Always provide non-animated alternatives for users who need them.

Motion should reinforce hierarchy, not compensate for weak hierarchy. If the layout only becomes understandable once it moves, fix the layout first.

## Plan Animation Strategy

Create a purposeful animation plan:

- **Hero moment**: What's the ONE signature animation? (Page load? Hero section? Key interaction?)
- **Feedback layer**: Which interactions need acknowledgment?
- **Transition layer**: Which state changes need smoothing?
- **Gesture layer**: Which drag, swipe, snap, or dismiss interactions need physical logic?
- **Delight layer**: Where can we surprise and delight?
- **Depth logic**: Which elements should feel raised, pressed, dragged, inset, or layered?
- **Reduced-motion plan**: What simplifies to fade, blur, or instant state change?
- **Performance budget**: Which motions must stay lightweight because they happen often?

**IMPORTANT**: One well-orchestrated experience beats scattered animations everywhere. Focus on high-impact moments.

## Default Motion Rules

Use these as the default guidelines for animation work unless the product context gives a strong reason to deviate.

### 1. Strategy and Purpose

- Every animation must earn its place through **feedback, orientation, relationship, or delight**.
- Product interfaces should usually feel **fast, calm, and precise**. Save slower or more dramatic motion for onboarding, hero moments, storytelling, or marketing surfaces.
- Favor **one signature moment plus disciplined micro-interactions** over adding motion everywhere.
- Do **not** animate keyboard-initiated actions just because pointer interactions animate. Keyboard users usually want predictable state change with minimal delay.
- The more often an interaction happens, the less motion it usually needs. High-frequency controls should feel nearly instant.
- Acknowledge user input immediately. Aim for visible feedback within roughly **80ms** for micro-interactions whenever possible.
- If real work may exceed roughly **400ms**, respond immediately with optimistic UI, skeletons, progress, or clear loading feedback instead of leaving a dead pause.
- Never use motion to disguise slow loading, weak hierarchy, or missing state design.

### 2. Easing Defaults

- Use **ease-out** as the default for entrances, reveals, and most feedback transitions.
- Use **custom cubic-bezier curves** instead of the generic CSS `ease` default.
- Use **ease-in-out** for reversible, on-screen state changes that travel there and back.
- Use **spring motion** when the movement should feel physically connected to gesture input or object behavior.
- For drawers, sheets, and similar surfaces, a good starting point is the sheet-style curve `cubic-bezier(0.32, 0.72, 0, 1)`.
- Prefer exponential-style deceleration such as `ease-out-quart`, `ease-out-quint`, or `ease-out-expo` for refined UI motion.
- Avoid bounce and elastic curves unless the product intentionally embraces a toy-like or playful physical metaphor. They usually feel dated, noisy, or self-conscious.
- Match easing to context:
  - **entering surfaces** → ease-out
  - **exiting surfaces** → shorter duration, often ease-in or a snappier exit curve
  - **state toggles / reversible movement** → ease-in-out
  - **gesture-linked movement** → spring or velocity-aware interpolation

### 3. Timing and Duration

- Keep most recurring UI motion under **300ms**.
- Use **100-150ms** for press states, toggles, color changes, and immediate acknowledgment.
- Use **200-300ms** for standard UI state changes such as hover, menus, tooltips, and small reveals.
- Use **300-500ms** for larger layout transitions such as drawers, modals, accordions, and major surface changes.
- Treat **500ms** as a special-case upper bound for bigger surface motion like sheets or staged entrances, not as the default for ordinary controls.
- Exit animations should be faster than entrances. A good default is roughly **75%** of enter duration.
- Press should be faster than release. Downward feedback should feel immediate; reset can be slightly softer.
- Delay the **first** tooltip or hover-revealed helper when needed, but make subsequent related reveals much faster or instant so the interface does not feel sticky.
- Long stagger chains are a smell. Cap total stagger time so the last item does not arrive embarrassingly late.

### 4. Property Selection and Performance

- Prefer animating **transform** and **opacity**.
- Avoid animating **width, height, top, left, padding, margin, border-width**, or other layout-heavy properties unless there is a strong reason and the surface is small.
- For accordion-like height transitions, prefer **grid-template-rows** or equivalent layout-friendly patterns over raw `height` animation when possible.
- Use **clip-path**, masks, or composited reveals when you need a layout-free reveal effect.
- Use hardware-friendly transforms when the main thread is busy or the component animates frequently.
- Use `will-change` sparingly and only when animation is imminent or proven to need it.
- During drag loops, avoid animation setups that route every frame through expensive CSS-variable or layout recalculation paths if they introduce lag.
- Prefer Intersection Observer for scroll-triggered motion and stop observing once the motion has completed if it only needs to happen once.

### 5. Transform and Scale Techniques

- For button or chip press feedback, `scale(0.97)` is a strong default starting point.
- Never animate entry from `scale(0)`. Start closer to `scale(0.95)` or higher so the element keeps believable mass.
- Use percentage-based translate values when movement should scale with the element or viewport size.
- Make motion **origin-aware**:
  - menus and tooltips should emerge from the trigger edge
  - drawers and sheets should move from their anchored side
  - lifted cards should feel like they rise from their current plane
- Remember that scaling affects children. Text and icons can feel blurry or distorted if the scale range is too aggressive.
- Use 3D transforms only when they improve spatial understanding or delight meaningfully. Do not reach for `preserve-3d` just because it looks flashy in isolation.

### 6. Gesture and Interaction Patterns

- Make interactive animations **interruptible**. Users should not have to wait for motion to finish before expressing new intent.
- For swipe-to-dismiss, sheet snapping, and similar gestures, use **distance plus velocity**, not distance alone.
- Add **friction or damping** near boundaries so drags resist instead of hard-stopping.
- Handle **scroll-vs-drag conflicts** intentionally. Nested surfaces should not feel like they are fighting over input.
- Use robust pointer handling such as pointer capture or equivalent gesture ownership when implementing drag interactions.
- Visually lift dragged items with depth cues such as shadow, slight scale, or elevated layering.
- When a surface can be dragged past its resting point, allow controlled resistance instead of making the gesture feel abruptly blocked.
- Snap points should feel velocity-aware and purposefully chosen, not like arbitrary invisible walls.

### 7. Accessibility and Polish

- Always respect `prefers-reduced-motion`.
- Reduced motion should usually mean **simplified motion**, not zero feedback. Replace large spatial movement with opacity, blur, highlight, or shorter transitions where possible.
- Preserve functional cues such as focus states, progress, loading feedback, and success or error acknowledgment.
- Use blur carefully to bridge between visual states when a straight cut feels harsh.
- Use stagger intentionally for orchestration, not as decoration. Small lists can benefit; huge lists usually cannot.
- Scroll reveals should trigger before the user has fully passed the element, but not so early that the effect feels detached from scroll context.
- Fill hover gaps between triggers and floating surfaces so tooltips, menus, and popovers do not flicker closed during pointer travel.
- Toast stacks can use offset, scale, and opacity to imply depth without becoming chaotic.
- Respect motion sensitivity in compact and touch-capable contexts as much as in wide layouts. Gesture-led movement can be especially uncomfortable if overdone.

## Implement Animations

Add motion systematically across these categories:

### Entrance Animations
- **Page load choreography**: Stagger only where it improves comprehension; keep total orchestration tight
- **Hero section**: Give the primary story moment a distinct entrance if the product tone supports it
- **Content reveals**: Scroll-triggered animations using intersection observer
- **Modal/drawer entry**: Smooth slide + fade, backdrop fade, focus management

### Micro-interactions
- **Button feedback**:
  - Hover: Subtle scale, color shift, or shadow change only if it improves affordance
  - Click / press: Quick scale down then up, pressed-in feel, or depth shift
  - Loading: Spinner or pulse state
- **Form interactions**:
  - Input focus: Border, background, or elevation transition that clarifies focus without being distracting
  - Validation: Prefer clear color, icon, or text-state change before ornamental motion
- **Toggle switches**: Smooth slide + color transition
- **Checkboxes/radio**: Clear state change with tight timing
- **Like/favorite**: Small scale or icon motion only if it fits the product tone

### State Transitions
- **Show/hide**: Fade + slide (not instant), appropriate timing (200-300ms)
- **Expand/collapse**: Layout-friendly open/close transitions with overflow handling, icon rotation if helpful
- **Loading states**: Skeleton screen fades, spinner animations, progress bars
- **Success/error**: Color transitions, icon animations, gentle scale pulse
- **Enable/disable**: Opacity transitions, cursor changes

### Navigation & Flow
- **Page transitions**: Crossfade between routes, shared element transitions when they truly clarify continuity
- **Tab switching**: Slide indicator, content fade, clip-path, or other fast directional cues
- **Carousel/slider**: Smooth transforms, snap points, momentum, and interruptible input
- **Scroll effects**: Parallax layers, sticky headers with state changes, scroll progress indicators

### Feedback & Guidance
- **Hover hints**: Tooltip fade-ins, cursor changes, element highlights
- **Drag & drop**: Lift effect (shadow + scale), drop zone highlights, smooth repositioning — dragging should feel like the item pops forward on the z-axis
- **Copy/paste**: Brief highlight flash on paste, "copied" confirmation
- **Focus flow**: Highlight path through form or workflow

### Depth & Elevation Motion
- Raised elements should feel like they move toward the user
- Pressed elements should feel like they move inward or downward
- Use shadow and movement together to communicate state, not just style
- Match motion emphasis to the same hierarchy logic used for color and typography

### Delight Moments
- **Empty states**: Subtle floating animations on illustrations
- **Completed actions**: Confetti, check mark flourish, success celebrations
- **Easter eggs**: Hidden interactions for discovery
- **Contextual animation**: Weather effects, time-of-day themes, seasonal touches

## Technical Implementation

Use appropriate techniques for each animation:

### Timing & Easing

**Durations by purpose:**
- **100-150ms**: Instant feedback (button press, toggle)
- **200-300ms**: State changes (hover, menu open)
- **300-500ms**: Layout changes (accordion, modal, drawer)
- **500ms max by default**: Large surface transitions that truly need it

**Easing curves (use these, not CSS defaults):**
```css
/* Recommended - natural deceleration */
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);    /* Smooth, refined */
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);   /* Slightly snappier */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);     /* Confident, decisive */
--ease-in-out-standard: cubic-bezier(0.65, 0, 0.35, 1); /* Reversible movement */
--ease-sheet-standard: cubic-bezier(0.32, 0.72, 0, 1);   /* Sheets / drawers */

/* AVOID - feel dated and tacky */
/* bounce: cubic-bezier(0.34, 1.56, 0.64, 1); */
/* elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6); */
```

**Exit animations are faster than entrances.** Use ~75% of enter duration.

### CSS Animations
```css
/* Prefer for simple, declarative animations */
- transitions for state changes
- @keyframes for complex sequences
- transform + opacity first (GPU-friendly)
- Tailwind utilities when the project already uses Tailwind
```

### JavaScript Animation
```javascript
/* Use for complex, interactive animations */
- Web Animations API for programmatic control
- Framer Motion / Motion for React
- GSAP for complex sequences
```

Default rule: if a hover, press, reveal, or reduced-motion fallback can be expressed cleanly with modern CSS or Tailwind utilities, prefer that path before escalating to Motion.

### Performance
- **GPU acceleration**: Use `transform` and `opacity`, avoid layout properties
- **will-change**: Add sparingly for known expensive animations
- **Reduce paint**: Minimize repaints, use `contain` where appropriate
- **Monitor FPS**: Ensure 60fps on target devices
- **Interaction-first**: Frequent product interactions should feel responsive even on weaker devices

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Prefer replacing large movement with short fades, highlights, blur transitions, or instant state changes instead of deleting every form of feedback.

## Useful Default Values

Use these as starting points, then tune for context:

| Value | Good default use |
| --- | --- |
| `scale(0.97)` | Button and chip press feedback |
| `scale(0.95)` | Minimum believable enter scale |
| `200ms` | Standard UI transition |
| `300ms` | Soft cap for common UI motion |
| `500ms` | Large sheet / drawer transition upper bound |
| `cubic-bezier(0.32, 0.72, 0, 1)` | Drawer / bottom-sheet easing |
| `10-16px` | Toast-stack offset starting range |
| `~100px` from viewport edge | Scroll-reveal trigger starting point |

**NEVER**:
- Use bounce or elastic easing curves by default—they draw attention to the animation itself
- Animate layout properties such as width, height, top, or left when transform or opacity would do the job
- Use long durations for routine feedback—it feels laggy fast
- Animate without purpose—every animation needs a reason
- Ignore `prefers-reduced-motion`—this is an accessibility violation
- Animate everything—animation fatigue makes interfaces feel exhausting
- Force users to wait for motion to finish before they can continue
- Use motion to paper over weak structure, unclear hierarchy, or slow data fetching
- Ship gesture logic that ignores momentum, damping, or scroll conflicts

## Verify Quality

Test animations thoroughly:

- **Smooth at 60fps**: No jank on target devices
- **Feels natural**: Easing curves feel organic, not robotic
- **Appropriate timing**: Not too fast (jarring) or too slow (laggy)
- **Immediate acknowledgment**: Inputs get visible response quickly
- **Interruptible where needed**: New intent can override old motion
- **Gesture quality**: Drag, swipe, snap, and dismiss interactions feel physically coherent
- **Reduced motion works**: Animations disabled or simplified appropriately
- **Doesn't block**: Users can interact during/after animations
- **Adds value**: Makes interface clearer or more delightful

Remember: the best UI animation usually feels inevitable, not attention-seeking. Animate with purpose, tune for responsiveness, respect accessibility, and let motion support the product instead of starring in it.