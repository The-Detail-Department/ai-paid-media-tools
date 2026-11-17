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
| WooCommerce | WooCommerce 11.3 abilities + WordPress MCP Adapter | B | Test | Yes | Yes | Yes | Yes | Yes |
| BigCommerce | BigCommerce Store Management MCP, early access | B- | Test | Yes | Partial | Yes | No | No |
| Adobe Commerce / Magento | Adobe Commerce/Magento CMS REST API, custom integration | C | Test | Yes | Yes | Yes | Yes | Partial |

## WordPress.com

Read posts, pages, blocks, settings and site statistics. Draft, edit, publish and trash posts and pages.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read posts, pages, blocks, settings and site statistics.

**Write:** Draft, edit, publish and trash posts and pages.

**Connection type:** native-app

**Connection status:** official · generally-available. Official ChatGPT plugin and Claude connector. Paid plans; temporary free access ends 30 November 2026.

- **read:** Read posts, pages, blocks, settings and site statistics.
- **create:** Posts and pages default to draft.
- **modify:** Whole content or individual blocks, including live content.
- **delete:** Posts/pages move to trash; restoration window is 30 days.
- **publish:** Post/page status changes publish content.

**Day to day**

- Read posts, pages, blocks, settings and site statistics.
- Draft, edit, publish and trash posts and pages.

**Route:** WordPress.com ChatGPT plugin / Claude connector. **Setup:** Easy. Enable MCP, connect the ChatGPT plugin or Claude connector and approve site permissions. [Connect WordPress.com](https://developer.wordpress.com/docs/mcp/).

**Coverage:** Most steps. Draft, edit, publish and trash posts and pages. Live edits can apply immediately. Free-site MCP access ends 30 November 2026.

**Boundary:** Live edits can apply immediately. Free-site MCP access ends 30 November 2026.

**Strengths**

- Read posts, pages, blocks, settings and site statistics.
- Draft, edit, publish and trash posts and pages.

**Limits**

- Live edits can apply immediately. Free-site MCP access ends 30 November 2026.

**Official sources**

- [WordPress.com connection guide](https://developer.wordpress.com/docs/mcp/)
- [Content authoring tools](https://developer.wordpress.com/docs/mcp/tools-reference/)
- [Plans and account permissions](https://wordpress.com/support/mcp/)

## WordPress MCP Adapter

Discover and run explicitly exposed WordPress abilities. Editorial actions depend on additional installed abilities.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Discover and run explicitly exposed WordPress abilities.

**Write:** Editorial actions depend on additional installed abilities.

**Connection type:** self-managed

**Connection status:** official · generally-available. Official installable adapter. Content actions require separately registered and exposed abilities.

- **read:** Only abilities explicitly exposed by the site; installed core abilities do not guarantee post reading.
- **create:** Requires an exposed creation ability.
- **modify:** Requires an exposed editing ability.
- **delete:** Requires an exposed deletion ability.
- **publish:** Requires an exposed publication ability.

**Day to day**

- Discover and run explicitly exposed WordPress abilities.
- Editorial actions depend on additional installed abilities.

**Route:** WordPress MCP Adapter with exposed abilities. **Setup:** Hard. Install the adapter, register or install the abilities you need, then configure authenticated access. [Install the adapter](https://github.com/WordPress/mcp-adapter).

**Coverage:** Depends. Editorial actions depend on additional installed abilities. Installing the adapter alone does not supply a complete editorial workflow.

**Boundary:** Installing the adapter alone does not supply a complete editorial workflow.

**Strengths**

- Official adapter with HTTP and local connections.
- Per-ability permissions and explicit tool exposure.

**Limits**

- Installing the adapter alone does not supply a complete editorial workflow.

**Official sources**

- [Official adapter repository](https://github.com/WordPress/mcp-adapter)
- [Ability exposure and transports](https://raw.githubusercontent.com/WordPress/mcp-adapter/trunk/README.md)
- [WordPress adapter introduction](https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter/)
- [Install the official adapter](https://wordpress.org/plugins/mcp-adapter/)

## Webflow

Read collections, schemas, CMS items and site data. Draft, edit, publish, unpublish and delete CMS items.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read collections, schemas, CMS items and site data.

**Write:** Draft, edit, publish, unpublish and delete CMS items.

**Connection type:** native-app

**Connection status:** official · generally-available. Official ChatGPT app and Claude connector. Existing site and OAuth permissions required.

- **read:** Read collections, schemas, CMS items and site data.
- **create:** CMS items, staged as drafts.
- **modify:** Draft CMS updates and supported design properties.
- **delete:** CMS items and collection fields.
- **publish:** Explicit CMS item publish and unpublish.

**Day to day**

- Read collections, schemas, CMS items and site data.
- Draft, edit, publish, unpublish and delete CMS items.

**Route:** Webflow ChatGPT app / Claude connector. **Setup:** Easy. Use the ChatGPT app or Claude connector and authorise the site with OAuth. [Connect Webflow](https://developers.webflow.com/mcp/installing/chatgpt).

**Coverage:** Most steps. Draft, edit, publish, unpublish and delete CMS items. New localised items and site projects remain unavailable; some visual tasks need Designer open.

**Boundary:** New localised items and site projects remain unavailable; some visual tasks need Designer open.

**Strengths**

- Read collections, schemas, CMS items and site data.
- Draft, edit, publish, unpublish and delete CMS items.

**Limits**

- New localised items and site projects remain unavailable; some visual tasks need Designer open.

**Official sources**

- [Connect the Webflow app](https://developers.webflow.com/mcp/installing/chatgpt)
- [Webflow connection setup](https://developers.webflow.com/mcp/reference/getting-started)
- [CMS actions and tools](https://developers.webflow.com/mcp/tools/data-tools)
- [Webflow limitations](https://developers.webflow.com/mcp/reference/overview)

## Contentful

Read entries, models, assets, locales, references and releases. Create, edit, delete and publish entries and assets; schedule releases.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read entries, models, assets, locales, references and releases.

**Write:** Create, edit, delete and publish entries and assets; schedule releases.

**Connection type:** hosted-mcp

**Connection status:** official · generally-available. Official hosted server. Install and configure the MCP app in each space and environment.

- **read:** Read entries, models, assets, locales, references and releases.
- **create:** Entries and assets before publication.
- **modify:** Entries, assets, models and locales.
- **delete:** Entries, assets, models and locales.
- **publish:** Content publication, unpublication and supported scheduled releases.

**Day to day**

- Read entries, models, assets, locales, references and releases.
- Create, edit, delete and publish entries and assets; schedule releases.

**Route:** Contentful official hosted MCP. **Setup:** Moderate. Configure the MCP app per environment, then connect with OAuth. [Connect Contentful](https://www.contentful.com/developers/docs/mcp/model-context-protocol-mcp-server/).

**Coverage:** Most steps. Create, edit, delete and publish entries and assets; schedule releases. Configure each environment; CMS publication does not verify the separate live frontend.

**Boundary:** Configure each environment; CMS publication does not verify the separate live frontend.

**Strengths**

- Read entries, models, assets, locales, references and releases.
- Create, edit, delete and publish entries and assets; schedule releases.

**Limits**

- Configure each environment; CMS publication does not verify the separate live frontend.

**Official sources**

- [Contentful tools and environment access](https://www.contentful.com/developers/docs/mcp/model-context-protocol-mcp-server/)

## Sanity

Query documents, schemas, projects and datasets. Create and edit drafts; publish individual documents.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Query documents, schemas, projects and datasets.

**Write:** Create and edit drafts; publish individual documents.

**Connection type:** hosted-mcp

**Connection status:** official · generally-available. Official hosted authoring server. OAuth or token and project access required; document validation is beta.

- **read:** Query documents, schemas, projects and datasets.
- **create:** Drafts or release versions; liveEdit types are immediately published.
- **modify:** Patches to drafts and release versions.
- **delete:** Discard drafts/release versions; published-document deletion unverified.
- **publish:** Individual drafts and unpublish; no release scheduling or publication.

**Day to day**

- Query documents, schemas, projects and datasets.
- Create and edit drafts; publish individual documents.

**Route:** Sanity official hosted MCP. **Setup:** Moderate. Connect the hosted MCP and authorise the relevant account. [Connect Sanity](https://www.sanity.io/docs/ai/mcp-server).

**Coverage:** Most steps. Create and edit drafts; publish individual documents. Release scheduling needs Studio or the HTTP API. Document validation is beta; liveEdit types bypass drafts.

**Boundary:** Release scheduling needs Studio or the HTTP API. Document validation is beta; liveEdit types bypass drafts.

**Strengths**

- Query documents, schemas, projects and datasets.
- Create and edit drafts; publish individual documents.

**Limits**

- Release scheduling needs Studio or the HTTP API. Document validation is beta; liveEdit types bypass drafts.

**Official sources**

- [Authoring tools and limits](https://www.sanity.io/docs/ai/mcp-server)
- [Separate read-only Context MCP](https://www.sanity.io/docs/context/mcp-reference)

## Directus

Read items, schemas, relationships, files and automation context. Manage items, files, schemas and configured workflows.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read items, schemas, relationships, files and automation context.

**Write:** Manage items, files, schemas and configured workflows.

**Connection type:** self-managed

**Connection status:** official · generally-available. Official built-in server for Directus 11.12+. Administrator enablement and instance configuration required.

- **read:** Read items, schemas, relationships, files and automation context.
- **create:** Items using the project status conventions.
- **modify:** Items, files, schemas and automation.
- **delete:** Role permission plus Allow Deletes; off by default.
- **publish:** Project-specific status fields and workflows.

**Day to day**

- Read items, schemas, relationships, files and automation context.
- Manage items, files, schemas and configured workflows.

**Route:** Built-in MCP on your Directus instance. **Setup:** Moderate. Enable MCP and OAuth on the existing instance; self-hosting needs configuration and restart. [Configure Directus MCP](https://directus.com/docs/guides/ai/mcp/installation).

**Coverage:** Most steps. Manage items, files, schemas and configured workflows. Publishing follows your content model. Deletes are disabled by default; self-hosted OAuth needs configuration.

**Boundary:** Publishing follows your content model. Deletes are disabled by default; self-hosted OAuth needs configuration.

**Strengths**

- Read items, schemas, relationships, files and automation context.
- Manage items, files, schemas and configured workflows.

**Limits**

- Publishing follows your content model. Deletes are disabled by default; self-hosted OAuth needs configuration.

**Official sources**

- [Directus MCP overview](https://directus.com/docs/guides/ai/mcp)
- [Instance setup](https://directus.com/docs/guides/ai/mcp/installation)
- [OAuth configuration](https://directus.com/docs/guides/ai/mcp/oauth)
- [Directus tool reference](https://directus.com/docs/guides/ai/mcp/tools)

## Shopify

Query store pages and other authorised Admin GraphQL data. Create, edit, publish and delete supported pages and articles.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Query store pages and other authorised Admin GraphQL data.

**Write:** Create, edit, publish and delete supported pages and articles.

**Connection type:** self-managed

**Connection status:** official · generally-available. Official coding-agent toolkit. Local Node.js, CLI, store authentication and explicit mutation approval required.

- **read:** Query store pages and other authorised Admin GraphQL data.
- **create:** Pages and articles with publication controls.
- **modify:** Page content, handles, templates and publication settings.
- **delete:** Permanent pageDelete and articleDelete mutations.
- **publish:** Page and article publication status, including scheduled publication.

**Day to day**

- Query store pages and other authorised Admin GraphQL data.
- Create, edit, publish and delete supported pages and articles.

**Route:** Shopify AI Toolkit + authenticated local CLI. **Setup:** Hard. Install AI Toolkit and Shopify CLI, authenticate the store and explicitly allow mutations. [Install Shopify AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit).

**Coverage:** Some steps. Create, edit, publish and delete supported pages and articles. A coding-agent plugin still needs local CLI/runtime and scoped store access.

**Boundary:** A coding-agent plugin still needs local CLI/runtime and scoped store access.

**Strengths**

- Query store pages and other authorised Admin GraphQL data.
- Create, edit, publish and delete supported pages and articles.

**Limits**

- A coding-agent plugin still needs local CLI/runtime and scoped store access.

**Official sources**

- [Install Shopify AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit)
- [Authenticate a store](https://shopify.dev/docs/api/shopify-cli/store/store-auth)
- [Run store queries and mutations](https://shopify.dev/docs/api/shopify-cli/store/store-execute)
- [Query pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages)
- [Create pages](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate)
- [Update pages](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate)
- [Delete pages](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageDelete)
- [Create articles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate)
- [Delete articles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleDelete)

## WooCommerce

Read products, orders and order notes. Create, edit, publish and delete supported products; update order status and notes.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read products, orders and order notes.

**Write:** Create, edit, publish and delete supported products; update order status and notes.

**Connection type:** self-managed

**Connection status:** official · preview. Official developer preview. WooCommerce 11.3.0 and a separately installed WordPress MCP Adapter.

- **read:** Read products, orders and order notes.
- **create:** Supported product types with an explicit status; do not assume draft by default.
- **modify:** Products plus selected order status and note operations.
- **delete:** Purpose-built product deletion ability.
- **publish:** Product status changes in 11.3.0; publishing requires the publish_products permission.

**Day to day**

- Read products, orders and order notes.
- Create, edit, publish and delete supported products; update order status and notes.

**Route:** WooCommerce 11.3 abilities + WordPress MCP Adapter. **Setup:** Hard. Install MCP Adapter separately; use a WordPress application password and expose the required abilities. [Set up WooCommerce MCP](https://developer.woocommerce.com/docs/features/mcp/).

**Coverage:** Some steps. Create, edit, publish and delete supported products; update order status and notes. Developer preview. Requires MCP Adapter; the old WooCommerce endpoint no longer works in 11.3.

**Boundary:** Developer preview. Requires MCP Adapter; the old WooCommerce endpoint no longer works in 11.3.

**Strengths**

- Read products, orders and order notes.
- Create, edit, publish and delete supported products; update order status and notes.

**Limits**

- Developer preview. Requires MCP Adapter; the old WooCommerce endpoint no longer works in 11.3.

**Official sources**

- [WooCommerce MCP setup and abilities](https://developer.woocommerce.com/docs/features/mcp/)
- [WooCommerce 11.3 migration](https://developer.woocommerce.com/2026/10/21/woocommerce-11-3-mcp/)
- [Product creation in WooCommerce 11.3.0](https://github.com/woocommerce/woocommerce/blob/11.3.0/plugins/woocommerce/src/Internal/Abilities/Domain/ProductCreate.php)
- [Product updates and publication permissions](https://github.com/woocommerce/woocommerce/blob/11.3.0/plugins/woocommerce/src/Internal/Abilities/Domain/ProductUpdate.php)
- [Supported product fields and status](https://github.com/woocommerce/woocommerce/blob/11.3.0/plugins/woocommerce/src/Internal/Abilities/Domain/Traits/ProductAbilityTrait.php)

## BigCommerce

Read product content and selected commerce data. Create hidden products and edit product copy and SEO fields.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read product content and selected commerce data.

**Write:** Create hidden products and edit product copy and SEO fields.

**Connection type:** hosted-mcp

**Connection status:** official · beta. Official beta. Store owner enablement and per-user, per-store scopes required.

- **read:** Read product content and selected commerce data.
- **create:** Hidden products; promotions start disabled.
- **modify:** Product copy, SEO and selected commerce fields.
- **delete:** No deletion tool in the published management inventory.
- **publish:** Hidden products require publication elsewhere.

**Day to day**

- Read product content and selected commerce data.
- Create hidden products and edit product copy and SEO fields.

**Route:** BigCommerce Store Management MCP, early access. **Setup:** Moderate. Store owner enables beta; connect with OAuth and grant explicit per-store scopes. [Enable Store Management MCP](https://docs.bigcommerce.com/developer/api-reference/mcp/store-management).

**Coverage:** Some steps. Create hidden products and edit product copy and SEO fields. Beta. Products are created hidden; publishing, product deletion and page/blog editing stay outside this MCP.

**Boundary:** Beta. Products are created hidden; publishing, product deletion and page/blog editing stay outside this MCP.

**Strengths**

- Read product content and selected commerce data.
- Create hidden products and edit product copy and SEO fields.

**Limits**

- Beta. Products are created hidden; publishing, product deletion and page/blog editing stay outside this MCP.

**Official sources**

- [Compare BigCommerce MCP routes](https://docs.bigcommerce.com/developer/api-reference/mcp/overview)
- [Store Management tools and beta access](https://docs.bigcommerce.com/developer/api-reference/mcp/store-management)

## Adobe Commerce / Magento

Read and search CMS pages and blocks through REST APIs. Create, edit and delete pages/blocks; control page activation.

Reviewed: 2026-11-16. Documentation reviewed.

**Read:** Read and search CMS pages and blocks through REST APIs.

**Write:** Create, edit and delete pages/blocks; control page activation.

**Connection type:** custom-api

**Connection status:** official · generally-available. Official REST APIs only. An AI connection must be built; this is not a ready assistant connector.

- **read:** Read and search CMS pages and blocks through REST APIs.
- **create:** CMS pages and blocks, including inactive content.
- **modify:** CMS pages and blocks.
- **delete:** CMS pages and blocks with the required permissions.
- **publish:** is_active changes visibility; no complete editorial approval flow.

**Day to day**

- Read and search CMS pages and blocks through REST APIs.
- Create, edit and delete pages/blocks; control page activation.

**Route:** Adobe Commerce/Magento CMS REST API, custom integration. **Setup:** Specialist. Build an authenticated API integration and maintain it. [Commerce REST API guide](https://developer.adobe.com/commerce/webapi/rest/).

**Coverage:** Some steps. Create, edit and delete pages/blocks; control page activation. Custom integration required. CMS REST scope applies to traditional Commerce/Magento, not automatically SaaS.

**Boundary:** Custom integration required. CMS REST scope applies to traditional Commerce/Magento, not automatically SaaS.

**Strengths**

- Read and search CMS pages and blocks through REST APIs.
- Create, edit and delete pages/blocks; control page activation.

**Limits**

- Custom integration required. CMS REST scope applies to traditional Commerce/Magento, not automatically SaaS.

**Official sources**

- [Commerce deployment and REST API scope](https://developer.adobe.com/commerce/webapi/rest/)
- [CMS page and block API routes](https://raw.githubusercontent.com/magento/magento2/2.4-develop/app/code/Magento/Cms/etc/webapi.xml)
- [CMS page activation fields](https://raw.githubusercontent.com/magento/magento2/2.4-develop/app/code/Magento/Cms/Api/Data/PageInterface.php)
