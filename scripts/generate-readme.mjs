import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resourceSections, siteLinks, skillInstall } from '../src/data/steering-data.js';
import { slugify } from '../src/lib/slugify.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outputPath = path.join(root, 'README.md');

const bulletList = (items) => items.map((item) => `- ${item}`).join('\n');

const linkList = (items) => items.map((item) => `- [${item.label}](${item.href})`).join('\n');

const lines = [];

lines.push('# AI Steering Files', '');
lines.push(
  'This repository is a practical guide to the files that make AI-assisted coding work better in real projects.',
  ''
);

lines.push(
  '## Install the Reusable Skill',
  '',
  `Install \`${skillInstall.name}\` when you want an agent to reuse this guidance in another project.`,
  '',
  'With the Skills CLI:',
  '',
  '```bash',
  skillInstall.skillsCliCommand,
  '```',
  '',
  'With GitHub CLI:',
  '',
  '```bash',
  skillInstall.githubCliCommand,
  '```',
  '',
  `Source: [${skillInstall.sourcePath}](${siteLinks.skill})`,
  ''
);

for (const section of resourceSections) {
  lines.push(`<a id="${section.slug}"></a>`, `## ${section.title}`, '');
  lines.push(`${section.intro}`, '');
  for (const resource of section.resources) {
    lines.push(`<a id="${slugify(resource.name)}"></a>`, `### ${resource.name}`, '');
    lines.push(`${resource.summary}`, '');
    lines.push('Use it for:', '', bulletList(resource.useItFor), '');
    lines.push('What it should contain:', '', bulletList(resource.shouldContain), '');
    lines.push('Useful resources:', '', linkList(resource.usefulResources), '');
    lines.push('Great examples:', '', linkList(resource.greatExamples), '');
  }
}

lines.push(
  '## Keeping It In Sync',
  '',
  `Edit [src/data/steering-data.js](${siteLinks.source}) when the file guidance changes, then run \`npm run sync:readme\` to regenerate this document.`,
  ''
);

while (lines.at(-1) === '') {
  lines.pop();
}

fs.writeFileSync(outputPath, `${lines.join('\n')}\n`);
