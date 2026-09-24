import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resourceSections, skillInstall, siteLinks } from '../src/data/steering-data.js';
import { slugify } from '../src/lib/slugify.js';

const slugs = new Set();
for (const section of resourceSections) {
  assert.equal(typeof section.title, 'string');
  assert.equal(typeof section.intro, 'string');
  assert.ok(section.resources.length);
  for (const resource of section.resources) {
    for (const key of ['name', 'path', 'summary']) assert.ok(typeof resource[key] === 'string' && resource[key]);
    const slug = slugify(resource.name);
    assert.ok(slug && !slugs.has(slug), `Duplicate or empty anchor: ${slug}`);
    slugs.add(slug);
    for (const key of ['useItFor', 'shouldContain']) {
      assert.ok(resource[key].length && resource[key].every(item => typeof item === 'string' && item));
    }
    for (const key of ['usefulResources', 'greatExamples']) {
      assert.ok(Array.isArray(resource[key]));
      for (const link of resource[key]) {
        assert.ok(link.label);
        assert.equal(new URL(link.href).protocol, 'https:');
      }
    }
  }
}
assert.equal(siteLinks.site, 'https://lvtd.dev/ai-steering');
assert.ok(fs.existsSync(skillInstall.sourcePath));
for (const key of ['name', 'skillsCliCommand', 'githubCliCommand']) assert.ok(skillInstall[key]);
const readme = fs.readFileSync('README.md', 'utf8');
execFileSync(process.execPath, ['scripts/generate-readme.mjs']);
assert.equal(fs.readFileSync('README.md', 'utf8'), readme, 'README was stale. Commit the regenerated README.');
const exported = JSON.parse(execFileSync(process.execPath, ['scripts/export-catalog.mjs'], {encoding:'utf8'}));
assert.equal(exported.sections.flatMap(section => section.resources).length, slugs.size);
console.log(`Validated ${slugs.size} catalog entries, README, skill, and LVTD export.`);
