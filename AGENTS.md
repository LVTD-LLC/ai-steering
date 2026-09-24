# AGENTS.md

AI Steering Files maintains a catalog and reusable agent skill. The web page lives at https://lvtd.dev/ai-steering in LVTD-LLC/lvtd-site. This repository has no frontend or deployment.

## Source of Truth

- Edit catalog guidance in `src/data/steering-data.js`.
- Keep `README.md` generated with `npm run sync:readme`.
- Keep the reusable skill in `skills/ai-steering-files/SKILL.md`.
- Read PRODUCT.md, TECH.md, STRUCTURE.md, VISION.md, and DESIGN.md for task-specific context.

## Workflow

- Check git status before editing; preserve others' changes.
- Use rg for searches and preserve exact steering file names and capitalization.
- Prefer primary references, concise summaries, and concrete examples.
- Run `npm run sync:readme` after catalog edits, then `npm run build`.
- Export catalog updates with `npm run --silent export:catalog > ../lvtd-site/website/data/ai_steering.json` and submit a matching lvtd-site change.
- Do not add deployment infrastructure or runtime dependencies for this documentation repository.
- Never commit credentials, node_modules, or local environment files.
