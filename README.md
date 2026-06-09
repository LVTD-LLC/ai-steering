# AI Steering Files

Resource hub for project files that help AI coding agents understand a codebase before changing it.

The site is intended for `ai-steering.lvtd.dev`. It collects useful steering/context files, explains when each one is worth adding, links to primary references, and gives practical section checklists for writing them well.

## Why this exists

AI coding agents do better when the repository contains durable, project-specific context:

- what the product is and who it serves
- how the system is built and verified
- what design rules should shape UI changes
- where files live and what conventions matter
- what the agent must never do without human review

The goal is not to add paperwork. The goal is to put stable project knowledge where agents can reliably find it.

## Included File Types

- `AGENTS.md` - repo-level operating guide for coding agents.
- `DESIGN.md` - design-system guidance and tokens for AI-generated UI.
- `VISION.md` - durable product and taste direction.
- `PRODUCT.md` or `.kiro/steering/product.md` - product purpose, users, features, and business objectives.
- `TECH.md` or `.kiro/steering/tech.md` - stack, tooling, constraints, commands, and preferred libraries.
- `STRUCTURE.md` or `.kiro/steering/structure.md` - architecture, file organization, naming patterns, and import rules.
- `.cursor/rules/*.mdc` - scoped Cursor rules for specific workflows, frameworks, or file types.
- `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`, and similar vendor-specific instruction files.

## Useful References

- AGENTS.md: <https://agents.md/>
- OpenAI Codex custom instructions with AGENTS.md: <https://developers.openai.com/codex/guides/agents-md>
- Kiro steering docs: <https://kiro.dev/docs/steering/>
- Kiro CLI steering docs: <https://kiro.dev/docs/cli/steering/>
- Google Stitch DESIGN.md announcement: <https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/>
- DESIGN.md spec: <https://github.com/google-labs-code/design.md/blob/main/docs/spec.md>
- Awesome Cursor Rules: <https://github.com/PatrickJS/awesome-cursorrules>
- PageFresh steering-doc example PR: <https://github.com/LVTD-LLC/pagefresh/pull/14>

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build emits static files to `dist/`.
