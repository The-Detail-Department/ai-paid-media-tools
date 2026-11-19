import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checking = process.argv.includes('--check');
const data = JSON.parse(await readFile(resolve(root, 'data/tools.json'), 'utf8'));
const editorial = JSON.parse(await readFile(resolve(root, 'data/ratings.json'), 'utf8'));
const workflowData = JSON.parse(await readFile(resolve(root, 'data/workflows.json'), 'utf8'));
const cmsData = JSON.parse(await readFile(resolve(root, 'data/cms-tools.json'), 'utf8'));
const siteUrl = 'https://the-detail-department.github.io/ai-paid-media-tools/';
const repositoryUrl = 'https://github.com/The-Detail-Department/ai-paid-media-tools';
const rawUrl = 'https://raw.githubusercontent.com/The-Detail-Department/ai-paid-media-tools/main/';
const socialImageUrl = siteUrl + 'assets/social-preview.png';
// The website edition renders a pinned snapshot of these data files.
const websiteIndexUrl = 'https://detail-department.com/ai-index';
const websiteMediaIndexUrl = 'https://detail-department.com/ai-media-index';
const websiteCmsIndexUrl = 'https://detail-department.com/ai-cms-index';
const organisationProfiles = [
  'https://github.com/The-Detail-Department',
  'https://x.com/detaildept',
  'https://www.linkedin.com/company/144640030'
];
const sectionConfig = {
  'Media platforms': {
    file: 'media-platforms.md',
    description: 'Advertising platforms and buying systems, judged on the named documented route available to an AI-assisted operator.',
    humanJob: 'Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.',
    criteria: [
      {key: "read", label: "Read", fallback: "read"},
      {key: "create", label: "Create", fallback: "create"},
      {key: "modify", label: "Edit", fallback: "modify"},
      {key: "delete", label: "Delete", fallback: "delete"},
      {key: "publish", label: "Publish / activate", fallback: "publish"}
    ]
  },
  Analytics: {
    file: 'analytics.md',
    description: 'Analytics products judged on whether an agent can investigate performance and leave useful analysis behind.',
    humanJob: 'Explore data, answer a question, build a reusable report, configure analysis components and share the result.',
    criteria: [
      {key: "read", label: "Read", fallback: "read"},
      {key: "create", label: "Create", fallback: "create"},
      {key: "modify", label: "Edit", fallback: "modify"},
      {key: "delete", label: "Delete", fallback: "delete"},
      {key: "publish", label: "Publish / activate", fallback: "publish"}
    ]
  },
  Measurement: {
    file: 'measurement.md',
    description: 'Collection, tagging and attribution systems judged on implementation, validation and operational monitoring.',
    humanJob: 'Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.',
    criteria: [
      {key: "read", label: "Read", fallback: "read"},
      {key: "create", label: "Create", fallback: "create"},
      {key: "modify", label: "Edit", fallback: "modify"},
      {key: "delete", label: "Delete", fallback: "delete"},
      {key: "publish", label: "Publish / activate", fallback: "publish"}
    ]
  },
  'Creative production': {
    file: 'creative-production.md',
    description: 'Creative systems judged on context, generation, editing, format adaptation and usable output.',
    humanJob: 'Understand the brief and source assets, create, edit, adapt to placements and export production-ready files.',
    criteria: [
      {key: "read", label: "Read", fallback: "read"},
      {key: "create", label: "Create", fallback: "create"},
      {key: "modify", label: "Edit", fallback: "modify"},
      {key: "delete", label: "Delete", fallback: "delete"},
      {key: "publish", label: "Publish / activate", fallback: "publish"}
    ]
  },
  'Research and intelligence': {
    file: 'research-intelligence.md',
    description: 'External research systems judged on discovery, retrieval, comparison, analysis and export.',
    humanJob: 'Find the right market evidence, retrieve it, compare competitors or queries, analyse patterns and export the evidence.',
    criteria: [
      {key: "read", label: "Read", fallback: "read"},
      {key: "create", label: "Create", fallback: "create"},
      {key: "modify", label: "Edit", fallback: "modify"},
      {key: "delete", label: "Delete", fallback: "delete"},
      {key: "publish", label: "Publish / activate", fallback: "publish"}
    ]
  },
  'Data infrastructure': {
    file: 'data-infrastructure.md',
    description: 'Pipelines, warehouses and semantic layers judged on connection, inspection, querying, transformation and operation.',
    humanJob: 'Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.',
    criteria: [
      {key: "read", label: "Read", fallback: "read"},
      {key: "create", label: "Create", fallback: "create"},
      {key: "modify", label: "Edit", fallback: "modify"},
      {key: "delete", label: "Delete", fallback: "delete"},
      {key: "publish", label: "Publish / activate", fallback: "publish"}
    ]
  },
  'Automation and workflow': {
    file: 'automation-workflow.md',
    description: 'Cross-tool automation systems judged on connection, workflow construction, execution, debugging and monitoring.',
    humanJob: 'Connect systems, build the workflow, run it reliably, diagnose failures and monitor production execution.',
    criteria: [
      {key: "read", label: "Read", fallback: "read"},
      {key: "create", label: "Create", fallback: "create"},
      {key: "modify", label: "Edit", fallback: "modify"},
      {key: "delete", label: "Delete", fallback: "delete"},
      {key: "publish", label: "Publish / activate", fallback: "publish"}
    ]
  },
  Modelling: {
    file: 'modelling.md',
    description: 'Specialist modelling frameworks judged on preparation, configuration, execution, validation and scenario planning.',
    humanJob: 'Prepare model-ready data, configure assumptions, run the model, validate it and turn scenarios into planning evidence.',
    criteria: [
      {key: "read", label: "Read", fallback: "read"},
      {key: "create", label: "Create", fallback: "create"},
      {key: "modify", label: "Edit", fallback: "modify"},
      {key: "delete", label: "Delete", fallback: "delete"},
      {key: "publish", label: "Publish / activate", fallback: "publish"}
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
  value: tool.workflow.actions[criterion.key]
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
    '    <strong>' + escapeHtml(workflow.reviewStatus === 'pending' ? 'Not scored' : tool.grade) + '</strong>',
    '    <span>' + escapeHtml(workflow.reviewStatus === 'pending' ? 'Verification needed' : tool.readiness) + '</span>',
    '  </div>',
    '  <section class="tool-detail" aria-label="' + escapeHtml(tool.name) + ' workflow detail">',
    '    <p class="connection-status">' + escapeHtml(workflow.connection.provenance + ' · ' + workflow.connection.availability) + '. ' + escapeHtml(workflow.connection.note) + '</p>',
    '    <div class="blocker"><span>Biggest daily blocker</span><p>' + escapeHtml(workflow.blocker) + '</p></div>',
    '    <div class="operation-grid">',
    operationCell('Connection', workflow.setup.tier),
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
  alternateName: 'ai-paid-media-tools',
  description: data.meta.description,
  url: siteUrl,
  sameAs: repositoryUrl,
  version: data.meta.version,
  dateModified: data.meta.updatedOn,
  inLanguage: 'en-GB',
  isAccessibleForFree: true,
  keywords: [
    'paid media',
    'media buying',
    'advertising API',
    'Model Context Protocol',
    'marketing analytics',
    'marketing automation'
  ],
  license: 'https://opensource.org/license/mit',
  creator: {
    '@type': 'Organization',
    name: 'The Detail Department',
    url: 'https://detail-department.com/',
    sameAs: organisationProfiles
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
  .replaceAll('{{VERSION}}', escapeHtml(data.meta.version))
  .replaceAll('{{WEBSITE_INDEX_URL}}', websiteIndexUrl)
  .replaceAll('{{METHODOLOGY_URL}}', repositoryUrl + '/blob/main/METHODOLOGY.md')
  .replaceAll('{{CHANGELOG_URL}}', repositoryUrl + '/blob/main/CHANGELOG.md')
  .replaceAll('{{CORRECTION_URL}}', repositoryUrl + '/issues/new?template=correction.yml')
  .replaceAll('{{TOOL_ROWS}}', toolRows);
if (/\{\{[A-Z_]+\}\}/.test(page)) throw new Error('Unresolved template placeholder in templates/index.html');

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
  tool.workflow.reviewStatus === 'pending' ? '**Not scored: verification needed**' : '**' + tool.grade + '**',
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
    '**' + (workflow.reviewStatus === 'pending' ? 'Not scored: verification needed' : tool.grade) + ' · ' + tool.readiness + ' · ' + tool.position + '**',
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
    '- **Read:** ' + workflow.readSummary,
    '- **Write:** ' + workflow.writeSummary,
    '- **Connection type:** ' + workflow.setup.tier,
    '- **Connection status:** ' + workflow.connection.provenance + ' · ' + workflow.connection.availability + '. ' + workflow.connection.note,
    '- **Review:** ' + workflow.reviewStatus,
    ...Object.entries(workflow.actionScopes).map(([action, scope]) => '- **' + action + ':** ' + scope),
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

// Common questions are generated from the records so every answer stays tied to the data.
const availabilityLabel = {
  'generally-available': 'generally available',
  beta: 'beta',
  preview: 'preview',
  restricted: 'restricted access',
  unverified: 'availability unverified'
};
const routeStatus = (tool) => tool.workflow.connection.provenance + ', ' +
  (availabilityLabel[tool.workflow.connection.availability] ?? tool.workflow.connection.availability);
const currentMediaRoutes = rankedTools('Media platforms').filter((tool) => tool.workflow.reviewStatus === 'current');
const editGroups = [
  ['Yes', 'Edit documented'],
  ['Partial', 'Edit partly documented'],
  ['Depends', 'Edit depends on configuration'],
  ['Unverified', 'Edit not yet verified'],
  ['No', 'Edit not supported']
].map(([value, label]) => [label, currentMediaRoutes.filter((tool) => tool.workflow.actions.modify === value)])
  .filter(([, group]) => group.length);
const editAnswer = editGroups.map(([label, group]) => [
  '**' + label + ' (' + group.length + ')**',
  '',
  ...group.map((tool) => '- **' + tool.name + '** \u00b7 ' + tool.grade + ' \u00b7 ' + tool.workflow.surface +
    ' (' + routeStatus(tool) + '). Edit scope: ' + tool.workflow.actionScopes.modify)
].join('\n')).join('\n\n');

const defaultBasis = workflowData.meta.defaultEvidenceBasis;
const otherBases = Object.keys(workflowData.meta.evidenceBasisDefinition).filter((basis) => basis !== defaultBasis);
const listWithOr = (items) => items.length > 1 ? items.slice(0, -1).join(', ') + ' or ' + items.at(-1) : items.join('');
const basisCounts = Object.keys(workflowData.meta.evidenceBasisDefinition)
  .map((basis) => [basis, tools.filter((tool) => evidenceBasisFor(tool) === basis).length])
  .filter(([, count]) => count);
const testedAnswer = basisCounts.length === 1 && basisCounts[0][0] === defaultBasis
  ? 'No hands-on testing is recorded. All ' + tools.length + ' entries are **' + defaultBasis + '**: ' +
    workflowData.meta.evidenceBasisDefinition[defaultBasis].replace(/^./, (first) => first.toLowerCase()) +
    ' None is recorded as ' + listWithOr(otherBases) +
    ', so no grade reflects a live test.'
  : 'Evidence basis by entry: ' + basisCounts.map(([basis, count]) => basis + ' ' + count).join(' \u00b7 ') +
    '. Each record states its own basis; a Production readiness label is not proof of hands-on execution.';

// Mirrors the jq example below: ratings.json key order, current reviews only.
const quickstartOutput = Object.entries(editorial.ratings)
  .filter(([id, rating]) => rating.section === 'Media platforms' &&
    workflowData.workflows[id]?.reviewStatus === 'current' &&
    workflowData.workflows[id]?.actions.modify === 'Yes')
  .map(([id, rating]) => rating.grade + '\t' + id + '\t' + workflowData.workflows[id].actionScopes.modify)
  .join('\n');

const readme = [
  '# ' + data.meta.title,
  '',
  data.meta.description,
  '',
  '**The Detail Department\'s view of what an AI paid-media team can use in real work today.**',
  '',
  'Published by [The Detail Department](https://detail-department.com/). Editorial lead: [L\u00e9on Houlier](https://github.com/leonhoulier).',
  '',
  '**Read it online:** [Web index](' + siteUrl + ') \u00b7 [The AI Media Index](' + websiteMediaIndexUrl + ') and [The AI CMS Index](' + websiteCmsIndexUrl + ') on detail-department.com \u00b7 [JSON data](#use-the-data) \u00b7 [llms.txt](' + siteUrl + 'llms.txt)',
  '',
  'We compare what external AI can read and write through each Model Context Protocol (MCP) server, API, plugin or command-line tool, and how easily it connects, so you can check a route before you build or buy advertising automation around it. The same combined lens applies across media buying, analytics, measurement, creative production, research, data infrastructure, marketing automation and modelling, with the exact route and its limits stated in each record.',
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
  '1. What useful information can external AI read?',
  '2. What can it create, edit, delete or publish?',
  '3. Is connection native, hosted, self-managed or custom-built?',
  '4. How much of the manual product does it cover?',
  '5. Is it mature and governable?',
  '',
  '**Grade** combines read, write and setup. Read-only and custom-API-only routes are capped at C+; that does not rate their overall product quality. **Readiness** describes documented maturity, not hands-on testing.',
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
  '## Common questions',
  '',
  '### Is this a package, an SDK or an automation tool?',
  '',
  'No. It is an evidence index: JSON data, generated Markdown and a static web page. It connects to no advertising account and changes nothing. There is no package to install; [use the data](#use-the-data) directly.',
  '',
  '### Which advertising platforms let an AI agent change campaigns, bids or budgets?',
  '',
  'It depends on the route. Each platform\'s evaluated route is listed with its documented edit scope, quoted from the record, and its connection status. A custom integration means you build and host the connection yourself.',
  '',
  editAnswer,
  '',
  '### Has The Detail Department tested these routes?',
  '',
  testedAnswer,
  '',
  '### How current is it?',
  '',
  'The catalogue was last updated on ' + formatDate(data.meta.updatedOn) + '. Each record shows its own **Last checked** date, and the [changelog](CHANGELOG.md) lists every review. Vendors change AI routes quickly, so confirm the cited source before relying on an entry.',
  '',
  '### How do I correct an entry or ask a question?',
  '',
  '[Propose a correction](../../issues/new?template=correction.yml) with an official source, or ask in the [issue tracker](' + repositoryUrl + '/issues). The [contribution guide](CONTRIBUTING.md) explains what counts as evidence.',
  '',
  '## CMS companion',
  '',
  '[The AI CMS Index](catalogue/cms.md) assesses CMS platforms and AI/LLM workflows using the same read/write/setup lens, with content-specific action boundaries.',
  '',
  '## Use the data',
  '',
  'There is no package to install. The index is three JSON files, published with the web index and kept in `data/` in this repository:',
  '',
  '| File | Contents |',
  '| :--- | :--- |',
  '| [tools.json](' + siteUrl + 'data/tools.json) | Interface facts: routes, official links, sources and review dates |',
  '| [workflows.json](' + siteUrl + 'data/workflows.json) | Daily workflow assessments: read, create, edit, delete and publish, each with its scope |',
  '| [ratings.json](' + siteUrl + 'data/ratings.json) | Editorial ratings: grade, readiness, market role, positives and limits |',
  '',
  'For example, list the advertising platforms whose evaluated route documents Edit, with its scope. You need `curl` and `jq`:',
  '',
  '```bash',
  'curl -s -O ' + siteUrl + 'data/ratings.json \\',
  '     -O ' + siteUrl + 'data/workflows.json',
  'jq -r --slurpfile w workflows.json \'.ratings | to_entries[]',
  '  | $w[0].workflows[.key] as $route',
  '  | select(.value.section == "Media platforms" and $route.reviewStatus == "current" and $route.actions.modify == "Yes")',
  '  | "\\(.value.grade)\\t\\(.key)\\t\\($route.actionScopes.modify)"\' ratings.json',
  '```',
  '',
  'Output from the catalogue updated ' + formatDate(data.meta.updatedOn) + ':',
  '',
  '```text',
  quickstartOutput,
  '```',
  '',
  'A record whose `reviewStatus` is `pending` is shown as **Not scored**, so filter on `current` before using a grade. The CMS companion uses the same structure in `data/cms-tools.json`, `data/cms-workflows.json` and `data/cms-ratings.json`.',
  '',
  'To work on the index you need Node.js 20 or later; there are no dependencies to install:',
  '',
  '```bash',
  'git clone ' + repositoryUrl + '.git',
  'cd ai-paid-media-tools',
  'npm run check   # validates the data and confirms the generated files are current',
  'npm run serve   # serves the web index at http://localhost:4173 (needs Python 3)',
  '```',
  '',
  'Edit the `data/*.json` files, then run `npm run build` and `npm run check`. The [contribution guide](CONTRIBUTING.md) explains the evidence rules.',
  '',
  '## Data and maintenance',
  '',
  '- [Interface facts](data/tools.json)',
  '- [Daily workflow assessments](data/workflows.json)',
  '- [Editorial ratings](data/ratings.json)',
  '- [Web index](' + siteUrl + ') and its [llms.txt](' + siteUrl + 'llms.txt) summary for AI assistants',
  '- [The AI Index](' + websiteIndexUrl + ') on detail-department.com: the website edition, rendered from a pinned snapshot of these data files',
  '- [Citation metadata](CITATION.cff)',
  '- [Changelog](CHANGELOG.md)',
  '- [Contribution guide](CONTRIBUTING.md)',
  '- [Generated web interface source](docs/index.html) (`npm run serve` to run locally)',
  '',
  'Generated from the repository data files. No sponsorship, affiliate relationship or client relationship is implied.',
  '',
  'Maintained by [The Detail Department](https://detail-department.com/). MIT licensed.'
].join('\n');

// A plain-text guide for AI assistants (https://llmstxt.org/), served at the root of the web index.
const sectionCount = (section) => tools.filter((tool) => tool.section === section).length;
const llms = [
  '# ' + data.meta.title,
  '',
  '> ' + data.meta.description,
  '',
  'Maintained by The Detail Department (https://detail-department.com/). Catalogue updated ' + formatDate(data.meta.updatedOn) + ': ' + tools.length + ' tools in ' + sectionOrder.length + ' sections, plus a ' + cmsData.tools.length + '-tool CMS companion. Evidence basis: ' + defaultBasis + ' unless an entry states otherwise. Grades are editorial judgements about each named route, not vendor-quality scores, measured results or live tests. This is an evidence index, not a package, SDK or automation service; it connects to no advertising account.',
  '',
  '## Index',
  '',
  '- [Web index](' + siteUrl + '): all ' + tools.length + ' tools on one static page. Every record is in the HTML; JavaScript only filters it.',
  '- [README](' + rawUrl + 'README.md): comparison tables for every section, common questions and how to use the data.',
  ...sectionOrder.map((section) => '- [' + section + '](' + rawUrl + 'catalogue/' + sectionConfig[section].file + '): ' +
    sectionCount(section) + ' tools. ' + sectionConfig[section].description),
  '- [The AI CMS Index](' + rawUrl + 'catalogue/cms.md): ' + cmsData.tools.length + ' tools. ' + cmsData.meta.description,
  '',
  '## Data',
  '',
  '- [Interface facts](' + siteUrl + 'data/tools.json): routes, official links, sources and review dates.',
  '- [Daily workflow assessments](' + siteUrl + 'data/workflows.json): read, create, edit, delete and publish capabilities, each with its scope.',
  '- [Editorial ratings](' + siteUrl + 'data/ratings.json): grade, readiness, market role, positives and limits.',
  '- CMS companion data: [interface facts](' + rawUrl + 'data/cms-tools.json), [workflow assessments](' + rawUrl + 'data/cms-workflows.json) and [editorial ratings](' + rawUrl + 'data/cms-ratings.json).',
  '',
  '## Method and maintenance',
  '',
  '- [Methodology](' + rawUrl + 'METHODOLOGY.md): evidence basis, grade ceilings and readiness definitions.',
  '- [Changelog](' + rawUrl + 'CHANGELOG.md): dated review history.',
  '- [Contribution guide](' + rawUrl + 'CONTRIBUTING.md): how to propose an evidence-backed correction.',
  '- [Repository](' + repositoryUrl + '): source data, generator and issue tracker.',
  '',
  '## Website edition',
  '',
  '- [The AI Index](' + websiteIndexUrl + '): The Detail Department\'s website edition of these indexes, rendered from a pinned snapshot of this repository\'s data.',
  '- [The AI Media Index](' + websiteMediaIndexUrl + ') and [The AI CMS Index](' + websiteCmsIndexUrl + '): the media and CMS editions on the website.'
].join('\n') + '\n';

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
  [resolve(root, 'docs/llms.txt'), llms],
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
