# TECH.md

## Stack and Commands

Node.js 22 with native ES modules. No third-party dependencies or web runtime.

- `npm ci`: verify the dependency-free lockfile.
- `npm run sync:readme`: regenerate README from the catalog.
- `npm run check`: validate catalog shape, links, anchors, skill presence, README freshness, and JSON export.
- `npm run build`: alias for validation, retained for contributor workflows.
- `npm run --silent export:catalog`: emit the JSON snapshot consumed by lvtd-site.

## Publishing

This repo does not deploy on main or manually. The public page is served by LVTD-LLC/lvtd-site at https://lvtd.dev/ai-steering. After changing catalog data, regenerate README and export a new snapshot to lvtd-site/website/data/ai_steering.json in a coordinated change. The website does not fetch this repository at runtime.
