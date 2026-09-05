# Contributing

Corrections and additions are welcome.

## Before opening a pull request

1. Use an official source wherever possible.
2. Name the exact route being assessed: MCP, plugin, CLI, API, SDK or another official surface.
3. Explain whether the interface is official, community-maintained, beta, preview or restricted.
4. Record the category-specific capabilities in `data/workflows.json`; use Read, Create, Modify and Delete only for media platforms.
5. Describe setup effort and how much of the manual product the route covers.
6. State the biggest blocker in an ordinary daily workflow.
7. Update `verifiedOn`.
8. Set `evidenceBasis` only when the route has been connected, executed or used repeatedly. Include reproducible, non-sensitive evidence in the pull request.
9. Run `npm run build` and `npm run check`.

Do not infer MCP capability from the underlying API. If an API can update an ad but the evaluated MCP cannot, the MCP must remain `No` for Modify.

Add official links separately where available: product, exact AI route or endpoint, documentation, official GitHub repository and API or SDK. Write `No official repository verified` instead of linking an unofficial wrapper.

## Rating changes

Capability facts, workflow assessment and editorial ratings are intentionally separate. A proposed rating change must explain:

1. what changed in the daily workflow;
2. whether readiness should be Production, Test or Research;
3. why the current grade is no longer fair; and
4. which positive or negative should be added, removed or rewritten.

Keep each list to five points or fewer. A vendor announcement alone does not establish production readiness.

Please do not submit copied vendor copy, client information, credentials or unverified promotional claims.
