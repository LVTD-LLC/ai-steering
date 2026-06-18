import { createAwesomeRepoSearchUrl, resourceSections, siteLinks, skillInstall } from './steering-data.js';

export type Link = {
  label: string;
  href: string;
};

export type Resource = {
  name: string;
  path: string;
  summary: string;
  useItFor: string[];
  shouldContain: string[];
  usefulResources: Link[];
  greatExamples: Link[];
};

export type ResourceSection = {
  title: string;
  slug: string;
  intro: string;
  showAwesomeRepoSearch?: boolean;
  resources: Resource[];
};

export type SkillInstall = {
  name: string;
  sourcePath: string;
  skillsCliCommand: string;
  githubCliCommand: string;
};

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string');

const isLinkArray = (value: unknown): value is Link[] =>
  Array.isArray(value) &&
  value.every(
    (item) =>
      typeof item === 'object' &&
      item !== null &&
      typeof (item as Link).label === 'string' &&
      typeof (item as Link).href === 'string'
  );

function assertSectionsShape(value: unknown): asserts value is ResourceSection[] {
  if (!Array.isArray(value)) {
    throw new Error('steering-data.js must export an array of sections');
  }

  for (const section of value) {
    if (
      typeof section !== 'object' ||
      section === null ||
      typeof section.title !== 'string' ||
      typeof section.slug !== 'string' ||
      typeof section.intro !== 'string' ||
      (section.showAwesomeRepoSearch !== undefined && typeof section.showAwesomeRepoSearch !== 'boolean') ||
      !Array.isArray(section.resources)
    ) {
      throw new Error(`Invalid steering section: ${JSON.stringify(section)}`);
    }

    for (const resource of section.resources) {
      if (
        typeof resource !== 'object' ||
        resource === null ||
        typeof resource.name !== 'string' ||
        typeof resource.path !== 'string' ||
        typeof resource.summary !== 'string' ||
        !isStringArray(resource.useItFor) ||
        !isStringArray(resource.shouldContain) ||
        !isLinkArray(resource.usefulResources) ||
        !isLinkArray(resource.greatExamples)
      ) {
        throw new Error(`Invalid steering resource: ${JSON.stringify(resource)}`);
      }
    }
  }
}

assertSectionsShape(resourceSections);

if (
  typeof skillInstall !== 'object' ||
  skillInstall === null ||
  typeof skillInstall.name !== 'string' ||
  typeof skillInstall.sourcePath !== 'string' ||
  typeof skillInstall.skillsCliCommand !== 'string' ||
  typeof skillInstall.githubCliCommand !== 'string'
) {
  throw new Error(`Invalid skill install data: ${JSON.stringify(skillInstall)}`);
}

export const sections: ResourceSection[] = resourceSections;
const coreSection = sections.find((section) => section.slug === 'agent-agnostic-files');
const relatedSection = sections.find((section) => section.slug === 'agent-specific-files');

if (!coreSection || !relatedSection) {
  throw new Error('Expected agent-agnostic-files and agent-specific-files sections');
}

export const coreResources = coreSection.resources;
export const relatedResources = relatedSection.resources;
export const installableSkill: SkillInstall = skillInstall;
export { createAwesomeRepoSearchUrl, siteLinks };
