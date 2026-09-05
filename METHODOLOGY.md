# Methodology

This index answers one practical question: **what can an AI paid-media team genuinely use in a daily workflow today?**

Three sources stay separate:

- interface facts live in `data/tools.json`;
- daily workflow assessment lives in `data/workflows.json`; and
- The Detail Department's editorial grade lives in `data/ratings.json`.

A factual correction does not silently change a workflow assessment or grade. A rating cannot rewrite the underlying capability.

## What matters, in order

1. **End-to-end completion.** Can the route finish a recurring job, or does it stop at analysis?
2. **Read, Create, Modify and Delete.** These are separate actions. Creating an ad does not prove that the same route can maintain it.
3. **Connection effort.** Hosted OAuth is materially different from developer approval, a cloud project, API enablement, tokens and custom client configuration.
4. **Manual-feature coverage.** An MCP or API can exist while exposing only a small subset of the vendor's interface.
5. **Maturity and governance.** Beta access, inconsistent account availability, unclear permissions and broad write scopes reduce production confidence.

The `surface` field names the exact route being judged. Actions belong to that route. We do not borrow a capability from the manual product or an underlying API to make an MCP, plugin or CLI appear writable.

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

### Actions

- **Yes**: directly supported for the core objects of the evaluated route.
- **Partial**: available, but important objects, fields or workflows are missing or inconsistent.
- **No**: not supported by the evaluated route.
- **Depends**: determined by the operator's connected tools, permissions or custom configuration.
- **N/A**: not meaningful for this type of tool.
- **Unverified**: the vendor has not documented a dependable boundary.

### Coverage

- **Broad**: covers most recurring work for the tool's role, but not necessarily every manual feature.
- **Partial**: supports useful recurring workflows with material gaps.
- **Narrow**: useful for a constrained job such as retrieval, reporting or one asset type.
- **Configurable**: depends on the tools, actions or database permissions exposed by the operator.
- **Specialist**: covers a modelling or engineering job rather than ordinary campaign operations.

## Interface labels

- **Official MCP**: documented or maintained by the vendor or its verified source-code organisation.
- **Official beta / preview**: vendor-backed, but availability or behaviour may still change.
- **Official, restricted**: vendor-backed, with an allowlist, approval process, seat requirement or other material access gate.
- **No official MCP verified**: our review found no vendor-backed MCP source. Community wrappers may still exist.
- **Plugin**: a packaged extension, app, skill or agent integration maintained by the vendor. A generic MCP configuration is not counted as a plugin.
- **CLI**: a documented command-line product with useful operations beyond merely launching an MCP server.
- **API / SDK**: the primary programmable interface when no agent-native interface exists, or when it remains the more complete route.

## Commercial programme labels

- **Affiliate**: a public commission-paying programme with a documented application or enrolment route.
- **Referral**: a commercial introduction programme that is not a general public affiliate programme.
- **Partner**: an agency, technology, certification or directory programme. Partner does not imply commission.
- **Retired**: a previously available programme whose official page says it has ended.
- **None verified**: no current official public affiliate, referral or applicable partner programme was verified.

Terms are summarised only from current official pages. The repository never inserts referral codes or affiliate links.

## Review method

1. Search vendor documentation, vendor product announcements and verified vendor source-code organisations.
2. Name the precise interface or route being assessed.
3. Test existence, provenance, setup, action boundary, coverage, maturity and access independently.
4. Record the biggest ordinary-workday blocker, not only exceptional edge cases.
5. Recheck the entry on the date stored in `verifiedOn`.
6. Record up to five specific reasons for and against the grade.
7. Treat programme availability and terms as a separate, time-sensitive fact.

The index is intentionally conservative. A missing capability is better than an unsupported claim.
