# AI Steering Files

This repository is a practical guide to the files that make AI-assisted coding work better in real projects.

The goal is to give agents durable, repo-specific context so they can understand the project, follow the right conventions, and avoid risky guesses.

## TOC

- [Agent-Agnostic Files](#agent-agnostic-files)
  - [AGENTS.md](#agentsmd)
  - [PRODUCT.md](#productmd)
  - [TECH.md](#techmd)
  - [STRUCTURE.md](#structuremd)
  - [VISION.md](#visionmd)
  - [DESIGN.md](#designmd)
- [Agent-Specific Files](#agent-specific-files)
  - [CLAUDE.md](#claudemd)
  - [GEMINI.md](#geminimd)
  - [.github/copilot-instructions.md](#githubcopilot-instructionsmd)
  - [.cursor/rules/*.mdc](#cursorrulesmdc)

## Agent-Agnostic Files

### AGENTS.md

The vendor-neutral operating guide for coding agents.

Use it for:

- repo-specific agent behavior
- safe defaults and guardrails
- commands that are reliable in the repo
- review and merge expectations
- paths that matter and paths that should be ignored

What it should contain:

- project summary
- preferred workflow
- exact install, test, lint, build, and deploy commands
- branch policy
- risky actions that need approval
- any "do not do this casually" rules

Useful resources:

- <https://agents.md/>
- <https://developers.openai.com/codex/guides/agents-md>
- <https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/>
- <https://www.augmentcode.com/blog/how-to-write-good-agents-dot-md-files>

Great examples:

- <https://github.com/paperclipai/paperclip/blob/master/AGENTS.md>
- <https://github.com/agencyenterprise/paperclip-ai/blob/master/AGENTS.md>
- <https://github.com/phlex-rd/phlex/blob/main/AGENTS.md>

### PRODUCT.md

The product north star.

Use it for:

- target users
- the problem being solved
- major workflows
- business objectives
- success criteria

What it should contain:

- why the project exists
- who it is for
- what "good" looks like
- what is in scope and out of scope
- the outcomes that matter most

Useful resources:

- <https://kiro.dev/docs/steering/>
- <https://github.com/buildermethods/agent-os/blob/main/commands/agent-os/plan-product.md>
- <https://github.com/paralleldrive/aidd>
- <https://matsen.fhcrc.org/general/2026/02/10/spec-kit-walkthrough.html>

Great examples:

- <https://github.com/paperclipai/paperclip/blob/master/doc/PRODUCT.md>
- <https://github.com/mspworld/agent-coordinator/blob/main/PRODUCT.md>
- <https://github.com/AI-Shipping-Labs/website/blob/main/_docs/PRODUCT.md>

### TECH.md

The technical source of truth.

Use it for:

- frameworks and libraries
- runtime versions
- build/test commands
- deployment targets
- integration points
- technical constraints and tradeoffs

What it should contain:

- the canonical stack
- supported commands
- preferred libraries and frameworks
- external services and APIs
- the constraints agents must respect

Useful resources:

- <https://kiro.dev/docs/steering/>
- <https://github.com/aws-samples/sample-kiro-cli-multiagent-development>
- <https://github.com/modu-ai/moai-adk>
- <https://kiro.dev/blog/introducing-kiro-cli/>

Great examples:

- <https://github.com/aws-samples/sample-kiro-cli-multiagent-development/blob/main/docs/tech.md>
- <https://github.com/modu-ai/moai-adk>
- <https://github.com/LaProgrammerie/ai-engineering-template>

### STRUCTURE.md

The architecture and repository map.

Use it for:

- top-level directory layout
- naming conventions
- import patterns
- module boundaries
- where new code should go

What it should contain:

- a directory map
- ownership boundaries
- import rules
- placement rules for new files
- any special-case folders that matter for the agent

Useful resources:

- <https://kiro.dev/docs/steering/>
- <https://kiro.dev/blog/introducing-kiro-powers/>
- <https://github.com/langwatch/better-agents/blob/main/docs/STRUCTURE.md>
- <https://github.com/gamekit-agent/gamekit-cli/blob/main/docs/project-structure.md>

Great examples:

- <https://github.com/langwatch/better-agents/blob/main/docs/STRUCTURE.md>
- <https://github.com/gamekit-agent/gamekit-cli/blob/main/docs/project-structure.md>
- <https://github.com/bootc-dev/infra/blob/main/docs/repository-structure.md>

### VISION.md

The durable product and taste direction.

Use it for:

- the long-term product vision
- non-goals
- design/product taste
- the kind of future you are trying to create

What it should contain:

- vision and constraints
- what the project should become
- what should never drift
- success criteria at the level of outcomes, not implementation

Useful resources:

- <https://github.com/paralleldrive/aidd>
- <https://kiro.dev/blog/introducing-kiro/>
- <https://kiro.dev/blog/kiro-and-the-future-of-software-development/>
- <https://github.com/openclaw/clawhub/blob/main/VISION.md>

Great examples:

- <https://github.com/fbeeper/agentkitten/blob/main/VISION.md>
- <https://github.com/block/sprout/blob/main/VISION.md>
- <https://github.com/gsd-build/gsd-2/blob/main/VISION.md>

### DESIGN.md

The UI and visual direction guide.

Use it for:

- design tokens
- typography
- spacing
- color principles
- component patterns
- accessibility expectations

What it should contain:

- the visual language
- spacing and type rules
- layout constraints
- component style preferences
- things the agent should avoid when generating UI

Useful resources:

- <https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/>
- <https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/>
- <https://github.com/google-labs-code/design.md>
- <https://github.com/VoltAgent/awesome-design-md>

Great examples:

- <https://github.com/google-labs-code/design.md>
- <https://github.com/VoltAgent/awesome-design-md>
- <https://github.com/VoltAgent/awesome-claude-design>

## Agent-Specific Files

### CLAUDE.md

The Claude Code instruction file.

Use it for:

- Claude-specific guidance
- repo conventions that should persist across Claude sessions
- build/test/verify expectations for Claude
- workflow notes that are useful for Claude but not all tools

What it should contain:

- project-specific instructions
- code style and review rules
- build and test commands
- escalation boundaries
- paths or workflows Claude should treat specially

Useful resources:

- <https://docs.anthropic.com/en/docs/claude-code/overview>
- <https://docs.anthropic.com/en/docs/claude-code/memory>
- <https://docs.anthropic.com/en/docs/claude-code/github-actions>
- <https://github.com/anthropics/claude-code/issues/10286>

Great examples:

- <https://github.com/tylerbutler/tools-monorepo/blob/main/CLAUDE.md>
- <https://github.com/shanraisshan/claude-code-best-practice/blob/main/CLAUDE.md>
- <https://github.com/jonnyzzz/mcp-steroid/blob/main/CLAUDE.md>

### GEMINI.md

The Gemini CLI / Gemini agent context file.

Use it for:

- Gemini-specific instructions
- repo conventions that should persist across Gemini sessions
- project context and response preferences
- custom commands or tool usage hints

What it should contain:

- project-specific context
- coding conventions
- build/test/verify notes
- any files or folders Gemini should prioritize

Useful resources:

- <https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/gemini-md.md>
- <https://discuss.ai.google.dev/t/announcing-gemini-cli-a-command-line-tool-for-the-google-gemini-api/96003>
- <https://github.com/google-gemini/gemini-cli>
- <https://github.com/google-gemini/gemini-cli/issues/1806>

Great examples:

- <https://github.com/google-gemini/gemini-cli/blob/main/GEMINI.md>
- <https://github.com/alirezarezvani/claude-skills/blob/main/GEMINI.md>

### .github/copilot-instructions.md

The repository-wide GitHub Copilot instructions file.

Use it for:

- instructions that should apply to Copilot across the repo
- build/test/validation guidance
- repo-specific coding standards
- review and safety expectations

What it should contain:

- how to build and test the repo
- conventions and patterns to follow
- constraints that should always be respected
- any special validation steps

Useful resources:

- <https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot>
- <https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions>
- <https://docs.github.com/copilot/reference/custom-instructions-support>
- <https://github.com/github/awesome-copilot>

Great examples:

- <https://github.com/github/awesome-copilot>
- <https://github.com/AI-Shipping-Labs/website/blob/main/.github/copilot-instructions.md>
- <https://github.com/obsidian-tasks-group/obsidian-tasks/issues/3816>

### .cursor/rules/*.mdc

Cursor project rules for scoped behavior.

Use it for:

- file-specific or workflow-specific rules
- path-scoped instructions
- rule sets that should only apply in certain parts of the repo
- agent behavior that needs to be narrower than a repo-wide file

What it should contain:

- path or task scope
- the conventions to follow in that scope
- examples of good output
- anything that should be auto-applied vs manual

Useful resources:

- <https://cursor.com/docs/rules>
- <https://forum.cursor.com/t/a-deep-dive-into-cursor-rules-0-45/60721>
- <https://forum.cursor.com/t/optimal-structure-for-mdc-rules-files/52260>
- <https://github.com/PatrickJS/awesome-cursorrules>

Great examples:

- <https://github.com/PatrickJS/awesome-cursorrules>
- <https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/java-springboot-jpa-cursorrules-prompt-file.mdc>
- <https://github.com/RobertAgterhuis/myAgentic-IT-Project-team/blob/main/.github/docs/README.md>
