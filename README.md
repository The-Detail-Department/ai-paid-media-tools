# AI paid-media tools

AI paid-media tools (ai-paid-media-tools) is an open, evidence-backed index of the MCP servers, advertising APIs, plugins and command-line tools that AI agents can use in paid-media work, graded on what each documented route can read and write and how easily it connects.

**The Detail Department's view of what an AI paid-media team can use in real work today.**

Published by [The Detail Department](https://detail-department.com/). Editorial lead: [Léon Houlier](https://github.com/leonhoulier).

**Read it online:** [Web index](https://the-detail-department.github.io/ai-paid-media-tools/) · [The AI Media Index](https://detail-department.com/ai-media-index) and [The AI CMS Index](https://detail-department.com/ai-cms-index) on detail-department.com · [JSON data](#use-the-data) · [llms.txt](https://the-detail-department.github.io/ai-paid-media-tools/llms.txt)

We compare what external AI can read and write through each Model Context Protocol (MCP) server, API, plugin or command-line tool, and how easily it connects, so you can check a route before you build or buy advertising automation around it. The same combined lens applies across media buying, analytics, measurement, creative production, research, data infrastructure, marketing automation and modelling, with the exact route and its limits stated in each record.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise. A Production readiness label is not proof of hands-on execution.

[Media platforms](#media-platforms) · [Analytics](#analytics) · [Measurement](#measurement) · [Creative production](#creative-production) · [Research and intelligence](#research-and-intelligence) · [Data infrastructure](#data-infrastructure) · [Automation and workflow](#automation-and-workflow) · [Modelling](#modelling)

**50 tools reviewed** · 20 Production · 27 Test · 3 Research · Catalogue updated 16 Nov 2026

[Read the methodology](METHODOLOGY.md) · [Propose a correction](../../issues/new?template=correction.yml)

**Market role:** Reference = established category leader · Emerging = newer challenger worth watching · Specialist = narrower expert tool. Market role does not determine grade.

## Media platforms

Advertising platforms and buying systems, judged on the named documented route available to an AI-assisted operator.

- **TikTok for Business (A-):** Its official remote MCP covers campaign, reporting, audience and creative work.
- **Google Ads (B-):** Google's official Ads MCP cannot create an ad, change a bid or budget, pause an entity or fix the issue it finds.
- **Meta Ads (B+):** Meta's connector can create supported objects, then still sends the operator back to Ads Manager for ordinary changes.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [TikTok for Business](catalogue/media-platforms.md#tiktok-for-business) | **A-** | Reference | Test | Easy | Yes | Yes | Yes | Unverified | Unverified | Most steps |
| [Amazon Ads](catalogue/media-platforms.md#amazon-ads) | **B+** | Reference | Test | Hard | Yes | Yes | Yes | Yes | Partial | Most steps |
| [Meta Ads](catalogue/media-platforms.md#meta-ads) | **B+** | Reference | Test | Moderate | Yes | Yes | Yes | Partial | Yes | Most steps |
| [X Ads](catalogue/media-platforms.md#x-ads) | **B+** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Yes | Most steps |
| [Google Ads](catalogue/media-platforms.md#google-ads) | **B-** | Reference | Test | Hard | Yes | Partial | Partial | Partial | No | Some steps |
| [Microsoft Advertising](catalogue/media-platforms.md#microsoft-advertising) | **C+** | Reference | Production | Hard | Yes | No | No | No | No | Assist only |
| [Snapchat Ads](catalogue/media-platforms.md#snapchat-ads) | **C+** | Reference | Production | Moderate | Yes | No | No | No | No | Assist only |
| [Apple Ads](catalogue/media-platforms.md#apple-ads) | **C+** | Reference | Test | Hard | Yes | Yes | Yes | Yes | Partial | Some steps |
| [Campaign Manager 360](catalogue/media-platforms.md#campaign-manager-360) | **C+** | Reference | Test | Hard | Yes | Yes | Yes | Unverified | Unverified | Some steps |
| [Display & Video 360](catalogue/media-platforms.md#display--video-360) | **C+** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Partial | Some steps |
| [Pinterest Ads](catalogue/media-platforms.md#pinterest-ads) | **C+** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Yes | Some steps |
| [Reddit Ads](catalogue/media-platforms.md#reddit-ads) | **C+** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Partial | Some steps |
| [The Trade Desk](catalogue/media-platforms.md#the-trade-desk) | **C+** | Reference | Test | Hard | Yes | Unverified | Unverified | Unverified | Unverified | Assist only |
| [LinkedIn Ads](catalogue/media-platforms.md#linkedin-ads) | **C** | Reference | Test | Hard | Yes | Yes | Yes | Partial | Partial | Some steps |
| [Search Ads 360](catalogue/media-platforms.md#search-ads-360) | **C** | Reference | Test | Hard | Yes | No | No | No | No | Assist only |

[Open the detailed assessments](catalogue/media-platforms.md)

## Analytics

Analytics products judged on whether an agent can investigate performance and leave useful analysis behind.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Adobe Customer Journey Analytics](catalogue/analytics.md#adobe-customer-journey-analytics) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | No | Unverified | Most steps |
| [Amplitude](catalogue/analytics.md#amplitude) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [Mixpanel](catalogue/analytics.md#mixpanel) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Yes | Unverified | Most steps |
| [Adobe Analytics](catalogue/analytics.md#adobe-analytics) | **B+** | Reference | Production | Moderate | Yes | Yes | Yes | No | Unverified | Most steps |
| [Google Analytics](catalogue/analytics.md#google-analytics) | **B** | Reference | Production | Hard | Yes | Partial | No | No | No | Some steps |
| [PostHog](catalogue/analytics.md#posthog) | **A** | Emerging | Production | Easy | Yes | Yes | Yes | Partial | Partial | Most steps |

[Open the detailed assessments](catalogue/analytics.md)

## Measurement

Collection, tagging and attribution systems judged on implementation, validation and operational monitoring.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Google Tag Manager](catalogue/measurement.md#google-tag-manager) | **B+** | Reference | Test | Moderate | Yes | Yes | Yes | Yes | Yes | Most steps |
| [AppsFlyer](catalogue/measurement.md#appsflyer) | **B** | Reference | Test | Moderate | Yes | Partial | No | No | No | Some steps |
| [Adjust](catalogue/measurement.md#adjust) | **C+** | Reference | Test | Moderate | Yes | Unverified | Unverified | Unverified | Unverified | Assist only |
| [Twilio Segment](catalogue/measurement.md#twilio-segment) | **C** | Reference | Production | Hard | Yes | Yes | Yes | Yes | Unverified | Some steps |

[Open the detailed assessments](catalogue/measurement.md)

## Creative production

Creative systems judged on context, generation, editing, format adaptation and usable output.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Canva](catalogue/creative-production.md#canva) | **A-** | Reference | Production | Easy | Yes | Yes | Yes | Unverified | Unverified | Most steps |
| [Adobe Firefly Creative Production](catalogue/creative-production.md#adobe-firefly-creative-production) | **B+** | Reference | Test | Hard | Yes | Yes | Partial | No | Partial | Most steps |
| [Figma](catalogue/creative-production.md#figma) | **B+** | Reference | Test | Easy | Yes | Yes | Yes | Partial | No | Most steps |
| [Runway](catalogue/creative-production.md#runway) | **B+** | Emerging | Production | Easy | Partial | Yes | Partial | Unverified | Unverified | Most steps |

[Open the detailed assessments](catalogue/creative-production.md)

## Research and intelligence

External research systems judged on discovery, retrieval, comparison, analysis and export.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Ahrefs](catalogue/research-intelligence.md#ahrefs) | **B** | Reference | Production | Easy | Yes | Partial | Partial | Partial | No | Some steps |
| [Semrush](catalogue/research-intelligence.md#semrush) | **C+** | Reference | Production | Easy | Yes | No | No | No | No | Assist only |
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
| [Fivetran](catalogue/data-infrastructure.md#fivetran) | **C+** | Reference | Test | Hard | Yes | Partial | No | No | No | Assist only |
| [RudderStack](catalogue/data-infrastructure.md#rudderstack) | **Not scored: verification needed** | Emerging | Test | Moderate | Yes | Unverified | Partial | Unverified | Unverified | Some steps |
| [dbt](catalogue/data-infrastructure.md#dbt) | **B+** | Specialist | Test | Moderate | Yes | Depends | Depends | Depends | Partial | Most steps |
| [Google MCP Toolbox for Databases](catalogue/data-infrastructure.md#google-mcp-toolbox-for-databases) | **B** | Specialist | Production | Specialist | Yes | Depends | Depends | Depends | No | Depends |

[Open the detailed assessments](catalogue/data-infrastructure.md)

## Automation and workflow

Cross-tool automation systems judged on connection, workflow construction, execution, debugging and monitoring.

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Zapier](catalogue/automation-workflow.md#zapier) | **A-** | Reference | Production | Easy | Yes | Partial | Partial | Depends | Partial | Most steps |
| [Make](catalogue/automation-workflow.md#make) | **B** | Reference | Test | Moderate | Yes | Unverified | Partial | Unverified | Unverified | Most steps |
| [Workato](catalogue/automation-workflow.md#workato) | **B** | Reference | Test | Hard | Yes | Partial | Partial | Unverified | Unverified | Some steps |
| [Pipedream](catalogue/automation-workflow.md#pipedream) | **A-** | Emerging | Production | Moderate | Yes | Partial | Partial | Depends | Partial | Most steps |
| [Gumloop](catalogue/automation-workflow.md#gumloop) | **A-** | Emerging | Test | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [n8n](catalogue/automation-workflow.md#n8n) | **B+** | Emerging | Test | Moderate | Yes | Yes | Yes | Partial | Yes | Most steps |

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

## Common questions

### Is this a package, an SDK or an automation tool?

No. It is an evidence index: JSON data, generated Markdown and a static web page. It connects to no advertising account and changes nothing. There is no package to install; [use the data](#use-the-data) directly.

### Which advertising platforms let an AI agent change campaigns, bids or budgets?

It depends on the route. Each platform's evaluated route is listed with its documented edit scope, quoted from the record, and its connection status. A custom integration means you build and host the connection yourself.

**Edit documented (10)**

- **TikTok for Business** · A- · TikTok for Business official hosted MCP (official, generally available). Edit scope: Budgets, bids, targeting and ad-group pausing.
- **Amazon Ads** · B+ · Amazon Ads official hosted MCP (official, beta). Edit scope: Supported campaign settings.
- **Meta Ads** · B+ · Meta Ads official hosted MCP (official, availability unverified). Edit scope: Campaign, ad-set and ad fields, audiences and catalogue data.
- **X Ads** · B+ · X Ads official hosted MCP (official, generally available). Edit scope: Campaigns, line items and supported related objects.
- **Apple Ads** · C+ · Apple Ads API, custom integration (official, generally available). Edit scope: Supported campaign-management operations.
- **Campaign Manager 360** · C+ · Campaign Manager 360 API, custom integration (official, generally available). Edit scope: Campaign fields and archive state.
- **Display & Video 360** · C+ · Display & Video 360 API v5 beta, custom integration (official, beta). Edit scope: Supported resources and targeting.
- **Pinterest Ads** · C+ · Pinterest Ads API, custom integration (official, generally available). Edit scope: Supported fields, targeting, schedules and status.
- **Reddit Ads** · C+ · Reddit Ads API, custom integration (official, generally available). Edit scope: Campaign names, budgets, bids, schedules and configured status.
- **LinkedIn Ads** · C · LinkedIn Ads API, custom integration (official, restricted access). Edit scope: Targeting, budgets, schedules and status.

**Edit partly documented (1)**

- **Google Ads** · B- · Google Ads official MCP, local or self-deployed (official, restricted access). Edit scope: Labels and their associations only.

**Edit not yet verified (1)**

- **The Trade Desk** · C+ · The Trade Desk OAK hosted MCP (official, restricted access). Edit scope: Write examples exist, but their release table does not confirm shipment.

**Edit not supported (3)**

- **Microsoft Advertising** · C+ · Microsoft Advertising official hosted MCP (official, generally available). Edit scope: Read-only connection.
- **Snapchat Ads** · C+ · Snapchat Ads official hosted MCP (official, generally available). Edit scope: Read-only connection.
- **Search Ads 360** · C · Search Ads 360 API, custom integration (official, generally available). Edit scope: Read-only connection.

### Has The Detail Department tested these routes?

No hands-on testing is recorded. All 50 entries are **Documentation reviewed**: assessment based on current official documentation, product announcements and public source repositories. None is recorded as Connected, Executed or Used repeatedly, so no grade reflects a live test.

### How current is it?

The catalogue was last updated on 16 Nov 2026. Each record shows its own **Last checked** date, and the [changelog](CHANGELOG.md) lists every review. Vendors change AI routes quickly, so confirm the cited source before relying on an entry.

### How do I correct an entry or ask a question?

[Propose a correction](../../issues/new?template=correction.yml) with an official source, or ask in the [issue tracker](https://github.com/The-Detail-Department/ai-paid-media-tools/issues). The [contribution guide](CONTRIBUTING.md) explains what counts as evidence.

## CMS companion

[The AI CMS Index](catalogue/cms.md) assesses CMS platforms and AI/LLM workflows using the same read/write/setup lens, with content-specific action boundaries.

## Use the data

There is no package to install. The index is three JSON files, published with the web index and kept in `data/` in this repository:

| File | Contents |
| :--- | :--- |
| [tools.json](https://the-detail-department.github.io/ai-paid-media-tools/data/tools.json) | Interface facts: routes, official links, sources and review dates |
| [workflows.json](https://the-detail-department.github.io/ai-paid-media-tools/data/workflows.json) | Daily workflow assessments: read, create, edit, delete and publish, each with its scope |
| [ratings.json](https://the-detail-department.github.io/ai-paid-media-tools/data/ratings.json) | Editorial ratings: grade, readiness, market role, positives and limits |

For example, list the advertising platforms whose evaluated route documents Edit, with its scope. You need `curl` and `jq`:

```bash
curl -s -O https://the-detail-department.github.io/ai-paid-media-tools/data/ratings.json \
     -O https://the-detail-department.github.io/ai-paid-media-tools/data/workflows.json
jq -r --slurpfile w workflows.json '.ratings | to_entries[]
  | $w[0].workflows[.key] as $route
  | select(.value.section == "Media platforms" and $route.reviewStatus == "current" and $route.actions.modify == "Yes")
  | "\(.value.grade)\t\(.key)\t\($route.actionScopes.modify)"' ratings.json
```

Output from the catalogue updated 16 Nov 2026:

```text
B+	meta-ads	Campaign, ad-set and ad fields, audiences and catalogue data.
A-	tiktok-for-business	Budgets, bids, targeting and ad-group pausing.
B+	amazon-ads	Supported campaign settings.
C	linkedin-ads	Targeting, budgets, schedules and status.
C+	pinterest-ads	Supported fields, targeting, schedules and status.
C+	reddit-ads	Campaign names, budgets, bids, schedules and configured status.
B+	x-ads	Campaigns, line items and supported related objects.
C+	display-video-360	Supported resources and targeting.
C+	campaign-manager-360	Campaign fields and archive state.
C+	apple-ads	Supported campaign-management operations.
```

A record whose `reviewStatus` is `pending` is shown as **Not scored**, so filter on `current` before using a grade. The CMS companion uses the same structure in `data/cms-tools.json`, `data/cms-workflows.json` and `data/cms-ratings.json`.

To work on the index you need Node.js 20 or later; there are no dependencies to install:

```bash
git clone https://github.com/The-Detail-Department/ai-paid-media-tools.git
cd ai-paid-media-tools
npm run check   # validates the data and confirms the generated files are current
npm run serve   # serves the web index at http://localhost:4173 (needs Python 3)
```

Edit the `data/*.json` files, then run `npm run build` and `npm run check`. The [contribution guide](CONTRIBUTING.md) explains the evidence rules.

## Data and maintenance

- [Interface facts](data/tools.json)
- [Daily workflow assessments](data/workflows.json)
- [Editorial ratings](data/ratings.json)
- [Web index](https://the-detail-department.github.io/ai-paid-media-tools/) and its [llms.txt](https://the-detail-department.github.io/ai-paid-media-tools/llms.txt) summary for AI assistants
- [The AI Index](https://detail-department.com/ai-index) on detail-department.com: the website edition, rendered from a pinned snapshot of these data files
- [Citation metadata](CITATION.cff)
- [Changelog](CHANGELOG.md)
- [Contribution guide](CONTRIBUTING.md)
- [Generated web interface source](docs/index.html) (`npm run serve` to run locally)

Generated from the repository data files. No sponsorship, affiliate relationship or client relationship is implied.

Maintained by [The Detail Department](https://detail-department.com/). MIT licensed.
