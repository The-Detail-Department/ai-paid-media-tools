# Advertising platform AI routes

Research date: 16 November 2026. Scope: 15 assigned advertising platforms. Evidence is public documentation, not authenticated connection or live-operation testing. No accounts, campaign changes, paid calls or provider writes were used. The companion `advertising.json` records exact routes and separate create, modify, delete and publish assessments. Unknown does not mean unavailable.

## What can AI read?

### Takeaway

Several vendors now provide a hosted route for campaign questions and reports. API availability alone is a different offer: someone must still build or maintain the connection to the assistant.

### Cited Findings

- Microsoft explicitly lists read-only entity and performance tools. Snapchat also explicitly prevents all writes. [Microsoft tools](https://learn.microsoft.com/en-us/advertising/guides/mcp-tools), [Snapchat scope](https://developers.snap.com/marketing-api/Ads-MCP/Introduction).
- Search Ads 360's evaluated Reporting API is explicitly read-only. [Google reference](https://developers.google.com/search-ads/reporting).
- Amazon describes reporting/account/billing data alongside actions; X documents account and campaign analytics in its own Ads MCP. [Amazon announcement](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta), [X tools](https://docs.x.com/x-ads-api/mcp).

### Inferences

A useful public description should say what a marketer can ask today, then name the connection. A generic API feature list does not establish that a ChatGPT/Claude user can run that workflow immediately.

### Gaps

Meta could not be freshly verified because vendor pages returned login/429 errors. The Trade Desk confirms OAK's existence and private beta in indexed official release notes, but its exact tool catalogue was not publicly available. Preserve their old grades with a review-pending badge, not a new verification claim.

## What can AI change?

### Takeaway

Creation, editing, deletion and activation must be separate fields. A campaign created in a paused or draft state is not a published campaign.

### Cited Findings

- Google's official MCP has gained bounded writes, while campaign/budget changes remain outside its scope. [Current Google integration guide](https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server).
- TikTok explicitly documents campaign creation, targeting/budget adjustments and pausing ad groups. Exact deletion and activation coverage remains unverified in this review. [TikTok help](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en).
- Pinterest distinguishes drafts, active campaigns and deletion/archive states. LinkedIn has separate deletion behaviour for draft and non-draft campaigns. These are custom API routes. [Pinterest states](https://dev.pinterest.com/docs/work-with-ads/create-campaigns-and-ad-groups/), [LinkedIn operations](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?view=li-lms-2026-10).
- DV360 added responsive YouTube ad creation, updates and deletion on 12 November. Its v5 reference still labels the version beta. [Release announcement](https://developers.google.com/ads/blog/posts/2026/11/manage-responsive-youtube-ads-with-display), [v5 reference](https://developers.google.com/display-video/api/reference/rest/v5/advertisers.lineItems).

### Inferences

Regrade API-only entries using the user's practical connection rubric. CM360, DV360 and Apple previously benefited from broad API scope, but this is not the same as ready agent operation. Proposed C/C+ grades reflect implementation friction, not platform quality. X merits B+ for broad hosted actions with explicit activation; Google remains B- for bounded writes with technical setup.

### Gaps

Do not assert all-platform deletion support. Apple help and Reddit overview do not enumerate exact deletion/activation boundaries. Meta MCP capabilities cannot be borrowed from its Marketing API. OAK's broad announced action scope is not a verified CRUD inventory.

## How easy is the connection?

### Takeaway

Use five honest labels: native app, vendor-hosted MCP, self-managed MCP, custom API integration, and no verified route. None of these 15 routes was verified here as a simple native ChatGPT/Claude directory installation with the complete assessed workflow.

### Cited Findings

- Snapchat has changed from allowlisted access to self-service. Admin approval and individual consent remain necessary. [Snapchat onboarding](https://developers.snap.com/marketing-api/Ads-MCP/Introduction).
- Microsoft's ChatGPT/Claude setup requires an Entra app registration, despite the server being hosted. VS Code Copilot has a simpler interactive route. [Microsoft setup](https://learn.microsoft.com/en-us/advertising/guides/mcp-setup?view=bingads-13).
- Google's remote option is an operator deployment. Its developer-token prerequisite is obsolete following the September transition. [Google integration guide](https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server), [Token transition](https://developers.google.com/google-ads/api/docs/api-policy/developer-token).
- Amazon remains open beta for partners with active API credentials. The Trade Desk remains selected-partner private beta in its current indexed notice. [Amazon eligibility](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta), [OAK release notes](https://partner.thetradedesk.com/v3/portal/api/doc/ReleaseNotes).

### Inferences

Suggested grades are editorial, not performance benchmarks. Keep setup, action depth, access/readiness and evidence confidence visible independently. A hosted URL with an app-registration prerequisite is easier than custom development but is not the highest setup tier.

### Gaps

No authenticated tools/list or live write was executed. This is intentional. The next validation for a restricted connector is an authorised read-only tool inventory, not a speculative score upgrade. Meta official CLI URLs were discovered through a third-party mirror but remained blocked on the vendor site; the mirror was used only as a discovery lead, not as technical evidence.
