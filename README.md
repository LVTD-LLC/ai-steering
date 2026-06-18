# AI Steering Files

A practical catalog of repository steering files for AI coding agents. Use it to decide which context files your repo needs, what each one should contain, and which examples are worth studying.

Browse the web version: [https://ai-steering.lvtd.dev](https://ai-steering.lvtd.dev).

Use this repo when:

- agents keep missing repo-specific commands, constraints, or product context
- maintainers need one place for tool-neutral instructions
- a team wants Claude, Gemini, Copilot, or Cursor guidance without duplicating shared rules

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

Start here for rules and context that should help every coding assistant work safely in the repo.

<a id="agents-md"></a>
### AGENTS.md

The shared operating manual every coding agent should read before changing the repo.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?has_file=AGENTS.md).

Use it for:

- repo-specific behavior that applies across tools
- safe defaults, guardrails, and approval boundaries
- exact commands agents can run with confidence
- review, branch, and merge expectations

What it should contain:

- concise project summary
- preferred workflow
- exact install, test, lint, build, and deploy commands
- branch and PR policy
- actions that need approval
- rules agents should not bypass

Useful resources:

- [AGENTS.md spec](https://agents.md/)
- [OpenAI Codex guide](https://developers.openai.com/codex/guides/agents-md)
- [How to write a great AGENTS.md](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/)
- [How to write good AGENTS.md files](https://www.augmentcode.com/blog/how-to-write-good-agents-dot-md-files)

Great examples:

- [n8n AGENTS.md](https://github.com/n8n-io/n8n/blob/master/AGENTS.md)
- [spec-kit AGENTS.md](https://github.com/github/spec-kit/blob/main/AGENTS.md)
- [llama.cpp AGENTS.md](https://github.com/ggml-org/llama.cpp/blob/master/AGENTS.md)
- [paperclip AGENTS.md](https://github.com/paperclipai/paperclip/blob/master/AGENTS.md)
- [Firecrawl AGENTS.md](https://github.com/firecrawl/firecrawl/blob/main/AGENTS.md)

<a id="product-md"></a>
### PRODUCT.md

Product context that keeps implementation tradeoffs tied to users and outcomes.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?has_file=PRODUCT.md).

Use it for:

- target users and use cases
- the problem the product solves
- major workflows and user journeys
- business objectives and success criteria

What it should contain:

- why the project exists
- who it serves
- what good looks like
- what is in scope and out of scope
- the outcomes that matter most

Useful resources:

- [Kiro steering docs](https://kiro.dev/docs/steering/)
- [Agent OS product planning](https://github.com/buildermethods/agent-os/blob/main/commands/agent-os/plan-product.md)
- [aidd](https://github.com/paralleldrive/aidd)
- [Spec kit walkthrough](https://matsen.fhcrc.org/general/2026/02/10/spec-kit-walkthrough.html)

Great examples:

- [Rybbit PRODUCT.md](https://github.com/rybbit-io/rybbit/blob/master/PRODUCT.md)
- [Twenty PRODUCT.md](https://github.com/twentyhq/twenty/blob/main/PRODUCT.md)
- [paperclip PRODUCT.md](https://github.com/paperclipai/paperclip/blob/master/doc/PRODUCT.md)
- [agent-coordinator PRODUCT.md](https://github.com/mspworld/agent-coordinator/blob/main/PRODUCT.md)
- [AI-Shipping-Labs website](https://github.com/AI-Shipping-Labs/website/blob/main/_docs/product.md)

<a id="tech-md"></a>
### TECH.md

The technical source of truth for stack, commands, and implementation constraints.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?has_file=TECH.md).

Use it for:

- framework and library choices
- runtime and package manager versions
- build, check, test, and deploy commands
- deployment targets, integrations, and APIs

What it should contain:

- the canonical stack
- supported commands
- preferred libraries and patterns
- external services and APIs
- the constraints agents must respect

Useful resources:

- [Kiro steering docs](https://kiro.dev/docs/steering/)
- [Sample Kiro CLI multiagent development](https://github.com/aws-samples/sample-kiro-cli-multiagent-development)
- [moai-adk](https://github.com/modu-ai/moai-adk)
- [Introducing Kiro CLI](https://kiro.dev/blog/introducing-kiro-cli/)

Great examples:

- [sample-kiro-cli sdk verification steering](https://github.com/aws-samples/sample-kiro-cli-multiagent-development/blob/main/steering/sdk-verification.md)
- [moai-adk](https://github.com/modu-ai/moai-adk)
- [ai-engineering-template](https://github.com/LaProgrammerie/ai-engineering-template)

<a id="structure-md"></a>
### STRUCTURE.md

A repo map that helps agents put code, docs, and tests in the right place.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?has_file=STRUCTURE.md).

Use it for:

- top-level directory layout
- naming conventions
- import patterns
- module boundaries and ownership lines

What it should contain:

- a directory map
- ownership boundaries
- import rules
- placement rules for new files
- special-case folders that matter for the agent

Useful resources:

- [Kiro steering docs](https://kiro.dev/docs/steering/)
- [Introducing Kiro powers](https://kiro.dev/blog/introducing-powers/)
- [Better Agents STRUCTURE.md](https://github.com/langwatch/better-agents/blob/main/docs/STRUCTURE.md)
- [Project structure guide](https://github.com/gamekit-agent/gamekit-cli/blob/main/docs/project-structure.md)

Great examples:

- [better-agents STRUCTURE.md](https://github.com/langwatch/better-agents/blob/main/docs/STRUCTURE.md)
- [gamekit-cli project structure](https://github.com/gamekit-agent/gamekit-cli/blob/main/docs/project-structure.md)
- [repository structure](https://github.com/bootc-dev/infra/blob/main/docs/repository-structure.md)

<a id="vision-md"></a>
### VISION.md

Long-term direction, non-goals, and taste principles that should outlast individual specs.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?has_file=VISION.md).

Use it for:

- long-term product direction
- non-goals
- design and product taste
- the future state the project is trying to create

What it should contain:

- vision and durable constraints
- what the project should become
- what should not drift
- success criteria at the level of outcomes, not implementation

Useful resources:

- [aidd](https://github.com/paralleldrive/aidd)
- [Introducing Kiro](https://kiro.dev/blog/introducing-kiro/)
- [Kiro and the future of software development](https://kiro.dev/blog/kiro-and-the-future-of-software-development/)
- [clawhub VISION.md](https://github.com/openclaw/clawhub/blob/main/VISION.md)

Great examples:

- [OpenClaw VISION.md](https://github.com/openclaw/openclaw/blob/main/VISION.md)
- [lazygit VISION.md](https://github.com/jesseduffield/lazygit/blob/master/VISION.md)
- [OpenClaw ClawHub VISION.md](https://github.com/openclaw/clawhub/blob/main/VISION.md)
- [agentkitten VISION.md](https://github.com/fbeeper/agentkitten/blob/main/VISION.md)
- [sprout VISION.md](https://github.com/block/sprout/blob/main/VISION.md)
- [gsd-2 VISION.md](https://github.com/gsd-build/gsd-2/blob/main/VISION.md)

<a id="design-md"></a>
### DESIGN.md

A design-system source of truth for AI-generated UI changes.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?has_file=DESIGN.md).

Use it for:

- design tokens and theme choices
- typography and spacing
- layout rules
- component patterns
- accessibility expectations

What it should contain:

- the visual language
- spacing and type rules
- layout constraints
- component style preferences
- UI patterns to avoid

Useful resources:

- [Google Stitch announcement](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/)
- [Stitch AI UI design](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)
- [design.md](https://github.com/google-labs-code/design.md)
- [Awesome Design.md](https://github.com/VoltAgent/awesome-design-md)

Great examples:

- [Twenty DESIGN.md](https://github.com/twentyhq/twenty/blob/main/DESIGN.md)
- [gstack DESIGN.md](https://github.com/garrytan/gstack/blob/main/DESIGN.md)
- [google-labs-code/design.md](https://github.com/google-labs-code/design.md)
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- [awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design)

<a id="agent-specific-files"></a>
## Agent-Specific Files

Add these when a tool needs its own syntax, memory model, or narrower workflow rules.

<a id="claude-md"></a>
### CLAUDE.md

The Claude Code memory file for repo-specific instructions and workflows.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?has_file=CLAUDE.md).

Use it for:

- Claude-specific guidance
- repo conventions that should persist across Claude sessions
- build/test/verify expectations for Claude
- workflow notes that are useful in Claude Code

What it should contain:

- project-specific instructions
- code style and review rules
- build and test commands
- escalation boundaries
- paths or workflows Claude should handle carefully

Useful resources:

- [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Claude Code GitHub Actions](https://docs.anthropic.com/en/docs/claude-code/github-actions)
- [Anthropic issue #10286](https://github.com/anthropics/claude-code/issues/10286)

Great examples:

- [TrueCourse CLAUDE.md](https://github.com/truecourse-ai/truecourse/blob/main/CLAUDE.md)
- [Andrej Karpathy skills CLAUDE.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md)
- [Claude Agent SDK Python CLAUDE.md](https://github.com/anthropics/claude-agent-sdk-python/blob/main/CLAUDE.md)
- [tools-monorepo CLAUDE.md](https://github.com/tylerbutler/tools-monorepo/blob/main/CLAUDE.md)

<a id="gemini-md"></a>
### GEMINI.md

The Gemini CLI context file for repo instructions, commands, and response preferences.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?has_file=GEMINI.md).

Use it for:

- Gemini-specific instructions
- repo conventions that should persist across Gemini sessions
- project context and response preferences
- custom commands or tool usage hints

What it should contain:

- project-specific context
- coding conventions
- build/test/verify notes
- files or folders Gemini should prioritize

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

Repository-wide instructions GitHub Copilot should apply when suggesting changes.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?has_file=.github%2Fcopilot-instructions.md).

Use it for:

- Copilot instructions that apply across the repo
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

- [VS Code Copilot instructions](https://github.com/microsoft/vscode/blob/main/.github/copilot-instructions.md)
- [GitHub Copilot SDK instructions](https://github.com/github/copilot-sdk/blob/main/.github/copilot-instructions.md)
- [github/awesome-copilot](https://github.com/github/awesome-copilot)
- [dotnet/runtime copilot instructions](https://github.com/dotnet/runtime/blob/main/.github/copilot-instructions.md)
- [obsidian-tasks issue #3816](https://github.com/obsidian-tasks-group/obsidian-tasks/issues/3816)

<a id="cursor-rules-mdc"></a>
### .cursor/rules/*.mdc

Path-scoped Cursor rules for workflows that need narrower guidance than a repo-wide file.

Awesome repo search: [find matching repositories](https://awesome.lvtd.dev/?q=.cursor%2Frules%2F*.mdc).

Use it for:

- file-specific or workflow-specific rules
- path-scoped instructions
- rule sets for certain parts of the repo
- agent behavior that should not apply globally

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

Catalog guidance lives in [src/data/steering-data.js](https://github.com/LVTD-LLC/ai-steering/blob/main/src/data/steering-data.js). Edit that file, run `npm run sync:readme`, then run `npm run build` before opening a PR.
