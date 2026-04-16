# UX Writing

Use this reference for interface-level UX writing: labels, errors, empty states, confirmations, helper text, and short product microcopy.

For moments where the real problem is evasive, manipulative, faux-friendly, or overly apologetic interface language — especially in consent, cancellation, upgrades, progress states, and critical system messages — use [interface honesty](./interface-honesty.md).

For broader conversion or positioning work — headlines, landing pages, lifecycle messages, marketplace listing copy, or CTA strategy — use [marketing copywriting](./marketing-copywriting.md).

For editing existing copy in structured passes rather than rewriting from scratch, use [copy editing sweeps](./copy-editing-sweeps.md).

## The Button Label Problem

**Never use "OK", "Submit", or "Yes/No".** These are lazy and ambiguous. Use specific verb + object patterns:

| Bad | Good | Why |
|-----|------|-----|
| OK | Save changes | Says what will happen |
| Submit | Create account | Outcome-focused |
| Yes | Delete message | Confirms the action |
| Cancel | Keep editing | Clarifies what "cancel" means |
| Click here | Download PDF | Describes the destination |

**For destructive actions**, name the destruction:
- "Delete" not "Remove" (delete is permanent, remove implies recoverable)
- "Delete 5 items" not "Delete selected" (show the count)

## Error Messages: The Formula

Every error message should answer: (1) What happened? (2) Why? (3) How to fix it? Example: "Email address isn't valid. Please include an @ symbol." not "Invalid input".

When format or structure is non-obvious, provide an example of correct input instead of forcing users to infer the pattern from repeated failure.

### Error Message Templates

| Situation | Template |
|-----------|----------|
| **Format error** | "[Field] needs to be [format]. Example: [example]" |
| **Missing required** | "Please enter [what's missing]" |
| **Permission denied** | "You don't have access to [thing]. [What to do instead]" |
| **Network error** | "We couldn't reach [thing]. Check your connection and [action]." |
| **Server error** | "Something went wrong on our end. We're looking into it. [Alternative action]" |

### Don't Blame the User

Reframe errors: "Please enter a date in MM/DD/YYYY format" not "You entered an invalid date".

### Prefer specific recovery words over ceremonial filler

Avoid words that add little recovery value on their own, such as:

- raw technical jargon the user cannot act on
- abstract `valid` / `invalid` wording without specifics
- empty apologies or filler that do not explain the next step
- jokey `oops` language in frustrating moments

The goal is not to ban specific words forever. The goal is to prefer language that helps users recover faster.

## Empty States Are Opportunities

Empty states are onboarding moments: (1) Acknowledge briefly, (2) Explain the value of filling it, (3) Provide a clear action. "No projects yet. Create your first one to get started." not just "No items".

## Voice vs Tone

**Voice** is your brand's personality—consistent everywhere.
**Tone** adapts to the moment.

| Moment | Tone Shift |
|--------|------------|
| Success | Celebratory, brief: "Done! Your changes are live." |
| Error | Empathetic, helpful: "That didn't work. Here's what to try..." |
| Loading | Reassuring: "Saving your work..." |
| Destructive confirm | Serious, clear: "Delete this project? This can't be undone." |

**Never use humor for errors.** Users are already frustrated. Be helpful, not cute.

## Prefer active voice and strong verbs

Active voice usually makes interface writing faster to parse and easier to act on.

Prefer:

- `Save changes`
- `Reset password`
- `We sent the invoice`

Over:

- `Changes were saved`
- `Password reset has been completed`
- `The invoice has been sent`

Strong verbs usually do more work than extra adjectives.

## Second-person language helps when it clarifies ownership

`You`, `your`, and related phrasing often help users understand who the action or consequence applies to.

Examples:

- `Review your order`
- `Choose your delivery option`
- `You can change this later`

Do not force second-person phrasing everywhere, but do use it when it reduces ambiguity and makes the next step feel clearer.

## Assertive beats apologetic when clarity matters

Users usually need the interface to sound:

- calm
- direct
- competent

Not:

- evasive
- over-cheerful
- excessively apologetic

Prefer:

- `Incorrect password.`
- `Upload failed. Try again.`
- `Delete project permanently?`

Over:

- `Oops! That doesn’t look quite right.`
- `Sorry, we had a little hiccup.`
- `Are you sure you want to maybe delete this?`

Warmth is fine. Clarity comes first.

## Writing for Accessibility

**Link text** must have standalone meaning—"View pricing plans" not "Click here". **Alt text** describes information, not the image—"Revenue increased 40% in Q4" not "Chart". Use `alt=""` for decorative images. **Icon buttons** need `aria-label` for screen reader context.

## Writing for Translation

### Plan for Expansion

German text is ~30% longer than English. Allocate space:

| Language | Expansion |
|----------|-----------|
| German | +30% |
| French | +20% |
| Finnish | +30-40% |
| Chinese | -30% (fewer chars, but same width) |

### Translation-Friendly Patterns

Keep numbers separate ("New messages: 3" not "You have 3 new messages"). Use full sentences as single strings (word order varies by language). Avoid abbreviations ("5 minutes ago" not "5 mins ago"). Give translators context about where strings appear.

## Consistency: The Terminology Problem

Pick one term and stick with it:

| Inconsistent | Consistent |
|--------------|------------|
| Delete / Remove / Trash | Delete |
| Settings / Preferences / Options | Settings |
| Sign in / Log in / Enter | Sign in |
| Create / Add / New | Create |

Build a terminology glossary and enforce it. Variety creates confusion.

## Avoid Redundant Copy

If the heading explains it, the intro is redundant. If the button is clear, don't explain it again. Say it once, say it well.

If a sentence exists only to point out a UI element users should already understand visually, the design may need work more than the copy does.

## Loading States

Be specific: "Saving your draft..." not "Loading...". For long waits, set expectations ("This usually takes 30 seconds") or show progress.

Progress language should also be truthful. Avoid fake certainty like `Almost there` or `Just a few seconds left` unless the system genuinely knows that.

## Confirmation Dialogs: Use Sparingly

Most confirmation dialogs are design failures—consider undo instead. When you must confirm: name the action, explain consequences, use specific button labels ("Delete project" / "Keep project", not "Yes" / "No").

## Notification and Alert Copy

Not every message deserves the same tone.

### Match tone to attention

- **High attention**: direct, explicit, consequence-first
- **Medium attention**: calm, clear, action-oriented
- **Low attention**: humble, distilled, easy to scan

### Good defaults

- say what happened specifically, not "Something happened"
- say why the user should care now, if they should care at all
- name the next step when action is needed
- keep routine success and info states brief and un-dramatic
- group repetitive updates into summaries instead of rewriting the same sentence ten times

### Prefer calm specificity

| Bad | Better |
| --- | --- |
| You have updates | 3 teammates commented on Q2 planning |
| Action required | Approve the payment request from Maya |
| Success! | Invoice sent to 4 clients |
| Reminder | Weekly summary is ready |

When the event is human-originated, mention the person or source if that improves relevance.

For notification hierarchy, digests, feeds, and interruption level, use [status communication](./status-communication.md).

## Avoid Dark Patterns in Copy and Consent

Copy should help users make informed decisions, not pressure them into product-favoring ones.

Use writing to preserve autonomy:
- make pricing, renewals, billing terms, and data use easy to find and easy to understand
- make opt-in genuinely optional and explicit
- make cancellation, unsubscribe, and downgrade language direct and easy to follow
- name consequences honestly in consent and destructive moments

Avoid writing that manipulates:
- shame copy ("No thanks, I hate saving money")
- misleading button labels or mismatched actions
- fake urgency or fake scarcity claims
- hiding important conditions in low-emphasis helper text
- making the safe option linguistically vague while the product-favoring option is clear and prominent

For broader guidance on assertive language, honest consent wording, progress truthfulness, and avoiding manipulative friendliness in interface copy, use [interface honesty](./interface-honesty.md).

## Form Instructions

Show format with placeholders, not instructions. For non-obvious fields, explain why you're asking.

For broader interaction patterns around error summaries, validation placement, strict validators, and recovery behavior, use [error recovery](./error-recovery.md).

---

**Avoid**: Jargon without explanation. Blaming users ("You made an error" → "This field is required"). Vague errors ("Something went wrong"). Varying terminology for variety. Humor for errors. Manipulative guilt copy. Misleading consent language.
