# Aspect Ratio and Card Orientation

Use this reference when the work involves media-heavy layouts, card systems, browse vs evaluate surfaces, responsive list/grid design, image cropping rules, or any UI where proportion and card direction change how people scan and compare content.

Use this file when the question is not just **"should this be a card?"** but also:

- what ratio should the media use?
- should the card be vertical or horizontal?
- when should that change across contexts?
- how much variation helps rhythm without destroying scanability?

## Ratio is structure, not decoration

Aspect ratio affects more than visual polish.

It changes:

- how much content fits before truncation or scroll
- how comparable adjacent items feel in a list or grid
- whether media feels immersive, intimate, calm, or cramped
- how predictable a responsive layout feels when it stretches or compresses

Treat ratio as a product decision, not a random crop box.

## Map ratio to content intent

Different ratios communicate different expectations before a user reads a word.

Common defaults:

- **wide / landscape** (`16:9`, `3:2`, `4:3`) for context, overview, editorial breadth, product environment shots, and video
- **square** (`1:1`) for stable repeated sets, avatars, thumbnails, logos, and equal-footing comparison
- **portrait** (`3:4`, `4:5`, `9:16`) for people, editorial emphasis, storytelling, and feed-style discovery

Good ratio selection starts with the question:

- what should feel most important here — context, equality, or intimacy?

## Treat ratios as system variables

Do not let every component improvise its own media shape.

Define ratio rules by content type.

Examples:

- hero media → `16:9`
- article or listing media → `4:3`
- avatars or thumbnails → `1:1`
- people-led spotlight cards → `3:4`

This gives the system visual memory.

Users learn what each shape usually means.

## Repetition creates rhythm; variation creates hierarchy

Consistent ratios make lists easier to scan.

That consistency helps users:

- compare items quickly
- predict where text and actions will land
- build momentum in long lists or galleries

Variation is useful when it is intentional.

Use it to:

- mark featured content
- break monotony in long editorial sequences
- distinguish a different content type from the default set

Avoid mixed-ratio grids when the variation has no semantic reason.

That usually feels noisy rather than dynamic.

## Cropping logic is a UX decision

Ratio choice is inseparable from crop behavior.

Before locking a media shape, decide:

- should the media **fill** and crop, or **fit** and preserve the whole image?
- what content is allowed to disappear at the edges?
- where is the focal area or safe zone?

Examples:

- a product detail crop that hides texture or key hardware can break decision quality
- a people card that crops out the face undermines recognition and trust
- a dashboard thumbnail that letterboxes unpredictably can weaken perceived system quality

If the crop affects meaning, document the crop rule alongside the ratio.

## Responsive ratio changes should preserve meaning

The same ratio does not need to survive unchanged on every screen.

Good responsive adaptation:

- wide editorial image in wide layouts → slightly less wide in medium layouts
- landscape listing image in wide layouts → square or slightly taller in narrow layouts if that preserves legibility
- horizontal card in wide layouts → vertical stack in narrow layouts when text and actions otherwise become cramped

Do not change ratio randomly at breakpoints.

Users should still feel that the content is the same object in a different context, not a different component entirely.

## Choose card orientation by task, not habit

Card orientation is a structural decision.

It determines whether the interface favors discovery, evaluation, comparison, or conversation.

## Vertical cards are strongest for browse-first, image-led flows that must stay calm in narrow layouts

Vertical cards work well when the main job is:

- browsing many items quickly
- letting imagery lead recognition
- preserving a stable top-to-bottom rhythm
- supporting feeds, galleries, storefronts, and discovery-heavy lists

They are usually the safer default for:

- product grids
- inspiration galleries
- content feeds
- travel and property browsing
- creator or portfolio surfaces

Their main strengths:

- predictable scan pattern
- strong narrow-layout behavior
- easy image-first storytelling
- clear repetition across a grid

Their main risk:

- too many similar cards can blur together if hierarchy, text length, and media treatment are weak

## Horizontal cards are strongest for text-heavy, metadata-rich, wide-view layouts

Horizontal cards work well when the main job is:

- reading a bit more before choosing
- comparing metadata quickly
- using wider and medium-width layouts efficiently
- supporting message-like, list-like, or summary-heavy content

They are often better for:

- article lists
- job or message previews
- dashboard summaries
- admin or productivity lists
- recommendation lists where explanation matters more than imagery

Their main strengths:

- more room for hierarchy between title, metadata, and actions
- better support for dense descriptive content
- stronger use of wide viewports

Their main risk:

- awkward collapse in narrow layouts if the layout rules are not explicit

## A useful shortcut: browse vertically, evaluate horizontally

One strong system pattern is:

- **vertical** cards for discovery and browsing
- **horizontal** cards for closer inspection, comparison, or list review

That lets the same product family support different jobs without forcing one layout to solve everything.

## Keep interaction language consistent when orientation changes

If a card family supports both vertical and horizontal variants, keep these stable:

- CTA priority
- hover / focus behavior
- metadata order
- status and badge placement logic
- selected / saved / compared state treatment

Orientation can change the form.

It should not rewrite the card’s interaction grammar.

## Keep motion and geometry coherent

Scrolling, swiping, and layout direction should not fight the card’s structure.

Good defaults:

- vertical stacks usually pair naturally with vertical page flow
- horizontal rails or compare strips need especially strong discoverability and controls
- if cards change orientation at a breakpoint, preserve familiar tap targets and reading order so the interaction still feels like the same component

Do not make the user relearn a card every time the layout changes.

## Accessibility and source order still matter

Do not sacrifice semantic order to fake a prettier horizontal composition.

Good defaults:

- keep DOM order logical for reading and keyboard flow
- ensure text remains understandable without depending on the image alone
- avoid ratios that create aggressive crop loss at zoomed sizes
- test truncation and wrapping at larger text settings

If the card becomes harder to understand under zoom, keyboard traversal, or screen reader reading order, the layout logic is not finished.

## Practical decision guide

Ask these in order:

1. Is this content mainly **browsed**, **read**, or **compared**?
2. Does the media need to show **context**, **identity**, or **detail**?
3. Is the default environment mainly **narrow-layout web**, **wide-layout web**, or both?
4. Will users move through many repeated items, or focus on one at a time?
5. Does variation improve hierarchy, or only add noise?

If the answers are unclear, default to:

- one dominant ratio per content type
- one dominant orientation per card family
- explicit rules for when either changes

## Quick checks

- Does each ratio have a job, not just a look?
- Can users compare adjacent items without fighting inconsistent crops?
- Does the main card orientation match the user’s task?
- In narrow layouts, does the card still read cleanly without awkward compression?
- Do crop rules protect the important part of the media?
- When orientation or ratio changes, does the component still feel like the same family?

---

**Avoid**: arbitrary ratios, mixed-ratio grids without purpose, horizontal cards squeezed into narrow layout widths, crop rules that hide key meaning, and switching orientation so freely that the same content feels like a different component on every screen.