---
name: critique
description: Evaluate design from a UX perspective, assessing visual hierarchy, information architecture, emotional resonance, cognitive load, and overall quality with quantitative scoring, persona-based testing, and actionable feedback. Use when the user asks to review, critique, evaluate, or give feedback on a design or component.
metadata:
  argument-hint: "[area (feature, page, component...)]"
---

## MANDATORY PREPARATION

Users start this workflow with `/critique`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: what the interface is trying to accomplish.

---

Conduct a holistic design critique, evaluating whether the interface actually works — not just technically, but as a designed experience. Think like a design director giving feedback.

Consult the [hierarchy checklist](../frontend-design/reference/hierarchy-checklist.md) for grayscale tests, action prioritization, and label/value treatment.
Consult the [text hierarchy and readability](../frontend-design/reference/text-hierarchy-and-readability.md) for line length, line-height, baseline, alignment, and title restraint.
Consult the [cognitive load](../frontend-design/reference/cognitive-load.md) for working-memory limits and the 8-item checklist.
Consult the [interaction design](../frontend-design/reference/interaction-design.md) when evaluating familiar patterns, target sizing, focus treatment, and overlay behavior.
Consult the [ai slop detection](../frontend-design/reference/ai-slop-detection.md) for the consolidated anti-pattern list.
Consult the [action hierarchy](../frontend-design/reference/action-hierarchy.md) when evaluating primary/secondary/tertiary actions.
Consult the [semantic color](../frontend-design/reference/semantic-color.md) when color is carrying meaning.
Consult the [surface separation](../frontend-design/reference/surface-separation.md) when judging borders, card usage, overlap, or background-shift decisions.
Consult the [image treatment](../frontend-design/reference/image-treatment.md) when screenshots, icons, and media affect readability or polish.

Treat the shared frontend-design references as canonical for hierarchy, readability, and cognitive-load doctrine, then keep this skill focused on evaluation, scoring, and prioritization.

When empty states are relevant, evaluate the zero-data surface itself through `empty-state` thinking, and evaluate broader activation, aha moments, and first-run education through `onboard` thinking.

## Phase 1: Design Critique

Evaluate the interface across these dimensions:

### 1. AI Slop Detection (CRITICAL)

**This is the most important check.** Does this look like every other AI-generated interface from 2024-2025?

Review the design against ALL the **DON'T** guidelines in the frontend-design skill and the [ai slop detection](../frontend-design/reference/ai-slop-detection.md) reference — they are the fingerprints of AI-generated work. Check for the AI color palette, gradient text, dark mode with glowing accents, glassmorphism, hero metric layouts, identical card grids, generic fonts, and all other tells.

**The test**: If you showed this to someone and said "AI made this," would they believe you immediately? If yes, that's the problem.

### 2. Visual Hierarchy
- Does the eye flow to the most important element first?
- Is there a clear primary action? Can you spot it in 2 seconds?
- Does the right thing stand out, or is emphasis spread so evenly that nothing is memorable? (von Restorff effect)
- Do size, color, and position communicate importance correctly?
- Is there visual competition between elements that should have different weights?
- Is the hierarchy clear even if you imagine the screen in grayscale?
- Are section titles quieter than the content they introduce, or are they stealing focus?
- Has action hierarchy flattened so multiple buttons feel equally urgent?

### 3. Information Architecture & Cognitive Load
> *Consult [cognitive-load](../frontend-design/reference/cognitive-load.md) for the working memory rule and 8-item checklist*
- Is the structure intuitive? Would a new user understand the organization?
- Is related content grouped logically?
- Do common patterns behave the way users already expect? Check navigation, search, tables, filters, forms, tabs, dropdowns, pagination, and settings for unnecessary novelty.
- Is avoidable complexity pushed into the system through defaults, prefills, and guidance, or dumped on the user to manage manually? (Tesler's Law)
- Are there too many choices at once? Count visible options at each decision point — if >4, flag it
- Is the navigation clear and predictable?
- **Progressive disclosure**: Is complexity revealed only when needed, or dumped on the user upfront?
- **Run the 8-item cognitive load checklist** from the reference. Report failure count: 0–1 = low (good), 2–3 = moderate, 4+ = critical.

### 4. Emotional Journey
- What emotion does this interface evoke? Is that intentional?
- Does it match the brand personality?
- Does it feel trustworthy, approachable, premium, playful — whatever it should feel?
- Would the target user feel "this is for me"?
- Do frequent interactions respond fast enough to preserve flow, or do repeated waits keep breaking concentration? (Doherty Threshold)
- **Peak-end rule**: Is the most intense moment positive? Does the experience end well (confirmation, celebration, clear next step)?
- **Emotional valleys**: Check for onboarding frustration, error cliffs, feature discovery gaps, or anxiety spikes at high-stakes moments (payment, delete, commit)
- **Interventions at negative moments**: Are there design interventions where users are likely to feel frustrated or anxious? (progress indicators, reassurance copy, undo options, social proof)

### 5. Discoverability & Affordance
- Are interactive elements obviously interactive?
- Would a user know what to do without instructions?
- Are primary and frequent targets large enough and close enough to use confidently, especially on touch devices?
- Do powerful features have safeguards proportional to their risk — permissions, previews, undo, confirmation, history, or explicit consequence language?
- Are hover/focus states providing useful feedback?
- Are there hidden features that should be more visible?

### 6. Composition & Balance
- Does the layout feel balanced or uncomfortably weighted?
- Is whitespace used intentionally or just leftover?
- Is there visual rhythm in spacing and repetition?
- Does asymmetry feel designed or accidental?
- Is there more space around groups than within them, or do group boundaries feel ambiguous?
- Are borders doing necessary structural work, or just compensating for weak spacing/background contrast?
- Are cards, shadows, overlap, and background shifts being used with a clear separation strategy, or are multiple methods piling up noisily?

### 7. Typography as Communication
- Does the type hierarchy clearly signal what to read first, second, third?
- Is body text comfortable to read? (line length, spacing, size)
- Do font choices reinforce the brand/tone?
- Is there enough contrast between heading levels?
- Are there too many near-identical font sizes to feel like a real type scale?
- Does line-height match line length, or do long paragraphs feel cramped?
- Are section titles visually too loud for the role they play?
- Are links drawing too much attention through color when weight, underline, or hover treatment would be calmer?
- Are number columns aligned for comparison when numeric scanning matters?

### 8. Color with Purpose
- Is color used to communicate, not just decorate?
- Does the palette feel cohesive?
- Are accent colors drawing attention to the right things?
- Does it work for colorblind users? (not just technically — does meaning still come through?)
- Are tinted surfaces using appropriate text colors, or is there washed-out gray-on-color behavior?
- Are there too many improvised shades for the palette to feel systematic?

### 9. States & Edge Cases
- Empty states: Do they guide users toward action, or just say "nothing here"?
- Loading states: Do they reduce perceived wait time?
- Do forms and searches accept harmless input variation gracefully, or do they reject users for formatting trivia that could be normalized? (Postel's Law)
- Error states: Are they helpful and non-blaming?
- Success states: Do they confirm and guide next steps?
- Are screenshots readable at the size shown?
- Are icons being scaled in a way that feels intentional rather than chunky or mushy?

### 10. Microcopy & Voice
- Is the writing clear and concise?
- Does it sound like a human (the right human for this brand)?
- Are labels and buttons unambiguous?
- Is any part of the flow manipulative — confusing consent, obstructed cancellation, guilt copy, fake urgency, or hierarchy that pressures the wrong choice?
- Does error copy help users fix the problem?

## Phase 2: Present Findings

Structure your feedback as a design director would:

### Design Health Score
> *Consult [heuristics-scoring](reference/heuristics-scoring.md)*

Score each of Nielsen's 10 heuristics 0–4. Present as a table:

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | ? | [specific finding or "—" if solid] |
| 2 | Match System / Real World | ? | |
| 3 | User Control and Freedom | ? | |
| 4 | Consistency and Standards | ? | |
| 5 | Error Prevention | ? | |
| 6 | Recognition Rather Than Recall | ? | |
| 7 | Flexibility and Efficiency | ? | |
| 8 | Aesthetic and Minimalist Design | ? | |
| 9 | Error Recovery | ? | |
| 10 | Help and Documentation | ? | |
| **Total** | | **??/40** | **[Rating band]** |

Be honest with scores. A 4 means genuinely excellent. Most real interfaces score 20–32.

### Anti-Patterns Verdict
**Start here.** Pass/fail: Does this look AI-generated? List specific tells from the skill's Anti-Patterns section. Be brutally honest.

Include a one-line hierarchy verdict immediately after the pass/fail statement.

### Overall Impression
A brief gut reaction — what works, what doesn't, and the single biggest opportunity.

### What's Working
Highlight 2–3 things done well. Be specific about why they work.

### Priority Issues
The 3–5 most impactful design problems, ordered by importance.

For each issue, tag with **P0–P3 severity** (consult [heuristics-scoring](reference/heuristics-scoring.md) for severity definitions):
- **[P?] What**: Name the problem clearly
- **Why it matters**: How this hurts users or undermines goals
- **Fix**: What to do about it (be concrete)
- **Suggested command**: Which command could address this (from: /animate, /arrange, /critique, /extract, /polish, /optimize, /audit, /typeset, /bolder, /clarify, /delight, /adapt, /colorize, /quieter, /harden, /distill, /onboard, /normalize, /showcase)

Favor issues related to weak hierarchy, arbitrary systems, unclear action priority, and noisy decoration over surface-level nitpicks.

When relevant, explicitly call out: too many borders, ambiguous grouping, too many font sizes, too many unsystematic shades, loud section titles, flattened action hierarchy, line-length/line-height mismatches, label:value anti-patterns, unnecessary colored-link emphasis, non-right-aligned number columns, weak surface-separation strategy, scaled-down screenshot legibility failures, scaled-up icon chunkiness, and overlap clashes where layers are not cleanly separated.

### Persona Red Flags
> *Consult [personas](reference/personas.md)*

Auto-select 2–3 personas most relevant to this interface type (use the selection table in the reference). If `AGENTS.md` contains a `## Design Context` section from `setup`, also generate 1–2 project-specific personas from the audience/brand info.

For each selected persona, walk through the primary user action and list specific red flags found:

**Alex (Power User)**: No keyboard shortcuts detected. Form requires 8 clicks for primary action. Forced modal onboarding. ⚠️ High abandonment risk.

**Jordan (First-Timer)**: Icon-only nav in sidebar. Technical jargon in error messages ("404 Not Found"). No visible help. ⚠️ Will abandon at step 2.

Be specific — name the exact elements and interactions that fail each persona. Don't write generic persona descriptions; write what broke for them.

### Minor Observations
Quick notes on smaller issues worth addressing.

**Remember**:
- Be direct — vague feedback wastes everyone's time
- Be specific — "the submit button" not "some elements"
- Say what's wrong AND why it matters to users
- Give concrete suggestions, not just "consider exploring..."
- Prioritize ruthlessly — if everything is important, nothing is
- Don't soften criticism — developers need honest feedback to ship great design

## Phase 3: Ask the User

**After presenting findings**, use targeted questions based on what was actually found. ask the user directly to clarify what you cannot infer. These answers will shape the action plan.

Ask questions along these lines (adapt to the specific findings — do NOT ask generic questions):

1. **Priority direction**: Based on the issues found, ask which category matters most to the user right now. For example: "I found problems with visual hierarchy, color usage, and information overload. Which area should we tackle first?" Offer the top 2–3 issue categories as options.

2. **Design intent**: If the critique found a tonal mismatch, ask whether it was intentional. For example: "The interface feels clinical and corporate. Is that the intended tone, or should it feel warmer, bolder, or more playful?" Offer 2–3 tonal directions as options based on what would fix the issues found.

3. **Scope**: Ask how much the user wants to take on. For example: "I found N issues. Want to address everything, or focus on the top 3?" Offer scope options like "Top 3 only", "All issues", "Critical issues only".

4. **Constraints** (optional — only ask if relevant): If the findings touch many areas, ask if anything is off-limits. For example: "Should any sections stay as-is?" This prevents the plan from touching things the user considers done.

**Rules for questions**:
- Every question must reference specific findings from Phase 2 — never ask generic "who is your audience?" questions
- Keep it to 2–4 questions maximum — respect the user's time
- Offer concrete options, not open-ended prompts
- If findings are straightforward (e.g., only 1–2 clear issues), skip questions and go directly to Phase 4

## Phase 4: Recommended Actions

**After receiving the user's answers**, present a prioritized action summary reflecting the user's priorities and scope from Phase 3.

### Action Summary

List recommended commands in priority order, based on the user's answers:

1. **`/command-name`** — Brief description of what to fix (specific context from critique findings)
2. **`/command-name`** — Brief description (specific context)
...

**Rules for recommendations**:
- Only recommend commands from: /animate, /arrange, /critique, /extract, /polish, /optimize, /audit, /typeset, /bolder, /clarify, /delight, /adapt, /colorize, /quieter, /harden, /distill, /onboard, /normalize, /showcase
- Order by the user's stated priorities first, then by impact
- Each item's description should carry enough context that the command knows what to focus on
- Map each Priority Issue to the appropriate command
- Skip commands that would address zero issues
- If the user chose a limited scope, only include items within that scope
- If the user marked areas as off-limits, exclude commands that would touch those areas
- End with `/polish` as the final step if any fixes were recommended

After presenting the summary, tell the user:

> You can ask me to run these one at a time, all at once, or in any order you prefer.
>
> Re-run `/critique` after fixes to see your score improve.