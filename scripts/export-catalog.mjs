import { resourceSections, siteLinks, skillInstall, createAwesomeRepoSearchUrl } from '../src/data/steering-data.js';
import { slugify } from '../src/lib/slugify.js';

const sections = resourceSections.map(section => ({
  ...section,
  resources: section.resources.map(resource => ({
    ...resource,
    slug: slugify(resource.name),
    moreExamples: createAwesomeRepoSearchUrl(resource.path)
  }))
}));
process.stdout.write(JSON.stringify({ sections, links: siteLinks, install: skillInstall }, null, 2) + '\n');
