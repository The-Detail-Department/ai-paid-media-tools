# Measurement

Collection, tagging and attribution systems judged on implementation, validation and operational monitoring.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Inspect | Configure | Validate | Deploy | Monitor | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Google Tag Manager](#google-tag-manager) | **B** | Reference | Production | Hard | Yes | Yes | Partial | Yes | Partial | Most steps |
| [AppsFlyer](#appsflyer) | **B** | Reference | Test | Easy | Yes | No | Partial | No | Yes | Some steps |
| [Twilio Segment](#twilio-segment) | **B-** | Reference | Production | Hard | Yes | Yes | Partial | Yes | Partial | Most steps |
| [Adjust](#adjust) | **C+** | Reference | Test | Hard | Yes | Partial | Partial | Partial | Yes | Some steps |

## Google Tag Manager

**B · Production · Reference**

The Tag Manager API can manage accounts, containers, workspaces, tags and triggers. No vendor-backed MCP source was verified.

**Day to day**

- Prepare tags, triggers and variables in a workspace.
- Create versions and publish approved container changes.

> **What still needs you:** Review the workspace before publishing. A container change can immediately alter tracking on the live site.

- **Route:** Official API.
- **Scope:** Accounts, containers, workspaces, tags, triggers and versions.
- **Setup:** Hard. A developer must build the API connection and configure account authentication. Container permissions must allow the intended edits or publication.
- **Human job:** Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.
- **Capabilities:** Inspect **Yes** · Configure **Yes** · Validate **Partial** · Deploy **Yes** · Monitor **Partial**
- **Coverage:** Most steps. Most configuration objects are available through the API, including version and publish workflows.
- **Evidence basis:** Documentation reviewed

**Good**

- Official API supports container, workspace, tag, trigger and variable workflows.
- Useful for repeatable measurement deployment and governance.
- Workspace and version concepts support controlled changes.

**Limits**

- No official MCP, agent plugin or dedicated CLI was verified.
- Incorrect writes can damage live measurement.
- Safe automation needs preview, review and publication gates outside the API.

**Official links**

- **Product / official page:** [Tag Manager API v2](https://developers.google.com/tag-platform/tag-manager/api/v2)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Tag Manager API](https://developers.google.com/tag-platform/tag-manager/api/v2)
- **Documentation:** [Tag Manager API v2](https://developers.google.com/tag-platform/tag-manager/api/v2)
- **GitHub:** No official repository verified

- **Access:** Google Cloud OAuth credentials and container permissions.
- **Watch:** Publishing a container is a production change. Put review, environments and rollback around any agent workflow.
- **Sources:** [Tag Manager API v2](https://developers.google.com/tag-platform/tag-manager/api/v2)
- **Last checked:** 5 Sept 2026

[Back to comparison](#measurement)

## AppsFlyer

**B · Test · Reference**

AppsFlyer beta MCP brings campaign performance, attribution trends and implementation troubleshooting into AI clients.

**Day to day**

- Check campaign and attribution performance.
- Investigate measurement issues before changing configuration elsewhere.

> **What still needs you:** Configuration changes still need a person or another API connection. The assistant beta focuses on analysis and audits.

- **Route:** Official beta MCP.
- **Scope:** Apps, campaign performance, attribution and implementation guidance.
- **Setup:** Easy. Use hosted OAuth in supported clients or an account-level bearer token for automation.
- **Human job:** Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.
- **Capabilities:** Inspect **Yes** · Configure **No** · Validate **Partial** · Deploy **No** · Monitor **Yes**
- **Coverage:** Some steps. Useful performance monitoring and implementation diagnosis, without a dependable write route for correcting configuration.
- **Evidence basis:** Documentation reviewed

**Good**

- Hosted official MCP with OAuth and token routes.
- Useful campaign and attribution diagnosis in chat.
- Includes implementation and OneLink troubleshooting.

**Limits**

- The service is explicitly beta.
- Sessions can require frequent reconnection.
- The reviewed route diagnoses more than it configures.

**Official links**

- **Product / official page:** [AppsFlyer MCP](https://www.appsflyer.com/products/agentic-ai/mcp/)
- **AI interface / endpoint:** [https://mcp.appsflyer.com/auth/mcp](https://mcp.appsflyer.com/auth/mcp)
- **MCP:** [Official beta MCP](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [AppsFlyer developer hub](https://dev.appsflyer.com/hc)
- **Documentation:** [AppsFlyer MCP beta guide](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP)
- **GitHub:** No official repository verified

- **Access:** AppsFlyer account, appropriate app permissions and OAuth or an account-level MCP token.
- **Watch:** The service is explicitly beta, authenticated sessions can be short-lived and the reviewed tools diagnose rather than apply implementation changes.
- **Sources:** [AppsFlyer MCP beta guide](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP) · [AppsFlyer developer hub](https://dev.appsflyer.com/hc)
- **Last checked:** 5 Sept 2026

[Back to comparison](#measurement)

## Twilio Segment

**B- · Production · Reference**

Segment collects and routes first-party events, while its Public API manages sources, destinations, warehouses and tracking plans; an official MCP was not verified.

**Day to day**

- Inspect sources and destinations.
- Manage supported workspace configuration through an integration.

> **What still needs you:** Decide which workspace changes the assistant may make, then check that the data still reaches the intended destinations.

- **Route:** Public API and collection SDKs.
- **Scope:** Sources, destinations, warehouses, tracking plans and events.
- **Setup:** Hard. A developer must connect the workspace API, select permissions and map the events and resources the assistant may change.
- **Human job:** Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.
- **Capabilities:** Inspect **Yes** · Configure **Yes** · Validate **Partial** · Deploy **Yes** · Monitor **Partial**
- **Coverage:** Most steps. The Public API can manage core workspace resources, but event design and quality validation still require specialist work.
- **Evidence basis:** Documentation reviewed

**Good**

- Mature collection and routing infrastructure.
- Public API provides CRUD for core workspace resources.
- Strong governance surface for tracking plans and destinations.

**Limits**

- No official MCP was verified.
- A custom agent layer is required.
- Identity and instrumentation design remain specialist work.

**Official links**

- **Product / official page:** [Twilio Segment](https://www.twilio.com/docs/segment)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No general official workspace CLI verified
- **API / SDK:** [Segment Public API](https://www.twilio.com/docs/segment/api/public-api)
- **Documentation:** [Segment Public API](https://www.twilio.com/docs/segment/api/public-api)
- **GitHub:** No official repository verified

- **Access:** Team or Business tier for Public API access; workspace owners create API tokens.
- **Watch:** A powerful API is not a ready agent workflow. Instrumentation plans, identity and destination governance remain human-led.
- **Sources:** [Segment Public API](https://www.twilio.com/docs/segment/api/public-api) · [Segment Connections](https://www.twilio.com/docs/segment/connections)
- **Last checked:** 5 Sept 2026

[Back to comparison](#measurement)

## Adjust

**C+ · Test · Reference**

Adjust exposes mature SDKs and several focused APIs for reporting, app configuration, campaigns and device testing, but no official agent route was verified.

**Day to day**

- Retrieve attribution reports.
- Manage supported settings through the appropriate APIs.

> **What still needs you:** Choose the APIs needed for the task and review each change. Features and access differ across the separate services.

- **Route:** Official APIs and SDKs.
- **Scope:** Attribution data, apps, events, campaigns and test devices.
- **Setup:** Hard. Choose and authenticate several APIs, obtain feature enablement where required, then build the agent wrapper.
- **Human job:** Inspect the implementation, configure collection, validate events, deploy changes and monitor data quality.
- **Capabilities:** Inspect **Yes** · Configure **Partial** · Validate **Partial** · Deploy **Partial** · Monitor **Yes**
- **Coverage:** Some steps. Broad developer capability exists, but it is fragmented and not presented as a ready AI route.
- **Evidence basis:** Documentation reviewed

**Good**

- Mature APIs and SDKs cover measurement and reporting.
- App Automation can create or update configured apps.
- Device APIs support testing workflows.

**Limits**

- No official MCP or agent plugin was verified.
- Capabilities are split across several APIs.
- Some automation requires vendor enablement.

**Official links**

- **Product / official page:** [Adjust](https://www.adjust.com/)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Adjust APIs and SDKs](https://dev.adjust.com/en/)
- **Documentation:** [Adjust API documentation](https://dev.adjust.com/en/api/)
- **GitHub:** No official repository verified

- **Access:** Adjust account and API tokens; some automation features require enablement by an Adjust representative.
- **Watch:** The API surface is fragmented by job and needs a custom agent layer. App Automation is not enabled for every account.
- **Sources:** [Adjust API documentation](https://dev.adjust.com/en/api/) · [App Automation API](https://dev.adjust.com/en/api/app-automation-api/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#measurement)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
