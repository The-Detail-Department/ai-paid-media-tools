# Measurement routes: sharing-readiness evidence

Reviewed 16 November 2026. Ten assigned analytics/measurement entries only. This is public-documentation and maintained-source research, not a live-account test. Machine-readable recommendations are in `measurement.json`. No shared dataset or provider state was changed.

## 1. What can an external assistant actually read and change?

### Takeaway

Several October assessments are materially stale. Google Analytics has limited opt-in writes; AppsFlyer can create OneLink links; Adjust has an official hosted MCP. Adobe's actual references support creating/updating components but do not document deletion. Public APIs and in-product assistants must remain distinct from the evaluated external route.

### Cited findings

| Platform | Verified action boundary | Primary evidence |
| --- | --- | --- |
| Google Analytics | Release 1.1.0 adds custom-dimension and key-event creation. Annotation creation also exists. All are opt-in; these are not general property CRUD. | [6 November release](https://github.com/googleanalytics/google-analytics-mcp/releases/tag/1.1.0), [current tool list](https://github.com/googleanalytics/google-analytics-mcp) |
| Google Tag Manager | A maintained Stape MCP exposes real tag CRUD, workspace/preview/version operations and publishing. This is a third-party route. | [Stape repository](https://github.com/stape-io/google-tag-manager-mcp-server), [tag actions](https://github.com/stape-io/google-tag-manager-mcp-server/blob/main/packages/core/src/tools/tagActions.ts), [publish actions](https://github.com/stape-io/google-tag-manager-mcp-server/blob/main/packages/core/src/tools/versionActions.ts) |
| Amplitude | Queries and analytical/taxonomy writes are broad. Event-definition changes are not ingested events. Guides/surveys stop at drafts, with final publishing in the UI. | [MCP boundaries](https://amplitude.com/docs/amplitude-ai/amplitude-mcp), [guides/surveys](https://amplitude.com/docs/amplitude-ai/guides-surveys-mcp) |
| Mixpanel | Boards/cohorts support CRUD; experiments and flags have beta writes. Some query/targeting operations remain unavailable. | [MCP tools](https://docs.mixpanel.com/docs/mcp), [maintained changelog](https://github.com/mixpanel/docs/blob/main/changelogs.mdx) |
| Adobe Analytics | Reads reports/components/projects. Writes explicitly include segment, calculated-metric and project upserts plus date-range creation. No delete tool is listed. | [AA tool reference](https://developer.adobe.com/analytics-mcp/docs/aa/reference) |
| Adobe CJA | Similar analytical operations plus audience upserts. Do not infer connection administration or deletion. | [CJA tool reference](https://developer.adobe.com/analytics-mcp/docs/cja/reference) |
| PostHog | Queries and insight/dashboard CRUD, plus operational surfaces including errors and pipelines. | [analytics tools](https://posthog.com/docs/product-analytics/surfaces/mcp), [pipeline actions](https://posthog.com/docs/data-pipelines/surfaces/mcp) |
| AppsFlyer | OneLink creation is now a confirmed, limited MCP write. The 12 November announcement also expands analytical reads. Its separate Apple Ads action agent is not evidence of an external MCP bid tool. | [tool catalogue](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP), [12 November announcement](https://www.appsflyer.com/company/newsroom/pr/agentic-ai-mcp-tools) |
| Adjust | The external MCP retrieves aggregate data. Its documentation describes action in another connected system, not Adjust mutation. | [official guide](https://help.adjust.com/en/article/adjust-mcp), [official explanation](https://www.adjust.com/blog/adjust-mcp/) |
| Segment | Public API resource CRUD is real. Twilio's MCP currently retrieves public documentation and does not execute API calls. | [Public API](https://www.twilio.com/docs/segment/api/public-api), [docs-only MCP](https://www.twilio.com/docs/ai/mcp) |

### Inferences

- Google Analytics's old read-only claim and AppsFlyer's old Create No must change before sharing.
- For Adobe, Modify can be Yes for named supported components, while Delete should be No documented action on this route. Partial must not be used to borrow a separate API capability.
- The GTM index can either evaluate the practical Stape route explicitly or keep a Google-owned API assessment and show Stape separately. It must not describe Stape as Google's official MCP.
- A workflow's final meaningful action matters: a draft survey is not published; creating a key event does not implement its collection; publishing a GTM version does not validate consent or event delivery.

### Gaps

No account was connected, no operation was executed and no production behaviour was tested. Unlisted operations remain unverified, not proven impossible. No closed-beta account was available to validate expanded entitlements.

## 2. How close is setup to installing an app or plugin?

### Takeaway

There are three verified direct-directory routes among these entries: PostHog, Mixpanel and Adobe CJA. Several other products have straightforward hosted OAuth connectors. Google's Analytics server remains self-managed, while Segment's operational route remains custom code in the primary evidence reviewed.

### Cited findings

- **PostHog:** its [Claude setup guide](https://posthog.com/docs/model-context-protocol/claude-desktop) points to a directory connector; the hosted authentication flow selects the US/EU region. The [general guide](https://posthog.com/docs/model-context-protocol) distinguishes free MCP connectivity from possible AI-tool spend.
- **Adobe CJA versus AA:** the same [official Claude guide](https://developer.adobe.com/analytics-mcp/docs/guides/claude) explicitly provides CJA through the directory and AA through manual URL entry. Both require [product plus MCP access permissions](https://developer.adobe.com/analytics-mcp/docs/guides/permissions).
- **Mixpanel:** [official instructions](https://docs.mixpanel.com/docs/mcp) provide direct Claude/ChatGPT links for US; EU/India use regional custom connectors. Admin enablement varies with account age/tier.
- **Amplitude:** [hosted MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) requires OAuth and write RBAC. ChatGPT receives a reduced tool catalogue by default; progressive discovery expands it. [All plans](https://amplitude.com/mcp-server) can use MCP; Enterprise is required for service-account authentication.
- **AppsFlyer:** the [beta guide](https://support.appsflyer.com/hc/en-us/articles/36349070304785--Beta-AppsFlyer-MCP) documents a custom GPT as well as hosted MCP. The recommendation evaluates MCP so its documented actions and limits stay attached to the same route.
- **Adjust:** [Early Access enablement](https://help.adjust.com/en/article/adjust-mcp) precedes custom-connector OAuth. The exact endpoint is `/mcpo`, not `/mcp`.
- **Google Analytics:** [local and HTTP instructions](https://github.com/googleanalytics/google-analytics-mcp) require runtime, Google API credentials and deployment/configuration. HTTP support does not mean Google hosts the service for customers.
- **GTM:** [Stape's hosted option](https://github.com/stape-io/google-tag-manager-mcp-server) handles Google OAuth; its local CLI is a separate setup path. Hosted traffic passes through Stape.
- **Segment:** the [Public API](https://www.twilio.com/docs/segment/api/public-api) needs a server-side integration, Team/Business tier and an owner-created token. The no-auth [Twilio docs MCP](https://www.twilio.com/docs/ai/mcp) cannot substitute for that.

### Inferences

Use separate setup labels for directory app, hosted custom connector, self-managed server and custom API. A hosted custom connector should not receive the directory-app label simply because ChatGPT can be configured to use it. Native assistants within vendor dashboards are not the external assistant access being scored.

### Gaps

Hosted Stape commercial limits were not established. Actual connector visibility depends on user/client/organisation configuration. Plan entitlements, admin permissions and beta access still require a customer-specific check; documentation proves the route exists, not that any given account can use it today.

## 3. Which grades and public claims should change?

### Takeaway

Apply the user's new practical rubric consistently. Broad APIs alone should not score like a connector with live account tools. The recommendations below are editorial judgements, not vendor quality scores or measured reliability results.

### Cited findings

| Entry | Baseline | Proposed | Reason tied to evidence above |
| --- | --- | --- | --- |
| Google Analytics | B+ | B | Useful reporting and narrow creation; self-managed setup remains significant. |
| Google Tag Manager | B | B+ for Stape route | Hosted read/write/publish is real, but label the third party. If restricted to Google-owned API, C+ is more consistent. |
| Amplitude | A- | A- | Broad hosted read/write with explicit publish and ingestion limits. |
| Mixpanel | B+ | A- | Direct connectors and broad everyday analytical/content operations. |
| Adobe Analytics | B+ | B+ | Useful hosted reads/upserts; access administration and no documented deletion. |
| Adobe CJA | B+ | A- | Verified directory connection plus meaningful component/project/audience operations. |
| PostHog | A | A | Broad CRUD and operational tools with direct connection. |
| AppsFlyer | B | B+ | Current broad reads plus confirmed limited OneLink creation. |
| Adjust | C+ | C+ | Replace API-only claim, but verified MCP scope is aggregate reads and access-gated. |
| Segment | B- | C | Custom integration required; docs MCP is not an account connector. |

### Inferences

Keep maturity labels separate: AppsFlyer is beta; Adjust is Early Access; Mixpanel has beta subfeatures rather than every tool necessarily being beta. Avoid a universal 'full control' badge. Publish specific operations and remaining UI work instead.

The Google Analytics/Segment grade reductions reflect the requested rubric, not a loss of product capability. Adjust's unchanged letter hides an important improvement in route availability; its description and connection facts still need a substantial correction.

### Gaps

Final cross-index calibration belongs with the parent review across all tools. The research supports these bounded routes and proposed grades, not a claim of 100% completeness or a hands-on production certification. Third-party alternatives were investigated deeply for GTM because a maintained, operational route changes the practical answer; this is not an exhaustive survey of every intermediary connector for all ten platforms.
