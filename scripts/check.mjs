import { readFile, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cms = process.argv.includes('--cms');
const prefix = cms ? 'cms-' : '';
const data = JSON.parse(await readFile(resolve(root, 'data/' + prefix + 'tools.json'), 'utf8'));
const editorial = JSON.parse(await readFile(resolve(root, 'data/' + prefix + 'ratings.json'), 'utf8'));
const workflowData = JSON.parse(await readFile(resolve(root, 'data/' + prefix + 'workflows.json'), 'utf8'));
const errors = [];
const allowedProvenance = new Set(['official', 'community', 'none']);
const allowedMaturity = new Set(['available', 'beta', 'preview', 'restricted', 'none-verified']);
const allowedMode = new Set(['remote', 'local', 'both', 'none']);
const allowedControl = new Set(['read-only', 'read-write', 'mixed', 'not-stated', 'none']);
const interfaceNames = ['mcp', 'plugin', 'cli', 'developer'];
const allowedReadiness = new Set(['Production', 'Test', 'Research']);
const allowedSections = new Set([
  'Media platforms',
  'Analytics',
  'Measurement',
  'Creative production',
  'Research and intelligence',
  'Data infrastructure',
  'Automation and workflow',
  'Modelling',
  'CMS and site builders',
  'Content platforms',
  'Commerce content'
]);
const capabilityKeys = {
  'Media platforms': ['read', 'create', 'modify', 'delete'],
  Analytics: ['analyse', 'buildReports', 'configure', 'validate', 'share'],
  Measurement: ['inspect', 'configure', 'validate', 'deploy', 'monitor'],
  'Creative production': ['context', 'create', 'edit', 'adapt', 'export'],
  'Research and intelligence': ['discover', 'retrieve', 'compare', 'analyse', 'export'],
  'Data infrastructure': ['connect', 'inspect', 'query', 'transform', 'operate'],
  'Automation and workflow': ['connect', 'build', 'run', 'debug', 'monitor'],
  'CMS and site builders': ['read', 'draft', 'edit', 'publish', 'localise'],
  'Content platforms': ['read', 'draft', 'edit', 'publish', 'localise'],
  'Commerce content': ['read', 'draft', 'edit', 'publish', 'localise'],
  Modelling: ['prepare', 'configure', 'run', 'validate', 'scenarios']
};
const gradePattern = /^(A\+|A|A-|B\+|B|B-|C\+|C|C-|D|F)$/;
const allowedPosition = new Set(['Reference', 'Emerging', 'Specialist']);
const allowedSetup = new Set(['Easy', 'Moderate', 'Hard', 'Specialist']);
const allowedAction = new Set(['Yes', 'Partial', 'No', 'Depends', 'N/A', 'Unverified']);
const allowedCoverage = new Set(['End to end', 'Most steps', 'Some steps', 'Assist only', 'Depends', 'Specialist']);
const allowedCommercial = new Set(['Affiliate', 'Referral', 'Partner', 'Retired', 'None verified']);
const allowedEvidenceBasis = new Set(['Documentation reviewed', 'Connected', 'Executed', 'Used repeatedly']);

const githubAnchor = (value) => value
  .toLowerCase()
  .trim()
  .replace(/ /g, '-')
  .replace(/[^\p{L}\p{N}_-]/gu, '');

const checkUrl = (url, path) => {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') errors.push(path + ' must use HTTPS');
  } catch {
    errors.push(path + ' is not a valid URL');
  }
};

if (!data.meta || !Array.isArray(data.tools)) errors.push('Expected meta and tools');
if (!/^\d{4}-\d{2}-\d{2}$/.test(data.meta.updatedOn || '')) errors.push('meta.updatedOn must be an ISO date');
if (!allowedEvidenceBasis.has(workflowData.meta?.defaultEvidenceBasis)) {
  errors.push('workflow meta.defaultEvidenceBasis is invalid');
}
for (const basis of allowedEvidenceBasis) {
  if (!workflowData.meta?.evidenceBasisDefinition?.[basis]) {
    errors.push('workflow meta.evidenceBasisDefinition is missing ' + basis);
  }
}

const ids = new Set();
const names = new Set();
for (const [index, tool] of data.tools.entries()) {
  const path = 'tools[' + index + ']';
  for (const key of ['id', 'name', 'category', 'summary', 'access', 'caution', 'verifiedOn']) {
    if (!tool[key] || typeof tool[key] !== 'string') errors.push(path + '.' + key + ' is required');
  }
  if (ids.has(tool.id)) errors.push('Duplicate id: ' + tool.id);
  if (names.has(tool.name)) errors.push('Duplicate name: ' + tool.name);
  ids.add(tool.id);
  names.add(tool.name);
  if (!/^[a-z0-9-]+$/.test(tool.id || '')) errors.push(path + '.id must be a slug');
  if (!Array.isArray(tool.channels) || tool.channels.length === 0) errors.push(path + '.channels must not be empty');
  if (!Array.isArray(tool.jobs) || tool.jobs.length === 0) errors.push(path + '.jobs must not be empty');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(tool.verifiedOn || '')) errors.push(path + '.verifiedOn must be an ISO date');
  if (!Array.isArray(tool.sources) || tool.sources.length === 0) errors.push(path + '.sources must not be empty');
  for (const linkName of ['product', 'github']) {
    const link = tool[linkName];
    if (!link) continue;
    if (!link.label || !link.url) errors.push(path + '.' + linkName + ' is incomplete');
    if (link.url) checkUrl(link.url, path + '.' + linkName + '.url');
  }

  for (const interfaceName of interfaceNames) {
    const entry = tool[interfaceName];
    const entryPath = path + '.' + interfaceName;
    if (!entry) {
      errors.push(entryPath + ' is required');
      continue;
    }
    if (!allowedProvenance.has(entry.provenance)) errors.push(entryPath + '.provenance is invalid');
    if (!allowedMaturity.has(entry.maturity)) errors.push(entryPath + '.maturity is invalid');
    if (!entry.label) errors.push(entryPath + '.label is required');
    if (entry.url) checkUrl(entry.url, entryPath + '.url');
  }
  if (!allowedMode.has(tool.mcp.mode)) errors.push(path + '.mcp.mode is invalid');
  if (!allowedControl.has(tool.mcp.control)) errors.push(path + '.mcp.control is invalid');
  if (tool.mcp.provenance === 'none' && (tool.mcp.mode !== 'none' || tool.mcp.control !== 'none')) {
    errors.push(path + '.mcp must use mode and control none when provenance is none');
  }
  if (tool.mcp.provenance === 'official' && !tool.mcp.url) errors.push(path + '.mcp needs an official URL');

  let hasPrimarySource = false;
  for (const [sourceIndex, source] of tool.sources.entries()) {
    if (!source.label || !source.kind || !source.url) errors.push(path + '.sources[' + sourceIndex + '] is incomplete');
    if (source.kind === 'official' || source.kind === 'source-code') hasPrimarySource = true;
    if (source.url) checkUrl(source.url, path + '.sources[' + sourceIndex + '].url');
  }
  if (!hasPrimarySource) errors.push(path + ' needs a primary source');

  const rating = editorial.ratings?.[tool.id];
  if (!rating) {
    errors.push(path + ' needs an editorial rating');
    continue;
  }
  if (!allowedSections.has(rating.section)) errors.push(path + ' rating section is invalid');
  if (!allowedReadiness.has(rating.readiness)) errors.push(path + ' readiness is invalid');
  if (!gradePattern.test(rating.grade || '')) errors.push(path + ' grade is invalid');
  if (!allowedPosition.has(rating.position)) errors.push(path + ' market position is invalid');
  for (const listName of ['positives', 'negatives']) {
    const list = rating[listName];
    if (!Array.isArray(list) || list.length < 1 || list.length > 5) {
      errors.push(path + ' ' + listName + ' must contain one to five items');
      continue;
    }
    if (list.some((item) => typeof item !== 'string' || !item.trim())) {
      errors.push(path + ' ' + listName + ' must contain non-empty strings');
    }
  }

  const workflow = workflowData.workflows?.[tool.id];
  if (!workflow) {
    errors.push(path + ' needs a daily workflow assessment');
    continue;
  }
  if (!Array.isArray(workflow.dailyTasks) || workflow.dailyTasks.length < 1 || workflow.dailyTasks.some(value => typeof value !== 'string' || !value.trim())) errors.push(path + ' needs specific daily tasks');
  for (const key of ['surface', 'object', 'blocker']) {
    if (!workflow[key] || typeof workflow[key] !== 'string') errors.push(path + ' workflow.' + key + ' is required');
  }
  if (!allowedSetup.has(workflow.setup?.level)) errors.push(path + ' workflow setup is invalid');
  if (!workflow.setup?.note) errors.push(path + ' workflow setup note is required');
  if (!workflow.setup?.documentation?.label) errors.push(path + ' needs a setup documentation label');
  try { if (new URL(workflow.setup?.documentation?.url).protocol !== 'https:') throw new Error(); } catch { errors.push(path + ' needs an HTTPS setup documentation URL'); }
  for (const action of ['read', 'create', 'modify', 'delete']) {
    if (!allowedAction.has(workflow.actions?.[action])) errors.push(path + ' workflow action ' + action + ' is invalid');
  }
  if (rating.section !== 'Media platforms') {
    for (const capability of capabilityKeys[rating.section] ?? []) {
      if (!allowedAction.has(workflow.capabilities?.[capability])) {
        errors.push(path + ' workflow capability ' + capability + ' is invalid');
      }
    }
  }
  if (!allowedCoverage.has(workflow.coverage?.level)) errors.push(path + ' workflow coverage is invalid');
  if (!workflow.coverage?.note) errors.push(path + ' workflow coverage note is required');
  if (workflow.evidenceBasis && !allowedEvidenceBasis.has(workflow.evidenceBasis)) {
    errors.push(path + ' workflow evidence basis is invalid');
  }
  if (workflow.endpoint) checkUrl(workflow.endpoint, path + ' workflow.endpoint');
  if (workflow.commercial) {
    if (!allowedCommercial.has(workflow.commercial.type)) errors.push(path + ' commercial programme type is invalid');
    if (!workflow.commercial.label || !workflow.commercial.note) errors.push(path + ' workflow commercial programme is incomplete');
    if (workflow.commercial.url) checkUrl(workflow.commercial.url, path + ' workflow commercial.url');
  }
}

for (const id of Object.keys(editorial.ratings || {})) {
  if (!ids.has(id)) errors.push('Editorial rating has no matching tool: ' + id);
}
for (const id of Object.keys(workflowData.workflows || {})) {
  if (!ids.has(id)) errors.push('Workflow assessment has no matching tool: ' + id);
}

for (const id of editorial.meta.featuredTools || []) if (!ids.has(id)) errors.push('Unknown featured tool: ' + id);

const serialised = JSON.stringify([data, editorial, workflowData]);
if (serialised.includes('—')) errors.push('U+2014 em dash is not allowed');
if (data.tools.length < (cms ? 1 : 20)) errors.push('The reference should retain at least 20 high-signal tools');

let catalogueFiles = [];
try {
  catalogueFiles = (await readdir(resolve(root, 'catalogue')))
    .filter((file) => file.endsWith('.md'))
    .map((file) => 'catalogue/' + file);
} catch {
  errors.push('Generated catalogue directory is missing');
}

const markdownFiles = ['README.md', ...catalogueFiles];
const markdownBodies = new Map();
for (const file of markdownFiles) {
  try {
    markdownBodies.set(file, await readFile(resolve(root, file), 'utf8'));
  } catch {
    errors.push('Generated Markdown file is missing: ' + file);
  }
}

const anchorCache = new Map();
const anchorsFor = async (path) => {
  if (anchorCache.has(path)) return anchorCache.get(path);
  const body = markdownBodies.get(path) ?? await readFile(resolve(root, path), 'utf8');
  const anchors = new Set();
  const occurrences = new Map();
  for (const line of body.split('\n')) {
    const heading = line.match(/^#{1,6} (.+)$/)?.[1];
    if (!heading) continue;
    const base = githubAnchor(heading.replace(/[*_`]/g, ''));
    const count = occurrences.get(base) ?? 0;
    anchors.add(count === 0 ? base : base + '-' + count);
    occurrences.set(base, count + 1);
  }
  anchorCache.set(path, anchors);
  return anchors;
};

for (const [file, body] of markdownBodies) {
  for (const match of body.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const href = match[1];
    if (/^(https?:|mailto:)/.test(href) || href.startsWith('../../issues/')) continue;
    const [pathWithQuery, fragment] = href.split('#');
    const relativePath = pathWithQuery.split('?')[0];
    const targetPath = relativePath
      ? resolve(dirname(resolve(root, file)), relativePath)
      : resolve(root, file);
    if (!targetPath.startsWith(root + '/')) {
      errors.push(file + ' local link escapes the repository: ' + href);
      continue;
    }
    const target = targetPath.slice(root.length + 1);
    try {
      await readFile(targetPath);
    } catch {
      errors.push(file + ' local link target is missing: ' + href);
      continue;
    }
    if (fragment && target.endsWith('.md') && !(await anchorsFor(target)).has(fragment)) {
      errors.push(file + ' local link fragment is missing: ' + href);
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => '- ' + error).join('\n'));
  process.exit(1);
}

console.log('Validated ' + data.tools.length + ' tools, evidence fields and generated Markdown navigation.');
