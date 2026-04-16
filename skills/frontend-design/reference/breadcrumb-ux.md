# Breadcrumb UX

Breadcrumbs are a secondary wayfinding pattern for nested information architecture.

If the project already uses a mature breadcrumb or navigation component, keep its baseline semantics and link behavior first. Use this reference mainly to decide whether breadcrumbs are appropriate, which levels to show, where they belong, and how they relate to the broader navigation model.

They help users answer two questions quickly:

- where am I?
- what is the closest sensible level to go back to?

They matter most when people arrive on deep pages from search, shared links, email, or external references without first learning the site's structure.

## Use breadcrumbs when

- the site has a meaningful hierarchy with multiple ancestor levels
- users often land deep in docs, categories, articles, product pages, help pages, or policy pages
- climbing back up to a parent or grandparent page is a common recovery or browsing move
- sibling exploration matters, but a full local navigation pattern would take too much space

## Skip or simplify breadcrumbs when

- the hierarchy is flat and most pages live only one level deep
- the experience is primarily linear rather than hierarchical
- the page already has a clear nearby section label that does the same job
- a stronger local navigation pattern already provides clearer orientation with less duplication

Breadcrumbs should support the existing navigation model, not compensate for a broken one.

## Core rules

### Show hierarchy, not history

Breadcrumbs should reflect the site's canonical information structure, not the user's session path.

- do not try to mimic the browser Back button
- do not personalize the trail to every user's click sequence
- for polyhierarchical content, choose one stable canonical path

## Complement navigation; do not replace it

Breadcrumbs work best alongside global navigation, local navigation, search, or in-page navigation.

- use them as orientation and quick backtracking
- do not make them the only way to move around a section
- do not remove stronger local navigation just because breadcrumbs exist

## Place breadcrumbs where users already look

The safest placement is:

- under the global navigation, and/or
- just above the page heading

Keep them visible without scrolling whenever practical.

Avoid placing breadcrumbs:

- below large hero banners or promo art that gets skipped like advertising
- so far from the heading that the relationship becomes unclear
- behind sticky notices, consent layers, or other top-of-page clutter
- only in the footer

If the page requires a full-screen scroll before users see either the breadcrumbs or the actual content, the top of the page is likely over-designed and under-helpful.

## Use familiar separators

Default to familiar rightward hierarchy separators in left-to-right interfaces, such as:

- `>`
- chevrons pointing right
- simple rightward arrows

In right-to-left interfaces, reverse the visual direction accordingly.

Choose separators that read as hierarchy rather than decoration. Novel separators are acceptable only if they stay immediately legible.

## Make ancestor items real links

Every ancestor crumb should be a real, usable link to a real page.

- avoid disabled middle crumbs
- avoid non-page IA labels that look like destinations but go nowhere
- make link affordance visible enough that users do not need hover to discover what is clickable

If only some crumbs are interactive, users will reasonably assume the component is broken rather than nuanced.

## Decide deliberately whether to show the current page

There is no single universal rule.

### Omit the current page when

- breadcrumbs sit immediately above the heading
- the heading already provides the final location clearly
- removing the last item reduces duplication without reducing orientation

### Include the current page when

- breadcrumbs are separated from the heading by a banner or layout break
- the breadcrumb trail stays visible while the heading scrolls away
- the page title is long, ambiguous, or easy to confuse with a parent category

If the current page is shown:

- keep it visually distinct from linked ancestors
- keep it non-clickable by default
- use clear semantics such as `aria-current="page"`

## Keep breadcrumbs concise but not cryptic

- use short, recognizable labels
- prefer the real page title or a familiar shortened form
- avoid truncating labels so aggressively that the path becomes guesswork
- avoid filler like `You are here` or `Navigation`

If space is tight, reduce duplication before reducing meaning.

## Narrow-layout patterns

Breadcrumbs become fragile quickly on small screens.

### Avoid

- multi-line breadcrumb wraps
- tiny, crowded interaction targets
- removing breadcrumbs entirely when the hierarchy still matters
- replacing the full path with mysterious ellipses and no recovery affordance

### Prefer

- keeping the immediate parent visible at all times
- a shortened trail when that supports the main task better than a wrapped full trail
- a single-line horizontally scrollable trail with a clear fade or overflow cue
- an accordion or reveal pattern that expands the full path on demand

If you condense the trail, keep the nearest useful escape hatch obvious. For many pages, that is the direct parent.

## Sideways breadcrumbs

Sometimes users need not only to go up, but also to jump across to sibling pages.

Sideways breadcrumbs extend a breadcrumb level with an adjacent menu, dropdown, or expandable sibling list.

Use them when:

- sibling comparison is common
- the section is deep enough that side navigation would be heavy or repetitive
- users often need to explore related pages at the same depth

Keep the distinction clear between:

- activating the ancestor page itself
- opening the sibling chooser for that level

If the pattern creates arrow soup or unclear hit targets, it is too clever for its own good.

## Alternatives that may be better

Sometimes the real answer is not "better breadcrumbs" but "a better navigation mix."

Consider instead or alongside:

- a strong local sidebar for dense sibling navigation
- horizontal layered navigation for a few clear levels
- tags or section chips when the hierarchy is shallow but categorization still matters
- a clearer active state in navigation when breadcrumbs would only repeat obvious context

## Accessibility and semantics

- wrap breadcrumbs in a navigation landmark with a specific label such as `Breadcrumb`
- use a list structure so the sequence is announced clearly
- expose the current page with `aria-current="page"` when included
- preserve clear focus states for every linked crumb
- ensure condensed or accordion patterns remain keyboard-operable and screen-reader understandable

Do not rely on color alone to distinguish links from the current page.

## Practical checklist

- Is the site hierarchy deep enough to justify breadcrumbs at all?
- Do breadcrumbs complement rather than replace main or local navigation?
- Are they placed under the global nav or above the heading?
- Are they visible without scrolling on the pages where they matter most?
- Do they show hierarchy rather than session history?
- Are all ancestor items real links?
- Is the current page either omitted intentionally or clearly differentiated?
- Are separators familiar and directionally sensible?
- In narrow layouts, does the pattern avoid wrapping, crowding, and disappearance?
- If sibling jumps matter, would sideways breadcrumbs help more than they confuse?