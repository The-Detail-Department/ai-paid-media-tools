# Data infrastructure

Pipelines, warehouses and semantic layers judged on connection, inspection, querying, transformation and operation.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Connect | Inspect | Query | Transform | Operate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Supermetrics](#supermetrics) | **B+** | Reference | Production | Moderate | Partial | Yes | Yes | Partial | Partial | Most steps |
| [Databricks](#databricks) | **B+** | Reference | Test | Specialist | Depends | Yes | Yes | Depends | Depends | Depends |
| [Snowflake](#snowflake) | **B** | Reference | Production | Hard | Depends | Yes | Yes | Depends | Depends | Depends |
| [Airbyte](#airbyte) | **B** | Reference | Test | Hard | Partial | Yes | Partial | Partial | Partial | Depends |
| [Fivetran](#fivetran) | **C+** | Reference | Test | Moderate | No | Yes | No | No | No | Assist only |
| [RudderStack](#rudderstack) | **B+** | Emerging | Test | Easy | Partial | Yes | Partial | Yes | Partial | Most steps |
| [dbt](#dbt) | **B+** | Specialist | Test | Specialist | Partial | Yes | Yes | Yes | Yes | Specialist |
| [Google MCP Toolbox for Databases](#google-mcp-toolbox-for-databases) | **B** | Specialist | Production | Hard | Depends | Depends | Depends | Depends | Depends | Depends |

## Supermetrics

**B+ · Production · Reference**

A marketing-data MCP that queries Supermetrics sources through one connection, alongside an API and an alpha command-line client.

**Day to day**

- Collect reporting data from connected marketing platforms.
- Prepare recurring cross-channel reporting inputs.

> **What still needs you:** Connect and pay for the required data sources. This route retrieves data; campaign changes happen elsewhere.

- **Route:** Official remote MCP.
- **Scope:** Marketing-source metadata and query results.
- **Setup:** Moderate. Requires a subscription with API access plus authentication for every source queried.
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Connect **Partial** · Inspect **Yes** · Query **Yes** · Transform **Partial** · Operate **Partial**
- **Coverage:** Most steps. Broad source coverage for retrieval and reporting, but it does not change media-platform objects.
- **Evidence basis:** Documentation reviewed

**Good**

- Official read-only MCP fits recurring cross-channel retrieval.
- Established connector coverage reduces bespoke API maintenance.
- Official AI integrations and CLI provide several workflow options.

**Limits**

- The CLI remains alpha.
- The MCP cannot change campaigns.
- Coverage and economics depend on the commercial plan and connector.

**Official links**

- **Product / official page:** [Supermetrics MCP server](https://docs.supermetrics.com/docs/supermetrics-mcp-server)
- **AI interface / endpoint:** [Official remote MCP](https://docs.supermetrics.com/docs/supermetrics-mcp-server)
- **MCP:** [Official remote MCP](https://docs.supermetrics.com/docs/supermetrics-mcp-server)
- **Plugin:** [Official AI chat integrations](https://supermetrics.com/products/supermetrics-mcp)
- **CLI:** [Official CLI, alpha](https://docs.supermetrics.com/apidocs/cli)
- **API / SDK:** [Supermetrics API](https://docs.supermetrics.com/apidocs/getting-started)
- **Documentation:** [Supermetrics MCP server](https://docs.supermetrics.com/docs/supermetrics-mcp-server)
- **GitHub:** No official repository verified

- **Access:** A valid subscription with Supermetrics API access.
- **Watch:** The CLI is alpha. Source entitlements and query costs still depend on the subscription.
- **Sources:** [Supermetrics MCP server](https://docs.supermetrics.com/docs/supermetrics-mcp-server) · [Supermetrics CLI](https://docs.supermetrics.com/apidocs/cli)
- **Last checked:** 5 Sept 2026

[Back to comparison](#data-infrastructure)

## Databricks

**B+ · Test · Reference**

Databricks managed MCP servers expose governed SQL, Genie, Vector Search and other workspace capabilities to agents.

**Day to day**

- Query approved datasets and analysis tools.
- Use the marketing data products your team has configured.

> **What still needs you:** A data team must prepare the datasets, business definitions and access rules that the assistant will use.

- **Route:** Managed MCP servers, public preview.
- **Scope:** SQL, Genie, Vector Search and workspace resources.
- **Setup:** Specialist. A data team must configure the workspace, governed datasets and tool permissions before an assistant has useful data to work with.
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Connect **Depends** · Inspect **Yes** · Query **Yes** · Transform **Depends** · Operate **Depends**
- **Coverage:** Depends. Potentially broad, but every useful marketing workflow depends on the data products and tools an enterprise exposes.
- **Evidence basis:** Documentation reviewed

**Good**

- Managed MCP uses workspace governance and permissions.
- Can expose SQL, Genie and Vector Search.
- Strong fit for governed enterprise data estates.

**Limits**

- Managed MCP remains public preview.
- Requires substantial platform configuration.
- Not a turn-key paid-media connection.

**Official links**

- **Product / official page:** [Databricks](https://www.databricks.com/)
- **AI interface / endpoint:** [Managed MCP servers, public preview](https://docs.databricks.com/aws/en/agents/mcp-tools/managed-mcp)
- **MCP:** [Managed MCP servers, public preview](https://docs.databricks.com/aws/en/agents/mcp-tools/managed-mcp)
- **Plugin:** No separate official paid-media plugin verified
- **CLI:** [Databricks CLI](https://docs.databricks.com/aws/en/dev-tools/cli/)
- **API / SDK:** [Databricks APIs and SDKs](https://docs.databricks.com/aws/en/dev-tools/)
- **Documentation:** [Databricks managed MCP servers](https://docs.databricks.com/aws/en/agents/mcp-tools/managed-mcp)
- **GitHub:** No official repository verified

- **Access:** Databricks workspace, managed MCP preview availability and Unity Catalog permissions for exposed resources.
- **Watch:** This is governed infrastructure, not a ready marketing connection. Useful outcomes depend on warehouse and semantic-layer preparation.
- **Sources:** [Databricks managed MCP servers](https://docs.databricks.com/aws/en/agents/mcp-tools/managed-mcp) · [Databricks developer tools](https://docs.databricks.com/aws/en/dev-tools/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#data-infrastructure)

## Snowflake

**B · Production · Reference**

Snowflake's managed MCP lets agents reach governed Snowflake capabilities without deploying a separate server.

**Day to day**

- Query the marketing data your team has prepared.
- Use approved analysis tools and semantic models.

> **What still needs you:** A data team must prepare reliable datasets, definitions and access rules before marketing questions produce useful answers.

- **Route:** Official managed MCP.
- **Scope:** Warehouse data and operator-approved tools.
- **Setup:** Hard. A data team must configure warehouse access, semantic models and the tools exposed to the assistant.
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Connect **Depends** · Inspect **Yes** · Query **Yes** · Transform **Depends** · Operate **Depends**
- **Coverage:** Depends. Coverage can be broad, but it depends entirely on schemas, tools, semantic models and role permissions configured by the team.
- **Evidence basis:** Documentation reviewed

**Good**

- Official managed MCP works inside Snowflake's role and governance model.
- Strong foundation for cross-channel measurement and governed client data.
- Official CLI, APIs and drivers support serious production engineering.

**Limits**

- It needs warehouse, role and cost governance expertise.
- Mixed control can expose consequential writes when roles are too broad.
- It is infrastructure, not a ready-made paid-media workflow.

**Official links**

- **Product / official page:** [Snowflake-managed MCP server](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **AI interface / endpoint:** [Official managed MCP](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **MCP:** [Official managed MCP](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **Plugin:** No dedicated paid-media plugin verified
- **CLI:** [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index)
- **API / SDK:** [Drivers, APIs and SDKs](https://docs.snowflake.com/en/developer)
- **Documentation:** [Snowflake-managed MCP server](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **GitHub:** No official repository verified

- **Access:** Snowflake account, Cortex Agent configuration and role permissions.
- **Watch:** Warehouse permissions remain the real control plane. Scope roles and exposed tools narrowly.
- **Sources:** [Snowflake-managed MCP server](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) · [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index)
- **Last checked:** 5 Sept 2026

[Back to comparison](#data-infrastructure)

## Airbyte

**B · Test · Reference**

Airbyte exposes an agent MCP for working with connected data and a separate knowledge MCP for product documentation.

**Day to day**

- Retrieve data from configured sources.
- Run supported connector actions where the selected route permits them.

> **What still needs you:** Your team must configure, authenticate and maintain the data connections before the assistant can use them.

- **Route:** Official agent MCP.
- **Scope:** Connected data sources, destinations and data operations.
- **Setup:** Hard. Requires an Airbyte account or instance plus configured sources, destinations, credentials and permissions.
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Connect **Partial** · Inspect **Yes** · Query **Partial** · Transform **Partial** · Operate **Partial**
- **Coverage:** Depends. Coverage depends on the connected sources and destinations. Documentation search and action-capable MCP surfaces are distinct.
- **Evidence basis:** Documentation reviewed

**Good**

- Official agent MCP can expose useful connector and data-movement context.
- Large connector ecosystem supports cross-channel data collection.
- Open-source and managed routes give teams deployment choice.

**Limits**

- MCP control is mixed and depends on the configured interface.
- Self-hosting adds operational overhead.
- It is infrastructure rather than a marketer-facing daily interface.

**Official links**

- **Product / official page:** [Airbyte MCP interface](https://docs.airbyte.com/ai-agents/interfaces/mcp)
- **AI interface / endpoint:** [Official agent MCP](https://docs.airbyte.com/ai-agents/interfaces/mcp)
- **MCP:** [Official agent MCP](https://docs.airbyte.com/ai-agents/interfaces/mcp)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [abctl for local deployment](https://docs.airbyte.com/platform/using-airbyte/getting-started/oss-quickstart)
- **API / SDK:** [Python SDK and HTTP API](https://docs.airbyte.com/)
- **Documentation:** [Airbyte MCP interface](https://docs.airbyte.com/ai-agents/interfaces/mcp)
- **GitHub:** No official repository verified

- **Access:** Airbyte account or instance, configured sources and destinations.
- **Watch:** Do not confuse the documentation-search MCP with the agent MCP that can act on connected data.
- **Sources:** [Airbyte MCP interface](https://docs.airbyte.com/ai-agents/interfaces/mcp) · [Airbyte documentation](https://docs.airbyte.com/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#data-infrastructure)

## Fivetran

**C+ · Test · Reference**

Fivetran's Agent Context MCP exposes governed data context; its Connector SDK adds a CLI and official coding-agent integrations.

**Day to day**

- Retrieve context from connected business data.
- Answer reporting questions with the available data tools.

> **What still needs you:** Manage the data connectors elsewhere. The assistant can retrieve context but cannot operate the connectors it describes.

- **Route:** Official MCP context layer, public preview.
- **Scope:** Connector metadata, schemas and documentation context.
- **Setup:** Moderate. Requires Fivetran account permissions and a compatible MCP connection.
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Connect **No** · Inspect **Yes** · Query **No** · Transform **No** · Operate **No**
- **Coverage:** Assist only. The MCP supplies context and retrieval. Connector operations remain in the REST API, SDK or product.
- **Evidence basis:** Documentation reviewed

**Good**

- Mature managed data movement supports reliable recurring pipelines.
- Official MCP, agent plugins and Connector SDK CLI cover several technical workflows.
- Read-only MCP control is a sensible context boundary.

**Limits**

- Agent Context MCP is still a public preview.
- The MCP is not a substitute for connector operations or warehouse permissions.
- Enterprise cost and administration may be disproportionate for a small stack.

**Official links**

- **Product / official page:** [Agent Context MCP](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **AI interface / endpoint:** [Official public preview](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **MCP:** [Official public preview](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **Plugin:** [Official Connector SDK agent plugins](https://fivetran.com/docs/connector-sdk/building-connectors/ai-tools)
- **CLI:** [Connector SDK CLI](https://fivetran.com/docs/connector-sdk/getting-started/connector-sdk-commands)
- **API / SDK:** [REST API and Connector SDK](https://fivetran.com/docs/rest-api)
- **Documentation:** [Agent Context MCP](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **GitHub:** No official repository verified

- **Access:** Fivetran Context Layer for MCP; account permissions for API and SDK workflows.
- **Watch:** The MCP is a context and retrieval surface, not a substitute for connector operations or warehouse access controls.
- **Sources:** [Agent Context MCP](https://fivetran.com/docs/context-layer/agent-context-mcp) · [Connector SDK AI tools](https://fivetran.com/docs/connector-sdk/building-connectors/ai-tools)
- **Last checked:** 5 Sept 2026

[Back to comparison](#data-infrastructure)

## RudderStack

**B+ · Test · Emerging**

RudderStack hosts an OAuth MCP for sources, destinations, transformations, event streams and documentation.

**Day to day**

- Inspect supported customer-data connections.
- Manage the pipeline resources exposed by the MCP.

> **What still needs you:** The vendor describes the MCP as incomplete and under active development. Check the tools available before relying on a workflow.

- **Route:** Official hosted MCP.
- **Scope:** Sources, destinations, transformations and event streams.
- **Setup:** Easy. Connect the hosted endpoint and complete OAuth with an authorised RudderStack account.
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Connect **Partial** · Inspect **Yes** · Query **Partial** · Transform **Yes** · Operate **Partial**
- **Coverage:** Most steps. Useful management coverage for customer-data pipelines, with gaps and stability caveats while the server evolves.
- **Evidence basis:** Documentation reviewed

**Good**

- Hosted OAuth MCP is easy to connect.
- Can access and manage sources, destinations and transformations.
- Covers event streams and documentation.

**Limits**

- Official docs warn that the MCP is still in active development.
- Some product features are missing.
- Connection stability may vary during updates.

**Official links**

- **Product / official page:** [RudderStack](https://www.rudderstack.com/)
- **AI interface / endpoint:** [https://mcp.rudderstack.com/mcp](https://mcp.rudderstack.com/mcp)
- **MCP:** [Official hosted MCP](https://mcp.rudderstack.com/docs)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [RudderStack CLI](https://www.rudderstack.com/docs/profiles/get-started/cli/)
- **API / SDK:** [RudderStack APIs](https://www.rudderstack.com/docs/api/)
- **Documentation:** [RudderStack MCP server](https://mcp.rudderstack.com/docs)
- **GitHub:** No official repository verified

- **Access:** Active RudderStack account and OAuth permissions for the hosted server.
- **Watch:** Official documentation says the MCP is in active development, some features are missing and connection stability can vary.
- **Sources:** [RudderStack MCP server](https://mcp.rudderstack.com/docs) · [RudderStack documentation](https://www.rudderstack.com/docs/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#data-infrastructure)

## dbt

**B+ · Test · Specialist**

dbt MCP gives agents governed project context, semantic queries, lineage, model health and opt-in CLI actions including build and test.

**Day to day**

- Inspect data models and their dependencies.
- Run supported build and test commands in a configured project.

> **What still needs you:** An analytics engineer must configure the project, credentials and permitted commands before daily use.

- **Route:** Official self-hosted MCP.
- **Scope:** dbt projects, semantic metrics, lineage, health, SQL and CLI jobs.
- **Setup:** Specialist. An analytics engineer must connect a dbt project and its credentials, then enable the appropriate build, test and metadata tools.
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Connect **Partial** · Inspect **Yes** · Query **Yes** · Transform **Yes** · Operate **Yes**
- **Coverage:** Specialist. Strong analytics-engineering coverage, including build and test, but not a marketer-facing turn-key workflow.
- **Evidence basis:** Documentation reviewed

**Good**

- Official open-source MCP with broad toolsets.
- Strong lineage, health, semantic and SQL context.
- Can run build and test when explicitly enabled.

**Limits**

- Setup changes materially by toolset.
- Useful operation requires analytics-engineering expertise.
- CLI writes can change warehouse objects.

**Official links**

- **Product / official page:** [dbt](https://www.getdbt.com/)
- **AI interface / endpoint:** [Official dbt MCP server](https://docs.getdbt.com/docs/dbt-ai/setup-local-mcp)
- **MCP:** [Official dbt MCP server](https://docs.getdbt.com/docs/dbt-ai/setup-local-mcp)
- **Plugin:** No separate official paid-media plugin verified
- **CLI:** [dbt CLI through MCP](https://github.com/dbt-labs/dbt-mcp)
- **API / SDK:** [dbt APIs and developer docs](https://docs.getdbt.com/)
- **Documentation:** [Self-hosted dbt MCP setup](https://docs.getdbt.com/docs/dbt-ai/setup-local-mcp)
- **GitHub:** [dbt MCP server](https://github.com/dbt-labs/dbt-mcp)

- **Access:** Local dbt project for CLI tools; dbt Platform credentials and environment IDs for hosted semantic, discovery, admin and SQL tools.
- **Watch:** Setup and enabled toolsets vary substantially. Build and run tools can modify warehouse objects and need deliberate permission boundaries.
- **Sources:** [dbt MCP server](https://github.com/dbt-labs/dbt-mcp) · [Self-hosted dbt MCP setup](https://docs.getdbt.com/docs/dbt-ai/setup-local-mcp)
- **Last checked:** 5 Sept 2026

[Back to comparison](#data-infrastructure)

## Google MCP Toolbox for Databases

**B · Production · Specialist**

Google's open-source MCP toolbox connects agents to BigQuery and other databases through explicitly configured tools.

**Day to day**

- Ask questions against approved database queries.
- Run only the database operations your team has exposed.

> **What still needs you:** An engineer must define the permitted database operations. There is no ready-made advertising connection after sign-in.

- **Route:** Official self-hosted MCP framework.
- **Scope:** Databases and operator-defined tools.
- **Setup:** Hard. An engineer must deploy the service, connect the database and define permitted queries. Those choices determine what the assistant can read or change.
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Connect **Depends** · Inspect **Depends** · Query **Depends** · Transform **Depends** · Operate **Depends**
- **Coverage:** Depends. Prebuilt database tools and custom YAML definitions can expose broad operations, bounded by the configured role and queries.
- **Evidence basis:** Documentation reviewed

**Good**

- Official open-source toolbox exposes governed database tools through MCP.
- Supports BigQuery and other common production data stores.
- CLI and Gemini extensions help teams package repeatable access.

**Limits**

- It is not a paid-media connector by itself.
- Read/write risk depends entirely on tool definitions and database roles.
- Secure configuration requires data-engineering discipline.

**Official links**

- **Product / official page:** [Toolbox documentation](https://mcp-toolbox.dev/documentation/introduction/)
- **AI interface / endpoint:** [Official, open source](https://github.com/googleapis/mcp-toolbox)
- **MCP:** [Official, open source](https://github.com/googleapis/mcp-toolbox)
- **Plugin:** [Gemini CLI extensions](https://github.com/googleapis/mcp-toolbox)
- **CLI:** [toolbox CLI](https://mcp-toolbox.dev/documentation/introduction/)
- **API / SDK:** [BigQuery and database connectors](https://mcp-toolbox.dev/)
- **Documentation:** [Toolbox documentation](https://mcp-toolbox.dev/documentation/introduction/)
- **GitHub:** [Official MCP Toolbox repository](https://github.com/googleapis/mcp-toolbox)

- **Access:** Self-hosted configuration plus database credentials and permissions.
- **Watch:** This is a general database layer, not a paid-media connector. Read/write risk depends entirely on the configured tools and database role.
- **Sources:** [Official MCP Toolbox repository](https://github.com/googleapis/mcp-toolbox) · [Toolbox documentation](https://mcp-toolbox.dev/documentation/introduction/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#data-infrastructure)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
