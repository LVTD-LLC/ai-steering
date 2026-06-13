# Contributing

This repo is intentionally small and opinionated. Contributions should keep the steering guidance accurate, specific, and easy for both humans and agents to follow.

## Suggesting a new site

Open an issue or pull request when you find a useful site, repo, article, or example file that should be listed.

Include:

- the exact URL
- which steering file it helps with, such as `AGENTS.md`, `PRODUCT.md`, or `.github/copilot-instructions.md`
- whether it belongs under `Useful resources` or `Great examples`
- a short note explaining what makes it useful
- the exact file path when linking to a repo example

Good suggestions are concrete and reachable. Avoid broken links, speculative projects, copied documentation dumps, or forked repos unless the fork itself is the useful example.

## Making the change

1. Edit `src/data/steering-data.js`.
2. Add the link to the right resource's `usefulResources` or `greatExamples` list.
3. Run `npm run sync:readme` to regenerate `README.md`.
4. Run `npm run build` to verify the site and docs still compile.
5. Fix broken links, copy issues, or layout problems before opening a PR.

## What else to change

- Update `src/data/steering-data.js` when a steering file needs new guidance, examples, or links.
- Update `AGENTS.md`, `PRODUCT.md`, `TECH.md`, `STRUCTURE.md`, and the other steering files in the repo when the actual repo conventions change.
- Prefer tightening existing guidance over adding more text.
- Keep the README and site aligned with the source data.

## Review expectations

- If a change affects behavior, add or update tests.
- If a change affects docs only, still run the build so the site stays valid.
- Keep commits focused so reviewers can see what changed quickly.
