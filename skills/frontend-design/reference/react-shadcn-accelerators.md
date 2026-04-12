# React shadcn Accelerators

Use this reference when the project is using the React fallback defaults and the request maps cleanly to a known `shadcn`-friendly accelerator.

This is a **curated shortlist**, not a frozen global inventory. Treat these as optional accelerators for new or open-ended React/Tailwind/shadcn projects — especially when the request is clearly asking for a theme control, consent surface, motion treatment, testimonial pattern, picker, or slide action that already has a strong upstream implementation.

Always match the existing codebase first. If the project already has its own local components, wrappers, registry, or design system for the same job, keep following that baseline instead of introducing a second competing default.

## How to use this list

- Use the linked component page first for the current install path, usage shape, examples, and API.
- Follow the linked upstream dependency docs when the component relies on a deeper framework or platform constraint.
- Do **not** assume every component fits every React stack equally well. Some are explicitly Next.js-oriented, some depend on Motion, and some depend on browser APIs with limited compatibility.
- Treat these as accelerators to refine, not stock outputs to ship unchanged.

## Curated defaults for React-based web apps

### Theme, preference, and consent surfaces

- [`Theme Toggle Effect`](https://chanhdai.com/components/theme-toggle-effect) — animated theme transitions for light/dark switching. Uses `document.startViewTransition(...)`, offers multiple mask styles, and is best when the product wants a more expressive theme toggle than a plain icon button.
  - compatibility and API context: [View Transition API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API), [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API#browser_compatibility)
  - effect inspiration and CSS mask examples: [theme-toggle.rdsx.dev](https://theme-toggle.rdsx.dev/)

- [`Consent Manager`](https://chanhdai.com/components/consent-manager) — cookie / tracking consent UI styled to fit shadcn-based apps. Built on `c15t`, with a Next.js-first usage model that wraps the app in a consent provider.
  - deeper integration guide: [c15t Next.js quickstart](https://c15t.com/docs/frameworks/next/quickstart)

- [`Theme Switcher`](https://chanhdai.com/components/theme-switcher) — system / light / dark theme switcher for shadcn-style React apps, especially Next.js apps using `next-themes`.
  - shadcn theme setup: [shadcn dark mode for Next.js](https://ui.shadcn.com/docs/dark-mode/next)
  - theme state runtime: [`next-themes`](https://github.com/pacocoursey/next-themes)
  - motion foundation: [Motion for React](https://motion.dev/docs/react)

### Text and motion accents

- [`Shimmering Text`](https://chanhdai.com/components/shimmering-text) — Motion-based shimmering text with configurable duration, pause control, and CSS variables for resting vs highlight color.
  - motion reference: [Motion for React](https://motion.dev/docs/react)

- [`Scroll Fade Effect`](https://chanhdai.com/components/scroll-fade-effect) — masked edge fade for scroll containers, with both vertical and horizontal modes and examples that pair well with shadcn `ScrollArea`.
  - browser/platform constraint: [`animation-timeline` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
  - companion component: [shadcn `Scroll Area`](https://ui.shadcn.com/docs/components/scroll-area)

- [`Text Flip`](https://chanhdai.com/components/text-flip) — animated text rotation / cycling for short hero copy, value-prop phrases, or small attention cues.
  - motion reference: [Motion for React](https://motion.dev/docs/react)

### Testimonials and social proof

- [`Testimonial`](https://chanhdai.com/components/testimonial) — foundational testimonial primitives for quote, author, avatar, verified badge, and tagline. Good base layer when you want social proof without committing to a larger section yet.

- [`Testimonial Spotlight`](https://chanhdai.com/components/testimonial-spotlight) — hover spotlight wrapper for a testimonial card. Best when the testimonial should feel more interactive or hero-like.

- [`Testimonials Marquee`](https://chanhdai.com/components/testimonials-marquee) — continuous testimonial marquee with fade edges, single-row and multi-row variants, and composition on top of `Testimonial`.
  - marquee implementation reference: [Kibo UI `Marquee`](https://www.kibo-ui.com/components/marquee)
  - low-level marquee dependency: [React FAST Marquee](https://www.react-fast-marquee.com/)

### Pickers and gesture-heavy interaction

- [`React Wheel Picker`](https://chanhdai.com/components/react-wheel-picker) — iOS-like wheel picker for React with smooth inertia, infinite loop support, keyboard navigation, and type-ahead search.
  - install, anatomy, API, and examples: [React Wheel Picker docs](https://react-wheel-picker.chanhdai.com/docs/getting-started)
  - real-world usage inspiration: [React Wheel Picker showcases](https://react-wheel-picker.chanhdai.com/showcases)

- [`Slide to Unlock`](https://chanhdai.com/components/slide-to-unlock) — spring-based drag action surface for unlock / confirm / answer / delete-style gestures, with compound subcomponents and optional `ShimmeringText` pairing.
  - pairs especially well with: [`Shimmering Text`](https://chanhdai.com/components/shimmering-text)

## Selection hints

Reach for this shortlist when the requested feature is close to the component's native job:

- theme toggle, dark-mode flourish, or theme preference UI → `Theme Toggle Effect`, `Theme Switcher`
- cookie / analytics consent → `Consent Manager`
- moving headline / loading accent / scroll mask → `Text Flip`, `Shimmering Text`, `Scroll Fade Effect`
- social proof → `Testimonial`, `Testimonial Spotlight`, `Testimonials Marquee`
- picker or gesture-based confirmation → `React Wheel Picker`, `Slide to Unlock`

If the requested feature only partially matches, use the component for inspiration or composition structure, then adapt it aggressively to the product's hierarchy, tone, and interaction model.