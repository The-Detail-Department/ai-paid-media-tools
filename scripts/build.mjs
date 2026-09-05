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

const sectionLinks = sectionOrder.map((section) => {
  const count = tools.filter((tool) => tool.section === section).length;
  return '- [' + section + '](#' + slug(section) + ') (' + count + ')';
}).join('\n');

const commercialRows = tools
  .filter((tool) => ['Affiliate', 'Referral', 'Retired'].includes(tool.workflow.commercial.type))
  .map((tool) => '| ' + [
    '[' + tool.name + '](#' + tool.id + ')',
    tool.workflow.commercial.type,
    markdownCommercial(tool.workflow.commercial),
    tool.workflow.commercial.note
  ].map(markdownCell).join(' | ') + ' |')
  .join('\n');

const operationalRow = (tool) => '| ' + [
  '[' + tool.name + '](#' + tool.id + ')',
  tool.grade,
  tool.readiness,
  tool.workflow.setup.level,
  tool.workflow.actions.read,
  tool.workflow.actions.create,
  tool.workflow.actions.modify,
  tool.workflow.actions.delete,
  tool.workflow.coverage.level
].map(markdownCell).join(' | ') + ' |';

const toolDetail = (tool) => {
  const workflow = tool.workflow;
  return [
    '### ' + tool.name,
    '',
    '**' + tool.grade + ' · ' + tool.readiness + '**',
    '',
    tool.summary,
    '',
    '> **Biggest daily blocker:** ' + workflow.blocker,
    '',
    '| Route judged | Setup | Read | Create | Modify | Delete | Coverage |',
    '| --- | --- | --- | --- | --- | --- | --- |',
    '| ' + [workflow.surface, workflow.setup.level, workflow.actions.read, workflow.actions.create, workflow.actions.modify, workflow.actions.delete, workflow.coverage.level].map(markdownCell).join(' | ') + ' |',
    '',
    '**Connection:** ' + workflow.setup.note,
    '',
    '**Manual-feature coverage:** ' + workflow.coverage.note,
    '',
    '**+**',
    '',
    markdownList(tool.positives),
    '',
    '**−**',
    '',
    markdownList(tool.negatives),
    '',
    '**Interfaces:** MCP: ' + tool.mcp.label + ' · Plugin: ' + tool.plugin.label + ' · CLI: ' + tool.cli.label + ' · API/SDK: ' + tool.developer.label,
    '',
    '**Access:** ' + tool.access,
    '',
    '**Commercial programme:** ' + workflow.commercial.type + ' · ' + markdownCommercial(workflow.commercial) + '. ' + workflow.commercial.note,
    '',
    '**Watch:** ' + tool.caution,
    '',
    '**Sources:** ' + markdownSources(tool.sources) + ' · Verified ' + formatDate(tool.verifiedOn),
    '',
    '[Back to sections](#sections)'
  ].join('\n');
};

const detailedSections = sectionOrder.map((section) => {
  const sectionTools = tools.filter((tool) => tool.section === section);
  const matrix = [
    '| Tool | Grade | Ready | Setup | Read | Create | Modify | Delete | Coverage |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- |',
    ...sectionTools.map(operationalRow)
  ].join('\n');
  return ['## ' + section, matrix, ...sectionTools.map(toolDetail)].join('\n\n');
}).join('\n\n');

const readme = [
  '# AI paid media tools',
  '',
  '**The Detail Department\'s point of view on what is usable in a daily AI paid-media workflow today.**',
  '',
  'An official integration is not automatically a good workflow. Grades start with the work an operator can complete today: how difficult the route is to connect, whether it can read, create, modify and delete, and how much of the manual product it actually covers.',
  '',
  '[Methodology](METHODOLOGY.md) · [Interface facts](data/tools.json) · [Daily workflow data](data/workflows.json) · [Editorial ratings](data/ratings.json) · [Filterable browser](docs/index.html) · [Propose a correction](../../issues/new?template=correction.yml)',
  '',
  '## Current view',
  '',
  '- ' + tools.length + ' tools reviewed',
  '- ' + productionReady + ' rated Production, ' + inTest + ' rated Test, ' + tools.filter((tool) => tool.readiness === 'Research').length + ' rated Research',
  '- ' + officialMcp + ' verified official MCPs',
  '- ' + affiliatePrograms + ' current public affiliate programmes verified',
  '- No tool currently earns A+. The bar is an easy, dependable route that can complete most recurring work without returning to the manual product.',
  '',
  'Last full review: **' + formatDate(data.meta.updatedOn) + '**',
  '',
  '## What matters',
  '',
  '| Priority | Question | Consequence |',
  '| --- | --- | --- |',
  '| 1 | Can it complete a recurring job end to end? | Reporting that cannot apply a correction is useful, but incomplete. |',
  '| 2 | What can it Read, Create, Modify and Delete? | Create and Modify are separate. A route that creates but cannot maintain the object is a serious operational gap. |',
  '| 3 | How hard is it to connect? | Cloud projects, developer tokens, OAuth applications, allowlists and custom code reduce daily usefulness. |',
  '| 4 | How much of the manual product is covered? | API or MCP availability does not mean feature parity with the interface used by practitioners. |',
  '| 5 | Is the route mature and governable? | Beta access, unclear permissions or unbounded writes require a test even when the capability looks strong. |',
  '',
  '### Grade ceilings',
  '',
  '- A read-only route cannot score above B+ for a workflow whose normal job includes execution.',
  '- A media-platform route that cannot dependably modify core objects cannot score above B-.',
  '- A route requiring custom engineering or gated developer approval cannot score above B unless the operational value is exceptional.',
  '- Beta, preview, allowlist and private-beta routes normally remain Test regardless of their feature list.',
  '- Production describes dependability within the stated boundary. It does not mean broad feature coverage or unrestricted automation.',
  '',
  '## Action and setup labels',
  '',
  '| Label | Meaning |',
  '| --- | --- |',
  '| Easy | Hosted connection and account approval, without a developer project or custom code. |',
  '| Moderate | Account configuration, credentials or light technical setup. |',
  '| Hard | Developer access, cloud or OAuth setup, custom integration or vendor approval. |',
  '| Specialist | Data engineering, infrastructure or statistical expertise. |',
  '| Yes | Directly supported for the core objects of the route being judged. |',
  '| Partial | Present, but important objects, fields or workflows are missing or inconsistent. |',
  '| No | The evaluated route does not support the action. |',
  '| Depends | Determined by the operator\'s connected tools, permissions or configuration. |',
  '| N/A | The action is not meaningful for this type of tool. |',
  '| Unverified | The vendor has not documented a dependable boundary. |',
  '',
  '## Sections',
  '',
  sectionLinks,
  '',
  '## Affiliate and referral programmes',
  '',
  'Affiliate means a public commission-paying programme. Referral, partner, certification and directory schemes are labelled separately. Partner-only programmes are recorded in each tool detail.',
  '',
  '| Tool | Type | Programme | Current note |',
  '| --- | --- | --- | --- |',
  commercialRows,
  '',
  detailedSections,
  '',
  '## Contributing',
  '',
  'Facts, operational assessment and editorial grade are stored separately. Corrections need a vendor source and fresh verification date. Rating changes need a concrete daily-workflow rationale. See [CONTRIBUTING.md](CONTRIBUTING.md).',
  '',
  'Maintained by [The Detail Department](https://detail-department.com/). No vendor sponsorship, affiliate relationship or client relationship is implied.',
  '',
  'MIT licensed. Vendor capabilities and programme terms remain subject to their respective access rules.'
].join('\n');

const outputs = new Map([
  [resolve(root, 'README.md'), readme + '\n'],
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
if (!checking) console.log('Built README and field index for ' + tools.length + ' tools.');
