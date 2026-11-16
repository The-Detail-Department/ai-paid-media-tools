# Measurement and analytics capability audit

Reviewed 16 November 2026. Ten assigned routes; public documentation and source inspection only. No account connection, tool execution, provider change or end-to-end test occurred. The adjacent `measurement.json` contains complete proposed records. A documented, available route is not a tested production guarantee.

## 1. Which capabilities survived a fresh primary-source check?

### Takeaway

All ten routes have accessible maintained primary evidence. One capability was understated: Amplitude supports cohort destination sync, so a blanket Publish No is inaccurate. Supermetrics and PostHog need more precise publish scopes. No letter-grade change is justified by this recheck.

### Cited findings

| Route | Read and write boundary | Primary evidence checked now |
| --- | --- | --- |
| Google Analytics MCP | Account/property and report reads; creation is limited to annotations, custom dimensions and key events. No update/delete tools appear in the catalogue. Collection implementation is outside those writes. | [Google-owned repository and tool list](https://github.com/googleanalytics/google-analytics-mcp) |
| Stape GTM MCP | The Stape implementation explicitly performs tag create/get/update/remove, workspace and preview operations, and version publish/update/remove. These are Stape route capabilities, not proof of an official Google MCP. | [Hosted setup](https://github.com/stape-io/google-tag-manager-mcp-server), [tag implementation](https://github.com/stape-io/google-tag-manager-mcp-server/blob/main/packages/core/src/tools/tagActions.ts), [version implementation](https://github.com/stape-io/google-tag-manager-mcp-server/blob/main/packages/core/src/tools/versionActions.ts), [workspace implementation](https://github.com/stape-io/google-tag-manager-mcp-server/blob/main/packages/core/src/tools/workspaceActions.ts) |
| Amplitude MCP | Reads analytical content and taxonomy, creates and edits supported content, deletes/restores tracking definitions and syncs cohorts to destinations. Guides/surveys remain drafts; publishing them requires the UI. | [MCP workflow boundaries](https://amplitude.com/docs/amplitude-ai/amplitude-mcp), [draft commands](https://amplitude.com/docs/amplitude-ai/guides-surveys-mcp) |
| Mixpanel connector | Queries plus dashboard/cohort CRUD, tracking-plan operations and Lexicon changes. A distinct publishing action remains unverified. Experiment/flag tooling has separate beta and targeting limits. | [Tools and limitations](https://docs.mixpanel.com/docs/mcp) |
| Supermetrics connector | Reads connected marketing data; creates paused campaigns, edits supported settings, removes campaigns and can enable them subject to approval settings. This capability belongs to Supermetrics, not to the native Meta/Google connector records. | [Campaign management](https://docs.supermetrics.com/v1/docs/how-to-manage-ad-campaigns-with-ai-tools), [write access and approvals](https://docs.supermetrics.com/docs/how-to-enable-campaign-write-access) |
| DataForSEO v3 MCP | Its generic `api_request` tool executes authenticated DataForSEO requests, including billable research tasks. No ad-account or website mutation is established. Deletion remains unverified. | [Official repository, v3 tools and endpoint](https://github.com/dataforseo/mcp-server-typescript) |
| Adobe Analytics MCP | Reads reports and components; upserts segments, calculated metrics and workspace projects and creates date ranges. No delete tool appears in the published list. Broader publication is unverified. | [Adobe Analytics reference](https://developer.adobe.com/analytics-mcp/docs/aa/reference) |
| Adobe CJA connector | Similar component/project reads and writes, with audience upserts. No listed deletion tool; downstream audience activation is not established. | [CJA reference](https://developer.adobe.com/analytics-mcp/docs/cja/reference) |
| PostHog connector | Reads and operates analytics objects, flags, surveys and pipelines. Current reference lists flag enable/disable and survey launch, alongside dashboard/insight deletion. Pipeline functions can be enabled/disabled; batch exports support CRUD. | [Tool catalogue](https://posthog.com/docs/model-context-protocol/tools), [pipeline boundaries](https://posthog.com/docs/data-pipelines/surfaces/mcp) |
| AppsFlyer MCP | Aggregate marketing/configuration reads and confirmed OneLink creation under an existing template. Broader account editing and campaign activation are not documented for this route. | [Beta guide and tool catalogue](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP) |

### Inferences

- Change Amplitude Publish from No to Partial; explicitly name cohort sync and preserve the guide/survey UI boundary. The primary guide describes “syncing a cohort to a destination”.
- Replace Supermetrics' old publish wording about Studio dashboards with supported campaign enabling. This keeps the capability attached to the evaluated advertising workflow.
- Keep Adobe's unsupported general administration separate from its confirmed analytical component writes.
- Preserve the current letter grades. This pass clarifies route eligibility and action boundaries rather than inventing a new grading rubric.

### Gaps

No live account evidence was collected. Four action states intentionally remain Unverified: Mixpanel publishing, DataForSEO deletion, Adobe Analytics publishing and CJA downstream activation. The absence of an operation from a documented list is not proof that no private or future implementation exists. Every other state is scoped to the named route and objects.

## 2. What must be flagged before someone treats a route as ready?

### Takeaway

Nine entries evaluate a platform-owned route. GTM evaluates Stape and must visibly say Third-party. AppsFlyer remains Beta. Mixpanel's available core route has beta subfeatures that must not disappear behind an overall readiness badge.

### Cited findings

- **GTM:** the [Stape repository](https://github.com/stape-io/google-tag-manager-mcp-server) provides hosted Google OAuth and a local CLI. It is maintained by Stape, not Google. Commercial limits were not established; existing GTM permissions still apply.
- **AppsFlyer:** the [16 November guide](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP) explicitly calls the service beta for evaluation. It caps OneLink creation at ten links daily per account; OAuth sessions last seven days. Partner-integration inspection excludes agency-type integrations and agency/ad-network users for that tool family. Do not broaden this tool-family limitation into a claim that all MCP access rejects agencies.
- **Mixpanel:** the [official guide](https://docs.mixpanel.com/docs/mcp) marks experiment/feature-flag tools and service-account authentication as beta. Audience targeting is unavailable through those experiment/flag tools. Standard OAuth/core analytical tools are a separate available path.
- **Supermetrics:** the [write-access guide](https://docs.supermetrics.com/docs/how-to-enable-campaign-write-access) says writes default off and must be enabled by the connection owner. The [campaign guide](https://docs.supermetrics.com/v1/docs/how-to-manage-ad-campaigns-with-ai-tools) requires the applicable trial/subscription and destination entitlement. A Supermetrics official app is still a third-party route to the underlying ad platforms.
- **Adobe:** [MCP permissions](https://developer.adobe.com/analytics-mcp/docs/guides/permissions) combine with existing product permissions. Full MCP access does not override underlying component permissions; product administrators receive full MCP access automatically.
- **PostHog:** [setup documentation](https://posthog.com/docs/model-context-protocol) distinguishes free MCP connectivity from AI-powered tools that can incur PostHog AI spend and need AI data processing enabled.

### Inferences

`connection.provenance` describes the evaluated route's owner. Thus Supermetrics is official in its own entry while its `note` explicitly calls out third-party access to other ad platforms. Stape GTM is third-party because the entry is Google Tag Manager. Recommend GTM readiness Test rather than Production under the user's official-first instruction, retaining its capability grade B+.

For `generally-available`, interpret this as publicly documented customer availability without a route-wide beta/preview label found. It is not a formal vendor SLA, hands-on certification or assurance that a particular account has entitlement. Account permissions and commercial requirements stay beside the connection.

### Gaps

Actual client entitlement, connector visibility, runtime reliability, Stape commercial terms and regional customer-specific behaviour were not tested. No main source failed to load in this recheck; first-party pages and repositories were accessible. Unknown action scope must remain flagged even when the overall route is available.

## 3. How should setup and source wording change?

### Takeaway

Retain the practical connection tiers, shorten surface names and replace generic source labels. A person should see the route, its access limitation and the actual action boundary without reading an editorial review history.

### Cited findings

- **Self-managed:** [Google Analytics](https://github.com/googleanalytics/google-analytics-mcp) requires Python, Google API credentials and explicit write enablement. Remote transport in its code is not proof of Google-hosted deployment.
- **Direct connectors:** [PostHog](https://posthog.com/docs/model-context-protocol/claude-desktop) and [CJA](https://developer.adobe.com/analytics-mcp/docs/guides/claude) document directory connection. [Mixpanel](https://docs.mixpanel.com/docs/mcp) has direct US connectors while EU/India use custom regional URLs. [Supermetrics](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools) links its Claude/ChatGPT integrations.
- **Hosted custom connections:** [Adobe Analytics](https://developer.adobe.com/analytics-mcp/docs/guides/claude) requires entering its MCP URL; it should not inherit CJA's directory tier. [Amplitude](https://amplitude.com/docs/amplitude-ai/amplitude-mcp), [DataForSEO](https://github.com/dataforseo/mcp-server-typescript), [AppsFlyer](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP) and [Stape](https://github.com/stape-io/google-tag-manager-mcp-server) document hosted routes.
- **Amplitude CLI correction:** its current [CLI guide](https://amplitude.com/docs/developers/cli) describes the `amp` operational client. Update the CLI reference beyond the old setup-wizard-only label without borrowing its capabilities to fill MCP gaps.

### Inferences

The JSON adds a structured `connection` object to all ten records: owner, availability, documentation-only evidence, check date, source URLs and a short access note. It replaces generic source labels with specific titles and changes repeated surface wording to concise names. The date belongs with sources, not as a repeated headline. Keep any user-visible test status separate from the availability note.

### Gaps

The proposed records are research output only. The parent must merge them into the source catalogue, validate schemas, sync the website snapshot and test the English/French presentation. No source data, generated catalogue, Git state, website or deployment was changed by this researcher.
