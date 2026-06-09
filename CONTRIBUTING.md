# Contributing

This repo is intentionally small and opinionated. Contributions should keep the steering guidance accurate, specific, and easy for both humans and agents to follow.

## What to change

- Update `src/data/steering-data.js` when a steering file needs new guidance, examples, or links.
- Update `AGENTS.md`, `PRODUCT.md`, `TECH.md`, `STRUCTURE.md`, and the other steering files in the repo when the actual repo conventions change.
- Add or remove examples only when they are real, relevant, and reachable.
- Prefer tightening existing guidance over adding more text.

## Workflow

1. Edit the source data in `src/data/steering-data.js`.
2. Run `npm run sync:readme` to regenerate `README.md`.
3. Run `npm run build` to verify the site and docs still compile.
4. Fix broken links, copy issues, or layout problems before opening a PR.

## Content rules

- Do not add broken or speculative links.
- Do not list forked repos as canonical examples unless the fork itself is the point.
- Keep file descriptions concrete and specific to the repo.
- Keep the README and site aligned with the source data.

## Review expectations

- If a change affects behavior, add or update tests.
- If a change affects docs only, still run the build so the site stays valid.
- Keep commits focused so reviewers can see what changed quickly.
