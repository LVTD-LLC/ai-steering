# AI Steering Files

This repository is a practical guide to the files that make AI-assisted coding work better in real projects.

The point is not to add more ceremony. The point is to give agents durable, repo-specific context so they can understand the project, follow the right conventions, and avoid risky guesses.

If you want to adapt this pattern to another repo, copy the structure first and then tailor the content to your codebase.

## TOC

- `AGENTS.md`
- `VISION.md`
- `PRODUCT.md` or `.kiro/steering/product.md`
- `TECH.md` or `.kiro/steering/tech.md`
- `STRUCTURE.md` or `.kiro/steering/structure.md`
- `DESIGN.md`
- vendor-specific instruction files
- useful references
- real-world examples
- adapting the pattern
- local development
- build
- deployment

## AGENTS.md

The repo-level operating guide for coding agents.

Use it for:

- repo-specific agent behavior
- safe defaults and guardrails
- commands that are reliable in this repo
- deployment and verification expectations
- paths that matter and paths that should be ignored

Good `AGENTS.md` content usually includes:

- project summary
- preferred workflow
- test/build commands
- deploy process
- branch policy
- risky actions that need approval

## VISION.md

The durable product north star.

Use it for:

- what the project is trying to become
- the taste and direction that should stay stable over time
- non-goals
- product philosophy and constraints

This file is useful when the implementation choice is not obvious but the product direction is.

## PRODUCT.md or `.kiro/steering/product.md`

The product-level explanation of why the project exists.

Use it for:

- target users
- core problems the product solves
- major workflows
- business objectives
- success criteria

This is the file that should answer "what are we building?" in plain language.

## TECH.md or `.kiro/steering/tech.md`

The technical source of truth for stack and implementation preferences.

Use it for:

- frameworks and libraries
- runtime versions
- commands
- deployment targets
- integration points
- technical constraints and tradeoffs

This file should bias agents toward the established stack instead of alternatives.

## STRUCTURE.md or `.kiro/steering/structure.md`

The architecture and repository layout guide.

Use it for:

- top-level directory map
- naming conventions
- import patterns
- module boundaries
- where new code should go

This is especially useful in larger repos where structure matters more than any single file.

## DESIGN.md

The UI and visual direction guide.

Use it for:

- design tokens
- typography
- spacing
- color principles
- component patterns
- accessibility expectations

This file is most valuable when AI is generating or modifying frontend code and needs a taste boundary.

## Vendor-specific instruction files

Examples:

- `CLAUDE.md`
- `GEMINI.md`
- `.github/copilot-instructions.md`
- `.cursor/rules/*.mdc`

Use these when you need instructions that are scoped to a specific tool or editor.

## Useful References

- AGENTS.md: <https://agents.md/>
- OpenAI Codex custom instructions with AGENTS.md: <https://developers.openai.com/codex/guides/agents-md>
- Kiro steering docs: <https://kiro.dev/docs/steering/>
- Kiro CLI steering docs: <https://kiro.dev/docs/cli/steering/>
- Google Stitch DESIGN.md announcement: <https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/>
- DESIGN.md spec: <https://github.com/google-labs-code/design.md/blob/main/docs/spec.md>
- Awesome Cursor Rules: <https://github.com/PatrickJS/awesome-cursorrules>
- PageFresh steering-doc example PR: <https://github.com/LVTD-LLC/pagefresh/pull/14>

## Real-World Examples

- This repo's structure as a lightweight public reference for steering docs
- PageFresh PR #14 for project-context file organization
- Google Stitch's DESIGN.md material for design steering
- Kiro's steering docs for product/tech/structure separation
- repo-local `AGENTS.md` files in mature codebases

## Adapting The Pattern

Keep the content specific.

Avoid:

- generic agent platitudes
- stale stack descriptions
- copy-pasted docs from another project
- instructions that contradict the actual codebase

Prefer:

- concise, stable, repo-specific guidance
- file lists that match the actual project
- exact commands and paths
- explicit escalation and review rules

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build emits static files to `dist/`.

## Deployment

GitHub Actions deploys the site to CapRover on pushes to `main`.

Required repository secrets:

- `CAPROVER_SERVER` - the CapRover dashboard URL, for example `https://captain.cap.gregagi.com`
- `CAPROVER_TOKEN` - the CapRover app deploy token for the `ai-steering` app

The intended public domain is `ai-steering.lvtd.dev`. If DNS is not yet pointed at the CapRover instance, the app will still deploy to its CapRover app and default subdomain, but the custom domain will not verify until DNS is in place.
