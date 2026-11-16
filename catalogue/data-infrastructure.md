# Data infrastructure

Pipelines, warehouses and semantic layers judged on connection, inspection, querying, transformation and operation.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Supermetrics](#supermetrics) | **A-** | Reference | Production | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [Snowflake](#snowflake) | **B+** | Reference | Production | Hard | Yes | Depends | Depends | Depends | No | Depends |
| [Airbyte](#airbyte) | **B+** | Reference | Test | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [Databricks](#databricks) | **B+** | Reference | Test | Hard | Yes | Depends | Depends | Depends | No | Most steps |
| [Fivetran](#fivetran) | **C+** | Reference | Test | Hard | Yes | Partial | No | Unverified | Unverified | Assist only |
| [RudderStack](#rudderstack) | **B-** | Emerging | Test | Moderate | Yes | Unverified | Partial | Unverified | Unverified | Some steps |
| [dbt](#dbt) | **B+** | Specialist | Test | Moderate | Yes | Depends | Depends | Depends | Partial | Most steps |
| [Google MCP Toolbox for Databases](#google-mcp-toolbox-for-databases) | **B** | Specialist | Production | Specialist | Yes | Depends | Depends | Depends | No | Depends |

## Supermetrics

**A- · Production · Reference**

Read connected marketing accounts, fields and cross-channel performance. Create paused campaigns and edit supported budgets, ads and settings.

**Day to day**

- Read connected marketing accounts, fields and cross-channel performance.
- Create paused campaigns and edit supported budgets, ads and settings.

> **What still needs you:** Writes require account-level opt-in and entitlement; coverage varies across seven ad platforms.

- **Route:** Supermetrics Claude / ChatGPT app.
- **Scope:** Read connected marketing accounts, fields and cross-channel performance..
- **Setup:** Moderate. Connect the Claude or ChatGPT app, authorise data sources and enable campaign writes separately. [Connection documentation](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Partial** · Publish / activate **Partial**
- **Read:** Read connected marketing accounts, fields and cross-channel performance.
- **Write:** Create paused campaigns and edit supported budgets, ads and settings.
- **Connection type:** native-app
- **Review:** current
- **read:** Read connected marketing accounts, fields and cross-channel performance.
- **create:** Supported campaigns, initially paused.
- **modify:** Supported campaign budgets, status, settings and ads.
- **delete:** Supported campaigns; removal is irreversible.
- **publish:** Publish Studio dashboards; campaign status actions depend on platform support.
- **Coverage:** Most steps. Create paused campaigns and edit supported budgets, ads and settings. Writes require account-level opt-in and entitlement; coverage varies across seven ad platforms.
- **Evidence basis:** Documentation reviewed

**Good**

- Read connected marketing accounts, fields and cross-channel performance.
- Create paused campaigns and edit supported budgets, ads and settings.

**Limits**

- Writes require account-level opt-in and entitlement; coverage varies across seven ad platforms.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://docs.supermetrics.com/docs/how-to-enable-campaign-write-access)
- **AI interface / endpoint:** [Supermetrics Claude / ChatGPT app](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools)
- **MCP:** [Supermetrics Claude / ChatGPT app](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools)
- **Plugin:** [Official app or directory connector](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools)
- **CLI:** [Official CLI, alpha](https://docs.supermetrics.com/apidocs/cli)
- **API / SDK:** [Supermetrics API](https://docs.supermetrics.com/apidocs/getting-started)
- **Documentation:** [Connection and tool documentation](https://docs.supermetrics.com/docs/how-to-enable-campaign-write-access)
- **GitHub:** [Vendor source code](https://github.com/supermetrics-public/supermetrics-mcp/blob/main/README.md)

- **Access:** AI chats or MCP entitlement/trial, Campaign management entitlement and seat where applicable, connected accounts with platform edit permission. The connection owner enables writes for each account/team.
- **Watch:** Writes require account-level opt-in and entitlement; coverage varies across seven ad platforms.
- **Sources:** [Connection and tool documentation](https://docs.supermetrics.com/docs/how-to-enable-campaign-write-access) · [Additional official documentation](https://docs.supermetrics.com/v1/docs/how-to-manage-ad-campaigns-with-ai-tools) · [Additional official documentation](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools) · [Vendor source code](https://github.com/supermetrics-public/supermetrics-mcp/blob/main/README.md)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Snowflake

**B+ · Production · Reference**

Query governed data through configured SQL and Cortex tools. Optional SQL and custom tools can change data when explicitly enabled.

**Day to day**

- Query governed data through configured SQL and Cortex tools.
- Optional SQL and custom tools can change data when explicitly enabled.

> **What still needs you:** SQL defaults to read-only; hosting is managed but tool and data preparation is technical.

- **Route:** Snowflake-managed MCP with configured tools.
- **Scope:** Query governed data through configured SQL and Cortex tools..
- **Setup:** Hard. An administrator creates the MCP server and tools; users connect with supported authentication. [Connection documentation](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Depends** · Edit **Depends** · Delete **Depends** · Publish / activate **No**
- **Read:** Query governed data through configured SQL and Cortex tools.
- **Write:** Optional SQL and custom tools can change data when explicitly enabled.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Query governed data through configured SQL and Cortex tools.
- **create:** Exposed SQL/procedures and role permissions determine support.
- **modify:** Exposed SQL/procedures and role permissions determine support.
- **delete:** Exposed SQL/procedures and role permissions determine support.
- **publish:** No general campaign or content publishing route.
- **Coverage:** Depends. Optional SQL and custom tools can change data when explicitly enabled. SQL defaults to read-only; hosting is managed but tool and data preparation is technical.
- **Evidence basis:** Documentation reviewed

**Good**

- Query governed data through configured SQL and Cortex tools.
- Optional SQL and custom tools can change data when explicitly enabled.

**Limits**

- SQL defaults to read-only; hosting is managed but tool and data preparation is technical.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **AI interface / endpoint:** [Snowflake-managed MCP with configured tools](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **MCP:** [Snowflake-managed MCP with configured tools](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **Plugin:** No dedicated paid-media plugin verified
- **CLI:** [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index)
- **API / SDK:** [Drivers, APIs and SDKs](https://docs.snowflake.com/en/developer)
- **Documentation:** [Connection and tool documentation](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **GitHub:** No official repository verified

- **Access:** Snowflake account, warehouse/data, configured semantic views/search/agents as relevant, and separate permissions for both server and underlying tools.
- **Watch:** SQL defaults to read-only; hosting is managed but tool and data preparation is technical.
- **Sources:** [Connection and tool documentation](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Airbyte

**B+ · Test · Reference**

Read connector configuration, sync status, logs and supported external records. Manage connectors and pipelines; start or cancel syncs.

**Day to day**

- Read connector configuration, sync status, logs and supported external records.
- Manage connectors and pipelines; start or cancel syncs.

> **What still needs you:** External source/destination records remain read-only; infrastructure and credentials must already exist.

- **Route:** Airbyte platform MCP, pipeline operations.
- **Scope:** Read connector configuration, sync status, logs and supported external records..
- **Setup:** Moderate. Connect the platform MCP with OAuth; prepare sources/destinations and enable direct reads where supported. [Connection documentation](https://docs.airbyte.com/platform/airbyte-mcp).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Partial** · Publish / activate **Partial**
- **Read:** Read connector configuration, sync status, logs and supported external records.
- **Write:** Manage connectors and pipelines; start or cancel syncs.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read connector configuration, sync status, logs and supported external records.
- **create:** Connectors, connections and custom connector definitions.
- **modify:** Connectors, streams, connections and sync configuration.
- **delete:** Resources whose name contains delete-me or deleteme.
- **publish:** Deploy configured connectors and start syncs; no external record writes.
- **Coverage:** Most steps. Manage connectors and pipelines; start or cancel syncs. External source/destination records remain read-only; infrastructure and credentials must already exist.
- **Evidence basis:** Documentation reviewed

**Good**

- Read connector configuration, sync status, logs and supported external records.
- Manage connectors and pipelines; start or cancel syncs.

**Limits**

- External source/destination records remain read-only; infrastructure and credentials must already exist.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://docs.airbyte.com/platform/airbyte-mcp)
- **AI interface / endpoint:** [Airbyte platform MCP, pipeline operations](https://docs.airbyte.com/platform/airbyte-mcp)
- **MCP:** [Airbyte platform MCP, pipeline operations](https://docs.airbyte.com/platform/airbyte-mcp)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [abctl for local deployment](https://docs.airbyte.com/platform/using-airbyte/getting-started/oss-quickstart)
- **API / SDK:** [Python SDK and HTTP API](https://docs.airbyte.com/)
- **Documentation:** [Connection and tool documentation](https://docs.airbyte.com/platform/airbyte-mcp)
- **GitHub:** [Vendor source code](https://github.com/airbytehq/airbyte/blob/master/docs/ai-agents/interfaces/mcp/readme.md)

- **Access:** Hosted MCP supports Airbyte Cloud editions and Flex. Direct reads/search require Cloud and supported connectors. Airbyte roles and stored connector credentials govern access.
- **Watch:** External source/destination records remain read-only; infrastructure and credentials must already exist.
- **Sources:** [Connection and tool documentation](https://docs.airbyte.com/platform/airbyte-mcp) · [Additional official documentation](https://docs.airbyte.com/platform/airbyte-mcp/tools) · [Additional official documentation](https://docs.airbyte.com/platform/airbyte-mcp/install) · [Vendor source code](https://github.com/airbytehq/airbyte/blob/master/docs/ai-agents/interfaces/mcp/readme.md)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Databricks

**B+ · Test · Reference**

Query governed analytics with Genie One or use the separate SQL MCP. SQL MCP can change data within warehouse and Unity Catalog permissions.

**Day to day**

- Query governed analytics with Genie One or use the separate SQL MCP.
- SQL MCP can change data within warehouse and Unity Catalog permissions.

> **What still needs you:** Genie One is GA; SQL writes use a separate Beta route requiring admin enablement.

- **Route:** Databricks Genie One + separate SQL MCP.
- **Scope:** Query governed analytics with Genie One or use the separate SQL MCP..
- **Setup:** Hard. Use workspace-hosted MCP; prepare data access and enable the SQL preview where needed. [Connection documentation](https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Depends** · Edit **Depends** · Delete **Depends** · Publish / activate **No**
- **Read:** Query governed analytics with Genie One or use the separate SQL MCP.
- **Write:** SQL MCP can change data within warehouse and Unity Catalog permissions.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Query governed analytics with Genie One or use the separate SQL MCP.
- **create:** SQL-supported objects/data, subject to permissions.
- **modify:** SQL-supported objects/data, subject to permissions.
- **delete:** SQL-supported objects/data, subject to permissions.
- **publish:** Database execution is not advertising publication.
- **Coverage:** Most steps. SQL MCP can change data within warehouse and Unity Catalog permissions. Genie One is GA; SQL writes use a separate Beta route requiring admin enablement.
- **Evidence basis:** Documentation reviewed

**Good**

- Query governed analytics with Genie One or use the separate SQL MCP.
- SQL MCP can change data within warehouse and Unity Catalog permissions.

**Limits**

- Genie One is GA; SQL writes use a separate Beta route requiring admin enablement.

**Official links**

- **Product / official page:** [Databricks](https://www.databricks.com/)
- **AI interface / endpoint:** [Databricks Genie One + separate SQL MCP](https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services)
- **MCP:** [Databricks Genie One + separate SQL MCP](https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services)
- **Plugin:** No separate official paid-media plugin verified
- **CLI:** [Databricks CLI](https://docs.databricks.com/aws/en/dev-tools/cli/)
- **API / SDK:** [Databricks APIs and SDKs](https://docs.databricks.com/aws/en/dev-tools/)
- **Documentation:** [Connection and tool documentation](https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services)
- **GitHub:** No official repository verified

- **Access:** Databricks workspace and resource privileges. Genie One MCP is GA; SQL MCP requires an account admin to enable Enhanced Unity Gateway preview and is Beta.
- **Watch:** Genie One is GA; SQL writes use a separate Beta route requiring admin enablement.
- **Sources:** [Connection and tool documentation](https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services) · [Additional official documentation](https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Fivetran

**C+ · Test · Reference**

Query the prepared warehouse context layer with read-only SQL. Submit answer feedback only; no operational data changes.

**Day to day**

- Query the prepared warehouse context layer with read-only SQL.

> **What still needs you:** Public Preview; the native connector still needs an administrator-prepared context layer.

- **Route:** Fivetran Agent Context native connector.
- **Scope:** Query the prepared warehouse context layer with read-only SQL..
- **Setup:** Hard. Use the Claude connector or a custom ChatGPT app after the context layer is built. [Connection documentation](https://fivetran.com/docs/context-layer/agent-context-mcp).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **No** · Delete **Unverified** · Publish / activate **Unverified**
- **Read:** Query the prepared warehouse context layer with read-only SQL.
- **Write:** Submit answer feedback only; no operational data changes.
- **Connection type:** native-app
- **Review:** current
- **read:** Query the prepared warehouse context layer with read-only SQL.
- **create:** Answer feedback only.
- **modify:** No operational-data mutation documented.
- **delete:** Not established by the reviewed sources.
- **publish:** Not established by the reviewed sources.
- **Coverage:** Assist only. Submit answer feedback only; no operational data changes. Public Preview; the native connector still needs an administrator-prepared context layer.
- **Evidence basis:** Documentation reviewed

**Good**

- Query the prepared warehouse context layer with read-only SQL.
- Use the Claude connector or a custom ChatGPT app after the context layer is built.

**Limits**

- Public Preview; the native connector still needs an administrator-prepared context layer.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **AI interface / endpoint:** [Fivetran Agent Context native connector](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **MCP:** [Fivetran Agent Context native connector](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **Plugin:** [Official app or directory connector](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **CLI:** [Connector SDK CLI](https://fivetran.com/docs/connector-sdk/getting-started/connector-sdk-commands)
- **API / SDK:** [REST API and Connector SDK](https://fivetran.com/docs/rest-api)
- **Documentation:** [Connection and tool documentation](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **GitHub:** No official repository verified

- **Access:** Public Preview. Fivetran/admin access, an organisation context layer, permitted users and AI-workspace administration for initial setup. Query-role options depend on warehouse.
- **Watch:** Public Preview; the native connector still needs an administrator-prepared context layer.
- **Sources:** [Connection and tool documentation](https://fivetran.com/docs/context-layer/agent-context-mcp) · [Additional official documentation](https://fivetran.com/docs/context-layer/agent-context-mcp/setup-guide)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## RudderStack

**B- · Test · Emerging**

Read exposed sources, destinations, transformations and event context. Manage supported configuration; exact CRUD tools are not fully documented.

**Day to day**

- Read exposed sources, destinations, transformations and event context.
- Manage supported configuration; exact CRUD tools are not fully documented.

> **What still needs you:** Active development and incomplete public action coverage; verify the actual tool inventory.

- **Route:** RudderStack official hosted MCP.
- **Scope:** Read exposed sources, destinations, transformations and event context..
- **Setup:** Moderate. Connect the hosted MCP and authorise the relevant account. [Connection documentation](https://mcp.rudderstack.com/docs).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Unverified** · Edit **Partial** · Delete **Unverified** · Publish / activate **Unverified**
- **Read:** Read exposed sources, destinations, transformations and event context.
- **Write:** Manage supported configuration; exact CRUD tools are not fully documented.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read exposed sources, destinations, transformations and event context.
- **create:** Not established by the reviewed sources.
- **modify:** Documented source/transformation management and destination configuration.
- **delete:** Not established by the reviewed sources.
- **publish:** Not established by the reviewed sources.
- **Coverage:** Some steps. Manage supported configuration; exact CRUD tools are not fully documented. Active development and incomplete public action coverage; verify the actual tool inventory.
- **Evidence basis:** Documentation reviewed

**Good**

- Read exposed sources, destinations, transformations and event context.
- Manage supported configuration; exact CRUD tools are not fully documented.

**Limits**

- Active development and incomplete public action coverage; verify the actual tool inventory.

**Official links**

- **Product / official page:** [RudderStack](https://www.rudderstack.com/)
- **AI interface / endpoint:** [RudderStack official hosted MCP](https://mcp.rudderstack.com/docs)
- **MCP:** [RudderStack official hosted MCP](https://mcp.rudderstack.com/docs)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [RudderStack CLI](https://www.rudderstack.com/docs/profiles/get-started/cli/)
- **API / SDK:** [RudderStack APIs](https://www.rudderstack.com/docs/api/)
- **Documentation:** [Connection and tool documentation](https://mcp.rudderstack.com/docs)
- **GitHub:** No official repository verified

- **Access:** Active RudderStack account with relevant permissions; team connector setup may require an administrator.
- **Watch:** Active development and incomplete public action coverage; verify the actual tool inventory.
- **Sources:** [Connection and tool documentation](https://mcp.rudderstack.com/docs)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## dbt

**B+ · Test · Specialist**

Read metrics, model context, lineage, freshness, jobs and SQL results. Trigger, retry or cancel jobs; execute SQL with development credentials.

**Day to day**

- Read metrics, model context, lineage, freshness, jobs and SQL results.
- Trigger, retry or cancel jobs; execute SQL with development credentials.

> **What still needs you:** Remote MCP does not run local project commands; SQL write rights follow development credentials.

- **Route:** dbt remote MCP, excluding local CLI.
- **Scope:** Read metrics, model context, lineage, freshness, jobs and SQL results..
- **Setup:** Moderate. Connect the account MCP URL with OAuth or a supported token; prepare projects and warehouse access. [Connection documentation](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Depends** · Edit **Depends** · Delete **Depends** · Publish / activate **Partial**
- **Read:** Read metrics, model context, lineage, freshness, jobs and SQL results.
- **Write:** Trigger, retry or cancel jobs; execute SQL with development credentials.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read metrics, model context, lineage, freshness, jobs and SQL results.
- **create:** Permitted SQL creations and job runs.
- **modify:** Permitted SQL updates; retry/cancel supported jobs.
- **delete:** Permitted SQL deletes, not universal dbt object deletion.
- **publish:** Trigger configured jobs; local build/run requires the self-hosted route.
- **Coverage:** Most steps. Trigger, retry or cancel jobs; execute SQL with development credentials. Remote MCP does not run local project commands; SQL write rights follow development credentials.
- **Evidence basis:** Documentation reviewed

**Good**

- Read metrics, model context, lineage, freshness, jobs and SQL results.
- Trigger, retry or cancel jobs; execute SQL with development credentials.

**Limits**

- Remote MCP does not run local project commands; SQL write rights follow development credentials.

**Official links**

- **Product / official page:** [dbt](https://www.getdbt.com/)
- **AI interface / endpoint:** [dbt remote MCP, excluding local CLI](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp)
- **MCP:** [dbt remote MCP, excluding local CLI](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp)
- **Plugin:** No separate official paid-media plugin verified
- **CLI:** [dbt CLI through MCP](https://github.com/dbt-labs/dbt-mcp)
- **API / SDK:** [dbt APIs and developer docs](https://docs.getdbt.com/)
- **Documentation:** [Connection and tool documentation](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp)
- **GitHub:** No official repository verified

- **Access:** Remote MCP is available across dbt platform plans but underlying API tools vary by plan. OAuth is public beta for Starter, Enterprise and Enterprise+. Token-based execute_sql needs a personal token, not a service token.
- **Watch:** Remote MCP does not run local project commands; SQL write rights follow development credentials.
- **Sources:** [Connection and tool documentation](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp) · [Additional official documentation](https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools) · [Additional official documentation](https://docs.getdbt.com/docs/dbt-ai/about-mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Google MCP Toolbox for Databases

**B · Production · Specialist**

Query configured databases and inspect their schemas. Execute only the database operations exposed by your toolset.

**Day to day**

- Query configured databases and inspect their schemas.
- Execute only the database operations exposed by your toolset.

> **What still needs you:** Hosting, credentials and tool design remain your responsibility; read-only behaviour varies by engine.

- **Route:** Google MCP Toolbox, self-managed database tools.
- **Scope:** Query configured databases and inspect their schemas..
- **Setup:** Specialist. Run the Toolbox binary/container and configure database credentials and allowed tools. [Connection documentation](https://mcp-toolbox.dev/documentation/introduction/).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Depends** · Edit **Depends** · Delete **Depends** · Publish / activate **No**
- **Read:** Query configured databases and inspect their schemas.
- **Write:** Execute only the database operations exposed by your toolset.
- **Connection type:** self-managed
- **Review:** current
- **read:** Query configured databases and inspect their schemas.
- **create:** Configured database tools and permissions determine support.
- **modify:** Configured database tools and permissions determine support.
- **delete:** Configured database tools and permissions determine support.
- **publish:** No direct campaign publication established.
- **Coverage:** Depends. Execute only the database operations exposed by your toolset. Hosting, credentials and tool design remain your responsibility; read-only behaviour varies by engine.
- **Evidence basis:** Documentation reviewed

**Good**

- Query configured databases and inspect their schemas.
- Execute only the database operations exposed by your toolset.

**Limits**

- Hosting, credentials and tool design remain your responsibility; read-only behaviour varies by engine.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://mcp-toolbox.dev/documentation/introduction/)
- **AI interface / endpoint:** [Google MCP Toolbox, self-managed database tools](https://mcp-toolbox.dev/documentation/introduction/)
- **MCP:** [Google MCP Toolbox, self-managed database tools](https://mcp-toolbox.dev/documentation/introduction/)
- **Plugin:** [Gemini CLI extensions](https://github.com/googleapis/mcp-toolbox)
- **CLI:** [toolbox CLI](https://mcp-toolbox.dev/documentation/introduction/)
- **API / SDK:** [BigQuery and database connectors](https://mcp-toolbox.dev/)
- **Documentation:** [Connection and tool documentation](https://mcp-toolbox.dev/documentation/introduction/)
- **GitHub:** [Vendor source code](https://github.com/google/mcp)

- **Access:** Open-source server plus a supported database/cloud account, credentials, network access and operation-level permissions.
- **Watch:** Hosting, credentials and tool design remain your responsibility; read-only behaviour varies by engine.
- **Sources:** [Connection and tool documentation](https://mcp-toolbox.dev/documentation/introduction/) · [Additional official documentation](https://mcp-toolbox.dev/documentation/configuration/security/read-only/) · [Vendor source code](https://github.com/google/mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
