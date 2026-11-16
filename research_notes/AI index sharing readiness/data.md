# Data, research and modelling routes

Verified against official documentation on 16 November 2026. This is source verification, not connected-account acceptance testing. No provider writes, paid queries or private data were used. The companion `data.json` provides twelve complete route records and source URLs.

## What materially changes the existing index?

### Takeaway

Supermetrics, Airbyte and dbt need substantial route corrections. The modelling entries need clearer separation between code-assisted research, official agent skills and separately hosted products.

### Cited Findings

- Supermetrics now documents campaign creation, edits, removal and paused initial state across seven ad platforms. Its former read-only label is incorrect. Write access and approval settings are distinct, and confirmation is configurable. [Campaign actions](https://docs.supermetrics.com/v1/docs/how-to-manage-ad-campaigns-with-ai-tools), [permissions](https://docs.supermetrics.com/docs/how-to-enable-campaign-write-access).
- Airbyte's current platform MCP controls pipelines and syncs. Its direct source/destination reads remain read-only. The old Agents documentation path redirects, so its different scope must not be merged into the current route. [Current overview](https://docs.airbyte.com/platform/airbyte-mcp), [tool catalogue](https://docs.airbyte.com/platform/airbyte-mcp/tools).
- dbt remote MCP exists and supports job actions. The tool documentation explicitly says SQL writes are permitted according to development warehouse credentials, despite consumption-oriented wording elsewhere. Local CLI tools remain local-only. [Available tools](https://docs.getdbt.com/docs/dbt-ai/mcp-available-tools), [remote setup](https://docs.getdbt.com/docs/dbt-ai/setup-remote-mcp).
- Meridian publishes official Agent Skills for loading data, fitting/checking models and optimisation. Current implementation guidance describes local Python, not a ready hosted chat connector. [Agent skills](https://developers.google.com/meridian/docs/user-guide/agent-skills).

### Inferences

The grade should reward the easiest **verified route for the stated workflow**, not the theoretical power of an underlying API. A vendor-managed endpoint can still need extensive data engineering before a marketer can use it. Conversely, installing a native connector should not be marked difficult merely because the product also offers a self-hosted option.

### Gaps

Provider account eligibility, actual client tool discovery, reliability and successful mutations were not tested. No claim of full UI parity is supported. Current live documentation is used; historical assertions were not assumed correct.

## Which read and write distinctions must remain visible?

### Takeaway

Use a named write target: campaigns, pipeline configuration, warehouse data, feedback, research tasks or model artefacts. A single yes/no write badge loses the key distinction.

### Cited Findings

- DataForSEO v3 uses documentation discovery plus an authenticated generic API request tool. Its hosted OAuth endpoint removes server installation; paid task submission remains research execution, not ad-account control. [Official v3 server](https://github.com/dataforseo/mcp-server-typescript).
- Fivetran's context MCP offers read-only warehouse SQL and answer feedback. It also has a Claude directory connector, but requires a built context layer and administrative access. [Tools](https://fivetran.com/docs/context-layer/agent-context-mcp), [setup](https://fivetran.com/docs/context-layer/agent-context-mcp/setup-guide).
- Snowflake hosts configured MCP tools; SQL defaults to read-only, and custom functions/procedures are separately exposed. Roles and configuration determine mutation rights. [Managed MCP](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp).
- Databricks documents GA Genie One and a separate Beta SQL MCP. SQL permits writes by default unless the write-blocking policy is applied. [Services](https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services), [SQL MCP](https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql).
- Google Toolbox offers database toolsets under operator control. Read-only enforcement and write-tool suppression differ by engine. It is distinct from Google's managed remote MCP services. [Toolbox](https://mcp-toolbox.dev/documentation/introduction/), [read-only configuration](https://mcp-toolbox.dev/documentation/configuration/security/read-only/), [official MCP inventory](https://github.com/google/mcp).
- RudderStack documents source/transformation management and destination configuration, but does not enumerate a complete action list. Its own page flags active development and incomplete features. [Official server documentation](https://mcp.rudderstack.com/docs).

### Inferences

Fivetran should not receive a write-capable operational grade for its feedback tool. DataForSEO should retain useful research credit without implying campaign changes. RudderStack's evidence supports partial configuration actions, not unqualified create/update/delete claims.

### Gaps

RudderStack's exact create/delete tools and plan gates remain unverified. Snowflake/Databricks capabilities vary with each organisation's exposed resources and grants. The research does not imply that every database mutation is appropriate for an end user.

## How should modelling tools be represented fairly?

### Takeaway

Keep them as specialist research routes and grade AI connection readiness separately from statistical capability. Do not score saved models or suggested budget allocations as live campaign writes.

### Cited Findings

- Robyn requires package/runtime setup; its Python implementation is explicitly beta. End-to-end notebooks include modelling, diagnostics and allocation. [Installation](https://facebookexperimental.github.io/Robyn/docs/installation/), [Python beta](https://facebookexperimental.github.io/Robyn/docs/robyn-api/).
- PyMC-Marketing is a Python library for MMM/CLV, diagnostics, forecasting and optimisation. [Library documentation](https://www.pymc-marketing.io/en/stable/).
- PyMC Labs also identifies Simba MCP as a separate ecosystem product. That server exposes dataset/model/scenario operations through authenticated local or HTTP setups; these abilities must not silently become features of the PyMC-Marketing library entry. [Official ecosystem](https://www.pymc-labs.com/open-source), [Simba MCP](https://github.com/getsimba-ai/simba-mcp).
- Meridian Agent Skills add structured agent guidance and explicit human checkpoints. The local modelling runtime and compute remain prerequisites. [Agent workflow](https://developers.google.com/meridian/docs/user-guide/agent-skills), [runtime](https://developers.google.com/meridian/docs/user-guide/installing).

### Inferences

Meridian B-, Robyn C and PyMC-Marketing C+ are provisional **AI connection** judgements. They do not rank model quality. A future Simba entry could earn a different grade, but it would need its own route, access and acceptance review.

### Gaps

No official ready Robyn chat app or hosted execution MCP was verified in the reviewed sources. This should be written as a limited verification finding, not proof that no community implementation exists. An installable skill is not equivalent to an app-directory connector.

## Proposed grade and setup reconciliation

### Takeaway

Keep the three dimensions visible alongside the grade. These proposals are evidence-based editorial judgements, not measured performance results.

### Cited Findings

The detailed, individually linked evidence is in `data.json`.

| Entry | Previous | Proposed | Easiest evaluated setup | Main operational boundary |
| --- | --- | --- | --- | --- |
| Supermetrics | B+ | A- | Native app | Opt-in campaign writes on supported ad platforms |
| DataForSEO | B+ | B+ | Hosted MCP | Research/API tasks; no campaign mutations |
| Airbyte | B | B+ | Hosted MCP | Pipeline writes; external direct reads remain read-only |
| Fivetran | C+ | C+ | Native Claude connector | Context-layer reads and feedback only |
| Google MCP Toolbox | B | B | Self-managed | Configured database operations |
| Snowflake | B | B+ | Hosted MCP | SQL defaults read-only; writes explicitly configured |
| Meridian | B+ | B- | Self-managed skills/runtime | Models and scenarios, not live campaign budgets |
| Robyn | B | C | Self-managed library | Code-assisted modelling |
| PyMC-Marketing | B | C+ | Self-managed library | Separate from Simba's MCP product |
| RudderStack | B+ | B- | Hosted MCP | Partial configuration scope; exact action coverage unclear |
| Databricks | B+ | B+ | Hosted MCP | GA analytics versus Beta SQL execution |
| dbt | B+ | B+ | Hosted MCP | Remote job/SQL actions; local CLI separate |

### Inferences

Expose setup prerequisites directly, especially for a native connector that needs a warehouse/context layer first. Preserve route maturity independently of grade. A B+ managed data platform is not an assertion that a marketer can start without data engineering support.

### Gaps

Parent reconciliation must ensure these grades remain comparable to media/CMS routes under the final shared rubric. Evidence supports the capabilities, while grade calibration remains editorial.
