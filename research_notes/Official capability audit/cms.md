# Official CMS capability audit

## Which capabilities are supported by current official evidence?

### Takeaway

All ten evaluated routes have official primary evidence, freshly read on 16 November 2026. This is a documentation and source-code audit, not a connected-account test. Fifty action cells were checked. One substantive action correction is proposed: WooCommerce product publication is documented in the released 11.3.0 ability implementation, so Publish moves from Unverified to Yes with that version and permission boundary.

### Cited Findings

- **WordPress.com:** The content-authoring tools list, create, update and trash posts and pages. Draft creation and publication through status updates are explicit; edits to already published content may go live immediately. [Content-authoring tools](https://developer.wordpress.com/docs/mcp/tools-reference/). Its hosted service has an official ChatGPT plugin and Claude directory connector. Paid plans qualify; temporary free-site access ends 30 November 2026. [Connection and plans](https://developer.wordpress.com/docs/mcp/), [account tool controls](https://wordpress.com/support/mcp/).
- **WordPress MCP Adapter:** This official package exposes installed abilities. It does not itself provide a complete content workflow; discovery, information and execution meta-tools operate only on exposed abilities. Keep all five content actions conditional. [Official README](https://raw.githubusercontent.com/WordPress/mcp-adapter/trunk/README.md), [plugin installation and limitations](https://wordpress.org/plugins/mcp-adapter/).
- **Webflow:** CMS item read/create/update/delete/publish/unpublish are explicit. Creation and editing produce drafts, while publishing is a separate action. [Data tools](https://developers.webflow.com/mcp/tools/data-tools). New localised CMS items and new site projects remain outside MCP; visual snapshots, image uploads and current Designer context need the bridge and open Designer. [Limits](https://developers.webflow.com/mcp/reference/overview). [Official ChatGPT app connection](https://developers.webflow.com/mcp/installing/chatgpt).
- **Contentful:** The hosted server provides entry, asset and content-model CRUD, publication and unpublication. Release validation, immediate publication and scheduled publication are explicitly listed. Each environment needs its MCP app configured, and user permissions still apply. [Tools and access](https://www.contentful.com/developers/docs/mcp/model-context-protocol-mcp-server/).
- **Sanity:** Authoring MCP queries content, creates drafts/release versions, patches content, publishes individual drafts and unpublishes documents. Delete remains Partial: draft/version discard is documented, general published-document deletion is not. Release scheduling and publication remain outside this MCP. The document-validation tool is explicitly beta, which needs a visible qualification. [Authoring tools](https://www.sanity.io/docs/ai/mcp-server). The separately named Context MCP does not establish those write capabilities. [Context MCP](https://www.sanity.io/docs/context/mcp-reference).
- **Directus:** The built-in `items` tool supports CRUD, alongside schema, file and automation tools. Publication still depends on the project's schema and workflows. [Tool inventory](https://directus.com/docs/guides/ai/mcp/tools). MCP needs 11.12+, administrator enablement and existing user permissions. Deletes are disabled by default. Self-hosted OAuth needs configuration. [Installation and settings](https://directus.com/docs/guides/ai/mcp/installation).
- **Shopify:** AI Toolkit expressly supports store management through authenticated local CLI. `store execute` accepts Admin GraphQL queries/mutations and disables mutations by default. This is a real coding-agent execution route, not a generic ChatGPT merchant-admin app. [Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit), [CLI execution](https://shopify.dev/docs/api/shopify-cli/store/store-execute). Page read/create/update/delete and publication controls are explicit. [Read](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages), [create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate), [update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate), [delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageDelete). Article creation/publication and deletion are also documented. [Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate), [delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleDelete).
- **WooCommerce:** The integration guide confirms product queries, creation, editing and deletion plus order status/notes. It remains developer preview and requires the separate WordPress MCP Adapter. [Official integration guide](https://developer.woocommerce.com/docs/features/mcp/). In the released 11.3.0 code, product mutation schemas include `status`, the shared trait maps it to the product setter, and ProductUpdate checks `publish_products` before changing to publish/future/private. Publish is therefore supported for the versioned product ability, rather than borrowed from the REST API. [Release ProductUpdate](https://github.com/woocommerce/woocommerce/blob/11.3.0/plugins/woocommerce/src/Internal/Abilities/Domain/ProductUpdate.php), [shared product fields](https://github.com/woocommerce/woocommerce/blob/11.3.0/plugins/woocommerce/src/Internal/Abilities/Domain/Traits/ProductAbilityTrait.php), [ProductCreate](https://github.com/woocommerce/woocommerce/blob/11.3.0/plugins/woocommerce/src/Internal/Abilities/Domain/ProductCreate.php).
- **BigCommerce:** The official Store Management MCP is beta. It reads product/commerce data, creates hidden products and changes supported fields. It does not expose product publication or deletion in its current inventory; pages/blogs are not part of this route. [Management tools](https://docs.bigcommerce.com/developer/api-reference/mcp/store-management). Do not transfer the generally available shopper MCP's status to this merchant-management server. [Route comparison](https://docs.bigcommerce.com/developer/api-reference/mcp/overview).
- **Adobe Commerce/Magento:** Official REST routes cover read/search/create/update/delete for CMS pages and blocks, with page activation fields. These are building blocks for a custom integration. [CMS route definitions](https://raw.githubusercontent.com/magento/magento2/2.4-develop/app/code/Magento/Cms/etc/webapi.xml), [page activation field](https://raw.githubusercontent.com/magento/magento2/2.4-develop/app/code/Magento/Cms/Api/Data/PageInterface.php). The traditional PaaS/on-premises scope must not be transferred automatically to Commerce SaaS. [Adobe deployment distinctions](https://developer.adobe.com/commerce/webapi/rest/).

### Inferences

- The core grades can remain unchanged. The new evidence chiefly sharpens provenance, setup and action flags; one additional supported operation does not make a preview installation production-ready.
- An official package being downloadable or an official API being available is not equivalent to a ready marketing assistant. The display must combine connection provenance, availability, setup tier, action boundaries and evidence type.

### Gaps

- No tenant, plan, permission, OAuth or live-write smoke test was conducted for any entry. None should display a hands-on-tested claim.
- WooCommerce creation must not promise a draft default. The proposal explicitly asks the operator to set product status. This audit proves the 11.3.0 ability contract, not an arbitrary installed version.
- Directus's tools URL initially failed through the web tool, but opening the same link from its installation guide succeeded. The WordPress/WooCommerce GitHub directory click failed; the public GitHub contents API resolved the directory and versioned source. No unresolved source-access blocker remains for these ten core assessments.

## Which routes need prominent flags?

### Takeaway

All ten evaluated routes are official. Eight are available implementations or APIs; two are explicitly pre-release. Availability alone must not produce a Ready label.

### Cited Findings

- **Developer preview:** WooCommerce. [Vendor notice](https://developer.woocommerce.com/docs/features/mcp/).
- **Beta:** BigCommerce Store Management, including owner enablement and initially empty user scopes. [Vendor guide](https://docs.bigcommerce.com/developer/api-reference/mcp/store-management).
- **Developer setup:** WordPress Adapter needs abilities; Shopify needs local runtime/CLI/authentication; Directus needs instance enablement/configuration. [WordPress](https://wordpress.org/plugins/mcp-adapter/), [Shopify](https://shopify.dev/docs/apps/build/ai-toolkit), [Directus](https://directus.com/docs/guides/ai/mcp/installation).
- **Custom integration:** Adobe Commerce is assessed on its REST APIs, not a verified assistant connector. [API guide](https://developer.adobe.com/commerce/webapi/rest/).
- **Specific action limits:** Sanity document validation is beta and published-document deletion is unverified; Directus publishing is project-specific and deletes are off by default. [Sanity](https://www.sanity.io/docs/ai/mcp-server), [Directus](https://directus.com/docs/guides/ai/mcp/installation).

### Inferences

- Preserve useful entries with clear flags instead of removing their limits or calling every vendor-backed route Ready.
- A compact Official / Beta / Developer setup presentation can be accurate only when the action table retains conditional and unsupported actions.

### Gaps

- A single availability enum cannot encode both general availability of the server and beta of one helper tool. Sanity's connection note and blocker explicitly retain the tool-level beta qualification.

## What changes are proposed in the accompanying records?

### Takeaway

`cms.json` contains ten full proposed records; canonical data and generated files are untouched. Every record now has route-specific official provenance, availability, evidence type, dated source list and a short access note.

### Cited Findings

- WooCommerce publication changes from Unverified to Yes based on released source, with no grade promotion. [Versioned publication check](https://github.com/woocommerce/woocommerce/blob/11.3.0/plugins/woocommerce/src/Internal/Abilities/Domain/ProductUpdate.php).
- BigCommerce maturity changes from preview to the vendor's precise Beta label. [Management guide](https://docs.bigcommerce.com/developer/api-reference/mcp/store-management).
- Sanity's beta validation qualification is added; broad authoring status remains separate. [Authoring tools](https://www.sanity.io/docs/ai/mcp-server).
- Source links receive descriptive labels and setup links identify the product or task. Limits are shortened without removing material conditions. Adobe's setup level becomes Specialist to match the explicitly custom integration route. [REST integration scope](https://developer.adobe.com/commerce/webapi/rest/).

### Inferences

- Counts: 10 official routes; 8 available implementations/APIs; 1 beta; 1 developer preview; 0 unresolved core route assessments; 0 live-tested connections. Original grades retained for all ten.

### Gaps

- These proposed records still require parent integration, schema validation and website rendering checks. No source build, commit, deployment or provider mutation was performed by this researcher.
