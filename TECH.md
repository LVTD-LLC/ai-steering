# TECH.md

## Stack

- Framework: Astro 6.
- Language: JavaScript for catalog data and utility code, TypeScript for typed exports.
- Runtime: Node.js 22 in CI and Docker builds.
- Package manager: npm with `package-lock.json`.
- Deployment: static HTML served by nginx in Docker, deployed to CapRover.

## Commands

- Install dependencies: `npm install`
- CI-style install: `npm ci`
- Run local dev server: `npm run dev`
- Check Astro and TypeScript: `npm run check`
- Build and validate: `npm run build`
- Regenerate README: `npm run sync:readme`

## Architecture

- `src/data/steering-data.js` contains the canonical catalog content and site links.
- `src/data/resources.ts` validates the data shape at import time and exports typed resources to Astro.
- `src/pages/index.astro` renders the catalog and checklist.
- `src/layouts/BaseLayout.astro` owns page shell, navigation, global CSS variables, and shared layout styles.
- `scripts/generate-readme.mjs` reads the same catalog data and writes `README.md`.
- `public/` contains static assets served as-is.

## Data Flow

1. Edit catalog entries in `src/data/steering-data.js`.
2. Run `npm run sync:readme` when README content should change.
3. Run `npm run build` to execute `astro check` and generate the static site.
4. Deploy static output from `dist/` through the Docker/nginx setup.

## Constraints

- Keep the project static. Do not add a server runtime unless the product scope changes.
- Keep catalog data structured; do not move resource content into component-local hardcoded markup.
- Avoid adding dependencies for simple rendering or formatting that Astro and standard Node APIs already cover.
- Keep `README.md` generated from the catalog data rather than hand-maintained.
- Keep external links in catalog data explicit and reviewable.

## Deployment Files

- `Dockerfile` builds the Astro site with Node 22 and serves `dist/` from nginx.
- `nginx.conf` handles static file serving and cache headers.
- `captain-definition` points CapRover at the Dockerfile.
- `.github/workflows/ci.yml` runs build validation.
- `.github/workflows/deploy.yml` builds and deploys from `main`.
