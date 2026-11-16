# Methodology

This index answers one practical question: **what can an AI paid-media team genuinely use in a daily workflow today?**

Three sources stay separate:

- interface facts live in `data/tools.json`;
- daily workflow assessment lives in `data/workflows.json`; and
- The Detail Department's editorial grade lives in `data/ratings.json`.

A factual correction does not silently change a workflow assessment or grade. A rating cannot rewrite the underlying capability.

## Evidence basis

The evidence label records how directly a route has been observed. It is separate from grade and readiness.

| Label | Meaning |
| --- | --- |
| Documentation reviewed | Assessment based on current official documentation, product announcements and public source repositories. |
| Connected | The route was authenticated and its advertised tools or commands were inspected. |
| Executed | At least one representative workflow was run against a controlled account or dataset. |
| Used repeatedly | The route was used across recurring production work, within the stated boundary. |

Unless an entry states otherwise, the current evidence basis is **Documentation reviewed**. A Production rating means the documented route appears dependable enough for a controlled recurring workflow. It does not claim that The Detail Department has executed it.

## What matters

We assess how much an external AI assistant can do without an operator opening the platform:

1. **Read.** Can it retrieve useful account data, content and context?
2. **Write.** Can it create, edit, delete or publish the core work? These are separate actions. Creating a draft is not publishing it.
3. **Connect.** Is this a native AI app, a vendor-hosted MCP, a self-managed connection or a custom API integration?

The same combined lens applies across categories. Category-specific daily tasks explain the practical value; they no longer give a read-only research tool an A that could be mistaken for execution ability.

The `surface` field names the exact route. Capabilities belong only to that route. We do not borrow from the manual platform, another connector or an underlying API. Third-party routes are explicitly identified. No connection is assumed to expose every feature.

## How we grade

Grades are editorial judgements about the connection, not measured vendor scores, product quality or client results. We do not imply a precision that the documentation cannot support.

| Grade | Meaning |
| --- | --- |
| A+, A, A- | Useful reads, substantial core writes and a simple native or hosted connection. Material restrictions lower the grade. |
| B+, B, B- | Useful reading and execution, but bounded actions, technical setup or manual handoffs remain. |
| C+, C, C- | Read-only, narrow or custom-built access. May still be an excellent tool for its specialist job. |
| D / F | No practical route established, or unsuitable for the stated workflow. Missing evidence alone is not a failing grade. |

Practical boundaries:

- Read-only routes are capped at C+ on this combined read/write/setup measure.
- API-only routes requiring a custom AI integration are capped at C+.
- Self-managed routes with useful writes generally fall in the B range.
- Preview, beta and account gates affect both the grade and readiness.
- A pending evidence review is shown as **Not scored**. Any historical grade retained in the data is not a current recommendation.

This November rubric differs from the earlier category-specific grades. A changed grade can reflect the revised question, a changed product, or both; consult the record rather than treating it as a vendor regression.

Readiness is recorded separately:

- **Production**: dependable enough for a controlled recurring workflow within the stated boundary.
- **Test**: worth piloting, but access, maturity or control needs a bounded test.
- **Research**: useful specialist capability, not a daily operating interface.

Production never means broad feature parity or unrestricted automation.

## Operational labels

### Setup

- **Easy**: connect a hosted service and approve access, without a developer project or custom code.
- **Moderate**: account configuration, credentials or light technical setup.
- **Hard**: developer access, cloud or OAuth configuration, custom integration or vendor approval.
- **Specialist**: data engineering, infrastructure or statistical expertise beyond ordinary campaign operations.

### Capability values

- **Yes**: directly supported for the core objects of the evaluated route.
- **Partial**: available, but important objects, fields or workflows are missing or inconsistent.
- **No**: not supported by the evaluated route.
- **Depends**: determined by the operator's connected tools, permissions or custom configuration.
- **N/A**: not meaningful for this type of tool.
- **Unverified**: the vendor has not documented a dependable boundary.

### Coverage

- **End to end**: completes nearly all of the recurring human job through the evaluated route.
- **Most steps**: completes most of the recurring job with a bounded human handoff.
- **Some steps**: handles useful parts of the job but leaves material work elsewhere.
- **Assist only**: supplies context or one narrow output rather than completing the job.
- **Depends**: coverage is determined by the tools, data or permissions configured by the operator.
- **Specialist**: covers a modelling or engineering job rather than ordinary campaign operations.

### Market role

- **Reference**: an established category leader or default comparison point.
- **Emerging**: a newer challenger with a credible route worth watching or using.
- **Specialist**: a narrower expert tool that is relevant for a defined job.

Market role is editorial context, not a quality score. An Emerging product can earn a higher grade than a Reference product.

### Connection tiers

- **Native AI app / plugin:** add the vendor's app or plugin in a supported AI client and authorise it. Exact clients, plans and permission gates are in the record.
- **Hosted MCP:** add a remote service run by its provider. OAuth, API keys, admin consent or vendor approval may still be required.
- **Self-managed connection:** install or host an MCP, CLI or local skills environment yourself.
- **Custom API:** an API exists, but the evaluated AI workflow requires an integration to be built.
- **None verified:** no dependable connection route was established in this review.

Setup level (Easy, Moderate, Hard or Specialist) describes the remaining effort within that tier. A hosted URL does not automatically mean an easy setup.

## Interface labels

- **Official MCP**: documented or maintained by the vendor or its verified source-code organisation.
- **Official beta / preview**: vendor-backed, but availability or behaviour may still change.
- **Official, restricted**: vendor-backed, with an allowlist, approval process, seat requirement or other material access gate.
- **No official MCP verified**: our review found no vendor-backed MCP source. Community wrappers may still exist.
- **Plugin**: a packaged extension, app, skill or agent integration maintained by the vendor. A generic MCP configuration is not counted as a plugin.
- **CLI**: a documented command-line product with useful operations beyond merely launching an MCP server.
- **API / SDK**: the primary programmable interface when no agent-native interface exists, or when it remains the more complete route.

## Review method

1. Search vendor documentation, vendor product announcements and verified vendor source-code organisations.
2. Name the precise interface or route being assessed.
3. Test existence, provenance, setup, action boundary, coverage, maturity and access independently.
4. Record the biggest ordinary-workday blocker, not only exceptional edge cases.
5. Recheck the entry on the date stored in `verifiedOn`.
6. Record up to five specific reasons for and against the grade.
7. Link the official product, exact AI route or endpoint, documentation, official GitHub repository and API or SDK. State clearly when one is not publicly documented.

The index is intentionally conservative. A missing capability is better than an unsupported claim.

## CMS companion

The AI CMS Index uses `data/cms-tools.json`, `data/cms-workflows.json` and
`data/cms-ratings.json`. It assesses the named AI-compatible route against reading,
creating, editing, deleting and publishing content. Localisation is described only where the named route documents it. It does not rank LLM providers
or the general quality of a CMS. The same evidence labels and grade ceilings apply.

Publication means changing content visibility in the CMS. It does not prove that
a separate frontend has deployed, caches have cleared or the live page is correct.
A developer documentation assistant is not evidence of authenticated content writes.
A platform's manual interface and API do not establish capability in its MCP.

The 16 November 2026 review covers all 60 records. It is a primary-documentation review, not connected-account testing. `reviewStatus=pending` identifies unresolved current evidence; a previous `verifiedOn` date is preserved there. Other unverified actions remain labelled within the record rather than being inferred.

## Practical examples and reading order

`dailyTasks` translates each record’s existing documented scope into examples of
recurring work. A wording change does not reset `verifiedOn`. Setup notes name the
account access, administrator work or engineering that makes the connection possible.
`featuredTools` and `sectionOrder` are editorial navigation choices, not measured
popularity or market-share rankings. The commerce additions remain documentation
reviews; no connection or live write was performed.

## Official status and availability

Each evaluated route records `connection.provenance`, `connection.availability`,
`connection.evidence`, `connection.checkedOn`, source URLs and an access note. These
refer to the named connection, not every interface offered by the platform. A
third-party connection to a platform is not that platform's official connection.

Official does not mean generally available, simple to install or fully capable.
Beta, preview, restricted access and unverified availability are explicit flags and
cannot carry Production readiness. Local setup, custom integration work and
unverified individual actions remain visible separately. An available route with
optional beta tools identifies those limits in its access note and action scope.

Documentation review does not establish a working authenticated connection, a
successful live write, or availability for every account. Current review attempts
are dated with `checkedOn`; an unsuccessful attempt does not reset the last
verified date or convert unknown capabilities into supported ones.
