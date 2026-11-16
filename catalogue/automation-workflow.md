# Automation and workflow

Cross-tool automation systems judged on connection, workflow construction, execution, debugging and monitoring.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Zapier](#zapier) | **A-** | Reference | Production | Moderate | Yes | Partial | Partial | Depends | Partial | Most steps |
| [Make](#make) | **B+** | Reference | Production | Moderate | Yes | Depends | Partial | Depends | Partial | Most steps |
| [Workato](#workato) | **B** | Reference | Production | Hard | Yes | Partial | Partial | Depends | Depends | Some steps |
| [Pipedream](#pipedream) | **A-** | Emerging | Production | Moderate | Yes | Partial | Partial | Depends | Partial | Most steps |
| [Gumloop](#gumloop) | **A-** | Emerging | Test | Moderate | Yes | Yes | Yes | Partial | Partial | Most steps |
| [n8n](#n8n) | **B+** | Emerging | Test | Moderate | Yes | Yes | Yes | Unverified | Yes | Most steps |

## Zapier

**A- · Production · Reference**

Read and search records in connected apps. Run supported app actions; workflow creation is separate early access.

**Day to day**

- Read and search records in connected apps.
- Run supported app actions; workflow creation is separate early access.

> **What still needs you:** Coverage depends on each app; Next Gen Zaps deployment is not available to every account.

- **Route:** Zapier official hosted MCP.
- **Scope:** Read and search records in connected apps..
- **Setup:** Moderate. Connect hosted MCP and authorise apps; select managed or agentic tool discovery. [Connection documentation](https://docs.zapier.com/mcp/home).
- **Human job:** Connect systems, build the workflow, run it reliably, diagnose failures and monitor production execution.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **Partial** · Delete **Depends** · Publish / activate **Partial**
- **Read:** Read and search records in connected apps.
- **Write:** Run supported app actions; workflow creation is separate early access.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read and search records in connected apps.
- **create:** Supported app records, such as tasks and messages.
- **modify:** Supported app records, such as CRM fields.
- **delete:** Only where an authorised app exposes deletion.
- **publish:** Supported sends/posts; Next Gen Zaps deployment is early access.
- **Coverage:** Most steps. Run supported app actions; workflow creation is separate early access. Coverage depends on each app; Next Gen Zaps deployment is not available to every account.
- **Evidence basis:** Documentation reviewed

**Good**

- Read and search records in connected apps.
- Run supported app actions; workflow creation is separate early access.

**Limits**

- Coverage depends on each app; Next Gen Zaps deployment is not available to every account.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://docs.zapier.com/mcp/home)
- **AI interface / endpoint:** [Zapier official hosted MCP](https://docs.zapier.com/mcp/home)
- **MCP:** [Zapier official hosted MCP](https://docs.zapier.com/mcp/home)
- **Plugin:** MCP tool bundles, not a separate plugin
- **CLI:** [Zapier Platform CLI](https://docs.zapier.com/integrations/build-cli/overview)
- **API / SDK:** [Zapier Platform](https://docs.zapier.com/platform/home)
- **Documentation:** [Connection and tool documentation](https://docs.zapier.com/mcp/home)
- **GitHub:** No official repository verified

- **Access:** Zapier account, connected app permissions and applicable task allowance.
- **Watch:** Coverage depends on each app; Next Gen Zaps deployment is not available to every account.
- **Sources:** [Connection and tool documentation](https://docs.zapier.com/mcp/home) · [Additional official documentation](https://help.zapier.com/hc/en-us/articles/48308034391821-What-is-Zapier-MCP)
- **Last checked:** 16 Nov 2026

[Back to comparison](#automation-and-workflow)

## Make

**B+ · Production · Reference**

Read authorised scenarios, connections, teams and organisation context. Modify supported automation assets and run authorised scenarios.

**Day to day**

- Read authorised scenarios, connections, teams and organisation context.
- Modify supported automation assets and run authorised scenarios.

> **What still needs you:** Paid management scopes differ from scenario execution; exact create/delete/activation tools need checking.

- **Route:** Make official hosted MCP.
- **Scope:** Read authorised scenarios, connections, teams and organisation context..
- **Setup:** Moderate. Connect the v2 hosted OAuth endpoint and grant the required management scopes. [Connection documentation](https://developers.make.com/mcp-server).
- **Human job:** Connect systems, build the workflow, run it reliably, diagnose failures and monitor production execution.
- **Capabilities:** Read **Yes** · Create **Depends** · Edit **Partial** · Delete **Depends** · Publish / activate **Partial**
- **Read:** Read authorised scenarios, connections, teams and organisation context.
- **Write:** Modify supported automation assets and run authorised scenarios.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read authorised scenarios, connections, teams and organisation context.
- **create:** Depends on granted management tools.
- **modify:** Supported scenarios, connections, webhooks, stores and settings.
- **delete:** Only if the specific authorised tool exists.
- **publish:** Run active/on-demand scenarios; activation is not established universally.
- **Coverage:** Most steps. Modify supported automation assets and run authorised scenarios. Paid management scopes differ from scenario execution; exact create/delete/activation tools need checking.
- **Evidence basis:** Documentation reviewed

**Good**

- Read authorised scenarios, connections, teams and organisation context.
- Modify supported automation assets and run authorised scenarios.

**Limits**

- Paid management scopes differ from scenario execution; exact create/delete/activation tools need checking.

**Official links**

- **Product / official page:** [Make](https://www.make.com/)
- **AI interface / endpoint:** [Make official hosted MCP](https://developers.make.com/mcp-server)
- **MCP:** [Make official hosted MCP](https://developers.make.com/mcp-server)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [Make Apps CLI](https://developers.make.com/custom-apps-documentation/make-apps-cli)
- **API / SDK:** [Make API and developer hub](https://developers.make.com/)
- **Documentation:** [Connection and tool documentation](https://developers.make.com/mcp-server)
- **GitHub:** No official repository verified

- **Access:** Scenario-run tools on all plans; management tools on paid plans, with appropriate scopes and downstream connections.
- **Watch:** Paid management scopes differ from scenario execution; exact create/delete/activation tools need checking.
- **Sources:** [Connection and tool documentation](https://developers.make.com/mcp-server) · [Additional official documentation](https://developers.make.com/mcp-server/connect-using-oauth)
- **Last checked:** 16 Nov 2026

[Back to comparison](#automation-and-workflow)

## Workato

**B · Production · Reference**

Read permitted projects, folders, connections, jobs and workspace assets. Manage role-enabled workspace resources and exposed business tools.

**Day to day**

- Read permitted projects, folders, connections, jobs and workspace assets.
- Manage role-enabled workspace resources and exposed business tools.

> **What still needs you:** Enterprise administration and scoped API roles remain; no universal recipe deployment claim.

- **Route:** Workato Developer/Embedded API MCP.
- **Scope:** Read permitted projects, folders, connections, jobs and workspace assets..
- **Setup:** Hard. Configure an API-client role/token and the remote MCP; curate business tools separately. [Connection documentation](https://docs.workato.com/mcp).
- **Human job:** Connect systems, build the workflow, run it reliably, diagnose failures and monitor production execution.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **Partial** · Delete **Depends** · Publish / activate **Depends**
- **Read:** Read permitted projects, folders, connections, jobs and workspace assets.
- **Write:** Manage role-enabled workspace resources and exposed business tools.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read permitted projects, folders, connections, jobs and workspace assets.
- **create:** Enabled projects, folders, tags and other authorised resources.
- **modify:** Authorised workspace assets and organisation.
- **delete:** Only role-enabled endpoints with an explicit delete action.
- **publish:** Depends on scoped endpoints and exposed recipes.
- **Coverage:** Some steps. Manage role-enabled workspace resources and exposed business tools. Enterprise administration and scoped API roles remain; no universal recipe deployment claim.
- **Evidence basis:** Documentation reviewed

**Good**

- Read permitted projects, folders, connections, jobs and workspace assets.
- Manage role-enabled workspace resources and exposed business tools.

**Limits**

- Enterprise administration and scoped API roles remain; no universal recipe deployment claim.

**Official links**

- **Product / official page:** [Workato](https://www.workato.com/)
- **AI interface / endpoint:** [Workato Developer/Embedded API MCP](https://docs.workato.com/mcp)
- **MCP:** [Workato Developer/Embedded API MCP](https://docs.workato.com/mcp)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [Workato CLI](https://docs.workato.com/workato-cli.html)
- **API / SDK:** [Workato developer APIs](https://docs.workato.com/developing-connectors/sdk.html)
- **Documentation:** [Connection and tool documentation](https://docs.workato.com/mcp)
- **GitHub:** No official repository verified

- **Access:** Workato organisation access and project/endpoint permissions. Embedded API needs Embedded-admin token; vendor says MCP unavailable in CN despite a CN URL appearing in its table.
- **Watch:** Enterprise administration and scoped API roles remain; no universal recipe deployment claim.
- **Sources:** [Connection and tool documentation](https://docs.workato.com/mcp) · [Additional official documentation](https://docs.workato.com/en/mcp/developer-api-mcp)
- **Last checked:** 16 Nov 2026

[Back to comparison](#automation-and-workflow)

## Pipedream

**A- · Production · Emerging**

Search and retrieve records from connected apps. Create and update app records through hosted actions.

**Day to day**

- Search and retrieve records from connected apps.
- Create and update app records through hosted actions.

> **What still needs you:** Each app has its own tools; app actions do not establish Pipedream workflow authoring.

- **Route:** Pipedream official hosted MCP.
- **Scope:** Search and retrieve records from connected apps..
- **Setup:** Moderate. Connect the app-specific hosted server and authorise its account. [Connection documentation](https://pipedream.com/docs/connect/mcp).
- **Human job:** Connect systems, build the workflow, run it reliably, diagnose failures and monitor production execution.
- **Capabilities:** Read **Yes** · Create **Partial** · Edit **Partial** · Delete **Depends** · Publish / activate **Partial**
- **Read:** Search and retrieve records from connected apps.
- **Write:** Create and update app records through hosted actions.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Search and retrieve records from connected apps.
- **create:** Supported issues, messages, documents and records.
- **modify:** Supported app data and records.
- **delete:** Only where the selected app tool supports deletion.
- **publish:** App-specific email sends and social updates.
- **Coverage:** Most steps. Create and update app records through hosted actions. Each app has its own tools; app actions do not establish Pipedream workflow authoring.
- **Evidence basis:** Documentation reviewed

**Good**

- Search and retrieve records from connected apps.
- Create and update app records through hosted actions.

**Limits**

- Each app has its own tools; app actions do not establish Pipedream workflow authoring.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://pipedream.com/docs/connect/mcp)
- **AI interface / endpoint:** [Pipedream official hosted MCP](https://pipedream.com/docs/connect/mcp)
- **MCP:** [Pipedream official hosted MCP](https://pipedream.com/docs/connect/mcp)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [pd CLI](https://pipedream.com/docs/cli/reference)
- **API / SDK:** [Connect SDK and API](https://pipedream.com/docs/connect)
- **Documentation:** [Connection and tool documentation](https://pipedream.com/docs/connect/mcp)
- **GitHub:** No official repository verified

- **Access:** Pipedream account, connected app authorisation, usage and downstream permissions.
- **Watch:** Each app has its own tools; app actions do not establish Pipedream workflow authoring.
- **Sources:** [Connection and tool documentation](https://pipedream.com/docs/connect/mcp) · [Additional official documentation](https://mcp.pipedream.com)
- **Last checked:** 16 Nov 2026

[Back to comparison](#automation-and-workflow)

## Gumloop

**A- · Test · Emerging**

Read agents, sessions, artifacts, tools, flows and permitted knowledge sources. Create and edit agents/skills, run them and manage supported triggers.

**Day to day**

- Read agents, sessions, artifacts, tools, flows and permitted knowledge sources.
- Create and edit agents/skills, run them and manage supported triggers.

> **What still needs you:** Personal/team scopes differ; complete visual-flow authoring is not established.

- **Route:** Gumloop external management MCP.
- **Scope:** Read agents, sessions, artifacts, tools, flows and permitted knowledge sources..
- **Setup:** Moderate. Connect the hosted management MCP and use the appropriate personal or team scope. [Connection documentation](https://docs.gumloop.com/mcp-server/overview.md).
- **Human job:** Connect systems, build the workflow, run it reliably, diagnose failures and monitor production execution.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Partial** · Publish / activate **Partial**
- **Read:** Read agents, sessions, artifacts, tools, flows and permitted knowledge sources.
- **Write:** Create and edit agents/skills, run them and manage supported triggers.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read agents, sessions, artifacts, tools, flows and permitted knowledge sources.
- **create:** Agents, sessions, skills and triggers.
- **modify:** Agents, skills and supported configuration.
- **delete:** Agents and agent triggers with personal-key scope.
- **publish:** Start agents/runs and manage triggers; arbitrary flow publication unverified.
- **Coverage:** Most steps. Create and edit agents/skills, run them and manage supported triggers. Personal/team scopes differ; complete visual-flow authoring is not established.
- **Evidence basis:** Documentation reviewed

**Good**

- Read agents, sessions, artifacts, tools, flows and permitted knowledge sources.
- Create and edit agents/skills, run them and manage supported triggers.

**Limits**

- Personal/team scopes differ; complete visual-flow authoring is not established.

**Official links**

- **Product / official page:** [Gumloop](https://www.gumloop.com/)
- **AI interface / endpoint:** [Gumloop external management MCP](https://docs.gumloop.com/mcp-server/overview.md)
- **MCP:** [Gumloop external management MCP](https://docs.gumloop.com/mcp-server/overview.md)
- **Plugin:** No separate official agent plugin verified
- **CLI:** [Gumloop CLI](https://docs.gumloop.com/cli/overview)
- **API / SDK:** [Gumloop API](https://docs.gumloop.com/api-reference/getting-started)
- **Documentation:** [Connection and tool documentation](https://docs.gumloop.com/mcp-server/overview.md)
- **GitHub:** No official repository verified

- **Access:** Gumloop account and appropriate personal/team scope. Several agent, evaluation, session and organisation operations require a personal API key.
- **Watch:** Personal/team scopes differ; complete visual-flow authoring is not established.
- **Sources:** [Connection and tool documentation](https://docs.gumloop.com/mcp-server/overview.md) · [Additional official documentation](https://docs.gumloop.com/mcp-server/setup) · [Additional official documentation](https://docs.gumloop.com/mcp-server/tools/agents)
- **Last checked:** 16 Nov 2026

[Back to comparison](#automation-and-workflow)

## n8n

**B+ · Test · Emerging**

Read exposed workflows, executions and supported data tables. Create, edit, test, publish and unpublish workflows.

**Day to day**

- Read exposed workflows, executions and supported data tables.
- Create, edit, test, publish and unpublish workflows.

> **What still needs you:** Credentials and admin setup remain; protected instances restrict mutations.

- **Route:** n8n Cloud instance MCP.
- **Scope:** Read exposed workflows, executions and supported data tables..
- **Setup:** Moderate. Enable the instance MCP on n8n Cloud and authorise user-scoped workflows. [Connection documentation](https://docs.n8n.io/connect/connect-to-n8n-mcp-server).
- **Human job:** Connect systems, build the workflow, run it reliably, diagnose failures and monitor production execution.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Unverified** · Publish / activate **Yes**
- **Read:** Read exposed workflows, executions and supported data tables.
- **Write:** Create, edit, test, publish and unpublish workflows.
- **Connection type:** hosted-mcp
- **Review:** current
- **read:** Read exposed workflows, executions and supported data tables.
- **create:** Workflows from validated SDK code and data tables.
- **modify:** Workflows and supported data tables.
- **delete:** Workflow deletion is not established; unpublish is not delete.
- **publish:** Explicit publish_workflow and unpublish_workflow.
- **Coverage:** Most steps. Create, edit, test, publish and unpublish workflows. Credentials and admin setup remain; protected instances restrict mutations.
- **Evidence basis:** Documentation reviewed

**Good**

- Read exposed workflows, executions and supported data tables.
- Create, edit, test, publish and unpublish workflows.

**Limits**

- Credentials and admin setup remain; protected instances restrict mutations.

**Official links**

- **Product / official page:** [Connection and tool documentation](https://docs.n8n.io/connect/connect-to-n8n-mcp-server)
- **AI interface / endpoint:** [n8n Cloud instance MCP](https://docs.n8n.io/connect/connect-to-n8n-mcp-server)
- **MCP:** [n8n Cloud instance MCP](https://docs.n8n.io/connect/connect-to-n8n-mcp-server)
- **Plugin:** Native nodes and skills, not a separate plugin
- **CLI:** [n8n CLI](https://docs.n8n.io/hosting/cli-commands/)
- **API / SDK:** [Public API and workflow nodes](https://docs.n8n.io/api/)
- **Documentation:** [Connection and tool documentation](https://docs.n8n.io/connect/connect-to-n8n-mcp-server)
- **GitHub:** No official repository verified

- **Access:** Suitable n8n version, instance permissions and connected-service credentials. Authoring is documented from 2.13.0; individual tools have version gates.
- **Watch:** Credentials and admin setup remain; protected instances restrict mutations.
- **Sources:** [Connection and tool documentation](https://docs.n8n.io/connect/connect-to-n8n-mcp-server) · [Additional official documentation](https://docs.n8n.io/connect/connect-to-n8n-mcp-server/mcp-server-tools-reference)
- **Last checked:** 16 Nov 2026

[Back to comparison](#automation-and-workflow)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
