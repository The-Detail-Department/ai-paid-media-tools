# AI paid media tools

**A maintained, evidence-backed index of the interfaces available to AI paid-media practitioners.**

The catalogue separates official MCP servers from community wrappers, agent plugins from ordinary integrations, and useful command-line products from packages that merely launch a server. It also records the control boundary, access gate and source for every entry.

[Browse the visual field index](docs/index.html) · [Read the methodology](METHODOLOGY.md) · [Propose a correction](../../issues/new?template=correction.yml)

## At a glance

- 33 tools across media buying, measurement, modelling, data, workflow and creative operations
- 21 tools with a verified official MCP
- 14 MCPs with write or mixed control
- 6 tools with a verified official agent plugin or skills package
- 12 tools with a useful official CLI

Last full review: **5 Sept 2026**

## The index

| Tool | Area | MCP | MCP control | Plugin | CLI | API / SDK |
| --- | --- | --- | --- | --- | --- | --- |
| [Google Ads](https://github.com/googleads/google-ads-mcp) | Media buying | Official, open source | read only | No official plugin verified | No dedicated CLI verified | Google Ads API and client libraries |
| [Meta Ads](https://www.facebook.com/business/news/meta-ads-ai-connectors) | Media buying | Official open beta | mixed | No official plugin verified | No dedicated CLI verified | Marketing API |
| [TikTok for Business](https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en) | Media buying | Official remote MCP | read write | No official plugin verified | No dedicated CLI verified | TikTok API for Business |
| [Microsoft Advertising](https://www.about.ads.microsoft.com/en/solutions/technology/mcp-server) | Media buying | Official managed MCP | mixed | No official plugin verified | No dedicated CLI verified | Microsoft Advertising API |
| [Amazon Ads](https://advertising.amazon.com/en-ca/library/news/amazon-ads-mcp-server-open-beta) | Media buying | Official open beta | read write | No official plugin verified | No dedicated CLI verified | Amazon Ads API |
| [Snapchat Ads](https://developers.snap.com/marketing-api/Ads-MCP/Introduction) | Media buying | Official, allowlist rollout | read only | No official plugin verified | No dedicated CLI verified | Snap Marketing API |
| [LinkedIn Ads](https://www.linkedin.com/help/linkedin/answer/a526048/accessing-linkedin-apis?lang=en) | Media buying | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | LinkedIn Marketing APIs |
| [Pinterest Ads](https://developer.pinterest.com/docs/overview/welcome/) | Media buying | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Pinterest API for ads |
| [Reddit Ads](https://ads-api.reddit.com/docs/) | Media buying | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Reddit Ads API v3 |
| [X Ads](https://docs.x.com/x-ads-api/introduction) | Media buying | No official Ads MCP verified | N/A | xurl agent skill | xurl CLI | X Ads API |
| [Display & Video 360](https://developers.google.com/display-video/api) | Media buying | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Display & Video 360 API |
| [Campaign Manager 360](https://developers.google.com/doubleclick-advertisers/rest/) | Media buying | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Campaign Manager 360 API |
| [Search Ads 360](https://developers.google.com/search-ads/reporting) | Media buying | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Search Ads 360 Reporting API |
| [Apple Ads](https://ads.apple.com/maps/apple-ads/help/campaigns/0022-use-apple-ads-platform-api) | Media buying | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Apple Ads Platform API |
| [The Trade Desk](https://partner.thetradedesk.com/v3/portal/news/doc/DocsUpdates) | Media buying | Official OAK MCP, private beta | read write | No official plugin verified | No dedicated CLI verified | Platform REST and GraphQL APIs |
| [Google Analytics](https://developers.google.com/analytics/devguides/MCP) | Measurement | Official, open source | read only | No official plugin verified | No dedicated CLI verified | Data API and Admin API |
| [Google Tag Manager](https://developers.google.com/tag-platform/tag-manager/api/v2) | Measurement | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Tag Manager API |
| [Amplitude](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) | Measurement | Official remote MCP | read write | Official agent plugins and skills | Amplitude Wizard CLI | Analytics and management APIs |
| [Mixpanel](https://mixpanel.com/ai/mcp) | Measurement | Official beta | not stated | No official plugin verified | No dedicated CLI verified | Mixpanel APIs |
| [Supermetrics](https://docs.supermetrics.com/docs/supermetrics-mcp-server) | Data movement | Official remote MCP | read only | Official AI chat integrations | Official CLI, alpha | Supermetrics API |
| [DataForSEO](https://github.com/dataforseo/mcp-server-typescript) | Research data | Official remote and local MCP | read only | No official plugin verified | Official CLI in the MCP package | DataForSEO APIs and clients |
| [Airbyte](https://docs.airbyte.com/ai-agents/interfaces/mcp) | Data movement | Official agent MCP | mixed | No official plugin verified | abctl for local deployment | Python SDK and HTTP API |
| [Fivetran](https://fivetran.com/docs/context-layer/agent-context-mcp) | Data movement | Official public preview | read only | Official Connector SDK agent plugins | Connector SDK CLI | REST API and Connector SDK |
| [Google MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox) | Data access | Official, open source | mixed | Gemini CLI extensions | toolbox CLI | BigQuery and database connectors |
| [Snowflake](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) | Data access | Official managed MCP | mixed | No official plugin verified | Snowflake CLI | Drivers, APIs and SDKs |
| [Meridian](https://github.com/google/meridian) | Modelling | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Open-source Python package |
| [Robyn](https://github.com/facebookexperimental/Robyn) | Modelling | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Open-source R and Python package |
| [PyMC-Marketing](https://github.com/pymc-labs/pymc-marketing) | Modelling | No official MCP verified | N/A | No official plugin verified | No dedicated CLI verified | Open-source Python package |
| [Zapier](https://help.zapier.com/hc/en-us/articles/48308034391821-What-is-Zapier-MCP) | Workflow | Official remote MCP | read write | No official plugin verified | Zapier Platform CLI | Zapier Platform |
| [Pipedream](https://pipedream.com/docs/connect/mcp) | Workflow | Official remote MCP | read write | No official plugin verified | pd CLI | Connect SDK and API |
| [n8n](https://docs.n8n.io/connect/connect-to-n8n-mcp-server) | Workflow | Official built-in MCP, beta | read write | No official plugin verified | n8n CLI | Public API and workflow nodes |
| [Figma](https://developers.figma.com/docs/figma-mcp-server/) | Creative | Official remote and desktop MCP | mixed | Official plugins and agent skills | No dedicated CLI verified | REST and Plugin APIs |
| [Canva](https://www.canva.dev/docs/mcp/) | Creative | Official remote MCP | read write | No official plugin verified | Canva Apps CLI | Apps SDK and Connect APIs |

## Reading the table

- **No official MCP verified** is a bounded research result, not proof that no server exists.
- **Read + write** includes any tool that can create, update, launch or delete connected objects.
- A CLI for building integrations is labelled as such; it is not presented as a marketer-facing campaign CLI.
- Community tools are not promoted to official status because they wrap an official API.

## Contributing

Corrections need a vendor source, an explicit provenance label, a control boundary and a fresh verification date. See [CONTRIBUTING.md](CONTRIBUTING.md).

Maintained by [The Detail Department](https://detail-department.com/). No vendor sponsorship or client relationship is implied.

MIT licensed. The facts remain subject to the terms and access rules of their respective vendors.
