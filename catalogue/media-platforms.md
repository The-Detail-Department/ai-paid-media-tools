# Media platforms

Advertising platforms and buying systems, judged on the most direct official route available to an AI-assisted operator.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics and measurement](analytics-measurement.md) · [Creative and images](creative-images.md) · [Data and research](data-research.md) · [Automation and workflow](automation-workflow.md) · [Modelling and experimentation](modelling-experimentation.md)

| Tool | Grade | Readiness | Setup | Read | Create | Modify | Delete | Coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [TikTok for Business](#tiktok-for-business) | **A** | Production | Easy | Yes | Yes | Yes | Partial | Broad |
| [Amazon Ads](#amazon-ads) | **B+** | Test | Hard | Yes | Yes | Yes | Yes | Broad |
| [Campaign Manager 360](#campaign-manager-360) | **B** | Production | Hard | Yes | Yes | Yes | Partial | Broad |
| [The Trade Desk](#the-trade-desk) | **B** | Test | Hard | Yes | Yes | Yes | Partial | Broad |
| [Apple Ads](#apple-ads) | **B-** | Production | Hard | Yes | Yes | Yes | Partial | Partial |
| [Display & Video 360](#display--video-360) | **B-** | Production | Hard | Yes | Yes | Yes | Partial | Partial |
| [Google Ads](#google-ads) | **B-** | Production | Hard | Yes | No | No | No | Narrow |
| [Meta Ads](#meta-ads) | **B-** | Test | Easy | Yes | Partial | No | No | Partial |
| [X Ads](#x-ads) | **B-** | Test | Hard | Yes | Partial | Partial | Partial | Partial |
| [Microsoft Advertising](#microsoft-advertising) | **C+** | Production | Easy | Yes | No | No | No | Narrow |
| [Search Ads 360](#search-ads-360) | **C+** | Production | Hard | Yes | No | No | No | Narrow |
| [Pinterest Ads](#pinterest-ads) | **C+** | Test | Hard | Yes | Yes | Yes | Partial | Partial |
| [LinkedIn Ads](#linkedin-ads) | **C** | Test | Hard | Yes | Partial | Partial | Partial | Partial |
| [Reddit Ads](#reddit-ads) | **C** | Test | Hard | Yes | Partial | Partial | Partial | Partial |
| [Snapchat Ads](#snapchat-ads) | **C** | Test | Hard | Yes | No | No | No | Narrow |

## TikTok for Business

**A · Production**

A vendor-hosted MCP for campaign management, reporting, audiences and creative operations, with full and progressive-disclosure endpoints.

> **Blocker:** The full endpoint loads an enormous tool surface. Progressive disclosure is safer and easier for daily use.

- **Route:** Official remote MCP.
- **Scope:** Campaigns, ad groups, ads, audiences, creative and reporting.
- **Setup:** Easy. Hosted OAuth connection with no developer token, API key management or custom code.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Broad. Around 400 tools cover creation, targeting, bidding, reporting and creative operations. Some manual and account workflows remain outside the route.

**Good**

- Official remote MCP covers campaign, reporting, audience and creative work.
- Read/write capability makes it useful beyond analysis.
- The interface is designed for advertiser workflows rather than a generic API bridge.

**Limits**

- Broad write permissions increase the cost of a bad instruction.
- Business account eligibility and permissions still govern availability.
- No dedicated official CLI was verified.

**Interfaces**

- **MCP:** [Official remote MCP](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [TikTok API for Business](https://business-api.tiktok.com/portal/docs)

- **Access:** TikTok for Business account and OAuth permissions.
- **Commercial:** Affiliate. [TikTok for Business Affiliate Program](https://getstarted.tiktok.com/affiliates?lang=en-PH). Impact-hosted programme with a flat-fee bounty for qualified new advertisers.
- **Watch:** The broad endpoint exposes hundreds of tools. Progressive disclosure is safer for smaller agent contexts.
- **Sources:** [TikTok for Business MCP documentation](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en) · [API for Business documentation](https://business-api.tiktok.com/portal/docs)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Amazon Ads

**B+ · Test**

An official MCP layer over Amazon Ads API functionality, including multi-step tools for campaign creation, reporting and market expansion.

> **Blocker:** Strong action coverage is offset by partner-only API access and beta maturity.

- **Route:** Official remote MCP, open beta.
- **Scope:** Campaigns, accounts, reports, billing and selected multi-step workflows.
- **Setup:** Hard. Limited to Amazon Ads partners with active API credentials despite the hosted MCP route.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Yes**
- **Coverage:** Broad. Includes individual API capabilities plus tools for account creation, reports, campaign launch and locale expansion.

**Good**

- Official MCP can create, update and delete campaign objects.
- Retail-media context makes it strategically important.
- Uses the established Amazon Ads API permission model.

**Limits**

- The MCP is still an open beta.
- Access is limited to partners with active API credentials.
- Destructive campaign operations require strong human approval gates.

**Interfaces**

- **MCP:** [Official open beta](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Amazon Ads API](https://advertising.amazon.com/en-ca/about-api)

- **Access:** Open beta for Amazon Ads partners with active API credentials.
- **Commercial:** Partner. [Amazon Ads Partner Network](https://advertising.amazon.com/partners/network). Self-service agency and tool-provider network. Amazon Associates is a separate retail affiliate programme.
- **Watch:** The MCP can create, update and delete campaigns. Use review and approval controls before execution.
- **Sources:** [Amazon Ads MCP announcement](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta) · [Amazon Ads API](https://advertising.amazon.com/en-ca/about-api)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Campaign Manager 360

**B · Production**

The Campaign Manager 360 API supports large-scale trafficking, creative, conversion, reporting and attribution workflows.

> **Blocker:** The API can do serious production work, but permissions and resource complexity demand engineering and a second-person check.

- **Route:** Official API.
- **Scope:** Campaigns, placements, ads, creatives, conversions and reports.
- **Setup:** Hard. Requires a CM360 account with API access, user-profile permissions, Google Cloud and OAuth.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Broad. Strong trafficking and measurement coverage, but no official agent interface packages the resource model for daily use.

**Good**

- Mature API supports trafficking, creative, conversion and reporting workflows.
- Broad resource coverage suits complex enterprise operations.
- User-profile permissions remain the control plane.

**Limits**

- No official MCP, plugin or dedicated CLI was verified.
- The resource model and permissions create implementation overhead.
- Write access can affect live trafficking and needs a second-person check.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Campaign Manager 360 API](https://developers.google.com/doubleclick-advertisers/rest/)

- **Access:** A Campaign Manager 360 account with API access, a permitted user profile, a Google Cloud project and OAuth 2.0 credentials.
- **Commercial:** Partner. [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme. Not a public affiliate programme.
- **Watch:** Many resources are writable. User-profile permissions in Campaign Manager 360 govern what the API can change.
- **Sources:** [Campaign Manager 360 API](https://developers.google.com/doubleclick-advertisers/rest/) · [Campaign Manager 360 API setup](https://developers.google.com/doubleclick-advertisers/getting_started)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## The Trade Desk

**B · Test**

The Trade Desk's Open Agentic Kit provides MCP-based access to Ask Koa for platform data and actions, including campaign creation and monitoring.

> **Blocker:** It may be powerful, but most teams cannot evaluate or adopt it without vendor selection.

- **Route:** Official OAK MCP, private beta.
- **Scope:** Campaign planning, activation, optimisation and reporting.
- **Setup:** Hard. Available only to selected partners through an account representative, with account-managed credentials.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Broad. Published scope spans data and actions, but exact tool coverage is not public and access is private beta.

**Good**

- Official OAK MCP connects AI assistants to Ask Koa.
- Published scope includes querying data, creating campaigns and monitoring live activity.
- The underlying REST and GraphQL APIs cover substantial platform operations.

**Limits**

- OAK is available only to selected partners in private beta.
- Broad action scope makes approval and audit controls essential.
- Practical onboarding still depends on an account representative.

**Interfaces**

- **MCP:** [Official OAK MCP, private beta](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates)
- **Plugin:** No separate official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Platform REST and GraphQL APIs](https://partner.thetradedesk.com/v3/portal/api/doc/ApiUsageGuidelines)

- **Access:** OAK is available to selected partners in private beta through their account representative. API credentials are also account-managed.
- **Commercial:** Partner. [The Trade Desk partner ecosystem](https://www.thetradedesk.com/us/partners). Vendor partnership route. No public affiliate programme was verified.
- **Watch:** Published scope includes both data and actions. Treat campaign creation and other platform mutations as approval-gated operations.
- **Sources:** [OAK private beta release note](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates) · [Open Agentic Kit definition](https://partner.thetradedesk.com/v3/portal/resources/doc/Glossary) · [Platform API usage](https://partner.thetradedesk.com/v3/portal/api/doc/ApiUsageGuidelines)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Apple Ads

**B- · Production**

Apple's Platform API lets advertisers and agencies manage campaigns, ad groups and keywords, pull reports and work with App Store and Apple Maps ads.

> **Blocker:** The official API is capable, but there is no direct assistant workflow without custom implementation.

- **Route:** Official Platform API.
- **Scope:** Campaigns, ad groups, keywords and reports.
- **Setup:** Hard. Requires an eligible API role, OAuth credentials and custom agent integration. Providers register separately.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Partial. Core campaign operations are covered, but no official MCP, agent plugin or daily CLI was verified.

**Good**

- Official API supports campaign, ad-group, keyword and reporting work.
- API roles distinguish read-only from read/write access.
- Covers ads on the App Store and Apple Maps.

**Limits**

- No official MCP, plugin or dedicated CLI was verified.
- Third-party providers require separate registration.
- Daily AI use needs a custom integration and careful OAuth setup.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Apple Ads Platform API](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api)

- **Access:** An Apple Ads API user with an eligible role and OAuth 2.0 credentials; third-party providers require separate registration.
- **Commercial:** Partner. [Apple Ads agency account path](https://ads.apple.com/maps/agencies). Supports delegated agency management. No Apple Ads-specific public affiliate programme was verified.
- **Watch:** API roles can be read-only or read-write. Verify the assigned role before using an automation layer.
- **Sources:** [Apple Ads Platform API](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api) · [Apple Ads API resources](https://ads.apple.com/app-store/resources)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Display & Video 360

**B- · Production**

Google's DV360 API can manage advertisers, campaigns, insertion orders, line items, targeting, creatives and users. Reporting uses a separate Bid Manager API.

> **Blocker:** An operator needs two API surfaces for build plus performance and still cannot reproduce every manual workflow.

- **Route:** Official API.
- **Scope:** Advertisers, campaigns, insertion orders, line items, targeting and creatives.
- **Setup:** Hard. Requires Google Cloud, OAuth, DV360 account permissions and a custom agent layer.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Partial. Broad trafficking coverage, but performance reporting is separate and some YouTube and Partners writes are unsupported.

**Good**

- Mature official API covers core programmatic campaign resources.
- Supports insertion orders, line items, targeting, creatives and users.
- Role-based access can separate read, standard and admin operations.

**Limits**

- No official MCP or agent plugin was verified.
- Performance reporting requires the separate Bid Manager API.
- Some YouTube and Partners write workflows remain outside the API.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Display & Video 360 API](https://developers.google.com/display-video/api)

- **Access:** A Google Cloud project, OAuth 2.0 and a DV360 user with access to the relevant partner or advertiser.
- **Commercial:** Partner. [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme. Not a public affiliate programme.
- **Watch:** The API can retrieve, create and update resources, but it does not return performance data and does not support every YouTube & Partners write workflow.
- **Sources:** [DV360 API overview](https://developers.google.com/display-video/api) · [DV360 API limitations and permissions](https://developers.google.com/display-video/api/support/faq)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Google Ads

**B- · Production**

Queries account structure and performance through Google Ads Query Language. The current official MCP surface is read-only.

> **Blocker:** It cannot create an ad, change a bid or budget, pause an entity or fix the issue it finds.

- **Route:** Official MCP.
- **Scope:** Campaign and performance data.
- **Setup:** Hard. Requires Python, a Google Ads developer token, a Google Cloud project, enabled APIs, OAuth credentials and MCP client configuration.
- **Controls:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Narrow. Account discovery, metadata and GAQL queries. Campaign building and optimisation still happen elsewhere.

**Good**

- Official, maintained MCP with a clear read boundary.
- Google Ads Query Language supports detailed account and performance diagnosis.
- Useful as a reporting and second-pair-of-eyes surface once configured.

**Limits**

- The MCP cannot create, modify or delete any campaign object.
- Setup requires Python, a developer token, Google Cloud, enabled APIs, OAuth and client configuration.
- The workflow stops at diagnosis and cannot perform the optimisation it recommends.

**Interfaces**

- **MCP:** [Official, open source](https://github.com/googleads/google-ads-mcp)
- **Plugin:** No official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Google Ads API and client libraries](https://developers.google.com/google-ads/api/docs/start)

- **Access:** Developer token, Google Cloud project and account credentials.
- **Commercial:** Partner. [Google Partners](https://support.google.com/google-ads/answer/9029203?hl=en). Agency recognition, training and support. Not a public cash affiliate programme.
- **Watch:** The MCP can inspect but cannot create or change campaigns. API access levels still apply.
- **Sources:** [Official MCP repository](https://github.com/googleads/google-ads-mcp) · [Google Ads API documentation](https://developers.google.com/google-ads/api/docs/start)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Meta Ads

**B- · Test**

Meta's hosted Ads AI Connector brings campaign data and actions into compatible assistants through MCP.

> **Blocker:** A workflow can create supported objects, then still send the operator back to Ads Manager to make ordinary changes.

- **Route:** Official remote MCP, open beta.
- **Scope:** Campaigns, ad sets, ads and insights.
- **Setup:** Easy. Add the hosted connector and authorise the Meta account. Availability still rolls out by account and tool.
- **Controls:** Read **Yes** · Create **Partial** · Modify **No** · Delete **No**
- **Coverage:** Partial. Creation and analysis are present, but the current beta does not provide dependable general modification of existing campaign objects.

**Good**

- Hosted OAuth makes the connector much easier to add than a custom Marketing API integration.
- It can read performance and campaign structure in the assistant.
- It can create supported campaign, ad-set and ad objects.

**Limits**

- The current beta does not provide dependable general modification of existing campaign objects.
- Availability still varies by ad account and by individual tool.
- Creation without ordinary follow-up editing sends the operator back to Ads Manager.

**Interfaces**

- **MCP:** [Official open beta](https://mcp.facebook.com/ads)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Marketing API](https://developers.facebook.com/docs/marketing-apis/)

- **Access:** Open beta; account and regional availability may vary.
- **Commercial:** Partner. [Meta Business Partners](https://www.facebook.com/business/marketing-partners). Vetted services and technology ecosystem. No public commission-paying Ads affiliate programme was verified.
- **Watch:** Inspect the authenticated tool list and permissions before allowing campaign changes.
- **Sources:** [Meta Ads AI Connectors announcement](https://www.facebook.com/business/news/meta-ads-ai-connectors) · [Marketing APIs](https://developers.facebook.com/docs/marketing-apis/)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## X Ads

**B- · Test**

The X Ads API exposes advertiser resources and reporting, while X's xurl CLI can make authenticated requests and ships with an official agent skill.

> **Blocker:** A useful official CLI exists, but there is no supported Ads-specific MCP or turn-key campaign workflow.

- **Route:** Official xurl CLI and Ads API.
- **Scope:** Advertiser resources, campaigns and reporting.
- **Setup:** Hard. Requires developer and Ads API access, CLI authentication and endpoint-level implementation.
- **Controls:** Read **Yes** · Create **Partial** · Modify **Partial** · Delete **Partial**
- **Coverage:** Partial. The CLI is agent-friendly, but the general X MCP does not establish Ads coverage and some Ads endpoints are allowlisted.

**Good**

- Official xurl CLI gives agents and operators a practical API route.
- xurl ships with an official agent skill.
- The Ads API supports advertiser resources and reporting.

**Limits**

- No official Ads-specific MCP was verified.
- The general X MCP should not be assumed to cover advertising endpoints.
- Ads API access and endpoint availability can be gated.

**Interfaces**

- **MCP:** No official Ads MCP verified
- **Plugin:** [xurl agent skill](https://github.com/xdevplatform/xurl/blob/main/SKILL.md)
- **CLI:** [xurl CLI](https://github.com/xdevplatform/xurl)
- **API / SDK:** [X Ads API](https://docs.x.com/x-ads-api/introduction)

- **Access:** Developer account and Ads API access; some endpoints require allowlisting.
- **Commercial:** Partner. [X Official Partner directory](https://docs.x.com/enterprise/partner-directory). Selected enterprise partner ecosystem. No public X Ads affiliate programme was verified.
- **Watch:** X also operates a general X API MCP, but its published tool list does not establish Ads API coverage. Do not label it an Ads MCP without endpoint-level proof.
- **Sources:** [X Ads API documentation](https://docs.x.com/x-ads-api/introduction) · [Official xurl repository](https://github.com/xdevplatform/xurl) · [General X API MCP documentation](https://github.com/xdevplatform/docs/blob/main/tools/mcp.mdx)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Microsoft Advertising

**C+ · Production**

Microsoft's governed MCP provides campaign structure, performance queries and audits. Its current documented launch surface is read-only.

> **Blocker:** The product language says manage campaigns, but the documented tool boundary only retrieves and audits data.

- **Route:** Official managed MCP.
- **Scope:** Accounts, campaigns, ad groups, ads, keywords and performance.
- **Setup:** Easy. Connect the managed server to a supported assistant and authenticate the advertising account.
- **Controls:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Narrow. Current launch documentation covers exploration, performance queries and audits, not mutation.

**Good**

- Official managed connection is easier than building against the API.
- Provides entity-level performance data for campaigns, ad groups, ads and keywords.
- Useful for conversational audits and cross-platform reporting.

**Limits**

- The documented launch surface is read-only.
- It cannot create an ad or apply the campaign changes suggested by an audit.
- Broad manage-campaign language on the product page overstates the action boundary described in its FAQ.

**Interfaces**

- **MCP:** [Official managed MCP](https://learninglab.about.ads.microsoft.com/en/solutions/technology/mcp-server)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Microsoft Advertising API](https://learn.microsoft.com/en-us/advertising/)

- **Access:** Microsoft Advertising account and API permissions.
- **Commercial:** Partner. [Microsoft Advertising Partner Program](https://msadvertisingpartnerprogram.powerappsportals.com/welcome). Agency, channel and technology partner programme with spend and tenure requirements. Not a public affiliate programme.
- **Watch:** The launch FAQ documents data retrieval and audits, not campaign creation or modification.
- **Sources:** [Microsoft Advertising MCP](https://learninglab.about.ads.microsoft.com/en/solutions/technology/mcp-server) · [Advertising API documentation](https://learn.microsoft.com/en-us/advertising/)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Search Ads 360

**C+ · Production**

The Search Ads 360 Reporting API provides high-volume, query-based reporting over campaigns, ads, keywords and performance data.

> **Blocker:** It can explain the account but cannot perform the optimisation it recommends.

- **Route:** Official Reporting API.
- **Scope:** Campaign, ad, keyword and performance data.
- **Setup:** Hard. Requires OAuth application credentials, SA360 account access and a custom agent or reporting layer.
- **Controls:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Narrow. High-volume reporting only. Offline conversion upload is a separate surface and ordinary campaign writes are absent.

**Good**

- High-volume official reporting API with a purpose-built query language.
- Immediate access to granular campaign, ad and keyword data.
- REST, gRPC and official client libraries support production pipelines.

**Limits**

- The reporting API is read-only.
- Offline conversions use a separate API surface.
- No official MCP or dedicated agent integration was verified.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Search Ads 360 Reporting API](https://developers.google.com/search-ads/reporting)

- **Access:** OAuth 2.0 application credentials and access to the relevant Search Ads 360 manager or client account.
- **Commercial:** Partner. [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme. Not a public affiliate programme.
- **Watch:** The reporting API is read-only. Offline conversion uploads use a separate Search Ads 360 API surface.
- **Sources:** [Search Ads 360 Reporting API](https://developers.google.com/search-ads/reporting) · [Reporting API overview](https://developers.google.com/search-ads/reporting/overview)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Pinterest Ads

**C+ · Test**

Pinterest's Ads API supports programmatic campaign and reporting workflows. No vendor-backed MCP source was verified.

> **Blocker:** The API is usable, but the AI workflow is yours to engineer and maintain.

- **Route:** Official Ads API.
- **Scope:** Campaigns, ad groups, ads, audiences and reporting.
- **Setup:** Hard. Requires a developer application, authorised ad accounts and a custom agent or integration layer.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Partial. Useful campaign and reporting coverage through the API, without a vendor-backed MCP, plugin or CLI.

**Good**

- Official Ads API supports campaign and reporting workflows.
- Useful specialist channel for visual discovery and commerce.
- An authorised integration can run recurring production tasks.

**Limits**

- No official MCP or agent plugin was verified.
- No dedicated official CLI was verified.
- AI workflows require custom engineering or a maintained intermediary.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Pinterest API for ads](https://dev.pinterest.com/docs/work-with-ads/ads-overview/)

- **Access:** Pinterest developer application and authorised ad accounts.
- **Commercial:** Partner. [Pinterest Business Partners](https://business.pinterest.com/pinterest-business-partners/). Vetted media, creative, commerce and measurement ecosystem. No public Ads affiliate programme was verified.
- **Watch:** Use the API directly or an integration layer, and identify the maintainer of any MCP wrapper.
- **Sources:** [Pinterest API overview](https://developer.pinterest.com/docs/overview/welcome/) · [Ads API overview](https://dev.pinterest.com/docs/work-with-ads/ads-overview/)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## LinkedIn Ads

**C · Test**

LinkedIn's Marketing APIs cover campaign management and reporting. We found community MCP wrappers, but no vendor-backed MCP source.

> **Blocker:** A team cannot simply connect an assistant. It must first win API approval and build and maintain the route.

- **Route:** Official Marketing API.
- **Scope:** Campaigns, reporting, audiences, leads and conversions.
- **Setup:** Hard. Requires a developer application, a defined use case, product access, application vetting and a custom agent layer.
- **Controls:** Read **Yes** · Create **Partial** · Modify **Partial** · Delete **Partial**
- **Coverage:** Partial. The API covers important campaign-management jobs, but access is approved by product and use case and there is no official agent interface.

**Good**

- Official Marketing APIs cover campaign management and reporting.
- Strong fit for B2B audience and lead-generation workflows.
- Production access tiers and permissions are documented.

**Limits**

- No official MCP was verified.
- API product approval and access tiers add friction.
- Daily AI use needs a custom or third-party integration layer.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [LinkedIn Marketing APIs](https://learn.microsoft.com/en-us/linkedin/marketing/)

- **Access:** Developer application, product approval and tier-specific permissions.
- **Commercial:** Partner. [LinkedIn Marketing Partner Program](https://business.linkedin.com/advertise/partners). Vetted programme with API access, directory visibility and possible incentive or revenue-share programmes. Not an open affiliate scheme.
- **Watch:** Do not treat a community wrapper as LinkedIn-supported. Marketing API access is gated by product and tier.
- **Sources:** [Accessing LinkedIn APIs](https://www.linkedin.com/help/linkedin/answer/a526048/accessing-linkedin-apis?lang=en) · [Marketing API access tiers](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/marketing-tiers?view=li-lms-2026-08)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Reddit Ads

**C · Test**

Reddit's Ads API v3 exposes campaign and account operations. No vendor-backed MCP source was verified.

> **Blocker:** API approval and custom integration make this unsuitable as an immediate daily AI workflow.

- **Route:** Official Ads API.
- **Scope:** Accounts, campaigns, ad groups, ads and reporting.
- **Setup:** Hard. Requires an OAuth application, approved advertising access and a custom agent layer.
- **Controls:** Read **Yes** · Create **Partial** · Modify **Partial** · Delete **Partial**
- **Coverage:** Partial. Core campaign operations exist in the API, but no official agent interface was verified.

**Good**

- Official Ads API v3 exposes campaign and account operations.
- Community context can be valuable for specific audience strategies.
- OAuth provides a conventional route for controlled integrations.

**Limits**

- No official MCP, plugin or CLI was verified.
- Advertising API access requires approval.
- A useful daily agent workflow must be built and maintained separately.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Reddit Ads API v3](https://ads-api.reddit.com/docs/)

- **Access:** OAuth application and approved advertising access.
- **Commercial:** Partner. [Reddit Partner Program](https://www.business.reddit.com/solutions/reddit-partnership-overview). Agency, API and data partner programme with badging and directory visibility. No public affiliate commission was verified.
- **Watch:** Community connectors should be checked against the current v3 API and Reddit's access terms.
- **Sources:** [Reddit Ads API v3](https://ads-api.reddit.com/docs/)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Snapchat Ads

**C · Test**

A hosted Ads MCP for retrieving Snapchat campaign data and insights from supported AI clients.

> **Blocker:** It is both gated and read-only, so it cannot carry a campaign from diagnosis to correction.

- **Route:** Official remote MCP, allowlist.
- **Scope:** Campaign data and performance.
- **Setup:** Hard. Requires allowlist access as well as an authenticated advertising account.
- **Controls:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Narrow. Retrieval and analysis only. The broader Marketing API is a separate engineering route.

**Good**

- Official hosted MCP provides campaign retrieval and analysis.
- Read-only control is suitable for a cautious reporting pilot.
- The underlying Marketing API offers a route to deeper integration.

**Limits**

- MCP access is still allowlisted.
- The MCP cannot execute campaign changes.
- No official plugin or dedicated CLI was verified.

**Interfaces**

- **MCP:** [Official, allowlist rollout](https://developers.snap.com/marketing-api/Ads-MCP/Introduction)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Snap Marketing API](https://developers.snap.com/marketing-api/home)

- **Access:** Allowlist rollout and authenticated ad-account access.
- **Commercial:** Affiliate. [Snapchat Affiliate Programme](https://help.snapchat.com/hc/en-gb/articles/36391141656724-About-Snapchat-s-Affiliate-Programme). PartnerStack programme paying a one-time 20% revenue share on eligible advertiser spend during the first 30 days.
- **Watch:** The documented MCP is read-only even though the underlying Marketing API has broader capabilities.
- **Sources:** [Ads MCP introduction](https://developers.snap.com/marketing-api/Ads-MCP/Introduction) · [Connect an agent](https://developers.snap.com/marketing-api/Ads-MCP/connect-an-agent)
- **Verified:** 5 Sept 2026

[Back to comparison](#media-platforms)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
