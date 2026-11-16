# Creative, workflow and research routes: sharing-readiness review

Research date: 16 November 2026. Primary documentation reviewed; no connected account, paid generation or live write was tested. Sources describe documented capability, not hands-on reliability. The companion JSON is the field-level evidence and recommendation handoff.

## How should these routes be compared?

### Takeaway

Keep read, create/edit, publish, delete and setup separate. A hosted service can have a native assistant installation path. `native-app` below means an official app or connector directory path, not local installation or custom server hosting.

### Inferences

Proposed grades apply the requested combined operational rubric: A for substantial read/write with practical setup, B for bounded coverage or heavier setup, C for read-only/narrow routes. Ahrefs, Semrush and Similarweb consequently receive provisional C+ despite strong research value and easy setup. Their existing A- category grades measure something different. Parent should reconcile the shared rubric before publishing a rank change. No grade implies output quality or business results.

### Gaps

Account entitlements, actual installed tool inventory, real execution, client-specific write exposure and service reliability were not tested. An unverified operation is not proof of vendor-wide absence. Native-app availability can vary by account/region.

## zapier: how much work can an external assistant do?

### Takeaway

App actions are practical today; workflow authoring has a separate early-access boundary.

### Cited Findings

The official overview now describes both server modes and Next Gen Zaps creation/deployment through MCP. [Zapier MCP overview and Next Gen Zaps boundary](https://docs.zapier.com/mcp/home); [Zapier MCP access and usage](https://help.zapier.com/hc/en-us/articles/48308034391821-What-is-Zapier-MCP).

### Inferences

Proposed grade: **A-**. Setup: **hosted-mcp**. Broad practical reads and writes with managed authentication; account connections and app-specific gaps remain.

### Gaps

Do not promise general Zap lifecycle management to every account.

## pipedream: how much work can an external assistant do?

### Takeaway

An end user need not build an integration to use the hosted app servers.

### Cited Findings

The vendor explicitly separates consumer MCP use from embedding Connect in a developer application. [Pipedream MCP architecture, consumer route and actions](https://pipedream.com/docs/connect/mcp); [Official app-specific MCP catalogue](https://mcp.pipedream.com).

### Inferences

Proposed grade: **A-**. Setup: **hosted-mcp**. Broad app actions and hosted authentication without custom integration code; individual app coverage still determines the job.

### Gaps

Individual app-tool coverage and workflow-authoring parity remain untested.

## n8n: how much work can an external assistant do?

### Takeaway

This is now an authoring and publishing route, not only an exposed-workflow runner.

### Cited Findings

The tool reference names publish_workflow, unpublish_workflow and creation from validated SDK code. [n8n instance connection, permissions and Cloud setup](https://docs.n8n.io/connect/connect-to-n8n-mcp-server); [n8n exact authoring, test, publish and protection tools](https://docs.n8n.io/connect/connect-to-n8n-mcp-server/mcp-server-tools-reference).

### Inferences

Proposed grade: **B+**. Setup: **hosted-mcp**. Substantial native workflow management, but admin enablement, version differences and credentials increase setup effort.

### Gaps

General workflow deletion was not established; protected instances have extra mutation restrictions.

## figma: how much work can an external assistant do?

### Takeaway

Native design writing is real, but still beta.

### Cited Findings

Official docs describe editable components, variables and layout via use_figma; they also say component publishing remains manual. [Official MCP client catalogue and integrations](https://www.figma.com/mcp-catalog/); [Native canvas write scope and limitations](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/); [Remote server, supported clients and seat conditions](https://developers.figma.com/docs/figma-mcp-server/).

### Inferences

Proposed grade: **B+**. Setup: **native-app**. Broad native editing with simple official integrations, held below A by beta status, supported-client gates and manual publishing.

### Gaps

Supported write client, seat, file permissions and visual quality still need account-specific checking.

## canva: how much work can an external assistant do?

### Takeaway

Everyday design creation/editing has a simple official assistant route.

### Cited Findings

The current tool inventory includes editing transactions, image tools and paid brand-template publishing. [Official Canva ChatGPT plugin setup](https://www.canva.com/help/connect-chatgpt-to-canva/); [Everyday connector access and controls](https://www.canva.com/help/mcp-agent-setup/); [Exact tool inventory and plan limits](https://www.canva.dev/docs/apps/mcp/tools/).

### Inferences

Proposed grade: **A-**. Setup: **native-app**. Substantial read/create/edit/export capability through an official app; publishing and deletion remain narrower than the entire Canva UI.

### Gaps

General file deletion and social publishing were not established.

## adobe-firefly-creative-production: how much work can an external assistant do?

### Takeaway

Agents can compose new workflows, not merely run pre-existing templates.

### Cited Findings

The tools list distinguishes compose, submit, status, cancel and publish. Setup requires organisation-provided credentials. [Run-Workflow MCP creation and execution scope](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/run-workflow-mcp-overview.html); [Exact compose, run, cancel and publish tools](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/run-workflow-mcp-tools.html); [IMS token and service-key requirements](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/install-run-workflow-mcp.html).

### Inferences

Proposed grade: **B+**. Setup: **hosted-mcp**. Useful creative production and reusable workflow authoring, constrained by organisation setup and bounded action coverage.

### Gaps

Cancellation does not mean deletion; publishing saves a reusable workflow, not a social/ad campaign.

## runway: how much work can an external assistant do?

### Takeaway

Use the generation app as the primary marketing route.

### Cited Findings

Official sources separate generation from Runway Dev, and the previous API MCP repository is archived. [Official generation app, account access and credits](https://runway.com/mcp); [Hosted generation endpoint](https://mcp.runwayml.com/); [Separate Runway Dev MCP scope](https://docs.dev.runwayml.com/guides/mcp/); [Old server archived 30 September 2026](https://github.com/runwayml/runway-api-mcp-server).

### Inferences

Proposed grade: **B+**. Setup: **native-app**. Very easy creation route, but bounded generation capabilities and incomplete read/edit/publish/delete coverage prevent a universal A claim.

### Gaps

General library reads, timeline edits and deletion in the generation app remain unverified.

## ahrefs: how much work can an external assistant do?

### Takeaway

Excellent low-friction research access is still a read-only offering in this review.

### Cited Findings

Official docs offer a native Claude connector and specify Lite-or-higher access with API-unit limits. [Ahrefs MCP access and unit limits](https://docs.ahrefs.com/en/mcp/docs/introduction); [Native Claude connector installation](https://docs.ahrefs.com/en/mcp/docs/claude-desktop-web); [Official research tool categories](https://docs.ahrefs.com/en/mcp/docs/tool-categories).

### Inferences

Proposed grade: **C+**. Setup: **native-app**. Under the requested uniform read/write/setup rubric: excellent simple research access, but no write workflow. This is not an assessment of SEO-data quality.

### Gaps

No operational write route established; reconcile grade meaning before publication.

## semrush: how much work can an external assistant do?

### Takeaway

The official ChatGPT app removes setup friction but not the explicit read-only boundary.

### Cited Findings

Semrush expressly excludes project creation/settings changes from its MCP Projects API coverage. [MCP read-only Projects boundary, ChatGPT app and units](https://developer.semrush.com/api/v3/introduction/semrush-mcp/); [Official Semrush MCP product route](https://www.semrush.com/mcp/).

### Inferences

Proposed grade: **C+**. Setup: **native-app**. Strong research and simplest setup, but explicitly no account/project mutations under the requested combined rubric.

### Gaps

Do not inherit mutations from its separate REST API.

## similarweb: how much work can an external assistant do?

### Takeaway

Native Claude installation makes intelligence retrieval easy.

### Cited Findings

The vendor says connector coverage follows subscribed datasets and consumes data credits. [MCP endpoint, access and credit model](https://docs.similarweb.com/api-v5/mcp-integration/mcp-setup); [Native connector and dataset limits](https://docs.similarweb.com/api-v5/mcp-integration/available-integrations/claude-integration).

### Inferences

Proposed grade: **C+**. Setup: **native-app**. Easy, broad intelligence reads but no writes under the uniform rubric; not a rating of data quality or usefulness.

### Gaps

No advertising-account or content mutations established.

## make: how much work can an external assistant do?

### Takeaway

Hosted MCP combines run access and broader paid management.

### Cited Findings

Current documentation uses the /v2 endpoint and separates scenario-run tools from paid management tools. [Current v2 endpoint, scope/plan split and management coverage](https://developers.make.com/mcp-server); [OAuth setup](https://developers.make.com/mcp-server/connect-using-oauth).

### Inferences

Proposed grade: **A-**. Setup: **hosted-mcp**. Hosted connection and broad automation management; paid/scoped tool availability and downstream credentials constrain completeness.

### Gaps

Exact create/delete/activation coverage requires tool inventory; do not infer universal API parity.

## workato: how much work can an external assistant do?

### Takeaway

There are two useful routes: workspace API management and curated enterprise business tools.

### Cited Findings

The Developer/Embedded API MCP exposes role-enabled endpoints and concrete asset-management examples. [Enterprise/custom server routes and regional availability](https://docs.workato.com/mcp); [Developer API remote route, tokens and actual examples](https://docs.workato.com/en/mcp/developer-api-mcp).

### Inferences

Proposed grade: **B**. Setup: **hosted-mcp**. Useful scoped workspace and business operations, with materially heavier administration than simple native connectors.

### Gaps

Admin/token provisioning and endpoint scopes remain material; generic product breadth is not a tool guarantee.

## gumloop: how much work can an external assistant do?

### Takeaway

The previous no-external-MCP caveat is stale.

### Cited Findings

The newly documented external server covers management and execution; agent tools explicitly create, update and delete agents. [Official external management MCP and scope restrictions](https://docs.gumloop.com/mcp-server/overview.md); [Custom connector and authentication](https://docs.gumloop.com/mcp-server/setup); [Agent CRUD and configuration](https://docs.gumloop.com/mcp-server/tools/agents).

### Inferences

Proposed grade: **A-**. Setup: **hosted-mcp**. Broad agent management and execution through a hosted connector; scope restrictions and incomplete flow authoring remain.

### Gaps

Personal versus team key restrictions matter; full visual-flow authoring is not established.
