export const siteLinks = {
  repo: 'https://github.com/LVTD-LLC/ai-steering',
  readme: 'https://github.com/LVTD-LLC/ai-steering/blob/main/README.md',
  contributing: 'https://github.com/LVTD-LLC/ai-steering/blob/main/CONTRIBUTING.md',
  suggestSite: 'https://github.com/LVTD-LLC/ai-steering/issues/new?title=Suggest%20resource%3A%20&body=URL%3A%0A%0ASteering%20file%3A%0A%0AUseful%20resources%20or%20Great%20examples%3A%0A%0AWhat%20it%20teaches%20or%20shows%3A',
  site: 'https://ai-steering.lvtd.dev',
  source: 'https://github.com/LVTD-LLC/ai-steering/blob/main/src/data/steering-data.js',
  skill: 'https://github.com/LVTD-LLC/ai-steering/blob/main/skills/ai-steering-files/SKILL.md',
  skillsCli: 'https://www.skills.sh/docs/cli',
  ghSkill: 'https://cli.github.com/manual/gh_skill_install'
};

export const skillInstall = {
  name: 'ai-steering-files',
  sourcePath: 'skills/ai-steering-files/SKILL.md',
  skillsCliCommand: 'npx skills add LVTD-LLC/ai-steering',
  githubCliCommand: 'gh skill install LVTD-LLC/ai-steering ai-steering-files --agent codex --scope user'
};

export const resourceSections = [
  {
    title: 'Agent-Agnostic Files',
    slug: 'agent-agnostic-files',
    intro: 'Start here for rules and context that should help every coding assistant work safely in the repo.',
    resources: [
      {
        name: 'AGENTS.md',
        path: 'AGENTS.md',
        summary: 'The shared operating manual every coding agent should read before changing the repo.',
        useItFor: [
          'repo-specific behavior that applies across tools',
          'safe defaults, guardrails, and approval boundaries',
          'exact commands agents can run with confidence',
          'review, branch, and merge expectations'
        ],
        shouldContain: [
          'concise project summary',
          'preferred workflow',
          'exact install, test, lint, build, and deploy commands',
          'branch and PR policy',
          'actions that need approval',
          'rules agents should not bypass'
        ],
        usefulResources: [
          { label: 'AGENTS.md spec', href: 'https://agents.md/' },
          { label: 'OpenAI Codex guide', href: 'https://developers.openai.com/codex/guides/agents-md' },
          { label: 'How to write a great AGENTS.md', href: 'https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/' },
          { label: 'How to write good AGENTS.md files', href: 'https://www.augmentcode.com/blog/how-to-write-good-agents-dot-md-files' }
        ],
        greatExamples: [
          { label: 'n8n AGENTS.md', href: 'https://github.com/n8n-io/n8n/blob/master/AGENTS.md' },
          { label: 'spec-kit AGENTS.md', href: 'https://github.com/github/spec-kit/blob/main/AGENTS.md' },
          { label: 'llama.cpp AGENTS.md', href: 'https://github.com/ggml-org/llama.cpp/blob/master/AGENTS.md' },
          { label: 'paperclip AGENTS.md', href: 'https://github.com/paperclipai/paperclip/blob/master/AGENTS.md' },
          { label: 'Firecrawl AGENTS.md', href: 'https://github.com/firecrawl/firecrawl/blob/main/AGENTS.md' }
        ]
      },
      {
        name: 'PRODUCT.md',
        path: 'PRODUCT.md',
        summary: 'Product context that keeps implementation tradeoffs tied to users and outcomes.',
        useItFor: [
          'target users and use cases',
          'the problem the product solves',
          'major workflows and user journeys',
          'business objectives and success criteria'
        ],
        shouldContain: [
          'why the project exists',
          'who it serves',
          'what good looks like',
          'what is in scope and out of scope',
          'the outcomes that matter most'
        ],
        usefulResources: [
          { label: 'Kiro steering docs', href: 'https://kiro.dev/docs/steering/' },
          { label: 'Agent OS product planning', href: 'https://github.com/buildermethods/agent-os/blob/main/commands/agent-os/plan-product.md' },
          { label: 'aidd', href: 'https://github.com/paralleldrive/aidd' },
          { label: 'Spec kit walkthrough', href: 'https://matsen.fhcrc.org/general/2026/02/10/spec-kit-walkthrough.html' }
        ],
        greatExamples: [
          { label: 'Rybbit PRODUCT.md', href: 'https://github.com/rybbit-io/rybbit/blob/master/PRODUCT.md' },
          { label: 'Twenty PRODUCT.md', href: 'https://github.com/twentyhq/twenty/blob/main/PRODUCT.md' },
          { label: 'paperclip PRODUCT.md', href: 'https://github.com/paperclipai/paperclip/blob/master/doc/PRODUCT.md' },
          { label: 'agent-coordinator PRODUCT.md', href: 'https://github.com/mspworld/agent-coordinator/blob/main/PRODUCT.md' },
          { label: 'AI-Shipping-Labs website', href: 'https://github.com/AI-Shipping-Labs/website/blob/main/_docs/product.md' }
        ]
      },
      {
        name: 'TECH.md',
        path: 'TECH.md',
        summary: 'The technical source of truth for stack, commands, and implementation constraints.',
        useItFor: [
          'framework and library choices',
          'runtime and package manager versions',
          'build, check, test, and deploy commands',
          'deployment targets, integrations, and APIs'
        ],
        shouldContain: [
          'the canonical stack',
          'supported commands',
          'preferred libraries and patterns',
          'external services and APIs',
          'the constraints agents must respect'
        ],
        usefulResources: [
          { label: 'Kiro steering docs', href: 'https://kiro.dev/docs/steering/' },
          { label: 'Sample Kiro CLI multiagent development', href: 'https://github.com/aws-samples/sample-kiro-cli-multiagent-development' },
          { label: 'moai-adk', href: 'https://github.com/modu-ai/moai-adk' },
          { label: 'Introducing Kiro CLI', href: 'https://kiro.dev/blog/introducing-kiro-cli/' }
        ],
        greatExamples: [
          { label: 'sample-kiro-cli sdk verification steering', href: 'https://github.com/aws-samples/sample-kiro-cli-multiagent-development/blob/main/steering/sdk-verification.md' },
          { label: 'moai-adk', href: 'https://github.com/modu-ai/moai-adk' },
          { label: 'ai-engineering-template', href: 'https://github.com/LaProgrammerie/ai-engineering-template' }
        ]
      },
      {
        name: 'STRUCTURE.md',
        path: 'STRUCTURE.md',
        summary: 'A repo map that helps agents put code, docs, and tests in the right place.',
        useItFor: [
          'top-level directory layout',
          'naming conventions',
          'import patterns',
          'module boundaries and ownership lines'
        ],
        shouldContain: [
          'a directory map',
          'ownership boundaries',
          'import rules',
          'placement rules for new files',
          'special-case folders that matter for the agent'
        ],
        usefulResources: [
          { label: 'Kiro steering docs', href: 'https://kiro.dev/docs/steering/' },
          { label: 'Introducing Kiro powers', href: 'https://kiro.dev/blog/introducing-powers/' },
          { label: 'Better Agents STRUCTURE.md', href: 'https://github.com/langwatch/better-agents/blob/main/docs/STRUCTURE.md' },
          { label: 'Project structure guide', href: 'https://github.com/gamekit-agent/gamekit-cli/blob/main/docs/project-structure.md' }
        ],
        greatExamples: [
          { label: 'better-agents STRUCTURE.md', href: 'https://github.com/langwatch/better-agents/blob/main/docs/STRUCTURE.md' },
          { label: 'gamekit-cli project structure', href: 'https://github.com/gamekit-agent/gamekit-cli/blob/main/docs/project-structure.md' },
          { label: 'repository structure', href: 'https://github.com/bootc-dev/infra/blob/main/docs/repository-structure.md' }
        ]
      },
      {
        name: 'VISION.md',
        path: 'VISION.md',
        summary: 'Long-term direction, non-goals, and taste principles that should outlast individual specs.',
        useItFor: [
          'long-term product direction',
          'non-goals',
          'design and product taste',
          'the future state the project is trying to create'
        ],
        shouldContain: [
          'vision and durable constraints',
          'what the project should become',
          'what should not drift',
          'success criteria at the level of outcomes, not implementation'
        ],
        usefulResources: [
          { label: 'aidd', href: 'https://github.com/paralleldrive/aidd' },
          { label: 'Introducing Kiro', href: 'https://kiro.dev/blog/introducing-kiro/' },
          { label: 'Kiro and the future of software development', href: 'https://kiro.dev/blog/kiro-and-the-future-of-software-development/' },
          { label: 'clawhub VISION.md', href: 'https://github.com/openclaw/clawhub/blob/main/VISION.md' }
        ],
        greatExamples: [
          { label: 'OpenClaw VISION.md', href: 'https://github.com/openclaw/openclaw/blob/main/VISION.md' },
          { label: 'lazygit VISION.md', href: 'https://github.com/jesseduffield/lazygit/blob/master/VISION.md' },
          { label: 'OpenClaw ClawHub VISION.md', href: 'https://github.com/openclaw/clawhub/blob/main/VISION.md' },
          { label: 'agentkitten VISION.md', href: 'https://github.com/fbeeper/agentkitten/blob/main/VISION.md' },
          { label: 'sprout VISION.md', href: 'https://github.com/block/sprout/blob/main/VISION.md' },
          { label: 'gsd-2 VISION.md', href: 'https://github.com/gsd-build/gsd-2/blob/main/VISION.md' }
        ]
      },
      {
        name: 'DESIGN.md',
        path: 'DESIGN.md',
        summary: 'A design-system source of truth for AI-generated UI changes.',
        useItFor: [
          'design tokens and theme choices',
          'typography and spacing',
          'layout rules',
          'component patterns',
          'accessibility expectations'
        ],
        shouldContain: [
          'the visual language',
          'spacing and type rules',
          'layout constraints',
          'component style preferences',
          'UI patterns to avoid'
        ],
        usefulResources: [
          { label: 'Google Stitch announcement', href: 'https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/' },
          { label: 'Stitch AI UI design', href: 'https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/' },
          { label: 'design.md', href: 'https://github.com/google-labs-code/design.md' },
          { label: 'Awesome Design.md', href: 'https://github.com/VoltAgent/awesome-design-md' }
        ],
        greatExamples: [
          { label: 'Twenty DESIGN.md', href: 'https://github.com/twentyhq/twenty/blob/main/DESIGN.md' },
          { label: 'gstack DESIGN.md', href: 'https://github.com/garrytan/gstack/blob/main/DESIGN.md' },
          { label: 'google-labs-code/design.md', href: 'https://github.com/google-labs-code/design.md' },
          { label: 'awesome-design-md', href: 'https://github.com/VoltAgent/awesome-design-md' },
          { label: 'awesome-claude-design', href: 'https://github.com/VoltAgent/awesome-claude-design' }
        ]
      }
    ]
  },
  {
    title: 'Reusable Skills',
    slug: 'reusable-skills',
    intro: 'Installable skills package this guidance so agents can reuse it across projects without loading the whole catalog.',
    resources: [
      {
        name: 'ai-steering-files',
        path: 'skills/ai-steering-files/SKILL.md',
        summary: 'An installable Agent Skill for choosing, writing, and maintaining repo steering files.',
        useItFor: [
          'creating AI steering files in a new or existing repo',
          'auditing whether agent instructions are concrete enough',
          'choosing between agent-agnostic, agent-specific, and path-scoped guidance',
          'keeping reusable agent context portable across projects'
        ],
        shouldContain: [
          'Agent Skills frontmatter with a searchable description',
          'a practical workflow for inventorying existing steering files',
          'a chooser table for common repo context files',
          'quality checks for commands, paths, examples, and duplicate guidance'
        ],
        usefulResources: [
          { label: 'Agent Skills specification', href: 'https://agentskills.io/specification' },
          { label: 'Skills CLI docs', href: 'https://www.skills.sh/docs/cli' },
          { label: 'GitHub CLI gh skill install', href: 'https://cli.github.com/manual/gh_skill_install' },
          { label: 'Skill source', href: 'https://github.com/LVTD-LLC/ai-steering/blob/main/skills/ai-steering-files/SKILL.md' }
        ],
        greatExamples: [
          { label: 'Agent Skills quickstart', href: 'https://agentskills.io/skill-creation/quickstart' },
          { label: 'OpenAI skills catalog', href: 'https://github.com/openai/skills' },
          { label: 'Vercel agent skills', href: 'https://github.com/vercel-labs/agent-skills' }
        ]
      }
    ]
  },
  {
    title: 'Agent-Specific Files',
    slug: 'agent-specific-files',
    intro: 'Add these when a tool needs its own syntax, memory model, or narrower workflow rules.',
    resources: [
      {
        name: 'CLAUDE.md',
        path: 'CLAUDE.md',
        summary: 'The Claude Code memory file for repo-specific instructions and workflows.',
        useItFor: [
          'Claude-specific guidance',
          'repo conventions that should persist across Claude sessions',
          'build/test/verify expectations for Claude',
          'workflow notes that are useful in Claude Code'
        ],
        shouldContain: [
          'project-specific instructions',
          'code style and review rules',
          'build and test commands',
          'escalation boundaries',
          'paths or workflows Claude should handle carefully'
        ],
        usefulResources: [
          { label: 'Claude Code overview', href: 'https://docs.anthropic.com/en/docs/claude-code/overview' },
          { label: 'Claude Code memory', href: 'https://docs.anthropic.com/en/docs/claude-code/memory' },
          { label: 'Claude Code GitHub Actions', href: 'https://docs.anthropic.com/en/docs/claude-code/github-actions' },
          { label: 'Anthropic issue #10286', href: 'https://github.com/anthropics/claude-code/issues/10286' }
        ],
        greatExamples: [
          { label: 'TrueCourse CLAUDE.md', href: 'https://github.com/truecourse-ai/truecourse/blob/main/CLAUDE.md' },
          { label: 'Andrej Karpathy skills CLAUDE.md', href: 'https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md' },
          { label: 'Claude Agent SDK Python CLAUDE.md', href: 'https://github.com/anthropics/claude-agent-sdk-python/blob/main/CLAUDE.md' },
          { label: 'tools-monorepo CLAUDE.md', href: 'https://github.com/tylerbutler/tools-monorepo/blob/main/CLAUDE.md' }
        ]
      },
      {
        name: 'GEMINI.md',
        path: 'GEMINI.md',
        summary: 'The Gemini CLI context file for repo instructions, commands, and response preferences.',
        useItFor: [
          'Gemini-specific instructions',
          'repo conventions that should persist across Gemini sessions',
          'project context and response preferences',
          'custom commands or tool usage hints'
        ],
        shouldContain: [
          'project-specific context',
          'coding conventions',
          'build/test/verify notes',
          'files or folders Gemini should prioritize'
        ],
        usefulResources: [
          { label: 'Gemini CLI docs', href: 'https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/gemini-md.md' },
          { label: 'Gemini CLI announcement', href: 'https://discuss.ai.google.dev/t/announcing-gemini-cli-a-command-line-tool-for-the-google-gemini-api/96003' },
          { label: 'Gemini CLI repo', href: 'https://github.com/google-gemini/gemini-cli' },
          { label: 'Gemini CLI issue #1806', href: 'https://github.com/google-gemini/gemini-cli/issues/1806' }
        ],
        greatExamples: [
          { label: 'gemini-cli GEMINI.md', href: 'https://github.com/google-gemini/gemini-cli/blob/main/GEMINI.md' },
          { label: 'claude-skills GEMINI.md', href: 'https://github.com/alirezarezvani/claude-skills/blob/main/GEMINI.md' }
        ]
      },
      {
        name: '.github/copilot-instructions.md',
        path: '.github/copilot-instructions.md',
        summary: 'Repository-wide instructions GitHub Copilot should apply when suggesting changes.',
        useItFor: [
          'Copilot instructions that apply across the repo',
          'build/test/validation guidance',
          'repo-specific coding standards',
          'review and safety expectations'
        ],
        shouldContain: [
          'how to build and test the repo',
          'conventions and patterns to follow',
          'constraints that should always be respected',
          'any special validation steps'
        ],
        usefulResources: [
          { label: 'GitHub Copilot custom instructions', href: 'https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot' },
          { label: 'Copilot CLI custom instructions', href: 'https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions' },
          { label: 'Copilot reference', href: 'https://docs.github.com/copilot/reference/custom-instructions-support' },
          { label: 'Awesome Copilot', href: 'https://github.com/github/awesome-copilot' }
        ],
        greatExamples: [
          { label: 'VS Code Copilot instructions', href: 'https://github.com/microsoft/vscode/blob/main/.github/copilot-instructions.md' },
          { label: 'GitHub Copilot SDK instructions', href: 'https://github.com/github/copilot-sdk/blob/main/.github/copilot-instructions.md' },
          { label: 'github/awesome-copilot', href: 'https://github.com/github/awesome-copilot' },
          { label: 'dotnet/runtime copilot instructions', href: 'https://github.com/dotnet/runtime/blob/main/.github/copilot-instructions.md' },
          { label: 'obsidian-tasks issue #3816', href: 'https://github.com/obsidian-tasks-group/obsidian-tasks/issues/3816' }
        ]
      },
      {
        name: '.cursor/rules/*.mdc',
        path: '.cursor/rules/*.mdc',
        summary: 'Path-scoped Cursor rules for workflows that need narrower guidance than a repo-wide file.',
        useItFor: [
          'file-specific or workflow-specific rules',
          'path-scoped instructions',
          'rule sets for certain parts of the repo',
          'agent behavior that should not apply globally'
        ],
        shouldContain: [
          'path or task scope',
          'the conventions to follow in that scope',
          'examples of good output',
          'what should auto-apply vs stay manual'
        ],
        usefulResources: [
          { label: 'Cursor rules docs', href: 'https://cursor.com/docs/rules' },
          { label: 'Deep dive into Cursor rules', href: 'https://forum.cursor.com/t/a-deep-dive-into-cursor-rules-0-45/60721' },
          { label: 'Optimal structure for .mdc rules', href: 'https://forum.cursor.com/t/optimal-structure-for-mdc-rules-files/52260' },
          { label: 'Awesome Cursor Rules', href: 'https://github.com/PatrickJS/awesome-cursorrules' }
        ],
        greatExamples: [
          { label: 'awesome-cursorrules', href: 'https://github.com/PatrickJS/awesome-cursorrules' },
          { label: 'java springboot jpa rule file', href: 'https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/java-springboot-jpa-cursorrules-prompt-file.mdc' },
          { label: 'myAgentic-IT-Project-team README', href: 'https://github.com/RobertAgterhuis/myAgentic-IT-Project-team/blob/main/.github/docs/README.md' }
        ]
      }
    ]
  }
];
