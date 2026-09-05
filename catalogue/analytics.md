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
| [Mixpanel](#mixpanel) | **B-** | Reference | Test | Easy | Yes | Unverified | Unverified | Partial | Unverified | Assist only |
| [PostHog](#posthog) | **A** | Emerging | Production | Easy | Yes | Yes | Yes | Yes | Partial | Most steps |

## Amplitude

**A- · Production · Reference**

Amplitude's hosted MCP can work with charts, dashboards, experiments, cohorts and taxonomy. It does not ingest event data.

> **Blocker:** The agent can change shared analysis assets and taxonomy, so user permissions and review still matter.

- **Route:** Official remote MCP.
- **Scope:** Charts, dashboards, cohorts, experiments and taxonomy.
- **Setup:** Easy. Connect the hosted MCP and authorise an Amplitude user with the appropriate project role.
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

> **Blocker:** The route is powerful only after an administrator grants MCP access and the Analytics implementation is already trustworthy.

- **Route:** Adobe-hosted MCP.
- **Scope:** Report suites, components, reports and workspace projects.
- **Setup:** Moderate. Connect the hosted endpoint, authenticate and obtain MCP Access plus the product permissions needed for each action.
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

> **Blocker:** The MCP cannot compensate for missing connections, weak identity stitching or badly designed data views.

- **Route:** Adobe-hosted MCP.
- **Scope:** CJA connections, data views, components, reports and projects.
- **Setup:** Moderate. Connect the hosted endpoint and authenticate with CJA entitlements, MCP Access and normal product permissions.
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

> **Blocker:** It is useful after implementation, but cannot repair tracking or administer the property it diagnoses.

- **Route:** Official MCP.
- **Scope:** Property metadata, dimensions, metrics and reports.
- **Setup:** Hard. Requires Google Cloud credentials, enabled APIs, property permissions and local or hosted MCP configuration.
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

**B- · Test · Reference**

Mixpanel's vendor-hosted MCP brings product and behavioural analytics into compatible assistants.

> **Blocker:** The vendor has not published enough tool-level detail to trust write workflows without inspecting the live connection.

- **Route:** Official MCP, beta.
- **Scope:** Product analytics data and supported assets.
- **Setup:** Easy. Connect a compatible MCP client and authorise the Mixpanel account.
- **Human job:** Explore data, answer a question, build a reusable report, configure analysis components and share the result.
- **Capabilities:** Analyse **Yes** · Build reports **Unverified** · Configure **Unverified** · Validate **Partial** · Share **Unverified**
- **Coverage:** Assist only. The public beta announcement does not document a stable action-by-action write boundary.
- **Evidence basis:** Documentation reviewed

**Good**

- Official MCP brings product analytics into an agent workflow.
- Useful for funnels, retention and behavioural investigation.
- Established analytics APIs provide a fallback integration route.

**Limits**

- The MCP remains in beta.
- The official source does not state the control boundary clearly enough.
- No official agent plugin or dedicated CLI was verified.

**Official links**

- **Product / official page:** [Mixpanel MCP](https://mixpanel.com/ai/mcp)
- **AI interface / endpoint:** [Official beta](https://mixpanel.com/ai/mcp)
- **MCP:** [Official beta](https://mixpanel.com/ai/mcp)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Mixpanel APIs](https://developer.mixpanel.com/reference/overview)
- **Documentation:** [Mixpanel MCP](https://mixpanel.com/ai/mcp)
- **GitHub:** No official repository verified

- **Access:** Mixpanel account and compatible MCP client.
- **Watch:** The public announcement does not define a durable write boundary. Inspect the authenticated tools before use.
- **Sources:** [Mixpanel MCP](https://mixpanel.com/ai/mcp) · [MCP announcement](https://mixpanel.com/blog/mixpanel-mcp-server/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#analytics)

## PostHog

**A · Production · Emerging**

PostHog MCP queries trends, funnels, retention, paths and SQL, then creates, updates or deletes saved insights and dashboards.

> **Blocker:** It can finish the analytics job, but not the downstream media optimisation job.

- **Route:** Official PostHog MCP.
- **Scope:** Events, SQL, insights and dashboards.
- **Setup:** Easy. Run the official wizard, authorise a PostHog project and expose the required tools.
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
