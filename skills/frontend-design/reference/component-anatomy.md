# Component Anatomy

Use this reference when a project needs UI components built or refined **without** relying on a mature component library for the primitive layer.

This is the fallback doctrine for:

- plain HTML / CSS / JavaScript projects
- Tailwind projects without a component library
- custom in-house primitives
- framework projects where the team is intentionally building their own component layer

If the project already uses `shadcn/ui`, Radix-based compositions, Base UI, Nuxt UI, `shadcn-vue`, `shadcn-svelte`, Angular Material, or another mature component system, **match and extend that existing system first**.

Do not use this reference as an excuse to second-guess strong upstream primitives that already solve accessibility, anatomy, and interaction patterns well.

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

This reference does not try to freeze every component in existence. It focuses on the kinds of primitive building blocks teams often need when they are not inheriting a mature component library.

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
- use row hover and selected states that are clear without becoming gaudy
- group related information in one column when fragmentation would weaken scanability
- allow resizing when users manage large information sets and column flexibility matters
- keep headers visible during deep vertical scroll when the table is long enough for context loss to become a problem
- pin the first column when horizontal scrolling would otherwise destroy row context and the data density justifies it

### Avoid

- cluttering tables with unnecessary borders
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

### Mobile adaptation

Do not try to force a wide desktop table onto a narrow screen unchanged.

For many mobile cases, the better move is to transform rows into cards or compact item summaries that show only the most important fields.

Keep:

- the title / identifying field
- one or two key secondary facts
- the action or status users care about most

Drop or defer:

- low-priority columns
- wide comparison-only fields that do not help on mobile

### Practical rule

If users are comparing many rows precisely, a table is usually right.

If users mostly need to inspect one item at a time on a small screen, a cardified or summary view is often clearer.

Consult [text hierarchy and readability](./text-hierarchy-and-readability.md) for numeric alignment, [spacing system](./spacing-system.md) for row/cell rhythm, and [interaction design](./interaction-design.md) when table controls, bulk actions, and filtering behaviors need stronger structure.

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

- shrinking buttons until they are hard to tap on mobile or fiddly to click on desktop
- making primary, secondary, and tertiary actions so similar that priority becomes guesswork
- using color alone to separate action importance when size, weight, spacing, and placement should help too

Consult [action hierarchy](./action-hierarchy.md) when deciding which button should lead, recede, disappear, or wait until a confirmation step.

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
- when media and text need to coexist on larger screens, moving media to the side can work well if the crop still preserves the important content
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
- increase the hit target on mobile so the control feels finger-friendly instead of pixel-hunt-y
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

### Avoid

- oversized inputs for short data
- placeholder-only labeling
- hover/focus changes so dramatic they look like different components
- styling inputs so similarly to buttons that the roles blur together

Consult [interaction design](./interaction-design.md), [text hierarchy and readability](./text-hierarchy-and-readability.md), and [clarify](../../clarify/SKILL.md) when field guidance, helper text, and validation copy need stronger structure.

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
- scale the target size up on mobile so selection is finger-friendly

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
- keep targets comfortably tappable, especially on mobile
- keep the tab set parallel — each tab should represent a comparable type of destination or view
- if icons are used, keep them aligned consistently and restrained relative to the label

### Avoid

- nesting tabs inside tabs unless there is a very strong IA reason
- stacking tabs vertically when the pattern is meant to act as a horizontal related-view switcher
- using oversized icons that overpower the labels

### Mobile adaptation

- preserve tap comfort
- horizontal swipe support can help when the pattern is genuinely mobile-friendly, but only if the active state remains obvious and the interaction is not hidden from users

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

### Avoid

- using toasts for form-field validation that belongs inline
- making toasts permanent unless they are really alerts or banners instead
- using them for marketing, upsells, or other trust-eroding interruptions

### Useful pattern

When a user creates something successfully, a toast can include a lightweight action that jumps to the new resource or undo path.

Consult [semantic color](./semantic-color.md), [interaction design](./interaction-design.md), and [elevation system](./elevation-system.md) for state meaning, behavior, and layering.

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
- rotate the caret when expanded; down/collapsed and up/expanded is the most familiar pattern
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
- include the current page as the last item, but keep it non-clickable by default
- use familiar separators and restrained typography so the pattern feels conventional

### Avoid

- replacing global or local navigation with breadcrumbs
- using breadcrumbs for flat structures where they add clutter without value
- linking the current page item
- cluttering small screens with a full deep trail when a shorter parent path would do

### Mobile adaptation

- show the most useful parent path, not necessarily the full lineage
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