# AI paid media tools

**The Detail Department's point of view on what is usable in a daily AI paid-media workflow today.**

This is an opinionated production guide, not a directory of every integration. Grades combine usable scope, production readiness, access friction, control, documentation and operational risk. They do not rate the vendor or product in general.

[Methodology](METHODOLOGY.md) · [Tool facts](data/tools.json) · [Editorial ratings](data/ratings.json) · [Filterable browser](docs/index.html) · [Propose a correction](../../issues/new?template=correction.yml)

## Current view

- 33 tools reviewed
- 22 rated Production, 8 rated Test, 3 rated Research
- 21 verified official MCPs
- 14 MCPs with write or mixed control
- No tool currently earns A+. The bar is a broad, dependable daily interface with clear access, control and documentation.

Last full review: **5 Sept 2026**

## Rating system

| Signal | Meaning |
| --- | --- |
| A+, A, A- | Strong daily recommendation. The lower marks retain material limits. |
| B+, B, B- | Useful in a defined workflow, with access, coverage or integration friction. |
| C+, C, C- | Narrow, immature or too indirect for most daily teams. |
| D / F | Not recommended for current production use. |
| Production | Dependable enough for a controlled recurring workflow today. |
| Test | Worth piloting, but access, maturity or control needs a bounded test. |
| Research | Useful specialist capability, not a daily operating interface. |

A Production label does not mean unrestricted automation. Write-capable tools still need scoped credentials, human approval and change evidence.

## Quick index

| Tool | Grade | Readiness | MCP | Plugin | CLI |
| --- | --- | --- | --- | --- | --- |
| [Google Ads](#google-ads) | A | Production | Official, open source | None official | None dedicated |
| [Meta Ads](#meta-ads) | A- | Test | Official open beta | None official | None dedicated |
| [TikTok for Business](#tiktok-for-business) | A | Production | Official remote MCP | None official | None dedicated |
| [Microsoft Advertising](#microsoft-advertising) | A- | Production | Official managed MCP | None official | None dedicated |
| [Amazon Ads](#amazon-ads) | B+ | Test | Official open beta | None official | None dedicated |
| [Snapchat Ads](#snapchat-ads) | B | Test | Official, allowlist rollout | None official | None dedicated |
| [LinkedIn Ads](#linkedin-ads) | B- | Production | No official MCP verified | None official | None dedicated |
| [Pinterest Ads](#pinterest-ads) | B | Production | No official MCP verified | None official | None dedicated |
| [Reddit Ads](#reddit-ads) | B- | Production | No official MCP verified | None official | None dedicated |
| [X Ads](#x-ads) | B | Production | No official Ads MCP verified | xurl agent skill | xurl CLI |
| [Display & Video 360](#display-video-360) | B+ | Production | No official MCP verified | None official | None dedicated |
| [Campaign Manager 360](#campaign-manager-360) | B+ | Production | No official MCP verified | None official | None dedicated |
| [Search Ads 360](#search-ads-360) | B | Production | No official MCP verified | None official | None dedicated |
| [Apple Ads](#apple-ads) | B | Production | No official MCP verified | None official | None dedicated |
| [The Trade Desk](#the-trade-desk) | B+ | Test | Official OAK MCP, private beta | None official | None dedicated |
| [Google Analytics](#google-analytics) | A | Production | Official, open source | None official | None dedicated |
| [Google Tag Manager](#google-tag-manager) | B | Production | No official MCP verified | None official | None dedicated |
| [Amplitude](#amplitude) | A | Production | Official remote MCP | Official agent plugins and skills | Amplitude Wizard CLI |
| [Mixpanel](#mixpanel) | B+ | Test | Official beta | None official | None dedicated |
| [Supermetrics](#supermetrics) | A | Production | Official remote MCP | Official AI chat integrations | Official CLI, alpha |
| [DataForSEO](#dataforseo) | A- | Production | Official remote and local MCP | None official | Official CLI in the MCP package |
| [Airbyte](#airbyte) | B+ | Test | Official agent MCP | None official | abctl for local deployment |
| [Fivetran](#fivetran) | A- | Test | Official public preview | Official Connector SDK agent plugins | Connector SDK CLI |
| [Google MCP Toolbox for Databases](#google-mcp-toolbox) | A- | Production | Official, open source | Gemini CLI extensions | toolbox CLI |
| [Snowflake](#snowflake) | A | Production | Official managed MCP | None official | Snowflake CLI |
| [Meridian](#meridian) | B+ | Research | No official MCP verified | None official | None dedicated |
| [Robyn](#robyn) | B | Research | No official MCP verified | None official | None dedicated |
| [PyMC-Marketing](#pymc-marketing) | B | Research | No official MCP verified | None official | None dedicated |
| [Zapier](#zapier) | A- | Production | Official remote MCP | None official | Zapier Platform CLI |
| [Pipedream](#pipedream) | A- | Production | Official remote MCP | None official | pd CLI |
| [n8n](#n8n) | A | Test | Official built-in MCP, beta | None official | n8n CLI |
| [Figma](#figma) | A- | Production | Official remote and desktop MCP | Official plugins and agent skills | None dedicated |
| [Canva](#canva) | A- | Production | Official remote MCP | None official | Canva Apps CLI |

## Media platforms



### Google Ads

**A · Production**

Queries account structure and performance through Google Ads Query Language. The current official MCP surface is read-only.

**Interfaces:** MCP: Official, open source · Plugin: No official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Google Ads API and client libraries

**+**

- Official MCP with a deliberately safe read-only boundary.
- Useful account structure and performance access through Google Ads Query Language.
- Mature API and official client libraries cover production campaign operations.

**−**

- The MCP cannot create or change campaigns.
- Write workflows require separate API engineering and approval controls.
- Cloud project, OAuth and account access take real setup.

**Access:** Developer token, Google Cloud project and account credentials.

**Watch:** The MCP can inspect but cannot create or change campaigns. API access levels still apply.

**Sources:** [Official MCP repository](https://github.com/googleads/google-ads-mcp) · [Google Ads API documentation](https://developers.google.com/google-ads/api/docs/start) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Meta Ads

**A- · Test**

Meta's hosted Ads AI Connector brings campaign data and actions into compatible assistants through MCP.

**Interfaces:** MCP: Official open beta · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Marketing API

**+**

- Official connector reaches one of the most important paid-social platforms.
- Marketing API coverage supports both reporting and campaign operations.
- Mixed control can support analysis and action in one workflow.

**−**

- The official AI connector remains in beta.
- Permissions and available operations vary by account and tool.
- No useful official campaign CLI was verified.

**Access:** Open beta; account and regional availability may vary.

**Watch:** Inspect the authenticated tool list and permissions before allowing campaign changes.

**Sources:** [Meta Ads AI Connectors announcement](https://www.facebook.com/business/news/meta-ads-ai-connectors) · [Marketing APIs](https://developers.facebook.com/docs/marketing-apis/) · Verified 5 Sept 2026

[Back to index](#quick-index)

### TikTok for Business

**A · Production**

A vendor-hosted MCP for campaign management, reporting, audiences and creative operations, with full and progressive-disclosure endpoints.

**Interfaces:** MCP: Official remote MCP · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: TikTok API for Business

**+**

- Official remote MCP covers campaign, reporting, audience and creative work.
- Read/write capability makes it useful beyond analysis.
- The interface is designed for advertiser workflows rather than a generic API bridge.

**−**

- Broad write permissions increase the cost of a bad instruction.
- Business account eligibility and permissions still govern availability.
- No dedicated official CLI was verified.

**Access:** TikTok for Business account and OAuth permissions.

**Watch:** The broad endpoint exposes hundreds of tools. Progressive disclosure is safer for smaller agent contexts.

**Sources:** [TikTok for Business MCP documentation](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en) · [API for Business documentation](https://business-api.tiktok.com/portal/docs) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Microsoft Advertising

**A- · Production**

Microsoft's governed MCP connects compatible assistants to Microsoft Advertising API capabilities.

**Interfaces:** MCP: Official managed MCP · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Microsoft Advertising API

**+**

- Official managed MCP reduces integration ambiguity.
- Supports meaningful reporting and campaign-management workflows.
- Vendor governance and an established advertising API support production use.

**−**

- The exact read/write boundary varies across available tools.
- Account and developer credentials are still required.
- No dedicated official CLI was verified.

**Access:** Microsoft Advertising account and API permissions.

**Watch:** Confirm the live tool list and write scope after authentication.

**Sources:** [Microsoft Advertising MCP](https://www.about.ads.microsoft.com/en/solutions/technology/mcp-server) · [Advertising API documentation](https://learn.microsoft.com/en-us/advertising/) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Amazon Ads

**B+ · Test**

An official MCP layer over Amazon Ads API functionality, including multi-step tools for campaign creation, reporting and market expansion.

**Interfaces:** MCP: Official open beta · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Amazon Ads API

**+**

- Official MCP can create, update and delete campaign objects.
- Retail-media context makes it strategically important.
- Uses the established Amazon Ads API permission model.

**−**

- The MCP is still an open beta.
- Access is limited to partners with active API credentials.
- Destructive campaign operations require strong human approval gates.

**Access:** Open beta for Amazon Ads partners with active API credentials.

**Watch:** The MCP can create, update and delete campaigns. Use review and approval controls before execution.

**Sources:** [Amazon Ads MCP announcement](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta) · [Amazon Ads API](https://advertising.amazon.com/en-ca/about-api) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Snapchat Ads

**B · Test**

A hosted Ads MCP for retrieving Snapchat campaign data and insights from supported AI clients.

**Interfaces:** MCP: Official, allowlist rollout · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Snap Marketing API

**+**

- Official hosted MCP provides campaign retrieval and analysis.
- Read-only control is suitable for a cautious reporting pilot.
- The underlying Marketing API offers a route to deeper integration.

**−**

- MCP access is still allowlisted.
- The MCP cannot execute campaign changes.
- No official plugin or dedicated CLI was verified.

**Access:** Allowlist rollout and authenticated ad-account access.

**Watch:** The documented MCP is read-only even though the underlying Marketing API has broader capabilities.

**Sources:** [Ads MCP introduction](https://developers.snap.com/marketing-api/Ads-MCP/Introduction) · [Connect an agent](https://developers.snap.com/marketing-api/Ads-MCP/connect-an-agent) · Verified 5 Sept 2026

[Back to index](#quick-index)

### LinkedIn Ads

**B- · Production**

LinkedIn's Marketing APIs cover campaign management and reporting. We found community MCP wrappers, but no vendor-backed MCP source.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: LinkedIn Marketing APIs

**+**

- Official Marketing APIs cover campaign management and reporting.
- Strong fit for B2B audience and lead-generation workflows.
- Production access tiers and permissions are documented.

**−**

- No official MCP was verified.
- API product approval and access tiers add friction.
- Daily AI use needs a custom or third-party integration layer.

**Access:** Developer application, product approval and tier-specific permissions.

**Watch:** Do not treat a community wrapper as LinkedIn-supported. Marketing API access is gated by product and tier.

**Sources:** [Accessing LinkedIn APIs](https://www.linkedin.com/help/linkedin/answer/a526048/accessing-linkedin-apis?lang=en) · [Marketing API access tiers](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/marketing-tiers?view=li-lms-2026-08) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Pinterest Ads

**B · Production**

Pinterest's Ads API supports programmatic campaign and reporting workflows. No vendor-backed MCP source was verified.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Pinterest API for ads

**+**

- Official Ads API supports campaign and reporting workflows.
- Useful specialist channel for visual discovery and commerce.
- An authorised integration can run recurring production tasks.

**−**

- No official MCP or agent plugin was verified.
- No dedicated official CLI was verified.
- AI workflows require custom engineering or a maintained intermediary.

**Access:** Pinterest developer application and authorised ad accounts.

**Watch:** Use the API directly or an integration layer, and identify the maintainer of any MCP wrapper.

**Sources:** [Pinterest API overview](https://developer.pinterest.com/docs/overview/welcome/) · [Ads API overview](https://dev.pinterest.com/docs/work-with-ads/ads-overview/) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Reddit Ads

**B- · Production**

Reddit's Ads API v3 exposes campaign and account operations. No vendor-backed MCP source was verified.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Reddit Ads API v3

**+**

- Official Ads API v3 exposes campaign and account operations.
- Community context can be valuable for specific audience strategies.
- OAuth provides a conventional route for controlled integrations.

**−**

- No official MCP, plugin or CLI was verified.
- Advertising API access requires approval.
- A useful daily agent workflow must be built and maintained separately.

**Access:** OAuth application and approved advertising access.

**Watch:** Community connectors should be checked against the current v3 API and Reddit's access terms.

**Sources:** [Reddit Ads API v3](https://ads-api.reddit.com/docs/) · Verified 5 Sept 2026

[Back to index](#quick-index)

### X Ads

**B · Production**

The X Ads API exposes advertiser resources and reporting, while X's xurl CLI can make authenticated requests and ships with an official agent skill.

**Interfaces:** MCP: No official Ads MCP verified · Plugin: xurl agent skill · CLI: xurl CLI · API/SDK: X Ads API

**+**

- Official xurl CLI gives agents and operators a practical API route.
- xurl ships with an official agent skill.
- The Ads API supports advertiser resources and reporting.

**−**

- No official Ads-specific MCP was verified.
- The general X MCP should not be assumed to cover advertising endpoints.
- Ads API access and endpoint availability can be gated.

**Access:** Developer account and Ads API access; some endpoints require allowlisting.

**Watch:** X also operates a general X API MCP, but its published tool list does not establish Ads API coverage. Do not label it an Ads MCP without endpoint-level proof.

**Sources:** [X Ads API documentation](https://docs.x.com/x-ads-api/introduction) · [Official xurl repository](https://github.com/xdevplatform/xurl) · [General X API MCP documentation](https://github.com/xdevplatform/docs/blob/main/tools/mcp.mdx) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Display & Video 360

**B+ · Production**

Google's DV360 API can manage advertisers, campaigns, insertion orders, line items, targeting, creatives and users. Reporting uses a separate Bid Manager API.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Display & Video 360 API

**+**

- Mature official API covers core programmatic campaign resources.
- Supports insertion orders, line items, targeting, creatives and users.
- Role-based access can separate read, standard and admin operations.

**−**

- No official MCP or agent plugin was verified.
- Performance reporting requires the separate Bid Manager API.
- Some YouTube and Partners write workflows remain outside the API.

**Access:** A Google Cloud project, OAuth 2.0 and a DV360 user with access to the relevant partner or advertiser.

**Watch:** The API can retrieve, create and update resources, but it does not return performance data and does not support every YouTube & Partners write workflow.

**Sources:** [DV360 API overview](https://developers.google.com/display-video/api) · [DV360 API limitations and permissions](https://developers.google.com/display-video/api/support/faq) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Campaign Manager 360

**B+ · Production**

The Campaign Manager 360 API supports large-scale trafficking, creative, conversion, reporting and attribution workflows.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Campaign Manager 360 API

**+**

- Mature API supports trafficking, creative, conversion and reporting workflows.
- Broad resource coverage suits complex enterprise operations.
- User-profile permissions remain the control plane.

**−**

- No official MCP, plugin or dedicated CLI was verified.
- The resource model and permissions create implementation overhead.
- Write access can affect live trafficking and needs a second-person check.

**Access:** A Campaign Manager 360 account with API access, a permitted user profile, a Google Cloud project and OAuth 2.0 credentials.

**Watch:** Many resources are writable. User-profile permissions in Campaign Manager 360 govern what the API can change.

**Sources:** [Campaign Manager 360 API](https://developers.google.com/doubleclick-advertisers/rest/) · [Campaign Manager 360 API setup](https://developers.google.com/doubleclick-advertisers/getting_started) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Search Ads 360

**B · Production**

The Search Ads 360 Reporting API provides high-volume, query-based reporting over campaigns, ads, keywords and performance data.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Search Ads 360 Reporting API

**+**

- High-volume official reporting API with a purpose-built query language.
- Immediate access to granular campaign, ad and keyword data.
- REST, gRPC and official client libraries support production pipelines.

**−**

- The reporting API is read-only.
- Offline conversions use a separate API surface.
- No official MCP or dedicated agent integration was verified.

**Access:** OAuth 2.0 application credentials and access to the relevant Search Ads 360 manager or client account.

**Watch:** The reporting API is read-only. Offline conversion uploads use a separate Search Ads 360 API surface.

**Sources:** [Search Ads 360 Reporting API](https://developers.google.com/search-ads/reporting) · [Reporting API overview](https://developers.google.com/search-ads/reporting/overview) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Apple Ads

**B · Production**

Apple's Platform API lets advertisers and agencies manage campaigns, ad groups and keywords, pull reports and work with App Store and Apple Maps ads.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Apple Ads Platform API

**+**

- Official API supports campaign, ad-group, keyword and reporting work.
- API roles distinguish read-only from read/write access.
- Covers ads on the App Store and Apple Maps.

**−**

- No official MCP, plugin or dedicated CLI was verified.
- Third-party providers require separate registration.
- Daily AI use needs a custom integration and careful OAuth setup.

**Access:** An Apple Ads API user with an eligible role and OAuth 2.0 credentials; third-party providers require separate registration.

**Watch:** API roles can be read-only or read-write. Verify the assigned role before using an automation layer.

**Sources:** [Apple Ads Platform API](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api) · [Apple Ads API resources](https://ads.apple.com/app-store/resources) · Verified 5 Sept 2026

[Back to index](#quick-index)

### The Trade Desk

**B+ · Test**

The Trade Desk's Open Agentic Kit provides MCP-based access to Ask Koa for platform data and actions, including campaign creation and monitoring.

**Interfaces:** MCP: Official OAK MCP, private beta · Plugin: No separate official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Platform REST and GraphQL APIs

**+**

- Official OAK MCP connects AI assistants to Ask Koa.
- Published scope includes querying data, creating campaigns and monitoring live activity.
- The underlying REST and GraphQL APIs cover substantial platform operations.

**−**

- OAK is available only to selected partners in private beta.
- Broad action scope makes approval and audit controls essential.
- Practical onboarding still depends on an account representative.

**Access:** OAK is available to selected partners in private beta through their account representative. API credentials are also account-managed.

**Watch:** Published scope includes both data and actions. Treat campaign creation and other platform mutations as approval-gated operations.

**Sources:** [OAK private beta release note](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates) · [Open Agentic Kit definition](https://partner.thetradedesk.com/v3/portal/resources/doc/Glossary) · [Platform API usage](https://partner.thetradedesk.com/v3/portal/api/doc/ApiUsageGuidelines) · Verified 5 Sept 2026

[Back to index](#quick-index)

## Analytics and measurement



### Google Analytics

**A · Production**

Google's open-source MCP lets agents query Analytics reporting and administration data without changing the property.

**Interfaces:** MCP: Official, open source · Plugin: No separate official plugin verified · CLI: Package launcher only; no analytics CLI · API/SDK: Data API and Admin API

**+**

- Official open-source MCP is suitable for recurring reporting and analysis.
- Read-only design limits accidental property changes.
- Google Analytics data and administration APIs provide a mature foundation.

**−**

- The MCP cannot edit events, audiences or property settings.
- Cloud credentials and property permissions still require setup.
- No separate official plugin or marketer-facing CLI was verified.

**Access:** Google Cloud credentials and property permissions.

**Watch:** Read-only means the MCP cannot edit events, audiences or property settings.

**Sources:** [Google Analytics MCP guide](https://developers.google.com/analytics/devguides/MCP) · [Official MCP repository](https://github.com/googleanalytics/google-analytics-mcp) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Google Tag Manager

**B · Production**

The Tag Manager API can manage accounts, containers, workspaces, tags and triggers. No vendor-backed MCP source was verified.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Tag Manager API

**+**

- Official API supports container, workspace, tag, trigger and variable workflows.
- Useful for repeatable measurement deployment and governance.
- Workspace and version concepts support controlled changes.

**−**

- No official MCP, agent plugin or dedicated CLI was verified.
- Incorrect writes can damage live measurement.
- Safe automation needs preview, review and publication gates outside the API.

**Access:** Google Cloud OAuth credentials and container permissions.

**Watch:** Publishing a container is a production change. Put review, environments and rollback around any agent workflow.

**Sources:** [Tag Manager API v2](https://developers.google.com/tag-platform/tag-manager/api/v2) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Amplitude

**A · Production**

Amplitude's hosted MCP can work with charts, dashboards, experiments, cohorts and taxonomy. It does not ingest event data.

**Interfaces:** MCP: Official remote MCP · Plugin: Official agent plugins and skills · CLI: Amplitude Wizard CLI · API/SDK: Analytics and management APIs

**+**

- Official MCP supports both analysis and write operations.
- Official agent plugins, skills and a CLI create several usable entry points.
- Strong fit for behavioural analysis and experimentation workflows.

**−**

- Write capability requires careful project and taxonomy governance.
- It is an analytics layer, not a media-buying control plane.
- Teams still need consistent event instrumentation for useful answers.

**Access:** Amplitude account, project access and user-scoped permissions.

**Watch:** Write tools can change analytical assets and taxonomy. Event ingestion remains outside the MCP.

**Sources:** [Amplitude MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) · [Wizard CLI](https://www.amplitude.com/docs/get-started/setup-wizard-cli) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Mixpanel

**B+ · Test**

Mixpanel's vendor-hosted MCP brings product and behavioural analytics into compatible assistants.

**Interfaces:** MCP: Official beta · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Mixpanel APIs

**+**

- Official MCP brings product analytics into an agent workflow.
- Useful for funnels, retention and behavioural investigation.
- Established analytics APIs provide a fallback integration route.

**−**

- The MCP remains in beta.
- The official source does not state the control boundary clearly enough.
- No official agent plugin or dedicated CLI was verified.

**Access:** Mixpanel account and compatible MCP client.

**Watch:** The public announcement does not define a durable write boundary. Inspect the authenticated tools before use.

**Sources:** [Mixpanel MCP](https://mixpanel.com/ai/mcp) · [MCP announcement](https://mixpanel.com/blog/mixpanel-mcp-server/) · Verified 5 Sept 2026

[Back to index](#quick-index)

## Creative and images



### Figma

**A- · Production**

Figma's remote MCP can retrieve design context and, for supported clients and seats, create or modify native canvas content.

**Interfaces:** MCP: Official remote and desktop MCP · Plugin: Official plugins and agent skills · CLI: No dedicated official Figma CLI verified · API/SDK: REST and Plugin APIs

**+**

- Official remote and desktop MCP expose real design context.
- Supported clients can create or modify native canvas content.
- Plugin API and agent skills support structured creative workflows.

**−**

- Canvas writes require a Full seat and edit permission.
- It does not connect creative output to media-platform delivery by itself.
- No dedicated official Figma CLI was verified.

**Access:** Supported MCP client and Figma permissions; a Full seat is required for write-to-canvas.

**Watch:** Dev seats support read-oriented context. Canvas writes require both a Full seat and edit permission.

**Sources:** [Figma MCP introduction](https://developers.figma.com/docs/figma-mcp-server/) · [Write to canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Canva

**A- · Production**

Canva's remote MCP supports design creation and editing, assets, brand resources, search, export and collaboration.

**Interfaces:** MCP: Official remote MCP · Plugin: AI Connector uses MCP; no separate plugin counted · CLI: Canva Apps CLI · API/SDK: Apps SDK and Connect APIs

**+**

- Official MCP supports design creation, editing, assets and export.
- Remote OAuth makes it accessible to common agent clients.
- Apps CLI and Connect APIs support deeper product integration.

**−**

- The Apps CLI is not a daily creative-production CLI.
- Brand and format governance still need human review.
- It does not validate media-platform setup or campaign delivery.

**Access:** A Canva account and individual OAuth authorisation; app-development features have separate requirements.

**Watch:** The Apps CLI builds Canva apps. It is not a general command-line interface for day-to-day creative production.

**Sources:** [Canva MCP documentation](https://www.canva.dev/docs/mcp/) · [Canva CLI](https://www.canva.dev/docs/apps/canva-cli/) · Verified 5 Sept 2026

[Back to index](#quick-index)

## Data and research



### Supermetrics

**A · Production**

A marketing-data MCP that queries Supermetrics sources through one connection, alongside an API and an alpha command-line client.

**Interfaces:** MCP: Official remote MCP · Plugin: Official AI chat integrations · CLI: Official CLI, alpha · API/SDK: Supermetrics API

**+**

- Official read-only MCP fits recurring cross-channel retrieval.
- Established connector coverage reduces bespoke API maintenance.
- Official AI integrations and CLI provide several workflow options.

**−**

- The CLI remains alpha.
- The MCP cannot change campaigns.
- Coverage and economics depend on the commercial plan and connector.

**Access:** A valid subscription with Supermetrics API access.

**Watch:** The CLI is alpha. Source entitlements and query costs still depend on the subscription.

**Sources:** [Supermetrics MCP server](https://docs.supermetrics.com/docs/supermetrics-mcp-server) · [Supermetrics CLI](https://docs.supermetrics.com/apidocs/cli) · Verified 5 Sept 2026

[Back to index](#quick-index)

### DataForSEO

**A- · Production**

The official server and CLI browse DataForSEO documentation and make authenticated API requests for SERP, keyword, backlink and market data.

**Interfaces:** MCP: Official remote and local MCP · Plugin: No separate official plugin verified · CLI: Official CLI in the MCP package · API/SDK: DataForSEO APIs and clients

**+**

- Official MCP and CLI make search and competitive data directly usable by agents.
- Read-only control is appropriate for external research data.
- Broad API coverage supports repeatable market and SERP analysis.

**−**

- It does not operate advertising accounts.
- Usage-based API costs need monitoring.
- Raw results still require paid-media judgement before action.

**Access:** OAuth for hosted HTTP or API credentials for CLI and local stdio.

**Watch:** This supplies research data; it does not control paid-media accounts. API modules are billed and enabled separately.

**Sources:** [Official MCP and CLI repository](https://github.com/dataforseo/mcp-server-typescript) · [DataForSEO API documentation](https://docs.dataforseo.com/v3/) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Airbyte

**B+ · Test**

Airbyte exposes an agent MCP for working with connected data and a separate knowledge MCP for product documentation.

**Interfaces:** MCP: Official agent MCP · Plugin: No separate official agent plugin verified · CLI: abctl for local deployment · API/SDK: Python SDK and HTTP API

**+**

- Official agent MCP can expose useful connector and data-movement context.
- Large connector ecosystem supports cross-channel data collection.
- Open-source and managed routes give teams deployment choice.

**−**

- MCP control is mixed and depends on the configured interface.
- Self-hosting adds operational overhead.
- It is infrastructure rather than a marketer-facing daily interface.

**Access:** Airbyte account or instance, configured sources and destinations.

**Watch:** Do not confuse the documentation-search MCP with the agent MCP that can act on connected data.

**Sources:** [Airbyte MCP interface](https://docs.airbyte.com/ai-agents/interfaces/mcp) · [Airbyte documentation](https://docs.airbyte.com/) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Fivetran

**A- · Test**

Fivetran's Agent Context MCP exposes governed data context; its Connector SDK adds a CLI and official coding-agent integrations.

**Interfaces:** MCP: Official public preview · Plugin: Official Connector SDK agent plugins · CLI: Connector SDK CLI · API/SDK: REST API and Connector SDK

**+**

- Mature managed data movement supports reliable recurring pipelines.
- Official MCP, agent plugins and Connector SDK CLI cover several technical workflows.
- Read-only MCP control is a sensible context boundary.

**−**

- Agent Context MCP is still a public preview.
- The MCP is not a substitute for connector operations or warehouse permissions.
- Enterprise cost and administration may be disproportionate for a small stack.

**Access:** Fivetran Context Layer for MCP; account permissions for API and SDK workflows.

**Watch:** The MCP is a context and retrieval surface, not a substitute for connector operations or warehouse access controls.

**Sources:** [Agent Context MCP](https://fivetran.com/docs/context-layer/agent-context-mcp) · [Connector SDK AI tools](https://fivetran.com/docs/connector-sdk/building-connectors/ai-tools) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Google MCP Toolbox for Databases

**A- · Production**

Google's open-source MCP toolbox connects agents to BigQuery and other databases through explicitly configured tools.

**Interfaces:** MCP: Official, open source · Plugin: Gemini CLI extensions · CLI: toolbox CLI · API/SDK: BigQuery and database connectors

**+**

- Official open-source toolbox exposes governed database tools through MCP.
- Supports BigQuery and other common production data stores.
- CLI and Gemini extensions help teams package repeatable access.

**−**

- It is not a paid-media connector by itself.
- Read/write risk depends entirely on tool definitions and database roles.
- Secure configuration requires data-engineering discipline.

**Access:** Self-hosted configuration plus database credentials and permissions.

**Watch:** This is a general database layer, not a paid-media connector. Read/write risk depends entirely on the configured tools and database role.

**Sources:** [Official MCP Toolbox repository](https://github.com/googleapis/mcp-toolbox) · [Toolbox documentation](https://mcp-toolbox.dev/documentation/introduction/) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Snowflake

**A · Production**

Snowflake's managed MCP lets agents reach governed Snowflake capabilities without deploying a separate server.

**Interfaces:** MCP: Official managed MCP · Plugin: No dedicated paid-media plugin verified · CLI: Snowflake CLI · API/SDK: Drivers, APIs and SDKs

**+**

- Official managed MCP works inside Snowflake's role and governance model.
- Strong foundation for cross-channel measurement and governed client data.
- Official CLI, APIs and drivers support serious production engineering.

**−**

- It needs warehouse, role and cost governance expertise.
- Mixed control can expose consequential writes when roles are too broad.
- It is infrastructure, not a ready-made paid-media workflow.

**Access:** Snowflake account, Cortex Agent configuration and role permissions.

**Watch:** Warehouse permissions remain the real control plane. Scope roles and exposed tools narrowly.

**Sources:** [Snowflake-managed MCP server](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) · [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index) · Verified 5 Sept 2026

[Back to index](#quick-index)

## Automation and workflow



### Zapier

**A- · Production**

Zapier MCP lets assistants call scoped actions across Zapier's app catalogue; the Platform CLI is for building Zapier integrations.

**Interfaces:** MCP: Official remote MCP · Plugin: MCP tool bundles, not a separate plugin · CLI: Zapier Platform CLI · API/SDK: Zapier Platform

**+**

- Official MCP reaches a broad catalogue of business applications.
- Read/write actions make it useful for practical cross-tool workflows.
- Platform CLI supports maintained custom integrations.

**−**

- Connector depth and field coverage vary by application.
- Broad action access can create unintended external changes.
- Task limits and commercial plans can constrain high-volume operations.

**Access:** Zapier account and connected apps; each successful MCP call consumes tasks.

**Watch:** A broad action catalogue can create real external changes. Keep servers client-specific and tools narrowly scoped.

**Sources:** [What is Zapier MCP?](https://help.zapier.com/hc/en-us/articles/48308034391821-What-is-Zapier-MCP) · [Zapier Platform CLI](https://docs.zapier.com/integrations/build-cli/overview) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Pipedream

**A- · Production**

Pipedream provides hosted MCP servers across thousands of APIs, managed authentication, an SDK and a full `pd` CLI.

**Interfaces:** MCP: Official remote MCP · Plugin: No separate official agent plugin verified · CLI: pd CLI · API/SDK: Connect SDK and API

**+**

- Official MCP and CLI support flexible API-based automation.
- Code steps handle gaps that fixed connectors cannot cover.
- Strong fit for event-driven media and measurement workflows.

**−**

- More engineering-oriented than a typical marketer tool.
- Credential and secret handling needs careful ownership.
- Failures can cross several connected systems and need monitoring.

**Access:** Pipedream account; connected-app credentials are managed by Pipedream.

**Watch:** Tools inherit the permissions of connected accounts. Review annotations and separate development from production.

**Sources:** [Pipedream MCP servers](https://pipedream.com/docs/connect/mcp) · [Pipedream CLI reference](https://pipedream.com/docs/cli/reference) · Verified 5 Sept 2026

[Back to index](#quick-index)

### n8n

**A · Test**

n8n can expose an instance or a single workflow through MCP, and can also consume external MCP tools inside workflows.

**Interfaces:** MCP: Official built-in MCP, beta · Plugin: Native nodes and skills, not a separate plugin · CLI: n8n CLI · API/SDK: Public API and workflow nodes

**+**

- Built-in MCP can build, test and run real workflows.
- Self-hosting gives strong control over data and credentials.
- Large node ecosystem and code support fit complex agency operations.

**−**

- The built-in MCP remains beta.
- Workflow execution can trigger consequential writes across connected tools.
- Self-hosted production use requires monitoring, upgrades and incident ownership.

**Access:** n8n instance; enable MCP per instance and workflow, with user-scoped access.

**Watch:** Connected clients may share the same enabled workflow set. Workflow execution can trigger credentials and external writes.

**Sources:** [Connect to n8n MCP server](https://docs.n8n.io/connect/connect-to-n8n-mcp-server) · [MCP server tools reference](https://docs.n8n.io/connect/connect-to-n8n-mcp-server/mcp-server-tools-reference) · Verified 5 Sept 2026

[Back to index](#quick-index)

## Modelling and experimentation



### Meridian

**B+ · Research**

Google's open-source marketing mix modelling framework for estimating incremental impact and informing budget allocation.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: Python package, not a dedicated CLI · API/SDK: Open-source Python package

**+**

- Google-backed open-source marketing-mix modelling package.
- Useful for incrementality and budget-allocation questions beyond platform attribution.
- Python package can be made reproducible in a governed modelling workflow.

**−**

- No official MCP, plugin or dedicated CLI was verified.
- Requires statistical skill and suitable historical data.
- It is not a daily campaign-operation interface.

**Access:** Open source; requires model-ready historical data and Python expertise.

**Watch:** A model library is not an autonomous media optimiser. Inputs, priors, validation and decision rules remain practitioner work.

**Sources:** [Official Meridian repository](https://github.com/google/meridian) · Verified 5 Sept 2026

[Back to index](#quick-index)

### Robyn

**B · Research**

Meta's open-source marketing mix modelling package for estimating channel contribution and budget scenarios.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: R and Python package, not a dedicated CLI · API/SDK: Open-source R and Python package

**+**

- Established open-source marketing-mix modelling project from Meta.
- Supports automated model exploration and budget-allocation analysis.
- R and Python routes broaden analyst access.

**−**

- No official MCP or marketer-facing CLI was verified.
- Model selection and calibration still require specialist judgement.
- Outputs do not translate directly into safe platform changes.

**Access:** Open source; requires prepared data and statistical modelling expertise.

**Watch:** Robyn produces model outputs, not campaign changes. Treat automated budget recommendations as hypotheses requiring review.

**Sources:** [Official Robyn repository](https://github.com/facebookexperimental/Robyn) · Verified 5 Sept 2026

[Back to index](#quick-index)

### PyMC-Marketing

**B · Research**

An open-source Bayesian marketing analytics package covering marketing mix modelling and customer-lifetime-value work.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: Python package, not a dedicated CLI · API/SDK: Open-source Python package

**+**

- Flexible Bayesian tooling for media-mix and customer-value modelling.
- Open source and inspectable for teams that need methodological control.
- Python ecosystem supports custom analysis and reproducibility.

**−**

- Requires strong Python and statistical expertise.
- No official MCP, plugin or dedicated workflow CLI was verified.
- It is a modelling library rather than a daily media-operations product.

**Access:** Open source; requires Python and Bayesian modelling expertise.

**Watch:** The package supports analysis. It does not provide a governed connection to advertising accounts.

**Sources:** [PyMC-Marketing repository](https://github.com/pymc-labs/pymc-marketing) · [PyMC-Marketing documentation](https://www.pymc-marketing.io/en/stable/) · Verified 5 Sept 2026

[Back to index](#quick-index)

## Contributing

Facts and opinion are kept separate. Corrections to tool capabilities need a vendor source and fresh verification date. Rating changes need a short operational rationale. See [CONTRIBUTING.md](CONTRIBUTING.md).

Maintained by [The Detail Department](https://detail-department.com/). No vendor sponsorship or client relationship is implied.

MIT licensed. Vendor capabilities remain subject to their respective terms and access rules.
