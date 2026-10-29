# The AI CMS Index

CMS platforms and their AI/LLM workflows. The assessment belongs to the named route, not the whole product.

Catalogue updated: 2026-10-29. Editorial lead: [Léon Houlier](https://github.com/leonhoulier).

All entries: **Documentation reviewed**. No account connection or executed workflow is claimed. [Methodology](../METHODOLOGY.md#cms-companion).

| Platform | Route | Grade | Readiness | Read | Draft | Edit | Publish | Localise |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WordPress.com | Official hosted MCP | B+ | Test | Yes | Yes | Yes | Yes | Depends |
| WordPress MCP Adapter | Official adapter and registered Abilities | B | Test | Depends | Depends | Depends | Depends | Depends |
| Webflow | Official Webflow MCP | B+ | Test | Yes | Yes | Yes | Unverified | Partial |
| Contentful | Official hosted MCP | A- | Production | Yes | Yes | Yes | Yes | Yes |
| Sanity | Official Sanity MCP | A- | Production | Yes | Yes | Yes | Yes | Depends |
| Directus | Official built-in MCP | B+ | Test | Yes | Depends | Yes | Depends | Depends |
| Shopify | Admin GraphQL API, custom integration | B | Test | Unverified | Yes | Unverified | Yes | Unverified |

## WordPress.com

Hosted MCP for posts, pages and supported site operations, including Jetpack-connected sites.

Reviewed: 2026-10-29. Documentation reviewed.

**Route:** Official hosted MCP. **Setup:** Easy. Enable account MCP, connect with OAuth and select tool access; availability varies by plan, host and user permissions.

**Coverage:** Most steps. Documented post and page operations support drafts, updates and publication. Inspect the live tool catalogue for the connected site.

**Boundary:** Account-level tool settings are shared by connected clients. Choosing an OAuth access level can change those settings; updating a published post can go live immediately.

**Strengths**

- Draft creation and post-section editing are documented.
- Existing WordPress roles and tool controls govern access.

**Limits**

- Tool availability varies by site, plan and account settings.
- Shared account-level settings need review before enabling writes.

**Official sources**

- [Official route documentation](https://developer.wordpress.com/docs/mcp/)
- [WordPress.com tool reference](https://developer.wordpress.com/docs/mcp/tools-reference/)

## WordPress MCP Adapter

Official adapter exposes registered WordPress Abilities to an MCP client; capabilities depend on the site implementation.

Reviewed: 2026-10-29. Documentation reviewed.

**Route:** Official adapter and registered Abilities. **Setup:** Hard. Install and configure the adapter, register or supply Abilities, and implement permission callbacks.

**Coverage:** Depends. The adapter connects agents to explicitly exposed Abilities; it is not a bundled, complete editorial toolset.

**Boundary:** Review each exposed Ability and its permission callback. Installing an adapter alone does not establish draft, publish or translation support.

**Strengths**

- Uses a common WordPress Abilities contract.
- The site can define narrowly scoped operations and permission checks.

**Limits**

- Requires technical setup and suitable Abilities.
- Editorial coverage varies by plugin and site configuration.

**Official sources**

- [Official route documentation](https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter/)

## Webflow

Official MCP manages CMS content alongside design, assets and supported site operations.

Reviewed: 2026-10-29. Documentation reviewed.

**Route:** Official Webflow MCP. **Setup:** Moderate. Authorise a workspace and use the appropriate site role; some operations require a connected Designer session.

**Coverage:** Most steps. Manage CMS collections and items, with partial localisation and additional design tools. Scope publication tools to the connected site.

**Boundary:** The documented localisation route can update existing secondary-locale CMS items but cannot create new ones. Permissions and Designer mode constrain some tools.

**Strengths**

- Combines structured content and site-design operations.
- Uses existing site permissions and roles.

**Limits**

- New localised CMS items are not supported through this route.
- Some visual operations require the Designer, and new site creation stays in the dashboard.

**Official sources**

- [Official route documentation](https://developers.webflow.com/mcp/reference/overview)
- [Webflow MCP limitations and localisation](https://developers.webflow.com/mcp/faqs)

## Contentful

Hosted MCP supports content entries, assets, content models, locales and releases.

Reviewed: 2026-10-29. Documentation reviewed.

**Route:** Official hosted MCP. **Setup:** Moderate. Connect with OAuth and configure the MCP app allowlist in each required space and environment.

**Coverage:** Most steps. Create and update entries, publish or unpublish content, manage locales and validate or schedule releases.

**Boundary:** The hosted route combines user permissions with environment tool allowlists. Local PAT-based MCP has different, broader access boundaries. Frontend deployment is separate.

**Strengths**

- Explicit entry and release publication tools.
- Per-environment tool gating supplements user permissions.

**Limits**

- Each environment needs MCP app configuration.
- Local-server defaults do not restrict a PAT to one environment.

**Official sources**

- [Official route documentation](https://www.contentful.com/developers/docs/mcp/model-context-protocol-mcp-server/)

## Sanity

Hosted MCP queries content, creates drafts, patches documents and manages publication and release versions.

Reviewed: 2026-10-29. Documentation reviewed.

**Route:** Official Sanity MCP. **Setup:** Moderate. Connect with OAuth or a role-scoped API token and select the intended project and dataset.

**Coverage:** Most steps. Query with GROQ, create or edit structured content and publish drafts. Release versions require their own document IDs.

**Boundary:** Sanity Context MCP is a separate read-only route. Localisation depends on the schema. Live-edit document types may bypass drafts; release edits must target the correct version.

**Strengths**

- Schema-aware document operations and explicit publishing tools.
- Supports draft and release-version workflows.

**Limits**

- Localisation depends on project schema and conventions.
- Wrong draft or release IDs can target a different editorial state.

**Official sources**

- [Official route documentation](https://www.sanity.io/docs/ai/mcp-server)
- [Read-only Sanity Context MCP](https://www.sanity.io/docs/ai/sanity-context-mcp)

## Directus

Built-in MCP connects assistants to content and data operations under existing Directus permissions.

Reviewed: 2026-10-29. Documentation reviewed.

**Route:** Official built-in MCP. **Setup:** Moderate. Use Directus 11.12 or later, enable MCP and create a dedicated user with suitable permissions and an access token.

**Coverage:** Depends. Create and edit content using the configured collections, roles and workflows. Publication is a project-specific status or workflow, not a universal publish button.

**Boundary:** Content exposure, publication status and language fields depend on the project schema. Review the dedicated role and deletion settings before writes.

**Strengths**

- Reuses existing Directus permissions.
- Content operations do not require a separate middleware layer.

**Limits**

- Publication and localisation need project-specific modelling.
- A broad service role can expose more data than an editorial assistant needs.

**Official sources**

- [Official route documentation](https://directus.com/docs/guides/ai/mcp)

## Shopify

The Admin GraphQL API supports article and page creation and publication through a custom agent integration.

Reviewed: 2026-10-29. Documentation reviewed.

**Route:** Admin GraphQL API, custom integration. **Setup:** Hard. Build an authenticated app integration with the necessary store content scopes and explicit write controls.

**Coverage:** Some steps. Create articles and pages with publication settings. This review does not establish a turnkey editorial MCP or general store-management coverage.

**Boundary:** Shopify’s developer AI toolkit supplies development context. Its existence does not establish authenticated content writes; the evaluated route here is the Admin API.

**Strengths**

- Documented article and page creation with publication settings.
- Explicit API scopes provide a configurable access boundary.

**Limits**

- Requires an app and custom integration work.
- Editing, deletion and localisation are not verified by the creation endpoints assessed here.

**Official sources**

- [Official route documentation](https://shopify.dev/docs/api/admin-graphql/2026-10/mutations/articleCreate)
- [Page creation and publication](https://shopify.dev/docs/api/admin-graphql/2026-10/mutations/pageCreate)
- [Developer AI toolkit](https://shopify.dev/docs/apps/build/devmcp)
