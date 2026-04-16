# Accordion UX

Accordions are one of the most useful progressive-disclosure patterns in interface design, but they are deceptively easy to make ambiguous.

If the project already uses a mature disclosure or accordion primitive, keep its baseline semantics, keyboard behavior, and trigger/panel mechanics first. Use this reference mainly to decide whether an accordion is the right pattern, whether sections should stay open, how headers should be structured, and how the pattern fits the surrounding content.

Use them to keep the default view focused while keeping secondary detail close at hand. Do not use them as a reflex whenever the page feels crowded.

## What an accordion is good at

Accordions work best when users benefit from:

- scanning section titles first
- opening a few sections selectively
- revealing more detail without leaving the current page
- keeping secondary information nearby but not always visible

Common strong fits:

- FAQs
- shipping, returns, and policy sections
- compact navigation groups
- product-detail subsections
- settings grouped by topic
- filters grouped by category
- schedules, agendas, and dense reference lists

## When not to use one

An accordion is usually the wrong default when:

- users need to compare many sections side by side
- most sections are likely to be opened anyway
- the hidden content contains the main decision-driving information
- the content is short enough to stay visible without harming scanability
- the pattern is masking weak information architecture rather than improving it

If the right answer requires opening nearly everything, a simple grouped page often beats a stack of hidden panels.

## Treat the header as the real control

The biggest usability win is usually simple:

- make the **entire header row** the expansion target
- keep the icon, label, and surrounding space all part of the same generous hit area
- keep the target comfortably tappable; `44×44px` minimum remains a reliable baseline

Users often aim for the icon because other products have trained them to distrust the rest of the row. A full-row trigger reduces that uncertainty and makes recovery easier.

## Prefer one clear job per tap

The most fragile accordion pattern is making the same label do two jobs at once.

Avoid this by default:

- tapping the label navigates somewhere
- tapping the icon expands

That split can work, but it often creates hesitation and misfires.

The stronger default is:

- the row expands
- if the section also has a landing page, include an explicit link inside the expanded panel such as `View all` or `All settings`

If you must separate navigation from expansion, make the distinction visually unmistakable and test it. Subtle styling alone is rarely enough.

## Choose a disclosure icon that matches the motion

The icon matters less than its consistency and clarity.

Reliable defaults:

- **chevron down → chevron up** for vertical reveal/collapse
- **plus → minus** when the UI already uses plus as an expansion cue
- **right-pointing arrow** only when the reveal genuinely moves laterally or drills into a new layer

Avoid icons that already mean something else nearby. If the same plus also means bundle math, zoom, or add-to-list, it becomes semantic soup.

For most vertical accordions, a downward chevron in the collapsed state is the safest baseline.

## Keep the icon placement predictable

Common options:

- inline near the label
- aligned to the far end of the row
- placed on the start side in systems with a strong disclosure convention

The strongest general default for stacked accordions is:

- label on the start side
- icon on the end side
- enough proximity that the icon still clearly belongs to the label

Why this often wins:

- easier vertical scanning across many rows
- easier repeated tapping when title lengths vary
- less finger travel ambiguity on narrow screens

Wherever the icon lives, keep its collapse state in the **same place** as its expand state so users can immediately toggle back without hunting.

## Show state with more than icon rotation alone

The icon should change, but the row should usually help too.

Useful cues:

- slightly stronger label weight or contrast when open
- a subtle background or border shift
- visible spacing change between header and panel
- a quiet motion cue that reveals the panel direction clearly

Do not rely on color alone to show open/closed state.

## Decide whether sections stay open deliberately

Two strong models exist:

### Single-open accordion

Use when:

- the list is short
- the goal is focused reading rather than comparison
- open panels are tall enough that multiple open sections would create noise

### Multi-open accordion

Use when:

- users may compare sections
- the content acts as reference material
- filter groups, schedules, or technical details benefit from keeping context visible

If the content is long and multi-open is useful, consider `Expand all` / `Collapse all` controls.

Do not auto-collapse just because “that is what accordions do.” Choose the model that best matches the reading task.

## Do not auto-scroll users around

If a panel opens and extends below the viewport, resist the urge to jump the page automatically.

Auto-scrolling often:

- steals control
- breaks orientation
- makes comparison between nearby sections harder
- forces users to undo movement they did not ask for

The calmer default is to let the panel open in place and allow users to continue scrolling naturally.

If the content is extremely long, use stronger section framing, sticky context, or deep-linkable subsections rather than surprise movement.

## Match the accordion style to the content type

### FAQs and help content

- make the whole question row interactive
- keep answers concise at first, with links for deeper material when needed
- allow multiple open sections when users may compare nearby answers

### Navigation groups

- expansion should usually happen on the full row
- keep a direct `All …` destination inside when the parent also needs a landing page
- avoid drill-down ambiguity if the accordion lives inside a menu

### Product details and commerce sections

- keep the most decision-critical details outside the accordion when possible
- use accordions for secondary detail such as materials, shipping, care, returns, specs, and FAQs
- do not hide crucial price, availability, or variant consequences inside collapsibles only

### Filters and settings

- accordions work well for long groups and advanced options
- preserve opened groups while users are actively adjusting controls
- do not collapse sections unexpectedly during async updates

## Motion should preserve orientation, not perform theater

Accordion motion exists to explain reveal and collapse.

Good defaults:

- keep reveal/collapse motion roughly in the `200–400ms` range
- use calm easing that decelerates clearly
- let the content feel like it opens from the header, not like it teleports in

Implementation note:

- prefer layout-friendly reveal techniques such as `grid-template-rows` patterns over raw `height` animation when possible

Respect reduced motion by simplifying large spatial movement.

## Accessibility and semantics are not optional

At minimum, a usable accordion should provide:

- a real button or equally honest control for each header
- a visible focus style on the trigger row
- a clear expanded/collapsed state
- hidden content that is not focusable when collapsed
- headings and labels that remain meaningful out of context
- keyboard access without requiring pointer precision

If the panel content contains important actions, make sure the revealed area reads as one coherent unit instead of a disconnected region that appears from nowhere.

Consult [component accessibility](./component-accessibility.md) for deeper keyboard, focus, and hidden-content rules.

## Strong baseline pattern

For many product teams, a resilient default looks like this:

- use a **downward chevron** for collapsed and **upward chevron** for expanded
- place the icon on the **end side** of the row
- make the **entire row** expand and collapse
- include any parent-destination link **inside the panel** instead of splitting the trigger job
- keep the icon position fixed between states
- avoid auto-scroll on open
- choose single-open vs multi-open based on the task, not habit

That will not be perfect for every context, but it is a sturdy starting point.

## Practical checklist

- Is an accordion actually helping, or is it hiding information users need immediately?
- Does the full header row act as a generous hit target?
- Is the disclosure icon clear, consistent, and not overloaded with another meaning?
- Does the icon position stay predictable across rows and states?
- Does the control do one obvious job per tap?
- If the section also has a destination page, is that path exposed clearly inside the panel?
- Should multiple sections stay open for comparison or reference?
- Are open/closed states communicated beyond the icon alone?
- Does opening happen in place without surprise auto-scroll?
- Are motion, focus, and hidden-content behaviors accessible and calm?