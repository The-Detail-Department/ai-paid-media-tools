# Project guidance

This repository is a maintained evidence index for AI-enabled paid-media work.

## Source of truth

- Edit `data/tools.json`; do not hand-edit the generated `README.md` or `docs/` files.
- Run `npm run build` after every data or presentation change.
- Run `npm run check` before proposing a change.

## Evidence rules

- Prefer vendor documentation, vendor-owned repositories, and official product announcements.
- Label vendor, community, beta, preview, allowlist, and unverified states explicitly.
- `No official MCP verified` means none was found in the cited review. It is not proof that none exists.
- Do not infer write access from the existence of an API or MCP server. State read/write capability only when a source documents it.
- Every tool needs at least one primary source and a current `verifiedOn` date.
- Do not add client data, credentials, account identifiers, spend, performance, or implied client relationships.
- Do not add volatile popularity metrics such as stars, downloads, or market share.

## Editorial rules

- Use British English and sentence case.
- Use The Detail Department as the public brand name.
- Keep descriptions operational and specific. Avoid generic AI claims.
- Do not use the U+2014 em dash.
