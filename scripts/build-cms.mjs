import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root = new URL('../', import.meta.url);
const read = async name => JSON.parse(await readFile(new URL(`data/cms-${name}.json`, root), 'utf8'));
const [tools, ratings, workflows] = await Promise.all(['tools', 'ratings', 'workflows'].map(read));
const safe = value => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const lines = ['# The AI CMS Index', '', 'CMS platforms and their AI/LLM workflows. The assessment belongs to the named route, not the whole product.', '', `Catalogue updated: ${tools.meta.updatedOn}. Editorial lead: [Léon Houlier](https://github.com/leonhoulier).`, '', 'All entries: **Documentation reviewed**. No account connection or executed workflow is claimed. [Methodology](../METHODOLOGY.md#cms-companion).', '', '| Platform | Route | Grade | Readiness | Read | Draft | Edit | Publish | Localise |', '| --- | --- | --- | --- | --- | --- | --- | --- | --- |'];
for (const tool of tools.tools) {
 const w = workflows.workflows[tool.id], r = ratings.ratings[tool.id];
 lines.push(`| ${[tool.name,w.surface,r.grade,r.readiness,...Object.values(w.capabilities)].map(safe).join(' | ')} |`);
}
for (const t of tools.tools) {
 const w = workflows.workflows[t.id], r = ratings.ratings[t.id];
 lines.push('', `## ${t.name}`, '', t.summary, '', `Reviewed: ${t.verifiedOn}. ${w.evidenceBasis}.`, '', '**Day to day**', '', ...w.dailyTasks.map(x=>'- '+x), '', `**Route:** ${w.surface}. **Setup:** ${w.setup.level}. ${w.setup.note}`, '', `**Coverage:** ${w.coverage.level}. ${w.coverage.note}`, '', `**Boundary:** ${w.blocker}`, '', '**Strengths**', '', ...r.positives.map(x=>'- '+x), '', '**Limits**', '', ...r.negatives.map(x=>'- '+x), '', '**Official sources**', '', ...t.sources.map(x=>`- [${x.label}](${x.url})`));
}
const body=lines.join('\n')+'\n';
const target=new URL('catalogue/cms.md',root);
if(process.argv.includes('--check')) {
 if(await readFile(target,'utf8')!==body) throw new Error('Generated CMS catalogue is stale');
} else {
 await mkdir(new URL('catalogue/',root),{recursive:true});
 await writeFile(target,body);
}
console.log(`CMS catalogue: ${tools.tools.length} records validated for generated output.`);
