# Resolve scroll and drag conflicts intentionally

Scrollable sheets and drawers should not start dismissing the moment the scroll position touches the top. If they do, residual scroll momentum can accidentally trigger closure.

Instead, gate drag readiness so the user has actually settled at the top before a close gesture takes over.

```tsx
const timeoutRef = useRef<number | null>(null)

function onScrollableContentScroll(container: HTMLElement, setCanDrag: (value: boolean) => void) {
  if (timeoutRef.current !== null) {
    window.clearTimeout(timeoutRef.current)
  }

  if (container.scrollTop === 0) {
    timeoutRef.current = window.setTimeout(() => {
      setCanDrag(true)
    }, 100)
  } else {
    setCanDrag(false)
  }
}
```

The goal is simple:

- scrolling should feel like scrolling
- dragging should feel like dragging
- momentum from one should not accidentally trigger the other

This matters most for edge-attached drawers, bottom sheets, and any nested scrollable overlay in touch-capable browsers.