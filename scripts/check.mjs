import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(await readFile(resolve(root, 'data/tools.json'), 'utf8'));
const editorial = JSON.parse(await readFile(resolve(root, 'data/ratings.json'), 'utf8'));
const workflowData = JSON.parse(await readFile(resolve(root, 'data/workflows.json'), 'utf8'));
const errors = [];
const allowedProvenance = new Set(['official', 'community', 'none']);
const allowedMaturity = new Set(['available', 'beta', 'preview', 'restricted', 'none-verified']);
const allowedMode = new Set(['remote', 'local', 'both', 'none']);
const allowedControl = new Set(['read-only', 'read-write', 'mixed', 'not-stated', 'none']);
const interfaceNames = ['mcp', 'plugin', 'cli', 'developer'];
const allowedReadiness = new Set(['Production', 'Test', 'Research']);
const allowedSections = new Set([
  'Media platforms',
  'Analytics and measurement',
  'Creative and images',
  'Data and research',
  'Automation and workflow',
  'Modelling and experimentation'
]);
const gradePattern = /^(A\+|A|A-|B\+|B|B-|C\+|C|C-|D|F)$/;
const allowedSetup = new Set(['Easy', 'Moderate', 'Hard', 'Specialist']);
const allowedAction = new Set(['Yes', 'Partial', 'No', 'Depends', 'N/A', 'Unverified']);
const allowedCoverage = new Set(['Broad', 'Partial', 'Narrow', 'Configurable', 'Specialist']);
const allowedCommercial = new Set(['Affiliate', 'Referral', 'Partner', 'Retired', 'None verified']);

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
  for (const key of ['surface', 'object', 'blocker']) {
    if (!workflow[key] || typeof workflow[key] !== 'string') errors.push(path + ' workflow.' + key + ' is required');
  }
  if (!allowedSetup.has(workflow.setup?.level)) errors.push(path + ' workflow setup is invalid');
  if (!workflow.setup?.note) errors.push(path + ' workflow setup note is required');
  for (const action of ['read', 'create', 'modify', 'delete']) {
    if (!allowedAction.has(workflow.actions?.[action])) errors.push(path + ' workflow action ' + action + ' is invalid');
  }
  if (!allowedCoverage.has(workflow.coverage?.level)) errors.push(path + ' workflow coverage is invalid');
  if (!workflow.coverage?.note) errors.push(path + ' workflow coverage note is required');
  if (!allowedCommercial.has(workflow.commercial?.type)) errors.push(path + ' commercial programme type is invalid');
  if (!workflow.commercial?.label || !workflow.commercial?.note) errors.push(path + ' commercial programme label and note are required');
  if (workflow.commercial?.url) checkUrl(workflow.commercial.url, path + ' workflow commercial.url');
}

for (const id of Object.keys(editorial.ratings || {})) {
  if (!ids.has(id)) errors.push('Editorial rating has no matching tool: ' + id);
}
for (const id of Object.keys(workflowData.workflows || {})) {
  if (!ids.has(id)) errors.push('Workflow assessment has no matching tool: ' + id);
}

const serialised = JSON.stringify([data, editorial, workflowData]);
if (serialised.includes('—')) errors.push('U+2014 em dash is not allowed');
if (data.tools.length < 20) errors.push('The reference should retain at least 20 high-signal tools');

if (errors.length) {
  console.error(errors.map((error) => '- ' + error).join('\n'));
  process.exit(1);
}

console.log('Validated ' + data.tools.length + ' tools and their evidence fields.');
