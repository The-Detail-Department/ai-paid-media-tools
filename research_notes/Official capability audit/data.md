# Official data and modelling capabilities

## Which connections are official and available?

### Takeaway

All ten evaluated implementations have primary official provenance. That does not make them equally ready to connect: Fivetran is Preview, Databricks SQL is Beta, dbt OAuth is Beta, Robyn Python is Beta, and RudderStack does not establish release maturity. This was a fresh documentation review on 16 November 2026, with no authenticated connection or execution tests.

### Cited Findings

| Entry | Evaluated route | Status and required flag | Primary evidence |
| --- | --- | --- | --- |
| Airbyte | Hosted platform MCP | Available across Cloud editions and Flex; active development. Direct reads need admin enablement. | [Platform MCP](https://docs.airbyte.com/platform/airbyte-mcp) |
| Fivetran | Agent Context MCP | Public Preview. Requires a prepared context layer and admin-granted access. | [Overview and tool inventory](https://fivetran.com/docs/context-layer/agent-context-mcp), [setup](https://fivetran.com/docs/context-layer/agent-context-mcp/setup-guide) |
| Google MCP Toolbox | Operator-managed database MCP | Official released server, not Google's separate managed remote MCP service. Requires database credentials and local or hosted installation. | [Official repository](https://github.com/googleapis/mcp-toolbox), [introduction](https://mcp-toolbox.dev/documentation/introduction/) |
| Snowflake | Managed MCP with configured SQL/Cortex/custom tools | Generally available. Administrators still configure the server, resources and grants. | [GA announcement](https://docs.snowflake.com/en/release-notes/2025/other/2025-11-04-cortex-agents-mcp), [managed MCP](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) |
| Meridian | Official Agent Skills plus local Python | Published official skills. Requires a coding environment, prepared data, modelling choices and human review. | [Agent skills](https://developers.google.com/meridian/docs/user-guide/agent-skills), [official repository](https://github.com/google/meridian) |
| Robyn | R or Python modelling package through code | Stable R package exists; the Python implementation is explicitly Beta. No ready official chat connector verified. | [Installation](https://facebookexperimental.github.io/Robyn/docs/installation/), [Python Beta](https://facebookexperimental.github.io/Robyn/docs/robyn-api/), [Meta repository](https://github.com/facebookexperimental/Robyn) |
| PyMC-Marketing | Python modelling library | Published library requiring code and statistical expertise. No ready official chat connector verified for this library. Separate products do not supply its capabilities. | [Library documentation](https://www.pymc-marketing.io/en/stable/), [official repository](https://github.com/pymc-labs/pymc-marketing) |
| Databricks | SQL MCP, specifically | Beta. Account admin must enable Enhanced Unity Gateway preview. Genie One is a separate GA route, not proof that SQL writes are GA. | [SQL MCP](https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql), [route comparison](https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services) |
| dbt | Remote MCP | Available remote service; OAuth is public Beta. Token authentication is separately available; SQL requires personal credentials. | [Remote setup](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp) |
| RudderStack | Vendor-hosted MCP | Official, but maturity unverified. Vendor warns of active development, missing features and variable connection stability. Exact write inventory incomplete. | [Vendor MCP documentation](https://mcp.rudderstack.com/docs) |

### Inferences

- The new `connection.availability` uses the strongest unresolved condition in mixed paths. Thus Robyn is `beta` because its Python route is beta, while its note preserves the stable R distinction; dbt is `beta` because OAuth is beta, while its note preserves token access. These are editorial normalisations of the cited route-specific documentation, not new vendor labels for the entire product.
- `generally-available` for published open-source packages means a released implementation can be obtained. It must not produce a generic “Ready” badge: self-managed setup, source data, permissions and specialist work remain prerequisites.
- The combination of official provenance and published documentation establishes source authenticity, not successful account access or production fitness.

### Gaps

- RudderStack has no exact public tool list or explicit release-state label in the reviewed official page. Its old `beta` interface label was unsupported; the proposed interface maturity is now `none-verified`, connection availability `unverified`, and review status `pending`.
- No end-user accounts were connected, no database queries executed, no pipelines changed and no model jobs run. Authentication, entitlements and runtime behaviour were not tested.

## What can the evaluated routes read and change?

### Takeaway

The proposed JSON checks all five action slots for all ten entries against the actual evaluated route. Custom SQL and local Python/R actions remain conditional on configuration; they are not direct campaign-management actions.

### Cited Findings

| Entry | Read | Create and modify | Delete | Publish or execute | Evidence |
| --- | --- | --- | --- | --- | --- |
| Airbyte | Configuration, logs, sync status, supported direct records | Connectors, connections, streams and custom definitions | Only resources marked `delete-me` or `deleteme` | Publish custom connector definitions and run syncs; direct external-record tools remain read-only | [Exact MCP tools](https://docs.airbyte.com/platform/airbyte-mcp/tools) |
| Fivetran | Read-only SQL against context-layer warehouse | Response feedback only; no operational-record writes | No delete tool in the documented inventory | No publishing or pipeline execution tool | [Two-tool inventory](https://fivetran.com/docs/context-layer/agent-context-mcp) |
| Google MCP Toolbox | Configured database queries and schemas | Depends on exposed database tools and privileges | Depends on exposed database tools and privileges | No advertising/content publishing route assessed | [Toolbox](https://github.com/googleapis/mcp-toolbox), [read-only controls](https://mcp-toolbox.dev/documentation/configuration/security/read-only/) |
| Snowflake | Configured SQL, Cortex search/analytics/agents | SQL or exposed procedures can mutate permitted data when enabled | Conditional SQL/procedure deletion | Database operations, not generic campaign/content publication | [SQL defaults and custom tool configuration](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) |
| Meridian | Prepared data, fitted models and diagnostics | Python model scripts, model files, reports and budget scenarios | No model-deletion skill documented | Generates outputs and scenario handoffs; no live campaign budget changes | [Five skills and outputs](https://developers.google.com/meridian/docs/user-guide/agent-skills) |
| Robyn | Prepared data and model outputs | Fit/configure models, diagnostics and allocation scenarios through code | No model-deletion operation documented | Model execution; no live campaign budget changes | [Python workflow](https://facebookexperimental.github.io/Robyn/docs/robyn-api/), [R source](https://github.com/facebookexperimental/Robyn) |
| PyMC-Marketing | Prepared data and fitted models | Python model specification, fitting, forecasts, diagnostics and allocation scenarios | No model-deletion API established in this workflow | Local modelling, not live media-budget changes | [MMM end-to-end example](https://www.pymc-marketing.io/en/stable/notebooks/mmm/mmm_example.html), [library](https://www.pymc-marketing.io/en/stable/) |
| Databricks SQL MCP | SQL query results and schema inspection | SQL writes subject to Unity Catalog/warehouse permissions and policy | Conditional SQL deletion | SQL execution, not ad publication | [SQL MCP](https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql) |
| dbt remote MCP | Metrics, models, lineage, freshness, jobs and SQL results | Start/retry/cancel configured jobs; SQL writes with development credentials | Conditional SQL deletion, not universal dbt-object deletion | Run configured platform jobs; local CLI commands excluded | [Tool inventory and SQL FAQ](https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools) |
| RudderStack | Source, destination, transformation and event context | Broad configuration/management documented, exact mutation fields unverified | No exact deletion tool documented | No exact publishing/deployment tool documented | [Hosted MCP capabilities](https://mcp.rudderstack.com/docs) |

### Inferences

- Fivetran's exhaustive current inventory contains only `execute_sql` and `provide_feedback`. Therefore delete and publish change from `Unverified` to `No`, scoped explicitly to this MCP route. The existence of Fivetran's REST API does not change these values.
- Databricks now evaluates SQL MCP alone. The separate Genie One GA status is retained only as contextual limitation, preventing a combined description from lending GA status to beta writes.
- Airbyte's publish scope now includes the explicitly named `publish_custom_source_definition` tool instead of only saying deploy/start syncs. `Partial` remains appropriate because this does not publish advertising or enable direct writes to external records.
- RudderStack's “manage” language supports a limited configuration statement, not specific create/delete/publish claims. These unsupported actions remain visible as `Unverified`.

### Gaps

- Package-level file deletion was not silently mapped to model deletion for Meridian, Robyn or PyMC-Marketing. Their deletion slot stays `Unverified` with a specific short explanation.
- SQL support is not a guarantee that every account can run every statement. Database credentials, exposed functions/tools and policies determine actual permissions.

## What changed and what should be flagged?

### Takeaway

Ten entries were freshly reviewed. Their grades remain unchanged; one previously “current” entry, RudderStack, is now pending because current official documentation does not establish maturity or a complete write inventory. No entry has been promoted to connected or tested evidence.

### Cited Findings

- Five connection records carry availability caveats: Fivetran Preview; Robyn mixed stable R/Python Beta; Databricks SQL Beta; dbt remote/OAuth Beta; RudderStack maturity unverified. These distinctions are supported by the primary sources above.
- All ten records now carry official provenance, a documented connection status, a 16 November 2026 check date, primary URLs and a short factual access note. Source link labels now identify the documents instead of repeating generic “Additional official documentation”.
- The PyMC-Marketing source list now points to its own documentation, model example and official repository. The unrelated Simba server is no longer presented as source code for this library's connection. [PyMC-Marketing repository](https://github.com/pymc-labs/pymc-marketing)
- The Google Toolbox source list now points to the exact vendor repository rather than the broad Google MCP inventory. Its instructions confirm the self-managed server and database credentials. [Official Toolbox](https://github.com/googleapis/mcp-toolbox)

### Inferences

- A safe display says “Official”, “Beta/Preview/Access unverified” where applicable, and shows setup separately. It must not collapse “Documentation reviewed” into “Ready” or “Tested”.
- Pending entries should not show an old grade as a current recommendation. RudderStack's existing B- remains in the proposed record solely to preserve the current data schema and historical assessment; the parent renderer should withhold it while pending.
- General database and modelling tools should remain below actual media platforms. Their broad technical writes do not substitute for operational ad-platform controls.

### Gaps

- One initially guessed Meridian URL returned inaccessible; the exact official Agent Skills URL was then fetched successfully. No capability depends on the failed URL.
- This pass did not run code or source repository tests because ownership is limited to the two research outputs. JSON shape and record counts are checked locally; integration validation belongs to the parent.
