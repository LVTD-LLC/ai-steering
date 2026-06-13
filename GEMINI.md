# GEMINI.md

This file gives Gemini-specific context for working in AI Steering Files. Use the root steering files for shared repository guidance.

## Project Context

AI Steering Files is a static Astro catalog for repo context files used by AI coding agents. Its own steering files should demonstrate the practical, scoped guidance the site recommends.

## Read First

- `AGENTS.md` for repo-wide workflow and safety rules.
- `PRODUCT.md` for audience, scope, and success criteria.
- `VISION.md` for durable principles, non-goals, and success signals.
- `TECH.md` for stack, commands, and deployment.
- `STRUCTURE.md` for file placement.
- `DESIGN.md` for visual changes.

## Commands

- Install: `npm install`
- CI-style install: `npm ci`
- Develop: `npm run dev`
- Check Astro and TypeScript: `npm run check`
- Regenerate README: `npm run sync:readme`
- Validate: `npm run build`

## Working Rules

- Treat `src/data/steering-data.js` as the source of truth for catalog entries.
- Keep content concise, concrete, and tied to real repository workflows.
- Prefer official docs and strong public examples when adding links.
- Preserve exact steering file paths and capitalization.
- Report any validation command that cannot be run.
