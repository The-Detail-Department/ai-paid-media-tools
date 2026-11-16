# AI paid-media tools

**The Detail Department's view of what an AI paid-media team can use in real work today.**

Published by [The Detail Department](https://detail-department.com/). Editorial lead: [Léon Houlier](https://github.com/leonhoulier).

An evidence-backed comparison of Model Context Protocol (MCP) servers, advertising APIs, plugins and command-line tools used across media buying, analytics, measurement, creative production and marketing automation.

We compare what external AI can read, what it can write and how easily it connects. The same combined lens applies across categories, with the exact route and its limits stated in each record.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise. A Production readiness label is not proof of hands-on execution.

[Media platforms](#media-platforms) · [Analytics](#analytics) · [Measurement](#measurement) · [Creative production](#creative-production) · [Research and intelligence](#research-and-intelligence) · [Data infrastructure](#data-infrastructure) · [Automation and workflow](#automation-and-workflow) · [Modelling](#modelling)

**50 tools reviewed** · 29 Production · 18 Test · 3 Research · Catalogue updated 16 Nov 2026

[Read the methodology](METHODOLOGY.md) · [Propose a correction](../../issues/new?template=correction.yml)

**Market role:** Reference = established category leader · Emerging = newer challenger worth watching · Specialist = narrower expert tool. Market role does not determine grade.

## Media platforms

Advertising platforms and buying systems, judged on the named documented route available to an AI-assisted operator.

- **TikTok for Business (A-):** Its official remote MCP covers campaign, reporting, audience and creative work.
- **Google Ads (B-):** Google's official Ads MCP cannot create an ad, change a bid or budget, pause an entity or fix the issue it finds.
- **Meta Ads (B-):** Meta's connector can create supported objects, then still sends the operator back to Ads Manager for ordinary changes.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [TikTok for Business](catalogue/media-platforms.md#tiktok-for-business) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Unverified | Unverified | Most steps |
| [Amazon Ads](catalogue/media-platforms.md#amazon-ads) | **B+** | Reference | Test | Hard | Yes | Yes | Yes | Yes | Partial | Most steps |
| [X Ads](catalogue/media-platforms.md#x-ads) | **B+** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Yes | Most steps |
| [The Trade Desk](catalogue/media-platforms.md#the-trade-desk) | **B** (previous; review pending) | Reference | Test | Moderate | Unverified | Unverified | Unverified | Unverified | Unverified | Depends |
| [Google Ads](catalogue/media-platforms.md#google-ads) | **B-** | Reference | Production | Hard | Yes | Partial | Partial | Partial | No | Some steps |
| [Meta Ads](catalogue/media-platforms.md#meta-ads) | **B-** (previous; review pending) | Reference | Test | Moderate | Unverified | Unverified | Unverified | Unverified | Unverified | Depends |
| [Apple Ads](catalogue/media-platforms.md#apple-ads) | **C+** | Reference | Production | Hard | Yes | Yes | Yes | Unverified | Unverified | Some steps |
| [Campaign Manager 360](catalogue/media-platforms.md#campaign-manager-360) | **C+** | Reference | Production | Hard | Yes | Yes | Yes | Unverified | Partial | Some steps |
| [Display & Video 360](catalogue/media-platforms.md#display--video-360) | **C+** | Reference | Production | Hard | Yes | Yes | Yes | Partial | Partial | Some steps |
| [Microsoft Advertising](catalogue/media-platforms.md#microsoft-advertising) | **C+** | Reference | Production | Hard | Yes | No | No | No | No | Assist only |
| [Snapchat Ads](catalogue/media-platforms.md#snapchat-ads) | **C+** | Reference | Production | Moderate | Yes | No | No | No | No | Assist only |
| [Pinterest Ads](catalogue/media-platforms.md#pinterest-ads) | **C+** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Yes | Some steps |
| [Search Ads 360](catalogue/media-platforms.md#search-ads-360) | **C** | Reference | Production | Hard | Yes | No | No | No | No | Assist only |
| [LinkedIn Ads](catalogue/media-platforms.md#linkedin-ads) | **C** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Partial | Some steps |
| [Reddit Ads](catalogue/media-platforms.md#reddit-ads) | **C** | Reference | Test | Hard | Yes | Yes | Partial | Unverified | Unverified | Some steps |

[Open the detailed assessments](catalogue/media-platforms.md)

## Analytics

Analytics products judged on whether an agent can investigate performance and leave useful analysis behind.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Adobe Customer Journey Analytics](catalogue/analytics.md#adobe-customer-journey-analytics) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | No | Unverified | Most steps |
| [Amplitude](catalogue/analytics.md#amplitude) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | No | Most steps |
| [Mixpanel](catalogue/analytics.md#mixpanel) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Yes | Unverified | Most steps |
| [Adobe Analytics](catalogue/analytics.md#adobe-analytics) | **B+** | Reference | Production | Moderate | Yes | Yes | Yes | No | Unverified | Most steps |
| [Google Analytics](catalogue/analytics.md#google-analytics) | **B** | Reference | Production | Hard | Yes | Partial | No | No | No | Some steps |
| [PostHog](catalogue/analytics.md#posthog) | **A** | Emerging | Production | Easy | Yes | Yes | Yes | Partial | Partial | Most steps |

[Open the detailed assessments](catalogue/analytics.md)

## Measurement

Collection, tagging and attribution systems judged on implementation, validation and operational monitoring.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Google Tag Manager](catalogue/measurement.md#google-tag-manager) | **B+** | Reference | Production | Moderate | Yes | Yes | Yes | Yes | Yes | Most steps |
| [AppsFlyer](catalogue/measurement.md#appsflyer) | **B** | Reference | Test | Moderate | Yes | Partial | No | No | No | Some steps |
| [Adjust](catalogue/measurement.md#adjust) | **C+** | Reference | Test | Moderate | Yes | Unverified | Unverified | Unverified | Unverified | Assist only |
| [Twilio Segment](catalogue/measurement.md#twilio-segment) | **C** | Reference | Production | Hard | Yes | Yes | Yes | Yes | Unverified | Some steps |

[Open the detailed assessments](catalogue/measurement.md)

## Creative production

Creative systems judged on context, generation, editing, format adaptation and usable output.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Canva](catalogue/creative-production.md#canva) | **A-** | Reference | Production | Easy | Yes | Yes | Yes | Unverified | Partial | Most steps |
| [Adobe Firefly Creative Production](catalogue/creative-production.md#adobe-firefly-creative-production) | **B+** | Reference | Test | Hard | Yes | Yes | Partial | No | Partial | Most steps |
| [Figma](catalogue/creative-production.md#figma) | **B+** | Reference | Test | Easy | Yes | Yes | Yes | Partial | No | Most steps |
| [Runway](catalogue/creative-production.md#runway) | **B+** | Emerging | Production | Easy | Partial | Yes | Partial | Unverified | No | Most steps |

[Open the detailed assessments](catalogue/creative-production.md)

## Research and intelligence

External research systems judged on discovery, retrieval, comparison, analysis and export.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Ahrefs](catalogue/research-intelligence.md#ahrefs) | **C+** | Reference | Production | Easy | Yes | Unverified | Unverified | Unverified | No | Assist only |
| [Semrush](catalogue/research-intelligence.md#semrush) | **C+** | Reference | Production | Easy | Yes | No | No | Unverified | No | Assist only |
| [Similarweb](catalogue/research-intelligence.md#similarweb) | **C+** | Reference | Production | Easy | Yes | Unverified | Unverified | Unverified | No | Assist only |
| [DataForSEO](catalogue/research-intelligence.md#dataforseo) | **C+** | Specialist | Production | Moderate | Yes | Partial | No | Unverified | No | Assist only |

[Open the detailed assessments](catalogue/research-intelligence.md)

## Data infrastructure

Pipelines, warehouses and semantic layers judged on connection, inspection, querying, transformation and operation.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Supermetrics](catalogue/data-infrastructure.md#supermetrics) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [Snowflake](catalogue/data-infrastructure.md#snowflake) | **B+** | Reference | Production | Hard | Yes | Depends | Depends | Depends | No | Depends |
| [Airbyte](catalogue/data-infrastructure.md#airbyte) | **B+** | Reference | Test | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [Databricks](catalogue/data-infrastructure.md#databricks) | **B+** | Reference | Test | Hard | Yes | Depends | Depends | Depends | No | Most steps |
| [Fivetran](catalogue/data-infrastructure.md#fivetran) | **C+** | Reference | Test | Hard | Yes | Partial | No | Unverified | Unverified | Assist only |
| [RudderStack](catalogue/data-infrastructure.md#rudderstack) | **B-** | Emerging | Test | Moderate | Yes | Unverified | Partial | Unverified | Unverified | Some steps |
| [dbt](catalogue/data-infrastructure.md#dbt) | **B+** | Specialist | Test | Moderate | Yes | Depends | Depends | Depends | Partial | Most steps |
| [Google MCP Toolbox for Databases](catalogue/data-infrastructure.md#google-mcp-toolbox-for-databases) | **B** | Specialist | Production | Specialist | Yes | Depends | Depends | Depends | No | Depends |

[Open the detailed assessments](catalogue/data-infrastructure.md)

## Automation and workflow

Cross-tool automation systems judged on connection, workflow construction, execution, debugging and monitoring.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Zapier](catalogue/automation-workflow.md#zapier) | **A-** | Reference | Production | Moderate | Yes | Partial | Partial | Depends | Partial | Most steps |
| [Make](catalogue/automation-workflow.md#make) | **B+** | Reference | Production | Moderate | Yes | Depends | Partial | Depends | Partial | Most steps |
| [Workato](catalogue/automation-workflow.md#workato) | **B** | Reference | Production | Hard | Yes | Partial | Partial | Depends | Depends | Some steps |
| [Pipedream](catalogue/automation-workflow.md#pipedream) | **A-** | Emerging | Production | Moderate | Yes | Partial | Partial | Depends | Partial | Most steps |
| [Gumloop](catalogue/automation-workflow.md#gumloop) | **A-** | Emerging | Test | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [n8n](catalogue/automation-workflow.md#n8n) | **B+** | Emerging | Test | Moderate | Yes | Yes | Yes | Unverified | Yes | Most steps |

[Open the detailed assessments](catalogue/automation-workflow.md)

## Modelling

Specialist modelling frameworks judged on preparation, configuration, execution, validation and scenario planning.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Meridian](catalogue/modelling.md#meridian) | **B-** | Specialist | Research | Specialist | Yes | Yes | Yes | Unverified | No | Specialist |
| [PyMC-Marketing](catalogue/modelling.md#pymc-marketing) | **C+** | Specialist | Research | Specialist | Yes | Yes | Yes | Unverified | No | Specialist |
| [Robyn](catalogue/modelling.md#robyn) | **C** | Specialist | Research | Specialist | Yes | Yes | Yes | Unverified | No | Specialist |

[Open the detailed assessments](catalogue/modelling.md)

## How scoring works

1. What useful information can external AI read?
2. What can it create, edit, delete or publish?
3. Is connection native, hosted, self-managed or custom-built?
4. How much of the manual product does it cover?
5. Is it mature and governable?

**Grade** combines read, write and setup. Read-only and custom-API-only routes are capped at C+; that does not rate their overall product quality. **Readiness** describes documented maturity, not hands-on testing.

| Grade | Use |
| :---: | :--- |
| A | Strong daily recommendation |
| B | Useful within clear limits |
| C | Narrow, immature or indirect |
| D / F | Not recommended for production work |

[Definitions and grade ceilings](METHODOLOGY.md)

## CMS companion

[The AI CMS Index](catalogue/cms.md) assesses CMS platforms and AI/LLM workflows using the same read/write/setup lens, with content-specific action boundaries.

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
