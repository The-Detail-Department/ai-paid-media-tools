# Creative and images

Creative-production systems assessed for usable context, native creation and editing depth.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics and measurement](analytics-measurement.md) · [Creative and images](creative-images.md) · [Data and research](data-research.md) · [Automation and workflow](automation-workflow.md) · [Modelling and experimentation](modelling-experimentation.md)

| Tool | Grade | Readiness | Setup | Read | Create | Modify | Delete | Coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Canva](#canva) | **B+** | Production | Easy | Yes | Yes | Partial | Partial | Partial |
| [Figma](#figma) | **B+** | Production | Easy | Yes | Partial | Partial | Partial | Partial |

## Canva

**B+ · Production**

Canva's remote MCP supports design creation and editing, assets, brand resources, search, export and collaboration.

> **Blocker:** The Apps CLI is for building Canva apps, not a general daily creative-production CLI.

- **Route:** Official remote MCP.
- **Scope:** Designs, assets and selected content workflows.
- **Setup:** Easy. Connect and authorise an individual Canva account. App-development workflows have separate requirements.
- **Controls:** Read **Yes** · Create **Yes** · Modify **Partial** · Delete **Partial**
- **Coverage:** Partial. Useful design creation and editing, without full parity with Canva's manual editor and app ecosystem.

**Good**

- Official MCP supports design creation, editing, assets and export.
- Remote OAuth makes it accessible to common agent clients.
- Apps CLI and Connect APIs support deeper product integration.

**Limits**

- The Apps CLI is not a daily creative-production CLI.
- Brand and format governance still need human review.
- It does not validate media-platform setup or campaign delivery.

**Interfaces**

- **MCP:** [Official remote MCP](https://www.canva.dev/docs/mcp/)
- **Plugin:** AI Connector uses MCP; no separate plugin counted
- **CLI:** [Canva Apps CLI](https://www.canva.dev/docs/apps/canva-cli/)
- **API / SDK:** [Apps SDK and Connect APIs](https://www.canva.dev/docs/)

- **Access:** A Canva account and individual OAuth authorisation; app-development features have separate requirements.
- **Commercial:** Retired. [Affiliate programme sunset](https://www.canva.com/partners/). The former affiliate programme is no longer the current route. Canva now promotes partner and creator programmes.
- **Watch:** The Apps CLI builds Canva apps. It is not a general command-line interface for day-to-day creative production.
- **Sources:** [Canva MCP documentation](https://www.canva.dev/docs/mcp/) · [Canva CLI](https://www.canva.dev/docs/apps/canva-cli/)
- **Verified:** 5 Sept 2026

[Back to comparison](#creative-and-images)

## Figma

**B+ · Production**

Figma's remote MCP can retrieve design context and, for supported clients and seats, create or modify native canvas content.

> **Blocker:** A connected agent still cannot rely on every manual design operation, and write access depends on seat type and file permission.

- **Route:** Official remote and desktop MCP.
- **Scope:** Design files, components, variables and canvas objects.
- **Setup:** Easy. Connect a supported client and authorise Figma. Canvas writes require a Full seat and edit permission.
- **Controls:** Read **Yes** · Create **Partial** · Modify **Partial** · Delete **Partial**
- **Coverage:** Partial. Excellent design context and code handoff. Write-to-canvas is useful but does not reproduce the full editor or plugin ecosystem.

**Good**

- Official remote and desktop MCP expose real design context.
- Supported clients can create or modify native canvas content.
- Plugin API and agent skills support structured creative workflows.

**Limits**

- Canvas writes require a Full seat and edit permission.
- It does not connect creative output to media-platform delivery by itself.
- No dedicated official Figma CLI was verified.

**Interfaces**

- **MCP:** [Official remote and desktop MCP](https://developers.figma.com/docs/figma-mcp-server/)
- **Plugin:** [Official plugins and agent skills](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/)
- **CLI:** No dedicated official Figma CLI verified
- **API / SDK:** [REST and Plugin APIs](https://developers.figma.com/)

- **Access:** Supported MCP client and Figma permissions; a Full seat is required for write-to-canvas.
- **Commercial:** Retired. [Affiliate programme deprecated](https://www.figma.com/affiliate-program/). New affiliate applications are closed. A separate Service Partner Program remains available.
- **Watch:** Dev seats support read-oriented context. Canvas writes require both a Full seat and edit permission.
- **Sources:** [Figma MCP introduction](https://developers.figma.com/docs/figma-mcp-server/) · [Write to canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/)
- **Verified:** 5 Sept 2026

[Back to comparison](#creative-and-images)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
