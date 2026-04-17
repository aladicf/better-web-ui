# Component Anatomy

Use this reference when a project needs UI components built or refined **without** relying on a mature component library for the primitive layer.

This is the fallback doctrine for:

- plain HTML / CSS / JavaScript projects
- Tailwind projects without a component library
- custom in-house primitives
- framework projects where the team is intentionally building their own component layer

If the project already uses `shadcn/ui`, Radix-based compositions, Base UI, Nuxt UI, `shadcn-vue`, `shadcn-svelte`, Angular Material, or another mature component system, **match and extend that existing system first**.

Do not use this reference as an excuse to second-guess strong upstream primitives that already solve accessibility, anatomy, and interaction patterns well.

The more focused component-pattern references in this folder follow the same rule. They are strongest when teams are building or heavily composing the primitive layer themselves; when a mature library already owns the primitive, use those references mainly for pattern choice, content structure, states, density, responsive use, and surrounding workflow decisions rather than for fighting the library's base anatomy.

## General rule for component anatomy

Every component should be clear about:

- what parts it contains
- what the primary interaction target is
- how states are communicated
- how it scales across common sizes
- what should stay consistent across the product

When in doubt:

- preserve the most familiar interaction pattern
- keep the hit target generous
- make the meaning readable without decoration
- let spacing, hierarchy, and state do more work than novelty

## Component system overview

Components are the building blocks of a product interface.

Some are tiny and repetitive, like buttons, badges, and checkboxes. Others are larger assemblies such as cards, tables, lists, and tab systems.

Good component work has to balance four things at once:

- **usability** — how easy the component is to understand and act on
- **aesthetics** — how clearly and cohesively it fits the visual system
- **functionality** — how it behaves across states, data conditions, and layouts
- **accessibility** — how reliably people can use it across devices, inputs, and abilities

This reference does not try to freeze every component in existence. It focuses on the kinds of primitive building blocks teams often need when they are not inheriting a mature component library, including common custom primitives like comboboxes and skeleton placeholders.

## Form architecture for new projects

When a supported project is new and the form architecture is still open, prefer **TanStack Form** as the default form-state layer for:

- React
- Vue
- Angular
- Solid
- Svelte

Why it is a strong default from the official docs:

- headless and composable
- first-class TypeScript support
- framework adapters across the ecosystems this library already supports
- designed for scalability, composition, and long-term maintainability
- strong validation, submission, and field-state primitives without forcing a visual system

Practical rule:

- if the project already uses another form stack, preserve it first
- if the project is new and no stronger form preference exists, TanStack Form is the default recommendation

Reference:

- [TanStack Form overview](https://tanstack.com/form/latest/docs/overview)
- [Supported frameworks](https://tanstack.com/form/latest/docs/framework)
- [React quick start](https://tanstack.com/form/latest/docs/framework/react/quick-start)

## Table architecture for new projects

When a supported project is new and the table or data-grid architecture is still open, prefer **TanStack Table** as the default table-state layer for:

- React
- Vue
- Angular
- Solid
- Svelte
- other JS/TS environments where a headless table core is the right fit

Why it is a strong default from the official docs:

- headless and fully markup/style agnostic
- designed for powerful tables and data grids
- full control over rendering and styling
- smaller and more portable than heavyweight component-table solutions when custom UI control matters
- built to cover sorting, filtering, pagination, column sizing, selection, grouping, and more through composable features

Practical rule:

- if the project already uses another table/grid stack, preserve it first
- if the project is new and no stronger table preference exists, TanStack Table is the default recommendation

Reference:

- [TanStack Table introduction](https://tanstack.com/table/latest/docs/introduction)

## Tables and Data Tables

Tables display structured information across rows and columns.

Consult [feature comparison UX](./feature-comparison-ux.md) when the table is a high-consideration side-by-side product comparison rather than an ordinary data table, especially when sticky product headers, difference/similarity modes, shortlist management, or responsive compare behavior matter.
Consult [complex table UX](./complex-table-ux.md) when the table becomes a dense operational surface with editable cells, pinned columns, header filters, command toolbars, row selection, validation, or desktop-first enterprise workflows.

Use them when people need to compare records, scan repeated fields, sort, filter, resize, paginate, or select many structured items efficiently.

### Typical parts

- **search or filtering controls** *(when relevant)*
- **header row**
- **sorting affordances**
- **columns**
- **rows**
- **selection controls** *(when bulk actions matter)*
- **pagination or controlled navigation**

### Practical sizing

- default rows often work well around `48px`
- compact rows can be tighter when the data density genuinely demands it
- cell padding should leave enough horizontal room for scanning instead of compressing values into visual noise
- expandable rows need enough extra vertical space that the expanded content reads as a continuation instead of a collision

### Text and alignment

- keep header text slightly more emphatic than row text
- keep body text comfortably readable instead of shrinking it to fit more columns artificially
- left-align most text content for scanability
- right-align numeric columns for comparison

### Good defaults

- keep strong contrast between header region and row content
- if a sticky header sits above horizontally scrollable content — especially in TanStack Table + TanStack Virtual grids — give both the sticky header container and every header cell an opaque surface background instead of relying on the row background alone or on pinned-column cells only
- use row hover and selected states that are clear without becoming gaudy
- group related information in one column when fragmentation would weaken scanability
- allow resizing when users manage large information sets and column flexibility matters
- keep headers visible during deep vertical scroll when the table is long enough for context loss to become a problem
- pin the first column when horizontal scrolling would otherwise destroy row context and the data density justifies it

### Avoid

- cluttering tables with unnecessary borders
- letting sticky headers stay partially transparent during horizontal scroll; in wide or virtualized grids, body cells can bleed through unless the header rowgroup and each header cell both paint a real background
- forcing full long strings into narrow columns when truncation plus a reveal pattern would scan better
- splitting tightly related data across multiple columns when one richer column would be easier to read
- defaulting to infinite scroll for dense operational data where pagination gives better orientation and control

### Handling long content

- truncate cleanly when a value would blow up the column
- provide a reveal path for the full value when truncation hides meaning
- keep column widths driven by data and usability, not by a naive desire to fit everything at once

### Selection and interaction

- selected rows need a clear visual distinction
- row checkboxes should only appear when bulk selection actually enables something useful
- sorting and filtering should exist to reduce access time, not as decorative “enterprise” garnish

### Error handling in tables

- keep row-level errors in or immediately adjacent to the affected row when possible
- if an error explanation is long, allow the row to expand rather than pushing the message into a distant global container
- if one error affects many rows, pair row highlighting with one higher-level explanation so users understand the pattern quickly

### Compact-layout adaptation

Do not try to force a wide desktop table onto a narrow screen unchanged.

For many narrow-layout cases, the better move is to transform rows into cards or compact item summaries that show only the most important fields.

Keep:

- the title / identifying field
- one or two key secondary facts
- the action or status users care about most

Drop or defer:

- low-priority columns
- wide comparison-only fields that do not help in narrow layouts

### Practical rule

If users are comparing many rows precisely, a table is usually right.

If users mostly need to inspect one item at a time on a small screen, a cardified or summary view is often clearer.

Consult [text hierarchy and readability](./text-hierarchy-and-readability.md) for numeric alignment, [spacing system](./spacing-system.md) for row/cell rhythm, and [interaction design](./interaction-design.md) when table controls, bulk actions, and filtering behaviors need stronger structure.

If the table, list, or card system becomes performance-sensitive because wrapped text height determines row or item layout, consult [text layout prediction](./text-layout-prediction.md) before defaulting to repeated DOM measurement.

## Iconography

Icons are visual symbols meant to be read quickly.

They work best when they are simple, familiar, and consistent.

### Good defaults

- build or select icons on a square `1:1` canvas
- start from a common working size around `24px`, then scale up or down consistently
- keep icon styles consistent within a set — outline with outline, solid with solid, two-tone with two-tone unless state meaning justifies a change
- use SVG or icon fonts instead of bitmap images so the result stays sharp and scalable
- when icons sit beside text, keep their color aligned with the text by default and align them optically with the label

### Practical sizing notes

- a few deliberate sizes usually beat a long list of arbitrary ones
- icons often need to feel visually related to nearby text; sizing with `em` can help when the icon should track type size
- as icons get smaller, simplify them — detail that works at large sizes often collapses at small sizes

### Interaction and accessibility

- a small visible icon still needs a generous touch target
- icon-only controls should have accessible naming and, when possible, visible labels or tooltips for extra clarity
- do not replace well-understood platform metaphors with clever but unfamiliar shapes

### Avoid

- mixing unrelated icon styles in one region
- scaling tiny icons up until they become chunky
- shrinking detailed icons until they turn mushy
- relying on PNG icons where scalable vectors are expected

Consult [image treatment](./image-treatment.md) for icon scaling discipline and [interaction design](./interaction-design.md) for icon-button hit targets and tooltip behavior.

## Buttons

A button triggers an action.

Its treatment should reflect the importance of the action, not just visual taste.

### Common roles

- **primary** — the main action the user should notice first
- **secondary** — a real alternative that should stay visible but quieter
- **tertiary** — low-priority or infrequent actions, often link-like or minimally framed

### Good defaults

- give buttons enough padding that they feel easy to hit and easy to read
- keep text and padding scaling together so the component still feels balanced when sizes change
- using `em`-based padding inside the button can work well because the shape grows naturally with the label size
- maintain strong contrast between the button and its background
- keep primary buttons visually dominant, with secondary and tertiary treatments clearly quieter
- keep button text at a comfortably readable size; below roughly `14px` the control usually starts to feel cramped and fragile

### Practical sizing notes

- padding that scales with the text size can work well, especially when the button needs to resize across contexts
- a simple starting point is roughly more horizontal padding than vertical padding so the label has room to breathe without making the control comically tall

### Avoid

- shrinking buttons until they are awkward in compact touch-capable layouts or fiddly in precise pointer contexts
- making primary, secondary, and tertiary actions so similar that priority becomes guesswork
- using color alone to separate action importance when size, weight, spacing, and placement should help too

Consult [action hierarchy](./action-hierarchy.md) when deciding which button should lead, recede, disappear, or wait until a confirmation step.
Consult [disabled buttons UX](./disabled-buttons-ux.md) when deciding whether a primary action should be disabled, stay enabled and explain errors on submit, or temporarily lock during in-flight processing.

## Cards

A card is a container for one distinct unit of information, often with optional media, support text, and actions.

### Typical parts

- **container**
- **header text** *(optional)*
- **subhead or metadata** *(optional)*
- **supporting text** *(optional)*
- **media** *(optional)*
- **thumbnail / avatar / logo** *(optional)*
- **actions** *(optional)*

### Good defaults

- keep internal spacing generous and consistent
- use subtle elevation if the card genuinely needs separation from its background
- preserve clear hierarchy between headline, supporting text, metadata, and actions
- keep text left-aligned unless there is a strong compositional reason not to
- adjust layout by breakpoint instead of forcing the same arrangement everywhere
- choose a dominant orientation for the card family instead of letting every card improvise between stacked and side-by-side layouts
- use vertical cards for browse-first, image-led discovery flows unless the content clearly needs denser text treatment
- use horizontal cards for wider, text-heavy, metadata-rich lists where users need more evaluation context per item
- define media ratios by card type so repeated cards feel comparable and calm
- when media and text need to coexist on larger screens, moving media to the side can work well if the crop still preserves the important content
- if orientation changes by breakpoint or content type, keep the metadata order, action logic, and interaction cues recognizably consistent
- if a card has no obvious internal CTA and the whole thing behaves like one destination, making the whole card the primary action can be clearer than scattering tiny links inside it
- keep cards in a single readable column internally unless the content truly benefits from more complex structure

### Avoid

- dumping large amounts of dense information into one card until it becomes a miniature page
- using dark, obvious shadows that compete with the content
- cluttering the card with too many nested actions, chips, and decorative treatments
- using exactly the same radius on every inner element and outer container if it makes the card feel blobby or undifferentiated

### Important restraint

Cards are useful, but they are not the default answer to layout.

If spacing, grouping, and alignment would solve the problem more cleanly, prefer that.

Consult [spatial design](./spatial-design.md) and [surface separation](./surface-separation.md) when deciding whether a card should exist at all.
Consult [aspect ratio and card orientation](./aspect-ratio-and-card-orientation.md) when the card family depends on media ratios, browse-vs-evaluate layout shifts, vertical-vs-horizontal decisions, or responsive orientation changes.

## KPI Cards / Dashboard Widgets

KPI cards and dashboard widgets summarize the state of a system, highlight change, and help users decide whether deeper investigation is needed.

They should behave like decision aids, not decorative tiles.

### Typical parts

- **metric label**
- **current value**
- **delta or directional indicator** *(when change matters)*
- **trend sparkline** *(only when it adds real context)*
- **freshness or sync state** *(when timing matters)*
- **drill-down or next-step affordance** *(optional)*

### Good defaults

- keep the current value visually dominant over supporting metadata
- place the most critical KPI cards in the strongest scan path, often near the top-left or first row
- pair a number with its change signal when the decision depends on movement, not just the absolute value
- keep support signals like freshness, units, or comparison windows visible but quieter than the value itself
- use consistent card anatomy so users can compare widgets quickly

### Sparklines are context, not decoration

Sparklines work well when they:

- sit beside a key metric
- show a focused time window
- highlight the current or latest point when that matters
- help compare multiple rows or cards quickly

They fail when they are added only to make the card feel "more dashboard-y."

### Change signaling

- use directional indicators and deltas for rapid scanability
- pair color with iconography or shape so meaning does not depend on color alone
- use brief, quiet transitions when values change
- avoid constant flashing, bouncing, or repeated emphasis on already-seen updates

### Reliability cues

If the widget depends on live or near-live data, include cues such as:

- `Live`
- `Updated 1m ago`
- `Paused`
- `Reconnecting…`

These cues should support trust without overpowering the metric itself.

### Avoid

- stuffing one card with too many competing stats
- using equal visual weight for every widget in a dense dashboard
- making the card restyle itself so dramatically on every update that users lose orientation
- hiding staleness or failed sync state when the timing of the metric matters

## Checkboxes

A checkbox lets users select one or more items from a set.

### Typical parts

- **group label** *(when the set needs a title)*
- **checkbox control**
- **checkbox label**

### States

- **unchecked**
- **checked**
- **indeterminate** — especially useful for parent categories when only some child items are selected

### Good defaults

- make the label and checkbox read as one click/tap target whenever possible
- keep labels written positively and clearly
- keep checkbox labels aligned consistently and easy to scan in a vertical list
- increase the hit target in compact touch-capable layouts so the control feels forgiving instead of pixel-hunt-y
- use the indeterminate state intentionally where it clarifies partial selection

### Avoid

- placing many unrelated checkbox items on the same line until scanning becomes ambiguous
- separating labels so far from the control that the relationship weakens
- writing labels in confusing inverted phrasing such as "enable to turn off"

### Helpful adaptation

In touch-heavy or token-like interfaces, a checkbox can sometimes become a check-token or chip-style control if that makes the selection target clearer and easier to hit.

Consult [interaction design](./interaction-design.md) when deciding how large the target should be and how grouped controls should behave with keyboard and touch input.

## Dividers

A divider separates adjacent content or clarifies that two areas are related but distinct.

### Common forms

- a single rule line
- negative space only
- a subtle color shift
- a restrained shadow or seam

### Good defaults

- use dividers where they actually help the user parse groups
- leave breathing room around the divider so it separates instead of slicing content awkwardly
- reduce contrast so the divider supports content rather than competing with it

### Avoid

- adding dividers reflexively when spacing alone would be cleaner
- clustering lots of content without any grouping cues at all
- placing a divider where there is nothing meaningfully distinct below it

### Practical rule

If the ordinary gap between related items is `x`, a divider often needs noticeably more surrounding space than `x` to communicate a real break.

Consult [surface separation](./surface-separation.md) and [spacing system](./spacing-system.md) when deciding whether the right separator is a line, a bigger gap, a background shift, or no divider at all.

## Choosing Among List Selection Patterns

Not every list pattern is the same, and calling everything a "dropdown" makes it harder for designers, engineers, and users to align on behavior.

Useful shorthand:

- **dropdown / select** — hidden list, choose one option
- **combobox** — type to filter, then choose one option
- **multiselect** — filter or browse, then choose many options
- **listbox** — options are visible by default, often scrollable
- **dual listbox / transfer list** — move items between an available list and a chosen list

### Never hide frequently used options by default

If users rely on the same few choices constantly, burying them inside a hidden list creates friction for very little gain.

Better defaults:

- show the most common `2–3` choices as chips, radios, buttons, or checkboxes when space allows
- keep a safe, obvious default selected only when it truly helps and does not create silent mistakes
- reveal the long tail through a dropdown, combobox, or expanded list only when the full set would otherwise become unwieldy

### Quick choosing rules

- for very small **single-select** sets, prefer **radio buttons** or a **segmented control**
- for very small **multi-select** sets, prefer **checkboxes**
- use a **dropdown / select** when the list can stay hidden without harming decision quality
- use a **combobox** when typing is faster than scrolling a long list
- use a **multiselect** when users must choose many items from a larger set and need search or filtering support
- use a **listbox** when seeing many options at once improves comprehension, comparison, or speed
- use a **dual listbox** when users must build and review a chosen set side by side with the source set, especially for assignment or bulk curation tasks

### Keyboard and affordance discipline

All of these patterns should support keyboard navigation cleanly once users start interacting with the list.

Also keep the affordance honest:

- non-interactive labels should not look like clickable buttons
- interactive rows should not look like dead static text

## Dropdowns / Selects

A dropdown presents a list of options that the user can reveal, inspect, and choose from.

### Typical parts

- **label**
- **trigger / container**
- **placeholder or selected value**
- **arrow / disclosure icon**
- **options list**
- **error message** *(when validation fails)*

### Good defaults

- use a select-like pattern when the choice set is large enough that radio buttons would become cluttered
- keep option ordering alphabetical or otherwise logically predictable
- keep the closed trigger height comfortably tappable
- keep error state treatment clear with border, message, and optionally an icon
- keep the placeholder instructional and neutral when no value is selected

### Avoid

- preselecting a default option when that risks users submitting something they did not really choose
- hiding tiny option sets inside a dropdown when a radio group or segmented control would be clearer
- forcing users through long scrolling lists when a type-ahead or searchable combobox would reduce effort

### Practical threshold

For very small option sets, a dropdown often adds more friction than value. Once the option count grows enough to make always-visible choices unwieldy, dropdowns become more reasonable.

Consult [interaction design](./interaction-design.md) for overlay behavior, top-layer patterns, positioning, and keyboard expectations.

## Variant Selectors / Option Pickers

Variant selectors help users choose among required or optional configurations such as size, color, finish, capacity, plan level, or bundle.

The right control depends on what kind of difference the user is evaluating.

### Typical parts

- **option label**
- **selection control**
- **selected state**
- **availability state**
- **help link or guide** *(when the attribute is ambiguous)*
- **dependent UI updates** *(price, media, copy, availability, delivery timing, etc.)*

### Match the control to the attribute

- use **swatches, thumbnails, or image buttons** for visual attributes such as color, finish, or pattern
- use **chips, segmented buttons, or boxed options** for short textual sets such as size, storage tier, or simple plan choices
- use a **dropdown or richer listbox** when labels vary in length, when the option count is large, or when each option carries extra metadata like dimensions or pricing

Do not force every variant through the same generic control just because the implementation is convenient.

### Good defaults

- make required choices obvious before the main action such as `Add to cart`, `Continue`, or `Save`
- update dependent UI quickly when the selection changes so the user can see what the choice affects
- provide a clear guide for ambiguous attributes such as sizing, capacity rules, or fit recommendations
- make the selected state unmistakable without relying on color alone
- keep the interaction lightweight; choosing an option should feel faster than filling a form field

### Availability should be visible early

Unavailable options should be visible and clearly disabled rather than silently removed or revealed only after the user has invested effort.

That means:

- disable or strike unavailable options clearly
- explain scarcity or incompatibility when that reduces confusion
- avoid letting users fall in love with a combination only to reject it at the final step

### Avoid

- one generic dropdown for every kind of option
- unlabeled swatches that force users to guess what they selected
- hiding out-of-stock or incompatible options until late in the flow
- requiring users to open and close long menus repeatedly for a tiny set of visual choices

## Filters / Facets / Filter Bars

Filters help users reduce a large result set into a more comfortable, more relevant range.

Consult [collection browsing and filtering](./collection-browsing-and-filtering.md) for deeper guidance on comfortable-range decisions, async filter/result coordination, narrow-layout filter surfaces, and continuation-pattern tradeoffs.

That means the job is not merely "show all possible filters." The job is to help users arrive at a manageable set of relevant results quickly and without friction.

### Typical parts

- **filter trigger or bar**
- **group labels**
- **filter options**
- **selected state**
- **clear / reset path**
- **apply action** *(when the pattern is not fully auto-applied)*
- **result count feedback** *(when available)*

### Good defaults

- expose the most useful filters first instead of hiding everything equally
- keep selected filters obvious through chips, pills, or in-group state treatment
- support `Clear all` when multiple filters can accumulate quickly
- keep the filter UI stable while results update
- prefer asynchronous result updates so filters remain available while new results stream in

### Long filter groups

Avoid tiny scroll corridors that reveal only a few options at a time.

Better defaults:

- show more options at once when possible
- use expandable sections / accordions for long groups
- add search within the group when the option count is large
- provide alphabetical or grouped access when the domain benefits from it

### Sliders need precise fallbacks

Sliders are good for exploration, but poor for precision on their own.

Consult [slider UX](./slider-ux.md) when the work depends on scale design, tick marks, histogram-backed ranges, dual-handle behavior, inline value editing, or deciding whether a slider belongs here at all.

When the value matters precisely, also provide:

- text input fallback for exact values
- stepper controls for granular jumps
- keyboard-accessible interaction

Use sliders for exploration speed, not as the only precision tool.

### Avoid synchronous friction traps

Do not make the user fight the filter UI while trying to narrow results.

Avoid:

- auto-scrolling users after a single input
- freezing the entire UI while one filter resolves
- collapsing expanded groups after every change
- resetting the user's place in the panel after each update

Users often want to apply several filters in quick succession. The interface should support that intent.

### Prevent layout shifts

The filtering area should stay spatially predictable.

Good defaults:

- keep expanded sections expanded unless the user closes them
- disable unavailable options instead of hiding them unexpectedly
- keep selected-filter chips outside the area that would push the filter controls around when they grow
- consider showing selected filters above the results rather than above the entire panel when that keeps the panel steadier

### Apply buttons and result counts

An `Apply` button can still be helpful when it gives users confidence about scope.

Useful pattern:

- show the expected result count on the button when the system can calculate it

Examples:

- `Show 24 results`
- `Apply filters (8)`

This helps users understand whether they are moving toward or away from a comfortable result range.

### Compact-layout adaptation

In narrow layouts, a larger overlay or full-page filter surface is often more reliable than a cramped split-screen or narrow side panel.

Good defaults:

- keep the filter trigger easy to reach
- consider a full-height overlay when the filter set is complex
- keep the `Apply` action sticky near the bottom when manual confirmation is required
- show the live result count on the button when possible

### Avoid

- tiny internal scroll panes for long option groups
- making users wait after every single toggle if they clearly want to continue filtering
- hiding unavailable options with no explanation
- making the filter panel jump around as the result state changes
- using a filter icon alone when a clearer label or visible bar would reduce ambiguity

Consult [interaction design](./interaction-design.md) for overlay behavior and [search-and-findability](./search-and-findability.md) when filters interact with search results or query-driven discovery.

## Result Lists / Collection Browsing

Result lists help users browse a collection, compare options, and decide whether to continue exploring or narrow the set further.

Consult [collection browsing and filtering](./collection-browsing-and-filtering.md) for deeper guidance on `Load more` thresholds, infinite-scroll guardrails, back-button restoration, footer access, and browse-vs-search continuation choices.

### Typical parts

- **result count or scope label**
- **sort control**
- **filter access**
- **active filter summary** *(when relevant)*
- **result cards / rows**
- **continuation control** such as `Load more` or pagination

### Good defaults

- keep sort and filter controls close to the results they affect
- prefer stable controls above the result area when that preserves more space and translates better to narrow layouts
- keep the current scope visible so users know whether they are browsing a category, a search result, or a narrowed subset
- let the list grow in a way that still preserves orientation and comparison

### Choose the continuation pattern honestly

- prefer **`Load more`** for large browsable collections when comparing items across one growing list is helpful
- combine `Load more` with smaller lazy-loaded batches when breadth matters and the implementation can stay stable
- use **pagination** when users need clearer positional anchors, stable slices, or more reliable revisitation
- reserve **infinite scroll** for lighter-weight exploration where deep orientation and footer access matter less

If the list is ranked by relevance, slow users down slightly with a more deliberate continuation pattern rather than pushing them into endless shallow scanning.

### Compact-layout adaptation

- lower the amount shown before the continuation control appears
- keep the next-step control large and obvious
- avoid cramped split-screen patterns that steal too much room from the results themselves

### Avoid

- continuation patterns that make the footer unreachable
- replacing the entire list when users expected to keep comparing earlier items
- dynamic loading that breaks back-button return, loaded depth, or scroll restoration
- treating category browsing, search retrieval, and feed exploration as the same interaction problem

## Comboboxes

A combobox combines text input with a filtered or suggested options list.

Use it when the option set is large enough that users benefit from typing, filtering, or searching instead of scrolling a long menu.

### Typical parts

- **label**
- **input / trigger field**
- **current text value**
- **disclosure or loading indicator** *(optional but often helpful)*
- **results list**
- **highlighted option state**
- **empty / loading / error state**

### Good defaults

- keep the input visually identifiable as an input first, not just as a button
- make the results list feel attached to the field and easy to scan with both pointer and keyboard
- use stable labels and grouping when result categories matter
- make loading and no-results states explicit rather than leaving dead blank space
- for longer lists, open the list on click/tap as well as on typing so users can discover available options without already knowing the vocabulary
- if a disclosure indicator is used, keep it quiet; the input value and results should do more work than the icon

### Async result stability

Async comboboxes need stronger stability rules than ordinary selects.

- track highlighted options by a **stable item id/value**, not by array index
- once the user has started navigating the list, **freeze menu navigation state** until they select an item, dismiss the list, blur, or explicitly return to editing the input
- if a fetch lands and the **same item still exists**, keep that same item highlighted
- if the highlighted item disappears, clear the highlight or return focus emphasis to the input—do **not** silently move the highlight to whichever item inherited the old index
- on touch-heavy lists, consider suppressing interactions on newly moved items for roughly **300ms** after an async refresh if reordering could otherwise cause accidental taps on the wrong option

### Avoid

- auto-rehighlighting by index after async result churn
- snapping highlight to the first item while the user is already arrowing through the list
- mixing pointer and keyboard selection state so aggressively that the user loses track of which item is actually active
- rotating a generic chevron just because every library demo does it

### Refined disclosure motion

When the disclosure indicator deserves animation, a small SVG path morph often feels smoother and more intentional than simply rotating a chevron glyph.

Consult [interaction design](./interaction-design.md) for keyboard behavior and async interaction constraints.

## Multiselects

A multiselect lets users choose multiple items from one option set, often with check states, chips, or a selected-items summary.

### Typical parts

- **label**
- **trigger or input**
- **available options list**
- **selected state**
- **selected items summary or chips**
- **clear / remove controls**
- **select all / clear all** *(optional but often helpful)*

### Good defaults

- make it obvious that multiple selection is allowed
- keep selected items visible enough that users do not lose track of what they already chose
- for larger lists, support filtering or search instead of forcing long scrolling
- for lists with roughly **7+ options**, consider `Select all` and `Clear all` when bulk actions are common
- keep removing a selected item as lightweight as adding one

### Avoid

- hiding the selected set so thoroughly that users must reopen the control just to remember what is active
- forcing users to choose many items from a long list without search, grouping, or bulk actions
- making every chip removable but offering no faster way to clear a large selection

## Listboxes

A listbox keeps options visible by default instead of hiding them behind a trigger.

Use it when immediate visibility improves speed, comparison, or confidence.

### Good defaults

- use listboxes when users benefit from seeing many options at once, especially for repeated filtering or operational selection work
- keep rows scannable and consistent so the eye can move quickly
- use grouping, section labels, or sticky headers when the option set is long or heterogeneous
- allow the selected state to stay obvious without depending on color alone

### Practical fit

Listboxes are often a better fit than dropdowns when:

- users choose from the same pool repeatedly
- the option set benefits from side-by-side comparison
- hiding the set would slow users down more than the visible list costs in space

### Avoid

- using a listbox for tiny option sets where radios or checkboxes would be simpler
- making the visible list so cramped that users can only inspect a few options at a time through a tiny internal scroll corridor

## Dual Listboxes / Transfer Lists

A dual listbox lets users move items between an available list and a chosen list.

It is especially useful for bulk selection, assignments, permissions, responsibilities, roles, or any task where users need to review the final chosen set before committing.

### Good defaults

- label both sides clearly so users always know which list is source and which is chosen
- support search or filtering on one or both sides when the lists are large
- make move actions explicit and keyboard accessible
- keep the final chosen set reviewable side by side with the source list
- prefer explicit move controls over drag-and-drop as the primary interaction

### Why this pattern helps

Dual listboxes are often faster and more accurate than drag-and-drop for structured assignment work because they reduce pointer precision demands and keep the final state visible.

### Avoid

- making drag-and-drop the only way to move items
- hiding the chosen set behind a summary count when review accuracy matters
- using this pattern for tiny sets where checkboxes or a simpler multiselect would do

## Form Inputs

Text inputs handle short, structured user entry.

### Core parts

- **label**
- **input field**
- **helper text** *(optional but often helpful)*

The best form fields usually combine all three clearly instead of relying on one element to do every job.

### Practical sizes

Most products only need a few input heights.

A workable default set is:

- **small** — around `32px`
- **default** — around `40px`
- **large** — around `48px`

Spacing guidance:

- keep label-to-input spacing tighter than group-to-group spacing
- keep helper text closer to its field than to the next field
- a `2:1` feeling between label gap and helper gap often works well

### Hover and focus states

Use restrained state changes.

- subtle tint, shade, or outline shifts are enough
- avoid hover/focus treatments that dramatically change the control's dimensions or create layout jump
- box-shadow can be a useful focus treatment because it is flexible and does not reflow the layout

### Width and placeholders

- size the field proportionally to the expected content where practical
- do not make tiny-value fields absurdly wide if it weakens orientation once the placeholder disappears
- placeholders should assist, not replace labels

### Styling guidance

- inputs should remain visually distinct from buttons
- subtle shaded backgrounds can work better than busy borders when the system supports them
- placeholder text should stay quieter than real input text
- if icons are used inside inputs, use them consistently across that family instead of randomly

### States

- **default** — ready for input
- **focus** — clearly active and typable
- **valid** — visibly successful when that state matters
- **invalid** — visibly incorrect with explanatory helper text
- **disabled** — readable but non-interactive

### Error and guidance placement

- for many fields, nearby below-field help still works well
- when virtual keyboards, browser autofill, magnification, or autocomplete would hide the guidance below, consider placing important error copy above the field instead
- if a field needs an example of correct input, show it early instead of waiting for the user to fail repeatedly

### Avoid

- oversized inputs for short data
- placeholder-only labeling
- hover/focus changes so dramatic they look like different components
- styling inputs so similarly to buttons that the roles blur together

Consult [interaction design](./interaction-design.md), [error recovery](./error-recovery.md), [text hierarchy and readability](./text-hierarchy-and-readability.md), and [clarify](../../clarify/SKILL.md) when field guidance, helper text, and validation copy need stronger structure.

## Radio Buttons

Radio buttons allow users to choose exactly one option from a mutually exclusive set.

### Core parts

- **group label**
- **radio control**
- **option label**

### States

- **selected**
- **unselected**

### Good defaults

- use radios when the choice set is small enough that showing all options improves clarity
- wrap or associate the label so the clickable area is larger than the circle alone
- keep labels clear, distinct, and mutually exclusive
- let longer text wrap cleanly without breaking the association between control and label
- scale the target size up in compact touch-capable layouts so selection is forgiving

### Avoid

- using radios for non-exclusive selections
- presenting confusingly similar or negatively phrased options
- separating the label so far from the control that the click target becomes ambiguous

### Practical rule

When the option set is small, always-visible radios are usually clearer than a dropdown because they reduce interaction steps and show available choices up front.

## Form Structure and Grouping

Good forms are easier to complete because the structure is obvious before the user even starts typing.

### Good defaults

- group related fields under clear section labels
- separate field groups with spacing large enough to make the boundaries obvious
- keep simple forms simple — do not add density just because more fields technically fit on the screen
- prioritize scannability over squeezing everything into one uninterrupted column of controls

### Useful rule

Labeling and grouping usually matter more than decorative styling.

If the user cannot quickly locate the right field, color and polish are solving the wrong problem.

## Tabs

Tabs let users switch between related views that share the same context.

### Typical parts

- **tab list / container**
- **tab item** — label and optional icon
- **active indicator** — underline, highlight, or other clear state cue

### Good defaults

- keep labels visible; icons can support, but should not replace, the label in most product UIs
- make the active tab clearly higher contrast than inactive tabs
- keep inactive tabs quieter but still readable
- keep targets comfortably tappable, especially in compact touch-capable layouts
- keep the tab set parallel — each tab should represent a comparable type of destination or view
- if icons are used, keep them aligned consistently and restrained relative to the label

### Avoid

- nesting tabs inside tabs unless there is a very strong IA reason
- stacking tabs vertically when the pattern is meant to act as a horizontal related-view switcher
- using oversized icons that overpower the labels

### Compact-layout adaptation

- preserve tap comfort
- horizontal gesture support can help when the pattern genuinely benefits from compact layouts, but only if the active state remains obvious and the interaction is not hidden from users

## Textareas

A textarea allows multi-line freeform input.

### Typical parts

- **label**
- **multi-line input field**
- **help text** *(optional)*
- **character or limit indicator** *(optional)*

### Good defaults

- size the field roughly to the expected answer length so it feels inviting rather than cramped or intimidating
- keep the label close to the field
- keep helper or limit text slightly closer to the field than the label is, so the field still feels like the center of the group
- provide enough internal padding that writing does not feel cramped against the boundary
- use a textarea only when the answer is genuinely multi-line or longform
- expose character guidance or limits clearly when the task has real constraints

### Avoid

- textareas so small that users cannot comfortably see what they typed
- huge default textareas that imply a long answer when the task only needs a short one
- using a textarea for a single short value that belongs in a one-line input
- relying on placeholder text as the only label

### State guidance

- **focus** should clearly show that the field is ready for typing
- **valid** and **invalid** states should be distinct when validation matters
- **disabled** should remain readable even when interaction is unavailable

When a character limit matters:

- show the maximum before typing begins if it helps the user plan
- show remaining characters as the user types when that reduces guesswork
- if the limit is exceeded, communicate that near the field instead of making users hunt for the reason submission failed

Consult [text hierarchy and readability](./text-hierarchy-and-readability.md) when the supporting text or helper copy needs clearer structure.

## Labels

Labels communicate status, requirements, or feedback near the thing they describe.

In this sense, a label is not just a form label — it can also be an inline error, success, or informational message that tells the user what happened or what needs attention.

### Common roles

- **error** — something needs attention or correction
- **success** — a change completed correctly
- **information** — useful context the user should notice

### Good defaults

- place the label close to the related content so the relationship is obvious
- use color to reinforce meaning, not replace clear wording
- give users enough information to recover or continue confidently

### Placement guidance

- informational or success messaging can lead the content when users should read it before continuing
- warnings and field-specific errors are often clearer below the relevant field or item so the focused element stays visually anchored while the message appears nearby

### Avoid

- vague or underspecified labels that do not explain what happened
- relying on color alone without usable copy
- placing warnings far away from the element that needs attention

Consult [semantic color](./semantic-color.md), [clarify](../../clarify/SKILL.md), and [text hierarchy and readability](./text-hierarchy-and-readability.md) when message tone, placement, and emphasis need more precision.

## Lists

Lists are vertical groupings of related items.

They can be ordered, unordered, simple, or multi-line, but they still need consistent structure so users can scan them without effort.

### Typical parts

- **marker or ordinal**
- **item content**
- **nested items** *(when hierarchy is real and worth showing)*

### Good defaults

- use bullets when order does not matter
- use numbers when sequence, priority, or procedural order does matter
- keep item formatting consistent across the list so users can scan by pattern
- organize lists alphabetically or logically when the content does not already define its own order
- use indentation deliberately to show nesting rather than flattening parent and child items into one level

### Spacing guidance

- keep more space between list items than between wrapped lines inside a single item
- nested items should be indented enough to read as subordinate, not as peers

### Avoid

- flattening child items to the same level as their parent
- inconsistent marker styles inside one list without reason
- spacing so tight that multi-line items blur together

Consult [spacing system](./spacing-system.md) when the list rhythm feels muddy and [text hierarchy and readability](./text-hierarchy-and-readability.md) when the content density needs better line handling.

## Submit Buttons

A submit button completes and sends a form action.

It should tell users exactly what they are doing, and it should remain visually distinct from secondary actions.

### Good defaults

- label the action specifically (`Create account`, `Save changes`, `Send message`) instead of using generic words like `Submit`
- keep the primary submit action visually clearer than cancel or secondary actions
- indicate progress after activation so users know the form is working
- place related form actions where the end of the form naturally leads the eye to them

### Ordering guidance

When a primary and secondary action are presented together, the weaker action should not steal the final resting place of the eye from the stronger one.

The exact left/right order can follow product or platform conventions, but the **primary** submit action should be the clearer stopping point visually.

### Avoid

- technical or vague button labels
- all-caps if it hurts readability
- styling the submit action too similarly to a secondary action
- redundant phrasing that adds noise without clarity

Consult [action hierarchy](./action-hierarchy.md) and [interaction design](./interaction-design.md) when form actions, loading states, or destructive alternatives need more structure.
Consult [disabled buttons UX](./disabled-buttons-ux.md) when submit or continue actions risk becoming mystery-disabled or need clearer in-progress and unavailable-state treatment.

## Skeletons / Loading Placeholders

A skeleton placeholder previews the shape of real content while data is loading.

The strongest skeletons preserve the real layout instead of replacing it with a pile of guessed rectangles.

### Practical pattern

Render the real component with mock content and wrap it in a skeleton treatment so the layout, line breaks, and spacing stay authentic.

```tsx
<Skeleton>
	<ArticleCard
		title="Loading title"
		description="Loading body copy that wraps the way the final content will wrap."
		imageSrc="/mock-image.jpg"
	/>
</Skeleton>
```

### Why this works well

- text lines inherit the real font size, line length, and wrapping
- media and spacing follow the actual component anatomy automatically
- teams avoid manually measuring placeholder rectangles for every variation

### Useful implementation details

- make placeholder text transparent rather than removing it
- use `box-decoration-break: clone` so multiline text gets per-line skeleton fragments instead of one giant block
- animate a background gradient for shimmer rather than hand-authoring separate bars for each line

```css
.skeleton-text {
	color: transparent;
	box-decoration-break: clone;
	-webkit-box-decoration-break: clone;
	background: linear-gradient(
		90deg,
		var(--skeleton-base) 0%,
		var(--skeleton-highlight) 50%,
		var(--skeleton-base) 100%
	);
	background-size: 200% 100%;
}
```

### Synchronised shimmer

If multiple shimmer animations should stay visually locked, the Web Animations API can align them by giving each animation the same timeline start.

```js
for (const element of document.querySelectorAll('[data-skeleton-shimmer]')) {
	const animation = element.animate(keyframes, timing)
	animation.startTime = 0
}
```

Setting `startTime` to `0` makes later-starting elements behave as though they began at the same page-relative time, which keeps the shimmer phase synchronized across the screen.

## Toasts / Alerts

Toasts provide short-lived feedback about recent actions or system status.

### Typical parts

- **icon** *(optional but often useful)*
- **title or status line**
- **message**
- **inline action** *(optional)*
- **close button**
- **timestamp** *(optional and usually secondary)*

### Good defaults

- keep the message concise and task-relevant
- auto-dismiss after a short duration when the information is not critical
- provide a close control
- include the next step or resolution path when that actually helps users recover or continue
- keep only a small number visible at once so they do not turn into a notification wall
- treat toasts as recent feedback, not as the main home for a busy activity stream

### Avoid

- using toasts for form-field validation that belongs inline
- using toasts as the primary explanation for row-level or field-level errors users need to fix in place
- making toasts permanent unless they are really alerts or banners instead
- using them for marketing, upsells, or other trust-eroding interruptions
- escalating routine feed activity into repeated toast spam when an inbox, digest, badge, or status indicator would do

### Useful pattern

When a user creates something successfully, a toast can include a lightweight action that jumps to the new resource or undo path.

Consult [semantic color](./semantic-color.md), [interaction design](./interaction-design.md), [status communication](./status-communication.md), and [elevation system](./elevation-system.md) for state meaning, behavior, attention level, and layering.

## Toggle Switches

A toggle switch controls a binary setting that takes effect immediately.

### Typical parts

- **label**
- **track**
- **handle / thumb**

### Good defaults

- keep the label short, direct, and descriptive of the setting itself
- use clear state contrast between on and off
- move the handle position clearly from one side to the other
- use toggles when the change should apply immediately without requiring an extra save action

### Avoid

- adding extra “on/off” words next to the label when the switch state is already visually obvious
- putting `ON` / `OFF` text inside the control if it clutters the pattern
- writing the label as a question when a direct setting label would be clearer

Consult [interaction design](./interaction-design.md) when deciding whether the control should update instantly or whether another component type is more honest for the workflow.

## Tooltips

A tooltip reveals short, non-essential supporting information on hover, focus, or touch-triggered affordance.

### Typical parts

- **container**
- **text**
- **arrow** *(optional and especially useful when multiple nearby triggers exist)*

### Good defaults

- keep the text short and descriptive
- place the tooltip close to the element it explains
- allow it to appear for hover, focus, and touch-friendly contexts where appropriate
- use it for clarification, shortcuts, or small bits of helpful extra context

### Avoid

- restating text the UI already shows clearly
- putting rich media or complex controls inside the tooltip
- letting the tooltip crop against viewport edges
- using it as a dumping ground for information architecture the interface should already communicate
- using a tooltip as the main place for crucial recovery guidance when the user also needs to see the field and the error while fixing it

### Visual restraint

- tooltips usually do not need dramatic shadows
- short text can be center-aligned if the tooltip stays compact

Consult [interaction design](./interaction-design.md) and [elevation system](./elevation-system.md) for top-layer behavior, focus handling, and layering expectations.

## Accordions

An accordion is a vertically stacked set of headers that reveal or hide associated content panels.

### Typical parts

- **header** — title row plus toggle control
- **caret icon** — indicates expanded or collapsed state
- **panel** — the revealed content area
- **summary text** *(optional)* — quieter support text in the header

### Good defaults

- make the **entire header row** the interaction target, not just the icon
- place the caret on the **end side** of the header, where users expect the reveal control
- keep the header height comfortably tappable; around `48px` is a solid baseline
- keep the caret wrapper large enough to feel deliberate, not cramped
- keep header content and caret vertically centered
- if the system uses a simple disclosure icon, down/collapsed and up/expanded is still the most familiar baseline
- when the product wants a more refined motion treatment, prefer a small SVG path morph over a blunt chevron flip
- keep summary text lower contrast than the main label
- keep spacing between items consistent
- if the panel contains actions, place them where the expanded content still reads as one unit

### Use carefully

- allow multiple sections open at once when comparing or referencing multiple chunks is helpful
- avoid accordions when users need most of the information visible to answer a question quickly

### Avoid

- using random icons instead of a caret-like disclosure cue
- making the icon the only clickable target
- putting the icon on the start side unless the product has a strong established convention for it

Consult [motion design](./motion-design.md) when animating the reveal so expansion feels smooth without layout jank.
Consult [accordion UX](./accordion-ux.md) when the problem is not just anatomy, but when to use accordions, how the header should behave, whether sections should stay open, or how category links and expansion should be separated.

## Avatars

An avatar represents a person or account through an image, initials, or an icon.

### Common variants

- **image avatar**
- **initials avatar**
- **icon avatar**

### Practical sizes

- **small** — repeated dense contexts like lists or mentions; around `24px` minimum
- **medium** — navigation, headers, toolbars; around `40px`
- **large** — profile, settings, or identity-heavy views; around `56px`

### Good defaults

- fall back to initials when no image exists
- maintain strong contrast between initials/icon and avatar fill
- use a subtle boundary when the avatar background blends into the page
- keep avatars rounded unless the product has an intentional shape system that says otherwise
- keep the same representation for the same user across the product unless the state genuinely changes

### Avoid

- gendered placeholder avatars
- giant avatars in compact contexts
- square avatars in systems that otherwise follow the more familiar rounded-person pattern

### Helpful details

- when users upload images, provide basic cropping or framing help
- keep the face centered comfortably inside the crop instead of letting it touch the circle edge
- status dots, notification counts, or achievement rings can attach to the avatar when they clarify state without overwhelming identity

Consult [image treatment](./image-treatment.md) when avatar crops, containment, or image contrast need more specific guidance.

## Badges

A badge is a compact, non-interactive status label attached to an object, state, or counter.

### Typical parts

- **label** — the status word or short count
- **background** — the container shape
- **icon** *(optional)* — only when it improves recognition quickly

### Badge roles

- **positive** — success, complete, approved, purchased
- **negative** — failed, rejected, alert, blocked
- **informative** — active, live, published, in use

### Good defaults

- keep badge text short and scannable
- prefer one word when possible; two words only when the state really needs it
- keep badges smaller than buttons so they are not mistaken for actions
- use capitalization styles that match the system, but avoid shouting
- place the badge close enough to the object it describes that the relationship is obvious

### Avoid

- making the badge interactive when it is really just a status indicator
- using semantic colors or labels inconsistently
- setting everything in all-caps if readability suffers

Consult [semantic color](./semantic-color.md) when choosing state meaning and [color and contrast](./color-and-contrast.md) when tuning readable fills and text contrast.

## Ratings / Reviews

Ratings and review summaries help users judge whether a product is trustworthy and whether it fits their own needs.

### Typical parts

- **average score**
- **total count of ratings or reviews**
- **visual rating indicator**
- **distribution summary** *(when trust and comparison matter)*
- **attribute-level breakdown** *(optional but often valuable)*
- **review snippets or highlighted reviews**
- **helpful votes, filters, or sorting** *(when the review set is large)*

### Good defaults

- show the score and the total count together
- use a decimal score when precision matters
- support a review distribution summary when users need to judge trust, not just popularity
- keep the most helpful positive and negative reviews easy to find
- include dates and reviewer context when those improve credibility

### Avoid

- stars with no rating count or supporting context
- suppressing all negative reviews until the section feels suspiciously perfect
- forcing users through a giant unfilterable wall of reviews when tags, sorting, or search would speed up relevance

Consult [reviews and ratings](./reviews-and-ratings.md) for deeper guidance on trust signals, attribute breakdowns, recommendation percentages, helpful votes, and review filtering behavior.

## Borders

Borders separate and contain. They are useful, but not the default answer to every structure problem.

### Good defaults

- keep borders light, restrained, and subordinate to the content
- prefer one purposeful border over boxing everything in by habit
- use borders to support state, containment, or active location when spacing and background contrast alone are not enough
- keep radius decisions tied to the product's shape system rather than changing radius per component randomly

### Avoid

- borders that pull more attention than the content inside them
- border contrast so faint that it does nothing
- border contrast so strong that it becomes decoration noise

### Practical uses

- active navigation indicators
- focused inputs or selected surfaces
- subtle containment where background separation is weak

When in doubt, reduce border use and let spacing, grouping, or a surface shift do the work instead.

Consult [surface separation](./surface-separation.md) for the broader doctrine on when borders should lose to spacing, shadows, or background shifts.

## Breadcrumbs

Breadcrumbs show the user's current location inside a nested structure and help them move back up the hierarchy.

Consult [breadcrumb UX](./breadcrumb-ux.md) for deeper guidance on placement, current-page handling, narrow-layout reduction, sideways breadcrumbs, and when a stronger navigation pattern is a better answer.

### Typical parts

- **page links** — parent-level locations
- **separator** — usually `>` or `/`
- **current page** — final item, usually not a link

### Use breadcrumbs when

- content is nested in a meaningful hierarchy of two or more parent levels
- users benefit from climbing back up through that structure quickly

### Good defaults

- keep text short and easy to scan
- style breadcrumbs as secondary navigation, not as the main navigation system
- keep the current page visually distinct when shown, but include it only when it adds clarity relative to the nearby heading
- use familiar separators and restrained typography so the pattern feels conventional

### Avoid

- replacing global or local navigation with breadcrumbs
- using breadcrumbs for flat structures where they add clutter without value
- linking the current page item
- cluttering small screens with a full deep trail when a shorter parent path would do

### Compact-layout adaptation

- keep the most useful parent path visible even when the full lineage is condensed
- keep the trail compact enough that it supports orientation without crowding the top of the screen

## Consistency rule across components

Once a component's anatomy, states, and meaning are established, keep them stable:

- the same user should keep the same avatar treatment
- the same status should keep the same badge meaning
- the same accordion pattern should keep the same reveal logic
- the same breadcrumb treatment should keep the same navigation logic
- the same button hierarchy should keep the same action meaning
- the same card family should keep the same internal spacing and action logic
- the same checkbox and dropdown patterns should keep the same target and state logic
- the same icon family should keep the same style logic and sizing rhythm
- the same list style should keep the same indentation and marker logic

Users notice inconsistency faster than teams expect.

## Practical checks

- Is the primary interaction target obvious?
- Is the whole tappable/clickable area generous enough?
- Are the component's states visually clear without extra explanation?
- Is the component smaller, quieter, or louder than it should be relative to nearby UI?
- Does it match the existing product system before inventing a new pattern?

---

**Avoid**: rebuilding mature component-library primitives without a real reason, using decorative variants that weaken recognizability, shrinking controls below comfortable touch sizes, or letting component-level styling drift until the same concept looks different everywhere.