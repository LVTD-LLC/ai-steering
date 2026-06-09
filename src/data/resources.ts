import { resourceSections, siteLinks } from './steering-data.js';

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
  resources: Resource[];
};

export const sections = resourceSections as ResourceSection[];
export const coreResources = sections[0].resources;
export const relatedResources = sections[1].resources;
export { siteLinks };
