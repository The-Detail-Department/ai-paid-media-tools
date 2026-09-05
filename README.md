# AI paid-media tools

**The Detail Department's view of what an AI paid-media team can use in real work today.**

Published by [The Detail Department](https://detail-department.com/). Editorial lead: [Léon Houlier](https://github.com/leonhoulier).

An evidence-backed comparison of Model Context Protocol (MCP) servers, advertising APIs, plugins and command-line tools used across media buying, analytics, measurement, creative production and marketing automation.

We grade the route an operator can connect now, not the vendor's potential. Every category is judged against the work a human would normally do with that kind of tool.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise. A Production readiness label is not proof of hands-on execution.

[Media platforms](#media-platforms) · [Analytics](#analytics) · [Measurement](#measurement) · [Creative production](#creative-production) · [Research and intelligence](#research-and-intelligence) · [Data infrastructure](#data-infrastructure) · [Automation and workflow](#automation-and-workflow) · [Modelling](#modelling)

**50 tools reviewed** · 28 Production · 19 Test · 3 Research · Last checked 5 Sept 2026

[Read the methodology](METHODOLOGY.md) · [Propose a correction](../../issues/new?template=correction.yml)

**Market role:** Reference = established category leader · Emerging = newer challenger worth watching · Specialist = narrower expert tool. Market role does not determine grade.

## Media platforms

Advertising platforms and buying systems, judged on the most direct official route available to an AI-assisted operator.

- **TikTok for Business (A):** Its official remote MCP covers campaign, reporting, audience and creative work.
- **Google Ads (B-):** Google's official Ads MCP cannot create an ad, change a bid or budget, pause an entity or fix the issue it finds.
- **Meta Ads (B-):** Meta's connector can create supported objects, then still sends the operator back to Ads Manager for ordinary changes.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Modify | Delete | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [TikTok for Business](catalogue/media-platforms.md#tiktok-for-business) | **A** | Reference | Production | Easy | Yes | Yes | Yes | Partial | Most steps |
| [Amazon Ads](catalogue/media-platforms.md#amazon-ads) | **B+** | Reference | Test | Hard | Yes | Yes | Yes | Yes | Most steps |
| [Campaign Manager 360](catalogue/media-platforms.md#campaign-manager-360) | **B** | Reference | Production | Hard | Yes | Yes | Yes | Partial | Most steps |
| [The Trade Desk](catalogue/media-platforms.md#the-trade-desk) | **B** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Most steps |
| [Apple Ads](catalogue/media-platforms.md#apple-ads) | **B-** | Reference | Production | Hard | Yes | Yes | Yes | Partial | Some steps |
| [Display & Video 360](catalogue/media-platforms.md#display--video-360) | **B-** | Reference | Production | Hard | Yes | Yes | Yes | Partial | Some steps |
| [Google Ads](catalogue/media-platforms.md#google-ads) | **B-** | Reference | Production | Hard | Yes | No | No | No | Assist only |
| [Meta Ads](catalogue/media-platforms.md#meta-ads) | **B-** | Reference | Test | Easy | Yes | Partial | No | No | Some steps |
| [X Ads](catalogue/media-platforms.md#x-ads) | **B-** | Reference | Test | Hard | Yes | Partial | Partial | Partial | Some steps |
| [Microsoft Advertising](catalogue/media-platforms.md#microsoft-advertising) | **C+** | Reference | Production | Easy | Yes | No | No | No | Assist only |
| [Search Ads 360](catalogue/media-platforms.md#search-ads-360) | **C+** | Reference | Production | Hard | Yes | No | No | No | Assist only |
| [Pinterest Ads](catalogue/media-platforms.md#pinterest-ads) | **C+** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Some steps |
| [LinkedIn Ads](catalogue/media-platforms.md#linkedin-ads) | **C** | Reference | Test | Hard | Yes | Partial | Partial | Partial | Some steps |
| [Reddit Ads](catalogue/media-platforms.md#reddit-ads) | **C** | Reference | Test | Hard | Yes | Partial | Partial | Partial | Some steps |
| [Snapchat Ads](catalogue/media-platforms.md#snapchat-ads) | **C** | Reference | Test | Hard | Yes | No | No | No | Assist only |

[Open the detailed assessments](catalogue/media-platforms.md)

## Analytics

Analytics products judged on whether an agent can investigate performance and leave useful analysis behind.

| Tool | Grade | Market role | Readiness | Setup | Analyse | Build reports | Configure | Validate | Share | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Amplitude](catalogue/analytics.md#amplitude) | **A-** | Reference | Production | Easy | Yes | Yes | Yes | Partial | Yes | Most steps |
| [Adobe Analytics](catalogue/analytics.md#adobe-analytics) | **B+** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [Adobe Customer Journey Analytics](catalogue/analytics.md#adobe-customer-journey-analytics) | **B+** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [Google Analytics](catalogue/analytics.md#google-analytics) | **B+** | Reference | Production | Hard | Yes | Partial | No | Partial | Partial | Some steps |
| [Mixpanel](catalogue/analytics.md#mixpanel) | **B-** | Reference | Test | Easy | Yes | Unverified | Unverified | Partial | Unverified | Assist only |
| [PostHog](catalogue/analytics.md#posthog) | **A** | Emerging | Production | Easy | Yes | Yes | Yes | Yes | Partial | Most steps |

[Open the detailed assessments](catalogue/analytics.md)

## Measurement

Collection, tagging and attribution systems judged on implementation, validation and operational monitoring.

| Tool | Grade | Market role | Readiness | Setup | Inspect | Configure | Validate | Deploy | Monitor | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Google Tag Manager](catalogue/measurement.md#google-tag-manager) | **B** | Reference | Production | Hard | Yes | Yes | Partial | Yes | Partial | Most steps |
| [AppsFlyer](catalogue/measurement.md#appsflyer) | **B** | Reference | Test | Easy | Yes | No | Partial | No | Yes | Some steps |
| [Twilio Segment](catalogue/measurement.md#twilio-segment) | **B-** | Reference | Production | Hard | Yes | Yes | Partial | Yes | Partial | Most steps |
| [Adjust](catalogue/measurement.md#adjust) | **C+** | Reference | Test | Hard | Yes | Partial | Partial | Partial | Yes | Some steps |

[Open the detailed assessments](catalogue/measurement.md)

## Creative production

Creative systems judged on context, generation, editing, format adaptation and usable output.

| Tool | Grade | Market role | Readiness | Setup | Read context | Create | Edit | Adapt | Export | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Canva](catalogue/creative-production.md#canva) | **B+** | Reference | Production | Easy | Yes | Yes | Partial | Partial | Yes | Some steps |
| [Figma](catalogue/creative-production.md#figma) | **B+** | Reference | Production | Easy | Yes | Partial | Partial | Partial | Partial | Some steps |
| [Adobe Firefly Creative Production](catalogue/creative-production.md#adobe-firefly-creative-production) | **B+** | Reference | Test | Moderate | Yes | Yes | Yes | Yes | Yes | Most steps |
| [Runway](catalogue/creative-production.md#runway) | **A-** | Emerging | Production | Moderate | Partial | Yes | Yes | Yes | Yes | Most steps |

[Open the detailed assessments](catalogue/creative-production.md)

## Research and intelligence

External research systems judged on discovery, retrieval, comparison, analysis and export.

| Tool | Grade | Market role | Readiness | Setup | Discover | Retrieve | Compare | Analyse | Export | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Ahrefs](catalogue/research-intelligence.md#ahrefs) | **A-** | Reference | Production | Easy | Yes | Yes | Yes | Yes | Partial | Most steps |
| [Semrush](catalogue/research-intelligence.md#semrush) | **A-** | Reference | Production | Easy | Yes | Yes | Yes | Yes | Yes | Most steps |
| [Similarweb](catalogue/research-intelligence.md#similarweb) | **A-** | Reference | Production | Easy | Yes | Yes | Yes | Yes | Yes | Most steps |
| [DataForSEO](catalogue/research-intelligence.md#dataforseo) | **B+** | Specialist | Production | Moderate | Yes | Yes | Yes | Partial | Yes | Most steps |

[Open the detailed assessments](catalogue/research-intelligence.md)

## Data infrastructure

Pipelines, warehouses and semantic layers judged on connection, inspection, querying, transformation and operation.

| Tool | Grade | Market role | Readiness | Setup | Connect | Inspect | Query | Transform | Operate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Supermetrics](catalogue/data-infrastructure.md#supermetrics) | **B+** | Reference | Production | Moderate | Partial | Yes | Yes | Partial | Partial | Most steps |
| [Databricks](catalogue/data-infrastructure.md#databricks) | **B+** | Reference | Test | Specialist | Depends | Yes | Yes | Depends | Depends | Depends |
| [Snowflake](catalogue/data-infrastructure.md#snowflake) | **B** | Reference | Production | Hard | Depends | Yes | Yes | Depends | Depends | Depends |
| [Airbyte](catalogue/data-infrastructure.md#airbyte) | **B** | Reference | Test | Hard | Partial | Yes | Partial | Partial | Partial | Depends |
| [Fivetran](catalogue/data-infrastructure.md#fivetran) | **C+** | Reference | Test | Moderate | No | Yes | No | No | No | Assist only |
| [RudderStack](catalogue/data-infrastructure.md#rudderstack) | **B+** | Emerging | Test | Easy | Partial | Yes | Partial | Yes | Partial | Most steps |
| [dbt](catalogue/data-infrastructure.md#dbt) | **B+** | Specialist | Test | Specialist | Partial | Yes | Yes | Yes | Yes | Specialist |
| [Google MCP Toolbox for Databases](catalogue/data-infrastructure.md#google-mcp-toolbox-for-databases) | **B** | Specialist | Production | Hard | Depends | Depends | Depends | Depends | Depends | Depends |

[Open the detailed assessments](catalogue/data-infrastructure.md)

## Automation and workflow

Cross-tool automation systems judged on connection, workflow construction, execution, debugging and monitoring.

| Tool | Grade | Market role | Readiness | Setup | Connect | Build | Run | Debug | Monitor | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Make](catalogue/automation-workflow.md#make) | **A-** | Reference | Production | Easy | Yes | Partial | Yes | Partial | Partial | Most steps |
| [Zapier](catalogue/automation-workflow.md#zapier) | **A-** | Reference | Production | Easy | Yes | Partial | Yes | Partial | Partial | Depends |
| [Workato](catalogue/automation-workflow.md#workato) | **B+** | Reference | Production | Hard | Partial | Partial | Yes | Partial | Yes | Depends |
| [Pipedream](catalogue/automation-workflow.md#pipedream) | **A-** | Emerging | Production | Moderate | Yes | Yes | Yes | Yes | Yes | Most steps |
| [Gumloop](catalogue/automation-workflow.md#gumloop) | **B+** | Emerging | Test | Easy | Yes | Yes | Yes | Partial | Partial | Most steps |
| [n8n](catalogue/automation-workflow.md#n8n) | **B+** | Emerging | Test | Moderate | Yes | Yes | Yes | Partial | Partial | Depends |

[Open the detailed assessments](catalogue/automation-workflow.md)

## Modelling

Specialist modelling frameworks judged on preparation, configuration, execution, validation and scenario planning.

| Tool | Grade | Market role | Readiness | Setup | Prepare data | Configure | Run | Validate | Scenarios | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Meridian](catalogue/modelling.md#meridian) | **B+** | Specialist | Research | Specialist | Partial | Yes | Yes | Yes | Yes | Specialist |
| [PyMC-Marketing](catalogue/modelling.md#pymc-marketing) | **B** | Specialist | Research | Specialist | Partial | Yes | Yes | Yes | Yes | Specialist |
| [Robyn](catalogue/modelling.md#robyn) | **B** | Specialist | Research | Specialist | Partial | Yes | Yes | Yes | Yes | Specialist |

[Open the detailed assessments](catalogue/modelling.md)

## How scoring works

1. Can the route finish a recurring job?
2. How much of that category's human job can it complete?
3. How hard is it to connect?
4. How much of the manual product does it cover?
5. Is it mature and governable?

**Grade** measures daily usefulness. **Readiness** measures maturity. Production does not mean complete feature coverage.

| Grade | Use |
| :---: | :--- |
| A | Strong daily recommendation |
| B | Useful within clear limits |
| C | Narrow, immature or indirect |
| D / F | Not recommended for production work |

[Definitions and grade ceilings](METHODOLOGY.md)

## Data and maintenance

- [Interface facts](data/tools.json)
- [Daily workflow assessments](data/workflows.json)
- [Editorial ratings](data/ratings.json)
- [Citation metadata](CITATION.cff)
- [Changelog](CHANGELOG.md)
- [Contribution guide](CONTRIBUTING.md)
- [Generated web interface source](docs/index.html) (`npm run serve` to run locally)

Generated from the repository data files. No sponsorship, affiliate relationship or client relationship is implied.

Maintained by [The Detail Department](https://detail-department.com/). MIT licensed.
