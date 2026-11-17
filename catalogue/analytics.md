# Analytics

Analytics products judged on whether an agent can investigate performance and leave useful analysis behind.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Adobe Customer Journey Analytics](#adobe-customer-journey-analytics) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | No | Unverified | Most steps |
| [Amplitude](#amplitude) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
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

- **Route:** Adobe CJA connector.
- **Scope:** Read data views, components, audiences, projects and reports..
- **Setup:** Moderate. Use the Claude directory connector; product permissions and MCP Full Access still apply. [Connect Customer Journey Analytics](https://developer.adobe.com/analytics-mcp/docs/guides/claude).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **No** · Publish / activate **Unverified**
- **Read:** Read data views, components, audiences, projects and reports.
- **Write:** Create or update analytical components, projects and audiences.
- **Connection type:** native-app
- **Connection status:** official · generally-available. CJA entitlement and MCP permissions required; writes need MCP Full Access.
- **Review:** current
- **read:** Read data views, components, audiences, projects and reports.
- **create:** Segments, metrics, projects, audiences and date ranges.
- **modify:** Segments, metrics, projects and audiences.
- **delete:** No delete tool in the published catalogue.
- **publish:** Downstream audience activation is unverified.
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
- **Documentation:** [CJA MCP tools](https://developer.adobe.com/analytics-mcp/docs/cja/reference)
- **GitHub:** No official repository verified

- **Access:** CJA entitlement, relevant data-view/component permissions and MCP Read-only or Full Access. Writes require Full Access and underlying action permissions; product admins automatically receive Full Access.
- **Watch:** No general deletion or connection administration; audience creation does not prove downstream activation.
- **Sources:** [CJA MCP tools](https://developer.adobe.com/analytics-mcp/docs/cja/reference) · [Adobe MCP permissions](https://developer.adobe.com/analytics-mcp/docs/guides/permissions) · [CJA directory connector](https://developer.adobe.com/analytics-mcp/docs/guides/claude)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## Amplitude

**A- · Production · Reference**

Query analytics and inspect charts, cohorts, experiments and taxonomy. Create and edit analytical content and tracking definitions; sync cohorts to destinations.

**Day to day**

- Query analytics and inspect charts, cohorts, experiments and taxonomy.
- Create and edit analytical content and tracking definitions; sync cohorts to destinations.

> **What still needs you:** Guides/surveys stop at drafts; definition changes do not ingest production events.

- **Route:** Amplitude MCP.
- **Scope:** Query analytics and inspect charts, cohorts, experiments and taxonomy..
- **Setup:** Moderate. Connect hosted OAuth and grant MCP write rights; wider ChatGPT tools use progressive discovery. [Connect Amplitude](https://amplitude.com/docs/amplitude-ai/amplitude-mcp).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Partial** · Publish / activate **Partial**
- **Read:** Query analytics and inspect charts, cohorts, experiments and taxonomy.
- **Write:** Create and edit analytical content and tracking definitions; sync cohorts to destinations.
- **Connection type:** hosted-mcp
- **Connection status:** official · generally-available. Available to existing customers; write tools require MCP write permission. Service-account authentication is Enterprise-only.
- **Review:** current
- **read:** Query analytics and inspect charts, cohorts, experiments and taxonomy.
- **create:** Analytical content, cohorts, experiments and tracking definitions.
- **modify:** Supported analytical content, flags, metrics and taxonomy.
- **delete:** Tracking-plan event/property definitions with restore support.
- **publish:** Sync cohorts to destinations. Guides, surveys and custom agents publish in the UI.
- **Coverage:** Most steps. Create and edit analytical content and tracking definitions; sync cohorts to destinations. Guides/surveys stop at drafts; definition changes do not ingest production events.
- **Evidence basis:** Documentation reviewed

**Good**

- Query analytics and inspect charts, cohorts, experiments and taxonomy.
- Create and edit analytical content and tracking definitions; sync cohorts to destinations.

**Limits**

- Guides/surveys stop at drafts; definition changes do not ingest production events.

**Official links**

- **Product / official page:** [Amplitude MCP tools and access](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **AI interface / endpoint:** [Amplitude official hosted MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **MCP:** [Amplitude official hosted MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **Plugin:** [Official agent plugins and skills](https://amplitude.com/docs/amplitude-ai)
- **CLI:** [Amplitude CLI](https://amplitude.com/docs/developers/cli)
- **API / SDK:** [Analytics and management APIs](https://www.docs.developers.amplitude.com/)
- **Documentation:** [Amplitude MCP tools and access](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **GitHub:** No official repository verified

- **Access:** Existing customers, including free Starter, can use MCP. Write actions require Use MCP (write) plus product permissions. Service-account authentication requires Enterprise.
- **Watch:** Guides/surveys stop at drafts; definition changes do not ingest production events.
- **Sources:** [Amplitude MCP tools and access](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) · [Guide and survey draft limits](https://amplitude.com/docs/amplitude-ai/guides-surveys-mcp) · [Amplitude CLI](https://amplitude.com/docs/developers/cli)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## Mixpanel

**A- · Production · Reference**

Read events, funnels, retention, saved reports and data-quality issues. Manage dashboards and cohorts; update definitions and resolve data issues.

**Day to day**

- Read events, funnels, retention, saved reports and data-quality issues.
- Manage dashboards and cohorts; update definitions and resolve data issues.

> **What still needs you:** Experiment and flag tools are beta; audience targeting needs the UI. EU and India use custom connectors.

- **Route:** Mixpanel connector.
- **Scope:** Read events, funnels, retention, saved reports and data-quality issues..
- **Setup:** Moderate. Use the regional connector; existing accounts can need admin enablement. [Connect Mixpanel](https://docs.mixpanel.com/docs/mcp).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Yes** · Publish / activate **Unverified**
- **Read:** Read events, funnels, retention, saved reports and data-quality issues.
- **Write:** Manage dashboards and cohorts; update definitions and resolve data issues.
- **Connection type:** native-app
- **Connection status:** official · generally-available. Core tools are available. Experiment and feature-flag tools, and service-account authentication, are beta.
- **Review:** current
- **read:** Read events, funnels, retention, saved reports and data-quality issues.
- **create:** Dashboards, cohorts, tracking plans and custom properties; experiments and flags are beta.
- **modify:** Dashboards, cohorts, Lexicon, properties and lookup tables.
- **delete:** Dashboards, cohorts, tags and tracking plans.
- **publish:** A separate publish action is unverified; experiment and flag tools remain beta.
- **Coverage:** Most steps. Manage dashboards and cohorts; update definitions and resolve data issues. Experiment and flag tools are beta; audience targeting needs the UI. EU and India use custom connectors.
- **Evidence basis:** Documentation reviewed

**Good**

- Read events, funnels, retention, saved reports and data-quality issues.
- Manage dashboards and cohorts; update definitions and resolve data issues.

**Limits**

- Experiment and flag tools are beta; audience targeting needs the UI. EU and India use custom connectors.

**Official links**

- **Product / official page:** [Mixpanel tools, regions and beta limits](https://docs.mixpanel.com/docs/mcp)
- **AI interface / endpoint:** [Mixpanel native connector + hosted MCP](https://docs.mixpanel.com/docs/mcp)
- **MCP:** [Mixpanel native connector + hosted MCP](https://docs.mixpanel.com/docs/mcp)
- **Plugin:** [Official app or directory connector](https://docs.mixpanel.com/docs/mcp)
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Mixpanel APIs](https://developer.mixpanel.com/reference/overview)
- **Documentation:** [Mixpanel tools, regions and beta limits](https://docs.mixpanel.com/docs/mcp)
- **GitHub:** No official repository verified

- **Access:** Existing project roles apply. New Free/Growth accounts after 1 August 2026 have MCP enabled by default; other accounts require an organisation admin. Free query limits apply. Audit-log queries need organisation admin/owner.
- **Watch:** Experiment and flag tools are beta; audience targeting needs the UI. EU and India use custom connectors.
- **Sources:** [Mixpanel tools, regions and beta limits](https://docs.mixpanel.com/docs/mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## Adobe Analytics

**B+ · Production · Reference**

Read reports, components, date ranges and workspace projects. Create or update segments, calculated metrics and projects.

**Day to day**

- Read reports, components, date ranges and workspace projects.
- Create or update segments, calculated metrics and projects.

> **What still needs you:** No delete tool is listed; component writes do not configure collection tags.

- **Route:** Adobe Analytics MCP.
- **Scope:** Read reports, components, date ranges and workspace projects..
- **Setup:** Moderate. Add the hosted URL, sign in with Adobe ID and obtain MCP Full Access for writes. [Connect Adobe Analytics](https://developer.adobe.com/analytics-mcp/docs/guides/claude).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **No** · Publish / activate **Unverified**
- **Read:** Read reports, components, date ranges and workspace projects.
- **Write:** Create or update segments, calculated metrics and projects.
- **Connection type:** hosted-mcp
- **Connection status:** official · generally-available. Adobe Analytics entitlement and MCP permissions required; writes need MCP Full Access.
- **Review:** current
- **read:** Read reports, components, date ranges and workspace projects.
- **create:** Segments, calculated metrics, date ranges and projects.
- **modify:** Supported segments, calculated metrics and projects.
- **delete:** No delete tool in the published catalogue.
- **publish:** Publication beyond analytical component writes is unverified.
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
- **Documentation:** [Adobe Analytics MCP tools](https://developer.adobe.com/analytics-mcp/docs/aa/reference)
- **GitHub:** No official repository verified

- **Access:** Requires Adobe Analytics access and MCP Read-only Access or MCP Full Access. Writes require Full Access plus normal component permissions. Product admins automatically have Full Access.
- **Watch:** No delete tool is listed; component writes do not configure collection tags.
- **Sources:** [Adobe Analytics MCP tools](https://developer.adobe.com/analytics-mcp/docs/aa/reference) · [Adobe MCP permissions](https://developer.adobe.com/analytics-mcp/docs/guides/permissions) · [Adobe Claude setup](https://developer.adobe.com/analytics-mcp/docs/guides/claude)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## Google Analytics

**B · Production · Reference**

Read properties, dimensions, key events and analytics reports. Create annotations, custom dimensions and key events with writes enabled.

**Day to day**

- Read properties, dimensions, key events and analytics reports.
- Create annotations, custom dimensions and key events with writes enabled.

> **What still needs you:** Self-managed setup. Writes only create annotations, custom dimensions and key events.

- **Route:** Google Analytics MCP.
- **Scope:** Read properties, dimensions, key events and analytics reports..
- **Setup:** Hard. Run the Python MCP, configure Google credentials and explicitly enable writes. [Install and configure](https://github.com/googleanalytics/google-analytics-mcp).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **No** · Delete **No** · Publish / activate **No**
- **Read:** Read properties, dimensions, key events and analytics reports.
- **Write:** Create annotations, custom dimensions and key events with writes enabled.
- **Connection type:** self-managed
- **Connection status:** official · generally-available. Official source package; run and configure it yourself. Writes are off by default.
- **Review:** current
- **read:** Read properties, dimensions, key events and analytics reports.
- **create:** Annotations, custom dimensions and key events.
- **modify:** No update tools listed.
- **delete:** No delete tools listed.
- **publish:** Creating a key event does not implement its collection.
- **Coverage:** Some steps. Create annotations, custom dimensions and key events with writes enabled. Self-managed setup. Writes only create annotations, custom dimensions and key events.
- **Evidence basis:** Documentation reviewed

**Good**

- Read properties, dimensions, key events and analytics reports.
- Create annotations, custom dimensions and key events with writes enabled.

**Limits**

- Self-managed setup. Writes only create annotations, custom dimensions and key events.

**Official links**

- **Product / official page:** [Google Analytics MCP tools and setup](https://github.com/googleanalytics/google-analytics-mcp)
- **AI interface / endpoint:** [Google Analytics official MCP, local or self-deployed](https://github.com/googleanalytics/google-analytics-mcp)
- **MCP:** [Google Analytics official MCP, local or self-deployed](https://github.com/googleanalytics/google-analytics-mcp)
- **Plugin:** No separate official plugin verified
- **CLI:** Package launcher only; no analytics CLI
- **API / SDK:** [Data API and Admin API](https://developers.google.com/analytics/devguides/reporting/data/v1)
- **Documentation:** [Google Analytics MCP tools and setup](https://github.com/googleanalytics/google-analytics-mcp)
- **GitHub:** [Google Analytics MCP tools and setup](https://github.com/googleanalytics/google-analytics-mcp)

- **Access:** Read access follows Analytics account permissions. Writes default off; require --allow-write plus analytics.edit. Custom dimensions require Editor; key events require Marketer or Editor.
- **Watch:** Self-managed setup. Writes only create annotations, custom dimensions and key events.
- **Sources:** [Google Analytics MCP tools and setup](https://github.com/googleanalytics/google-analytics-mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

## PostHog

**A · Production · Emerging**

Read analytics, SQL/schema, insights, errors and pipeline diagnostics. Manage dashboards, insights, flags, experiments and supported pipelines.

**Day to day**

- Read analytics, SQL/schema, insights, errors and pipeline diagnostics.
- Manage dashboards, insights, flags, experiments and supported pipelines.

> **What still needs you:** Events must already be collected; some AI tools can incur additional usage costs.

- **Route:** PostHog connector.
- **Scope:** Read analytics, SQL/schema, insights, errors and pipeline diagnostics..
- **Setup:** Easy. Add PostHog from the Claude directory and sign in; authentication selects US/EU. [Connect PostHog](https://posthog.com/docs/model-context-protocol).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Partial** · Publish / activate **Partial**
- **Read:** Read analytics, SQL/schema, insights, errors and pipeline diagnostics.
- **Write:** Manage dashboards, insights, flags, experiments and supported pipelines.
- **Connection type:** native-app
- **Connection status:** official · generally-available. Official hosted connector; project permissions apply. Some AI-powered tools require opt-in and incur usage costs.
- **Review:** current
- **read:** Read analytics, SQL/schema, insights, errors and pipeline diagnostics.
- **create:** Insights, dashboards, flags, experiments and exports.
- **modify:** Supported analytics, error and pipeline objects.
- **delete:** Insights, dashboards, flags, surveys and supported batch exports.
- **publish:** Enable feature flags, launch surveys and enable supported pipeline destinations.
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
- **Documentation:** [PostHog MCP setup and costs](https://posthog.com/docs/model-context-protocol)
- **GitHub:** No official repository verified

- **Access:** Existing project access and authorised scopes apply. MCP connection/calls are free; some tools using LLMs internally require organisation AI data processing enabled and can incur PostHog AI spend.
- **Watch:** Events must already be collected; some AI tools can incur additional usage costs.
- **Sources:** [PostHog MCP setup and costs](https://posthog.com/docs/model-context-protocol) · [PostHog MCP tool reference](https://posthog.com/docs/model-context-protocol/tools) · [PostHog Claude connector](https://posthog.com/docs/model-context-protocol/claude-desktop) · [PostHog pipeline actions](https://posthog.com/docs/data-pipelines/surfaces/mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#analytics)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
