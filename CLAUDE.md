# CLAUDE.md

This file contains Claude-specific guidance for this repo. Shared repository rules belong in `AGENTS.md`, `PRODUCT.md`, `TECH.md`, `STRUCTURE.md`, `VISION.md`, and `DESIGN.md`.

## Start Here

1. Read `AGENTS.md`.
2. Read the relevant project steering file for the task:
   - Product/content decisions: `PRODUCT.md` and `VISION.md`
   - Stack, commands, or deployment: `TECH.md`
   - File placement: `STRUCTURE.md`
   - Visual/interface changes: `DESIGN.md`
3. For catalog content changes, edit `src/data/steering-data.js` first.

## Claude Workflow

- Keep responses and file edits practical and repo-specific.
- Prefer primary references and concise examples.
- When catalog data changes, run `npm run sync:readme`.
- Before finishing implementation work, run `npm run build`.
- If validation cannot run, report the exact blocker.

## Repository Constraints

- Do not hand-edit `README.md` for catalog changes; regenerate it from data.
- Do not add backend infrastructure or client-side complexity without a clear product reason.
- Do not broaden the site's scope into generic AI commentary.
- Keep agent-specific advice out of vendor-neutral steering files unless it applies to all agents.
