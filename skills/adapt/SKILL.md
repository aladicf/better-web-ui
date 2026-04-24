---
name: adapt
description: Adapt designs for narrow, medium, wide, embedded, or print web contexts without losing usability, hierarchy, or target sizing. Use when the user mentions responsive design, breakpoints, narrow layouts, viewport changes, touch-capable browsers, or cross-context adaptation.
metadata:
   argument-hint: "[target] [context (narrow, medium, wide, print...)]"
---

Adapt existing designs to work effectively across different contexts - different screen sizes, devices, platforms, or use cases.

## MANDATORY PREPARATION

Users start this workflow with `/adapt`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: target platforms/devices and usage contexts.

Consult the [responsive reference](../frontend-design/reference/responsive-design.md) for narrow-first adaptation, fluid behavior, and container-query strategy.
Consult the [spacing system](../frontend-design/reference/spacing-system.md) when adaptation problems are really grouping, rhythm, or width-discipline issues.
Consult the [cognitive load](../frontend-design/reference/cognitive-load.md) when smaller screens or constrained contexts amplify too many visible choices at once.

---

## Assess Adaptation Challenge

Understand what needs adaptation and why:

1. **Identify the source context**:
   - What was it designed for originally? (Wide-layout web? Compact responsive web?)
   - What assumptions were made? (Large screen? Mouse input? Fast connection?)
   - What works well in current context?

2. **Understand target context**:
   - **Viewport / context**: Narrow, medium, wide, TV, embedded, print?
   - **Input method**: Touch, mouse, keyboard, voice, gamepad?
   - **Screen constraints**: Size, resolution, orientation?
   - **Connection**: Fast wifi, slow 3G, offline?
   - **Usage context**: On-the-go vs desk, quick glance vs focused reading?
   - **User expectations**: What do users expect on this platform?

3. **Identify adaptation challenges**:
   - What won't fit? (Content, navigation, features)
   - What won't work? (Hover states on touch, tiny touch targets)
   - What's inappropriate? (Wide-layout patterns in narrow layouts, hover-only patterns in coarse-pointer contexts)

**CRITICAL**: Adaptation is not just scaling - it's rethinking the experience for the new context.

Treat smaller screens as real constraints, not as desktop layouts that got squeezed in the wash.

## Plan Adaptation Strategy

Create context-appropriate strategy:

### First Principles
- **Shrink the canvas first**: Start with the smaller constraint and solve the core task there
- **Design narrow layouts as their own layout**: Don't just compress wide-layout relationships proportionally
- **Preserve natural widths**: Use max-widths and content-appropriate widths instead of percentage worship
- **Let large elements shrink faster than small ones**: Relationships change across breakpoints

### Narrow-Layout Adaptation (Wide → Compact)

**Layout Strategy**:
- Single column instead of multi-column
- Vertical stacking instead of side-by-side
- Components should use the width they actually need; full-width is fine when helpful, not as a reflex
- Compact navigation instead of assuming a persistent top or side structure

**Interaction Strategy**:
- Touch targets 44x44px minimum (not hover-dependent)
- Gesture support where appropriate and discoverable
- Edge-attached or anchored overlays instead of cramped dropdowns when space is tight
- Keep repeated actions in reachable zones for compact touch-capable layouts
- Larger hit areas with more spacing

**Content Strategy**:
- Progressive disclosure (don't show everything at once)
- Prioritize primary content (secondary content in tabs/accordions)
- Shorter text (more concise)
- Larger text (16px minimum)

**Navigation Strategy**:
- Clear compact navigation entry points such as drawers, accordions, or condensed menus
- Reduce navigation complexity
- Sticky headers for context
- Back button in navigation flow

### Mid-Width Adaptation

**Layout Strategy**:
- Two-column layouts (not single or three-column)
- Side panels for secondary content
- Master-detail views (list + detail)
- Adaptive based on orientation (portrait vs landscape)

**Interaction Strategy**:
- Support both touch and pointer
- Preserve generous target sizes while allowing denser layouts than the narrowest viewport
- Side navigation drawers
- Multi-column forms where appropriate

### Wide-Layout Expansion

**Layout Strategy**:
- Multi-column layouts (use horizontal space)
- Side navigation always visible
- Multiple information panels simultaneously
- Fixed widths with max-width constraints (don't stretch to 4K)
- Use columns to rebalance narrow content instead of making forms or reading widths too wide

**Interaction Strategy**:
- Hover states for additional information
- Keyboard shortcuts
- Right-click context menus
- Drag and drop where helpful
- Multi-select with Shift/Cmd

**Content Strategy**:
- Show more information upfront (less progressive disclosure)
- Data tables with many columns
- Richer visualizations
- More detailed descriptions

### Print Adaptation (Screen → Print)

**Layout Strategy**:
- Page breaks at logical points
- Remove navigation, footer, interactive elements
- Black and white (or limited color)
- Proper margins for binding

**Content Strategy**:
- Expand shortened content (show full URLs, hidden sections)
- Add page numbers, headers, footers
- Include metadata (print date, page title)
- Convert charts to print-friendly versions

### Email Adaptation (Web → Email)

**Layout Strategy**:
- Narrow width (600px max)
- Single column only
- Inline CSS (no external stylesheets)
- Table-based layouts (for email client compatibility)

**Interaction Strategy**:
- Large, obvious CTAs (buttons not text links)
- No hover states (not reliable)
- Deep links to web app for complex interactions

## Implement Adaptations

Apply changes systematically:

### Responsive Breakpoints

Choose appropriate breakpoints:
- Narrow: 320px-767px
- Medium: 768px-1023px
- Wide: 1024px+
- Or content-driven breakpoints (where design breaks)

### Layout Adaptation Techniques

- **CSS Grid/Flexbox**: Reflow layouts automatically
- **Container Queries**: Adapt based on container, not viewport
- **`clamp()`**: Fluid sizing between min and max
- **Media queries**: Different styles for different contexts
- **Display properties**: Show/hide elements per context
- **Max-widths**: Keep forms, text blocks, and sidebars at natural widths until the viewport forces change

### Touch Adaptation

- Increase touch target sizes (44x44px minimum)
- Add more spacing between interactive elements
- Remove hover-dependent interactions
- Add touch feedback (ripples, highlights)
- Consider thumb zones (easier to reach bottom than top)

### Content Adaptation

- Use `display: none` sparingly (still downloads)
- Progressive enhancement (core content first, enhancements on larger screens)
- Lazy loading for off-screen content
- Responsive images (`srcset`, `picture` element)

### Navigation Adaptation

- Transform complex navigation into compact menus, drawers, or accordion structures on narrow layouts
- Persistent side navigation on desktop
- Breadcrumbs or compact context cues on narrower layouts

**IMPORTANT**: Test on real devices, not just browser DevTools. Device emulation is helpful but not perfect.

**NEVER**:
- Hide core functionality in narrow layouts (if it matters, make it work)
- Assume desktop = powerful device (consider accessibility, older machines)
- Use different information architecture across contexts (confusing)
- Break user expectations for responsive web behavior in a given input context
- Forget narrow landscape or medium-width window states
- Use generic breakpoints blindly (use content-driven breakpoints)
- Ignore touch on desktop (many desktop devices have touch)
- Scale desktop relationships down proportionally and call it responsive design
- Make components fluid when they don't actually benefit from scaling

## Verify Adaptations

Test thoroughly across contexts:

- **Real devices**: Test on actual touch-capable browsers, laptops/desktops, and constrained hardware where relevant
- **Different orientations**: Portrait and landscape
- **Different browsers**: Safari, Chrome, Firefox, Edge
- **Different OS**: Windows, macOS, Linux, ChromeOS, and touch-capable browser environments when relevant
- **Different input methods**: Touch, mouse, keyboard
- **Edge cases**: Very small screens (320px), very large screens (4K)
- **Slow connections**: Test on throttled network

Remember: You're a responsive web design expert. Make experiences that feel well-adapted to each web context while maintaining brand and functionality consistency. Adapt intentionally, test thoroughly.