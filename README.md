# AI paid media tools

**The Detail Department's point of view on what is usable in a daily AI paid-media workflow today.**

An official integration is not automatically a good workflow. Grades start with the work an operator can complete today: how difficult the route is to connect, whether it can read, create, modify and delete, and how much of the manual product it actually covers.

[Methodology](METHODOLOGY.md) · [Interface facts](data/tools.json) · [Daily workflow data](data/workflows.json) · [Editorial ratings](data/ratings.json) · [Filterable browser](docs/index.html) · [Propose a correction](../../issues/new?template=correction.yml)

## Current view

- 33 tools reviewed
- 18 rated Production, 12 rated Test, 3 rated Research
- 21 verified official MCPs
- 7 current public affiliate programmes verified
- No tool currently earns A+. The bar is an easy, dependable route that can complete most recurring work without returning to the manual product.

Last full review: **5 Sept 2026**

## What matters

| Priority | Question | Consequence |
| --- | --- | --- |
| 1 | Can it complete a recurring job end to end? | Reporting that cannot apply a correction is useful, but incomplete. |
| 2 | What can it Read, Create, Modify and Delete? | Create and Modify are separate. A route that creates but cannot maintain the object is a serious operational gap. |
| 3 | How hard is it to connect? | Cloud projects, developer tokens, OAuth applications, allowlists and custom code reduce daily usefulness. |
| 4 | How much of the manual product is covered? | API or MCP availability does not mean feature parity with the interface used by practitioners. |
| 5 | Is the route mature and governable? | Beta access, unclear permissions or unbounded writes require a test even when the capability looks strong. |

### Grade ceilings

- A read-only route cannot score above B+ for a workflow whose normal job includes execution.
- A media-platform route that cannot dependably modify core objects cannot score above B-.
- A route requiring custom engineering or gated developer approval cannot score above B unless the operational value is exceptional.
- Beta, preview, allowlist and private-beta routes normally remain Test regardless of their feature list.
- Production describes dependability within the stated boundary. It does not mean broad feature coverage or unrestricted automation.

## Action and setup labels

| Label | Meaning |
| --- | --- |
| Easy | Hosted connection and account approval, without a developer project or custom code. |
| Moderate | Account configuration, credentials or light technical setup. |
| Hard | Developer access, cloud or OAuth setup, custom integration or vendor approval. |
| Specialist | Data engineering, infrastructure or statistical expertise. |
| Yes | Directly supported for the core objects of the route being judged. |
| Partial | Present, but important objects, fields or workflows are missing or inconsistent. |
| No | The evaluated route does not support the action. |
| Depends | Determined by the operator's connected tools, permissions or configuration. |
| N/A | The action is not meaningful for this type of tool. |
| Unverified | The vendor has not documented a dependable boundary. |

## Sections

- [Media platforms](#media-platforms) (15)
- [Analytics and measurement](#analytics-and-measurement) (4)
- [Creative and images](#creative-and-images) (2)
- [Data and research](#data-and-research) (6)
- [Automation and workflow](#automation-and-workflow) (3)
- [Modelling and experimentation](#modelling-and-experimentation) (3)

## Affiliate and referral programmes

Affiliate means a public commission-paying programme. Referral, partner, certification and directory schemes are labelled separately. Partner-only programmes are recorded in each tool detail.

| Tool | Type | Programme | Current note |
| --- | --- | --- | --- |
| [TikTok for Business](#tiktok-for-business) | Affiliate | [TikTok for Business Affiliate Program](https://getstarted.tiktok.com/affiliates?lang=en-PH) | Impact-hosted programme with a flat-fee bounty for qualified new advertisers. |
| [Snapchat Ads](#snapchat-ads) | Affiliate | [Snapchat Affiliate Programme](https://help.snapchat.com/hc/en-gb/articles/36391141656724-About-Snapchat-s-Affiliate-Programme) | PartnerStack programme paying a one-time 20% revenue share on eligible advertiser spend during the first 30 days. |
| [Amplitude](#amplitude) | Affiliate | [Amplitude Affiliate Program](https://www.amplitude.com/affiliates) | Public application with commissions for qualified new Starter or Startup customers. |
| [Mixpanel](#mixpanel) | Referral | [Mixpanel Referral Partners](https://mixpanel.com/partners/) | Open to partners, agencies, marketplaces and independent consultants. Commercial terms depend on the partner arrangement. |
| [Supermetrics](#supermetrics) | Affiliate | [Supermetrics Affiliate Partner Program](https://supermetrics.com/partners) | 15% recurring commission for one year at entry tier; 20% for two years after ten successful referrals. |
| [DataForSEO](#dataforseo) | Affiliate | [DataForSEO Affiliate Program](https://dataforseo.com/update/affiliate-google-sheets-connector) | Standard programme pays 25% of a referred user's first payment; the Sheets connector has a separate fixed bounty. |
| [Airbyte](#airbyte) | Referral | [Airbyte partner client referral](https://airbyte.com/company/partners) | Partner page offers a Refer a Client route, but no public commission schedule was verified. |
| [Fivetran](#fivetran) | Referral | [Fivetran Partner Program](https://www.fivetran.com/partners/become-a-partner) | Partner programme includes referral incentives, co-selling and reselling; terms vary by tier. |
| [Snowflake](#snowflake) | Referral | [Snowflake Partner Network](https://www.snowflake.com/en/why-snowflake/partners/) | Eligible partners can receive referral rebates, service credits and co-marketing support. |
| [Zapier](#zapier) | Referral | [Zapier Solution Partner referral benefit](https://zapier.com/l/partners) | Referral benefit is tied to eligible Solution Partners. Zapier does not offer a general public affiliate programme. |
| [Pipedream](#pipedream) | Affiliate | [Pipedream Affiliate Program](https://pipedream.com/affiliates) | Official affiliate application exists; no current public commission rate was visible in the reviewed page. |
| [n8n](#n8n) | Affiliate | [n8n Affiliate Partner Program](https://n8n.io/partners/) | 30% revenue share for 12 months on eligible Starter and Pro referrals. |
| [Figma](#figma) | Retired | [Affiliate programme deprecated](https://www.figma.com/affiliate-program/) | New affiliate applications are closed. A separate Service Partner Program remains available. |
| [Canva](#canva) | Retired | [Affiliate programme sunset](https://www.canva.com/partners/) | The former affiliate programme is no longer the current route. Canva now promotes partner and creator programmes. |

## Media platforms

| Tool | Grade | Ready | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Google Ads](#google-ads) | B- | Production | Hard | Yes | No | No | No | Narrow |
| [Meta Ads](#meta-ads) | B- | Test | Easy | Yes | Partial | No | No | Partial |
| [TikTok for Business](#tiktok-for-business) | A | Production | Easy | Yes | Yes | Yes | Partial | Broad |
| [Microsoft Advertising](#microsoft-advertising) | C+ | Production | Easy | Yes | No | No | No | Narrow |
| [Amazon Ads](#amazon-ads) | B+ | Test | Hard | Yes | Yes | Yes | Yes | Broad |
| [Snapchat Ads](#snapchat-ads) | C | Test | Hard | Yes | No | No | No | Narrow |
| [LinkedIn Ads](#linkedin-ads) | C | Test | Hard | Yes | Partial | Partial | Partial | Partial |
| [Pinterest Ads](#pinterest-ads) | C+ | Test | Hard | Yes | Yes | Yes | Partial | Partial |
| [Reddit Ads](#reddit-ads) | C | Test | Hard | Yes | Partial | Partial | Partial | Partial |
| [X Ads](#x-ads) | B- | Test | Hard | Yes | Partial | Partial | Partial | Partial |
| [Display & Video 360](#display-video-360) | B- | Production | Hard | Yes | Yes | Yes | Partial | Partial |
| [Campaign Manager 360](#campaign-manager-360) | B | Production | Hard | Yes | Yes | Yes | Partial | Broad |
| [Search Ads 360](#search-ads-360) | C+ | Production | Hard | Yes | No | No | No | Narrow |
| [Apple Ads](#apple-ads) | B- | Production | Hard | Yes | Yes | Yes | Partial | Partial |
| [The Trade Desk](#the-trade-desk) | B | Test | Hard | Yes | Yes | Yes | Partial | Broad |

### Google Ads

**B- · Production**

Queries account structure and performance through Google Ads Query Language. The current official MCP surface is read-only.

> **Biggest daily blocker:** It cannot create an ad, change a bid or budget, pause an entity or fix the issue it finds.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official MCP | Hard | Yes | No | No | No | Narrow |

**Connection:** Requires Python, a Google Ads developer token, a Google Cloud project, enabled APIs, OAuth credentials and MCP client configuration.

**Manual-feature coverage:** Account discovery, metadata and GAQL queries. Campaign building and optimisation still happen elsewhere.

**+**

- Official, maintained MCP with a clear read boundary.
- Google Ads Query Language supports detailed account and performance diagnosis.
- Useful as a reporting and second-pair-of-eyes surface once configured.

**−**

- The MCP cannot create, modify or delete any campaign object.
- Setup requires Python, a developer token, Google Cloud, enabled APIs, OAuth and client configuration.
- The workflow stops at diagnosis and cannot perform the optimisation it recommends.

**Interfaces:** MCP: Official, open source · Plugin: No official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Google Ads API and client libraries

**Access:** Developer token, Google Cloud project and account credentials.

**Commercial programme:** Partner · [Google Partners](https://support.google.com/google-ads/answer/9029203?hl=en). Agency recognition, training and support. Not a public cash affiliate programme.

**Watch:** The MCP can inspect but cannot create or change campaigns. API access levels still apply.

**Sources:** [Official MCP repository](https://github.com/googleads/google-ads-mcp) · [Google Ads API documentation](https://developers.google.com/google-ads/api/docs/start) · Verified 5 Sept 2026

[Back to sections](#sections)

### Meta Ads

**B- · Test**

Meta's hosted Ads AI Connector brings campaign data and actions into compatible assistants through MCP.

> **Biggest daily blocker:** A workflow can create supported objects, then still send the operator back to Ads Manager to make ordinary changes.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote MCP, open beta | Easy | Yes | Partial | No | No | Partial |

**Connection:** Add the hosted connector and authorise the Meta account. Availability still rolls out by account and tool.

**Manual-feature coverage:** Creation and analysis are present, but the current beta does not provide dependable general modification of existing campaign objects.

**+**

- Hosted OAuth makes the connector much easier to add than a custom Marketing API integration.
- It can read performance and campaign structure in the assistant.
- It can create supported campaign, ad-set and ad objects.

**−**

- The current beta does not provide dependable general modification of existing campaign objects.
- Availability still varies by ad account and by individual tool.
- Creation without ordinary follow-up editing sends the operator back to Ads Manager.

**Interfaces:** MCP: Official open beta · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Marketing API

**Access:** Open beta; account and regional availability may vary.

**Commercial programme:** Partner · [Meta Business Partners](https://www.facebook.com/business/marketing-partners). Vetted services and technology ecosystem. No public commission-paying Ads affiliate programme was verified.

**Watch:** Inspect the authenticated tool list and permissions before allowing campaign changes.

**Sources:** [Meta Ads AI Connectors announcement](https://www.facebook.com/business/news/meta-ads-ai-connectors) · [Marketing APIs](https://developers.facebook.com/docs/marketing-apis/) · Verified 5 Sept 2026

[Back to sections](#sections)

### TikTok for Business

**A · Production**

A vendor-hosted MCP for campaign management, reporting, audiences and creative operations, with full and progressive-disclosure endpoints.

> **Biggest daily blocker:** The full endpoint loads an enormous tool surface. Progressive disclosure is safer and easier for daily use.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote MCP | Easy | Yes | Yes | Yes | Partial | Broad |

**Connection:** Hosted OAuth connection with no developer token, API key management or custom code.

**Manual-feature coverage:** Around 400 tools cover creation, targeting, bidding, reporting and creative operations. Some manual and account workflows remain outside the route.

**+**

- Official remote MCP covers campaign, reporting, audience and creative work.
- Read/write capability makes it useful beyond analysis.
- The interface is designed for advertiser workflows rather than a generic API bridge.

**−**

- Broad write permissions increase the cost of a bad instruction.
- Business account eligibility and permissions still govern availability.
- No dedicated official CLI was verified.

**Interfaces:** MCP: Official remote MCP · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: TikTok API for Business

**Access:** TikTok for Business account and OAuth permissions.

**Commercial programme:** Affiliate · [TikTok for Business Affiliate Program](https://getstarted.tiktok.com/affiliates?lang=en-PH). Impact-hosted programme with a flat-fee bounty for qualified new advertisers.

**Watch:** The broad endpoint exposes hundreds of tools. Progressive disclosure is safer for smaller agent contexts.

**Sources:** [TikTok for Business MCP documentation](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en) · [API for Business documentation](https://business-api.tiktok.com/portal/docs) · Verified 5 Sept 2026

[Back to sections](#sections)

### Microsoft Advertising

**C+ · Production**

Microsoft's governed MCP provides campaign structure, performance queries and audits. Its current documented launch surface is read-only.

> **Biggest daily blocker:** The product language says manage campaigns, but the documented tool boundary only retrieves and audits data.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official managed MCP | Easy | Yes | No | No | No | Narrow |

**Connection:** Connect the managed server to a supported assistant and authenticate the advertising account.

**Manual-feature coverage:** Current launch documentation covers exploration, performance queries and audits, not mutation.

**+**

- Official managed connection is easier than building against the API.
- Provides entity-level performance data for campaigns, ad groups, ads and keywords.
- Useful for conversational audits and cross-platform reporting.

**−**

- The documented launch surface is read-only.
- It cannot create an ad or apply the campaign changes suggested by an audit.
- Broad manage-campaign language on the product page overstates the action boundary described in its FAQ.

**Interfaces:** MCP: Official managed MCP · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Microsoft Advertising API

**Access:** Microsoft Advertising account and API permissions.

**Commercial programme:** Partner · [Microsoft Advertising Partner Program](https://msadvertisingpartnerprogram.powerappsportals.com/welcome). Agency, channel and technology partner programme with spend and tenure requirements. Not a public affiliate programme.

**Watch:** The launch FAQ documents data retrieval and audits, not campaign creation or modification.

**Sources:** [Microsoft Advertising MCP](https://learninglab.about.ads.microsoft.com/en/solutions/technology/mcp-server) · [Advertising API documentation](https://learn.microsoft.com/en-us/advertising/) · Verified 5 Sept 2026

[Back to sections](#sections)

### Amazon Ads

**B+ · Test**

An official MCP layer over Amazon Ads API functionality, including multi-step tools for campaign creation, reporting and market expansion.

> **Biggest daily blocker:** Strong action coverage is offset by partner-only API access and beta maturity.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote MCP, open beta | Hard | Yes | Yes | Yes | Yes | Broad |

**Connection:** Limited to Amazon Ads partners with active API credentials despite the hosted MCP route.

**Manual-feature coverage:** Includes individual API capabilities plus tools for account creation, reports, campaign launch and locale expansion.

**+**

- Official MCP can create, update and delete campaign objects.
- Retail-media context makes it strategically important.
- Uses the established Amazon Ads API permission model.

**−**

- The MCP is still an open beta.
- Access is limited to partners with active API credentials.
- Destructive campaign operations require strong human approval gates.

**Interfaces:** MCP: Official open beta · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Amazon Ads API

**Access:** Open beta for Amazon Ads partners with active API credentials.

**Commercial programme:** Partner · [Amazon Ads Partner Network](https://advertising.amazon.com/partners/network). Self-service agency and tool-provider network. Amazon Associates is a separate retail affiliate programme.

**Watch:** The MCP can create, update and delete campaigns. Use review and approval controls before execution.

**Sources:** [Amazon Ads MCP announcement](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta) · [Amazon Ads API](https://advertising.amazon.com/en-ca/about-api) · Verified 5 Sept 2026

[Back to sections](#sections)

### Snapchat Ads

**C · Test**

A hosted Ads MCP for retrieving Snapchat campaign data and insights from supported AI clients.

> **Biggest daily blocker:** It is both gated and read-only, so it cannot carry a campaign from diagnosis to correction.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote MCP, allowlist | Hard | Yes | No | No | No | Narrow |

**Connection:** Requires allowlist access as well as an authenticated advertising account.

**Manual-feature coverage:** Retrieval and analysis only. The broader Marketing API is a separate engineering route.

**+**

- Official hosted MCP provides campaign retrieval and analysis.
- Read-only control is suitable for a cautious reporting pilot.
- The underlying Marketing API offers a route to deeper integration.

**−**

- MCP access is still allowlisted.
- The MCP cannot execute campaign changes.
- No official plugin or dedicated CLI was verified.

**Interfaces:** MCP: Official, allowlist rollout · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Snap Marketing API

**Access:** Allowlist rollout and authenticated ad-account access.

**Commercial programme:** Affiliate · [Snapchat Affiliate Programme](https://help.snapchat.com/hc/en-gb/articles/36391141656724-About-Snapchat-s-Affiliate-Programme). PartnerStack programme paying a one-time 20% revenue share on eligible advertiser spend during the first 30 days.

**Watch:** The documented MCP is read-only even though the underlying Marketing API has broader capabilities.

**Sources:** [Ads MCP introduction](https://developers.snap.com/marketing-api/Ads-MCP/Introduction) · [Connect an agent](https://developers.snap.com/marketing-api/Ads-MCP/connect-an-agent) · Verified 5 Sept 2026

[Back to sections](#sections)

### LinkedIn Ads

**C · Test**

LinkedIn's Marketing APIs cover campaign management and reporting. We found community MCP wrappers, but no vendor-backed MCP source.

> **Biggest daily blocker:** A team cannot simply connect an assistant. It must first win API approval and build and maintain the route.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official Marketing API | Hard | Yes | Partial | Partial | Partial | Partial |

**Connection:** Requires a developer application, a defined use case, product access, application vetting and a custom agent layer.

**Manual-feature coverage:** The API covers important campaign-management jobs, but access is approved by product and use case and there is no official agent interface.

**+**

- Official Marketing APIs cover campaign management and reporting.
- Strong fit for B2B audience and lead-generation workflows.
- Production access tiers and permissions are documented.

**−**

- No official MCP was verified.
- API product approval and access tiers add friction.
- Daily AI use needs a custom or third-party integration layer.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: LinkedIn Marketing APIs

**Access:** Developer application, product approval and tier-specific permissions.

**Commercial programme:** Partner · [LinkedIn Marketing Partner Program](https://business.linkedin.com/advertise/partners). Vetted programme with API access, directory visibility and possible incentive or revenue-share programmes. Not an open affiliate scheme.

**Watch:** Do not treat a community wrapper as LinkedIn-supported. Marketing API access is gated by product and tier.

**Sources:** [Accessing LinkedIn APIs](https://www.linkedin.com/help/linkedin/answer/a526048/accessing-linkedin-apis?lang=en) · [Marketing API access tiers](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/marketing-tiers?view=li-lms-2026-08) · Verified 5 Sept 2026

[Back to sections](#sections)

### Pinterest Ads

**C+ · Test**

Pinterest's Ads API supports programmatic campaign and reporting workflows. No vendor-backed MCP source was verified.

> **Biggest daily blocker:** The API is usable, but the AI workflow is yours to engineer and maintain.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official Ads API | Hard | Yes | Yes | Yes | Partial | Partial |

**Connection:** Requires a developer application, authorised ad accounts and a custom agent or integration layer.

**Manual-feature coverage:** Useful campaign and reporting coverage through the API, without a vendor-backed MCP, plugin or CLI.

**+**

- Official Ads API supports campaign and reporting workflows.
- Useful specialist channel for visual discovery and commerce.
- An authorised integration can run recurring production tasks.

**−**

- No official MCP or agent plugin was verified.
- No dedicated official CLI was verified.
- AI workflows require custom engineering or a maintained intermediary.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Pinterest API for ads

**Access:** Pinterest developer application and authorised ad accounts.

**Commercial programme:** Partner · [Pinterest Business Partners](https://business.pinterest.com/pinterest-business-partners/). Vetted media, creative, commerce and measurement ecosystem. No public Ads affiliate programme was verified.

**Watch:** Use the API directly or an integration layer, and identify the maintainer of any MCP wrapper.

**Sources:** [Pinterest API overview](https://developer.pinterest.com/docs/overview/welcome/) · [Ads API overview](https://dev.pinterest.com/docs/work-with-ads/ads-overview/) · Verified 5 Sept 2026

[Back to sections](#sections)

### Reddit Ads

**C · Test**

Reddit's Ads API v3 exposes campaign and account operations. No vendor-backed MCP source was verified.

> **Biggest daily blocker:** API approval and custom integration make this unsuitable as an immediate daily AI workflow.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official Ads API | Hard | Yes | Partial | Partial | Partial | Partial |

**Connection:** Requires an OAuth application, approved advertising access and a custom agent layer.

**Manual-feature coverage:** Core campaign operations exist in the API, but no official agent interface was verified.

**+**

- Official Ads API v3 exposes campaign and account operations.
- Community context can be valuable for specific audience strategies.
- OAuth provides a conventional route for controlled integrations.

**−**

- No official MCP, plugin or CLI was verified.
- Advertising API access requires approval.
- A useful daily agent workflow must be built and maintained separately.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Reddit Ads API v3

**Access:** OAuth application and approved advertising access.

**Commercial programme:** Partner · [Reddit Partner Program](https://www.business.reddit.com/solutions/reddit-partnership-overview). Agency, API and data partner programme with badging and directory visibility. No public affiliate commission was verified.

**Watch:** Community connectors should be checked against the current v3 API and Reddit's access terms.

**Sources:** [Reddit Ads API v3](https://ads-api.reddit.com/docs/) · Verified 5 Sept 2026

[Back to sections](#sections)

### X Ads

**B- · Test**

The X Ads API exposes advertiser resources and reporting, while X's xurl CLI can make authenticated requests and ships with an official agent skill.

> **Biggest daily blocker:** A useful official CLI exists, but there is no supported Ads-specific MCP or turn-key campaign workflow.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official xurl CLI and Ads API | Hard | Yes | Partial | Partial | Partial | Partial |

**Connection:** Requires developer and Ads API access, CLI authentication and endpoint-level implementation.

**Manual-feature coverage:** The CLI is agent-friendly, but the general X MCP does not establish Ads coverage and some Ads endpoints are allowlisted.

**+**

- Official xurl CLI gives agents and operators a practical API route.
- xurl ships with an official agent skill.
- The Ads API supports advertiser resources and reporting.

**−**

- No official Ads-specific MCP was verified.
- The general X MCP should not be assumed to cover advertising endpoints.
- Ads API access and endpoint availability can be gated.

**Interfaces:** MCP: No official Ads MCP verified · Plugin: xurl agent skill · CLI: xurl CLI · API/SDK: X Ads API

**Access:** Developer account and Ads API access; some endpoints require allowlisting.

**Commercial programme:** Partner · [X Official Partner directory](https://docs.x.com/enterprise/partner-directory). Selected enterprise partner ecosystem. No public X Ads affiliate programme was verified.

**Watch:** X also operates a general X API MCP, but its published tool list does not establish Ads API coverage. Do not label it an Ads MCP without endpoint-level proof.

**Sources:** [X Ads API documentation](https://docs.x.com/x-ads-api/introduction) · [Official xurl repository](https://github.com/xdevplatform/xurl) · [General X API MCP documentation](https://github.com/xdevplatform/docs/blob/main/tools/mcp.mdx) · Verified 5 Sept 2026

[Back to sections](#sections)

### Display & Video 360

**B- · Production**

Google's DV360 API can manage advertisers, campaigns, insertion orders, line items, targeting, creatives and users. Reporting uses a separate Bid Manager API.

> **Biggest daily blocker:** An operator needs two API surfaces for build plus performance and still cannot reproduce every manual workflow.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official API | Hard | Yes | Yes | Yes | Partial | Partial |

**Connection:** Requires Google Cloud, OAuth, DV360 account permissions and a custom agent layer.

**Manual-feature coverage:** Broad trafficking coverage, but performance reporting is separate and some YouTube and Partners writes are unsupported.

**+**

- Mature official API covers core programmatic campaign resources.
- Supports insertion orders, line items, targeting, creatives and users.
- Role-based access can separate read, standard and admin operations.

**−**

- No official MCP or agent plugin was verified.
- Performance reporting requires the separate Bid Manager API.
- Some YouTube and Partners write workflows remain outside the API.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Display & Video 360 API

**Access:** A Google Cloud project, OAuth 2.0 and a DV360 user with access to the relevant partner or advertiser.

**Commercial programme:** Partner · [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme. Not a public affiliate programme.

**Watch:** The API can retrieve, create and update resources, but it does not return performance data and does not support every YouTube & Partners write workflow.

**Sources:** [DV360 API overview](https://developers.google.com/display-video/api) · [DV360 API limitations and permissions](https://developers.google.com/display-video/api/support/faq) · Verified 5 Sept 2026

[Back to sections](#sections)

### Campaign Manager 360

**B · Production**

The Campaign Manager 360 API supports large-scale trafficking, creative, conversion, reporting and attribution workflows.

> **Biggest daily blocker:** The API can do serious production work, but permissions and resource complexity demand engineering and a second-person check.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official API | Hard | Yes | Yes | Yes | Partial | Broad |

**Connection:** Requires a CM360 account with API access, user-profile permissions, Google Cloud and OAuth.

**Manual-feature coverage:** Strong trafficking and measurement coverage, but no official agent interface packages the resource model for daily use.

**+**

- Mature API supports trafficking, creative, conversion and reporting workflows.
- Broad resource coverage suits complex enterprise operations.
- User-profile permissions remain the control plane.

**−**

- No official MCP, plugin or dedicated CLI was verified.
- The resource model and permissions create implementation overhead.
- Write access can affect live trafficking and needs a second-person check.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Campaign Manager 360 API

**Access:** A Campaign Manager 360 account with API access, a permitted user profile, a Google Cloud project and OAuth 2.0 credentials.

**Commercial programme:** Partner · [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme. Not a public affiliate programme.

**Watch:** Many resources are writable. User-profile permissions in Campaign Manager 360 govern what the API can change.

**Sources:** [Campaign Manager 360 API](https://developers.google.com/doubleclick-advertisers/rest/) · [Campaign Manager 360 API setup](https://developers.google.com/doubleclick-advertisers/getting_started) · Verified 5 Sept 2026

[Back to sections](#sections)

### Search Ads 360

**C+ · Production**

The Search Ads 360 Reporting API provides high-volume, query-based reporting over campaigns, ads, keywords and performance data.

> **Biggest daily blocker:** It can explain the account but cannot perform the optimisation it recommends.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official Reporting API | Hard | Yes | No | No | No | Narrow |

**Connection:** Requires OAuth application credentials, SA360 account access and a custom agent or reporting layer.

**Manual-feature coverage:** High-volume reporting only. Offline conversion upload is a separate surface and ordinary campaign writes are absent.

**+**

- High-volume official reporting API with a purpose-built query language.
- Immediate access to granular campaign, ad and keyword data.
- REST, gRPC and official client libraries support production pipelines.

**−**

- The reporting API is read-only.
- Offline conversions use a separate API surface.
- No official MCP or dedicated agent integration was verified.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Search Ads 360 Reporting API

**Access:** OAuth 2.0 application credentials and access to the relevant Search Ads 360 manager or client account.

**Commercial programme:** Partner · [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme. Not a public affiliate programme.

**Watch:** The reporting API is read-only. Offline conversion uploads use a separate Search Ads 360 API surface.

**Sources:** [Search Ads 360 Reporting API](https://developers.google.com/search-ads/reporting) · [Reporting API overview](https://developers.google.com/search-ads/reporting/overview) · Verified 5 Sept 2026

[Back to sections](#sections)

### Apple Ads

**B- · Production**

Apple's Platform API lets advertisers and agencies manage campaigns, ad groups and keywords, pull reports and work with App Store and Apple Maps ads.

> **Biggest daily blocker:** The official API is capable, but there is no direct assistant workflow without custom implementation.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official Platform API | Hard | Yes | Yes | Yes | Partial | Partial |

**Connection:** Requires an eligible API role, OAuth credentials and custom agent integration. Providers register separately.

**Manual-feature coverage:** Core campaign operations are covered, but no official MCP, agent plugin or daily CLI was verified.

**+**

- Official API supports campaign, ad-group, keyword and reporting work.
- API roles distinguish read-only from read/write access.
- Covers ads on the App Store and Apple Maps.

**−**

- No official MCP, plugin or dedicated CLI was verified.
- Third-party providers require separate registration.
- Daily AI use needs a custom integration and careful OAuth setup.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Apple Ads Platform API

**Access:** An Apple Ads API user with an eligible role and OAuth 2.0 credentials; third-party providers require separate registration.

**Commercial programme:** Partner · [Apple Ads agency account path](https://ads.apple.com/maps/agencies). Supports delegated agency management. No Apple Ads-specific public affiliate programme was verified.

**Watch:** API roles can be read-only or read-write. Verify the assigned role before using an automation layer.

**Sources:** [Apple Ads Platform API](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api) · [Apple Ads API resources](https://ads.apple.com/app-store/resources) · Verified 5 Sept 2026

[Back to sections](#sections)

### The Trade Desk

**B · Test**

The Trade Desk's Open Agentic Kit provides MCP-based access to Ask Koa for platform data and actions, including campaign creation and monitoring.

> **Biggest daily blocker:** It may be powerful, but most teams cannot evaluate or adopt it without vendor selection.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official OAK MCP, private beta | Hard | Yes | Yes | Yes | Partial | Broad |

**Connection:** Available only to selected partners through an account representative, with account-managed credentials.

**Manual-feature coverage:** Published scope spans data and actions, but exact tool coverage is not public and access is private beta.

**+**

- Official OAK MCP connects AI assistants to Ask Koa.
- Published scope includes querying data, creating campaigns and monitoring live activity.
- The underlying REST and GraphQL APIs cover substantial platform operations.

**−**

- OAK is available only to selected partners in private beta.
- Broad action scope makes approval and audit controls essential.
- Practical onboarding still depends on an account representative.

**Interfaces:** MCP: Official OAK MCP, private beta · Plugin: No separate official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Platform REST and GraphQL APIs

**Access:** OAK is available to selected partners in private beta through their account representative. API credentials are also account-managed.

**Commercial programme:** Partner · [The Trade Desk partner ecosystem](https://www.thetradedesk.com/us/partners). Vendor partnership route. No public affiliate programme was verified.

**Watch:** Published scope includes both data and actions. Treat campaign creation and other platform mutations as approval-gated operations.

**Sources:** [OAK private beta release note](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates) · [Open Agentic Kit definition](https://partner.thetradedesk.com/v3/portal/resources/doc/Glossary) · [Platform API usage](https://partner.thetradedesk.com/v3/portal/api/doc/ApiUsageGuidelines) · Verified 5 Sept 2026

[Back to sections](#sections)

## Analytics and measurement

| Tool | Grade | Ready | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Google Analytics](#google-analytics) | B+ | Production | Hard | Yes | No | No | No | Narrow |
| [Google Tag Manager](#google-tag-manager) | B | Production | Hard | Yes | Yes | Yes | Yes | Broad |
| [Amplitude](#amplitude) | A- | Production | Easy | Yes | Yes | Yes | Partial | Broad |
| [Mixpanel](#mixpanel) | B- | Test | Easy | Yes | Unverified | Unverified | Unverified | Narrow |

### Google Analytics

**B+ · Production**

Google's open-source MCP lets agents query Analytics reporting and administration data without changing the property.

> **Biggest daily blocker:** It is useful after implementation, but cannot repair tracking or administer the property it diagnoses.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official MCP | Hard | Yes | No | No | No | Narrow |

**Connection:** Requires Google Cloud credentials, enabled APIs, property permissions and local or hosted MCP configuration.

**Manual-feature coverage:** Strong querying and reporting, but events, audiences and property settings cannot be changed through the MCP.

**+**

- Official open-source MCP is suitable for recurring reporting and analysis.
- Read-only design limits accidental property changes.
- Google Analytics data and administration APIs provide a mature foundation.

**−**

- The MCP cannot edit events, audiences or property settings.
- Cloud credentials and property permissions still require setup.
- No separate official plugin or marketer-facing CLI was verified.

**Interfaces:** MCP: Official, open source · Plugin: No separate official plugin verified · CLI: Package launcher only; no analytics CLI · API/SDK: Data API and Admin API

**Access:** Google Cloud credentials and property permissions.

**Commercial programme:** Partner · [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme covering Analytics and Tag Manager. Not a public affiliate programme.

**Watch:** Read-only means the MCP cannot edit events, audiences or property settings.

**Sources:** [Google Analytics MCP guide](https://developers.google.com/analytics/devguides/MCP) · [Official MCP repository](https://github.com/googleanalytics/google-analytics-mcp) · Verified 5 Sept 2026

[Back to sections](#sections)

### Google Tag Manager

**B · Production**

The Tag Manager API can manage accounts, containers, workspaces, tags and triggers. No vendor-backed MCP source was verified.

> **Biggest daily blocker:** There is no official agent interface, and an automated publish can immediately break production tracking.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official API | Hard | Yes | Yes | Yes | Yes | Broad |

**Connection:** Requires Google Cloud OAuth credentials, container permissions and a custom agent or automation layer.

**Manual-feature coverage:** Most configuration objects are available through the API, including version and publish workflows.

**+**

- Official API supports container, workspace, tag, trigger and variable workflows.
- Useful for repeatable measurement deployment and governance.
- Workspace and version concepts support controlled changes.

**−**

- No official MCP, agent plugin or dedicated CLI was verified.
- Incorrect writes can damage live measurement.
- Safe automation needs preview, review and publication gates outside the API.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: No dedicated official CLI verified · API/SDK: Tag Manager API

**Access:** Google Cloud OAuth credentials and container permissions.

**Commercial programme:** Partner · [Google Marketing Platform Partners](https://support.google.com/analytics/answer/7237700?hl=en). Certified Company and Sales Partner programme covering Analytics and Tag Manager. Not a public affiliate programme.

**Watch:** Publishing a container is a production change. Put review, environments and rollback around any agent workflow.

**Sources:** [Tag Manager API v2](https://developers.google.com/tag-platform/tag-manager/api/v2) · Verified 5 Sept 2026

[Back to sections](#sections)

### Amplitude

**A- · Production**

Amplitude's hosted MCP can work with charts, dashboards, experiments, cohorts and taxonomy. It does not ingest event data.

> **Biggest daily blocker:** The agent can change shared analysis assets and taxonomy, so user permissions and review still matter.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote MCP | Easy | Yes | Yes | Yes | Partial | Broad |

**Connection:** Connect the hosted MCP and authorise an Amplitude user with the appropriate project role.

**Manual-feature coverage:** Strong analytics-asset workflow. Raw event instrumentation and ingestion remain outside the MCP.

**+**

- Official MCP supports both analysis and write operations.
- Official agent plugins, skills and a CLI create several usable entry points.
- Strong fit for behavioural analysis and experimentation workflows.

**−**

- Write capability requires careful project and taxonomy governance.
- It is an analytics layer, not a media-buying control plane.
- Teams still need consistent event instrumentation for useful answers.

**Interfaces:** MCP: Official remote MCP · Plugin: Official agent plugins and skills · CLI: Amplitude Wizard CLI · API/SDK: Analytics and management APIs

**Access:** Amplitude account, project access and user-scoped permissions.

**Commercial programme:** Affiliate · [Amplitude Affiliate Program](https://www.amplitude.com/affiliates). Public application with commissions for qualified new Starter or Startup customers.

**Watch:** Write tools can change analytical assets and taxonomy. Event ingestion remains outside the MCP.

**Sources:** [Amplitude MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) · [Wizard CLI](https://www.amplitude.com/docs/get-started/setup-wizard-cli) · Verified 5 Sept 2026

[Back to sections](#sections)

### Mixpanel

**B- · Test**

Mixpanel's vendor-hosted MCP brings product and behavioural analytics into compatible assistants.

> **Biggest daily blocker:** The vendor has not published enough tool-level detail to trust write workflows without inspecting the live connection.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official MCP, beta | Easy | Yes | Unverified | Unverified | Unverified | Narrow |

**Connection:** Connect a compatible MCP client and authorise the Mixpanel account.

**Manual-feature coverage:** The public beta announcement does not document a stable action-by-action write boundary.

**+**

- Official MCP brings product analytics into an agent workflow.
- Useful for funnels, retention and behavioural investigation.
- Established analytics APIs provide a fallback integration route.

**−**

- The MCP remains in beta.
- The official source does not state the control boundary clearly enough.
- No official agent plugin or dedicated CLI was verified.

**Interfaces:** MCP: Official beta · Plugin: No separate official plugin verified · CLI: No dedicated official CLI verified · API/SDK: Mixpanel APIs

**Access:** Mixpanel account and compatible MCP client.

**Commercial programme:** Referral · [Mixpanel Referral Partners](https://mixpanel.com/partners/). Open to partners, agencies, marketplaces and independent consultants. Commercial terms depend on the partner arrangement.

**Watch:** The public announcement does not define a durable write boundary. Inspect the authenticated tools before use.

**Sources:** [Mixpanel MCP](https://mixpanel.com/ai/mcp) · [MCP announcement](https://mixpanel.com/blog/mixpanel-mcp-server/) · Verified 5 Sept 2026

[Back to sections](#sections)

## Creative and images

| Tool | Grade | Ready | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Figma](#figma) | B+ | Production | Easy | Yes | Partial | Partial | Partial | Partial |
| [Canva](#canva) | B+ | Production | Easy | Yes | Yes | Partial | Partial | Partial |

### Figma

**B+ · Production**

Figma's remote MCP can retrieve design context and, for supported clients and seats, create or modify native canvas content.

> **Biggest daily blocker:** A connected agent still cannot rely on every manual design operation, and write access depends on seat type and file permission.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote and desktop MCP | Easy | Yes | Partial | Partial | Partial | Partial |

**Connection:** Connect a supported client and authorise Figma. Canvas writes require a Full seat and edit permission.

**Manual-feature coverage:** Excellent design context and code handoff. Write-to-canvas is useful but does not reproduce the full editor or plugin ecosystem.

**+**

- Official remote and desktop MCP expose real design context.
- Supported clients can create or modify native canvas content.
- Plugin API and agent skills support structured creative workflows.

**−**

- Canvas writes require a Full seat and edit permission.
- It does not connect creative output to media-platform delivery by itself.
- No dedicated official Figma CLI was verified.

**Interfaces:** MCP: Official remote and desktop MCP · Plugin: Official plugins and agent skills · CLI: No dedicated official Figma CLI verified · API/SDK: REST and Plugin APIs

**Access:** Supported MCP client and Figma permissions; a Full seat is required for write-to-canvas.

**Commercial programme:** Retired · [Affiliate programme deprecated](https://www.figma.com/affiliate-program/). New affiliate applications are closed. A separate Service Partner Program remains available.

**Watch:** Dev seats support read-oriented context. Canvas writes require both a Full seat and edit permission.

**Sources:** [Figma MCP introduction](https://developers.figma.com/docs/figma-mcp-server/) · [Write to canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/) · Verified 5 Sept 2026

[Back to sections](#sections)

### Canva

**B+ · Production**

Canva's remote MCP supports design creation and editing, assets, brand resources, search, export and collaboration.

> **Biggest daily blocker:** The Apps CLI is for building Canva apps, not a general daily creative-production CLI.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote MCP | Easy | Yes | Yes | Partial | Partial | Partial |

**Connection:** Connect and authorise an individual Canva account. App-development workflows have separate requirements.

**Manual-feature coverage:** Useful design creation and editing, without full parity with Canva's manual editor and app ecosystem.

**+**

- Official MCP supports design creation, editing, assets and export.
- Remote OAuth makes it accessible to common agent clients.
- Apps CLI and Connect APIs support deeper product integration.

**−**

- The Apps CLI is not a daily creative-production CLI.
- Brand and format governance still need human review.
- It does not validate media-platform setup or campaign delivery.

**Interfaces:** MCP: Official remote MCP · Plugin: AI Connector uses MCP; no separate plugin counted · CLI: Canva Apps CLI · API/SDK: Apps SDK and Connect APIs

**Access:** A Canva account and individual OAuth authorisation; app-development features have separate requirements.

**Commercial programme:** Retired · [Affiliate programme sunset](https://www.canva.com/partners/). The former affiliate programme is no longer the current route. Canva now promotes partner and creator programmes.

**Watch:** The Apps CLI builds Canva apps. It is not a general command-line interface for day-to-day creative production.

**Sources:** [Canva MCP documentation](https://www.canva.dev/docs/mcp/) · [Canva CLI](https://www.canva.dev/docs/apps/canva-cli/) · Verified 5 Sept 2026

[Back to sections](#sections)

## Data and research

| Tool | Grade | Ready | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Supermetrics](#supermetrics) | B+ | Production | Moderate | Yes | No | No | No | Broad |
| [DataForSEO](#dataforseo) | B+ | Production | Moderate | Yes | No | No | No | Broad |
| [Airbyte](#airbyte) | B | Test | Hard | Yes | Partial | Partial | Partial | Configurable |
| [Fivetran](#fivetran) | C+ | Test | Moderate | Yes | No | No | No | Narrow |
| [Google MCP Toolbox for Databases](#google-mcp-toolbox) | B | Production | Hard | Depends | Depends | Depends | Depends | Configurable |
| [Snowflake](#snowflake) | B | Production | Hard | Yes | Depends | Depends | Depends | Configurable |

### Supermetrics

**B+ · Production**

A marketing-data MCP that queries Supermetrics sources through one connection, alongside an API and an alpha command-line client.

> **Biggest daily blocker:** It moves and queries data only. Entitlements, connector costs and source authentication still shape the workflow.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote MCP | Moderate | Yes | No | No | No | Broad |

**Connection:** Requires a subscription with API access plus authentication for every source queried.

**Manual-feature coverage:** Broad source coverage for retrieval and reporting, but it does not change media-platform objects.

**+**

- Official read-only MCP fits recurring cross-channel retrieval.
- Established connector coverage reduces bespoke API maintenance.
- Official AI integrations and CLI provide several workflow options.

**−**

- The CLI remains alpha.
- The MCP cannot change campaigns.
- Coverage and economics depend on the commercial plan and connector.

**Interfaces:** MCP: Official remote MCP · Plugin: Official AI chat integrations · CLI: Official CLI, alpha · API/SDK: Supermetrics API

**Access:** A valid subscription with Supermetrics API access.

**Commercial programme:** Affiliate · [Supermetrics Affiliate Partner Program](https://supermetrics.com/partners). 15% recurring commission for one year at entry tier; 20% for two years after ten successful referrals.

**Watch:** The CLI is alpha. Source entitlements and query costs still depend on the subscription.

**Sources:** [Supermetrics MCP server](https://docs.supermetrics.com/docs/supermetrics-mcp-server) · [Supermetrics CLI](https://docs.supermetrics.com/apidocs/cli) · Verified 5 Sept 2026

[Back to sections](#sections)

### DataForSEO

**B+ · Production**

The official server and CLI browse DataForSEO documentation and make authenticated API requests for SERP, keyword, backlink and market data.

> **Biggest daily blocker:** It is a research input, not a media activation or first-party performance interface.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote and local MCP | Moderate | Yes | No | No | No | Broad |

**Connection:** Hosted OAuth is relatively direct; CLI and local MCP use API credentials and module-specific billing.

**Manual-feature coverage:** Wide research-data coverage. It does not read or control the advertiser's own paid-media accounts.

**+**

- Official MCP and CLI make search and competitive data directly usable by agents.
- Read-only control is appropriate for external research data.
- Broad API coverage supports repeatable market and SERP analysis.

**−**

- It does not operate advertising accounts.
- Usage-based API costs need monitoring.
- Raw results still require paid-media judgement before action.

**Interfaces:** MCP: Official remote and local MCP · Plugin: No separate official plugin verified · CLI: Official CLI in the MCP package · API/SDK: DataForSEO APIs and clients

**Access:** OAuth for hosted HTTP or API credentials for CLI and local stdio.

**Commercial programme:** Affiliate · [DataForSEO Affiliate Program](https://dataforseo.com/update/affiliate-google-sheets-connector). Standard programme pays 25% of a referred user's first payment; the Sheets connector has a separate fixed bounty.

**Watch:** This supplies research data; it does not control paid-media accounts. API modules are billed and enabled separately.

**Sources:** [Official MCP and CLI repository](https://github.com/dataforseo/mcp-server-typescript) · [DataForSEO API documentation](https://docs.dataforseo.com/v3/) · Verified 5 Sept 2026

[Back to sections](#sections)

### Airbyte

**B · Test**

Airbyte exposes an agent MCP for working with connected data and a separate knowledge MCP for product documentation.

> **Biggest daily blocker:** The MCP does not remove the difficult part: building, authenticating and governing the data connections.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official agent MCP | Hard | Yes | Partial | Partial | Partial | Configurable |

**Connection:** Requires an Airbyte account or instance plus configured sources, destinations, credentials and permissions.

**Manual-feature coverage:** Coverage depends on the connected sources and destinations. Documentation search and action-capable MCP surfaces are distinct.

**+**

- Official agent MCP can expose useful connector and data-movement context.
- Large connector ecosystem supports cross-channel data collection.
- Open-source and managed routes give teams deployment choice.

**−**

- MCP control is mixed and depends on the configured interface.
- Self-hosting adds operational overhead.
- It is infrastructure rather than a marketer-facing daily interface.

**Interfaces:** MCP: Official agent MCP · Plugin: No separate official agent plugin verified · CLI: abctl for local deployment · API/SDK: Python SDK and HTTP API

**Access:** Airbyte account or instance, configured sources and destinations.

**Commercial programme:** Referral · [Airbyte partner client referral](https://airbyte.com/company/partners). Partner page offers a Refer a Client route, but no public commission schedule was verified.

**Watch:** Do not confuse the documentation-search MCP with the agent MCP that can act on connected data.

**Sources:** [Airbyte MCP interface](https://docs.airbyte.com/ai-agents/interfaces/mcp) · [Airbyte documentation](https://docs.airbyte.com/) · Verified 5 Sept 2026

[Back to sections](#sections)

### Fivetran

**C+ · Test**

Fivetran's Agent Context MCP exposes governed data context; its Connector SDK adds a CLI and official coding-agent integrations.

> **Biggest daily blocker:** The agent surface cannot operate the connectors it describes.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official MCP context layer, public preview | Moderate | Yes | No | No | No | Narrow |

**Connection:** Requires Fivetran account permissions and a compatible MCP connection.

**Manual-feature coverage:** The MCP supplies context and retrieval. Connector operations remain in the REST API, SDK or product.

**+**

- Mature managed data movement supports reliable recurring pipelines.
- Official MCP, agent plugins and Connector SDK CLI cover several technical workflows.
- Read-only MCP control is a sensible context boundary.

**−**

- Agent Context MCP is still a public preview.
- The MCP is not a substitute for connector operations or warehouse permissions.
- Enterprise cost and administration may be disproportionate for a small stack.

**Interfaces:** MCP: Official public preview · Plugin: Official Connector SDK agent plugins · CLI: Connector SDK CLI · API/SDK: REST API and Connector SDK

**Access:** Fivetran Context Layer for MCP; account permissions for API and SDK workflows.

**Commercial programme:** Referral · [Fivetran Partner Program](https://www.fivetran.com/partners/become-a-partner). Partner programme includes referral incentives, co-selling and reselling; terms vary by tier.

**Watch:** The MCP is a context and retrieval surface, not a substitute for connector operations or warehouse access controls.

**Sources:** [Agent Context MCP](https://fivetran.com/docs/context-layer/agent-context-mcp) · [Connector SDK AI tools](https://fivetran.com/docs/connector-sdk/building-connectors/ai-tools) · Verified 5 Sept 2026

[Back to sections](#sections)

### Google MCP Toolbox for Databases

**B · Production**

Google's open-source MCP toolbox connects agents to BigQuery and other databases through explicitly configured tools.

> **Biggest daily blocker:** It is infrastructure for building a safe interface, not a paid-media connector that works after sign-in.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official self-hosted MCP framework | Hard | Depends | Depends | Depends | Depends | Configurable |

**Connection:** Requires deployment or local runtime, database credentials, tools configuration and security design.

**Manual-feature coverage:** Prebuilt database tools and custom YAML definitions can expose broad operations, bounded by the configured role and queries.

**+**

- Official open-source toolbox exposes governed database tools through MCP.
- Supports BigQuery and other common production data stores.
- CLI and Gemini extensions help teams package repeatable access.

**−**

- It is not a paid-media connector by itself.
- Read/write risk depends entirely on tool definitions and database roles.
- Secure configuration requires data-engineering discipline.

**Interfaces:** MCP: Official, open source · Plugin: Gemini CLI extensions · CLI: toolbox CLI · API/SDK: BigQuery and database connectors

**Access:** Self-hosted configuration plus database credentials and permissions.

**Commercial programme:** None verified · No product-specific commercial programme verified. General Google Cloud partnership routes are not specific to this open-source toolbox.

**Watch:** This is a general database layer, not a paid-media connector. Read/write risk depends entirely on the configured tools and database role.

**Sources:** [Official MCP Toolbox repository](https://github.com/googleapis/mcp-toolbox) · [Toolbox documentation](https://mcp-toolbox.dev/documentation/introduction/) · Verified 5 Sept 2026

[Back to sections](#sections)

### Snowflake

**B · Production**

Snowflake's managed MCP lets agents reach governed Snowflake capabilities without deploying a separate server.

> **Biggest daily blocker:** The quality and safety of the workflow depend on substantial data-platform work before the first useful marketing prompt.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official managed MCP | Hard | Yes | Depends | Depends | Depends | Configurable |

**Connection:** Requires Snowflake account configuration, Cortex Agent setup, warehouse roles and deliberate tool exposure.

**Manual-feature coverage:** Coverage can be broad, but it depends entirely on schemas, tools, semantic models and role permissions configured by the team.

**+**

- Official managed MCP works inside Snowflake's role and governance model.
- Strong foundation for cross-channel measurement and governed client data.
- Official CLI, APIs and drivers support serious production engineering.

**−**

- It needs warehouse, role and cost governance expertise.
- Mixed control can expose consequential writes when roles are too broad.
- It is infrastructure, not a ready-made paid-media workflow.

**Interfaces:** MCP: Official managed MCP · Plugin: No dedicated paid-media plugin verified · CLI: Snowflake CLI · API/SDK: Drivers, APIs and SDKs

**Access:** Snowflake account, Cortex Agent configuration and role permissions.

**Commercial programme:** Referral · [Snowflake Partner Network](https://www.snowflake.com/en/why-snowflake/partners/). Eligible partners can receive referral rebates, service credits and co-marketing support.

**Watch:** Warehouse permissions remain the real control plane. Scope roles and exposed tools narrowly.

**Sources:** [Snowflake-managed MCP server](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) · [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index) · Verified 5 Sept 2026

[Back to sections](#sections)

## Automation and workflow

| Tool | Grade | Ready | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Zapier](#zapier) | A- | Production | Easy | Depends | Depends | Depends | Depends | Configurable |
| [Pipedream](#pipedream) | A- | Production | Moderate | Depends | Depends | Depends | Depends | Configurable |
| [n8n](#n8n) | B+ | Test | Moderate | Depends | Depends | Depends | Depends | Configurable |

### Zapier

**A- · Production**

Zapier MCP lets assistants call scoped actions across Zapier's app catalogue; the Platform CLI is for building Zapier integrations.

> **Biggest daily blocker:** It is easy to connect but can only do what each Zapier action exposes, while successful MCP calls consume tasks.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote MCP | Easy | Depends | Depends | Depends | Depends | Configurable |

**Connection:** Create a scoped MCP server, choose actions and authorise the connected apps.

**Manual-feature coverage:** Large app catalogue, but each action must exist in the connector and be explicitly exposed.

**+**

- Official MCP reaches a broad catalogue of business applications.
- Read/write actions make it useful for practical cross-tool workflows.
- Platform CLI supports maintained custom integrations.

**−**

- Connector depth and field coverage vary by application.
- Broad action access can create unintended external changes.
- Task limits and commercial plans can constrain high-volume operations.

**Interfaces:** MCP: Official remote MCP · Plugin: MCP tool bundles, not a separate plugin · CLI: Zapier Platform CLI · API/SDK: Zapier Platform

**Access:** Zapier account and connected apps; each successful MCP call consumes tasks.

**Commercial programme:** Referral · [Zapier Solution Partner referral benefit](https://zapier.com/l/partners). Referral benefit is tied to eligible Solution Partners. Zapier does not offer a general public affiliate programme.

**Watch:** A broad action catalogue can create real external changes. Keep servers client-specific and tools narrowly scoped.

**Sources:** [What is Zapier MCP?](https://help.zapier.com/hc/en-us/articles/48308034391821-What-is-Zapier-MCP) · [Zapier Platform CLI](https://docs.zapier.com/integrations/build-cli/overview) · Verified 5 Sept 2026

[Back to sections](#sections)

### Pipedream

**A- · Production**

Pipedream provides hosted MCP servers across thousands of APIs, managed authentication, an SDK and a full `pd` CLI.

> **Biggest daily blocker:** The route is flexible rather than opinionated. The team still owns action selection, annotations and production separation.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official remote MCP | Moderate | Depends | Depends | Depends | Depends | Configurable |

**Connection:** Pipedream manages connected-app credentials, but the operator must choose apps, actions and permission boundaries.

**Manual-feature coverage:** Broad API and action catalogue, with exact parity determined by the connected component.

**+**

- Official MCP and CLI support flexible API-based automation.
- Code steps handle gaps that fixed connectors cannot cover.
- Strong fit for event-driven media and measurement workflows.

**−**

- More engineering-oriented than a typical marketer tool.
- Credential and secret handling needs careful ownership.
- Failures can cross several connected systems and need monitoring.

**Interfaces:** MCP: Official remote MCP · Plugin: No separate official agent plugin verified · CLI: pd CLI · API/SDK: Connect SDK and API

**Access:** Pipedream account; connected-app credentials are managed by Pipedream.

**Commercial programme:** Affiliate · [Pipedream Affiliate Program](https://pipedream.com/affiliates). Official affiliate application exists; no current public commission rate was visible in the reviewed page.

**Watch:** Tools inherit the permissions of connected accounts. Review annotations and separate development from production.

**Sources:** [Pipedream MCP servers](https://pipedream.com/docs/connect/mcp) · [Pipedream CLI reference](https://pipedream.com/docs/cli/reference) · Verified 5 Sept 2026

[Back to sections](#sections)

### n8n

**B+ · Test**

n8n can expose an instance or a single workflow through MCP, and can also consume external MCP tools inside workflows.

> **Biggest daily blocker:** The workflow must already be designed and governed. A connected client can trigger credentials and external writes across the enabled set.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official built-in MCP, beta | Moderate | Depends | Depends | Depends | Depends | Configurable |

**Connection:** Requires an n8n instance, user-scoped access and deliberate enablement of each workflow exposed to MCP clients.

**Manual-feature coverage:** Can trigger powerful multi-step workflows, but the MCP does not automatically expose every node or manual editor feature.

**+**

- Built-in MCP can build, test and run real workflows.
- Self-hosting gives strong control over data and credentials.
- Large node ecosystem and code support fit complex agency operations.

**−**

- The built-in MCP remains beta.
- Workflow execution can trigger consequential writes across connected tools.
- Self-hosted production use requires monitoring, upgrades and incident ownership.

**Interfaces:** MCP: Official built-in MCP, beta · Plugin: Native nodes and skills, not a separate plugin · CLI: n8n CLI · API/SDK: Public API and workflow nodes

**Access:** n8n instance; enable MCP per instance and workflow, with user-scoped access.

**Commercial programme:** Affiliate · [n8n Affiliate Partner Program](https://n8n.io/partners/). 30% revenue share for 12 months on eligible Starter and Pro referrals.

**Watch:** Connected clients may share the same enabled workflow set. Workflow execution can trigger credentials and external writes.

**Sources:** [Connect to n8n MCP server](https://docs.n8n.io/connect/connect-to-n8n-mcp-server) · [MCP server tools reference](https://docs.n8n.io/connect/connect-to-n8n-mcp-server/mcp-server-tools-reference) · Verified 5 Sept 2026

[Back to sections](#sections)

## Modelling and experimentation

| Tool | Grade | Ready | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Meridian](#meridian) | B+ | Research | Specialist | N/A | Yes | Yes | N/A | Specialist |
| [Robyn](#robyn) | B | Research | Specialist | N/A | Yes | Yes | N/A | Specialist |
| [PyMC-Marketing](#pymc-marketing) | B | Research | Specialist | N/A | Yes | Yes | N/A | Specialist |

### Meridian

**B+ · Research**

Google's open-source marketing mix modelling framework for estimating incremental impact and informing budget allocation.

> **Biggest daily blocker:** It is not an agent or optimiser. Data preparation, priors, model criticism and action rules remain expert work.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official open-source Python package | Specialist | N/A | Yes | Yes | N/A | Specialist |

**Connection:** Requires model-ready historical data, Python, statistical judgement, compute and validation design.

**Manual-feature coverage:** Covers the MMM lifecycle and scenario planning, not live campaign control.

**+**

- Google-backed open-source marketing-mix modelling package.
- Useful for incrementality and budget-allocation questions beyond platform attribution.
- Python package can be made reproducible in a governed modelling workflow.

**−**

- No official MCP, plugin or dedicated CLI was verified.
- Requires statistical skill and suitable historical data.
- It is not a daily campaign-operation interface.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: Python package, not a dedicated CLI · API/SDK: Open-source Python package

**Access:** Open source; requires model-ready historical data and Python expertise.

**Commercial programme:** Partner · [Meridian certified partner programme](https://blog.google/products/ads-commerce/meridian-marketing-mix-model-open-to-everyone/). Selected measurement partners are trained and certified by Google. No public affiliate programme.

**Watch:** A model library is not an autonomous media optimiser. Inputs, priors, validation and decision rules remain practitioner work.

**Sources:** [Official Meridian repository](https://github.com/google/meridian) · Verified 5 Sept 2026

[Back to sections](#sections)

### Robyn

**B · Research**

Meta's open-source marketing mix modelling package for estimating channel contribution and budget scenarios.

> **Biggest daily blocker:** Model output is not an approved campaign change. A practitioner must interpret and operationalise it.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official open-source R and Python package | Specialist | N/A | Yes | Yes | N/A | Specialist |

**Connection:** Requires prepared historical data, R or Python, statistical modelling and validation expertise.

**Manual-feature coverage:** Produces MMM results and allocation hypotheses, without a governed connection to live accounts.

**+**

- Established open-source marketing-mix modelling project from Meta.
- Supports automated model exploration and budget-allocation analysis.
- R and Python routes broaden analyst access.

**−**

- No official MCP or marketer-facing CLI was verified.
- Model selection and calibration still require specialist judgement.
- Outputs do not translate directly into safe platform changes.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: R and Python package, not a dedicated CLI · API/SDK: Open-source R and Python package

**Access:** Open source; requires prepared data and statistical modelling expertise.

**Commercial programme:** None verified · No affiliate or partner programme verified. Open-source project rather than a separately sold workflow product.

**Watch:** Robyn produces model outputs, not campaign changes. Treat automated budget recommendations as hypotheses requiring review.

**Sources:** [Official Robyn repository](https://github.com/facebookexperimental/Robyn) · Verified 5 Sept 2026

[Back to sections](#sections)

### PyMC-Marketing

**B · Research**

An open-source Bayesian marketing analytics package covering marketing mix modelling and customer-lifetime-value work.

> **Biggest daily blocker:** Its flexibility increases the amount of expert modelling work required before any media decision is safe.

| Route judged | Setup | Read | Create | Modify | Delete | Coverage |
| --- | --- | --- | --- | --- | --- | --- |
| Official open-source Python package | Specialist | N/A | Yes | Yes | N/A | Specialist |

**Connection:** Requires Python, Bayesian modelling expertise, prepared data, compute and model validation.

**Manual-feature coverage:** Flexible modelling toolkit, not a campaign-operation or turn-key daily marketer interface.

**+**

- Flexible Bayesian tooling for media-mix and customer-value modelling.
- Open source and inspectable for teams that need methodological control.
- Python ecosystem supports custom analysis and reproducibility.

**−**

- Requires strong Python and statistical expertise.
- No official MCP, plugin or dedicated workflow CLI was verified.
- It is a modelling library rather than a daily media-operations product.

**Interfaces:** MCP: No official MCP verified · Plugin: No official agent plugin verified · CLI: Python package, not a dedicated CLI · API/SDK: Open-source Python package

**Access:** Open source; requires Python and Bayesian modelling expertise.

**Commercial programme:** None verified · No affiliate or partner programme verified. Open-source project rather than a separately sold workflow product.

**Watch:** The package supports analysis. It does not provide a governed connection to advertising accounts.

**Sources:** [PyMC-Marketing repository](https://github.com/pymc-labs/pymc-marketing) · [PyMC-Marketing documentation](https://www.pymc-marketing.io/en/stable/) · Verified 5 Sept 2026

[Back to sections](#sections)

## Contributing

Facts, operational assessment and editorial grade are stored separately. Corrections need a vendor source and fresh verification date. Rating changes need a concrete daily-workflow rationale. See [CONTRIBUTING.md](CONTRIBUTING.md).

Maintained by [The Detail Department](https://detail-department.com/). No vendor sponsorship, affiliate relationship or client relationship is implied.

MIT licensed. Vendor capabilities and programme terms remain subject to their respective access rules.
