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
| [Fivetran](#fivetran) | **C+** | Reference | Test | Hard | Yes | Partial | No | No | No | Assist only |
| [RudderStack](#rudderstack) | **Not scored: verification needed** | Emerging | Test | Moderate | Yes | Unverified | Partial | Unverified | Unverified | Some steps |
| [dbt](#dbt) | **B+** | Specialist | Test | Moderate | Yes | Depends | Depends | Depends | Partial | Most steps |
| [Google MCP Toolbox for Databases](#google-mcp-toolbox-for-databases) | **B** | Specialist | Production | Specialist | Yes | Depends | Depends | Depends | No | Depends |

## Supermetrics

**A- · Production · Reference**

Read connected marketing accounts, fields and cross-channel performance. Create paused campaigns and edit supported budgets, ads and settings.

**Day to day**

- Read connected marketing accounts, fields and cross-channel performance.
- Create paused campaigns and edit supported budgets, ads and settings.

> **What still needs you:** Third-party access to ad platforms. Writes need owner opt-in; supported actions vary by platform.

- **Route:** Supermetrics connector.
- **Scope:** Read connected marketing accounts, fields and cross-channel performance..
- **Setup:** Moderate. Connect the Claude or ChatGPT app, authorise data sources and enable campaign writes separately. [Connect Supermetrics](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Partial** · Publish / activate **Partial**
- **Read:** Read connected marketing accounts, fields and cross-channel performance.
- **Write:** Create paused campaigns and edit supported budgets, ads and settings.
- **Connection type:** native-app
- **Connection status:** official · generally-available. Official Supermetrics app, providing third-party access to ad platforms. Entitlement and account-owner write approval are required.
- **Review:** current
- **read:** Read connected marketing accounts, fields and cross-channel performance.
- **create:** Supported campaigns, initially paused.
- **modify:** Supported campaign budgets, status, settings and ads.
- **delete:** Supported campaigns; removal is irreversible.
- **publish:** Enable supported campaigns after review and the configured approval checks.
- **Coverage:** Most steps. Create paused campaigns and edit supported budgets, ads and settings. Third-party access to ad platforms. Writes need owner opt-in; supported actions vary by platform.
- **Evidence basis:** Documentation reviewed

**Good**

- Read connected marketing accounts, fields and cross-channel performance.
- Create paused campaigns and edit supported budgets, ads and settings.

**Limits**

- Third-party access to ad platforms. Writes need owner opt-in; supported actions vary by platform.

**Official links**

- **Product / official page:** [Campaign actions and limits](https://docs.supermetrics.com/v1/docs/how-to-manage-ad-campaigns-with-ai-tools)
- **AI interface / endpoint:** [Supermetrics Claude / ChatGPT app](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools)
- **MCP:** [Supermetrics Claude / ChatGPT app](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools)
- **Plugin:** [Official app or directory connector](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools)
- **CLI:** [Official CLI, alpha](https://docs.supermetrics.com/apidocs/cli)
- **API / SDK:** [Supermetrics API](https://docs.supermetrics.com/apidocs/getting-started)
- **Documentation:** [Campaign actions and limits](https://docs.supermetrics.com/v1/docs/how-to-manage-ad-campaigns-with-ai-tools)
- **GitHub:** No official repository verified

- **Access:** AI chats or MCP entitlement/trial, Campaign management entitlement and seat where applicable, connected accounts with platform edit permission. The connection owner enables writes for each account/team.
- **Watch:** Third-party access to ad platforms. Writes need owner opt-in; supported actions vary by platform.
- **Sources:** [Campaign actions and limits](https://docs.supermetrics.com/v1/docs/how-to-manage-ad-campaigns-with-ai-tools) · [Write access and approvals](https://docs.supermetrics.com/docs/how-to-enable-campaign-write-access) · [Claude and ChatGPT connections](https://docs.supermetrics.com/docs/how-to-connect-supermetrics-to-ai-tools)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Snowflake

**B+ · Production · Reference**

Query governed data through configured SQL and Cortex tools. Optional SQL and custom tools can change data when explicitly enabled.

**Day to day**

- Query governed data through configured SQL and Cortex tools.
- Optional SQL and custom tools can change data when explicitly enabled.

> **What still needs you:** An administrator must expose tools and grant access. SQL is read-only by default; writes need explicit configuration.

- **Route:** Snowflake-managed MCP with configured tools.
- **Scope:** Query governed data through configured SQL and Cortex tools..
- **Setup:** Hard. An administrator creates the MCP server and tools; users connect with supported authentication. [Managed MCP tools and permissions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Depends** · Edit **Depends** · Delete **Depends** · Publish / activate **No**
- **Read:** Query governed data through configured SQL and Cortex tools.
- **Write:** Optional SQL and custom tools can change data when explicitly enabled.
- **Connection type:** hosted-mcp
- **Connection status:** official · generally-available. Managed MCP is generally available; server configuration, tool grants and data preparation are required.
- **Review:** current
- **read:** Query governed data through configured SQL and Cortex tools.
- **create:** Configured SQL or procedures can create objects when write access is enabled.
- **modify:** Configured SQL or procedures can update data within role permissions.
- **delete:** Configured SQL or procedures can delete permitted data; disabled in read-only SQL mode.
- **publish:** No general campaign or content publishing route.
- **Coverage:** Depends. Optional SQL and custom tools can change data when explicitly enabled. An administrator must expose tools and grant access. SQL is read-only by default; writes need explicit configuration.
- **Evidence basis:** Documentation reviewed

**Good**

- Query governed data through configured SQL and Cortex tools.
- Optional SQL and custom tools can change data when explicitly enabled.

**Limits**

- An administrator must expose tools and grant access. SQL is read-only by default; writes need explicit configuration.

**Official links**

- **Product / official page:** [Managed MCP tools and permissions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **AI interface / endpoint:** [Snowflake-managed MCP with configured tools](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **MCP:** [Snowflake-managed MCP with configured tools](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **Plugin:** No dedicated paid-media plugin verified
- **CLI:** [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index)
- **API / SDK:** [Drivers, APIs and SDKs](https://docs.snowflake.com/en/developer)
- **Documentation:** [Managed MCP tools and permissions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)
- **GitHub:** No official repository verified

- **Access:** Snowflake account, warehouse/data, configured semantic views/search/agents as relevant, and separate permissions for both server and underlying tools.
- **Watch:** An administrator must expose tools and grant access. SQL is read-only by default; writes need explicit configuration.
- **Sources:** [Managed MCP tools and permissions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) · [Managed MCP general availability](https://docs.snowflake.com/en/release-notes/2025/other/2025-11-04-cortex-agents-mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Airbyte

**B+ · Test · Reference**

Read connector configuration, sync status, logs and supported external records. Manage connectors and pipelines; start or cancel syncs.

**Day to day**

- Read connector configuration, sync status, logs and supported external records.
- Manage connectors and pipelines; start or cancel syncs.

> **What still needs you:** Direct record access is read-only. Deletes require a marked resource name; connectors and credentials need prior setup.

- **Route:** Airbyte platform MCP, pipeline operations.
- **Scope:** Read connector configuration, sync status, logs and supported external records..
- **Setup:** Moderate. Connect with OAuth, configure sources and destinations, then enable agent access for direct reads where needed. [Airbyte MCP setup](https://docs.airbyte.com/platform/airbyte-mcp).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Partial** · Publish / activate **Partial**
- **Read:** Read connector configuration, sync status, logs and supported external records.
- **Write:** Manage connectors and pipelines; start or cancel syncs.
- **Connection type:** hosted-mcp
- **Connection status:** official · generally-available. Available for Airbyte Cloud and Flex; active development. Direct reads need administrator enablement.
- **Review:** current
- **read:** Read connector configuration, sync status, logs and supported external records.
- **create:** Connectors, connections and custom connector definitions.
- **modify:** Connectors, streams, connections and sync configuration.
- **delete:** Sources, destinations, connections and definitions marked delete-me or deleteme.
- **publish:** Publish custom connector definitions and start pipeline syncs.
- **Coverage:** Most steps. Manage connectors and pipelines; start or cancel syncs. Direct record access is read-only. Deletes require a marked resource name; connectors and credentials need prior setup.
- **Evidence basis:** Documentation reviewed

**Good**

- Read connector configuration, sync status, logs and supported external records.
- Manage connectors and pipelines; start or cancel syncs.

**Limits**

- Direct record access is read-only. Deletes require a marked resource name; connectors and credentials need prior setup.

**Official links**

- **Product / official page:** [Airbyte MCP setup](https://docs.airbyte.com/platform/airbyte-mcp)
- **AI interface / endpoint:** [Airbyte platform MCP, pipeline operations](https://docs.airbyte.com/platform/airbyte-mcp)
- **MCP:** [Airbyte platform MCP, pipeline operations](https://docs.airbyte.com/platform/airbyte-mcp)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [abctl for local deployment](https://docs.airbyte.com/platform/using-airbyte/getting-started/oss-quickstart)
- **API / SDK:** [Python SDK and HTTP API](https://docs.airbyte.com/)
- **Documentation:** [Airbyte MCP setup](https://docs.airbyte.com/platform/airbyte-mcp)
- **GitHub:** No official repository verified

- **Access:** Hosted MCP supports Airbyte Cloud editions and Flex with OAuth and Airbyte permissions. Direct reads need admin-enabled agent access and supported connectors; externally managed secrets are not supported for direct reads.
- **Watch:** Direct record access is read-only. Deletes require a marked resource name; connectors and credentials need prior setup.
- **Sources:** [Airbyte MCP setup](https://docs.airbyte.com/platform/airbyte-mcp) · [Pipeline tools and deletion safeguards](https://docs.airbyte.com/platform/airbyte-mcp/tools)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Databricks

**B+ · Test · Reference**

Run SQL against governed tables and inspect database schemas. Execute SQL writes within warehouse permissions; administrators can disable writes.

**Day to day**

- Run SQL against governed tables and inspect database schemas.
- Execute SQL writes within warehouse permissions; administrators can disable writes.

> **What still needs you:** SQL MCP is Beta and needs admin enablement. Genie One is a separate generally available route; its status does not cover SQL writes.

- **Route:** Databricks SQL MCP.
- **Scope:** Run SQL against governed tables and inspect database schemas..
- **Setup:** Hard. An account admin enables Enhanced Unity Gateway preview; connect the workspace MCP with the required grants. [Databricks SQL MCP and beta requirements](https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Depends** · Edit **Depends** · Delete **Depends** · Publish / activate **No**
- **Read:** Run SQL against governed tables and inspect database schemas.
- **Write:** Execute SQL writes within warehouse permissions; administrators can disable writes.
- **Connection type:** hosted-mcp
- **Connection status:** official · beta. SQL MCP is Beta; an account admin must enable Enhanced Unity Gateway preview.
- **Review:** current
- **read:** SQL query results and database schemas.
- **create:** SQL-created objects and records, subject to permissions and write policy.
- **modify:** SQL updates, subject to permissions and write policy.
- **delete:** SQL deletes, subject to permissions and write policy.
- **publish:** Database execution is not advertising publication.
- **Coverage:** Most steps. Execute SQL writes within warehouse permissions; administrators can disable writes. SQL MCP is Beta and needs admin enablement. Genie One is a separate generally available route; its status does not cover SQL writes.
- **Evidence basis:** Documentation reviewed

**Good**

- Run SQL against governed tables and inspect database schemas.
- Execute SQL writes within warehouse permissions; administrators can disable writes.

**Limits**

- SQL MCP is Beta and needs admin enablement. Genie One is a separate generally available route; its status does not cover SQL writes.

**Official links**

- **Product / official page:** [Databricks](https://www.databricks.com/)
- **AI interface / endpoint:** [Databricks SQL MCP](https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql)
- **MCP:** [Databricks SQL MCP](https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql)
- **Plugin:** No separate official paid-media plugin verified
- **CLI:** [Databricks CLI](https://docs.databricks.com/aws/en/dev-tools/cli/)
- **API / SDK:** [Databricks APIs and SDKs](https://docs.databricks.com/aws/en/dev-tools/)
- **Documentation:** [Databricks SQL MCP and beta requirements](https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql)
- **GitHub:** No official repository verified

- **Access:** SQL MCP is Beta and requires an account admin to enable Enhanced Unity Gateway preview, plus MCP, warehouse and Unity Catalog privileges. Genie One is a separate generally available analytics route.
- **Watch:** SQL MCP is Beta and needs admin enablement. Genie One is a separate generally available route; its status does not cover SQL writes.
- **Sources:** [Databricks SQL MCP and beta requirements](https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql) · [Databricks MCP routes and access](https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Fivetran

**C+ · Test · Reference**

Query the prepared warehouse context layer with read-only SQL. Submit answer feedback only; no operational data changes.

**Day to day**

- Query the prepared warehouse context layer with read-only SQL.
- Submit answer feedback only; no operational data changes.

> **What still needs you:** Public Preview. An administrator must build the context layer and grant access; business data remains read-only.

- **Route:** Fivetran Agent Context native connector.
- **Scope:** Query the prepared warehouse context layer with read-only SQL..
- **Setup:** Hard. Use the Claude connector or a custom ChatGPT app after the context layer is built. [Agent Context MCP tools](https://fivetran.com/docs/context-layer/agent-context-mcp).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **No** · Delete **No** · Publish / activate **No**
- **Read:** Query the prepared warehouse context layer with read-only SQL.
- **Write:** Submit answer feedback only; no operational data changes.
- **Connection type:** native-app
- **Connection status:** official · preview. Public Preview; requires a prepared context layer and administrator-granted access.
- **Review:** current
- **read:** Query the prepared warehouse context layer with read-only SQL.
- **create:** Submit response feedback, not business records.
- **modify:** Queries are read-only; operational records cannot be changed.
- **delete:** No delete tool in the documented inventory.
- **publish:** No publishing or pipeline execution tool.
- **Coverage:** Assist only. Submit answer feedback only; no operational data changes. Public Preview. An administrator must build the context layer and grant access; business data remains read-only.
- **Evidence basis:** Documentation reviewed

**Good**

- Query the prepared warehouse context layer with read-only SQL.
- Submit answer feedback only; no operational data changes.

**Limits**

- Public Preview. An administrator must build the context layer and grant access; business data remains read-only.

**Official links**

- **Product / official page:** [Agent Context MCP tools](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **AI interface / endpoint:** [Fivetran Agent Context native connector](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **MCP:** [Fivetran Agent Context native connector](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **Plugin:** [Official app or directory connector](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **CLI:** [Connector SDK CLI](https://fivetran.com/docs/connector-sdk/getting-started/connector-sdk-commands)
- **API / SDK:** [REST API and Connector SDK](https://fivetran.com/docs/rest-api)
- **Documentation:** [Agent Context MCP tools](https://fivetran.com/docs/context-layer/agent-context-mcp)
- **GitHub:** No official repository verified

- **Access:** Public Preview. Fivetran/admin access, an organisation context layer, permitted users and AI-workspace administration for initial setup. Query-role options depend on warehouse.
- **Watch:** Public Preview. An administrator must build the context layer and grant access; business data remains read-only.
- **Sources:** [Agent Context MCP tools](https://fivetran.com/docs/context-layer/agent-context-mcp) · [Context layer and connector setup](https://fivetran.com/docs/context-layer/agent-context-mcp/setup-guide)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## RudderStack

**Not scored: verification needed · Test · Emerging**

Read source, destination, transformation and event context. Destination configuration is documented; exact create, delete and publish tools remain unverified.

**Day to day**

- Read source, destination, transformation and event context.
- Destination configuration is documented; exact create, delete and publish tools remain unverified.

> **What still needs you:** The vendor warns of active development and variable stability. Exact write tools and release maturity are not fully documented.

- **Route:** RudderStack hosted MCP.
- **Scope:** Read source, destination, transformation and event context..
- **Setup:** Moderate. Connect the hosted MCP and authorise the relevant account. [Hosted MCP setup and limitations](https://mcp.rudderstack.com/docs).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Unverified** · Edit **Partial** · Delete **Unverified** · Publish / activate **Unverified**
- **Read:** Read source, destination, transformation and event context.
- **Write:** Destination configuration is documented; exact create, delete and publish tools remain unverified.
- **Connection type:** hosted-mcp
- **Connection status:** official · unverified. Official hosted MCP; release maturity and the complete action inventory remain unverified.
- **Review:** pending
- **read:** Source, destination, transformation and event context.
- **create:** No specific creation tool documented.
- **modify:** Destination configuration and source/transformation management; exact fields unverified.
- **delete:** No specific deletion tool documented.
- **publish:** No specific publishing or deployment tool documented.
- **Coverage:** Some steps. Destination configuration is documented; exact create, delete and publish tools remain unverified. The vendor warns of active development and variable stability. Exact write tools and release maturity are not fully documented.
- **Evidence basis:** Documentation reviewed

**Good**

- Read source, destination, transformation and event context.
- Destination configuration is documented; exact create, delete and publish tools remain unverified.

**Limits**

- The vendor warns of active development and variable stability. Exact write tools and release maturity are not fully documented.

**Official links**

- **Product / official page:** [RudderStack](https://www.rudderstack.com/)
- **AI interface / endpoint:** [RudderStack hosted MCP; maturity unconfirmed](https://mcp.rudderstack.com/docs)
- **MCP:** [RudderStack hosted MCP; maturity unconfirmed](https://mcp.rudderstack.com/docs)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [RudderStack CLI](https://www.rudderstack.com/docs/profiles/get-started/cli/)
- **API / SDK:** [RudderStack APIs](https://www.rudderstack.com/docs/api/)
- **Documentation:** [Hosted MCP setup and limitations](https://mcp.rudderstack.com/docs)
- **GitHub:** No official repository verified

- **Access:** Active RudderStack account with relevant permissions; team connector setup may require an administrator.
- **Watch:** The vendor warns of active development and variable stability. Exact write tools and release maturity are not fully documented.
- **Sources:** [Hosted MCP setup and limitations](https://mcp.rudderstack.com/docs)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## dbt

**B+ · Test · Specialist**

Read metrics, model context, lineage, freshness, jobs and SQL results. Trigger, retry or cancel jobs; execute SQL with development credentials.

**Day to day**

- Read metrics, model context, lineage, freshness, jobs and SQL results.
- Trigger, retry or cancel jobs; execute SQL with development credentials.

> **What still needs you:** OAuth is public beta. SQL uses personal development credentials; local project commands require the separate self-hosted server.

- **Route:** dbt remote MCP, excluding local CLI.
- **Scope:** Read metrics, model context, lineage, freshness, jobs and SQL results..
- **Setup:** Moderate. Connect the account MCP URL with OAuth or a supported token; prepare projects and warehouse access. [Remote MCP authentication and permissions](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Depends** · Edit **Depends** · Delete **Depends** · Publish / activate **Partial**
- **Read:** Read metrics, model context, lineage, freshness, jobs and SQL results.
- **Write:** Trigger, retry or cancel jobs; execute SQL with development credentials.
- **Connection type:** hosted-mcp
- **Connection status:** official · beta. Remote MCP is available; its OAuth path is public beta. Token authentication remains available, with plan and resource permissions.
- **Review:** current
- **read:** Read metrics, model context, lineage, freshness, jobs and SQL results.
- **create:** SQL creations allowed by development warehouse credentials; start configured job runs.
- **modify:** SQL updates allowed by development credentials; retry or cancel supported jobs.
- **delete:** SQL deletes allowed by development credentials; no general dbt-object deletion tool.
- **publish:** Run configured platform jobs; remote MCP cannot execute local dbt build or run commands.
- **Coverage:** Most steps. Trigger, retry or cancel jobs; execute SQL with development credentials. OAuth is public beta. SQL uses personal development credentials; local project commands require the separate self-hosted server.
- **Evidence basis:** Documentation reviewed

**Good**

- Read metrics, model context, lineage, freshness, jobs and SQL results.
- Trigger, retry or cancel jobs; execute SQL with development credentials.

**Limits**

- OAuth is public beta. SQL uses personal development credentials; local project commands require the separate self-hosted server.

**Official links**

- **Product / official page:** [dbt](https://www.getdbt.com/)
- **AI interface / endpoint:** [dbt remote MCP, excluding local CLI](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp)
- **MCP:** [dbt remote MCP, excluding local CLI](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp)
- **Plugin:** No separate official paid-media plugin verified
- **CLI:** [dbt CLI through MCP](https://github.com/dbt-labs/dbt-mcp)
- **API / SDK:** [dbt APIs and developer docs](https://docs.getdbt.com/)
- **Documentation:** [Remote MCP authentication and permissions](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp)
- **GitHub:** No official repository verified

- **Access:** Remote MCP is available across dbt platform plans but underlying API tools vary by plan. OAuth is public beta for Starter, Enterprise and Enterprise+. Token-based execute_sql needs a personal token, not a service token.
- **Watch:** OAuth is public beta. SQL uses personal development credentials; local project commands require the separate self-hosted server.
- **Sources:** [Remote MCP authentication and permissions](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp) · [Remote tools and SQL write boundaries](https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

## Google MCP Toolbox for Databases

**B · Production · Specialist**

Query configured databases and inspect their schemas. Execute only the database operations exposed by your toolset.

**Day to day**

- Query configured databases and inspect their schemas.
- Execute only the database operations exposed by your toolset.

> **What still needs you:** Requires local or hosted server setup and database credentials. Operations and read-only controls vary by database and toolset.

- **Route:** Google MCP Toolbox, self-managed database tools.
- **Scope:** Query configured databases and inspect their schemas..
- **Setup:** Specialist. Install the Toolbox server or extension, supply database credentials and choose a prebuilt or custom toolset. [Toolbox setup and supported databases](https://mcp-toolbox.dev/documentation/introduction/).
- **Human job:** Connect sources, inspect schemas and health, query data, transform it and operate the pipeline safely.
- **Capabilities:** Read **Yes** · Create **Depends** · Edit **Depends** · Delete **Depends** · Publish / activate **No**
- **Read:** Query configured databases and inspect their schemas.
- **Write:** Execute only the database operations exposed by your toolset.
- **Connection type:** self-managed
- **Connection status:** official · generally-available. Official released server; deployment, database access and allowed operations require configuration.
- **Review:** current
- **read:** Query configured databases and inspect their schemas.
- **create:** Create database objects or records through configured tools, where permissions allow.
- **modify:** Update database records through configured tools, where permissions allow.
- **delete:** Delete database objects or records only through enabled tools and permissions.
- **publish:** No advertising or content publishing tool in this evaluated database route.
- **Coverage:** Depends. Execute only the database operations exposed by your toolset. Requires local or hosted server setup and database credentials. Operations and read-only controls vary by database and toolset.
- **Evidence basis:** Documentation reviewed

**Good**

- Query configured databases and inspect their schemas.
- Execute only the database operations exposed by your toolset.

**Limits**

- Requires local or hosted server setup and database credentials. Operations and read-only controls vary by database and toolset.

**Official links**

- **Product / official page:** [Toolbox setup and supported databases](https://mcp-toolbox.dev/documentation/introduction/)
- **AI interface / endpoint:** [Google MCP Toolbox, self-managed database tools](https://mcp-toolbox.dev/documentation/introduction/)
- **MCP:** [Google MCP Toolbox, self-managed database tools](https://mcp-toolbox.dev/documentation/introduction/)
- **Plugin:** [Gemini CLI extensions](https://github.com/googleapis/mcp-toolbox)
- **CLI:** [toolbox CLI](https://mcp-toolbox.dev/documentation/introduction/)
- **API / SDK:** [BigQuery and database connectors](https://mcp-toolbox.dev/)
- **Documentation:** [Toolbox setup and supported databases](https://mcp-toolbox.dev/documentation/introduction/)
- **GitHub:** [Official Toolbox repository and releases](https://github.com/googleapis/mcp-toolbox)

- **Access:** Open-source server plus a supported database/cloud account, credentials, network access and operation-level permissions.
- **Watch:** Requires local or hosted server setup and database credentials. Operations and read-only controls vary by database and toolset.
- **Sources:** [Toolbox setup and supported databases](https://mcp-toolbox.dev/documentation/introduction/) · [Read-only configuration by engine](https://mcp-toolbox.dev/documentation/configuration/security/read-only/) · [Official Toolbox repository and releases](https://github.com/googleapis/mcp-toolbox)
- **Last checked:** 16 Nov 2026

[Back to comparison](#data-infrastructure)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
