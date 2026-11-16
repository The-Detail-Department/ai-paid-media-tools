# CMS AI connection capabilities

Verified against public primary documentation on **16 November 2026**. Scope: the ten CMS entries in the 29 October baseline. No account connections, live writes or production tests were made. These are documented capabilities, not evidence that this team has successfully executed them. The accompanying `cms.json` contains one route assessment per entry.

## Which routine content work can an external AI actually perform?

### Takeaway

WordPress.com, Webflow, Contentful and Sanity document broad everyday content authoring through hosted routes. Directus is capable but inherits the project's content model. Shopify has an official coding-agent execution route. WooCommerce still needs installation and preview-aware configuration. BigCommerce now offers bounded merchant administration through early-access MCP. The generic WordPress adapter and Adobe's APIs should not be presented as ready editorial assistants.

### Cited findings

- **WordPress.com:** Posts/pages can be read, drafted, updated, published and moved to trash. Updating published content can affect the live site immediately. The native ChatGPT plugin and Claude connector use its hosted MCP. [Tool reference](https://developer.wordpress.com/docs/mcp/tools-reference/), [connection documentation](https://developer.wordpress.com/docs/mcp/).
- **Webflow:** The current MCP tool reference explicitly provides collection-item draft creation/update, publication, unpublication and deletion. Its prior unknown publish/delete cells can be resolved. [Data tools](https://developers.webflow.com/mcp/tools/data-tools). The current documentation narrows the need for an open Designer to visual snapshots, image uploads and current UI context; ordinary CMS operations do not require it. [Current limitations](https://developers.webflow.com/mcp/reference/overview).
- **Contentful:** Entries, assets and models have explicit read/write tools, including publication, unpublication and deletion. Release validation and scheduled publish/unpublish are documented. The same reference describes hosted OAuth access and environment-specific allowlists. [Official reference](https://www.contentful.com/developers/docs/mcp/model-context-protocol-mcp-server/).
- **Sanity:** Its authoring MCP creates documents, edits drafts or release versions, publishes drafts and unpublishes documents. Deletion is narrower: discard drafts or release versions. The current `create_release` description expressly excludes scheduling, publishing, archiving and deleting releases. Those need Studio or the HTTP Actions API. `liveEdit` types can be created published. [Authoring MCP](https://www.sanity.io/docs/ai/mcp-server). The separately named Context MCP remains read-only; its reference was updated 10 November. [Context MCP](https://www.sanity.io/docs/context/mcp-reference).
- **Directus:** The built-in MCP's `items` tool performs CRUD. Schema, files, collections and automation tools also exist. Draft/publication concepts depend on the project's schema; this is not a universal publish button. [Tool reference](https://directus.com/docs/guides/ai/mcp/tools). Deletion requires the appropriate role permissions and enabled deletion setting. [Overview](https://directus.com/docs/guides/ai/mcp).
- **Shopify:** The AI Toolkit now expressly covers store-management execution through Shopify CLI. `store execute` runs authenticated Admin GraphQL queries and mutations, with mutations disabled unless explicitly allowed. This supersedes the baseline claim that the toolkit only supplies developer context. [AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit), [store execute](https://shopify.dev/docs/api/shopify-cli/store/store-execute). Page reading, creation, editing, publication control and permanent deletion are documented individually. [Read](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages), [create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate), [edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate), [delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageDelete). Article creation/publication and deletion are also documented. [Create article](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate), [delete article](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleDelete).
- **WooCommerce:** Official purpose-built abilities query/create/update/delete products and perform selected order tasks. The MCP remains developer preview. The overview does not establish the installed product ability's exact draft/publication defaults, so those two cells remain review pending. [Current integration guide](https://developer.woocommerce.com/docs/features/mcp/).
- **BigCommerce:** The early-access Store Management MCP includes product reading, hidden product creation, copy/SEO editing and selected commerce operations. Its current tool table has no product visibility/publication or deletion action and no page/blog CMS tools. Hidden products must be reviewed and published elsewhere. [Store Management MCP](https://docs.bigcommerce.com/developer/api-reference/mcp/store-management). Shopper Storefront MCP is a different route and is generally available; that status cannot be transferred to Management MCP. [MCP overview](https://docs.bigcommerce.com/developer/api-reference/mcp/overview).
- **WordPress MCP Adapter:** The official package exposes registered WordPress abilities, which are private until explicitly exposed. Its three meta-tools discover, inspect and execute those abilities. The adapter itself is not proof of editorial read/write coverage. [Current README](https://raw.githubusercontent.com/WordPress/mcp-adapter/trunk/README.md), [WordPress explainer](https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter/).
- **Adobe Commerce/Magento:** Official source defines read/search/create/update/delete CMS page/block REST routes. Page data includes an activation flag. These support a custom integration; they do not establish a native assistant or complete editorial review flow. [API routes](https://raw.githubusercontent.com/magento/magento2/2.4-develop/app/code/Magento/Cms/etc/webapi.xml), [page fields](https://raw.githubusercontent.com/magento/magento2/2.4-develop/app/code/Magento/Cms/Api/Data/PageInterface.php). Adobe says SaaS endpoints differ significantly from PaaS/on-premises. [REST overview](https://developer.adobe.com/commerce/webapi/rest/).

### Inferences

The letter grade should describe a named usable route. A capable raw API should not receive the same ease credit as connecting an official app. Conversely, publish controls and draft defaults are useful boundaries, not automatically defects. The material distinction is whether the desired operation can be completed and where a person must return to the platform.

### Gaps

No live account smoke test was conducted. Exact client-plan eligibility, tenant rollout, installed versions and role permissions can constrain every documented route. WooCommerce product draft/publish semantics need a current installed schema or precise versioned source check. General Sanity published-document deletion was not established. The research does not prove that no other Adobe connector exists; it proves the evaluated route is custom API work.

## How easy is the connection, and what setup/access constraints matter?

### Takeaway

Show setup as a separate dimension, not a small footnote to an overall grade. Native app, hosted URL, own installation and custom integration are meaningfully different experiences.

### Cited findings

| Product | Best evidenced route for this assessment | Important qualification |
| --- | --- | --- |
| WordPress.com | Native ChatGPT plugin or Claude connector | All paid plans; free access through 30 November 2026. MCP enablement, OAuth and user/site tool controls still apply. [Official guide](https://developer.wordpress.com/docs/mcp/), [16 November access guide](https://wordpress.com/support/mcp/) |
| Webflow | Native ChatGPT app or Claude connector | OAuth, existing site and authorisation; bridge installs automatically. [ChatGPT app](https://developers.webflow.com/mcp/installing/chatgpt), [getting started](https://developers.webflow.com/mcp/reference/getting-started) |
| Contentful | Vendor-hosted MCP | Add URL and OAuth; configure its app per space/environment. The app is not itself a native ChatGPT marketplace listing. [Reference](https://www.contentful.com/developers/docs/mcp/model-context-protocol-mcp-server/) |
| Sanity | Vendor-hosted MCP | OAuth or token; CLI can configure supported coding clients. [Reference](https://www.sanity.io/docs/ai/mcp-server) |
| Directus | MCP on an existing instance | OAuth now documented. Self-hosted OAuth requires server settings, registration configuration and restart. Use a self-managed label when the customer operates the infrastructure. [OAuth](https://directus.com/docs/guides/ai/mcp/oauth), [installation](https://directus.com/docs/guides/ai/mcp/installation) |
| Shopify | Official coding-agent plugin plus local CLI | Node/runtime, store authentication and scopes required. Installing the toolkit does not itself authorise writes. [Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit), [store auth](https://shopify.dev/docs/api/shopify-cli/store/store-auth) |
| WooCommerce | Site plugin plus remote proxy or local WP-CLI | 11.3 removes the old WooCommerce endpoint and REST-key authentication. Use MCP Adapter plus WordPress application password. [21 October migration advisory](https://developer.woocommerce.com/2026/10/21/woocommerce-11-3-mcp/) |
| WordPress Adapter | Install/configure ability exposure | Site plugin, authenticated transport and appropriate abilities required. [Official README](https://raw.githubusercontent.com/WordPress/mcp-adapter/trunk/README.md) |
| BigCommerce | Vendor-hosted custom MCP connector | Store owner enables beta and accepts terms; per-user/per-store scopes start empty; OAuth follows. [Management MCP](https://docs.bigcommerce.com/developer/api-reference/mcp/store-management) |
| Adobe Commerce | Custom API integration | Configure integration authentication, permissions and store-view behaviour. Traditional deployment scope only. [REST overview](https://developer.adobe.com/commerce/webapi/rest/) |

### Inferences

A local plugin in Claude Code or Codex is not equivalent to a browser-based ChatGPT/Claude app for a marketing team. Shopify should receive credit for an official execution path while still showing the runtime/authentication step. Directus needs a conditional label because it can be remotely hosted already or operated by the customer.

### Gaps

A single `setupTier` enum cannot fully represent Directus deployment alternatives or BigCommerce's hosted product tools plus custom page/blog route. The JSON names the chosen route and retains the alternative in limitations. Do not display an unconditional one-click claim.

## Which grades and public claims should change?

### Takeaway

The useful correction is route clarity first, rank order second. These are editorial proposals under the new read/write/setup rubric, not measured performance or hands-on test scores.

| Entry | Baseline | Proposed | Reason |
| --- | --- | --- | --- |
| WordPress.com | B+ | A | Native connector and broad routine post/page lifecycle. |
| Webflow | B+ | A- | Native app, explicit draft/edit/publish/delete; localised creation and a few visual steps remain limited. |
| Contentful | A- | A- | Broad lifecycle, releases and hosted connection; environment setup required. |
| Sanity | A- | A- | Broad routine authoring; accurately constrain deletion and release lifecycle. |
| Directus | B+ | B+ | Useful broad tools; schema and deployment setup still matter. |
| Shopify | B | B | Official execution now replaces a custom bridge, but local tooling and store scopes remain. |
| WooCommerce | B | B | Useful product operations, preview plus installation/version friction. |
| BigCommerce | B | B- | Hosted product-content route is real but bounded and early access. If the index evaluates page/blog CMS only, use C for that custom route instead. |
| WordPress MCP Adapter | B | C | Installed infrastructure does not itself supply a complete editorial workflow. |
| Adobe Commerce/Magento | B | C | Capable custom API rather than a ready AI connection. |

### Cited findings

The grade proposals derive from the cited per-route evidence above and the complete source arrays in `cms.json`. In particular, avoid publishing the old Shopify toolkit-only caution, Webflow publish/delete unknowns, broad Sanity release automation claim, or WooCommerce's removed connection instructions.

### Inferences

The top CMS podium would change materially if these proposals are adopted: WordPress.com belongs in the top group alongside Webflow, Contentful and Sanity. A single numerical rank among equal grades should not imply measured superiority. Retain dimensions and route limits next to the score.

### Gaps

Final cross-index calibration belongs to the parent researcher/editor. BigCommerce's chosen evaluated scope needs an explicit editorial decision: product content counts as commerce CMS, or the entry stays page/blog-only. Do not blend the two routes into one all-capabilities row. The lower adapter and Adobe scores reflect the revised ease-oriented rubric, not a newly observed regression.
