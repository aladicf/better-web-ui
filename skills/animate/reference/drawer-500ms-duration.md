# Use roughly 500ms for large sheet and drawer travel

Drawers and bottom sheets are one of the clearest exceptions to the ordinary under-300ms rule. Because they move large surfaces across significant screen area, they often need more time to feel natural.

For sheet-like motion, `500ms` paired with the right easing can feel more native than a rushed `200ms` slide.

```css
.drawer {
  transition: transform 500ms cubic-bezier(0.32, 0.72, 0, 1);
}
```

Why it works:

- the surface travels a large visual distance
- users expect sheet-like surface behavior rather than tiny component timing
- the easing makes the motion feel more decisive than the raw duration suggests

This does not mean every sidebar or popover should get `500ms`. Reserve it for real sheet or drawer motion.