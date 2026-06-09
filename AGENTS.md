# AGENTS.md

## Project

AI Steering Files is a static Astro site that catalogs useful context and steering files for AI coding agents.

## Commands

- Install dependencies: `npm install`
- Run local dev server: `npm run dev`
- Check and build: `npm run build`
- Astro-only check: `npm run check`

## Content Rules

- Keep advice practical and repo-oriented.
- Prefer primary references and concrete examples over generic AI commentary.
- Explain what each steering file is for, what it should contain, and when it is worth adding.
- Avoid duplicating long reference text from third-party docs; summarize and link.
- Keep file names and paths exact, including capitalization.

## Design Rules

- The site should feel like a useful technical index, not a SaaS landing page.
- Use restrained colors, readable cards, and dense but scannable content.
- Avoid decorative gradients and oversized marketing sections.

## Deployment

The site builds to static HTML in `dist/` and includes Docker, nginx, and CapRover config for deployment to `ai-steering.lvtd.dev`.
