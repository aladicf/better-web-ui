# Authentication and Account Recovery

Use this reference when the UI touches sign-in, sign-up, password setup, password reset, social sign-in, email verification, session expiry, two-factor flows, account lockout, or recovering access after users lose a device or email account.

This is an interface and product-behavior guide, not a full identity architecture spec. Use it to reduce abandonment, avoid avoidable friction, and make stronger security feel understandable instead of hostile.

If the main problem is authorization rather than authentication — role models, request-access paths, access-denied recovery, permission editing, or admin-vs-member capability boundaries — also use [permissions and roles UX](./permissions-and-roles-ux.md).

## Start With the Risk Model and the User's Situation

Ask only the missing questions.

### Product and risk context

- how sensitive is the data or action being protected?
- is this a consumer product, internal tool, admin surface, financial product, healthcare product, or something else?
- which moments truly require stronger assurance: sign-in, checkout, payout, account changes, admin actions, or recovery?
- is the product optimizing for low-friction repeat access, high-assurance identity proof, or a careful balance?

### User context

- are users likely to return from the same trusted device?
- do they commonly work in narrow layouts, wide layouts, on shared devices, or while traveling?
- how urgent is access when they are locked out?
- what channels are realistically available: primary email, secondary email, phone, authenticator app, hardware key, support?

### Failure context

- what currently causes abandonment: forgotten passwords, expired sessions, delayed emails, strict password rules, two-factor setup drop-off, or recovery dead ends?
- what recovery methods already exist, and which of them fail most often?

Good authentication UX starts by matching the protection level to the actual risk. Routine access should not feel like a bank vault unless the product truly is one.

## Core Principles

### Optimize for regaining access, not for credential chores

When users are locked out, their job is not “create a brand-new perfect password.” Their job is “get me back in safely, now.”

Design recovery around restoring access with the least safe friction, then let users clean up security settings after they are back in.

### Stronger security should feel targeted, not random

Use extra friction where consequences justify it:

- new devices
- risky geographies or networks
- account recovery
- password changes
- billing, payout, admin, or destructive actions

Avoid treating every routine revisit like a suspicious event when the product and risk level do not require it.

### Give users options before they need them

Recovery works better as a stack than as a single fallback. One method will fail for some users almost every time.

### Explain what is happening in plain language

Authentication creates anxiety quickly. People worry about being hacked, locked out, or losing work.

Use calm, direct copy:

- what happened
- why the extra step is needed
- what the next option is
- how long the wait is, if there is one

## Password UX: Remove Needless Friction

Passwords are already hard enough. Do not make them worse.

### Do

- allow paste, autofill, and password-manager fill in password fields
- support long passphrases and generated passwords
- use `autocomplete="current-password"` for sign-in and `autocomplete="new-password"` for account creation or password change
- provide a show / hide toggle when appropriate
- preserve the typed password after adjacent validation failures when it is safe to do so
- warn about Caps Lock if it materially helps
- let browsers and managers propose strong passwords instead of forcing users to invent one from memory

### Avoid

- blocking copy / paste in password or code fields
- disabling password managers through hostile input behavior
- forcing users to retype long generated passwords repeatedly
- punishing harmless pasted whitespace instead of trimming it safely

## Keep Password Rules Friendly and Honest

Overly theatrical password rules often produce weaker real-world behavior: reused passwords, slight rule-gaming, screenshots, sticky notes, and endless resets.

Prefer rules that are understandable and compatible with password managers:

- require enough length for strong passphrases or generated passwords
- allow special characters instead of narrowing the allowed set carelessly
- show requirements before failure, not only after submission
- reject compromised or obviously weak secrets when the backend can verify that safely

Do not turn password creation into a small tax-audit with eight invisible rules and a red wall of shame.

## Do Not Rely on Passwords Alone When the Stakes Are Higher

If the product protects meaningful value, passwords should rarely be the only line of defense forever.

Useful additions include:

- authenticator app codes
- push approval or OTP flows
- hardware-backed factors where appropriate
- trusted-device or “remember this device” paths for lower-risk repeat visits
- passwordless or lower-friction methods such as magic links when the product can support them well

Good defaults:

- use stronger factors more aggressively for risky moments than for routine return visits
- keep sessions alive for a reasonable period on trusted devices when the product is not unusually sensitive
- preserve the user’s intended destination after any re-authentication step

## Social Sign-In Is an Option, Not a Mandate

Federated sign-in can reduce friction, but not every user wants it.

### Do

- offer social or federated sign-in as one path when it fits the audience
- keep a direct email / password or email / code path available unless the product has a strong reason not to
- remind returning users which method they used last time when that reduces confusion

### Avoid

- making social sign-in the only practical path for a broad audience
- hiding privacy or data-sharing implications
- assuming users remember which provider they chose months ago

## Replace Security Questions With Stronger Recovery Methods

Security questions are often weak in both usability and actual protection.

They are easily forgotten, easily guessed, often discoverable, and frequently answered with throwaway or repeated values.

Prefer recovery methods that prove possession, current access, or higher-confidence identity:

- email links or codes
- authenticator flows
- backup codes
- hardware or device-bound factors
- well-designed support escalation for edge cases

## Treat Recovery as an Access-Recovery Stack

Do not reduce recovery to “reset password.” Recovery should help users get back into the account through several plausible routes.

### Common recovery methods and tradeoffs

| Method | Helpful when | Common failure mode |
| --- | --- | --- |
| Magic link to primary email | User still has inbox access and wants the fastest path | Email delayed, email inaccessible, inbox compromised, or painful context switch |
| Code or link to secondary email | Primary inbox unavailable | Secondary email is stale or forgotten |
| SMS code or link | User has the phone number and needs a familiar fallback | SIM unavailable, travel issues, or phone number changed |
| Authenticator app / push approval | User already set up stronger auth | Old device lost or not migrated |
| Backup recovery codes | User stored them somewhere safe | They are unavailable right when needed |
| Hardware key or dedicated device-bound factor | High-assurance access for prepared users | The key or device is not nearby |
| Human support path | Useful when normal self-serve routes fail | Slower and operationally expensive |

No single method is reliable enough for every user. Combine multiple methods where the risk model allows it.

### Recovery flow design rules

- show alternate methods early instead of burying them behind repeated failure
- explain the fastest recommended path first, then expose fallbacks
- preserve the user’s destination or interrupted task after recovery when possible
- keep the current email or masked phone visible when it helps orientation
- if delivery is delayed, offer resend timing, method switching, and support paths

### Avoid

- emailing temporary passwords
- forcing an immediate new-password ceremony before users can regain basic access when a safer faster route exists
- making users discover alternate recovery methods only after several dead ends

## Reduce Context Switching When Possible

Magic links are fast when everything works, but they often push users into a different app and back again.

When that jump is likely to be painful, consider offering a code-entry fallback on the same screen so the user can complete the task without losing place.

Examples:

- “Check your email for a link, or enter the 6-digit code instead.”
- “Use your authenticator app instead.”
- “Try another email address.”

## Session Expiry, Lockout, and Step-Up States Need Calm Recovery

When sessions expire or accounts are temporarily locked:

- say what happened in plain language
- tell users whether their work was saved
- preserve the destination and any recoverable form state
- offer the most likely recovery action first
- show cooldown timing when rate limits or temporary lockouts apply

Avoid vague messages like “Authentication failed” when the real issue is a timed-out session, a wrong method, or a temporary rate limit.

## Nudge Stronger Setup Without Holding the Product Hostage

Two-factor setup, backup-code generation, and device trust are important, but adoption improves when the prompt feels connected to user value.

Better moments:

- right after successful sign-up
- after recovery, while the user remembers the pain
- before higher-risk actions
- in account settings with clear benefits and backup guidance

Worse moments:

- before users have seen any value
- as a surprise blocker with weak explanation
- as a one-shot setup with no recovery planning

If you ask users to set up a stronger factor, also show how they will recover if that device goes missing.

## Practical UI Checklist

Before calling an auth flow done, check:

- password fields support paste, autofill, and manager-generated values
- password rules are few enough to understand and strong enough to matter
- sign-in offers at least one fallback when the default method fails
- social sign-in is optional unless the product genuinely requires federation
- recovery is framed as getting back in, not merely changing a password
- alternate recovery methods are visible before the user reaches a dead end
- session expiry and lockout states explain the next step clearly
- re-authentication preserves the intended destination when possible
- stronger-factor setup includes backup guidance, not just enrollment

## Common Failure Modes

- disabling paste in password or code fields
- demanding strict composition theater instead of supporting strong generated passwords
- using social sign-in as the only realistic path
- relying on security questions for serious recovery
- treating password reset as the only recovery model
- forcing users through inbox hops with no same-screen fallback
- making lockout and expired-session copy so vague that users cannot tell what happened
- emailing temporary passwords or random replacement credentials

Good authentication UX makes security feel present, explainable, and survivable.