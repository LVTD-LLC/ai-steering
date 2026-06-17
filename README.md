# AI Steering Files

This repository is a practical guide to the files that make AI-assisted coding work better in real projects.

## Install the Reusable Skill

Install `ai-steering-files` when you want an agent to reuse this guidance in another project.

With the Skills CLI:

```bash
npx skills add LVTD-LLC/ai-steering
```

With GitHub CLI:

```bash
gh skill install LVTD-LLC/ai-steering ai-steering-files --agent codex --scope user
```

Source: [skills/ai-steering-files/SKILL.md](https://github.com/LVTD-LLC/ai-steering/blob/main/skills/ai-steering-files/SKILL.md)

<a id="agent-agnostic-files"></a>
## Agent-Agnostic Files

These files should stay useful no matter which assistant is reading the repo.

<a id="agents-md"></a>
### AGENTS.md

The vendor-neutral operating manual for coding agents.

Use it for:

- repo-specific agent behavior
- safe defaults and guardrails
- commands that are reliable in this repo
- review and merge expectations

What it should contain:

- project summary
- preferred workflow
- exact install, test, lint, build, and deploy commands
- branch policy
- risky actions that need approval
- any do-not-do-this-casually rules

Useful resources:

- [AGENTS.md spec](https://agents.md/)
- [OpenAI Codex guide](https://developers.openai.com/codex/guides/agents-md)
- [How to write a great AGENTS.md](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/)
- [How to write good AGENTS.md files](https://www.augmentcode.com/blog/how-to-write-good-agents-dot-md-files)

Great examples:

- [paperclip](https://github.com/paperclipai/paperclip/blob/master/AGENTS.md)

<a id="product-md"></a>
### PRODUCT.md

Product context that keeps implementation choices aligned with the business.

Use it for:

- target users
- the problem being solved
- major workflows
- business objectives and success criteria

What it should contain:

- why the project exists
- who it is for
- what good looks like
- what is in scope and out of scope
- the outcomes that matter most

Useful resources:

- [Kiro steering docs](https://kiro.dev/docs/steering/)
- [Agent OS product planning](https://github.com/buildermethods/agent-os/blob/main/commands/agent-os/plan-product.md)
- [aidd](https://github.com/paralleldrive/aidd)
- [Spec kit walkthrough](https://matsen.fhcrc.org/general/2026/02/10/spec-kit-walkthrough.html)

Great examples:

- [paperclip PRODUCT.md](https://github.com/paperclipai/paperclip/blob/master/doc/PRODUCT.md)
- [agent-coordinator PRODUCT.md](https://github.com/mspworld/agent-coordinator/blob/main/PRODUCT.md)
- [AI-Shipping-Labs website](https://github.com/AI-Shipping-Labs/website/blob/main/_docs/PRODUCT.md)

<a id="tech-md"></a>
### TECH.md

The technical source of truth for stack and implementation constraints.

Use it for:

- frameworks and libraries
- runtime versions
- build and test commands
- deployment targets and integration points

What it should contain:

- the canonical stack
- supported commands
- preferred libraries and frameworks
- external services and APIs
- the constraints agents must respect

Useful resources:

- [Kiro steering docs](https://kiro.dev/docs/steering/)
- [Sample Kiro CLI multiagent development](https://github.com/aws-samples/sample-kiro-cli-multiagent-development)
- [moai-adk](https://github.com/modu-ai/moai-adk)
- [Introducing Kiro CLI](https://kiro.dev/blog/introducing-kiro-cli/)

Great examples:

- [sample-kiro-cli-multiagent-development docs/tech.md](https://github.com/aws-samples/sample-kiro-cli-multiagent-development/blob/main/docs/tech.md)
- [moai-adk](https://github.com/modu-ai/moai-adk)
- [ai-engineering-template](https://github.com/LaProgrammerie/ai-engineering-template)

<a id="structure-md"></a>
### STRUCTURE.md

A map of the repository that helps agents put changes in the right place.

Use it for:

- top-level directory layout
- naming conventions
- import patterns
- module boundaries

What it should contain:

- a directory map
- ownership boundaries
- import rules
- placement rules for new files
- special-case folders that matter for the agent

Useful resources:

- [Kiro steering docs](https://kiro.dev/docs/steering/)
- [Introducing Kiro powers](https://kiro.dev/blog/introducing-kiro-powers/)
- [Better Agents STRUCTURE.md](https://github.com/langwatch/better-agents/blob/main/docs/STRUCTURE.md)
- [Project structure guide](https://github.com/gamekit-agent/gamekit-cli/blob/main/docs/project-structure.md)

Great examples:

- [better-agents STRUCTURE.md](https://github.com/langwatch/better-agents/blob/main/docs/STRUCTURE.md)
- [gamekit-cli project structure](https://github.com/gamekit-agent/gamekit-cli/blob/main/docs/project-structure.md)
- [repository structure](https://github.com/bootc-dev/infra/blob/main/docs/repository-structure.md)

<a id="vision-md"></a>
### VISION.md

The durable product and taste direction that should change less often than product specs.

Use it for:

- long-term product vision
- non-goals
- design and product taste
- the kind of future you are trying to create

What it should contain:

- vision and constraints
- what the project should become
- what should never drift
- success criteria at the level of outcomes, not implementation

Useful resources:

- [aidd](https://github.com/paralleldrive/aidd)
- [Introducing Kiro](https://kiro.dev/blog/introducing-kiro/)
- [Kiro and the future of software development](https://kiro.dev/blog/kiro-and-the-future-of-software-development/)
- [clawhub VISION.md](https://github.com/openclaw/clawhub/blob/main/VISION.md)

Great examples:

- [agentkitten VISION.md](https://github.com/fbeeper/agentkitten/blob/main/VISION.md)
- [sprout VISION.md](https://github.com/block/sprout/blob/main/VISION.md)
- [gsd-2 VISION.md](https://github.com/gsd-build/gsd-2/blob/main/VISION.md)

<a id="design-md"></a>
### DESIGN.md

A design-system source of truth for AI-generated interface work.

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

- [Google Stitch announcement](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/)
- [Stitch AI UI design](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)
- [design.md](https://github.com/google-labs-code/design.md)
- [Awesome Design.md](https://github.com/VoltAgent/awesome-design-md)

Great examples:

- [google-labs-code/design.md](https://github.com/google-labs-code/design.md)
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- [awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design)

<a id="reusable-skills"></a>
## Reusable Skills

Installable skills package this guidance so agents can reuse it across projects without loading the whole catalog.

<a id="ai-steering-files"></a>
### ai-steering-files

An installable Agent Skill for choosing, writing, and maintaining repo steering files.

Use it for:

- creating AI steering files in a new or existing repo
- auditing whether agent instructions are concrete enough
- choosing between agent-agnostic, agent-specific, and path-scoped guidance
- keeping reusable agent context portable across projects

What it should contain:

- Agent Skills frontmatter with a searchable description
- a practical workflow for inventorying existing steering files
- a chooser table for common repo context files
- quality checks for commands, paths, examples, and duplicate guidance

Useful resources:

- [Agent Skills specification](https://agentskills.io/specification)
- [Skills CLI docs](https://www.skills.sh/docs/cli)
- [GitHub CLI gh skill install](https://cli.github.com/manual/gh_skill_install)
- [Skill source](https://github.com/LVTD-LLC/ai-steering/blob/main/skills/ai-steering-files/SKILL.md)

Great examples:

- [Agent Skills quickstart](https://agentskills.io/skill-creation/quickstart)
- [OpenAI skills catalog](https://github.com/openai/skills)
- [Vercel agent skills](https://github.com/vercel-labs/agent-skills)

<a id="agent-specific-files"></a>
## Agent-Specific Files

These files should exist when a tool needs its own memory, syntax, or scope rules.

<a id="claude-md"></a>
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

- [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Claude Code GitHub Actions](https://docs.anthropic.com/en/docs/claude-code/github-actions)
- [Anthropic issue #10286](https://github.com/anthropics/claude-code/issues/10286)

Great examples:

- [tools-monorepo CLAUDE.md](https://github.com/tylerbutler/tools-monorepo/blob/main/CLAUDE.md)
- [claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice/blob/main/CLAUDE.md)
- [mcp-steroid CLAUDE.md](https://github.com/jonnyzzz/mcp-steroid/blob/main/CLAUDE.md)

<a id="gemini-md"></a>
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

- [Gemini CLI docs](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/gemini-md.md)
- [Gemini CLI announcement](https://discuss.ai.google.dev/t/announcing-gemini-cli-a-command-line-tool-for-the-google-gemini-api/96003)
- [Gemini CLI repo](https://github.com/google-gemini/gemini-cli)
- [Gemini CLI issue #1806](https://github.com/google-gemini/gemini-cli/issues/1806)

Great examples:

- [gemini-cli GEMINI.md](https://github.com/google-gemini/gemini-cli/blob/main/GEMINI.md)
- [claude-skills GEMINI.md](https://github.com/alirezarezvani/claude-skills/blob/main/GEMINI.md)

<a id="github-copilot-instructions-md"></a>
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

- [GitHub Copilot custom instructions](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [Copilot CLI custom instructions](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions)
- [Copilot reference](https://docs.github.com/copilot/reference/custom-instructions-support)
- [Awesome Copilot](https://github.com/github/awesome-copilot)

Great examples:

- [github/awesome-copilot](https://github.com/github/awesome-copilot)
- [AI-Shipping-Labs website](https://github.com/AI-Shipping-Labs/website/blob/main/.github/copilot-instructions.md)
- [obsidian-tasks issue #3816](https://github.com/obsidian-tasks-group/obsidian-tasks/issues/3816)

<a id="cursor-rules-mdc"></a>
### .cursor/rules/*.mdc

Path-scoped Cursor rules for workflows that should only apply in specific places.

Use it for:

- file-specific or workflow-specific rules
- path-scoped instructions
- rule sets that should only apply in certain parts of the repo
- agent behavior that needs to be narrower than a repo-wide file

What it should contain:

- path or task scope
- the conventions to follow in that scope
- examples of good output
- what should auto-apply vs stay manual

Useful resources:

- [Cursor rules docs](https://cursor.com/docs/rules)
- [Deep dive into Cursor rules](https://forum.cursor.com/t/a-deep-dive-into-cursor-rules-0-45/60721)
- [Optimal structure for .mdc rules](https://forum.cursor.com/t/optimal-structure-for-mdc-rules-files/52260)
- [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules)

Great examples:

- [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)
- [java springboot jpa rule file](https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/java-springboot-jpa-cursorrules-prompt-file.mdc)
- [myAgentic-IT-Project-team README](https://github.com/RobertAgterhuis/myAgentic-IT-Project-team/blob/main/.github/docs/README.md)

## Keeping It In Sync

Edit [src/data/steering-data.js](https://github.com/LVTD-LLC/ai-steering/blob/main/src/data/steering-data.js) when the file guidance changes, then run `npm run sync:readme` to regenerate this document.
