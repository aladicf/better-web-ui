---
name: localize
description: Plan, implement, or improve an internationalization and localization strategy for UI content, formatting, and regional adaptation. Use when the user asks to add i18n, localize, translate, support multiple languages, handle regional formats, manage locale switching, or build a multilingual product.
metadata:
  argument-hint: "[target]"
---

Build and maintain internationalized interfaces that feel native in every supported locale, not merely translated.

Localization is more than swapping strings. It is adapting layout, formatting, content, and interaction patterns so that users in every market experience the product as intentional, not as an afterthought.

Consult the [language and locale selection](../frontend-design/reference/language-and-locale-selection.md) reference when designing language selectors, country pickers, currency choosers, or regional-preference controls.
Consult the [component accessibility](../frontend-design/reference/component-accessibility.md) reference when localizing custom components that must remain keyboard-navigable and screen-reader friendly across locales.
Consult the [error-recovery](../frontend-design/reference/error-recovery.md) reference when localizing validation messages, error states, and recovery flows.
Consult the [date-input-ux](../frontend-design/reference/date-input-ux.md) and [date-time-picker-ux](../frontend-design/reference/date-time-picker-ux.md) references when adapting date, time, and calendar patterns to locale conventions.

## MANDATORY PREPARATION

Users start this workflow with `/localize`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: which markets and languages are targeted now and next, whether the product is content-heavy or UI-heavy, and whether translation will be done in-house, by agency, or through a TMS.

## Assess Localization Scope

Understand what must change and how deep the adaptation goes:

1. **Content surface area**:
   - Static UI strings (labels, buttons, headings, empty states)
   - Dynamic user-generated content (names, descriptions, comments)
   - Marketing and legal copy (terms, privacy, compliance)
   - Error messages and validation feedback
   - Notifications, emails, and off-product messaging

2. **Formatting and conventions**:
   - Date, time, and calendar formats (ISO vs localized display)
   - Number formats (decimal separators, grouping, currency)
   - Measurement units (metric vs imperial, currency symbols)
   - Address and phone number formats
   - Name ordering (given name first vs family name first)
   - Sorting and collation rules

3. **Layout and structural adaptation**:
   - Text expansion and contraction (German +30%, Japanese -10%)
   - Right-to-left (RTL) script requirements
   - Vertical text or mixed-script layouts
   - Reading direction and scanning patterns

4. **Content and legal differences**:
   - Region-specific features or catalog availability
   - Legal requirements (GDPR, CCPA, local tax, age gates)
   - Payment methods and currency support
   - Cultural imagery, colors, and symbolism

## Localization Architecture

### String Management Strategy

**Key-based extraction**:
- Use descriptive, hierarchical keys: `checkout.shipping.title`, `errors.email.required`
- Avoid English sentences as keys; they break when source copy changes
- Include context comments for translators: `// Used as button label on shipping form`
- Namespace by feature or route to keep files manageable

**Message format**:
- Use ICU MessageFormat for interpolation, pluralization, and gender
- Avoid concatenating strings in code; translators need full sentences

```icu
// Good: complete sentence with interpolation
{count, plural, =0 {No items} one {# item} other {# items}} in your cart

// Bad: concatenated fragments
t('items_prefix') + count + t('items_suffix')
```

**Source language discipline**:
- Treat the source language (usually English) as the development contract
- Write source strings for translation: complete sentences, clear pronoun references, no idioms
- Review source copy for translatability before sending to translators

### Locale Negotiation and Routing

**URL strategy** (choose one and commit):
- **Subdirectories**: `/en/products`, `/de/products` — SEO-friendly, shareable, clear
- **Subdomains**: `en.example.com`, `de.example.com` — clean separation, harder to maintain
- **Query parameters**: `?lang=de` — simplest to implement, worst for SEO and sharing

**Locale detection order**:
1. Explicit user preference (stored in account or cookie)
2. URL path or subdomain
3. Browser `Accept-Language` header
4. Geolocation (use as soft default only, never hard redirect)

**Locale persistence**:
- Store explicit choices in user profiles when authenticated
- Use cookies for anonymous visitors; respect them on return
- Never override an explicit choice with auto-detection

### Library and Tool Selection

| Need | Strong options | When to use |
|------|----------------|-------------|
| React / modern frameworks | react-i18next, Lingui, FormatJS (react-intl) | Component-level translations with hooks/context |
| Vue | vue-i18n | Vue 2/3 with composition or options API |
| Svelte | svelte-i18n, typesafe-i18n | Lightweight, store-based reactivity |
| Vanilla JS / framework-agnostic | i18next, FormatJS IntlMessageFormat | Shared across stacks, extensive plugin ecosystem |
| Build-time extraction | Lingui, typesafe-i18n | Smaller bundles, no runtime parsing |
| Runtime extraction | i18next, react-i18next | Dynamic loading, CMS-driven content |
| Translation management | Phrase, Lokalise, Crowdin, Smartling | Team collaboration, TMS workflows, in-context editing |

**Pragmatic rules**:
- Prefer one i18n library per project. Multiple libraries fragment key conventions and loading behavior.
- If the project is small and static, build-time extraction with JSON/PO files is enough.
- If translations change frequently or non-developers edit them, integrate a TMS early.

## Implementation Dimensions

### Text Expansion and Layout Resilience

**Space budget**:
- Add 30-40% horizontal space for German, Finnish, and other expansion-heavy languages
- Test shortest languages (Chinese, Japanese) for excessive whitespace or broken visual rhythm
- Use min/max widths, not fixed widths, on buttons, labels, and navigation items

**Container behavior**:
- Favor flexbox and grid that adapt to content length
- Allow text wrapping; do not force single-line layouts on labels
- Test truncation behavior when expansion exceeds available space

### RTL and Bidirectional Text

**CSS logical properties**:
```css
/* Use logical properties for margins, padding, borders */
margin-inline-start: 1rem;
padding-inline: 1rem;
border-inline-end: 1px solid;
```

**Direction-aware transforms**:
```css
[dir="rtl"] .arrow { transform: scaleX(-1); }
[dir="rtl"] .timeline { flex-direction: row-reverse; }
```

**Mirroring considerations**:
- Mirror navigation, breadcrumbs, and back buttons
- Do not mirror icons that represent physical objects (clocks, text cursors)
- Do mirror directional icons (arrows, chevrons, progress indicators)
- Test with native RTL speakers; mechanical mirroring often misses cultural patterns

### Formatting and Data Display

**Dates and times**:
- Use `Intl.DateTimeFormat` or library equivalents; never hardcode format strings
- Respect 12-hour vs 24-hour conventions per locale
- Consider calendar systems (Gregorian, Buddhist, Islamic) where relevant

**Numbers and currency**:
- Use `Intl.NumberFormat` for grouping, decimals, and currency symbols
- Currency symbols can prefix or suffix depending on locale (`$1,234.56` vs `1.234,56 €`)
- Display currency codes (USD, EUR) alongside symbols for clarity in multi-currency contexts

**Pluralization, ordinals, and grammar**:
- Use ICU MessageFormat plural rules; do not assume English `one/other`
- Arabic has six plural forms; Polish has four; Welsh has six
- Handle gendered grammar and ordinals (1st, 2nd, 3rd) through message format, not code logic

### Content Beyond Strings

**Images and media**:
- Replace text-in-images with live text whenever possible
- Maintain locale-specific image sets when visuals contain culturally specific content
- Use SVG for icons and diagrams; they scale and mirror more cleanly

**URLs and SEO**:
- Use `hreflang` annotations to indicate language/region variants
- Include locale in canonical URLs
- Localize meta titles and descriptions, not just page content
- Avoid locale-inappropriate keywords in URL slugs

**Legal and compliance content**:
- Maintain region-specific legal copy (terms, privacy, cookie notices)
- Do not auto-translate legal text; use certified legal translators
- Keep compliance content versioned per jurisdiction

## Translation Workflow

**Developer handoff**:
1. Extract strings from code into translation files (JSON, PO, YAML)
2. Add context comments and screenshot references for ambiguous strings
3. Freeze source strings before sending to translation to prevent mid-translation churn
4. Version translation files alongside code releases

**Quality assurance**:
- Review translations for truncation, overflow, and broken layout
- Verify that placeholders and HTML tags are preserved
- Check that gendered translations match the intended context
- Run pseudo-localization (accented expansion) before real translation to catch layout bugs early

**Continuous localization**:
- Integrate TMS with version control (GitHub/GitLab webhooks)
- Automate extraction on pull requests
- Set up translation memory to reduce cost and improve consistency
- Notify translators of new or changed keys promptly

## Testing Localized UI

**Layout testing**:
- Test with longest and shortest supported languages
- Verify RTL layouts with native browser direction switching
- Check truncation, wrapping, and overflow at minimum and maximum viewport widths

**Functional testing**:
- Validate that interpolation variables populate correctly in all locales
- Confirm pluralization rules render correctly (0, 1, 2, 5, 11, 21 items)
- Test locale switching without full page reload where applicable
- Verify that persisted locale preferences survive logout and re-login

**Content testing**:
- Spot-check translations for accuracy and tone consistency
- Verify that legal and compliance copy matches the certified version
- Ensure that localized URLs and SEO metadata are present

## Anti-Patterns

- **Concatenate translated fragments**: Translators need complete sentences. `t('you_have') + count + t('messages')` breaks in most languages.
- **Hardcode locale assumptions**: Do not assume left-to-right, 12-hour time, MM/DD/YYYY, or English plural rules.
- **Auto-translate UI without review**: Machine translation for UI strings produces inconsistent terminology and broken grammar.
- **Ignore text expansion**: Fixed-width buttons and labels break in German and other expansion-heavy languages.
- **Use flags for languages**: A flag represents a country, not a language. Spanish has 20+ countries; English has dozens. Use language names or neutral icons.
- **Redirect based on IP alone**: Travelers, VPN users, and expats get trapped in wrong locales. Suggest, do not force.
- **Skip pseudo-localization**: Running pseudo-locale tests before real translation catches layout and truncation bugs when they are still cheap to fix.
- **Store translations in version control without versioning**: Translation files should be tagged and released alongside code so rollback is possible.
- **Forget to localize error messages**: Untranslated validation errors are a frequent source of user confusion and abandonment.
- **Treat localization as a one-time project**: Languages evolve, products add features, and markets change. Localization is continuous maintenance.

## Verify Localization Readiness

Before shipping a localized product:

- [ ] All user-facing strings are extracted and keyed, not hardcoded
- [ ] Source copy is reviewed for translatability (complete sentences, no idioms)
- [ ] Layouts are tested with longest and shortest target languages
- [ ] RTL scripts are supported with logical properties and directional testing
- [ ] Date, number, and currency formatting use locale-aware APIs
- [ ] Pluralization handles all target language plural forms correctly
- [ ] Locale switching preserves user context and state
- [ ] URLs include locale and use `hreflang` annotations
- [ ] Legal and compliance copy is region-specific and certified
- [ ] Translation workflow is documented and integrated with release cadence
- [ ] Pseudo-localization passes layout and truncation checks before real translation begins