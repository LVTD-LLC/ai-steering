# PRODUCT.md

## Product

AI Steering Files is a practical reference site for repository steering files: the documents that tell AI coding agents how to work inside a project.

The product should help people and agents know which steering files to use, what each file should contain, and when each file is worth adding.

## Audience

- Developers adopting AI coding agents in real repositories.
- Maintainers who want consistent agent behavior across tools.
- AI agents that need fast, repo-oriented context before making edits.
- Teams comparing vendor-neutral and tool-specific instruction files.

## Primary Jobs

- Identify the most useful steering files for a project.
- Understand the scope of each file without reading vendor docs first.
- Copy the pattern of practical, repo-specific guidance into another repository.
- Find primary references and strong examples for deeper research.
- Keep a GitHub README and static website aligned from one data source.

## Core Experience

- The homepage renders a dense catalog of steering file types.
- Each catalog entry explains what the file is for, when to use it, what it should contain, useful resources, and examples.
- The README mirrors the catalog so the resource is useful from GitHub and from the deployed site.
- This repo's own steering files serve as concrete examples of the guidance.

## In Scope

- Agent-agnostic steering files such as `AGENTS.md`, `PRODUCT.md`, `TECH.md`, `STRUCTURE.md`, `VISION.md`, and `DESIGN.md`.
- Agent-specific files such as `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`, and `.cursor/rules/*.mdc`.
- Primary documentation links, high-quality examples, and concise guidance.
- Static site presentation and README generation.

## Out of Scope

- Generic AI commentary, news, or trend coverage.
- Long copied excerpts from third-party documentation.
- Account systems, personalization, analytics dashboards, or dynamic backend features.
- Vendor rankings that are not grounded in concrete file behavior.

## Success Criteria

- A reader can decide which steering files their repo needs in a few minutes.
- An AI agent can use this repo as an example of well-scoped steering files.
- Catalog entries stay specific, accurate, and easy to verify.
- The site and README do not drift apart.
