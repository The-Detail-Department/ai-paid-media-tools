# Methodology

This index answers one practical question: **what is genuinely usable in a daily AI paid-media workflow today?**

Facts live in `data/tools.json`. The Detail Department's assessment lives separately in `data/ratings.json`. A factual correction does not silently change an editorial grade, and a grade change cannot rewrite the underlying capability.

## How we grade

The letter grade is The Detail Department's recommendation for current daily work. It combines:

- useful scope for a paid-media practitioner;
- production maturity;
- access and setup friction;
- read/write control;
- documentation and maintainer clarity; and
- operational risk.

The grade is not a score for the vendor or its full product.

| Grade | Meaning |
| --- | --- |
| A+, A, A- | Strong daily recommendation. Lower marks retain material limits. |
| B+, B, B- | Useful in a defined workflow, with access, coverage or integration friction. |
| C+, C, C- | Narrow, immature or too indirect for most daily teams. |
| D / F | Not recommended for current production use. |

Readiness is recorded separately:

- **Production**: dependable enough for a controlled recurring workflow today.
- **Test**: worth piloting, but access, maturity or control needs a bounded test.
- **Research**: useful specialist capability, not a daily operating interface.

Every rating must carry between one and five specific positives and negatives. Production never means unrestricted automation.

## What the labels mean

- **Official MCP**: documented or maintained by the vendor or its verified source-code organisation.
- **Official beta / preview**: vendor-backed, but availability or behaviour may still change.
- **Official, restricted**: vendor-backed, with an allowlist, approval process, seat requirement, or other material access gate.
- **No official MCP verified**: our review found no vendor-backed MCP source. Community wrappers may still exist.
- **Plugin**: a packaged extension, app, skill, or agent integration maintained by the vendor. A generic MCP configuration is not counted as a plugin.
- **CLI**: a documented command-line product with useful operations beyond merely launching an MCP server.
- **API / SDK**: the primary programmable interface when no agent-native interface exists, or when it remains the more complete route.

## Control labels

- **Read-only**: retrieves data or context without changing the connected system.
- **Read + write**: both retrieves data and can create, update, launch, or delete objects.
- **Mixed**: capabilities differ by tool, permission, plan, or configuration.
- **Not stated**: the cited source does not make the boundary sufficiently clear.

## Review method

1. Search vendor documentation, vendor product announcements, and verified vendor GitHub organisations.
2. Record the most direct source for each interface.
3. Separate existence, provenance, maturity, access, and control.
4. Recheck the entry on the date stored in `verifiedOn`.
5. Grade the usable workflow rather than the vendor's reputation.
6. Record the strongest reasons for and against the grade.

The index is intentionally conservative. A missing badge is better than an unsupported claim.
