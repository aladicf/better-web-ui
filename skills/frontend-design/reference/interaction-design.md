# Interaction Design

## Familiarity Beats Novelty (Jakob's Law)

Users spend most of their time in other products, so common interactions should feel familiar before they feel clever.

Use established patterns for common primitives:
- navigation where users expect it
- search that behaves like search
- tabs that look and act like tabs
- filters, tables, forms, dropdowns, pagination, and settings that follow recognizable conventions

When in doubt, innovate in workflow efficiency, defaults, or information density — not by reinventing how basic controls work.

### Apply Jakob's Law by default

- Keep icons conventional unless the label makes the meaning unmistakable
- Match category expectations for things like dashboard navigation, inline table actions, destructive confirmations, and account settings
- Use native platform behavior or strong platform conventions when they already solve the problem well
- Prefer familiar patterns first, then add personality through typography, tone, color, motion, and layout

### Suspicious moves

- Custom controls for standard tasks without a strong usability reason
- Hiding common actions behind surprising gestures or non-obvious entry points
- Inventing novel icon meanings for search, settings, notifications, share, or close
- Requiring users to learn a bespoke interaction model just to complete routine tasks

## The Eight Interactive States

Every interactive element needs these states designed:

| State | When | Visual Treatment |
|-------|------|------------------|
| **Default** | At rest | Base styling |
| **Hover** | Pointer over (not touch) | Subtle lift, color shift |
| **Focus** | Keyboard/programmatic focus | Visible ring (see below) |
| **Active** | Being pressed | Pressed in, darker |
| **Disabled** | Not interactive | Reduced opacity, no pointer |
| **Loading** | Processing | Spinner, skeleton |
| **Error** | Invalid state | Red border, icon, message |
| **Success** | Completed | Green check, confirmation |

**The common miss**: Designing hover without focus, or vice versa. They're different. Keyboard users never see hover states.

## Focus Rings: Do Them Right

**Never `outline: none` without replacement.** It's an accessibility violation. Instead, use `:focus-visible` to show focus only for keyboard users:

```css
/* Hide focus ring for mouse/touch */
button:focus {
  outline: none;
}

/* Show focus ring for keyboard */
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

**Focus ring design**:
- High contrast (3:1 minimum against adjacent colors)
- 2-3px thick
- Offset from element (not inside it)
- Consistent across all interactive elements

## Target Acquisition (Fitts's Law)

The faster an interface asks users to act, the less precision it should demand.

Primary and frequent actions should be large enough, close enough, and separated enough to hit confidently.

### Practical rules

- Keep touch targets at **44x44px minimum** on touch devices
- Expand the hit area for icon buttons, close controls, tiny toggles, and row actions even if the visible glyph stays small
- Place the next likely action near the content or cursor/focus location that leads to it
- Separate destructive actions from high-frequency safe actions so slips are less likely
- In compact touch-heavy layouts, keep important actions within comfortable reach instead of pinning everything to the top edge

### Good tradeoffs

- A visually quiet icon button can still have a generous invisible hit area
- Dense data UIs can stay compact while preserving usable click targets through padding and row height
- Sticky action bars are often better than tiny floating controls when the action matters repeatedly

### Anti-patterns

- Tiny close buttons in modal corners
- Checkbox and radio layouts that require precision clicking on the control instead of the whole label row
- Multiple cramped icon actions jammed together without spacing or confirmation strategy
- Primary actions placed far from the context where the user decides to act

## Form Design: The Non-Obvious

**Placeholders aren't labels**—they disappear on input. Always use visible `<label>` elements. **Validate on blur**, not on every keystroke (exception: password strength). Place errors **below** fields with `aria-describedby` connecting them.

For deeper guidance on summaries, field-level recovery, validator overrides, and table/form error handling, use [error recovery](./error-recovery.md).

## Hidden vs Disabled vs Read-Only

Hiding and disabling both create friction when used carelessly.

Useful rule of thumb:

- **disable** when the feature or value is relevant and users should know it exists, but it is temporarily unavailable
- **read-only** when the current value matters and should stay visible, but editing is not allowed right now
- **hide** when the control is irrelevant, unsafe, permission-restricted, or never available to that user in the current context

### Good defaults

- keep important buttons, tabs, and filters stable when users expect them to persist
- explain why a disabled action is unavailable and how it can be enabled again
- avoid quietly removing expected actions if that harms learnability or trust
- if a screen contains many unavailable options, consider a way to hide those unavailable options without making the baseline layout jump unpredictably

### Practical checks

- will this user ever be able to use this control?
- does the current state still matter even if editing is unavailable?
- would removing it entirely harm discoverability, learning, or trust?

### Avoid

- disabled actions with no explanation
- auto-hiding key controls in ways that make users wonder whether the feature vanished
- layout shifts that make the interface jump when unavailable options are shown or hidden
- treating `disabled` and `read-only` as interchangeable when one still needs the value to remain legible

## Loading States

**Optimistic updates**: Show success immediately, rollback on failure. Use for low-stakes actions (likes, follows), not payments or destructive actions.

Choose loading UI based on the real wait and the real certainty:

- use small inline busy states when only one region is updating
- keep previous useful content visible when freshness matters more than blankness
- use stage-based progress when the system knows stages better than percentages
- treat skeletons as a specific tool for stable, predictable layouts — not as the default answer to every slow request

When the product has a reusable skeleton primitive, prefer **layout-faithful skeleton wrappers** over manually sizing gray rectangles for every screen. Rendering the real component with mock content inside a skeleton treatment preserves authentic wrapping, media proportions, and spacing.

If the main question is skeletons vs spinners vs streaming vs optimistic UI, use [loading feedback and perceived performance](./loading-feedback-and-perceived-performance.md).

## Design for Stress, Urgency, and Emergency Use

People do not always use products in ideal, calm conditions. They may be split-screening on older hardware, working through background noise, juggling several tools, or dealing with an urgent problem they cannot afford to get wrong.

### What stress changes

Under pressure, users often experience:

- narrower attention and poorer peripheral awareness
- worse reading comprehension and memory
- lower patience for exploration or ambiguity
- weaker fine-motor precision
- faster, more habit-driven decisions instead of careful reasoning

That means the interface should remove ambiguity, not add cleverness.

### Prefer single-tasking over interface multitasking

In stressful moments, one large complicated page is often worse than a shorter sequence of simple steps.

Good defaults:

- give users one clear next step at a time
- break big jobs into smaller sub-tasks with visible status
- use task-list or checklist patterns when the work benefits from ordered progress
- remove distracting navigation or tertiary actions when they do not help the urgent task

### Build order around the right action

When accuracy matters, ordering matters.

- put the highest-priority action first and make it easiest to find
- revise defaults, presets, and suggested actions so they reduce decision work instead of adding it
- summarize the current state clearly so users do not have to remember what already happened
- add undo, confirmation summaries, or other safeguards where a rushed mistake would be expensive

### Emergency mode is sometimes a real product need

If the product supports urgent coordination, incident handling, safety workflows, or other high-stakes situations, consider designing a dedicated emergency mode instead of pretending the normal interface is enough.

Useful patterns can include:

- instant alerting or escalation paths
- preassigned tasks or roles
- critical-contact access
- a clear communication path
- checklists or status flows that help teams coordinate quickly

### Keep just enough friction

Not every bit of friction is bad. Removing accidental friction is good; removing all effort can be harmful when users need to understand consequences or recognize value.

Prefer friction that:

- prevents irreversible mistakes
- reinforces understanding at key setup moments
- slows users down only where slowing down genuinely improves accuracy or judgment

### Test where people actually work

Stress cases are not edge cases if the product routinely appears in messy real life.

Test in conditions such as:

- noisy or interruption-heavy environments
- smaller displays and split-screen layouts
- low-motivation or low-training contexts
- peak operational times
- fallback or failure states during urgent use

## Real-Time Dashboards Are Decision Tools, Not Just Data Walls

Designing for real-time use is not the same as designing a static reporting dashboard.

The job is not merely to show the latest number. The job is to help users notice what changed, understand whether it matters, and decide what to do next under pressure.

### Design for comprehension under pressure

Users in real-time environments often have:

- limited attention
- limited working memory
- high consequence for delay or misread signals

That means the interface should reduce ambiguity before it adds richness.

Good defaults:

- prioritize the few most decision-critical metrics first
- keep the main hierarchy obvious even when values update live
- group related signals so users can scan by cluster instead of re-reading the whole screen
- use progressive disclosure instead of exposing every metric at once

### Show change clearly, not theatrically

Users often struggle more with interpreting change than with reading the absolute number.

Useful patterns:

- **delta indicators** for quick directional change
- **sparklines** when they reveal a meaningful trend beside the current KPI
- **micro-history or snapshot views** when users need a short memory aid
- **subtle motion cues** when something updates and needs to be noticed

Important restraint:

- do not use sparklines as decorative garnish; they should reveal a useful trend window
- do not animate every number just because it changed
- do not let motion compete with the hierarchy of the page

### Use motion to preserve orientation

In live dashboards, small transitions can prevent change blindness — but only when they stay calm.

Good defaults:

- value changes: brief, quiet transitions in roughly the `200–400ms` range
- lightweight interaction feedback: often closer to `100–150ms`
- list or ranking reorders: smooth transitions under roughly `300ms` so users keep spatial memory

Avoid dramatic motion, layout jumps, or constant pulsing that turns the whole dashboard into noise.

### Not all data deserves the same refresh rate

Real-time does not mean every region of the interface should update at maximum frequency.

Prefer:

- faster refresh for safety-critical or action-driving signals
- calmer refresh for supportive or background metrics
- batching or pacing updates when simultaneous changes would overwhelm the user

If everything updates at once, users lose track of what actually matters.

### Give users control when the stream gets noisy

Useful control patterns include:

- pause live updates
- snapshot / freeze current state temporarily
- reveal recent change history
- filter by severity, recency, or role relevance

These controls let users verify what happened instead of second-guessing the system from memory.

### Personalization is part of cognitive design

Different roles care about different signals.

When the product supports it, let users tailor:

- which KPIs lead
- which alerts are shown prominently
- preferred update pacing or summary level
- which views or filters open by default

Personalization is not just convenience. It reduces cognitive load by letting each role see the dashboard through its own decision lens.

## Infinite Scroll vs Load More vs Pagination

Consult [collection browsing and filtering](./collection-browsing-and-filtering.md) when the continuation pattern depends on filters, result ranking, footer reachability, back-button restoration, narrow-layout overlay behavior, or the tradeoff between exploration and careful evaluation.

Long result lists do not all want the same continuation pattern.

Before choosing one, ask what job the list is doing:

- **exploration** — browse breadth quickly
- **evaluation** — compare a growing set more carefully
- **retrieval** — find the best-ranked or most relevant match quickly
- **reference** — return to a stable position later

### Use `Load more` as the strongest default for large browsable lists

`Load more` often gives the best balance between continuity and control.

Why it works well:

- the list keeps growing instead of replacing earlier results
- users can compare items across one continuous surface
- the interface provides a natural pause point instead of encouraging endless shallow scanning
- the footer, support links, and cross-navigation remain reachable

When appropriate, combine `Load more` with background lazy-loading in smaller batches so the list feels smooth before the next explicit pause.

### Use infinite scroll sparingly

Infinite scroll is best for low-risk exploratory browsing where breadth matters more than careful comparison.

Good candidates:

- inspiration feeds
- lightweight discovery surfaces
- media streams where the cost of losing precise position is low

Avoid infinite scroll when users need to:

- evaluate ranked results carefully
- compare items across a stable stopping point
- reach the footer reliably
- jump back and forth between list and detail views
- maintain a strong sense of place in a long operational dataset

In practice, infinite scroll is usually a poor fit for search results and often a weak fit for product grids dominated by narrow-layout use.

### Use pagination when stable slices matter more than continuity

Pagination is still useful when users benefit from clear position and stable chunks.

Good candidates:

- reference-heavy or operational datasets
- situations where page position must be shared, bookmarked, or revisited reliably
- implementations that cannot yet preserve state safely for dynamic continuation

Pagination is often less fluid than `Load more`, but it is more honest than a broken dynamic list.

### Heuristics by context

These are starting points, not fixed laws:

- **broad category / collection browsing on desktop**: show a modest initial set, continue in smaller lazy-loaded batches, then interrupt with `Load more` after roughly a screenful cluster such as `50–100` items
- **ranked search results**: show a more focused set such as `25–75` results, then use `Load more` or pagination so users examine the strongest matches more carefully
- **compact-layout browsing**: lower the threshold further, often around `15–30` items before an explicit continuation control, because limited viewport depth and scrolling effort amplify fatigue quickly

The more spec-heavy and comparison-heavy the list is, the lower the threshold should usually be.

### Back button behavior is not optional

If users open an item from a dynamically extended list, the back button should return them to:

- the same scroll position
- the same loaded result depth
- the same applied filters and sort

If the implementation cannot preserve that state reliably — for example through URL state, history entries, or equivalent restoration logic — prefer pagination over a flashy but disorienting dynamic list.

## Back button UX beyond lists

Users often hesitate before using the browser's `Back` button because too many products have trained them to expect broken restoration, lost form data, or a jump to the wrong step.

### Align browser back with what users perceive as a separate page

If a view looks and feels meaningfully different from the previous state, users often expect `Back` to close it or return to the earlier state.

Useful candidates:

- large overlays or full-screen drawers
- prominent filter/result states
- multi-step flows that behave like distinct steps
- long anchor-jump or expanded states when the shift feels page-like

### Do not pollute history with every tiny state change

Not every interaction deserves a history entry.

Avoid pushing history for tiny or high-frequency state changes such as:

- carousel image changes
- small view toggles
- checkbox changes
- ordinary dropdown or tab selections that do not feel page-like

If every minor state lands in history, users have to click back through noise before reaching the page they actually meant to leave.

### Protect user work when going back risks loss

If going back may drop meaningful progress or edits:

- preserve the state when possible
- if preservation is not possible, warn clearly before the user loses work
- return to the previous step, not to the beginning of the whole process, unless the flow genuinely restarted

### Custom back buttons can feel safer than browser back

Users often trust a clearly labeled in-product `Back` control more than the browser button because they expect it to understand the flow.

Good defaults:

- provide a custom `Back` action in multi-step flows, wizards, and important forms
- make it look unmistakably interactive
- keep its behavior consistent and local to the task

### Placement rules for back vs continue

Back and continue actions should not invite accidental taps.

Good defaults:

- separate opposite-direction actions enough that slips are unlikely
- keep the primary forward action visually and spatially distinct from `Back`
- for some forms, placing `Back` above the form or farther from the submit area can be safer than grouping it tightly beside `Continue`

The exact layout can vary, but the principle is stable: opposite actions should not fight for the same motor space.

### Protect the footer and support paths

Do not make important footer content effectively unreachable by endlessly pushing it away.

If the footer contains help, shipping, returns, account, or legal/support paths, the continuation pattern must preserve access to it instead of turning it into a mirage.

## Overlays, Dialogs, Modals, and Pages

These terms overlap in conversation, but they are not interchangeable.

- **Dialog** — a generic user ↔ system conversation surface
- **Overlay** — content shown above the current page context
- **Modal** — an overlay that blocks interaction with the background
- **Non-modal** — an overlay that leaves the background available
- **Lightbox / scrim** — the dimmed background treatment that focuses attention on the foreground surface

The most important question is not “Can this fit in a modal?” but “What level of interruption actually helps here?”

### Choose a modal for short, self-contained, high-priority tasks

Modals are best when users should:

- complete one focused task
- confirm or review something risky
- avoid data loss or irreversible mistakes
- return quickly to where they were with the original page state preserved

Strong modal candidates:

- destructive confirmations
- quick focused selections
- short edit or review tasks where leaving the page would be more disruptive than the interruption itself

### Prefer non-modal surfaces by default when interruption is optional

If the user benefits from keeping background access, prefer:

- a non-modal dialog
- a side drawer
- a bottom sheet
- an anchored overlay

These usually work better when the user may need to:

- compare information
- copy and paste from the background
- keep scanning nearby records
- maintain awareness of the underlying page while acting

### Choose a page for complex or lengthy workflows

Pages are usually better for:

- multi-step processes
- long forms or deep setup
- tasks that need full attention
- workflows where comparison with the previous screen is not the main benefit

If the content needs tabs, wizard logic, or extended instructions just to fit inside a modal, that is often a sign the task wants a page or at least a drawer.

### Avoid both modals and page navigation for repeated anchored tasks

In high-frequency operational workflows, both a modal and a full page can add unnecessary friction.

Often better choices are:

- in-place editing
- expandable sections
- inline confirmations
- drawers that keep the current dataset visible

Repeated work benefits from staying anchored to the current context.

### Practical decision path

Ask these in order:

1. **Does the user need to preserve the current page context?**
2. **Is the task short and self-contained, or long and multi-step?**
3. **Will the user need to reference or copy from the underlying page while working?**
4. **Does blocking the background add real value, or just friction?**

If the answer to the last question is unclear, lean away from a modal.

### Good defaults

- use modals to slow users down only when slowing down helps
- prefer non-blocking dialogs or drawers before blocking the whole UI
- allow escape with close controls, Escape, and outside-click dismissal when the task allows it
- keep the overlay scope honest: short tasks stay short; long tasks get promoted to a better container

### Avoid

- modals for error messages
- modals for feature announcements or marketing interruptions
- modals for onboarding tours
- nested modal stacks
- auto-triggered modals unless the interruption is truly worth it

## Modals: The Inert Approach

Consult [component accessibility](./component-accessibility.md) when the hard part is not simply opening a modal, but choosing initial focus, trapping and restoring focus reliably, deciding where focus should go after insert/remove actions, or evaluating whether a modal primitive or library is actually accessible in the real browser / assistive-tech mix.

`inert` can reduce modal-focus complexity, but it does not remove the need for careful testing.

Good defaults still include:

- move focus into the modal deliberately
- keep focus inside while the modal is active
- restore focus to the opener when the modal closes unless the flow truly moved on
- test the actual primitive or library in the real browser and assistive-tech combinations your users rely on

Possible approach:

```html
<!-- When modal is open -->
<main inert>
  <!-- Content behind modal can't be focused or clicked -->
</main>
<dialog open>
  <h2>Modal Title</h2>
  <!-- Focus stays inside modal -->
</dialog>
```

The native `<dialog>` element can help, but do not assume it is the whole answer everywhere. Treat it as a candidate that still needs support and usability validation.

If you use `<dialog>`:

```javascript
const dialog = document.querySelector('dialog');
dialog.showModal();  // Opens with focus trap, closes on Escape
```

## The Popover API

For tooltips, dropdowns, and non-modal overlays, use native popovers:

```html
<button popovertarget="menu">Open menu</button>
<div id="menu" popover>
  <button>Option 1</button>
  <button>Option 2</button>
</div>
```

**Benefits**: Light-dismiss (click outside closes), proper stacking, no z-index wars, accessible by default.

## Dropdown & Overlay Positioning

Dropdowns rendered with `position: absolute` inside a container that has `overflow: hidden` or `overflow: auto` will be clipped. This is the single most common dropdown bug in generated code.

### CSS Anchor Positioning

The modern solution uses the CSS Anchor Positioning API to tether an overlay to its trigger without JavaScript:

```css
.trigger {
  anchor-name: --menu-trigger;
}

.dropdown {
  position: fixed;
  position-anchor: --menu-trigger;
  position-area: block-end span-inline-end;
  margin-top: 4px;
}

/* Flip above if no room below */
@position-try --flip-above {
  position-area: block-start span-inline-end;
  margin-bottom: 4px;
}
```

Because the dropdown uses `position: fixed`, it escapes any `overflow` clipping on ancestor elements. The `@position-try` block handles viewport edges automatically. **Browser support**: Chrome 125+, Edge 125+. Not yet in Firefox or Safari - use a fallback for those browsers.

### Popover + Anchor Combo

Combining the Popover API with anchor positioning gives you stacking, light-dismiss, accessibility, and correct positioning in one pattern:

```html
<button popovertarget="menu" class="trigger">Open</button>
<div id="menu" popover class="dropdown">
  <button>Option 1</button>
  <button>Option 2</button>
</div>
```

The `popover` attribute places the element in the **top layer**, which sits above all other content regardless of z-index or overflow. No portal needed.

### Portal / Teleport Pattern

In component frameworks, render the dropdown at the document root and position it with JavaScript:

- **React**: `createPortal(dropdown, document.body)`
- **Vue**: `<Teleport to="body">`
- **Svelte**: Use a portal library or mount to `document.body`

Calculate position from the trigger's `getBoundingClientRect()`, then apply `position: fixed` with `top` and `left` values. Recalculate on scroll and resize.

### Fixed Positioning Fallback

For browsers without anchor positioning support, `position: fixed` with manual coordinates avoids overflow clipping:

```css
.dropdown {
  position: fixed;
  /* top/left set via JS from trigger's getBoundingClientRect() */
}
```

Check viewport boundaries before rendering. If the dropdown would overflow the bottom edge, flip it above the trigger. If it would overflow the right edge, align it to the trigger's right side instead.

### Anti-Patterns

- **`position: absolute` inside `overflow: hidden`** - The dropdown will be clipped. Use `position: fixed` or the top layer instead.
- **Arbitrary z-index values** like `z-index: 9999` - Use a semantic z-index scale: `dropdown (100) -> sticky (200) -> modal-backdrop (300) -> modal (400) -> toast (500) -> tooltip (600)`.
- **Rendering dropdown markup inline** without an escape hatch from the parent's stacking context. Either use `popover` (top layer), a portal, or `position: fixed`.

## Async Combobox Stability

Async comboboxes can break selection integrity if result updates keep reindexing the list while the user is navigating it.

The common bug looks like this:

- user types
- fetch starts
- user arrows through results
- fetch lands and reorders items
- the highlighted **index** stays the same, but the **item at that index** changed

### Safer behavior

- track active option by a stable item id/value, not by index
- once the user starts navigating the menu, freeze automatic highlight updates until they select, dismiss, blur, or explicitly resume input editing
- if the same item is still present after the fetch, keep that same item highlighted
- if it is gone, clear the highlight instead of silently moving to a new occupant at the old index
- for touch-heavy lists where options can move under the finger, consider suppressing list interactions briefly after async result updates when items are newly inserted or repositioned

This is one of those tiny edge cases that makes a combobox feel either trustworthy or haunted.

## Destructive Actions: Undo > Confirm

**Undo is better than confirmation dialogs**—users click through confirmations mindlessly. Remove from UI immediately, show undo toast, actually delete after toast expires. Use confirmation only for truly irreversible actions (account deletion), high-cost actions, or batch operations.

## Notifications, Validation, and Indicators Are Not the Same Thing

Treat status communication as a family of patterns, not one interchangeable blob.

- **Validation** belongs near the field or control it refers to
- **Notifications** surface events the user may not already be watching
- **Indicators and badges** provide passive ambient state
- **Feeds and inboxes** hold lower-priority history that should not constantly interrupt

If the user is already looking at the object in question, prefer inline validation or inline status before reaching for a toast or push notification.

For the deeper guidance on notification hierarchy, fatigue, channels, settings, summaries, and activity feeds, use [status communication](./status-communication.md).

For deeper search behavior, autosuggest, zero-results recovery, and vocabulary mismatch guidance, use [search-and-findability](./search-and-findability.md).

## Use the Lowest Effective Interruption Level

Escalate from quieter to louder channels only when the message truly earns it.

Good default ladder:

1. inline status or validation
2. quiet status indicator or badge
3. toast or local UI notification
4. persistent banner or alert region
5. inbox / activity feed / digest
6. push, SMS, or other external interruption

Do not skip straight to a high-interruption pattern for routine automated chatter.

### Practical rules

- frequent system activity usually belongs in an inbox, digest, or lower-emphasis feed
- toasts are best for recent action feedback, undo, and short-lived system responses
- push notifications should be reserved for timely, user-valued, or human-relevant events
- if volume could spike, provide snooze, mute, summary, or quiet-hours paths

## Keyboard Navigation Patterns

### Roving Tabindex

For component groups (tabs, menu items, radio groups), one item is tabbable; arrow keys move within:

```html
<div role="tablist">
  <button role="tab" tabindex="0">Tab 1</button>
  <button role="tab" tabindex="-1">Tab 2</button>
  <button role="tab" tabindex="-1">Tab 3</button>
</div>
```

Arrow keys move `tabindex="0"` between items. Tab moves to the next component entirely.

### Skip Links

Provide skip links (`<a href="#main-content">Skip to main content</a>`) for keyboard users to jump past navigation. Hide them off-screen, show them on focus, and make the primary skip link the first tab stop.

Useful extensions:

- add more than one skip link when users may need to skip to the footer, workspace, or past a dense interactive region
- when the target is not normally focusable, consider `tabindex="-1"` on the target so focus can land there reliably in more browsers
- keep skip links visually obvious when focused; an invisible focused skip link defeats the point

### Programmatic Focus After UI Changes

When the UI adds, removes, opens, or dismisses something, choose the focus destination deliberately instead of letting the browser dump focus somewhere accidental.

Good defaults:

- after opening a modal, focus the heading, container, or first meaningful control
- after closing a modal, return focus to the opener unless the user has clearly moved to a new context
- after removing an item, move focus to the next safe logical element rather than another destructive control
- after adding a new field or row, move focus into the new element when that matches user intent

Avoid using programmatic focus as decorative flourish. Use it to preserve orientation and prevent accidental repeated actions.

## Gesture Discoverability

Swipe-to-delete and similar gestures are invisible. Hint at their existence:

- **Partially reveal**: Show delete button peeking from edge
- **Onboarding**: Coach marks on first use
- **Alternative**: Always provide a visible fallback (menu with "Delete")

Don't rely on gestures as the only way to perform actions.

---

**Avoid**: Removing focus indicators without alternatives. Using placeholder text as labels. Touch targets <44x44px. Generic error messages. Custom controls without ARIA/keyboard support.
