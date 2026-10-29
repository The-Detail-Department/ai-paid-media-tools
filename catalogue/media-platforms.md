# Media platforms

Advertising platforms and buying systems, judged on the most direct official route available to an AI-assisted operator.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Modify | Delete | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [TikTok for Business](#tiktok-for-business) | **A** | Reference | Production | Easy | Yes | Yes | Yes | Partial | Most steps |
| [Amazon Ads](#amazon-ads) | **B+** | Reference | Test | Hard | Yes | Yes | Yes | Yes | Most steps |
| [Campaign Manager 360](#campaign-manager-360) | **B** | Reference | Production | Hard | Yes | Yes | Yes | Partial | Most steps |
| [The Trade Desk](#the-trade-desk) | **B** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Most steps |
| [X Ads](#x-ads) | **B** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Most steps |
| [Apple Ads](#apple-ads) | **B-** | Reference | Production | Hard | Yes | Yes | Yes | Partial | Some steps |
| [Display & Video 360](#display--video-360) | **B-** | Reference | Production | Hard | Yes | Yes | Yes | Partial | Some steps |
| [Google Ads](#google-ads) | **B-** | Reference | Production | Hard | Yes | No | No | No | Assist only |
| [Meta Ads](#meta-ads) | **B-** | Reference | Test | Easy | Yes | Partial | No | No | Some steps |
| [Microsoft Advertising](#microsoft-advertising) | **C+** | Reference | Production | Easy | Yes | No | No | No | Assist only |
| [Search Ads 360](#search-ads-360) | **C+** | Reference | Production | Hard | Yes | No | No | No | Assist only |
| [Pinterest Ads](#pinterest-ads) | **C+** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Some steps |
| [LinkedIn Ads](#linkedin-ads) | **C** | Reference | Test | Hard | Yes | Partial | Partial | Partial | Some steps |
| [Reddit Ads](#reddit-ads) | **C** | Reference | Test | Hard | Yes | Partial | Partial | Partial | Some steps |
| [Snapchat Ads](#snapchat-ads) | **C** | Reference | Test | Hard | Yes | No | No | No | Assist only |

## TikTok for Business

**A · Production · Reference**

A vendor-hosted MCP for campaign management, reporting, audiences and creative operations, with full and progressive-disclosure endpoints.

**Day to day**

- Build campaigns and adjust supported bids or targeting.
- Check results and manage supported creative assets.

> **What still needs you:** Choose the tools needed for the task and review changes before launch. Loading every available tool makes daily use harder.

- **Route:** Official remote MCP.
- **Scope:** Campaigns, ad groups, ads, audiences, creative and reporting.
- **Setup:** Easy. Connect the hosted service and approve account access. Check which advertising tools your account receives.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Most steps. Around 400 tools cover creation, targeting, bidding, reporting and creative operations. Some manual and account workflows remain outside the route.
- **Evidence basis:** Documentation reviewed

**Good**

- Official remote MCP covers campaign, reporting, audience and creative work.
- Read/write capability makes it useful beyond analysis.
- The interface is designed for advertiser workflows rather than a generic API bridge.

**Limits**

- Broad write permissions increase the cost of a bad instruction.
- Business account eligibility and permissions still govern availability.
- No dedicated official CLI was verified.

**Official links**

- **Product / official page:** [TikTok for Business MCP documentation](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en)
- **AI interface / endpoint:** [Official remote MCP](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en)
- **MCP:** [Official remote MCP](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [TikTok API for Business](https://business-api.tiktok.com/portal/docs)
- **Documentation:** [TikTok for Business MCP documentation](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en)
- **GitHub:** No official repository verified

- **Access:** TikTok for Business account and OAuth permissions.
- **Watch:** The broad endpoint exposes hundreds of tools. Progressive disclosure is safer for smaller agent contexts.
- **Sources:** [TikTok for Business MCP documentation](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en) · [API for Business documentation](https://business-api.tiktok.com/portal/docs)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Amazon Ads

**B+ · Test · Reference**

An official MCP layer over Amazon Ads API functionality, including multi-step tools for campaign creation, reporting and market expansion.

**Day to day**

- Create or update supported campaigns.
- Request reports and prepare campaigns for additional markets.

> **What still needs you:** Partner API access is required, and the connection is still in beta. Check the actions available to your account.

- **Route:** Official remote MCP, open beta.
- **Scope:** Campaigns, accounts, reports, billing and selected multi-step workflows.
- **Setup:** Hard. An eligible Amazon Ads partner needs active API credentials. A hosted connector does not remove that access requirement.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Yes**
- **Coverage:** Most steps. Includes individual API capabilities plus tools for account creation, reports, campaign launch and locale expansion.
- **Evidence basis:** Documentation reviewed

**Good**

- Official MCP can create, update and delete campaign objects.
- Retail-media context makes it strategically important.
- Uses the established Amazon Ads API permission model.

**Limits**

- The MCP is still an open beta.
- Access is limited to partners with active API credentials.
- Destructive campaign operations require strong human approval gates.

**Official links**

- **Product / official page:** [Amazon Ads MCP announcement](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta)
- **AI interface / endpoint:** [Official open beta](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta)
- **MCP:** [Official open beta](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Amazon Ads API](https://advertising.amazon.com/en-ca/about-api)
- **Documentation:** [Amazon Ads MCP announcement](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta)
- **GitHub:** No official repository verified

- **Access:** Open beta for Amazon Ads partners with active API credentials.
- **Watch:** The MCP can create, update and delete campaigns. Use review and approval controls before execution.
- **Sources:** [Amazon Ads MCP announcement](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta) · [Amazon Ads API](https://advertising.amazon.com/en-ca/about-api)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Campaign Manager 360

**B · Production · Reference**

The Campaign Manager 360 API supports large-scale trafficking, creative, conversion, reporting and attribution workflows.

**Day to day**

- Manage placements, ads and creatives.
- Retrieve trafficking and measurement data.

> **What still needs you:** A developer must map the account permissions and linked campaign objects. A second person should check the finished setup.

- **Route:** Official API.
- **Scope:** Campaigns, placements, ads, creatives, conversions and reports.
- **Setup:** Hard. A developer must configure Google Cloud and account authentication. The CM360 account and user profile need API permission.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Most steps. Strong trafficking and measurement coverage, but no official agent interface packages the resource model for daily use.
- **Evidence basis:** Documentation reviewed

**Good**

- Mature API supports trafficking, creative, conversion and reporting workflows.
- Broad resource coverage suits complex enterprise operations.
- User-profile permissions remain the control plane.

**Limits**

- No official MCP, plugin or dedicated CLI was verified.
- The resource model and permissions create implementation overhead.
- Write access can affect live trafficking and needs a second-person check.

**Official links**

- **Product / official page:** [Campaign Manager 360 API](https://developers.google.com/doubleclick-advertisers/rest/)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Campaign Manager 360 API](https://developers.google.com/doubleclick-advertisers/rest/)
- **Documentation:** [Campaign Manager 360 API](https://developers.google.com/doubleclick-advertisers/rest/)
- **GitHub:** No official repository verified

- **Access:** A Campaign Manager 360 account with API access, a permitted user profile, a Google Cloud project and OAuth 2.0 credentials.
- **Watch:** Many resources are writable. User-profile permissions in Campaign Manager 360 govern what the API can change.
- **Sources:** [Campaign Manager 360 API](https://developers.google.com/doubleclick-advertisers/rest/) · [Campaign Manager 360 API setup](https://developers.google.com/doubleclick-advertisers/getting_started)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## The Trade Desk

**B · Test · Reference**

The Trade Desk's Open Agentic Kit provides MCP-based access to Ask Koa for platform data and actions, including campaign creation and monitoring.

**Day to day**

- Explore the data and actions enabled for your beta account.
- Confirm the available tools with your account team before planning a workflow.

> **What still needs you:** Your account team must confirm eligibility and available tools. Most teams cannot test this beta on their own.

- **Route:** Official OAK MCP, private beta.
- **Scope:** Campaign planning, activation, optimisation and reporting.
- **Setup:** Hard. Available only to selected partners through an account representative, with account-managed credentials.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Most steps. Published scope spans data and actions, but exact tool coverage is not public and access is private beta.
- **Evidence basis:** Documentation reviewed

**Good**

- Official OAK MCP connects AI assistants to Ask Koa.
- Published scope includes querying data, creating campaigns and monitoring live activity.
- The underlying REST and GraphQL APIs cover substantial platform operations.

**Limits**

- OAK is available only to selected partners in private beta.
- Broad action scope makes approval and audit controls essential.
- Practical onboarding still depends on an account representative.

**Official links**

- **Product / official page:** [OAK private beta release note](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates)
- **AI interface / endpoint:** [Official OAK MCP, private beta](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates)
- **MCP:** [Official OAK MCP, private beta](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates)
- **Plugin:** No separate official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Platform REST and GraphQL APIs](https://partner.thetradedesk.com/v3/portal/api/doc/ApiUsageGuidelines)
- **Documentation:** [OAK private beta release note](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates)
- **GitHub:** No official repository verified

- **Access:** OAK is available to selected partners in private beta through their account representative. API credentials are also account-managed.
- **Watch:** Published scope includes both data and actions. Treat campaign creation and other platform mutations as approval-gated operations.
- **Sources:** [OAK private beta release note](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates) · [Open Agentic Kit definition](https://partner.thetradedesk.com/v3/portal/resources/doc/Glossary) · [Platform API usage](https://partner.thetradedesk.com/v3/portal/api/doc/ApiUsageGuidelines)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## X Ads

**B · Test · Reference**

X Ads has an official hosted MCP for campaign creation and updates, targeting, audiences, creative assets and reporting.

**Day to day**

- Build paused campaigns and line items.
- Update supported targeting, audiences and creative assets.

> **What still needs you:** Review paused campaigns before activating them: activation can start spend. Some Ads API operations remain outside the MCP.

- **Route:** Official hosted Ads MCP.
- **Scope:** Advertiser resources, campaigns and reporting.
- **Setup:** Hard. A developer must register an X app, enable Ads access and configure account authentication with the required permissions.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Most steps. Read accounts and results, create and update campaigns and line items, manage targeting and supported creative and audience objects.
- **Evidence basis:** Documentation reviewed

**Good**

- Official Ads-specific MCP documents campaign and line-item writes.
- New campaigns and line items start paused, with separate activation tools.
- Includes targeting, creative, audience and conversion-tracking tools.

**Limits**

- Developer-app and Ads access remain prerequisites.
- Campaign deletion is not in the documented MCP tool list.
- Activation and budget changes require explicit operating controls.

**Official links**

- **Product / official page:** [X Ads MCP tools and authentication](https://docs.x.com/x-ads-api/mcp)
- **AI interface / endpoint:** [https://ads-api.x.com/mcp](https://ads-api.x.com/mcp)
- **MCP:** [Official X Ads MCP](https://docs.x.com/x-ads-api/mcp)
- **Plugin:** [xurl agent skill](https://github.com/xdevplatform/xurl/blob/main/SKILL.md)
- **CLI:** [xurl CLI](https://github.com/xdevplatform/xurl)
- **API / SDK:** [X Ads API](https://docs.x.com/x-ads-api/introduction)
- **Documentation:** [X Ads MCP tools and authentication](https://docs.x.com/x-ads-api/mcp)
- **GitHub:** [Official xurl repository](https://github.com/xdevplatform/xurl)

- **Access:** Developer account and Ads API access; some endpoints require allowlisting.
- **Watch:** Campaigns and line items are created paused. Activation is a separate action; some object deletion is documented, but campaign deletion is not.
- **Sources:** [X Ads MCP tools and authentication](https://docs.x.com/x-ads-api/mcp) · [X Ads API documentation](https://docs.x.com/x-ads-api/introduction) · [Official xurl repository](https://github.com/xdevplatform/xurl) · [General X API MCP documentation](https://github.com/xdevplatform/docs/blob/main/tools/mcp.mdx)
- **Last checked:** 29 Oct 2026

[Back to comparison](#media-platforms)

## Apple Ads

**B- · Production · Reference**

Apple's Platform API lets advertisers and agencies manage campaigns, ad groups and keywords, pull reports and work with App Store and Apple Maps ads.

**Day to day**

- Create and update supported App Store campaigns.
- Retrieve campaign results for review.

> **What still needs you:** A developer must build the assistant connection and maintain it as the API changes.

- **Route:** Official Platform API.
- **Scope:** Campaigns, ad groups, keywords and reports.
- **Setup:** Hard. A developer must configure API credentials, an eligible account role and the integration used by the assistant.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Some steps. Core campaign operations are covered, but no official MCP, agent plugin or daily CLI was verified.
- **Evidence basis:** Documentation reviewed

**Good**

- Official API supports campaign, ad-group, keyword and reporting work.
- API roles distinguish read-only from read/write access.
- Covers ads on the App Store and Apple Maps.

**Limits**

- No official MCP, plugin or dedicated CLI was verified.
- Third-party providers require separate registration.
- Daily AI use needs a custom integration and careful OAuth setup.

**Official links**

- **Product / official page:** [Apple Ads Platform API](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Apple Ads Platform API](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api)
- **Documentation:** [Apple Ads Platform API](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api)
- **GitHub:** No official repository verified

- **Access:** An Apple Ads API user with an eligible role and OAuth 2.0 credentials; third-party providers require separate registration.
- **Watch:** API roles can be read-only or read-write. Verify the assigned role before using an automation layer.
- **Sources:** [Apple Ads Platform API](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api) · [Apple Ads API resources](https://ads.apple.com/app-store/resources)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Display & Video 360

**B- · Production · Reference**

Google's DV360 API can manage advertisers, campaigns, insertion orders, line items, targeting, creatives and users. Reporting uses a separate Bid Manager API.

**Day to day**

- Build and update supported campaigns and line items.
- Manage trafficking settings through an integration.

> **What still needs you:** Building campaigns and retrieving performance use separate APIs. Some tasks still need the DV360 interface.

- **Route:** Official API.
- **Scope:** Advertisers, campaigns, insertion orders, line items, targeting and creatives.
- **Setup:** Hard. A developer must configure Google Cloud, account authentication and a custom connection. The user also needs DV360 account permissions.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Some steps. Broad trafficking coverage, but performance reporting is separate and some YouTube and Partners writes are unsupported.
- **Evidence basis:** Documentation reviewed

**Good**

- Mature official API covers core programmatic campaign resources.
- Supports insertion orders, line items, targeting, creatives and users.
- Role-based access can separate read, standard and admin operations.

**Limits**

- No official MCP or agent plugin was verified.
- Performance reporting requires the separate Bid Manager API.
- Some YouTube and Partners write workflows remain outside the API.

**Official links**

- **Product / official page:** [DV360 API overview](https://developers.google.com/display-video/api)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Display & Video 360 API](https://developers.google.com/display-video/api)
- **Documentation:** [DV360 API overview](https://developers.google.com/display-video/api)
- **GitHub:** No official repository verified

- **Access:** A Google Cloud project, OAuth 2.0 and a DV360 user with access to the relevant partner or advertiser.
- **Watch:** The API can retrieve, create and update resources, but it does not return performance data and does not support every YouTube & Partners write workflow.
- **Sources:** [DV360 API overview](https://developers.google.com/display-video/api) · [DV360 API limitations and permissions](https://developers.google.com/display-video/api/support/faq)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Google Ads

**B- · Production · Reference**

Queries account structure and performance through Google Ads Query Language. The current official MCP surface is read-only.

**Day to day**

- Compare spend and conversions across campaigns.
- Find campaigns that need a closer look.

> **What still needs you:** It cannot create an ad, change a bid or budget, pause an entity or fix the issue it finds.

- **Route:** Official MCP.
- **Scope:** Campaign and performance data.
- **Setup:** Hard. A developer must obtain Ads API access, configure a Google Cloud project and set up account authentication before the assistant can query it.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Assist only. Account discovery, metadata and GAQL queries. Campaign building and optimisation still happen elsewhere.
- **Evidence basis:** Documentation reviewed

**Good**

- Official, maintained MCP with a clear read boundary.
- Google Ads Query Language supports detailed account and performance diagnosis.
- Useful as a reporting and second-pair-of-eyes surface once configured.

**Limits**

- The MCP cannot create, modify or delete any campaign object.
- Setup requires Python, a developer token, Google Cloud, enabled APIs, OAuth and client configuration.
- The workflow stops at diagnosis and cannot perform the optimisation it recommends.

**Official links**

- **Product / official page:** [Google Ads API documentation](https://developers.google.com/google-ads/api/docs/start)
- **AI interface / endpoint:** [Official, open source](https://github.com/googleads/google-ads-mcp)
- **MCP:** [Official, open source](https://github.com/googleads/google-ads-mcp)
- **Plugin:** No official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Google Ads API and client libraries](https://developers.google.com/google-ads/api/docs/start)
- **Documentation:** [Google Ads API documentation](https://developers.google.com/google-ads/api/docs/start)
- **GitHub:** [Official MCP repository](https://github.com/googleads/google-ads-mcp)

- **Access:** Developer token, Google Cloud project and account credentials.
- **Watch:** The MCP can inspect but cannot create or change campaigns. API access levels still apply.
- **Sources:** [Official MCP repository](https://github.com/googleads/google-ads-mcp) · [Google Ads API documentation](https://developers.google.com/google-ads/api/docs/start)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Meta Ads

**B- · Test · Reference**

Meta's hosted Ads AI Connector brings campaign data and actions into compatible assistants through MCP.

**Day to day**

- Review campaign performance and account structure.
- Create supported campaigns, ad sets and ads.

> **What still needs you:** Check which changes your account supports. Some edits still need Ads Manager after the assistant creates the campaign.

- **Route:** Official remote MCP, open beta.
- **Scope:** Campaigns, ad sets, ads and insights.
- **Setup:** Easy. Add the hosted connector and sign in. The tools offered can differ by account during the rollout.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Partial** · Modify **No** · Delete **No**
- **Coverage:** Some steps. Creation and analysis are present, but the current beta does not provide dependable general modification of existing campaign objects.
- **Evidence basis:** Documentation reviewed

**Good**

- Hosted OAuth makes the connector much easier to add than a custom Marketing API integration.
- It can read performance and campaign structure in the assistant.
- It can create supported campaign, ad-set and ad objects.

**Limits**

- The current beta does not provide dependable general modification of existing campaign objects.
- Availability still varies by ad account and by individual tool.
- Creation without ordinary follow-up editing sends the operator back to Ads Manager.

**Official links**

- **Product / official page:** [Meta Ads AI Connectors announcement](https://www.facebook.com/business/news/meta-ads-ai-connectors)
- **AI interface / endpoint:** [Official open beta](https://mcp.facebook.com/ads)
- **MCP:** [Official open beta](https://mcp.facebook.com/ads)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Marketing API](https://developers.facebook.com/docs/marketing-apis/)
- **Documentation:** [Meta Ads AI Connectors announcement](https://www.facebook.com/business/news/meta-ads-ai-connectors)
- **GitHub:** No official repository verified

- **Access:** Open beta; account and regional availability may vary.
- **Watch:** Inspect the authenticated tool list and permissions before allowing campaign changes.
- **Sources:** [Meta Ads AI Connectors announcement](https://www.facebook.com/business/news/meta-ads-ai-connectors) · [Marketing APIs](https://developers.facebook.com/docs/marketing-apis/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Microsoft Advertising

**C+ · Production · Reference**

Microsoft's governed MCP provides campaign structure, performance queries and audits. Its current documented launch surface is read-only.

**Day to day**

- Ask questions about campaign performance.
- Audit account settings before making changes elsewhere.

> **What still needs you:** Make campaign changes in the advertising interface. The documented assistant tools retrieve and audit data.

- **Route:** Official managed MCP.
- **Scope:** Accounts, campaigns, ad groups, ads, keywords and performance.
- **Setup:** Easy. Connect a supported assistant and sign in with access to the advertising account.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Assist only. Current launch documentation covers exploration, performance queries and audits, not mutation.
- **Evidence basis:** Documentation reviewed

**Good**

- Official managed connection is easier than building against the API.
- Provides entity-level performance data for campaigns, ad groups, ads and keywords.
- Useful for conversational audits and cross-platform reporting.

**Limits**

- The documented launch surface is read-only.
- It cannot create an ad or apply the campaign changes suggested by an audit.
- Broad manage-campaign language on the product page overstates the action boundary described in its FAQ.

**Official links**

- **Product / official page:** [Microsoft Advertising MCP](https://learninglab.about.ads.microsoft.com/en/solutions/technology/mcp-server)
- **AI interface / endpoint:** [Official managed MCP](https://learninglab.about.ads.microsoft.com/en/solutions/technology/mcp-server)
- **MCP:** [Official managed MCP](https://learninglab.about.ads.microsoft.com/en/solutions/technology/mcp-server)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Microsoft Advertising API](https://learn.microsoft.com/en-us/advertising/)
- **Documentation:** [Microsoft Advertising MCP](https://learninglab.about.ads.microsoft.com/en/solutions/technology/mcp-server)
- **GitHub:** No official repository verified

- **Access:** Microsoft Advertising account and API permissions.
- **Watch:** The launch FAQ documents data retrieval and audits, not campaign creation or modification.
- **Sources:** [Microsoft Advertising MCP](https://learninglab.about.ads.microsoft.com/en/solutions/technology/mcp-server) · [Advertising API documentation](https://learn.microsoft.com/en-us/advertising/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Search Ads 360

**C+ · Production · Reference**

The Search Ads 360 Reporting API provides high-volume, query-based reporting over campaigns, ads, keywords and performance data.

**Day to day**

- Compare performance across linked search accounts.
- Prepare recurring reports from account data.

> **What still needs you:** Make optimisation changes elsewhere. This connection reports on the account but cannot apply its recommendations.

- **Route:** Official Reporting API.
- **Scope:** Campaign, ad, keyword and performance data.
- **Setup:** Hard. A developer must configure account authentication and build the reporting connection for the authorised SA360 accounts.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Assist only. High-volume reporting only. Offline conversion upload is a separate surface and ordinary campaign writes are absent.
- **Evidence basis:** Documentation reviewed

**Good**

- High-volume official reporting API with a purpose-built query language.
- Immediate access to granular campaign, ad and keyword data.
- REST, gRPC and official client libraries support production pipelines.

**Limits**

- The reporting API is read-only.
- Offline conversions use a separate API surface.
- No official MCP or dedicated agent integration was verified.

**Official links**

- **Product / official page:** [Search Ads 360 Reporting API](https://developers.google.com/search-ads/reporting)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Search Ads 360 Reporting API](https://developers.google.com/search-ads/reporting)
- **Documentation:** [Search Ads 360 Reporting API](https://developers.google.com/search-ads/reporting)
- **GitHub:** No official repository verified

- **Access:** OAuth 2.0 application credentials and access to the relevant Search Ads 360 manager or client account.
- **Watch:** The reporting API is read-only. Offline conversion uploads use a separate Search Ads 360 API surface.
- **Sources:** [Search Ads 360 Reporting API](https://developers.google.com/search-ads/reporting) · [Reporting API overview](https://developers.google.com/search-ads/reporting/overview)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Pinterest Ads

**C+ · Test · Reference**

Pinterest's Ads API supports programmatic campaign and reporting workflows. No vendor-backed MCP source was verified.

**Day to day**

- Create and update supported advertising objects.
- Pull campaign results into a reporting workflow.

> **What still needs you:** Your team must build and maintain the assistant connection, then review the changes it makes.

- **Route:** Official Ads API.
- **Scope:** Campaigns, ad groups, ads, audiences and reporting.
- **Setup:** Hard. A developer must create an app, authorise the ad accounts and build an integration around the API.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Modify **Yes** · Delete **Partial**
- **Coverage:** Some steps. Useful campaign and reporting coverage through the API, without a vendor-backed MCP, plugin or CLI.
- **Evidence basis:** Documentation reviewed

**Good**

- Official Ads API supports campaign and reporting workflows.
- Useful specialist channel for visual discovery and commerce.
- An authorised integration can run recurring production tasks.

**Limits**

- No official MCP or agent plugin was verified.
- No dedicated official CLI was verified.
- AI workflows require custom engineering or a maintained intermediary.

**Official links**

- **Product / official page:** [Pinterest API overview](https://developer.pinterest.com/docs/overview/welcome/)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Pinterest API for ads](https://dev.pinterest.com/docs/work-with-ads/ads-overview/)
- **Documentation:** [Pinterest API overview](https://developer.pinterest.com/docs/overview/welcome/)
- **GitHub:** No official repository verified

- **Access:** Pinterest developer application and authorised ad accounts.
- **Watch:** Use the API directly or an integration layer, and identify the maintainer of any MCP wrapper.
- **Sources:** [Pinterest API overview](https://developer.pinterest.com/docs/overview/welcome/) · [Ads API overview](https://dev.pinterest.com/docs/work-with-ads/ads-overview/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## LinkedIn Ads

**C · Test · Reference**

LinkedIn's Marketing APIs cover campaign management and reporting. We found community MCP wrappers, but no vendor-backed MCP source.

**Day to day**

- Build or update campaigns through an approved integration.
- Retrieve results for reporting.

> **What still needs you:** A developer must obtain advertising API approval, then build and maintain the assistant connection.

- **Route:** Official Marketing API.
- **Scope:** Campaigns, reporting, audiences, leads and conversions.
- **Setup:** Hard. A developer must register an app, obtain approval for the advertising use case and build the connection to the assistant.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Partial** · Modify **Partial** · Delete **Partial**
- **Coverage:** Some steps. The API covers important campaign-management jobs, but access is approved by product and use case and there is no official agent interface.
- **Evidence basis:** Documentation reviewed

**Good**

- Official Marketing APIs cover campaign management and reporting.
- Strong fit for B2B audience and lead-generation workflows.
- Production access tiers and permissions are documented.

**Limits**

- No official MCP was verified.
- API product approval and access tiers add friction.
- Daily AI use needs a custom or third-party integration layer.

**Official links**

- **Product / official page:** [Accessing LinkedIn APIs](https://www.linkedin.com/help/linkedin/answer/a526048/accessing-linkedin-apis?lang=en)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [LinkedIn Marketing APIs](https://learn.microsoft.com/en-us/linkedin/marketing/)
- **Documentation:** [Accessing LinkedIn APIs](https://www.linkedin.com/help/linkedin/answer/a526048/accessing-linkedin-apis?lang=en)
- **GitHub:** No official repository verified

- **Access:** Developer application, product approval and tier-specific permissions.
- **Watch:** Do not treat a community wrapper as LinkedIn-supported. Marketing API access is gated by product and tier.
- **Sources:** [Accessing LinkedIn APIs](https://www.linkedin.com/help/linkedin/answer/a526048/accessing-linkedin-apis?lang=en) · [Marketing API access tiers](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/marketing-tiers?view=li-lms-2026-08)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Reddit Ads

**C · Test · Reference**

Reddit's Ads API v3 exposes campaign and account operations. No vendor-backed MCP source was verified.

**Day to day**

- Create and manage supported campaigns through an integration.
- Retrieve account and campaign results.

> **What still needs you:** Advertising API approval and a custom connection are required before an assistant can do this work.

- **Route:** Official Ads API.
- **Scope:** Accounts, campaigns, ad groups, ads and reporting.
- **Setup:** Hard. A developer must register an app, obtain advertising access and connect the API to the assistant.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **Partial** · Modify **Partial** · Delete **Partial**
- **Coverage:** Some steps. Core campaign operations exist in the API, but no official agent interface was verified.
- **Evidence basis:** Documentation reviewed

**Good**

- Official Ads API v3 exposes campaign and account operations.
- Community context can be valuable for specific audience strategies.
- OAuth provides a conventional route for controlled integrations.

**Limits**

- No official MCP, plugin or CLI was verified.
- Advertising API access requires approval.
- A useful daily agent workflow must be built and maintained separately.

**Official links**

- **Product / official page:** [Reddit Ads API v3](https://ads-api.reddit.com/docs/)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Reddit Ads API v3](https://ads-api.reddit.com/docs/)
- **Documentation:** [Reddit Ads API v3](https://ads-api.reddit.com/docs/)
- **GitHub:** No official repository verified

- **Access:** OAuth application and approved advertising access.
- **Watch:** Community connectors should be checked against the current v3 API and Reddit's access terms.
- **Sources:** [Reddit Ads API v3](https://ads-api.reddit.com/docs/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

## Snapchat Ads

**C · Test · Reference**

A hosted Ads MCP for retrieving Snapchat campaign data and insights from supported AI clients.

**Day to day**

- Read campaign settings and results.
- Investigate performance before making changes in Ads Manager.

> **What still needs you:** You must make campaign changes elsewhere. This connection is restricted to approved accounts and only reads data.

- **Route:** Official remote MCP, allowlist.
- **Scope:** Campaign data and performance.
- **Setup:** Hard. The account must be admitted to the MCP allowlist before you can connect and sign in.
- **Human job:** Inspect delivery, build campaigns, maintain live objects and remove or archive them safely.
- **Capabilities:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Assist only. Retrieval and analysis only. The broader Marketing API is a separate engineering route.
- **Evidence basis:** Documentation reviewed

**Good**

- Official hosted MCP provides campaign retrieval and analysis.
- Read-only control is suitable for a cautious reporting pilot.
- The underlying Marketing API offers a route to deeper integration.

**Limits**

- MCP access is still allowlisted.
- The MCP cannot execute campaign changes.
- No official plugin or dedicated CLI was verified.

**Official links**

- **Product / official page:** [Ads MCP introduction](https://developers.snap.com/marketing-api/Ads-MCP/Introduction)
- **AI interface / endpoint:** [Official, allowlist rollout](https://developers.snap.com/marketing-api/Ads-MCP/Introduction)
- **MCP:** [Official, allowlist rollout](https://developers.snap.com/marketing-api/Ads-MCP/Introduction)
- **Plugin:** No separate official plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Snap Marketing API](https://developers.snap.com/marketing-api/home)
- **Documentation:** [Ads MCP introduction](https://developers.snap.com/marketing-api/Ads-MCP/Introduction)
- **GitHub:** No official repository verified

- **Access:** Allowlist rollout and authenticated ad-account access.
- **Watch:** The documented MCP is read-only even though the underlying Marketing API has broader capabilities.
- **Sources:** [Ads MCP introduction](https://developers.snap.com/marketing-api/Ads-MCP/Introduction) · [Connect an agent](https://developers.snap.com/marketing-api/Ads-MCP/connect-an-agent)
- **Last checked:** 5 Sept 2026

[Back to comparison](#media-platforms)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
