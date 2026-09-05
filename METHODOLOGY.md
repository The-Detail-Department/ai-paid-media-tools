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

## What matters, in order

1. **End-to-end completion.** Can the route finish a recurring job, or does it stop at analysis?
2. **The human job.** Every category has its own capability test. Read, Create, Modify and Delete are right for media platforms, but wrong for analytics, measurement or modelling.
3. **Connection effort.** Hosted OAuth is materially different from developer approval, a cloud project, API enablement, tokens and custom client configuration.
4. **Manual-feature coverage.** An MCP or API can exist while exposing only a small subset of the vendor's interface.
5. **Maturity and governance.** Beta access, inconsistent account availability, unclear permissions and broad write scopes reduce production confidence.

The `surface` field names the exact route being judged. Capabilities belong to that route. We do not borrow a capability from the manual product or an underlying API to make an MCP, plugin or CLI appear more complete.

## How we grade

The letter grade is The Detail Department's recommendation for current daily work, not a score for the vendor or its full product.

| Grade | Meaning |
| --- | --- |
| A+, A, A- | Strong daily recommendation. Lower marks retain material limits. |
| B+, B, B- | Useful in a defined workflow, with access, coverage or integration friction. |
| C+, C, C- | Narrow, immature or too indirect for most daily teams. |
| D / F | Not recommended for current production use. |

Practical grade ceilings:

- A read-only route cannot score above B+ for a workflow whose normal job includes execution.
- A media-platform route that cannot dependably modify core objects cannot score above B-.
- A route requiring custom engineering or gated developer approval cannot score above B unless its operational value is exceptional.
- Beta, preview, allowlist and private-beta routes normally remain Test regardless of their feature list.

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

### Category capability tests

| Category | Human-job capabilities |
| --- | --- |
| Media platforms | Read, Create, Modify, Delete |
| Analytics | Analyse, Build reports, Configure, Validate, Share |
| Measurement | Inspect, Configure, Validate, Deploy, Monitor |
| Creative production | Read context, Create, Edit, Adapt, Export |
| Research and intelligence | Discover, Retrieve, Compare, Analyse, Export |
| Data infrastructure | Connect, Inspect, Query, Transform, Operate |
| Automation and workflow | Connect, Build, Run, Debug, Monitor |
| Modelling | Prepare data, Configure, Run, Validate, Scenarios |

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
