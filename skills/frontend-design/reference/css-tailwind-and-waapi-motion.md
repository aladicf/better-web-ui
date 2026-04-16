# CSS, Tailwind, and WAAPI motion

Use this reference when the animation concept is real, but a heavy framework-specific motion library is **not automatically required**.

The goal is to keep agents honest:

- use **modern CSS** first for simple state transitions
- use **Tailwind utilities** when the project already lives in Tailwind
- use the **Web Animations API** when the effect is imperative, synchronized, or should stay smooth outside a React/Vue render loop
- use **Motion** only when the animation genuinely benefits from layout animation, state-driven orchestration, gesture APIs, motion values, or framework-specific composition

## Default implementation order

1. **CSS transitions / keyframes first**
2. **Tailwind utility composition** when the project uses Tailwind
3. **WAAPI** for imperative or synchronized animation control
4. **Motion** when the interaction complexity justifies it

Do not treat Motion as the default answer to every hover, opacity, or scale change.

## When modern CSS is usually enough

Use plain CSS for:

- hover, focus, and active state transitions
- button press scale feedback
- opacity + translate entrances and exits
- reduced-motion variants
- disclosure rotation or small icon state changes
- clip-path reveals
- shimmer and skeleton gradients
- simple stagger using custom properties
- theme, color, and shadow transitions

Example:

```css
.button {
  transition:
    transform 150ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.button:active {
  transform: scale(0.97);
}
```

## When Tailwind is usually enough

If the project already uses Tailwind, most micro-interactions can stay utility-first.

```html
<button
  class="transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97]"
>
  Save
</button>
```

Useful Tailwind patterns:

- `transition`, `transition-transform`, `transition-opacity`, `transition-colors`
- `duration-150`, `duration-200`, `duration-300`, `duration-500`
- `ease-linear`, `ease-in`, `ease-out`, or custom `ease-[cubic-bezier(...)]`
- `translate-y-*`, `scale-*`, `rotate-*`, `opacity-*`
- `motion-reduce:*` variants for reduced motion
- arbitrary values for `clip-path`, `transform-origin`, and custom timing when the design needs them

Example reduced-motion fallback:

```html
<div
  class="transition-transform transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:duration-200"
></div>
```

## When WAAPI is the better built-in option

Use the Web Animations API when you need:

- synchronized animation phases across many elements
- imperative control over `play()`, `pause()`, `cancel()`, or timeline values
- animations that should stay smooth even while other JS work is happening
- dynamic keyframes without a framework render cycle

```js
const animation = element.animate(
  [
    { transform: 'translateY(8px)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 },
  ],
  {
    duration: 200,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    fill: 'both',
  }
)
```

WAAPI is especially useful for synchronized skeleton shimmer, imperative toasts, or built-in browser animation control in vanilla JS projects.

## When Motion is actually worth it

Use Motion when the problem is not just “animate a property,” but one of these:

- layout animation between changing positions or sizes
- shared layout / `layoutId`-style transitions
- gesture-heavy drag, press, hover, and momentum interactions in framework apps
- motion values, springs, scroll-linked state, or composable variants
- React/Vue component orchestration tied directly to state and lifecycle

Motion is powerful because it scales. That does **not** mean every effect should start there.

## Concept-to-tool matrix

| Concept | Best first choice | Escalate when needed |
| --- | --- | --- |
| button press scale | CSS / Tailwind | Motion only if already in a larger gesture system |
| hover/focus polish | CSS / Tailwind | rarely needs more |
| opacity + translate entry | CSS / Tailwind | WAAPI for imperative control |
| accordion reveal | CSS grid / clip-path | Motion if part of a bigger layout choreography |
| tooltip fade / delay | CSS / JS state | Motion rarely required |
| skeleton shimmer | CSS gradient + WAAPI sync | Motion optional, not required |
| staggered list reveal | CSS vars / WAAPI | Motion variants for richer orchestration |
| drag / swipe dismissal | Motion or custom pointer logic | CSS alone usually not enough |
| shared layout transition | Motion | CSS cannot do the same job well |
| disclosure icon state | CSS rotate or SVG morph | Motion optional |

## Practical guidance for common concepts in this library

### Most concepts that are directly doable with web platform APIs

- easing and timing rules
- button press scaling
- tooltip delays
- reduced-motion alternatives
- clip-path reveals
- origin-aware transforms
- percentage-based travel
- staggered entrances
- shimmer skeletons
- dark-only `color-scheme` setup

### Concepts that often need JS or Motion

- momentum-based dismissal
- velocity-aware snap points
- drag friction and boundary damping
- pointer capture gesture systems
- shared layout transitions
- live path morphing when SVG state is not trivially CSS-addressable

Even then, prefer the smallest tool that honestly fits the job.

## Tailwind-specific note

If the project uses Tailwind, describe the implementation in Tailwind terms whenever that keeps the guidance clearer and more copyable.

Do not translate a tiny utility-first interaction into a bespoke component animation system unless the product already has one.