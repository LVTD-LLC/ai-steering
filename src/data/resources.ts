export type Resource = {
  name: string;
  path: string;
  role: string;
  bestFor: string;
  include: string[];
  links: { label: string; href: string }[];
};

export const coreResources: Resource[] = [
  {
    name: 'AGENTS.md',
    path: 'AGENTS.md',
    role: 'A predictable operating manual for coding agents.',
    bestFor: 'Build commands, tests, repo-specific rules, safety boundaries, and workflow expectations.',
    include: [
      'setup, build, lint, test, and release commands',
      'repository-specific coding conventions',
      'review and safety rules agents must respect',
      'where to find deeper docs when context is needed'
    ],
    links: [
      { label: 'AGENTS.md spec', href: 'https://agents.md/' },
      { label: 'OpenAI Codex guide', href: 'https://developers.openai.com/codex/guides/agents-md' }
    ]
  },
  {
    name: 'DESIGN.md',
    path: 'DESIGN.md',
    role: 'A design-system source of truth for AI-generated interface work.',
    bestFor: 'Visual language, tokens, layout rules, component behavior, and product taste.',
    include: [
      'machine-readable tokens for color, type, spacing, radius, and elevation',
      'human-readable guidance for when and why to apply those tokens',
      'component and interaction rules with concrete examples',
      'anti-patterns that protect brand and usability'
    ],
    links: [
      { label: 'Google Stitch announcement', href: 'https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/' },
      { label: 'DESIGN.md spec', href: 'https://github.com/google-labs-code/design.md/blob/main/docs/spec.md' }
    ]
  },
  {
    name: 'PRODUCT.md',
    path: '.kiro/steering/product.md or PRODUCT.md',
    role: 'Product context that keeps implementation choices aligned with the business.',
    bestFor: 'Purpose, target users, key jobs, business model, positioning, and feature priorities.',
    include: [
      'target users and their primary jobs',
      'core workflows and success criteria',
      'business objectives and constraints',
      'product principles that should influence tradeoffs'
    ],
    links: [
      { label: 'Kiro steering docs', href: 'https://kiro.dev/docs/steering/' },
      { label: 'Kiro CLI steering', href: 'https://kiro.dev/docs/cli/steering/' }
    ]
  },
  {
    name: 'TECH.md',
    path: '.kiro/steering/tech.md or TECH.md',
    role: 'Technical stack and implementation constraints for future code changes.',
    bestFor: 'Frameworks, libraries, tools, commands, runtime constraints, and dependency preferences.',
    include: [
      'frameworks, languages, package managers, and runtime versions',
      'approved libraries and discouraged alternatives',
      'local development and CI commands',
      'security, performance, and deploy constraints'
    ],
    links: [
      { label: 'Kiro steering docs', href: 'https://kiro.dev/docs/steering/' }
    ]
  },
  {
    name: 'STRUCTURE.md',
    path: '.kiro/steering/structure.md or STRUCTURE.md',
    role: 'A map of the codebase that helps agents put changes in the right place.',
    bestFor: 'Architecture, directory layout, import patterns, naming conventions, and ownership boundaries.',
    include: [
      'major directories and what belongs in each',
      'naming and import conventions',
      'shared modules and extension points',
      'examples of good local patterns to copy'
    ],
    links: [
      { label: 'Kiro steering docs', href: 'https://kiro.dev/docs/steering/' }
    ]
  },
  {
    name: 'VISION.md',
    path: 'VISION.md',
    role: 'Longer-horizon direction that changes less often than product specs.',
    bestFor: 'Taste, ambition, non-goals, operating philosophy, and the future shape of the project.',
    include: [
      'why the project should exist in the long term',
      'what the product should feel like when it is excellent',
      'hard non-goals and tradeoffs',
      'principles for deciding between plausible paths'
    ],
    links: [
      { label: 'PageFresh example PR', href: 'https://github.com/LVTD-LLC/pagefresh/pull/14' }
    ]
  }
];

export const relatedResources: Resource[] = [
  {
    name: 'Cursor Rules',
    path: '.cursor/rules/*.mdc',
    role: 'Scoped instructions that Cursor can apply by file pattern or workflow.',
    bestFor: 'Framework-specific rules, reusable coding standards, and task-mode guidance.',
    include: [
      'narrow rule scope and matching globs',
      'examples of preferred implementation style',
      'short checklists rather than broad essays',
      'links to canonical project files for deeper context'
    ],
    links: [
      { label: 'Awesome Cursor Rules', href: 'https://github.com/PatrickJS/awesome-cursorrules' }
    ]
  },
  {
    name: 'Vendor Instruction Files',
    path: 'CLAUDE.md, GEMINI.md, .github/copilot-instructions.md',
    role: 'Tool-specific instruction files for agents that do not read the same generic context.',
    bestFor: 'Compatibility with a specific assistant while keeping core knowledge reusable.',
    include: [
      'thin wrappers that point to canonical steering files',
      'tool-specific command or behavior notes',
      'avoid duplicated long-form context that can drift',
      'clear precedence when multiple files exist'
    ],
    links: [
      { label: 'AGENTS.md examples', href: 'https://agents.md/' }
    ]
  },
  {
    name: 'Agent Skills',
    path: 'skills/*/SKILL.md',
    role: 'Reusable workflows an agent can load only when a task requires specialized behavior.',
    bestFor: 'Repeatable procedures, tool integrations, templates, and domain-specific execution rules.',
    include: [
      'trigger conditions and task boundaries',
      'step-by-step workflow guidance',
      'references, scripts, and templates',
      'fallback behavior when tools are unavailable'
    ],
    links: [
      { label: 'Agent Skills overview', href: 'https://agentskills.io/home' }
    ]
  }
];
