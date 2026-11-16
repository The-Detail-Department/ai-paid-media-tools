# Creative and automation capability audit

## Which routes are official and available?

### Takeaway

All 15 evaluated routes have current vendor documentation. That does not make every operation ready: Figma writing is beta, Adjust is Early Access, Adobe requires organisation service access, and Workato requires configured API roles and excludes China. Segment still needs a custom integration. This is a documentation audit checked on 16 November 2026, with no authentication, live mutation, paid generation or connected-account test.

### Cited Findings

| Route | Evidence and access boundary |
| --- | --- |
| Zapier | The official plugin is distributed for Claude Code, Codex, Cursor and other clients. Hosted MCP exposes app actions; Next Gen Zaps authoring is separately early access. [Plugin](https://github.com/zapier/zapier-mcp), [MCP overview](https://docs.zapier.com/mcp/home). |
| Pipedream | Vendor-hosted MCP servers expose each app's registered actions with managed authorisation. The end-user connection is distinct from embedding Connect in software. [MCP overview](https://pipedream.com/docs/connect/mcp). |
| n8n | The official instance server supports workflow discovery, creation and editing after administrator enablement. Workflow authoring starts at version 2.13.0; tools have individual version gates. [Connection and permissions](https://docs.n8n.io/connect/connect-to-n8n-mcp-server). |
| Figma | Native canvas creation and editing are beta. Supported clients, eligible plans and file edit permissions are required; component publishing remains manual. [Canvas writing](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/). |
| Canva | The everyday AI Connector supports Free and paid accounts, with administrator controls and feature-specific entitlements. It is explicitly different from the developer MCP. [Connector setup](https://www.canva.com/help/mcp-agent-setup/). |
| Adjust | Early Access must be enabled by Adjust. OAuth replaces the old token-based connection. The route retrieves aggregated data, not individual-user or event data. [Adjust MCP](https://help.adjust.com/en/article/adjust-mcp). |
| Twilio Segment | The official Public API supports workspace-resource CRUD on Team and Business plans. Twilio's hosted MCP is a public-beta documentation search/retrieval service, with no API execution. [Segment API](https://www.twilio.com/docs/segment/api/public-api), [Twilio MCP](https://www.twilio.com/docs/ai/mcp). |
| Adobe Firefly Creative Production | Run-Workflow is vendor-hosted and requires an organisation IMS token and service API key. [Setup](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/install-run-workflow-mcp.html). |
| Runway | The official generation app is in the ChatGPT directory and also connects through hosted MCP. It signs into the Runway app account; every generation consumes credits and Unlimited Mode is excluded. [Product](https://runway.com/mcp), [Connection and billing](https://help.runwayml.com/hc/en-us/articles/51931843164691-Connecting-to-Runway-MCP). |
| Ahrefs | The official hosted server is available on Lite and higher plans, including an approved Claude connector. Dataset entitlements and API-unit limits apply. [Access](https://docs.ahrefs.com/en/mcp/docs/introduction), [Claude setup](https://docs.ahrefs.com/en/mcp/docs/claude-desktop-web). |
| Semrush | Eligible subscriptions expose SEO, Trends and read-only Projects data; OAuth is the default. Writes in the broader REST API do not become MCP capabilities. [MCP scope and access](https://developer.semrush.com/api/v3/introduction/semrush-mcp/). |
| Similarweb | Official hosted MCP and Claude connector provide subscribed intelligence datasets. API/MCP-enabled subscriptions and data credits are required. [MCP access](https://docs.similarweb.com/api-v5/mcp-integration/mcp-setup), [Claude connector](https://docs.similarweb.com/api-v5/mcp-integration/available-integrations/claude-integration). |
| Make | The official hosted server runs active/on-demand scenarios and supports scoped management. Running scenarios is available on all plans; management requires a paid plan. [MCP overview](https://developers.make.com/mcp-server). |
| Workato | The official remote MCP exposes enabled Developer/Embedded API operations through API-client roles. Its explicit availability statement excludes China despite a conflicting China URL in the endpoint table. [MCP permissions and regions](https://docs.workato.com/en/mcp/developer-api-mcp). |
| Gumloop | The official hosted server manages agents and related resources. Some operations require a personal key and are unavailable to team-scoped connections. [MCP overview](https://docs.gumloop.com/mcp-server/overview.md). |

### Inferences

The proposed `connection.availability` is a route-level classification: beta for Figma, preview for Adjust, restricted for Adobe and Workato, and generally-available for the other 11. Generally-available means a documented vendor offering, not an account-level test or entitlement guarantee. The connection note preserves remaining account, plan and setup limits. The 15 route-provenance classifications are official; this does not imply Zapier or Pipedream is the native connector maintained by each downstream app.

### Gaps

No route has been connected or executed in this audit. Operational reliability, permissions in a specific customer account, output quality and private tool exposure remain untested. Ancillary SDK and CLI records are supporting context, not the evaluated execution route.

## Which capability claims needed correction?

### Takeaway

Ahrefs was understated; Canva publishing was overclaimed; Zapier's official plugin was missing. Unknown Make and Workato actions should be labelled unverified rather than presented as conditional promises.

### Cited Findings

- **Ahrefs:** project creation, project access/folder changes and project deletion each carry an explicit API + MCP label. Conversely, the checked keyword-delete operation says API only. The proposal changes create/modify/delete from unverified to partial for the specific project objects. [Create](https://docs.ahrefs.com/en/api/reference/management/post-projects), [Update](https://docs.ahrefs.com/en/api/reference/management/patch-update-project), [Delete](https://docs.ahrefs.com/en/api/reference/management/delete-projects), [Keyword deletion](https://docs.ahrefs.com/en/api/reference/management/put-project-keywords-delete).
- **Canva:** the correct everyday-connector inventory documents designs, videos, images, autofill, exports, copying, merging and folders. It does not establish general deletion, brand-template publication or social posting. The previous developer-MCP source is removed from this route and publish becomes unverified. [Everyday connector actions](https://www.canva.com/help/mcp-canva-usage/).
- **Zapier:** the official repository supplies an installable client plugin with onboarding and skills over the hosted MCP. Plugin provenance becomes official and setup becomes native-app/Easy for supported clients. [Official plugin](https://github.com/zapier/zapier-mcp), [Quickstart](https://docs.zapier.com/mcp/get-started/quickstart).
- **n8n:** data-table-column deletion is explicit from version 2.16.0. Delete becomes partial with that object boundary; general workflow deletion stays unverified. Workflow publication and unpublication remain distinct from deletion. [Exact tool reference](https://docs.n8n.io/connect/connect-to-n8n-mcp-server/mcp-server-tools-reference).
- **Make:** the current public MCP guide establishes read/modify and scenario execution, but not an exact create/delete/activate inventory. Those three action categories become unverified. Existing scenario execution stays documented in the operational summary. [MCP guide](https://developers.make.com/mcp-server).
- **Workato:** its connection guide names list folders, create project/folder and update folder as enabled-role examples. A specific delete or recipe-deploy MCP operation was not established, so those fields become unverified. [Configured tools and role boundary](https://docs.workato.com/en/mcp/developer-api-mcp).
- **Semrush:** the MCP explicitly limits Projects API access to reads and excludes other project actions, so deletion is No rather than unverified. [MCP data coverage](https://developer.semrush.com/api/v3/introduction/semrush-mcp/).
- **Runway:** replace the internal instruction about borrowing Dev-server capabilities with a reader-facing credit and management limitation. Generation and reference-based transformation remain documented; general library management, deletion and publishing remain unverified. [Generation examples](https://runway.com/mcp), [Credit rules](https://help.runwayml.com/hc/en-us/articles/51931843164691-Connecting-to-Runway-MCP).
- **Adobe:** the current inventory distinguishes composition, execution, status, cancellation and reusable-workflow publication. It contains no deletion tool. Publication is of a reusable workflow, not advertising distribution. [Tool reference](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/run-workflow-mcp-tools.html).
- **Gumloop:** the agent inventory explicitly lists create/update/delete and trigger create/update/delete. Its personal-key restrictions remain visible, and a trigger/run is not claimed as arbitrary visual-flow publication. [Agent tools](https://docs.gumloop.com/mcp-server/tools/agents), [Scope restrictions](https://docs.gumloop.com/mcp-server/overview.md).
- **Pipedream:** app-level reads/writes remain partial or dependent on the selected action catalogue; the MCP overview does not establish general Pipedream workflow authoring. [App-specific actions](https://pipedream.com/docs/connect/mcp).

### Inferences

Proposed editorial grade changes: Ahrefs C+ to B for documented but bounded project writes; Make B+ to B for incomplete creation/deletion/activation evidence. Make and Workato move from Production to Test because material write boundaries still need a controlled test. Other grades stay unchanged. These are editorial judgements under the existing combined read/write/setup rubric, not measured product-quality scores.

### Gaps

Creation/modification/deletion for Similarweb remain unverified, while the research reads are established. Adjust's documented job stays aggregate-data retrieval. No unsupported account mutation is inferred for either. Canva's official pages disagree about some autofill plan details, so the record uses a feature-specific plan warning rather than a universal Enterprise-only or universal paid-plan guarantee.

## What proof remains incomplete?

### Takeaway

Every assigned route was rechecked, but a documentation check cannot prove that every action will run for every account. Unknowns and access conditions must remain visible next to the relevant action.

### Cited Findings

- Make directs users to inspect their authenticated tool list to see the exact available tool inventory. This audit did not authenticate. [Tool discovery instructions](https://developers.make.com/mcp-server).
- Ahrefs warns that its external MCP must be used through supported AI clients, not custom scripts or standalone HTTP clients. No direct MCP calls were attempted. [Connection usage terms](https://docs.ahrefs.com/en/mcp/docs/introduction).
- Figma explicitly recommends testing beta canvas writes on duplicates and reviewing the result. [Beta constraints](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/).

### Inferences

A positive route label should say documented official access, not imply executed or production-proven. A high letter grade must not suppress beta, restricted access, missing actions or custom-build warnings. Source dates belong with evidence; they are not proof of platform-wide feature completeness.

### Gaps

The Adobe tools URL initially failed retrieval but loaded through its official overview link; its complete tool table was then inspected. Gumloop's agents `.md` URL failed, while the canonical HTML route loaded. A guessed historical Segment MCP path failed; the record uses the accessible current Twilio documentation and the actual Segment API. Public Make searches did not establish the missing MCP create/delete/activate mapping, so unrelated REST API features were not imported.
