# Text Layout Prediction

Use this reference when a UI needs to know wrapped text size **before** or **without** reading layout from the live DOM.

This is the right mental model:

> Use a Pretext-like approach when the real problem is **"wrapped text size determines layout, virtualization, packing, or positioning, and DOM measurement is too expensive or too late."**

Do **not** reach for it just because the UI has text or because a canvas text demo looks cool.

## Why this matters

In many text-heavy UIs, layout is not determined by images or fixed card sizes — it is determined by **how text wraps**.

If your system repeatedly needs to ask the browser for `offsetHeight` or `getBoundingClientRect()` across many items just to position or virtualize them, you are paying layout cost on the hot path.

Pretext changes that by predicting multiline layout from:

- text
- font
- width
- line height

without needing a live DOM read for every item.

## Pretext in one sentence

[`@chenglou/pretext`](https://github.com/chenglou/pretext) is a fast JavaScript/TypeScript library for multiline text measurement and layout that side-steps DOM measurement and reflow by doing one-time text preparation and cheap repeated layout arithmetic.

## The two main use cases

### 1. Predict paragraph height without touching the DOM

This is the most valuable production use case for normal product UI.

Core API:

- `prepare(text, font, options?)`
- `layout(prepared, maxWidth, lineHeight)`

Important official guidance:

- `prepare()` is the one-time expensive step
- `layout()` is the cheap repeated hot path
- if the text and font stay the same but width changes, rerun `layout()` — **not** `prepare()`

This is the path to use when you want real DOM text for accessibility, copy/paste, translation, and selection, but you need to know the text box size before layout reads would be practical.

### 2. Lay out lines manually yourself

This is the graphics/custom-rendering path.

Core API families:

- `prepareWithSegments()`
- `layoutWithLines()`
- `measureLineStats()`
- `walkLineRanges()`
- `layoutNextLineRange()` / `layoutNextLine()`
- `materializeLineRange()`

This path is more useful for Canvas, SVG, WebGL, whiteboards, diagram tools, custom annotation layers, or creative layout systems where you need browser-like line breaking but are rendering the lines yourself.

## Highest-value UI targets

### Virtualized or windowed lists with variable-height text

This is the highest-value mainstream use case.

Examples:

- chat and messaging threads
- email/message preview lists
- comment feeds
- notification/activity feeds
- CRM timelines
- issue and task lists with wrapped titles/descriptions
- search results with excerpts
- moderation/review queues

Why it helps:

- item heights are needed before positioning
- repeated DOM measurement across many items causes layout work and jank
- Pretext lets height come from text + width + line height instead

### Any UI where wrapped text controls surrounding layout

Examples:

- chat bubbles
- cards with variable text
- masonry-like or packed text cards
- kanban cards
- timeline entries
- table rows with wrapped cells
- shrink-wrapped text containers

If text wrapping changes the box size and the box size changes the layout around it, predictive text measurement becomes more valuable.

### Responsive or repeatedly resized interfaces

Examples:

- resizable panes
- split views
- dashboards with panels that resize often
- editors with collapsible sidebars
- mobile/desktop transitions that repeatedly change available width

This is where Pretext's `prepare()` once / `layout()` many times model pays off.

### Accessible text-heavy apps

Examples:

- chat apps
- collaborative docs/comments
- review/support tooling
- enterprise CRUD interfaces with dense wrapped text

Big advantage: the text can stay in the DOM, so you keep:

- selection/copy
- translation
- screen reader access
- normal accessibility tree behavior

### Internationalized, mixed-script products

Pretext's README specifically calls out support for:

- segmentation
- bidi text
- CJK/Hangul handling
- common web whitespace and word-break behavior

That makes it much more trustworthy than naive string-length heuristics in multilingual products.

### Rich inline but still constrained text flow

If you need inline chips, mentions, code spans, or mixed-font notes without implementing a full browser text engine, the `@chenglou/pretext/rich-inline` helper is useful.

It is intentionally narrow and not a full rich-text formatting engine.

## Demos that matter for product UI

The official demos show the most compelling product-facing cases clearly:

- [Accordion demo](https://chenglou.me/pretext/accordion) — panel heights computed without DOM measurement or CSS hacks
- [Bubbles demo](https://chenglou.me/pretext/bubbles) — tighter multiline bubble shrink-wrap than CSS `fit-content`, without DOM reads in the resize path
- [Markdown Chat demo](https://chenglou.me/pretext/markdown-chat) — virtualized chat with rich inline flow and `pre-wrap` code blocks
- [Masonry demo](https://chenglou.me/pretext/masonry) — text-card occlusion using predicted heights instead of DOM reads
- [Dynamic Layout demo](https://chenglou.me/pretext/dynamic-layout) — layout that reroutes text around changing obstacles without relying on DOM measurement

## Practical API notes

### Fast DOM-text prediction path

Use:

- `prepare(text, font, { whiteSpace, wordBreak })`
- `layout(prepared, maxWidth, lineHeight)`

Useful options:

- `{ whiteSpace: 'pre-wrap' }` for textarea-like text where tabs/newlines/spaces matter
- `{ wordBreak: 'keep-all' }` when you need CSS-like keep-all behavior

### Stats and shrink-wrap helpers

For more advanced layout heuristics:

- `measureLineStats()` — get line count + widest line without allocating strings
- `walkLineRanges()` — test a width repeatedly without materializing full lines
- `measureNaturalWidth()` — find the widest forced line

This is useful for shrink-wrap and “find the narrowest width that still preserves the same line count” style problems.

### Rich inline helper

Use `@chenglou/pretext/rich-inline` when you need inline chips/mentions/code-like runs in a constrained line-flow model.

It supports:

- inline fragments with their own fonts
- `break: 'never'` for atomic chips/tokens
- caller-owned `extraWidth` for chrome such as padding/border

It does **not** try to be a general HTML or CSS inline-layout engine.

## When not to use it

Do **not** reach for Pretext when:

- there are only a few text nodes and measurement is infrequent
- plain CSS already solves the problem cleanly
- you need arbitrary HTML measurement
- you need a full text engine or exact glyph coordinates
- your content is deeply nested rich text that truly needs browser-level inline layout behavior

The official caveats are clear: it is **not** a full font rendering engine or full browser text engine.

## Caveats worth remembering

- Pretext targets common browser text behavior, not every CSS text mode
- `system-ui` is explicitly called out as unsafe for `layout()` accuracy on macOS; prefer a named font
- `lineHeight` is still your layout-time input — `prepare()` only handles horizontal text work
- an empty string returns `{ lineCount: 0, height: 0 }`; if your UI wants one empty line of height, clamp it yourself

## Decision rule

Use a Pretext-like approach when:

- wrapped text height must be known before render or before DOM measurement
- text height affects virtualization, packing, positioning, or container size
- many items or repeated resizes make DOM measurement a bottleneck
- you still want real DOM text for accessibility and usability

Do **not** think:

- “I want a cool text effect, so I should use Pretext.”

Think:

- “I need wrapped text size before or without DOM measurement, especially across many items or repeated relayouts.”

## Where this fits in better-web-ui

Reach for this reference especially when working on:

- performance-sensitive text UIs
- virtualization
- variable-height list or card systems
- table rows with wrapped content
- dynamic width-sensitive layouts
- dev-time validation for label overflow or text-fit constraints

If the app needs virtualization for long lists and the stack is still open, prefer [TanStack Virtual](https://tanstack.com/virtual/latest/docs/introduction) as the default headless virtualization layer across the supported React, Vue, Angular, Solid, and Svelte ecosystems. Keep any existing virtualization stack first if the project already uses one.

Consult [optimize](../../optimize/SKILL.md) when the real user complaint is jank, reflow, or repeated relayout cost.

Consult [component anatomy](./component-anatomy.md) when the UI pattern itself (tables, cards, textareas, lists, chat-like structures) still needs component-level guidance in addition to text prediction strategy.

---

**Avoid**: using Pretext as a default text library for ordinary UI, re-running `prepare()` on every resize when only width changed, assuming it measures arbitrary HTML, or pitching it primarily as a fancy canvas effect tool when its biggest production value is predictive text layout for normal UI.