# Methodology

This index answers one practical question: **how can an AI system safely interact with each part of a paid-media workflow?**

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

The index is intentionally conservative. A missing badge is better than an unsupported claim.
