# Contributing

Corrections and additions are welcome. This repository is an evidence index, not a software package: the JSON files in `data/` are the source of truth, and `README.md`, `catalogue/` and `docs/` are generated from them.

## Set up locally

You need Node.js 20 or later (CI uses Node 24). There are no dependencies to install.

```bash
git clone https://github.com/The-Detail-Department/ai-paid-media-tools.git
cd ai-paid-media-tools
npm run check   # validate the data and confirm the generated files are current
npm run build   # regenerate README.md, catalogue/ and docs/ after a change
npm run serve   # preview the web index at http://localhost:4173 (needs Python 3)
```

Edit the source files only. `npm run check` fails when a generated file is stale or has been edited by hand.

| What you are changing | Source file |
| --- | --- |
| Interface facts, official links, sources and `verifiedOn` | `data/tools.json` |
| Daily tasks, action capabilities and scopes, setup, connection status and `evidenceBasis` | `data/workflows.json` |
| Grade, readiness, market role, positives and negatives | `data/ratings.json` |
| The CMS companion | `data/cms-tools.json`, `data/cms-workflows.json` and `data/cms-ratings.json` |
| Presentation | `scripts/`, `templates/index.html` and `assets/` |

## What counts as evidence

Every tool needs at least one primary source in `sources`, with `kind` set to:

- `official`: vendor documentation, a vendor-owned product page or an official announcement; or
- `source-code`: a repository owned by the vendor.

Prefer the page that documents the exact route and action. Third-party articles, reviews, community wrappers and marketing copy can give context but cannot establish a capability on their own. A third-party or community route can be listed only when its provenance is labelled explicitly.

## Evidence basis

`evidenceBasis` in `data/workflows.json` records how directly a route was observed. It is separate from grade and readiness.

| Value | Meaning |
| --- | --- |
| `Documentation reviewed` | Assessment based on current official documentation, product announcements and public source repositories. |
| `Connected` | The route was authenticated and its advertised tools or commands were inspected. |
| `Executed` | At least one representative workflow was run against a controlled account or dataset. |
| `Used repeatedly` | The route was used across recurring production work, within the stated boundary. |

- `npm run check` requires `evidenceBasis` to be `Documentation reviewed` whenever `connection.evidence` is `documentation`. Every current record uses that pair, so a documentation-based correction leaves both unchanged.
- Raise `evidenceBasis` only with reproducible, non-sensitive evidence in the pull request: what was connected or run, when, and against what kind of controlled account or dataset. Update `connection.evidence` to match (`connected` or `tested`) in the same change.
- Never include credentials, account identifiers, spend, performance figures or client information.
- A route with a pending review, or a beta, preview, restricted or unverified connection, cannot be rated Production. `npm run check` rejects it.

## Before opening a pull request

1. Use an official source wherever possible.
2. Name the exact route being assessed: MCP, plugin, CLI, API, SDK or another official surface.
3. Explain whether the interface is official, community-maintained, beta, preview or restricted.
4. Record read, create, modify, delete and publish in `data/workflows.json`, with an explicit scope for each in `actionScopes`. Every section uses the same five actions.
5. Describe setup effort and how much of the manual product the route covers.
6. State the biggest blocker in an ordinary daily workflow.
7. Update `verifiedOn`.
8. Keep `evidenceBasis` consistent with the rules above.
9. Run `npm run build` and `npm run check`.

Do not infer MCP capability from the underlying API. If an API can update an ad but the evaluated MCP cannot, the MCP must remain `No` for Modify.

Add official links separately where available: product, exact AI route or endpoint, documentation, official GitHub repository and API or SDK. Write `No official repository verified` instead of linking an unofficial wrapper.

## Pull request flow

1. Fork the repository, or create a branch if you have write access. Keep one tool or one topic per pull request.
2. Change the source files, then run `npm run build` and `npm run check`.
3. Open a pull request that links the official sources and says what changed in the daily workflow.
4. CI runs `npm run check` on every pull request. A maintainer reviews the evidence before merging, and each merge to `main` republishes the web index.

To report a problem without a pull request, use the [correction form](https://github.com/The-Detail-Department/ai-paid-media-tools/issues/new?template=correction.yml). Questions are welcome in the [issue tracker](https://github.com/The-Detail-Department/ai-paid-media-tools/issues).

## Rating changes

Capability facts, workflow assessment and editorial ratings are intentionally separate. A proposed rating change must explain:

1. what changed in the daily workflow;
2. whether readiness should be Production, Test or Research;
3. why the current grade is no longer fair; and
4. which positive or negative should be added, removed or rewritten.

Keep each list to five points or fewer. A vendor announcement alone does not establish production readiness.

Please do not submit copied vendor copy, client information, credentials or unverified promotional claims.
