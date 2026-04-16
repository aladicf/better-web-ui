# Make snap points respond to velocity

Snap points should not be purely distance-based. Slow drags should usually settle at the nearest point, but fast flicks should be able to skip intermediate positions.

```tsx
function chooseSnapPoint(position: number, velocity: number, snapPoints: number[]) {
  if (velocity > 0.5) {
    return snapPoints[snapPoints.length - 1]
  }

  if (velocity < -0.5) {
    return snapPoints[0]
  }

  return snapPoints.reduce((closest, point) => {
    return Math.abs(point - position) < Math.abs(closest - position)
      ? point
      : closest
  })
}
```

Why this feels better:

- fast intent reads as decisive
- slow intent reads as precise
- partial-open surfaces feel closer to familiar sheet behavior on the web

Use this for drawers, sheets, and other multi-stop draggable surfaces where gesture energy should influence the final resting point.