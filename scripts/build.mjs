import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checking = process.argv.includes('--check');
const data = JSON.parse(await readFile(resolve(root, 'data/tools.json'), 'utf8'));
const editorial = JSON.parse(await readFile(resolve(root, 'data/ratings.json'), 'utf8'));
const workflowData = JSON.parse(await readFile(resolve(root, 'data/workflows.json'), 'utf8'));
const siteUrl = 'https://the-detail-department.github.io/ai-paid-media-tools/';
const repositoryUrl = 'https://github.com/The-Detail-Department/ai-paid-media-tools';
const socialImageUrl = siteUrl + 'assets/social-preview.png';
const sectionConfig = {
  'Media platforms': {
    file: 'media-platforms.md',
    description: 'Advertising platforms and buying systems, judged on the most direct official route available to an AI-assisted operator.',
    humanJob: 'Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.',
    criteria: [
      { key: 'read', label: 'Read', fallback: 'read' },
      { key: 'create', label: 'Create', fallback: 'create' },
      { key: 'modify', label: 'Modify', fallback: 'modify' },
      { key: 'delete', label: 'Delete', fallback: 'delete' }
    ]
  },
  Analytics: {
    file: 'analytics.md',
    description: 'Analytics products judged on whether an agent can investigate performance and leave useful analysis behind.',
    humanJob: 'Explore data, answer a question, build a reusable report, configure analysis components and share the result.',
    criteria: [
      { key: 'analyse', label: 'Analyse', fallback: 'read' },
      { key: 'buildReports', label: 'Build reports', fallback: 'create' },
      { key: 'configure', label: 'Configure', fallback: 'modify' },
      { key: 'validate', label: 'Validate', fallback: 'read' },
      { key: 'share', label: 'Share', fallback: 'create' }
    ]
  },
  Measurement: {
    file: 'measurement.md',
    description: 'Collection, tagging and attribution systems judged on implementation, validation and operational monitoring.',
    humanJob: 'Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.',
    criteria: [
      { key: 'inspect', label: 'Inspect', fallback: 'read' },
      { key: 'configure', label: 'Configure', fallback: 'modify' },
      { key: 'validate', label: 'Validate', fallback: 'read' },
      { key: 'deploy', label: 'Deploy', fallback: 'create' },
      { key: 'monitor', label: 'Monitor', fallback: 'read' }
    ]
  },
  'Creative production': {
    file: 'creative-production.md',
    description: 'Creative systems judged on context, generation, editing, format adaptation and usable output.',
    humanJob: 'Understand the brief and source assets, create, edit, adapt to placements and export production-ready files.',
    criteria: [
      { key: 'context', label: 'Read context', fallback: 'read' },
      { key: 'create', label: 'Create', fallback: 'create' },
      { key: 'edit', label: 'Edit', fallback: 'modify' },
      { key: 'adapt', label: 'Adapt', fallback: 'modify' },
      { key: 'export', label: 'Export', fallback: 'read' }
    ]
  },
  'Research and intelligence': {
    file: 'research-intelligence.md',
    description: 'External research systems judged on discovery, retrieval, comparison, analysis and export.',
    humanJob: 'Find the right market evidence, retrieve it, compare competitors or queries, analyse patterns and export the evidence.',
    criteria: [
      { key: 'discover', label: 'Discover', fallback: 'read' },
      { key: 'retrieve', label: 'Retrieve', fallback: 'read' },
      { key: 'compare', label: 'Compare', fallback: 'read' },
      { key: 'analyse', label: 'Analyse', fallback: 'read' },
      { key: 'export', label: 'Export', fallback: 'read' }
    ]
  },
  'Data infrastructure': {
    file: 'data-infrastructure.md',
    description: 'Pipelines, warehouses and semantic layers judged on connection, inspection, querying, transformation and operation.',
    humanJob: 'Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.',
    criteria: [
      { key: 'connect', label: 'Connect', fallback: 'create' },
      { key: 'inspect', label: 'Inspect', fallback: 'read' },
      { key: 'query', label: 'Query', fallback: 'read' },
      { key: 'transform', label: 'Transform', fallback: 'modify' },
      { key: 'operate', label: 'Operate', fallback: 'delete' }
    ]
  },
  'Automation and workflow': {
    file: 'automation-workflow.md',
    description: 'Cross-tool automation systems judged on connection, workflow construction, execution, debugging and monitoring.',
    humanJob: 'Connect systems, build the workflow, run it reliably, diagnose failures and monitor production execution.',
    criteria: [
      { key: 'connect', label: 'Connect', fallback: 'create' },
      { key: 'build', label: 'Build', fallback: 'create' },
      { key: 'run', label: 'Run', fallback: 'read' },
      { key: 'debug', label: 'Debug', fallback: 'modify' },
      { key: 'monitor', label: 'Monitor', fallback: 'read' }
    ]
  },
  Modelling: {
    file: 'modelling.md',
    description: 'Specialist modelling frameworks judged on preparation, configuration, execution, validation and scenario planning.',
    humanJob: 'Prepare model-ready data, configure assumptions, run the model, validate it and turn scenarios into planning evidence.',
    criteria: [
      { key: 'prepare', label: 'Prepare data', fallback: 'create' },
      { key: 'configure', label: 'Configure', fallback: 'modify' },
      { key: 'run', label: 'Run', fallback: 'create' },
      { key: 'validate', label: 'Validate', fallback: 'read' },
      { key: 'scenarios', label: 'Scenarios', fallback: 'modify' }
    ]
  }
};
const sectionOrder = Object.keys(sectionConfig);
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

const capabilitiesFor = (tool) => sectionConfig[tool.section].criteria.map((criterion) => ({
  label: criterion.label,
  value: tool.workflow.capabilities?.[criterion.key] ?? tool.workflow.actions[criterion.fallback]
}));

const evidenceBasisFor = (tool) => tool.workflow.evidenceBasis ?? workflowData.meta.defaultEvidenceBasis;

const bestAiRoute = (tool) => {
  if (tool.workflow.endpoint) return { label: tool.workflow.endpoint, url: tool.workflow.endpoint };
  const entry = [tool.mcp, tool.plugin, tool.cli].find((candidate) => candidate.provenance === 'official' && candidate.url);
  return entry ? { label: entry.label, url: entry.url } : { label: 'No official AI route verified' };
};

const firstDocumentation = (tool) => tool.sources.find((source) => !source.url.includes('github.com')) ?? tool.sources[0];
const firstGithub = (tool) => tool.github ?? tool.sources.find((source) => source.url.includes('github.com'));
const productLink = (tool) => tool.product ?? firstDocumentation(tool);

const markdownLink = (entry) => entry?.url ? '[' + entry.label + '](' + entry.url + ')' : entry?.label ?? 'Not publicly documented';

const officialLinkRows = (tool) => [
  ['Product / official page', productLink(tool)],
  ['AI interface / endpoint', bestAiRoute(tool)],
  ['MCP', tool.mcp],
  ['Plugin', tool.plugin],
  ['CLI', tool.cli],
  ['API / SDK', tool.developer],
  ['Documentation', firstDocumentation(tool)],
  ['GitHub', firstGithub(tool) ?? { label: 'No official repository verified' }]
];

const toolRows = tools.map((tool, index) => {
  const workflow = tool.workflow;
  const search = [
    tool.name, tool.category, tool.section, tool.readiness, tool.grade, tool.summary,
    tool.channels.join(' '), tool.jobs.join(' '), tool.mcp.label, tool.plugin.label,
    tool.cli.label, tool.developer.label, tool.positives.join(' '), tool.negatives.join(' '),
    workflow.surface, workflow.object, workflow.setup.level, workflow.setup.note,
    capabilitiesFor(tool).map((entry) => entry.label + ' ' + entry.value).join(' '),
    workflow.coverage.level, workflow.coverage.note, workflow.blocker, tool.position,
    evidenceBasisFor(tool)
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
    ' data-position="' + escapeHtml(tool.position) + '"',
    ' data-interfaces="' + escapeHtml(interfaces) + '">',
    '  <div class="tool-index" aria-hidden="true">' + String(index + 1).padStart(2, '0') + '</div>',
    '  <div class="tool-summary">',
    '    <p class="tool-category">' + escapeHtml(tool.section) + ' · ' + escapeHtml(tool.position) + '</p>',
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
    ...capabilitiesFor(tool).map((entry) => operationCell(entry.label, entry.value)),
    operationCell('Coverage', workflow.coverage.level),
    '    </div>',
    '    <div class="workflow-notes">',
    '      <div><h3>Connection</h3><p>' + escapeHtml(workflow.setup.note) + '</p><a href="' + escapeHtml(workflow.setup.documentation.url) + '">' + escapeHtml(workflow.setup.documentation.label) + '</a></div>',
    '      <div><h3>Human job benchmark</h3><p>' + escapeHtml(sectionConfig[tool.section].humanJob) + '</p></div>',
    '      <div><h3>Route coverage</h3><p>' + escapeHtml(workflow.coverage.note) + '</p></div>',
    '    </div>',
    '    <div class="editorial-grid">',
    '      <div class="positive"><h3>+</h3>' + htmlList(tool.positives) + '</div>',
    '      <div class="negative"><h3>−</h3>' + htmlList(tool.negatives) + '</div>',
    '    </div>',
    '    <div class="interfaces">',
    ...officialLinkRows(tool).map(([label, entry]) => interfaceLink(label, entry)),
    '    </div>',
    '    <div class="detail-grid">',
    '      <div><h3>Access</h3><p>' + escapeHtml(tool.access) + '</p></div>',
      '      <div><h3>Watch</h3><p>' + escapeHtml(tool.caution) + '</p></div>',
    '      <div><h3>Sources</h3><p class="source-links">' + sourceLinks(tool.sources) + '</p></div>',
    '      <div><h3>Evidence basis</h3><p>' + escapeHtml(evidenceBasisFor(tool)) + '</p></div>',
    '    </div>',
    '    <p class="verified">Last checked ' + escapeHtml(formatDate(tool.verifiedOn)) + '</p>',
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
const emergingTools = tools.filter((tool) => tool.position === 'Emerging').length;

const template = await readFile(resolve(root, 'templates/index.html'), 'utf8');
const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: data.meta.title,
  description: data.meta.description,
  url: siteUrl,
  version: data.meta.version,
  dateModified: data.meta.updatedOn,
  license: 'https://opensource.org/license/mit',
  creator: {
    '@type': 'Organization',
    name: 'The Detail Department',
    url: 'https://detail-department.com/',
    sameAs: 'https://github.com/The-Detail-Department'
  },
  author: {
    '@type': 'Person',
    name: 'L\u00e9on Houlier',
    url: 'https://leonhoulier.com/',
    sameAs: 'https://github.com/leonhoulier'
  },
  distribution: [
    {
      '@type': 'DataDownload',
      name: 'Interface facts',
      contentUrl: siteUrl + 'data/tools.json',
      encodingFormat: 'application/json'
    },
    {
      '@type': 'DataDownload',
      name: 'Daily workflow assessments',
      contentUrl: siteUrl + 'data/workflows.json',
      encodingFormat: 'application/json'
    },
    {
      '@type': 'DataDownload',
      name: 'Editorial ratings',
      contentUrl: siteUrl + 'data/ratings.json',
      encodingFormat: 'application/json'
    }
  ]
}).replaceAll('<', '\\u003c');
const page = template
  .replaceAll('{{TITLE}}', escapeHtml(data.meta.title))
  .replaceAll('{{DESCRIPTION}}', escapeHtml(data.meta.description))
  .replaceAll('{{UPDATED_ISO}}', escapeHtml(data.meta.updatedOn))
  .replaceAll('{{UPDATED}}', escapeHtml(formatDate(data.meta.updatedOn)))
  .replaceAll('{{CANONICAL_URL}}', siteUrl)
  .replaceAll('{{REPOSITORY_URL}}', repositoryUrl)
  .replaceAll('{{SOCIAL_IMAGE_URL}}', socialImageUrl)
  .replaceAll('{{JSON_LD}}', structuredData)
  .replaceAll('{{EVIDENCE_BASIS}}', escapeHtml(workflowData.meta.defaultEvidenceBasis))
  .replaceAll('{{TOTAL}}', String(tools.length))
  .replaceAll('{{OFFICIAL_MCP}}', String(officialMcp))
  .replaceAll('{{PRODUCTION_READY}}', String(productionReady))
  .replaceAll('{{IN_TEST}}', String(inTest))
  .replaceAll('{{EMERGING_TOOLS}}', String(emergingTools))
  .replaceAll('{{CATEGORY_OPTIONS}}', categoryOptions)
  .replaceAll('{{SECTION_NAV}}', sectionNav)
  .replaceAll('{{TOOL_ROWS}}', toolRows);

const markdownCell = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const markdownSources = (sources) => sources.map((source) => '[' + source.label + '](' + source.url + ')').join(' · ');
const markdownList = (items) => items.map((item) => '- ' + item).join('\n');
const gradeRank = new Map([
  ['A+', 12], ['A', 11], ['A-', 10],
  ['B+', 9], ['B', 8], ['B-', 7],
  ['C+', 6], ['C', 5], ['C-', 4],
  ['D', 3], ['F', 2]
]);
const readinessRank = new Map([['Production', 3], ['Test', 2], ['Research', 1]]);

const positionRank = new Map([['Reference', 3], ['Emerging', 2], ['Specialist', 1]]);

const rankedTools = (section) => tools
  .filter((tool) => tool.section === section)
  .sort((left, right) =>
    positionRank.get(right.position) - positionRank.get(left.position) ||
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
  tool.position,
  tool.readiness,
  tool.workflow.setup.level,
  ...capabilitiesFor(tool).map((entry) => entry.value),
  tool.workflow.coverage.level
].map(markdownCell).join(' | ') + ' |';

const comparisonTable = (section, linkFor) => {
  const sectionTools = rankedTools(section);
  const criteria = sectionConfig[section].criteria.map((criterion) => criterion.label);
  return [
    '| ' + ['Tool', 'Grade', 'Market role', 'Readiness', 'Setup', ...criteria, 'Human-job coverage'].join(' | ') + ' |',
    '| ' + [':---', ':---:', ':---:', ':---:', ':---:', ...criteria.map(() => ':---:'), ':---:'].join(' | ') + ' |',
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
    '**' + tool.grade + ' · ' + tool.readiness + ' · ' + tool.position + '**',
    '',
    tool.summary,
    '',
    '**Day to day**',
    '',
    markdownList(workflow.dailyTasks),
    '',
    '> **What still needs you:** ' + workflow.blocker,
    '',
    '- **Route:** ' + workflow.surface + '.',
    '- **Scope:** ' + workflow.object + '.',
    '- **Setup:** ' + workflow.setup.level + '. ' + workflow.setup.note + ' [' + workflow.setup.documentation.label + '](' + workflow.setup.documentation.url + ').',
    '- **Human job:** ' + sectionConfig[section].humanJob,
    '- **Capabilities:** ' + capabilitiesFor(tool).map((entry) => entry.label + ' **' + entry.value + '**').join(' · '),
    '- **Coverage:** ' + workflow.coverage.level + '. ' + workflow.coverage.note,
    '- **Evidence basis:** ' + evidenceBasisFor(tool),
    '',
    '**Good**',
    '',
    markdownList(tool.positives),
    '',
    '**Limits**',
    '',
    markdownList(tool.negatives),
    '',
    '**Official links**',
    '',
    ...officialLinkRows(tool).map(([label, entry]) => '- **' + label + ':** ' + markdownLink(entry)),
    '',
    '- **Access:** ' + tool.access,
    '- **Watch:** ' + tool.caution,
    '- **Sources:** ' + markdownSources(tool.sources),
    '- **Last checked:** ' + formatDate(tool.verifiedOn),
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
    '> **Evidence basis:** ' + workflowData.meta.defaultEvidenceBasis + ' unless an entry states otherwise.',
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
  'Published by [The Detail Department](https://detail-department.com/). Editorial lead: [L\u00e9on Houlier](https://github.com/leonhoulier).',
  '',
  'An evidence-backed comparison of Model Context Protocol (MCP) servers, advertising APIs, plugins and command-line tools used across media buying, analytics, measurement, creative production and marketing automation.',
  '',
  'We grade the route an operator can connect now, not the vendor\'s potential. Every category is judged against the work a human would normally do with that kind of tool.',
  '',
  '> **Evidence basis:** ' + workflowData.meta.defaultEvidenceBasis + ' unless an entry states otherwise. A Production readiness label is not proof of hands-on execution.',
  '',
  topNavigation,
  '',
  '**' + tools.length + ' tools reviewed** · ' + productionReady + ' Production · ' + inTest + ' Test · ' + tools.filter((tool) => tool.readiness === 'Research').length + ' Research · Catalogue updated ' + formatDate(data.meta.updatedOn),
  '',
  '[Read the methodology](METHODOLOGY.md) · [Propose a correction](../../issues/new?template=correction.yml)',
  '',
  '**Market role:** Reference = established category leader · Emerging = newer challenger worth watching · Specialist = narrower expert tool. Market role does not determine grade.',
  '',
  readmeSections,
  '',
  '## How scoring works',
  '',
  '1. Can the route finish a recurring job?',
  '2. How much of that category\'s human job can it complete?',
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
  '## CMS companion',
  '',
  '[The AI CMS Index](catalogue/cms.md) assesses CMS platforms and AI/LLM workflows using a separate content-operations capability matrix.',
  '',
  '## Data and maintenance',
  '',
  '- [Interface facts](data/tools.json)',
  '- [Daily workflow assessments](data/workflows.json)',
  '- [Editorial ratings](data/ratings.json)',
  '- [Citation metadata](CITATION.cff)',
  '- [Changelog](CHANGELOG.md)',
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
  [resolve(root, 'docs/robots.txt'), 'User-agent: *\nAllow: /\nSitemap: ' + siteUrl + 'sitemap.xml\n'],
  [resolve(root, 'docs/sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>' + siteUrl + '</loc>\n    <lastmod>' + data.meta.updatedOn + '</lastmod>\n  </url>\n</urlset>\n'],
  [resolve(root, 'docs/assets/favicon.svg'), await readFile(resolve(root, 'assets/favicon.svg'))],
  [resolve(root, 'docs/assets/social-preview.png'), await readFile(resolve(root, 'assets/social-preview.png'))],
  [resolve(root, 'docs/.nojekyll'), '']
]);

let stale = false;
for (const [path, content] of outputs) {
  if (checking) {
    try {
      const existing = await readFile(path, typeof content === 'string' ? 'utf8' : undefined);
      const matches = typeof content === 'string' ? existing === content : existing.equals(content);
      if (!matches) {
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
