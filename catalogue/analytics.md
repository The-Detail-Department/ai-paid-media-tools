# Analytics

Analytics products judged on whether an agent can investigate performance and leave useful analysis behind.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Adobe Customer Journey Analytics](#adobe-customer-journey-analytics) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | No | Unverified | Most steps |
| [Amplitude](#amplitude) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | No | Most steps |
| [Mixpanel](#mixpanel) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Yes | Unverified | Most steps |
| [Adobe Analytics](#adobe-analytics) | **B+** | Reference | Production | Moderate | Yes | Yes | Yes | No | Unverified | Most steps |
| [Google Analytics](#google-analytics) | **B** | Reference | Production | Hard | Yes | Partial | No | No | No | Some steps |
| [PostHog](#posthog) | **A** | Emerging | Production | Easy | Yes | Yes | Yes | Partial | Partial | Most steps |

## Adobe Customer Journey Analytics

**A- · Production · Reference**

Read data views, components, audiences, projects and reports. Create or update analytical components, projects and audiences.

**Day to day**

- Read data views, components, audiences, projects and reports.
- Create or update analytical components, projects and audiences.

> **What still needs you:** No general deletion or connection administration; audience creation does not prove downstream activation.

- **Route:** Adobe CJA Claude directory connector.
- **Scope:** Read data views, components, audiences, projects and reports..
- **Setup:** Moderate. Use the Claude directory connector; product permissions and MCP Full Access still apply. [Connection documentation](https://developer.adobe.com/analytics-mcp/docs/cja/reference).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **No** · Publish / activate **Unverified**
- **Read:** Read data views, components, audiences, projects and reports.
- **Write:** Create or update analytical components, projects and audiences.
- **Connection type:** native-app
- **Review:** current
- **read:** Read data views, components, audiences, projects and reports.
- **create:** Segments, metrics, projects, audiences and date ranges.
- **modify:** Segments, metrics, projects and audiences.
- **delete:** No delete tool in the published catalogue.
- **publish:** Downstream audience activation is not established.
- **Coverage:** Most steps. Create or update analytical components, projects and audiences. No general deletion or connection administration; audience creation does not prove downstream activation.
- **Evidence basis:** Documentation reviewed

**Good**

- Read data views, components, audiences, projects and reports.
- Create or update analytical components, projects and audiences.

**Limits**

- No general deletion or connection administration; audience creation does not prove downstream activation.

**Official links**

- **Product / official page:** [Customer Journey Analytics](https://business.adobe.com/products/customer-journey-analytics/adobe-customer-journey-analytics.html)
- **AI interface / endpoint:** [Adobe CJA Claude directory connector](https://developer.adobe.com/analytics-mcp/docs/cja/reference)
- **MCP:** [Adobe CJA Claude directory connector](https://developer.adobe.com/analytics-mcp/docs/cja/reference)
- **Plugin:** [Official app or directory connector](https://developer.adobe.com/analytics-mcp/docs/cja/reference)
- **CLI:** No dedicated official CJA CLI verified
- **API / SDK:** [CJA APIs](https://developer.adobe.com/cja-apis/docs/)
- **Documentation:** [Connection and tool documentation](https://developer.adobe.com/analytics-mcp/docs/cja/reference)
- **GitHub:** No official repository verified

- **Access:** CJA entitlement, relevant data-view/component permissions and MCP Read-only or Full Access. Writes require Full Access and underlying action permissions; product admins automatically receive Full Access.
- **Watch:** No general deletion or connection administration; audience creation does not prove downstream activation.
- **Sources:** [Connection and tool documentation](https://developer.adobe.com/analytics-mcp/docs/cja/reference) · [Additional official documentation](https://developer.adobe.com/analytics-mcp/docs/guides/permissions) · [Additional official documentation](https://developer.adobe.com/analytics-mcp/docs/guides/claude)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## Amplitude

**A- · Production · Reference**

Query analytics and inspect charts, cohorts, experiments and taxonomy. Create and edit analytical content and tracking definitions.

**Day to day**

- Query analytics and inspect charts, cohorts, experiments and taxonomy.
- Create and edit analytical content and tracking definitions.

> **What still needs you:** Guides/surveys stop at drafts; definition changes do not ingest production events.

- **Route:** Amplitude official hosted MCP.
- **Scope:** Query analytics and inspect charts, cohorts, experiments and taxonomy..
- **Setup:** Moderate. Connect hosted OAuth and grant MCP write rights; wider ChatGPT tools use progressive discovery. [Connection documentation](https://amplitude.com/docs/amplitude-ai/amplitude-mcp).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Partial** · Publish / activate **No**
- **Read:** Query analytics and inspect charts, cohorts, experiments and taxonomy.
- **Write:** Create and edit analytical content and tracking definitions.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Query analytics and inspect charts, cohorts, experiments and taxonomy.
- **create:** Analytical content, cohorts, experiments and tracking definitions.
- **modify:** Supported analytical content, flags, metrics and taxonomy.
- **delete:** Tracking-plan event/property definitions with restore support.
- **publish:** Guides, surveys and custom agents still publish in the UI.
- **Coverage:** Most steps. Create and edit analytical content and tracking definitions. Guides/surveys stop at drafts; definition changes do not ingest production events.
- **Evidence basis:** Documentation reviewed

**Good**

- Query analytics and inspect charts, cohorts, experiments and taxonomy.
- Create and edit analytical content and tracking definitions.

**Limits**

- Guides/surveys stop at drafts; definition changes do not ingest production events.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **AI interface / endpoint:** [Amplitude official hosted MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **MCP:** [Amplitude official hosted MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **Plugin:** [Official agent plugins and skills](https://amplitude.com/docs/amplitude-ai)
- **CLI:** [Amplitude Wizard CLI](https://www.amplitude.com/docs/get-started/setup-wizard-cli)
- **API / SDK:** [Analytics and management APIs](https://www.docs.developers.amplitude.com/)
- **Documentation:** [Connection and tool documentation](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **GitHub:** No official repository verified

- **Access:** Existing customers, including free Starter, can use MCP. Write actions require Use MCP (write) plus product permissions. Service-account authentication requires Enterprise.
- **Watch:** Guides/surveys stop at drafts; definition changes do not ingest production events.
- **Sources:** [Connection and tool documentation](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) · [Additional official documentation](https://amplitude.com/mcp-server) · [Additional official documentation](https://amplitude.com/docs/amplitude-ai/guides-surveys-mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## Mixpanel

**A- · Production · Reference**

Read events, funnels, retention, saved reports and data-quality issues. Manage dashboards and cohorts; update definitions and resolve data issues.

**Day to day**

- Read events, funnels, retention, saved reports and data-quality issues.
- Manage dashboards and cohorts; update definitions and resolve data issues.

> **What still needs you:** US has direct connectors; EU/India use custom connectors. Experiment targeting is unavailable.

- **Route:** Mixpanel native connector + hosted MCP.
- **Scope:** Read events, funnels, retention, saved reports and data-quality issues..
- **Setup:** Moderate. Use the regional connector; existing accounts can need admin enablement. [Connection documentation](https://docs.mixpanel.com/docs/mcp).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Yes** · Publish / activate **Unverified**
- **Read:** Read events, funnels, retention, saved reports and data-quality issues.
- **Write:** Manage dashboards and cohorts; update definitions and resolve data issues.
- **Connection type:** native-app
- **Review:** current
- **read:** Read events, funnels, retention, saved reports and data-quality issues.
- **create:** Dashboards and cohorts; experiments/flags are beta.
- **modify:** Dashboards, cohorts, Lexicon, properties and lookup tables.
- **delete:** Dashboards and cohorts.
- **publish:** Experiment/flag writes are beta; audience targeting is not supported.
- **Coverage:** Most steps. Manage dashboards and cohorts; update definitions and resolve data issues. US has direct connectors; EU/India use custom connectors. Experiment targeting is unavailable.
- **Evidence basis:** Documentation reviewed

**Good**

- Read events, funnels, retention, saved reports and data-quality issues.
- Manage dashboards and cohorts; update definitions and resolve data issues.

**Limits**

- US has direct connectors; EU/India use custom connectors. Experiment targeting is unavailable.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://docs.mixpanel.com/docs/mcp)
- **AI interface / endpoint:** [Mixpanel native connector + hosted MCP](https://docs.mixpanel.com/docs/mcp)
- **MCP:** [Mixpanel native connector + hosted MCP](https://docs.mixpanel.com/docs/mcp)
- **Plugin:** [Official app or directory connector](https://docs.mixpanel.com/docs/mcp)
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Mixpanel APIs](https://developer.mixpanel.com/reference/overview)
- **Documentation:** [Connection and tool documentation](https://docs.mixpanel.com/docs/mcp)
- **GitHub:** [Vendor source code](https://github.com/mixpanel/docs/blob/main/changelogs.mdx)

- **Access:** Existing project roles apply. New Free/Growth accounts after 1 August 2026 have MCP enabled by default; other accounts require an organisation admin. Free query limits apply. Audit-log queries need organisation admin/owner.
- **Watch:** US has direct connectors; EU/India use custom connectors. Experiment targeting is unavailable.
- **Sources:** [Connection and tool documentation](https://docs.mixpanel.com/docs/mcp) · [Vendor source code](https://github.com/mixpanel/docs/blob/main/changelogs.mdx)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## Adobe Analytics

**B+ · Production · Reference**

Read reports, components, date ranges and workspace projects. Create or update segments, calculated metrics and projects.

**Day to day**

- Read reports, components, date ranges and workspace projects.
- Create or update segments, calculated metrics and projects.

> **What still needs you:** No delete tool is listed; component writes do not configure collection tags.

- **Route:** Adobe Analytics official hosted MCP.
- **Scope:** Read reports, components, date ranges and workspace projects..
- **Setup:** Moderate. Add the hosted URL, sign in with Adobe ID and obtain MCP Full Access for writes. [Connection documentation](https://developer.adobe.com/analytics-mcp/docs/aa/reference).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **No** · Publish / activate **Unverified**
- **Read:** Read reports, components, date ranges and workspace projects.
- **Write:** Create or update segments, calculated metrics and projects.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read reports, components, date ranges and workspace projects.
- **create:** Segments, calculated metrics, date ranges and projects.
- **modify:** Supported segments, calculated metrics and projects.
- **delete:** No delete tool in the published catalogue.
- **publish:** Not established by the reviewed sources.
- **Coverage:** Most steps. Create or update segments, calculated metrics and projects. No delete tool is listed; component writes do not configure collection tags.
- **Evidence basis:** Documentation reviewed

**Good**

- Read reports, components, date ranges and workspace projects.
- Create or update segments, calculated metrics and projects.

**Limits**

- No delete tool is listed; component writes do not configure collection tags.

**Official links**

- **Product / official page:** [Adobe Analytics](https://business.adobe.com/products/adobe-analytics.html)
- **AI interface / endpoint:** [Adobe Analytics official hosted MCP](https://developer.adobe.com/analytics-mcp/docs/aa/reference)
- **MCP:** [Adobe Analytics official hosted MCP](https://developer.adobe.com/analytics-mcp/docs/aa/reference)
- **Plugin:** [Adobe Analytics agent skills](https://github.com/adobe/skills)
- **CLI:** No dedicated official analytics CLI verified
- **API / SDK:** [Adobe Analytics APIs](https://developer.adobe.com/analytics-apis/docs/2.0/)
- **Documentation:** [Connection and tool documentation](https://developer.adobe.com/analytics-mcp/docs/aa/reference)
- **GitHub:** No official repository verified

- **Access:** Requires Adobe Analytics access and MCP Read-only Access or MCP Full Access. Writes require Full Access plus normal component permissions. Product admins automatically have Full Access.
- **Watch:** No delete tool is listed; component writes do not configure collection tags.
- **Sources:** [Connection and tool documentation](https://developer.adobe.com/analytics-mcp/docs/aa/reference) · [Additional official documentation](https://developer.adobe.com/analytics-mcp/docs/guides/permissions) · [Additional official documentation](https://developer.adobe.com/analytics-mcp/docs/guides/claude)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## Google Analytics

**B · Production · Reference**

Read properties, dimensions, key events and analytics reports. Create annotations, custom dimensions and key events with writes enabled.

**Day to day**

- Read properties, dimensions, key events and analytics reports.
- Create annotations, custom dimensions and key events with writes enabled.

> **What still needs you:** Three creation tools do not provide general property administration or tracking implementation.

- **Route:** Google Analytics official MCP, local or self-deployed.
- **Scope:** Read properties, dimensions, key events and analytics reports..
- **Setup:** Hard. Run the Python MCP, configure Google credentials and explicitly enable writes. [Connection documentation](https://github.com/googleanalytics/google-analytics-mcp).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **No** · Delete **No** · Publish / activate **No**
- **Read:** Read properties, dimensions, key events and analytics reports.
- **Write:** Create annotations, custom dimensions and key events with writes enabled.
- **Connection type:** self-managed
- **Review:** current
- **read:** Read properties, dimensions, key events and analytics reports.
- **create:** Annotations, custom dimensions and key events.
- **modify:** No general update tools documented.
- **delete:** No general delete tools documented.
- **publish:** Creating a key event does not implement its collection.
- **Coverage:** Some steps. Create annotations, custom dimensions and key events with writes enabled. Three creation tools do not provide general property administration or tracking implementation.
- **Evidence basis:** Documentation reviewed

**Good**

- Read properties, dimensions, key events and analytics reports.
- Create annotations, custom dimensions and key events with writes enabled.

**Limits**

- Three creation tools do not provide general property administration or tracking implementation.

**Official links**

- **Product / official page:** [Vendor source code](https://github.com/googleanalytics/google-analytics-mcp)
- **AI interface / endpoint:** [Google Analytics official MCP, local or self-deployed](https://github.com/googleanalytics/google-analytics-mcp)
- **MCP:** [Google Analytics official MCP, local or self-deployed](https://github.com/googleanalytics/google-analytics-mcp)
- **Plugin:** No separate official plugin verified
- **CLI:** Package launcher only; no analytics CLI
- **API / SDK:** [Data API and Admin API](https://developers.google.com/analytics/devguides/reporting/data/v1)
- **Documentation:** [Vendor source code](https://github.com/googleanalytics/google-analytics-mcp)
- **GitHub:** [Vendor source code](https://github.com/googleanalytics/google-analytics-mcp)

- **Access:** Read access follows Analytics account permissions. Writes default off; require --allow-write plus analytics.edit. Custom dimensions require Editor; key events require Marketer or Editor.
- **Watch:** Three creation tools do not provide general property administration or tracking implementation.
- **Sources:** [Vendor source code](https://github.com/googleanalytics/google-analytics-mcp) · [Vendor source code](https://github.com/googleanalytics/google-analytics-mcp/releases/tag/1.1.0)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## PostHog

**A · Production · Emerging**

Read analytics, SQL/schema, insights, errors and pipeline diagnostics. Manage dashboards, insights, flags, experiments and supported pipelines.

**Day to day**

- Read analytics, SQL/schema, insights, errors and pipeline diagnostics.
- Manage dashboards, insights, flags, experiments and supported pipelines.

> **What still needs you:** Events must already be collected; some AI tools can incur additional usage costs.

- **Route:** PostHog Claude connector + official plugin.
- **Scope:** Read analytics, SQL/schema, insights, errors and pipeline diagnostics..
- **Setup:** Easy. Add PostHog from the Claude directory and sign in; authentication selects US/EU. [Connection documentation](https://posthog.com/docs/model-context-protocol).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Partial** · Publish / activate **Partial**
- **Read:** Read analytics, SQL/schema, insights, errors and pipeline diagnostics.
- **Write:** Manage dashboards, insights, flags, experiments and supported pipelines.
- **Connection type:** native-app
- **Review:** current
- **read:** Read analytics, SQL/schema, insights, errors and pipeline diagnostics.
- **create:** Insights, dashboards, flags, experiments and exports.
- **modify:** Supported analytics, error and pipeline objects.
- **delete:** Insights, dashboards and supported batch exports.
- **publish:** Enable or disable supported pipeline functions; permissions apply.
- **Coverage:** Most steps. Manage dashboards, insights, flags, experiments and supported pipelines. Events must already be collected; some AI tools can incur additional usage costs.
- **Evidence basis:** Documentation reviewed

**Good**

- Read analytics, SQL/schema, insights, errors and pipeline diagnostics.
- Manage dashboards, insights, flags, experiments and supported pipelines.

**Limits**

- Events must already be collected; some AI tools can incur additional usage costs.

**Official links**

- **Product / official page:** [PostHog Product Analytics](https://posthog.com/product-analytics)
- **AI interface / endpoint:** [PostHog Claude connector + official plugin](https://posthog.com/docs/model-context-protocol)
- **MCP:** [PostHog Claude connector + official plugin](https://posthog.com/docs/model-context-protocol)
- **Plugin:** [Official app or directory connector](https://posthog.com/docs/model-context-protocol)
- **CLI:** [PostHog wizard](https://github.com/PostHog/wizard)
- **API / SDK:** [PostHog API](https://posthog.com/docs/api)
- **Documentation:** [Connection and tool documentation](https://posthog.com/docs/model-context-protocol)
- **GitHub:** No official repository verified

- **Access:** Existing project access and authorised scopes apply. MCP connection/calls are free; some tools using LLMs internally require organisation AI data processing enabled and can incur PostHog AI spend.
- **Watch:** Events must already be collected; some AI tools can incur additional usage costs.
- **Sources:** [Connection and tool documentation](https://posthog.com/docs/model-context-protocol) · [Additional official documentation](https://posthog.com/docs/model-context-protocol/claude-desktop) · [Additional official documentation](https://posthog.com/docs/product-analytics/surfaces/mcp) · [Additional official documentation](https://posthog.com/docs/data-pipelines/surfaces/mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
