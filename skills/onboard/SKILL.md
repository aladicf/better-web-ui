---
name: onboard
description: Design onboarding and activation flows that help users reach value quickly. Use when the user mentions onboarding, getting started, first-time users, activation, aha moments, or new user flows—not when the work is only the empty-state surface itself.
metadata:
   argument-hint: "[target]"
---

## MANDATORY PREPARATION

Users start this workflow with `/onboard`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: the "aha moment" you want users to reach, and users' experience level.

Consult the [empty-state patterns](../frontend-design/reference/empty-state-patterns.md) when zero-data surfaces are part of the onboarding journey.
Consult the [cognitive load](../frontend-design/reference/cognitive-load.md) when deciding what to hide, sequence, or progressively disclose for first-time users.
Consult the [ux-writing reference](../frontend-design/reference/ux-writing.md) when onboarding clarity depends on labels, hints, reassurance copy, or CTA wording.

---

Create or improve onboarding experiences that help users understand, adopt, and succeed with the product quickly.

This skill owns onboarding strategy, activation, and time-to-value. For the detailed design of zero-data surfaces themselves, use `empty-state`.

## Assess Onboarding Needs

Understand what users need to learn and why:

1. **Identify the challenge**:
   - What are users trying to accomplish?
   - What's confusing or unclear about current experience?
   - Where do users get stuck or drop off?
   - What's the "aha moment" we want users to reach?

2. **Understand the users**:
   - What's their experience level? (Beginners, power users, mixed?)
   - What's their motivation? (Excited and exploring? Required by work?)
   - What's their time commitment? (5 minutes? 30 minutes?)
   - What alternatives do they know? (Coming from competitor? New to category?)

3. **Define success**:
   - What's the minimum users need to learn to be successful?
   - What's the key action we want them to take? (First project? First invite?)
   - How do we know onboarding worked? (Completion rate? Time to value?)

**CRITICAL**: Onboarding should get users to value as quickly as possible, not teach everything possible.

Empty states are not an afterthought. For many features, the empty state is the user's first real experience of the product.

## Onboarding Principles

Follow these core principles:

### Show, Don't Tell
- Demonstrate with working examples, not just descriptions
- Provide real functionality in onboarding, not separate tutorial mode
- Use progressive disclosure - teach one thing at a time

### Make It Optional (When Possible)
- Let experienced users skip onboarding
- Don't block access to product
- Provide "Skip" or "I'll explore on my own" options

### Time to Value
- Get users to their "aha moment" ASAP
- Front-load most important concepts
- Teach 20% that delivers 80% of value
- Save advanced features for contextual discovery

### Peak-End Rule
- Smooth the most stressful moments (waiting, signup friction, permissions, payments, destructive confirmations)
- Make the first meaningful success feel clearly successful
- End onboarding steps with confirmation, summary, and an obvious next move
- Do not let the final step feel vague, stalled, or anticlimactic

### Context Over Ceremony
- Teach features when users need them, not upfront
- Empty states are onboarding opportunities
- Tooltips and hints at point of use

### Empty States Are Product Surfaces
- Treat empty states as priority screens, not placeholders
- Show what will appear here, why it matters, and what to do next
- Make the empty-state CTA stronger than surrounding chrome
- Hide controls that are inactive or meaningless until content exists

### Respect User Intelligence
- Don't patronize or over-explain
- Be concise and clear
- Assume users can figure out standard patterns

## Design Onboarding Experiences

Create appropriate onboarding for the context:

### Initial Product Onboarding

**Welcome Screen**:
- Clear value proposition (what is this product?)
- What users will learn/accomplish
- Time estimate (honest about commitment)
- Option to skip (for experienced users)

**Account Setup**:
- Minimal required information (collect more later)
- Explain why you're asking for each piece of information
- Smart defaults where possible
- Social login when appropriate

**Core Concept Introduction**:
- Introduce 1-3 core concepts (not everything)
- Use simple language and examples
- Interactive when possible (do, don't just read)
- Progress indication (step 1 of 3)

**First Success**:
- Guide users to accomplish something real
- Pre-populated examples or templates
- Celebrate completion (but don't overdo it)
- Clear next steps

### Feature Discovery & Adoption

**Empty States**:
Instead of blank space, show:
- What will appear here (description + screenshot/illustration)
- Why it's valuable
- Clear CTA to create first item
- Example or template option
- Remove tabs, filters, sidebars, or controls that do nothing yet

Example:
```
No projects yet
Projects help you organize your work and collaborate with your team.
[Create your first project] or [Start from template]
```

**Contextual Tooltips**:
- Appear at relevant moment (first time user sees feature)
- Point directly at relevant UI element
- Brief explanation + benefit
- Dismissable (with "Don't show again" option)
- Optional "Learn more" link

**Feature Announcements**:
- Highlight new features when they're released
- Show what's new and why it matters
- Let users try immediately
- Dismissable

**Progressive Onboarding**:
- Teach features when users encounter them
- Badges or indicators on new/unused features
- Unlock complexity gradually (don't show all options immediately)

### Guided Tours & Walkthroughs

**When to use**:
- Complex interfaces with many features
- Significant changes to existing product
- Industry-specific tools needing domain knowledge

**How to design**:
- Spotlight specific UI elements (dim rest of page)
- Keep steps short (3-7 steps max per tour)
- Allow users to click through tour freely
- Include "Skip tour" option
- Make replayable (help menu)

**Best practices**:
- Interactive > passive (let users click real buttons)
- Focus on workflow, not features ("Create a project" not "This is the project button")
- Provide sample data so actions work

### Interactive Tutorials

**When to use**:
- Users need hands-on practice
- Concepts are complex or unfamiliar
- High stakes (better to practice in safe environment)

**How to design**:
- Sandbox environment with sample data
- Clear objectives ("Create a chart showing sales by region")
- Step-by-step guidance
- Validation (confirm they did it right)
- Graduation moment (you're ready!)

### Documentation & Help

**In-product help**:
- Contextual help links throughout interface
- Keyboard shortcut reference
- Search-able help center
- Video tutorials for complex workflows

**Help patterns**:
- `?` icon near complex features
- "Learn more" links in tooltips
- Keyboard shortcut hints (`⌘K` shown on search box)

## Empty State Design

Every empty state needs:

### What Will Be Here
"Your recent projects will appear here"

### Why It Matters  
"Projects help you organize your work and collaborate with your team"

### How to Get Started
[Create project] or [Import from template]

### Visual Interest
Illustration or icon (not just text on blank page)

### Contextual Help
"Need help getting started? [Watch 2-min tutorial]"

### Empty-State Template
- **What this area is for**
- **Why it's useful**
- **Primary CTA**
- **Optional template/example**
- **Remove inactive tabs / filters / sidebar clutter until content exists**

**Empty state types**:
- **First use**: Never used this feature (emphasize value, provide template)
- **User cleared**: Intentionally deleted everything (light touch, easy to recreate)
- **No results**: Search or filter returned nothing (suggest different query, clear filters)
- **No permissions**: Can't access (explain why, how to get access)
- **Error state**: Failed to load (explain what happened, retry option)

## Implementation Patterns

### Technical approaches:

**Tooltip libraries**: Tippy.js, Popper.js
**Tour libraries**: Intro.js, Shepherd.js, React Joyride
**Modal patterns**: Focus trap, backdrop, ESC to close
**Progress tracking**: LocalStorage for "seen" states
**Analytics**: Track completion, drop-off points

**Storage patterns**:
```javascript
// Track which onboarding steps user has seen
localStorage.setItem('onboarding-completed', 'true');
localStorage.setItem('feature-tooltip-seen-reports', 'true');
```

**IMPORTANT**: Don't show same onboarding twice (annoying). Track completion and respect dismissals.

**NEVER**:
- Force users through long onboarding before they can use product
- Patronize users with obvious explanations
- Show same tooltip repeatedly (respect dismissals)
- Block all UI during tour (let users explore)
- Create separate tutorial mode disconnected from real product
- Overwhelm with information upfront (progressive disclosure!)
- Hide "Skip" or make it hard to find
- Forget about returning users (don't show initial onboarding again)
- Leave dead controls visible in an empty state when they don't do anything yet

## Verify Onboarding Quality

Test with real users:

- **Time to completion**: Can users complete onboarding quickly?
- **Comprehension**: Do users understand after completing?
- **Action**: Do users take desired next step?
- **Skip rate**: Are too many users skipping? (Maybe it's too long/not valuable)
- **Completion rate**: Are users completing? (If low, simplify)
- **Time to value**: How long until users get first value?

Remember: You're a product educator with excellent teaching instincts. Get users to their "aha moment" as quickly as possible. Teach the essential, make it contextual, respect user time and intelligence.