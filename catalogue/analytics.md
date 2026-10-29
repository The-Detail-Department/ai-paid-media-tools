# Analytics

Analytics products judged on whether an agent can investigate performance and leave useful analysis behind.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Analyse | Build reports | Configure | Validate | Share | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Amplitude](#amplitude) | **A-** | Reference | Production | Easy | Yes | Yes | Yes | Partial | Yes | Most steps |
| [Adobe Analytics](#adobe-analytics) | **B+** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [Adobe Customer Journey Analytics](#adobe-customer-journey-analytics) | **B+** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [Google Analytics](#google-analytics) | **B+** | Reference | Production | Hard | Yes | Partial | No | Partial | Partial | Some steps |
| [Mixpanel](#mixpanel) | **B+** | Reference | Test | Easy | Yes | Yes | Partial | Partial | Unverified | Most steps |
| [PostHog](#posthog) | **A** | Emerging | Production | Easy | Yes | Yes | Yes | Yes | Partial | Most steps |

## Amplitude

**A- · Production · Reference**

Amplitude's hosted MCP can work with charts, dashboards, experiments, cohorts and taxonomy. It does not ingest event data.

**Day to day**

- Investigate funnels, retention and user behaviour.
- Create or update supported charts, dashboards and analytics definitions.

> **What still needs you:** Review changes to shared charts and event definitions. The assistant acts with the connected user’s permissions.

- **Route:** Official remote MCP.
- **Scope:** Charts, dashboards, cohorts, experiments and taxonomy.
- **Setup:** Easy. Connect the hosted MCP and authorise an Amplitude user with the appropriate project role. [Connection documentation](https://amplitude.com/docs/amplitude-ai/amplitude-mcp).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Analyse **Yes** · Build reports **Yes** · Configure **Yes** · Validate **Partial** · Share **Yes**
- **Coverage:** Most steps. Strong analytics-asset workflow. Raw event instrumentation and ingestion remain outside the MCP.
- **Evidence basis:** Documentation reviewed

**Good**

- Official MCP supports both analysis and write operations.
- Official agent plugins, skills and a CLI create several usable entry points.
- Strong fit for behavioural analysis and experimentation workflows.

**Limits**

- Write capability requires careful project and taxonomy governance.
- It is an analytics layer, not a media-buying control plane.
- Teams still need consistent event instrumentation for useful answers.

**Official links**

- **Product / official page:** [Amplitude MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **AI interface / endpoint:** [Official remote MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **MCP:** [Official remote MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **Plugin:** [Official agent plugins and skills](https://amplitude.com/docs/amplitude-ai)
- **CLI:** [Amplitude Wizard CLI](https://www.amplitude.com/docs/get-started/setup-wizard-cli)
- **API / SDK:** [Analytics and management APIs](https://www.docs.developers.amplitude.com/)
- **Documentation:** [Amplitude MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **GitHub:** No official repository verified

- **Access:** Amplitude account, project access and user-scoped permissions.
- **Watch:** Write tools can change analytical assets and taxonomy. Event ingestion remains outside the MCP.
- **Sources:** [Amplitude MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) · [Wizard CLI](https://www.amplitude.com/docs/get-started/setup-wizard-cli)
- **Last checked:** 5 Sept 2026

[Back to comparison](#analytics)

## Adobe Analytics

**B+ · Production · Reference**

Adobe hosts a production MCP that can query Analytics data, create reports and manage analysis components through the same product permissions as the UI.

**Day to day**

- Investigate report-suite data.
- Create supported reusable analysis components and projects.

> **What still needs you:** An administrator must grant access. The assistant depends on the report suite’s existing data quality and configuration.

- **Route:** Adobe-hosted MCP.
- **Scope:** Report suites, components, reports and workspace projects.
- **Setup:** Moderate. Connect the hosted endpoint, authenticate and obtain MCP Access plus the product permissions needed for each action. [MCP setup guide](https://developer.adobe.com/analytics-mcp/docs/guides/).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Analyse **Yes** · Build reports **Yes** · Configure **Yes** · Validate **Partial** · Share **Partial**
- **Coverage:** Most steps. It completes ad-hoc analysis and creates reusable components or projects; governed interpretation and stakeholder delivery remain human work.
- **Evidence basis:** Documentation reviewed

**Good**

- Hosted official MCP with normal Adobe permissions.
- Creates and runs ranked or trended reports.
- Can manage segments, date ranges and workspace projects.

**Limits**

- Enterprise entitlement and administrator permissions are required.
- It does not operate ad platforms.
- Report correctness still depends on governed suites and components.

**Official links**

- **Product / official page:** [Adobe Analytics](https://business.adobe.com/products/adobe-analytics.html)
- **AI interface / endpoint:** [https://aa-mcp.adobe.io/mcp](https://aa-mcp.adobe.io/mcp)
- **MCP:** [Adobe-hosted Analytics MCP](https://developer.adobe.com/analytics-mcp/docs/aa/)
- **Plugin:** [Adobe Analytics agent skills](https://github.com/adobe/skills)
- **CLI:** No dedicated official analytics CLI verified
- **API / SDK:** [Adobe Analytics APIs](https://developer.adobe.com/analytics-apis/docs/2.0/)
- **Documentation:** [Adobe Analytics MCP server](https://developer.adobe.com/analytics-mcp/docs/aa/)
- **GitHub:** [Adobe Analytics MCP documentation source](https://github.com/AdobeDocs/analytics-mcp)

- **Access:** Adobe Analytics entitlement, MCP Access permission and the normal product permissions for each action.
- **Watch:** The server can create components and projects. Validate definitions and report scope before sharing outputs.
- **Sources:** [Adobe Analytics MCP server](https://developer.adobe.com/analytics-mcp/docs/aa/) · [Analytics MCP getting started](https://developer.adobe.com/analytics-mcp/docs/guides/) · [Analytics MCP documentation source](https://github.com/AdobeDocs/analytics-mcp)
- **Last checked:** 5 Sept 2026

[Back to comparison](#analytics)

## Adobe Customer Journey Analytics

**B+ · Production · Reference**

Adobe hosts a separate CJA MCP for cross-channel data views, components, reports and workspace projects.

**Day to day**

- Analyse behaviour across a prepared cross-channel dataset.
- Build supported analysis components and projects.

> **What still needs you:** A data team must fix missing connections, identity matching and data-view definitions. The assistant cannot make weak inputs reliable.

- **Route:** Adobe-hosted MCP.
- **Scope:** CJA connections, data views, components, reports and projects.
- **Setup:** Moderate. Connect the hosted endpoint and authenticate with CJA entitlements, MCP Access and normal product permissions. [MCP setup guide](https://developer.adobe.com/analytics-mcp/docs/guides/).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Analyse **Yes** · Build reports **Yes** · Configure **Yes** · Validate **Partial** · Share **Partial**
- **Coverage:** Most steps. Strong analysis and component coverage once the cross-channel data model exists; upstream data design stays outside the route.
- **Evidence basis:** Documentation reviewed

**Good**

- Official hosted MCP for cross-channel analysis.
- Uses the organisation existing CJA permissions.
- Can work with reusable components and projects.

**Limits**

- Useful only after substantial data-view and identity work.
- Enterprise access raises the setup bar.
- It cannot repair upstream instrumentation.

**Official links**

- **Product / official page:** [Customer Journey Analytics](https://business.adobe.com/products/customer-journey-analytics/adobe-customer-journey-analytics.html)
- **AI interface / endpoint:** [https://cja-mcp.adobe.io/mcp](https://cja-mcp.adobe.io/mcp)
- **MCP:** [Adobe-hosted CJA MCP](https://developer.adobe.com/analytics-mcp/docs/cja/)
- **Plugin:** [Adobe CJA agent skills](https://github.com/adobe/skills)
- **CLI:** No dedicated official CJA CLI verified
- **API / SDK:** [CJA APIs](https://developer.adobe.com/cja-apis/docs/)
- **Documentation:** [Analytics MCP servers](https://developer.adobe.com/analytics-mcp/docs/)
- **GitHub:** [Adobe Analytics MCP documentation source](https://github.com/AdobeDocs/analytics-mcp)

- **Access:** CJA entitlement, MCP Access permission and the relevant data-view and component permissions.
- **Watch:** Cross-channel power depends on the organisation already having governed connections, data views and identity design.
- **Sources:** [Analytics MCP servers](https://developer.adobe.com/analytics-mcp/docs/) · [Analytics MCP getting started](https://developer.adobe.com/analytics-mcp/docs/guides/) · [Analytics MCP documentation source](https://github.com/AdobeDocs/analytics-mcp)
- **Last checked:** 5 Sept 2026

[Back to comparison](#analytics)

## Google Analytics

**B+ · Production · Reference**

Google's open-source MCP lets agents query Analytics reporting and administration data without changing the property.

**Day to day**

- Ask where visits and conversions came from.
- Compare pages, events and audience segments in reports.

> **What still needs you:** Fix tracking and property settings elsewhere. The assistant can investigate the data, but cannot repair its collection.

- **Route:** Official MCP.
- **Scope:** Property metadata, dimensions, metrics and reports.
- **Setup:** Hard. An administrator or developer must enable the Google APIs, configure credentials and grant access to the intended properties. [Connection documentation](https://developers.google.com/analytics/devguides/MCP).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Analyse **Yes** · Build reports **Partial** · Configure **No** · Validate **Partial** · Share **Partial**
- **Coverage:** Some steps. Strong querying and reporting, but events, audiences and property settings cannot be changed through the MCP.
- **Evidence basis:** Documentation reviewed

**Good**

- Official open-source MCP is suitable for recurring reporting and analysis.
- Read-only design limits accidental property changes.
- Google Analytics data and administration APIs provide a mature foundation.

**Limits**

- The MCP cannot edit events, audiences or property settings.
- Cloud credentials and property permissions still require setup.
- No separate official plugin or marketer-facing CLI was verified.

**Official links**

- **Product / official page:** [Google Analytics MCP guide](https://developers.google.com/analytics/devguides/MCP)
- **AI interface / endpoint:** [Official, open source](https://developers.google.com/analytics/devguides/MCP)
- **MCP:** [Official, open source](https://developers.google.com/analytics/devguides/MCP)
- **Plugin:** No separate official plugin verified
- **CLI:** Package launcher only; no analytics CLI
- **API / SDK:** [Data API and Admin API](https://developers.google.com/analytics/devguides/reporting/data/v1)
- **Documentation:** [Google Analytics MCP guide](https://developers.google.com/analytics/devguides/MCP)
- **GitHub:** [Official MCP repository](https://github.com/googleanalytics/google-analytics-mcp)

- **Access:** Google Cloud credentials and property permissions.
- **Watch:** Read-only means the MCP cannot edit events, audiences or property settings.
- **Sources:** [Google Analytics MCP guide](https://developers.google.com/analytics/devguides/MCP) · [Official MCP repository](https://github.com/googleanalytics/google-analytics-mcp)
- **Last checked:** 5 Sept 2026

[Back to comparison](#analytics)

## Mixpanel

**B+ · Test · Reference**

Mixpanel’s hosted MCP queries product analytics and manages dashboards, Lexicon metadata and supported analytics assets.

**Day to day**

- Investigate funnels and retention.
- Create dashboards and tidy supported event or property definitions.

> **What still needs you:** Some tools remain in beta. Audience targeting and cohort edits inside experiment or feature-flag workflows still need the interface.

- **Route:** Official hosted MCP.
- **Scope:** Product analytics data and supported assets.
- **Setup:** Easy. Connect a compatible MCP client and authorise the Mixpanel account. [Connection documentation](https://docs.mixpanel.com/docs/mcp).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Analyse **Yes** · Build reports **Yes** · Configure **Partial** · Validate **Partial** · Share **Unverified**
- **Coverage:** Most steps. Query analytics, create and update dashboards, edit Lexicon metadata and manage supported cohorts and other assets.
- **Evidence basis:** Documentation reviewed

**Good**

- The official tool reference now documents dashboard creation, updates and deletion.
- Lexicon editing and data-quality tools extend the route beyond reporting.
- Regional endpoints and OAuth or service-account authentication are documented.

**Limits**

- Experiments, feature flags and audit-log tools have beta or access limits.
- Free-plan query limits and organisation enablement can affect availability.
- Documented tools still need a controlled account-level pilot.

**Official links**

- **Product / official page:** [Mixpanel MCP tool reference](https://docs.mixpanel.com/docs/mcp)
- **AI interface / endpoint:** [Official hosted MCP](https://docs.mixpanel.com/docs/mcp)
- **MCP:** [Official hosted MCP](https://docs.mixpanel.com/docs/mcp)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Mixpanel APIs](https://developer.mixpanel.com/reference/overview)
- **Documentation:** [Mixpanel MCP tool reference](https://docs.mixpanel.com/docs/mcp)
- **GitHub:** No official repository verified

- **Access:** Mixpanel account and compatible MCP client.
- **Watch:** The core tool list documents writes. Experiments and feature flags are open beta; audit-log access is limited beta.
- **Sources:** [Mixpanel MCP tool reference](https://docs.mixpanel.com/docs/mcp) · [Mixpanel MCP](https://mixpanel.com/ai/mcp) · [MCP announcement](https://mixpanel.com/blog/mixpanel-mcp-server/)
- **Last checked:** 29 Oct 2026

[Back to comparison](#analytics)

## PostHog

**A · Production · Emerging**

PostHog MCP queries trends, funnels, retention, paths and SQL, then creates, updates or deletes saved insights and dashboards.

**Day to day**

- Investigate funnels and product behaviour.
- Create or update reusable insights and dashboards.

> **What still needs you:** Apply advertising changes elsewhere. This connection works on analytics, not campaign optimisation.

- **Route:** Official PostHog MCP.
- **Scope:** Events, SQL, insights and dashboards.
- **Setup:** Easy. Run the official wizard, authorise a PostHog project and expose the required tools. [Connection documentation](https://posthog.com/docs/product-analytics/surfaces/mcp).
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Analyse **Yes** · Build reports **Yes** · Configure **Yes** · Validate **Yes** · Share **Partial**
- **Coverage:** Most steps. The route can investigate behaviour and maintain reusable insights and dashboards; distribution and paid-media decisions remain outside it.
- **Evidence basis:** Documentation reviewed

**Good**

- Queries the major product-analytics methods and SQL.
- Creates, updates and deletes insights and dashboards.
- One-command wizard installation is unusually direct.

**Limits**

- It is product-led rather than paid-media-led.
- Quality depends on the event implementation.
- It does not control media spend or delivery.

**Official links**

- **Product / official page:** [PostHog Product Analytics](https://posthog.com/product-analytics)
- **AI interface / endpoint:** [Official PostHog MCP](https://posthog.com/docs/product-analytics/surfaces/mcp)
- **MCP:** [Official PostHog MCP](https://posthog.com/docs/product-analytics/surfaces/mcp)
- **Plugin:** [PostHog wizard installer](https://posthog.com/docs/product-analytics/surfaces/mcp)
- **CLI:** [PostHog wizard](https://github.com/PostHog/wizard)
- **API / SDK:** [PostHog API](https://posthog.com/docs/api)
- **Documentation:** [PostHog MCP analytics guide](https://posthog.com/docs/product-analytics/surfaces/mcp)
- **GitHub:** [PostHog monorepo](https://github.com/PostHog/posthog)

- **Access:** A PostHog project, captured events and a supported MCP client; the wizard handles installation.
- **Watch:** It is strongest for product and web behaviour, not ad-platform delivery or media cost governance.
- **Sources:** [PostHog MCP analytics guide](https://posthog.com/docs/product-analytics/surfaces/mcp) · [PostHog source](https://github.com/PostHog/posthog)
- **Last checked:** 5 Sept 2026

[Back to comparison](#analytics)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
