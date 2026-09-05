import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checking = process.argv.includes('--check');
const data = JSON.parse(await readFile(resolve(root, 'data/tools.json'), 'utf8'));
const editorial = JSON.parse(await readFile(resolve(root, 'data/ratings.json'), 'utf8'));
const workflowData = JSON.parse(await readFile(resolve(root, 'data/workflows.json'), 'utf8'));
const sectionOrder = [
  'Media platforms',
  'Analytics and measurement',
  'Creative and images',
  'Data and research',
  'Automation and workflow',
  'Modelling and experimentation'
];
const tools = data.tools.map((tool) => ({
  ...tool,
  ...editorial.ratings[tool.id],
  workflow: workflowData.workflows[tool.id]
}));

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const formatDate = (value) => new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC'
}).format(new Date(value + 'T12:00:00Z'));

const slug = (value) => String(value).toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replaceAll(/^-|-$/g, '');

const statusTone = (entry) => {
  if (entry.provenance === 'none') return 'absent';
  if (entry.maturity === 'beta' || entry.maturity === 'preview') return 'watch';
  if (entry.maturity === 'restricted') return 'restricted';
  return 'present';
};

const interfaceLink = (kind, entry) => {
  const body = [
    '<span class="interface-name">' + escapeHtml(kind) + '</span>',
    '<span class="interface-value">' + escapeHtml(entry.label) + '</span>'
  ].join('');
  if (!entry.url) {
    return '<span class="interface interface-' + statusTone(entry) + '">' + body + '</span>';
  }
  return '<a class="interface interface-' + statusTone(entry) + '" href="' +
    escapeHtml(entry.url) + '" target="_blank" rel="noreferrer">' + body +
    '<span aria-hidden="true">↗</span></a>';
};

const sourceLinks = (sources) => sources.map((source) => {
  return '<a href="' + escapeHtml(source.url) + '" target="_blank" rel="noreferrer">' +
    escapeHtml(source.label) + '<span aria-hidden="true"> ↗</span></a>';
}).join('');

const htmlList = (items) => '<ul>' + items.map((item) => '<li>' + escapeHtml(item) + '</li>').join('') + '</ul>';

const operationCell = (label, value) => [
  '<div class="operation operation-' + slug(value) + '">',
  '<span>' + escapeHtml(label) + '</span>',
  '<strong>' + escapeHtml(value) + '</strong>',
  '</div>'
].join('');

const commercialLink = (commercial) => {
  const label = '<strong>' + escapeHtml(commercial.type) + '</strong><span>' + escapeHtml(commercial.label) + '</span>';
  if (!commercial.url) return '<div class="commercial-link">' + label + '</div>';
  return '<a class="commercial-link" href="' + escapeHtml(commercial.url) + '" target="_blank" rel="noreferrer">' + label + '<span aria-hidden="true">↗</span></a>';
};

const toolRows = tools.map((tool, index) => {
  const workflow = tool.workflow;
  const search = [
    tool.name, tool.category, tool.section, tool.readiness, tool.grade, tool.summary,
    tool.channels.join(' '), tool.jobs.join(' '), tool.mcp.label, tool.plugin.label,
    tool.cli.label, tool.developer.label, tool.positives.join(' '), tool.negatives.join(' '),
    workflow.surface, workflow.object, workflow.setup.level, workflow.setup.note,
    Object.values(workflow.actions).join(' '), workflow.coverage.level,
    workflow.coverage.note, workflow.blocker, workflow.commercial.type,
    workflow.commercial.label, workflow.commercial.note
  ].join(' ').toLowerCase();
  const interfaces = [
    tool.mcp.provenance !== 'none' ? 'mcp' : '',
    tool.plugin.provenance !== 'none' ? 'plugin' : '',
    tool.cli.provenance !== 'none' ? 'cli' : '',
    tool.developer.provenance !== 'none' ? 'developer' : ''
  ].filter(Boolean).join(' ');

  return [
    '<article class="tool-row" id="' + escapeHtml(tool.id) + '"',
    ' data-search="' + escapeHtml(search) + '"',
    ' data-category="' + escapeHtml(tool.section) + '"',
    ' data-readiness="' + escapeHtml(tool.readiness) + '"',
    ' data-grade="' + escapeHtml(tool.grade) + '"',
    ' data-setup="' + escapeHtml(workflow.setup.level) + '"',
    ' data-read="' + escapeHtml(workflow.actions.read) + '"',
    ' data-create="' + escapeHtml(workflow.actions.create) + '"',
    ' data-modify="' + escapeHtml(workflow.actions.modify) + '"',
    ' data-delete="' + escapeHtml(workflow.actions.delete) + '"',
    ' data-commercial="' + escapeHtml(workflow.commercial.type) + '"',
    ' data-interfaces="' + escapeHtml(interfaces) + '">',
    '  <div class="tool-index" aria-hidden="true">' + String(index + 1).padStart(2, '0') + '</div>',
    '  <div class="tool-summary">',
    '    <p class="tool-category">' + escapeHtml(tool.section) + '</p>',
    '    <h2><a href="#' + escapeHtml(tool.id) + '">' + escapeHtml(tool.name) + '</a></h2>',
    '    <p>' + escapeHtml(tool.summary) + '</p>',
    '    <p class="tool-tags"><span>' + tool.channels.map(escapeHtml).join('</span><span>') + '</span></p>',
    '  </div>',
    '  <div class="route-judged">',
    '    <span>Route judged</span>',
    '    <strong>' + escapeHtml(workflow.surface) + '</strong>',
    '    <p>' + escapeHtml(workflow.object) + '</p>',
    '  </div>',
    '  <div class="tool-rating">',
    '    <strong>' + escapeHtml(tool.grade) + '</strong>',
    '    <span>' + escapeHtml(tool.readiness) + '</span>',
    '  </div>',
    '  <section class="tool-detail" aria-label="' + escapeHtml(tool.name) + ' workflow detail">',
    '    <div class="blocker"><span>Biggest daily blocker</span><p>' + escapeHtml(workflow.blocker) + '</p></div>',
    '    <div class="operation-grid">',
    operationCell('Setup', workflow.setup.level),
    operationCell('Read', workflow.actions.read),
    operationCell('Create', workflow.actions.create),
    operationCell('Modify', workflow.actions.modify),
    operationCell('Delete', workflow.actions.delete),
    operationCell('Coverage', workflow.coverage.level),
    '    </div>',
    '    <div class="workflow-notes">',
    '      <div><h3>Connection</h3><p>' + escapeHtml(workflow.setup.note) + '</p></div>',
    '      <div><h3>Manual-feature coverage</h3><p>' + escapeHtml(workflow.coverage.note) + '</p></div>',
    '    </div>',
    '    <div class="editorial-grid">',
    '      <div class="positive"><h3>+</h3>' + htmlList(tool.positives) + '</div>',
    '      <div class="negative"><h3>−</h3>' + htmlList(tool.negatives) + '</div>',
    '    </div>',
    '    <div class="interfaces">',
    interfaceLink('MCP', tool.mcp),
    interfaceLink('Plugin', tool.plugin),
    interfaceLink('CLI', tool.cli),
    interfaceLink('API / SDK', tool.developer),
    '    </div>',
    '    <div class="detail-grid">',
    '      <div><h3>Access</h3><p>' + escapeHtml(tool.access) + '</p></div>',
    '      <div><h3>Commercial programme</h3>' + commercialLink(workflow.commercial) + '<p>' + escapeHtml(workflow.commercial.note) + '</p></div>',
    '      <div><h3>Watch</h3><p>' + escapeHtml(tool.caution) + '</p></div>',
    '      <div><h3>Sources</h3><p class="source-links">' + sourceLinks(tool.sources) + '</p></div>',
    '    </div>',
    '    <p class="verified">Verified ' + escapeHtml(formatDate(tool.verifiedOn)) + '</p>',
    '  </section>',
    '</article>'
  ].join('');
}).join('\n');

const categoryOptions = sectionOrder.map((section) => {
  return '<option value="' + escapeHtml(section) + '">' + escapeHtml(section) + '</option>';
}).join('');

const sectionNav = sectionOrder.map((section) => {
  const count = tools.filter((tool) => tool.section === section).length;
  return '<button type="button" data-section-filter="' + escapeHtml(section) + '"><span>' + escapeHtml(section) + '</span><strong>' + count + '</strong></button>';
}).join('');

const officialMcp = tools.filter((tool) => tool.mcp.provenance === 'official').length;
const productionReady = tools.filter((tool) => tool.readiness === 'Production').length;
const inTest = tools.filter((tool) => tool.readiness === 'Test').length;
const affiliatePrograms = tools.filter((tool) => tool.workflow.commercial.type === 'Affiliate').length;

const template = await readFile(resolve(root, 'templates/index.html'), 'utf8');
const page = template
  .replaceAll('{{TITLE}}', escapeHtml(data.meta.title))
  .replaceAll('{{DESCRIPTION}}', escapeHtml(data.meta.description))
  .replaceAll('{{UPDATED_ISO}}', escapeHtml(data.meta.updatedOn))
  .replaceAll('{{UPDATED}}', escapeHtml(formatDate(data.meta.updatedOn)))
  .replaceAll('{{TOTAL}}', String(tools.length))
  .replaceAll('{{OFFICIAL_MCP}}', String(officialMcp))
  .replaceAll('{{PRODUCTION_READY}}', String(productionReady))
  .replaceAll('{{IN_TEST}}', String(inTest))
  .replaceAll('{{AFFILIATE_PROGRAMS}}', String(affiliatePrograms))
  .replaceAll('{{CATEGORY_OPTIONS}}', categoryOptions)
  .replaceAll('{{SECTION_NAV}}', sectionNav)
  .replaceAll('{{TOOL_ROWS}}', toolRows);

const markdownCell = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const markdownSources = (sources) => sources.map((source) => '[' + source.label + '](' + source.url + ')').join(' · ');
const markdownList = (items) => items.map((item) => '- ' + item).join('\n');
const markdownCommercial = (commercial) => commercial.url
  ? '[' + commercial.label + '](' + commercial.url + ')'
  : commercial.label;

const sectionConfig = {
  'Media platforms': {
    file: 'media-platforms.md',
    description: 'Advertising platforms and buying systems, judged on the most direct official route available to an AI-assisted operator.'
  },
  'Analytics and measurement': {
    file: 'analytics-measurement.md',
    description: 'Analytics and implementation systems used to query, configure and verify measurement.'
  },
  'Creative and images': {
    file: 'creative-images.md',
    description: 'Creative-production systems assessed for usable context, native creation and editing depth.'
  },
  'Data and research': {
    file: 'data-research.md',
    description: 'Research, connector and warehouse routes that supply the evidence behind paid-media decisions.'
  },
  'Automation and workflow': {
    file: 'automation-workflow.md',
    description: 'Cross-tool automation systems assessed on connection effort, action depth and operational control.'
  },
  'Modelling and experimentation': {
    file: 'modelling-experimentation.md',
    description: 'Specialist modelling frameworks for incrementality, marketing mix analysis and budget scenarios.'
  }
};

const gradeRank = new Map([
  ['A+', 12], ['A', 11], ['A-', 10],
  ['B+', 9], ['B', 8], ['B-', 7],
  ['C+', 6], ['C', 5], ['C-', 4],
  ['D', 3], ['F', 2]
]);
const readinessRank = new Map([['Production', 3], ['Test', 2], ['Research', 1]]);

const rankedTools = (section) => tools
  .filter((tool) => tool.section === section)
  .sort((left, right) =>
    gradeRank.get(right.grade) - gradeRank.get(left.grade) ||
    readinessRank.get(right.readiness) - readinessRank.get(left.readiness) ||
    left.name.localeCompare(right.name)
  );

const githubAnchor = (value) => value
  .toLowerCase()
  .trim()
  .replace(/ /g, '-')
  .replace(/[^\p{L}\p{N}_-]/gu, '');

const overviewRow = (tool, link) => '| ' + [
  '[' + tool.name + '](' + link + ')',
  '**' + tool.grade + '**',
  tool.readiness,
  tool.workflow.setup.level,
  tool.workflow.actions.read,
  tool.workflow.actions.create,
  tool.workflow.actions.modify,
  tool.workflow.actions.delete,
  tool.workflow.coverage.level
].map(markdownCell).join(' | ') + ' |';

const comparisonTable = (section, linkFor) => {
  const sectionTools = rankedTools(section);
  return [
    '| Tool | Grade | Readiness | Setup | Read | Create | Modify | Delete | Coverage |',
    '| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |',
    ...sectionTools.map((tool) => overviewRow(tool, linkFor(tool)))
  ].join('\n');
};

const markdownInterface = (label, entry) => {
  const value = entry.url ? '[' + entry.label + '](' + entry.url + ')' : entry.label;
  return '- **' + label + ':** ' + value;
};

const toolDetail = (tool, section) => {
  const workflow = tool.workflow;
  return [
    '## ' + tool.name,
    '',
    '**' + tool.grade + ' · ' + tool.readiness + '**',
    '',
    tool.summary,
    '',
    '> **Blocker:** ' + workflow.blocker,
    '',
    '- **Route:** ' + workflow.surface + '.',
    '- **Scope:** ' + workflow.object + '.',
    '- **Setup:** ' + workflow.setup.level + '. ' + workflow.setup.note,
    '- **Controls:** Read **' + workflow.actions.read + '** · Create **' + workflow.actions.create + '** · Modify **' + workflow.actions.modify + '** · Delete **' + workflow.actions.delete + '**',
    '- **Coverage:** ' + workflow.coverage.level + '. ' + workflow.coverage.note,
    '',
    '**Good**',
    '',
    markdownList(tool.positives),
    '',
    '**Limits**',
    '',
    markdownList(tool.negatives),
    '',
    '**Interfaces**',
    '',
    markdownInterface('MCP', tool.mcp),
    markdownInterface('Plugin', tool.plugin),
    markdownInterface('CLI', tool.cli),
    markdownInterface('API / SDK', tool.developer),
    '',
    '- **Access:** ' + tool.access,
    '- **Commercial:** ' + workflow.commercial.type + '. ' + markdownCommercial(workflow.commercial) + '. ' + workflow.commercial.note,
    '- **Watch:** ' + tool.caution,
    '- **Sources:** ' + markdownSources(tool.sources),
    '- **Verified:** ' + formatDate(tool.verifiedOn),
    '',
    '[Back to comparison](#' + githubAnchor(section) + ')'
  ].join('\n');
};

const catalogueNavigation = sectionOrder.map((section) => {
  return '[' + section + '](' + sectionConfig[section].file + ')';
}).join(' · ');

const cataloguePage = (section) => {
  const sectionTools = rankedTools(section);
  const matrix = comparisonTable(section, (tool) => '#' + githubAnchor(tool.name));
  return [
    '# ' + section,
    sectionConfig[section].description,
    '[Main index](../README.md) · [Methodology](../METHODOLOGY.md)',
    catalogueNavigation,
    matrix,
    ...sectionTools.map((tool) => toolDetail(tool, section)),
    '---',
    'Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.'
  ].join('\n\n') + '\n';
};

const topNavigation = sectionOrder.map((section) => {
  return '[' + section + '](#' + githubAnchor(section) + ')';
}).join(' · ');

const toolById = (id) => tools.find((tool) => tool.id === id);
const tiktok = toolById('tiktok-for-business');
const googleAds = toolById('google-ads');
const metaAds = toolById('meta-ads');

const readmeSections = sectionOrder.map((section) => {
  const detailUrl = 'catalogue/' + sectionConfig[section].file;
  const matrix = comparisonTable(section, (tool) => detailUrl + '#' + githubAnchor(tool.name));
  const verdicts = section === 'Media platforms'
    ? [
        '- **' + tiktok.name + ' (' + tiktok.grade + '):** Its official remote MCP covers campaign, reporting, audience and creative work.',
        '- **' + googleAds.name + ' (' + googleAds.grade + '):** Google\'s official Ads MCP cannot create an ad, change a bid or budget, pause an entity or fix the issue it finds.',
        '- **' + metaAds.name + ' (' + metaAds.grade + '):** Meta\'s connector can create supported objects, then still sends the operator back to Ads Manager for ordinary changes.'
      ].join('\n')
    : null;
  return [
    '## ' + section,
    sectionConfig[section].description,
    verdicts,
    matrix,
    '[Open the detailed assessments](' + detailUrl + ')'
  ].filter(Boolean).join('\n\n');
}).join('\n\n');

const readme = [
  '# AI paid-media tools',
  '',
  '**The Detail Department\'s view of what an AI paid-media team can use in real work today.**',
  '',
  'We grade the route an operator can connect now, not the vendor\'s potential. Setup, Read, Create, Modify, Delete and manual-feature coverage all count.',
  '',
  topNavigation,
  '',
  '**' + tools.length + ' tools reviewed** · ' + productionReady + ' Production · ' + inTest + ' Test · ' + tools.filter((tool) => tool.readiness === 'Research').length + ' Research · Last checked ' + formatDate(data.meta.updatedOn),
  '',
  '[Read the methodology](METHODOLOGY.md) · [Propose a correction](../../issues/new?template=correction.yml)',
  '',
  readmeSections,
  '',
  '## How scoring works',
  '',
  '1. Can the route finish a recurring job?',
  '2. Can it Read, Create, Modify and Delete?',
  '3. How hard is it to connect?',
  '4. How much of the manual product does it cover?',
  '5. Is it mature and governable?',
  '',
  '**Grade** measures daily usefulness. **Readiness** measures maturity. Production does not mean complete feature coverage.',
  '',
  '| Grade | Use |',
  '| :---: | :--- |',
  '| A | Strong daily recommendation |',
  '| B | Useful within clear limits |',
  '| C | Narrow, immature or indirect |',
  '| D / F | Not recommended for production work |',
  '',
  '[Definitions and grade ceilings](METHODOLOGY.md)',
  '',
  '## Data and maintenance',
  '',
  '- [Interface facts](data/tools.json)',
  '- [Daily workflow assessments](data/workflows.json)',
  '- [Editorial ratings](data/ratings.json)',
  '- [Contribution guide](CONTRIBUTING.md)',
  '- [Generated web interface source](docs/index.html) (`npm run serve` to run locally)',
  '',
  'Generated from the repository data files. No sponsorship, affiliate relationship or client relationship is implied.',
  '',
  'Maintained by [The Detail Department](https://detail-department.com/). MIT licensed.'
].join('\n');

const catalogueOutputs = sectionOrder.map((section) => [
  resolve(root, 'catalogue', sectionConfig[section].file),
  cataloguePage(section)
]);

const outputs = new Map([
  [resolve(root, 'README.md'), readme + '\n'],
  ...catalogueOutputs,
  [resolve(root, 'docs/index.html'), page],
  [resolve(root, 'docs/assets/styles.css'), await readFile(resolve(root, 'assets/styles.css'), 'utf8')],
  [resolve(root, 'docs/assets/app.js'), await readFile(resolve(root, 'assets/app.js'), 'utf8')],
  [resolve(root, 'docs/data/tools.json'), JSON.stringify(data, null, 2) + '\n'],
  [resolve(root, 'docs/data/ratings.json'), JSON.stringify(editorial, null, 2) + '\n'],
  [resolve(root, 'docs/data/workflows.json'), JSON.stringify(workflowData, null, 2) + '\n'],
  [resolve(root, 'docs/.nojekyll'), '']
]);

let stale = false;
for (const [path, content] of outputs) {
  if (checking) {
    try {
      const existing = await readFile(path, 'utf8');
      if (existing !== content) {
        console.error('Generated file is stale: ' + path.replace(root + '/', ''));
        stale = true;
      }
    } catch {
      console.error('Generated file is missing: ' + path.replace(root + '/', ''));
      stale = true;
    }
    continue;
  }
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content);
}

if (stale) process.exitCode = 1;
if (!checking) console.log('Built README, catalogue and field index for ' + tools.length + ' tools.');
