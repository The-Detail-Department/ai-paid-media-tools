import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checking = process.argv.includes('--check');
const dataPath = resolve(root, 'data/tools.json');
const ratingsPath = resolve(root, 'data/ratings.json');
const data = JSON.parse(await readFile(dataPath, 'utf8'));
const editorial = JSON.parse(await readFile(ratingsPath, 'utf8'));
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
  ...editorial.ratings[tool.id]
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

const toolRows = tools.map((tool, index) => {
  const search = [
    tool.name,
    tool.category,
    tool.section,
    tool.readiness,
    tool.grade,
    tool.summary,
    tool.channels.join(' '),
    tool.jobs.join(' '),
    tool.mcp.label,
    tool.plugin.label,
    tool.cli.label,
    tool.developer.label,
    tool.positives.join(' '),
    tool.negatives.join(' ')
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
    ' data-interfaces="' + escapeHtml(interfaces) + '"',
    ' data-mcp="' + escapeHtml(tool.mcp.provenance === 'official' ? tool.mcp.maturity : 'none-verified') + '"',
    ' data-control="' + escapeHtml(tool.mcp.control) + '">',
    '  <div class="tool-index" aria-hidden="true">' + String(index + 1).padStart(2, '0') + '</div>',
    '  <div class="tool-summary">',
    '    <p class="tool-category">' + escapeHtml(tool.section) + '</p>',
    '    <h2><a href="#' + escapeHtml(tool.id) + '">' + escapeHtml(tool.name) + '</a></h2>',
    '    <p class="tool-rating"><strong>' + escapeHtml(tool.grade) + '</strong><span>' + escapeHtml(tool.readiness) + '</span></p>',
    '    <p>' + escapeHtml(tool.summary) + '</p>',
    '    <p class="tool-tags"><span>' + tool.channels.map(escapeHtml).join('</span><span>') + '</span></p>',
    '  </div>',
    '  <div class="mcp-state mcp-' + statusTone(tool.mcp) + '">',
    '    <span class="state-dot" aria-hidden="true"></span>',
    '    <span><strong>MCP</strong>' + escapeHtml(tool.mcp.label) + '</span>',
    '  </div>',
    '  <div class="interfaces">',
    interfaceLink('MCP', tool.mcp),
    interfaceLink('Plugin', tool.plugin),
    interfaceLink('CLI', tool.cli),
    interfaceLink('API / SDK', tool.developer),
    '  </div>',
    '  <details class="tool-detail">',
    '    <summary>Why this grade, access and sources <span aria-hidden="true">+</span></summary>',
    '    <div class="editorial-grid">',
    '      <div class="positive"><h3>+</h3>' + htmlList(tool.positives) + '</div>',
    '      <div class="negative"><h3>−</h3>' + htmlList(tool.negatives) + '</div>',
    '    </div>',
    '    <div class="detail-grid">',
    '      <div><h3>Access</h3><p>' + escapeHtml(tool.access) + '</p></div>',
    '      <div><h3>Control</h3><p>' + escapeHtml(tool.mcp.control === 'none' ? 'No official MCP verified' : tool.mcp.control.replace('-', ' ')) + '</p></div>',
    '      <div><h3>Watch</h3><p>' + escapeHtml(tool.caution) + '</p></div>',
    '      <div><h3>Sources</h3><p class="source-links">' + sourceLinks(tool.sources) + '</p></div>',
    '    </div>',
    '    <p class="verified">Verified ' + escapeHtml(formatDate(tool.verifiedOn)) + '</p>',
    '  </details>',
    '</article>'
  ].join('');
}).join('\n');

const categoryOptions = sectionOrder.map((section) => {
  return '<option value="' + escapeHtml(section) + '">' + escapeHtml(section) + '</option>';
}).join('');
const officialMcp = tools.filter((tool) => tool.mcp.provenance === 'official').length;
const writeCapable = tools.filter((tool) => ['read-write', 'mixed'].includes(tool.mcp.control)).length;
const officialCli = tools.filter((tool) => tool.cli.provenance === 'official').length;
const officialPlugin = tools.filter((tool) => tool.plugin.provenance === 'official').length;
const productionReady = tools.filter((tool) => tool.readiness === 'Production').length;
const inTest = tools.filter((tool) => tool.readiness === 'Test').length;

const template = await readFile(resolve(root, 'templates/index.html'), 'utf8');
const page = template
  .replaceAll('{{TITLE}}', escapeHtml(data.meta.title))
  .replaceAll('{{DESCRIPTION}}', escapeHtml(data.meta.description))
  .replaceAll('{{UPDATED_ISO}}', escapeHtml(data.meta.updatedOn))
  .replaceAll('{{UPDATED}}', escapeHtml(formatDate(data.meta.updatedOn)))
  .replaceAll('{{TOTAL}}', String(tools.length))
  .replaceAll('{{OFFICIAL_MCP}}', String(officialMcp))
  .replaceAll('{{WRITE_CAPABLE}}', String(writeCapable))
  .replaceAll('{{OFFICIAL_CLI}}', String(officialCli))
  .replaceAll('{{OFFICIAL_PLUGIN}}', String(officialPlugin))
  .replaceAll('{{PRODUCTION_READY}}', String(productionReady))
  .replaceAll('{{IN_TEST}}', String(inTest))
  .replaceAll('{{CATEGORY_OPTIONS}}', categoryOptions)
  .replaceAll('{{TOOL_ROWS}}', toolRows);

const markdownCell = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const readmeRows = tools.map((tool) => {
  const toolLink = '[' + tool.name + '](#' + tool.id + ')';
  const plugin = tool.plugin.provenance === 'official' ? tool.plugin.label : 'None official';
  const cli = tool.cli.provenance === 'official' ? tool.cli.label : 'None dedicated';
  return '| ' + [
    toolLink,
    tool.grade,
    tool.readiness,
    tool.mcp.label,
    plugin,
    cli
  ].map(markdownCell).join(' | ') + ' |';
}).join('\n');

const markdownSources = (sources) => sources.map((source) => '[' + source.label + '](' + source.url + ')').join(' · ');
const markdownList = (items) => items.map((item) => '- ' + item).join('\n');
const toolDetail = (tool) => [
  '### ' + tool.name,
  '',
  '**' + tool.grade + ' · ' + tool.readiness + '**',
  '',
  tool.summary,
  '',
  '**Interfaces:** MCP: ' + tool.mcp.label + ' · Plugin: ' + tool.plugin.label + ' · CLI: ' + tool.cli.label + ' · API/SDK: ' + tool.developer.label,
  '',
  '**+**',
  '',
  markdownList(tool.positives),
  '',
  '**−**',
  '',
  markdownList(tool.negatives),
  '',
  '**Access:** ' + tool.access,
  '',
  '**Watch:** ' + tool.caution,
  '',
  '**Sources:** ' + markdownSources(tool.sources) + ' · Verified ' + formatDate(tool.verifiedOn),
  '',
  '[Back to index](#quick-index)'
].join('\n');

const detailedSections = sectionOrder.map((section) => {
  const sectionTools = tools.filter((tool) => tool.section === section);
  return ['## ' + section, '', ...sectionTools.map(toolDetail)].join('\n\n');
}).join('\n\n');

const readme = [
  '# AI paid media tools',
  '',
  '**The Detail Department\'s point of view on what is usable in a daily AI paid-media workflow today.**',
  '',
  'This is an opinionated production guide, not a directory of every integration. Grades combine usable scope, production readiness, access friction, control, documentation and operational risk. They do not rate the vendor or product in general.',
  '',
  '[Methodology](METHODOLOGY.md) · [Tool facts](data/tools.json) · [Editorial ratings](data/ratings.json) · [Filterable browser](docs/index.html) · [Propose a correction](../../issues/new?template=correction.yml)',
  '',
  '## Current view',
  '',
  '- ' + tools.length + ' tools reviewed',
  '- ' + productionReady + ' rated Production, ' + inTest + ' rated Test, ' + tools.filter((tool) => tool.readiness === 'Research').length + ' rated Research',
  '- ' + officialMcp + ' verified official MCPs',
  '- ' + writeCapable + ' MCPs with write or mixed control',
  '- No tool currently earns A+. The bar is a broad, dependable daily interface with clear access, control and documentation.',
  '',
  'Last full review: **' + formatDate(data.meta.updatedOn) + '**',
  '',
  '## Rating system',
  '',
  '| Signal | Meaning |',
  '| --- | --- |',
  '| A+, A, A- | Strong daily recommendation. The lower marks retain material limits. |',
  '| B+, B, B- | Useful in a defined workflow, with access, coverage or integration friction. |',
  '| C+, C, C- | Narrow, immature or too indirect for most daily teams. |',
  '| D / F | Not recommended for current production use. |',
  '| Production | Dependable enough for a controlled recurring workflow today. |',
  '| Test | Worth piloting, but access, maturity or control needs a bounded test. |',
  '| Research | Useful specialist capability, not a daily operating interface. |',
  '',
  'A Production label does not mean unrestricted automation. Write-capable tools still need scoped credentials, human approval and change evidence.',
  '',
  '## Quick index',
  '',
  '| Tool | Grade | Readiness | MCP | Plugin | CLI |',
  '| --- | --- | --- | --- | --- | --- |',
  readmeRows,
  '',
  detailedSections,
  '',
  '## Contributing',
  '',
  'Facts and opinion are kept separate. Corrections to tool capabilities need a vendor source and fresh verification date. Rating changes need a short operational rationale. See [CONTRIBUTING.md](CONTRIBUTING.md).',
  '',
  'Maintained by [The Detail Department](https://detail-department.com/). No vendor sponsorship or client relationship is implied.',
  '',
  'MIT licensed. Vendor capabilities remain subject to their respective terms and access rules.'
].join('\n');

const outputs = new Map([
  [resolve(root, 'README.md'), readme + '\n'],
  [resolve(root, 'docs/index.html'), page],
  [resolve(root, 'docs/assets/styles.css'), await readFile(resolve(root, 'assets/styles.css'), 'utf8')],
  [resolve(root, 'docs/assets/app.js'), await readFile(resolve(root, 'assets/app.js'), 'utf8')],
  [resolve(root, 'docs/data/tools.json'), JSON.stringify(data, null, 2) + '\n'],
  [resolve(root, 'docs/data/ratings.json'), JSON.stringify(editorial, null, 2) + '\n'],
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
if (!checking) {
  console.log('Built README and field index for ' + tools.length + ' tools.');
}
