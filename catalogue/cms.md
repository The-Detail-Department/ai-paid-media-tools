# The AI CMS Index

CMS platforms and their AI/LLM workflows. The assessment belongs to the named route, not the whole product.

Catalogue updated: 2026-11-16. Editorial lead: [Léon Houlier](https://github.com/leonhoulier).

All entries: **Documentation reviewed**. No account connection or executed workflow is claimed. [Methodology](../METHODOLOGY.md#cms-companion).

| Platform | Route | Grade | Readiness | Read | Create | Edit | Delete | Publish |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WordPress.com | WordPress.com ChatGPT plugin / Claude connector | A | Production | Yes | Yes | Yes | Yes | Yes |
| WordPress MCP Adapter | WordPress MCP Adapter with exposed abilities | C | Test | Depends | Depends | Depends | Depends | Depends |
| Webflow | Webflow ChatGPT app / Claude connector | A- | Production | Yes | Yes | Yes | Yes | Yes |
| Contentful | Contentful official hosted MCP | A- | Production | Yes | Yes | Yes | Yes | Yes |
| Sanity | Sanity official hosted MCP | A- | Production | Yes | Yes | Yes | Partial | Yes |
| Directus | Built-in MCP on your Directus instance | B+ | Test | Yes | Yes | Yes | Partial | Depends |
| Shopify | Shopify AI Toolkit + authenticated local CLI | B | Test | Yes | Yes | Yes | Yes | Yes |
| WooCommerce | WooCommerce abilities + WordPress MCP Adapter | B | Test | Yes | Yes | Yes | Yes | Unverified |
| BigCommerce | BigCommerce Store Management MCP, early access | B- | Test | Yes | Partial | Yes | No | No |
| Adobe Commerce / Magento | Adobe Commerce/Magento CMS REST API, custom integration | C | Test | Yes | Yes | Yes | Yes | Partial |

## WordPress.com

Read posts, pages, blocks, settings and site statistics. Draft, edit, publish and trash posts and pages.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read posts, pages, blocks, settings and site statistics.

**Write:** Draft, edit, publish and trash posts and pages.

**Connection type:** native-app

- **read:** Read posts, pages, blocks, settings and site statistics.
- **create:** Posts and pages default to draft.
- **modify:** Whole content or individual blocks, including live content.
- **delete:** Posts/pages move to trash; restoration window is 30 days.
- **publish:** Post/page status changes publish content.

**Day to day**

- Read posts, pages, blocks, settings and site statistics.
- Draft, edit, publish and trash posts and pages.

**Route:** WordPress.com ChatGPT plugin / Claude connector. **Setup:** Easy. Enable MCP, connect the ChatGPT plugin or Claude connector and approve site permissions. [Connection documentation](https://developer.wordpress.com/docs/mcp/).

**Coverage:** Most steps. Draft, edit, publish and trash posts and pages. Live edits can apply immediately. Free-site access ends 30 November 2026.

**Boundary:** Live edits can apply immediately. Free-site access ends 30 November 2026.

**Strengths**

- Read posts, pages, blocks, settings and site statistics.
- Draft, edit, publish and trash posts and pages.

**Limits**

- Live edits can apply immediately. Free-site access ends 30 November 2026.

**Official sources**

- [Connection and tool documentation](https://developer.wordpress.com/docs/mcp/)
- [Additional official documentation](https://developer.wordpress.com/docs/mcp/tools-reference/)
- [Additional official documentation](https://wordpress.com/support/mcp/)

## WordPress MCP Adapter

Discover and run explicitly exposed WordPress abilities. Editorial actions depend on additional installed abilities.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Discover and run explicitly exposed WordPress abilities.

**Write:** Editorial actions depend on additional installed abilities.

**Connection type:** self-managed

- **read:** Discover and run explicitly exposed WordPress abilities.
- **create:** Requires an exposed creation ability.
- **modify:** Requires an exposed editing ability.
- **delete:** Requires an exposed deletion ability.
- **publish:** Requires an exposed publication ability.

**Day to day**

- Discover and run explicitly exposed WordPress abilities.
- Editorial actions depend on additional installed abilities.

**Route:** WordPress MCP Adapter with exposed abilities. **Setup:** Hard. Install the adapter, expose abilities and configure authenticated access. [Connection documentation](https://github.com/WordPress/mcp-adapter).

**Coverage:** Depends. Editorial actions depend on additional installed abilities. Installing the adapter alone does not supply a complete editorial workflow.

**Boundary:** Installing the adapter alone does not supply a complete editorial workflow.

**Strengths**

- Discover and run explicitly exposed WordPress abilities.
- Editorial actions depend on additional installed abilities.

**Limits**

- Installing the adapter alone does not supply a complete editorial workflow.

**Official sources**

- [Vendor source code](https://github.com/WordPress/mcp-adapter)
- [Vendor source code](https://raw.githubusercontent.com/WordPress/mcp-adapter/trunk/README.md)
- [Additional official documentation](https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter/)
- [Additional official documentation](https://wordpress.org/plugins/mcp-adapter/)

## Webflow

Read collections, schemas, CMS items and site data. Draft, edit, publish, unpublish and delete CMS items.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read collections, schemas, CMS items and site data.

**Write:** Draft, edit, publish, unpublish and delete CMS items.

**Connection type:** native-app

- **read:** Read collections, schemas, CMS items and site data.
- **create:** CMS items, staged as drafts.
- **modify:** Draft CMS updates and supported design properties.
- **delete:** CMS items and collection fields.
- **publish:** Explicit CMS item publish and unpublish.

**Day to day**

- Read collections, schemas, CMS items and site data.
- Draft, edit, publish, unpublish and delete CMS items.

**Route:** Webflow ChatGPT app / Claude connector. **Setup:** Easy. Use the ChatGPT app or Claude connector and authorise the site with OAuth. [Connection documentation](https://developers.webflow.com/mcp/installing/chatgpt).

**Coverage:** Most steps. Draft, edit, publish, unpublish and delete CMS items. New localised items and site projects remain unavailable; some visual tasks need Designer open.

**Boundary:** New localised items and site projects remain unavailable; some visual tasks need Designer open.

**Strengths**

- Read collections, schemas, CMS items and site data.
- Draft, edit, publish, unpublish and delete CMS items.

**Limits**

- New localised items and site projects remain unavailable; some visual tasks need Designer open.

**Official sources**

- [Connection and tool documentation](https://developers.webflow.com/mcp/installing/chatgpt)
- [Additional official documentation](https://developers.webflow.com/mcp/reference/getting-started)
- [Additional official documentation](https://developers.webflow.com/mcp/tools/data-tools)
- [Additional official documentation](https://developers.webflow.com/mcp/reference/overview)

## Contentful

Read entries, models, assets, locales, references and releases. Manage content, publish assets and schedule supported releases.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read entries, models, assets, locales, references and releases.

**Write:** Manage content, publish assets and schedule supported releases.

**Connection type:** hosted-mcp

- **read:** Read entries, models, assets, locales, references and releases.
- **create:** Entries and assets before publication.
- **modify:** Entries, assets, models and locales.
- **delete:** Entries, assets, models and locales.
- **publish:** Content publication, unpublication and supported scheduled releases.

**Day to day**

- Read entries, models, assets, locales, references and releases.
- Manage content, publish assets and schedule supported releases.

**Route:** Contentful official hosted MCP. **Setup:** Moderate. Configure the MCP app per environment, then connect with OAuth. [Connection documentation](https://www.contentful.com/developers/docs/mcp/model-context-protocol-mcp-server/).

**Coverage:** Most steps. Manage content, publish assets and schedule supported releases. Configure each environment; CMS publication does not verify the separate live frontend.

**Boundary:** Configure each environment; CMS publication does not verify the separate live frontend.

**Strengths**

- Read entries, models, assets, locales, references and releases.
- Manage content, publish assets and schedule supported releases.

**Limits**

- Configure each environment; CMS publication does not verify the separate live frontend.

**Official sources**

- [Connection and tool documentation](https://www.contentful.com/developers/docs/mcp/model-context-protocol-mcp-server/)

## Sanity

Query documents, schemas, projects and datasets. Create and edit drafts; publish individual documents.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Query documents, schemas, projects and datasets.

**Write:** Create and edit drafts; publish individual documents.

**Connection type:** hosted-mcp

- **read:** Query documents, schemas, projects and datasets.
- **create:** Drafts or release versions; liveEdit types are immediately published.
- **modify:** Patches to drafts and release versions.
- **delete:** Discard drafts/release versions; published-document deletion unverified.
- **publish:** Individual drafts and unpublish; no release scheduling or publication.

**Day to day**

- Query documents, schemas, projects and datasets.
- Create and edit drafts; publish individual documents.

**Route:** Sanity official hosted MCP. **Setup:** Moderate. Connect the hosted MCP and authorise the relevant account. [Connection documentation](https://www.sanity.io/docs/ai/mcp-server).

**Coverage:** Most steps. Create and edit drafts; publish individual documents. Release scheduling/publication stays outside MCP; liveEdit types bypass drafts.

**Boundary:** Release scheduling/publication stays outside MCP; liveEdit types bypass drafts.

**Strengths**

- Query documents, schemas, projects and datasets.
- Create and edit drafts; publish individual documents.

**Limits**

- Release scheduling/publication stays outside MCP; liveEdit types bypass drafts.

**Official sources**

- [Connection and tool documentation](https://www.sanity.io/docs/ai/mcp-server)
- [Additional official documentation](https://www.sanity.io/docs/context/mcp-reference)

## Directus

Read items, schemas, relationships, files and automation context. Manage items, files, schemas and configured workflows.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read items, schemas, relationships, files and automation context.

**Write:** Manage items, files, schemas and configured workflows.

**Connection type:** self-managed

- **read:** Read items, schemas, relationships, files and automation context.
- **create:** Items using the project status conventions.
- **modify:** Items, files, schemas and automation.
- **delete:** Role permission plus Allow Deletes; off by default.
- **publish:** Project-specific status fields and workflows.

**Day to day**

- Read items, schemas, relationships, files and automation context.
- Manage items, files, schemas and configured workflows.

**Route:** Built-in MCP on your Directus instance. **Setup:** Moderate. Enable MCP and OAuth on the existing instance; self-hosting needs configuration and restart. [Connection documentation](https://directus.com/docs/guides/ai/mcp).

**Coverage:** Most steps. Manage items, files, schemas and configured workflows. Draft/publish semantics follow the project schema; self-hosted OAuth needs server configuration.

**Boundary:** Draft/publish semantics follow the project schema; self-hosted OAuth needs server configuration.

**Strengths**

- Read items, schemas, relationships, files and automation context.
- Manage items, files, schemas and configured workflows.

**Limits**

- Draft/publish semantics follow the project schema; self-hosted OAuth needs server configuration.

**Official sources**

- [Connection and tool documentation](https://directus.com/docs/guides/ai/mcp)
- [Additional official documentation](https://directus.com/docs/guides/ai/mcp/installation)
- [Additional official documentation](https://directus.com/docs/guides/ai/mcp/oauth)
- [Additional official documentation](https://directus.com/docs/guides/ai/mcp/tools)

## Shopify

Query store pages and other authorised Admin GraphQL data. Create, edit, publish and delete supported pages and articles.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Query store pages and other authorised Admin GraphQL data.

**Write:** Create, edit, publish and delete supported pages and articles.

**Connection type:** self-managed

- **read:** Query store pages and other authorised Admin GraphQL data.
- **create:** Pages and articles with publication controls.
- **modify:** Page content, handles, templates and publication settings.
- **delete:** Permanent pageDelete and articleDelete mutations.
- **publish:** Page status and immediate/scheduled article publication.

**Day to day**

- Query store pages and other authorised Admin GraphQL data.
- Create, edit, publish and delete supported pages and articles.

**Route:** Shopify AI Toolkit + authenticated local CLI. **Setup:** Hard. Install AI Toolkit and Shopify CLI, authenticate the store and explicitly allow mutations. [Connection documentation](https://shopify.dev/docs/apps/build/ai-toolkit).

**Coverage:** Some steps. Create, edit, publish and delete supported pages and articles. A coding-agent plugin still needs local CLI/runtime and scoped store access.

**Boundary:** A coding-agent plugin still needs local CLI/runtime and scoped store access.

**Strengths**

- Query store pages and other authorised Admin GraphQL data.
- Create, edit, publish and delete supported pages and articles.

**Limits**

- A coding-agent plugin still needs local CLI/runtime and scoped store access.

**Official sources**

- [Connection and tool documentation](https://shopify.dev/docs/apps/build/ai-toolkit)
- [Additional official documentation](https://shopify.dev/docs/api/shopify-cli/store/store-auth)
- [Additional official documentation](https://shopify.dev/docs/api/shopify-cli/store/store-execute)
- [Additional official documentation](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages)
- [Additional official documentation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate)
- [Additional official documentation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate)
- [Additional official documentation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageDelete)
- [Additional official documentation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate)
- [Additional official documentation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleDelete)

## WooCommerce

Read products, orders and order notes. Create, update and delete products; perform selected order actions.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read products, orders and order notes.

**Write:** Create, update and delete products; perform selected order actions.

**Connection type:** self-managed

- **read:** Read products, orders and order notes.
- **create:** Products; draft defaults not established.
- **modify:** Products plus selected order status and note operations.
- **delete:** Purpose-built product deletion ability.
- **publish:** Not established by the reviewed sources.

**Day to day**

- Read products, orders and order notes.
- Create, update and delete products; perform selected order actions.

**Route:** WooCommerce abilities + WordPress MCP Adapter. **Setup:** Hard. Install MCP Adapter separately; use a WordPress application password and expose the required abilities. [Connection documentation](https://developer.woocommerce.com/docs/features/mcp/).

**Coverage:** Some steps. Create, update and delete products; perform selected order actions. Developer preview. Version 11.3 removes the old endpoint/authentication; draft and publish semantics need checking.

**Boundary:** Developer preview. Version 11.3 removes the old endpoint/authentication; draft and publish semantics need checking.

**Strengths**

- Read products, orders and order notes.
- Create, update and delete products; perform selected order actions.

**Limits**

- Developer preview. Version 11.3 removes the old endpoint/authentication; draft and publish semantics need checking.

**Official sources**

- [Connection and tool documentation](https://developer.woocommerce.com/docs/features/mcp/)
- [Additional official documentation](https://developer.woocommerce.com/2026/10/21/woocommerce-11-3-mcp/)

## BigCommerce

Read product content and selected commerce data. Create hidden products and edit product copy and SEO fields.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read product content and selected commerce data.

**Write:** Create hidden products and edit product copy and SEO fields.

**Connection type:** hosted-mcp

- **read:** Read product content and selected commerce data.
- **create:** Hidden products; promotions start disabled.
- **modify:** Product copy, SEO and selected commerce fields.
- **delete:** No deletion tool in the published management inventory.
- **publish:** Hidden products require publication elsewhere.

**Day to day**

- Read product content and selected commerce data.
- Create hidden products and edit product copy and SEO fields.

**Route:** BigCommerce Store Management MCP, early access. **Setup:** Moderate. Store owner enables beta; connect with OAuth and grant explicit per-store scopes. [Connection documentation](https://docs.bigcommerce.com/developer/api-reference/mcp/store-management).

**Coverage:** Some steps. Create hidden products and edit product copy and SEO fields. Early-access merchant MCP, not shopper MCP; no page/blog tools or product publication.

**Boundary:** Early-access merchant MCP, not shopper MCP; no page/blog tools or product publication.

**Strengths**

- Read product content and selected commerce data.
- Create hidden products and edit product copy and SEO fields.

**Limits**

- Early-access merchant MCP, not shopper MCP; no page/blog tools or product publication.

**Official sources**

- [Connection and tool documentation](https://docs.bigcommerce.com/developer/api-reference/mcp/overview)
- [Additional official documentation](https://docs.bigcommerce.com/developer/api-reference/mcp/store-management)
- [Additional official documentation](https://docs.bigcommerce.com/developer/api-reference/rest/admin/content/pages)

## Adobe Commerce / Magento

Read and search CMS pages and blocks through REST APIs. Create, edit and delete pages/blocks; control page activation.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read and search CMS pages and blocks through REST APIs.

**Write:** Create, edit and delete pages/blocks; control page activation.

**Connection type:** custom-api

- **read:** Read and search CMS pages and blocks through REST APIs.
- **create:** CMS pages and blocks, including inactive content.
- **modify:** CMS pages and blocks.
- **delete:** CMS pages and blocks with the required permissions.
- **publish:** is_active changes visibility; no complete editorial approval flow.

**Day to day**

- Read and search CMS pages and blocks through REST APIs.
- Create, edit and delete pages/blocks; control page activation.

**Route:** Adobe Commerce/Magento CMS REST API, custom integration. **Setup:** Hard. Build an authenticated API integration and maintain it. [Connection documentation](https://developer.adobe.com/commerce/webapi/rest/).

**Coverage:** Some steps. Create, edit and delete pages/blocks; control page activation. Traditional Commerce/Magento API scope only; custom integration and visual checks remain.

**Boundary:** Traditional Commerce/Magento API scope only; custom integration and visual checks remain.

**Strengths**

- Read and search CMS pages and blocks through REST APIs.
- Create, edit and delete pages/blocks; control page activation.

**Limits**

- Traditional Commerce/Magento API scope only; custom integration and visual checks remain.

**Official sources**

- [Connection and tool documentation](https://developer.adobe.com/commerce/webapi/rest/)
- [Vendor source code](https://raw.githubusercontent.com/magento/magento2/2.4-develop/app/code/Magento/Cms/etc/webapi.xml)
- [Vendor source code](https://raw.githubusercontent.com/magento/magento2/2.4-develop/app/code/Magento/Cms/Api/Data/PageInterface.php)
