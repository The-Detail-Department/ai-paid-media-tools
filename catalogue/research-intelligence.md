# Research and intelligence

External research systems judged on discovery, retrieval, comparison, analysis and export.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Ahrefs](#ahrefs) | **B** | Reference | Production | Easy | Yes | Partial | Partial | Partial | No | Some steps |
| [Semrush](#semrush) | **C+** | Reference | Production | Easy | Yes | No | No | No | No | Assist only |
| [Similarweb](#similarweb) | **C+** | Reference | Production | Easy | Yes | Unverified | Unverified | Unverified | No | Assist only |
| [DataForSEO](#dataforseo) | **C+** | Specialist | Production | Moderate | Yes | Partial | No | Unverified | No | Assist only |

## Ahrefs

**B · Production · Reference**

Retrieve keyword, backlink, domain and SEO research reports. Create, organise and delete Ahrefs projects. Website publishing is outside this route.

**Day to day**

- Retrieve keyword, backlink, domain and SEO research reports.
- Create, organise and delete Ahrefs projects. Website publishing is outside this route.

> **What still needs you:** Project management does not edit a website. Some keyword mutations remain API-only; dataset and API-unit limits apply.

- **Route:** Ahrefs Claude connector + hosted MCP.
- **Scope:** Retrieve keyword, backlink, domain and SEO research reports..
- **Setup:** Easy. Install the Claude connector with Lite-or-higher Ahrefs access. [Ahrefs MCP access](https://docs.ahrefs.com/en/mcp/docs/introduction).
- **Human job:** Find the right market evidence, retrieve it, compare competitors or queries, analyse patterns and export the evidence.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **Partial** · Delete **Partial** · Publish / activate **No**
- **Read:** Retrieve keyword, backlink, domain and SEO research reports.
- **Write:** Create, organise and delete Ahrefs projects. Website publishing is outside this route.
- **Connection type:** native-app
- **Connection status:** official · generally-available. Official Claude connector and hosted MCP on Lite or higher plans. Permissions, API-unit and dataset limits apply.
- **Review:** current
- **read:** Retrieve keyword, backlink, domain and SEO research reports.
- **create:** Create Ahrefs projects through the MCP-enabled Add Projects operation.
- **modify:** Change project access and move or remove projects from folders.
- **delete:** Delete Ahrefs projects. Keyword deletion is API-only in the reviewed reference.
- **publish:** Not a content publishing route.
- **Coverage:** Some steps. Create, organise and delete Ahrefs projects. Website publishing is outside this route. Project management does not edit a website. Some keyword mutations remain API-only; dataset and API-unit limits apply.
- **Evidence basis:** Documentation reviewed

**Good**

- Retrieve keyword, backlink, domain and SEO research reports.
- Create, organise and delete projects through explicitly MCP-enabled endpoints.

**Limits**

- Project management does not edit a website. Some keyword mutations remain API-only; dataset and API-unit limits apply.

**Official links**

- **Product / official page:** [Ahrefs MCP](https://ahrefs.com/mcp/)
- **AI interface / endpoint:** [Ahrefs Claude connector + hosted MCP](https://docs.ahrefs.com/en/mcp/docs/introduction)
- **MCP:** [Ahrefs Claude connector + hosted MCP](https://docs.ahrefs.com/en/mcp/docs/introduction)
- **Plugin:** [Official app or directory connector](https://docs.ahrefs.com/en/mcp/docs/introduction)
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Ahrefs API](https://docs.ahrefs.com/docs/api/reference/introduction)
- **Documentation:** [Ahrefs MCP access](https://docs.ahrefs.com/en/mcp/docs/introduction)
- **GitHub:** No official repository verified

- **Access:** Lite plan or higher, monthly API units and per-request row limits.
- **Watch:** Project management does not edit a website. Some keyword mutations remain API-only; dataset and API-unit limits apply.
- **Sources:** [Ahrefs MCP access](https://docs.ahrefs.com/en/mcp/docs/introduction) · [Ahrefs Claude connector](https://docs.ahrefs.com/en/mcp/docs/claude-desktop-web) · [Ahrefs MCP tool groups](https://docs.ahrefs.com/en/mcp/docs/tool-categories) · [Create projects through MCP](https://docs.ahrefs.com/en/api/reference/management/post-projects) · [Update projects through MCP](https://docs.ahrefs.com/en/api/reference/management/patch-update-project) · [Delete projects through MCP](https://docs.ahrefs.com/en/api/reference/management/delete-projects)
- **Last checked:** 16 Nov 2026

[Back to comparison](#research-and-intelligence)

## Semrush

**C+ · Production · Reference**

Read SEO, Trends and supported Projects reports. Read-only; project creation and settings changes are excluded.

**Day to day**

- Read SEO, Trends and supported Projects reports.

> **What still needs you:** MCP does not inherit wider REST API mutations; API units and subscribed datasets apply.

- **Route:** Semrush ChatGPT app + hosted MCP.
- **Scope:** Read SEO, Trends and supported Projects reports..
- **Setup:** Easy. Connect the official ChatGPT app, or configure the hosted OAuth MCP in another supported client. [Semrush MCP actions and access](https://developer.semrush.com/api/v3/introduction/semrush-mcp/).
- **Human job:** Find the right market evidence, retrieve it, compare competitors or queries, analyse patterns and export the evidence.
- **Capabilities:** Read **Yes** · Create **No** · Edit **No** · Delete **No** · Publish / activate **No**
- **Read:** Read SEO, Trends and supported Projects reports.
- **Write:** Read-only; project creation and settings changes are excluded.
- **Connection type:** native-app
- **Connection status:** official · generally-available. Official app and hosted MCP. An eligible SEO or Trends plan and API units are required.
- **Review:** current
- **read:** Read SEO, Trends and supported Projects reports.
- **create:** Project creation is explicitly excluded.
- **modify:** Project settings changes are explicitly excluded.
- **delete:** The MCP exposes read-only Projects API methods.
- **publish:** Not a content publishing route.
- **Coverage:** Assist only. Read-only; project creation and settings changes are excluded. MCP does not inherit wider REST API mutations; API units and subscribed datasets apply.
- **Evidence basis:** Documentation reviewed

**Good**

- Read SEO, Trends and supported Projects reports.
- Read-only; project creation and settings changes are excluded.

**Limits**

- MCP does not inherit wider REST API mutations; API units and subscribed datasets apply.

**Official links**

- **Product / official page:** [Semrush MCP](https://www.semrush.com/mcp/)
- **AI interface / endpoint:** [Semrush ChatGPT app + hosted MCP](https://developer.semrush.com/api/v3/introduction/semrush-mcp/)
- **MCP:** [Semrush ChatGPT app + hosted MCP](https://developer.semrush.com/api/v3/introduction/semrush-mcp/)
- **Plugin:** [Official app or directory connector](https://developer.semrush.com/api/v3/introduction/semrush-mcp/)
- **CLI:** No dedicated official Semrush CLI verified
- **API / SDK:** [Semrush API](https://developer.semrush.com/api/)
- **Documentation:** [Semrush MCP actions and access](https://developer.semrush.com/api/v3/introduction/semrush-mcp/)
- **GitHub:** No official repository verified

- **Access:** Eligible SEO plans include API units; higher tiers may require a separate unit package. Traffic and Market data requires a Trends API subscription.
- **Watch:** MCP does not inherit wider REST API mutations; API units and subscribed datasets apply.
- **Sources:** [Semrush MCP actions and access](https://developer.semrush.com/api/v3/introduction/semrush-mcp/)
- **Last checked:** 16 Nov 2026

[Back to comparison](#research-and-intelligence)

## Similarweb

**C+ · Production · Reference**

Read website/app, audience, traffic, search and commerce intelligence. No account, campaign or content writes established.

**Day to day**

- Read website/app, audience, traffic, search and commerce intelligence.

> **What still needs you:** The connector exposes subscribed datasets only and consumes data credits.

- **Route:** Similarweb Claude connector.
- **Scope:** Read website/app, audience, traffic, search and commerce intelligence..
- **Setup:** Easy. Install the official Claude connector and authorise access to subscribed datasets. [Similarweb MCP datasets and access](https://docs.similarweb.com/api-v5/mcp-integration/mcp-setup).
- **Human job:** Find the right market evidence, retrieve it, compare competitors or queries, analyse patterns and export the evidence.
- **Capabilities:** Read **Yes** · Create **Unverified** · Edit **Unverified** · Delete **Unverified** · Publish / activate **No**
- **Read:** Read website/app, audience, traffic, search and commerce intelligence.
- **Write:** No account, campaign or content writes established.
- **Connection type:** native-app
- **Connection status:** official · generally-available. Official hosted connector requires API/MCP access on an eligible subscription and consumes data credits.
- **Review:** current
- **read:** Read website/app, audience, traffic, search and commerce intelligence.
- **create:** Creation tools are not documented for this route.
- **modify:** Editing tools are not documented for this route.
- **delete:** Deletion tools are not documented for this route.
- **publish:** Not a content publishing route.
- **Coverage:** Assist only. No account, campaign or content writes established. The connector exposes subscribed datasets only and consumes data credits.
- **Evidence basis:** Documentation reviewed

**Good**

- Read website/app, audience, traffic, search and commerce intelligence.
- No account, campaign or content writes established.

**Limits**

- The connector exposes subscribed datasets only and consumes data credits.

**Official links**

- **Product / official page:** [Similarweb](https://www.similarweb.com/)
- **AI interface / endpoint:** [Similarweb Claude connector](https://docs.similarweb.com/api-v5/mcp-integration/mcp-setup)
- **MCP:** [Similarweb Claude connector](https://docs.similarweb.com/api-v5/mcp-integration/mcp-setup)
- **Plugin:** [Official app or directory connector](https://docs.similarweb.com/api-v5/mcp-integration/mcp-setup)
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Similarweb API v5](https://docs.similarweb.com/api-v5)
- **Documentation:** [Similarweb MCP datasets and access](https://docs.similarweb.com/api-v5/mcp-integration/mcp-setup)
- **GitHub:** No official repository verified

- **Access:** API-only, Business or Enterprise subscription with API/MCP access. Data credits apply; plan limits datasets, regions and historical ranges.
- **Watch:** The connector exposes subscribed datasets only and consumes data credits.
- **Sources:** [Similarweb MCP datasets and access](https://docs.similarweb.com/api-v5/mcp-integration/mcp-setup) · [Similarweb Claude connector](https://docs.similarweb.com/api-v5/mcp-integration/available-integrations/claude-integration)
- **Last checked:** 16 Nov 2026

[Back to comparison](#research-and-intelligence)

## DataForSEO

**C+ · Production · Specialist**

Retrieve SERP, keyword, backlink and competitor research data. Submit billable research tasks; no campaign or website mutations.

**Day to day**

- Retrieve SERP, keyword, backlink and competitor research data.

> **What still needs you:** Research execution is not campaign control; API endpoint costs and allowances apply.

- **Route:** DataForSEO v3 MCP.
- **Scope:** Retrieve SERP, keyword, backlink and competitor research data..
- **Setup:** Moderate. Connect the hosted v3 MCP with OAuth and a funded DataForSEO account. [Connect DataForSEO](https://github.com/dataforseo/mcp-server-typescript).
- **Human job:** Find the right market evidence, retrieve it, compare competitors or queries, analyse patterns and export the evidence.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **No** · Delete **Unverified** · Publish / activate **No**
- **Read:** Retrieve SERP, keyword, backlink and competitor research data.
- **Write:** Submit billable research tasks; no campaign or website mutations.
- **Connection type:** hosted-mcp
- **Connection status:** official · generally-available. Official hosted service; paid API usage and endpoint allowances apply.
- **Review:** current
- **read:** Retrieve SERP, keyword, backlink and competitor research data.
- **create:** Billable research/API tasks only.
- **modify:** No campaign or website edits established.
- **delete:** Deletion capabilities are unverified.
- **publish:** No content or advertising publication.
- **Coverage:** Assist only. Submit billable research tasks; no campaign or website mutations. Research execution is not campaign control; API endpoint costs and allowances apply.
- **Evidence basis:** Documentation reviewed

**Good**

- Retrieve SERP, keyword, backlink and competitor research data.
- Submit billable research tasks; no campaign or website mutations.

**Limits**

- Research execution is not campaign control; API endpoint costs and allowances apply.

**Official links**

- **Product / official page:** [DataForSEO v3 MCP and CLI](https://github.com/dataforseo/mcp-server-typescript)
- **AI interface / endpoint:** [DataForSEO v3 hosted research MCP](https://github.com/dataforseo/mcp-server-typescript)
- **MCP:** [DataForSEO v3 hosted research MCP](https://github.com/dataforseo/mcp-server-typescript)
- **Plugin:** No separate official plugin verified
- **CLI:** [Official CLI in the MCP package](https://github.com/dataforseo/mcp-server-typescript)
- **API / SDK:** [DataForSEO APIs and clients](https://docs.dataforseo.com/v3/)
- **Documentation:** [DataForSEO v3 MCP and CLI](https://github.com/dataforseo/mcp-server-typescript)
- **GitHub:** [DataForSEO v3 MCP and CLI](https://github.com/dataforseo/mcp-server-typescript)

- **Access:** DataForSEO account, API access and funding/entitlement for the requested endpoint; compatible remote MCP client.
- **Watch:** Research execution is not campaign control; API endpoint costs and allowances apply.
- **Sources:** [DataForSEO v3 MCP and CLI](https://github.com/dataforseo/mcp-server-typescript)
- **Last checked:** 16 Nov 2026

[Back to comparison](#research-and-intelligence)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
