import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resourceSections, siteLinks } from '../src/data/steering-data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outputPath = path.join(root, 'README.md');

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const bulletList = (items) => items.map((item) => `- ${item}`).join('\n');

const linkList = (items) => items.map((item) => `- [${item.label}](${item.href})`).join('\n');

const lines = [];

lines.push('# AI Steering Files', '');
lines.push(
  'This repository is a practical guide to the files that make AI-assisted coding work better in real projects.',
  ''
);
lines.push(
  `The same content map powers the live site at [ai-steering.lvtd.dev](${siteLinks.site}), this README, and the shared source file at [src/data/steering-data.js](${siteLinks.source}).`,
  ''
);
lines.push(`- [GitHub repo](${siteLinks.repo})`, `- [Live site](${siteLinks.site})`, `- [Shared source](${siteLinks.source})`, '');

lines.push('## TOC', '');
for (const section of resourceSections) {
  lines.push(`- [${section.title}](#${section.slug})`);
  for (const resource of section.resources) {
    lines.push(`  - [${resource.name}](#${slugify(resource.name)})`);
  }
}
lines.push('');

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
  'Edit [src/data/steering-data.js](https://github.com/LVTD-LLC/ai-steering/blob/main/src/data/steering-data.js) when the file guidance changes, then run `npm run sync:readme` to regenerate this document from the same source the site uses.',
  ''
);

while (lines.at(-1) === '') {
  lines.pop();
}

fs.writeFileSync(outputPath, `${lines.join('\n')}\n`);
