# Prefer custom easing curves for meaningful motion

Built-in CSS keywords such as `ease`, `ease-in`, and `ease-out` are fine for very small visual polish, but they often feel too generic for more noticeable UI motion.

For surfaces, overlays, and components that users actually feel, use deliberate `cubic-bezier()` curves instead.

## Good starting curves

```css
:root {
  --ease-out-standard: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out-standard: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-sheet-standard: cubic-bezier(0.32, 0.72, 0, 1);
}
```

## When built-in `ease` is still fine

The `ease` keyword is acceptable for tiny hover details such as:

- background-color changes
- border-color shifts
- subtle text-color transitions

Once motion becomes spatial, layered, or important to perceived quality, switch to a custom curve.

```css
.dialog {
  transition:
    opacity 220ms var(--ease-out-standard),
    transform 220ms var(--ease-out-standard);
}
```

Helpful references for exploring curves:

- [easings.co](https://easings.co)
- [easing.dev](https://easing.dev)

Do not treat custom curves as decoration. The goal is not novelty; it is a motion profile that better fits the job.