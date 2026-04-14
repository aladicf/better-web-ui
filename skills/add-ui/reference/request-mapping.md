## Request mapping heuristics

Use this reference to shape the five directions for common request types.

When React-based fallback defaults are relevant, pair this with [component library integration](./component-library-integration.md) so you decide not just *what* artifact is being requested, but also whether that artifact should be led by primitives, reusable patterns, or block accelerators.

### Hero / landing / CTA

Prioritize:

- hierarchy first
- strong typography
- believable proof
- one obvious primary action

### Pricing / comparison / plan selection

Prioritize:

- scanability
- difference clarity
- action confidence
- plan framing that reduces hesitation

Also:

- ask for the pricing metric and target buyer when missing
- make packaging, metric, and price point legible as separate decisions
- show who each tier is for instead of relying on feature sprawl alone
- make annual billing, limits, and enterprise escalation easy to understand

Pair this with [../../frontend-design/reference/pricing-and-packaging.md](../../frontend-design/reference/pricing-and-packaging.md) when the work touches packaging logic, billing clarity, or pricing-page strategy.

### Paywalls / upgrade prompts / trial expiration

Prioritize:

- value before ask
- timing that follows a real aha or limit moment
- clear explanation of what unlocks and why it matters
- an honest path to dismiss, continue free, or choose a lower-friction alternative when one exists

Also:

- match the prompt type to the situation: feature gate, usage limit, trial ending, or tier upsell
- keep the upgrade path short and in-context
- do not rely on dark patterns to lift conversion

Pair this with [../../frontend-design/reference/paywalls-and-upgrade-flows.md](../../frontend-design/reference/paywalls-and-upgrade-flows.md).

### Auth / account / settings

Prioritize:

- clarity
- reassurance
- error resilience
- reduced ambiguity over decorative flourish

### Dashboard / charts / widgets / data tables

Prioritize:

- information hierarchy
- density control
- state handling
- labeling clarity

### Commerce flows

Prioritize:

- friction reduction
- trust signals
- legible totals and decisions
- clean path to completion

### Content surfaces

Prioritize:

- readability
- rhythm
- framing and sequencing of content
- restraint before decoration