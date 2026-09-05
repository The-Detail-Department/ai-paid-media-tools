# Project guidance

This repository is a maintained evidence index for AI-enabled paid-media work.

## Source of truth

- Edit interface facts in `data/tools.json`, daily workflow assessments in `data/workflows.json`, and editorial grades in `data/ratings.json`; do not hand-edit the generated `README.md` or `docs/` files.
- Run `npm run build` after every data or presentation change.
- Run `npm run check` before proposing a change.

## Evidence rules

- Prefer vendor documentation, vendor-owned repositories, and official product announcements.
- Label vendor, community, beta, preview, allowlist, and unverified states explicitly.
- `No official MCP verified` means none was found in the cited review. It is not proof that none exists.
- Do not infer write access from the existence of an API or MCP server. State read/write capability only when a source documents it.
- Attribute Read, Create, Modify and Delete to the named evaluated route. Never borrow API capability to make a read-only MCP look writable.
- Keep public affiliate programmes distinct from referral, certification, agency and technology partner programmes.
- Every tool needs at least one primary source and a current `verifiedOn` date.
- Do not add client data, credentials, account identifiers, spend, performance, or implied client relationships.
- Do not add volatile popularity metrics such as stars, downloads, or market share.

## Editorial rules

- Use British English and sentence case.
- Use The Detail Department as the public brand name.
- Keep descriptions operational and specific. Avoid generic AI claims.
- Grade the current daily AI paid-media workflow, not the vendor or product overall.
- Keep Production, Test and Research separate from the letter grade.
- Treat setup friction, action depth and manual-feature coverage as grade inputs, not footnotes.
- Support every grade with one to five specific positives and negatives.
- Do not use the U+2014 em dash.
