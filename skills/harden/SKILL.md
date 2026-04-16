---
name: harden
description: Improve interface resilience through better error handling, i18n support, text overflow handling, and edge case management, making interfaces robust and production-ready. Use when the user asks to harden, make production-ready, handle edge cases, add error states, or fix overflow and i18n issues.
metadata:
  argument-hint: "[target]"
---

Strengthen interfaces against edge cases, errors, internationalization issues, and real-world usage scenarios that break idealized designs.

Treat edge cases as design input, not as cleanup after the happy path already shipped.

Consult the [semantic color](../frontend-design/reference/semantic-color.md) reference when designing error, warning, success, and info states so semantic color stays clear and not purely decorative.
Consult the [status communication](../frontend-design/reference/status-communication.md) reference when hardening notification flows, activity feeds, summaries, or alert settings against fatigue and interruption overload.
Consult the [image treatment](../frontend-design/reference/image-treatment.md) when hardening user-uploaded media, screenshots, icon scaling, or image bleed behavior.
Consult the [error-recovery](../frontend-design/reference/error-recovery.md) reference when the task involves validation behavior, summaries, strict validators, recoverable field errors, or abandonment caused by poor recovery design.
Consult the [authentication and account recovery](../frontend-design/reference/authentication-and-account-recovery.md) reference when hardening sign-in, session expiry, password setup, MFA, lockout, or account-recovery flows.
Consult the [permissions and roles UX](../frontend-design/reference/permissions-and-roles-ux.md) reference when hardening role editors, request-access flows, 403 recovery, admin-vs-member surfaces, capability boundaries, or risky permission changes.
Consult the [language and locale selection](../frontend-design/reference/language-and-locale-selection.md) reference when hardening language selectors, regional overrides, currency or shipping preferences, or locale-switching flows that can fail under travel, VPN, or multilingual conditions.
Consult the [component accessibility](../frontend-design/reference/component-accessibility.md) reference when hardening keyboard support, focus indicators, skip links, hidden-content behavior, modal focus management, or accessibility claims in custom and third-party components.
Consult the [empty-state patterns](../frontend-design/reference/empty-state-patterns.md) reference when a failure needs a dedicated route-level recovery page for states like 401, 403, 404, 429, 500, or 503.
Consult the [interaction design](../frontend-design/reference/interaction-design.md) reference when hardening workflows that must stay usable under stress, urgency, operational pressure, or emergency conditions.
Consult the [loading feedback and perceived performance](../frontend-design/reference/loading-feedback-and-perceived-performance.md) reference when hardening loading states, stale-data cues, skeleton usage, or performance-looking states that may be masking brittle real behavior.
Consult the [micro failures and perceived quality](../frontend-design/reference/micro-failures-and-perceived-quality.md) reference when the interface technically works but feels flaky, unstable, or trust-eroding because of tiny repeated jank, state loss, hover traps, weak feedback, or similar papercuts.

## MANDATORY PREPARATION

Users start this workflow with `/harden`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: the risky scenarios, edge cases, and user constraints most likely to break the current flow.

## Assess Hardening Needs

Identify weaknesses and edge cases:

1. **Test with extreme inputs**:
   - Very long text (names, descriptions, titles)
   - Very short text (empty, single character)
   - Special characters (emoji, RTL text, accents)
   - Large numbers (millions, billions)
   - Many items (1000+ list items, 50+ options)
   - No data (empty states)
  - Awkward media (tiny icons, giant screenshots, user-uploaded images with chaotic crops or background colors)

2. **Test error scenarios**:
   - Network failures (offline, slow, timeout)
   - API errors (400, 401, 403, 404, 500)
   - Validation errors
  - Overly strict validators or mismatched formatting expectations
  - Browser back/forward behavior in forms, multi-step flows, and overlays
   - Permission errors
   - Rate limiting
   - Concurrent operations

3. **Test internationalization**:
   - Long translations (German is often 30% longer than English)
   - RTL languages (Arabic, Hebrew)
   - Character sets (Chinese, Japanese, Korean, emoji)
   - Date/time formats
   - Number formats (1,000 vs 1.000)
   - Currency symbols

4. **Test stressed-use contexts**:
  - Small or split-screen workspaces
  - Noisy, interruption-heavy environments
  - Urgent decision-making with low patience
  - Users who need one clear next step instead of a dense control wall

**CRITICAL**: Designs that only work with perfect data aren't production-ready. Harden against reality.

## Hardening Dimensions

Systematically improve resilience:

### Text Overflow & Wrapping

**Long text handling**:
```css
/* Single line with ellipsis */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Multi-line with clamp */
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Allow wrapping */
.wrap {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}
```

**Flex/Grid overflow**:
```css
/* Prevent flex items from overflowing */
.flex-item {
  min-width: 0; /* Allow shrinking below content size */
  overflow: hidden;
}

/* Prevent grid items from overflowing */
.grid-item {
  min-width: 0;
  min-height: 0;
}
```

**Responsive text sizing**:
- Use `clamp()` for fluid typography
- Set minimum readable sizes (14px in compact layouts)
- Test text scaling (zoom to 200%)
- Ensure containers expand with text

### Internationalization (i18n)

**Text expansion**:
- Add 30-40% space budget for translations
- Use flexbox/grid that adapts to content
- Test with longest language (usually German)
- Avoid fixed widths on text containers

```jsx
// ❌ Bad: Assumes short English text
<button className="w-24">Submit</button>

// ✅ Good: Adapts to content
<button className="px-4 py-2">Submit</button>
```

**RTL (Right-to-Left) support**:
```css
/* Use logical properties */
margin-inline-start: 1rem; /* Not margin-left */
padding-inline: 1rem; /* Not padding-left/right */
border-inline-end: 1px solid; /* Not border-right */

/* Or use dir attribute */
[dir="rtl"] .arrow { transform: scaleX(-1); }
```

**Character set support**:
- Use UTF-8 encoding everywhere
- Test with Chinese/Japanese/Korean (CJK) characters
- Test with emoji (they can be 2-4 bytes)
- Handle different scripts (Latin, Cyrillic, Arabic, etc.)

**Date/Time formatting**:
```javascript
// ✅ Use Intl API for proper formatting
new Intl.DateTimeFormat('en-US').format(date); // 1/15/2024
new Intl.DateTimeFormat('de-DE').format(date); // 15.1.2024

new Intl.NumberFormat('en-US', { 
  style: 'currency', 
  currency: 'USD' 
}).format(1234.56); // $1,234.56
```

**Pluralization**:
```javascript
// ❌ Bad: Assumes English pluralization
`${count} item${count !== 1 ? 's' : ''}`

// ✅ Good: Use proper i18n library
t('items', { count }) // Handles complex plural rules
```

### Error Handling

**Network errors**:
- Show clear error messages
- Provide retry button
- Explain what happened
- Offer offline mode (if applicable)
- Handle timeout scenarios

```jsx
// Error states with recovery
{error && (
  <ErrorMessage>
    <p>Failed to load data. {error.message}</p>
    <button onClick={retry}>Try again</button>
  </ErrorMessage>
)}
```

**Form validation errors**:
- Inline errors near fields
- Clear, specific messages
- Suggest corrections
- Don't block submission unnecessarily
- Preserve user input on error
- Allow override paths for real-world formats like address or phone when blocking would create abandonment and the risk model allows it

**API errors**:
- Handle each status code appropriately
  - 400: Show validation errors
  - 401: Prompt sign-in or session refresh, and preserve the intended destination when possible
  - 403: Show a permission state with a clear access path
  - 404: Show a not-found state with strong recovery navigation
  - 429: Show a temporary rate-limit state with retry timing when known
  - 500: Show a server-error state with retry plus a safe fallback or support path
  - 503: Show a maintenance or temporary-outage state with status/ETA when available

When the failure takes over the whole route, design it as a dedicated error page rather than a tiny inline message or toast.

**Graceful degradation**:
- Core functionality works without JavaScript
- Images have alt text
- Progressive enhancement
- Fallbacks for unsupported features

### Edge Cases & Boundary Conditions

#### With Power Comes Responsibility

The more powerful a feature is, the more carefully the interface must communicate consequences and prevent accidental damage.

High-power surfaces include:
- bulk actions
- admin panels
- permission editors
- automation and integrations
- AI tools that can change or generate large amounts of content
- destructive editing, publishing, billing, and account operations

Guardrails to add:
- role-based permissions and clear capability boundaries
- previews, summaries, or counts before high-impact actions run
- undo for reversible actions, confirmations for irreversible or high-cost ones
- audit trails or visible history when actions have organizational consequences
- safe defaults, explicit warnings, and plain-language consequence copy

Power should feel controlled, not risky. If a feature can cause large-scale mistakes, design the interface so users have to understand what will happen before it happens.

**Empty states**:
- No items in list
- No search results
- No notifications
- No data to display
- Provide clear next action

**Notification edge cases**:
- Volume spikes (too many events in a short window)
- Duplicate or near-duplicate notifications
- Stale unread badges after state changes
- Quiet hours, mute, or snooze states not being respected
- Users who need summaries instead of real-time interruption

**Loading states**:
- Initial load
- Pagination load
- Refresh
- Show what's loading ("Loading your projects...")
- Time estimates for long operations

**Large datasets**:
- Pagination or virtual scrolling
- Search/filter capabilities
- Performance optimization
- Don't load all 10,000 items at once

**Concurrent operations**:
- Prevent double-submission (disable button while loading)
- Handle race conditions
- Optimistic updates with rollback
- Conflict resolution

**Permission states**:
- No permission to view
- No permission to edit
- Read-only mode
- Clear explanation of why
- Path to request access or understand who controls the permission when relevant

**Browser compatibility**:
- Polyfills for modern features
- Fallbacks for unsupported CSS
- Feature detection (not browser detection)
- Test in target browsers

### Images, Screenshots & User Media

**User-uploaded images**:
- Force images into controlled containers with deliberate aspect ratios
- Use cover/cropping instead of preserving chaotic intrinsic layouts that break the grid
- Prevent background bleed with a subtle inner shadow or inner border when images blend into the page

**Screenshots**:
- Beware screenshots scaled too small to read
- Prefer tighter crops, partial screenshots, or screenshots taken at a smaller source layout when detail matters

**Icons & visual assets**:
- Don't enlarge tiny icons far beyond the size they were designed for
- Don't shrink detailed artwork so far that it turns to mush

### Input Validation & Sanitization

#### Postel's Law in Forms and Inputs

Be conservative in what the interface outputs, and forgiving about harmless input variation when the system can normalize it safely.

Good resilience moves:
- accept phone numbers with or without spaces, dashes, or country-code punctuation when the meaning is still clear
- trim leading/trailing whitespace automatically instead of failing a required field on a pasted value
- treat case-insensitive identifiers, tags, and search queries consistently when case does not matter
- normalize pasted content gracefully instead of punishing users for bringing data from another tool
- preserve the user's raw input on failure so correction is easy

Be strict only where ambiguity, security, or irreversible errors actually matter. The goal is not permissiveness for its own sake — it is reducing needless precision work.

**Client-side validation**:
- Required fields
- Format validation (email, phone, URL)
- Length limits
- Pattern matching
- Custom validation rules

**Server-side validation** (always):
- Never trust client-side only
- Validate and sanitize all inputs
- Protect against injection attacks
- Rate limiting

**Constraint handling**:
```html
<!-- Set clear constraints -->
<input 
  type="text"
  maxlength="100"
  pattern="[A-Za-z0-9]+"
  required
  aria-describedby="username-hint"
/>
<small id="username-hint">
  Letters and numbers only, up to 100 characters
</small>
```

**Prefer normalization before rejection when safe**:
- normalize whitespace, punctuation, and casing before declaring input invalid
- show users the standardized result when formatting changes affect meaning or confidence
- reject inputs that are unsafe, ambiguous, or materially wrong — but explain why and how to fix them

### Accessibility Resilience

**Keyboard navigation**:
- All functionality accessible via keyboard
- Logical tab order
- Focus management in modals
- Skip links for long content

**Screen reader support**:
- Proper ARIA labels
- Announce dynamic changes (live regions)
- Descriptive alt text
- Semantic HTML

**Motion sensitivity**:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**High contrast mode**:
- Test in Windows high contrast mode
- Don't rely only on color
- Provide alternative visual cues

### Performance Resilience

**Slow connections**:
- Progressive image loading
- Skeleton screens
- Optimistic UI updates
- Offline support (service workers)

**Memory leaks**:
- Clean up event listeners
- Cancel subscriptions
- Clear timers/intervals
- Abort pending requests on unmount

**Throttling & Debouncing**:
```javascript
// Debounce search input
const debouncedSearch = debounce(handleSearch, 300);

// Throttle scroll handler
const throttledScroll = throttle(handleScroll, 100);
```

## Testing Strategies

**Manual testing**:
- Test with extreme data (very long, very short, empty)
- Test in different languages
- Test offline
- Test slow connection (throttle to 3G)
- Test in a noisy, busy, or split-screen environment when the product is used under operational pressure
- Test with screen reader
- Test keyboard-only navigation
- Test on old browsers
- Run at least one stress or emergency drill if the workflow includes incidents, deadlines, approvals, or other high-stakes moments

**Automated testing**:
- Unit tests for edge cases
- Integration tests for error scenarios
- E2E tests for critical paths
- Visual regression tests
- Accessibility tests (axe, WAVE)

**IMPORTANT**: Hardening is about expecting the unexpected. Real users will do things you never imagined.

**NEVER**:
- Assume perfect input (validate everything)
- Ignore internationalization (design for global)
- Leave error messages generic ("Error occurred")
- Forget offline scenarios
- Trust client-side validation alone
- Use fixed widths for text
- Assume English-length text
- Block entire interface when one component errors
- Let user-uploaded images dictate layout shape and spacing
- Scale screenshots so small that the content becomes illegible
- Blow up tiny icons past their intended visual size and call it "responsive"

## Verify Hardening

Test thoroughly with edge cases:

- **Long text**: Try names with 100+ characters
- **Emoji**: Use emoji in all text fields
- **RTL**: Test with Arabic or Hebrew
- **CJK**: Test with Chinese/Japanese/Korean
- **Network issues**: Disable internet, throttle connection
- **Large datasets**: Test with 1000+ items
- **Concurrent actions**: Click submit 10 times rapidly
- **Errors**: Force API errors, test all error states
- **Empty**: Remove all data, test empty states

Remember: You're hardening for production reality, not demo perfection. Expect users to input weird data, lose connection mid-flow, and use your product in unexpected ways. Build resilience into every component.