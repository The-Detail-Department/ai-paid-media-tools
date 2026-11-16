# Measurement

Collection, tagging and attribution systems judged on implementation, validation and operational monitoring.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Google Tag Manager](#google-tag-manager) | **B+** | Reference | Production | Moderate | Yes | Yes | Yes | Yes | Yes | Most steps |
| [AppsFlyer](#appsflyer) | **B** | Reference | Test | Moderate | Yes | Partial | No | No | No | Some steps |
| [Adjust](#adjust) | **C+** | Reference | Test | Moderate | Yes | Unverified | Unverified | Unverified | Unverified | Assist only |
| [Twilio Segment](#twilio-segment) | **C** | Reference | Production | Hard | Yes | Yes | Yes | Yes | Unverified | Some steps |

## Google Tag Manager

**B+ · Production · Reference**

Read accounts, containers, workspaces, tags and versions. Change configuration, create previews and publish container versions.

**Day to day**

- Read accounts, containers, workspaces, tags and versions.
- Change configuration, create previews and publish container versions.

> **What still needs you:** Stape is a third party; publication does not verify tracking or consent. Commercial limits remain unverified.

- **Route:** Stape hosted GTM MCP (third-party).
- **Scope:** Read accounts, containers, workspaces, tags and versions..
- **Setup:** Moderate. Connect Stape hosted MCP with Google OAuth and the required GTM rights. [Connection documentation](https://github.com/stape-io/google-tag-manager-mcp-server).
- **Human job:** Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Yes** · Publish / activate **Yes**
- **Read:** Read accounts, containers, workspaces, tags and versions.
- **Write:** Change configuration, create previews and publish container versions.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read accounts, containers, workspaces, tags and versions.
- **create:** Tags, workspaces, previews and versions.
- **modify:** Tags, workspaces and versions, including synchronisation.
- **delete:** Supported tags, workspaces and versions.
- **publish:** Container versions with publish permission.
- **Coverage:** Most steps. Change configuration, create previews and publish container versions. Stape is a third party; publication does not verify tracking or consent. Commercial limits remain unverified.
- **Evidence basis:** Documentation reviewed

**Good**

- Read accounts, containers, workspaces, tags and versions.
- Change configuration, create previews and publish container versions.

**Limits**

- Stape is a third party; publication does not verify tracking or consent. Commercial limits remain unverified.

**Official links**

- **Product / official page:** [Additional official documentation](https://developers.google.com/tag-platform/tag-manager/api/v2)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** [Third-party, Stape](https://github.com/stape-io/google-tag-manager-mcp-server)
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Tag Manager API](https://developers.google.com/tag-platform/tag-manager/api/v2)
- **Documentation:** [Additional official documentation](https://developers.google.com/tag-platform/tag-manager/api/v2)
- **GitHub:** [Vendor source code](https://github.com/stape-io/google-tag-manager-mcp-server)

- **Access:** Google account must have the relevant GTM permissions, particularly publish rights. Hosted traffic passes through Stape; local CLI is an alternative. AI workspace policy can restrict custom connectors.
- **Watch:** Stape is a third party; publication does not verify tracking or consent. Commercial limits remain unverified.
- **Sources:** [Vendor source code](https://github.com/stape-io/google-tag-manager-mcp-server) · [Vendor source code](https://github.com/stape-io/google-tag-manager-mcp-server/blob/main/packages/core/src/tools/tagActions.ts) · [Vendor source code](https://github.com/stape-io/google-tag-manager-mcp-server/blob/main/packages/core/src/tools/versionActions.ts) · [Vendor source code](https://github.com/stape-io/google-tag-manager-mcp-server/blob/main/packages/core/src/tools/workspaceActions.ts) · [Additional official documentation](https://developers.google.com/tag-platform/tag-manager/api/v2)
- **Last checked:** 16 Nov 2026

[Back to comparison](#measurement)

## AppsFlyer

**B · Test · Reference**

Read aggregate performance, creative, SKAN and configuration data. Create OneLink short links under existing templates, with confirmation.

**Day to day**

- Read aggregate performance, creative, SKAN and configuration data.
- Create OneLink short links under existing templates, with confirmation.

> **What still needs you:** Beta: ten links per account per day; no wider account-editing MCP tools documented.

- **Route:** AppsFlyer official hosted MCP.
- **Scope:** Read aggregate performance, creative, SKAN and configuration data..
- **Setup:** Moderate. Connect the hosted MCP with OAuth; permissions and beta availability apply. [Connection documentation](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP).
- **Human job:** Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **No** · Delete **No** · Publish / activate **No**
- **Read:** Read aggregate performance, creative, SKAN and configuration data.
- **Write:** Create OneLink short links under existing templates, with confirmation.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read aggregate performance, creative, SKAN and configuration data.
- **create:** OneLink links under existing templates.
- **modify:** No edit tool documented for this route.
- **delete:** No delete tool documented for this route.
- **publish:** Link creation is not campaign activation.
- **Coverage:** Some steps. Create OneLink short links under existing templates, with confirmation. Beta: ten links per account per day; no wider account-editing MCP tools documented.
- **Evidence basis:** Documentation reviewed

**Good**

- Read aggregate performance, creative, SKAN and configuration data.
- Create OneLink short links under existing templates, with confirmation.

**Limits**

- Beta: ten links per account per day; no wider account-editing MCP tools documented.

**Official links**

- **Product / official page:** [AppsFlyer MCP](https://www.appsflyer.com/products/agentic-ai/mcp/)
- **AI interface / endpoint:** [AppsFlyer official hosted MCP](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP)
- **MCP:** [AppsFlyer official hosted MCP](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [AppsFlyer developer hub](https://dev.appsflyer.com/hc)
- **Documentation:** [Connection and tool documentation](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP)
- **GitHub:** No official repository verified

- **Access:** Beta; existing AppsFlyer permissions apply. MCP is enabled by default but an admin can disable it. Account-level bearer tokens are available for automation.
- **Watch:** Beta: ten links per account per day; no wider account-editing MCP tools documented.
- **Sources:** [Connection and tool documentation](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP) · [Additional official documentation](https://www.appsflyer.com/company/newsroom/pr/agentic-ai-mcp-tools)
- **Last checked:** 16 Nov 2026

[Back to comparison](#measurement)

## Adjust

**C+ · Test · Reference**

Read aggregate Adjust performance data. No Adjust account mutations are documented for this MCP.

**Day to day**

- Read aggregate Adjust performance data.

> **What still needs you:** Early Access requires enablement; no user-level or event-level data.

- **Route:** Adjust official hosted MCP.
- **Scope:** Read aggregate Adjust performance data..
- **Setup:** Moderate. Ask Adjust to enable access, then connect the custom OAuth connector. [Connection documentation](https://help.adjust.com/en/article/adjust-mcp).
- **Human job:** Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.
- **Capabilities:** Read **Yes** · Create **Unverified** · Edit **Unverified** · Delete **Unverified** · Publish / activate **Unverified**
- **Read:** Read aggregate Adjust performance data.
- **Write:** No Adjust account mutations are documented for this MCP.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read aggregate Adjust performance data.
- **create:** Not established by the reviewed sources.
- **modify:** Not established by the reviewed sources.
- **delete:** Not established by the reviewed sources.
- **publish:** Not established by the reviewed sources.
- **Coverage:** Assist only. No Adjust account mutations are documented for this MCP. Early Access requires enablement; no user-level or event-level data.
- **Evidence basis:** Documentation reviewed

**Good**

- Read aggregate Adjust performance data.
- Ask Adjust to enable access, then connect the custom OAuth connector.

**Limits**

- Early Access requires enablement; no user-level or event-level data.

**Official links**

- **Product / official page:** [Adjust](https://www.adjust.com/)
- **AI interface / endpoint:** [Adjust official hosted MCP](https://help.adjust.com/en/article/adjust-mcp)
- **MCP:** [Adjust official hosted MCP](https://help.adjust.com/en/article/adjust-mcp)
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Adjust APIs and SDKs](https://dev.adjust.com/en/)
- **Documentation:** [Connection and tool documentation](https://help.adjust.com/en/article/adjust-mcp)
- **GitHub:** No official repository verified

- **Access:** Early Access and account enablement required. Existing token-based configurations must reconnect through OAuth. Multi-account users select the account during authorisation.
- **Watch:** Early Access requires enablement; no user-level or event-level data.
- **Sources:** [Connection and tool documentation](https://help.adjust.com/en/article/adjust-mcp) · [Additional official documentation](https://www.adjust.com/blog/adjust-mcp/)
- **Last checked:** 16 Nov 2026

[Back to comparison](#measurement)

## Twilio Segment

**C · Production · Reference**

Read workspace sources, destinations, warehouses and tracking plans through API. Manage supported workspace resources through a custom API integration.

**Day to day**

- Read workspace sources, destinations, warehouses and tracking plans through API.
- Manage supported workspace resources through a custom API integration.

> **What still needs you:** Twilio docs MCP only retrieves documentation; it cannot access or change the account.

- **Route:** Twilio Segment API, custom integration.
- **Scope:** Read workspace sources, destinations, warehouses and tracking plans through API..
- **Setup:** Hard. Build a server-side API integration with an owner-issued Team/Business token. [Connection documentation](https://www.twilio.com/docs/segment/api/public-api).
- **Human job:** Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Yes** · Publish / activate **Unverified**
- **Read:** Read workspace sources, destinations, warehouses and tracking plans through API.
- **Write:** Manage supported workspace resources through a custom API integration.
- **Connection type:** custom-api
- **Review:** current
- **read:** Read workspace sources, destinations, warehouses and tracking plans through API.
- **create:** Supported workspace resources via API.
- **modify:** Supported workspace resources via API.
- **delete:** Supported workspace resources via API.
- **publish:** Not established by the reviewed sources.
- **Coverage:** Some steps. Manage supported workspace resources through a custom API integration. Twilio docs MCP only retrieves documentation; it cannot access or change the account.
- **Evidence basis:** Documentation reviewed

**Good**

- Read workspace sources, destinations, warehouses and tracking plans through API.
- Manage supported workspace resources through a custom API integration.

**Limits**

- Twilio docs MCP only retrieves documentation; it cannot access or change the account.

**Official links**

- **Product / official page:** [Twilio Segment](https://www.twilio.com/docs/segment)
- **AI interface / endpoint:** [Documentation MCP only; account route uses the API](https://www.twilio.com/docs/ai/mcp)
- **MCP:** [Documentation MCP only; account route uses the API](https://www.twilio.com/docs/ai/mcp)
- **Plugin:** No official agent plugin verified
- **CLI:** No general official workspace CLI verified
- **API / SDK:** [Segment Public API](https://www.twilio.com/docs/segment/api/public-api)
- **Documentation:** [Connection and tool documentation](https://www.twilio.com/docs/segment/api/public-api)
- **GitHub:** No official repository verified

- **Access:** Public API is available to Team and Business tiers; only Workspace Owners can create tokens, assigning owner/member access. US and EU workspaces are supported.
- **Watch:** Twilio docs MCP only retrieves documentation; it cannot access or change the account.
- **Sources:** [Connection and tool documentation](https://www.twilio.com/docs/segment/api/public-api) · [Additional official documentation](https://www.twilio.com/docs/ai/mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#measurement)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
