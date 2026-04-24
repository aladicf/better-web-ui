---
name: test
description: Build or improve a UI testing strategy covering visual regression, interaction testing, and accessibility assertions. Use when the user asks to add tests, set up testing, fix flaky tests, improve test coverage, validate UI behavior, catch visual bugs, or establish confidence in shipping frontend changes.
metadata:
  argument-hint: "[target]"
---

Establish systematic confidence in UI behavior through the right mix of visual regression, interaction testing, and accessibility assertions.

Treat testing as a design input, not a post-ship safety net. The goal is not maximum coverage; it is catching the bugs that matter most without drowning the team in maintenance.

Consult the [accessibility testing](../frontend-design/reference/accessibility-testing.md) reference when the testing strategy needs automated axe checks, screen reader validation, or keyboard traversal tests.
Consult the [component accessibility](../frontend-design/reference/component-accessibility.md) reference when testing custom components for focus management, ARIA correctness, and keyboard behavior.
Consult the [interaction design](../frontend-design/reference/interaction-design.md) reference when validating workflows under stress, error, or edge-case conditions.
Consult the [error-recovery](../frontend-design/reference/error-recovery.md) reference when testing validation behavior, recoverable field errors, or abandonment paths.
Consult the [loading feedback and perceived performance](../frontend-design/reference/loading-feedback-and-perceived-performance.md) reference when testing loading states, skeletons, stale-data cues, or perceived-performance behavior.

## MANDATORY PREPARATION

Users start this workflow with `/test`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: the most common UI bugs currently escaping to production, the team's tolerance for test maintenance, and which parts of the UI change most frequently.

## Assess Testing Needs

Identify what is breaking and what should be caught:

1. **Map bug escape routes**:
   - Visual regressions (unintended layout shifts, broken spacing, missing assets)
   - Interaction failures (buttons that do nothing, broken forms, dead links)
   - State bugs (stale data, race conditions, incorrect loading states)
   - Accessibility defects (missing labels, keyboard traps, color contrast failures)
   - Cross-browser or cross-device inconsistencies

2. **Evaluate current coverage**:
   - What is already tested? What is tested but provides no signal?
   - Which tests fail randomly and get ignored (flaky tests erode trust)
   - How long does the test suite take? Slow suites get bypassed.

3. **Prioritize by risk and churn**:
   - High-traffic user paths (checkout, signup, core workflows)
   - UI surfaces that change frequently (design-system components)
   - Areas with known historical bugs
   - Accessibility-critical surfaces (forms, navigation, modals)

## Testing Dimensions

### Visual Regression

Catch unintended visual changes before they ship.

**What to capture**:
- Component states (default, hover, focus, active, disabled, loading, error)
- Full-page layouts at representative breakpoints
- Cross-browser rendering differences (focus styles, form controls, fonts)

**Baseline discipline**:
- Treat baselines as team assets, not personal screenshots
- Review intentional changes in pull requests, not after merge
- Re-baseline immediately after intentional design updates to prevent noise

**Anti-flake practices**:
- Wait for fonts, images, and animations to settle before capturing
- Mock or freeze dynamic content (timestamps, random data, animations)
- Use deterministic test data and fixed viewport sizes
- Isolate tests from network variability; stub API responses

**Scope boundaries**:
- Test design-system components exhaustively
- Test page layouts at a few key breakpoints, not every pixel width
- Do not test third-party widgets you do not control (embeds, ads)

### Interaction Testing

Validate that user actions produce correct outcomes.

**Component-level interactions**:
- Form submission, validation, and error recovery
- Modal open/close, focus trapping, and escape behavior
- Dropdown, accordion, tab, and disclosure state transitions
- Button actions and their side effects

**User flow validation**:
- Multi-step workflows (checkout, onboarding, wizard flows)
- Navigation and routing behavior
- State persistence across browser back/forward
- Concurrent actions (rapid clicking, double submissions)

**Test data strategy**:
- Use realistic but deterministic data
- Cover edge cases (empty inputs, maximum lengths, special characters)
- Include error-state responses, not just happy-path stubs

### Accessibility Assertions

Embed accessibility validation into the testing pipeline.

**Automated checks** (run on every build):
- axe-core or equivalent for WCAG rule violations
- Color contrast minimums (4.5:1 normal text, 3:1 large text / UI components)
- Semantic HTML validation (heading order, landmark regions, label associations)
- Focus management (visible focus indicators, logical tab order)

**Keyboard traversal tests**:
- Tab through entire flows without a mouse
- Validate that all interactive elements are reachable
- Confirm that focus traps in modals and escape routes work
- Test that skip links and bypass blocks function

**Screen reader smoke tests** (for critical paths):
- Announcement of dynamic content changes (live regions)
- Meaningful accessible names and descriptions
- State announcements (expanded/collapsed, selected, required)
- Error messaging that surfaces to assistive technology

**Motion and animation**:
- Verify `prefers-reduced-motion` is respected
- Confirm no seizure-inducing flashing (under 3 flashes per second)

## Test Pyramid for UI

Balance speed, confidence, and maintenance cost:

| Layer | Scope | Speed | Purpose |
|-------|-------|-------|---------|
| Unit (component) | Single component, mocked dependencies | Fast (< 1s) | Logic, rendering, prop handling |
| Integration (component + context) | Component with real providers, stubs | Medium (< 10s) | Interaction behavior, state transitions |
| End-to-end (full browser) | Real browser, real network or stubs | Slow (< 30s per test) | Critical user flows, cross-page behavior |
| Visual regression | Screenshot comparison | Medium (parallelizable) | Unintended visual changes |

**Guidance**:
- Push tests down the pyramid when possible. A component test is faster and more precise than an E2E test for button behavior.
- Reserve E2E for user journeys that span multiple pages or require real browser behavior (routing, auth, payment).
- Run visual regression in CI on every pull request, not just before release.

## Tool Selection

Match the tool to the team's stack and the testing layer:

| Need | Strong options | Considerations |
|------|----------------|----------------|
| Component unit/integration | Vitest + Testing Library, Jest + Testing Library | Framework-agnostic; prefer Testing Library queries that mirror user behavior |
| End-to-end critical flows | Playwright, Cypress | Playwright for speed and cross-browser parallelism; Cypress for simpler setup |
| Visual regression | Chromatic, Loki, Playwright screenshots, Percy | Chromatic for Storybook integration; Playwright for in-house baseline management |
| Accessibility automation | axe-core, @axe-core/react, Playwright + axe | Integrate into CI; treat as warnings, not blockers, until baseline is clean |
| Interaction / user flow | Playwright, Cypress, Storybook Test Runner | Storybook Test Runner for isolated component interactions; Playwright/Cypress for full flows |

**Pragmatic rules**:
- Prefer one E2E tool and one component test tool. Tool proliferation fragments expertise.
- If the project uses Storybook, add interaction tests there before adding a separate component test suite.
- Integrate accessibility checks into the existing test runner, not as a separate tool chain.

## Anti-Patterns

- **Test implementation details**: Assert on what the user sees and does, not internal state or CSS class names.
- **Ignore flaky tests**: A flaky test is worse than no test. Fix or delete it immediately.
- **Test everything through E2E**: Slow suites discourage running tests. Push logic down to component tests.
- **Snapshot everything**: Snapshot tests catch changes but do not explain intent. Use them sparingly for markup stability, not for behavior.
- **Separate accessibility testing from the main pipeline**: Accessibility checks that run manually once per sprint find nothing consistently.
- **Mock the browser environment**: Use a real browser for E2E and visual regression. jsdom and happy-dom are fine for component logic, not for layout or interaction fidelity.
- **Test third-party widgets**: Do not baseline or assert on embeds, maps, ads, or chat widgets you do not control.
- **Skip cross-browser testing**: At minimum verify focus styles, form controls, and layout in the browsers your users actually use.
- **Leave baselines stale**: An outdated baseline hides regressions. Re-baseline after intentional visual changes.

## Verify Testing Confidence

Before shipping the testing strategy:

- [ ] The highest-risk user flows have automated coverage
- [ ] Visual baselines are reviewed in pull requests
- [ ] Accessibility checks run in CI and have a clean or documented-exceptions baseline
- [ ] Flaky tests are identified and either fixed or removed
- [ ] The full test suite runs in under the team's patience threshold (target: < 5 minutes for CI feedback)
- [ ] Test failures produce actionable error messages, not opaque stack traces
- [ ] Cross-browser coverage matches actual user browser distribution
- [ ] Team members can run tests locally without complex setup
- [ ] Test data is deterministic and does not depend on external services during test execution