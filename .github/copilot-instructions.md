# copilot-instructions.md

Read AGENTS.md for shared instructions, TECH.md for commands, and STRUCTURE.md for file placement. This repository maintains the AI Steering catalog and skill; the website lives in LVTD-LLC/lvtd-site.

Edit catalog content in src/data/steering-data.js. Run npm run sync:readme, then npm run build. Export updated catalog JSON to lvtd-site with npm run --silent export:catalog. Keep tool-specific guidance scoped and shared rules in AGENTS.md.
