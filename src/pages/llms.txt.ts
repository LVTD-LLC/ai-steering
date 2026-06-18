import { installableSkill, sections, siteLinks } from '../data/resources';
import type { Link } from '../data/resources';

export const prerender = true;

const bulletList = (items: string[]) => items.map((item) => `- ${item}`).join('\n');

const linkList = (items: Link[]) => items.map((item) => `- ${item.label}: ${item.href}`).join('\n');

const lines = [
  '# AI Steering Files',
  '',
  'A practical catalog of repository steering files for AI coding agents.',
  '',
  'Use it to decide which context files your repo needs, what each one should contain, and which examples are worth studying.',
  '',
  '## Project Links',
  '',
  `Website: ${siteLinks.site}`,
  `GitHub repo: ${siteLinks.repo}`,
  `README: ${siteLinks.readme}`,
  `Contributing guide: ${siteLinks.contributing}`,
  `Suggest a resource: ${siteLinks.suggestSite}`,
  `Source data: ${siteLinks.source}`,
  '',
  '## Reusable Skill',
  '',
  `Name: ${installableSkill.name}`,
  `Source: ${siteLinks.skill}`,
  '',
  'Install with the Skills CLI:',
  '',
  '```bash',
  installableSkill.skillsCliCommand,
  '```',
  '',
  'Install with GitHub CLI:',
  '',
  '```bash',
  installableSkill.githubCliCommand,
  '```',
  '',
  '## Catalog',
  ''
];

for (const section of sections) {
  lines.push(`### ${section.title}`, '', section.intro, '');

  for (const resource of section.resources) {
    lines.push(
      `#### ${resource.name}`,
      '',
      `Path: ${resource.path}`,
      '',
      resource.summary,
      '',
      'Use it for:',
      '',
      bulletList(resource.useItFor),
      '',
      'What it should contain:',
      '',
      bulletList(resource.shouldContain),
      '',
      'Useful resources:',
      '',
      linkList(resource.usefulResources),
      '',
      'Great examples:',
      '',
      linkList(resource.greatExamples),
      ''
    );
  }
}

while (lines.at(-1) === '') {
  lines.pop();
}

export function GET() {
  return new Response(`${lines.join('\n')}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
