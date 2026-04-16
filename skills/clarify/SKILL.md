---
name: clarify
description: Improve UX writing, marketing copy, labels, microcopy, instructions, and error messages so interfaces and product messaging are easier to understand and act on. Use when the user mentions confusing copy, unclear labels, bad error text, weak CTAs, hard-to-follow instructions, or wanting better UX writing.
metadata:
   argument-hint: "[target]"
---

Identify and improve unclear, confusing, or poorly written product text to make the product easier to understand, trust, and act on.

## MANDATORY PREPARATION

Users start this workflow with `/clarify`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: audience technical level, users' mental state in context, and whether you are writing new copy or editing existing copy.

Consult the [ux-writing reference](../frontend-design/reference/ux-writing.md) for labels, errors, empty states, confirmations, and interface microcopy.
Consult the [interface honesty](../frontend-design/reference/interface-honesty.md) reference when the copy problem involves manipulative friendliness, evasive progress language, consent wording, cancellation language, upgrade pressure, or any surface that should sound more assertive and truthful.
Consult the [error-recovery](../frontend-design/reference/error-recovery.md) reference when copy changes depend on validation behavior, summaries, examples of correct input, or recoverability patterns rather than wording alone.
Consult the [status communication](../frontend-design/reference/status-communication.md) reference when the wording touches notifications, alerts, badges, digests, reminders, or notification settings.
Consult [marketing copywriting](../frontend-design/reference/marketing-copywriting.md) when the work touches headlines, landing pages, feature pages, onboarding promises, lifecycle messaging, marketplace listings, or CTA strategy.
Consult [copy editing sweeps](../frontend-design/reference/copy-editing-sweeps.md) when improving existing copy through focused editing passes instead of rewriting it wholesale.

---

## Assess Current Copy

Identify what makes the text unclear or ineffective:

1. **Find clarity problems**:
   - **Jargon**: Technical terms users won't understand
   - **Ambiguity**: Multiple interpretations possible
   - **Passive voice**: "Your file has been uploaded" vs "We uploaded your file"
   - **Length**: Too wordy or too terse
   - **Assumptions**: Assuming user knowledge they don't have
   - **Missing context**: Users don't know what to do or why
   - **Tone mismatch**: Too formal, too casual, or inappropriate for situation

2. **Understand the context**:
   - Who's the audience? (Technical? General? First-time users?)
   - What's the user's mental state? (Stressed during error? Confident during success?)
   - What's the action? (What do we want users to do?)
   - What's the constraint? (Character limits? Space limitations?)
   - Is this interface microcopy, marketing copy, onboarding copy, or lifecycle copy?
   - Are we creating net-new copy or editing existing copy?

**CRITICAL**: Clear copy helps users succeed. Unclear copy creates frustration, errors, and support tickets.

## Plan Copy Improvements

Create a strategy for clearer communication:

Consult the [text hierarchy and readability](../frontend-design/reference/text-hierarchy-and-readability.md) for label/value rules, alignment, link emphasis, and when labels should be removed, combined, secondary, or intentionally emphasized.

Use that shared text reference as the canonical source for label/value structure and reading-oriented text rules, then apply the copy-specific improvements in this skill.

When the task is broader than interface microcopy, use [marketing copywriting](../frontend-design/reference/marketing-copywriting.md) to gather the right positioning context, choose stronger structure, and sharpen CTAs.

When you are improving existing copy, run the [copy editing sweeps](../frontend-design/reference/copy-editing-sweeps.md) so changes happen in focused passes instead of one unfocused rewrite.

- **Primary message**: What's the ONE thing users need to know?
- **Action needed**: What should users do next (if anything)?
- **Tone**: How should this feel? (Helpful? Apologetic? Encouraging?)
- **Constraints**: Length limits, brand voice, localization considerations

**IMPORTANT**: Good UX writing is invisible. Users should understand immediately without noticing the words.

## Improve Copy Systematically

Refine text across these common areas:

### Labels, Values & Scannability

Sometimes the clearest copy change is removing a label entirely.

**Prefer**:
- `12 left in stock` over `In stock: 12`
- `3 bedrooms` over `Bedrooms: 3`
- `janedoe@example.com` without an extra "Email" label when context already makes it obvious

**Principles**:
- Labels are a last resort when the value or context already explains itself
- Combine label and value when that makes the content faster to scan
- When labels are necessary, treat them as supporting content unless users are scanning for the label first
- In dense technical tables/specs/settings, the label may deserve more emphasis than the value

### Error Messages
**Bad**: "Error 403: Forbidden"
**Good**: "You don't have permission to view this page. Contact your admin for access."

**Bad**: "Invalid input"
**Good**: "Email addresses need an @ symbol. Try: name@example.com"

**Principles**:
- Explain what went wrong in plain language
- Suggest how to fix it
- Don't blame the user
- Include examples when helpful
- Link to help/support if applicable

### Form Labels & Instructions
**Bad**: "DOB (MM/DD/YYYY)"
**Good**: "Date of birth" (with placeholder showing format)

**Bad**: "Enter value here"
**Good**: "Your email address" or "Company name"

**Principles**:
- Use clear, specific labels (not generic placeholders)
- Show format expectations with examples
- Explain why you're asking (when not obvious)
- Put instructions before the field, not after
- Keep required field indicators clear
- For forms, labels still matter — this is where labels are usually not optional

### Button & CTA Text
**Bad**: "Click here" | "Submit" | "OK"
**Good**: "Create account" | "Save changes" | "Got it, thanks"

**Principles**:
- Describe the action specifically
- Use active voice (verb + noun)
- Match user's mental model
- Be specific ("Save" is better than "OK")

### Help Text & Tooltips
**Bad**: "This is the username field"
**Good**: "Choose a username. You can change this later in Settings."

**Principles**:
- Add value (don't just repeat the label)
- Answer the implicit question ("What is this?" or "Why do you need this?")
- Keep it brief but complete
- Link to detailed docs if needed

### Empty States
**Bad**: "No items"
**Good**: "No projects yet. Create your first project to get started."

**Principles**:
- Explain why it's empty (if not obvious)
- Show next action clearly
- Make it welcoming, not dead-end

### Success Messages
**Bad**: "Success"
**Good**: "Settings saved! Your changes will take effect immediately."

**Principles**:
- Confirm what happened
- Explain what happens next (if relevant)
- Be brief but complete
- Match the user's emotional moment (celebrate big wins)

### Loading States
**Bad**: "Loading..." (for 30+ seconds)
**Good**: "Analyzing your data... this usually takes 30-60 seconds"

**Principles**:
- Set expectations (how long?)
- Explain what's happening (when it's not obvious)
- Show progress when possible
- Offer escape hatch if appropriate ("Cancel")

### Confirmation Dialogs
**Bad**: "Are you sure?"
**Good**: "Delete 'Project Alpha'? This can't be undone."

**Principles**:
- State the specific action
- Explain consequences (especially for destructive actions)
- Use clear button labels ("Delete project" not "Yes")
- Don't overuse confirmations (only for risky actions)

### Navigation & Wayfinding
**Bad**: Generic labels like "Items" | "Things" | "Stuff"
**Good**: Specific labels like "Your projects" | "Team members" | "Settings"

**Principles**:
- Be specific and descriptive
- Use language users understand (not internal jargon)
- Make hierarchy clear
- Consider information scent (breadcrumbs, current location)

## Apply Clarity Principles

Every piece of copy should follow these rules:

1. **Be specific**: "Enter email" not "Enter value"
2. **Be concise**: Cut unnecessary words (but don't sacrifice clarity)
3. **Be active**: "Save changes" not "Changes will be saved"
4. **Be human**: "Oops, something went wrong" not "System error encountered"
5. **Be helpful**: Tell users what to do, not just what happened
6. **Be consistent**: Use same terms throughout (don't vary for variety)
7. **Use labels sparingly**: If the meaning is obvious from context or format, skip the extra label
8. **De-emphasize helper labels**: The primary content should carry the visual weight unless users are scanning for field names/spec names

**NEVER**:
- Use jargon without explanation
- Blame users ("You made an error" → "This field is required")
- Be vague ("Something went wrong" without explanation)
- Use passive voice unnecessarily
- Write overly long explanations (be concise)
- Use humor for errors (be empathetic instead)
- Assume technical knowledge
- Vary terminology (pick one term and stick with it)
- Repeat information (headers restating intros, redundant explanations)
- Use placeholders as the only labels (they disappear when users type)
- Force every piece of data into a rigid `label: value` format when the value can stand on its own

## Verify Improvements

Test that copy improvements work:

- **Comprehension**: Can users understand without context?
- **Actionability**: Do users know what to do next?
- **Brevity**: Is it as short as possible while remaining clear?
- **Consistency**: Does it match terminology elsewhere?
- **Tone**: Is it appropriate for the situation?

Remember: You're a clarity expert with excellent communication skills. Write like you're explaining to a smart friend who's unfamiliar with the product. Be clear, be helpful, be human.