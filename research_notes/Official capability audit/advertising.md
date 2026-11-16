# Official advertising capabilities

Rechecked 16 November 2026. Fifteen media platforms. This is a primary-documentation audit, not an authenticated connection or an execution test. No account or campaign was changed. The JSON companion contains complete proposed records and route-specific provenance, availability and evidence fields.

## What can an assistant read and change?

### Takeaway

Meta's old blanket unknown assessment is incorrect: its current official markdown documents campaign reads, creation, editing and explicit activation. The Trade Desk documents useful reads, but its write examples conflict with a release table that still labels configuration for H2 2026. Availability must remain flagged there.

### Cited Findings

Each row concerns only the named route. Yes and Partial describe documented operations, not successful tests in our accounts. The order is Read / Create / Modify / Delete / Publish.

| Platform and evaluated route | Proposed action assessment | Evidence and boundary |
| --- | --- | --- |
| Google Ads official self-managed MCP | Yes / Partial / Partial / Partial / No | Reads campaign resources and metrics; writes standalone assets and labels. It cannot create, edit, pause or enable campaigns, ad groups, ads, budgets or bids. Label deletion is not campaign deletion. [MCP integration guide](https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server) |
| Meta official hosted Ads MCP | Yes / Yes / Yes / Partial / Yes | Official tools include campaign/ad-set/ad creation, entity updates and explicit activation; creation starts paused. Custom-audience deletion is documented, but campaign deletion is not. [Campaign tools](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-tools-ad-creation-and-management.md) Reporting includes entity metrics and account analysis. [Reporting tools](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-tools-comprehensive-reporting.md) Catalogue item, set and feed deletion is separate from campaign deletion. [Catalogue tools](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-tools-catalog-creation-and-management.md) |
| TikTok official hosted MCP | Yes / Yes / Yes / Unverified / Unverified | Campaign creation, reports, audience changes, budget/bid updates and ad-group pausing are documented. Exact delete and activation tools were not readable from its separate tool-library page. [Capabilities](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en), [tool library](https://business-api.tiktok.com/portal/docs/available-tools-in-tiktok-for-business-mcp-server/v1.3) |
| Microsoft Advertising hosted MCP | Yes / No / No / No / No | Official entity tools are expressly read-only and never modify account data. [Tool catalogue](https://learn.microsoft.com/en-us/advertising/guides/mcp-tools?view=bingads-13) |
| Amazon Ads hosted MCP | Yes / Yes / Yes / Yes / Partial | The vendor documents reports, account data and supported campaign creation, updating and deletion. Campaign workflows retain review and approval. Scope is not every advertising product. [MCP beta announcement](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta) |
| Snapchat hosted MCP | Yes / No / No / No / No | The current release explicitly prevents creation, updates and deletion. [MCP scope](https://developers.snap.com/marketing-api/Ads-MCP/Introduction) |
| LinkedIn custom Ads API | Yes / Yes / Yes / Partial / Partial | Campaign GET/create/update and ACTIVE status are documented. Drafts use DELETE; non-drafts use PENDING_DELETION. Activation remains subject to eligibility. This is not MCP capability. [Campaign operations](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?view=li-lms-2026-10) |
| Pinterest custom Ads API | Yes / Yes / Yes / Partial / Yes | Campaigns can be drafted and made ACTIVE; DELETED_DRAFT differs from recoverable archival. Some fields cannot change after leaving draft. [Campaign API guide](https://dev.pinterest.com/docs/work-with-ads/create-campaigns-and-ad-groups/) |
| Reddit custom Ads API v3 | Yes / Yes / Yes / Partial / Partial | Campaign create and PATCH are explicit. The official CampaignPatch schema accepts configured_status including ACTIVE and DELETED; effective status can still be pending approval or billing. DELETED is a status operation, not a hard-delete endpoint. [Create](https://ads-api.reddit.com/docs/v3/api/create-campaign), [update](https://ads-api.reddit.com/docs/v3/api/update-campaign), [official OpenAPI schema](https://ads-api.reddit.com/api/v3/openapi.json) |
| X official hosted Ads MCP | Yes / Yes / Yes / Partial / Yes | Campaign/line-item reads, creation, updates and explicit activation are documented. New campaign objects start paused. Selected audience/creative/media/tag deletes do not establish campaign deletion. [MCP inventory](https://docs.x.com/x-ads-api/mcp) |
| DV360 custom API v5 beta | Yes / Yes / Yes / Partial / Partial | Line items support create/get/patch/delete and explicit status changes; serving depends on the hierarchy. [v5 reference](https://developers.google.com/display-video/api/reference/rest/v5/advertisers.lineItems) Responsive YouTube ads gained create/edit/delete on 12 November, but YouTube line-item/ad-group/targeting work still needs the UI or SDF upload. [Release](https://developers.google.com/ads/blog/posts/2026/11/manage-responsive-youtube-ads-with-display) |
| CM360 custom API v5 | Yes / Yes / Yes / Unverified / Unverified | Campaign get/list/insert/patch/update are documented; archive is not deletion. The reviewed campaign reference does not establish a general publish operation. [Campaign methods](https://developers.google.com/doubleclick-advertisers/rest/v5/campaigns) |
| SA360 custom Reporting API | Yes / No / No / No / No | The evaluated API is explicitly read-only. [Reporting API](https://developers.google.com/search-ads/reporting) |
| Apple Ads custom Platform API | Yes / Yes / Yes / Yes / Partial | Official markdown lists delete endpoints across campaigns, ad groups, ads, creatives and keywords. [API index](https://developer.apple.com/documentation/apple-ads-platform-api.md), [campaign endpoints](https://developer.apple.com/documentation/apple-ads-platform-api/campaigns-endpoints.md) The launch walkthrough sets ENABLED on campaign, ad group and ad; eligibility and effective delivery remain separate. [App Store workflow](https://developer.apple.com/documentation/apple-ads-platform-api/journey-app-store-ads.md) |
| The Trade Desk OAK hosted MCP | Yes / Unverified / Unverified / Unverified / Unverified | Knowledge, data retrieval and reporting are Available. Configuration & Management remains H2 2026 in the release table, despite working-sounding write examples below it. The published date is not confirmation of shipment. No exact delete/activation boundary is established. [OAK capabilities](https://open.thetradedesk.com/advertiser/docsApp/AdvertiserNews/news/doc/McpOpenAgenticKitOverview) |

### Inferences

- Meta B- to B+ is an editorial correction based on newly accessible first-party MCP evidence. It remains Test, with rollout status unconfirmed and some creative features restricted. This is a connection assessment, not an advertising-performance score.
- OAK B to C+ replaces a historical pending score with a conservative grade for the currently documented read route. Its unconfirmed writes do not justify a read/write grade.
- Reddit C to C+ reflects a more complete official campaign-operation boundary, while the custom-integration ceiling remains.
- CM360 Publish was Partial despite no dependable publish boundary in its reviewed evidence. Unverified is more accurate.

### Gaps

No authenticated tools/list was retrieved and no representative write was executed. TikTok's separate tool library returned an empty parsed page. OAK's current release table and write examples do not agree on shipment; account access is also closed beta. These gaps remain visible in the data rather than being treated as missing product features or successful tests.

## Are the connections official and ready?

### Takeaway

All fifteen evaluated routes have first-party evidence, but official does not mean immediately usable. Seven are custom API integrations. Hosted services can still be beta, gated, read-only or require developer setup.

### Cited Findings

- Meta's official setup page supports OAuth and authorised tokens, and explicitly links an option without a developer-owned Meta app. Some creative formats are labelled limited availability. Its accessible current pages do not confirm a general rollout date or GA status. [Authentication](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-get-started.md), [creative restrictions](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-tools-ad-creation-and-management.md)
- TikTok describes a production-ready hosted server with no developer credential or custom-code prerequisite. This supports Easy setup, not a claim of a native ChatGPT/Claude directory app. [TikTok setup](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en)
- Amazon remains open beta for partners with active API credentials. [Amazon access](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta)
- Google requires self-management and a production-approved Cloud project. Its current guide also documents official agent skills and a Developer Assistant plugin, correcting the old No official plugin verified field; those helpers do not expand MCP mutation scope. [Google guide](https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server)
- Microsoft requires Entra app registration for ChatGPT and Claude. VS Code's interactive route avoids that prerequisite. [Client setup](https://learn.microsoft.com/en-us/advertising/guides/mcp-setup?view=bingads-13)
- Snapchat has self-service read access, with organisation-admin approval and individual member consent. [Onboarding](https://developers.snap.com/marketing-api/Ads-MCP/Introduction)
- X requires a developer application and OAuth. [X setup](https://docs.x.com/x-ads-api/mcp)
- LinkedIn Advertising API access is vetted. [Access tiers](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/ads-overview)
- Pinterest now has an official MCP announcement, including a hosted endpoint and OAuth description. However, the page invites readers to hear when it launches; it does not establish a released tool inventory. The currently assessed operational route remains its API. [MCP announcement](https://dev.pinterest.com/about-pinterest-mcp/)
- Reddit API v3 requires OAuth but not allowlisting; v4 is separately labelled Preview. [API access](https://ads-api.reddit.com/docs/v3/api/reddit-advertising-api)
- DV360 API v5 is public beta and may change incompatibly. [Release status](https://developers.google.com/ads/blog/posts/2026/11/manage-responsive-youtube-ads-with-display)
- CM360 and SA360 require developer integration and existing authorised product access. [CM360 setup](https://developers.google.com/doubleclick-advertisers/getting_started), [SA360 scope](https://developers.google.com/search-ads/reporting)
- Apple requires an API-user role and OAuth credentials; its own help page tells implementers to plan for development and maintenance. [Apple access](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api)
- OAK requires selection for its closed beta, then approved OAuth/CIMD or API-token access. [OAK setup](https://open.thetradedesk.com/advertiser/docsApp/Foundations/resources/doc/McpOpenAgenticKitGettingStarted)

### Inferences

Do not derive a Ready label from rating.readiness alone. The proposed connection metadata records first-party provenance separately from availability. The UI must also flag custom integration, self-management, read-only scope and unverified actions. A generally available API is not a ready AI connection.

### Gaps

Meta's rollout classification is Unverified even though its official tool capabilities are now documented. This is deliberately narrower than calling the entire Meta route unverified. API-only entries retain No official MCP verified only where no first-party MCP route was established; Pinterest is now explicitly an announced exception.

## What changed and how was it checked?

### Takeaway

All fifteen records were rechecked against current first-party pages in this run. Previously blocked HTML pages sometimes had accessible vendor markdown, which resolved important omissions without using third-party capability claims.

### Cited Findings

- Meta's llms.txt enumerates vendor-hosted markdown references. Direct public HTTPS requests with Accept: text/markdown returned 200 for overview, authentication, campaign tools, reporting, catalogue tools, signals and the official CLI. Its HTML overview and CLI blog still returned inaccessible/429 responses, and the Facebook Business Help page redirected to login. [Official documentation index](https://developers.facebook.com/documentation/ads-commerce/llms.txt)
- Meta's official CLI documents campaign lifecycle operations. This corrects the earlier No dedicated official CLI verified field, without borrowing its campaign deletion support for MCP. [CLI overview](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/ads-cli-overview.md)
- Apple's main documentation exposes a Markdown link. The Markdown index and endpoint guides provided capabilities omitted by the JavaScript-only parsed page. [Apple Markdown index](https://developer.apple.com/documentation/apple-ads-platform-api.md)
- Pinterest's API guide initially parsed, later timed out through the web renderer, and returned 200 through a direct public read. The draft/active/deleted state definitions were inspected there. [Campaign guide](https://dev.pinterest.com/docs/work-with-ads/create-campaigns-and-ad-groups/)

### Inferences

The source-reader fallback changed evidence access, not product configuration. It did not authenticate, accept new terms, connect accounts or execute platform tools. The new verifiedOn dates concern these documentation reviews only. Meta and OAK no longer need generic Previous assessment prose; their specific unresolved parts remain flagged.

### Gaps

No claim here establishes reliability in a particular advertiser account. The application/release team must retain the distinction between documented, connected and executed evidence. This audit cannot certify all endpoints, permissions, client versions or paid-account prerequisites.
