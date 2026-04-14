# Pricing and Packaging

Use this reference when the UI needs to express pricing, plan packaging, billing structure, or plan comparison — especially for pricing pages, plan pickers, billing settings, self-serve checkout, and enterprise contact-sales surfaces.

This library is design-focused, not a substitute for deep monetization consulting. Use the guidance below to ask sharper questions, design clearer pricing surfaces, and avoid misleading packaging.

## Gather the Right Context First

Ask only the missing questions.

### Business context

- what kind of business is this: SaaS, marketplace, ecommerce, services, or something hybrid?
- what does pricing look like today, if anything?
- which market segment matters most right now: SMB, mid-market, enterprise, consumer?
- what is the go-to-market motion: self-serve, sales-led, or hybrid?

### Value and competition

- what is the primary value the product delivers?
- what alternatives do customers compare it against?
- how do the closest competitors package and price?
- what makes this offer meaningfully better than the next-best alternative?

### Current performance

- current conversion rate
- ARPU / average contract size
- churn or retention trend
- recurring pricing objections, sales feedback, or prospect confusion

### Goals

- optimize for growth, revenue, profitability, or a deliberate mix?
- move upmarket, downmarket, or stay focused on the current segment?
- is the main job acquisition, expansion, or retaining existing accounts?

If those answers are unavailable, make the uncertainty explicit instead of pretending the right pricing structure can be inferred from UI alone.

## The Three Pricing Axes

Every pricing surface should make these three axes legible:

1. **Packaging** — what each tier includes
2. **Pricing metric** — what the customer is actually paying for
3. **Price point** — the actual amount and billing cadence

UI often fails because it presents all three as one blurred decision. Separate them clearly:

- package differences belong in comparison structure
- metric explanation belongs near the price and plan labels
- price point clarity belongs near the CTA, toggle, and billing terms

## Value-Based Framing

The useful pricing design question is not "what does this cost us to serve?" but "what value does the customer believe they are getting?"

The practical framing:

- **perceived value** is the ceiling
- **next-best alternative** is the floor for differentiation
- **your price** should land somewhere between them
- **cost to serve** is a constraint, not the design story

For UI work, this means:

- emphasize outcomes before feature inventories
- show why a higher tier becomes worth it, not just that it contains more rows in a table
- make plan differences feel like differences in capability, scale, or support — not arbitrary paywalls

## Choosing a Good Value Metric

Ask this simple question:

**As a customer uses more of this metric, do they usually receive more value?**

If yes, the metric may be a good pricing candidate. If no, the pricing model will feel disconnected or punitive.

### Common value metrics

| Metric | Best for | Notes for UI |
| --- | --- | --- |
| Per user / seat | Collaboration tools | Make included seats, overages, and role differences obvious |
| Per usage | Consumption products | Show units, thresholds, and predictable cost examples |
| Per feature | Modular products | Explain why the feature is paid, not just that it is locked |
| Per contact / record | CRM or messaging tools | Clarify what counts and when counting resets |
| Per transaction | Payments and marketplaces | Show fee math and real-world examples |
| Flat fee | Simple products | Make scope boundaries very clear |

### Good pricing metrics tend to be

- aligned with value delivered
- easy to understand quickly
- able to scale with growth
- reasonably difficult to game

If the metric requires a paragraph to decode, the pricing UI is already in trouble.

## Tier Structure: Good / Better / Best

Three tiers remain the clearest default for many products because they create an entry point, a recommendation anchor, and a premium capture tier without overwhelming the decision.

### Good tier

- purpose: lower the barrier to entry
- includes: core value, lighter limits, fewer advanced controls
- best for: solo users, small teams, cautious buyers

### Better tier

- purpose: where most serious users should land
- includes: the full core experience and the most useful scale unlocks
- best for: growing teams and committed customers
- design role: usually the recommended anchor

### Best tier

- purpose: capture higher willingness to pay
- includes: advanced scale, admin, security, support, or customization
- best for: larger teams, power users, enterprise buyers

### When to use 2, 3, or 4+ tiers

- **2 tiers** when the split is truly simple and the decision can stay binary
- **3 tiers** as the standard default for clear self-serve comparison
- **4+ tiers** only when the market has real segmentation that users can understand without decision paralysis

More tiers create more precision only if the buyer can quickly tell why each tier exists.

## Packaging Strategies

Different products need different differentiation levers. Common ones include:

- **feature gating** — basic vs advanced capability
- **usage limits** — more seats, storage, projects, API calls, or records
- **support levels** — email, priority, dedicated success
- **access and customization** — SSO, audit logs, API access, white labeling, custom contracts

Use packaging that matches how value actually expands.

### Helpful default packaging pattern

- table stakes live in all paid tiers
- real differentiators separate the middle and upper tiers
- enterprise-specific procurement and governance features stay out of the entry tier

Do not gate features that users reasonably expect as basic hygiene unless you can clearly explain why.

## Packaging for Personas

Pricing personas are often different from user personas.

Segment intentionally:

- company size
- sophistication
- use case
- industry
- buying process

Map each persona to:

- willingness to pay
- must-have features
- likely objections
- expected support and procurement needs

Design implication: the plan table should let each persona self-identify fast. Good pricing surfaces help users say "that one is for us" within seconds.

## Freemium vs Free Trial

The UI should reflect the business model instead of treating both as interchangeable.

### Freemium works better when

- the market is large
- low-cost free usage is sustainable
- viral, content, or data network effects matter
- there is a clear limit that creates a fair upgrade trigger

### Free trial works better when

- value needs time to emerge
- setup effort is non-trivial
- higher price points or buying committees are involved
- the product becomes sticky after configuration or adoption

### Design differences

- **freemium** needs limit visibility, upgrade pathways, and a respectful ongoing free experience
- **trial** needs countdown clarity, value summaries, clear expiration behavior, and low-anxiety conversion prompts
- **reverse trial** should clearly explain what remains after downgrade so the user does not feel tricked

## Enterprise and Contact-Sales Tiers

Add custom or contact-sales pricing when the buying motion genuinely changes.

Common signals:

- larger annual contract sizes
- custom legal or procurement requirements
- implementation or onboarding support is required
- security, compliance, or admin controls materially change the product fit

Common enterprise differentiators:

- SSO / SAML
- audit logs
- admin controls
- SLAs
- custom onboarding or success
- security review support
- custom integrations or contracts

Do not hide self-serve pricing behind "contact sales" just to create friction. Use it when the offer is meaningfully custom.

## Pricing Page Anatomy

### Above the fold

- clear plan comparison or at least a legible plan chooser
- one recommended tier, highlighted with restraint
- monthly / annual toggle when relevant
- concrete CTA for each plan

### Supporting content

- feature comparison table or equivalent comparison structure
- brief "who this is for" framing per tier
- FAQ for billing, seats, contracts, refunds, or overages
- annual billing savings callout when real
- proof or trust signals where the purchase decision benefits from them

### Clarity rules

- show the pricing metric beside the number, not in tiny footnotes
- define what happens when limits are reached
- make billing cadence, renewals, and cancellation terms easy to find
- keep plan names meaningful; generic names are fine if the hierarchy is clear, but clever names must not obscure scope

## Pricing Psychology, Used Responsibly

These patterns can improve clarity when they reflect reality. They become dark patterns when they manipulate.

- **anchoring**: a higher tier can make the middle tier easier to evaluate
- **decoy effect**: the middle tier should feel like the best value because it genuinely is, not because other plans are sabotaged
- **charm vs round pricing**: choose based on brand and category signal, not superstition
- **recommended badges**: use one clear recommendation, not three competing "best" labels

Use psychology to reduce decision friction, not to hide tradeoffs.

## Research Methods Worth Knowing

You do not need to run all of these to design a better pricing UI, but you should know what they are so you can ask for stronger inputs.

### Van Westendorp

Useful for finding an acceptable price range by asking respondents when the product feels too cheap, cheap, expensive, and too expensive.

UI implication: if research suggests the current price feels suspiciously low or unreasonably high, the pricing page may need different framing, packaging, or trust support — not just prettier cards.

### MaxDiff

Useful for ranking which features matter most.

Packaging implication:

- top-value items often belong in all paid tiers if they are table stakes
- mid-value items often make good differentiators
- low-value items may not deserve prime placement at all

### Gabor-Granger / conjoint / demand testing

Useful when the team needs more confidence about willingness to pay or feature-price tradeoffs.

Design implication: do not overfit the interface to one price point when the actual problem may be packaging or value communication.

## When a Price Increase UI Pass Is Justified

Common signals include:

- competitor prices moved up
- prospects do not react to current price
- conversion is extremely strong relative to expectations
- churn is unusually low and the product has matured significantly

UI work for a price increase should usually include:

- clearer explanation of new value
- honest treatment of grandfathering or transition rules
- timely billing communication
- updated upgrade and billing flows, not just the public pricing page

## Practical Checklist

Before calling a pricing surface "done," check:

- target personas are defined clearly enough to package around
- the pricing metric aligns with value rather than arbitrary activity
- tier differences are obvious within a few seconds
- the recommended plan is clear without shouting
- annual billing language is accurate and legible
- enterprise buyers know when to self-serve vs contact sales
- billing terms, renewals, and cancellation paths are easy to understand
- the page uses persuasion without dark patterns

## Common Failure Modes

- pricing cards that look nice but hide the actual tradeoffs
- tiers differentiated by filler features rather than meaningful value
- annual savings claims that require math archaeology
- enterprise buried as an afterthought even when it is a major motion
- paywalled basics that feel punitive rather than fair
- comparison tables that are visually dense but not scannable

Good pricing UI makes value, fit, and next steps feel obvious.