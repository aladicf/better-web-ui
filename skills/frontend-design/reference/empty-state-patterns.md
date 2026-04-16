# Empty State Patterns

Empty states are product moments, not placeholders.

Most empty states should answer four questions quickly:
- What is this area for?
- Why is it useful?
- What should I do next?
- Is there an easier starting point, like a template or example?

## First-Use Empty State

Use when the user has never created content here before.

### Include
- clear description of what will appear here
- why it matters or what value it unlocks
- strong primary CTA
- optional template or starter example
- visual interest if it helps attention

### Also consider
- hide tabs, filters, sidebars, or controls that do nothing yet

## No-Results State

Use when data exists in general but current search/filter settings return nothing.

### Include
- explanation of why nothing is shown
- clear recovery path: clear filters, change query, broaden scope
- preserve context so the user understands what caused the empty result

## Cleared-Content State

Use when the user intentionally removed all items.

### Include
- lighter tone than a first-use state
- clear re-entry point to create new content again
- optional undo or recovery if appropriate

## Permission Empty State

Use when the user can see the surface but lacks access to the content or controls.

### Include
- plain-language explanation of the restriction
- who can grant access or what role is needed
- contact/request access CTA when appropriate

For deeper guidance on role models, request-access paths, capability boundaries, and risky permission changes, also use [permissions and roles UX](./permissions-and-roles-ux.md).

## Error Empty State

Use when content should exist but a section of the interface failed to load or complete, while the surrounding page can still orient the user.

### Include
- what went wrong in simple terms
- retry path
- fallback or support path when retry isn’t enough
- enough surrounding context that users still understand where they are

### Good defaults

- keep the failure local when the rest of the page still works
- preserve user work, filters, or navigation context when possible
- prefer specific recovery text over generic `Something went wrong`

## Full-Page Error Pages

Use when the whole route, document, or task surface cannot continue safely and needs a dedicated recovery page rather than a small inline state.

### Good defaults

- match the message to the failure type instead of collapsing everything into one generic error page
- lead with the most likely recovery action, not with technical jargon or status codes alone
- own product-side failures without blaming the user
- explain what happens to in-progress work when that question is likely to matter
- keep playful tone for low-stakes cases only; use calmer, more trustworthy language for billing, admin, security, or destructive contexts

## 401 / Sign-In Required / Session Expired

Use when the user must authenticate again before the page can load or the action can continue.

### Include

- a plain explanation that the session expired or sign-in is required
- a strong `Sign in again` or `Continue to sign in` CTA
- preservation of the intended destination when possible
- a brief note about whether drafts or in-progress work were saved

### Avoid

- dropping users onto a generic home page after re-auth without returning them to the interrupted task
- phrasing that sounds like a permission problem when the real issue is authentication

## 403 / Access Denied State

Use when the user is signed in but does not have permission to view the route, resource, or action.

### Include

- a plain-language explanation of the restriction
- the role, plan, workspace, or owner approval needed when known
- a useful next step such as `Request access`, `Switch account`, or `Back to workspace`
- a read-only fallback when the user can still benefit from limited context

### Avoid

- retry-first guidance when no amount of refreshing will change the permission
- copy that makes the user guess whether the page is missing or merely restricted

## 404 / Not Found State

Use when the user reached a route or page that does not exist, was moved, or was linked incorrectly.

### Include

- a plain acknowledgement that the page cannot be found
- brand-consistent tone so the state feels like part of the product rather than a server shrug
- a strong recovery path such as home, search, or the most likely next destination
- optional support actions like `Go back`, `Report broken link`, or `Contact support` when they add real value
- popular destinations or categories when the product is content-heavy or broad

### Good defaults

- own the problem instead of implying the user simply failed
- use personality carefully: friendly, clever, or lightly funny can help, but navigation must still do the real work
- keep the recovery actions more prominent than the decorative illustration
- make the recovery paths work well in narrow layouts too, not just in wide ones

### Useful recovery actions

- `Back to home`
- `Search the site`
- `Go back`
- `Browse popular sections`
- `Report this problem`

### Avoid

- cold dead-end copy with no next step
- joke-first pages that make users laugh but not recover
- decorative 404 pages that ignore navigation entirely
- generic server tone that breaks the product voice completely

## 429 / Rate-Limited State

Use when the user hit a temporary limit and the page or action cannot proceed yet.

### Include

- a plain explanation that the limit is temporary
- when the user can retry, if the system knows
- practical guidance such as waiting, reducing request frequency, or changing batch size
- support or upgrade path only when it is genuinely relevant

### Avoid

- alarmist server-crash tone for a temporary throttling event
- hiding the cooldown entirely when retry timing is known

## 500 / Server Error State

Use when the product failed unexpectedly and the page cannot recover inline.

### Include

- a straightforward acknowledgement that the product hit a problem
- a clear `Try again` path
- a safe fallback such as home, dashboard, recent items, or previous stable area
- support, status, or bug-report path when that actually helps users move forward

### Avoid

- raw stack traces or internal implementation details in user-facing copy
- making retry the only option when users also need a dependable escape route

## 503 / Maintenance / Temporarily Unavailable State

Use when a service is down temporarily, under maintenance, or intentionally unavailable for a short period.

### Include

- a clear explanation that the interruption is temporary
- expected timing or next update moment when known
- a status page or incident link when available
- what still works, if some parts of the product remain usable

### Avoid

- vague copy that leaves users guessing whether the outage is planned, temporary, or permanent
- making the product feel abandoned when a calm maintenance message would restore trust

## Empty-State CTA Rules

- The primary CTA should be stronger than surrounding chrome
- Secondary links should not compete with the next-step action
- If no action is currently possible, say why and what to do instead

## Visual Treatment Rules

- Use illustration or icon only when it helps attention or comprehension
- Keep decoration secondary to the message and CTA
- Empty-state delight is often more appropriate than adding flair to dense task screens

## Quick Checklist

- Does this explain what belongs here?
- Does it explain why users should care?
- Is the next action obvious?
- Is inactive chrome hidden if it adds no value yet?
- Is the tone appropriate for first use, no results, permission, 404, or the specific failure type?

---

**Avoid**: Blank surfaces with “No items.” Leaving dead filters or empty tabs visible. Making the illustration louder than the CTA.