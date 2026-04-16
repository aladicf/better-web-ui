# Error Recovery

Use this reference when the work involves validation, form errors, inline recovery, error summaries, strict validators, or any interaction where users need help understanding and fixing a problem instead of just being told that one exists.

Good error recovery is not only about message wording.

It is about helping users notice the problem, understand it, keep context while fixing it, and continue without unnecessary frustration or abandonment.

## Not all errors are equal

Two useful buckets:

- **slips** — the user meant the right thing but executed it incorrectly
- **mistakes** — the user's mental model does not match the system's rules or expectations

### Slips usually benefit from prevention and gentle recovery

Helpful moves:

- useful constraints and input structure
- autocomplete and recovery suggestions
- sane defaults and presets
- forgiving formatting and normalization
- specific field-level guidance about what is wrong

### Mistakes usually need better expectation-setting

Helpful moves:

- examples of correct input
- early explanation of rules or limits
- confirmation for destructive actions
- the ability to review, revise, or back out
- a visible way forward instead of a dead end

## Error-focused success metrics

If error handling matters to the business, track it like a real experience problem rather than a visual detail.

Useful signals include:

- average number of errors in a task or journey
- recovery time after an error appears
- completion rate after validation failure
- completion time for flows with frequent validation or correction

## Never rely on color alone

Red is helpful, but it is not enough on its own.

Good defaults:

- pair error color with clear wording
- add an icon or other non-color cue when the state needs stronger visibility
- consider highlighting the surrounding field group, not only the tiny message line
- keep the label, field, hint, and error visually connected so the relationship is obvious

## Error summaries should improve discovery

If users can miss field-level errors, use an error summary.

Good defaults:

- place the summary where users are likely to notice it first
- make the summary items link to the relevant fields or regions
- when the page fully refreshes on submit, place the summary near the top of the page
- when validation happens in place without a full refresh, placing a summary near the submit action can work well because it appears close to the user's last click

### Avoid poor placement

- do not hide the only summary below the submit button where it can fall outside the viewport
- do not make users re-scan a long form blindly to locate the problem

## Prefer links before forced jumps

Auto-scrolling to the first error can help some users, but it can also feel abrupt or disorienting.

Safer baseline:

- start with an error summary that links to the problems
- add auto-scroll only when testing shows that discovery is still too slow
- avoid sudden auto-jumps with weak orientation cues

If the product does scroll users automatically, keep the movement understandable and preserve enough context that users know where they landed.

## Never cover the input while users are fixing it

Users should be able to see:

- the field they are editing
- the error message
- any extra help needed to fix it

Avoid recovery patterns where a tooltip, popup, or temporary overlay hides the field or the message the user needs to reference.

Better defaults:

- keep the field and the error visible at the same time
- use inline expansion, `details/summary`, or an accordion when extra help is needed
- reserve hover-only tooltips for non-essential clarification rather than primary recovery guidance

## Form field placement tradeoffs

Field-level errors are often shown below inputs, but that is not always the best choice.

Placing an error above the field can help when:

- a virtual keyboard could cover the message in a narrow layout
- browser autofill or autocomplete could overlap the message below
- magnification makes right-side or lower placement easy to miss

Tradeoff:

- above-field errors can create more visible layout shift when they appear dynamically

Choose the placement that preserves discoverability and recoverability in the actual context of use, not the placement that merely looks tidier in a static mock.

## Tables need inline recovery, not distant scolding

For data tables and row-based forms:

- show errors in the affected row whenever possible
- let the row expand or reveal more detail if the explanation is long
- if the same problem affects many rows, add a page-level summary that explains the issue once and point users to the affected rows

Do not force table users to reconcile a distant generic message with many possible row-level causes.

## Toasts are a weak default for recoverable input errors

Toasts are usually a poor primary container for form or table validation because they:

- appear far from the field that caused the issue
- can disappear before users finish reading them
- may cover content the user still needs
- make field-level recovery harder to perform and understand at the same time

Prefer inline errors, field groups, summaries, or persistent contextual alerts for fixable input problems.

## Allow validator override when the cost of blocking is higher

Some validators are helpful but imperfect.

Allowing an override can be appropriate when:

- addresses, names, or phone numbers vary in real-world ways the validator cannot model reliably
- blocking the user entirely would create abandonment with no safe alternative

Use override carefully:

- explain the warning clearly
- let users continue intentionally
- measure the downstream operational cost against the abandonment cost

Do **not** use loose override rules for inputs that must obey strict technical constraints such as checksums, card numbers, or similar convention-bound identifiers.

## Examples are often the fastest recovery aid

When format or structure is non-obvious, show an example of correct input before users fail.

Examples help especially for:

- dates and time formats
- addresses or phone numbers
- IDs and account references
- file or upload constraints
- structured business fields with unfamiliar conventions

If one short example can save users multiple failed attempts, it is usually worth the space.

## Error copy should be specific, not ceremonial

Prefer messages that name the actual issue and the likely fix.

Avoid copy that adds emotional theater without helping recovery, such as:

- unexplained technical jargon
- abstract `valid` / `invalid` language without specifics
- empty apologies or filler
- humor in frustrating moments

If a word does not help users notice, understand, or fix the problem, it is probably decoration.

## Practical checklist

- distinguish slip prevention from mistake recovery
- track recovery quality, not only final success/failure
- never rely on red alone to communicate an error
- use summaries to improve discovery when users can miss local errors
- avoid covering the field or the message while users correct input
- choose above/below placement based on real recoverability, not static neatness
- keep table errors close to the affected rows
- avoid toasts as the main home for fixable validation issues
- allow validator override only where real-world variation justifies it
- show examples when structure is not obvious

## Anti-patterns

Avoid:

- generic errors with no recovery path
- blocking users with overly strict validators and no override or explanation
- error messages discovered only by color
- summaries hidden below the primary action
- auto-jumps that disorient users without enough context
- help content that obscures the very field users need to edit

Error recovery is good UX when it helps users continue with confidence instead of making them feel corrected by the machine.

For deeper guidance on **when** validation should happen — including late validation, empty-field timing, reward-early/punish-late logic, copy-paste-friendly validation, just-in-time verification, and override strategy — use [live validation UX](./live-validation-ux.md).