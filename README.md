# AI Steering Files

This repository is a canonical guide to the files that make AI-assisted coding work better in real projects.

The goal is not to invent more bureaucracy. The goal is to give agents durable, repo-specific context so they can:

- understand the product before editing it
- follow local conventions without guessing
- avoid risky changes unless a human has signed off
- make better UI, architecture, and deployment decisions

If you are using this as a blueprint for another repo, start here and then copy only the parts that fit your project.

## What belongs in an AI-friendly repo

The most useful steering docs are the ones that answer questions an agent would otherwise have to guess:

- What is this project for?
- Who is it for?
- What does "good" look like here?
- What stack and commands should be preferred?
- Where is the system structure encoded?
- Which changes need human review?
- Which vendor-specific instructions should take precedence?

## Core files

### `AGENTS.md`

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

### `VISION.md`

The durable product north star.

Use it for:

- what the project is trying to become
- the taste and direction that should stay stable over time
- non-goals
- product philosophy and constraints

This file is useful when the implementation choice is not obvious but the product direction is.

### `PRODUCT.md` or `.kiro/steering/product.md`

The product-level explanation of why the project exists.

Use it for:

- target users
- core problems the product solves
- major workflows
- business objectives
- success criteria

This is the file that should answer "what are we building?" in plain language.

### `TECH.md` or `.kiro/steering/tech.md`

The technical source of truth for stack and implementation preferences.

Use it for:

- frameworks and libraries
- runtime versions
- commands
- deployment targets
- integration points
- technical constraints and tradeoffs

This file should bias agents toward the established stack instead of alternatives.

### `STRUCTURE.md` or `.kiro/steering/structure.md`

The architecture and repository layout guide.

Use it for:

- top-level directory map
- naming conventions
- import patterns
- module boundaries
- where new code should go

This is especially useful in larger repos where structure matters more than any single file.

### `DESIGN.md`

The UI and visual direction guide.

Use it for:

- design tokens
- typography
- spacing
- color principles
- component patterns
- accessibility expectations

This file is most valuable when AI is generating or modifying frontend code and needs a taste boundary.

### Vendor-specific instruction files

Examples:

- `CLAUDE.md`
- `GEMINI.md`
- `.github/copilot-instructions.md`
- `.cursor/rules/*.mdc`

Use these when you need instructions that are scoped to a specific tool or editor.

## Recommended order

If you are adding steering files to a new repo, a practical order is:

1. `AGENTS.md`
2. `PRODUCT.md`
3. `TECH.md`
4. `STRUCTURE.md`
5. `VISION.md`
6. `DESIGN.md`
7. vendor-specific instructions

That sequence works because it starts with behavior and project identity, then moves into implementation and taste.

## What good steering files contain

### `AGENTS.md`

Should answer:

- how should an agent behave in this repo?
- what is the branch/PR/review policy?
- what should never be done casually?
- what commands prove the change worked?

### `PRODUCT.md`

Should answer:

- who is the user?
- what pain are we solving?
- what outcome matters most?
- what counts as success?

### `TECH.md`

Should answer:

- what stack is preferred?
- what are the supported commands?
- what are the hard constraints?
- what integrations are already established?

### `STRUCTURE.md`

Should answer:

- where does new code live?
- what naming style should be used?
- what import boundaries matter?
- what patterns should be repeated?

### `DESIGN.md`

Should answer:

- what visual language should be preserved?
- what should new UI feel like?
- what should be avoided?
- what tokens or components should be reused?

## Good external references

- AGENTS.md: <https://agents.md/>
- OpenAI Codex custom instructions with AGENTS.md: <https://developers.openai.com/codex/guides/agents-md>
- Kiro steering docs: <https://kiro.dev/docs/steering/>
- Kiro CLI steering docs: <https://kiro.dev/docs/cli/steering/>
- Google Stitch DESIGN.md announcement: <https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/>
- DESIGN.md spec: <https://github.com/google-labs-code/design.md/blob/main/docs/spec.md>
- Awesome Cursor Rules: <https://github.com/PatrickJS/awesome-cursorrules>
- PageFresh steering-doc example PR: <https://github.com/LVTD-LLC/pagefresh/pull/14>

## Practical examples to study

- This repo's structure as a lightweight public reference for steering docs
- PageFresh PR #14 for project-context file organization
- Google Stitch's DESIGN.md material for design steering
- Kiro's steering docs for product/tech/structure separation
- repo-local `AGENTS.md` files in mature codebases

## If you are adapting this to your repo

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

## Local development

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

GitHub Actions deploys the site to CapRover on pushes to `main` and `initial-site`.

Required repository secrets:

- `CAPROVER_SERVER` - the CapRover dashboard URL, for example `https://captain.cap.gregagi.com`
- `CAPROVER_TOKEN` - the CapRover app deploy token for the `ai-steering` app

The intended public domain is `ai-steering.lvtd.dev`. If DNS is not yet pointed at the CapRover instance, the app will still deploy to its CapRover app and default subdomain, but the custom domain will not verify until DNS is in place.
