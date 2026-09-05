import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checking = process.argv.includes('--check');
const dataPath = resolve(root, 'data/tools.json');
const data = JSON.parse(await readFile(dataPath, 'utf8'));

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

const toolRows = data.tools.map((tool, index) => {
  const search = [
    tool.name,
    tool.category,
    tool.summary,
    tool.channels.join(' '),
    tool.jobs.join(' '),
    tool.mcp.label,
    tool.plugin.label,
    tool.cli.label,
    tool.developer.label
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
    ' data-category="' + escapeHtml(tool.category) + '"',
    ' data-interfaces="' + escapeHtml(interfaces) + '"',
    ' data-mcp="' + escapeHtml(tool.mcp.provenance === 'official' ? tool.mcp.maturity : 'none-verified') + '"',
    ' data-control="' + escapeHtml(tool.mcp.control) + '">',
    '  <div class="tool-index" aria-hidden="true">' + String(index + 1).padStart(2, '0') + '</div>',
    '  <div class="tool-summary">',
    '    <p class="tool-category">' + escapeHtml(tool.category) + '</p>',
    '    <h2><a href="#' + escapeHtml(tool.id) + '">' + escapeHtml(tool.name) + '</a></h2>',
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
    '    <summary>Access, limits and sources <span aria-hidden="true">+</span></summary>',
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

const categories = [...new Set(data.tools.map((tool) => tool.category))].sort();
const categoryOptions = categories.map((category) => {
  return '<option value="' + escapeHtml(category) + '">' + escapeHtml(category) + '</option>';
}).join('');
const officialMcp = data.tools.filter((tool) => tool.mcp.provenance === 'official').length;
const writeCapable = data.tools.filter((tool) => ['read-write', 'mixed'].includes(tool.mcp.control)).length;
const officialCli = data.tools.filter((tool) => tool.cli.provenance === 'official').length;
const officialPlugin = data.tools.filter((tool) => tool.plugin.provenance === 'official').length;

const template = await readFile(resolve(root, 'templates/index.html'), 'utf8');
const page = template
  .replaceAll('{{TITLE}}', escapeHtml(data.meta.title))
  .replaceAll('{{DESCRIPTION}}', escapeHtml(data.meta.description))
  .replaceAll('{{UPDATED_ISO}}', escapeHtml(data.meta.updatedOn))
  .replaceAll('{{UPDATED}}', escapeHtml(formatDate(data.meta.updatedOn)))
  .replaceAll('{{TOTAL}}', String(data.tools.length))
  .replaceAll('{{OFFICIAL_MCP}}', String(officialMcp))
  .replaceAll('{{WRITE_CAPABLE}}', String(writeCapable))
  .replaceAll('{{OFFICIAL_CLI}}', String(officialCli))
  .replaceAll('{{OFFICIAL_PLUGIN}}', String(officialPlugin))
  .replaceAll('{{CATEGORY_OPTIONS}}', categoryOptions)
  .replaceAll('{{TOOL_ROWS}}', toolRows);

const markdownCell = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const readmeRows = data.tools.map((tool) => {
  const toolLink = '[' + tool.name + '](' + tool.sources[0].url + ')';
  const plugin = tool.plugin.provenance === 'official' ? tool.plugin.label : 'No official plugin verified';
  const cli = tool.cli.provenance === 'official' ? tool.cli.label : 'No dedicated CLI verified';
  return '| ' + [
    toolLink,
    tool.category,
    tool.mcp.label,
    tool.mcp.control === 'none' ? 'N/A' : tool.mcp.control.replace('-', ' '),
    plugin,
    cli,
    tool.developer.label
  ].map(markdownCell).join(' | ') + ' |';
}).join('\n');

const readme = [
  '# AI paid media tools',
  '',
  '**A maintained, evidence-backed index of the interfaces available to AI paid-media practitioners.**',
  '',
  'The catalogue separates official MCP servers from community wrappers, agent plugins from ordinary integrations, and useful command-line products from packages that merely launch a server. It also records the control boundary, access gate and source for every entry.',
  '',
  '[Browse the visual field index](docs/index.html) · [Read the methodology](METHODOLOGY.md) · [Propose a correction](../../issues/new?template=correction.yml)',
  '',
  '## At a glance',
  '',
  '- ' + data.tools.length + ' tools across media buying, measurement, modelling, data, workflow and creative operations',
  '- ' + officialMcp + ' tools with a verified official MCP',
  '- ' + writeCapable + ' MCPs with write or mixed control',
  '- ' + officialPlugin + ' tools with a verified official agent plugin or skills package',
  '- ' + officialCli + ' tools with a useful official CLI',
  '',
  'Last full review: **' + formatDate(data.meta.updatedOn) + '**',
  '',
  '## The index',
  '',
  '| Tool | Area | MCP | MCP control | Plugin | CLI | API / SDK |',
  '| --- | --- | --- | --- | --- | --- | --- |',
  readmeRows,
  '',
  '## Reading the table',
  '',
  '- **No official MCP verified** is a bounded research result, not proof that no server exists.',
  '- **Read + write** includes any tool that can create, update, launch or delete connected objects.',
  '- A CLI for building integrations is labelled as such; it is not presented as a marketer-facing campaign CLI.',
  '- Community tools are not promoted to official status because they wrap an official API.',
  '',
  '## Contributing',
  '',
  'Corrections need a vendor source, an explicit provenance label, a control boundary and a fresh verification date. See [CONTRIBUTING.md](CONTRIBUTING.md).',
  '',
  'Maintained by [The Detail Department](https://detail-department.com/). No vendor sponsorship or client relationship is implied.',
  '',
  'MIT licensed. The facts remain subject to the terms and access rules of their respective vendors.'
].join('\n');

const outputs = new Map([
  [resolve(root, 'README.md'), readme + '\n'],
  [resolve(root, 'docs/index.html'), page],
  [resolve(root, 'docs/assets/styles.css'), await readFile(resolve(root, 'assets/styles.css'), 'utf8')],
  [resolve(root, 'docs/assets/app.js'), await readFile(resolve(root, 'assets/app.js'), 'utf8')],
  [resolve(root, 'docs/data/tools.json'), JSON.stringify(data, null, 2) + '\n'],
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
  console.log('Built README and field index for ' + data.tools.length + ' tools.');
}
