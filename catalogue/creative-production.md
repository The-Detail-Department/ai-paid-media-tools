# Creative production

Creative systems judged on context, generation, editing, format adaptation and usable output.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Read context | Create | Edit | Adapt | Export | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Canva](#canva) | **B+** | Reference | Production | Easy | Yes | Yes | Partial | Partial | Yes | Some steps |
| [Figma](#figma) | **B+** | Reference | Production | Easy | Yes | Partial | Partial | Partial | Partial | Some steps |
| [Adobe Firefly Creative Production](#adobe-firefly-creative-production) | **B+** | Reference | Test | Moderate | Yes | Yes | Yes | Yes | Yes | Most steps |
| [Runway](#runway) | **A-** | Emerging | Production | Moderate | Partial | Yes | Yes | Yes | Yes | Most steps |

## Canva

**B+ · Production · Reference**

Canva's remote MCP supports design creation and editing, assets, brand resources, search, export and collaboration.

> **Blocker:** The Apps CLI is for building Canva apps, not a general daily creative-production CLI.

- **Route:** Official remote MCP.
- **Scope:** Designs, assets and selected content workflows.
- **Setup:** Easy. Connect and authorise an individual Canva account. App-development workflows have separate requirements.
- **Human job:** Understand the brief and source assets, create, edit, adapt to placements and export production-ready files.
- **Capabilities:** Read context **Yes** · Create **Yes** · Edit **Partial** · Adapt **Partial** · Export **Yes**
- **Coverage:** Some steps. Useful design creation and editing, without full parity with Canva's manual editor and app ecosystem.
- **Evidence basis:** Documentation reviewed

**Good**

- Official MCP supports design creation, editing, assets and export.
- Remote OAuth makes it accessible to common agent clients.
- Apps CLI and Connect APIs support deeper product integration.

**Limits**

- The Apps CLI is not a daily creative-production CLI.
- Brand and format governance still need human review.
- It does not validate media-platform setup or campaign delivery.

**Official links**

- **Product / official page:** [Canva MCP documentation](https://www.canva.dev/docs/mcp/)
- **AI interface / endpoint:** [Official remote MCP](https://www.canva.dev/docs/mcp/)
- **MCP:** [Official remote MCP](https://www.canva.dev/docs/mcp/)
- **Plugin:** AI Connector uses MCP; no separate plugin counted
- **CLI:** [Canva Apps CLI](https://www.canva.dev/docs/apps/canva-cli/)
- **API / SDK:** [Apps SDK and Connect APIs](https://www.canva.dev/docs/)
- **Documentation:** [Canva MCP documentation](https://www.canva.dev/docs/mcp/)
- **GitHub:** No official repository verified

- **Access:** A Canva account and individual OAuth authorisation; app-development features have separate requirements.
- **Watch:** The Apps CLI builds Canva apps. It is not a general command-line interface for day-to-day creative production.
- **Sources:** [Canva MCP documentation](https://www.canva.dev/docs/mcp/) · [Canva CLI](https://www.canva.dev/docs/apps/canva-cli/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#creative-production)

## Figma

**B+ · Production · Reference**

Figma's remote MCP can retrieve design context and, for supported clients and seats, create or modify native canvas content.

> **Blocker:** A connected agent still cannot rely on every manual design operation, and write access depends on seat type and file permission.

- **Route:** Official remote and desktop MCP.
- **Scope:** Design files, components, variables and canvas objects.
- **Setup:** Easy. Connect a supported client and authorise Figma. Canvas writes require a Full seat and edit permission.
- **Human job:** Understand the brief and source assets, create, edit, adapt to placements and export production-ready files.
- **Capabilities:** Read context **Yes** · Create **Partial** · Edit **Partial** · Adapt **Partial** · Export **Partial**
- **Coverage:** Some steps. Excellent design context and code handoff. Write-to-canvas is useful but does not reproduce the full editor or plugin ecosystem.
- **Evidence basis:** Documentation reviewed

**Good**

- Official remote and desktop MCP expose real design context.
- Supported clients can create or modify native canvas content.
- Plugin API and agent skills support structured creative workflows.

**Limits**

- Canvas writes require a Full seat and edit permission.
- It does not connect creative output to media-platform delivery by itself.
- No dedicated official Figma CLI was verified.

**Official links**

- **Product / official page:** [Figma MCP introduction](https://developers.figma.com/docs/figma-mcp-server/)
- **AI interface / endpoint:** [Official remote and desktop MCP](https://developers.figma.com/docs/figma-mcp-server/)
- **MCP:** [Official remote and desktop MCP](https://developers.figma.com/docs/figma-mcp-server/)
- **Plugin:** [Official plugins and agent skills](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/)
- **CLI:** No dedicated official Figma CLI verified
- **API / SDK:** [REST and Plugin APIs](https://developers.figma.com/)
- **Documentation:** [Figma MCP introduction](https://developers.figma.com/docs/figma-mcp-server/)
- **GitHub:** No official repository verified

- **Access:** Supported MCP client and Figma permissions; a Full seat is required for write-to-canvas.
- **Watch:** Dev seats support read-oriented context. Canvas writes require both a Full seat and edit permission.
- **Sources:** [Figma MCP introduction](https://developers.figma.com/docs/figma-mcp-server/) · [Write to canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#creative-production)

## Adobe Firefly Creative Production

**B+ · Test · Reference**

Adobe Run-Workflow MCP can discover, submit and monitor reusable creative workflows for generation, editing, composition and format adaptation.

> **Blocker:** It is not a self-service route for most teams: the enterprise entitlement and reusable workflow design must already exist.

- **Route:** Hosted Run-Workflow MCP.
- **Scope:** Published creative workflows, images, videos and batch jobs.
- **Setup:** Moderate. Requires enterprise entitlement, an MCP client and organisation workflows or templates that the server can discover and run.
- **Human job:** Understand the brief and source assets, create, edit, adapt to placements and export production-ready files.
- **Capabilities:** Read context **Yes** · Create **Yes** · Edit **Yes** · Adapt **Yes** · Export **Yes**
- **Coverage:** Most steps. Can execute and monitor multi-step production workflows, with human brand, legal and final-quality approval.
- **Evidence basis:** Documentation reviewed

**Good**

- Hosted MCP runs real reusable creative workflows.
- Supports generation, editing, composition and format variants.
- Asynchronous monitoring fits large production jobs.

**Limits**

- Enterprise-only access limits practical adoption.
- Workflow design must exist before reliable reuse.
- Human brand and output review remains essential.

**Official links**

- **Product / official page:** [Firefly Creative Production](https://business.adobe.com/products/firefly-business/firefly-creative-production.html)
- **AI interface / endpoint:** [Hosted Run-Workflow MCP](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/run-workflow-mcp-overview.html)
- **MCP:** [Hosted Run-Workflow MCP](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/run-workflow-mcp-overview.html)
- **Plugin:** No separate official agent plugin verified
- **CLI:** No dedicated official CLI verified
- **API / SDK:** [Creative Production Workflow API](https://developer.adobe.com/firefly-services/docs/workflow-builder-api/)
- **Documentation:** [Run-Workflow MCP overview](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/run-workflow-mcp-overview.html)
- **GitHub:** [Firefly Services JavaScript SDK](https://github.com/Firefly-Services/firefly-services-sdk-js)

- **Access:** Firefly Creative Production for Enterprise plus the permissions and published workflows required by the organisation.
- **Watch:** The agent can run what the enterprise workflow layer exposes; brand fidelity and final asset approval still need human review.
- **Sources:** [Run-Workflow MCP overview](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/run-workflow-mcp-overview.html) · [Creative Production Workflow API](https://developer.adobe.com/firefly-services/docs/workflow-builder-api/) · [Firefly Services SDK](https://github.com/Firefly-Services/firefly-services-sdk-js)
- **Last checked:** 5 Sept 2026

[Back to comparison](#creative-production)

## Runway

**A- · Production · Emerging**

Runway offers an official generation MCP, a hosted developer MCP, APIs and SDKs for images, video, audio, editing, upscaling and reusable workflows.

> **Blocker:** The route can make assets, but it cannot decide whether they are on-brand, legally usable or campaign-ready.

- **Route:** Official generation MCP and API.
- **Scope:** Image, video, audio, tasks and workflows.
- **Setup:** Moderate. Use the official local MCP repository or hosted developer route, then configure billing and authentication.
- **Human job:** Understand the brief and source assets, create, edit, adapt to placements and export production-ready files.
- **Capabilities:** Read context **Partial** · Create **Yes** · Edit **Yes** · Adapt **Yes** · Export **Yes**
- **Coverage:** Most steps. Creates and transforms production media across modalities; the brief, brand system, rights review and final QC remain human responsibilities.
- **Evidence basis:** Documentation reviewed

**Good**

- Official MCP, API, SDKs and open GitHub server.
- Creates and edits image, video and audio assets.
- Task APIs and reusable workflows support automation.

**Limits**

- Outputs still need rights and brand review.
- Temporary result URLs require disciplined download.
- Generation cost and model choice need controls.

**Official links**

- **Product / official page:** [Runway](https://runwayml.com/)
- **AI interface / endpoint:** [Official generation and developer MCP routes](https://docs.dev.runwayml.com/guides/mcp/)
- **MCP:** [Official generation and developer MCP routes](https://docs.dev.runwayml.com/guides/mcp/)
- **Plugin:** [Runway agent skills](https://github.com/runwayml/skills)
- **CLI:** No general production CLI verified
- **API / SDK:** [Runway API and SDKs](https://docs.dev.runwayml.com/api/)
- **Documentation:** [Runway MCP guide](https://docs.dev.runwayml.com/guides/mcp/)
- **GitHub:** [Runway API MCP server](https://github.com/runwayml/runway-api-mcp-server)

- **Access:** Runway developer account, billing and either OAuth for the hosted developer MCP or an API key for generation.
- **Watch:** Generated assets require creative and rights review, and temporary output URLs must be downloaded before expiry.
- **Sources:** [Runway MCP guide](https://docs.dev.runwayml.com/guides/mcp/) · [Runway API reference](https://docs.dev.runwayml.com/api/) · [Runway API MCP server](https://github.com/runwayml/runway-api-mcp-server)
- **Last checked:** 5 Sept 2026

[Back to comparison](#creative-production)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
