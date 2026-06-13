# STRUCTURE.md

## Directory Map

```text
.
|-- AGENTS.md
|-- PRODUCT.md
|-- TECH.md
|-- STRUCTURE.md
|-- VISION.md
|-- DESIGN.md
|-- CLAUDE.md
|-- GEMINI.md
|-- README.md
|-- CONTRIBUTING.md
|-- CHANGELOG.md
|-- package.json
|-- scripts/
|   `-- generate-readme.mjs
|-- src/
|   |-- data/
|   |   |-- steering-data.js
|   |   `-- resources.ts
|   |-- layouts/
|   |   `-- BaseLayout.astro
|   |-- lib/
|   |   `-- slugify.js
|   `-- pages/
|       `-- index.astro
|-- public/
|   `-- favicon.svg
|-- .github/
|   |-- copilot-instructions.md
|   `-- workflows/
`-- .cursor/
    `-- rules/
```

## Placement Rules

- Put catalog content in `src/data/steering-data.js`.
- Put data typing and shape validation in `src/data/resources.ts`.
- Put reusable utilities in `src/lib/`.
- Put page-level Astro markup in `src/pages/`.
- Put shared layout shell and global CSS in `src/layouts/BaseLayout.astro`.
- Put static assets in `public/`.
- Put scripts that operate on repository files in `scripts/`.
- Put repo-wide steering guidance at the repository root unless a tool requires another path.
- Put Cursor rules in `.cursor/rules/` and scope them with `globs`.
- Put GitHub-specific instructions in `.github/`.

## Source Boundaries

- `README.md` is generated output from `scripts/generate-readme.mjs`.
- `dist/`, `.astro/`, and `node_modules/` are build or install artifacts and should not be committed.
- Deployment config should stay isolated in `Dockerfile`, `nginx.conf`, `captain-definition`, and `.github/workflows/deploy.yml`.
- Do not duplicate catalog entries in multiple manually maintained files.

## Naming Rules

- Preserve exact steering file names and capitalization: `AGENTS.md`, `PRODUCT.md`, `TECH.md`, `STRUCTURE.md`, `VISION.md`, `DESIGN.md`, `CLAUDE.md`, and `GEMINI.md`.
- Use descriptive kebab-case names for Cursor rule files, such as `catalog-data.mdc`.
- Keep generated anchor behavior aligned with `src/lib/slugify.js`.

## Import Rules

- Import catalog resources through `src/data/resources.ts` from Astro components.
- Keep `src/data/steering-data.js` plain enough for Node scripts to import directly.
- Prefer relative imports inside `src/`.
