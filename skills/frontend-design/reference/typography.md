# Typography

## Classic Typography Principles

### Vertical Rhythm

Your line-height should be the base unit for ALL vertical spacing. If body text has `line-height: 1.5` on `16px` type (= 24px), spacing values should be multiples of 24px. This creates subconscious harmony—text and space share a mathematical foundation.

### Modular Scale & Hierarchy

The common mistake: too many font sizes that are too close together (14px, 15px, 16px, 18px...). This creates muddy hierarchy.

**Use fewer sizes with more contrast.** A 5-size system covers most needs:

| Role | Typical Ratio | Use Case |
|------|---------------|----------|
| xs | 0.75rem | Captions, legal |
| sm | 0.875rem | Secondary UI, metadata |
| base | 1rem | Body text |
| lg | 1.25-1.5rem | Subheadings, lead text |
| xl+ | 2-4rem | Headlines, hero text |

Popular ratios: 1.25 (major third), 1.333 (perfect fourth), 1.5 (perfect fifth). Pick one and commit.

### Readability & Measure

Use `ch` units for character-based measure (`max-width: 65ch`). Line-height scales inversely with line length—narrow columns need tighter leading, wide columns need more.

**Non-obvious**: Increase line-height for light text on dark backgrounds. The perceived weight is lighter, so text needs more breathing room. Add 0.05-0.1 to your normal line-height.

## Font Selection & Pairing

### Use Good Fonts

Good typography choices are a high-leverage personality decision.

For UI work, prefer fonts that are:
- legible at small sizes
- available in multiple useful weights
- distinct enough to create tone without hurting clarity

When appropriate, strong modern defaults include:
- **Geist Sans** for clean, modern UI and product surfaces
- **Geist Mono** for technical accents, code, and data contexts where monospace is genuinely useful
- **Geist Pixel** for playful, retro, or deliberately pixel-art directions where that personality is clearly intentional

Use Geist thoughtfully:
- Geist Sans works well as a primary UI sans
- Geist Mono should be an accent, not a lazy shorthand for "developer vibes"
- Geist Pixel is niche and should be reserved for interfaces that truly want a stylized, pixel-forward personality

### Choosing Distinctive Fonts

**Avoid the invisible defaults**: Inter, Roboto, Open Sans, Lato, Montserrat. These are everywhere, making your design feel generic. They're fine for documentation or tools where personality isn't the goal—but if you want distinctive design, look elsewhere.

**Better Google Fonts alternatives**:
- Instead of Inter → **Instrument Sans**, **Plus Jakarta Sans**, **Outfit**
- Instead of Roboto → **Onest**, **Figtree**, **Urbanist**
- Instead of Open Sans → **Source Sans 3**, **Nunito Sans**, **DM Sans**
- For editorial/premium feel → **Fraunces**, **Newsreader**, **Lora**

**System fonts are underrated**: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui` looks native, loads instantly, and is highly readable. Consider this for apps where performance > personality.

### Play It Safe

When in doubt, a neutral sans or system stack is safer than an expressive font used badly.

Playing it safe does not mean giving up on quality; it means choosing legibility and familiarity when the product needs restraint.

### Ignore Typefaces with Less Than Five Weights

As a rule of thumb, families with a healthier range of weights are often more carefully built and more flexible in UI systems.

They give you:
- clearer hierarchy options
- better consistency across states and roles
- less pressure to mix too many families

This is not a law, but it is a useful filter.

### Optimize for Legibility

Fonts designed for body use usually have:
- taller x-heights
- less extreme proportions
- more forgiving spacing at small sizes

Avoid condensed or stylized display faces for body text.

Legibility also depends on how the type is used:

- small text usually needs a little more weight, not less
- large headlines usually need less weight than small labels or buttons
- text over patterns, photography, or noisy backgrounds fails faster than text on calm surfaces
- strong header/body contrast can come from family pairing, but it can also come from size, weight, spacing, and role clarity

One reliable pattern is a more expressive serif or display treatment for titles paired with a calmer sans-serif for body text — but this is a tool, not a rule. Do not force serif/sans contrast when a strong single-family system works better.

### Trust the Wisdom of the Crowd

Popular fonts are often popular for a reason: they are reliable, legible, and well-crafted.

This is especially useful when choosing:
- a neutral UI sans
- a serif for editorial use
- a proven family for a production system

### Steal from People Who Care

When you see excellent typography on a product you admire, inspect what it is using.

Good design teams make these decisions deliberately. Studying them is often a better shortcut than random font browsing.

### Developing Your Intuition

Over time, pay attention to what makes a type choice feel:
- refined
- cheap
- technical
- playful
- editorial
- trustworthy

Taste improves by noticing decisions, not by hoping inspiration strikes.

### Pairing Principles

**The non-obvious truth**: You often don't need a second font. One well-chosen font family in multiple weights creates cleaner hierarchy than two competing typefaces. Only add a second font when you need genuine contrast (e.g., display headlines + body serif).

When pairing, contrast on multiple axes:
- Serif + Sans (structure contrast)
- Geometric + Humanist (personality contrast)
- Condensed display + Wide body (proportion contrast)

**Never pair fonts that are similar but not identical** (e.g., two geometric sans-serifs). They create visual tension without clear hierarchy.

## Weight, Bold, and Emphasis

Bold text is a scarce resource. Use it to clarify priority, not to create texture everywhere.

### Use bold sparingly

In most UI sections, only one or two items should carry strong bold emphasis at the same time.

Good uses:
- the primary actionable link in a small text block
- short warnings or important status text
- compact buttons, pills, labels, or toasts that need stronger legibility

Bad uses:
- paragraphs full of bold fragments
- too many equally loud links in one block of copy
- bolding large headlines that are already dominant by size alone

### Weight should scale with size

The larger the text, the less weight it usually needs to feel strong.

- small text often benefits from slightly more weight
- mid-size UI headings can usually carry moderate weight
- large display text often looks better when the weight backs off a little

Very light weights on small text usually hurt readability. Very heavy weights on already-large headlines often feel blunt and crowded.

### Mix weights intentionally

Within a headline or short statement, strategic weight contrast can create emphasis without needing extra color or decoration.

Do this selectively. If every other word is emphasized, nothing is.

### Web Font Loading

The layout shift problem: fonts load late, text reflows, and users see content jump. Here's the fix:

```css
/* 1. Use font-display: swap for visibility */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}

/* 2. Match fallback metrics to minimize shift */
@font-face {
  font-family: 'CustomFont-Fallback';
  src: local('Arial');
  size-adjust: 105%;        /* Scale to match x-height */
  ascent-override: 90%;     /* Match ascender height */
  descent-override: 20%;    /* Match descender depth */
  line-gap-override: 10%;   /* Match line spacing */
}

body {
  font-family: 'CustomFont', 'CustomFont-Fallback', sans-serif;
}
```

Tools like [Fontaine](https://github.com/unjs/fontaine) calculate these overrides automatically.

## Modern Web Typography

### Fluid Type

Fluid typography via `clamp(min, preferred, max)` scales text smoothly with the viewport. The middle value (e.g., `5vw + 1rem`) controls scaling rate—higher vw = faster scaling. Add a rem offset so it doesn't collapse to 0 on small screens.

**Use fluid type for**: Headings and display text on marketing/content pages where text dominates the layout and needs to breathe across viewport sizes.

**Use fixed `rem` scales for**: App UIs, dashboards, and data-dense interfaces. No major app design system (Material, Polaris, Primer, Carbon) uses fluid type in product UI — fixed scales with optional breakpoint adjustments give the spatial predictability that container-based layouts need. Body text should also be fixed even on marketing pages, since the size difference across viewports is too small to warrant it.

### Responsive Size Strategy

Body text and headings do not scale the same way.

- body text should usually move conservatively across breakpoints
- headings can reduce more aggressively to preserve hierarchy without awkward wrapping

Practical defaults:

- treat `16px / 1rem` as the accessibility floor for UI body text
- use larger body sizes on wide, reading-heavy layouts when the content density supports it
- let headings step down sooner than paragraphs in medium and narrow layouts
- avoid giant headings that wrap into weak, ragged blocks when the viewport narrows

No single universal size works for every product. The right size depends on reading length, audience, device context, and how much visual competition exists on the screen.

### OpenType Features

Most developers don't know these exist. Use them for polish:

```css
/* Tabular numbers for data alignment */
.data-table { font-variant-numeric: tabular-nums; }

/* Proper fractions */
.recipe-amount { font-variant-numeric: diagonal-fractions; }

/* Small caps for abbreviations */
abbr { font-variant-caps: all-small-caps; }

/* Disable ligatures in code */
code { font-variant-ligatures: none; }

/* Enable kerning (usually on by default, but be explicit) */
body { font-kerning: normal; }
```

Check what features your font supports at [Wakamai Fondue](https://wakamaifondue.com/).

## Typography System Architecture

Name tokens semantically (`--text-body`, `--text-heading`), not by value (`--font-size-16`). Include font stacks, size scale, weights, line-heights, and letter-spacing in your token system.

## Build a Practical Typography Schema

A usable typography system is more than a pile of font sizes.

Document at least:

- the typefaces used for display, body, and any accent roles
- the core role scale (for example: display, heading, subheading, body, secondary, caption)
- default weights for each role
- line-height expectations by role
- letter-spacing rules for all-caps, metadata, and large display text
- example usage so the system is visible, not just abstract

If the team has a styleguide or token system, the typography schema should be clear enough that new screens do not invent their own heading sizes or label patterns from scratch.

Good schemas reduce decision fatigue and improve consistency.

Bad schemas are either too vague to guide anything or so mathematically rigid that people ignore them.

## Keep Your Line Length in Check

Readable paragraphs usually live in the **45–75 character** range.

For the web, `ch`-based constraints are usually the easiest practical tool.

## Dealing with Wider Content

If a layout needs wide media or wide panels, the paragraph text inside it still does not need to stretch to the same width.

Use mixed widths when needed:
- wide area for visuals
- narrower measure for reading

That usually feels more polished than forcing everything into one width.

## Baseline, Not Center

When different text sizes share a row, align by baseline rather than visual centering.

Centered mixed sizes often look subtly off; baseline alignment feels cleaner and more intentional.

## Italics, Underlines, and Capitalization

These are accent tools, not default body-text settings.

### Italics

Use italics for:

- testimonials and quotes
- references or citations
- a single phrase that benefits from quiet emphasis

Avoid italics for:

- full paragraphs
- buttons and action labels
- navigation labels
- links that already need to remain easy to spot

Large blocks of italic text slow reading down fast.

### Underlines

Underlines are most useful when they signal a link or add targeted emphasis to a short key phrase.

Good uses:

- hyperlink affordance when color alone is not enough
- hover states for links
- short highlighted statements where the underline adds meaning without overwhelming the type

Avoid:

- underlining large headlines for decoration
- underlining every link in a dense block until the page becomes noisy
- using underline as a substitute for fixing weak hierarchy

### Capitalization

Capitalization should be intentional and consistent.

- use sentence case or title case consistently for the same UI role
- reserve all-caps for short labels, buttons, badges, metadata, or alert-like emphasis
- add letter-spacing when using all-caps so the text can breathe

Do not set full sentences or long passages in all-caps unless the tone is deliberately stylized and the readability tradeoff is acceptable.

## Line-Height Is Proportional

Line-height depends on both font size and measure.

- smaller text needs more support
- larger headings usually need less
- wider lines need more line-height than narrow lines

Use line-height as an active reading tool, not a fixed default.

## Accounting for Line Length

As lines get longer, increase line-height so the eye can find the next line comfortably.

If a paragraph feels tiring to track, the line-height is often too tight for the measure.

## Accounting for Font Size

As type gets larger, line-height usually needs to come down.

Headlines often work near `1.0–1.2`, while body copy usually wants more breathing room.

## Accessibility Considerations

Beyond contrast ratios (which are well-documented), consider:

- **Never disable zoom**: `user-scalable=no` breaks accessibility. If your layout breaks at 200% zoom, fix the layout.
- **Use rem/em for font sizes**: This respects user browser settings. Never `px` for body text.
- **Minimum 16px body text**: Smaller than this strains eyes and becomes fragile in compact browsing contexts.
- **Adequate touch targets**: Text links need padding or line-height that creates 44px+ tap targets.

---

**Avoid**: more than 2-3 font families per project, skipping fallback font definitions, ignoring font loading performance (FOUT/FOIT), using decorative fonts for body text, relying on too few weights for hierarchy, over-bolding already-dominant large text, setting long passages in italics or all-caps, underlining text indiscriminately, or using Geist Mono/Geist Pixel as gimmicks where their personality does not fit the product.
