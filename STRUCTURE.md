# STRUCTURE.md

- `src/data/steering-data.js`: canonical catalog and public links.
- `src/lib/slugify.js`: stable anchors shared by README and export.
- `skills/ai-steering-files/SKILL.md`: installable agent skill.
- `scripts/generate-readme.mjs`: README generator.
- `scripts/export-catalog.mjs`: JSON export for lvtd-site.
- `scripts/check-catalog.mjs`: catalog and generated-output validation.
- `.github/workflows/ci.yml`: validation on pull requests and main updates.

Keep catalog content structured and README generated. No page components, static assets, Docker, nginx, or CapRover configuration belong here. Website templates and styling live in LVTD-LLC/lvtd-site.
