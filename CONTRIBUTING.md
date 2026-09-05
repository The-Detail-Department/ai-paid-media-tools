# Contributing

Corrections and additions are welcome.

## Before opening a pull request

1. Use an official source wherever possible.
2. Name the exact route being assessed: MCP, plugin, CLI, API, SDK or another official surface.
3. Explain whether the interface is official, community-maintained, beta, preview or restricted.
4. Record Read, Create, Modify and Delete separately in `data/workflows.json`.
5. Describe setup effort and how much of the manual product the route covers.
6. State the biggest blocker in an ordinary daily workflow.
7. Update `verifiedOn`.
8. Run `npm run build` and `npm run check`.

Do not infer MCP capability from the underlying API. If an API can update an ad but the evaluated MCP cannot, the MCP must remain `No` for Modify.

## Rating changes

Capability facts, workflow assessment and editorial ratings are intentionally separate. A proposed rating change must explain:

1. what changed in the daily workflow;
2. whether readiness should be Production, Test or Research;
3. why the current grade is no longer fair; and
4. which positive or negative should be added, removed or rewritten.

Keep each list to five points or fewer. A vendor announcement alone does not establish production readiness.

## Affiliate, referral and partner programmes

Use the vendor's official programme page. Label the programme precisely:

- `Affiliate` only for a current public commission-paying programme;
- `Referral` for a commercial introduction scheme;
- `Partner` for agency, technology, certification or directory access;
- `Retired` when the official programme has ended; or
- `None verified` when no applicable current programme was found.

Terms and availability can change quickly. Include the official URL and a fresh review date. Never add tracking parameters, referral codes or personal affiliate links.

Please do not submit copied vendor copy, client information, credentials or unverified promotional claims.
