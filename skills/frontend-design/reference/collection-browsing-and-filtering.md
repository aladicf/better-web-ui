# Collection Browsing and Filtering

Use this reference when the work involves long product lists, search results, category pages, faceted browsing, filter overlays, result continuation, or any interface where users must narrow and browse a large set of entries.

If the project already uses a mature filter, faceting, or list-control library, keep its baseline primitives first. Use this reference mainly to decide which filters deserve prominence, how continuation should work, how the panel behaves in narrow layouts, and how filtering coordinates with sorting, restoration, and results.

This is not just a list-layout problem.

It is a coordination problem between:

- filtering
- sorting
- result continuation
- back-button behavior
- footer/support access
- state restoration
- performance and accessibility

## Start with the browsing job

Large collections do not all want the same UX.

Before choosing filters or a continuation pattern, identify what the user is mainly trying to do:

- **explore** — browse many related options quickly
- **evaluate** — compare a growing set more carefully
- **retrieve** — find the strongest or most relevant match quickly
- **reference** — return to a stable position later

The more goal-oriented, comparison-heavy, or recall-heavy the task is, the more structure and explicit control the interface should provide.

## Design for the comfortable range

The job of filtering is not merely to expose every available facet.

The real job is to help users reach a comfortable range of results:

- relevant enough to feel worth scanning
- small enough to feel manageable
- stable enough to compare
- bounded enough that the user can imagine finishing

Too many results create fatigue and shallow scanning.
Too few create zero-result traps and abandonment.

Good filter design helps users move from the default state to that comfortable range quickly and without friction.

## Choose the continuation pattern honestly

### Prefer `Load more` as the default for large browsable collections

`Load more` often gives the best balance between continuity and control.

Why it works well:

- the list grows instead of replacing earlier items
- users can compare across one continuous surface
- the interface creates natural pause points
- the footer and support links stay reachable
- users do not need to decide between arbitrary page numbers

When appropriate, combine `Load more` with modest background lazy-loading before the next explicit pause.

### Use pagination when stable slices matter

Pagination is a strong fit when users need:

- a clear beginning and end
- stable slices they can revisit later
- easier mental location of previously seen items
- clearer effort estimation
- stronger support for ranked or goal-oriented retrieval

This is often a better fit for:

- search results
- reference-heavy datasets
- spec-driven comparison tasks
- implementations that cannot safely preserve dynamic state

### Use infinite scroll only when browsing breadth truly matters

Infinite scroll is best for:

- lightweight discovery
- continuously updated streams
- highly related items with similar chances of being interesting
- contexts where losing exact position is a low-cost failure

Avoid it when users need to:

- compare options carefully
- find specific results quickly
- preserve precise position
- reach the footer reliably
- move between list and detail repeatedly

Infinite scroll is usually a weak fit for ranked search results and often a weak fit for product grids dominated by narrow-layout use.

## Practical thresholds by context

These are starting points, not fixed laws.

- **broad category browsing on desktop**: show a modest initial set, continue in smaller lazy-loaded batches, then interrupt with `Load more` after roughly `50–100` items
- **ranked search results**: start with a more focused set, often around `25–75` results, then use `Load more` or pagination
- **compact-layout browsing**: lower the threshold further, often around `15–30` items before an explicit continuation control

The more spec-heavy, comparison-heavy, or text-heavy the list is, the lower the threshold should usually be.

## If infinite scroll is unavoidable, add control back deliberately

Infinite scroll becomes more usable when users can recover orientation and return later.

Helpful patterns include:

- visible separation between older and newly loaded segments
- a recognizable resume marker or “continue here later” anchor
- URL updates as the user progresses through the list
- copyable links to the current position
- page-jump or dynamic-pagination helpers
- a reachable footer reveal or relocated support paths
- clear announcement of newly loaded items for assistive technology

If you cannot restore position, expose support links, and preserve wayfinding, infinite scroll is not yet ready.

## Back-button restoration is not optional

If users leave a collection to inspect an item, the back button should return them to:

- the same scroll position
- the same loaded depth
- the same filters and sort
- the same sense of place in the list

If the implementation cannot preserve that reliably, use pagination or a simpler `Load more` model instead of shipping disorienting dynamic continuation.

## Filters should reduce friction, not add it

Users often want to apply several filters in quick succession.

The interface should support that intent rather than fighting it.

### Good defaults

- expose the most useful filters first
- keep selected filters obvious
- support `Clear all` when multiple filters can accumulate quickly
- keep filters spatially stable while results update
- prefer asynchronous result updates so filters remain usable

### Avoid common friction traps

- auto-scrolling users after a single filter input
- freezing the entire UI while one change resolves
- collapsing expanded groups after every change
- resetting the user’s place in the panel after each update
- hiding unavailable options without explanation

Users should never have to wrestle the interface just to express intent.

## Long filter groups need breathing room

Avoid tiny scroll corridors that reveal only a few options at a time.

Prefer:

- showing more options at once
- expandable sections or accordions
- search within the group for long option sets
- alphabetical or grouped access when the domain benefits from it

For filters like brand, region, or long taxonomies, a search box inside the group is often more helpful than forcing repeated micro-scrolling.

## Sliders need precise fallbacks

Sliders are good for exploration speed, but poor for precision on their own.

Consult [slider UX](./slider-ux.md) when a filter depends on a single-value or dual-handle slider, a non-linear scale, histogram context, zero-results avoidance, or tap-vs-drag interaction details.

When value precision matters, also provide:

- text input fallback for exact min/max values
- steppers for granular jumps
- keyboard-accessible interaction

Do not make users fight fine motor precision just to type `215` instead of `200`.

## Keep filter and result updates asynchronous when possible

A strong pattern is to let filters remain interactive while results update independently.

This allows users to:

- select multiple filters in succession
- keep their place in the panel
- understand that results are updating without losing control

Helpful UI cues include:

- greying or soft-loading the result region only
- preserving expanded groups
- keeping filter controls active during result refresh

### Use `Apply` buttons deliberately

`Apply` is especially useful when:

- filters live in overlays
- overlay space is tight or the layout is narrow
- multiple filters are expected before closing the surface
- you can show result count feedback such as `Show 24 results`

The strongest pattern often combines asynchronous result updates with a clear `Apply` or confirm action in overlay contexts.

## Prevent layout shifts in the filter area

The filter panel should stay spatially predictable.

Good defaults:

- keep opened groups open unless the user closes them
- disable unavailable options instead of removing them unexpectedly
- explain incompatibility when that prevents confusion
- place selected-filter chips where they do not push the filter controls around

Applied filters often work better above the result list than above the filter controls, because that keeps the narrowing surface calmer.

## Narrow-layout filtering patterns

In narrow layouts, cramped split-screen filtering often creates a worst-of-both-worlds layout.

Prefer:

- a clear filter trigger with a label, not icon mystery alone
- a full-height overlay or dedicated page when the filter set is complex
- accordions rather than deep drill-down chains when possible
- a sticky bottom `Apply` action when confirmation is required
- live or previewed result counts on the action button

Avoid forcing users to reopen the same filter group repeatedly after every single choice.

## A practical decision model

### Use pagination when

- users are goal-oriented
- strong ranking matters
- position must be stable and shareable
- the implementation cannot restore state reliably

### Use `Load more` when

- users browse categories or collections
- comparison across one growing list is helpful
- you want better footer reachability and a gentler pause rhythm

### Use infinite scroll when

- the content is stream-like or discovery-led
- items are highly related and similarly relevant
- deep precision and revisitation matter less than speed and breadth

### Use stronger filtering when

- the list is outside the user’s comfortable range
- users are trying to express a specific intent quickly
- the continuation pattern alone cannot keep the list manageable

## Practical checklist

- What is the user mainly doing: exploring, evaluating, retrieving, or revisiting?
- Does the list size stay within a believable comfortable range after filtering?
- Is the continuation pattern matched to the job, not chosen by habit?
- Can users compare items without losing earlier context?
- Are footer and support links reachable?
- Does the back button restore filters, sort, loaded depth, and scroll position?
- Are filters stable while results update?
- Can long filter groups be searched or expanded comfortably?
- Do sliders include precise fallbacks?
- In narrow layouts, is filtering roomy and easy to use rather than cramped and split?
