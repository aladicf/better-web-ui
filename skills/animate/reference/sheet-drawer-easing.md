# Use sheet-style easing for drawers and edge-attached surfaces

Drawers and bottom sheets are one of the few UI patterns where a longer, more characterful motion can feel correct instead of slow.

When the goal is a sheet that feels calm, edge-attached, and grounded in web UI, start with:

- `cubic-bezier(0.32, 0.72, 0, 1)`
- roughly `450-500ms` for full sheet travel

```css
.sheet {
  transition: transform 500ms cubic-bezier(0.32, 0.72, 0, 1);
}

.sheet[data-state='open'] {
  transform: translateY(0%);
}
```

This style of curve is useful when the surface:

- moves a large distance
- feels attached to the viewport edge
- should read as a real layer, not just a menu

The curve is also associated with Emil Kowalski's drawer work and the motion taste behind [Vaul](https://github.com/emilkowalski/vaul).

Do not blindly use this curve for every sidebar or panel. It is best for sheets and drawer-like surfaces, not for ordinary tiny component transitions.