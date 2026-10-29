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
| WooCommerce | Official Abilities and MCP Adapter, developer preview | B | Test | Yes | Unverified | Yes | Unverified | Depends |
| BigCommerce | Pages V3 and Blog Content APIs | B | Test | Yes | Partial | Yes | Partial | Depends |
| Adobe Commerce / Magento | CMS REST API, PaaS or on-premises | B | Test | Yes | Partial | Yes | Partial | Depends |

## WordPress.com

Hosted MCP for posts, pages and supported site operations, including Jetpack-connected sites.

Reviewed: 2026-10-29. Documentation reviewed.

**Day to day**

- Create a draft post and edit supported page content.
- Publish approved posts through the tools enabled for the site.

**Route:** Official hosted MCP. **Setup:** Easy. Enable account MCP, connect with OAuth and select tool access; availability varies by plan, host and user permissions.

**Coverage:** Most steps. Documented post and page operations support drafts, updates and publication. Inspect the live tool catalogue for the connected site.

**Boundary:** Review changes before sending them: edits to a published post can go live immediately. Account tool settings are shared across connected assistants.

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

**Day to day**

- Ask an assistant to run the Abilities registered on your site.
- Expose a specific editorial task once its code and permissions exist.

**Route:** Official adapter and registered Abilities. **Setup:** Hard. A developer must install the adapter and supply the WordPress Abilities you need. Each Ability needs code, an input definition and a permission check.

**Coverage:** Depends. The adapter connects agents to explicitly exposed Abilities; it is not a bundled, complete editorial toolset.

**Boundary:** Installing the adapter does not add editorial tools by itself. A developer must supply and check each task, including its permissions.

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

**Day to day**

- Update CMS items and supported page content.
- Edit existing secondary-language items where the tool supports them.

**Route:** Official Webflow MCP. **Setup:** Moderate. Authorise the right workspace and site role. Some design operations also need the Designer and its bridge app open.

**Coverage:** Most steps. Manage CMS collections and items, with partial localisation and additional design tools. Scope publication tools to the connected site.

**Boundary:** New items in secondary languages still need another route. Some actions also require the right site role or an open Designer session.

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

**Day to day**

- Draft and edit entries, assets and locale content.
- Publish approved content or organise it into a release.

**Route:** Official hosted MCP. **Setup:** Moderate. An administrator enables the required tools for each space and environment. You then connect the assistant with your own Contentful account.

**Coverage:** Most steps. Create and update entries, publish or unpublish content, manage locales and validate or schedule releases.

**Boundary:** Check the user role and the tools enabled for the environment. Publishing in Contentful does not deploy your website; a local token-based connection has different access rules.

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

**Day to day**

- Find and edit structured content with its schema in view.
- Publish drafts or prepare content in a release version.

**Route:** Official Sanity MCP. **Setup:** Moderate. Connect with your Sanity account or a scoped API token. Select the correct project and dataset, and check the role’s write permissions.

**Coverage:** Most steps. Query with GROQ, create or edit structured content and publish drafts. Release versions require their own document IDs.

**Boundary:** Check the schema, language setup and draft or release version before editing. Some document types skip drafts. Context MCP is a separate, read-only connection.

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

**Day to day**

- Find and edit content in configured collections.
- Use the publication and language fields your project defines.

**Route:** Official built-in MCP. **Setup:** Moderate. Use Directus 11.12 or later, enable MCP and create a dedicated user with suitable permissions and an access token.

**Coverage:** Depends. Create and edit content using the configured collections, roles and workflows. Publication is a project-specific status or workflow, not a universal publish button.

**Boundary:** Your project defines which fields control publication and languages. Check the role’s edit and delete permissions before changing content.

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

**Day to day**

- Create a blog article or information page.
- Set its publication status or schedule when creating it.

**Route:** Admin GraphQL API, custom integration. **Setup:** Hard. A developer must create an authenticated app, grant content permissions and build the assistant’s API connection. The developer toolkit alone does not write to your store.

**Coverage:** Some steps. Create articles and pages with publication settings. This review does not establish a turnkey editorial MCP or general store-management coverage.

**Boundary:** Build an authenticated Admin API connection first. Shopify’s developer AI tools help with development; they do not by themselves edit your store.

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

## WooCommerce

Official product Abilities let an assistant query and change supported store content through the WordPress MCP Adapter.

Reviewed: 2026-10-29. Documentation reviewed.

**Day to day**

- Find products for a content review.
- Create or update the product fields exposed by the store’s Abilities.

**Route:** Official Abilities and MCP Adapter, developer preview. **Setup:** Moderate. A site administrator installs the MCP Adapter and creates a limited WordPress application password. Check the installed WooCommerce version and its Abilities before connecting.

**Coverage:** Some steps. Product query, creation, updates and deletion are documented. Editorial fields depend on the exposed Ability schemas.

**Boundary:** The connection is a developer preview. Version 11.3 changes older connections; check support for extension fields and languages separately.

**Strengths**

- Official product operations use WordPress permission checks.
- The adapter can expose supported store tasks directly to an assistant.

**Limits**

- The integration remains developer preview.
- Version changes, extension fields and publication behaviour need a store-level test.

**Official sources**

- [WooCommerce MCP integration](https://developer.woocommerce.com/docs/features/mcp/)
- [Version 11.3 migration advisory](https://developer.woocommerce.com/2026/10/21/woocommerce-11-3-mcp/)
- [Version 11.3 beta status](https://developer.woocommerce.com/2026/10/26/woocommerce-11-3-pre-release/)

## BigCommerce

Content APIs manage web pages and blog posts through a custom integration.

Reviewed: 2026-10-29. Documentation reviewed.

**Day to day**

- Update information pages and their metadata.
- Create, edit and publish blog posts.

**Route:** Pages V3 and Blog Content APIs. **Setup:** Hard. A developer must create a store API account, grant content permissions and build the connection to the assistant.

**Coverage:** Some steps. Read, create, edit and delete pages or blog posts. Blog posts have a publication flag; page visibility is not a complete editorial approval workflow.

**Boundary:** Review changes before writing, then check the storefront. Your integration must handle each channel’s content and language conventions.

**Strengths**

- Documented page and blog operations cover recurring content edits.
- Blog publication is explicit in the API.

**Limits**

- Requires a custom authenticated integration.
- Page visibility and blog publication have different semantics.

**Official sources**

- [Pages V3](https://docs.bigcommerce.com/developer/api-reference/rest/admin/content/pages)
- [Official blog Content API schema](https://github.com/bigcommerce/api-specs/blob/main/reference/store_content.v2.yml)

## Adobe Commerce / Magento

The traditional Commerce REST API manages CMS pages and blocks through a custom integration.

Reviewed: 2026-10-29. Documentation reviewed.

**Day to day**

- Update CMS page copy and reusable content blocks.
- Prepare page changes and set the page’s active state.

**Route:** CMS REST API, PaaS or on-premises. **Setup:** Hard. A developer must configure an integration with CMS permissions and connect it to the assistant. The team must confirm the store’s version, deployment type and content conventions.

**Coverage:** Some steps. Read, create, update and delete CMS pages and blocks. Page content and activation are separate fields; storefront delivery still needs a check.

**Boundary:** Confirm your Commerce version and hosting type. This assessment covers the traditional CMS API, not visual Page Builder editing, a complete approval process or SaaS feature parity.

**Strengths**

- Explicit CMS page and block operations.
- CMS access is controlled through integration permissions.

**Limits**

- Requires custom engineering and deployment-specific checks.
- An API write does not prove the storefront or Page Builder layout is correct.

**Official sources**

- [Adobe Commerce REST API overview](https://developer.adobe.com/commerce/webapi/rest/)
- [CMS API routes](https://github.com/magento/magento2/blob/2.4-develop/app/code/Magento/Cms/etc/webapi.xml)
- [CMS page content and activation fields](https://github.com/magento/magento2/blob/2.4-develop/app/code/Magento/Cms/Api/Data/PageInterface.php)
