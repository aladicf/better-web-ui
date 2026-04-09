## Preview and apply patterns

Use this reference when deciding how to present the five generated directions and how to integrate the chosen one.

## Prefer source-based previews

Prefer previews that come from real source code:

- real component files
- real page or route files
- real preview shells that switch among variants
- real mock data when needed for legibility

Do **not** rely on browser-extension-style DOM injection as the main workflow. It is fragile and does not leave maintainable source code behind.

## If the host supports a visual picker

Use it.

Best pattern:

1. generate five labeled variants
2. render them inside a preview surface
3. let the user switch among them quickly
4. preserve a clean mapping from preview label to source files

## If the host does not support a visual picker

Still structure the result for comparison:

- label each variation clearly (`1` through `5`)
- provide a concise comparison table
- use stable filenames
- explain how to preview the files locally

## Apply behavior

Once the user chooses a direction:

- integrate it into the requested target location
- preserve project conventions and imports
- extract shared pieces only when they are genuinely reusable
- remove dead preview scaffolding unless the user wants to keep alternatives around
- keep preview files only if they remain useful for iteration or review

## Recommendation behavior

Recommend a single option when the user's goals clearly favor it.

Ground the recommendation in:

- audience
- product tone
- information density
- conversion or usability goals
- maintainability inside the current codebase