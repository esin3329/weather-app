# Code review — approval state, F1, F4, and closure scope

## Result

- `codeQualityStatus`: BLOCK
- `recommendation`: REQUEST_CHANGES
- Scope reviewed: `.omo/plans/low-memory-kma-weather-pwa-design.md` and its referenced draft.
- Evidence note: `omo ulw-loop status --json` could not run because its executable returned `EACCES`; no ULW attempt directory could be trusted or resolved. This report therefore uses the required fallback path.

## CRITICAL

None.

## HIGH

1. The durable approval state cannot pass its own start gate. The draft front matter declares `status: review-pending`, all three required reviews as `status: pending`, with null result/session metadata, and a `plan_sha256` of `5b60c2...`; the current plan hash is `108669...`. The executable `review_approval_validator` requires all three reviews to be `approved` with `result: OKAY` and requires the current plan hash to equal the draft hash before bootstrap. Therefore the plan's assertion that approval is already satisfied is not durably validated and execution must fail closed. Anchors: draft lines 3, 7, 10-40; plan lines 179 and 815-860.

   Minimal fix: perform the three fresh reviews against the current plan bytes, then update the front matter and each reviewer record atomically with the actual round/hash/runtime/launch/session/result metadata; set the authoritative top-level status to the approved handoff state. Remove or reconcile the contradictory later `## Approval gate` `status: approved` field (draft line 121) so one durable status is authoritative. Do not merely edit the hash or mark reviews approved without the required review evidence.

## MEDIUM

None.

## LOW

1. `adapter_closeout_validate` and `f4_inventory_validator` accept a path exclusion without independently validating its shape, ownership, or relationship to the closure transaction. Current call sites pass the transaction created under `./.omo/.weather-closure.*`, so the plan's current flow is constrained; however, a future/recovery call that supplied an arbitrary file path could omit that file from the file/symlink inventory. Anchors: plan lines 1252-1270 and 2860-2890; call sites around 3078-3105 and 3168-3175.

   Minimal hardening: before either inventory `find`, require the supplied exclusion to match exactly `./.omo/.weather-closure.*`, be a directory, and equal the locally created/recovered transaction path. Keep the existing post-cleanup `rmdir`/absence assertion.

## Requested gate checks

- Top-level draft status: **FAIL / not durably validated.** The front matter is the state read by the executable validator and it remains pending; the later prose subsection cannot override it. The hash mismatch independently blocks start.
- F1 negative receipt probe: **PASS.** `qa_receipt_negative_probe` copies task 1's receipt, changes only `Verdict: PASS` to `FAIL`, derives expectations from the fixed task-1 path, then sets `receipt` to the temporary copy and requires `receipt_validator` to fail. It neither trusts the temporary receipt's artifact nor creates a tautological test. Anchors: lines 1390-1406 and 704.
- F4 phase-A/full promotion gate: **PASS.** `phase-a` excludes only `final-f4-scope-security.md`; all earlier final receipts remain required. The fixed F4 receipt is absent during phase A, promoted before full validation, and full inventory then includes it. This avoids a self-receipt deadlock. Anchors: lines 1252-1271, 683-688, 337, 700-701.
- Terminal closeout unexpected-file/symlink scope: **PASS in the documented call flow, with the LOW hardening gap above.** Both F4 and closure use `find` over regular files and symlinks, compare both directions with the initial-plus-allowed contracts, validate directories separately, and recheck baseline symlink targets. Closure excludes only its temporary transaction at its documented call sites and asserts that transaction is removed. Anchors: lines 1263-1274, 2838-2839, 2860-2890, 3168-3180, 3393-3404.

## Syntax checks

- `bash -n` on the main QA-validator fenced shell block: PASS (732 lines).
- `bash -n` on the closeout-transaction fenced shell block: PASS (110 lines).
- `node --check` on the Code-mode dispatcher fenced JavaScript block: PASS (454 lines).
- These are syntax-only checks; they do not overcome the failed approval precondition.

## Skill-perspective check

Ran `remove-ai-slops` and `programming` perspectives before judging test relevance/maintainability. No diff was supplied and no production/test source files changed; the reviewed artifact is a Markdown execution plan. The plan does not introduce deletion-only tests, prose prompt tests, implementation-mirroring tests, untyped escape hatches, or needless production parsing within this review scope. Its targeted F1 receipt probe is behaviorally meaningful rather than a test of wording.
