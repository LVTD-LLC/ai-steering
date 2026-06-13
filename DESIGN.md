# DESIGN.md

## Design Intent

The site should feel like a useful technical index: clear, dense, restrained, and easy to scan.

It should not feel like a SaaS landing page, a marketing brochure, or a decorative AI showcase.

## Visual Language

- Use the existing global tokens in `src/layouts/BaseLayout.astro`.
- Keep backgrounds quiet and content-first.
- Use restrained accent colors for hierarchy, not decoration.
- Keep cards readable with clear borders, modest shadows, and compact spacing.
- Preserve strong contrast for body text, code paths, links, and buttons.

## Layout

- Keep the first screen focused on the catalog and how to use it.
- Favor dense, scannable sections over oversized hero treatments.
- Use cards for individual catalog entries only, not for every page section.
- Keep content in the shared `.container` width unless a real layout need says otherwise.
- Ensure mobile layouts stack cleanly without horizontal scrolling.

## Typography

- Use the configured Geist/system font stack.
- Keep headings direct and compact.
- Use code styling for exact file paths, commands, and identifiers.
- Do not use viewport-scaled text that can become unreadable or overflow.

## Components

- Resource cards should show path, file name, summary, use case, required contents, resources, and examples.
- Buttons should be reserved for clear navigation actions.
- Link lists should remain plain and easy to inspect.
- The checklist should remain concise and action-oriented.

## Avoid

- Decorative gradient-heavy sections, blobs, or purely ornamental illustrations.
- Marketing claims that are not backed by the catalog.
- Long explanatory walls of text where a structured list would be easier to scan.
- UI changes that make the README and site feel like different products.
