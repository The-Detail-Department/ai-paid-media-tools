# Analytics and measurement

Analytics and implementation systems used to query, configure and verify measurement.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics and measurement](analytics-measurement.md) · [Creative and images](creative-images.md) · [Data and research](data-research.md) · [Automation and workflow](automation-workflow.md) · [Modelling and experimentation](modelling-experimentation.md)

| Tool | Grade | Readiness | Setup | Read | Create | Modify | Delete | Coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Amplitude](#amplitude) | **A-** | Production | Easy | Yes | Yes | Yes | Partial | Broad |
| [Google Analytics](#google-analytics) | **B+** | Production | Hard | Yes | No | No | No | Narrow |
| [Google Tag Manager](#google-tag-manager) | **B** | Production | Hard | Yes | Yes | Yes | Yes | Broad |
| [Mixpanel](#mixpanel) | **B-** | Test | Easy | Yes | Unverified | Unverified | Unverified | Narrow |

## Amplitude

**A- · Production**

Amplitude's hosted MCP can work with charts, dashboards, experiments, cohorts and taxonomy. It does not ingest event data.

> **Blocker:** The agent can change shared analysis assets and taxonomy, so user permissions and review still matter.

- **Route:** Official remote MCP.
- **Scope:** Charts, dashboards, cohorts, experiments and taxonomy.
- **Setup:** Easy. Connect the hosted MCP and authorise an Amplitude user with the appropriate project role.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Broad. Strong analytics-asset workflow. Raw event instrumentation and ingestion remain outside the MCP.

**Good**

- Official MCP supports both analysis and write operations.
- Official agent plugins, skills and a CLI create several usable entry points.
- Strong fit for behavioural analysis and experimentation workflows.

**Limits**

- Write capability requires careful project and taxonomy governance.
- It is an analytics layer, not a media-buying control plane.
- Teams still need consistent event instrumentation for useful answers.

**Interfaces**

- **MCP:** [Official remote MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)
- **Plugin:** [Official agent plugins and skills](https://amplitude.com/docs/amplitude-ai)
- **CLI:** [Amplitude Wizard CLI](https://www.amplitude.com/docs/get-started/setup-wizard-cli)
- **API / SDK:** [Analytics and management APIs](https://www.docs.developers.amplitude.com/)

- **Access:** Amplitude account, project access and user-scoped permissions.
- **Commercial:** Affiliate. [Amplitude Affiliate Program](https://www.amplitude.com/affiliates). Public application with commissions for qualified new Starter or Startup customers.
- **Watch:** Write tools can change analytical assets and taxonomy. Event ingestion remains outside the MCP.
- **Sources:** [Amplitude MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) · [Wizard CLI](https://www.amplitude.com/docs/get-started/setup-wizard-cli)
- **Verified:** 5 Sept 2026

[Back to comparison](#analytics-and-measurement)

## Google Analytics

**B+ · Production**

Google's open-source MCP lets agents query Analytics reporting and administration data without changing the property.

> **Blocker:** It is useful after implementation, but cannot repair tracking or administer the property it diagnoses.

- **Route:** Official MCP.
- **Scope:** Property metadata, dimensions, metrics and reports.
- **Setup:** Hard. Requires Google Cloud credentials, enabled APIs, property permissions and local or hosted MCP configuration.
- **Controls:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Narrow. Strong querying and reporting, but events, audiences and property settings cannot be changed through the MCP.

**Good**

- Official open-source MCP is suitable for recurring reporting and analysis.
- Read-only design limits accidental property changes.
- Google Analytics data and administration APIs provide a mature foundation.

**Limits**

- The MCP cannot edit events, audiences or property settings.
- Cloud credentials and property permissions still require setup.
- No separate official plugin or marketer-facing CLI was verified.

**Interfaces**

- **MCP:** [Official, open source](https://developers.google.com/analytics/devguides/MCP)
- **Plugin:** No separate official plugin verified
- **CLI:** Package launcher only; no analytics CLI
- **API / SDK:** [Data API and Admin API](https://developers.google.com/analytics/devguides/reporting/data/v1)

- **Access:** Google Cloud credentials and property permissions.
- **Commercial:** Partner. [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme covering Analytics and Tag Manager. Not a public affiliate programme.
- **Watch:** Read-only means the MCP cannot edit events, audiences or property settings.
- **Sources:** [Google Analytics MCP guide](https://developers.google.com/analytics/devguides/MCP) · [Official MCP repository](https://github.com/googleanalytics/google-analytics-mcp)
- **Verified:** 5 Sept 2026

[Back to comparison](#analytics-and-measurement)

## Google Tag Manager

**B · Production**

The Tag Manager API can manage accounts, containers, workspaces, tags and triggers. No vendor-backed MCP source was verified.

> **Blocker:** There is no official agent interface, and an automated publish can immediately break production tracking.

- **Route:** Official API.
- **Scope:** Accounts, containers, workspaces, tags, triggers and versions.
- **Setup:** Hard. Requires Google Cloud OAuth credentials, container permissions and a custom agent or automation layer.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Yes**
- **Coverage:** Broad. Most configuration objects are available through the API, including version and publish workflows.

**Good**

- Official API supports container, workspace, tag, trigger and variable workflows.
- Useful for repeatable measurement deployment and governance.
- Workspace and version concepts support controlled changes.

**Limits**

- No official MCP, agent plugin or dedicated CLI was verified.
- Incorrect writes can damage live measurement.
- Safe automation needs preview, review and publication gates outside the API.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Tag Manager API](https://developers.google.com/tag-platform/tag-manager/api/v2)

- **Access:** Google Cloud OAuth credentials and container permissions.
- **Commercial:** Partner. [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme covering Analytics and Tag Manager. Not a public affiliate programme.
- **Watch:** Publishing a container is a production change. Put review, environments and rollback around any agent workflow.
- **Sources:** [Tag Manager API v2](https://developers.google.com/tag-platform/tag-manager/api/v2)
- **Verified:** 5 Sept 2026

[Back to comparison](#analytics-and-measurement)

## Mixpanel

**B- · Test**

Mixpanel's vendor-hosted MCP brings product and behavioural analytics into compatible assistants.

> **Blocker:** The vendor has not published enough tool-level detail to trust write workflows without inspecting the live connection.

- **Route:** Official MCP, beta.
- **Scope:** Product analytics data and supported assets.
- **Setup:** Easy. Connect a compatible MCP client and authorise the Mixpanel account.
- **Controls:** Read **Yes** · Create **Unverified** · Modify **Unverified** · Delete **Unverified**
- **Coverage:** Narrow. The public beta announcement does not document a stable action-by-action write boundary.

**Good**

- Official MCP brings product analytics into an agent workflow.
- Useful for funnels, retention and behavioural investigation.
- Established analytics APIs provide a fallback integration route.

**Limits**

- The MCP remains in beta.
- The official source does not state the control boundary clearly enough.
- No official agent plugin or dedicated CLI was verified.

**Interfaces**

- **MCP:** [Official beta](https://mixpanel.com/ai/mcp)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Mixpanel APIs](https://developer.mixpanel.com/reference/overview)

- **Access:** Mixpanel account and compatible MCP client.
- **Commercial:** Referral. [Mixpanel Referral Partners](https://mixpanel.com/partners/). Open to partners, agencies, marketplaces and independent consultants. Commercial terms depend on the partner arrangement.
- **Watch:** The public announcement does not define a durable write boundary. Inspect the authenticated tools before use.
- **Sources:** [Mixpanel MCP](https://mixpanel.com/ai/mcp) · [MCP announcement](https://mixpanel.com/blog/mixpanel-mcp-server/)
- **Verified:** 5 Sept 2026

[Back to comparison](#analytics-and-measurement)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
