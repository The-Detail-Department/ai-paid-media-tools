# Data and research

Research, connector and warehouse routes that supply the evidence behind paid-media decisions.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics and measurement](analytics-measurement.md) · [Creative and images](creative-images.md) · [Data and research](data-research.md) · [Automation and workflow](automation-workflow.md) · [Modelling and experimentation](modelling-experimentation.md)

`R / C / M / D` means Read / Create / Modify / Delete for the named route.

| Tool | Grade | Ready | Setup | R / C / M / D | Coverage |
| :--- | :---: | :---: | :---: | :--- | :---: |
| [DataForSEO](#dataforseo) | **B+** | Production | Moderate | Yes / No / No / No | Broad |
| [Supermetrics](#supermetrics) | **B+** | Production | Moderate | Yes / No / No / No | Broad |
| [Google MCP Toolbox for Databases](#google-mcp-toolbox-for-databases) | **B** | Production | Hard | Depends / Depends / Depends / Depends | Configurable |
| [Snowflake](#snowflake) | **B** | Production | Hard | Yes / Depends / Depends / Depends | Configurable |
| [Airbyte](#airbyte) | **B** | Test | Hard | Yes / Partial / Partial / Partial | Configurable |
| [Fivetran](#fivetran) | **C+** | Test | Moderate | Yes / No / No / No | Narrow |

## DataForSEO

**B+ · Production**

The official server and CLI browse DataForSEO documentation and make authenticated API requests for SERP, keyword, backlink and market data.

> **Blocker:** It is a research input, not a media activation or first-party performance interface.

- **Route:** Official remote and local MCP.
- **Scope:** SERPs, keywords, backlinks, businesses, products and content data.
- **Setup:** Moderate. Hosted OAuth is relatively direct; CLI and local MCP use API credentials and module-specific billing.
- **Controls:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Broad. Wide research-data coverage. It does not read or control the advertiser's own paid-media accounts.

**Good**

- Official MCP and CLI make search and competitive data directly usable by agents.
- Read-only control is appropriate for external research data.
- Broad API coverage supports repeatable market and SERP analysis.

**Limits**

- It does not operate advertising accounts.
- Usage-based API costs need monitoring.
- Raw results still require paid-media judgement before action.

**Interfaces**

- **MCP:** [Official remote and local MCP](https://github.com/dataforseo/mcp-server-typescript)
- **Plugin:** No separate official plugin verified
- **CLI:** [Official CLI in the MCP package](https://github.com/dataforseo/mcp-server-typescript)
- **API / SDK:** [DataForSEO APIs and clients](https://docs.dataforseo.com/v3/)

- **Access:** OAuth for hosted HTTP or API credentials for CLI and local stdio.
- **Commercial:** Affiliate. [DataForSEO Affiliate Program](https://dataforseo.com/update/affiliate-google-sheets-connector). Standard programme pays 25% of a referred user's first payment; the Sheets connector has a separate fixed bounty.
- **Watch:** This supplies research data; it does not control paid-media accounts. API modules are billed and enabled separately.
- **Sources:** [Official MCP and CLI repository](https://github.com/dataforseo/mcp-server-typescript) · [DataForSEO API documentation](https://docs.dataforseo.com/v3/)
- **Verified:** 5 Sept 2026

[Back to comparison](#data-and-research)

## Supermetrics

**B+ · Production**

A marketing-data MCP that queries Supermetrics sources through one connection, alongside an API and an alpha command-line client.

> **Blocker:** It moves and queries data only. Entitlements, connector costs and source authentication still shape the workflow.

- **Route:** Official remote MCP.
- **Scope:** Marketing-source metadata and query results.
- **Setup:** Moderate. Requires a subscription with API access plus authentication for every source queried.
- **Controls:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Broad. Broad source coverage for retrieval and reporting, but it does not change media-platform objects.

**Good**

- Official read-only MCP fits recurring cross-channel retrieval.
- Established connector coverage reduces bespoke API maintenance.
- Official AI integrations and CLI provide several workflow options.

**Limits**

- The CLI remains alpha.
- The MCP cannot change campaigns.
- Coverage and economics depend on the commercial plan and connector.

**Interfaces**

- **MCP:** [Official remote MCP](https://docs.supermetrics.com/docs/supermetrics-mcp-server)
- **Plugin:** [Official AI chat integrations](https://supermetrics.com/products/supermetrics-mcp)
- **CLI:** [Official CLI, alpha](https://docs.supermetrics.com/apidocs/cli)
- **API / SDK:** [Supermetrics API](https://docs.supermetrics.com/apidocs/getting-started)

- **Access:** A valid subscription with Supermetrics API access.
- **Commercial:** Affiliate. [Supermetrics Affiliate Partner Program](https://supermetrics.com/partners). 15% recurring commission for one year at entry tier; 20% for two years after ten successful referrals.
- **Watch:** The CLI is alpha. Source entitlements and query costs still depend on the subscription.
- **Sources:** [Supermetrics MCP server](https://docs.supermetrics.com/docs/supermetrics-mcp-server) · [Supermetrics CLI](https://docs.supermetrics.com/apidocs/cli)
- **Verified:** 5 Sept 2026

[Back to comparison](#data-and-research)

## Google MCP Toolbox for Databases

**B · Production**

Google's open-source MCP toolbox connects agents to BigQuery and other databases through explicitly configured tools.

> **Blocker:** It is infrastructure for building a safe interface, not a paid-media connector that works after sign-in.

- **Route:** Official self-hosted MCP framework.
- **Scope:** Databases and operator-defined tools.
- **Setup:** Hard. Requires deployment or local runtime, database credentials, tools configuration and security design.
- **Controls:** Read **Depends** · Create **Depends** · Modify **Depends** · Delete **Depends**
- **Coverage:** Configurable. Prebuilt database tools and custom YAML definitions can expose broad operations, bounded by the configured role and queries.

**Good**

- Official open-source toolbox exposes governed database tools through MCP.
- Supports BigQuery and other common production data stores.
- CLI and Gemini extensions help teams package repeatable access.

**Limits**

- It is not a paid-media connector by itself.
- Read/write risk depends entirely on tool definitions and database roles.
- Secure configuration requires data-engineering discipline.

**Interfaces**

- **MCP:** [Official, open source](https://github.com/googleapis/mcp-toolbox)
- **Plugin:** [Gemini CLI extensions](https://github.com/googleapis/mcp-toolbox)
- **CLI:** [toolbox CLI](https://mcp-toolbox.dev/documentation/introduction/)
- **API / SDK:** [BigQuery and database connectors](https://mcp-toolbox.dev/)

- **Access:** Self-hosted configuration plus database credentials and permissions.
- **Commercial:** None verified. No product-specific commercial programme verified. General Google Cloud partnership routes are not specific to this open-source toolbox.
- **Watch:** This is a general database layer, not a paid-media connector. Read/write risk depends entirely on the configured tools and database role.
- **Sources:** [Official MCP Toolbox repository](https://github.com/googleapis/mcp-toolbox) · [Toolbox documentation](https://mcp-toolbox.dev/documentation/introduction/)
- **Verified:** 5 Sept 2026

[Back to comparison](#data-and-research)

## Snowflake

**B · Production**

Snowflake's managed MCP lets agents reach governed Snowflake capabilities without deploying a separate server.

> **Blocker:** The quality and safety of the workflow depend on substantial data-platform work before the first useful marketing prompt.

- **Route:** Official managed MCP.
- **Scope:** Warehouse data and operator-approved tools.
- **Setup:** Hard. Requires Snowflake account configuration, Cortex Agent setup, warehouse roles and deliberate tool exposure.
- **Controls:** Read **Yes** · Create **Depends** · Modify **Depends** · Delete **Depends**
- **Coverage:** Configurable. Coverage can be broad, but it depends entirely on schemas, tools, semantic models and role permissions configured by the team.

**Good**

- Official managed MCP works inside Snowflake's role and governance model.
- Strong foundation for cross-channel measurement and governed client data.
- Official CLI, APIs and drivers support serious production engineering.

**Limits**

- It needs warehouse, role and cost governance expertise.
- Mixed control can expose consequential writes when roles are too broad.
- It is infrastructure, not a ready-made paid-media workflow.

**Interfaces**

- **MCP:** [Official managed MCP](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **Plugin:** No dedicated paid-media plugin verified
- **CLI:** [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index)
- **API / SDK:** [Drivers, APIs and SDKs](https://docs.snowflake.com/en/developer)

- **Access:** Snowflake account, Cortex Agent configuration and role permissions.
- **Commercial:** Referral. [Snowflake Partner Network](https://www.snowflake.com/en/why-snowflake/partners/). Eligible partners can receive referral rebates, service credits and co-marketing support.
- **Watch:** Warehouse permissions remain the real control plane. Scope roles and exposed tools narrowly.
- **Sources:** [Snowflake-managed MCP server](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) · [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index)
- **Verified:** 5 Sept 2026

[Back to comparison](#data-and-research)

## Airbyte

**B · Test**

Airbyte exposes an agent MCP for working with connected data and a separate knowledge MCP for product documentation.

> **Blocker:** The MCP does not remove the difficult part: building, authenticating and governing the data connections.

- **Route:** Official agent MCP.
- **Scope:** Connected data sources, destinations and data operations.
- **Setup:** Hard. Requires an Airbyte account or instance plus configured sources, destinations, credentials and permissions.
- **Controls:** Read **Yes** · Create **Partial** · Modify **Partial** · Delete **Partial**
- **Coverage:** Configurable. Coverage depends on the connected sources and destinations. Documentation search and action-capable MCP surfaces are distinct.

**Good**

- Official agent MCP can expose useful connector and data-movement context.
- Large connector ecosystem supports cross-channel data collection.
- Open-source and managed routes give teams deployment choice.

**Limits**

- MCP control is mixed and depends on the configured interface.
- Self-hosting adds operational overhead.
- It is infrastructure rather than a marketer-facing daily interface.

**Interfaces**

- **MCP:** [Official agent MCP](https://docs.airbyte.com/ai-agents/interfaces/mcp)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [abctl for local deployment](https://docs.airbyte.com/platform/using-airbyte/getting-started/oss-quickstart)
- **API / SDK:** [Python SDK and HTTP API](https://docs.airbyte.com/)

- **Access:** Airbyte account or instance, configured sources and destinations.
- **Commercial:** Referral. [Airbyte partner client referral](https://airbyte.com/company/partners). Partner page offers a Refer a Client route, but no public commission schedule was verified.
- **Watch:** Do not confuse the documentation-search MCP with the agent MCP that can act on connected data.
- **Sources:** [Airbyte MCP interface](https://docs.airbyte.com/ai-agents/interfaces/mcp) · [Airbyte documentation](https://docs.airbyte.com/)
- **Verified:** 5 Sept 2026

[Back to comparison](#data-and-research)

## Fivetran

**C+ · Test**

Fivetran's Agent Context MCP exposes governed data context; its Connector SDK adds a CLI and official coding-agent integrations.

> **Blocker:** The agent surface cannot operate the connectors it describes.

- **Route:** Official MCP context layer, public preview.
- **Scope:** Connector metadata, schemas and documentation context.
- **Setup:** Moderate. Requires Fivetran account permissions and a compatible MCP connection.
- **Controls:** Read **Yes** · Create **No** · Modify **No** · Delete **No**
- **Coverage:** Narrow. The MCP supplies context and retrieval. Connector operations remain in the REST API, SDK or product.

**Good**

- Mature managed data movement supports reliable recurring pipelines.
- Official MCP, agent plugins and Connector SDK CLI cover several technical workflows.
- Read-only MCP control is a sensible context boundary.

**Limits**

- Agent Context MCP is still a public preview.
- The MCP is not a substitute for connector operations or warehouse permissions.
- Enterprise cost and administration may be disproportionate for a small stack.

**Interfaces**

- **MCP:** [Official public preview](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **Plugin:** [Official Connector SDK agent plugins](https://fivetran.com/docs/connector-sdk/building-connectors/ai-tools)
- **CLI:** [Connector SDK CLI](https://fivetran.com/docs/connector-sdk/getting-started/connector-sdk-commands)
- **API / SDK:** [REST API and Connector SDK](https://fivetran.com/docs/rest-api)

- **Access:** Fivetran Context Layer for MCP; account permissions for API and SDK workflows.
- **Commercial:** Referral. [Fivetran Partner Program](https://www.fivetran.com/partners/become-a-partner). Partner programme includes referral incentives, co-selling and reselling; terms vary by tier.
- **Watch:** The MCP is a context and retrieval surface, not a substitute for connector operations or warehouse access controls.
- **Sources:** [Agent Context MCP](https://fivetran.com/docs/context-layer/agent-context-mcp) · [Connector SDK AI tools](https://fivetran.com/docs/connector-sdk/building-connectors/ai-tools)
- **Verified:** 5 Sept 2026

[Back to comparison](#data-and-research)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
