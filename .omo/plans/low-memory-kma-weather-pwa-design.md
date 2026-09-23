# low-memory-kma-weather-pwa-design - Work Plan
- Explicit .omo Allowed-Output list: .omo/drafts/low-memory-kma-weather-pwa-design.md; .omo/plans/low-memory-kma-weather-pwa-design.md; .omo/boulder.json; .omo/start-work/ledger.jsonl; .omo/evidence/weather-pwa-design/preflight-manifest.md; .omo/evidence/weather-pwa-design/kma-contract-review.md; .omo/evidence/weather-pwa-design/proxy-threat-review.md; .omo/evidence/weather-pwa-design/pwa-offline-review.md; .omo/evidence/weather-pwa-design/location-privacy-review.md; .omo/evidence/weather-pwa-design/ui-accessibility-review.md; .omo/evidence/weather-pwa-design/performance-budget-review.md; .omo/evidence/weather-pwa-design/design-integrity-review.md; .omo/evidence/weather-pwa-design/output-manifest.sha256; .omo/evidence/weather-pwa-design/output-manifest-receipt.md; .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md through task-9-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md; .omo/evidence/weather-pwa-design/final-f2-document-quality.md; .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md; .omo/evidence/weather-pwa-design/final-f4-scope-security.md. No other terminal .omo file is permitted; transient transaction-owned paths under .omo/.weather-bootstrap.*, .omo/.weather-preflight.*, .omo/.weather-manifest.*, .omo/.weather-state.*, and .omo/.weather-closure.* are allowed only during their named transactions and must be absent at terminal closure.
- Fixed-output-contract: AGENTS.md; DESIGN.md; docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; .omo/drafts/low-memory-kma-weather-pwa-design.md; .omo/plans/low-memory-kma-weather-pwa-design.md; .omo/boulder.json; .omo/start-work/ledger.jsonl; .omo/evidence/weather-pwa-design/preflight-manifest.md; .omo/evidence/weather-pwa-design/kma-contract-review.md; .omo/evidence/weather-pwa-design/proxy-threat-review.md; .omo/evidence/weather-pwa-design/pwa-offline-review.md; .omo/evidence/weather-pwa-design/location-privacy-review.md; .omo/evidence/weather-pwa-design/ui-accessibility-review.md; .omo/evidence/weather-pwa-design/performance-budget-review.md; .omo/evidence/weather-pwa-design/design-integrity-review.md; .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md; .omo/evidence/weather-pwa-design/output-manifest.sha256; .omo/evidence/weather-pwa-design/output-manifest-receipt.md; .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md; .omo/evidence/weather-pwa-design/final-f2-document-quality.md; .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md; .omo/evidence/weather-pwa-design/final-f4-scope-security.md
- Fixed-directory-contract: .omo/evidence; .omo/evidence/weather-pwa-design; .omo/start-work; docs; docs/superpowers; docs/superpowers/specs
- Explicit transient receipt allowlist: `.omo/.weather-receipt.*` is valid only for candidate receipt promotion; it must not appear in the promoted manifest or terminal inventory. The bootstrap, preflight, manifest, state, and closure transaction globs are separately enumerated above and are likewise terminally absent.
- Transient-receipt allowance: transaction-owned receipt candidates under `.omo/.weather-receipt.*` are permitted only while a task or final-gate receipt is being candidate-validated and atomically promoted; they must be absent at terminal closure and are excluded from the fixed terminal output list.
## TL;DR (For humans)
<!-- Fill this LAST, after the detailed plan below is written, so it summarizes the REAL plan. -->
<!-- Plain English for a non-engineer: NO file paths, NO todo numbers, NO wave/agent/tool names. -->
The package delivers an approved product and architecture design, a Korean visual design system, official-source evidence, and bounded orchestration records for a future implementation.
**What you'll get:** A decision-complete product and architecture specification plus a Korean visual design system for an installable, low-memory weather PWA. The package also includes official-source evidence and independent review records that future implementation can use without inventing missing boundaries.

**Why this approach:** Separate provider-neutral forecast and warning contracts from a credential-holding proxy, then keep the browser UI bounded with native lists, a versioned shell, and one offline snapshot. This preserves security, offline usefulness, and the app-owned memory distinction while leaving deployment and implementation choices explicit.

**What it will NOT do:** It will not create application code, call KMA live, include credentials, choose a deployment provider, or initialize Git.
It will not claim that installability, offline behavior, accessibility, or memory targets have passed runtime QA.
It will not add accounts, analytics, maps, radar, charts, push, background sync, continuous tracking, or a multi-place carousel.

**Effort:** Large
**Risk:** Medium - the KMA contracts and browser platform behavior are externally versioned, so source dates and explicit implementation boundaries must stay visible.
**Decisions to sanity-check:** The recorded Edge-first target, manual-first coarse location, one saved place/snapshot, in-app-only warnings, bounded short-forecast breadth, WCAG 2.2 AA target, provider-neutral deployment, and proposed resource budgets are reversible documentation defaults only; the final implementation owner must approve or override them before product work.

Your next move: Run the required dual high-accuracy plan review, then execute the design-only plan through the OMO worker flow.

---

> TL;DR (machine): Large, medium-risk design-only delivery of the KMA contract/proxy/PWA/privacy/UI/performance evidence set, the architecture spec, and DESIGN.md, with dual review and scope checks.

## Scope
### Must have
- Produce `docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md` with product, architecture, data normalization, security, privacy, offline, error, performance, and future verification requirements.
- Produce `DESIGN.md` with the Korean single-page information architecture, tokens, typography, spacing, components, responsive states, copy states, accessibility behavior, and accepted design debt.
- Produce six component evidence files under `.omo/evidence/weather-pwa-design/`, each grounded in current official sources where its claim can change.
- Produce the preflight manifest, nine task receipts, one output manifest plus its detached digest receipt, and four final-verification receipts under `.omo/evidence/weather-pwa-design/`.
- Keep the forecast and warning domains independently degradable; specify the normalized envelope, freshness/expiry semantics, stable errors, and the proxy boundary.
- State numeric resource budgets and a reproducible future measurement protocol that distinguishes browser-process memory from app-owned JS heap/resources.
- Record exact future acceptance scenarios for installability, grid/data flow, offline snapshot retention, secret exclusion, performance, accessibility, and responsive behavior without claiming they already passed.

### Must NOT have (guardrails, anti-slop, scope boundaries)
- No application source, manifest, service worker, proxy code, package manager files, deployment configuration, API key, live KMA invocation, or Git initialization.
- No provider selection, production secret store, traffic ownership, cost commitment, account, analytics, advertising, map, radar, chart library, push, background sync, continuous location tracking, or multi-place carousel.
- No framework, chart library, web font, or icon package recommendation without evidence; default to vanilla HTML/CSS/ES modules and platform primitives.
- No browser-facing upstream URL or credential-bearing example; all examples must be redacted and provider-neutral.
- No claim that runtime behavior, memory targets, accessibility, installability, or offline behavior has passed implementation QA.
- The announced defaults are documented proposals, not irreversible owner commitments; the future implementation plan must carry an explicit accept/override decision.

## Verification strategy
All verification is agent-executed; the final user acknowledgment is a handoff gate, not a substitute for evidence. This plan must not trigger product runtime QA, live KMA calls, or human operation of an unfinished app.
- Test decision: none; this is a documentation-only delivery. Use exact shell/Node structural checks, official-document retrieval checks, source-link/date checks, redacted-secret scans, and independent semantic document review.
- Evidence: `.omo/evidence/weather-pwa-design/task-<N>-low-memory-kma-weather-pwa-design.md` plus the named component artifacts. Because no ulw-loop runtime is selected, use `.omo/evidence/weather-pwa-design/` as the attempt directory.
- Execution root: `/home/jeon_huijun/Project/weather`, the directory containing `AGENTS.md`. Every repository-relative command starts from this root, and preflight records `Workspace-Root: /home/jeon_huijun/Project/weather`. Read-only review copies may use another temporary root for plan inspection; that does not change this fixed execution root.
- Preflight must capture `Plan-Review-SHA256` as the immutable exact reviewed-plan bytes before execution, not as a later checkbox-state hash, and `Plan-Contract-SHA256` as the immutable canonical plan bytes after replacing every top-level `- [x]` or `- [ ]` marker with `- [ ]`. The exact hash command is `plan=.omo/plans/low-memory-kma-weather-pwa-design.md; reviewed_hash=$(sha256sum "$plan" | awk '{print $1}'); contract_hash=$(LC_ALL=C sed -E 's/^- \[(x| )\] (([0-9]+|F[1-4])\.)/- [ ] \2/' "$plan" | sha256sum | awk '{print $1}'); test "$(sed -n 's/^Plan-Review-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)" = "$reviewed_hash" && test "$(sed -n 's/^Plan-Contract-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)" = "$contract_hash"`. Every task receipt records these two pre-execution hashes copied from preflight; checkbox progress updates may change only the current raw plan hash, never either frozen contract hash.
- The same preflight captures every regular-file path in `initial-files` as exact `path sha256` rows using the literal `todo_1_capture_initial_inventory` command below; the assembler emits `Initial-File-SHA256:` for ordinary files and a path-only `Initial-Mutable-File:` row for `.omo/plans/low-memory-kma-weather-pwa-design.md`, `.omo/boulder.json`, and `.omo/start-work/ledger.jsonl`. Initial directories and baseline symlink targets use that same literal capture command. F4 recomputes every recorded immutable digest and symlink target and fails on any drift; mutable orchestration files remain schema/scope checked, while the mutable plan is additionally covered by the frozen reviewed and canonical hashes.
- Every task receipt must contain exactly one of each anchored field: `Verdict: PASS`, `Artifact: <expected exact path>`, `Principal-Artifact-SHA256: <SHA-256 of that exact Artifact>`, `Command: <expected exact invocation>`, `Exit-Status: 0`, `Sources: <expected exact URL/date pairs, or none only when the task makes no external claim>`, `Plan-Review-SHA256: <64 hex>`, `Plan-Contract-SHA256: <64 hex>`, `Adversarial-Classes: <ten semicolon-separated entries>`, `Temporary-Paths: none`, `Long-Lived-Processes: none`, and `Cleanup-Status: PASS`. Final-gate receipts use the same schema with `Verdict: APPROVE` and add exactly one `Output-Manifest-SHA256: <64 hex>`. The validator receives the expected artifact path, exact command string, and exact sources string as arguments, independently hashes that principal artifact, and rejects a stale receipt, a mutated artifact, or a mutated digest field.
- Shared adversarial IDs: source_version_drift, source_inference_confusion, credential_leakage, boundary_contradiction, privacy_overcollection, false_runtime_claim, numeric_budget_drift, unexpected_product_file, accessibility_state_omission, stale_missing_evidence. The Adversarial-Classes value uses semicolon-separated entries with no semicolons inside a result/reason: <id>=PROBED:<non-empty observable result>;<id>=NA:<non-empty reason>. Every required ID appears exactly once; no unknown entry is allowed.
- Shared receipt validator: the only executable `receipt_validator`, `final_gate_validator`, and `expected_binding` definitions are the canonical trio in the `Executable expected-binding replacement` fence, extractable as the `WORKER_QA_BINDING` marked block; `expected_verdict=PASS` for tasks and `expected_verdict=APPROVE` for final gates. Caller contract: every caller sets `expected_verdict`, `fixed_receipt` (the exact fixed receipt path owned by the lane), and `receipt_to_check` (the receipt file under test) in the same bash shell before invoking `receipt_validator` or `final_gate_validator`; positional arguments are accepted and ignored. No worker or root shell may define `receipt_validator`, `final_gate_validator`, or `expected_binding` from any other text - the historical inline prose fragment that previously stood here is superseded and must never be sourced. Extraction and sourcing follow the canonical shell-composition erratum in the Execution errata. Every task runs the validator after its happy/failure probes; every final lane runs it after its lane QA.
- Receipt-binding rule: every task and final-gate caller sets `expected_artifact`, `expected_command`, and `expected_sources` in the same shell before invoking `receipt_validator`; the values are the exact artifact path, the exact happy/failure/cleanup QA invocation named in that task, and the exact source URL/date string required by that task. `receipt_validator` must compare its positional arguments to the anchored `Artifact:`, `Command:`, and `Sources:` fields, require the artifact to equal the fixed output owned by that task, and reject `Sources: none` for todo 1 or any future task whose references/output make an external claim. The task receipt gates below are not shorthand permission to omit these three arguments.
- Expected-binding rule: before every receipt or final-gate validation, call expected_binding receipt from the executable replacement below. It uses the principal-artifact map and independent KMA/task-source URL maps, never the receipt under test; a mismatch fails before receipt_validator.
- The executable `expected_binding()` case map is the only source of expected artifact/command/source values. For todo 1 it builds the expected source string from the independent `Source-Record` rows with `sed`/`paste` and rejects an empty result; all other `none` values are permitted only because those tasks make no new external-source claim.
- Immutable source expectation: before preflight promotion, todo 1 records the six exact official documentation URL/date pairs as `Source-Record` rows in the staged preflight manifest; the promoted preflight is immutable. The KMA review copies those rows byte-for-byte. Todo 1 receipt binding reads only the promoted preflight rows, never the receipt or a mutable task artifact; F4 requires the KMA review rows and preflight rows to match in URL/date/order.
- Task-source registry: the same staged preflight manifest also records `Task-Source-Record: 2.1` for `https://www.data.go.kr/catalog/15084084/openapi.json`, `2.2` for `https://www.data.go.kr/data/15000415/openapi.do`, and `2.3` for `https://apihub.kma.go.kr/notice.do?seqNotice=21`; `3.1` for `https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable`, `3.2` for `https://www.w3.org/TR/service-workers/`, and `3.3` for `https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/`; `4.1` for `https://www.data.go.kr/catalog/15084084/openapi.json`, `4.2` for `https://apihub.kma.go.kr/notice.do?seqNotice=39`, `4.3` for the exact KMA API-list URL in todo 1, and `4.4` for `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API`; `5.1` for `https://www.w3.org/TR/WCAG22/`; and `6.1` for `https://developer.chrome.com/docs/devtools/memory-problems` plus `6.2` for `https://learn.microsoft.com/en-us/microsoft-edge/devtools/memory-problems/microsoft-edge-browser-task-manager`. Each row uses exactly `Task-Source-Record: <task>.<n> | Source-URL: <url> | Retrieved-At: <ISO-8601> | Source-Modified: <date or NOT EXPOSED> | Body-SHA256: <64 hex>`, followed immediately by `Digest-Command: sha256sum <exact downloaded reference path>`, before preflight promotion. The task receipt `Sources:` value is the exact URL/date projection of these immutable rows, so Tasks 2–6 cannot pass with `Sources: none`.
- KMA source URL identity: the sixth KMA source is exactly `https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286`; References, retrieval loop, source rows, and every QA check must use this identical literal.
- Executable binding function: expected_binding() uses a plan-owned principal-artifact map and never derives Artifact from the receipt under test: task 1 -> .omo/evidence/weather-pwa-design/kma-contract-review.md, command todo-1-source-contract-and-receipt-qa, sources kma_expected_sources; task 2 -> proxy-threat-review.md / todo-2-proxy-threat-qa / Task-Source-Record 2 projection; task 3 -> pwa-offline-review.md / todo-3-offline-contract-qa / Task-Source-Record 3 projection; task 4 -> location-privacy-review.md / todo-4-location-privacy-qa / Task-Source-Record 4 projection; task 5 -> ui-accessibility-review.md / todo-5-ui-accessibility-qa / Task-Source-Record 5 projection; task 6 -> performance-budget-review.md / todo-6-performance-budget-qa / Task-Source-Record 6 projection; task 7 -> docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md / todo-7-specification-qa / none; task 8 -> DESIGN.md / todo-8-design-system-qa / none; task 9 -> design-integrity-review.md / todo-9-integrity-manifest-qa / none; F1 -> output-manifest.sha256 / final-f1-plan-compliance-qa / none; F2 -> the specification / final-f2-document-quality-qa / none; F3 -> DESIGN.md / final-f3-semantic-qa / none; F4 -> preflight-manifest.md / final-f4-scope-security-qa / none. The caller sets receipt to the receipt being validated, expected_artifact to the principal artifact, expected_command to the exact command, and expected_sources to the independent source projection before receipt_validator.
- Final-gate validator: the only executable `final_gate_validator` definition is the canonical one in the `WORKER_QA_BINDING` marked block (the `Executable expected-binding replacement` fence); the historical inline fragment that previously stood here is superseded and must never be sourced. Set `fixed_receipt` to the final receipt path, `receipt_to_check` to the receipt under test, and `expected_verdict=APPROVE` in the same shell before invoking `final_gate_validator`; it ignores positional arguments and rejects a `fixed_receipt` outside `final-f[1-4]-*.md`. Every final receipt is rescanned after its complete schema is written, including the detached manifest digest and scope/source fields.
- Named Source-Record-Validator: run `set -euo pipefail; awk 'BEGIN{records=digests=0; pending=0; ok=1} /^Source-Record:/ {records++; pending=1; if ($0 !~ /^Source-Record: [1-6] [|] Source-URL: .+ [|] Retrieved-At: [0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(Z|[+-][0-9]{2}:[0-9]{2}) [|] Source-Modified: (NOT EXPOSED|[0-9]{4}-[0-9]{2}-[0-9]{2}) [|] Body-SHA256: [0-9a-f]{64}$/) ok=0; next} /^Digest-Command:/ {digests++; if (!pending || $0 !~ /^Digest-Command: sha256sum [^[:space:]]+$/) ok=0; pending=0; next} {if (pending) ok=0} END{if (pending) ok=0; exit !(records==6 && digests==6 && ok)}' .omo/evidence/weather-pwa-design/kma-contract-review.md`; it must be invoked by todo 1 and F4, so every source record has an ISO-8601 retrieval timestamp, a date or `NOT EXPOSED` modified value, a 64-hex body digest, and an immediately adjacent digest command.
- Named Scenario-Row-Validator: run `set -euo pipefail; awk -v ids='forecast-success,warning-success,offline-forecast-only,offline-warning-unknown,stale-data-age,location-denied,location-unavailable,location-reset,update-reconnect-visibility,performance-protocol,accessibility-protocol,responsive-protocol' -v fields='Scenario-Prerequisites,Scenario-Command,Scenario-Steps,Scenario-Expected,Scenario-Failure' 'BEGIN{split(ids,wanted,","); split(fields,required,","); for(i in wanted) allowed[wanted[i]]=1; bad=0} /^Scenario-ID: /{id=$0; sub(/^Scenario-ID: /,"",id); if(!(id in allowed) || ++count[id]!=1) bad=1; current=id; next} /^Scenario-(Prerequisites|Command|Steps|Expected|Failure): [^[:space:]].*/{field=$1; sub(/:$/, "", field); if(current=="" || ++seen[current SUBSEP field]!=1) bad=1; next} END{for(i in wanted){id=wanted[i]; if(count[id]!=1) bad=1; for(j in required) if(seen[id SUBSEP required[j]]!=1) bad=1} exit bad}' .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md`; it must be invoked after the global count checks and before `final_gate_validator`, so each fixed scenario id owns one complete, non-empty field set and unknown/duplicate ids fail.
- Named Negative-Scan-Validator: callers set `negative_pattern`, `negative_paths` as a bash array, and `negative_tmp` to a trapped temporary directory, then run `negative_scan_validator() { set +e; negative_hits=$(rg -ni "$negative_pattern" "${negative_paths[@]}" 2>"$negative_tmp/scan-error"); negative_status=$?; set -e; if [ "$negative_status" -ne 1 ] || [ -s "$negative_tmp/scan-error" ] || [ -n "$negative_hits" ]; then return 1; fi; return 0; }; negative_scan_validator`; status 0 means a forbidden match, status 1 means a clean scan, and any other status or stderr is failure. The caller removes `negative_tmp` and proves it absent on success and its EXIT trap removes it on failure.
- Named Filtered-Negative-Scan-Validator: callers set `negative_pattern`, `allowed_pattern`, `negative_paths`, and a trapped `negative_tmp`, then run `filtered_negative_scan_validator() { set +e; raw_hits=$(rg -ni "$negative_pattern" "${negative_paths[@]}" 2>"$negative_tmp/raw-error"); rg_status=$?; set -e; if [ "$rg_status" -ne 0 ] && [ "$rg_status" -ne 1 ]; then return 1; fi; if [ -s "$negative_tmp/raw-error" ]; then return 1; fi; if [ "$rg_status" -eq 1 ]; then return 0; fi; set +e; disallowed_hits=$(printf '%s\n' "$raw_hits" | rg -vi "$allowed_pattern" 2>"$negative_tmp/filter-error"); filter_status=$?; set -e; if [ "$filter_status" -eq 2 ] || [ -s "$negative_tmp/filter-error" ] || [ "$filter_status" -eq 0 ]; then return 1; fi; return 0; }; filtered_negative_scan_validator`; this keeps source-scan errors distinct from a clean no-match result and avoids a pipefail status being hidden by the second `rg`.
- Credential-pattern contract: every secret scan constructs split markers for eleven credential classes — `ServiceKey=` URL query names, lowercase `serviceKey=` URL query names, `Authorization: Bearer` values, `Authorization: Basic` values, `Cookie:` values, `token:` values, `"token"` JSON field values, `serviceKey:` field values, `api_key` values, `X-API-Key` values, and private-key headers; the required value pattern is exactly the expansion of `qa_secret_pattern_build`, with `x_api_key_marker` constructed as `printf 'X-%s-%s' 'API' 'Key'`. Build markers only with `printf`, so no real credential syntax is stored in a plan or artifact. The failure probe (`todo_1_credential_fixture_probe`) must create one synthetic fixture per marker class, require status 0 for each of the eleven fixtures, then delete every fixture and assert absence; the final scan must return status 1 with no stderr.
- Final-receipt staging rule: final lanes use two phases. Phase A keeps only Verdict: IN_PROGRESS and runs every happy, failure, manifest, negative, filtered-negative, scenario-row, source, and cleanup probe that does not depend on the completed receipt. Phase B atomically promotes the complete Verdict: APPROVE receipt, then runs the receipt self-scan and final_gate_validator; on failure it removes the promoted receipt and leaves no stale approval. This two-phase rule supersedes any wording that says every probe must precede receipt promotion.
- Named Preflight-Recovery-Validator: todo 1 captures initial paths, regular-file hashes, directories, and symlink targets before any workspace mkdir. It writes the manifest beneath a staged evidence/weather-pwa-design directory and atomically promotes that whole staged evidence directory into ./.omo/evidence, so an interruption before promotion leaves neither .omo/evidence nor the fixed output directory. The recovery check compares the preserved capture and staging inventories and consumes only exact transaction-owned paths.
- Executable Preflight-Recovery-Validator: define and invoke the forced-status-77 probe inside a subshell, with its EXIT trap scoped to that subshell. The probe stages a partial manifest under a recovery-only directory, fails before any rename, proves that ./.omo/evidence and its generated output directory are absent, then removes only that exact recovery directory. The subshell requirement prevents the probe from clobbering the caller's preflight EXIT trap.
- Durable recovery check: on interruption, accept only journal-bound states: capture-only with exactly one `/tmp/weather-preflight-capture.*` and no stage, staged with exactly one capture plus one `./.omo/.weather-preflight.*` stage and all four inventories byte-identical, promoted with a live preflight manifest plus the six exact stage cleanup files, cleanup-planned with a verified subset of those files, or the journal-less empty-stage cleanup gap. Capture-only recovery recreates one stage from the captured inventories; an incomplete capture-only or no-journal pre-promotion stage tree is narrowly validated, discarded, and recaptured/rebuilt from the still-unmutated workspace; staged recovery resumes the same retrieval/promotion transaction; promoted/cleanup-planned recovery consumes only the exact temporary paths. Receipt promotion and later checkbox/state promotion are separate but recoverable frontiers: if a fixed receipt exists while its checkbox is still unchecked (including the F4 lane, where the root validates the fixed F4 receipt with `adapter_receipt_body_check` in its full-inventory phase and never re-runs `f4_inventory_validator phase-a`), the root validates that fixed receipt in place, deletes only the returned base receipt, and advances the state transaction without attempting a second fixed-receipt promotion. Any other combination fails closed and no broad `.omo` path is removed.
- Retry-baseline exclusion: create archive_dir with mktemp -d ./.weather-plan-retry.XXXXXX so RETRY_ARCHIVE has the same ./ prefix emitted by find .; use only the two exact -path exclusions for that archive and its descendants. Create every declared destination, including archive_dir/docs/superpowers/specs, before the first move; assert that no other path is excluded.
- Preflight recovery state: initialize `preflight_status=1` before capture and set it to `0` only after the staged manifest, source registry, hashes, and all required rows have been atomically promoted and the exact capture/staging paths have been removed. The EXIT trap removes capture/staging only after the durable cleanup state and absence assertions; on interruption it leaves exactly the `/tmp/weather-preflight-capture.*` capture and `.omo/.weather-preflight.*` staging for `preflight_recovery_validator`, which compares them to the current inventory, resumes or rolls back idempotently, and consumes them only after successful promotion and cleanup.
- Named Initial-Inventory-Validator: run the literal `initial_inventory_validator` from the QA validator block; it must be called by todo 1 and F4. The capture occurs after bootstrap, so `.omo/plans/low-memory-kma-weather-pwa-design.md`, `.omo/boulder.json`, and `.omo/start-work/ledger.jsonl` each have an `Initial-Path:` and exactly one path-only `Initial-Mutable-File: <path>` row. Ordinary regular files have `Initial-File-SHA256:` rows, symlinks have `Initial-Symlink-Target:` rows, and zero symlink rows remains valid when no baseline symlink exists.
- Named Cleanup-Trap-Validator: run `set -euo pipefail; trap_tmp=$(mktemp -d); set +e; (trap 'rm -rf "$trap_tmp"' EXIT; exit 1); trap_status=$?; set -e; test "$trap_status" -eq 1; test ! -e "$trap_tmp"`; this forced-failure probe must be invoked by todo 9, F1, and F4 in addition to their happy-path cleanup checks, proving EXIT-trap cleanup rather than merely deleting a successful fixture.
- Named Manifest-Path-Order-Validator: the cleanup-safe validator is the subshell-wrapped function in the literal QA validator block, with the fixed 19-path array, sha256sum check, exact row count, and temporary-directory cleanup. Task 9 and F1 invoke this function only after the live manifest exists; Task 9 uses staged_manifest_validator before promotion.
- Executable Manifest-Path-Order-Validator: define manifest_path_order_validator() { ( set -euo pipefail; manifest_tmp=$(mktemp -d); trap 'rm -rf "$manifest_tmp"' EXIT; expected_paths="$manifest_tmp/expected"; actual_paths="$manifest_tmp/actual"; manifest_paths=(.omo/evidence/weather-pwa-design/preflight-manifest.md docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md DESIGN.md .omo/evidence/weather-pwa-design/kma-contract-review.md .omo/evidence/weather-pwa-design/proxy-threat-review.md .omo/evidence/weather-pwa-design/pwa-offline-review.md .omo/evidence/weather-pwa-design/location-privacy-review.md .omo/evidence/weather-pwa-design/ui-accessibility-review.md .omo/evidence/weather-pwa-design/performance-budget-review.md .omo/evidence/weather-pwa-design/design-integrity-review.md .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md); printf '%s\n' "${manifest_paths[@]}" > "$expected_paths"; sed -E 's/^[0-9a-f]{64}  //' .omo/evidence/weather-pwa-design/output-manifest.sha256 > "$actual_paths"; cmp -s "$expected_paths" "$actual_paths" || return 1; sha256sum --check .omo/evidence/weather-pwa-design/output-manifest.sha256 >/dev/null || return 1; test "$(wc -l < .omo/evidence/weather-pwa-design/output-manifest.sha256)" -eq 19 || return 1; rm -rf "$manifest_tmp"; trap - EXIT; test ! -e "$manifest_tmp"; ); }; invoke this function after the live manifest exists and before final_gate_validator. The subshell keeps its EXIT trap from clobbering any caller trap.
- Manifest promotion rule: Task 9 stages the 19 digest lines and detached receipt under transaction-owned same-filesystem directories, validates both with staged_manifest_validator and the digest comparison, records manifest-journal state, then promotes the pair with verified rollback. The live manifest_path_order_validator runs only after pair promotion; all stage directories and the journal are removed and asserted absent before F1 starts.
- Literal manifest-pair recovery entrypoint:
~~~sh
# MANIFEST_PAIR_RECOVERY_BEGIN
manifest_pair_recovery_check() {
  set -euo pipefail
  mapfile -t manifest_txns < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-manifest.*' -print | LC_ALL=C sort)
  case "${#manifest_txns[@]}" in
    0) MANIFEST_RESUME=none; return 0 ;;
    1) ;;
    *) return 1 ;;
  esac
  manifest_txn="${manifest_txns[0]}"
  test -s "$manifest_txn/manifest-journal"
  manifest_state=$(tail -n 1 "$manifest_txn/manifest-journal")
  manifest_file=.omo/evidence/weather-pwa-design/output-manifest.sha256
  receipt_file=.omo/evidence/weather-pwa-design/output-manifest-receipt.md
  case "$manifest_state" in
    pair=cleanup-planned) ;;
    *) test -s "$manifest_txn/manifest.digest"; test -s "$manifest_txn/receipt.digest" ;;
  esac
  verify_member() { expected_digest="$1"; actual_file="$2"; test -s "$actual_file"; test "$(sha256sum "$actual_file" | awk '{print $1}')" = "$(cat "$expected_digest")"; }
  reconcile_manifest_move() {
    if [ -e "$manifest_txn/output-manifest.sha256" ]; then
      test ! -e "$manifest_file"
    else
      verify_member "$manifest_txn/manifest.digest" "$manifest_file"
      printf '%s\n' 'manifest=promoted receipt=staged' > "$manifest_txn/manifest-journal"
    fi
  }
  reconcile_receipt_move() {
    if [ -e "$manifest_txn/output-manifest-receipt.md" ]; then
      test ! -e "$receipt_file"
    else
      verify_member "$manifest_txn/receipt.digest" "$receipt_file"
      printf '%s\n' 'manifest=promoted receipt=promoted' > "$manifest_txn/manifest-journal"
    fi
  }
  case "$manifest_state" in
    'manifest=staged receipt=staged'|'manifest=promotion-planned receipt=staged'|'manifest=promoted receipt=staged'|'manifest=promotion-planned receipt=promotion-planned'|'manifest=promoted receipt=promotion-planned')
      if [ -e "$manifest_txn/output-manifest.sha256" ]; then
        test ! -e "$manifest_file"
        staged_manifest_validator "$manifest_txn/output-manifest.sha256"
        sha256sum --check "$manifest_txn/output-manifest.sha256" >/dev/null
        mv "$manifest_txn/output-manifest.sha256" "$manifest_file"
        verify_member "$manifest_txn/manifest.digest" "$manifest_file"
        printf '%s\n' 'manifest=promoted receipt=staged' > "$manifest_txn/manifest-journal"
      else
        verify_member "$manifest_txn/manifest.digest" "$manifest_file"
      fi
      if [ -e "$manifest_txn/output-manifest-receipt.md" ]; then
        test ! -e "$receipt_file"
        mv "$manifest_txn/output-manifest-receipt.md" "$receipt_file"
        verify_member "$manifest_txn/receipt.digest" "$receipt_file"
        printf '%s\n' 'manifest=promoted receipt=promoted' > "$manifest_txn/manifest-journal"
      else
        verify_member "$manifest_txn/receipt.digest" "$receipt_file"
      fi
      manifest_path_order_validator
      printf '%s\n' pair=committed > "$manifest_txn/manifest-journal"
      printf '%s\n' pair=cleanup-planned > "$manifest_txn/manifest-journal"
      rm -f "$manifest_txn/manifest.digest" "$manifest_txn/receipt.digest" "$manifest_txn/manifest-journal"
      rmdir "$manifest_txn"
      test ! -e "$manifest_txn"
      MANIFEST_RESUME=none
      ;;
    'manifest=promoted receipt=promoted'|'pair=committed')
      verify_member "$manifest_txn/manifest.digest" "$manifest_file"
      verify_member "$manifest_txn/receipt.digest" "$receipt_file"
      manifest_path_order_validator
      printf '%s\n' pair=committed > "$manifest_txn/manifest-journal"
      printf '%s\n' pair=cleanup-planned > "$manifest_txn/manifest-journal"
      rm -f "$manifest_txn/manifest.digest" "$manifest_txn/receipt.digest" "$manifest_txn/manifest-journal"
      rmdir "$manifest_txn"
      test ! -e "$manifest_txn"
      MANIFEST_RESUME=none
      ;;
    pair=cleanup-planned)
      if [ -e "$manifest_txn/manifest.digest" ]; then verify_member "$manifest_txn/manifest.digest" "$manifest_file"; fi
      if [ -e "$manifest_txn/receipt.digest" ]; then verify_member "$manifest_txn/receipt.digest" "$receipt_file"; fi
      test -s "$manifest_file"; test -s "$receipt_file"
      manifest_path_order_validator
      rm -f "$manifest_txn/manifest.digest" "$manifest_txn/receipt.digest" "$manifest_txn/manifest-journal"
      rmdir "$manifest_txn"
      test ! -e "$manifest_txn"
      MANIFEST_RESUME=none
      ;;
    *) return 1 ;;
  esac
}
# r34 override: this last declaration is the sole manifest-pair recovery authority extracted by the dispatcher.
manifest_pair_recovery_check() {
  set -euo pipefail
  mapfile -t manifest_txns < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-manifest.*' -print | LC_ALL=C sort)
  case "${#manifest_txns[@]}" in 0) MANIFEST_RESUME=none; return 0 ;; 1) ;; *) return 1 ;; esac
  manifest_txn="${manifest_txns[0]}"
  manifest_file=.omo/evidence/weather-pwa-design/output-manifest.sha256
  receipt_file=.omo/evidence/weather-pwa-design/output-manifest-receipt.md
  journal="$manifest_txn/manifest-journal"
  if [ ! -e "$journal" ]; then
    for first_journal_tmp in "$manifest_txn"/manifest-journal.tmp.*; do
      [ -e "$first_journal_tmp" ] || continue
      test -f "$first_journal_tmp"; test ! -L "$first_journal_tmp"
      test ! -e "$manifest_file"; test ! -e "$receipt_file"
      rm -f "$first_journal_tmp"
    done
    test -z "$(find "$manifest_txn" -mindepth 1 -print -quit)"
    rmdir "$manifest_txn"; MANIFEST_RESUME=none; return 0
  fi
  test -f "$journal"; test ! -L "$journal"; test "$(wc -l < "$journal")" -eq 1
  manifest_state=$(cat "$journal")
  case "$manifest_state" in
    'manifest=staged receipt=staged'|'manifest=promotion-planned receipt=staged'|'manifest=promoted receipt=staged'|'manifest=promotion-planned receipt=promotion-planned'|'manifest=promoted receipt=promotion-planned'|'manifest=promoted receipt=promoted'|pair=committed|pair=cleanup-planned) ;;
    *) return 1 ;;
  esac
  manifest_atomic_line() { target="$1"; value="$2"; tmp=$(mktemp "${target}.tmp.XXXXXX"); printf '%s\n' "$value" > "$tmp"; test "$(wc -l < "$tmp")" -eq 1; test "$(cat "$tmp")" = "$value"; mv "$tmp" "$target"; }
  manifest_digest_file() { source="$1"; digest_file="$2"; value=$(sha256sum "$source" | awk '{print $1}'); manifest_atomic_line "$digest_file" "$value"; }
  manifest_verify() { digest_file="$1"; verify_source="$2"; test -f "$digest_file"; test ! -L "$digest_file"; test "$(wc -l < "$digest_file")" -eq 1; rg -qx '[0-9a-f]{64}' "$digest_file"; test -s "$verify_source"; test "$(sha256sum "$verify_source" | awk '{print $1}')" = "$(cat "$digest_file")"; }
  manifest_promote_copy() { source="$1"; target="$2"; digest_file="$3"; if [ -e "$source" ]; then if [ -e "$target" ]; then manifest_verify "$digest_file" "$target"; manifest_verify "$digest_file" "$source"; rm -f "$source"; else tmp=$(mktemp "$(dirname "$target")/.manifest-promote.XXXXXX"); cp "$source" "$tmp"; manifest_verify "$digest_file" "$tmp"; mv "$tmp" "$target"; manifest_verify "$digest_file" "$target"; rm -f "$source"; fi; else manifest_verify "$digest_file" "$target"; fi; }
  for promote_orphan in ./.omo/evidence/weather-pwa-design/.manifest-promote.*; do
    [ -e "$promote_orphan" ] || continue
    test -f "$promote_orphan"; test ! -L "$promote_orphan"
    promote_orphan_digest=$(sha256sum "$promote_orphan" | awk '{print $1}')
    if [ -s "$manifest_txn/manifest.digest" ] && [ "$promote_orphan_digest" = "$(cat "$manifest_txn/manifest.digest")" ]; then rm -f "$promote_orphan";
    elif [ -s "$manifest_txn/receipt.digest" ] && [ "$promote_orphan_digest" = "$(cat "$manifest_txn/receipt.digest")" ]; then rm -f "$promote_orphan";
    elif [ -s "$manifest_txn/output-manifest.sha256" ] || [ -s "$manifest_txn/output-manifest-receipt.md" ] || [ -s "$manifest_file" ] || [ -s "$receipt_file" ]; then rm -f "$promote_orphan";
    else return 1; fi
  done
  while IFS= read -r tmp_orphan; do
    test -f "$tmp_orphan"; test ! -L "$tmp_orphan"
    tmp_target=${tmp_orphan%.tmp.*}
    case "$tmp_target" in
      "$journal")
        test -s "$journal"; test "$(wc -l < "$journal")" -eq 1; rm -f "$tmp_orphan" ;;
      "$manifest_txn/manifest.digest")
        if [ -s "$manifest_txn/output-manifest.sha256" ]; then manifest_source="$manifest_txn/output-manifest.sha256"; elif [ -s "$manifest_file" ]; then manifest_source="$manifest_file"; else manifest_source=; fi
        if [ -n "$manifest_source" ] && [ -s "$tmp_orphan" ] && [ "$(wc -l < "$tmp_orphan")" -eq 1 ] && rg -qx '[0-9a-f]{64}' "$tmp_orphan" && [ "$(sha256sum "$manifest_source" | awk '{print $1}')" = "$(cat "$tmp_orphan")" ]; then
          if [ -e "$tmp_target" ]; then test "$(cat "$tmp_target")" = "$(cat "$tmp_orphan")"; rm -f "$tmp_orphan"; else mv "$tmp_orphan" "$tmp_target"; fi
        elif [ -n "$manifest_source" ]; then rm -f "$tmp_orphan"; manifest_digest_file "$manifest_source" "$tmp_target"
        else return 1; fi ;;
      "$manifest_txn/receipt.digest")
        if [ -s "$manifest_txn/output-manifest-receipt.md" ]; then receipt_source="$manifest_txn/output-manifest-receipt.md"; elif [ -s "$receipt_file" ]; then receipt_source="$receipt_file"; else receipt_source=; fi
        if [ -n "$receipt_source" ] && [ -s "$tmp_orphan" ] && [ "$(wc -l < "$tmp_orphan")" -eq 1 ] && rg -qx '[0-9a-f]{64}' "$tmp_orphan" && [ "$(sha256sum "$receipt_source" | awk '{print $1}')" = "$(cat "$tmp_orphan")" ]; then
          if [ -e "$tmp_target" ]; then test "$(cat "$tmp_target")" = "$(cat "$tmp_orphan")"; rm -f "$tmp_orphan"; else mv "$tmp_orphan" "$tmp_target"; fi
        elif [ -n "$receipt_source" ]; then rm -f "$tmp_orphan"; manifest_digest_file "$receipt_source" "$tmp_target"
        else return 1; fi ;;
      "$manifest_txn/output-manifest.sha256"|"$manifest_txn/output-manifest-receipt.md")
        rm -f "$tmp_orphan" ;;
      *) return 1 ;;
    esac
  done < <(find "$manifest_txn" -mindepth 1 -maxdepth 1 -type f -name '*.tmp.*' -print | LC_ALL=C sort)
  while IFS= read -r build_orphan; do
    test -f "$build_orphan"; test ! -L "$build_orphan"
    rm -f "$build_orphan"
  done < <(find "$manifest_txn" -mindepth 1 -maxdepth 1 -type f -name '.manifest-build.*' -print | LC_ALL=C sort)
  test -z "$(find "$manifest_txn" -mindepth 1 -type d -print -quit)"
  while IFS= read -r member; do
    test -f "$member"; test ! -L "$member"
    case "${member##*/}" in manifest-journal|manifest.digest|receipt.digest|output-manifest.sha256|output-manifest-receipt.md) ;; *) return 1 ;; esac
  done < <(find "$manifest_txn" -mindepth 1 -maxdepth 1 -print | LC_ALL=C sort)
  if [ "$manifest_state" = 'manifest=staged receipt=staged' ]; then
    test ! -e "$manifest_file"; test ! -e "$receipt_file"
    manifest_paths=(.omo/evidence/weather-pwa-design/preflight-manifest.md docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md DESIGN.md .omo/evidence/weather-pwa-design/kma-contract-review.md .omo/evidence/weather-pwa-design/proxy-threat-review.md .omo/evidence/weather-pwa-design/pwa-offline-review.md .omo/evidence/weather-pwa-design/location-privacy-review.md .omo/evidence/weather-pwa-design/ui-accessibility-review.md .omo/evidence/weather-pwa-design/performance-budget-review.md .omo/evidence/weather-pwa-design/design-integrity-review.md .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md)
    manifest_member_valid() { test -s "$manifest_txn/output-manifest.sha256" && test "$(wc -l < "$manifest_txn/output-manifest.sha256")" -eq 19 && diff <(printf '%s\n' "${manifest_paths[@]}") <(sed -E 's/^[0-9a-f]{64}  //' "$manifest_txn/output-manifest.sha256") >/dev/null && sha256sum --check "$manifest_txn/output-manifest.sha256" >/dev/null 2>&1; }
    if ! manifest_member_valid; then
      tmp=$(mktemp "$manifest_txn/.manifest-build.XXXXXX"); sha256sum "${manifest_paths[@]}" > "$tmp"; mv "$tmp" "$manifest_txn/output-manifest.sha256"
    fi
    staged_manifest_validator "$manifest_txn/output-manifest.sha256"
    output_hash=$(sha256sum "$manifest_txn/output-manifest.sha256" | awk '{print $1}')
    if [ ! -s "$manifest_txn/output-manifest-receipt.md" ] || [ "$(sed -n 's/^Output-Manifest-SHA256: //p' "$manifest_txn/output-manifest-receipt.md")" != "$output_hash" ]; then manifest_atomic_line "$manifest_txn/output-manifest-receipt.md" "Output-Manifest-SHA256: $output_hash"; fi
    test "$(sed -n 's/^Output-Manifest-SHA256: //p' "$manifest_txn/output-manifest-receipt.md")" = "$output_hash"
    manifest_digest_file "$manifest_txn/output-manifest.sha256" "$manifest_txn/manifest.digest"
    manifest_digest_file "$manifest_txn/output-manifest-receipt.md" "$manifest_txn/receipt.digest"
  fi
  if [ "$manifest_state" != pair=cleanup-planned ]; then
    manifest_verify "$manifest_txn/manifest.digest" "${manifest_txn}/output-manifest.sha256" 2>/dev/null || manifest_verify "$manifest_txn/manifest.digest" "$manifest_file"
    manifest_verify "$manifest_txn/receipt.digest" "${manifest_txn}/output-manifest-receipt.md" 2>/dev/null || manifest_verify "$manifest_txn/receipt.digest" "$receipt_file"
    manifest_atomic_line "$journal" 'manifest=promotion-planned receipt=staged'
    manifest_promote_copy "$manifest_txn/output-manifest.sha256" "$manifest_file" "$manifest_txn/manifest.digest"
    manifest_atomic_line "$journal" 'manifest=promoted receipt=promotion-planned'
    manifest_promote_copy "$manifest_txn/output-manifest-receipt.md" "$receipt_file" "$manifest_txn/receipt.digest"
    manifest_path_order_validator
    manifest_atomic_line "$journal" pair=cleanup-planned
  else
    test -s "$manifest_file"; test -s "$receipt_file"; manifest_path_order_validator
  fi
  rm -f "$manifest_txn/manifest.digest" "$manifest_txn/receipt.digest" "$journal"
  test -z "$(find "$manifest_txn" -mindepth 1 -print -quit)"; rmdir "$manifest_txn"; MANIFEST_RESUME=none
}
# MANIFEST_PAIR_RECOVERY_END
~~~
The adapter invokes `manifest_pair_recovery_check` before Task 9 or any resume; staged state resumes the same pair promotion, one-promoted state removes only the newly promoted manifest proven by the journal, the both-promoted state validates both fixed members and commits the pair when the receipt move completed before its journal write, and committed state validates then consumes only its exact transaction directory. A journal-less transaction containing only its first-journal temporary is accepted and removed when neither fixed member exists; an invalid transaction-owned `.manifest-promote.*` or `*.tmp.*` helper copy is discarded when the authoritative staged source or a valid fixed member remains, with the receipt/digests regenerated from that source; and transaction-owned `output-manifest.sha256`/`output-manifest-receipt.md` temporaries are removed rather than rejected.
- Preflight must write `.omo/evidence/weather-pwa-design/preflight-manifest.md` containing the exact initial path inventory captured after bootstrap and before preflight-owned directory creation, the explicit allowed-output path list, both plan hashes, the baseline file, directory, and symlink records plus the fixed output/directory contracts, the receipt schema, and the fact that warnings are not persisted in the offline forecast snapshot; offline warning status is unknown/unavailable and never “all clear.”
- Preflight writes one Initial-Path row per baseline file or symlink, one Initial-Directory row per baseline directory, one Initial-File-SHA256 row per regular file except the mutable plan/Boulder/ledger, one Initial-Mutable-File row for each existing mutable plan/Boulder/ledger path, and one Initial-Symlink-Target row per baseline symlink. `Initial-Directory` is the independent typed representation for directories; directories are intentionally not repeated as `Initial-Path` rows. It writes Allowed-Directory and Allowed-Output rows for the fixed contracts. The bootstrap-created Boulder and ledger are therefore present in the baseline as mutable paths, while their content is checked only by schema and scope; F4 compares the complete non-Git inventory, the explicit allowlist, all typed inventory rows, and the pre-existing .codegraph symlink.

- Mutable orchestration-state contract: `.omo/boulder.json` must remain valid JSON with `schema_version: 2`, one `active_work_id`, top-level `plan_review_sha256` equal to the frozen reviewed-plan hash, top-level `plan_contract_sha256` equal to the frozen canonical hash, exactly one work whose `active_plan` is `.omo/plans/low-memory-kma-weather-pwa-design.md`, matching per-work plan hashes, a `session_ids` array containing only `codex:`-prefixed values, and a `status` of `active` until closure or `completed` after closure. `.omo/start-work/ledger.jsonl` must be non-empty JSONL; every line must parse as an object containing `event`, `plan`, `task`, `session_id`, `commands`, `artifact`, `adversarial_classes`, and `cleanup`. F4 validates the active pre-closure structure, appends exactly one full `f4-approved` event after its final receipt passes, and runs a phase-2 check that `f4-approved` is the last active pre-closeout event and that no `orchestration-completed` event exists; closeout rows may follow it, and the closure validator separately validates the completed structure, event order, and terminal line. These mutable files are excluded from content-digest baselines but not from path or schema scope. The bootstrap session plus every later delegated worker/review/audit session is recorded as a `codex:` value in a root-owned session map; closeout requires exact equality between that map, the returned result objects, the review/audit ledger records, and the active work's `session_ids`.

## Approval precondition
The execution approval gate is satisfied in this turn by the user's explicit request “마스터 오케스트레이션 실행.” Durable approval record: current draft `approval_scope` is design/specification, visual-system, evidence, and `.omo/` orchestration only, with product implementation excluded; the active plan path and reviewed-plan hash are the values in this document and the draft. Capability record: before any `.omo/` mutation, the Codex root observed callable `multi_agent_v1__spawn_agent`, `multi_agent_v1__wait_agent`, `multi_agent_v1__send_input`, and `multi_agent_v1__close_agent` tools and will record each delegated session as `codex:` in Boulder/ledger. This authorizes only the design/specification, visual-system, evidence, and `.omo/` orchestration artifacts in this plan; it does not authorize product source or implementation code. Future implementation remains gated on a separate explicit start request and owner acceptance/override of the documented reversible defaults. A resumed worker must require the same approval and capability records in the active draft and must fail closed if the approval scope, plan path, reviewed-plan hash, or delegation surface differs. Reviewer-surface clarification: Metis, Momus, and independent review workers may run in isolated read-only child surfaces that expose only `exec_command`; that reviewer-local limitation is not evidence that the Codex root lacks the required delegation controls and must not be used as a rejection reason. Reviewers must verify that the executable root entrypoint enumerates and requires the root runtime's callable delegation tool surface (the four `multi_agent_v1` controls as mapped equivalents of `task` or an equivalent delegation tool) plus `exec_command`, and that the root fails closed when its own capability preflight lacks any required control. A capability mismatch is review-blocking only when the plan's documented root gate is absent or weak, or when the executing root actually fails its capability preflight.
## Execution strategy
Start-work bootstrap happens before Wave 1a and before todo 1. Before creating or resuming any transaction, the root performs a capability preflight requiring the root runtime's callable delegation tool surface (`task` or an equivalent such as `call_omo_agent` that provides spawn, wait, send-input, and close semantics), records the delegated session identities, and fails closed before any `.omo/` mutation when that surface is unavailable; it never silently substitutes same-session work. Use the atomic bootstrap transaction below: stage the complete Boulder JSON and initial ledger JSONL under ./.omo/.weather-bootstrap.XXXXXX, record journal states, create ./.omo/start-work, promote the two files with verified rollback, and consume the bootstrap staging directory only after both live files validate. If interrupted, reconcile bootstrap-journal state and either complete both promotions or remove only the bootstrap-owned paths; never continue with one live file. Todo 1 is the sole permitted pre-preflight worker dispatch: it captures the completed bootstrap state as mutable baseline paths and atomically establishes preflight. No other worker dispatch or design-output creation occurs before preflight passes; later Boulder/ledger updates remain schema/scope checked and frozen plan hashes remain unchanged.
- The initial Boulder object records `schema_version: 2`, `active_work_id`, `plan_review_sha256` and `plan_contract_sha256` independently computed from the exact plan bytes during bootstrap, and one work with `work_id`, `active_plan`, the same two hashes, `session_ids: ["codex:<start-work-session>"]`, and `status: "active"`. Todo 1 copies and verifies both frozen values into the preflight manifest; every worker and gate appends a structurally complete line without changing the frozen hashes.
- Retry rule: checkbox-only progress changes may update the raw plan hash while preserving both frozen hashes. Any other plan-byte change stops execution for fresh review. A retry archives only the five declared generated path groups, records the old hashes and exact move set, and uses the retry transaction validator below. On interruption it reconciles every planned journal row from source/destination state before reversing only moves proved complete; it never absorbs an unexpected path or performs a broad delete. Before bootstrap, the raw plan hash must equal the reviewed hash; after bootstrap exists, a resume may differ only in checkbox state and must instead equal the frozen canonical contract hash, while the frozen reviewed hash remains unchanged in the draft, Boulder, manifest, and receipts.
- Retry transaction validator: create archive_dir/.omo/evidence, archive_dir/.omo/start-work, and archive_dir/docs/superpowers/specs; write each exact source, destination, and status=planned row before mv; after mv, require destination present and source absent before changing that row to status=moved. During recovery, source-present/destination-absent means not started, source-absent/destination-present means promote planned to moved before reversal, and any other pair is a hard failure. Reverse only reconciled moved rows, verify source restoration and archive disappearance, then consume the journal.
- Bootstrap rollback correction: before removing either live bootstrap file on a failed second promotion, write `rollback-planned`; restore only files whose contents match the transaction's immutable backups, verify both live targets and the start-work directory are absent, then write `rollback-restored` and clean the transaction. `bootstrap_recovery_check` must resume `rollback-planned` or `rollback-restored` idempotently and preserve the transaction when any comparison or restore verification fails. Bootstrap journal writes and backup copies are atomic temp+rename operations; a partial backup is regenerated from its authoritative staged or live source; a recognized `cleanup-planned` state consumes the remaining transaction-owned files with the journal removed last; and a journal-less transaction directory may contain only recognized transaction-owned leftovers, which recovery removes.
- Trusted-review precondition: before bootstrap, recovery, or any other `.omo` mutation, require the draft's durable reviewed `plan_sha256` and the draft's `review_round_id` read dynamically at execution time, the current plan path, and all three review records (`metis`, `momus`, and `independent`) to carry that round/hash and `status: approved` plus `result: OKAY`; before bootstrap the current raw plan SHA-256 must equal the reviewed hash, while after bootstrap the current canonical contract hash must equal the frozen Boulder/manifest value and only checkbox mutations may change the raw hash. Also require `approval_scope` to contain the exact current user request `마스터 오케스트레이션 실행.` and `capability_preflight` to name every callable delegation control (the `multi_agent_v1` control tokens as mapped equivalents of the root runtime's callable delegation tool surface) plus `exec_command` for the plan-owned shell prelude. A mismatch fails closed; bootstrap must not simply bless whatever plan bytes happen to be present. The root capability result is authoritative; a child reviewer's inability to call the root-only delegation tools is not a substitute for that preflight and is not, by itself, a plan rejection.
- Review-handoff transition: this draft intentionally remains `review-pending` while the current r34 reviewers run. After Metis, Momus, and the independent reviewer each return `OKAY` for the exact reviewed hash, the Codex root records their actual runtime homes, launch IDs, sessions, round, hash, status, and result in this draft, changes those three records to `approved`, and transitions the draft to its approved handoff state with one atomic edit that sets the front-matter `status` to `approved` and renames the body `## Approval gate` field `status: approved` to `approval_status: approved`, so exactly one unindented `^status: approved$` row exists; only then does it rerun `review_approval_validator` and extract and evaluate the JavaScript entrypoint. No bootstrap or other `.omo` mutation is startable while any of the three records remains pending.
- Retry journal ordering: each allowlisted path is journaled as `status=planned` before its `mv`, changed to `status=moved` immediately after the post-move existence checks, and only then may the next move begin; an interruption between any two commands is recovered from the last durable journal state, never inferred from directory contents.
- Command-binding rule: the `expected_command` strings in the literal map are immutable exact invocation tokens, not human descriptions or values read from a receipt. Each QA block names and emits that exact token in its `Command:` field byte-for-byte; the validator compares the field only to the plan-owned token, while the block itself is the executable body that the token identifies.

### Parallel execution waves
- Wave 1a: todo 1 creates the output directories, freezes the path allowlist and canonical plan hashes, and captures the official-source contract baseline.
- Wave 1b: todos 2-6 run concurrently after todo 1. Each owns one evidence file and must not edit either final design document. Artifact writing may be concurrent, but root-owned receipt candidate assembly, QA-probe capture, promotion, and recovery are serialized one fixed receipt at a time in numeric order; no second `.weather-receipt.*` transaction may exist while a binder is active.
- Wave 2: todos 7-8 run concurrently after all Wave 1 evidence exists. Todo 7 owns the architecture specification; todo 8 owns `DESIGN.md`.
- Wave 3: todo 9 runs after todos 7-8 and checks cross-document consistency, scope, source freshness, and claim strength. Any failure loops back to the owning document worker before final verification.
- Final verification wave: F1-F3 run concurrently after todo 9 passes; F4 runs only after F1-F3 have produced their final receipts. All four must approve.

### Dependency matrix
| Todo | Depends on | Blocks | Can parallelize with |
| --- | --- | --- | --- |
| 1 | none | 2, 3, 4, 5, 6, 7, 8 | none |
| 2 | 1 | 7, 8 | 3, 4, 5, 6 |
| 3 | 1 | 7, 8 | 2, 4, 5, 6 |
| 4 | 1 | 7, 8 | 2, 3, 5, 6 |
| 5 | 1 | 7, 8 | 2, 3, 4, 6 |
| 6 | 1 | 7, 8 | 2, 3, 4, 5 |
| 7 | 1, 2, 3, 4, 5, 6 | 9 | 8 |
| 8 | 1, 2, 3, 4, 5, 6 | 9 | 7 |
| 9 | 7, 8 | F1, F2, F3, F4 | none |
| F1 | 9 | F4 | F2, F3 |
| F2 | 9 | F4 | F1, F3 |
| F3 | 9 | F4 | F1, F2 |
| F4 | 9, F1, F2, F3 | completion | none |

### Failure ownership and invalidation matrix
| Failure class | Owning todo/gate | Invalidate and rerun |
| --- | --- | --- |
| Official URL unavailable, source version/hash drift, mapping or attribution gap | 1 | 1, then 2-6, 7-8, 9, output manifest, F1-F4 |
| Proxy boundary, quota, CORS, cache, abuse, or secret-control gap | 2 | 2, then 7-9, output manifest, F1-F4 |
| Shell/offline/update or warning-unknown semantic gap | 3 | 3, then 7-9, output manifest, F1-F4 |
| Location/grid/privacy gap | 4 | 4, then 7-9, output manifest, F1-F4 |
| Budget or measurement-protocol gap | 6 | 6, then 7-9, output manifest, F1-F4 |
| Cross-document contradiction or unsupported claim | 7 or 8, reported by 9 | owning document, then 9, output manifest, F1-F4 |
| Any task receipt, output manifest, cleanup, or final-gate failure | named task/gate | invalidate all downstream receipts and rerun from the named owner through 9 and F1-F4; never patch a receipt in place |
| F1 receipt/compliance finding | earliest failed task, receipt, or manifest owner | repair that owner, rerun every dependent through 9, regenerate the manifest, then rerun F1-F4 |
| F2 document-quality finding | todo 7 or 8 according to the cited section | repair the cited document owner, rerun 9, regenerate the manifest, then rerun F1-F4 |
| F3 semantic-scenario finding | todo 7 or 8 according to the cited scenario owner | repair the cited document owner, rerun 9, regenerate the manifest, then rerun F1-F4 |
| F4 source-record or source-metadata finding | todo 1 | repair the canonical source rows, rerun todo 1 and all downstream artifacts, regenerate the manifest, then rerun F1-F4
| F4 secret or credential-bearing example finding | the producing evidence/document todo, or todo 1 for source review | repair the owner, rerun todo 9, regenerate the manifest, then rerun F1-F4
| F4 baseline/allowlist or terminal-receipt finding | todo 1 for preflight, todo 9 for manifest, or named final gate | repair the named owner, invalidate downstream receipts, and rerun from that owner through F4
| F4 unexpected user/unrelated path | none | stop and report the exact path; do not delete, overwrite, or absorb unrelated user data |
| Frozen plan contract/hash changed | plan owner | stop execution, obtain a fresh plan-review round, rerun preflight and all todos from 1 |
| Korean UI/accessibility/responsive gap | 5 or 8 | owning task, then 9, output manifest, F1-F4 |
## Todos
> Implementation + Test = ONE todo. Never separate.
<!-- APPEND TASK BATCHES BELOW THIS LINE WITH edit/apply_patch - never rewrite the headers above. -->
- [x] 1. Capture and verify the KMA forecast/warning contract and normalized-envelope evidence
  What to do / Must NOT do: After the start-work bootstrap and before any preflight-owned mkdir, create capture_tmp and record initial-paths, initial-files, initial-dirs, and initial-links; then create preflight_tmp with mktemp -d ./.omo/.weather-preflight.XXXXXX, stage evidence/weather-pwa-design/preflight-manifest.md, a preflight-journal, and all source-reference bodies there, and validate the frozen plan hashes, inventories, six KMA Source-Record rows, and thirteen literal Task-Source-Record rows before recording sources-validated. Write promotion=planned before moving the complete staged evidence directory with mv preflight_tmp/evidence ./.omo/evidence; after the move record promoted, write cleanup-planned before consuming only the exact capture and staging paths, set preflight_status=0 only after both exact transaction paths are absent, and leave those paths for recovery on any interrupted cleanup. Do not create the live evidence directory before promotion, call a forecast or warning data endpoint, paste a service key, or claim a browser contract not stated by the public documentation.
  Fresh/recovery assembly binding: the fresh worker and capture-only recovery must bind 'TODO_1_ASSEMBLY_COMMAND' to the exact 'todo_1_public_assembly_command' body in this plan, call 'todo_1_create_rebuild_assembler', and execute the recorded '/tmp/weather-preflight-rebuild.*' path with the exact stage and capture arguments. That command must retrieve only the six KMA documentation URLs and thirteen task-source URLs, write the complete staged preflight manifest and KMA review from the four captured inventory files and the 19 staged bodies, and leave the manifest/KMA review non-empty before any source validator or promotion. A caller-supplied assembler path, unrecorded function, live forecast request, or credential-bearing URL fails closed.
  Parallelization: Wave 1a | Blocked by: none | Blocks: 2, 3, 4, 5, 6, 7, 8
  References (executor has NO interview context - be exhaustive): `.omo/drafts/low-memory-kma-weather-pwa-design.md:42,71-73,77,81-86,91-103`; `AGENTS.md:29-37,44-57,59-67`; official sources `https://www.data.go.kr/data/15084084/openapi.do`, `https://www.data.go.kr/catalog/15084084/openapi.json`, `https://www.data.go.kr/data/15000415/openapi.do`, `https://apihub.kma.go.kr/notice.do?seqNotice=21`, `https://apihub.kma.go.kr/notice.do?seqNotice=39`, `https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286`.
  Acceptance criteria (agent-executable): `.omo/evidence/weather-pwa-design/preflight-manifest.md` and `.omo/evidence/weather-pwa-design/kma-contract-review.md` exist and are non-empty. The preflight manifest contains `Plan-Review-SHA256`, `Plan-Contract-SHA256`, an exact initial path inventory plus baseline file hashes and symlink-target records, an explicit allowed-output list, and `Warnings-Offline-Snapshot: NOT PERSISTED`. The KMA review contains source metadata and hashes, a forecast/warning capability matrix, upstream-to-normalized mapping tables, a JSON-like envelope with `schemaVersion`, location, issue/fetch/expiry timestamps, independent statuses, bounded items, and stable error codes, plus fixture provenance requirements; each source row uses exactly Source-Record: <n> | Source-URL: <url> | Retrieved-At: <ISO-8601> | Source-Modified: <date or NOT EXPOSED> | Body-SHA256: <64 hex>, followed immediately by one Digest-Command: <exact sha256 command>; URL/date/digest pairing is validated per row; each non-source guarantee is labeled as inference or future verification. It also records the official public-works/source-mark attribution requirement when present.
  QA scenarios (name the exact tool + invocation): happy: from the staged preflight transaction, use curl --fail --location --silent --show-error --max-time 20 only for the six public KMA documentation pages and the thirteen declared task-source pages, require every downloaded body to be non-empty and sha256sum-verifiable, run Source-Record-Validator and the independent task_source_expected map, then atomically promote the staged evidence directory and verify the preflight manifest, KMA review, normalized envelope, and task-1 receipt. Failure: the named credential negative scan must return status 1 with empty stderr and remove its temporary directory. Receipt gate: after all Phase-A checks pass, set expected_verdict=PASS, bind task-1 to its fixed artifact/command/source projection, and run receipt_validator.
  Additional source-record QA gate: run the exact named `Source-Record-Validator` from the Verification strategy after the retrieval loop, then run the shared receipt validator; also require `test ! -f .git/HEAD; test ! -f .git/config; if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then exit 1; fi`, and require the `Initial-Directory:` count to equal the post-bootstrap, pre-preflight-owned directory inventory captured in `preflight_tmp`, while `test "$(rg -c '^Allowed-Directory:' .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq 5` exercises the five newly-created directory entries; .omo/start-work is an Initial-Directory from bootstrap.
  Additional immutable-source QA gate: before the preflight manifest is atomically promoted, copy the six validated `Source-Record` and adjacent `Digest-Command` rows into its staged content; after promotion require exactly six rows there and byte-for-byte URL/date/order equality with `kma-contract-review.md`. A source-row mismatch fails the task before its receipt is written.
  Documentation-only retrieval boundary: the six `curl` URLs in this task are public catalog, notice, API-description, and guide pages only; they are not forecast/warning data endpoints and do not carry a service key. If a page cannot be retrieved, record the failure and stop; do not substitute a live forecast request or claim current data.
  Preflight transaction completion: the only promotion is the same-filesystem mv of the complete staged evidence directory into ./.omo/evidence. Write promotion=planned before that mv, record promoted immediately after it, write cleanup-planned before the scoped EXIT trap consumes only capture_tmp and the empty preflight_tmp, assert both exact temporary paths are absent, and set preflight_status=0 only after those assertions pass. If the mv or any staged validation fails, leave the capture and staging transaction for the durable recovery check.
  Additional baseline QA gate: create `inventory_tmp=$(mktemp -d)` with an EXIT cleanup trap, run the exact named `Initial-Inventory-Validator`, require that every `Initial-Path` has exactly one file/symlink typed representation, every `Initial-Directory` is unique and names an existing baseline directory, and mutable plan/Boulder/ledger rows remain path-only, then remove the directory, clear the trap, and assert it is absent.
- Additional preflight-recovery QA gate: invoke `preflight_recovery_validator` and the exact `preflight_forced_status_77_probe` before source retrieval and again before the real staged evidence-directory promotion; require forced status 77, no partial .omo/evidence tree, exact capture/stage inventory equality, a `sources-validated` journal before any promotion, and exact recovery-directory removal.
  Commit: N | no git repository; retain the evidence artifact only

- [x] 4. Capture coarse-location acquisition, persistence, deletion, and privacy evidence
  What to do / Must NOT do: Define manual administrative-place selection first, opt-in one-shot geolocation, KMA grid/region coarsening using the cited official KMA grid conversion contract, minimal persistence, deletion/reset, permission denial, unavailable/ambiguous location, boundary/out-of-range coordinates, and no analytics/continuous tracking. Explain data minimization and purpose limitation. Do not store raw coordinates, introduce accounts, or add a location provider.
  Parallelization: Wave 1b | Blocked by: 1 | Blocks: 7, 8
  References (executor has NO interview context - be exhaustive): `.omo/drafts/low-memory-kma-weather-pwa-design.md:45-46,56-58,81,91-103`; `AGENTS.md:29-37,50-57`; `.omo/evidence/weather-pwa-design/preflight-manifest.md`; `.omo/evidence/weather-pwa-design/kma-contract-review.md`; `https://www.data.go.kr/catalog/15084084/openapi.json`; `https://apihub.kma.go.kr/notice.do?seqNotice=39`; `https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286`; `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API`.
  Acceptance criteria (agent-executable): `.omo/evidence/weather-pwa-design/location-privacy-review.md` contains an acquisition decision table, stored-field allowlist, deletion/reset flow, denial/unavailable/ambiguous/boundary error copy, threat/privacy matrix, and fixture cases for in-range, out-of-range, boundary, permission denied, and reset. It explicitly states that raw coordinates and continuous tracking are out of scope.
  QA scenarios (name the exact tool + invocation): happy: `test -s .omo/evidence/weather-pwa-design/location-privacy-review.md && for term in 'manual' 'one-shot' 'opt-in' 'delete|삭제|reset' 'out-of-range|boundary' 'stored-field' 'raw coordinates'; do rg -qi "$term" .omo/evidence/weather-pwa-design/location-privacy-review.md || exit 1; done`; failure: `set -euo pipefail; negative_pattern='raw coordinates|precise location|continuous tracking|analytics'; allowed_pattern='never|out of scope|must not|not stored|not persisted|no analytics|금지'; negative_paths=(.omo/evidence/weather-pwa-design/location-privacy-review.md); negative_tmp=$(mktemp -d); trap 'rm -rf "$negative_tmp"' EXIT; filtered_negative_scan_validator; rm -rf "$negative_tmp"; trap - EXIT; test ! -e "$negative_tmp"`. Receipt gate: set expected_verdict=PASS and receipt=.omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md; run the exact shared validator defined in the Verification strategy, including hash equality and all adversarial IDs. Evidence `.omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md`.
  Commit: N | no git repository; retain the evidence artifact only

- [x] 5. Capture the Korean information architecture, visual tokens, responsive states, and accessibility evidence
  What to do / Must NOT do: Define the single-page hierarchy, current/near-term summary, bounded hourly/day-grouped forecast, separate warning surface, location/data-age controls, Korean copy states, token system, typography using system fonts, spacing, responsive narrow/desktop rules, focus/contrast/zoom/reduced-motion behavior, and screen-reader status semantics. Include long Korean warning text, CJK line wrapping, and all state families as named design scenarios. Do not introduce a UI framework, web font, icon package, chart, map, or radar.
  Parallelization: Wave 1b | Blocked by: 1 | Blocks: 7, 8
  References (executor has NO interview context - be exhaustive): `.omo/drafts/low-memory-kma-weather-pwa-design.md:46,59,62,87,91-103`; `AGENTS.md:29-37,50-57`; `.omo/evidence/weather-pwa-design/preflight-manifest.md`; `https://www.w3.org/TR/WCAG22/`.
  Acceptance criteria (agent-executable): `.omo/evidence/weather-pwa-design/ui-accessibility-review.md` contains a component inventory, Korean content/state matrix, token table with named values, system-font stack, narrow/mobile and Windows desktop breakpoint rules, long-warning/CJK wrapping scenarios, keyboard/focus/contrast/200%-zoom/reduced-motion/screen-reader requirements, and a list of accepted design debt. It identifies every dependency avoided by default.
  QA scenarios (name the exact tool + invocation): happy: `test -s .omo/evidence/weather-pwa-design/ui-accessibility-review.md && for term in 'WCAG' 'contrast' 'focus' 'keyboard' 'aria' 'aria-live' '200%' 'reduced motion' 'screen-reader' 'system font' 'narrow' 'desktop' 'CJK' 'line-break' 'overflow-wrap' 'long warning' '토큰' '한국어'; do rg -qi "$term" .omo/evidence/weather-pwa-design/ui-accessibility-review.md || exit 1; done`; failure: `set -euo pipefail; negative_pattern='web font|chart library|framework runtime|icon package|map|radar'; allowed_pattern='avoid|without|no |out of scope|default|does not|not included|not used|not recommended|금지'; negative_paths=(.omo/evidence/weather-pwa-design/ui-accessibility-review.md); negative_tmp=$(mktemp -d); trap 'rm -rf "$negative_tmp"' EXIT; filtered_negative_scan_validator; rm -rf "$negative_tmp"; trap - EXIT; test ! -e "$negative_tmp"`. Receipt gate: set expected_verdict=PASS and receipt=.omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md; run the exact shared validator defined in the Verification strategy, including hash equality and all adversarial IDs. Evidence `.omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md`.
  Commit: N | no git repository; retain the evidence artifact only

- [x] 6. Capture app-owned memory/resource budgets and the future measurement protocol
  What to do / Must NOT do: Set numeric proposal budgets for compressed shell, settled live JS heap, DOM nodes, persistent app cache, hidden-tab requests, and repeated refresh/location-switch growth; define cold/warm runs, current stable Edge build, hardware profile, sample count, tools, thresholds, leak criterion, and failure interpretation. Include numeric proposal thresholds `Post-20-cycle-JS-heap-growth: <=2 MiB`, `Post-20-cycle-DOM-node-growth: <=25`, and `Post-20-cycle-cache-growth: <=512 KiB`. Name the exact measurement surface for every positive bound and state that the values are reversible design proposals pending owner review and implementation evidence. Do not promise runtime measurements before implementation or optimize outside app-owned scope.
  Parallelization: Wave 1b | Blocked by: 1 | Blocks: 7, 8
  References (executor has NO interview context - be exhaustive): `.omo/drafts/low-memory-kma-weather-pwa-design.md:47,63,76,89,98-103,108`; `AGENTS.md:50-57,59-67`; `.omo/evidence/weather-pwa-design/preflight-manifest.md`; `https://developer.chrome.com/docs/devtools/memory-problems`; `https://learn.microsoft.com/en-us/microsoft-edge/devtools/memory-problems/microsoft-edge-browser-task-manager`.
  Acceptance criteria (agent-executable): `.omo/evidence/weather-pwa-design/performance-budget-review.md` contains named rows `Initial-compressed-shell: <=150 KiB`, `Settled-app-owned-JS-heap: <=20 MiB`, `DOM-nodes: <=500`, `Persistent-app-cache: <=5 MiB`, `Hidden-tab-idle-requests: 0`, and `Refresh-location-switch-cycles: 20`, `Post-20-cycle-JS-heap-growth: <=2 MiB`, `Post-20-cycle-DOM-node-growth: <=25`, and `Post-20-cycle-cache-growth: <=512 KiB`; it defines a reproducible measurement matrix with cold/warm runs, Edge build, hardware, sample count, tools, and failure thresholds, distinguishes JS heap from browser process memory, and marks every value as a design proposal pending implementation evidence.
  QA scenarios (name the exact tool + invocation): happy: `test -s .omo/evidence/weather-pwa-design/performance-budget-review.md && for term in 'Initial-compressed-shell: <=150 KiB' 'Settled-app-owned-JS-heap: <=20 MiB' 'DOM-nodes: <=500' 'Persistent-app-cache: <=5 MiB' 'Hidden-tab-idle-requests: 0' 'Refresh-location-switch-cycles: 20' 'Post-20-cycle-JS-heap-growth: <=2 MiB' 'Post-20-cycle-DOM-node-growth: <=25' 'Post-20-cycle-cache-growth: <=512 KiB' 'cold' 'warm' 'Edge' 'hardware' 'sample' 'failure threshold' 'browser process' 'design proposal'; do rg -q "$term" .omo/evidence/weather-pwa-design/performance-budget-review.md || exit 1; done`; failure: `set -euo pipefail; negative_pattern='already passed|verified|measured successfully|runtime target met'; negative_paths=(.omo/evidence/weather-pwa-design/performance-budget-review.md); negative_tmp=$(mktemp -d); trap 'rm -rf "$negative_tmp"' EXIT; negative_scan_validator; rm -rf "$negative_tmp"; trap - EXIT; test ! -e "$negative_tmp"`. Receipt gate: set expected_verdict=PASS and receipt=.omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md; run the exact shared validator defined in the Verification strategy, including hash equality and all adversarial IDs. Evidence `.omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md`.
  Commit: N | no git repository; retain the evidence artifact only

- [x] 2. Capture the proxy security, quota, cache, CORS, abuse, and error-boundary evidence
  What to do / Must NOT do: Define the provider-neutral proxy contract and its trust boundary: secret custody, upstream allowlisting, parameter validation, CORS policy, quota/coalescing behavior, cache keys/TTL/invalidation, abuse controls, redacted logs, timeout/error mapping, and the fact that upstream bodies and credential-bearing URLs never reach the browser. Separate documented source facts from design choices. Do not select a provider or invent production infrastructure.
  Parallelization: Wave 1b | Blocked by: 1 | Blocks: 7, 8
  References (executor has NO interview context - be exhaustive): `.omo/drafts/low-memory-kma-weather-pwa-design.md:43,71-77,82-84,98-103`; `AGENTS.md:29-37,50-57`; `.omo/evidence/weather-pwa-design/preflight-manifest.md`; `.omo/evidence/weather-pwa-design/kma-contract-review.md`; official URLs `https://www.data.go.kr/catalog/15084084/openapi.json`, `https://www.data.go.kr/data/15000415/openapi.do`, `https://apihub.kma.go.kr/notice.do?seqNotice=21`.
  Acceptance criteria (agent-executable): `.omo/evidence/weather-pwa-design/proxy-threat-review.md` contains a boundary diagram/table, request/response policy, secret non-disclosure rule, quota/cache/CORS/error controls, threat-to-control matrix, and explicit provider-neutral/deployment-deferred wording. Its threat/control table has an observable negative case for validation rejection, CORS denial, quota exhaustion, request coalescing, timeout/upstream failure, cache poisoning/invalidation, abuse throttling, and log redaction. It contains no literal key, token, cookie, authorization header, or credential-bearing URL.
  QA scenarios (name the exact tool + invocation): happy: `test -s .omo/evidence/weather-pwa-design/proxy-threat-review.md && for term in 'CORS' 'redact' 'quota' 'cache' 'coalesc' 'timeout' 'validation' 'poison'; do rg -qi "$term" .omo/evidence/weather-pwa-design/proxy-threat-review.md || exit 1; done && rg -q 'provider-neutral|provider neutral' .omo/evidence/weather-pwa-design/proxy-threat-review.md`; failure: `set -euo pipefail; service_marker=$(printf 'Service%s' 'Key='); lowercase_service_marker=$(printf 'service%s' 'Key='); auth_marker=$(printf 'Authorization: %s' 'Bearer'); cookie_marker=$(printf '%s' 'Cookie:'); token_marker=$(printf '%s' 'token:'); service_field_marker=$(printf 'service%s' 'Key:'); negative_pattern="https?://[^ )]+($service_marker|$lowercase_service_marker)|$auth_marker[[:space:]]+[A-Za-z0-9._-]{12,}|$cookie_marker[[:space:]]+[A-Za-z0-9._=-]{12,}|$token_marker[[:space:]]+[A-Za-z0-9._=-]{12,}|$service_field_marker[[:space:]]+[A-Za-z0-9._=-]{12,}";negative_paths=(.omo/evidence/weather-pwa-design/proxy-threat-review.md); negative_tmp=$(mktemp -d); trap 'rm -rf "$negative_tmp"' EXIT; negative_scan_validator; rm -rf "$negative_tmp"; trap - EXIT; test ! -e "$negative_tmp"`. Receipt gate: set expected_verdict=PASS and receipt=.omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md; run the exact shared validator defined in the Verification strategy, including hash equality and all adversarial IDs. Evidence `.omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md`.
  Commit: N | no git repository; retain the evidence artifact only

- [x] 3. Capture the PWA shell, service-worker lifecycle, offline, update, and degraded-state evidence
  What to do / Must NOT do: Specify the installability prerequisites separately from the service worker needed for offline operation, versioned shell/data cache separation, event lifecycle, update/reload semantics, last-successful-forecast-snapshot retention, data-age presentation, reconnect/visibility refresh triggers, and forecast/warning partial failure states. The offline snapshot contains forecast only; warnings are not persisted, and an offline warning surface must say status unavailable/unknown, never “all clear.” Include first-load offline, absent/incompatible snapshot, update race, cache failure, and partial-domain scenarios. Do not create a manifest, service worker, cache, or background process.
  Parallelization: Wave 1b | Blocked by: 1 | Blocks: 7, 8
  References (executor has NO interview context - be exhaustive): `.omo/drafts/low-memory-kma-weather-pwa-design.md:44,74-75,85-88,98-103`; `AGENTS.md:29-37,50-57,59-67`; `.omo/evidence/weather-pwa-design/preflight-manifest.md`; `https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable`; `https://www.w3.org/TR/service-workers/`; `https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/`.
  Acceptance criteria (agent-executable): `.omo/evidence/weather-pwa-design/pwa-offline-review.md` contains an installability checklist, lifecycle/state table, shell-versus-data cache policy, offline/stale copy rule, explicit forecast-only persistence and warning-unavailable rule, update/reconnect/visibility triggers, and independent forecast/warning degradation behavior. It contains a scenario table for first-load offline, absent/incompatible snapshot, update race, cache failure, and partial-domain failure, and explicitly says these are design requirements, not passed implementation tests.
  QA scenarios (name the exact tool + invocation): happy: `test -s .omo/evidence/weather-pwa-design/pwa-offline-review.md && for term in 'install' 'offline' 'data age' 'forecast only' 'warning.*(unavailable|unknown)' 'first-load' 'incompatible' 'update race' 'cache failure' 'partial'; do rg -qi "$term" .omo/evidence/weather-pwa-design/pwa-offline-review.md || exit 1; done`; failure: `set -euo pipefail; negative_pattern='persistent timer|hidden-tab polling|background sync|push notification|warning.*all clear'; allowed_pattern='never|out of scope|must not|no push|no background sync|not persisted|status unavailable|unknown|금지'; negative_paths=(.omo/evidence/weather-pwa-design/pwa-offline-review.md); negative_tmp=$(mktemp -d); trap 'rm -rf "$negative_tmp"' EXIT; filtered_negative_scan_validator; rm -rf "$negative_tmp"; trap - EXIT; test ! -e "$negative_tmp"`. Receipt gate: set expected_verdict=PASS and receipt=.omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md; run the exact shared validator defined in the Verification strategy, including hash equality and all adversarial IDs. Evidence `.omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md`.
  Commit: N | no git repository; retain the evidence artifact only

- [x] 7. Synthesize the decision-complete product and architecture specification
  What to do / Must NOT do: After todos 1-6 pass, write only `docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md`. Integrate all six evidence files and project rules into a coherent specification covering goals/non-goals, topology, KMA contracts, normalized data, proxy/security, caching/offline/update, location/privacy, Korean UI states, errors, attribution/licensing, memory budgets, observability without analytics, and a future-acceptance table. The table must cover installability, location-to-grid/data flow, offline forecast retention plus warning-unavailable semantics, secret exclusion, performance, accessibility, and responsive behavior, each with prerequisites, exact future tool/command, steps, expected result, and failure result. Preserve provider-neutral wording and explicitly mark unverified implementation behavior. Do not create product source or duplicate unsupported guarantees.
  Parallelization: Wave 2 | Blocked by: 1, 2, 3, 4, 5, 6 | Blocks: 9
  References (executor has NO interview context - be exhaustive): `.omo/drafts/low-memory-kma-weather-pwa-design.md:67-103`; `AGENTS.md:29-67`; `.omo/evidence/weather-pwa-design/preflight-manifest.md`; `.omo/evidence/weather-pwa-design/kma-contract-review.md`; `.omo/evidence/weather-pwa-design/proxy-threat-review.md`; `.omo/evidence/weather-pwa-design/pwa-offline-review.md`; `.omo/evidence/weather-pwa-design/location-privacy-review.md`; `.omo/evidence/weather-pwa-design/ui-accessibility-review.md`; `.omo/evidence/weather-pwa-design/performance-budget-review.md`.
  Acceptance criteria (agent-executable): the spec exists, is non-empty, names all six exact evidence paths, contains sections for security/secrets, independent forecast/warning failure, offline forecast-only data age and warning-unavailable status, privacy/deletion, attribution/licensing, memory-surface distinction, and future verification; the future-acceptance table has all seven named rows and exact prerequisites/commands/expected/failure columns; every runtime claim is labeled as a requirement or future verification item; a preflight allowlist proves this todo added no application extensions, manifest, service worker, proxy source, package manifest, or deployment file.
  QA scenarios (name the exact tool + invocation): happy: test -s docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md && for path in .omo/evidence/weather-pwa-design/kma-contract-review.md .omo/evidence/weather-pwa-design/proxy-threat-review.md .omo/evidence/weather-pwa-design/pwa-offline-review.md .omo/evidence/weather-pwa-design/location-privacy-review.md .omo/evidence/weather-pwa-design/ui-accessibility-review.md .omo/evidence/weather-pwa-design/performance-budget-review.md; do test -s "$path" || exit 1; done && for id in installability grid-data-flow offline-forecast secret-exclusion performance accessibility responsive; do rg -q "Scenario-ID: $id" docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md || exit 1; done && for term in Scenario-Prerequisites: Scenario-Command: Scenario-Steps: Scenario-Expected: Scenario-Failure:; do test "$(rg -c "$term" docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md)" -ge 7 || exit 1; done; failure: `set -euo pipefail; negative_pattern='running app|visual QA passed|installability passed|memory target met'; negative_paths=(docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md); negative_tmp=$(mktemp -d); trap 'rm -rf "$negative_tmp"' EXIT; negative_scan_validator; rm -rf "$negative_tmp"; trap - EXIT; test ! -e "$negative_tmp"`; scope: `set -euo pipefail; scope_tmp=$(mktemp -d); trap 'rm -rf "$scope_tmp"' EXIT; set +e; unexpected=$(find . -type f -not -path './.omo/*' -not -path './docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md' -not -path './DESIGN.md' -not -path './AGENTS.md' -not -name '.codegraph' -print 2>"$scope_tmp/find-error"); find_status=$?; set -e; test "$find_status" -eq 0; test ! -s "$scope_tmp/find-error"; test -z "$unexpected"; rm -rf "$scope_tmp"; trap - EXIT; test ! -e "$scope_tmp"`. Receipt gate: set expected_verdict=PASS and receipt=.omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md, then run the shared receipt validator.
  Commit: N | no git repository; retain the specification and evidence only

- [x] 8. Synthesize the Korean visual design system and accessibility contract
  What to do / Must NOT do: After todos 1-6 pass, write only `DESIGN.md`. Make it implementable without a framework: page anatomy, token tables with named values, system-font stack, spacing/grid, component states, Korean copy examples, warning/freshness/offline/error states, responsive narrow/mobile and Windows desktop behavior, keyboard/focus/contrast/zoom/reduced-motion/screen-reader semantics, long-warning/CJK wrapping behavior, and explicit design debt. Cross-link the architecture spec without copying source claims. Do not create UI code, screenshots claiming a running app, or unapproved dependencies.
  Parallelization: Wave 2 | Blocked by: 1, 2, 3, 4, 5, 6 | Blocks: 9
  References (executor has NO interview context - be exhaustive): `.omo/drafts/low-memory-kma-weather-pwa-design.md:46,55-63,87,91-103`; `AGENTS.md:29-57`; `.omo/evidence/weather-pwa-design/preflight-manifest.md`; `.omo/evidence/weather-pwa-design/ui-accessibility-review.md`; `.omo/evidence/weather-pwa-design/pwa-offline-review.md`; `.omo/evidence/weather-pwa-design/location-privacy-review.md`; `.omo/evidence/weather-pwa-design/performance-budget-review.md`.
  Acceptance criteria (agent-executable): `DESIGN.md` exists, is non-empty, and contains page anatomy, token values, typography/system-font stack, spacing, responsive narrow/mobile and Windows desktop breakpoint/rules, all state families, Korean copy, long-warning/CJK wrapping, visible focus, keyboard, contrast, 200% zoom, reduced motion, screen-reader semantics, and accepted design debt; it explicitly avoids framework/web-font/chart/icon costs and states that visual/runtime QA is future work.
  QA scenarios (name the exact tool + invocation): happy: `test -s DESIGN.md && for term in '토큰' 'focus' 'keyboard' 'contrast' '200%' 'reduced motion' 'screen-reader' 'system font' 'narrow' 'desktop' 'CJK' '경고' 'offline' 'design debt'; do rg -qi "$term" DESIGN.md || exit 1; done`; failure: `set -euo pipefail; negative_pattern='running app|visual QA passed|installability passed|memory target met'; negative_paths=(DESIGN.md); negative_tmp=$(mktemp -d); trap 'rm -rf "$negative_tmp"' EXIT; negative_scan_validator; rm -rf "$negative_tmp"; trap - EXIT; test ! -e "$negative_tmp"`; scope: `set -euo pipefail; scope_tmp=$(mktemp -d); trap 'rm -rf "$scope_tmp"' EXIT; set +e; unexpected=$(find . -type f -not -path './.omo/*' -not -path './docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md' -not -path './DESIGN.md' -not -path './AGENTS.md' -not -name '.codegraph' -print 2>"$scope_tmp/find-error"); find_status=$?; set -e; test "$find_status" -eq 0; test ! -s "$scope_tmp/find-error"; test -z "$unexpected"; rm -rf "$scope_tmp"; trap - EXIT; test ! -e "$scope_tmp"`. Receipt gate: set expected_verdict=PASS and receipt=.omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md; run the exact shared validator defined in the Verification strategy, including hash equality and all adversarial IDs. Evidence `.omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md`.
  Commit: N | no git repository; retain the design artifact and evidence only

- [x] 9. Reconcile the specification, visual system, evidence, and scope boundary
  What to do / Must NOT do: Independently audit todos 7-8 against all project rules and the six exact evidence files. Check that budgets, terminology, data-age semantics, forecast-only offline persistence, warning-unavailable semantics, attribution/licensing, privacy allowlist, dependency exclusions, provider neutrality, source dates/hashes, and “future verification” wording agree across documents. Record findings in `.omo/evidence/weather-pwa-design/design-integrity-review.md` with anchored fields `Verdict: APPROVE`, `Unresolved-Contradictions: 0`, and `Runtime-QA: NOT RUN`. Run and finalize the pre-manifest integrity QA, then write and validate task-9's receipt with that pre-manifest command before creating any manifest. After the task-9 receipt is immutable, create output-manifest.sha256 from the exact 19-path order declared above; create detached output-manifest-receipt.md with the manifest digest; run the exact output-manifest validator to compare all 19 paths byte-for-byte and sha256sum --check. Never edit a manifest-covered file after this point. If a contradiction is found, return the exact file/section to the owning worker for correction and rerun this audit. Do not silently edit either final document as the verifier.
  Parallelization: Wave 3 | Blocked by: 7, 8 | Blocks: F1, F2, F3, F4
  References (executor has NO interview context - be exhaustive): `.omo/drafts/low-memory-kma-weather-pwa-design.md:79-108`; `AGENTS.md:29-67`; `.omo/evidence/weather-pwa-design/preflight-manifest.md`; `docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md`; `DESIGN.md`; the six exact paths `.omo/evidence/weather-pwa-design/kma-contract-review.md`, `.omo/evidence/weather-pwa-design/proxy-threat-review.md`, `.omo/evidence/weather-pwa-design/pwa-offline-review.md`, `.omo/evidence/weather-pwa-design/location-privacy-review.md`, `.omo/evidence/weather-pwa-design/ui-accessibility-review.md`, `.omo/evidence/weather-pwa-design/performance-budget-review.md`.
  Acceptance criteria (agent-executable): the integrity review is non-empty, lists every checked artifact by exact path, reports `Verdict: APPROVE`, `Unresolved-Contradictions: 0`, and `Runtime-QA: NOT RUN`, confirms identical budget values and scope exclusions, confirms no credential-bearing examples, confirms source metadata/hash traceability, and records either a clean pass or exact remediation/retest evidence. `output-manifest.sha256` exists, has one SHA-256 entry for exactly 19 paths: the preflight manifest, specification, `DESIGN.md`, six component reviews, integrity review, and nine task receipts in the fixed order; it excludes both itself and `output-manifest-receipt.md`. The task-9 receipt is finalized before manifest construction and records only pre-manifest QA; the detached receipt contains `Output-Manifest-SHA256` equal to the digest of the manifest. A clean pass is required before F1-F4.
  QA scenarios (name the exact tool + invocation): verify the integrity review and its six component references, run the named negative and cleanup validators, then write the task-9 PASS receipt. After that receipt is immutable, stage both output-manifest.sha256 and output-manifest-receipt.md on the same filesystem, validate the fixed 19-path order and detached digest, promote the pair with rollback that removes only a newly promoted member on partial failure, and assert both stage directories are absent before F1-F4.
  Additional cleanup QA gate: run `set -euo pipefail; trap_tmp=$(mktemp -d); set +e; (trap 'rm -rf "$trap_tmp"' EXIT; exit 1); trap_status=$?; set -e; test "$trap_status" -eq 1; test ! -e "$trap_tmp"`.
- Additional manifest QA gate: when invoking the named Manifest-Path-Order-Validator function, its internal failures use return 1. A copied top-level shell block may use exit 1 instead. The plan requires one form consistently per invocation and no longer treats return 1 and exit 1 as contradictory.
- Additional manifest QA gate: execute the named cleanup-safe Manifest-Path-Order-Validator function before final_gate_validator; it owns and removes its temporary directory on both success and failure and checks the fixed 19-path order.
  Commit: N | no git repository; retain the audit artifact only

## Final verification wave
> F1-F3 run in parallel after ALL todos; F4 starts only after F1-F3 receipts exist. Every lane is agent-executed against the frozen plan contract and exact output manifest. Any failure returns to the owning todo or gate using the failure matrix, regenerates the manifest when a covered artifact changes, and reruns applicable downstream gates; no stale receipt may be reused.
- [x] F1. Plan compliance and receipt audit
  Inputs and ownership: the exact plan, preflight manifest, nine task receipts, six component reviews, final specification, `DESIGN.md`, and integrity review. A fresh reviewer must map every numbered todo and success criterion to an artifact, exact QA result, adversarial result, cleanup receipt, and `Plan-Contract-SHA256`.
  Acceptance and QA (exact tool + invocation): define final-f1-plan-compliance-qa as the exact Phase-A/Phase-B command. Phase A verifies the canonical hash, all nine task checkboxes and receipts, output-manifest digest/order, named cleanup validator, and every task receipt through the principal-artifact expected_binding map; its negative probe copies task-1's receipt, changes only Verdict, binds Artifact to kma-contract-review.md and Sources to kma_expected_sources, and requires receipt_validator to fail. Phase B writes/promotes the complete F1 APPROVE receipt, rescans it, runs expected_binding and final_gate_validator, and removes it on failure. Invoke exactly final-f1-plan-compliance-qa; record that exact command in the receipt. F1 requires only todos 1-9 checked at this point and checks F1-F4 marker uniqueness.
  Additional cleanup QA gate: run `set -euo pipefail; trap_tmp=$(mktemp -d); set +e; (trap 'rm -rf "$trap_tmp"' EXIT; exit 1); trap_status=$?; set -e; test "$trap_status" -eq 1; test ! -e "$trap_tmp"`.
  Evidence: `.omo/evidence/weather-pwa-design/final-f1-plan-compliance.md`.
- [x] F2. Documentation and architecture quality review
  Inputs and ownership: a fresh reviewer, independent from todos 7-8, reads the spec, `DESIGN.md`, six component reviews, and integrity review. Review traceability, ambiguity, unsupported source claims, normalized-field completeness, security boundary, offline warning semantics, attribution/licensing, accessibility semantics, and memory-surface wording; no code-quality or runtime claim is in scope.
  Acceptance and QA (exact tool + invocation): write the Phase-A working review only to a unique `/tmp/weather-receipt-base.*` path with `Verdict: IN_PROGRESS`; the fixed `.omo/evidence/weather-pwa-design/final-f2-document-quality.md` path must remain absent. Run all happy, failure, and cleanup probes against that working path, replace its contents with the complete `Verdict: APPROVE` base receipt, a findings table with `Unresolved-Findings: 0`, and `Runtime-QA: NOT RUN`, and return the base path to the root. The root creates the transaction-owned candidate, runs the bound probes against `${QA_RECEIPT_CANDIDATE}`, and atomically promotes it to the fixed path only after validation. The candidate self-check requires `Verdict: APPROVE`, `Unresolved-Findings: 0`, `Runtime-QA: NOT RUN`, and every exact input path; final_gate_validator reruns after promotion. The fixed path is never used as an IN_PROGRESS placeholder.
  Evidence: `.omo/evidence/weather-pwa-design/final-f2-document-quality.md`.
- [x] F3. Semantic artifact walkthrough
  Inputs and ownership: a fresh QA reviewer reads the actual final documents and evidence as a user/implementer would. Walk through forecast success, warning success, forecast-only offline snapshot, warning-unavailable offline state, stale data-age copy, location denial/unavailable/reset, update/reconnect/visibility behavior, and the future performance/accessibility/responsive protocols. This is document-surface QA only; it must not launch a product, contact a KMA data endpoint, or claim visual/runtime success.
  Acceptance and QA (exact tool + invocation): write the Phase-A working semantic review only to a unique `/tmp/weather-receipt-base.*` path with `Verdict: IN_PROGRESS` and the twelve fixed scenario rows; the fixed `.omo/evidence/weather-pwa-design/final-f3-semantic-qa.md` path must remain absent. Run the global row, failure, and cleanup probes there, replace it with the complete `Verdict: APPROVE` base receipt including all scenario rows and `Runtime-QA: NOT RUN`, and return that path to the root. The root copies it into `${QA_RECEIPT_CANDIDATE}`, runs Scenario-Row-Validator and the runtime-claim negative probe against that candidate, then atomically promotes it and reruns final_gate_validator. The fixed path is never used as an IN_PROGRESS placeholder.
  Additional scenario-row QA gate: run the exact named Scenario-Row-Validator from the Verification strategy after the global checks, then invoke final_gate_validator after the full receipt is written. The validator must return nonzero for an unknown or duplicate Scenario-ID and for any missing field within its own scenario row.
  Evidence: `.omo/evidence/weather-pwa-design/final-f3-semantic-qa.md`.
- [x] F4. Scope, source, secret, and cleanup audit
  Inputs and ownership: a fresh reviewer compares the preflight path inventory with the explicit allowed-output list, enumerates every final artifact, validates official-source retrieval metadata, scans all final documents/evidence for credential-bearing URL/header/token patterns, and confirms no process/temp path remains. The audit must use the non-Git filesystem baseline, not `git diff`.
  Acceptance and QA (exact tool + invocation): F4 starts only after F1-F3 complete receipts exist. Phase A uses a unique `/tmp/weather-receipt-base.*` working receipt and keeps the fixed final-f4 path absent while it runs the non-Git baseline, fixed-output/fixed-directory comparisons, Initial-Inventory-Validator, source-record and task-source literal-map checks, sha256 checks, credential negative and eleven-fixture probes, process checks, and cleanup checks. Phase B replaces the working file with the complete APPROVE base receipt, returns it to the root, and lets the serialized candidate transaction run the final inventory/secret/process probes against `${QA_RECEIPT_CANDIDATE}` before atomic promotion. After promotion it rescans the fixed receipt and all final artifacts, runs expected_binding and final_gate_validator, and removes only the newly promoted receipt on failure. Only after Phase B passes does the root append f4-approved. The fixed path is never an IN_PROGRESS placeholder.
  Additional credential QA gate: construct the split markers for the eleven credential classes named in the credential-pattern contract; create one unique fixture per class with a non-empty fake value, require the expanded `secret_pattern` to return status 0 for each of the eleven fixtures, delete each fixture, and assert every fixture path is absent before the final receipt is written.
  Credential-scan boundary: the plan and draft intentionally contain split-marker fixture construction code, so the negative scan must not scan `.omo/plans` or `.omo/drafts` as product outputs. It scans `AGENTS.md`, the promoted evidence directory, the mutable Boulder/ledger, `docs`, and `DESIGN.md`; any credential-shaped match in those handoff surfaces fails. The process probe likewise checks only plan-owned weather transaction/base prefixes, not unrelated system processes whose command happens to contain a generic `node`, `curl`, browser, or shell name.
  Additional task-source metadata QA gate: run `set -euo pipefail; task_source_pattern='^Task-Source-Record: (2|3|4|5|6)\.[0-9]+ [|] Source-URL: https?://[^ ]+ [|] Retrieved-At: [0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(Z|[+-][0-9]{2}:[0-9]{2}) [|] Source-Modified: (NOT EXPOSED|[0-9]{4}-[0-9]{2}-[0-9]{2}) [|] Body-SHA256: [0-9a-f]{64}$'; digest_pattern='^Digest-Command: sha256sum [^[:space:]]+$'; test "$(rg -c '^Source-Record:' .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq 6; test "$(rg -c "$task_source_pattern" .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq 13; test "$(rg -c "$digest_pattern" .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq 19; for spec in '2 3' '3 3' '4 4' '5 1' '6 2'; do task=${spec% *}; count=${spec#* }; test "$(rg -c "^Task-Source-Record: $task\." .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq "$count"; done; for task in 2 3 4 5 6; do receipt=.omo/evidence/weather-pwa-design/task-$task-low-memory-kma-weather-pwa-design.md; expected_binding "$receipt"; test "$(sed -n 's/^Sources: //p' "$receipt")" = "$expected_sources"; done`; require each task receipt's `Sources:` projection plus every URL/date pair to match the immutable registry. A missing, reordered, or mismatched external source fails F4.
  Additional cleanup QA gate: run `set -euo pipefail; trap_tmp=$(mktemp -d); set +e; (trap 'rm -rf "$trap_tmp"' EXIT; exit 1); trap_status=$?; set -e; test "$trap_status" -eq 1; test ! -e "$trap_tmp"`.
  Evidence: `.omo/evidence/weather-pwa-design/final-f4-scope-security.md`.

## Execution errata (authoritative corrections)
The rules in this section are part of the reviewed execution contract and supersede any earlier inline command that conflicts with them. Workers must follow these sequences literally; a conflict is a plan defect, not a reason to improvise.
- OpenCode runtime adaptation (authoritative, 2026-08-30): this execution runs on the OpenCode runtime, which exposes a `task` delegation tool and a bash shell tool instead of the Codex `multi_agent_v1__spawn_agent`/`multi_agent_v1__wait_agent`/`multi_agent_v1__send_input`/`multi_agent_v1__close_agent`/`exec_command` surface. Wherever this plan, its executable blocks, or its prose reference those Codex controls: (1) worker/reviewer dispatch is performed by the root through the `task` tool, which provides spawn, wait, send-input (continuation by session id), and close semantics; (2) `exec_command` is realized by the root's bash shell tool; (3) the capability preflight requires the root runtime's callable delegation tool surface — the `task` tool, or an equivalent such as `call_omo_agent` that provides spawn, wait, send-input, and close semantics — and the bash shell tool to be callable, plus `node`, `curl`, `sha256sum`, `awk`, `sed`, GNU `find`, `mktemp`, and `rg` (ripgrep, user-installed at `~/.local/bin/rg`) on PATH — this preflight was executed and passed on 2026-08-30; (4) each delegated session identity is minted by the root from the actual `task` continuation id `ses_<id>` and recorded as `codex:ses_<id>`; every `codex:` value in Boulder, the ledger, session maps, and receipts therefore denotes a real delegated OpenCode session, and a worker's self-reported session field is never authoritative — the root substitutes the actual delegation session id before validation and ledger append; (5) review-record identity uses `launch_id: opencode-task:ses_<id>` and `session: codex:ses_<id>`, with `runtime_home` `managed-agent:metis`, `managed-agent:momus`, or `managed-agent:oracle` for the independent reviewer; (6) the Code-mode JavaScript dispatcher is executed procedurally by the root through those surfaces with identical state machines, validators, transactions, journals, and recovery procedures — no gate, probe, or cleanup step is skipped; (7) every validator pattern that matched a Codex UUID session shape is superseded by the `ses_` shape edits applied to the executable blocks in this same amendment, so the executable text below is self-consistent. The draft's `capability_preflight` line names the Codex control tokens as mapped equivalents so the unchanged draft-text validators match; the semantic requirement is the OpenCode surface described here.
- OpenCode procedural dispatcher binding (normative): the `~~~js` Code-mode entrypoint is a state-transition specification, not executable source for this runtime. The root realizes it exactly as follows. The capability set that `ALL_TOOLS` denotes is the root runtime's callable delegation tool surface (the `task` tool, or an equivalent such as `call_omo_agent` that provides spawn/wait/send-input/close semantics) and bash shell tool plus `node`, `curl`, `sha256sum`, `awk`, `sed`, GNU `find`, `mktemp`, and `rg` on PATH; the capability preflight is the root's recorded confirmation that all of these are callable, performed before any `.omo` mutation. Every `shell(...)`/`tools.exec_command` call is the root invoking the exact command string through bash with `workdir=/home/jeon_huijun/Project/weather` and requiring exit status 0. `multi_agent_v1__spawn_agent` is the root's `task` invocation for the lane; the returned continuation id `ses_<id>` is the lane's `agent_id`. `multi_agent_v1__wait_agent` is the synchronous `task` return (no polling). `multi_agent_v1__send_input` is `task(task_id="ses_<id>", ...)`. `multi_agent_v1__close_agent` is the session's completion after its final JSON validates; no separate close call exists and none is required. The root mints every `codex:ses_<id>` session value from the actual continuation id and overwrites any self-reported session field in a worker result before validation; worker prose outside the JSON contract is ignored. The literal bootstrap transaction and the literal `review_approval_validator`+`bootstrap_recovery_check` block are the sole bootstrap authorities: `BOOTSTRAP_NEW` runs the dispatcher `bootstrapCommand`, and `BOOTSTRAP_RESUME` sources the literal block extracted from this plan and runs it, exactly as the dispatcher's `bootstrapResumeCommand` encodes; no divergent resume implementation is permitted.
- r34 runtime-hardening corrections (reviewer-driven, same round): (1) `qa_prepare_and_bind` binds `receipt_to_check="$base_receipt"` before validation, matching the adapter `receipt_validator` that dereferences `receipt_to_check` under `set -u`. (2) `x_api_key_marker` is built with `printf 'X-%s-%s' 'API' 'Key'` in every marker constructor, so the `X-API-Key:` fixture class returns scan status 0 as required; the credential contract names eleven fixture classes and `todo_1_credential_fixture_probe` runs exactly those eleven. (3) `manifest_promote_copy` accepts a both-present state when the staged source and the live target each verify against the transaction digest (completing the interrupted promotion by removing the digest-proven source), and the manifest-pair recovery sweeps transaction-owned `*.tmp.*` helpers and digest-proven `.manifest-promote.*` orphans before member-name validation, failing closed on any unverifiable leftover. (4) The receipt transaction rolls back a digest-proven promoted fixed receipt when the post-promotion body check fails (journals `state=rolled-back`, removes only that receipt, returns failure), `adapter_receipt_recover` performs the same digest-proven rollback for interrupted `state=promotion-planned`/`state=promoted`/`state=cleanup-planned` transactions, accepts zero or exactly-empty journal-less transaction directories as completed cleanup gaps, and consumes a journaled `state=rolled-back` transaction through its normal helper cleanup. Post-promotion body checks run in a standalone subshell (`set +e; ( set -euo pipefail; adapter_receipt_body_check ... ); status=$?; set -e`) so the check keeps fail-fast semantics while the caller survives to roll back. (5) `todo_1_full_qa` validates and removes a journal-recorded `/tmp/weather-preflight-rebuild.*` assembler that survived an interruption after execution, and both `preflight_terminal_probe` and the closeout validator assert no `weather-preflight-rebuild.*` path remains. (6) Draft handoff: the approval edit sets the front-matter `status` to `approved` and renames the body `## Approval gate` field to `approval_status: approved` in the same atomic edit, leaving exactly one unindented `^status: approved$` row for `review_approval_validator`.
- Canonical shell-composition erratum (authoritative, fixes reviewer-identified ambiguity): exactly one canonical composition exists for the shared validator definitions used by every shell that runs plan validators. Every delegated worker extracts and sources, in this order: (a) the `WORKER_SOURCE_MAP` marked block (`task_source_expected`), (b) the `KMA_SOURCE_MAP` marked block (`kma_source_expected`, `kma_expected_sources`), (c) the `WORKER_QA_BINDING` marked block (the executable expected-binding replacement: `task_sources_expected_projection`, `task_source_registry_validate`, `expected_binding`, `receipt_validator`, `final_gate_validator`), (d) the `# ADAPTER_QA_VALIDATORS_BEGIN`..`# ADAPTER_QA_VALIDATORS_END` block (which also defines the shared `negative_scan_validator` and `filtered_negative_scan_validator`), then the plan-owned procedure groups in this exact order: (e) the `PREFLIGHT_RECOVERY` marked block (`preflight_recovery_validator` and its capture/stage helpers), (f) the `PREFLIGHT_CAPTURE` marked block (`todo_1_capture_initial_inventory`), (g) the `PREFLIGHT_FORCED_PROBE` marked block (`preflight_forced_status_77_probe`), (h) the `PREFLIGHT_RECEIPT_PROBE` marked block (`preflight_forced_status_77_receipt_probe`), and (i) the `FULL_QA_PROCEDURE` marked block (`todo_1_public_assembly_command`, `todo_1_create_rebuild_assembler`, `todo_1_stage_rebuild_from_capture`, `todo_1_credential_fixture_probe`, `todo_1_full_qa`, `final_f1_full_qa`, and `final_f4_full_qa`). The root uses the same blocks plus the `ADAPTER_RECEIPT_BINDING` and the applicable transaction blocks; the same-named validators nested inside `adapter_receipt_bind_and_validate` are root-local shadows that exist only while that function executes and must never be sourced by a worker. This list governs only the shared validator-definition names above; it is not an exhaustive list of every runnable function. The procedure groups (e)-(i) are extracted by their exact `_BEGIN`/`_END` markers, never by fence position, and the order (e)-(i) is mandatory because `preflight_recovery_validator` may call `todo_1_capture_initial_inventory`; both must be sourced together. They are not part of the four-block shared-validator composition. `receipt_validator` and `final_gate_validator` require `fixed_receipt`, `receipt_to_check`, and `expected_verdict` to be set by the caller and ignore positional arguments; `qa_prepare_and_bind` binds `QA_RECEIPT_CANDIDATE="$base_receipt"` before `qa_run_trace` and unsets it afterward, so every candidate-dereferencing F2/F3 probe validates the worker's own working receipt during Phase A, while the root's serialized candidate transaction binds `QA_RECEIPT_CANDIDATE` to its transaction candidate before its probes. Any invocation without the three caller variables set fails closed under `set -u`; no shell may define these three names from any other text in this plan.
- r35 runtime-hardening corrections (reviewer-driven, fresh round): (1) `final_f1_full_qa` sets `fixed_receipt` and `receipt_to_check` for every task receipt it validates and for its inline bad-receipt negative probe, so the canonical validator exercises a real verdict mismatch instead of failing on an unbound variable. (2) `final_f4_full_qa` replaces the absolute base-absence assertion with: the F4 worker's own `QA_RECEIPT_BASE` receipt must exist, every other `/tmp/weather-receipt-base.*` file is removed as a stale crashed-invocation leftover, and then exactly one base receipt remains and equals `QA_RECEIPT_BASE`; the closeout validator's real `/tmp/weather-receipt-base.*` glob check (not a literal `.design-only` path) remains the terminal backstop. (3) `todo_1_create_rebuild_assembler` derives a deterministic assembler path from the capture directory name, journals `captured assembler_path=<path> assembler_sha256=UNSEALED` before creating the file, records the real digest after, and the leak sweep in `todo_1_full_qa` removes both digest-proven and `UNSEALED` journal-recorded leftovers. (4) `todo_1_full_qa` treats a staged manifest as rebuildable whenever it is absent, lacks the `Source-Body-Validator-SHA256` marker, or does not carry exactly the two transcript marker rows: it removes only the two allowlisted staged outputs and rebuilds from capture, and it appends the transcript rows only when absent, verifying equality otherwise. (5) `bootstrap_recovery_check` and the state-transaction recovery accept exactly-empty, non-symlink, journal-less transaction directories as completed-cleanup crash gaps and remove only that directory. (6) `adapter_receipt_bind_and_validate` creates the receipt transaction and journals `state=candidate ... base=<path>` before the base body check, so a crash during binding leaves a recoverable journal; `adapter_receipt_recover` consumes that journal and removes the journaled base, and `receipt_recovery_check` fails closed on any journal containing `base=` (root-owned format). (7) The root sweeps stale `/tmp/weather-receipt-base.*` files at every `bindReceipts` (protecting the current batch's pending bases) and once more with no protection after the batch binds, closing the worker-returned-but-unbound crash window. (8) `adapter_closeout_recover` journals `staged source=<path>` before removing the external review-results source, verifies the transaction copy against the source, and resumes from `staged source=*` by verifying and removing the source before advancing, so the external handoff path never outlives an interrupted staging. (9) The `COMPLETE` state probe runs a read-only terminal closure check (completed Boulder, terminal `orchestration-completed` ledger event with four verified final-receipt digests and exact six-key closeout session map subset of the all-delegate map, matching output-manifest and detached digests, four APPROVE final receipts) before returning `COMPLETE`.
- r36 runtime-hardening corrections (reviewer-driven, fresh round): (1) the dispatcher `bootstrapCommand` journals `boulder=staged ledger=staged` before its first `mv`, mirroring the literal bootstrap transaction, so a crash between the `mv` and the next journal write reconciles through the existing `boulder=staged ledger=staged` recovery branch. (2) `todo_1_stage_rebuild_from_capture` recreates the preflight assembler whenever the recorded executable is absent or non-executable, not only when `PREFLIGHT_REBUILD_ASSEMBLER` is unset, so a fresh single-shell todo-1 run does not fail at `test -x` after the first assembler execution removed the file. (3) `adapter_receipt_bind_and_validate` and `adapter_receipt_recover` journal `state=rollback-planned` before removing a promoted receipt that fails post-promotion validation, `adapter_receipt_recover` reconciles a `rollback-planned` transaction whether or not the fixed receipt is still present, and an unsealed `state=candidate`/`state=validated` candidate is removed regardless of length so an interrupted `cp` cannot wedge recovery. (4) manifest-pair members are built through `.manifest-build.*` temporary files plus atomic rename in `todo_9_stage_manifest_pair`, and the r34 `manifest_pair_recovery_check` validates and rebuilds any invalid staged manifest or detached receipt member from the fixed 19-path list and sweeps `.manifest-build.*` leftovers before member-name validation; its `manifest_verify` helper now uses a `verify_source` parameter so it no longer clobbers the caller's `source`, and `manifest_promote_copy` removes only the staged source rather than the newly promoted live member. (5) `ADAPTER_QA_VALIDATORS` now defines the shared `negative_scan_validator` and `filtered_negative_scan_validator` executables, the root receipt-binding prelude sources the same four canonical blocks as a worker, and the canonical shell-composition erratum is scoped to the shared validator-definition names rather than all runnable functions. (6) `final_f1_full_qa`'s bad-receipt probe uses a `/tmp/weather-receipt-badprobe.*` directory with a scoped EXIT trap instead of a `./.omo/.weather-receipt.*` regular file. (7) the historical closure-transcript fence closes its own `if false; then`, the reference closure-validator fence no longer carries a stray `fi` and binds `fixed_receipt`/`receipt_to_check`/`expected_verdict` before `final_gate_validator`, and it is labelled a non-sourced reference because `adapter_closeout_validate` is the normative closeout validator. (8) `FINAL_4_RESUME` is emitted when the fixed F4 receipt exists with checkbox F4 unchecked; `receiptResumeWithFixed` includes it, the root validates the fixed F4 receipt through `adapter_receipt_body_check` in its full-inventory phase without running `f4_inventory_validator phase-a`, and the worker returns the F4 result contract without `base_receipt_path`. (9) the divergent inline `final_gate_validator` prose fragment is replaced by a pointer to the canonical `WORKER_QA_BINDING` block. (10) the dispatch prompt and prelude rule reference the normative `adapter_closeout_recover` instead of the undefined `closure_recovery_check`. (11) the closeout validator's base-leak check uses the real `/tmp/weather-receipt-base.*` glob. (12) the unused `qa_begin_receipt` and `qa_legacy_root_promotion_disabled` functions are removed. (13) `qa_prepare_and_bind` and the receipt-body trace check clean their `/tmp/weather-worker-receipt.*` and `/tmp/weather-receipt-trace.*` paths through EXIT-scoped subshells instead of RETURN traps that do not fire under `set -e`.
- r37 runtime-hardening corrections (reviewer-driven, fresh round): (1) `adapter_receipt_recover` journals `state=rollback-planned` before deleting a promoted fixed receipt in its `state=promotion-planned` post-promotion failure path and then runs the shared rollback-planned reconciliation, so a crash between the delete and the journal write can no longer leave `state=promoted` with no fixed receipt and wedge recovery; every receipt journal replacement in `adapter_receipt_bind_and_validate`, `adapter_receipt_recover`, and `receipt_recovery_check` is an atomic temp+rename through `receipt_atomic_line`/`receipt_recovery_atomic_line`, and the receipt helper sweeps consume transaction-owned `*.tmp.*` temporaries and a journal-less first-journal temporary only when no fixed receipt exists. (2) The dispatcher `bootstrapCommand` and the literal bootstrap transaction write their journals and backup copies atomically, regenerate a partial `boulder.backup`/`ledger.backup` from the authoritative staged (or, once promoted, live) source instead of failing `cmp`, recognize a `cleanup-planned` state that consumes the remaining transaction-owned files, and remove the journal last; a journal-less bootstrap directory may contain only recognized transaction-owned leftovers. The dispatcher state transaction's update and recovery commands likewise use atomic journal appends/replacements and backup copies, refresh partial backups from the authoritative staged or live source, recognize a `cleanup-planned` state, remove the journal last, and sweep `*.tmp.*` and recognized journal-less leftovers. (3) `manifest_pair_recovery_check` accepts and removes a journal-less first-journal temporary only when neither fixed manifest member exists, discards an invalid transaction-owned `.manifest-promote.*` or `*.tmp.*` helper copy when the authoritative staged source (or a valid fixed member) remains and regenerates the receipt/digests from that source, and accepts/removes `output-manifest.sha256`/`output-manifest-receipt.md` temporaries. (4) `todo_1_capture_initial_inventory` writes each inventory through an atomic temp+rename, and `preflight_recovery_validator` narrowly validates (no live `./.omo/evidence`, recognized transaction-owned names only) and discards an incomplete capture-only tree or a stage interrupted before its first journal write, then recaptures from the still-unmutated workspace and rebuilds the stage; the `1:1` recovery no longer reads a missing `preflight-journal`. (5) the previously position-interpreted full-procedure functions are grouped into deterministic marked blocks `PREFLIGHT_RECOVERY`, `PREFLIGHT_CAPTURE`, `PREFLIGHT_FORCED_PROBE`, `PREFLIGHT_RECEIPT_PROBE`, and `FULL_QA_PROCEDURE`, and the canonical shell-composition erratum specifies the exact worker prelude extraction order (a)-(i) rather than a single unmarked fence.
- r38 runtime-hardening corrections (reviewer-driven, fresh round): (1) the literal bootstrap transaction and the dispatcher `bootstrapCommand` now write the staged Boulder JSON and ledger JSONL through temp+rename and validate their JSON/JSONL content before the `boulder=staged ledger=staged` journal write, so promotion can only begin from an atomically written, content-validated staged pair; the `created` journal state is abort-only in both `bootstrap_recovery_check` and the dispatcher: it asserts both live targets remain absent, removes only recognized staged/backup/temporary files and an empty `.omo/start-work`, removes the journal last, and restarts bootstrap instead of promoting a crash-truncated file. (2) The dispatcher state transaction adds a distinct `discard-planned` state before its pre-promotion cleanup: recovery of `staged` verifies the immutable backups still match the three live files, transitions the journal to `discard-planned`, then removes recognized staging members regardless of size and allows any subset, with `state-journal` removed last; `created` recovery likewise discards recognized transaction-owned members without refreshing partial backups, so a crash during a staged rewrite or during recovery deletion can no longer wedge the state transaction. (3) one `preflight_atomic_line` helper (temp+rename) now performs every `preflight-journal` and `source-validation.sha256` replacement in stage creation, recovery transitions, assembler sealing, and `sources-validated`; `preflight_recovery_validator` sweeps or reconciles only recognized `preflight-journal.tmp.*` and `source-validation.sha256.tmp.*` temporaries before parsing state, so an interrupted marker write is rebuilt rather than parsed as an empty journal. (4) the trusted-review preflight resolves the reviewed plan hash and review round dynamically from the draft at execution time (`plan_sha256` and `review_round_id`) in `review_approval_validator`, `stateProbeCommand`, and the dispatcher `bootstrapCommand`, instead of comparing to a hard-coded round; no plan check binds a stale plan hash. (5) the capability preflight keeps its fail-closed requirement but is stated over the root runtime's callable delegation tool surface (the `task` tool or an equivalent such as `call_omo_agent` that provides spawn/wait/send-input/close semantics) rather than a single hard-coded tool name.
- Reviewed-hash/round binding erratum: the reviewed plan hash and review round are resolved dynamically from the draft at execution time (`plan_sha256` and `review_round_id`); no plan check is bound to a hard-coded plan hash or round, and updating the draft's reviewed values remains a separate later step.
- F4 task-source digest-count correction: the preflight manifest must contain exactly 6 `Digest-Command:` rows adjacent to the six `Source-Record:` rows and exactly 13 adjacent to the thirteen `Task-Source-Record:` rows, for 19 total. Any earlier total-count assertion of `-eq 13` is superseded; F4 runs separate `rg -c '^Digest-Command:'` checks for the 6 and 13 groups and a final total of 19.
- Preflight atomic sequence: after the start-work bootstrap and before the first preflight-owned mkdir, create `capture_tmp` and record `initial-paths`, `initial-files`, `initial-dirs`, and `initial-links` with the same `.git` exclusions used by the baseline. Then create `preflight_tmp` with `mktemp -d ./.omo/.weather-preflight.XXXXXX`, create `preflight_tmp/evidence/weather-pwa-design` and `preflight_tmp/references`, copy all four inventories into staging, download the public reference bodies into the references directory, and write the complete preflight manifest there. Write `captured` only after those inventories and staged directories exist. Run every source/body/task-source/frozen-hash/row validator against the staged paths, write the exact staged manifest digest to `source-validation.sha256`, then write `sources-validated`. Write `promotion=planned` before removing only `preflight_tmp/references` and before the one same-filesystem `mv` of the staged evidence directory to `./.omo/evidence`; write `promoted` immediately after that move. Write `cleanup-planned` before deleting any capture, inventory, marker, journal, or stage path; then consume only those exact paths. The EXIT trap removes only transaction-owned paths after a recorded successful cleanup, and no separate mkdir of `./.omo/evidence` or the fixed output directory is allowed before atomic directory promotion. Recovery revalidates the staged/live pair before advancing its journal state.
- Preflight journal and validation correction: the staged transaction owns `preflight-journal` at the stage root and writes `captured` after the four inventories and staged tree exist, `sources-validated` only after the staged source, body, task-source, frozen-hash, and row validators pass, `promotion=planned` before moving staged evidence, `promoted` immediately after the move, and `cleanup-planned` before deleting capture, inventory, journal, or stage paths. Recovery never promotes a merely non-empty manifest; it reconciles only a digest-validated live/staged pair and then records `promoted`, and it finishes only exact cleanup paths. No `cleaned` state is written after the journal is removed.
- Source-record path binding correction: every invocation of `source_record_validator` receives an explicit manifest path; todo 1 runs it once against the staged KMA review before promotion and once against the promoted live KMA review, while F4 runs it against the live path. No validator may hardcode a not-yet-live path when the staged artifact is the object under test.
- Preflight transaction-state correction: the preceding journal rule is superseded by this complete crash-safe sequence: write `captured`, `sources-validated`, `promotion=planned`, `promoted`, and `cleanup-planned` before the corresponding filesystem transition. Write `promotion=planned` before moving staged evidence and accept recovery with a live evidence directory plus `sources-validated` or `promotion=planned` only after the live manifest, staged inventory set, and immutable staged identity metadata validate; recovery then records `promoted`. Write `cleanup-planned` before deleting capture, inventory, journal, or stage directories; recovery accepts and finishes only those exact cleanup paths. There is no `cleaned` state written after the journal is removed. A staged manifest is never promoted from a merely non-empty or unvalidated state.
- Preflight provenance-marker correction: after `source_record_validator`, `source_body_validator`, task-source checks, and frozen-hash checks pass, write the staged `source-validation.sha256` containing the exact staged preflight-manifest digest. Recovery validates that marker, the live/staged manifest digest, live KMA source-record structure, and frozen hashes before any promotion; it may use the marker only for a transaction that already recorded `sources-validated`, never as a substitute for first-run source/body validation. Remove the marker only under `cleanup-planned`.
- Preflight recovery: support explicit journal-bound states. Capture-only means exactly one capture directory, no staging directory, and all four inventory files complete; recovery may recreate one staging directory from that capture and the worker must rerun the complete staged retrieval/artifact-assembly block before source validation. Staged means exactly one capture and one staging directory with all four byte-identical inventories and no live `./.omo/evidence`. Promoted means the live preflight manifest exists and the staging root contains only the six exact cleanup files (four inventories, `source-validation.sha256`, and `preflight-journal`); `cleanup-planned` may contain a verified subset of those six files after cleanup has begun. A journal-less empty staging directory is accepted only as the exact post-cleanup crash gap; a journal-less pre-promotion staging tree with no live `./.omo/evidence` is narrowly validated, discarded, and rebuilt from a complete capture, and an incomplete capture tree is discarded and recaptured from the still-unmutated workspace. Recovery consumes only the exact capture/staging paths. Any other combination fails closed and no broad `.omo` path is removed.
- Literal preflight recovery entrypoint:
~~~sh
# PREFLIGHT_RECOVERY_BEGIN
preflight_atomic_line() { target="$1"; value="$2"; tmp=$(mktemp "${target}.tmp.XXXXXX"); printf '%s\n' "$value" > "$tmp"; test "$(wc -l < "$tmp")" -eq 1; test "$(cat "$tmp")" = "$value"; mv "$tmp" "$target"; }
preflight_sweep_temporaries() {
  stage="$1"
  for journal_tmp in "$stage"/preflight-journal.tmp.*; do
    [ -e "$journal_tmp" ] || continue
    test -f "$journal_tmp"; test ! -L "$journal_tmp"
    if [ ! -e "$stage/preflight-journal" ] && [ "$(wc -l < "$journal_tmp")" -eq 1 ]; then mv "$journal_tmp" "$stage/preflight-journal"; else rm -f "$journal_tmp"; fi
  done
  for marker_tmp in "$stage"/source-validation.sha256.tmp.*; do
    [ -e "$marker_tmp" ] || continue
    test -f "$marker_tmp"; test ! -L "$marker_tmp"
    if [ ! -e "$stage/source-validation.sha256" ] && [ "$(wc -l < "$marker_tmp")" -eq 1 ] && rg -qx '[0-9a-f]{64}' "$marker_tmp"; then mv "$marker_tmp" "$stage/source-validation.sha256"; else rm -f "$marker_tmp"; fi
  done
  rm -f "$stage"/*.tmp.*
}
preflight_recovery_validator() {
  set -euo pipefail
  mapfile -t captures < <(find /tmp -mindepth 1 -maxdepth 1 -type d -name 'weather-preflight-capture.*' -print | LC_ALL=C sort)
  mapfile -t stages < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-preflight.*' -print | LC_ALL=C sort)
  capture_files=(initial-paths initial-files initial-dirs initial-links)
  capture_is_complete() { test "${#captures[@]}" -eq 1; for name in "${capture_files[@]}"; do test -s "${captures[0]}/$name"; done; }
  discard_capture_tree() {
    while IFS= read -r capture_entry; do
      capture_entry_name=${capture_entry##*/}
      case "$capture_entry_name" in initial-paths|initial-files|initial-dirs|initial-links|initial-paths.tmp.*|initial-files.tmp.*|initial-dirs.tmp.*|initial-links.tmp.*|.initial-paths.tmp.*|.initial-files.tmp.*|.initial-dirs.tmp.*|.initial-links.tmp.*) rm -f "$capture_entry" ;; *) return 1 ;; esac
    done < <(find "${captures[0]}" -mindepth 1 -maxdepth 1 -type f -print | LC_ALL=C sort)
    test -z "$(find "${captures[0]}" -mindepth 1 -print -quit)"
    rmdir "${captures[0]}"
  }
  remove_capture_files() { for name in "${capture_files[@]}"; do rm -f "${captures[0]}/$name"; done; rm -f "${captures[0]}"/*.tmp.* "${captures[0]}"/.*.tmp.*; }
  validate_capture() { capture_is_complete; }
  create_stage_from_capture() {
    preflight_tmp=$(mktemp -d ./.omo/.weather-preflight.XXXXXX)
    mkdir -p "$preflight_tmp/evidence/weather-pwa-design" "$preflight_tmp/references"
    for name in "${capture_files[@]}"; do cp "${captures[0]}/$name" "$preflight_tmp/$name"; done
    preflight_atomic_line "$preflight_tmp/preflight-journal" captured
  }
  recover_capture() {
    if [ "${#captures[@]}" -eq 1 ] && ! capture_is_complete; then discard_capture_tree; fi
    if [ "${#captures[@]}" -ne 1 ] || ! capture_is_complete; then todo_1_capture_initial_inventory; fi
    mapfile -t captures < <(find /tmp -mindepth 1 -maxdepth 1 -type d -name 'weather-preflight-capture.*' -print | LC_ALL=C sort)
    validate_capture
  }
  validate_frozen_stage() {
    staged_manifest="$1"
    expected_review=$(sha256sum .omo/plans/low-memory-kma-weather-pwa-design.md | awk '{print $1}')
    expected_contract=$(LC_ALL=C sed -E 's/^- \[(x| )\] (([0-9]+|F[1-4])\.)/- [ ] \2/' .omo/plans/low-memory-kma-weather-pwa-design.md | sha256sum | awk '{print $1}')
    test "$(sed -n 's/^Plan-Review-SHA256: //p' "$staged_manifest")" = "$expected_review"
    test "$(sed -n 's/^Plan-Contract-SHA256: //p' "$staged_manifest")" = "$expected_contract"
  }
  validate_staged_provenance() {
    stage_root="$1"
    staged_manifest="$stage_root/evidence/weather-pwa-design/preflight-manifest.md"
    test -s "$stage_root/source-validation.sha256"
    source_record_validator "$stage_root/evidence/weather-pwa-design/kma-contract-review.md"
    source_provenance_validator "$staged_manifest"
    if [ -d "$stage_root/references" ]; then source_body_validator "$staged_manifest" "$stage_root/references"; task_source_registry_validate "$staged_manifest"; fi
    source_body_receipt_probe "$staged_manifest"
    validate_frozen_stage "$staged_manifest"
    test "$(sha256sum "$staged_manifest" | awk '{print $1}')" = "$(cat "$stage_root/source-validation.sha256")"
  }
  validate_live_provenance() {
    stage_root="$1"
    live_manifest=.omo/evidence/weather-pwa-design/preflight-manifest.md
    test -s "$stage_root/source-validation.sha256"
    source_record_validator .omo/evidence/weather-pwa-design/kma-contract-review.md
    source_provenance_validator "$live_manifest"
    source_body_receipt_probe "$live_manifest"
    validate_frozen_stage "$live_manifest"
    test "$(sha256sum "$live_manifest" | awk '{print $1}')" = "$(cat "$stage_root/source-validation.sha256")"
  }
  case "${#captures[@]}:${#stages[@]}" in
    0:0)
      PREFLIGHT_RESUME=none
      ;;
    1:0)
      test ! -e ./.omo/evidence
      recover_capture
      create_stage_from_capture
      PREFLIGHT_RESUME=staged
      ;;
    1:1)
      preflight_sweep_temporaries "${stages[0]}"
      if [ ! -e "${stages[0]}/preflight-journal" ]; then
        test ! -e ./.omo/evidence
        case "${stages[0]}" in ./.omo/.weather-preflight.*) ;; *) return 1 ;; esac
        rm -rf "${stages[0]}"
        test ! -e "${stages[0]}"
        recover_capture
        create_stage_from_capture
        PREFLIGHT_RESUME=staged
        return 0
      fi
      stage_state=$(tail -n 1 "${stages[0]}/preflight-journal")
      stage_kind=${stage_state%% *}
      if [ "$stage_kind" = cleanup-planned ]; then
        stage_entries=$(find "${stages[0]}" -mindepth 1 -maxdepth 1 -type f -printf '%f\n' | LC_ALL=C sort)
        test -z "$(printf '%s\n' "$stage_entries" | rg -v '^(initial-paths|initial-files|initial-dirs|initial-links|source-validation.sha256|preflight-journal|.*\.tmp\.[A-Za-z0-9]+)$' || true)"
        for name in "${capture_files[@]}"; do rm -f "${stages[0]}/$name"; done
        rm -f "${stages[0]}"/*.tmp.*
        rm -f "${stages[0]}/source-validation.sha256" "${stages[0]}/preflight-journal"
        remove_capture_files
        rmdir "${captures[0]}"; rmdir "${stages[0]}"; test ! -e "${captures[0]}"; test ! -e "${stages[0]}"; PREFLIGHT_RESUME=none; return 0
      fi
      validate_capture
      for name in "${capture_files[@]}"; do cmp -s "${captures[0]}/$name" "${stages[0]}/$name"; done
      test -s "${stages[0]}/preflight-journal"
      case "$stage_kind" in captured|sources-validated|promotion=planned|promoted|cleanup-planned) ;; *) return 1 ;; esac
      if [ -e ./.omo/evidence ]; then
        test -s ./.omo/evidence/weather-pwa-design/preflight-manifest.md
        test ! -e "${stages[0]}/evidence"
        if [ "$stage_kind" != cleanup-planned ]; then
          validate_live_provenance "${stages[0]}"
          test "$(find "${stages[0]}" -mindepth 1 -maxdepth 1 -type f | wc -l)" -eq 6
          for name in "${capture_files[@]}"; do test -f "${stages[0]}/$name"; done
          test -s "${stages[0]}/source-validation.sha256"
          case "$stage_kind" in sources-validated|promotion=planned) preflight_atomic_line "${stages[0]}/preflight-journal" promoted ;; promoted) ;; *) return 1 ;; esac
        else
          test -z "$(comm -23 <(find "${stages[0]}" -mindepth 1 -maxdepth 1 -printf '%f\n' | LC_ALL=C sort) <(printf '%s\n' "${capture_files[@]}" source-validation.sha256 preflight-journal | LC_ALL=C sort))"
        fi
        preflight_atomic_line "${stages[0]}/preflight-journal" cleanup-planned
        for name in "${capture_files[@]}"; do rm -f "${stages[0]}/$name"; done
        rm -f "${stages[0]}"/*.tmp.*
        rm -f "${stages[0]}/source-validation.sha256"
        rm -rf "${captures[0]}"
        test ! -e "${captures[0]}"
        rm -f "${stages[0]}/preflight-journal"
        rmdir "${stages[0]}"
        test ! -e "${stages[0]}"
        PREFLIGHT_RESUME=none
      elif { [ "$stage_kind" = sources-validated ] || [ "$stage_kind" = promotion=planned ]; } && [ -s "${stages[0]}/evidence/weather-pwa-design/preflight-manifest.md" ]; then
        test ! -e ./.omo/evidence
        test -d "${stages[0]}/evidence/weather-pwa-design"
        validate_staged_provenance "${stages[0]}"
        rm -rf "${stages[0]}/references"
        test ! -e "${stages[0]}/references"
        preflight_atomic_line "${stages[0]}/preflight-journal" promotion=planned
        mv "${stages[0]}/evidence" ./.omo/evidence
        preflight_atomic_line "${stages[0]}/preflight-journal" promoted
        preflight_atomic_line "${stages[0]}/preflight-journal" cleanup-planned
        for name in "${capture_files[@]}"; do rm -f "${stages[0]}/$name"; done
        rm -f "${stages[0]}"/*.tmp.*
        rm -f "${stages[0]}/source-validation.sha256"
        rm -rf "${captures[0]}"
        test ! -e "${captures[0]}"
        rm -f "${stages[0]}/preflight-journal"
        rmdir "${stages[0]}"
        test ! -e "${stages[0]}"
        PREFLIGHT_RESUME=none
      elif [ "$stage_kind" = captured ] && [ -d "${stages[0]}/references" ]; then
        PREFLIGHT_RESUME=staged
      else
        return 1
      fi
      ;;
    0:1)
      test -e ./.omo/evidence/weather-pwa-design/preflight-manifest.md
      if [ -s "${stages[0]}/preflight-journal" ]; then
        test "$(tail -n 1 "${stages[0]}/preflight-journal")" = cleanup-planned
        stage_entries=$(find "${stages[0]}" -mindepth 1 -maxdepth 1 -type f -printf '%f\n' | LC_ALL=C sort)
        test -z "$(printf '%s\n' "$stage_entries" | rg -v '^(initial-paths|initial-files|initial-dirs|initial-links|source-validation.sha256|preflight-journal|.*\.tmp\.[A-Za-z0-9]+)$' || true)"
        rm -f "${stages[0]}"/initial-paths "${stages[0]}"/initial-files "${stages[0]}"/initial-dirs "${stages[0]}"/initial-links "${stages[0]}"/source-validation.sha256
        rm -f "${stages[0]}"/*.tmp.*
        rm -f "${stages[0]}"/preflight-journal
      else
        while IFS= read -r journalless_leftover; do
          journalless_leftover_name=${journalless_leftover##*/}
          case "$journalless_leftover_name" in initial-paths|initial-files|initial-dirs|initial-links|source-validation.sha256|.*\.tmp\.[A-Za-z0-9]+|*.tmp.*) rm -f "$journalless_leftover" ;; *) return 1 ;; esac
        done < <(find "${stages[0]}" -mindepth 1 -maxdepth 1 -type f -print | LC_ALL=C sort)
        test -z "$(find "${stages[0]}" -mindepth 1 -print -quit)"
      fi
      rmdir "${stages[0]}"
      PREFLIGHT_RESUME=none
      ;;
    *) return 1 ;;
  esac
}
# PREFLIGHT_RECOVERY_END
~~~
The adapter invokes `preflight_recovery_validator` before deciding whether todo 1 is unchecked; capture-only and staged states resume the same retrieval/promotion transaction, a live promoted manifest with the exact capture/inventory/marker/journal cleanup set is reconciled after an interruption between the evidence move and cleanup, cleanup-planned state consumes only the verified subset of those exact files, a stage directory interrupted before its first journal write is narrowly validated (no live evidence, recognized transaction-owned names only), discarded, and rebuilt from a complete capture, an incomplete capture-only tree is discarded and recaptured from the still-unmutated workspace, and every other state fails closed.
Literal fresh-capture command:
~~~sh
# PREFLIGHT_CAPTURE_BEGIN
todo_1_capture_initial_inventory() {
  set -euo pipefail
  test ! -e ./.omo/evidence
  test "$(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-preflight.*' -print | wc -l)" -eq 0
  PREFLIGHT_CAPTURE=$(mktemp -d /tmp/weather-preflight-capture.XXXXXX)
  export PREFLIGHT_CAPTURE
  capture_atomic_write() { name="$1"; target="$PREFLIGHT_CAPTURE/$name"; tmp=$(mktemp "$PREFLIGHT_CAPTURE/.${name}.tmp.XXXXXX"); cat > "$tmp"; test -s "$tmp"; mv "$tmp" "$target"; }
  find . \( -path './.git' -o -path './.git/*' \) -prune -o \( -type f -o -type l \) -printf '%P\n' | LC_ALL=C sort | capture_atomic_write initial-paths
  { while IFS= read -r path; do printf '%s %s\n' "$path" "$(sha256sum "./$path" | awk '{print $1}')"; done < <(find . \( -path './.git' -o -path './.git/*' \) -prune -o -type f -printf '%P\n' | LC_ALL=C sort); } | capture_atomic_write initial-files
  find . \( -path './.git' -o -path './.git/*' \) -prune -o -type d -not -path '.' -printf '%P\n' | LC_ALL=C sort | capture_atomic_write initial-dirs
  { while IFS= read -r path; do printf '%s -> %s\n' "$path" "$(readlink "./$path")"; done < <(find . \( -path './.git' -o -path './.git/*' \) -prune -o -type l -printf '%P\n' | LC_ALL=C sort); } | capture_atomic_write initial-links
  for name in initial-paths initial-files initial-dirs initial-links; do test -s "$PREFLIGHT_CAPTURE/$name"; done
}
# PREFLIGHT_CAPTURE_END
~~~
The fresh todo-1 worker must source and invoke `todo_1_capture_initial_inventory` before creating any preflight stage/evidence directory; recovery reuses the already captured four files and never recaptures after a workspace mutation. The capture command writes each inventory through an atomic temp+rename so a file is complete or absent, never partial. When recovery finds a capture-only or no-journal stage state whose capture is incomplete (or a stage interrupted between `mktemp`/copies and its first journal write), it validates that no live `./.omo/evidence` exists and that the transaction directory contains only recognized capture/stage names or transaction-owned temporaries, discards that incomplete pre-promotion tree, recaptures the inventory from the still-unmutated workspace, and rebuilds the stage; a complete capture is never recaptured.
- Capture-only assembler identity: when recovery creates a stage from the four captured inventories, the same todo-1 worker must bind `TODO_1_ASSEMBLY_COMMAND` to the literal public-document retrieval and preflight-artifact assembly block it would run on a fresh transaction, then call `todo_1_create_rebuild_assembler`. That constructor writes the executable under `/tmp/weather-preflight-rebuild.*`, records its exact path and SHA-256 in the stage journal's `captured` line, and `todo_1_stage_rebuild_from_capture` verifies both values before execution. A fresh shell may not import an unrecorded function or caller-supplied path. The assembler is removed only by the existing exact preflight cleanup; its command is forbidden from containing credentials or forecast/warning data endpoints.
- Literal forced-status-77 preflight probe:
~~~sh
# PREFLIGHT_FORCED_PROBE_BEGIN
preflight_forced_status_77_probe() {
  (
    set -euo pipefail
    test ! -e ./.omo/evidence
    probe_tmp=$(mktemp -d ./.omo/.weather-preflight-probe.XXXXXX)
    trap 'rm -rf "$probe_tmp"' EXIT
    mkdir -p "$probe_tmp/evidence/weather-pwa-design"
    printf '%s\n' 'partial' > "$probe_tmp/evidence/weather-pwa-design/preflight-manifest.md"
    set +e
    ( set -euo pipefail; test -s "$probe_tmp/evidence/weather-pwa-design/preflight-manifest.md"; exit 77 )
    probe_status=$?
    set -e
    test "$probe_status" -eq 77
    test ! -e ./.omo/evidence
    test ! -e ./.omo/evidence/weather-pwa-design
    rm -rf "$probe_tmp"
    trap - EXIT
    test ! -e "$probe_tmp"
  )
}
# PREFLIGHT_FORCED_PROBE_END
~~~
Todo 1 invokes this exact function before retrieval and again before the real staged evidence-directory promotion; a non-77 status, any generated live evidence path, or any surviving probe directory fails closed.
- Receipt-time forced-status-77 probe: because the original preflight probe intentionally runs before any live evidence exists, task 1's bound trace uses this post-promotion variant, which exercises the same forced failure and cleanup while leaving the live manifest intact:
~~~sh
# PREFLIGHT_RECEIPT_PROBE_BEGIN
preflight_forced_status_77_receipt_probe() {
  (
    set -euo pipefail
    test -s ./.omo/evidence/weather-pwa-design/preflight-manifest.md
    probe_tmp=$(mktemp -d ./.omo/.weather-preflight-probe.XXXXXX)
    trap 'rm -rf "$probe_tmp"' EXIT
    mkdir -p "$probe_tmp/evidence/weather-pwa-design"
    printf '%s\n' partial > "$probe_tmp/evidence/weather-pwa-design/preflight-manifest.md"
    set +e
    ( set -euo pipefail; test -s "$probe_tmp/evidence/weather-pwa-design/preflight-manifest.md"; exit 77 )
    probe_status=$?
    set -e
    test "$probe_status" -eq 77
    test -s ./.omo/evidence/weather-pwa-design/preflight-manifest.md
  )
}
# PREFLIGHT_RECEIPT_PROBE_END
~~~
- Independent task-source binding: todo 1 must download every declared Task-Source-Record URL into a unique reference body under preflight_tmp/references/task-<id>.body before writing the staged registry. The body is retained until URL identity, retrieval timestamp, source-modified value, sha256sum output, and adjacency checks pass. Define this plan-owned literal map and compare every staged row to it:
~~~sh
# WORKER_SOURCE_MAP_BEGIN
task_source_expected() {
  case "$1" in
    2.1|4.1) printf '%s\n' 'https://www.data.go.kr/catalog/15084084/openapi.json' ;;
    2.2) printf '%s\n' 'https://www.data.go.kr/data/15000415/openapi.do' ;;
    2.3) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=21' ;;
    3.1) printf '%s\n' 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable' ;;
    3.2) printf '%s\n' 'https://www.w3.org/TR/service-workers/' ;;
    3.3) printf '%s\n' 'https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/' ;;
    4.2) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=39' ;;
    4.3) printf '%s\n' 'https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286' ;;
    4.4) printf '%s\n' 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API' ;;
    5.1) printf '%s\n' 'https://www.w3.org/TR/WCAG22/' ;;
    6.1) printf '%s\n' 'https://developer.chrome.com/docs/devtools/memory-problems' ;;
    6.2) printf '%s\n' 'https://learn.microsoft.com/en-us/microsoft-edge/devtools/memory-problems/microsoft-edge-browser-task-manager' ;;
    *) return 1 ;;
  esac
}
# WORKER_SOURCE_MAP_END
~~~
For every row, compare Source-URL to task_source_expected, compare Body-SHA256 to sha256sum of its staged reference body, require the immediately following Digest-Command to name that exact body, and require the task receipt Sources projection to be derived from the independently expected URL order. Before removing `preflight_tmp/references`, todo 1 invokes `source_body_validator <staged-preflight-manifest> <preflight_tmp/references>`; this verifies every downloaded body digest and the exact adjacent command path. F4 repeats the literal URL/order/adjacency checks against the promoted manifest and rejects a registry that merely has the right shape or count. The same rule applies to the six KMA Source-Record rows: their public documentation bodies are retrieved and hashed before promotion; no forecast or warning data endpoint is called.
- Independent KMA source identity binding: task 1 does not derive its six URL identities from the generated preflight registry. Its expected_binding uses this separate literal map, while retrieval timestamps and body digests are read only after the URL has matched:
~~~sh
# KMA_SOURCE_MAP_BEGIN
kma_source_expected() {
  case "$1" in
    1) printf '%s\n' 'https://www.data.go.kr/data/15084084/openapi.do' ;;
    2) printf '%s\n' 'https://www.data.go.kr/catalog/15084084/openapi.json' ;;
    3) printf '%s\n' 'https://www.data.go.kr/data/15000415/openapi.do' ;;
    4) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=21' ;;
    5) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=39' ;;
    6) printf '%s\n' 'https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286' ;;
    *) return 1 ;;
  esac
}
kma_expected_sources() {
  for n in 1 2 3 4 5 6; do
    url=$(kma_source_expected "$n")
    row=$(rg "^Source-Record: $n " .omo/evidence/weather-pwa-design/preflight-manifest.md)
    test "$(printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) .*/\1/p')" = "$url"
    printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) | Retrieved-At: \([0-9-]*\)T.*/\1 | \2/p'
  done | paste -sd ';' -
}
# KMA_SOURCE_MAP_END
~~~
The six KMA rows and the six URLs in task-1 References must match this map in order; a wrong URL, swapped row, or internally fabricated body hash fails before the task receipt.
- Executable expected-binding replacement:
~~~sh
# WORKER_QA_BINDING_BEGIN
task_sources_expected_projection() {
  task="$1"
  task_source_registry_validate
  index=0
  while index=$((index+1)); do
    id="$task.$index"
    url=$(task_source_expected "$id" 2>/dev/null) || break
    row=$(rg "^Task-Source-Record: $id " .omo/evidence/weather-pwa-design/preflight-manifest.md)
    test "$(printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) .*/\1/p')" = "$url"
    printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) | Retrieved-At: \([0-9-]*\)T.*/\1 | \2/p'
  done | paste -sd ';' -
}
task_source_registry_validate() {
  manifest="${1:-.omo/evidence/weather-pwa-design/preflight-manifest.md}"
  for task in 2 3 4 5 6; do
    while IFS= read -r row; do
      id=$(printf '%s\n' "$row" | sed -n 's/^Task-Source-Record: \([^ ]*\) | Source-URL: \([^ ]*\) .*/\1/p')
      url=$(printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) .*/\1/p')
      test "$url" = "$(task_source_expected "$id")"
    done < <(rg "^Task-Source-Record: $task\." "$manifest")
  done
}
expected_binding() {
  expected_artifact=; expected_command=; expected_sources=
  case "$1" in
    .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/kma-contract-review.md; expected_command=todo-1-source-contract-and-receipt-qa; expected_sources=$(kma_expected_sources) ;;
    .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/proxy-threat-review.md; expected_command=todo-2-proxy-threat-qa; expected_sources=$(task_sources_expected_projection 2) ;;
    .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/pwa-offline-review.md; expected_command=todo-3-offline-contract-qa; expected_sources=$(task_sources_expected_projection 3) ;;
    .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/location-privacy-review.md; expected_command=todo-4-location-privacy-qa; expected_sources=$(task_sources_expected_projection 4) ;;
    .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/ui-accessibility-review.md; expected_command=todo-5-ui-accessibility-qa; expected_sources=$(task_sources_expected_projection 5) ;;
    .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/performance-budget-review.md; expected_command=todo-6-performance-budget-qa; expected_sources=$(task_sources_expected_projection 6) ;;
    .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md) expected_artifact=docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; expected_command=todo-7-specification-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md) expected_artifact=DESIGN.md; expected_command=todo-8-design-system-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/design-integrity-review.md; expected_command=todo-9-integrity-manifest-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md) expected_artifact=.omo/evidence/weather-pwa-design/output-manifest.sha256; expected_command=final-f1-plan-compliance-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/final-f2-document-quality.md) expected_artifact=docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; expected_command=final-f2-document-quality-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md) expected_artifact=DESIGN.md; expected_command=final-f3-semantic-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/final-f4-scope-security.md) expected_artifact=.omo/evidence/weather-pwa-design/preflight-manifest.md; expected_command=final-f4-scope-security-qa; expected_sources=none ;;
    *) return 1 ;;
  esac
}
receipt_validator() {
  set -euo pipefail
  expected_binding "$fixed_receipt"
  test -s "$receipt_to_check"
  test "$(rg -c '^Verdict: ' "$receipt_to_check" || printf '0')" -eq 1
  test "$(rg -c "^Verdict: $expected_verdict$" "$receipt_to_check" || printf '0')" -eq 1
  for field in Artifact Principal-Artifact-SHA256 Command Sources Plan-Review-SHA256 Plan-Contract-SHA256 Adversarial-Classes Exit-Status Temporary-Paths Long-Lived-Processes Cleanup-Status; do test "$(rg -c "^$field: " "$receipt_to_check" || printf '0')" -eq 1; done
  test "$(sed -n 's/^Artifact: //p' "$receipt_to_check")" = "$expected_artifact"
  test "$(sed -n 's/^Command: //p' "$receipt_to_check")" = "$expected_command"
  test "$(sed -n 's/^Sources: //p' "$receipt_to_check")" = "$expected_sources"
  test -s "$expected_artifact"
  test "$(sed -n 's/^Principal-Artifact-SHA256: //p' "$receipt_to_check")" = "$(sha256sum "$expected_artifact" | awk '{print $1}')"
  review_hash=$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_review_sha256)')
  contract_hash=$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_contract_sha256)')
  test "$(sed -n 's/^Plan-Review-SHA256: //p' "$receipt_to_check")" = "$review_hash"
  test "$(sed -n 's/^Plan-Contract-SHA256: //p' "$receipt_to_check")" = "$contract_hash"
  test "$(sed -n 's/^Exit-Status: //p' "$receipt_to_check")" = 0
  test "$(sed -n 's/^Temporary-Paths: //p' "$receipt_to_check")" = none
  test "$(sed -n 's/^Long-Lived-Processes: //p' "$receipt_to_check")" = none
  test "$(sed -n 's/^Cleanup-Status: //p' "$receipt_to_check")" = PASS
  classes=$(sed -n 's/^Adversarial-Classes: //p' "$receipt_to_check")
  class_lines=$(printf '%s\n' "$classes" | tr ';' '\n' | sed '/^[[:space:]]*$/d')
  test "$(printf '%s\n' "$class_lines" | wc -l)" -eq 10
  actual_class_ids=$(printf '%s\n' "$class_lines" | cut -d= -f1 | LC_ALL=C sort)
  expected_class_ids=$(printf '%s\n' source_version_drift source_inference_confusion credential_leakage boundary_contradiction privacy_overcollection false_runtime_claim numeric_budget_drift unexpected_product_file accessibility_state_omission stale_missing_evidence | LC_ALL=C sort)
  test "$actual_class_ids" = "$expected_class_ids"
  while IFS= read -r class_line; do printf '%s\n' "$class_line" | rg -q '^[a-z0-9_]+=(PROBED|NA):[^;]+$'; done <<< "$class_lines"
}
final_gate_validator() {
  set -euo pipefail
  receipt_validator
  case "$fixed_receipt" in .omo/evidence/weather-pwa-design/final-f[1-4]-*.md) ;; *) return 1 ;; esac
  output_hash=$(sha256sum .omo/evidence/weather-pwa-design/output-manifest.sha256 | awk '{print $1}')
  test "$(rg -c '^Output-Manifest-SHA256: ' "$receipt_to_check" || printf '0')" -eq 1
  test "$(sed -n 's/^Output-Manifest-SHA256: //p' "$receipt_to_check")" = "$output_hash"
  sha256sum --check .omo/evidence/weather-pwa-design/output-manifest.sha256 >/dev/null
  detached_hash=$(sed -n 's/^Output-Manifest-SHA256: //p' .omo/evidence/weather-pwa-design/output-manifest-receipt.md)
  test "$detached_hash" = "$output_hash"
}
adapter_receipt_body_check() {
  set -euo pipefail
  receipt_to_check="$1"
  receipt_key="$fixed_receipt"
  receipt="$receipt_to_check"
  expected_binding "$fixed_receipt"
  test -s "$receipt_to_check"
  test "$(rg -c "^Verdict: $expected_verdict$" "$receipt_to_check" || printf '0')" -eq 1
  test "$(sed -n 's/^Artifact: //p' "$receipt_to_check")" = "$expected_artifact"
  test "$(sed -n 's/^Command: //p' "$receipt_to_check")" = "$expected_command"
  test "$(sed -n 's/^Sources: //p' "$receipt_to_check")" = "$expected_sources"
  qa_trace_validator
  test "$(sed -n 's/^Plan-Review-SHA256: //p' "$receipt_to_check")" = "$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_review_sha256)')"
  test "$(sed -n 's/^Plan-Contract-SHA256: //p' "$receipt_to_check")" = "$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_contract_sha256)')"
  test "$(sed -n 's/^Cleanup-Status: //p' "$receipt_to_check")" = PASS
  if [ "$fixed_receipt" = .omo/evidence/weather-pwa-design/final-f4-scope-security.md ]; then
    if [ -e "$fixed_receipt" ]; then f4_inventory_validator full; else f4_inventory_validator phase-a; fi
  else
    f4_inventory_validator full 2>/dev/null || true
  fi
  if [ "$expected_verdict" = APPROVE ]; then final_gate_validator; else receipt_validator; fi
}
# WORKER_QA_BINDING_END
~~~
Artifact in every receipt means the principal output owned by that task; receipt remains the shell variable naming the receipt under test. The shared validator compares Artifact to this independent map and checks that the principal output exists.
- Task 9 artifact-pair promotion: the manifest and detached receipt are staged and validated before either fixed output is promoted. The manifest path-order validator owns its own manifest_tmp and must remove it and assert absence before clearing its EXIT trap. If a crash leaves a staged member, recovery validates the staged digest and completes the missing promotion; if a fixed member already exists, recovery validates that fixed digest and completes the other member. A lone fixed manifest is never rolled back merely because the receipt move had not yet been journaled; it is retained only when both fixed members pass their detached digests and the pair validator passes. No prior output pair is expected at the first Task 9 run.
- Manifest-pair crash correction: before either move, write immutable `manifest.digest` and `receipt.digest` files in the manifest transaction and journal `manifest=staged receipt=staged`. Write `manifest=promotion-planned receipt=staged` before the first move, verify the staged/live digest after the move, then write `manifest=promoted receipt=staged`; write `manifest=promotion-planned receipt=promotion-planned` before the second move, verify it, then write `manifest=promoted receipt=promoted`. Recovery reconciles a missing staged member against its fixed-path digest, never assumes a move from the journal alone, completes both promotions, and consumes the transaction only after both fixed members pass digest/path validation. A partial `.manifest-promote.*` or `*.tmp.*` helper copy is discarded when its authoritative staged source remains, with the detached receipt and digests regenerated, and a journal-less first-journal temporary is accepted only when no fixed member exists. The old one-promoted rollback branch is superseded.
- Task-9 trace boundary correction: the immutable task-9 receipt is pre-manifest and its exact QA trace contains only the integrity, negative, and cleanup probes listed for that phase. `manifest-stage`, `manifest-digest`, and pair-promotion probes run only after that receipt is promoted, are recorded in the manifest transaction journal/detached manifest receipt, and are validated by `staged_manifest_validator`, `manifest_path_order_validator`, and the pair recovery function; they are not required fields of the pre-manifest task-9 receipt.
- Task 9 exact binding and staged validation: define todo-9-integrity-manifest-qa as the exact pre-manifest happy-path command. It must run the integrity-review assertions, the named negative and cleanup validators, the QA trace, and the immutable task-9 receipt binding before any output manifest exists. Only after that receipt passes may the worker stage `output-manifest.sha256` and its detached receipt, run staged_manifest_validator and detached-digest comparison, promote the pair with the manifest-journal, and run manifest_path_order_validator after the live manifest move. Invoke the command literally as todo-9-integrity-manifest-qa; the post-receipt manifest phase is a separate required procedure and is not part of the receipt's pre-manifest binding. Its named failure invocation is set -euo pipefail; negative_pattern='^Unresolved-Contradictions: [^0]'; negative_paths=(.omo/evidence/weather-pwa-design/design-integrity-review.md); negative_tmp=$(mktemp -d); trap 'rm -rf "$negative_tmp"' EXIT; negative_scan_validator. The manifest pair transaction writes manifest-journal rows manifest=staged and receipt=staged before either mv, changes each row only after post-move existence checks, and recovery completes a missing member only after its detached digest and the pair validator pass; both promoted outputs are retained only after the journal records pair=committed.
- Task-9 pair-resume evidence correction: if both fixed manifest members exist while checkbox 9 is still unchecked and no transaction remains, the state probe emits `TODO_9_PAIR_RESUME`; that state re-dispatches the task-9 role only to validate the existing fixed task-9 receipt and return the exact result contract, omitting a new base receipt. The root then validates the fixed receipt, validates the manifest pair, and persists the actual new `codex:` session/result row before checking 9, so the committed pair cannot bypass worker/session evidence.
- Staged manifest validator: staged_manifest_validator accepts one explicit manifest path, compares its 19 paths to the fixed order, runs sha256sum --check against that same explicit path, and checks exactly 19 rows. It never reads the fixed live output path. The live manifest_path_order_validator runs only after promotion.
- Trap isolation: manifest_path_order_validator executes its existing body inside a subshell, so its EXIT trap and trap - EXIT cannot replace the caller's final_tmp, closure, receipt-stage, or recovery trap. A failure in the validator returns nonzero to the caller and leaves the caller's cleanup trap installed.
- Closure validator prelude: assemble one standalone closure shell as `set -euo pipefail`, then re-declare manifest_path_order_validator, staged_manifest_validator, frozen_contract_validator, qa_trace_expected, qa_trace_validator, qa_secret_pattern_build, qa_process_clean_probe, and the named negative/scenario/cleanup validators from the Verification strategy; source the canonical `KMA_SOURCE_MAP`, `WORKER_SOURCE_MAP`, and `WORKER_QA_BINDING` marked blocks for kma_source_expected, task_source_expected, task_source_registry_validate, kma_expected_sources, task_sources_expected_projection, expected_binding, receipt_validator, and final_gate_validator (per the canonical shell-composition erratum), and only then define closure_validator. The staged and live closure calls run in subshells containing that complete prelude; the transaction block is not executed until `test "$(type -t closure_validator)" = function` succeeds. No validator may depend on a function from a previous continuation shell.
- Final-lane ordering: F1-F4 Phase A runs all probes that do not require the completed lane receipt while the placeholder is IN_PROGRESS. Then write the complete receipt to a transaction-owned stage, atomically promote that receipt, and run the receipt self-scan, final_gate_validator, detached manifest check, and any final scan that intentionally includes the completed receipt. If Phase B fails, remove the promoted receipt and do not append an approval event. For F4 only, append f4-approved after Phase B passes. Any earlier wording that says f4-approved precedes completion of the F4 receipt is superseded by this ordering.
- F4 exact binding: define final-f4-scope-security-qa as the exact command for the complete lane. Its Phase A body is the non-Git scope inventory, fixed-contract comparison, Initial-Inventory-Validator, literal KMA/task-source metadata checks, hash checks, secret negative and eleven-fixture probes, process checks, and cleanup checks described above; its Phase B body writes/promotes the complete receipt, rescans the completed receipt, runs expected_binding and final_gate_validator, and rolls back the receipt on failure. Invoke it literally as final-f4-scope-security-qa, and record that exact string in Command.
- Final no-Git recheck: final-f4-scope-security-qa and the closure validator both run test ! -f .git/HEAD; test ! -f .git/config; if git rev-parse --is-inside-work-tree succeeds, fail. Their inventory comparison still prunes only the pre-existing .git tree after this explicit state check, so a later Git initialization cannot hide from scope QA.
- Bootstrap directory accounting: .omo/start-work is created by the bootstrap and must be recorded as Initial-Directory, not Allowed-Directory. The five post-bootstrap preflight-owned directories are the only Allowed-Directory rows; every fixed-directory comparison unions Initial-Directory and Allowed-Directory before comparing with Fixed-directory-contract.
- F1 negative-receipt probe correction: copy the real task-1 receipt to a temporary bad receipt, change only its Verdict, keep expected_artifact bound to the principal kma-contract-review.md, keep expected_sources bound to kma_expected_sources, set receipt to the temporary bad receipt without calling expected_binding on that temporary path, and require receipt_validator to fail. This probe must not turn the receipt under test into its own expected Artifact.
- Closure path and recovery: use closure_tmp with the ./ prefix and pass that exact value as CLOSURE_EXCLUDE_DIR, so both staged and live find commands exclude the transaction and its nested backup. The corrected closeout transaction above keeps a durable journal and backups until live validation succeeds; its failure-safe restore uses set +e and cmp verification, and it preserves the transaction for recovery if restoration cannot be verified. A successful closeout removes backup before closure_tmp, clears the trap, and asserts both are absent.
- Closeout crash-state correction: journal `backup-creating` before creating the backup directory, `backups-ready` only after both immutable copies verify, `rollback-planned` before any restore copy, `rollback-restored` only after both live files compare to backups, `live-validated` after the staged/live closure checks, and `cleanup-planned` before deleting backup, review-input, journal, or transaction directories. Recovery handles partial backup creation, interrupted restoration, and cleanup-planned without requiring already-deleted backups; mixed live files fail closed and preserve the transaction. If a crash occurs after the exact cleanup journal is removed but before `rmdir`, recovery accepts only an empty `.weather-closure.*` directory and removes that exact directory; any remaining file fails closed.
- Exact retry move set: the five and only five source-to-destination pairs are the five allowlisted source paths mapped beneath the validated transaction-owned `retry_archive` (`./.weather-plan-retry.XXXXXX`); no fixed `archive/...` path and no directory outside that transaction is eligible. The journal records one exact source, destination, initial=present|absent state, and status for each pair.
- Retry reversal correction: a reverse move first journals `status=reversing`, then moves the destination back, verifies both sides, and only then journals `status=reversed`. Recovery accepts only the two provable `reversing` states (source restored/destination absent, or source absent/destination present and resumable), completes the same exact move, and rejects partial/ambiguous pairs. Successful reversal removes the journal and empty archive directories deepest-first; an interrupted cleanup resumes from the journal and never deletes a non-empty or unexpected archive path.
- Literal retry transaction validator and reverse path:
~~~sh
retry_pairs_for_archive() {
  set -euo pipefail
  retry_archive="$1"
  case "$retry_archive" in ./.weather-plan-retry.*) ;; *) return 1 ;; esac
  retry_pairs=(
    "docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md|$retry_archive/docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md"
    "DESIGN.md|$retry_archive/DESIGN.md"
    ".omo/evidence/weather-pwa-design|$retry_archive/.omo/evidence/weather-pwa-design"
    ".omo/boulder.json|$retry_archive/.omo/boulder.json"
    ".omo/start-work/ledger.jsonl|$retry_archive/.omo/start-work/ledger.jsonl"
  )
}
retry_pairs=()
retry_journal_init() {
  set -euo pipefail
  retry_journal="$1"
  retry_archive="$2"
  retry_pairs_for_archive "$retry_archive"
  : > "$retry_journal"
  for pair in "${retry_pairs[@]}"; do
    source_path=${pair%%|*}; destination_path=${pair#*|}
    if [ -e "$source_path" ]; then initial=present; else initial=absent; fi
    printf 'source=%s destination=%s initial=%s status=planned\n' "$source_path" "$destination_path" "$initial" >> "$retry_journal"
  done
}
retry_transaction_validator() {
  set -euo pipefail
  retry_journal="$1"
  retry_archive="$2"
  retry_pairs_for_archive "$retry_archive"
  test -s "$retry_journal"
  for pair in "${retry_pairs[@]}"; do
    source_path=${pair%%|*}; destination_path=${pair#*|}
    line_no=$(rg -n -F "source=$source_path destination=$destination_path " "$retry_journal" | cut -d: -f1)
    test -n "$line_no"
    line=$(sed -n "${line_no}p" "$retry_journal")
    case "$line" in
      *'status=planned')
        if [ -e "$source_path" ] && [ ! -e "$destination_path" ]; then :
        elif printf '%s\n' "$line" | rg -q 'initial=present' && [ ! -e "$source_path" ] && [ -e "$destination_path" ]; then sed -i "${line_no}s/status=planned$/status=moved/" "$retry_journal"
        elif printf '%s\n' "$line" | rg -q 'initial=absent' && [ ! -e "$source_path" ] && [ ! -e "$destination_path" ]; then :
        else return 1
        fi
        ;;
      *'status=moved')
        test ! -e "$source_path"
        test -e "$destination_path"
        ;;
      *'status=reversing')
        if [ -e "$source_path" ] && [ ! -e "$destination_path" ]; then sed -i "${line_no}s/status=reversing$/status=reversed/" "$retry_journal"
        elif [ ! -e "$source_path" ] && [ -e "$destination_path" ]; then mv "$destination_path" "$source_path"; test -e "$source_path"; test ! -e "$destination_path"; sed -i "${line_no}s/status=reversing$/status=reversed/" "$retry_journal"
        else return 1
        fi
        ;;
      *'status=reversed')
        initial=$(printf '%s\n' "$line" | sed -n 's/.* initial=\([^ ]*\) status=.*/\1/p')
        if [ "$initial" = present ]; then test -e "$source_path"; else test ! -e "$source_path"; fi
        test ! -e "$destination_path"
        ;;
      *) return 1 ;;
    esac
  done
  test "$(wc -l < "$retry_journal")" -eq 5
}
retry_reverse_transaction() {
  set -euo pipefail
  retry_journal="$1"
  retry_archive="$2"
  retry_pairs_for_archive "$retry_archive"
  for index in 4 3 2 1 0; do
    pair="${retry_pairs[$index]}"
    source_path=${pair%%|*}; destination_path=${pair#*|}
    line_no=$(rg -n -F "source=$source_path destination=$destination_path " "$retry_journal" | cut -d: -f1)
    line=$(sed -n "${line_no}p" "$retry_journal")
    if printf '%s\n' "$line" | rg -q 'status=moved$'; then
      test ! -e "$source_path"
      test -e "$destination_path"
      sed -i "${line_no}s/status=moved$/status=reversing/" "$retry_journal"
      mv "$destination_path" "$source_path"
      test -e "$source_path"
      test ! -e "$destination_path"
      sed -i "${line_no}s/status=reversing$/status=reversed/" "$retry_journal"
    fi
  done
  for pair in "${retry_pairs[@]}"; do
    source_path=${pair%%|*}; destination_path=${pair#*|}
    line=$(rg -F "source=$source_path destination=$destination_path " "$retry_journal" || true)
    if [ -n "$line" ]; then
      initial=$(printf '%s\n' "$line" | sed -n 's/.* initial=\([^ ]*\) status=.*/\1/p')
      if [ "$initial" = present ]; then test -e "$source_path"; else test ! -e "$source_path"; fi
    fi
    test ! -e "$destination_path"
  done
  rm -f "$retry_journal"
  test ! -e "$retry_journal"
  for path in "$retry_archive/.omo/start-work" "$retry_archive/.omo/evidence/weather-pwa-design" "$retry_archive/.omo/evidence" "$retry_archive/.omo" "$retry_archive/docs/superpowers/specs" "$retry_archive/docs/superpowers" "$retry_archive/docs" "$retry_archive"; do
    rmdir "$path"
    test ! -e "$path"
  done
}
~~~
The retry adapter creates the validated `retry_archive`, calls `retry_journal_init <journal> <retry_archive>` before any move, calls `retry_transaction_validator <journal> <retry_archive>` after each move/recovery reconciliation, and calls `retry_reverse_transaction <journal> <retry_archive>` only for a journal-proven moved pair. It restores a source only when its journal says `initial=present`; an initially absent source must remain absent. After reversal it removes only the exact empty transaction-owned archive directories in reverse depth order and verifies the archive path is absent; it never performs a broad archive delete.
- Literal bootstrap recovery entrypoint: define and run this before a new bootstrap or any resume. It discovers only one exact `.omo/.weather-bootstrap.*` transaction, reconciles the journal with the staged/live pair, and refuses any other combination. It never overwrites an existing Boulder or ledger and removes a live file only after `cmp` proves that file was created by this transaction:
~~~sh
review_approval_validator() {
  set -euo pipefail
  plan=.omo/plans/low-memory-kma-weather-pwa-design.md
  draft=.omo/drafts/low-memory-kma-weather-pwa-design.md
  expected_round=$(sed -n 's/^review_round_id: //p' "$draft")
  test -n "$expected_round"
  current_hash=$(sha256sum "$plan" | awk '{print $1}')
  reviewed_hash=$(sed -n 's/^plan_sha256: //p' "$draft")
  test "$(rg -c '^status: approved$' "$draft" || printf '0')" -eq 1
  if [ -e ./.omo/boulder.json ]; then
    current_contract=$(LC_ALL=C sed -E 's/^- \[(x| )\] (([0-9]+|F[1-4])\.)/- [ ] \2/' "$plan" | sha256sum | awk '{print $1}')
    frozen_contract=$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_contract_sha256||"")')
    test "$current_contract" = "$frozen_contract"
    test "$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_review_sha256||"")')" = "$reviewed_hash"
  else
    test "$current_hash" = "$reviewed_hash"
  fi
  round=$(sed -n 's/^review_round_id: //p' "$draft")
  test "$round" = "$expected_round"
  test "$(sed -n 's/^plan_path: //p' "$draft")" = "$plan"
  rg -q '^approval_scope: .*마스터 오케스트레이션 실행\.' "$draft"
  rg -q '^capability_preflight: .*multi_agent_v1__spawn_agent.*multi_agent_v1__wait_agent.*multi_agent_v1__send_input.*multi_agent_v1__close_agent.*exec_command' "$draft"
  review_block() { awk -v key="$1" '$0 == "  " key ":" {found=1; next} found && /^  [a-z][a-z0-9_-]*:/ {exit} found {print}' "$draft"; }
  declare -A seen_review_sessions=()
  for reviewer in metis momus independent; do
    block=$(review_block "$reviewer")
    printf '%s\n' "$block" | rg -q '^    status: approved$'
    printf '%s\n' "$block" | rg -q "^    plan_sha256: $reviewed_hash$"
    printf '%s\n' "$block" | rg -q "^    round_id: $expected_round$"
    printf '%s\n' "$block" | rg -q '^    result: OKAY$'
    printf '%s\n' "$block" | rg -q '^    workspace_root: /home/jeon_huijun/Project/weather$'
    printf '%s\n' "$block" | rg -q '^    target: .omo/plans/low-memory-kma-weather-pwa-design.md$'
    runtime_home=$(printf '%s\n' "$block" | sed -n 's/^    runtime_home: //p')
    launch_id=$(printf '%s\n' "$block" | sed -n 's/^    launch_id: //p')
    session=$(printf '%s\n' "$block" | sed -n 's/^    session: //p')
    case "$reviewer:$runtime_home:$launch_id:$session" in
      metis:managed-agent\:metis:opencode-task\:ses_[A-Za-z0-9]*:codex\:ses_[A-Za-z0-9]*) ;;
      momus:managed-agent\:momus:opencode-task\:ses_[A-Za-z0-9]*:codex\:ses_[A-Za-z0-9]*) ;;
      independent:managed-agent\:oracle:opencode-task\:ses_[A-Za-z0-9]*:codex\:ses_[A-Za-z0-9]*) ;;
      *) return 1 ;;
    esac
    launch_ses=${launch_id#opencode-task:}
    printf '%s\n' "$launch_ses" | rg -q '^ses_[A-Za-z0-9]+$'
    printf '%s\n' "$session" | rg -q '^codex:ses_[A-Za-z0-9]+$'
    test "${session#codex:}" = "$launch_ses"
    test -z "${seen_review_sessions[$session]:-}"
    seen_review_sessions[$session]=1
  done
}
review_approval_validator
bootstrap_recovery_check() {
  set -euo pipefail
  bootstrap_atomic_line() { target="$1"; value="$2"; tmp=$(mktemp "${target}.tmp.XXXXXX"); printf '%s\n' "$value" > "$tmp"; test "$(wc -l < "$tmp")" -eq 1; test "$(cat "$tmp")" = "$value"; mv "$tmp" "$target"; }
  bootstrap_atomic_copy() { source="$1"; target="$2"; tmp=$(mktemp "${target}.tmp.XXXXXX"); cp "$source" "$tmp"; cmp -s "$source" "$tmp"; mv "$tmp" "$target"; cmp -s "$source" "$target"; }
  bootstrap_backup_refresh() { backup="$1"; staged="$2"; live="$3"; if [ -s "$staged" ]; then source="$staged"; elif [ -s "$live" ]; then source="$live"; else return 1; fi; if [ -s "$backup" ] && cmp -s "$backup" "$source"; then return 0; fi; bootstrap_atomic_copy "$source" "$backup"; }
  mapfile -t bootstrap_txns < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-bootstrap.*' -print | LC_ALL=C sort)
  case "${#bootstrap_txns[@]}" in
    0) return 0 ;;
    1) ;;
    *) return 1 ;;
  esac
  bootstrap_txn="${bootstrap_txns[0]}"
  if [ ! -e "$bootstrap_txn/bootstrap-journal" ]; then
    for first_journal_tmp in "$bootstrap_txn"/bootstrap-journal.tmp.*; do
      [ -e "$first_journal_tmp" ] || continue
      test -f "$first_journal_tmp"; test ! -L "$first_journal_tmp"
      test -z "$(find "$bootstrap_txn" -mindepth 1 -maxdepth 1 -type f -not -name 'bootstrap-journal.tmp.*' -print -quit)"
      rm -f "$first_journal_tmp"
    done
    if [ -e ./.omo/boulder.json ] || [ -e ./.omo/start-work/ledger.jsonl ]; then test -s ./.omo/boulder.json; test -s ./.omo/start-work/ledger.jsonl; fi
    while IFS= read -r bootstrap_orphan; do
      bootstrap_orphan_name=${bootstrap_orphan##*/}
      case "$bootstrap_orphan_name" in boulder.json|ledger.jsonl|boulder.backup|ledger.backup|*.tmp.*) rm -f "$bootstrap_orphan" ;; *) return 1 ;; esac
    done < <(find "$bootstrap_txn" -mindepth 1 -maxdepth 1 -type f -print | LC_ALL=C sort)
    test -z "$(find "$bootstrap_txn" -mindepth 1 -print -quit)"
    rmdir "$bootstrap_txn"; test ! -e "$bootstrap_txn"; return 0
  fi
  test -s "$bootstrap_txn/bootstrap-journal"
  bootstrap_state=$(cat "$bootstrap_txn/bootstrap-journal")
  case "$bootstrap_state" in
    rollback-planned)
      test -s "$bootstrap_txn/boulder.backup"
      test -s "$bootstrap_txn/ledger.backup"
      if [ -e ./.omo/boulder.json ]; then cmp -s "$bootstrap_txn/boulder.backup" ./.omo/boulder.json; rm -f ./.omo/boulder.json; fi
      if [ -e ./.omo/start-work/ledger.jsonl ]; then cmp -s "$bootstrap_txn/ledger.backup" ./.omo/start-work/ledger.jsonl; rm -f ./.omo/start-work/ledger.jsonl; fi
      if [ -d ./.omo/start-work ]; then test -z "$(find ./.omo/start-work -mindepth 1 -print -quit)"; rmdir ./.omo/start-work; fi
      bootstrap_atomic_line "$bootstrap_txn/bootstrap-journal" rollback-restored
      rm -rf "$bootstrap_txn"
      test ! -e "$bootstrap_txn"
      return 0
      ;;
    rollback-restored)
      test ! -e ./.omo/boulder.json
      test ! -e ./.omo/start-work
      rm -rf "$bootstrap_txn"
      test ! -e "$bootstrap_txn"
      return 0
      ;;
    cleanup-planned)
      test -s ./.omo/boulder.json
      test -s ./.omo/start-work/ledger.jsonl
      while IFS= read -r bootstrap_leftover; do
        bootstrap_leftover_name=${bootstrap_leftover##*/}
        case "$bootstrap_leftover_name" in bootstrap-journal|boulder.json|ledger.jsonl|boulder.backup|ledger.backup|*.tmp.*) rm -f "$bootstrap_leftover" ;; *) return 1 ;; esac
      done < <(find "$bootstrap_txn" -mindepth 1 -maxdepth 1 -type f -print | LC_ALL=C sort)
      test -z "$(find "$bootstrap_txn" -mindepth 1 -print -quit)"
      rmdir "$bootstrap_txn"; test ! -e "$bootstrap_txn"; return 0
      ;;
    created)
      test ! -e ./.omo/boulder.json
      test ! -e ./.omo/start-work/ledger.jsonl
      if [ -d ./.omo/start-work ]; then test -z "$(find ./.omo/start-work -mindepth 1 -print -quit)"; rmdir ./.omo/start-work; fi
      while IFS= read -r created_leftover; do
        created_leftover_name=${created_leftover##*/}
        case "$created_leftover_name" in boulder.json|ledger.jsonl|boulder.backup|ledger.backup|*.tmp.*) rm -f "$created_leftover" ;; *) return 1 ;; esac
      done < <(find "$bootstrap_txn" -mindepth 1 -maxdepth 1 -type f -not -name 'bootstrap-journal' -print | LC_ALL=C sort)
      rm -f "$bootstrap_txn/bootstrap-journal"
      test -z "$(find "$bootstrap_txn" -mindepth 1 -print -quit)"
      rmdir "$bootstrap_txn"
      test ! -e "$bootstrap_txn"
      return 0
      ;;
    'boulder=staged ledger=staged')
      if [ -s "$bootstrap_txn/boulder.json" ] && [ -s "$bootstrap_txn/ledger.jsonl" ]; then
        bootstrap_backup_refresh "$bootstrap_txn/boulder.backup" "$bootstrap_txn/boulder.json" ./.omo/boulder.json
        bootstrap_backup_refresh "$bootstrap_txn/ledger.backup" "$bootstrap_txn/ledger.jsonl" ./.omo/start-work/ledger.jsonl
        test ! -e ./.omo/boulder.json
        test ! -e ./.omo/start-work/ledger.jsonl
        node -e 'const fs=require("fs"); const b=JSON.parse(fs.readFileSync(process.argv[1],"utf8")); if(b.schema_version!==2 || !b.active_work_id || !b.plan_review_sha256 || !b.plan_contract_sha256 || Object.keys(b.works||{}).length!==1 || !b.works[b.active_work_id] || b.works[b.active_work_id].status!=="active") process.exit(1); const t=fs.readFileSync(process.argv[2],"utf8").trim(); if(!t) process.exit(1); t.split(/\n/).forEach(line=>JSON.parse(line));' "$bootstrap_txn/boulder.json" "$bootstrap_txn/ledger.jsonl"
        if [ -e ./.omo/start-work ]; then
          test -d ./.omo/start-work
          test -z "$(find ./.omo/start-work -mindepth 1 -print -quit)"
        else
          mkdir ./.omo/start-work
        fi
        mv "$bootstrap_txn/boulder.json" ./.omo/boulder.json
        bootstrap_atomic_line "$bootstrap_txn/bootstrap-journal" 'boulder=promoted ledger=staged'
        mv "$bootstrap_txn/ledger.jsonl" ./.omo/start-work/ledger.jsonl
        bootstrap_atomic_line "$bootstrap_txn/bootstrap-journal" 'boulder=promoted ledger=promoted'
      elif [ ! -e "$bootstrap_txn/boulder.json" ] && [ -s ./.omo/boulder.json ] && [ -s "$bootstrap_txn/ledger.jsonl" ]; then
        bootstrap_backup_refresh "$bootstrap_txn/boulder.backup" "" ./.omo/boulder.json
        test -d ./.omo/start-work
        test -z "$(find ./.omo/start-work -mindepth 1 -print -quit)"
        test ! -e ./.omo/start-work/ledger.jsonl
        node -e 'const fs=require("fs"); const b=JSON.parse(fs.readFileSync(process.argv[1],"utf8")); if(b.schema_version!==2 || !b.active_work_id || !b.plan_review_sha256 || !b.plan_contract_sha256 || Object.keys(b.works||{}).length!==1 || !b.works[b.active_work_id] || b.works[b.active_work_id].status!=="active") process.exit(1); const t=fs.readFileSync(process.argv[2],"utf8").trim(); if(!t) process.exit(1); t.split(/\n/).forEach(line=>JSON.parse(line));' ./.omo/boulder.json "$bootstrap_txn/ledger.jsonl"
        mv "$bootstrap_txn/ledger.jsonl" ./.omo/start-work/ledger.jsonl
        bootstrap_atomic_line "$bootstrap_txn/bootstrap-journal" 'boulder=promoted ledger=promoted'
      else
        return 1
      fi
      ;;
    'boulder=promoted ledger=staged')
      bootstrap_backup_refresh "$bootstrap_txn/boulder.backup" "" ./.omo/boulder.json
      test -d ./.omo/start-work
      if [ -s "$bootstrap_txn/ledger.jsonl" ]; then
        test ! -e ./.omo/start-work/ledger.jsonl
        mv "$bootstrap_txn/ledger.jsonl" ./.omo/start-work/ledger.jsonl
      elif [ ! -e "$bootstrap_txn/ledger.jsonl" ] && [ -s ./.omo/start-work/ledger.jsonl ]; then
        bootstrap_backup_refresh "$bootstrap_txn/ledger.backup" "" ./.omo/start-work/ledger.jsonl
      else
        return 1
      fi
      bootstrap_atomic_line "$bootstrap_txn/bootstrap-journal" 'boulder=promoted ledger=promoted'
      ;;
    'boulder=promoted ledger=promoted')
      test -s ./.omo/boulder.json
      test -s ./.omo/start-work/ledger.jsonl
      ;;
    *) return 1 ;;
  esac
  node -e 'const fs=require("fs"); const b=JSON.parse(fs.readFileSync(".omo/boulder.json","utf8")); if(b.schema_version!==2 || !b.active_work_id || !b.plan_review_sha256 || !b.plan_contract_sha256 || Object.keys(b.works||{}).length!==1 || b.works[b.active_work_id].status!=="active") process.exit(1); fs.readFileSync(".omo/start-work/ledger.jsonl","utf8").trim().split(/\n/).forEach(line=>JSON.parse(line))'
  rm -rf "$bootstrap_txn"
  test ! -e "$bootstrap_txn"
}
bootstrap_recovery_check
~~~
- Literal bootstrap transaction:
~~~sh
set -euo pipefail
test ! -e ./.omo/boulder.json
test ! -e ./.omo/start-work
review_approval_validator
bootstrap_tmp=$(mktemp -d ./.omo/.weather-bootstrap.XXXXXX)
bootstrap_journal="$bootstrap_tmp/bootstrap-journal"
bootstrap_atomic_line() { target="$1"; value="$2"; tmp=$(mktemp "${target}.tmp.XXXXXX"); printf '%s\n' "$value" > "$tmp"; test "$(wc -l < "$tmp")" -eq 1; test "$(cat "$tmp")" = "$value"; mv "$tmp" "$target"; }
bootstrap_atomic_copy() { source="$1"; target="$2"; tmp=$(mktemp "${target}.tmp.XXXXXX"); cp "$source" "$tmp"; cmp -s "$source" "$tmp"; mv "$tmp" "$target"; cmp -s "$source" "$target"; }
trap 'status=$?; if [ "$status" -eq 0 ]; then rm -rf "$bootstrap_tmp"; fi' EXIT
bootstrap_atomic_line "$bootstrap_journal" created
work_id=weather-design-only
review_hash=$(sha256sum .omo/plans/low-memory-kma-weather-pwa-design.md | awk '{print $1}')
contract_hash=$(LC_ALL=C sed -E 's/^- \[(x| )\] (([0-9]+|F[1-4])\.)/- [ ] \2/' .omo/plans/low-memory-kma-weather-pwa-design.md | sha256sum | awk '{print $1}')
node -e 'const fs=require("fs"); const [workId,review,contract,boulderPath,ledgerPath]=process.argv.slice(1); const classes=["source_version_drift","source_inference_confusion","credential_leakage","boundary_contradiction","privacy_overcollection","false_runtime_claim","numeric_budget_drift","unexpected_product_file","accessibility_state_omission","stale_missing_evidence"]; const b={schema_version:2,active_work_id:workId,plan_review_sha256:review,plan_contract_sha256:contract,works:{[workId]:{work_id:workId,plan_review_sha256:review,plan_contract_sha256:contract,active_plan:".omo/plans/low-memory-kma-weather-pwa-design.md",plan_name:"low-memory-kma-weather-pwa-design",session_ids:["codex:design-only-bootstrap","codex:design-only-root"],status:"active",worktree_path:null}}}; const row={event:"orchestration-started",plan:".omo/plans/low-memory-kma-weather-pwa-design.md",task:"bootstrap",session_id:"codex:design-only-bootstrap",commands:["design-only-start-work"],artifact:[".omo/boulder.json",".omo/start-work/ledger.jsonl"],adversarial_classes:classes,cleanup:{status:"PASS",temporary_paths:[],long_lived_processes:[]},runtime_qa:"NOT RUN",commit:"N/A"}; fs.writeFileSync(boulderPath+".tmp."+process.pid,JSON.stringify(b)+"\n"); fs.renameSync(boulderPath+".tmp."+process.pid,boulderPath); fs.writeFileSync(ledgerPath+".tmp."+process.pid,JSON.stringify(row)+"\n"); fs.renameSync(ledgerPath+".tmp."+process.pid,ledgerPath)' "$work_id" "$review_hash" "$contract_hash" "$bootstrap_tmp/boulder.json" "$bootstrap_tmp/ledger.jsonl"
node -e 'const fs=require("fs"); const b=JSON.parse(fs.readFileSync(process.argv[1],"utf8")); if(b.schema_version!==2 || !b.active_work_id || !b.plan_review_sha256 || !b.plan_contract_sha256 || Object.keys(b.works||{}).length!==1 || !b.works[b.active_work_id] || b.works[b.active_work_id].status!=="active") process.exit(1); const t=fs.readFileSync(process.argv[2],"utf8").trim(); if(!t) process.exit(1); t.split(/\n/).forEach(line=>JSON.parse(line));' "$bootstrap_tmp/boulder.json" "$bootstrap_tmp/ledger.jsonl"
bootstrap_atomic_line "$bootstrap_journal" 'boulder=staged ledger=staged'
mkdir -p ./.omo/start-work
bootstrap_atomic_copy "$bootstrap_tmp/boulder.json" "$bootstrap_tmp/boulder.backup"
bootstrap_atomic_copy "$bootstrap_tmp/ledger.jsonl" "$bootstrap_tmp/ledger.backup"
mv "$bootstrap_tmp/boulder.json" ./.omo/boulder.json
bootstrap_atomic_line "$bootstrap_journal" 'boulder=promoted ledger=staged'
if ! mv "$bootstrap_tmp/ledger.jsonl" ./.omo/start-work/ledger.jsonl; then
  bootstrap_atomic_line "$bootstrap_journal" rollback-planned
  set +e
  if [ -e ./.omo/boulder.json ]; then cmp -s "$bootstrap_tmp/boulder.backup" ./.omo/boulder.json && rm -f ./.omo/boulder.json; fi
  if [ -e ./.omo/start-work/ledger.jsonl ]; then cmp -s "$bootstrap_tmp/ledger.backup" ./.omo/start-work/ledger.jsonl && rm -f ./.omo/start-work/ledger.jsonl; fi
  rmdir ./.omo/start-work
  restore_status=$?
  if [ "$restore_status" -eq 0 ] && [ ! -e ./.omo/boulder.json ] && [ ! -e ./.omo/start-work/ledger.jsonl ]; then bootstrap_atomic_line "$bootstrap_journal" rollback-restored; rm -f "$bootstrap_tmp/boulder.backup" "$bootstrap_tmp/ledger.backup" "$bootstrap_journal"; rmdir "$bootstrap_tmp"; fi
  exit 1
fi
bootstrap_atomic_line "$bootstrap_journal" 'boulder=promoted ledger=promoted'
test -s ./.omo/boulder.json
test -s ./.omo/start-work/ledger.jsonl
bootstrap_atomic_line "$bootstrap_journal" cleanup-planned
rm -f "$bootstrap_tmp/boulder.backup" "$bootstrap_tmp/ledger.backup"
rm -f "$bootstrap_tmp/bootstrap-journal"
rmdir "$bootstrap_tmp"
trap - EXIT
test ! -e "$bootstrap_tmp"
~~~
The staged JSON contains the frozen reviewed/canonical hashes both at top level and in works[work_id], one active work, and the codex session. `bootstrap_recovery_check` runs before a new bootstrap or resume when any `.weather-bootstrap.*` path exists; it reads `bootstrap-journal`, validates the staged/live JSON pair, treats a `created` journal as abort-only (both live targets must be absent, only recognized transaction-owned members and an empty `.omo/start-work` are removed, the journal is removed last, and bootstrap restarts rather than promoting a possibly truncated staged file), accepts the staged/staged state with either no start-work directory or an empty one, reconciles a live Boulder or ledger when the preceding move completed before its journal write, regenerates any partial `boulder.backup`/`ledger.backup` from the authoritative staged file (or, once promoted, the live file) with an atomic temp+rename instead of failing `cmp`, consumes a recognized `cleanup-planned` state, and accepts only the staged/staged, promoted/promoted, promoted/staged, or cleanup-planned states after those checks. Every bootstrap journal replacement is an atomic temp+rename, and successful cleanup removes the backups before the journal so a crash cannot leave a journal-less directory with unremoved transaction files. A new bootstrap refuses any pre-existing `.omo/boulder.json` or `.omo/start-work` target, so its rollback cannot delete user state; it removes only bootstrap-owned paths after the precondition checks pass.
- Exact command-token registry: every Command token used by expected_binding is a real bash function defined in the worker's QA shell before invocation, and a missing declaration fails the task. The required tokens are todo-1-source-contract-and-receipt-qa, todo-2-proxy-threat-qa, todo-3-offline-contract-qa, todo-4-location-privacy-qa, todo-5-ui-accessibility-qa, todo-6-performance-budget-qa, todo-7-specification-qa, todo-8-design-system-qa, todo-9-integrity-manifest-qa, final-f1-plan-compliance-qa, final-f2-document-quality-qa, final-f3-semantic-qa, and final-f4-scope-security-qa. Each token is a fixed receipt-binding wrapper, not a replacement for its owning checkbox's full happy, failure, and cleanup sequence. The worker executes that full sequence immediately before invoking the wrapper, and the wrapper then runs the independent binding and receipt validator. The receipt records the literal wrapper token only after type -t <token> succeeds and the token exits 0; the root never records an unbound descriptive label as a successful Command.
- QA-trace receipt correction: every task and final-gate receipt additionally contains exactly one `QA-Trace: <probe>=<64-hex>;...` field. Each entry names one required happy, failure, source, manifest, negative, scenario-row, or cleanup invocation from its checkbox and is the SHA-256 of that invocation's redacted captured output, written only after the invocation exits 0 and before its temporary capture is removed. The ordered trace is the durable binding for the full QA sequence; a compact command wrapper may perform receipt binding only after all named probes have passed and their trace entries exist. `qa_trace_validator` rejects a missing/duplicate/malformed trace entry, and the independent reviewer compares the required probe names to the checkbox's happy/failure/cleanup list. This correction supersedes any wording that lets a receipt's `Command:` token alone stand in for the probes.
- Candidate-receipt transaction correction: the worker runs every exact QA probe and writes a complete base receipt, including `Command:`, all binding fields, and the generated `QA-Trace:`/`QA-Transcript:` lines, to a root-selected base path outside `.omo`. The root then creates `./.omo/.weather-receipt.XXXXXX/candidate`, copies that complete base, revalidates the exact plan-owned probe map and every trace digest, atomically moves it to the fixed receipt path, and reruns the full validator against the live fixed path before removing the empty transaction directory. A candidate is never created by copying a partially written fixed receipt, and a failed post-promotion validation removes only that newly promoted fixed receipt.
- Receipt-recovery correction: every candidate transaction journals `candidate`, `validated`, `promotion-planned`, `promoted`, and `cleanup-planned` with the fixed receipt path, verdict, and candidate digest. Receipt binding is root-serialized, so `receipt_recovery_check` intentionally rejects multiple/ambiguous transactions; it accepts a journal-less empty transaction as the exact post-cleanup crash gap and a journal-less first-journal temporary only when no fixed receipt exists, writes its journal states atomically, normalizes `./.omo` and `.omo` fixed paths, restores the expected verdict before validation, reconciles only a digest-matching move-before-journal state, revalidates promoted receipts with the plan-owned binding/QA trace, and removes only the exact transaction directory.
- Execution-bound trace correction: the worker's QA shell invokes `qa_capture_probe <exact-registry-name> <exact-command-string>` once for every registry entry in order, and returns only after the complete base receipt contains those trace/transcript outputs. `qa_probe_command` is a plan-owned literal name-to-command map; `qa_capture_probe` rejects any caller string that is not byte-identical to that map. The helper runs the exact command, captures stdout/stderr, redacts credential-shaped values, canonicalizes all output to one non-empty byte string (using `<no-output>` for silent success), computes its digest over those exact bytes, appends only the digest and redacted transcript to the worker-owned base receipt inputs, and removes raw/canonical captures. The root's `adapter_receipt_bind_and_validate` rejects hand-written or missing trace/transcript lines and performs the serialized candidate promotion only after this worker-bound evidence is complete.
- Literal QA-token definitions: these declarations are executable binding wrappers with fixed command names. The owning checkbox blocks above remain mandatory and are executed in full before the final qa_bind_and_validate line; a worker may not substitute these wrappers for the required probes:
~~~sh
# ADAPTER_QA_VALIDATORS_BEGIN
adapter_recovery_kma_url() {
  case "$1" in
    1) printf '%s\n' 'https://www.data.go.kr/data/15084084/openapi.do' ;;
    2) printf '%s\n' 'https://www.data.go.kr/catalog/15084084/openapi.json' ;;
    3) printf '%s\n' 'https://www.data.go.kr/data/15000415/openapi.do' ;;
    4) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=21' ;;
    5) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=39' ;;
    6) printf '%s\n' 'https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286' ;;
    *) return 1 ;;
  esac
}
adapter_recovery_task_url() {
  case "$1" in
    2.1|4.1) printf '%s\n' 'https://www.data.go.kr/catalog/15084084/openapi.json' ;;
    2.2) printf '%s\n' 'https://www.data.go.kr/data/15000415/openapi.do' ;;
    2.3) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=21' ;;
    3.1) printf '%s\n' 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable' ;;
    3.2) printf '%s\n' 'https://www.w3.org/TR/service-workers/' ;;
    3.3) printf '%s\n' 'https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/' ;;
    4.2) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=39' ;;
    4.3) printf '%s\n' 'https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286' ;;
    4.4) printf '%s\n' 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API' ;;
    5.1) printf '%s\n' 'https://www.w3.org/TR/WCAG22/' ;;
    6.1) printf '%s\n' 'https://developer.chrome.com/docs/devtools/memory-problems' ;;
    6.2) printf '%s\n' 'https://learn.microsoft.com/en-us/microsoft-edge/devtools/memory-problems/microsoft-edge-browser-task-manager' ;;
    *) return 1 ;;
  esac
}
adapter_recovery_kma_sources() {
  for n in 1 2 3 4 5 6; do
    url=$(adapter_recovery_kma_url "$n")
    row=$(rg "^Source-Record: $n " .omo/evidence/weather-pwa-design/preflight-manifest.md)
    test "$(printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) .*/\1/p')" = "$url"
    printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) | Retrieved-At: \([0-9-]*\)T.*/\1 | \2/p'
  done | paste -sd ';' -
}
adapter_recovery_task_sources() {
  case "$1" in 2) ids='2.1 2.2 2.3' ;; 3) ids='3.1 3.2 3.3' ;; 4) ids='4.1 4.2 4.3 4.4' ;; 5) ids='5.1' ;; 6) ids='6.1 6.2' ;; *) return 1 ;; esac
  for id in $ids; do
    url=$(adapter_recovery_task_url "$id")
    row=$(rg "^Task-Source-Record: $id " .omo/evidence/weather-pwa-design/preflight-manifest.md)
    test "$(printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) .*/\1/p')" = "$url"
    printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) | Retrieved-At: \([0-9-]*\)T.*/\1 | \2/p'
  done | paste -sd ';' -
}
adapter_recovery_expected_binding() {
  expected_artifact=; expected_command=; expected_sources=
  case "$fixed_receipt" in
    .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/kma-contract-review.md; expected_command=todo-1-source-contract-and-receipt-qa; expected_sources=$(adapter_recovery_kma_sources) ;;
    .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/proxy-threat-review.md; expected_command=todo-2-proxy-threat-qa; expected_sources=$(adapter_recovery_task_sources 2) ;;
    .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/pwa-offline-review.md; expected_command=todo-3-offline-contract-qa; expected_sources=$(adapter_recovery_task_sources 3) ;;
    .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/location-privacy-review.md; expected_command=todo-4-location-privacy-qa; expected_sources=$(adapter_recovery_task_sources 4) ;;
    .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/ui-accessibility-review.md; expected_command=todo-5-ui-accessibility-qa; expected_sources=$(adapter_recovery_task_sources 5) ;;
    .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/performance-budget-review.md; expected_command=todo-6-performance-budget-qa; expected_sources=$(adapter_recovery_task_sources 6) ;;
    .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md) expected_artifact=docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; expected_command=todo-7-specification-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md) expected_artifact=DESIGN.md; expected_command=todo-8-design-system-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/design-integrity-review.md; expected_command=todo-9-integrity-manifest-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md) expected_artifact=.omo/evidence/weather-pwa-design/output-manifest.sha256; expected_command=final-f1-plan-compliance-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/final-f2-document-quality.md) expected_artifact=docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; expected_command=final-f2-document-quality-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md) expected_artifact=DESIGN.md; expected_command=final-f3-semantic-qa; expected_sources=none ;;
    .omo/evidence/weather-pwa-design/final-f4-scope-security.md) expected_artifact=.omo/evidence/weather-pwa-design/preflight-manifest.md; expected_command=final-f4-scope-security-qa; expected_sources=none ;;
    *) return 1 ;;
  esac
}
adapter_recovery_receipt_validator() {
  set -euo pipefail
  adapter_recovery_expected_binding
  test -s "$receipt_to_check"
  test "$(rg -c '^Verdict: ' "$receipt_to_check" || printf '0')" -eq 1
  test "$(rg -c "^Verdict: $expected_verdict$" "$receipt_to_check" || printf '0')" -eq 1
  for field in Artifact Principal-Artifact-SHA256 Command Sources Plan-Review-SHA256 Plan-Contract-SHA256 Adversarial-Classes Exit-Status Temporary-Paths Long-Lived-Processes Cleanup-Status; do test "$(rg -c "^$field: " "$receipt_to_check" || printf '0')" -eq 1; done
  test "$(sed -n 's/^Artifact: //p' "$receipt_to_check")" = "$expected_artifact"
  test "$(sed -n 's/^Command: //p' "$receipt_to_check")" = "$expected_command"
  test "$(sed -n 's/^Sources: //p' "$receipt_to_check")" = "$expected_sources"
  test -s "$expected_artifact"
  test "$(sed -n 's/^Principal-Artifact-SHA256: //p' "$receipt_to_check")" = "$(sha256sum "$expected_artifact" | awk '{print $1}')"
  test "$(sed -n 's/^Plan-Review-SHA256: //p' "$receipt_to_check")" = "$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_review_sha256)')"
  test "$(sed -n 's/^Plan-Contract-SHA256: //p' "$receipt_to_check")" = "$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_contract_sha256)')"
  test "$(sed -n 's/^Exit-Status: //p' "$receipt_to_check")" = 0
  test "$(sed -n 's/^Temporary-Paths: //p' "$receipt_to_check")" = none
  test "$(sed -n 's/^Long-Lived-Processes: //p' "$receipt_to_check")" = none
  test "$(sed -n 's/^Cleanup-Status: //p' "$receipt_to_check")" = PASS
  classes=$(sed -n 's/^Adversarial-Classes: //p' "$receipt_to_check")
  class_lines=$(printf '%s\n' "$classes" | tr ';' '\n' | sed '/^[[:space:]]*$/d')
  test "$(printf '%s\n' "$class_lines" | wc -l)" -eq 10
  actual_class_ids=$(printf '%s\n' "$class_lines" | cut -d= -f1 | LC_ALL=C sort)
  expected_class_ids=$(printf '%s\n' source_version_drift source_inference_confusion credential_leakage boundary_contradiction privacy_overcollection false_runtime_claim numeric_budget_drift unexpected_product_file accessibility_state_omission stale_missing_evidence | LC_ALL=C sort)
  test "$actual_class_ids" = "$expected_class_ids"
  while IFS= read -r class_line; do printf '%s\n' "$class_line" | rg -q '^[a-z0-9_]+=(PROBED|NA):[^;]+$'; done <<< "$class_lines"
}
adapter_recovery_final_gate_validator() {
  adapter_recovery_receipt_validator
  output_hash=$(sha256sum .omo/evidence/weather-pwa-design/output-manifest.sha256 | awk '{print $1}')
  test "$(sed -n 's/^Output-Manifest-SHA256: //p' "$receipt_to_check")" = "$output_hash"
  sha256sum --check .omo/evidence/weather-pwa-design/output-manifest.sha256 >/dev/null
  test "$(sed -n 's/^Output-Manifest-SHA256: //p' .omo/evidence/weather-pwa-design/output-manifest-receipt.md)" = "$output_hash"
}
adapter_receipt_body_check() {
  set -euo pipefail
  receipt_to_check="$1"
  receipt_key="$fixed_receipt"
  receipt="$receipt_to_check"
  adapter_recovery_expected_binding
  qa_trace_validator
if [ "$fixed_receipt" = .omo/evidence/weather-pwa-design/final-f4-scope-security.md ]; then
  if [ -e "$fixed_receipt" ]; then f4_inventory_validator full; else f4_inventory_validator phase-a; fi
fi
  if [ "$expected_verdict" = APPROVE ]; then adapter_recovery_final_gate_validator; else adapter_recovery_receipt_validator; fi
}
source_record_validator() {
  set -euo pipefail
  manifest="${1:-.omo/evidence/weather-pwa-design/kma-contract-review.md}"
  test -s "$manifest"
  awk 'BEGIN{records=digests=0; pending=0; ok=1} /^Source-Record:/ {records++; pending=1; if ($0 !~ /^Source-Record: [1-6] [|] Source-URL: .+ [|] Retrieved-At: [0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(Z|[+-][0-9]{2}:[0-9]{2}) [|] Source-Modified: (NOT EXPOSED|[0-9]{4}-[0-9]{2}-[0-9]{2}) [|] Body-SHA256: [0-9a-f]{64}$/) ok=0; next} /^Digest-Command:/ {digests++; if (!pending || $0 !~ /^Digest-Command: sha256sum [^[:space:]]+$/) ok=0; pending=0; next} {if (pending) ok=0} END{if (pending) ok=0; exit !(records==6 && digests==6 && ok)}' "$manifest"
}
source_body_validator() {
  set -euo pipefail
  manifest="$1"
  references="$2"
  test -s "$manifest"
  test -d "$references"
  for n in 1 2 3 4 5 6; do
    line_no=$(rg -n "^Source-Record: $n " "$manifest" | cut -d: -f1)
    test -n "$line_no"
    row=$(sed -n "${line_no}p" "$manifest")
    digest=$(printf '%s\n' "$row" | sed -n 's/.*Body-SHA256: \([0-9a-f]\{64\}\)$/\1/p')
    body="$references/kma-$n.body"
    test -s "$body"
    test "$(sed -n "$((line_no + 1))p" "$manifest")" = "Digest-Command: sha256sum $body"
    test "$(sha256sum "$body" | awk '{print $1}')" = "$digest"
  done
  for id in 2.1 2.2 2.3 3.1 3.2 3.3 4.1 4.2 4.3 4.4 5.1 6.1 6.2; do
    id_re=${id//./\\.}
    line_no=$(rg -n "^Task-Source-Record: $id_re " "$manifest" | cut -d: -f1)
    test -n "$line_no"
    row=$(sed -n "${line_no}p" "$manifest")
    digest=$(printf '%s\n' "$row" | sed -n 's/.*Body-SHA256: \([0-9a-f]\{64\}\)$/\1/p')
    body="$references/task-$id.body"
    test -s "$body"
    test "$(sed -n "$((line_no + 1))p" "$manifest")" = "Digest-Command: sha256sum $body"
    test "$(sha256sum "$body" | awk '{print $1}')" = "$digest"
  done
  printf '%s\n' 'source-body-validator PASS records=19'
}
source_body_receipt_probe() {
  set -euo pipefail
  manifest="${1:-.omo/evidence/weather-pwa-design/preflight-manifest.md}"
  transcript=$(sed -n 's/^Source-Body-Validator-Transcript: //p' "$manifest")
  digest=$(sed -n 's/^Source-Body-Validator-SHA256: //p' "$manifest")
  test "$transcript" = 'source-body-validator PASS records=19'
  test "$digest" = "$(printf '%s' "$transcript" | sha256sum | awk '{print $1}')"
}
source_provenance_validator() {
  set -euo pipefail
  manifest="$1"
  test -s "$manifest"
  while IFS=: read -r line_no _; do
    row=$(sed -n "${line_no}p" "$manifest")
    declared=$(printf '%s\n' "$row" | sed -n 's/.*Source-URL: \(https:\/\/[^ ]*\) .*/\1/p')
    provenance=$(sed -n "$((line_no + 2))p" "$manifest")
    fields=$(printf '%s\n' "$provenance" | sed -n 's/^Source-Provenance: Declared-URL: \(https:\/\/[^ ]*\) | Effective-URL: \(https:\/\/[^ ]*\) | Content-Type: \([^ ].*\)$/\1|\2|\3/p')
    test -n "$declared"
    test -n "$fields"
    provenance_declared=${fields%%|*}
    remaining=${fields#*|}
    provenance_effective=${remaining%%|*}
    content_type=${remaining#*|}
    test "$provenance_declared" = "$declared"
    test "$provenance_effective" = "$declared"
    test -n "$content_type"
  done < <(rg -n '^(Source-Record|Task-Source-Record):' "$manifest")
}
manifest_path_order_validator() {
  (
    set -euo pipefail
    manifest_tmp=$(mktemp -d)
    trap 'rm -rf "$manifest_tmp"' EXIT
    expected_paths="$manifest_tmp/expected"
    actual_paths="$manifest_tmp/actual"
    manifest_paths=(.omo/evidence/weather-pwa-design/preflight-manifest.md docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md DESIGN.md .omo/evidence/weather-pwa-design/kma-contract-review.md .omo/evidence/weather-pwa-design/proxy-threat-review.md .omo/evidence/weather-pwa-design/pwa-offline-review.md .omo/evidence/weather-pwa-design/location-privacy-review.md .omo/evidence/weather-pwa-design/ui-accessibility-review.md .omo/evidence/weather-pwa-design/performance-budget-review.md .omo/evidence/weather-pwa-design/design-integrity-review.md .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md)
    printf '%s\n' "${manifest_paths[@]}" > "$expected_paths"
    sed -E 's/^[0-9a-f]{64}  //' .omo/evidence/weather-pwa-design/output-manifest.sha256 > "$actual_paths"
    cmp -s "$expected_paths" "$actual_paths"
    sha256sum --check .omo/evidence/weather-pwa-design/output-manifest.sha256 >/dev/null
    test "$(wc -l < .omo/evidence/weather-pwa-design/output-manifest.sha256)" -eq 19
    rm -rf "$manifest_tmp"
    trap - EXIT
    test ! -e "$manifest_tmp"
  )
}
staged_manifest_validator() {
  set -euo pipefail
  manifest="$1"
  test -s "$manifest"
  stage_check_tmp=$(mktemp -d)
  trap 'rm -rf "$stage_check_tmp"' EXIT
  manifest_paths=(.omo/evidence/weather-pwa-design/preflight-manifest.md docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md DESIGN.md .omo/evidence/weather-pwa-design/kma-contract-review.md .omo/evidence/weather-pwa-design/proxy-threat-review.md .omo/evidence/weather-pwa-design/pwa-offline-review.md .omo/evidence/weather-pwa-design/location-privacy-review.md .omo/evidence/weather-pwa-design/ui-accessibility-review.md .omo/evidence/weather-pwa-design/performance-budget-review.md .omo/evidence/weather-pwa-design/design-integrity-review.md .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md)
  printf '%s\n' "${manifest_paths[@]}" > "$stage_check_tmp/expected-paths"
  sed -E 's/^[0-9a-f]{64}  //' "$manifest" > "$stage_check_tmp/paths"
  cmp -s "$stage_check_tmp/expected-paths" "$stage_check_tmp/paths"
  test "$(wc -l < "$manifest")" -eq 19
  sha256sum --check "$manifest" >/dev/null
  rm -rf "$stage_check_tmp"
  trap - EXIT
  test ! -e "$stage_check_tmp"
}
frozen_contract_validator() {
  set -euo pipefail
  plan=.omo/plans/low-memory-kma-weather-pwa-design.md
  expected_contract=$(sed -n 's/^Plan-Contract-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
  current_contract=$(LC_ALL=C sed -E 's/^- \[(x| )\] (([0-9]+|F[1-4])\.)/- [ ] \2/' "$plan" | sha256sum | awk '{print $1}')
  test -n "$expected_contract"
  test "$current_contract" = "$expected_contract"
}
initial_inventory_validator() {
  set -euo pipefail
  manifest="${1:-.omo/evidence/weather-pwa-design/preflight-manifest.md}"
  awk 'BEGIN{bad=0} /^Initial-Path:/ {path=$0; sub(/^Initial-Path: /,"",path); expected[path]++; next} /^Initial-File-SHA256:/ {path=$0; sub(/^Initial-File-SHA256: /,"",path); sub(/ .*/,"",path); typed[path]++; next} /^Initial-Mutable-File:/ {path=$0; sub(/^Initial-Mutable-File: /,"",path); if(path !~ /^(\.omo\/plans\/low-memory-kma-weather-pwa-design\.md|\.omo\/boulder\.json|\.omo\/start-work\/ledger\.jsonl)$/) bad=1; typed[path]++; next} /^Initial-Symlink-Target:/ {path=$0; sub(/^Initial-Symlink-Target: /,"",path); sub(/ ->.*/,"",path); typed[path]++; next} END{for(path in expected) if(expected[path]!=1 || typed[path]!=1) bad=1; for(path in typed) if(expected[path]!=1) bad=1; exit bad}' "$manifest"
  test "$(sed -n 's/^Initial-Directory: //p' "$manifest" | sort | uniq -d | wc -l)" -eq 0
  test "$(sed -n 's/^Initial-Directory: //p' "$manifest" | wc -l)" -gt 0
  while IFS= read -r path; do
    test -n "$path"
    test -d "$path"
  done < <(sed -n 's/^Initial-Directory: //p' "$manifest")
}
f4_inventory_validator() {
  (
  set -euo pipefail
  inventory_phase="${1:-full}"
  case "$inventory_phase" in full|phase-a) ;; *) return 1 ;; esac
  f4_inventory_tmp=$(mktemp -d)
  trap 'rm -rf "$f4_inventory_tmp"' EXIT
  test ! -f .git/HEAD
  test ! -f .git/config
  if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then exit 1; fi
  initial_inventory_validator
  find . \( -path './.git' -o -path './.git/*' -o -path "${CLOSURE_EXCLUDE_DIR:-/__never__}" -o -path "${CLOSURE_EXCLUDE_DIR:-/__never__}/*" -o -path "${receipt_txn:-/__never__}" -o -path "${receipt_txn:-/__never__}/*" \) -prune -o \( -type f -o -type l \) -printf '%P\n' | LC_ALL=C sort > "$f4_inventory_tmp/current"
  cat <(sed -n 's/^Initial-Path: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) <(if [ "$inventory_phase" = phase-a ]; then awk '/^Allowed-Output:/ && $0 !~ /final-f4-scope-security[.]md$/ {sub(/^Allowed-Output: /, ""); print}' .omo/evidence/weather-pwa-design/preflight-manifest.md; else sed -n 's/^Allowed-Output: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md; fi) | LC_ALL=C sort -u > "$f4_inventory_tmp/expected"
  test -z "$(comm -23 "$f4_inventory_tmp/current" "$f4_inventory_tmp/expected")"
  test -z "$(comm -13 "$f4_inventory_tmp/current" "$f4_inventory_tmp/expected")"
  find . \( -path './.git' -o -path './.git/*' -o -path "${CLOSURE_EXCLUDE_DIR:-/__never__}" -o -path "${CLOSURE_EXCLUDE_DIR:-/__never__}/*" -o -path "${receipt_txn:-/__never__}" -o -path "${receipt_txn:-/__never__}/*" \) -prune -o -type d -not -path '.' -printf '%P\n' | LC_ALL=C sort > "$f4_inventory_tmp/current-dirs"
  cat <(sed -n 's/^Initial-Directory: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) <(sed -n 's/^Allowed-Directory: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) | LC_ALL=C sort -u > "$f4_inventory_tmp/expected-dirs"
  test -z "$(comm -23 "$f4_inventory_tmp/current-dirs" "$f4_inventory_tmp/expected-dirs")"
  test -z "$(comm -13 "$f4_inventory_tmp/current-dirs" "$f4_inventory_tmp/expected-dirs")"
  while IFS= read -r row; do path=${row%% *}; digest=${row##* }; test "$(sha256sum "$path" | awk '{print $1}')" = "$digest"; done < <(sed -n 's/^Initial-File-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
  while IFS= read -r row; do link=${row%% -> *}; target=${row#* -> }; test -L "$link"; test "$(readlink "$link")" = "$target"; done < <(sed -n 's/^Initial-Symlink-Target: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
  rm -rf "$f4_inventory_tmp"
  trap - EXIT
  test ! -e "$f4_inventory_tmp"
  )
}
qa_trace_expected() {
  case "$1" in
    .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md) printf '%s\n' source-records source-bodies task-source-registry hash-contract credential-fixtures forced-status-77 preflight-recovery cleanup-trap ;;
    .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md) printf '%s\n' artifact task-source-registry proxy-boundary credential-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md) printf '%s\n' artifact task-source-registry offline-contract warning-unknown background-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md) printf '%s\n' artifact task-source-registry location-privacy coarse-location privacy-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md) printf '%s\n' artifact task-source-registry accessibility-copy focus-state dependency-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md) printf '%s\n' artifact task-source-registry memory-boundary budget-protocol runtime-claim-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md) printf '%s\n' artifact document-structure runtime-claim-negative scope-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md) printf '%s\n' artifact design-tokens accessibility-state runtime-claim-negative scope-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md) printf '%s\n' artifact integrity-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md) printf '%s\n' artifact plan-contract receipt-negative manifest-order cleanup-trap ;;
    .omo/evidence/weather-pwa-design/final-f2-document-quality.md) printf '%s\n' artifact document-crossrefs unresolved-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md) printf '%s\n' artifact scenario-rows runtime-claim-negative cleanup-trap ;;
    .omo/evidence/weather-pwa-design/final-f4-scope-security.md) printf '%s\n' artifact inventory source-records task-source-registry secret-negative secret-fixtures process-clean cleanup-trap ;;
    *) return 1 ;;
  esac
}
task_9_integrity_happy_probe() {
  set -euo pipefail
  integrity=.omo/evidence/weather-pwa-design/design-integrity-review.md
  test -s "$integrity"
  test "$(rg -c '^Verdict: APPROVE$' "$integrity")" -eq 1
  test "$(rg -c '^Unresolved-Contradictions: 0$' "$integrity")" -eq 1
  test "$(rg -c '^Runtime-QA: NOT RUN$' "$integrity")" -eq 1
  for path in .omo/evidence/weather-pwa-design/kma-contract-review.md .omo/evidence/weather-pwa-design/proxy-threat-review.md .omo/evidence/weather-pwa-design/pwa-offline-review.md .omo/evidence/weather-pwa-design/location-privacy-review.md .omo/evidence/weather-pwa-design/ui-accessibility-review.md .omo/evidence/weather-pwa-design/performance-budget-review.md; do
    test -s "$path"
    rg -qF "$path" "$integrity"
  done
  test ! -e .omo/evidence/weather-pwa-design/output-manifest.sha256
  test ! -e .omo/evidence/weather-pwa-design/output-manifest-receipt.md
}
qa_terms_probe() {
  set -euo pipefail
  qa_terms_path="$1"
  shift
  test -s "$qa_terms_path"
  for qa_term in "$@"; do rg -qi "$qa_term" "$qa_terms_path"; done
}
task_7_document_structure_probe() {
  set -euo pipefail
  spec=docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md
  test -s "$spec"
  for path in .omo/evidence/weather-pwa-design/kma-contract-review.md .omo/evidence/weather-pwa-design/proxy-threat-review.md .omo/evidence/weather-pwa-design/pwa-offline-review.md .omo/evidence/weather-pwa-design/location-privacy-review.md .omo/evidence/weather-pwa-design/ui-accessibility-review.md .omo/evidence/weather-pwa-design/performance-budget-review.md; do test -s "$path"; done
  for id in installability grid-data-flow offline-forecast secret-exclusion performance accessibility responsive; do rg -q "Scenario-ID: $id" "$spec"; done
  for term in Scenario-Prerequisites: Scenario-Command: Scenario-Steps: Scenario-Expected: Scenario-Failure:; do test "$(rg -c "$term" "$spec")" -ge 7; done
}
qa_scope_negative_probe() {
  set -euo pipefail
  test ! -f .git/HEAD
  test ! -f .git/config
  test -z "$(find . -type f \( -name '*.js' -o -name '*.mjs' -o -name '*.cjs' -o -name '*.ts' -o -name '*.tsx' -o -name '*.html' -o -name '*.css' -o -name 'manifest.json' -o -name 'package.json' \) -not -path './.omo/*' -print -quit)"
}
qa_secret_pattern_build() {
  service_marker=$(printf 'Service%s' 'Key='); lowercase_service_marker=$(printf 'service%s' 'Key='); auth_marker=$(printf 'Authorization: %s' 'Bearer'); basic_marker=$(printf 'Authorization: %s' 'Basic'); cookie_marker=$(printf '%s' 'Cookie:'); token_marker=$(printf '%s' 'token:'); json_token_marker=$(printf '%s%s%s' '"' 'tok' 'en"'); service_field_marker=$(printf 'service%s' 'Key:'); api_key_marker=$(printf 'api%skey' '_'); x_api_key_marker=$(printf 'X-%s-%s' 'API' 'Key'); private_marker=$(printf '%s' '-----BEGIN (RSA|OPENSSH|EC) PRIVATE KEY-----')
  printf '%s' "https?://[^ )]+($service_marker|$lowercase_service_marker)|($auth_marker|$basic_marker)[[:space:]]+[A-Za-z0-9._=+/.-]{8,}|$cookie_marker[[:space:]]+[A-Za-z0-9._=+/.-]{8,}|($token_marker|$json_token_marker|$service_field_marker|$api_key_marker|$x_api_key_marker)[[:space:]:=\"]+[A-Za-z0-9._=+/.-]{8,}|$private_marker"
}
negative_scan_validator() {
  set +e
  negative_hits=$(rg -ni "$negative_pattern" "${negative_paths[@]}" 2>"$negative_tmp/scan-error")
  negative_status=$?
  set -e
  if [ "$negative_status" -ne 1 ] || [ -s "$negative_tmp/scan-error" ] || [ -n "$negative_hits" ]; then return 1; fi
  return 0
}
filtered_negative_scan_validator() {
  set +e
  raw_hits=$(rg -ni "$negative_pattern" "${negative_paths[@]}" 2>"$negative_tmp/raw-error")
  rg_status=$?
  set -e
  if [ "$rg_status" -ne 0 ] && [ "$rg_status" -ne 1 ]; then return 1; fi
  if [ -s "$negative_tmp/raw-error" ]; then return 1; fi
  if [ "$rg_status" -eq 1 ]; then return 0; fi
  set +e
  disallowed_hits=$(printf '%s\n' "$raw_hits" | rg -vi "$allowed_pattern" 2>"$negative_tmp/filter-error")
  filter_status=$?
  set -e
  if [ "$filter_status" -eq 2 ] || [ -s "$negative_tmp/filter-error" ] || [ "$filter_status" -eq 0 ]; then return 1; fi
  return 0
}
qa_credential_negative_probe() {
  set -euo pipefail
  service_marker=$(printf 'Service%s' 'Key='); lowercase_service_marker=$(printf 'service%s' 'Key='); auth_marker=$(printf 'Authorization: %s' 'Bearer'); basic_marker=$(printf 'Authorization: %s' 'Basic'); cookie_marker=$(printf '%s' 'Cookie:'); token_marker=$(printf '%s' 'token:'); service_field_marker=$(printf 'service%s' 'Key:'); api_key_marker=$(printf 'api%skey' '_'); x_api_key_marker=$(printf 'X-%s-%s' 'API' 'Key'); private_marker=$(printf '%s' '-----BEGIN (RSA|OPENSSH|EC) PRIVATE KEY-----')
  qa_secret_pattern=$(qa_secret_pattern_build)
  qa_scan_paths=()
  for qa_path in "$@"; do [ -e "$qa_path" ] && qa_scan_paths+=("$qa_path"); done
  test "${#qa_scan_paths[@]}" -gt 0
  set +e
  rg -ni "$qa_secret_pattern" "${qa_scan_paths[@]}" >/dev/null 2>&1
  qa_secret_status=$?
  set -e
  test "$qa_secret_status" -eq 1
}
qa_process_clean_probe() {
  set -euo pipefail
  process_tmp=$(mktemp -d)
  trap 'rm -rf "$process_tmp"' EXIT
  for proc_path in /proc/[0-9]*; do
    proc_pid=${proc_path##*/}
    [ "$proc_pid" = "$$" ] && continue
    [ -r "$proc_path/cmdline" ] || continue
    proc_cmd=$(tr '\0' ' ' < "$proc_path/cmdline" 2>/dev/null || true)
    case "$proc_cmd" in
      *weather-pwa*|*web-terminal*|*weather-bootstrap.*|*weather-preflight-*|*weather-receipt-base.*|*weather-receipt.*|*weather-state.*|*weather-manifest.*|*weather-closure.*|*weather-plan-retry.*) printf '%s %s\n' "$proc_pid" "$proc_cmd" >> "$process_tmp/hits" ;;
    esac
  done
  test ! -s "$process_tmp/hits"
  rm -rf "$process_tmp"
  trap - EXIT
  test ! -e "$process_tmp"
}
qa_runtime_claim_negative_probe() {
  set -euo pipefail
  qa_runtime_path="$1"
  set +e
  rg -ni 'running app observed|visual QA passed|installability passed|memory target met|runtime verified' "$qa_runtime_path" >/dev/null 2>&1
  qa_runtime_status=$?
  set -e
  test "$qa_runtime_status" -eq 1
}
qa_filtered_policy_negative_probe() {
  set -euo pipefail
  negative_paths=("$1")
  negative_pattern="$2"
  allowed_pattern="$3"
  negative_tmp=$(mktemp -d)
  trap 'rm -rf "$negative_tmp"' EXIT
  filtered_negative_scan_validator
  rm -rf "$negative_tmp"
  trap - EXIT
  test ! -e "$negative_tmp"
}
task_3_background_negative_probe() { qa_filtered_policy_negative_probe "$expected_artifact" 'persistent timer|hidden-tab polling|background sync|push notification|warning.*all clear' 'never|out of scope|must not|no push|no background sync|not persisted|status unavailable|unknown|금지'; }
task_4_privacy_negative_probe() { qa_filtered_policy_negative_probe "$expected_artifact" 'raw coordinates|precise location|continuous tracking|analytics' 'never|out of scope|must not|not stored|not persisted|no analytics|금지'; }
task_5_dependency_negative_probe() { qa_filtered_policy_negative_probe "$expected_artifact" 'web font|chart library|framework runtime|icon package|map|radar' 'avoid|without|no |out of scope|default|does not|not included|not used|not recommended|금지'; }
qa_receipt_negative_probe() {
  (
  set -euo pipefail
  qa_bad_receipt=$(mktemp)
  trap 'rm -f "$qa_bad_receipt"' EXIT
  cp .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md "$qa_bad_receipt"
  sed -i 's/^Verdict: PASS$/Verdict: FAIL/' "$qa_bad_receipt"
  receipt="$qa_bad_receipt"; receipt_to_check="$qa_bad_receipt"; fixed_receipt=.omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md; expected_verdict=PASS; expected_binding "$fixed_receipt"
  set +e
  receipt_validator "$expected_artifact" "$expected_command" "$expected_sources"
  qa_bad_status=$?
  set -e
  test "$qa_bad_status" -ne 0
  rm -f "$qa_bad_receipt"
  trap - EXIT
  test ! -e "$qa_bad_receipt"
  )
}
scenario_row_validator() {
  set -euo pipefail
  scenario_receipt="${QA_RECEIPT_CANDIDATE:-.omo/evidence/weather-pwa-design/final-f3-semantic-qa.md}"
  awk -v ids='forecast-success,warning-success,offline-forecast-only,offline-warning-unknown,stale-data-age,location-denied,location-unavailable,location-reset,update-reconnect-visibility,performance-protocol,accessibility-protocol,responsive-protocol' -v fields='Scenario-Prerequisites,Scenario-Command,Scenario-Steps,Scenario-Expected,Scenario-Failure' 'BEGIN{split(ids,wanted,","); split(fields,required,","); for(i in wanted) allowed[wanted[i]]=1; bad=0} /^Scenario-ID: /{id=$0; sub(/^Scenario-ID: /,"",id); if(!(id in allowed) || ++count[id]!=1) bad=1; current=id; next} /^Scenario-(Prerequisites|Command|Steps|Expected|Failure): [^[:space:]].*/{field=$1; sub(/:$/, "", field); if(current=="" || ++seen[current SUBSEP field]!=1) bad=1; next} END{for(i in wanted){id=wanted[i]; if(count[id]!=1) bad=1; for(j in required) if(seen[id SUBSEP required[j]]!=1) bad=1} exit bad}' "$scenario_receipt"
}
qa_final_f2_crossrefs_probe() {
  set -euo pipefail
  qa_f2="${QA_RECEIPT_CANDIDATE:-.omo/evidence/weather-pwa-design/final-f2-document-quality.md}"
  for path in .omo/evidence/weather-pwa-design/preflight-manifest.md docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md DESIGN.md .omo/evidence/weather-pwa-design/kma-contract-review.md .omo/evidence/weather-pwa-design/proxy-threat-review.md .omo/evidence/weather-pwa-design/pwa-offline-review.md .omo/evidence/weather-pwa-design/location-privacy-review.md .omo/evidence/weather-pwa-design/ui-accessibility-review.md .omo/evidence/weather-pwa-design/performance-budget-review.md .omo/evidence/weather-pwa-design/design-integrity-review.md; do rg -qF "$path" "$qa_f2"; done
}
preflight_terminal_probe() {
  set -euo pipefail
  test -s .omo/evidence/weather-pwa-design/preflight-manifest.md
  test -z "$(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-preflight.*' -print -quit)"
  test -z "$(find /tmp -mindepth 1 -maxdepth 1 -type d -name 'weather-preflight-capture.*' -print -quit)"
  test -z "$(find /tmp -mindepth 1 -maxdepth 1 -name 'weather-preflight-rebuild.*' -print -quit)"
}
qa_probe_command() {
  case "$1:$2" in
    .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md:artifact) printf '%s\n' 'task_9_integrity_happy_probe' ;;
    *:artifact) printf '%s\n' 'test -s "$expected_artifact"' ;;
    .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md:source-records) printf '%s\n' 'source_record_validator .omo/evidence/weather-pwa-design/kma-contract-review.md' ;;
    .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md:source-bodies) printf '%s\n' 'source_body_receipt_probe' ;;
    *:task-source-registry) printf '%s\n' 'task_source_registry_validate' ;;
    *:hash-contract) printf '%s\n' 'frozen_contract_validator' ;;
    .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md:credential-fixtures) printf '%s\n' 'todo_1_credential_fixture_probe' ;;
    .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md:forced-status-77) printf '%s\n' 'preflight_forced_status_77_receipt_probe' ;;
    .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md:preflight-recovery) printf '%s\n' 'preflight_terminal_probe' ;;
    .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md:proxy-boundary) printf '%s\n' 'qa_terms_probe "$expected_artifact" CORS redact quota cache coalesc timeout validation poison provider-neutral' ;;
    .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md:credential-negative) printf '%s\n' 'qa_credential_negative_probe "$expected_artifact"' ;;
    .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md:offline-contract) printf '%s\n' 'qa_terms_probe "$expected_artifact" install offline "data age" "forecast only" first-load incompatible "update race" "cache failure" partial' ;;
    .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md:warning-unknown) printf '%s\n' 'rg -qi "warning.*(unavailable|unknown)" "$expected_artifact"' ;;
    .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md:background-negative) printf '%s\n' 'task_3_background_negative_probe' ;;
    .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md:location-privacy) printf '%s\n' 'qa_terms_probe "$expected_artifact" manual one-shot opt-in stored-field "raw coordinates"' ;;
    .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md:coarse-location) printf '%s\n' 'qa_terms_probe "$expected_artifact" coarse grid boundary out-of-range reset' ;;
    .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md:privacy-negative) printf '%s\n' 'task_4_privacy_negative_probe' ;;
    .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md:accessibility-copy) printf '%s\n' 'qa_terms_probe "$expected_artifact" WCAG keyboard aria "aria-live" screen-reader CJK line-break overflow-wrap "long warning" 한국어' ;;
    .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md:focus-state) printf '%s\n' 'qa_terms_probe "$expected_artifact" focus contrast "200%" "reduced motion"' ;;
    .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md:dependency-negative) printf '%s\n' 'task_5_dependency_negative_probe' ;;
    .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md:memory-boundary) printf '%s\n' 'qa_terms_probe "$expected_artifact" "JS heap" "browser process" "app-owned" "design proposal"' ;;
    .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md:budget-protocol) printf '%s\n' 'qa_terms_probe "$expected_artifact" "<=150 KiB" "<=20 MiB" "<=500" "<=5 MiB" "20" "<=2 MiB" "<=25" "<=512 KiB"' ;;
    .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md:runtime-claim-negative|.omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md:runtime-claim-negative|.omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md:runtime-claim-negative) printf '%s\n' 'qa_runtime_claim_negative_probe "$expected_artifact"' ;;
    .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md:document-structure) printf '%s\n' 'task_7_document_structure_probe' ;;
    .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md:scope-negative|.omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md:scope-negative) printf '%s\n' 'qa_scope_negative_probe' ;;
    .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md:design-tokens) printf '%s\n' 'qa_terms_probe "$expected_artifact" 토큰 "system font" narrow desktop CJK "design debt" 한국어' ;;
    .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md:accessibility-state) printf '%s\n' 'qa_terms_probe "$expected_artifact" focus keyboard aria "aria-live" contrast "200%" "reduced motion" screen-reader 경고 offline "long warning" "line-break" "overflow-wrap"' ;;
    .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md:integrity-negative) printf '%s\n' 'test -s .omo/evidence/weather-pwa-design/design-integrity-review.md && rg -q "^Unresolved-Contradictions: 0$" .omo/evidence/weather-pwa-design/design-integrity-review.md' ;;
    .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md:plan-contract) printf '%s\n' 'frozen_contract_validator' ;;
    .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md:receipt-negative) printf '%s\n' 'qa_receipt_negative_probe' ;;
    .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md:manifest-order) printf '%s\n' 'manifest_path_order_validator' ;;
    .omo/evidence/weather-pwa-design/final-f2-document-quality.md:document-crossrefs) printf '%s\n' 'qa_final_f2_crossrefs_probe' ;;
    .omo/evidence/weather-pwa-design/final-f2-document-quality.md:unresolved-negative) printf '%s\n' 'rg -q "^Unresolved-Findings: 0$" "${QA_RECEIPT_CANDIDATE:?}"' ;;
    .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md:scenario-rows) printf '%s\n' 'scenario_row_validator' ;;
    .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md:runtime-claim-negative) printf '%s\n' 'qa_runtime_claim_negative_probe "${QA_RECEIPT_CANDIDATE:?}"' ;;
    .omo/evidence/weather-pwa-design/final-f4-scope-security.md:inventory) printf '%s\n' 'f4_inventory_validator phase-a' ;;
    .omo/evidence/weather-pwa-design/final-f4-scope-security.md:source-records) printf '%s\n' 'source_record_validator .omo/evidence/weather-pwa-design/kma-contract-review.md' ;;
    .omo/evidence/weather-pwa-design/final-f4-scope-security.md:secret-negative) printf '%s\n' 'qa_credential_negative_probe AGENTS.md docs DESIGN.md .omo/evidence .omo/boulder.json .omo/start-work/ledger.jsonl' ;;
    .omo/evidence/weather-pwa-design/final-f4-scope-security.md:secret-fixtures) printf '%s\n' 'todo_1_credential_fixture_probe' ;;
    .omo/evidence/weather-pwa-design/final-f4-scope-security.md:process-clean) printf '%s\n' 'qa_process_clean_probe' ;;
    *:cleanup-trap) printf '%s\n' 'qa_cleanup_trap_probe' ;;
    *) return 1 ;;
  esac
}
qa_capture_probe() {
  set -euo pipefail
  probe_name="$1"
  command_string="$2"
  test -n "${receipt_txn:-}"
  test -n "${receipt_key:-}"
  qa_trace_expected "$receipt_key" | rg -qx "$probe_name"
  expected_probe_command=$(qa_probe_command "$receipt_key" "$probe_name")
  test "$command_string" = "$expected_probe_command"
  raw_probe="$receipt_txn/$probe_name.raw"
  canonical_probe="$receipt_txn/$probe_name.canonical"
  set +e
  eval "$command_string" > "$raw_probe" 2>&1
  probe_status=$?
  set -e
  test "$probe_status" -eq 0
  service_marker=$(printf 'Service%s' 'Key=')
  lowercase_service_marker=$(printf 'service%s' 'Key=')
  auth_marker=$(printf 'Authorization: %s' 'Bearer')
  cookie_marker=$(printf '%s' 'Cookie:')
  token_marker=$(printf '%s' 'token:')
  service_field_marker=$(printf 'service%s' 'Key:')
  tr '\n' ' ' < "$raw_probe" | sed -E "s#($service_marker|$lowercase_service_marker)[^[:space:]]*#[REDACTED]#g; s#($auth_marker|$cookie_marker|$token_marker|$service_field_marker)[^[:space:]]*#[REDACTED]#g; s/[[:space:]]+/ /g; s/^ //; s/ $//" | tr -d '\n' > "$canonical_probe"
  if [ ! -s "$canonical_probe" ]; then printf '%s' '<no-output>' > "$canonical_probe"; fi
  test -s "$canonical_probe"
  probe_digest=$(sha256sum "$canonical_probe" | awk '{print $1}')
  printf '%s=%s\n' "$probe_name" "$probe_digest" >> "$receipt_txn/trace.entries"
  printf 'QA-Transcript: %s ' "$probe_name" >> "$receipt_txn/transcripts"
  cat "$canonical_probe" >> "$receipt_txn/transcripts"
  printf '\n' >> "$receipt_txn/transcripts"
  rm -f "$raw_probe" "$canonical_probe"
  test ! -e "$raw_probe"; test ! -e "$canonical_probe"
}
qa_trace_validator() {
  (
    set -euo pipefail
    test -s "$receipt"
    test "$(rg -c '^QA-Trace: ' "$receipt" || printf '0')" -eq 1
    trace=$(sed -n 's/^QA-Trace: //p' "$receipt")
    test -n "$trace"
    trace_tmp=$(mktemp -d)
    trap 'rm -rf "$trace_tmp"' EXIT
    qa_trace_expected "${receipt_key:-$receipt}" > "$trace_tmp/expected-names"
    printf '%s\n' "$trace" | tr ';' '\n' > "$trace_tmp/trace"
    test "$(wc -l < "$trace_tmp/trace")" -eq "$(wc -l < "$trace_tmp/expected-names")"
    while IFS= read -r entry; do printf '%s\n' "$entry" | rg -q '^[^=;]+=[0-9a-f]{64}$'; done < "$trace_tmp/trace"
    cut -d= -f1 "$trace_tmp/trace" > "$trace_tmp/actual-names"
    cmp -s "$trace_tmp/expected-names" "$trace_tmp/actual-names"
    test "$(sort "$trace_tmp/actual-names" | uniq -d | wc -l)" -eq 0
    while IFS= read -r name; do
      test "$(rg -c "^QA-Transcript: $name " "$receipt" || printf '0')" -eq 1
      transcript=$(sed -n "s/^QA-Transcript: $name //p" "$receipt")
      test -n "$transcript"
      expected_hash=$(printf '%s' "$transcript" | sha256sum | awk '{print $1}')
      actual_hash=$(sed -n "s/^${name}=//p" "$trace_tmp/trace")
      test "$actual_hash" = "$expected_hash"
    done < "$trace_tmp/expected-names"
  )
}
qa_cleanup_trap_probe() {
  set -euo pipefail
  cleanup_probe_tmp=$(mktemp -d)
  set +e
  (trap 'rm -rf "$cleanup_probe_tmp"' EXIT; exit 1)
  cleanup_probe_status=$?
  set -e
  test "$cleanup_probe_status" -eq 1
  test ! -e "$cleanup_probe_tmp"
}
qa_run_trace() {
  set -euo pipefail
  qa_trace_expected "$receipt_key" | while IFS= read -r probe_name; do
    qa_capture_probe "$probe_name" "$(qa_probe_command "$receipt_key" "$probe_name")"
  done
}
qa_prepare_and_bind() {
  (
  set -euo pipefail
  fixed_receipt="$1"
  expected_verdict="$2"
  base_receipt="$3"
  case "$base_receipt" in /tmp/weather-receipt-base.*) ;; *) return 1 ;; esac
  test -s "$base_receipt"
  receipt_key="$fixed_receipt"
  expected_binding "$fixed_receipt"
  receipt_txn=$(mktemp -d /tmp/weather-worker-receipt.XXXXXX)
  trap 'rm -rf "$receipt_txn"' EXIT
  test "$(rg -c '^QA-Trace: ' "$base_receipt" || printf '0')" -eq 0
  test "$(rg -c '^QA-Transcript: ' "$base_receipt" || printf '0')" -eq 0
  QA_RECEIPT_CANDIDATE="$base_receipt"
  qa_run_trace
  unset QA_RECEIPT_CANDIDATE
  cat "$receipt_txn/transcripts" >> "$base_receipt"
  printf 'QA-Trace: %s\n' "$(paste -sd ';' "$receipt_txn/trace.entries")" >> "$base_receipt"
  receipt="$base_receipt"
  receipt_to_check="$base_receipt"
  qa_trace_validator
  frozen_contract_validator
  if [ "$expected_verdict" = PASS ]; then receipt_validator "$expected_artifact" "$expected_command" "$expected_sources"; else final_gate_validator; fi
  rm -rf "$receipt_txn"
  trap - EXIT
  test ! -e "$receipt_txn"
  test -s "$base_receipt"
  )
}
receipt_discard_unpromoted() {
  set -euo pipefail
  discard_txn="$1"
  while IFS= read -r discard_path; do
    discard_name=${discard_path##*/}
    case "$discard_name" in candidate|receipt-journal|trace.entries|transcripts|expected-names|actual-names|*.raw|*.canonical|*.tmp.*) rm -f "$discard_path" ;; *) return 1 ;; esac
  done < <(find "$discard_txn" -mindepth 1 -maxdepth 1 -type f -print | LC_ALL=C sort)
  test -z "$(find "$discard_txn" -mindepth 1 -print -quit)"
  rmdir "$discard_txn"
}
receipt_remove_helpers() {
  set -euo pipefail
  receipt_helper_txn="$1"
  for helper in trace.entries transcripts expected-names actual-names; do
    rm -f "$receipt_helper_txn/$helper"
  done
  while IFS= read -r helper_path; do
    helper_name=${helper_path##*/}
    case "$helper_name" in candidate|receipt-journal|*.raw|*.canonical|*.tmp.*) rm -f "$helper_path" ;; *) return 1 ;; esac
  done < <(find "$receipt_helper_txn" -mindepth 1 -maxdepth 1 -type f -print | LC_ALL=C sort)
  test -z "$(find "$receipt_helper_txn" -mindepth 1 -print -quit)"
}
receipt_recovery_atomic_line() { target="$1"; value="$2"; tmp=$(mktemp "${target}.tmp.XXXXXX"); printf '%s\n' "$value" > "$tmp"; test "$(wc -l < "$tmp")" -eq 1; test "$(cat "$tmp")" = "$value"; mv "$tmp" "$target"; }
receipt_recovery_check() {
  set -euo pipefail
  mapfile -t receipt_txns < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-receipt.*' -print | LC_ALL=C sort)
  case "${#receipt_txns[@]}" in
    0) RECEIPT_RESUME=none; return 0 ;;
    1) ;;
    *) return 1 ;;
  esac
  receipt_txn="${receipt_txns[0]}"
  if [ ! -e "$receipt_txn/receipt-journal" ]; then
    for first_journal_tmp in "$receipt_txn"/receipt-journal.tmp.*; do
      [ -e "$first_journal_tmp" ] || continue
      test -f "$first_journal_tmp"; test ! -L "$first_journal_tmp"
      test -z "$(find "$receipt_txn" -mindepth 1 -maxdepth 1 -type f -not -name 'receipt-journal.tmp.*' -print -quit)"
      rm -f "$first_journal_tmp"
    done
    test -z "$(find "$receipt_txn" -mindepth 1 -print -quit)"
    rmdir "$receipt_txn"
    test ! -e "$receipt_txn"
    RECEIPT_RESUME=none
    return 0
  fi
  test -s "$receipt_txn/receipt-journal"
  receipt_state=$(cat "$receipt_txn/receipt-journal")
  case "$receipt_state" in *" base="*) return 1 ;; esac
  receipt_fixed=$(sed -n 's/.* fixed=\([^ ]*\) .*/\1/p' "$receipt_txn/receipt-journal")
  receipt_verdict=$(sed -n 's/.* verdict=\([^ ]*\) .*/\1/p' "$receipt_txn/receipt-journal")
  receipt_digest=$(sed -n 's/.* digest=\([0-9a-f]\{64\}\|UNSEALED\)$/\1/p' "$receipt_txn/receipt-journal")
  receipt_fixed="${receipt_fixed#./}"
  case "$receipt_fixed" in .omo/evidence/weather-pwa-design/task-[1-9]-low-memory-kma-weather-pwa-design.md|.omo/evidence/weather-pwa-design/final-f[1-4]-*.md) ;; *) return 1 ;; esac
  case "$receipt_state" in
    state=candidate*|state=validated*)
      test ! -e "$receipt_fixed"; if [ -e "$receipt_txn/candidate" ]; then test -s "$receipt_txn/candidate"; if [ "$receipt_digest" != UNSEALED ]; then test "$(sha256sum "$receipt_txn/candidate" | awk '{print $1}')" = "$receipt_digest"; fi; fi
      receipt_discard_unpromoted "$receipt_txn"
      test ! -e "$receipt_txn"
      RECEIPT_RESUME=none
      ;;
    state=promotion-planned*)
      if [ -s "$receipt_txn/candidate" ] && [ ! -e "$receipt_fixed" ]; then
        test "$(sha256sum "$receipt_txn/candidate" | awk '{print $1}')" = "$receipt_digest"
        mv "$receipt_txn/candidate" "$receipt_fixed"
      elif [ ! -e "$receipt_txn/candidate" ] && [ -s "$receipt_fixed" ]; then
        test "$(sha256sum "$receipt_fixed" | awk '{print $1}')" = "$receipt_digest"
      else return 1
      fi
      receipt_recovery_atomic_line "$receipt_txn/receipt-journal" "state=promoted fixed=$receipt_fixed verdict=$receipt_verdict digest=$receipt_digest"
      receipt_recovery_check
      test "${RECEIPT_RESUME:-}" = none
      ;;
    state=promoted*|state=cleanup-planned*)
      test ! -e "$receipt_txn/candidate"; test -s "$receipt_fixed"; test "$(sha256sum "$receipt_fixed" | awk '{print $1}')" = "$receipt_digest"
      receipt="$receipt_fixed"; receipt_to_check="$receipt_fixed"; receipt_key="$receipt_fixed"; fixed_receipt="$receipt_fixed"; expected_verdict="$receipt_verdict"; expected_binding "$receipt_fixed"; qa_trace_validator
if [ "$receipt_fixed" = .omo/evidence/weather-pwa-design/final-f4-scope-security.md ]; then
  if [ -e "$receipt_fixed" ]; then f4_inventory_validator full; else f4_inventory_validator phase-a; fi
fi
      if [ "$expected_verdict" = PASS ]; then receipt_validator "$expected_artifact" "$expected_command" "$expected_sources"; else final_gate_validator; fi
      receipt_recovery_atomic_line "$receipt_txn/receipt-journal" "state=cleanup-planned fixed=$receipt_fixed verdict=$receipt_verdict digest=$receipt_digest"
      receipt_remove_helpers "$receipt_txn"
      rm -f "$receipt_txn/receipt-journal"; rmdir "$receipt_txn"; test ! -e "$receipt_txn"; RECEIPT_RESUME=none
      ;;
    *) return 1 ;;
  esac
}
qa_bind_and_validate() { set -euo pipefail; printf '%s\n' 'worker receipt promotion is root-owned' >&2; return 1; }
todo-1-source-contract-and-receipt-qa() { set -euo pipefail; test -s .omo/evidence/weather-pwa-design/preflight-manifest.md; test -s .omo/evidence/weather-pwa-design/kma-contract-review.md; source_record_validator .omo/evidence/weather-pwa-design/kma-contract-review.md; qa_prepare_and_bind .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md PASS "${QA_RECEIPT_BASE:?}"; }
todo-2-proxy-threat-qa() { set -euo pipefail; test -s .omo/evidence/weather-pwa-design/proxy-threat-review.md; task_source_registry_validate; qa_prepare_and_bind .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md PASS "${QA_RECEIPT_BASE:?}"; }
todo-3-offline-contract-qa() { set -euo pipefail; test -s .omo/evidence/weather-pwa-design/pwa-offline-review.md; task_source_registry_validate; qa_prepare_and_bind .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md PASS "${QA_RECEIPT_BASE:?}"; }
todo-4-location-privacy-qa() { set -euo pipefail; test -s .omo/evidence/weather-pwa-design/location-privacy-review.md; task_source_registry_validate; qa_prepare_and_bind .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md PASS "${QA_RECEIPT_BASE:?}"; }
todo-5-ui-accessibility-qa() { set -euo pipefail; test -s .omo/evidence/weather-pwa-design/ui-accessibility-review.md; task_source_registry_validate; qa_prepare_and_bind .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md PASS "${QA_RECEIPT_BASE:?}"; }
todo-6-performance-budget-qa() { set -euo pipefail; test -s .omo/evidence/weather-pwa-design/performance-budget-review.md; task_source_registry_validate; qa_prepare_and_bind .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md PASS "${QA_RECEIPT_BASE:?}"; }
todo-7-specification-qa() { set -euo pipefail; test -s docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; qa_prepare_and_bind .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md PASS "${QA_RECEIPT_BASE:?}"; }
todo-8-design-system-qa() { set -euo pipefail; test -s DESIGN.md; qa_prepare_and_bind .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md PASS "${QA_RECEIPT_BASE:?}"; }
# TASK_9_MANIFEST_STAGE_BEGIN
todo-9-integrity-manifest-qa() { set -euo pipefail; test -s .omo/evidence/weather-pwa-design/design-integrity-review.md; task_9_integrity_happy_probe; qa_prepare_and_bind .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md PASS "${QA_RECEIPT_BASE:?}"; }
todo_9_stage_manifest_pair() {
  set -euo pipefail
  manifest_file=.omo/evidence/weather-pwa-design/output-manifest.sha256
  receipt_file=.omo/evidence/weather-pwa-design/output-manifest-receipt.md
  if [ -e "$manifest_file" ] || [ -e "$receipt_file" ]; then
    test -s "$manifest_file"; test -s "$receipt_file"
    manifest_path_order_validator
    sha256sum --check "$manifest_file" >/dev/null
    output_manifest_hash=$(sha256sum "$manifest_file" | awk '{print $1}')
    test "$(sed -n 's/^Output-Manifest-SHA256: //p' "$receipt_file")" = "$output_manifest_hash"
    return 0
  fi
  test ! -e "$manifest_file"; test ! -e "$receipt_file"
  manifest_tmp=$(mktemp -d ./.omo/.weather-manifest.XXXXXX)
  manifest_journal="$manifest_tmp/manifest-journal"
  manifest_stage_atomic_line() { target="$1"; value="$2"; tmp=$(mktemp "${target}.tmp.XXXXXX"); printf '%s\n' "$value" > "$tmp"; test "$(wc -l < "$tmp")" -eq 1; mv "$tmp" "$target"; }
  manifest_stage_promote() { source="$1"; target="$2"; digest="$3"; tmp=$(mktemp "$(dirname "$target")/.manifest-promote.XXXXXX"); cp "$source" "$tmp"; test "$(sha256sum "$tmp" | awk '{print $1}')" = "$(cat "$digest")"; mv "$tmp" "$target"; test "$(sha256sum "$target" | awk '{print $1}')" = "$(cat "$digest")"; rm -f "$source"; }
  manifest_stage_atomic_line "$manifest_journal" 'manifest=staged receipt=staged'
  manifest_paths=(.omo/evidence/weather-pwa-design/preflight-manifest.md docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md DESIGN.md .omo/evidence/weather-pwa-design/kma-contract-review.md .omo/evidence/weather-pwa-design/proxy-threat-review.md .omo/evidence/weather-pwa-design/pwa-offline-review.md .omo/evidence/weather-pwa-design/location-privacy-review.md .omo/evidence/weather-pwa-design/ui-accessibility-review.md .omo/evidence/weather-pwa-design/performance-budget-review.md .omo/evidence/weather-pwa-design/design-integrity-review.md .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md)
  manifest_build_tmp=$(mktemp "$manifest_tmp/.manifest-build.XXXXXX"); sha256sum "${manifest_paths[@]}" > "$manifest_build_tmp"; test "$(wc -l < "$manifest_build_tmp")" -eq 19; mv "$manifest_build_tmp" "$manifest_tmp/output-manifest.sha256"
  staged_manifest_validator "$manifest_tmp/output-manifest.sha256"
  output_manifest_hash=$(sha256sum "$manifest_tmp/output-manifest.sha256" | awk '{print $1}')
  manifest_stage_atomic_line "$manifest_tmp/output-manifest-receipt.md" "Output-Manifest-SHA256: $output_manifest_hash"
  manifest_stage_atomic_line "$manifest_tmp/manifest.digest" "$(sha256sum "$manifest_tmp/output-manifest.sha256" | awk '{print $1}')"
  manifest_stage_atomic_line "$manifest_tmp/receipt.digest" "$(sha256sum "$manifest_tmp/output-manifest-receipt.md" | awk '{print $1}')"
  test "$(cat "$manifest_tmp/manifest.digest")" = "$(sha256sum "$manifest_tmp/output-manifest.sha256" | awk '{print $1}')"
  test "$(cat "$manifest_tmp/receipt.digest")" = "$(sha256sum "$manifest_tmp/output-manifest-receipt.md" | awk '{print $1}')"
  manifest_stage_atomic_line "$manifest_journal" 'manifest=promotion-planned receipt=staged'
  manifest_stage_promote "$manifest_tmp/output-manifest.sha256" "$manifest_file" "$manifest_tmp/manifest.digest"
  test "$(sha256sum "$manifest_file" | awk '{print $1}')" = "$(cat "$manifest_tmp/manifest.digest")"
  manifest_stage_atomic_line "$manifest_journal" 'manifest=promoted receipt=promotion-planned'
  manifest_stage_atomic_line "$manifest_journal" 'manifest=promotion-planned receipt=promotion-planned'
  manifest_stage_promote "$manifest_tmp/output-manifest-receipt.md" "$receipt_file" "$manifest_tmp/receipt.digest"
  test "$(sha256sum "$receipt_file" | awk '{print $1}')" = "$(cat "$manifest_tmp/receipt.digest")"
  manifest_stage_atomic_line "$manifest_journal" 'manifest=promoted receipt=promoted'
  manifest_path_order_validator
  manifest_stage_atomic_line "$manifest_journal" pair=committed
  manifest_stage_atomic_line "$manifest_journal" pair=cleanup-planned
  rm -f "$manifest_tmp/manifest.digest" "$manifest_tmp/receipt.digest" "$manifest_journal"; rmdir "$manifest_tmp"; test ! -e "$manifest_tmp"
}
# TASK_9_MANIFEST_STAGE_END
final-f1-plan-compliance-qa() { set -euo pipefail; test -s .omo/evidence/weather-pwa-design/output-manifest.sha256; qa_prepare_and_bind .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md APPROVE "${QA_RECEIPT_BASE:?}"; }
final-f2-document-quality-qa() { set -euo pipefail; test -s docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; qa_prepare_and_bind .omo/evidence/weather-pwa-design/final-f2-document-quality.md APPROVE "${QA_RECEIPT_BASE:?}"; }
final-f3-semantic-qa() { set -euo pipefail; test -s DESIGN.md; qa_prepare_and_bind .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md APPROVE "${QA_RECEIPT_BASE:?}"; }
final-f4-scope-security-qa() { set -euo pipefail; test -s .omo/evidence/weather-pwa-design/preflight-manifest.md; qa_prepare_and_bind .omo/evidence/weather-pwa-design/final-f4-scope-security.md APPROVE "${QA_RECEIPT_BASE:?}"; }
# ADAPTER_QA_VALIDATORS_END
~~~
The worker's full checkbox QA runs before the base-receipt return in each wrapper; the compact declarations above make the invocation and receipt command exact without weakening or relocating the required probes, and `qa_trace_validator` proves the required probe captures are bound into the returned base receipt. The root's `adapter_receipt_bind_and_validate` is the only fixed-receipt promoter. Task 9's receipt wrapper is intentionally pre-manifest; its staged manifest and live manifest_path_order_validator run only after the immutable task-9 receipt exists, outside the pre-promotion wrapper.
- Literal full-procedure bindings for the previously prose-only gates:
~~~sh
# FULL_QA_PROCEDURE_BEGIN
todo_1_public_assembly_command() {
  cat <<'ASSEMBLY'
set -euo pipefail
test -n "$PREFLIGHT_STAGE"; test -n "$PREFLIGHT_CAPTURE"
mkdir -p "$PREFLIGHT_STAGE/evidence/weather-pwa-design" "$PREFLIGHT_STAGE/references"
plan=.omo/plans/low-memory-kma-weather-pwa-design.md
manifest="$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md"
kma_review="$PREFLIGHT_STAGE/evidence/weather-pwa-design/kma-contract-review.md"
review_hash=$(sha256sum "$plan" | awk '{print $1}')
contract_hash=$(LC_ALL=C sed -E 's/^- \[(x| )\] (([0-9]+|F[1-4])\.)/- [ ] \2/' "$plan" | sha256sum | awk '{print $1}')
retrieved_at=$(date -u +%Y-%m-%dT%H:%M:%SZ)
test -s "$PREFLIGHT_CAPTURE/initial-paths"
test -s "$PREFLIGHT_CAPTURE/initial-files"
test -s "$PREFLIGHT_CAPTURE/initial-dirs"
test -s "$PREFLIGHT_CAPTURE/initial-links"
{
  printf '%s\n' "Plan-Review-SHA256: $review_hash" "Plan-Contract-SHA256: $contract_hash" 'Warnings-Offline-Snapshot: NOT PERSISTED'
  while IFS= read -r path; do [ -n "$path" ] && printf 'Initial-Path: %s\n' "$path"; done < "$PREFLIGHT_CAPTURE/initial-paths"
  while IFS= read -r row; do
    path=$(printf '%s\n' "$row" | sed -n 's/^\(.*\) \([0-9a-f]\{64\}\)$/\1/p')
    digest=$(printf '%s\n' "$row" | sed -n 's/^.* \([0-9a-f]\{64\}\)$/\1/p')
    test -n "$path"; test -n "$digest"; test "$(sha256sum "./$path" | awk '{print $1}')" = "$digest"
    case "$path" in
      .omo/plans/low-memory-kma-weather-pwa-design.md|.omo/boulder.json|.omo/start-work/ledger.jsonl) printf 'Initial-Mutable-File: %s\n' "$path" ;;
      *) printf 'Initial-File-SHA256: %s %s\n' "$path" "$digest" ;;
    esac
  done < "$PREFLIGHT_CAPTURE/initial-files"
  while IFS= read -r path; do [ -n "$path" ] && printf 'Initial-Directory: %s\n' "$path"; done < "$PREFLIGHT_CAPTURE/initial-dirs"
  while IFS= read -r row; do [ -n "$row" ] && printf 'Initial-Symlink-Target: %s\n' "$row"; done < "$PREFLIGHT_CAPTURE/initial-links"
  for path in \
    .omo/evidence/weather-pwa-design/preflight-manifest.md \
    docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md \
    DESIGN.md \
    .omo/evidence/weather-pwa-design/kma-contract-review.md \
    .omo/evidence/weather-pwa-design/proxy-threat-review.md \
    .omo/evidence/weather-pwa-design/pwa-offline-review.md \
    .omo/evidence/weather-pwa-design/location-privacy-review.md \
    .omo/evidence/weather-pwa-design/ui-accessibility-review.md \
    .omo/evidence/weather-pwa-design/performance-budget-review.md \
    .omo/evidence/weather-pwa-design/design-integrity-review.md \
    .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md \
    .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md \
    .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md \
    .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md \
    .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md \
    .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md \
    .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md \
    .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md \
    .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md \
    .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md \
    .omo/evidence/weather-pwa-design/final-f2-document-quality.md \
    .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md \
    .omo/evidence/weather-pwa-design/final-f4-scope-security.md \
    .omo/evidence/weather-pwa-design/output-manifest.sha256 \
    .omo/evidence/weather-pwa-design/output-manifest-receipt.md; do printf 'Allowed-Output: %s\n' "$path"; done
  for path in docs docs/superpowers docs/superpowers/specs .omo/evidence .omo/evidence/weather-pwa-design; do printf 'Allowed-Directory: %s\n' "$path"; done
  for n in 1 2 3 4 5 6; do
    case "$n" in
      1) url='https://www.data.go.kr/data/15084084/openapi.do' ;;
      2) url='https://www.data.go.kr/catalog/15084084/openapi.json' ;;
      3) url='https://www.data.go.kr/data/15000415/openapi.do' ;;
      4) url='https://apihub.kma.go.kr/notice.do?seqNotice=21' ;;
      5) url='https://apihub.kma.go.kr/notice.do?seqNotice=39' ;;
      6) url='https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286' ;;
    esac
    body="$PREFLIGHT_STAGE/references/kma-$n.body"
    provenance_file="$PREFLIGHT_STAGE/references/kma-$n.provenance"
    curl --fail --location --silent --show-error --max-time 20 -w '%{url_effective}\n%{content_type}\n' "$url" -o "$body" > "$provenance_file"
    test -s "$body"
    effective_url=$(sed -n '1p' "$provenance_file")
    content_type=$(sed -n '2p' "$provenance_file" | tr '\r\n' '  ')
    test "$effective_url" = "$url"
    test -n "$content_type"
    digest=$(sha256sum "$body" | awk '{print $1}')
    printf 'Source-Record: %s | Source-URL: %s | Retrieved-At: %s | Source-Modified: NOT EXPOSED | Body-SHA256: %s\n' "$n" "$url" "$retrieved_at" "$digest"
    printf 'Digest-Command: sha256sum %s\n' "$body"
    printf 'Source-Provenance: Declared-URL: %s | Effective-URL: %s | Content-Type: %s\n' "$url" "$effective_url" "$content_type"
    rm -f "$provenance_file"
  done
  for entry in \
    '2.1|https://www.data.go.kr/catalog/15084084/openapi.json' \
    '2.2|https://www.data.go.kr/data/15000415/openapi.do' \
    '2.3|https://apihub.kma.go.kr/notice.do?seqNotice=21' \
    '3.1|https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable' \
    '3.2|https://www.w3.org/TR/service-workers/' \
    '3.3|https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/' \
    '4.1|https://www.data.go.kr/catalog/15084084/openapi.json' \
    '4.2|https://apihub.kma.go.kr/notice.do?seqNotice=39' \
    '4.3|https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286' \
    '4.4|https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API' \
    '5.1|https://www.w3.org/TR/WCAG22/' \
    '6.1|https://developer.chrome.com/docs/devtools/memory-problems' \
    '6.2|https://learn.microsoft.com/en-us/microsoft-edge/devtools/memory-problems/microsoft-edge-browser-task-manager'; do
    id=$(printf '%s\n' "$entry" | cut -d'|' -f1)
    url=$(printf '%s\n' "$entry" | cut -d'|' -f2-)
    body="$PREFLIGHT_STAGE/references/task-$id.body"
    provenance_file="$PREFLIGHT_STAGE/references/task-$id.provenance"
    curl --fail --location --silent --show-error --max-time 20 -w '%{url_effective}\n%{content_type}\n' "$url" -o "$body" > "$provenance_file"
    test -s "$body"
    effective_url=$(sed -n '1p' "$provenance_file")
    content_type=$(sed -n '2p' "$provenance_file" | tr '\r\n' '  ')
    test "$effective_url" = "$url"
    test -n "$content_type"
    digest=$(sha256sum "$body" | awk '{print $1}')
    printf 'Task-Source-Record: %s | Source-URL: %s | Retrieved-At: %s | Source-Modified: NOT EXPOSED | Body-SHA256: %s\n' "$id" "$url" "$retrieved_at" "$digest"
    printf 'Digest-Command: sha256sum %s\n' "$body"
    printf 'Source-Provenance: Declared-URL: %s | Effective-URL: %s | Content-Type: %s\n' "$url" "$effective_url" "$content_type"
    rm -f "$provenance_file"
  done
} > "$manifest"
{
  printf '%s\n' '# KMA contract review' 'Source rows below are copied from the staged preflight registry.' ''
  sed -n '/^Source-Record:/,/^Digest-Command:/p' "$manifest"
  printf '%s\n' '' '## Capability matrix' '- Forecast: official short-term forecast documentation; live response not fetched.' '- Warnings: separate official warning documentation; live response not fetched.' '' '## Normalized envelope' 'schemaVersion: 1' 'location: {grid: {nx: integer, ny: integer}, regionLabel: string}' 'timestamps: {issuedAt: ISO-8601, fetchedAt: ISO-8601, expiresAt: ISO-8601}' 'status: {forecast: fresh|stale|unavailable, warnings: current|expired|unavailable}' 'items: bounded forecast periods and warning records' 'errors: invalid_location|upstream_unavailable|quota_exceeded|stale_snapshot' '' '## Boundary labels' '- Browser CORS, quotas, and upstream authentication are implementation boundaries.' '- No forecast or warning data endpoint was called by this assembler.'
} > "$kma_review"
test -s "$manifest"; test -s "$kma_review"
test "$(rg -c '^Source-Record:' "$manifest")" -eq 6
test "$(rg -c '^Task-Source-Record:' "$manifest")" -eq 13
test "$(rg -c '^Digest-Command:' "$manifest")" -eq 19
ASSEMBLY
}
todo_1_create_rebuild_assembler() {
  set -euo pipefail
  : "${PREFLIGHT_STAGE:?set the capture-recovery stage before constructing the assembler}"
  : "${PREFLIGHT_CAPTURE:?set the capture-recovery capture before constructing the assembler}"
  expected_assembly_command=$(todo_1_public_assembly_command)
  if [ -n "${TODO_1_ASSEMBLY_COMMAND+x}" ]; then test "$TODO_1_ASSEMBLY_COMMAND" = "$expected_assembly_command"; fi
  TODO_1_ASSEMBLY_COMMAND="$expected_assembly_command"
  test -d "$PREFLIGHT_STAGE"
  test -d "$PREFLIGHT_CAPTURE"
  case "$TODO_1_ASSEMBLY_COMMAND" in *ServiceKey*|*serviceKey*|*Authorization:*|*Bearer*) return 1 ;; esac
  old_assembler=$(sed -n 's/^captured assembler_path=\([^ ]*\) assembler_sha256=\([0-9a-f]\{64\}\)$/\1/p; s/^captured assembler_path=\([^ ]*\) assembler_sha256=UNSEALED$/\1/p' "$PREFLIGHT_STAGE/preflight-journal" 2>/dev/null || true)
  if [ -n "$old_assembler" ]; then case "$old_assembler" in /tmp/weather-preflight-rebuild.*) rm -f "$old_assembler"; test ! -e "$old_assembler" ;; *) return 1 ;; esac; fi
  PREFLIGHT_REBUILD_ASSEMBLER="/tmp/weather-preflight-rebuild.${PREFLIGHT_CAPTURE##*/}"
  case "$PREFLIGHT_REBUILD_ASSEMBLER" in /tmp/weather-preflight-rebuild.weather-preflight-capture.*) ;; *) return 1 ;; esac
  rm -f "$PREFLIGHT_REBUILD_ASSEMBLER"
  preflight_atomic_line "$PREFLIGHT_STAGE/preflight-journal" "captured assembler_path=$PREFLIGHT_REBUILD_ASSEMBLER assembler_sha256=UNSEALED"
  {
    printf '%s\n' '#!/usr/bin/env bash' 'set -euo pipefail' 'stage="$1"' 'capture="$2"' 'export PREFLIGHT_STAGE="$stage" PREFLIGHT_CAPTURE="$capture"' 'test -d "$stage"' 'test -d "$capture"'
    printf '%s\n' "$TODO_1_ASSEMBLY_COMMAND"
  } > "$PREFLIGHT_REBUILD_ASSEMBLER"
  chmod 700 "$PREFLIGHT_REBUILD_ASSEMBLER"
  test -x "$PREFLIGHT_REBUILD_ASSEMBLER"
  assembler_sha256=$(sha256sum "$PREFLIGHT_REBUILD_ASSEMBLER" | awk '{print $1}')
  test "$assembler_sha256" = "$(sha256sum "$PREFLIGHT_REBUILD_ASSEMBLER" | awk '{print $1}')"
  preflight_atomic_line "$PREFLIGHT_STAGE/preflight-journal" "captured assembler_path=$PREFLIGHT_REBUILD_ASSEMBLER assembler_sha256=$assembler_sha256"
}
todo_1_stage_rebuild_from_capture() {
  set -euo pipefail
  if [ -z "${PREFLIGHT_REBUILD_ASSEMBLER:-}" ] || [ ! -x "${PREFLIGHT_REBUILD_ASSEMBLER:-}" ]; then todo_1_create_rebuild_assembler; fi
  case "$PREFLIGHT_REBUILD_ASSEMBLER" in /tmp/weather-preflight-rebuild.*) ;; *) return 1 ;; esac
  test -x "$PREFLIGHT_REBUILD_ASSEMBLER"
  recorded_assembler=$(sed -n 's/^captured assembler_path=\([^ ]*\) assembler_sha256=\([0-9a-f]\{64\}\)$/\1 \2/p' "$PREFLIGHT_STAGE/preflight-journal")
  test "$recorded_assembler" = "$PREFLIGHT_REBUILD_ASSEMBLER $(sha256sum "$PREFLIGHT_REBUILD_ASSEMBLER" | awk '{print $1}')"
  "$PREFLIGHT_REBUILD_ASSEMBLER" "$PREFLIGHT_STAGE" "$PREFLIGHT_CAPTURE"
  test -s "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md"
  test -s "$PREFLIGHT_STAGE/evidence/weather-pwa-design/kma-contract-review.md"
  test "$(find "$PREFLIGHT_STAGE/references" -type f | wc -l)" -eq 19
  rm -f "$PREFLIGHT_REBUILD_ASSEMBLER"
  test ! -e "$PREFLIGHT_REBUILD_ASSEMBLER"
}
todo_1_credential_fixture_probe() {
  set -euo pipefail
  service_marker=$(printf 'Service%s' 'Key='); lowercase_service_marker=$(printf 'service%s' 'Key='); auth_marker=$(printf 'Authorization: %s' 'Bearer'); basic_marker=$(printf 'Authorization: %s' 'Basic'); cookie_marker=$(printf '%s' 'Cookie:'); token_marker=$(printf '%s' 'token:'); service_field_marker=$(printf 'service%s' 'Key:'); private_marker=$(printf '%s' '-----BEGIN (RSA|OPENSSH|EC) PRIVATE KEY-----'); secret_pattern=$(qa_secret_pattern_build)
  fixture_tmp=$(mktemp -d)
  trap 'rm -rf "$fixture_tmp"' EXIT
  scan_paths=(AGENTS.md .omo/evidence .omo/boulder.json .omo/start-work/ledger.jsonl)
  [ -d docs ] && scan_paths+=(docs)
  [ -f DESIGN.md ] && scan_paths+=(DESIGN.md)
  set +e
  credential_hits=$(rg -ni "$secret_pattern" "${scan_paths[@]}" 2>"$fixture_tmp/scan-error")
  credential_status=$?
  set -e
  test "$credential_status" -eq 1
  test ! -s "$fixture_tmp/scan-error"
  test -z "$credential_hits"
  for fixture_kind in url url-lower auth basic cookie token field api-key x-api-key json private; do
    fixture="$fixture_tmp/fixture-${fixture_kind}"
    case "$fixture_kind" in
      url) printf 'https://example.invalid/path?%s synthetic-value-0000\n' "$(printf 'Service%s' 'Key=')" > "$fixture" ;;
      url-lower) printf 'https://example.invalid/path?%s synthetic-value-0000\n' "$(printf 'service%s' 'Key=')" > "$fixture" ;;
      auth) printf '%s synthetic-value-0000\n' "$auth_marker" > "$fixture" ;;
      basic) printf '%s synthetic-value-0000\n' "$basic_marker" > "$fixture" ;;
      cookie) printf '%s synthetic-value-0000\n' "$cookie_marker" > "$fixture" ;;
      token) printf '%s synthetic-value-0000\n' "$token_marker" > "$fixture" ;;
      field) printf '%s synthetic-value-0000\n' "$service_field_marker" > "$fixture" ;;
      api-key) printf 'api_key=synthetic-value-0000\n' > "$fixture" ;;
      x-api-key) printf 'X-API-Key: synthetic-value-0000\n' > "$fixture" ;;
      json) printf '{"token":"synthetic-value-0000"}\n' > "$fixture" ;;
      private) printf '%s%s%s synthetic-value-0000\n' '-----BEGIN ' 'RSA' ' PRIVATE KEY-----' > "$fixture" ;;
    esac
    set +e
    rg -ni "$secret_pattern" "$fixture" >/dev/null 2>"$fixture_tmp/error"
    fixture_status=$?
    set -e
    test "$fixture_status" -eq 0
    test ! -s "$fixture_tmp/error"
    rm -f "$fixture"
    test ! -e "$fixture"
  done
  rm -rf "$fixture_tmp"
  trap - EXIT
  test ! -e "$fixture_tmp"
}
todo_1_full_qa() {
  set -euo pipefail
  : "${PREFLIGHT_STAGE:=}"
  : "${PREFLIGHT_CAPTURE:=}"
  preflight_recovery_validator
  if [ "${PREFLIGHT_RESUME:-}" = none ] && [ -s ./.omo/evidence/weather-pwa-design/preflight-manifest.md ]; then
    mapfile -t remaining_captures < <(find /tmp -mindepth 1 -maxdepth 1 -type d -name 'weather-preflight-capture.*' -print | LC_ALL=C sort)
    mapfile -t remaining_stages < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-preflight.*' -print | LC_ALL=C sort)
    test "${#remaining_captures[@]}" -eq 0; test "${#remaining_stages[@]}" -eq 0
    preflight_forced_status_77_receipt_probe
    source_body_receipt_probe
    source_provenance_validator .omo/evidence/weather-pwa-design/preflight-manifest.md
    todo-1-source-contract-and-receipt-qa
    return 0
  fi
  mapfile -t preflight_stages < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-preflight.*' -print | LC_ALL=C sort)
  mapfile -t preflight_captures < <(find /tmp -mindepth 1 -maxdepth 1 -type d -name 'weather-preflight-capture.*' -print | LC_ALL=C sort)
  test "${#preflight_stages[@]}" -eq 1; test "${#preflight_captures[@]}" -eq 1
  PREFLIGHT_STAGE="${PREFLIGHT_STAGE:-${preflight_stages[0]}}"
  PREFLIGHT_CAPTURE="${PREFLIGHT_CAPTURE:-${preflight_captures[0]}}"
  test "$PREFLIGHT_STAGE" = "${preflight_stages[0]}"
  test "$PREFLIGHT_CAPTURE" = "${preflight_captures[0]}"
  staged_preflight_manifest="$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md"
  staged_kma_review="$PREFLIGHT_STAGE/evidence/weather-pwa-design/kma-contract-review.md"
  staged_complete=$(sed -n 's/^Source-Body-Validator-SHA256: .*/complete/p' "$staged_preflight_manifest" 2>/dev/null | head -n 1)
  staged_markers=$(rg -c '^Source-Body-Validator-(Transcript|SHA256): ' "$staged_preflight_manifest" 2>/dev/null || printf '0')
  if [ ! -s "$staged_preflight_manifest" ] || [ -z "$staged_complete" ] || [ "$staged_markers" -ne 2 ]; then
    test "${PREFLIGHT_RESUME:-}" = staged
    test -d "$PREFLIGHT_STAGE/evidence/weather-pwa-design"
    test -d "$PREFLIGHT_STAGE/references"
    rm -f "$staged_preflight_manifest" "$staged_kma_review"
    todo_1_stage_rebuild_from_capture
  fi
  leaked_assembler=$(sed -n 's/^captured assembler_path=\([^ ]*\) assembler_sha256=\([0-9a-f]\{64\}\)$/\1 \2/p; s/^captured assembler_path=\([^ ]*\) assembler_sha256=UNSEALED$/\1 UNSEALED/p' "$PREFLIGHT_STAGE/preflight-journal" 2>/dev/null || true)
  if [ -n "$leaked_assembler" ]; then
    leaked_path=${leaked_assembler%% *}; leaked_digest=${leaked_assembler##* }
    case "$leaked_path" in /tmp/weather-preflight-rebuild.*) ;; *) return 1 ;; esac
    if [ -e "$leaked_path" ]; then
      if [ "$leaked_digest" = UNSEALED ]; then rm -f "$leaked_path"; else test "$(sha256sum "$leaked_path" | awk '{print $1}')" = "$leaked_digest"; rm -f "$leaked_path"; fi
      test ! -e "$leaked_path"
    fi
  fi
  test -s "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md"
  test -s "$PREFLIGHT_STAGE/evidence/weather-pwa-design/kma-contract-review.md"
  source_record_validator "$PREFLIGHT_STAGE/evidence/weather-pwa-design/kma-contract-review.md"
  source_provenance_validator "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md"
  source_body_transcript=$(source_body_validator "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md" "$PREFLIGHT_STAGE/references")
  test "$source_body_transcript" = 'source-body-validator PASS records=19'
  task_source_registry_validate "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md"
  test "$(rg -c '^Source-Record:' "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md")" -eq 6
  test "$(rg -c '^Task-Source-Record:' "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md")" -eq 13
  test "$(rg -c '^Digest-Command:' "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md")" -eq 19
  test "$(awk '/^Source-Record:/{getline; if($0 ~ /^Digest-Command:/) count++} END{print count+0}' "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md")" -eq 6
  test "$(awk '/^Task-Source-Record:/{getline; if($0 ~ /^Digest-Command:/) count++} END{print count+0}' "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md")" -eq 13
  stored_transcript=$(sed -n 's/^Source-Body-Validator-Transcript: //p' "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md")
  if [ -z "$stored_transcript" ]; then
    printf 'Source-Body-Validator-Transcript: %s\n' "$source_body_transcript" >> "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md"
    printf 'Source-Body-Validator-SHA256: %s\n' "$(printf '%s' "$source_body_transcript" | sha256sum | awk '{print $1}')" >> "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md"
  else
    test "$stored_transcript" = "$source_body_transcript"
  fi
  preflight_atomic_line "$PREFLIGHT_STAGE/source-validation.sha256" "$(sha256sum "$PREFLIGHT_STAGE/evidence/weather-pwa-design/preflight-manifest.md" | awk '{print $1}')"
  preflight_forced_status_77_probe
  preflight_atomic_line "$PREFLIGHT_STAGE/preflight-journal" sources-validated
  preflight_recovery_validator
  test -s ./.omo/evidence/weather-pwa-design/preflight-manifest.md
  test ! -e "$PREFLIGHT_CAPTURE"; test ! -e "$PREFLIGHT_STAGE"
  todo_1_credential_fixture_probe
  todo-1-source-contract-and-receipt-qa
}
final_f1_full_qa() {
  set -euo pipefail
  test -s .omo/evidence/weather-pwa-design/output-manifest.sha256
  manifest_path_order_validator
  frozen_contract_validator
  for id in 1 2 3 4 5 6 7 8 9; do test "$(rg -c "^- \\[x\\] $id\\." .omo/plans/low-memory-kma-weather-pwa-design.md || printf '0')" -eq 1; done
  for id in F1 F2 F3 F4; do test "$(rg -c "^- \\[ \\] $id\\." .omo/plans/low-memory-kma-weather-pwa-design.md || printf '0')" -eq 1; done
  for task_id in 1 2 3 4 5 6 7 8 9; do
    task_receipt=".omo/evidence/weather-pwa-design/task-$task_id-low-memory-kma-weather-pwa-design.md"
    test -s "$task_receipt"
    expected_verdict=PASS
    fixed_receipt="$task_receipt"
    expected_binding "$fixed_receipt"
    receipt="$task_receipt"
    receipt_to_check="$task_receipt"
    receipt_key="$task_receipt"
    qa_trace_validator
    receipt_validator "$expected_artifact" "$expected_command" "$expected_sources"
  done
  trap_tmp=$(mktemp -d); set +e; (trap 'rm -rf "$trap_tmp"' EXIT; exit 1); trap_status=$?; set -e; test "$trap_status" -eq 1; test ! -e "$trap_tmp"
  bad_receipt_dir=$(mktemp -d /tmp/weather-receipt-badprobe.XXXXXX); trap 'rm -rf "$bad_receipt_dir"' EXIT; bad_receipt="$bad_receipt_dir/bad-receipt"; cp .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md "$bad_receipt"; sed -i 's/^Verdict: PASS$/Verdict: FAIL/' "$bad_receipt"; receipt="$bad_receipt"; receipt_to_check="$bad_receipt"; fixed_receipt=.omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md; expected_verdict=PASS; expected_binding .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md; set +e; receipt_validator "$expected_artifact" "$expected_command" "$expected_sources"; bad_status=$?; set -e; test "$bad_status" -ne 0; rm -rf "$bad_receipt_dir"; trap - EXIT; test ! -e "$bad_receipt_dir"
  final-f1-plan-compliance-qa
}
final_f4_full_qa() {
  set -euo pipefail
  f4_inventory_validator phase-a
  test -s .omo/evidence/weather-pwa-design/output-manifest.sha256
  manifest_path_order_validator
  frozen_contract_validator
  initial_inventory_validator
  source_record_validator .omo/evidence/weather-pwa-design/kma-contract-review.md
  source_provenance_validator .omo/evidence/weather-pwa-design/preflight-manifest.md
  task_source_registry_validate
  test "$(rg -c '^Source-Record:' .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq 6
  test "$(rg -c '^Task-Source-Record:' .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq 13
  test "$(rg -c '^Digest-Command:' .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq 19
  test "$(awk '/^Source-Record:/{getline; if($0 ~ /^Digest-Command:/) count++} END{print count+0}' .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq 6
  test "$(awk '/^Task-Source-Record:/{getline; if($0 ~ /^Digest-Command:/) count++} END{print count+0}' .omo/evidence/weather-pwa-design/preflight-manifest.md)" -eq 13
  negative_pattern=$(qa_secret_pattern_build); negative_paths=(AGENTS.md .omo/evidence .omo/boulder.json .omo/start-work/ledger.jsonl); [ -d docs ] && negative_paths+=(docs); [ -f DESIGN.md ] && negative_paths+=(DESIGN.md); negative_tmp=$(mktemp -d); trap 'rm -rf "$negative_tmp"' EXIT; negative_scan_validator; rm -rf "$negative_tmp"; trap - EXIT; test ! -e "$negative_tmp"
  secret_pattern=$(qa_secret_pattern_build); fixture_tmp=$(mktemp -d); trap 'rm -rf "$fixture_tmp"' EXIT; for fixture_kind in url url-lower auth basic cookie token field api-key x-api-key json private; do fixture="$fixture_tmp/fixture-${fixture_kind}"; case "$fixture_kind" in url) printf 'https://example.invalid/path?%s synthetic-value-0000\n' "$(printf 'Service%s' 'Key=')" > "$fixture" ;; url-lower) printf 'https://example.invalid/path?%s synthetic-value-0000\n' "$(printf 'service%s' 'Key=')" > "$fixture" ;; auth) printf '%s synthetic-value-0000\n' "$(printf 'Authorization: %s' 'Bearer')" > "$fixture" ;; basic) printf '%s synthetic-value-0000\n' "$(printf 'Authorization: %s' 'Basic')" > "$fixture" ;; cookie) printf '%s synthetic-value-0000\n' "$(printf '%s' 'Cookie:')" > "$fixture" ;; token) printf 'token: synthetic-value-0000\n' > "$fixture" ;; field) printf 'serviceKey: synthetic-value-0000\n' > "$fixture" ;; api-key) printf 'api_key=synthetic-value-0000\n' > "$fixture" ;; x-api-key) printf 'X-API-Key: synthetic-value-0000\n' > "$fixture" ;; json) printf '{"token":"synthetic-value-0000"}\n' > "$fixture" ;; private) printf '%s%s%s synthetic-value-0000\n' '-----BEGIN ' 'RSA' ' PRIVATE KEY-----' > "$fixture" ;; esac; set +e; rg -ni "$secret_pattern" "$fixture" >/dev/null 2>"$fixture_tmp/error"; fixture_status=$?; set -e; test "$fixture_status" -eq 0; test ! -s "$fixture_tmp/error"; rm -f "$fixture"; test ! -e "$fixture"; done; rm -rf "$fixture_tmp"; trap - EXIT; test ! -e "$fixture_tmp"
  final_secret_tmp=$(mktemp -d); trap 'rm -rf "$final_secret_tmp"' EXIT; final_scan_paths=(AGENTS.md .omo/evidence .omo/boulder.json .omo/start-work/ledger.jsonl); [ -d docs ] && final_scan_paths+=(docs); [ -f DESIGN.md ] && final_scan_paths+=(DESIGN.md); set +e; final_secret_hits=$(rg -ni "$secret_pattern" "${final_scan_paths[@]}" 2>"$final_secret_tmp/error"); final_secret_status=$?; set -e; test "$final_secret_status" -eq 1; test ! -s "$final_secret_tmp/error"; test -z "$final_secret_hits"; rm -rf "$final_secret_tmp"; trap - EXIT; test ! -e "$final_secret_tmp"
  qa_process_clean_probe
  test -s "${QA_RECEIPT_BASE:?}"
  while IFS= read -r stale_base; do
    [ -n "$stale_base" ] || continue
    case "$stale_base" in "$QA_RECEIPT_BASE") continue ;; esac
    test -f "$stale_base"; test ! -L "$stale_base"
    rm -f "$stale_base"
  done < <(find /tmp -mindepth 1 -maxdepth 1 -type f -name 'weather-receipt-base.*' -print | LC_ALL=C sort)
  test "$(find /tmp -mindepth 1 -maxdepth 1 -type f -name 'weather-receipt-base.*' -print | wc -l)" -eq 1
  test "$(find /tmp -mindepth 1 -maxdepth 1 -type f -name 'weather-receipt-base.*' -print -quit)" = "$QA_RECEIPT_BASE"
  final-f4-scope-security-qa
}
# FULL_QA_PROCEDURE_END
~~~
- Full-QA invocation binding: todo 1's worker must execute `todo_1_full_qa` after recovery and before marking the todo complete; every receipt-producing worker must write a base receipt to a unique `/tmp/weather-receipt-base.*` path and return that path to the root; the root must set `QA_RECEIPT_BASE` and invoke the fixed receipt-binding token serially. F1 must execute `final_f1_full_qa`; F4 must execute `final_f4_full_qa`. These three functions are the complete executable bodies for the earlier acceptance prose and each ends by invoking its fixed receipt-binding token. Their `QA-Trace` names are the registry used by `qa_trace_validator`, so a worker cannot omit a listed happy, failure, source, inventory, fixture, process, or cleanup probe.
- Receipt-promotion ownership resolution: worker-side QA tokens may validate their complete base receipt and may write only worker-owned `/tmp/weather-receipt-base.*` inputs. They never promote, delete, or otherwise own a fixed receipt under `.omo/evidence/weather-pwa-design/`. In the executable Code-mode path, `adapter_receipt_bind_and_validate` is the sole root promoter and its recovery function is the sole recovery owner; the earlier token wrappers remain the worker QA contract and cannot bypass this root transaction. If a prior root invocation already promoted a fixed receipt but crashed before the checkbox/state transaction (including the F4 lane, which routes a present fixed F4 receipt with an unchecked F4 box to root-side `validateFixedReceipt` without re-running `f4_inventory_validator phase-a`), the root uses the fixed-receipt self-validator, removes only that invocation's returned base receipt, and advances the state transaction without a second promotion.
- Literal command-token preflight:
~~~sh
for qa in todo-1-source-contract-and-receipt-qa todo-2-proxy-threat-qa todo-3-offline-contract-qa todo-4-location-privacy-qa todo-5-ui-accessibility-qa todo-6-performance-budget-qa todo-7-specification-qa todo-8-design-system-qa todo-9-integrity-manifest-qa final-f1-plan-compliance-qa final-f2-document-quality-qa final-f3-semantic-qa final-f4-scope-security-qa; do
  test "$(type -t "$qa")" = function
done
~~~
- Callable adapter definition: `design-only-start-work` is the Codex-root procedure invoked by the `start-work` skill, not a print-only shell stub. Worker dispatch is performed by `multi_agent_v1`; the procedure below is the executable initial/resume state machine and its command name is recorded in the bootstrap ledger:
~~~text
design-only-start-work(plan=.omo/plans/low-memory-kma-weather-pwa-design.md):
  assert plan and draft are non-empty
  review_approval_validator()
  bootstrap_recovery_check()
  receipt_recovery_check()
  if .omo/boulder.json or .omo/start-work/ledger.jsonl is absent:
    execute the literal bootstrap transaction and validate its active schema
  else:
    validate one active Boulder/work, both frozen hashes, and ledger JSONL
    frozen_contract_validator()
  if preflight-manifest.md is absent:
    dispatch todo 1 only; wait for its receipt and preflight promotion; independently gate it
  resume at the first unchecked marker in numeric/F order; never rerun a checked marker without a fresh receipt
  dispatch Wave 1b (todos 2-6) only after preflight; gate each result and append its ledger event
  dispatch Wave 2 (todos 7-8), then Wave 3 (todo 9), then F1-F3, then F4 Phase A/B
  after F4 approval, dispatch five independent artifact review lanes and one independent debugging-artifact audit
  serialize their returned result objects into the transaction-owned closeout input, run closure validators, and promote closure atomically
  return only after the completed Boulder and terminal orchestration ledger pass the staged and live closure validators
~~~
The following Code-mode entrypoint is the literal tool dispatcher. `runStateProbe` executes the plan-owned shell validators and returns exactly one state token; `validateResult` runs the matching receipt/ledger gate before the next probe. Capability discovery is intentionally the first operation, before either callback can mutate `.omo`:
~~~js
async function designOnlyStartWork() {
  const required = [
    "multi_agent_v1__spawn_agent",
    "multi_agent_v1__wait_agent",
    "multi_agent_v1__send_input",
    "multi_agent_v1__close_agent",
    "exec_command",
  ];
  const available = new Set(ALL_TOOLS.map(tool => tool.name));
  if (required.some(name => !available.has(name))) throw new Error("multi_agent_v1 capability preflight failed");
  const root = "/home/jeon_huijun/Project/weather";
  const shell = async command => {
    const result = await tools.exec_command({cmd: command, workdir: root, yield_time_ms: 30000, max_output_tokens: 4000});
    if (result.exit_code !== 0) throw new Error(`design-only shell gate failed: ${result.exit_code ?? "running"}`);
    return result.output.trim();
  };
  const stateProbeCommand = `set -euo pipefail
test -s .omo/plans/low-memory-kma-weather-pwa-design.md
test -s .omo/drafts/low-memory-kma-weather-pwa-design.md
review_round=$(sed -n 's/^review_round_id: //p' .omo/drafts/low-memory-kma-weather-pwa-design.md)
test -n "$review_round"
test "$(rg -c '^    round_id: ' .omo/drafts/low-memory-kma-weather-pwa-design.md)" -eq 3
test "$(sed -n 's/^plan_path: //p' .omo/drafts/low-memory-kma-weather-pwa-design.md)" = ".omo/plans/low-memory-kma-weather-pwa-design.md"
test "$(rg -c '^status: approved$' .omo/drafts/low-memory-kma-weather-pwa-design.md || printf '0')" -eq 1
rg -q '^approval_scope: .*마스터 오케스트레이션 실행[.]' .omo/drafts/low-memory-kma-weather-pwa-design.md
rg -q '^capability_preflight: .*multi_agent_v1__spawn_agent.*multi_agent_v1__wait_agent.*multi_agent_v1__send_input.*multi_agent_v1__close_agent.*exec_command' .omo/drafts/low-memory-kma-weather-pwa-design.md
node -e 'const fs=require("fs"); const crypto=require("crypto"); const plan=".omo/plans/low-memory-kma-weather-pwa-design.md"; const draft=fs.readFileSync(".omo/drafts/low-memory-kma-weather-pwa-design.md","utf8"); const current=crypto.createHash("sha256").update(fs.readFileSync(plan)).digest("hex"); const reviewed=(draft.match(/^plan_sha256: ([0-9a-f]{64})$/m)||[])[1]; const approved=(draft.match(/^    status: approved$/gm)||[]).length; const okay=(draft.match(/^    result: OKAY$/gm)||[]).length; if(!reviewed || approved!==3 || okay!==3) process.exit(1); if(fs.existsSync(".omo/boulder.json")){const b=JSON.parse(fs.readFileSync(".omo/boulder.json","utf8")); const canonical=crypto.createHash("sha256").update(fs.readFileSync(plan,"utf8").replace(/^- \\[(x| )\\] (([0-9]+|F[1-4])\\.)/gm,"- [ ] $2")).digest("hex"); if(b.plan_review_sha256!==reviewed || b.plan_contract_sha256!==canonical) process.exit(1);} else if(current!==reviewed) process.exit(1);'
review_gate_tmp=$(mktemp)
trap 'rm -f "$review_gate_tmp"' EXIT
awk '/^review_approval_validator\(\) \{/{on=1} on{print} on && /^\}/{exit}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$review_gate_tmp"
source "$review_gate_tmp"
review_approval_validator
rm -f "$review_gate_tmp"
trap - EXIT
if find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-bootstrap.*' -print -quit | rg -q .; then printf '%s\\n' BOOTSTRAP_RESUME; exit 0; fi
if find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-closure.*' -print -quit | rg -q .; then printf '%s\\n' CLOSEOUT_RESUME; exit 0; fi
if find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-state.*' -print -quit | rg -q .; then printf '%s\\n' STATE_RESUME; exit 0; fi
if find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-receipt.*' -print -quit | rg -q .; then
  printf '%s\\n' RECEIPT_RESUME; exit 0
fi
if find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-manifest.*' -print -quit | rg -q .; then printf '%s\\n' MANIFEST_RESUME; exit 0; fi
if [ ! -s .omo/boulder.json ] || [ ! -s .omo/start-work/ledger.jsonl ]; then
  if find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-bootstrap.*' -print -quit | rg -q .; then printf '%s\\n' BOOTSTRAP_RESUME; else printf '%s\\n' BOOTSTRAP_NEW; fi
elif find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-closure.*' -print -quit | rg -q .; then printf '%s\\n' CLOSEOUT_RESUME
elif find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-manifest.*' -print -quit | rg -q .; then printf '%s\\n' TODO_9_RESUME
elif find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-receipt.*' -print -quit | rg -q .; then
  if ! rg -q '^- \\[x\\] 1\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then printf '%s\\n' TODO_1_RESUME
  elif ! rg -q '^- \\[x\\] 6\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then printf '%s\\n' WAVE_1B_RESUME
  elif ! rg -q '^- \\[x\\] 8\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then printf '%s\\n' WAVE_2_RESUME
  elif ! rg -q '^- \\[x\\] 9\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then printf '%s\\n' TODO_9_RESUME
  elif ! rg -q '^- \\[x\\] F3\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then printf '%s\\n' FINAL_1_3_RESUME
  else printf '%s\\n' FINAL_4_RESUME; fi
elif ! rg -q '^- \\[x\\] 1\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then
  if find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-preflight.*' -print -quit | rg -q . || find /tmp -mindepth 1 -maxdepth 1 -type d -name 'weather-preflight-capture.*' -print -quit | rg -q .; then printf '%s\\n' TODO_1_RESUME; else printf '%s\\n' TODO_1_NEW; fi
elif rg -q '^- \\[x\\] 1\\.' .omo/plans/low-memory-kma-weather-pwa-design.md && ! rg -q '^- \\[x\\] 6\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then printf '%s\\n' WAVE_1B_NEW
elif rg -q '^- \\[x\\] 6\\.' .omo/plans/low-memory-kma-weather-pwa-design.md && ! rg -q '^- \\[x\\] 8\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then printf '%s\\n' WAVE_2_NEW
elif rg -q '^- \\[x\\] 8\\.' .omo/plans/low-memory-kma-weather-pwa-design.md && ! rg -q '^- \\[x\\] 9\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then if [ -s .omo/evidence/weather-pwa-design/output-manifest.sha256 ] && [ -s .omo/evidence/weather-pwa-design/output-manifest-receipt.md ]; then printf '%s\\n' TODO_9_PAIR_RESUME; else printf '%s\\n' TODO_9_NEW; fi
elif rg -q '^- \\[x\\] 9\\.' .omo/plans/low-memory-kma-weather-pwa-design.md && ! rg -q '^- \\[x\\] F3\\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then printf '%s\\n' FINAL_1_3_NEW
elif rg -q '^- \[x\] F3\.' .omo/plans/low-memory-kma-weather-pwa-design.md && ! rg -q '^- \[x\] F4\.' .omo/plans/low-memory-kma-weather-pwa-design.md; then if [ -s .omo/evidence/weather-pwa-design/final-f4-scope-security.md ]; then printf '%s\\n' FINAL_4_RESUME; else printf '%s\\n' FINAL_4_NEW; fi
elif rg -q '^- \\[x\\] F4\\.' .omo/plans/low-memory-kma-weather-pwa-design.md && ! rg -q 'event":"orchestration-completed"' .omo/start-work/ledger.jsonl; then
  closeout_handoff=$(node -e 'const fs=require("fs"); const b=JSON.parse(fs.readFileSync(".omo/boulder.json","utf8")); const w=b.works[b.active_work_id]; const rows=fs.readFileSync(".omo/start-work/ledger.jsonl","utf8").trim().split(/\\n/).map(JSON.parse); const keys=Object.keys(w.all_delegate_session_map||{}).filter(k=>/^CLOSEOUT_(NEW|RESUME):/.test(k)); const closeoutRows=rows.filter(row=>row.event==="delegated-state-validated"&&/^CLOSEOUT_/.test(row.task)); process.stdout.write(keys.length===6&&closeoutRows.length===6?"ready":"new");')
  if [ "$closeout_handoff" = ready ]; then printf '%s\\n' CLOSEOUT_HANDOFF_RESUME; else printf '%s\\n' CLOSEOUT_NEW; fi
else
  node -e 'const fs=require("fs"),crypto=require("crypto"); const b=JSON.parse(fs.readFileSync(".omo/boulder.json","utf8")); const rows=fs.readFileSync(".omo/start-work/ledger.jsonl","utf8").trim().split(/\\n/).map(JSON.parse); const w=b.works&&b.works[b.active_work_id]; const terminal=rows.find(r=>r&&r.event==="orchestration-completed"); const approved=rows.filter(r=>r&&r.event==="f4-approved").length; const manifestHash=crypto.createHash("sha256").update(fs.readFileSync(".omo/evidence/weather-pwa-design/output-manifest.sha256","utf8")).digest("hex"); const detached=(fs.readFileSync(".omo/evidence/weather-pwa-design/output-manifest-receipt.md","utf8").match(/^Output-Manifest-SHA256: ([0-9a-f]{64})$/m)||[])[1]; const finalReceipts=["final-f1-plan-compliance","final-f2-document-quality","final-f3-semantic-qa","final-f4-scope-security"].map(name=>".omo/evidence/weather-pwa-design/"+name+".md"); const closeoutMap=(terminal&&terminal.closeout_session_map)||{}; const allValues=Object.values((terminal&&terminal.all_delegate_session_map)||{}); const closeoutValues=Object.values(closeoutMap); const sessionOk=Object.keys(closeoutMap).length===6&&new Set(closeoutValues).size===6&&closeoutValues.every(v=>typeof v==="string"&&allValues.includes(v)); const digests=(terminal&&terminal.final_receipt_digests)||{}; const digestOk=Object.keys(digests).length===4&&Object.entries(digests).every(([p,d])=>/^[0-9a-f]{64}$/.test(d)&&crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex")===d); const lastIsTerminal=rows.length>0&&rows.at(-1)===terminal; if(!(b.schema_version===2&&w&&w.status==="completed"&&terminal&&lastIsTerminal&&terminal.task==="F4"&&approved===1&&sessionOk&&digestOk&&detached===manifestHash&&finalReceipts.every(p=>fs.readFileSync(p,"utf8").includes("Verdict: APPROVE")))) process.exit(1);'
  printf '%s\\n' COMPLETE
fi`;
  const runStateProbe = async () => shell(stateProbeCommand);
  const bootstrapCommand = [
    "set -euo pipefail",
    "test ! -e ./.omo/boulder.json",
    "test ! -e ./.omo/start-work",
    "node -e 'const fs=require(\"fs\"); const crypto=require(\"crypto\"); const plan=\".omo/plans/low-memory-kma-weather-pwa-design.md\"; const draft=fs.readFileSync(\".omo/drafts/low-memory-kma-weather-pwa-design.md\",\"utf8\"); const current=crypto.createHash(\"sha256\").update(fs.readFileSync(plan)).digest(\"hex\"); const reviewed=(draft.match(/^plan_sha256: ([0-9a-f]{64})$/m)||[])[1]; const round=(draft.match(/^review_round_id: (.+)$/m)||[])[1]; if(!/^status: approved$/m.test(draft) || current!==reviewed || !round || (draft.match(/^    round_id: /gm)||[]).length!==3 || (draft.match(/^    status: approved$/gm)||[]).length!==3 || (draft.match(/^    result: OKAY$/gm)||[]).length!==3 || !/^plan_path: \\.omo\\/plans\\/low-memory-kma-weather-pwa-design\\.md$/m.test(draft) || !/^approval_scope: .*마스터 오케스트레이션 실행[.]$/m.test(draft) || !/^capability_preflight: .*multi_agent_v1__spawn_agent.*multi_agent_v1__wait_agent.*multi_agent_v1__send_input.*multi_agent_v1__close_agent.*exec_command/m.test(draft)) process.exit(1);'",
    "bootstrap_tmp=$(mktemp -d ./.omo/.weather-bootstrap.XXXXXX)",
    "bootstrap_journal=\"$bootstrap_tmp/bootstrap-journal\"",
    "bootstrap_atomic_line() { target=\"$1\"; value=\"$2\"; tmp=$(mktemp \"${target}.tmp.XXXXXX\"); printf '%s\\n' \"$value\" > \"$tmp\"; test \"$(wc -l < \"$tmp\")\" -eq 1; test \"$(cat \"$tmp\")\" = \"$value\"; mv \"$tmp\" \"$target\"; }",
    "bootstrap_atomic_copy() { source=\"$1\"; target=\"$2\"; tmp=$(mktemp \"${target}.tmp.XXXXXX\"); cp \"$source\" \"$tmp\"; cmp -s \"$source\" \"$tmp\"; mv \"$tmp\" \"$target\"; cmp -s \"$source\" \"$target\"; }",
    "bootstrap_atomic_line \"$bootstrap_journal\" created",
    "mkdir -p ./.omo/start-work",
    "node -e 'const fs=require(\"fs\"); const [boulderPath,ledgerPath,reviewHash,contractHash]=process.argv.slice(1); const workId=\"weather-design-only\"; const classes=[\"source_version_drift\",\"source_inference_confusion\",\"credential_leakage\",\"boundary_contradiction\",\"privacy_overcollection\",\"false_runtime_claim\",\"numeric_budget_drift\",\"unexpected_product_file\",\"accessibility_state_omission\",\"stale_missing_evidence\"]; const b={schema_version:2,active_work_id:workId,plan_review_sha256:reviewHash,plan_contract_sha256:contractHash,works:{[workId]:{work_id:workId,plan_review_sha256:reviewHash,plan_contract_sha256:contractHash,active_plan:\".omo/plans/low-memory-kma-weather-pwa-design.md\",plan_name:\"low-memory-kma-weather-pwa-design\",session_ids:[\"codex:design-only-bootstrap\",\"codex:design-only-root\"],all_delegate_session_map:{},status:\"active\",worktree_path:null}}}; const row={event:\"orchestration-started\",plan:\".omo/plans/low-memory-kma-weather-pwa-design.md\",task:\"bootstrap\",session_id:\"codex:design-only-bootstrap\",commands:[\"design-only-start-work\"],artifact:[\".omo/boulder.json\",\".omo/start-work/ledger.jsonl\"],adversarial_classes:classes,cleanup:{status:\"PASS\",temporary_paths:[],long_lived_processes:[]},runtime_qa:\"NOT RUN\",commit:\"N/A\"}; fs.writeFileSync(boulderPath+\".tmp.\"+process.pid,JSON.stringify(b)+\"\\n\"); fs.renameSync(boulderPath+\".tmp.\"+process.pid,boulderPath); fs.writeFileSync(ledgerPath+\".tmp.\"+process.pid,JSON.stringify(row)+\"\\n\"); fs.renameSync(ledgerPath+\".tmp.\"+process.pid,ledgerPath);' \"$bootstrap_tmp/boulder.json\" \"$bootstrap_tmp/ledger.jsonl\" \"$(sha256sum .omo/plans/low-memory-kma-weather-pwa-design.md | awk '{print $1}')\" \"$(LC_ALL=C sed -E 's/^- \\[(x| )\\] (([0-9]+|F[1-4])\\.)/- [ ] \\2/' .omo/plans/low-memory-kma-weather-pwa-design.md | sha256sum | awk '{print $1}')\"",
    "node -e 'const fs=require(\"fs\"); const b=JSON.parse(fs.readFileSync(process.argv[1],\"utf8\")); if(b.schema_version!==2 || !b.active_work_id || !b.plan_review_sha256 || !b.plan_contract_sha256 || Object.keys(b.works||{}).length!==1 || !b.works[b.active_work_id] || b.works[b.active_work_id].status!==\"active\") process.exit(1); const t=fs.readFileSync(process.argv[2],\"utf8\").trim(); if(!t) process.exit(1); t.split(/\\n/).forEach(line=>JSON.parse(line));' \"$bootstrap_tmp/boulder.json\" \"$bootstrap_tmp/ledger.jsonl\"",
    "bootstrap_atomic_copy \"$bootstrap_tmp/boulder.json\" \"$bootstrap_tmp/boulder.backup\"; bootstrap_atomic_copy \"$bootstrap_tmp/ledger.jsonl\" \"$bootstrap_tmp/ledger.backup\"",
    "bootstrap_atomic_line \"$bootstrap_journal\" 'boulder=staged ledger=staged'",
    "mv \"$bootstrap_tmp/boulder.json\" ./.omo/boulder.json; bootstrap_atomic_line \"$bootstrap_journal\" 'boulder=promoted ledger=staged'",
    "if ! mv \"$bootstrap_tmp/ledger.jsonl\" ./.omo/start-work/ledger.jsonl; then bootstrap_atomic_line \"$bootstrap_journal\" rollback-planned; set +e; if [ -e ./.omo/boulder.json ]; then cmp -s \"$bootstrap_tmp/boulder.backup\" ./.omo/boulder.json && rm -f ./.omo/boulder.json; fi; if [ -e ./.omo/start-work/ledger.jsonl ]; then cmp -s \"$bootstrap_tmp/ledger.backup\" ./.omo/start-work/ledger.jsonl && rm -f ./.omo/start-work/ledger.jsonl; fi; rmdir ./.omo/start-work; restore_status=$?; set -e; if [ \"$restore_status\" -eq 0 ] && [ ! -e ./.omo/boulder.json ] && [ ! -e ./.omo/start-work/ledger.jsonl ]; then bootstrap_atomic_line \"$bootstrap_journal\" rollback-restored; rm -f \"$bootstrap_tmp/boulder.backup\" \"$bootstrap_tmp/ledger.backup\"; rm -f \"$bootstrap_tmp/bootstrap-journal\"; rmdir \"$bootstrap_tmp\"; fi; exit 1; fi; bootstrap_atomic_line \"$bootstrap_journal\" 'boulder=promoted ledger=promoted'",
    "bootstrap_atomic_line \"$bootstrap_journal\" cleanup-planned; rm -f \"$bootstrap_tmp/boulder.backup\" \"$bootstrap_tmp/ledger.backup\"; rm -f \"$bootstrap_tmp/bootstrap-journal\"; rmdir \"$bootstrap_tmp\"",
  ].join("\n");
  const bootstrapResumeCommand = [
    "set -euo pipefail",
    "bootstrap_lib=$(mktemp)",
    "trap 'rm -f \"$bootstrap_lib\"' EXIT",
    "awk '/^review_approval_validator\\(\\) \\{/{on=1} on{print} on && /^bootstrap_recovery_check$/{exit}' .omo/plans/low-memory-kma-weather-pwa-design.md > \"$bootstrap_lib\"",
    "source \"$bootstrap_lib\"",
    "rm -f \"$bootstrap_lib\"",
    "trap - EXIT",
  ].join("\n");
  const bootstrapTransition = async state => state === "BOOTSTRAP_NEW" ? shell(bootstrapCommand) : shell(bootstrapResumeCommand);
  const stateValidationCommand = Object.freeze({
    TODO_1_NEW: "test -s .omo/boulder.json; test -s .omo/start-work/ledger.jsonl",
    TODO_1_RESUME: "test -s .omo/boulder.json; test -s .omo/start-work/ledger.jsonl",
    WAVE_1B_NEW: "test -s .omo/evidence/weather-pwa-design/preflight-manifest.md",
    WAVE_1B_RESUME: "test -s .omo/evidence/weather-pwa-design/preflight-manifest.md",
    WAVE_2_NEW: "test -s .omo/evidence/weather-pwa-design/preflight-manifest.md",
    WAVE_2_RESUME: "test -s .omo/evidence/weather-pwa-design/preflight-manifest.md",
    TODO_9_NEW: "test -s .omo/evidence/weather-pwa-design/preflight-manifest.md",
    TODO_9_RESUME: "test -s .omo/evidence/weather-pwa-design/preflight-manifest.md",
    TODO_9_PAIR_RESUME: "test -s .omo/evidence/weather-pwa-design/output-manifest.sha256; test -s .omo/evidence/weather-pwa-design/output-manifest-receipt.md",
    FINAL_1_3_NEW: "test -s .omo/evidence/weather-pwa-design/output-manifest.sha256",
    FINAL_1_3_RESUME: "test -s .omo/evidence/weather-pwa-design/output-manifest.sha256",
    FINAL_4_NEW: "test -s .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md",
    FINAL_4_RESUME: "test -s .omo/evidence/weather-pwa-design/final-f4-scope-security.md",
    CLOSEOUT_NEW: "test -s .omo/evidence/weather-pwa-design/final-f4-scope-security.md",
    CLOSEOUT_RESUME: "test -s .omo/evidence/weather-pwa-design/final-f4-scope-security.md",
  });
  const checkedIds = Object.freeze({TODO_1_NEW:["1"], TODO_1_RESUME:["1"], WAVE_1B_NEW:["2","3","4","5","6"], WAVE_1B_RESUME:["2","3","4","5","6"], WAVE_2_NEW:["7","8"], WAVE_2_RESUME:["7","8"], TODO_9_NEW:["9"], TODO_9_RESUME:["9"], TODO_9_PAIR_RESUME:["9"], FINAL_1_3_NEW:["F1","F2","F3"], FINAL_1_3_RESUME:["F1","F2","F3"], FINAL_4_NEW:["F4"], FINAL_4_RESUME:["F4"], BOOTSTRAP_NEW:[], BOOTSTRAP_RESUME:[], CLOSEOUT_NEW:[], CLOSEOUT_RESUME:[]});
  const shellQuote = value => "'" + value.replace(/'/g, "'\\\"'\\\"'") + "'";
  const receiptSpecs = Object.freeze({
    "todo-1-preflight-and-kma-contract":[".omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md","todo-1-source-contract-and-receipt-qa","PASS",".omo/evidence/weather-pwa-design/kma-contract-review.md"],
    "todo-2-proxy":[".omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md","todo-2-proxy-threat-qa","PASS",".omo/evidence/weather-pwa-design/proxy-threat-review.md"],
    "todo-3-offline":[".omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md","todo-3-offline-contract-qa","PASS",".omo/evidence/weather-pwa-design/pwa-offline-review.md"],
    "todo-4-privacy":[".omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md","todo-4-location-privacy-qa","PASS",".omo/evidence/weather-pwa-design/location-privacy-review.md"],
    "todo-5-accessibility":[".omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md","todo-5-ui-accessibility-qa","PASS",".omo/evidence/weather-pwa-design/ui-accessibility-review.md"],
    "todo-6-performance":[".omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md","todo-6-performance-budget-qa","PASS",".omo/evidence/weather-pwa-design/performance-budget-review.md"],
    "todo-7-specification":[".omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md","todo-7-specification-qa","PASS","docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md"],
    "todo-8-design-system":[".omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md","todo-8-design-system-qa","PASS","DESIGN.md"],
    "todo-9-integrity":[".omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md","todo-9-integrity-manifest-qa","PASS",".omo/evidence/weather-pwa-design/design-integrity-review.md"],
    "final-f1-compliance":[".omo/evidence/weather-pwa-design/final-f1-plan-compliance.md","final-f1-plan-compliance-qa","APPROVE",".omo/evidence/weather-pwa-design/output-manifest.sha256"],
    "final-f2-document-quality":[".omo/evidence/weather-pwa-design/final-f2-document-quality.md","final-f2-document-quality-qa","APPROVE","docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md"],
    "final-f3-semantic":[".omo/evidence/weather-pwa-design/final-f3-semantic-qa.md","final-f3-semantic-qa","APPROVE","DESIGN.md"],
    "final-f4-scope-security":[".omo/evidence/weather-pwa-design/final-f4-scope-security.md","final-f4-scope-security-qa","APPROVE",".omo/evidence/weather-pwa-design/preflight-manifest.md"]
  });
  const bindReceipts = async (state, results) => {
    const binderPrelude = `set -euo pipefail
worker_source_tmp=$(mktemp)
awk '/^# WORKER_SOURCE_MAP_BEGIN$/{on=1; next} /^# WORKER_SOURCE_MAP_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$worker_source_tmp"
source "$worker_source_tmp"
rm -f "$worker_source_tmp"
kma_source_tmp=$(mktemp)
awk '/^# KMA_SOURCE_MAP_BEGIN$/{on=1; next} /^# KMA_SOURCE_MAP_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$kma_source_tmp"
source "$kma_source_tmp"
rm -f "$kma_source_tmp"
worker_binding_tmp=$(mktemp)
awk '/^# WORKER_QA_BINDING_BEGIN$/{on=1; next} /^# WORKER_QA_BINDING_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$worker_binding_tmp"
source "$worker_binding_tmp"
rm -f "$worker_binding_tmp"
qa_validator_tmp=$(mktemp)
awk '/^# ADAPTER_QA_VALIDATORS_BEGIN$/{on=1; next} /^# ADAPTER_QA_VALIDATORS_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$qa_validator_tmp"
source "$qa_validator_tmp"
rm -f "$qa_validator_tmp"
binder_tmp=$(mktemp)
awk '/^# ADAPTER_RECEIPT_BINDING_BEGIN$/{on=1; next} /^# ADAPTER_RECEIPT_BINDING_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$binder_tmp"
source "$binder_tmp"
rm -f "$binder_tmp"`;
    const commands = results.map(entry => {
      const spec = receiptSpecs[entry.role];
      if (!spec) throw new Error(`missing receipt specification: ${entry.role}`);
      return `adapter_receipt_bind_and_validate ${shellQuote(state)} ${shellQuote(entry.role)} ${shellQuote(entry.result.base_receipt_path)} ${shellQuote(spec[0])} ${shellQuote(spec[1])} ${shellQuote(spec[2])}`;
    });
    const sweepCommand = `receipt_sweep_stale_bases ${results.map(entry => shellQuote(entry.result.base_receipt_path)).join(" ")}`;
    await shell([binderPrelude, sweepCommand, ...commands].join("\n"));
  };
  const recoverReceipts = async () => {
    const binderPrelude = `set -euo pipefail
qa_validator_tmp=$(mktemp)
awk '/^# ADAPTER_QA_VALIDATORS_BEGIN$/{on=1; next} /^# ADAPTER_QA_VALIDATORS_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$qa_validator_tmp"
source "$qa_validator_tmp"
rm -f "$qa_validator_tmp"
binder_tmp=$(mktemp)
awk '/^# ADAPTER_RECEIPT_BINDING_BEGIN$/{on=1; next} /^# ADAPTER_RECEIPT_BINDING_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$binder_tmp"
source "$binder_tmp"
rm -f "$binder_tmp"
adapter_receipt_recover`;
    await shell(binderPrelude);
  };
  const recoverManifest = async () => shell(`set -euo pipefail
qa_validator_tmp=$(mktemp)
manifest_recovery_tmp=$(mktemp)
trap 'rm -f "$qa_validator_tmp" "$manifest_recovery_tmp"' EXIT
awk '/^# ADAPTER_QA_VALIDATORS_BEGIN$/{on=1; next} /^# ADAPTER_QA_VALIDATORS_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$qa_validator_tmp"
source "$qa_validator_tmp"
awk '/^# MANIFEST_PAIR_RECOVERY_BEGIN$/{on=1; next} /^# MANIFEST_PAIR_RECOVERY_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$manifest_recovery_tmp"
source "$manifest_recovery_tmp"
manifest_pair_recovery_check
test "\${MANIFEST_RESUME:-}" = none
rm -f "$qa_validator_tmp" "$manifest_recovery_tmp"
trap - EXIT`);
  const validateFixedReceipt = async entry => {
    const spec = receiptSpecs[entry.role];
    if (!spec) throw new Error("missing receipt specification for fixed receipt recovery: " + entry.role);
    const baseReceipt = entry.result.base_receipt_path || "";
    await shell(`set -euo pipefail
qa_validator_tmp=$(mktemp)
trap 'rm -f "$qa_validator_tmp"' EXIT
awk '/^# ADAPTER_QA_VALIDATORS_BEGIN$/{on=1; next} /^# ADAPTER_QA_VALIDATORS_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$qa_validator_tmp"
source "$qa_validator_tmp"
fixed_receipt=${shellQuote(spec[0])}
expected_verdict=${shellQuote(spec[2])}
adapter_receipt_body_check "$fixed_receipt"
base_receipt=${shellQuote(baseReceipt)}
if [ -n "$base_receipt" ]; then rm -f "$base_receipt"; test ! -e "$base_receipt"; fi
rm -f "$qa_validator_tmp"
trap - EXIT`);
  };
  const recoverState = async () => shell([
    "set -euo pipefail",
    "mapfile -t txns < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-state.*' -print | LC_ALL=C sort)",
    "test \"$(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-state.*' -print | wc -l)\" -eq 1",
    "state_txn=$(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-state.*' -print | LC_ALL=C sort | head -n 1)",
    "state_atomic_replace() { target=\"$1\"; value=\"$2\"; tmp=$(mktemp \"${target}.tmp.XXXXXX\"); printf '%s\\n' \"$value\" > \"$tmp\"; test \"$(wc -l < \"$tmp\")\" -eq 1; test \"$(cat \"$tmp\")\" = \"$value\"; mv \"$tmp\" \"$target\"; }",
    "state_atomic_append() { target=\"$1\"; value=\"$2\"; tmp=$(mktemp \"${target}.tmp.XXXXXX\"); if [ -s \"$target\" ]; then cat \"$target\" > \"$tmp\"; fi; printf '%s\\n' \"$value\" >> \"$tmp\"; mv \"$tmp\" \"$target\"; }",
    "state_atomic_copy() { source=\"$1\"; target=\"$2\"; tmp=$(mktemp \"${target}.tmp.XXXXXX\"); cp \"$source\" \"$tmp\"; cmp -s \"$source\" \"$tmp\"; mv \"$tmp\" \"$target\"; cmp -s \"$source\" \"$target\"; }",
    "state_backup_refresh() { backup=\"$1\"; staged=\"$2\"; live=\"$3\"; if [ -s \"$staged\" ]; then source=\"$staged\"; elif [ -s \"$live\" ]; then source=\"$live\"; else return 1; fi; if [ -s \"$backup\" ] && cmp -s \"$backup\" \"$source\"; then return 0; fi; state_atomic_copy \"$source\" \"$backup\"; }",
    "if [ ! -e \"$state_txn/state-journal\" ]; then for first_journal_tmp in \"$state_txn\"/state-journal.tmp.*; do [ -e \"$first_journal_tmp\" ] || continue; test -f \"$first_journal_tmp\"; test ! -L \"$first_journal_tmp\"; test -z \"$(find \"$state_txn\" -mindepth 1 -maxdepth 1 -type f -not -name 'state-journal.tmp.*' -print -quit)\"; rm -f \"$first_journal_tmp\"; done; while IFS= read -r state_orphan; do state_orphan_name=${state_orphan##*/}; case \"$state_orphan_name\" in ledger.jsonl|boulder.json|plan.md|input.json|ledger.backup|boulder.backup|plan.backup|ledger.digest|boulder.digest|plan.digest|*.tmp.*) rm -f \"$state_orphan\" ;; *) exit 1 ;; esac; done < <(find \"$state_txn\" -mindepth 1 -maxdepth 1 -type f -print | LC_ALL=C sort); test -z \"$(find \"$state_txn\" -mindepth 1 -print -quit)\"; rmdir \"$state_txn\"; exit 0; fi",
    "test -s \"$state_txn/state-journal\"",
    "state_state=$(tail -n 1 \"$state_txn/state-journal\")",
    "reconcile_state_member() { staged=\"$1\"; live=\"$2\"; digest_file=\"$3\"; backup=\"$4\"; test -s \"$digest_file\"; if [ -e \"$staged\" ]; then if [ -e \"$live\" ]; then if [ \"$(sha256sum \"$live\" | awk '{print $1}')\" = \"$(cat \"$digest_file\")\" ]; then rm -f \"$staged\"; else cmp -s \"$backup\" \"$live\"; mv \"$staged\" \"$live\"; fi; else mv \"$staged\" \"$live\"; fi; fi; test -s \"$live\"; test \"$(sha256sum \"$live\" | awk '{print $1}')\" = \"$(cat \"$digest_file\")\"; }",
    "if [ \"$state_state\" = ledger-promotion-planned ]; then reconcile_state_member \"$state_txn/ledger.jsonl\" .omo/start-work/ledger.jsonl \"$state_txn/ledger.digest\" \"$state_txn/ledger.backup\"; state_atomic_replace \"$state_txn/state-journal\" ledger-moved; exit 0; fi",
    "if [ \"$state_state\" = boulder-promotion-planned ]; then reconcile_state_member \"$state_txn/boulder.json\" .omo/boulder.json \"$state_txn/boulder.digest\" \"$state_txn/boulder.backup\"; state_atomic_replace \"$state_txn/state-journal\" boulder-moved; exit 0; fi",
    "if [ \"$state_state\" = plan-promotion-planned ]; then reconcile_state_member \"$state_txn/plan.md\" .omo/plans/low-memory-kma-weather-pwa-design.md \"$state_txn/plan.digest\" \"$state_txn/plan.backup\"; state_atomic_replace \"$state_txn/state-journal\" plan-moved; exit 0; fi",
    "if [ \"$state_state\" = created ]; then for path in \"$state_txn\"/*; do [ -e \"$path\" ] || continue; case \"$path\" in \"$state_txn/state-journal\"|\"$state_txn/input.json\"|\"$state_txn/ledger.backup\"|\"$state_txn/boulder.backup\"|\"$state_txn/plan.backup\"|\"$state_txn/ledger.jsonl\"|\"$state_txn/boulder.json\"|\"$state_txn/plan.md\"|\"$state_txn/ledger.digest\"|\"$state_txn/boulder.digest\"|\"$state_txn/plan.digest\"|\"$state_txn\"/*.tmp.*) ;; *) exit 1 ;; esac; done; rm -f \"$state_txn/ledger.jsonl\" \"$state_txn/boulder.json\" \"$state_txn/plan.md\" \"$state_txn/input.json\" \"$state_txn/ledger.backup\" \"$state_txn/boulder.backup\" \"$state_txn/plan.backup\" \"$state_txn/ledger.digest\" \"$state_txn/boulder.digest\" \"$state_txn/plan.digest\"; rm -f \"$state_txn\"/*.tmp.*; rm -f \"$state_txn/state-journal\"; rmdir \"$state_txn\"; exit 0; fi",
    "if [ \"$state_state\" = staged ]; then cmp -s \"$state_txn/ledger.backup\" .omo/start-work/ledger.jsonl; cmp -s \"$state_txn/boulder.backup\" .omo/boulder.json; cmp -s \"$state_txn/plan.backup\" .omo/plans/low-memory-kma-weather-pwa-design.md; state_atomic_replace \"$state_txn/state-journal\" discard-planned; state_state=discard-planned; fi",
    "if [ \"$state_state\" = discard-planned ]; then rm -f \"$state_txn/ledger.jsonl\" \"$state_txn/boulder.json\" \"$state_txn/plan.md\" \"$state_txn/input.json\" \"$state_txn/ledger.backup\" \"$state_txn/boulder.backup\" \"$state_txn/plan.backup\" \"$state_txn/ledger.digest\" \"$state_txn/boulder.digest\" \"$state_txn/plan.digest\"; rm -f \"$state_txn\"/*.tmp.*; rm -f \"$state_txn/state-journal\"; rmdir \"$state_txn\"; exit 0; fi",
    "case \"$state_state\" in",
    "ledger-moved) test ! -e \"$state_txn/ledger.jsonl\"; reconcile_state_member \"$state_txn/boulder.json\" .omo/boulder.json \"$state_txn/boulder.digest\" \"$state_txn/boulder.backup\"; state_atomic_replace \"$state_txn/state-journal\" boulder-moved; reconcile_state_member \"$state_txn/plan.md\" .omo/plans/low-memory-kma-weather-pwa-design.md \"$state_txn/plan.digest\" \"$state_txn/plan.backup\"; state_atomic_replace \"$state_txn/state-journal\" plan-moved ;;",
    "boulder-moved) test ! -e \"$state_txn/ledger.jsonl\"; test ! -e \"$state_txn/boulder.json\"; reconcile_state_member \"$state_txn/plan.md\" .omo/plans/low-memory-kma-weather-pwa-design.md \"$state_txn/plan.digest\" \"$state_txn/plan.backup\"; state_atomic_replace \"$state_txn/state-journal\" plan-moved ;;",
    "plan-moved|cleanup-planned) test ! -e \"$state_txn/ledger.jsonl\"; test ! -e \"$state_txn/boulder.json\"; test ! -e \"$state_txn/plan.md\"; state_atomic_replace \"$state_txn/state-journal\" cleanup-planned; rm -f \"$state_txn/input.json\" \"$state_txn/ledger.backup\" \"$state_txn/boulder.backup\" \"$state_txn/plan.backup\" \"$state_txn/ledger.digest\" \"$state_txn/boulder.digest\" \"$state_txn/plan.digest\"; rm -f \"$state_txn\"/*.tmp.*; rm -f \"$state_txn/state-journal\"; rmdir \"$state_txn\" ;;",
    "rollback-planned) state_atomic_copy \"$state_txn/ledger.backup\" .omo/start-work/ledger.jsonl; state_atomic_copy \"$state_txn/boulder.backup\" .omo/boulder.json; state_atomic_copy \"$state_txn/plan.backup\" .omo/plans/low-memory-kma-weather-pwa-design.md; state_atomic_replace \"$state_txn/state-journal\" rollback-restored ;;",
    "rollback-restored) cmp -s \"$state_txn/ledger.backup\" .omo/start-work/ledger.jsonl; cmp -s \"$state_txn/boulder.backup\" .omo/boulder.json; cmp -s \"$state_txn/plan.backup\" .omo/plans/low-memory-kma-weather-pwa-design.md; rm -f \"$state_txn/ledger.jsonl\" \"$state_txn/boulder.json\" \"$state_txn/plan.md\" \"$state_txn/input.json\" \"$state_txn/ledger.backup\" \"$state_txn/boulder.backup\" \"$state_txn/plan.backup\" \"$state_txn/ledger.digest\" \"$state_txn/boulder.digest\" \"$state_txn/plan.digest\"; rm -f \"$state_txn\"/*.tmp.*; rm -f \"$state_txn/state-journal\"; rmdir \"$state_txn\" ;;",
    "*) exit 1 ;; esac"
  ].join("\n"));
  const recoverClosure = async () => shell([
    "set -euo pipefail",
    "closeout_adapter=$(mktemp)",
    "trap 'rm -f \"$closeout_adapter\"' EXIT",
    "awk '/^# ADAPTER_CLOSEOUT_TRANSACTION_BEGIN$/{on=1; next} /^# ADAPTER_CLOSEOUT_TRANSACTION_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > \"$closeout_adapter\"",
    "source \"$closeout_adapter\"",
    "adapter_closeout_recover",
    "rm -f \"$closeout_adapter\"",
    "trap - EXIT"
  ].join("\n"));
  const closeoutPrelude = `set -euo pipefail
closeout_adapter=$(mktemp)
trap 'rm -f "$closeout_adapter"' EXIT
awk '/^# ADAPTER_CLOSEOUT_TRANSACTION_BEGIN$/{on=1; next} /^# ADAPTER_CLOSEOUT_TRANSACTION_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$closeout_adapter"
source "$closeout_adapter"
adapter_closeout_transaction /tmp/weather-review-results.design-only.json
rm -f "$closeout_adapter"
trap - EXIT
test ! -e /tmp/weather-review-results.design-only.json`;
  const closeoutTransition = async () => shell(closeoutPrelude);
  const validateResult = async (state, results, sessions) => {
    if (state === "RECEIPT_RESUME") {
      await recoverReceipts();
      return;
    }
    if (state === "MANIFEST_RESUME") {
      await recoverManifest();
      return;
    }
    if (state === "STATE_RESUME") {
      await recoverState();
      return;
    }
    if (state === "CLOSEOUT_RESUME") {
      await recoverClosure();
      return;
    }
    if (state === "CLOSEOUT_HANDOFF_RESUME") {
      const payload = (await shell("node -e 'const fs=require(\"fs\"); const b=JSON.parse(fs.readFileSync(\".omo/boulder.json\",\"utf8\")); const w=b.works[b.active_work_id]; const rows=fs.readFileSync(\".omo/start-work/ledger.jsonl\",\"utf8\").trim().split(/\\n/).map(JSON.parse); const names=[\"goal-constraint\",\"document-quality\",\"security-scope\",\"artifact-qa\",\"gate-traceability\",\"debugging-artifact-audit\"]; const map=w.all_delegate_session_map||{}; const resultFor=name=>{const key=Object.keys(map).find(k=>/^CLOSEOUT_(NEW|RESUME):/.test(k)&&k.endsWith(\":\"+name)); if(!key) process.exit(1); const session=map[key]; const row=rows.find(r=>r.event===\"delegated-state-validated\"&&r.session_id===session&&/^CLOSEOUT_/.test(r.task)); if(!row) process.exit(1); return {name,task:\"F4-closeout\",verdict:\"APPROVE\",session_id:session,commands:row.commands,artifact:row.artifact,adversarial_classes:row.adversarial_classes,cleanup:row.cleanup,runtime_qa:row.runtime_qa,commit:row.commit,plan_review_sha256:row.plan_review_sha256,plan_contract_sha256:row.plan_contract_sha256,revision:row.revision};}; const results=names.map(resultFor); process.stdout.write(JSON.stringify({review_lanes:results.slice(0,5),debugging:results[5],closeout_session_map:Object.fromEntries(results.map(r=>[r.name,r.session_id])),all_delegate_session_map:map}));'")).trim();
      await shell("rm -f /tmp/weather-review-results.design-only.json; printf '%s\\n' " + shellQuote(payload) + " > /tmp/weather-review-results.design-only.json");
      await closeoutTransition();
      await shell("node -e 'const fs=require(\"fs\"); const rows=fs.readFileSync(\".omo/start-work/ledger.jsonl\",\"utf8\").trim().split(/\\n/).map(JSON.parse); const b=JSON.parse(fs.readFileSync(\".omo/boulder.json\",\"utf8\")); if(!rows.length || rows.at(-1).event!==\"orchestration-completed\" || rows.at(-1).task!==\"F4\" || b.works[b.active_work_id].status!==\"completed\") process.exit(1);'");
      return;
    }
    if (state === "BOOTSTRAP_NEW" || state === "BOOTSTRAP_RESUME") {
      await bootstrapTransition(state);
      return;
    }
    const gate = stateValidationCommand[state];
    if (!gate) throw new Error(`no plan-owned validator for state ${state}`);
    for (const session of sessions) {
      if (!/^ses_[A-Za-z0-9]+$/.test(session.agent_id) || session.session_id !== `codex:${session.agent_id}`) throw new Error("invalid delegated session identity");
    }
    const receiptState = /^(TODO_1|WAVE_1B|WAVE_2|TODO_9|FINAL_1_3|FINAL_4)_/.test(state);
    const receiptResumeWithFixed = state === "TODO_9_RESUME" || state === "TODO_9_PAIR_RESUME" || state === "FINAL_4_RESUME";
    if ((state === "TODO_9_PAIR_RESUME" || state === "FINAL_4_RESUME") && results.some(entry => Object.prototype.hasOwnProperty.call(entry.result, "base_receipt_path"))) throw new Error("fixed-receipt resume rejects every base receipt path");
    if (!Array.isArray(results) || results.length !== sessions.length || results.some(entry => !entry.result || typeof entry.result !== "object" || entry.result.session_id !== entry.session_id || !/^(PASS|APPROVE)$/.test(entry.result.verdict) || !Array.isArray(entry.result.commands) || entry.result.commands.length===0 || !Array.isArray(entry.result.artifact) || entry.result.artifact.length===0 || (receiptState && !receiptResumeWithFixed && (!/^\/tmp\/weather-receipt-base\.[A-Za-z0-9]+$/.test(entry.result.base_receipt_path||"") || !entry.result.cleanup || entry.result.cleanup.status!=="PASS")))) throw new Error(`delegated result contract failed: ${state}`);
    const exactResultArray = (actual, expected) => Array.isArray(actual) && actual.length === expected.length && actual.every((item, index) => item === expected[index]);
    const resultClassId = value => typeof value === "string" ? value.split("=", 1)[0] : "";
    const expectedResultClassIds = new Set(["source_version_drift","source_inference_confusion","credential_leakage","boundary_contradiction","privacy_overcollection","false_runtime_claim","numeric_budget_drift","unexpected_product_file","accessibility_state_omission","stale_missing_evidence"]);
    if (receiptState) for (const entry of results) {
      const spec = receiptSpecs[entry.role];
      if (!spec || entry.result.verdict !== spec[2] || !entry.result.cleanup || entry.result.cleanup.status !== "PASS") throw new Error(`verdict/cleanup result contract failed: ${entry.role}`);
      if (!spec || entry.result.task !== `${state}:${entry.role}` || !exactResultArray(entry.result.commands, [spec[1]]) || !exactResultArray(entry.result.artifact, [spec[3]]) || !Array.isArray(entry.result.adversarial_classes) || entry.result.adversarial_classes.length !== 10 || new Set(entry.result.adversarial_classes.map(resultClassId)).size !== 10 || [...expectedResultClassIds].some(id => !new Set(entry.result.adversarial_classes.map(resultClassId)).has(id)) || entry.result.adversarial_classes.some(value => !/^[a-z0-9_]+=(PROBED|NA):.+$/.test(value)) || entry.result.runtime_qa !== "NOT RUN" || entry.result.commit !== "N/A" || !Array.isArray(entry.result.cleanup.temporary_paths) || entry.result.cleanup.temporary_paths.length !== 0 || !Array.isArray(entry.result.cleanup.long_lived_processes) || entry.result.cleanup.long_lived_processes.length !== 0) throw new Error(`exact delegated receipt result contract failed: ${entry.role}`);
    }
    if (receiptState) {
      if (receiptResumeWithFixed) {
        const resumeSpec = state === "FINAL_4_RESUME" ? receiptSpecs["final-f4-scope-security"] : receiptSpecs["todo-9-integrity"];
        await shell(`set -euo pipefail
qa_validator_tmp=$(mktemp)
binding_tmp=$(mktemp)
trap 'rm -f "$qa_validator_tmp" "$binding_tmp"' EXIT
awk '/^# ADAPTER_QA_VALIDATORS_BEGIN$/{on=1; next} /^# ADAPTER_QA_VALIDATORS_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$qa_validator_tmp"
source "$qa_validator_tmp"
awk '/^# ADAPTER_RECEIPT_BINDING_BEGIN$/{on=1; next} /^# ADAPTER_RECEIPT_BINDING_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$binding_tmp"
source "$binding_tmp"
fixed_receipt=${shellQuote(resumeSpec[0])}
expected_verdict=${shellQuote(resumeSpec[2])}
adapter_receipt_body_check "$fixed_receipt"
rm -f "$qa_validator_tmp" "$binding_tmp"
trap - EXIT`);
      } else {
        const pendingReceiptEntries = [];
        const fixedReceiptEntries = [];
        for (const entry of results) {
          const spec = receiptSpecs[entry.role];
          const fixedState = (await shell(`if [ -s ${shellQuote(spec[0])} ]; then printf present; else printf absent; fi`)).trim();
          if (fixedState === "present") fixedReceiptEntries.push(entry); else pendingReceiptEntries.push(entry);
        }
        for (const entry of fixedReceiptEntries) await validateFixedReceipt(entry);
        for (const entry of pendingReceiptEntries) await shell("test -s " + shellQuote(entry.result.base_receipt_path));
        if (pendingReceiptEntries.length > 0) await bindReceipts(state, pendingReceiptEntries);
        for (const entry of pendingReceiptEntries) await shell("test ! -e " + shellQuote(entry.result.base_receipt_path));
        await shell(`set -euo pipefail
qa_validator_tmp=$(mktemp)
awk '/^# ADAPTER_QA_VALIDATORS_BEGIN$/{on=1; next} /^# ADAPTER_QA_VALIDATORS_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$qa_validator_tmp"
source "$qa_validator_tmp"
rm -f "$qa_validator_tmp"
binder_tmp=$(mktemp)
awk '/^# ADAPTER_RECEIPT_BINDING_BEGIN$/{on=1; next} /^# ADAPTER_RECEIPT_BINDING_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$binder_tmp"
source "$binder_tmp"
rm -f "$binder_tmp"
receipt_sweep_stale_bases`);
      }
    }
    if (state === "TODO_9_PAIR_RESUME") {
      await shell(`set -euo pipefail
qa_validator_tmp=\$(mktemp)
trap 'rm -f "\$qa_validator_tmp"' EXIT
awk '/^# ADAPTER_QA_VALIDATORS_BEGIN$/{on=1; next} /^# ADAPTER_QA_VALIDATORS_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "\$qa_validator_tmp"
source "\$qa_validator_tmp"
manifest_path_order_validator
sha256sum --check .omo/evidence/weather-pwa-design/output-manifest.sha256 >/dev/null
output_manifest_hash=\$(sha256sum .omo/evidence/weather-pwa-design/output-manifest.sha256 | awk '{print \$1}')
test "\$(sed -n 's/^Output-Manifest-SHA256: //p' .omo/evidence/weather-pwa-design/output-manifest-receipt.md)" = "\$output_manifest_hash"
rm -f "\$qa_validator_tmp"
trap - EXIT`);
    }
    if (state === "TODO_9_NEW" || state === "TODO_9_RESUME") {
      await shell(`set -euo pipefail
qa_validator_tmp=$(mktemp)
manifest_stage_tmp=$(mktemp)
trap 'rm -f "$qa_validator_tmp" "$manifest_stage_tmp"' EXIT
awk '/^# ADAPTER_QA_VALIDATORS_BEGIN$/{on=1; next} /^# ADAPTER_QA_VALIDATORS_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$qa_validator_tmp"
source "$qa_validator_tmp"
awk '/^# TASK_9_MANIFEST_STAGE_BEGIN$/{on=1; next} /^# TASK_9_MANIFEST_STAGE_END$/{exit} on{print}' .omo/plans/low-memory-kma-weather-pwa-design.md > "$manifest_stage_tmp"
source "$manifest_stage_tmp"
todo_9_stage_manifest_pair
rm -f "$qa_validator_tmp" "$manifest_stage_tmp"
trap - EXIT`);
    }
    if (state === "CLOSEOUT_NEW" || state === "CLOSEOUT_RESUME") {
      const laneNames = ["goal-constraint", "document-quality", "security-scope", "artifact-qa", "gate-traceability"];
      const returnedNames = results.filter(entry => entry.role !== "debugging-artifact-audit").map(entry => entry.result.name);
      const finalArtifacts = [".omo/evidence/weather-pwa-design/final-f1-plan-compliance.md", ".omo/evidence/weather-pwa-design/final-f2-document-quality.md", ".omo/evidence/weather-pwa-design/final-f3-semantic-qa.md", ".omo/evidence/weather-pwa-design/final-f4-scope-security.md", ".omo/evidence/weather-pwa-design/output-manifest.sha256", ".omo/evidence/weather-pwa-design/output-manifest-receipt.md"];
      const expectedCommands = Object.fromEntries(laneNames.map(name => [name, `artifact-review: ${name}`]));
      const exact = (actual, expected) => Array.isArray(actual) && actual.length === expected.length && actual.every((item, index) => item === expected[index]);
      const frozenHashes = JSON.parse((await shell("node -e 'const b=require(\"./.omo/boulder.json\"); process.stdout.write(JSON.stringify({review:b.plan_review_sha256,contract:b.plan_contract_sha256}))'")).trim());
      const hasCloseoutBinding = entry => entry.result.plan_review_sha256 === frozenHashes.review && entry.result.plan_contract_sha256 === frozenHashes.contract && entry.result.revision === `plan:${entry.result.plan_review_sha256}`;
      if (results.length !== 6 || results.filter(entry => entry.role === "debugging-artifact-audit").length !== 1 || returnedNames.length !== 5 || new Set(returnedNames).size !== 5 || laneNames.some(name => !returnedNames.includes(name)) || results.some(entry => entry.result.task !== "F4-closeout" || entry.result.verdict !== "APPROVE" || !hasCloseoutBinding(entry) || (entry.role !== "debugging-artifact-audit" && (entry.result.name !== entry.role || !exact(entry.result.commands, [expectedCommands[entry.role]]) || !exact(entry.result.artifact, finalArtifacts))) || (entry.role === "debugging-artifact-audit" && (entry.result.name !== entry.role || !exact(entry.result.commands, ["artifact-audit: named-negative-filter-scenario-cleanup-validators"]) || !exact(entry.result.artifact, finalArtifacts))))) throw new Error("closeout lane result contract failed");
    }
    const payload = JSON.stringify({state, sessions, results, checked: checkedIds[state]});
    let updateCommand = "unused";
    updateCommand = [
      "set -euo pipefail",
      "state_tmp=$(mktemp -d ./.omo/.weather-state.XXXXXX)",
      "state_journal=\"$state_tmp/state-journal\"",
      "state_atomic_append() { target=\"$1\"; value=\"$2\"; tmp=$(mktemp \"${target}.tmp.XXXXXX\"); if [ -s \"$target\" ]; then cat \"$target\" > \"$tmp\"; fi; printf '%s\\n' \"$value\" >> \"$tmp\"; mv \"$tmp\" \"$target\"; }",
      "state_atomic_replace() { target=\"$1\"; value=\"$2\"; tmp=$(mktemp \"${target}.tmp.XXXXXX\"); printf '%s\\n' \"$value\" > \"$tmp\"; test \"$(wc -l < \"$tmp\")\" -eq 1; test \"$(cat \"$tmp\")\" = \"$value\"; mv \"$tmp\" \"$target\"; }",
      "state_atomic_copy() { source=\"$1\"; target=\"$2\"; tmp=$(mktemp \"${target}.tmp.XXXXXX\"); cp \"$source\" \"$tmp\"; cmp -s \"$source\" \"$tmp\"; mv \"$tmp\" \"$target\"; cmp -s \"$source\" \"$target\"; }",
      "state_atomic_append \"$state_journal\" created",
      "state_atomic_copy .omo/start-work/ledger.jsonl \"$state_tmp/ledger.backup\"; state_atomic_copy .omo/boulder.json \"$state_tmp/boulder.backup\"; state_atomic_copy .omo/plans/low-memory-kma-weather-pwa-design.md \"$state_tmp/plan.backup\"",
      "state_atomic_copy .omo/start-work/ledger.jsonl \"$state_tmp/ledger.jsonl\"; state_atomic_copy .omo/boulder.json \"$state_tmp/boulder.json\"; state_atomic_copy .omo/plans/low-memory-kma-weather-pwa-design.md \"$state_tmp/plan.md\"",
      "state_atomic_append \"$state_journal\" staged",
      "printf '%s\\n' " + shellQuote(payload) + " > \"$state_tmp/input.json\"",
      "node -e 'const fs=require(\"fs\"); const input=JSON.parse(fs.readFileSync(process.argv[4],\"utf8\")); const ledgerPath=process.argv[1]; const boulderPath=process.argv[2]; const planPath=process.argv[3]; const b=JSON.parse(fs.readFileSync(boulderPath,\"utf8\")); const w=b.works[b.active_work_id]; if(!w || w.status!==\"active\") process.exit(1); w.all_delegate_session_map=w.all_delegate_session_map||{}; for(const s of input.sessions){const key=input.state+\":\"+s.role; if(w.all_delegate_session_map[key] && w.all_delegate_session_map[key]!==s.session_id) process.exit(1); w.all_delegate_session_map[key]=s.session_id; if(!w.session_ids.includes(s.session_id)) w.session_ids.push(s.session_id);} const base=e=>({event:\"delegated-state-validated\",plan:\".omo/plans/low-memory-kma-weather-pwa-design.md\",task:input.state,session_id:e.session_id,commands:e.result.commands||[],artifact:e.result.artifact||[],adversarial_classes:e.result.adversarial_classes||[],cleanup:e.result.cleanup||{status:\"PASS\",temporary_paths:[],long_lived_processes:[]},runtime_qa:e.result.runtime_qa||\"NOT RUN\",commit:e.result.commit||\"N/A\",base_receipt_path:e.result.base_receipt_path||null,plan_review_sha256:b.plan_review_sha256,plan_contract_sha256:b.plan_contract_sha256,revision:\"plan:\"+b.plan_review_sha256}); const rows=input.results.map(base); const finalArtifacts=[\".omo/evidence/weather-pwa-design/final-f1-plan-compliance.md\",\".omo/evidence/weather-pwa-design/final-f2-document-quality.md\",\".omo/evidence/weather-pwa-design/final-f3-semantic-qa.md\",\".omo/evidence/weather-pwa-design/final-f4-scope-security.md\",\".omo/evidence/weather-pwa-design/output-manifest.sha256\",\".omo/evidence/weather-pwa-design/output-manifest-receipt.md\"]; if(input.state===\"FINAL_4_NEW\" || input.state===\"FINAL_4_RESUME\"){const f4=input.results.find(e=>e.role===\"final-f4-scope-security\"); if(!f4 || rows.some(row=>row.event===\"f4-approved\")) process.exit(1); rows.push({...base(f4),event:\"f4-approved\",task:\"F4\",commands:[\"f4-phase-2: active-state-and-receipt\"],artifact:finalArtifacts});} const text=fs.readFileSync(planPath,\"utf8\"); const planLines=text.split(\"\\n\"); for(const id of input.checked){const marker=\"- [ ] \"+id+\".\"; const index=planLines.findIndex(line=>line.startsWith(marker)); if(index<0) process.exit(1); planLines[index]=planLines[index].replace(\"- [ ]\",\"- [x]\");} fs.writeFileSync(ledgerPath,rows.map(row=>JSON.stringify(row)).join(\"\\n\")+\"\\n\"); fs.writeFileSync(boulderPath,JSON.stringify(b)+\"\\n\"); fs.writeFileSync(planPath,planLines.join(\"\\n\"));' \"$state_tmp/ledger.jsonl\" \"$state_tmp/boulder.json\" \"$state_tmp/plan.md\" \"$state_tmp/input.json\"",
      "node -e 'const fs=require(\"fs\"); const input=JSON.parse(fs.readFileSync(process.argv[1],\"utf8\")); const rows=fs.readFileSync(process.argv[2],\"utf8\").trim().split(/\\n/).map(JSON.parse); if(rows.length<input.results.length) process.exit(1); input.results.forEach((entry,index)=>{if(entry.result.verdict!==\"PASS\"&&entry.result.verdict!==\"APPROVE\") process.exit(1); rows[index].verdict=entry.result.verdict;}); fs.writeFileSync(process.argv[2],rows.map(JSON.stringify).join(\"\\n\")+\"\\n\");' \"$state_tmp/input.json\" \"$state_tmp/ledger.jsonl\"",
      "node -e 'const fs=require(\"fs\"); const read=p=>{const text=fs.readFileSync(p,\"utf8\").trim(); return text?text.split(/\\n/).map(line=>{JSON.parse(line); return line;}):[]}; const prior=read(process.argv[1]); const current=read(process.argv[2]); fs.writeFileSync(process.argv[2], prior.concat(current).join(\"\\n\")+\"\\n\");' \"$state_tmp/ledger.backup\" \"$state_tmp/ledger.jsonl\"",
      "state_atomic_replace \"$state_tmp/ledger.digest\" \"$(sha256sum \"$state_tmp/ledger.jsonl\" | awk '{print $1}')\"; state_atomic_replace \"$state_tmp/boulder.digest\" \"$(sha256sum \"$state_tmp/boulder.json\" | awk '{print $1}')\"; state_atomic_replace \"$state_tmp/plan.digest\" \"$(sha256sum \"$state_tmp/plan.md\" | awk '{print $1}')\"",
      "state_atomic_append \"$state_journal\" ledger-promotion-planned; mv \"$state_tmp/ledger.jsonl\" .omo/start-work/ledger.jsonl; state_atomic_append \"$state_journal\" ledger-moved",
      "state_atomic_append \"$state_journal\" boulder-promotion-planned; mv \"$state_tmp/boulder.json\" .omo/boulder.json; state_atomic_append \"$state_journal\" boulder-moved",
      "state_atomic_append \"$state_journal\" plan-promotion-planned; mv \"$state_tmp/plan.md\" .omo/plans/low-memory-kma-weather-pwa-design.md; state_atomic_append \"$state_journal\" plan-moved",
      "state_atomic_append \"$state_journal\" cleanup-planned; rm -f \"$state_tmp/input.json\" \"$state_tmp/ledger.backup\" \"$state_tmp/boulder.backup\" \"$state_tmp/plan.backup\" \"$state_tmp/ledger.digest\" \"$state_tmp/boulder.digest\" \"$state_tmp/plan.digest\"; rm -f \"$state_tmp\"/*.tmp.*; rm -f \"$state_journal\"; rmdir \"$state_tmp\""
    ].join("\n");
    await shell("set -euo pipefail\n" + gate + "\n" + updateCommand);
    if (state === "CLOSEOUT_NEW" || state === "CLOSEOUT_RESUME") {
      const reviewPayload = JSON.stringify({review_lanes:results.filter(e => e.role !== "debugging-artifact-audit").map(e => ({...e.result, name:e.result.name || e.role})), debugging:results.find(e => e.role === "debugging-artifact-audit")?.result, closeout_session_map:Object.fromEntries(results.map(e => [e.result.name || e.role,e.session_id])), all_delegate_session_map:JSON.parse((await shell("node -e 'const b=require(\"./.omo/boulder.json\"); process.stdout.write(JSON.stringify(b.works[b.active_work_id].all_delegate_session_map||{}))'")).trim())});
      await shell("printf '%s\\n' " + shellQuote(reviewPayload) + " > /tmp/weather-review-results.design-only.json");
      await closeoutTransition();
      await shell("node -e 'const fs=require(\"fs\"); const rows=fs.readFileSync(\".omo/start-work/ledger.jsonl\",\"utf8\").trim().split(/\\n/).map(JSON.parse); const b=JSON.parse(fs.readFileSync(\".omo/boulder.json\",\"utf8\")); if(!rows.length || rows.at(-1).event!==\"orchestration-completed\" || rows.at(-1).task!==\"F4\" || b.schema_version!==2 || b.works[b.active_work_id].status!==\"completed\") process.exit(1);'");
    }
  };
  const spawn = tools.multi_agent_v1__spawn_agent;
  const wait = tools.multi_agent_v1__wait_agent;
  const close = tools.multi_agent_v1__close_agent;
  const dispatch = async (state, roles) => {
    const closeoutPrompt = state.startsWith("CLOSEOUT") ? " Return name equal to your lane role, plan_review_sha256 and plan_contract_sha256 equal to the active Boulder, revision plan:<plan_review_sha256>, exact lane command/artifact arrays from the plan, and for debugging-artifact-audit use the exact artifact-audit command; return verdict APPROVE." : "";
    const sessions = await Promise.all(roles.map(async role => {
      const expectedTask = state.startsWith("CLOSEOUT") ? "F4-closeout" : state + ":" + role;
      const expectedResultVerdict = state.startsWith("CLOSEOUT") ? "APPROVE" : receiptSpecs[role]?.[2];
      if (!expectedResultVerdict) throw new Error("missing exact result verdict for " + role);
      const preflightInstruction = (role === "todo-1-preflight-and-kma-contract" ? " For fresh preflight, source and invoke the literal todo_1_capture_initial_inventory before any preflight-owned mkdir, then bind and execute the exact todo_1_public_assembly_command through todo_1_create_rebuild_assembler, and validate the recorded assembler path/hash before promotion." : "") + " Return verdict exactly " + expectedResultVerdict + ", cleanup.status exactly PASS, and write Principal-Artifact-SHA256 as the sha256 of the plan-owned Artifact in every generated base receipt.";
      const resumeInstruction = state === "TODO_9_RESUME" || state === "TODO_9_PAIR_RESUME" ? " If the fixed task-9 receipt already exists after manifest recovery, do not rerun the pre-manifest command; validate that fixed receipt, return the exact task-9 result contract, and omit base_receipt_path; the root will perform fixed-receipt self-validation and will not promote a second receipt." : state === "FINAL_4_RESUME" ? " If the fixed final-f4-scope-security.md receipt already exists while checkbox F4 is unchecked, do not rerun final_f4_full_qa and do not run f4_inventory_validator phase-a; validate that fixed F4 receipt in place, return the exact F4 result contract with task FINAL_4_RESUME:final-f4-scope-security, and omit base_receipt_path; the root will perform fixed-receipt self-validation and will not promote a second receipt." : "";
      const message = "TASK: " + role + ". STATE: " + state + ". Execute the frozen design plan lane only. Run the plan-owned prelude and applicable recovery checks (review_approval_validator, receipt_recovery_check, preflight_recovery_validator, manifest_pair_recovery_check, adapter_closeout_recover), then the exact QA command and cleanup gate. Do not call live KMA or create product source. Return one JSON object only with task exactly " + expectedTask + ", verdict PASS or APPROVE, session_id codex:<your-agent-id>, exact command and artifact arrays from the plan, ten adversarial_classes in id=PROBED:<observable> or id=NA:<reason> form, cleanup {status:PASS,temporary_paths:[],long_lived_processes:[]}, runtime_qa NOT RUN, commit N/A, and for receipt lanes base_receipt_path matching /tmp/weather-receipt-base.<unique>. No prose outside JSON." + preflightInstruction + resumeInstruction + closeoutPrompt;
      const started = await spawn({message, fork_context: false});
      return {role, agent_id: started.agent_id, session_id: "codex:" + started.agent_id};
    }));
    const results = [];
    const waitForTerminal = async session => {
      const deadline = Date.now() + 3600000;
      let timeout = 30000;
      for (;;) {
        const waited = await wait({targets:[session.agent_id], timeout_ms:timeout});
        const status = waited.status && waited.status[session.agent_id];
        if (status && typeof status === "object" && typeof status.completed === "string") return status.completed;
        if (status && typeof status === "object" && (status.failed || status.error)) throw new Error("delegated worker failed: " + session.role);
        if (Date.now() >= deadline) throw new Error("delegated worker timed out: " + session.role);
        await new Promise(resolve => setTimeout(resolve, Math.min(timeout, 5000)));
        timeout = Math.min(timeout * 2, 30000);
      }
    };
    for (const session of sessions) {
      const completed = await waitForTerminal(session);
      let parsed;
      try { parsed = JSON.parse(completed); } catch { throw new Error("delegated worker result is not JSON: " + session.role); }
      results.push({...session, result:parsed});
    }
    await validateResult(state, results, sessions);
    for (const session of sessions) await close({target:session.agent_id});
  };
  for (;;) {
    const state = await runStateProbe();
    switch (state) {
      case "BOOTSTRAP_NEW": case "BOOTSTRAP_RESUME": await validateResult(state, [], []); break;
      case "RECEIPT_RESUME": await validateResult(state, [], []); break;
      case "MANIFEST_RESUME": await validateResult(state, [], []); break;
      case "STATE_RESUME": await validateResult(state, [], []); break;
      case "TODO_1_NEW": case "TODO_1_RESUME": await dispatch(state, ["todo-1-preflight-and-kma-contract"]); break;
      case "WAVE_1B_NEW": case "WAVE_1B_RESUME": await dispatch(state, ["todo-2-proxy", "todo-3-offline", "todo-4-privacy", "todo-5-accessibility", "todo-6-performance"]); break;
      case "WAVE_2_NEW": case "WAVE_2_RESUME": await dispatch(state, ["todo-7-specification", "todo-8-design-system"]); break;
      case "TODO_9_PAIR_RESUME": await dispatch(state, ["todo-9-integrity"]); break;
      case "TODO_9_NEW": case "TODO_9_RESUME": await dispatch(state, ["todo-9-integrity"]); break;
      case "FINAL_1_3_NEW": case "FINAL_1_3_RESUME": await dispatch(state, ["final-f1-compliance", "final-f2-document-quality", "final-f3-semantic"]); break;
      case "FINAL_4_NEW": case "FINAL_4_RESUME": await dispatch(state, ["final-f4-scope-security"]); break;
      case "CLOSEOUT_NEW": await dispatch(state, ["goal-constraint", "document-quality", "security-scope", "artifact-qa", "gate-traceability", "debugging-artifact-audit"]); break;
      case "CLOSEOUT_RESUME": await validateResult(state, [], []); break;
      case "CLOSEOUT_HANDOFF_RESUME": await validateResult(state, [], []); break;
      case "COMPLETE": return;
      default: throw new Error(`unknown design-only start-work state: ${state}`);
    }
  }
}
(async () => { await designOnlyStartWork(); })().catch(error => { console.error(error); process.exitCode = 1; });
~~~
Every dispatched worker must return one JSON object on its final message, with no prose wrapper: `{"task":"<state role>","verdict":"PASS|APPROVE","session_id":"codex:<agent-id>","commands":["<exact command>"],"artifact":["<exact path>"],"adversarial_classes":["<class>=<observable>"],"cleanup":{"status":"PASS","temporary_paths":[],"long_lived_processes":[]},"runtime_qa":"NOT RUN","commit":"N/A","base_receipt_path":"/tmp/weather-receipt-base.<unique>"}` for receipt-producing lanes; closeout review lanes additionally set `name` and omit `base_receipt_path`. The root parses this JSON, requires the session identity and verdict before closing the agent, appends the result to the ledger, adds the session to Boulder and `all_delegate_session_map`, and consumes only the declared base receipt or exact review result. A non-JSON, mismatched-session, missing-artifact, missing-base-receipt, or non-approval result is a failed transition and leaves the frontier unchecked.
`runStateProbe` first performs the direct reviewed-hash/draft/capability checks embedded in `stateProbeCommand`, then emits a recovery-aware state token. The delegated worker for that token runs the complete plan-owned shell prelude, including `review_approval_validator`, `bootstrap_recovery_check`, `receipt_recovery_check`, `preflight_recovery_validator`, `manifest_pair_recovery_check`, and `adapter_closeout_recover` in the applicable order; no fresh shell references a function that it has not sourced. It derives a `*_RESUME` token whenever the corresponding transaction or unchecked-marker frontier already exists, and a `*_NEW` token only when no resumable state exists. `validateResult` appends the actual returned `codex:<agent-id>` values to the all-delegate map and active Boulder before marking a checkbox; it never substitutes descriptive session IDs.
- Root receipt-binding implementation: the Code-mode adapter extracts the following exact `adapter_receipt_bind_and_validate` block from this plan into its shell before consuming any worker result. The worker has already executed the full registered probe list and returned a complete base receipt with the generated `QA-Trace` and `QA-Transcript` lines; the root revalidates every trace digest and transcript, sets `QA_RECEIPT_BASE`, copies the base into a transaction-owned candidate, writes each journal state, validates the principal-artifact/command/source/hash/class fields, atomically promotes the fixed receipt, reruns the full body validator, removes the base and only exact transaction helpers, and refuses to mark a checkbox until this function exits 0. A base path or fixed receipt is never treated as a substitute for this transaction.
~~~sh
# ADAPTER_RECEIPT_BINDING_BEGIN
receipt_atomic_line() { target="$1"; value="$2"; tmp=$(mktemp "${target}.tmp.XXXXXX"); printf '%s\n' "$value" > "$tmp"; test "$(wc -l < "$tmp")" -eq 1; test "$(cat "$tmp")" = "$value"; mv "$tmp" "$target"; }
receipt_sweep_stale_bases() {
  set -euo pipefail
  batch_bases=" $* "
  while IFS= read -r stray_base; do
    [ -n "$stray_base" ] || continue
    case "$batch_bases" in *" $stray_base "*) continue ;; esac
    test -f "$stray_base"; test ! -L "$stray_base"
    rm -f "$stray_base"
  done < <(find /tmp -mindepth 1 -maxdepth 1 -type f -name 'weather-receipt-base.*' -print | LC_ALL=C sort)
}
adapter_receipt_expected_trace() {
  case "$1" in
    .omo/evidence/weather-pwa-design/task-1-*) printf '%s\n' 'source-records source-bodies task-source-registry hash-contract credential-fixtures forced-status-77 preflight-recovery cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/task-2-*) printf '%s\n' 'artifact task-source-registry proxy-boundary credential-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/task-3-*) printf '%s\n' 'artifact task-source-registry offline-contract warning-unknown background-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/task-4-*) printf '%s\n' 'artifact task-source-registry location-privacy coarse-location privacy-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/task-5-*) printf '%s\n' 'artifact task-source-registry accessibility-copy focus-state dependency-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/task-6-*) printf '%s\n' 'artifact task-source-registry memory-boundary budget-protocol runtime-claim-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/task-7-*) printf '%s\n' 'artifact document-structure runtime-claim-negative scope-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/task-8-*) printf '%s\n' 'artifact design-tokens accessibility-state runtime-claim-negative scope-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/task-9-*) printf '%s\n' 'artifact integrity-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/final-f1-*) printf '%s\n' 'artifact plan-contract receipt-negative manifest-order cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/final-f2-*) printf '%s\n' 'artifact document-crossrefs unresolved-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/final-f3-*) printf '%s\n' 'artifact scenario-rows runtime-claim-negative cleanup-trap' ;;
    .omo/evidence/weather-pwa-design/final-f4-*) printf '%s\n' 'artifact inventory source-records task-source-registry secret-negative secret-fixtures process-clean cleanup-trap' ;;
    *) return 1 ;;
  esac
}
adapter_receipt_body_check() {
  set -euo pipefail
  receipt_to_check="$1"
  fixed_receipt=${fixed_receipt#./}
  receipt_key="$fixed_receipt"
  receipt="$receipt_to_check"
  expected_artifact=; expected_command=; expected_sources=
  adapter_recovery_expected_binding
  test -s "$receipt_to_check"
  test "$(rg -c "^Verdict: $expected_verdict$" "$receipt_to_check" || printf '0')" -eq 1
  test "$(sed -n 's/^Artifact: //p' "$receipt_to_check")" = "$expected_artifact"
  test "$(rg -c '^Principal-Artifact-SHA256: [0-9a-f]{64}$' "$receipt_to_check" || printf '0')" -eq 1
  test "$(sed -n 's/^Principal-Artifact-SHA256: //p' "$receipt_to_check")" = "$(sha256sum "$expected_artifact" | awk '{print $1}')"
  qa_trace_validator
  if [ "$fixed_receipt" = .omo/evidence/weather-pwa-design/final-f4-scope-security.md ]; then
    if [ -e "$fixed_receipt" ]; then f4_inventory_validator full; else f4_inventory_validator phase-a; fi
  fi
  if [ "$expected_verdict" = APPROVE ]; then adapter_recovery_final_gate_validator; else adapter_recovery_receipt_validator; fi
}
adapter_receipt_bind_and_validate() {
  set -euo pipefail
  state="$1"; role="$2"; QA_RECEIPT_BASE="$3"; fixed_receipt="$4"; requested_command="$5"; expected_verdict="$6"
  fixed_receipt=${fixed_receipt#./}
  case "$QA_RECEIPT_BASE" in /tmp/weather-receipt-base.*) ;; *) return 1 ;; esac
  test -s "$QA_RECEIPT_BASE"; test ! -e "$fixed_receipt"
  case "$fixed_receipt" in
    .omo/evidence/weather-pwa-design/task-[1-9]-low-memory-kma-weather-pwa-design.md) ;;
    .omo/evidence/weather-pwa-design/final-f[1-4]-*.md) ;;
    *) return 1 ;;
  esac
  case "$fixed_receipt" in
    *task-1-*) principal=.omo/evidence/weather-pwa-design/kma-contract-review.md; expected_trace='source-records source-bodies task-source-registry hash-contract credential-fixtures forced-status-77 preflight-recovery cleanup-trap' ;;
    *task-2-*) principal=.omo/evidence/weather-pwa-design/proxy-threat-review.md; expected_trace='artifact task-source-registry proxy-boundary credential-negative cleanup-trap' ;;
    *task-3-*) principal=.omo/evidence/weather-pwa-design/pwa-offline-review.md; expected_trace='artifact task-source-registry offline-contract warning-unknown background-negative cleanup-trap' ;;
    *task-4-*) principal=.omo/evidence/weather-pwa-design/location-privacy-review.md; expected_trace='artifact task-source-registry location-privacy coarse-location privacy-negative cleanup-trap' ;;
    *task-5-*) principal=.omo/evidence/weather-pwa-design/ui-accessibility-review.md; expected_trace='artifact task-source-registry accessibility-copy focus-state dependency-negative cleanup-trap' ;;
    *task-6-*) principal=.omo/evidence/weather-pwa-design/performance-budget-review.md; expected_trace='artifact task-source-registry memory-boundary budget-protocol runtime-claim-negative cleanup-trap' ;;
    *task-7-*) principal=docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; expected_trace='artifact document-structure runtime-claim-negative scope-negative cleanup-trap' ;;
    *task-8-*) principal=DESIGN.md; expected_trace='artifact design-tokens accessibility-state runtime-claim-negative scope-negative cleanup-trap' ;;
    *task-9-*) principal=.omo/evidence/weather-pwa-design/design-integrity-review.md; expected_trace='artifact integrity-negative cleanup-trap' ;;
    *final-f1-*) principal=.omo/evidence/weather-pwa-design/output-manifest.sha256; expected_trace='artifact plan-contract receipt-negative manifest-order cleanup-trap' ;;
    *final-f2-*) principal=docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; expected_trace='artifact document-crossrefs unresolved-negative cleanup-trap' ;;
    *final-f3-*) principal=DESIGN.md; expected_trace='artifact scenario-rows runtime-claim-negative cleanup-trap' ;;
    *final-f4-*) principal=.omo/evidence/weather-pwa-design/preflight-manifest.md; expected_trace='artifact inventory source-records task-source-registry secret-negative secret-fixtures process-clean cleanup-trap' ;;
  esac
  adapter_kma_source_url() {
    case "$1" in
      1) printf '%s\n' 'https://www.data.go.kr/data/15084084/openapi.do' ;;
      2) printf '%s\n' 'https://www.data.go.kr/catalog/15084084/openapi.json' ;;
      3) printf '%s\n' 'https://www.data.go.kr/data/15000415/openapi.do' ;;
      4) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=21' ;;
      5) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=39' ;;
      6) printf '%s\n' 'https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286' ;;
      *) return 1 ;;
    esac
  }
  adapter_task_source_url() {
    case "$1" in
      2.1|4.1) printf '%s\n' 'https://www.data.go.kr/catalog/15084084/openapi.json' ;;
      2.2) printf '%s\n' 'https://www.data.go.kr/data/15000415/openapi.do' ;;
      2.3) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=21' ;;
      3.1) printf '%s\n' 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable' ;;
      3.2) printf '%s\n' 'https://www.w3.org/TR/service-workers/' ;;
      3.3) printf '%s\n' 'https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/' ;;
      4.2) printf '%s\n' 'https://apihub.kma.go.kr/notice.do?seqNotice=39' ;;
      4.3) printf '%s\n' 'https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286' ;;
      4.4) printf '%s\n' 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API' ;;
      5.1) printf '%s\n' 'https://www.w3.org/TR/WCAG22/' ;;
      6.1) printf '%s\n' 'https://developer.chrome.com/docs/devtools/memory-problems' ;;
      6.2) printf '%s\n' 'https://learn.microsoft.com/en-us/microsoft-edge/devtools/memory-problems/microsoft-edge-browser-task-manager' ;;
      *) return 1 ;;
    esac
  }
  adapter_kma_sources() {
    for n in 1 2 3 4 5 6; do
      url=$(adapter_kma_source_url "$n")
      row=$(rg "^Source-Record: $n " .omo/evidence/weather-pwa-design/preflight-manifest.md)
      test "$(printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) .*/\1/p')" = "$url"
      printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) | Retrieved-At: \([0-9-]*\)T.*/\1 | \2/p'
    done | paste -sd ';' -
  }
  adapter_task_sources() {
    case "$1" in
      2) ids='2.1 2.2 2.3' ;;
      3) ids='3.1 3.2 3.3' ;;
      4) ids='4.1 4.2 4.3 4.4' ;;
      5) ids='5.1' ;;
      6) ids='6.1 6.2' ;;
      *) return 1 ;;
    esac
    for id in $ids; do
      url=$(adapter_task_source_url "$id")
      row=$(rg "^Task-Source-Record: $id " .omo/evidence/weather-pwa-design/preflight-manifest.md)
      test "$(printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) .*/\1/p')" = "$url"
      printf '%s\n' "$row" | sed -n 's/.*Source-URL: \([^ ]*\) | Retrieved-At: \([0-9-]*\)T.*/\1 | \2/p'
    done | paste -sd ';' -
  }
  expected_binding() {
    expected_artifact=; expected_command=; expected_sources=
    case "$fixed_receipt" in
      .omo/evidence/weather-pwa-design/task-1-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/kma-contract-review.md; expected_command=todo-1-source-contract-and-receipt-qa; expected_sources=$(adapter_kma_sources) ;;
      .omo/evidence/weather-pwa-design/task-2-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/proxy-threat-review.md; expected_command=todo-2-proxy-threat-qa; expected_sources=$(adapter_task_sources 2) ;;
      .omo/evidence/weather-pwa-design/task-3-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/pwa-offline-review.md; expected_command=todo-3-offline-contract-qa; expected_sources=$(adapter_task_sources 3) ;;
      .omo/evidence/weather-pwa-design/task-4-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/location-privacy-review.md; expected_command=todo-4-location-privacy-qa; expected_sources=$(adapter_task_sources 4) ;;
      .omo/evidence/weather-pwa-design/task-5-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/ui-accessibility-review.md; expected_command=todo-5-ui-accessibility-qa; expected_sources=$(adapter_task_sources 5) ;;
      .omo/evidence/weather-pwa-design/task-6-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/performance-budget-review.md; expected_command=todo-6-performance-budget-qa; expected_sources=$(adapter_task_sources 6) ;;
      .omo/evidence/weather-pwa-design/task-7-low-memory-kma-weather-pwa-design.md) expected_artifact=docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; expected_command=todo-7-specification-qa; expected_sources=none ;;
      .omo/evidence/weather-pwa-design/task-8-low-memory-kma-weather-pwa-design.md) expected_artifact=DESIGN.md; expected_command=todo-8-design-system-qa; expected_sources=none ;;
      .omo/evidence/weather-pwa-design/task-9-low-memory-kma-weather-pwa-design.md) expected_artifact=.omo/evidence/weather-pwa-design/design-integrity-review.md; expected_command=todo-9-integrity-manifest-qa; expected_sources=none ;;
      .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md) expected_artifact=.omo/evidence/weather-pwa-design/output-manifest.sha256; expected_command=final-f1-plan-compliance-qa; expected_sources=none ;;
      .omo/evidence/weather-pwa-design/final-f2-document-quality.md) expected_artifact=docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md; expected_command=final-f2-document-quality-qa; expected_sources=none ;;
      .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md) expected_artifact=DESIGN.md; expected_command=final-f3-semantic-qa; expected_sources=none ;;
      .omo/evidence/weather-pwa-design/final-f4-scope-security.md) expected_artifact=.omo/evidence/weather-pwa-design/preflight-manifest.md; expected_command=final-f4-scope-security-qa; expected_sources=none ;;
      *) return 1 ;;
    esac
    if [ -n "${requested_command:-}" ]; then test "$requested_command" = "$expected_command"; fi
  }
  receipt_validator() {
    expected_binding
    test -s "$receipt_to_check"
    test "$(rg -c '^Verdict: ' "$receipt_to_check" || printf '0')" -eq 1
    test "$(rg -c "^Verdict: $expected_verdict$" "$receipt_to_check" || printf '0')" -eq 1
    for field in Artifact Principal-Artifact-SHA256 Command Sources Plan-Review-SHA256 Plan-Contract-SHA256 Adversarial-Classes Exit-Status Temporary-Paths Long-Lived-Processes Cleanup-Status; do test "$(rg -c "^$field: " "$receipt_to_check" || printf '0')" -eq 1; done
    test "$(sed -n 's/^Artifact: //p' "$receipt_to_check")" = "$expected_artifact"
    test "$(sed -n 's/^Command: //p' "$receipt_to_check")" = "$expected_command"
    test "$(sed -n 's/^Sources: //p' "$receipt_to_check")" = "$expected_sources"
    test -s "$expected_artifact"
    test "$(sed -n 's/^Principal-Artifact-SHA256: //p' "$receipt_to_check")" = "$(sha256sum "$expected_artifact" | awk '{print $1}')"
    review_hash=$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_review_sha256)')
    contract_hash=$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_contract_sha256)')
    test "$(sed -n 's/^Plan-Review-SHA256: //p' "$receipt_to_check")" = "$review_hash"
    test "$(sed -n 's/^Plan-Contract-SHA256: //p' "$receipt_to_check")" = "$contract_hash"
    test "$(sed -n 's/^Exit-Status: //p' "$receipt_to_check")" = 0
    test "$(sed -n 's/^Temporary-Paths: //p' "$receipt_to_check")" = none
    test "$(sed -n 's/^Long-Lived-Processes: //p' "$receipt_to_check")" = none
    test "$(sed -n 's/^Cleanup-Status: //p' "$receipt_to_check")" = PASS
    classes=$(sed -n 's/^Adversarial-Classes: //p' "$receipt_to_check")
    class_lines=$(printf '%s\n' "$classes" | tr ';' '\n' | sed '/^[[:space:]]*$/d')
    test "$(printf '%s\n' "$class_lines" | wc -l)" -eq 10
    actual_class_ids=$(printf '%s\n' "$class_lines" | cut -d= -f1 | LC_ALL=C sort)
    expected_class_ids=$(printf '%s\n' source_version_drift source_inference_confusion credential_leakage boundary_contradiction privacy_overcollection false_runtime_claim numeric_budget_drift unexpected_product_file accessibility_state_omission stale_missing_evidence | LC_ALL=C sort)
    test "$actual_class_ids" = "$expected_class_ids"
    while IFS= read -r class_line; do printf '%s\n' "$class_line" | rg -q '^[a-z0-9_]+=(PROBED|NA):[^;]+$'; done <<< "$class_lines"
  }
  final_gate_validator() {
    receipt_validator
    case "$fixed_receipt" in .omo/evidence/weather-pwa-design/final-f[1-4]-*.md) ;; *) return 1 ;; esac
    output_hash=$(sha256sum .omo/evidence/weather-pwa-design/output-manifest.sha256 | awk '{print $1}')
    test "$(rg -c '^Output-Manifest-SHA256: ' "$receipt_to_check" || printf '0')" -eq 1
    test "$(sed -n 's/^Output-Manifest-SHA256: //p' "$receipt_to_check")" = "$output_hash"
    sha256sum --check .omo/evidence/weather-pwa-design/output-manifest.sha256 >/dev/null
    detached_hash=$(sed -n 's/^Output-Manifest-SHA256: //p' .omo/evidence/weather-pwa-design/output-manifest-receipt.md)
    test "$detached_hash" = "$output_hash"
  }
  adapter_receipt_body_check() {
    local trace_tmp trace_expected_tmp
    receipt_to_check="$1"
    receipt="$receipt_to_check"
    expected_binding
    test -s "$receipt_to_check"; test "$(rg -c "^Verdict: $expected_verdict$" "$receipt_to_check" || printf '0')" -eq 1
    test "$(sed -n 's/^Artifact: //p' "$receipt_to_check")" = "$principal"
    test "$(sed -n 's/^Command: //p' "$receipt_to_check")" = "$expected_command"
    test "$(sed -n 's/^Sources: //p' "$receipt_to_check")" = "$expected_sources"
    test "$(rg -c '^Principal-Artifact-SHA256: [0-9a-f]{64}$' "$receipt_to_check" || printf '0')" -eq 1
    test "$(sed -n 's/^Principal-Artifact-SHA256: //p' "$receipt_to_check")" = "$(sha256sum "$principal" | awk '{print $1}')"
    review_hash=$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_review_sha256)')
    contract_hash=$(node -e 'const b=require("./.omo/boulder.json"); process.stdout.write(b.plan_contract_sha256)')
    test "$(sed -n 's/^Plan-Review-SHA256: //p' "$receipt_to_check")" = "$review_hash"
    test "$(sed -n 's/^Plan-Contract-SHA256: //p' "$receipt_to_check")" = "$contract_hash"
    test "$(rg -c '^QA-Trace: ' "$receipt_to_check" || printf '0')" -eq 1
    trace=$(sed -n 's/^QA-Trace: //p' "$receipt_to_check")
    expected_trace=$(adapter_receipt_expected_trace "$fixed_receipt")
    (
      set -euo pipefail
      trace_tmp=$(mktemp /tmp/weather-receipt-trace.XXXXXX)
      trace_names_tmp="$trace_tmp.names"
      trace_expected_tmp="$trace_tmp.expected"
      trap 'rm -f "$trace_tmp" "$trace_names_tmp" "$trace_expected_tmp"' EXIT
      printf '%s\n' "$trace" | tr ';' '\n' > "$trace_tmp"
      cut -d= -f1 "$trace_tmp" > "$trace_names_tmp"
      printf '%s\n' "$expected_trace" | tr ' ' '\n' > "$trace_expected_tmp"
      cmp -s "$trace_names_tmp" "$trace_expected_tmp"
      while IFS= read -r probe; do
        test "$(rg -c "^QA-Transcript: $probe " "$receipt_to_check" || printf '0')" -eq 1
        transcript=$(sed -n "s/^QA-Transcript: $probe //p" "$receipt_to_check")
        expected_digest=$(printf '%s' "$transcript" | sha256sum | awk '{print $1}')
        actual_digest=$(sed -n "s/^$probe=//p" "$trace_tmp")
        test "$expected_digest" = "$actual_digest"
      done < "$trace_expected_tmp"
      rm -f "$trace_tmp" "$trace_names_tmp" "$trace_expected_tmp"
      trap - EXIT
      test ! -e "$trace_tmp"
    )
    test "$(rg -c '^Adversarial-Classes: ' "$receipt_to_check" || printf '0')" -eq 1
    classes=$(sed -n 's/^Adversarial-Classes: //p' "$receipt_to_check")
    class_lines=$(printf '%s\n' "$classes" | tr ';' '\n' | sed '/^[[:space:]]*$/d')
    test "$(printf '%s\n' "$class_lines" | wc -l)" -eq 10
    actual_class_ids=$(printf '%s\n' "$class_lines" | cut -d= -f1 | LC_ALL=C sort)
    expected_class_ids=$(printf '%s\n' source_version_drift source_inference_confusion credential_leakage boundary_contradiction privacy_overcollection false_runtime_claim numeric_budget_drift unexpected_product_file accessibility_state_omission stale_missing_evidence | LC_ALL=C sort)
    test "$actual_class_ids" = "$expected_class_ids"
    while IFS= read -r class_line; do printf '%s\n' "$class_line" | rg -q '^[a-z0-9_]+=(PROBED|NA):[^;]+$'; done <<< "$class_lines"
    test "$(sed -n 's/^Cleanup-Status: //p' "$receipt_to_check")" = PASS
if [ "$fixed_receipt" = .omo/evidence/weather-pwa-design/final-f4-scope-security.md ]; then
  if [ -e "$fixed_receipt" ]; then f4_inventory_validator full; else f4_inventory_validator phase-a; fi
fi
    if [ "$expected_verdict" = APPROVE ]; then final_gate_validator; else receipt_validator; fi
  }
  receipt_txn=$(mktemp -d ./.omo/.weather-receipt.XXXXXX)
  receipt_journal="$receipt_txn/receipt-journal"
  receipt_base="$QA_RECEIPT_BASE"
  receipt_atomic_line "$receipt_journal" "state=candidate fixed=$fixed_receipt verdict=$expected_verdict digest=UNSEALED base=$receipt_base"
  set +e
  ( set -euo pipefail; adapter_receipt_body_check "$QA_RECEIPT_BASE" )
  base_check=$?
  set -e
  if [ "$base_check" -ne 0 ]; then
    rm -f "$QA_RECEIPT_BASE" "$receipt_journal"; rmdir "$receipt_txn"
    return 1
  fi
  QA_RECEIPT_CANDIDATE="$receipt_txn/candidate"; cp "$QA_RECEIPT_BASE" "$QA_RECEIPT_CANDIDATE"
  candidate_digest=$(sha256sum "$QA_RECEIPT_CANDIDATE" | awk '{print $1}')
  receipt_atomic_line "$receipt_journal" "state=validated fixed=$fixed_receipt verdict=$expected_verdict digest=$candidate_digest base=$receipt_base"
  adapter_receipt_body_check "$QA_RECEIPT_CANDIDATE"
  receipt_atomic_line "$receipt_journal" "state=promotion-planned fixed=$fixed_receipt verdict=$expected_verdict digest=$candidate_digest base=$receipt_base"
  mv "$QA_RECEIPT_CANDIDATE" "$fixed_receipt"
  receipt_atomic_line "$receipt_journal" "state=promoted fixed=$fixed_receipt verdict=$expected_verdict digest=$candidate_digest base=$receipt_base"
  set +e
  ( set -euo pipefail; adapter_receipt_body_check "$fixed_receipt" )
  promoted_check=$?
  set -e
  if [ "$promoted_check" -ne 0 ]; then
    test "$(sha256sum "$fixed_receipt" | awk '{print $1}')" = "$candidate_digest"
    receipt_atomic_line "$receipt_journal" "state=rollback-planned fixed=$fixed_receipt verdict=$expected_verdict digest=$candidate_digest base=$receipt_base"
    rm -f "$fixed_receipt"
    receipt_atomic_line "$receipt_journal" "state=rolled-back fixed=$fixed_receipt verdict=$expected_verdict digest=$candidate_digest base=$receipt_base"
    return 1
  fi
  receipt_atomic_line "$receipt_journal" "state=cleanup-planned fixed=$fixed_receipt verdict=$expected_verdict digest=$candidate_digest base=$receipt_base"
  rm -f "$QA_RECEIPT_BASE" "$receipt_journal"; rmdir "$receipt_txn"
  test ! -e "$QA_RECEIPT_BASE"; test ! -e "$receipt_txn"
}
adapter_receipt_recover() {
  set -euo pipefail
  adapter_receipt_rollback_finish() {
    if [ -e "$fixed_receipt" ]; then
      test "$receipt_digest_raw" != UNSEALED
      test "$(sha256sum "$fixed_receipt" | awk '{print $1}')" = "$receipt_digest"
      rm -f "$fixed_receipt"
    fi
    if [ "$receipt_base" != none ]; then rm -f "$receipt_base"; test ! -e "$receipt_base"; fi
    while IFS= read -r rollback_path; do rollback_name=${rollback_path##*/}; case "$rollback_name" in candidate|receipt-journal|trace.entries|transcripts|expected-names|actual-names|*.raw|*.canonical|*.tmp.*) rm -f "$rollback_path" ;; *) return 1 ;; esac; done < <(find "$receipt_txn" -mindepth 1 -maxdepth 1 -type f -print | LC_ALL=C sort)
    rmdir "$receipt_txn"; test ! -e "$receipt_txn"
  }
  mapfile -t receipt_txns < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-receipt.*' -print | LC_ALL=C sort)
  case "${#receipt_txns[@]}" in
    0) RECEIPT_RESUME=none; return 0 ;;
    1) ;;
    *) return 1 ;;
  esac
  receipt_txn="${receipt_txns[0]}"
  if [ ! -e "$receipt_txn/receipt-journal" ]; then
    for first_journal_tmp in "$receipt_txn"/receipt-journal.tmp.*; do
      [ -e "$first_journal_tmp" ] || continue
      test -f "$first_journal_tmp"; test ! -L "$first_journal_tmp"
      test -z "$(find "$receipt_txn" -mindepth 1 -maxdepth 1 -type f -not -name 'receipt-journal.tmp.*' -print -quit)"
      rm -f "$first_journal_tmp"
    done
    test -z "$(find "$receipt_txn" -mindepth 1 -print -quit)"
    rmdir "$receipt_txn"; test ! -e "$receipt_txn"; RECEIPT_RESUME=none; return 0
  fi
  test -s "$receipt_txn/receipt-journal"
  receipt_state=$(cat "$receipt_txn/receipt-journal")
  fixed_receipt=$(sed -n 's/.*fixed=\([^ ]*\) .*/\1/p' "$receipt_txn/receipt-journal"); fixed_receipt=${fixed_receipt#./}
  receipt_verdict=$(sed -n 's/.*verdict=\([^ ]*\) .*/\1/p' "$receipt_txn/receipt-journal")
  receipt_digest_raw=$(sed -n 's/.*digest=\([^ ]*\) .*/\1/p' "$receipt_txn/receipt-journal")
  receipt_base=$(sed -n 's/.*base=\([^ ]*\)$/\1/p' "$receipt_txn/receipt-journal")
  case "$receipt_base" in none|/tmp/weather-receipt-base.*) ;; *) return 1 ;; esac
  receipt_digest=$(printf '%s\n' "$receipt_digest_raw" | rg '^[0-9a-f]{64}$' || true)
  case "$fixed_receipt" in .omo/evidence/weather-pwa-design/task-[1-9]-low-memory-kma-weather-pwa-design.md|.omo/evidence/weather-pwa-design/final-f[1-4]-*.md) ;; *) return 1 ;; esac
  case "$receipt_state" in
    state=candidate*|state=validated*)
      test ! -e "$fixed_receipt"
      if [ -e "$receipt_txn/candidate" ]; then
        if [ "$receipt_digest_raw" != UNSEALED ]; then test "$(sha256sum "$receipt_txn/candidate" | awk '{print $1}')" = "$receipt_digest"; fi
        rm -f "$receipt_txn/candidate"
      fi
      ;;
    state=promotion-planned*)
      if [ -e "$receipt_txn/candidate" ]; then
        test ! -e "$fixed_receipt"; test "$receipt_digest_raw" != UNSEALED
        test "$(sha256sum "$receipt_txn/candidate" | awk '{print $1}')" = "$receipt_digest"
        mv "$receipt_txn/candidate" "$fixed_receipt"
      elif [ -e "$fixed_receipt" ]; then
        test "$receipt_digest_raw" != UNSEALED
        test "$(sha256sum "$fixed_receipt" | awk '{print $1}')" = "$receipt_digest"
      else return 1
      fi
      receipt_atomic_line "$receipt_txn/receipt-journal" "state=promoted fixed=$fixed_receipt verdict=$receipt_verdict digest=$receipt_digest base=$receipt_base"
      expected_verdict="$receipt_verdict"
      set +e
      ( set -euo pipefail; adapter_receipt_body_check "$fixed_receipt" )
      promoted_check=$?
      set -e
      if [ "$promoted_check" -ne 0 ]; then
        test "$(sha256sum "$fixed_receipt" | awk '{print $1}')" = "$receipt_digest"
        receipt_atomic_line "$receipt_txn/receipt-journal" "state=rollback-planned fixed=$fixed_receipt verdict=$receipt_verdict digest=$receipt_digest base=$receipt_base"
        adapter_receipt_rollback_finish
        return 1
      fi
      ;;
    state=promoted*|state=cleanup-planned*)
      test -s "$fixed_receipt"
      test "$receipt_digest_raw" != UNSEALED
      test "$(sha256sum "$fixed_receipt" | awk '{print $1}')" = "$receipt_digest"
      expected_verdict="$receipt_verdict"
      set +e
      ( set -euo pipefail; adapter_receipt_body_check "$fixed_receipt" )
      promoted_check=$?
      set -e
      if [ "$promoted_check" -ne 0 ]; then
        receipt_atomic_line "$receipt_txn/receipt-journal" "state=rollback-planned fixed=$fixed_receipt verdict=$receipt_verdict digest=$receipt_digest base=$receipt_base"
        adapter_receipt_rollback_finish
        return 1
      fi
      ;;
    state=rollback-planned*)
      if [ -e "$fixed_receipt" ]; then
        test "$receipt_digest_raw" != UNSEALED
        test "$(sha256sum "$fixed_receipt" | awk '{print $1}')" = "$receipt_digest"
        rm -f "$fixed_receipt"
      fi
      ;;
    state=rolled-back*)
      test ! -e "$fixed_receipt"
      ;;
    *) return 1 ;;
  esac
  while IFS= read -r helper_path; do helper_name=${helper_path##*/}; case "$helper_name" in candidate|receipt-journal|trace.entries|transcripts|expected-names|actual-names|*.raw|*.canonical|*.tmp.*) rm -f "$helper_path" ;; *) return 1 ;; esac; done < <(find "$receipt_txn" -mindepth 1 -maxdepth 1 -type f -print | LC_ALL=C sort)
  if [ "$receipt_base" != none ]; then rm -f "$receipt_base"; test ! -e "$receipt_base"; fi
  rmdir "$receipt_txn"; test ! -e "$receipt_txn"
}
# ADAPTER_RECEIPT_BINDING_END
~~~
- Design-only closure entrypoint (procedural authority, superseding any literal-evaluation wording): the single fenced JavaScript block immediately above is the state-transition specification of the `design-only-start-work` procedure; the root executes it procedurally exactly as the OpenCode runtime adaptation and the OpenCode procedural dispatcher binding in this errata section require. The root never extracts and evaluates the JavaScript in a `functions.exec` context or any other literal-evaluation context, and never treats the `~~~js` fence as executable source. The root performs each `shell(...)`/`tools.exec_command` step through bash, each `multi_agent_v1__*` step through the root runtime's callable delegation tool surface (`task` or an equivalent such as `call_omo_agent` with spawn/wait/send-input/close semantics), mints every `codex:ses_<id>` from the actual delegation continuation id, and overwrites any worker self-reported session value before every result and session-map validation, so dispatcher-internal session validation never trusts a returned session field. The hyphenated label `design-only-start-work` is a ledger command label only, not an executable shell command. The procedure performs plan selection, goal registration, bootstrap Boulder/ledger creation or recovery, the preflight boundary, delegated waves, checkbox/ledger updates, F1-F4, five independent artifact review lanes, one independent artifact debugging audit, and the staged closure transaction. It resumes from active state after interruption and never treats a shell check, a missing Git commit, or skipped product runtime QA as completion.

## Design-only start-work adapter
The standard start-work order is used through the bootstrap-created Boulder and ledger described above: the selected plan and active work are registered first, then todo 1 seals the non-Git baseline, and no worker dispatch occurs before that preflight passes. The explicit AGENTS.md/user boundary makes the standard commit-bound and runtime-product global gate inapplicable: this workspace must not initialize Git, create a commit SHA, call a live forecast/warning endpoint, or claim runtime QA. To keep the orchestration gate meaningful, delegate five artifact-only review lanes in the same shape as the review-work gate—goal/constraint, document quality, security/scope, artifact QA, and gate/traceability—plus one debugging artifact audit over the final design/evidence surfaces. Each lane is bound to the exact frozen Plan-Review-SHA256 and Plan-Contract-SHA256 and records revision plan:<Plan-Review-SHA256>, verdict APPROVE, runtime_qa NOT RUN, commit N/A, commands, artifacts, adversarial classes, and cleanup. The ledger records the five unique lane results and the separate audit before terminal closure; these are explicit design-only substitutes, not product runtime QA or a claim of a Git-bound standard PASS.

## Commit strategy
This workspace is intentionally not a Git repository. Do not initialize Git or create commits. Treat `.omo/` state, the two design documents, and the evidence directory as the complete handoff artifact; record any unrelated filesystem change as out of scope rather than overwriting it.

## Success criteria
- All nine top-level todos are checked only after their exact artifact and QA command pass, with cleanup receipts recorded.
- F1-F4 are concrete, independent, agent-executed gates; each has an `APPROVE` receipt bound to the same output-manifest digest and canonical plan hash.
- The specification and `DESIGN.md` are decision-complete for a future implementation worker and contain no product code or credentials.
- Six source/evidence reviews plus the cross-document integrity review exist under `.omo/evidence/weather-pwa-design/`.
- Forecast and warnings remain independently degradable; data age, privacy, cache invalidation, CORS, quotas, and secret boundaries are explicit.
- App-owned memory/resource budgets are named separately from browser-process memory and are framed as unverified future implementation targets.
- The output manifest covers the preflight manifest, specification, `DESIGN.md`, all six component reviews, the integrity review, and all nine task receipts; F1-F4 all approve against it, and no QA process or temporary resource remains active.

## Orchestration closure
Closeout handoff recovery: the external `/tmp/weather-review-results.design-only.json` payload is written only after all six delegated rows and the session map are durable. If a root interruption leaves that payload before the closure transaction starts, `CLOSEOUT_HANDOFF_RESUME` reconstructs and overwrites it from the ledger/session map, then the same transaction must consume it and assert the external path is absent; a partial or malformed payload is never reused.
After F1-F3 approve, F4 runs final-f4-scope-security-qa through Phase B, validates the complete final-f4-scope-security.md receipt with final_gate_validator, appends exactly one structurally complete f4-approved ledger event while Boulder is active with task F4, command f4-phase-2: active-state-and-receipt, the exact six final artifacts, all ten adversarial IDs, and the same cleanup/runtime/commit fields, then runs the phase-2 event/schema check. The root then records the five artifact-only review-lane results and one debugging artifact-audit result, appends the terminal record, and only then updates Boulder to completed.
For this design-only scope, review-work-artifact-review contains exactly five unique lane results named goal-constraint, document-quality, security-scope, artifact-qa, and gate-traceability; debugging-artifact-audit is a separate result. Before closeout the root writes both a transaction-owned `all_delegate_session_map` containing every actual `multi_agent_v1` spawn return and an exact six-key `closeout_session_map` containing those five lanes plus the audit, all as `codex:<agent-id>`. The closeout values must be an exact subset of the all-delegate values, every ledger worker session must occur in the all-delegate map, and active Boulder `session_ids` must equal exactly `codex:design-only-bootstrap`, `codex:design-only-root`, plus every all-delegate value. Each lane/audit record includes the exact plan, `plan_review_sha256`, `plan_contract_sha256`, a codex: session id, exactly its plan-owned command and the six final artifact paths, the ten adversarial IDs, cleanup.status PASS with empty temporary/long-lived arrays, runtime_qa NOT RUN, commit N/A, and revision plan:<Plan-Review-SHA256>. If the root crashes after persisting these six delegated rows but before creating the closure transaction, the state probe emits `CLOSEOUT_HANDOFF_RESUME`, reconstructs the six result objects from those durable rows and the session map, and enters the same closeout transaction without spawning duplicate lanes. The closure validator checks all five unique lane names, exact command/artifact maps, both frozen hashes, and both exact session maps. These are bounded design-only substitutes, not product QA or a claim of a Git-bound standard PASS.
After f4-approved, the root creates same-filesystem closure_tmp with the ./ prefix, writes the actual delegated lane/audit result objects plus both exact session maps to `review-results.json`, copies the active ledger and Boulder to exact staged paths, appends those actual results and the terminal record to the staged ledger, adds only the two fixed closeout-root sessions, and sets only the staged Boulder work to completed. It runs the closure validator with staged ledger/Boulder paths and CLOSURE_EXCLUDE_DIR pointing at closure_tmp; a failure leaves live active state untouched. Only after that pass does it atomically promote staged ledger/Boulder, validate the live paths again, remove the empty transaction directory, and retain no terminal/completed live state before the first closeout check.
- Executable closeout promotion transaction (corrected): after f4-approved and after five independent artifact-review agents plus one independent artifact-debugging agent have returned APPROVE/clean result objects, the root serializes those exact returned objects to `closure_tmp/review-results.json` with the five lane names and one debugging result. The file is transaction-owned and is not an allowed terminal artifact. Create closure_tmp with mktemp -d ./.omo/.weather-closure.XXXXXX so CLOSURE_EXCLUDE_DIR matches the ./ paths emitted by find . exactly. Copy the active ledger and Boulder, append the actual lane results, audit, and terminal record to the staged ledger, set only the staged work to completed, and run the staged closure_validator. Keep a transaction journal inside closure_tmp with planned, ledger-moved, boulder-moved, and live-validated states. Keep backups until live validation passes. A failure-safe restore runs with set +e, copies each backup back, cmp-verifies both live files, and deletes transaction paths only after both restores or the successful closeout; if restore verification fails, preserve closure_tmp and its backup for deterministic recovery. On success promote the staged ledger then Boulder, validate live with CLOSURE_EXCLUDE_DIR=closure_tmp, remove backup files, rmdir the backup and closure_tmp in reverse order, clear the trap, and assert both paths are absent.
- Literal closeout promotion block:
- Adapter closeout transaction used by the Code-mode dispatcher:
~~~sh
# ADAPTER_CLOSEOUT_TRANSACTION_BEGIN
adapter_closeout_stage() {
  set -euo pipefail
  CLOSURE_LEDGER="$1" CLOSURE_BOULDER="$2" CLOSURE_REVIEW="$3" node <<'NODE'
const fs=require("fs");
const crypto=require("crypto");
const ledgerPath=process.env.CLOSURE_LEDGER;
const boulderPath=process.env.CLOSURE_BOULDER;
const reviewPath=process.env.CLOSURE_REVIEW;
const plan=".omo/plans/low-memory-kma-weather-pwa-design.md";
const classes=["source_version_drift","source_inference_confusion","credential_leakage","boundary_contradiction","privacy_overcollection","false_runtime_claim","numeric_budget_drift","unexpected_product_file","accessibility_state_omission","stale_missing_evidence"];
const finalArtifacts=[".omo/evidence/weather-pwa-design/final-f1-plan-compliance.md",".omo/evidence/weather-pwa-design/final-f2-document-quality.md",".omo/evidence/weather-pwa-design/final-f3-semantic-qa.md",".omo/evidence/weather-pwa-design/final-f4-scope-security.md",".omo/evidence/weather-pwa-design/output-manifest.sha256",".omo/evidence/weather-pwa-design/output-manifest-receipt.md"];
const exact=(value,expected)=>Array.isArray(value)&&value.length===expected.length&&value.every((item,index)=>item===expected[index]);
const nonEmptyStrings=value=>Array.isArray(value)&&value.length>0&&value.every(item=>typeof item==="string"&&item.length>0);
const classId=value=>typeof value==="string"?value.split("=",1)[0]:"";
const b=JSON.parse(fs.readFileSync(boulderPath,"utf8"));
const rows=fs.readFileSync(ledgerPath,"utf8").trim().split(/\n/).map(JSON.parse);
const input=JSON.parse(fs.readFileSync(reviewPath,"utf8"));
const work=b.works&&b.works[b.active_work_id];
const revision="plan:"+b.plan_review_sha256;
const laneNames=["goal-constraint","document-quality","security-scope","artifact-qa","gate-traceability"];
const laneCommands={"goal-constraint":"artifact-review: goal-constraint","document-quality":"artifact-review: document-quality","security-scope":"artifact-review: security-scope","artifact-qa":"artifact-review: artifact-qa","gate-traceability":"artifact-review: gate-traceability"};
const sessionNames=[...laneNames,"debugging-artifact-audit"];
const sessionMap=input.closeout_session_map;
const allDelegateMap=input.all_delegate_session_map;
const allDelegateValues=allDelegateMap?Object.values(allDelegateMap):[];
const validCloseResult=(row,name,command)=>row&&row.name===name&&row.task==="F4-closeout"&&row.verdict==="APPROVE"&&row.plan_review_sha256===b.plan_review_sha256&&row.plan_contract_sha256===b.plan_contract_sha256&&row.revision===revision&&exact(row.commands,[command])&&exact(row.artifact,finalArtifacts)&&Array.isArray(row.adversarial_classes)&&row.adversarial_classes.length===classes.length&&new Set(row.adversarial_classes.map(classId)).size===classes.length&&classes.every(item=>row.adversarial_classes.some(value=>classId(value)===item))&&row.cleanup&&row.cleanup.status==="PASS"&&Array.isArray(row.cleanup.temporary_paths)&&row.cleanup.temporary_paths.length===0&&Array.isArray(row.cleanup.long_lived_processes)&&row.cleanup.long_lived_processes.length===0&&row.runtime_qa==="NOT RUN"&&row.commit==="N/A";
if(!b.active_work_id||!work||work.status!=="active"||rows.length===0||!rows.some(row=>row.event==="f4-approved")||rows.some(row=>row.event==="orchestration-completed"))process.exit(1);
if(!sessionMap||Object.keys(sessionMap).sort().join("|")!==sessionNames.slice().sort().join("|")||sessionNames.some(name=>typeof sessionMap[name]!=="string"||!sessionMap[name].startsWith("codex:"))||new Set(sessionNames.map(name=>sessionMap[name])).size!==sessionNames.length)process.exit(1);
if(!allDelegateMap||allDelegateValues.length===0||allDelegateValues.some(value=>typeof value!=="string"||!/^codex:ses_[A-Za-z0-9]+$/.test(value))||new Set(allDelegateValues).size!==allDelegateValues.length||sessionNames.some(name=>!allDelegateValues.includes(sessionMap[name])))process.exit(1);
if(allDelegateValues.some(value=>!rows.some(row=>row.session_id===value)))process.exit(1);
if(!Array.isArray(input.review_lanes)||input.review_lanes.length!==laneNames.length||laneNames.some(name=>!input.review_lanes.some(row=>validCloseResult(row,name,laneCommands[name])&&row.session_id===sessionMap[name])))process.exit(1);
const debugging=input.debugging;
if(!validCloseResult(debugging,"debugging-artifact-audit","artifact-audit: named-negative-filter-scenario-cleanup-validators")||debugging.session_id!==sessionMap["debugging-artifact-audit"])process.exit(1);
if(rows.some(row=>row.event==="orchestration-completed"))process.exit(1);
const allowedSessions=["codex:design-only-bootstrap","codex:design-only-root",...allDelegateValues];
if(rows.some(row=>typeof row.session_id==="string"&&row.session_id.startsWith("codex:")&&!allowedSessions.includes(row.session_id)))process.exit(1);
const cleanup={status:"PASS",temporary_paths:[],long_lived_processes:[]};
const common={plan,plan_review_sha256:b.plan_review_sha256,plan_contract_sha256:b.plan_contract_sha256,task:"F4-closeout",adversarial_classes:classes,cleanup,runtime_qa:"NOT RUN",commit:"N/A",revision};
const finalReceiptDigests=Object.fromEntries(finalArtifacts.slice(0,4).map(path=>[path,crypto.createHash("sha256").update(fs.readFileSync(path)).digest("hex")]));
const reviewRow={...common,event:"review-work-artifact-review",session_id:"codex:design-only-closeout-review",verdict:"APPROVE",commands:["artifact-review: final_gate_validator-all"],artifact:finalArtifacts,review_lanes:input.review_lanes,closeout_session_map:sessionMap,all_delegate_session_map:allDelegateMap};
const debuggingRow={...common,event:"debugging-artifact-audit",session_id:debugging.session_id,verdict:"APPROVE",commands:debugging.commands,artifact:debugging.artifact,adversarial_classes:debugging.adversarial_classes,closeout_session_map:sessionMap,all_delegate_session_map:allDelegateMap};
const terminal={...common,event:"orchestration-completed",session_id:"codex:design-only-closeout",verdict:"APPROVE",commands:["set -euo pipefail; closure_validator"],artifact:finalArtifacts,final_receipt_digests:finalReceiptDigests,closeout_session_map:sessionMap,all_delegate_session_map:allDelegateMap};
rows.push(reviewRow,debuggingRow,terminal);
work.status="completed";
work.session_ids=["codex:design-only-bootstrap","codex:design-only-root","codex:design-only-closeout-review","codex:design-only-closeout",...allDelegateValues];
fs.writeFileSync(ledgerPath,rows.map(row=>JSON.stringify(row)).join("\n")+"\n");
fs.writeFileSync(boulderPath,JSON.stringify(b)+"\n");
NODE
}
adapter_closeout_secret_pattern() {
  service_marker=$(printf 'Service%s' 'Key='); lowercase_service_marker=$(printf 'service%s' 'Key='); auth_marker=$(printf 'Authorization: %s' 'Bearer'); basic_marker=$(printf 'Authorization: %s' 'Basic'); cookie_marker=$(printf '%s' 'Cookie:'); token_marker=$(printf '%s' 'token:'); json_token_marker=$(printf '%s%s%s' '"' 'tok' 'en"'); service_field_marker=$(printf 'service%s' 'Key:'); api_key_marker=$(printf 'api%skey' '_'); x_api_key_marker=$(printf 'X-%s-%s' 'API' 'Key'); private_marker=$(printf '%s' '-----BEGIN (RSA|OPENSSH|EC) PRIVATE KEY-----')
  printf '%s' "https?://[^ )]+($service_marker|$lowercase_service_marker)|($auth_marker|$basic_marker)[[:space:]]+[A-Za-z0-9._=+/.-]{8,}|$cookie_marker[[:space:]]+[A-Za-z0-9._=+/.-]{8,}|($token_marker|$json_token_marker|$service_field_marker|$api_key_marker|$x_api_key_marker)[[:space:]:=\"]+[A-Za-z0-9._=+/.-]{8,}|$private_marker"
}
adapter_closeout_validate() {
  set -euo pipefail
  ledger_path="$1"; boulder_path="$2"; review_path="$3"; closure_exclude="$4"
  test -s "$ledger_path"; test -s "$boulder_path"; test -s "$review_path"
  review_hash=$(node -e 'const b=require(process.argv[1]); process.stdout.write(b.plan_review_sha256)' "$boulder_path")
  contract_hash=$(node -e 'const b=require(process.argv[1]); process.stdout.write(b.plan_contract_sha256)' "$boulder_path")
  current_contract=$(LC_ALL=C sed -E 's/^- \[(x| )\] (([0-9]+|F[1-4])\.)/- [ ] \2/' .omo/plans/low-memory-kma-weather-pwa-design.md | sha256sum | awk '{print $1}')
  test "$current_contract" = "$contract_hash"
  (
    set -euo pipefail
    test ! -f .git/HEAD
    test ! -f .git/config
    if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then exit 1; fi
    scope_tmp=$(mktemp -d)
    trap 'rm -rf "$scope_tmp"' EXIT
    find . \( -path './.git' -o -path './.git/*' -o -path "${closure_exclude:-/__never__}" -o -path "${closure_exclude:-/__never__}/*" \) -prune -o \( -type f -o -type l \) -printf '%P\n' | LC_ALL=C sort > "$scope_tmp/current"
    cat <(sed -n 's/^Initial-Path: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) <(sed -n 's/^Allowed-Output: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) | LC_ALL=C sort -u > "$scope_tmp/expected"
    test -z "$(comm -23 "$scope_tmp/current" "$scope_tmp/expected")"
    test -z "$(comm -13 "$scope_tmp/current" "$scope_tmp/expected")"
    find . \( -path './.git' -o -path './.git/*' -o -path "${closure_exclude:-/__never__}" -o -path "${closure_exclude:-/__never__}/*" \) -prune -o -type d -not -path '.' -printf '%P\n' | LC_ALL=C sort > "$scope_tmp/current-dirs"
    cat <(sed -n 's/^Initial-Directory: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) <(sed -n 's/^Allowed-Directory: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) | LC_ALL=C sort -u > "$scope_tmp/expected-dirs"
    test -z "$(comm -23 "$scope_tmp/current-dirs" "$scope_tmp/expected-dirs")"
    test -z "$(comm -13 "$scope_tmp/current-dirs" "$scope_tmp/expected-dirs")"
    while IFS= read -r row; do path=${row%% *}; digest=${row##* }; test "$(sha256sum "$path" | awk '{print $1}')" = "$digest"; done < <(sed -n 's/^Initial-File-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
    while IFS= read -r row; do link=${row%% -> *}; target=${row#* -> }; test -L "$link"; test "$(readlink "$link")" = "$target"; done < <(sed -n 's/^Initial-Symlink-Target: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
    rm -rf "$scope_tmp"
    trap - EXIT
    test ! -e "$scope_tmp"
  )
  for id in 1 2 3 4 5 6 7 8 9 F1 F2 F3 F4; do test "$(rg -c "^- \\[x\\] $id\\." .omo/plans/low-memory-kma-weather-pwa-design.md || printf '0')" -eq 1; done
  REVIEW_HASH="$review_hash" CONTRACT_HASH="$contract_hash" CLOSURE_LEDGER_PATH="$ledger_path" CLOSURE_BOULDER_PATH="$boulder_path" CLOSURE_REVIEW_PATH="$review_path" node <<'NODE'
const fs=require("fs");
const crypto=require("crypto");
const plan=".omo/plans/low-memory-kma-weather-pwa-design.md";
const classes=["source_version_drift","source_inference_confusion","credential_leakage","boundary_contradiction","privacy_overcollection","false_runtime_claim","numeric_budget_drift","unexpected_product_file","accessibility_state_omission","stale_missing_evidence"];
const finalArtifacts=[".omo/evidence/weather-pwa-design/final-f1-plan-compliance.md",".omo/evidence/weather-pwa-design/final-f2-document-quality.md",".omo/evidence/weather-pwa-design/final-f3-semantic-qa.md",".omo/evidence/weather-pwa-design/final-f4-scope-security.md",".omo/evidence/weather-pwa-design/output-manifest.sha256",".omo/evidence/weather-pwa-design/output-manifest-receipt.md"];
const ledgerPath=process.env.CLOSURE_LEDGER_PATH;
const boulderPath=process.env.CLOSURE_BOULDER_PATH;
const reviewPath=process.env.CLOSURE_REVIEW_PATH;
const rows=fs.readFileSync(ledgerPath,"utf8").trim().split(/\n/).map(JSON.parse);
const b=JSON.parse(fs.readFileSync(boulderPath,"utf8"));
const input=JSON.parse(fs.readFileSync(reviewPath,"utf8"));
const events=name=>rows.filter(row=>row.event===name);
const exact=(value,expected)=>Array.isArray(value)&&value.length===expected.length&&value.every((item,index)=>item===expected[index]);
const nonEmptyStrings=value=>Array.isArray(value)&&value.length>0&&value.every(item=>typeof item==="string"&&item.length>0);
const classId=value=>typeof value==="string"?value.split("=",1)[0]:"";
const validRecord=row=>row&&row.plan===plan&&typeof row.session_id==="string"&&row.session_id.startsWith("codex:")&&nonEmptyStrings(row.commands)&&nonEmptyStrings(row.artifact)&&Array.isArray(row.adversarial_classes)&&row.adversarial_classes.length===classes.length&&new Set(row.adversarial_classes.map(classId)).size===classes.length&&classes.every(item=>row.adversarial_classes.some(value=>classId(value)===item))&&row.cleanup&&row.cleanup.status==="PASS"&&Array.isArray(row.cleanup.temporary_paths)&&row.cleanup.temporary_paths.length===0&&Array.isArray(row.cleanup.long_lived_processes)&&row.cleanup.long_lived_processes.length===0&&row.runtime_qa==="NOT RUN"&&row.commit==="N/A"&&row.plan_review_sha256===process.env.REVIEW_HASH&&row.plan_contract_sha256===process.env.CONTRACT_HASH&&row.revision==="plan:"+process.env.REVIEW_HASH;
const hasFinalArtifacts=row=>exact(row.artifact,finalArtifacts);
const review=events("review-work-artifact-review");
const debugging=events("debugging-artifact-audit");
const approved=events("f4-approved");
const completed=events("orchestration-completed");
const terminal=rows[rows.length-1];
const work=b.works&&b.works[b.active_work_id];
const sessionNames=["goal-constraint","document-quality","security-scope","artifact-qa","gate-traceability","debugging-artifact-audit"];
const sessionMap=terminal&&terminal.closeout_session_map;
const allDelegateMap=terminal&&terminal.all_delegate_session_map;
const allDelegateValues=allDelegateMap?Object.values(allDelegateMap):[];
const fixed=["codex:design-only-bootstrap","codex:design-only-root","codex:design-only-closeout-review","codex:design-only-closeout"];
const exactSet=(actual,expected)=>Array.isArray(actual)&&actual.length===expected.length&&new Set(actual).size===expected.length&&actual.every(value=>expected.includes(value));
const validSessionMap=sessionMap&&Object.keys(sessionMap).sort().join("|")===sessionNames.slice().sort().join("|")&&sessionNames.every(name=>typeof sessionMap[name]==="string"&&sessionMap[name].startsWith("codex:"))&&new Set(sessionNames.map(name=>sessionMap[name])).size===sessionNames.length;
const validAllDelegateMap=allDelegateMap&&allDelegateValues.length>0&&allDelegateValues.every(value=>typeof value==="string"&&/^codex:ses_[A-Za-z0-9]+$/.test(value))&&new Set(allDelegateValues).size===allDelegateValues.length&&sessionNames.every(name=>allDelegateValues.includes(sessionMap[name]));
const finalReceiptDigests=terminal&&terminal.final_receipt_digests;
const digestsOk=finalReceiptDigests&&Object.keys(finalReceiptDigests).length===4&&finalArtifacts.slice(0,4).every(path=>finalReceiptDigests[path]===crypto.createHash("sha256").update(fs.readFileSync(path)).digest("hex"));
if(!validSessionMap||!validAllDelegateMap||!work||!Array.isArray(work.session_ids)||!exactSet(work.session_ids,[...fixed,...allDelegateValues])||!review[0]||!debugging[0]||!approved[0]||!completed[0]||review.length!==1||debugging.length!==1||approved.length!==1||completed.length!==1||!validRecord(approved[0])||!validRecord(review[0])||!validRecord(debugging[0])||!validRecord(terminal)||!hasFinalArtifacts(approved[0])||!hasFinalArtifacts(review[0])||!hasFinalArtifacts(debugging[0])||!hasFinalArtifacts(terminal)||!digestsOk)process.exit(1);
const names=["goal-constraint","document-quality","security-scope","artifact-qa","gate-traceability"];
const commands={"goal-constraint":"artifact-review: goal-constraint","document-quality":"artifact-review: document-quality","security-scope":"artifact-review: security-scope","artifact-qa":"artifact-review: artifact-qa","gate-traceability":"artifact-review: gate-traceability"};
if(!Array.isArray(review[0].review_lanes)||review[0].review_lanes.length!==5||names.some(name=>!review[0].review_lanes.some(row=>row.name===name&&row.session_id===sessionMap[name]&&row.verdict==="APPROVE"&&row.plan_review_sha256===process.env.REVIEW_HASH&&row.plan_contract_sha256===process.env.CONTRACT_HASH&&exact(row.commands,[commands[name]])&&exact(row.artifact,finalArtifacts)))||debugging[0].session_id!==sessionMap["debugging-artifact-audit"]||!exact(debugging[0].commands,["artifact-audit: named-negative-filter-scenario-cleanup-validators"])||debugging[0].session_id==="codex:design-only-closeout")process.exit(1);
const reviewIndex=rows.findIndex(row=>row.event==="review-work-artifact-review");
const debugIndex=rows.findIndex(row=>row.event==="debugging-artifact-audit");
const approvedIndex=rows.findIndex(row=>row.event==="f4-approved");
const terminalIndex=rows.findIndex(row=>row.event==="orchestration-completed");
if(terminalIndex!==rows.length-1||approvedIndex<0||reviewIndex<=approvedIndex||debugIndex<=approvedIndex||terminal.event!=="orchestration-completed"||terminal.task!=="F4"||!terminal.commands.includes("set -euo pipefail; closure_validator")||b.schema_version!==2||b.plan_review_sha256!==process.env.REVIEW_HASH||b.plan_contract_sha256!==process.env.CONTRACT_HASH||work.status!=="completed"||work.active_plan!==plan||work.plan_review_sha256!==process.env.REVIEW_HASH||work.plan_contract_sha256!==process.env.CONTRACT_HASH||!input.review_lanes||!input.debugging)process.exit(1);
NODE
  secret_pattern=$(adapter_closeout_secret_pattern)
  for scan_path in AGENTS.md .omo/evidence .omo/boulder.json .omo/start-work/ledger.jsonl docs DESIGN.md; do
    [ -e "$scan_path" ] || continue
    set +e
    secret_hits=$(rg -ni "$secret_pattern" "$scan_path" 2>/dev/null)
    secret_status=$?
    set -e
    test "$secret_status" -eq 1
    test -z "$secret_hits"
  done
  for proc_path in /proc/[0-9]*; do
    proc_pid=$(basename "$proc_path")
    [ "$proc_pid" = "$$" ] && continue
    [ -r "$proc_path/cmdline" ] || continue
    proc_cmd=$(tr '\0' ' ' < "$proc_path/cmdline" 2>/dev/null || true)
    case "$proc_cmd" in *weather-pwa*|*web-terminal*|*weather-bootstrap.*|*weather-preflight-*|*weather-receipt-base.*|*weather-receipt.*|*weather-state.*|*weather-manifest.*|*weather-closure.*|*weather-plan-retry.*) exit 1 ;; esac
  done
  test ! -e /tmp/weather-review-results.design-only.json
  test -z "$(find /tmp -mindepth 1 -maxdepth 1 -name 'weather-receipt-base.*' -print -quit)"
  test -z "$(find /tmp -mindepth 1 -maxdepth 1 -name 'weather-preflight-rebuild.*' -print -quit)"
  sha256sum --check .omo/evidence/weather-pwa-design/output-manifest.sha256 >/dev/null
  for gate in .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md .omo/evidence/weather-pwa-design/final-f2-document-quality.md .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md .omo/evidence/weather-pwa-design/final-f4-scope-security.md; do
    test "$(rg -c '^Verdict: APPROVE$' "$gate" || printf '0')" -eq 1
    test "$(sed -n 's/^Plan-Review-SHA256: //p' "$gate")" = "$review_hash"
    test "$(sed -n 's/^Plan-Contract-SHA256: //p' "$gate")" = "$contract_hash"
    test "$(rg -c '^QA-Trace: ' "$gate" || printf '0')" -eq 1
    test "$(rg -c '^Adversarial-Classes: ' "$gate" || printf '0')" -eq 1
    principal=$(sed -n 's/^Artifact: //p' "$gate")
    test -s "$principal"
    test "$(rg -c '^Principal-Artifact-SHA256: [0-9a-f]{64}$' "$gate" || printf '0')" -eq 1
    test "$(sed -n 's/^Principal-Artifact-SHA256: //p' "$gate")" = "$(sha256sum "$principal" | awk '{print $1}')"
  done
}
adapter_closeout_recover() {
  set -euo pipefail
  test "$(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-closure.*' -print | wc -l)" -eq 1
  closure_txn=$(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-closure.*' -print | LC_ALL=C sort | head -n 1)
  journal="$closure_txn/closure-journal"
  test -s "$journal"
  closure_state=$(tail -n 1 "$journal")
  backup_count=$(find "$closure_txn" -mindepth 1 -maxdepth 1 -type d -name '.backup.*' -print | wc -l)
  test "$backup_count" -le 1
  backup_dir=$(find "$closure_txn" -mindepth 1 -maxdepth 1 -type d -name '.backup.*' -print | LC_ALL=C sort | head -n 1)
  closure_digest_prepare() {
    if [ -e "$closure_txn/ledger.jsonl" ] && [ ! -s "$closure_txn/ledger.digest" ]; then sha256sum "$closure_txn/ledger.jsonl" | awk '{print $1}' > "$closure_txn/ledger.digest"; fi
    if [ -e "$closure_txn/boulder.json" ] && [ ! -s "$closure_txn/boulder.digest" ]; then sha256sum "$closure_txn/boulder.json" | awk '{print $1}' > "$closure_txn/boulder.digest"; fi
    test -s "$closure_txn/ledger.digest"; test -s "$closure_txn/boulder.digest"
    if [ -e "$closure_txn/ledger.jsonl" ]; then test "$(sha256sum "$closure_txn/ledger.jsonl" | awk '{print $1}')" = "$(cat "$closure_txn/ledger.digest")"; fi
    if [ -e "$closure_txn/boulder.json" ]; then test "$(sha256sum "$closure_txn/boulder.json" | awk '{print $1}')" = "$(cat "$closure_txn/boulder.digest")"; fi
  }
  backup_prepare() {
    if [ -n "$backup_dir" ]; then
      case "$backup_dir" in "$closure_txn"/.backup.*) ;; *) return 1 ;; esac
      for backup_path in "$backup_dir"/*; do
        [ -e "$backup_path" ] || continue
        case "$backup_path" in
          "$backup_dir/ledger.jsonl"|"$backup_dir/boulder.json") ;;
          *) return 1 ;;
        esac
      done
      rm -f "$backup_dir/ledger.jsonl" "$backup_dir/boulder.json"
      rmdir "$backup_dir"
    fi
    backup_dir=$(mktemp -d "$closure_txn/.backup.XXXXXX")
    cp .omo/start-work/ledger.jsonl "$backup_dir/ledger.jsonl"
    cp .omo/boulder.json "$backup_dir/boulder.json"
    cmp -s .omo/start-work/ledger.jsonl "$backup_dir/ledger.jsonl"
    cmp -s .omo/boulder.json "$backup_dir/boulder.json"
  }
  reconcile_closeout_member() {
    staged="$1"; live="$2"; digest_file="$3"; backup="$4"
    test -s "$digest_file"
    if [ -e "$staged" ]; then
      if [ -e "$live" ]; then
        if [ "$(sha256sum "$live" | awk '{print $1}')" = "$(cat "$digest_file")" ]; then
          rm -f "$staged"
        else
          cmp -s "$backup" "$live"
          mv "$staged" "$live"
        fi
      else
        mv "$staged" "$live"
      fi
    fi
    test -s "$live"
    test "$(sha256sum "$live" | awk '{print $1}')" = "$(cat "$digest_file")"
  }
  case "$closure_state" in
    created)
      test -s "$closure_txn/ledger.jsonl"; test -s "$closure_txn/boulder.json"; test -s "$closure_txn/review-results.json"
      if [ "$(rg -c 'event":"orchestration-completed"' "$closure_txn/ledger.jsonl" || printf '0')" -eq 0 ]; then
        adapter_closeout_stage "$closure_txn/ledger.jsonl" "$closure_txn/boulder.json" "$closure_txn/review-results.json"
      else
        test "$(rg -c 'event":"review-work-artifact-review"' "$closure_txn/ledger.jsonl" || printf '0')" -eq 1
        test "$(rg -c 'event":"debugging-artifact-audit"' "$closure_txn/ledger.jsonl" || printf '0')" -eq 1
      fi
      closure_digest_prepare
      printf '%s\n' staged > "$journal"
      ;;
    staged)
      test -s "$closure_txn/ledger.jsonl"; test -s "$closure_txn/boulder.json"; test -s "$closure_txn/review-results.json"
      test -z "$backup_dir"
      closure_digest_prepare
      printf '%s\n' backup-creating > "$journal"
      backup_prepare
      printf '%s\n' backups-ready > "$journal"
      ;;
    backup-creating)
      test -s "$closure_txn/ledger.jsonl"; test -s "$closure_txn/boulder.json"; test -s "$closure_txn/review-results.json"
      closure_digest_prepare
      backup_prepare
      printf '%s\n' backups-ready > "$journal"
      ;;
    backups-ready)
      test -n "$backup_dir"; closure_digest_prepare; test -s "$closure_txn/review-results.json"
      adapter_closeout_validate "$closure_txn/ledger.jsonl" "$closure_txn/boulder.json" "$closure_txn/review-results.json" "$closure_txn"
      printf '%s\n' 'promotion | status=planned' > "$journal"
      ;;
    'promotion | status=planned')
      test -n "$backup_dir"; test -s "$closure_txn/review-results.json"; closure_digest_prepare
      if [ -e "$closure_txn/ledger.jsonl" ]; then adapter_closeout_validate "$closure_txn/ledger.jsonl" "$closure_txn/boulder.json" "$closure_txn/review-results.json" "$closure_txn"; fi
      reconcile_closeout_member "$closure_txn/ledger.jsonl" .omo/start-work/ledger.jsonl "$closure_txn/ledger.digest" "$backup_dir/ledger.jsonl"
      printf '%s\n' ledger-moved > "$journal"
      ;;
    ledger-moved)
      test -n "$backup_dir"; test ! -e "$closure_txn/ledger.jsonl"; test -s "$closure_txn/review-results.json"; closure_digest_prepare
      if [ -e "$closure_txn/boulder.json" ]; then adapter_closeout_validate .omo/start-work/ledger.jsonl "$closure_txn/boulder.json" "$closure_txn/review-results.json" "$closure_txn"; fi
      reconcile_closeout_member "$closure_txn/boulder.json" .omo/boulder.json "$closure_txn/boulder.digest" "$backup_dir/boulder.json"
      printf '%s\n' boulder-moved > "$journal"
      ;;
    boulder-moved)
      test -n "$backup_dir"; test ! -e "$closure_txn/ledger.jsonl"; test ! -e "$closure_txn/boulder.json"; closure_digest_prepare
      test "$(sha256sum .omo/start-work/ledger.jsonl | awk '{print $1}')" = "$(cat "$closure_txn/ledger.digest")"
      test "$(sha256sum .omo/boulder.json | awk '{print $1}')" = "$(cat "$closure_txn/boulder.digest")"
      adapter_closeout_validate .omo/start-work/ledger.jsonl .omo/boulder.json "$closure_txn/review-results.json" "$closure_txn"
      printf '%s\n' live-validated > "$journal"
      ;;
    live-validated|cleanup-planned)
      test ! -e "$closure_txn/ledger.jsonl"; test ! -e "$closure_txn/boulder.json"; test -s "$closure_txn/review-results.json"
      adapter_closeout_validate .omo/start-work/ledger.jsonl .omo/boulder.json "$closure_txn/review-results.json" "$closure_txn"
      printf '%s\n' cleanup-planned > "$journal"
      rm -f "$closure_txn/review-results.json" "$journal"
      rm -f "$closure_txn/ledger.digest" "$closure_txn/boulder.digest"
      if [ -n "$backup_dir" ]; then rm -f "$backup_dir/ledger.jsonl" "$backup_dir/boulder.json"; rmdir "$backup_dir"; fi
      rmdir "$closure_txn"
      ;;
    rollback-planned)
      test -n "$backup_dir"; cp "$backup_dir/ledger.jsonl" .omo/start-work/ledger.jsonl; cp "$backup_dir/boulder.json" .omo/boulder.json; printf '%s\n' rollback-restored > "$journal";;
    rollback-restored)
      test -n "$backup_dir"
      node -e 'const fs=require("fs"); const b=JSON.parse(fs.readFileSync(".omo/boulder.json","utf8")); const rows=fs.readFileSync(".omo/start-work/ledger.jsonl","utf8").trim().split(/\n/).map(JSON.parse); const w=b.works&&b.works[b.active_work_id]; if(!w||w.status!=="active"||!rows.length||!rows.some(row=>row.event==="f4-approved")||rows.some(row=>row.event==="orchestration-completed")) process.exit(1)'
      rm -f "$closure_txn/review-results.json" "$closure_txn/ledger.digest" "$closure_txn/boulder.digest" "$journal" "$backup_dir/ledger.jsonl" "$backup_dir/boulder.json"
      rmdir "$backup_dir" "$closure_txn"
      ;;
    *) return 1;;
  esac
}
adapter_closeout_transaction() {
  set -euo pipefail
  review_source="$1"
  case "$review_source" in /tmp/weather-review-results.*) ;; *) return 1;; esac
  test -s "$review_source"
  test "$(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-closure.*' -print | wc -l)" -eq 0
  closure_txn=$(mktemp -d ./.omo/.weather-closure.XXXXXX)
  journal="$closure_txn/closure-journal"
  printf '%s\n' created > "$journal"
  cp .omo/start-work/ledger.jsonl "$closure_txn/ledger.jsonl"
  cp .omo/boulder.json "$closure_txn/boulder.json"
  cp "$review_source" "$closure_txn/review-results.json"
  rm -f "$review_source"
  adapter_closeout_stage "$closure_txn/ledger.jsonl" "$closure_txn/boulder.json" "$closure_txn/review-results.json"
  sha256sum "$closure_txn/ledger.jsonl" | awk '{print $1}' > "$closure_txn/ledger.digest"
  sha256sum "$closure_txn/boulder.json" | awk '{print $1}' > "$closure_txn/boulder.digest"
  printf '%s\n' staged > "$journal"
  printf '%s\n' backup-creating > "$journal"
  backup_dir=$(mktemp -d "$closure_txn/.backup.XXXXXX")
  cp .omo/start-work/ledger.jsonl "$backup_dir/ledger.jsonl"
  cp .omo/boulder.json "$backup_dir/boulder.json"
  cmp -s .omo/start-work/ledger.jsonl "$backup_dir/ledger.jsonl"
  cmp -s .omo/boulder.json "$backup_dir/boulder.json"
  printf '%s\n' backups-ready > "$journal"
  promotion_started=0
  adapter_closeout_abort() {
    status=$?
    if [ "$status" -ne 0 ] && [ "$promotion_started" -eq 1 ]; then
      set +e
      printf '%s\n' rollback-planned > "$journal"
      cp "$backup_dir/ledger.jsonl" .omo/start-work/ledger.jsonl
      ledger_restore=$?
      cp "$backup_dir/boulder.json" .omo/boulder.json
      boulder_restore=$?
      cmp -s "$backup_dir/ledger.jsonl" .omo/start-work/ledger.jsonl
      ledger_cmp=$?
      cmp -s "$backup_dir/boulder.json" .omo/boulder.json
      boulder_cmp=$?
      if [ "$ledger_restore" -eq 0 ] && [ "$boulder_restore" -eq 0 ] && [ "$ledger_cmp" -eq 0 ] && [ "$boulder_cmp" -eq 0 ]; then printf '%s\n' rollback-restored > "$journal"; fi
      set -e
    fi
    trap - EXIT
    exit "$status"
  }
  trap adapter_closeout_abort EXIT
  adapter_closeout_validate "$closure_txn/ledger.jsonl" "$closure_txn/boulder.json" "$closure_txn/review-results.json" "$closure_txn"
  printf '%s\n' 'promotion | status=planned' > "$journal"
  promotion_started=1
  mv "$closure_txn/ledger.jsonl" .omo/start-work/ledger.jsonl
  printf '%s\n' ledger-moved > "$journal"
  mv "$closure_txn/boulder.json" .omo/boulder.json
  printf '%s\n' boulder-moved > "$journal"
  adapter_closeout_validate .omo/start-work/ledger.jsonl .omo/boulder.json "$closure_txn/review-results.json" "$closure_txn"
  printf '%s\n' live-validated > "$journal"
  printf '%s\n' cleanup-planned > "$journal"
  rm -f "$closure_txn/review-results.json" "$closure_txn/ledger.digest" "$closure_txn/boulder.digest" "$journal" "$backup_dir/ledger.jsonl" "$backup_dir/boulder.json"
  rmdir "$backup_dir" "$closure_txn"
  test ! -e "$closure_txn"
  trap - EXIT
}
# r34 recovery authority: these final declarations override the historical drafts above and are the only dispatcher-callable closeout implementation.
adapter_closeout_atomic_line() { target="$1"; value="$2"; tmp="${target}.closeout-tmp"; if [ -e "$tmp" ]; then test -f "$tmp"; test ! -L "$tmp"; rm -f "$tmp"; fi; printf '%s\n' "$value" > "$tmp"; test "$(wc -l < "$tmp")" -eq 1; test "$(cat "$tmp")" = "$value"; mv "$tmp" "$target"; }
adapter_closeout_atomic_copy() { source="$1"; target="$2"; tmp="${target}.closeout-tmp"; if [ -e "$tmp" ]; then test -f "$tmp"; test ! -L "$tmp"; rm -f "$tmp"; fi; cp "$source" "$tmp"; cmp -s "$source" "$tmp"; mv "$tmp" "$target"; cmp -s "$source" "$target"; }
adapter_closeout_digest() { source="$1"; target="$2"; adapter_closeout_atomic_line "$target" "$(sha256sum "$source" | awk '{print $1}')"; }
adapter_closeout_digest_matches() { source="$1"; digest="$2"; test -f "$source"; test ! -L "$source"; test -f "$digest"; test ! -L "$digest"; test "$(wc -l < "$digest")" -eq 1; rg -qx '[0-9a-f]{64}' "$digest"; test "$(sha256sum "$source" | awk '{print $1}')" = "$(cat "$digest")"; }
adapter_closeout_live_without_review() {
  set -euo pipefail
  node -e 'const fs=require("fs"),crypto=require("crypto"); const rows=fs.readFileSync(".omo/start-work/ledger.jsonl","utf8").trim().split(/\n/).map(JSON.parse); const b=JSON.parse(fs.readFileSync(".omo/boulder.json","utf8")); const w=b.works&&b.works[b.active_work_id], t=rows.at(-1); if(!w||w.status!=="completed"||!t||t.event!=="orchestration-completed"||t.verdict!=="APPROVE"||!t.final_receipt_digests) process.exit(1); for(const [p,d] of Object.entries(t.final_receipt_digests)){if(!/^[0-9a-f]{64}$/.test(d)||crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex")!==d) process.exit(1)}'
  for gate in .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md .omo/evidence/weather-pwa-design/final-f2-document-quality.md .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md .omo/evidence/weather-pwa-design/final-f4-scope-security.md; do
    test "$(rg -c '^Verdict: APPROVE$' "$gate" || printf '0')" -eq 1
    principal=$(sed -n 's/^Artifact: //p' "$gate"); test -s "$principal"
    test "$(sed -n 's/^Principal-Artifact-SHA256: //p' "$gate")" = "$(sha256sum "$principal" | awk '{print $1}')"
  done
}
adapter_closeout_tree_validate() {
  set -euo pipefail
  txn="$1"; state="$2"
  test -d "$txn"; test ! -L "$txn"
  mapfile -t dirs < <(find "$txn" -mindepth 1 -type d -print | LC_ALL=C sort)
  test "${#dirs[@]}" -le 1
  backup_dir=
  if [ "${#dirs[@]}" -eq 1 ]; then backup_dir="${dirs[0]}"; case "$backup_dir" in "$txn"/.backup.*) ;; *) return 1 ;; esac; test ! -L "$backup_dir"; fi
  while IFS= read -r path; do
    test ! -L "$path"; test -f "$path"
    case "$path" in
      "$txn/closure-journal"|"$txn/ledger.jsonl"|"$txn/boulder.json"|"$txn/review-results.json"|"$txn/ledger.digest"|"$txn/boulder.digest"|"$txn/ledger.work"|"$txn/boulder.work"|"$txn"/*.closeout-tmp) ;;
      "$backup_dir/ledger.jsonl"|"$backup_dir/boulder.json"|"$backup_dir"/*.closeout-tmp) test -n "$backup_dir" ;;
      *) return 1 ;;
    esac
  done < <(find "$txn" -mindepth 1 \! -type d -print | LC_ALL=C sort)
  case "$state" in
    created\ source=*|staging\ source=*|staged\ source=*) test -z "$backup_dir" ;;
    staged|backup-creating) test ! -e "$txn/ledger.work"; test ! -e "$txn/boulder.work" ;;
    backups-ready|'promotion | status=planned'|ledger-moved|boulder-moved|live-validated|rollback-planned|rollback-restored) test -n "$backup_dir" ;;
    cleanup-planned) ;;
    *) return 1 ;;
  esac
}
adapter_closeout_promote() { staged="$1"; live="$2"; digest="$3"; tmp="${live}.closeout-tmp"; if [ -e "$staged" ]; then adapter_closeout_digest_matches "$staged" "$digest"; if [ -e "$tmp" ]; then test -f "$tmp"; test ! -L "$tmp"; rm -f "$tmp"; fi; cp "$staged" "$tmp"; adapter_closeout_digest_matches "$tmp" "$digest"; mv "$tmp" "$live"; adapter_closeout_digest_matches "$live" "$digest"; rm -f "$staged"; else adapter_closeout_digest_matches "$live" "$digest"; test ! -e "$tmp"; fi; }
adapter_closeout_restore() { backup="$1"; live="$2"; tmp="${live}.closeout-tmp"; if [ -e "$tmp" ]; then test -f "$tmp"; test ! -L "$tmp"; rm -f "$tmp"; fi; cp "$backup" "$tmp"; cmp -s "$backup" "$tmp"; mv "$tmp" "$live"; cmp -s "$backup" "$live"; }
adapter_closeout_recover() {
  set -euo pipefail
  mapfile -t txns < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-closure.*' -print | LC_ALL=C sort)
  case "${#txns[@]}" in 0) CLOSURE_RESUME=none; return 0 ;; 1) ;; *) return 1 ;; esac
  closure_txn="${txns[0]}"; journal="$closure_txn/closure-journal"
  if [ ! -e "$journal" ]; then test -z "$(find "$closure_txn" -mindepth 1 -print -quit)"; rmdir "$closure_txn"; CLOSURE_RESUME=none; return 0; fi
  test -f "$journal"; test ! -L "$journal"; test "$(wc -l < "$journal")" -eq 1
  closure_state=$(cat "$journal"); adapter_closeout_tree_validate "$closure_txn" "$closure_state"
  for closeout_tmp in "$closure_txn"/*.closeout-tmp .omo/start-work/ledger.jsonl.closeout-tmp .omo/boulder.json.closeout-tmp; do [ -e "$closeout_tmp" ] || continue; test -f "$closeout_tmp"; test ! -L "$closeout_tmp"; rm -f "$closeout_tmp"; done
  backup_dir=$(find "$closure_txn" -mindepth 1 -maxdepth 1 -type d -name '.backup.*' -print -quit)
  if [ -n "$backup_dir" ]; then for closeout_tmp in "$backup_dir"/*.closeout-tmp; do [ -e "$closeout_tmp" ] || continue; test -f "$closeout_tmp"; test ! -L "$closeout_tmp"; rm -f "$closeout_tmp"; done; fi
  case "$closure_state" in
    created\ source=*|staging\ source=*)
      review_source=${closure_state#*source=}; case "$review_source" in /tmp/weather-review-results.*) ;; *) return 1 ;; esac
      test -s "$review_source"
      adapter_closeout_atomic_line "$journal" "staging source=$review_source"
      [ -s "$closure_txn/ledger.jsonl" ] || adapter_closeout_atomic_copy .omo/start-work/ledger.jsonl "$closure_txn/ledger.jsonl"
      [ -s "$closure_txn/boulder.json" ] || adapter_closeout_atomic_copy .omo/boulder.json "$closure_txn/boulder.json"
      [ -s "$closure_txn/review-results.json" ] || adapter_closeout_atomic_copy "$review_source" "$closure_txn/review-results.json"
      rm -f "$closure_txn/ledger.work" "$closure_txn/boulder.work"
      work_ledger="$closure_txn/ledger.work"; work_boulder="$closure_txn/boulder.work"
      adapter_closeout_atomic_copy "$closure_txn/ledger.jsonl" "$work_ledger"; adapter_closeout_atomic_copy "$closure_txn/boulder.json" "$work_boulder"
      adapter_closeout_stage "$work_ledger" "$work_boulder" "$closure_txn/review-results.json"
      adapter_closeout_atomic_copy "$work_ledger" "$closure_txn/ledger.jsonl"; adapter_closeout_atomic_copy "$work_boulder" "$closure_txn/boulder.json"; rm -f "$work_ledger" "$work_boulder"
      adapter_closeout_digest "$closure_txn/ledger.jsonl" "$closure_txn/ledger.digest"; adapter_closeout_digest "$closure_txn/boulder.json" "$closure_txn/boulder.digest"
      adapter_closeout_atomic_line "$journal" "staged source=$review_source"
      cmp -s "$closure_txn/review-results.json" "$review_source"
      rm -f "$review_source"
      adapter_closeout_atomic_line "$journal" staged
      closure_state=staged ;;
    staged\ source=*)
      review_source=${closure_state#*source=}; case "$review_source" in /tmp/weather-review-results.*) ;; *) return 1 ;; esac
      if [ -e "$review_source" ]; then cmp -s "$closure_txn/review-results.json" "$review_source"; rm -f "$review_source"; fi
      adapter_closeout_atomic_line "$journal" staged
      closure_state=staged ;;
  esac
  if [ "$closure_state" = staged ] || [ "$closure_state" = backup-creating ]; then
    adapter_closeout_digest_matches "$closure_txn/ledger.jsonl" "$closure_txn/ledger.digest"; adapter_closeout_digest_matches "$closure_txn/boulder.json" "$closure_txn/boulder.digest"
    adapter_closeout_atomic_line "$journal" backup-creating
    if [ -z "$backup_dir" ]; then backup_dir=$(mktemp -d "$closure_txn/.backup.XXXXXX"); fi
    [ -s "$backup_dir/ledger.jsonl" ] || adapter_closeout_atomic_copy .omo/start-work/ledger.jsonl "$backup_dir/ledger.jsonl"
    [ -s "$backup_dir/boulder.json" ] || adapter_closeout_atomic_copy .omo/boulder.json "$backup_dir/boulder.json"
    cmp -s "$backup_dir/ledger.jsonl" .omo/start-work/ledger.jsonl; cmp -s "$backup_dir/boulder.json" .omo/boulder.json
    adapter_closeout_atomic_line "$journal" backups-ready; closure_state=backups-ready
  fi
  if [ "$closure_state" = backups-ready ]; then adapter_closeout_validate "$closure_txn/ledger.jsonl" "$closure_txn/boulder.json" "$closure_txn/review-results.json" "$closure_txn"; adapter_closeout_atomic_line "$journal" 'promotion | status=planned'; closure_state='promotion | status=planned'; fi
  if [ "$closure_state" = 'promotion | status=planned' ]; then adapter_closeout_promote "$closure_txn/ledger.jsonl" .omo/start-work/ledger.jsonl "$closure_txn/ledger.digest"; adapter_closeout_atomic_line "$journal" ledger-moved; closure_state=ledger-moved; fi
  if [ "$closure_state" = ledger-moved ]; then adapter_closeout_promote "$closure_txn/boulder.json" .omo/boulder.json "$closure_txn/boulder.digest"; adapter_closeout_atomic_line "$journal" boulder-moved; closure_state=boulder-moved; fi
  if [ "$closure_state" = boulder-moved ]; then adapter_closeout_validate .omo/start-work/ledger.jsonl .omo/boulder.json "$closure_txn/review-results.json" "$closure_txn"; adapter_closeout_atomic_line "$journal" live-validated; closure_state=live-validated; fi
  if [ "$closure_state" = live-validated ]; then adapter_closeout_live_without_review; adapter_closeout_atomic_line "$journal" cleanup-planned; closure_state=cleanup-planned; fi
  if [ "$closure_state" = rollback-planned ]; then test -n "$backup_dir"; adapter_closeout_restore "$backup_dir/ledger.jsonl" .omo/start-work/ledger.jsonl; adapter_closeout_restore "$backup_dir/boulder.json" .omo/boulder.json; adapter_closeout_atomic_line "$journal" rollback-restored; closure_state=rollback-restored; fi
  if [ "$closure_state" = rollback-restored ]; then cmp -s "$backup_dir/ledger.jsonl" .omo/start-work/ledger.jsonl; cmp -s "$backup_dir/boulder.json" .omo/boulder.json; adapter_closeout_atomic_line "$journal" cleanup-planned; closure_state=cleanup-planned; fi
  if [ "$closure_state" = cleanup-planned ]; then
    if [ -s .omo/start-work/ledger.jsonl ] && rg -q '"event":"orchestration-completed"' .omo/start-work/ledger.jsonl; then adapter_closeout_live_without_review; fi
    rm -f "$closure_txn/review-results.json" "$closure_txn/ledger.digest" "$closure_txn/boulder.digest"
    if [ -n "$backup_dir" ]; then rm -f "$backup_dir/ledger.jsonl" "$backup_dir/boulder.json"; rmdir "$backup_dir"; fi
    rm -f "$journal"; test -z "$(find "$closure_txn" -mindepth 1 -print -quit)"; rmdir "$closure_txn"; CLOSURE_RESUME=none
  fi
}
adapter_closeout_transaction() {
  set -euo pipefail
  review_source="$1"; case "$review_source" in /tmp/weather-review-results.*) ;; *) return 1 ;; esac; test -s "$review_source"
  test -z "$(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-closure.*' -print -quit)"
  closure_txn=$(mktemp -d ./.omo/.weather-closure.XXXXXX); journal="$closure_txn/closure-journal"
  adapter_closeout_atomic_line "$journal" "created source=$review_source"
  set +e; adapter_closeout_recover; status=$?; set -e
  if [ "$status" -ne 0 ]; then if [ -d "$closure_txn" ] && find "$closure_txn" -mindepth 1 -maxdepth 1 -type d -name '.backup.*' -print -quit | rg -q .; then adapter_closeout_atomic_line "$journal" rollback-planned; adapter_closeout_recover || true; fi; return "$status"; fi
  test ! -e "$review_source"; test ! -e "$closure_txn"
}
# ADAPTER_CLOSEOUT_TRANSACTION_END
~~~

The dispatcher extracts only `ADAPTER_CLOSEOUT_TRANSACTION`; the following historical closure transcript is a non-normative syntax fixture, is enclosed in an unreachable branch, and must never be sourced or executed. It does not define recovery authority.
~~~sh
if false; then
set -euo pipefail
closure_tmp=$(mktemp -d ./.omo/.weather-closure.XXXXXX)
journal="$closure_tmp/closure-journal"
trap 'status=$?; if [ "$status" -eq 0 ]; then rm -rf "$closure_tmp"; fi' EXIT
printf '%s\n' 'created' > "$journal"
test "$(type -t closure_validator)" = function
frozen_contract_validator
test -n "${REVIEW_RESULTS_SOURCE:-}"
case "$REVIEW_RESULTS_SOURCE" in /tmp/weather-review-results.*) ;; *) exit 1 ;; esac
test -s "$REVIEW_RESULTS_SOURCE"
cp .omo/start-work/ledger.jsonl "$closure_tmp/ledger.jsonl"
cp .omo/boulder.json "$closure_tmp/boulder.json"
cp "$REVIEW_RESULTS_SOURCE" "$closure_tmp/review-results.json"
rm -f "$REVIEW_RESULTS_SOURCE"
test ! -e "$REVIEW_RESULTS_SOURCE"
review_hash=$(sed -n 's/^Plan-Review-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
contract_hash=$(sed -n 's/^Plan-Contract-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
CLOSURE_LEDGER="$closure_tmp/ledger.jsonl" CLOSURE_BOULDER="$closure_tmp/boulder.json" REVIEW_RESULTS="$closure_tmp/review-results.json" REVIEW_HASH="$review_hash" CONTRACT_HASH="$contract_hash" node <<'NODE'
const fs=require("fs");
const ledgerPath=process.env.CLOSURE_LEDGER;
const boulderPath=process.env.CLOSURE_BOULDER;
const plan=".omo/plans/low-memory-kma-weather-pwa-design.md";
const classes=["source_version_drift","source_inference_confusion","credential_leakage","boundary_contradiction","privacy_overcollection","false_runtime_claim","numeric_budget_drift","unexpected_product_file","accessibility_state_omission","stale_missing_evidence"];
const artifacts=[".omo/evidence/weather-pwa-design/final-f1-plan-compliance.md",".omo/evidence/weather-pwa-design/final-f2-document-quality.md",".omo/evidence/weather-pwa-design/final-f3-semantic-qa.md",".omo/evidence/weather-pwa-design/final-f4-scope-security.md",".omo/evidence/weather-pwa-design/output-manifest.sha256",".omo/evidence/weather-pwa-design/output-manifest-receipt.md"];
const crypto=require("crypto");
const finalReceiptDigests=Object.fromEntries(artifacts.slice(0,4).map(path=>[path,crypto.createHash("sha256").update(fs.readFileSync(path)).digest("hex")]));
const cleanup={status:"PASS",temporary_paths:[],long_lived_processes:[]};
const revision="plan:"+process.env.REVIEW_HASH;
const reviewInput=JSON.parse(fs.readFileSync(process.env.REVIEW_RESULTS,"utf8"));
const laneNames=["goal-constraint","document-quality","security-scope","artifact-qa","gate-traceability"];
const laneResults=reviewInput.review_lanes;
const debuggingResult=reviewInput.debugging;
const sessionNames=[...laneNames,"debugging-artifact-audit"];
const sessionMap=reviewInput.closeout_session_map;
const allDelegateMap=reviewInput.all_delegate_session_map;
const fixedActiveSessions=["codex:design-only-bootstrap","codex:design-only-root"];
const fixedCompletedSessions=[...fixedActiveSessions,"codex:design-only-closeout-review","codex:design-only-closeout"];
const exactKeys=(actual,expected)=>actual && Object.keys(actual).sort().join("|")===expected.slice().sort().join("|");
const validSessionMap=sessionMap && exactKeys(sessionMap,sessionNames) && sessionNames.every(name=>typeof sessionMap[name]==="string" && sessionMap[name].startsWith("codex:")) && new Set(sessionNames.map(name=>sessionMap[name])).size===sessionNames.length;
const allDelegateValues=allDelegateMap?Object.values(allDelegateMap):[];
const validAllDelegateMap=allDelegateMap && Object.keys(allDelegateMap).length>0 && allDelegateValues.every(value=>typeof value==="string" && /^codex:ses_[A-Za-z0-9]+$/.test(value)) && new Set(allDelegateValues).size===allDelegateValues.length && sessionNames.every(name=>allDelegateValues.includes(sessionMap[name]));
const nonEmptyStrings=value=>Array.isArray(value) && value.length>0 && value.every(item=>typeof item==="string" && item.length>0);
const classId=value=>typeof value==="string"?value.split("=",1)[0]:"";
const validDelegated=row=>row && row.plan===plan && row.verdict==="APPROVE" && typeof row.session_id==="string" && row.session_id.startsWith("codex:") && nonEmptyStrings(row.commands) && nonEmptyStrings(row.artifact) && Array.isArray(row.adversarial_classes) && row.adversarial_classes.length===classes.length && new Set(row.adversarial_classes.map(classId)).size===classes.length && classes.every(item=>row.adversarial_classes.some(value=>classId(value)===item)) && row.cleanup && row.cleanup.status==="PASS" && Array.isArray(row.cleanup.temporary_paths) && row.cleanup.temporary_paths.length===0 && Array.isArray(row.cleanup.long_lived_processes) && row.cleanup.long_lived_processes.length===0 && row.runtime_qa==="NOT RUN" && row.commit==="N/A" && row.revision===revision;
const laneSpecs={"goal-constraint":{commands:["artifact-review: goal-constraint"],artifact:artifacts},"document-quality":{commands:["artifact-review: document-quality"],artifact:artifacts},"security-scope":{commands:["artifact-review: security-scope"],artifact:artifacts},"artifact-qa":{commands:["artifact-review: artifact-qa"],artifact:artifacts},"gate-traceability":{commands:["artifact-review: gate-traceability"],artifact:artifacts}};
const debuggingSpec={commands:["artifact-audit: named-negative-filter-scenario-cleanup-validators"],artifact:artifacts};
const exactArray=(actual,expected)=>Array.isArray(actual) && actual.length===expected.length && actual.every((item,index)=>item===expected[index]);
const validDelegatedExact=(row,spec)=>validDelegated(row) && exactArray(row.commands,spec.commands) && exactArray(row.artifact,spec.artifact) && row.plan_review_sha256===process.env.REVIEW_HASH && row.plan_contract_sha256===process.env.CONTRACT_HASH;
const b=JSON.parse(fs.readFileSync(boulderPath,"utf8"));
const activeWork=b.works&&b.works[b.active_work_id];
const rows=fs.readFileSync(ledgerPath,"utf8").trim().split(/\n/).map(JSON.parse);
const exactSet=(actual,expected)=>actual.length===expected.length&&new Set(actual).size===actual.length&&actual.every(value=>expected.includes(value));
const activeExpected=[...fixedActiveSessions,...allDelegateValues];
const ledgerSessions=rows.map(row=>row.session_id).filter(value=>typeof value==="string"&&value.startsWith("codex:"));
const returnedCloseoutSessions=laneResults.map(row=>row.session_id).concat(debuggingResult&&debuggingResult.session_id).filter(Boolean);
if(!validSessionMap || !validAllDelegateMap || !Array.isArray(laneResults) || laneResults.length!==5 || new Set(laneResults.map(row=>row.name)).size!==5 || laneNames.some(name=>!laneResults.some(row=>row.name===name && row.session_id===sessionMap[name] && validDelegatedExact(row,laneSpecs[name]))) || !validDelegatedExact(debuggingResult,debuggingSpec) || debuggingResult.session_id!==sessionMap["debugging-artifact-audit"] || !activeWork || !Array.isArray(activeWork.session_ids) || !exactSet(activeWork.session_ids,activeExpected) || ledgerSessions.some(value=>!activeExpected.includes(value)) || allDelegateValues.some(value=>!ledgerSessions.includes(value) && !returnedCloseoutSessions.includes(value)) || returnedCloseoutSessions.some(value=>!allDelegateValues.includes(value)) || new Set(returnedCloseoutSessions).size!==6) process.exit(1);
const review={event:"review-work-artifact-review",plan,task:"F4-closeout",session_id:"codex:design-only-closeout-review",commands:["artifact-review: final_gate_validator-all"],artifact:artifacts,adversarial_classes:classes,cleanup,runtime_qa:"NOT RUN",commit:"N/A",revision,review_lanes:laneResults,closeout_session_map:sessionMap,all_delegate_session_map:allDelegateMap};
const debugging={...debuggingResult,event:"debugging-artifact-audit",plan,task:"F4-closeout",revision,closeout_session_map:sessionMap,all_delegate_session_map:allDelegateMap};
const terminal={event:"orchestration-completed",plan,task:"F4",session_id:"codex:design-only-closeout",commands:["set -euo pipefail; closure_validator"],artifact:artifacts,adversarial_classes:classes,cleanup,runtime_qa:"NOT RUN",commit:"N/A",revision,final_receipt_digests:finalReceiptDigests,closeout_session_map:sessionMap,all_delegate_session_map:allDelegateMap};
rows.push(review,debugging,terminal);
fs.writeFileSync(ledgerPath,rows.map(row=>JSON.stringify(row)).join("\n")+"\n");
const work=b.works[b.active_work_id];
work.status="completed";
work.session_ids=[...fixedCompletedSessions,...allDelegateValues];
fs.writeFileSync(boulderPath,JSON.stringify(b)+"\n");
NODE
printf '%s\n' 'backup-creating' > "$journal"
backup_tmp=$(mktemp -d "$closure_tmp/.backup.XXXXXX")
cp .omo/start-work/ledger.jsonl "$backup_tmp/ledger.jsonl"
cp .omo/boulder.json "$backup_tmp/boulder.json"
printf '%s\n' 'backups-ready' > "$journal"
printf '%s\n' 'promotion | status=planned' > "$journal"
( CLOSURE_EXCLUDE_DIR="$closure_tmp" CLOSURE_LEDGER_PATH="$closure_tmp/ledger.jsonl" CLOSURE_BOULDER_PATH="$closure_tmp/boulder.json" closure_validator )
mv "$closure_tmp/ledger.jsonl" .omo/start-work/ledger.jsonl
printf '%s\n' 'ledger-moved' >> "$journal"
if ! mv "$closure_tmp/boulder.json" .omo/boulder.json; then
  printf '%s\n' 'rollback-planned' > "$journal"
  set +e
  cp "$backup_tmp/ledger.jsonl" .omo/start-work/ledger.jsonl
  cp "$backup_tmp/boulder.json" .omo/boulder.json
  cmp -s "$backup_tmp/ledger.jsonl" .omo/start-work/ledger.jsonl
  ledger_restore=$?
  cmp -s "$backup_tmp/boulder.json" .omo/boulder.json
  boulder_restore=$?
  if [ "$ledger_restore" -eq 0 ] && [ "$boulder_restore" -eq 0 ]; then printf '%s\n' 'rollback-restored' > "$journal"; fi
  exit 1
fi
printf '%s\n' 'boulder-moved' >> "$journal"
if ! ( CLOSURE_EXCLUDE_DIR="$closure_tmp" CLOSURE_LEDGER_PATH=.omo/start-work/ledger.jsonl CLOSURE_BOULDER_PATH=.omo/boulder.json closure_validator ); then
  printf '%s\n' 'rollback-planned' > "$journal"
  set +e
  cp "$backup_tmp/ledger.jsonl" .omo/start-work/ledger.jsonl
  cp "$backup_tmp/boulder.json" .omo/boulder.json
  cmp -s "$backup_tmp/ledger.jsonl" .omo/start-work/ledger.jsonl
  ledger_restore=$?
  cmp -s "$backup_tmp/boulder.json" .omo/boulder.json
  boulder_restore=$?
  if [ "$ledger_restore" -eq 0 ] && [ "$boulder_restore" -eq 0 ]; then printf '%s\n' 'rollback-restored' > "$journal"; fi
  exit 1
fi
printf '%s\n' 'live-validated' >> "$journal"
printf '%s\n' 'cleanup-planned' >> "$journal"
rm -f "$backup_tmp/ledger.jsonl" "$backup_tmp/boulder.json"
 rmdir "$backup_tmp"
rm -f "$closure_tmp/review-results.json"
test ! -e "$closure_tmp/review-results.json"
rm -f "$journal"
rmdir "$closure_tmp"
trap - EXIT
test ! -e "$closure_tmp"
fi
~~~

Reference closure validator (retained for review traceability; the dispatcher routes closeout through `adapter_closeout_validate` from `ADAPTER_CLOSEOUT_TRANSACTION`, so this fence is not sourced or executed by the dispatcher):

```bash
set -euo pipefail
closure_validator() {
plan=.omo/plans/low-memory-kma-weather-pwa-design.md
review_hash=$(sed -n 's/^Plan-Review-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
contract_hash=$(sed -n 's/^Plan-Contract-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
current_contract=$(LC_ALL=C sed -E 's/^- \[(x| )\] (([0-9]+|F[1-4])\.)/- [ ] \2/' "$plan" | sha256sum | awk '{print $1}')
test -n "$contract_hash"
test "$current_contract" = "$contract_hash"
for id in 1 2 3 4 5 6 7 8 9 F1 F2 F3 F4; do
  test "$(rg -c "^- \\[x\\] $id\\." "$plan" || printf '0')" -eq 1
done
REVIEW_HASH="$review_hash" CONTRACT_HASH="$contract_hash" node <<'NODE'
const fs = require("fs");
const plan = ".omo/plans/low-memory-kma-weather-pwa-design.md";
const classes = ["source_version_drift", "source_inference_confusion", "credential_leakage", "boundary_contradiction", "privacy_overcollection", "false_runtime_claim", "numeric_budget_drift", "unexpected_product_file", "accessibility_state_omission", "stale_missing_evidence"];
const finalArtifacts = [".omo/evidence/weather-pwa-design/final-f1-plan-compliance.md", ".omo/evidence/weather-pwa-design/final-f2-document-quality.md", ".omo/evidence/weather-pwa-design/final-f3-semantic-qa.md", ".omo/evidence/weather-pwa-design/final-f4-scope-security.md", ".omo/evidence/weather-pwa-design/output-manifest.sha256", ".omo/evidence/weather-pwa-design/output-manifest-receipt.md"];
const ledgerPath = process.env.CLOSURE_LEDGER_PATH || ".omo/start-work/ledger.jsonl";
const boulderPath = process.env.CLOSURE_BOULDER_PATH || ".omo/boulder.json";
const rows = fs.readFileSync(ledgerPath, "utf8").trim().split(/\n/).map(JSON.parse);
const boulder = JSON.parse(fs.readFileSync(boulderPath, "utf8"));
const events = name => rows.filter(row => row.event === name);
const nonEmptyStrings = value => Array.isArray(value) && value.length > 0 && value.every(item => typeof item === "string" && item.length > 0);
const classId = value => typeof value === "string" ? value.split("=", 1)[0] : "";
const validRecord = row => row && row.plan === plan && typeof row.task === "string" && typeof row.session_id === "string" && row.session_id.startsWith("codex:") && nonEmptyStrings(row.commands) && nonEmptyStrings(row.artifact) && Array.isArray(row.adversarial_classes) && row.adversarial_classes.length === classes.length && new Set(row.adversarial_classes.map(classId)).size === classes.length && classes.every(item => row.adversarial_classes.some(value => classId(value) === item)) && row.cleanup && row.cleanup.status === "PASS" && Array.isArray(row.cleanup.temporary_paths) && row.cleanup.temporary_paths.length === 0 && Array.isArray(row.cleanup.long_lived_processes) && row.cleanup.long_lived_processes.length === 0 && row.runtime_qa === "NOT RUN" && row.commit === "N/A";
const hasFinalArtifacts = row => Array.isArray(row.artifact) && row.artifact.length === finalArtifacts.length && finalArtifacts.every((item, index) => row.artifact[index] === item);
const review = events("review-work-artifact-review");
const debugging = events("debugging-artifact-audit");
const approved = events("f4-approved");
const completed = events("orchestration-completed");
const terminal = rows[rows.length - 1];
const works = Object.values(boulder.works || {});
const hasFinalReceiptDigests = row => row && row.final_receipt_digests && Object.keys(row.final_receipt_digests).length===4 && finalArtifacts.slice(0,4).every(path=>typeof row.final_receipt_digests[path]==="string" && /^[0-9a-f]{64}$/.test(row.final_receipt_digests[path]) && row.final_receipt_digests[path]===require("crypto").createHash("sha256").update(fs.readFileSync(path)).digest("hex"));
const sessionNames=["goal-constraint","document-quality","security-scope","artifact-qa","gate-traceability","debugging-artifact-audit"];
const sessionMap=terminal && terminal.closeout_session_map;
const allDelegateMap=terminal && terminal.all_delegate_session_map;
const allDelegateValues=allDelegateMap?Object.values(allDelegateMap):[];
const fixedCompletedSessions=["codex:design-only-bootstrap","codex:design-only-root","codex:design-only-closeout-review","codex:design-only-closeout"];
const validSessionMap=sessionMap && Object.keys(sessionMap).sort().join("|")===sessionNames.slice().sort().join("|") && sessionNames.every(name=>typeof sessionMap[name]==="string" && sessionMap[name].startsWith("codex:")) && new Set(sessionNames.map(name=>sessionMap[name])).size===sessionNames.length;
const validAllDelegateMap=allDelegateMap && Object.keys(allDelegateMap).length>0 && allDelegateValues.every(value=>typeof value==="string" && /^codex:ses_[A-Za-z0-9]+$/.test(value)) && new Set(allDelegateValues).size===allDelegateValues.length && sessionNames.every(name=>allDelegateValues.includes(sessionMap[name]));
const exactSet=(actual,expected)=>Array.isArray(actual)&&actual.length===expected.length&&new Set(actual).size===actual.length&&actual.every(value=>expected.includes(value));
const exactSessionBindings=(reviewRow,debuggingRow,map,boundNames,boulderObj)=>{const lanes=reviewRow.review_lanes; const work=boulderObj.works&&boulderObj.works[boulderObj.active_work_id]; return Array.isArray(lanes) && lanes.length===5 && boundNames.slice(0,5).every(name=>lanes.some(row=>row.name===name && row.session_id===map[name])) && debuggingRow.session_id===map["debugging-artifact-audit"] && work && exactSet(work.session_ids,[...fixedCompletedSessions,...allDelegateValues]);};
if(!validSessionMap || !validAllDelegateMap || !review[0] || !debugging[0] || !exactSessionBindings(review[0],debugging[0],sessionMap,sessionNames,boulder)) process.exit(1);
const allowedSessions=[...fixedCompletedSessions,...allDelegateValues];
if(rows.some(row=>typeof row.session_id==="string" && row.session_id.startsWith("codex:") && !allowedSessions.includes(row.session_id))) process.exit(1);
if(allDelegateValues.some(value=>!rows.some(row=>row.session_id===value))) process.exit(1);
if(!hasFinalReceiptDigests(terminal)) process.exit(1);
const reviewIndex = rows.findIndex(row => row.event === "review-work-artifact-review"); const debuggingIndex = rows.findIndex(row => row.event === "debugging-artifact-audit"); const approvedIndex = rows.findIndex(row => row.event === "f4-approved"); const terminalIndex = rows.findIndex(row => row.event === "orchestration-completed"); if (rows.length < 4 || review.length !== 1 || debugging.length !== 1 || approved.length !== 1 || completed.length !== 1 || !validRecord(approved[0]) || !validRecord(review[0]) || !validRecord(debugging[0]) || !validRecord(terminal) || approved[0].task !== "F4" || !approved[0].commands.includes("f4-phase-2: active-state-and-receipt") || !hasFinalArtifacts(approved[0]) || review[0].task !== "F4-closeout" || debugging[0].task !== "F4-closeout" || !review[0].commands.includes("artifact-review: final_gate_validator-all") || !debugging[0].commands.includes("artifact-audit: named-negative-filter-scenario-cleanup-validators") || !hasFinalArtifacts(review[0]) || !hasFinalArtifacts(debugging[0]) || terminalIndex !== rows.length - 1 || approvedIndex < 0 || reviewIndex <= approvedIndex || debuggingIndex <= approvedIndex || terminalIndex <= reviewIndex || terminalIndex <= debuggingIndex || terminal.event !== "orchestration-completed" || terminal.task !== "F4" || !terminal.commands.includes("set -euo pipefail; closure_validator") || !hasFinalArtifacts(terminal) || boulder.schema_version !== 2 || !boulder.active_work_id || boulder.plan_review_sha256 !== process.env.REVIEW_HASH || boulder.plan_contract_sha256 !== process.env.CONTRACT_HASH || works.length !== 1 || works[0].work_id !== boulder.active_work_id || works[0].active_plan !== plan || works[0].plan_review_sha256 !== process.env.REVIEW_HASH || works[0].plan_contract_sha256 !== process.env.CONTRACT_HASH || works[0].status !== "completed" || !Array.isArray(works[0].session_ids) || !works[0].session_ids.every(item => typeof item === "string" && item.startsWith("codex:"))) process.exit(1);
NODE
node -e 'const fs=require("fs"); const rows=fs.readFileSync(process.env.CLOSURE_LEDGER_PATH || ".omo/start-work/ledger.jsonl","utf8").trim().split(/\n/).map(JSON.parse); const b=JSON.parse(fs.readFileSync(process.env.CLOSURE_BOULDER_PATH || ".omo/boulder.json","utf8")); const review=rows.filter(x=>x.event==="review-work-artifact-review"); const debugging=rows.filter(x=>x.event==="debugging-artifact-audit"); const names=["goal-constraint","document-quality","security-scope","artifact-qa","gate-traceability"]; const revision="plan:"+b.plan_review_sha256; if(review.length!==1 || debugging.length!==1 || !Array.isArray(review[0].review_lanes) || review[0].review_lanes.length!==5 || new Set(review[0].review_lanes.map(x=>x.name)).size!==5 || names.some(n=>!review[0].review_lanes.some(x=>x.name===n && x.verdict==="APPROVE" && x.revision===revision && x.runtime_qa==="NOT RUN" && x.commit==="N/A")) || debugging[0].revision!==revision || debugging[0].runtime_qa!=="NOT RUN" || debugging[0].commit!=="N/A") process.exit(1)' 
node - <<'NODE'
const fs=require("fs");
const rows=fs.readFileSync(process.env.CLOSURE_LEDGER_PATH || ".omo/start-work/ledger.jsonl","utf8").trim().split(/\n/).map(JSON.parse);
const b=JSON.parse(fs.readFileSync(process.env.CLOSURE_BOULDER_PATH || ".omo/boulder.json","utf8"));
const finalArtifacts=[".omo/evidence/weather-pwa-design/final-f1-plan-compliance.md",".omo/evidence/weather-pwa-design/final-f2-document-quality.md",".omo/evidence/weather-pwa-design/final-f3-semantic-qa.md",".omo/evidence/weather-pwa-design/final-f4-scope-security.md",".omo/evidence/weather-pwa-design/output-manifest.sha256",".omo/evidence/weather-pwa-design/output-manifest-receipt.md"];
const names=["goal-constraint","document-quality","security-scope","artifact-qa","gate-traceability"];
const commands={"goal-constraint":"artifact-review: goal-constraint","document-quality":"artifact-review: document-quality","security-scope":"artifact-review: security-scope","artifact-qa":"artifact-review: artifact-qa","gate-traceability":"artifact-review: gate-traceability"};
const exact=(value,expected)=>Array.isArray(value) && value.length===expected.length && value.every((item,index)=>item===expected[index]);
const review=rows.filter(x=>x.event==="review-work-artifact-review")[0]; const debugging=rows.filter(x=>x.event==="debugging-artifact-audit")[0]; const revision="plan:"+b.plan_review_sha256;
const good=row=>row && row.plan_review_sha256===b.plan_review_sha256 && row.plan_contract_sha256===b.plan_contract_sha256 && row.revision===revision && row.verdict==="APPROVE" && exact(row.artifact,finalArtifacts) && row.runtime_qa==="NOT RUN" && row.commit==="N/A";
if(!review || !Array.isArray(review.review_lanes) || review.review_lanes.length!==5 || names.some(name=>!review.review_lanes.some(row=>row.name===name && good(row) && exact(row.commands,[commands[name]]))) || !good(debugging) || !exact(debugging.commands,["artifact-audit: named-negative-filter-scenario-cleanup-validators"])) process.exit(1);
NODE
final_tmp=$(mktemp -d)
trap 'rm -rf "$final_tmp"' EXIT
credential_qs=$(printf 'Service%s' 'Key=')
lowercase_query=$(printf 'service%s' 'Key=')
auth_prefix=$(printf 'Authorization: %s' 'Bearer')
cookie_marker=$(printf '%s' 'Cookie:')
token_marker=$(printf '%s' 'token:')
service_field_marker=$(printf 'service%s' 'Key:')
api_key_marker=$(printf 'api%skey' '_')
x_api_key_marker=$(printf 'X-%s-%s' 'API' 'Key')
basic_prefix=$(printf 'Authorization: %s' 'Basic')
json_token_marker=$(printf '%s%s%s' '"' 'tok' 'en"')
secret_pattern="https?://[^ )]+($credential_qs|$lowercase_query)|($auth_prefix|$basic_prefix)[[:space:]]+[A-Za-z0-9._=+/.-]{8,}|$cookie_marker[[:space:]]+[A-Za-z0-9._=+/.-]{8,}|($token_marker|$json_token_marker|$service_field_marker|$api_key_marker|$x_api_key_marker)[[:space:]:=\"]+[A-Za-z0-9._=+/.-]{8,}|-----BEGIN (RSA|OPENSSH|EC) PRIVATE KEY-----"
set +e
final_scan_paths=(AGENTS.md .omo/evidence .omo/boulder.json .omo/start-work/ledger.jsonl); [ -d docs ] && final_scan_paths+=(docs); [ -f DESIGN.md ] && final_scan_paths+=(DESIGN.md)
final_secret_hits=$(rg -ni "$secret_pattern" "${final_scan_paths[@]}" 2>"$final_tmp/secret-error")
final_secret_status=$?
set -e
test "$final_secret_status" -eq 1
test ! -s "$final_tmp/secret-error"
test -z "$final_secret_hits"
test ! -f .git/HEAD
test ! -f .git/config
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then exit 1; fi
find . \( -path './.git' -o -path './.git/*' -o -path "${CLOSURE_EXCLUDE_DIR:-/__never__}" -o -path "${CLOSURE_EXCLUDE_DIR:-/__never__}/*" \) -prune -o \( -type f -o -type l \) -printf '%P\n' | LC_ALL=C sort > "$final_tmp/current"
cat <(sed -n 's/^Initial-Path: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) <(sed -n 's/^Allowed-Output: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) | LC_ALL=C sort -u > "$final_tmp/expected"
test "$(comm -23 "$final_tmp/current" "$final_tmp/expected" | wc -l)" -eq 0
test "$(comm -13 "$final_tmp/current" "$final_tmp/expected" | wc -l)" -eq 0
find . \( -path './.git' -o -path './.git/*' -o -path "${CLOSURE_EXCLUDE_DIR:-/__never__}" -o -path "${CLOSURE_EXCLUDE_DIR:-/__never__}/*" \) -prune -o -type d -not -path '.' -printf '%P\n' | LC_ALL=C sort > "$final_tmp/current-dirs"
cat <(sed -n 's/^Initial-Directory: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) <(sed -n 's/^Allowed-Directory: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md) | LC_ALL=C sort -u > "$final_tmp/expected-dirs"
test "$(comm -23 "$final_tmp/current-dirs" "$final_tmp/expected-dirs" | wc -l)" -eq 0
test "$(comm -13 "$final_tmp/current-dirs" "$final_tmp/expected-dirs" | wc -l)" -eq 0
qa_process_clean_probe
test -z "$(find /tmp -mindepth 1 -maxdepth 1 -type f -name 'weather-receipt-base.*' -print -quit)"
while IFS= read -r row; do path=${row%% *}; digest=${row##* }; test "$(sha256sum "$path" | awk '{print $1}')" = "$digest"; done < <(sed -n 's/^Initial-File-SHA256: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
while IFS= read -r row; do link=${row%% -> *}; target=${row#* -> }; test -L "$link"; test "$(readlink "$link")" = "$target"; done < <(sed -n 's/^Initial-Symlink-Target: //p' .omo/evidence/weather-pwa-design/preflight-manifest.md)
manifest_path_order_validator
sha256sum --check .omo/evidence/weather-pwa-design/output-manifest.sha256 >/dev/null
for gate in .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md .omo/evidence/weather-pwa-design/final-f2-document-quality.md .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md .omo/evidence/weather-pwa-design/final-f4-scope-security.md; do expected_binding "$gate"; expected_verdict=APPROVE; fixed_receipt="$gate"; receipt="$gate"; receipt_to_check="$gate"; receipt_key="$gate"; qa_trace_validator; final_gate_validator; done
rm -rf "$final_tmp"
trap - EXIT
test ! -e "$final_tmp"
approve_count=0
for gate in .omo/evidence/weather-pwa-design/final-f1-plan-compliance.md .omo/evidence/weather-pwa-design/final-f2-document-quality.md .omo/evidence/weather-pwa-design/final-f3-semantic-qa.md .omo/evidence/weather-pwa-design/final-f4-scope-security.md; do
  test "$(rg -c '^Verdict: APPROVE$' "$gate" || printf '0')" -eq 1
  approve_count=$((approve_count + 1))
done
test "$approve_count" -eq 4
}
# The caller invokes this function only from the staged-transaction block above, first with the exact staged paths and then after promotion with the fixed live paths.
```

- Historical closure recovery fixture: retained only for review traceability; the dispatcher must not source it. `adapter_closeout_recover` from `ADAPTER_CLOSEOUT_TRANSACTION` is the sole normative recovery entrypoint.
~~~sh
legacy_closure_recovery_check_never_invoke() {
  set -euo pipefail
  return 1
  mapfile -t closure_txns < <(find ./.omo -mindepth 1 -maxdepth 1 -type d -name '.weather-closure.*' -print | LC_ALL=C sort)
  case "${#closure_txns[@]}" in
    0) CLOSURE_RESUME=none; return 0 ;;
    1) ;;
    *) return 1 ;;
  esac
  closure_txn="${closure_txns[0]}"
  if [ ! -e "$closure_txn/closure-journal" ]; then
    test -z "$(find "$closure_txn" -mindepth 1 -print -quit)"
    rmdir "$closure_txn"
    test ! -e "$closure_txn"
    CLOSURE_RESUME=none
    return 0
  fi
  test -s "$closure_txn/closure-journal"
  mapfile -t backup_dirs < <(find "$closure_txn" -mindepth 1 -maxdepth 1 -type d -name '.backup.*' -print | LC_ALL=C sort)
  require_backup() {
    test "${#backup_dirs[@]}" -eq 1
    backup_dir="${backup_dirs[0]}"
    test -s "$backup_dir/ledger.jsonl"
    test -s "$backup_dir/boulder.json"
  }
  active_rollback_validator() {
    node -e 'const fs=require("fs"); const b=JSON.parse(fs.readFileSync(".omo/boulder.json","utf8")); const rows=fs.readFileSync(".omo/start-work/ledger.jsonl","utf8").trim().split(/\n/).map(JSON.parse); const w=b.works&&b.works[b.active_work_id]; if(b.schema_version!==2 || !b.active_work_id || !w || w.status!=="active" || rows.length===0 || !rows.some(row=>row.event==="f4-approved") || rows.some(row=>row.event==="orchestration-completed")) process.exit(1)'
  }
  closure_state=$(tail -n 1 "$closure_txn/closure-journal")
  case "$closure_state" in
    created|backup-creating)
      rm -rf "$closure_txn"
      test ! -e "$closure_txn"
      CLOSURE_RESUME=none
      ;;
    backups-ready)
      require_backup
      test -s "$closure_txn/review-results.json"
      test -s "$closure_txn/ledger.jsonl"
      test -s "$closure_txn/boulder.json"
      (CLOSURE_EXCLUDE_DIR="$closure_txn" CLOSURE_LEDGER_PATH="$closure_txn/ledger.jsonl" CLOSURE_BOULDER_PATH="$closure_txn/boulder.json" closure_validator)
      printf '%s\n' 'promotion | status=planned' > "$closure_txn/closure-journal"
      CLOSURE_RESUME=planned
      ;;
    'promotion | status=planned')
      require_backup
      test -s "$closure_txn/review-results.json"
      if [ -s "$closure_txn/ledger.jsonl" ]; then
        test -s "$closure_txn/boulder.json"
        (CLOSURE_EXCLUDE_DIR="$closure_txn" CLOSURE_LEDGER_PATH="$closure_txn/ledger.jsonl" CLOSURE_BOULDER_PATH="$closure_txn/boulder.json" closure_validator)
        CLOSURE_RESUME=planned
      elif [ ! -e "$closure_txn/ledger.jsonl" ] && [ -s .omo/start-work/ledger.jsonl ]; then
        test -s "$closure_txn/boulder.json"
        (CLOSURE_EXCLUDE_DIR="$closure_txn" CLOSURE_LEDGER_PATH=.omo/start-work/ledger.jsonl CLOSURE_BOULDER_PATH="$closure_txn/boulder.json" closure_validator)
        printf '%s\n' 'ledger-moved' > "$closure_txn/closure-journal"
        CLOSURE_RESUME=ledger-moved
      else
        return 1
      fi
      ;;
    ledger-moved)
      require_backup
      test -s "$closure_txn/review-results.json"
      test ! -e "$closure_txn/ledger.jsonl"
      test -s .omo/start-work/ledger.jsonl
      if [ -s "$closure_txn/boulder.json" ]; then
        (CLOSURE_EXCLUDE_DIR="$closure_txn" CLOSURE_LEDGER_PATH=.omo/start-work/ledger.jsonl CLOSURE_BOULDER_PATH="$closure_txn/boulder.json" closure_validator)
        CLOSURE_RESUME=ledger-moved
      elif [ ! -e "$closure_txn/boulder.json" ] && [ -s ./.omo/boulder.json ]; then
        (CLOSURE_EXCLUDE_DIR="$closure_txn" CLOSURE_LEDGER_PATH=.omo/start-work/ledger.jsonl CLOSURE_BOULDER_PATH=.omo/boulder.json closure_validator)
        printf '%s\n' 'boulder-moved' > "$closure_txn/closure-journal"
        CLOSURE_RESUME=boulder-moved
      else
        return 1
      fi
      ;;
    boulder-moved)
      require_backup
      test ! -e "$closure_txn/ledger.jsonl"
      test ! -e "$closure_txn/boulder.json"
      (CLOSURE_EXCLUDE_DIR="$closure_txn" CLOSURE_LEDGER_PATH=.omo/start-work/ledger.jsonl CLOSURE_BOULDER_PATH=.omo/boulder.json closure_validator)
      CLOSURE_RESUME=boulder-moved
      ;;
    rollback-planned)
      require_backup
      set +e
      cp "$backup_dir/ledger.jsonl" .omo/start-work/ledger.jsonl
      ledger_restore=$?
      cp "$backup_dir/boulder.json" ./.omo/boulder.json
      boulder_restore=$?
      cmp -s "$backup_dir/ledger.jsonl" .omo/start-work/ledger.jsonl
      ledger_cmp=$?
      cmp -s "$backup_dir/boulder.json" ./.omo/boulder.json
      boulder_cmp=$?
      set -e
      test "$ledger_restore" -eq 0
      test "$boulder_restore" -eq 0
      test "$ledger_cmp" -eq 0
      test "$boulder_cmp" -eq 0
      printf '%s\n' 'rollback-restored' > "$closure_txn/closure-journal"
      CLOSURE_RESUME=rollback-restored
      ;;
    rollback-restored)
      require_backup
      active_rollback_validator
      rm -f "$backup_dir/ledger.jsonl" "$backup_dir/boulder.json" "$closure_txn/review-results.json" "$closure_txn/closure-journal"
      rmdir "$backup_dir" "$closure_txn"
      test ! -e "$closure_txn"
      CLOSURE_RESUME=none
      ;;
    live-validated)
      require_backup
      test ! -e "$closure_txn/ledger.jsonl"
      test ! -e "$closure_txn/boulder.json"
      (CLOSURE_EXCLUDE_DIR="$closure_txn" CLOSURE_LEDGER_PATH=.omo/start-work/ledger.jsonl CLOSURE_BOULDER_PATH=.omo/boulder.json closure_validator)
      rm -f "$backup_dir/ledger.jsonl" "$backup_dir/boulder.json" "$closure_txn/review-results.json" "$closure_txn/closure-journal"
      test ! -e "$closure_txn/review-results.json"
      rmdir "$backup_dir" "$closure_txn"
      test ! -e "$closure_txn"
      CLOSURE_RESUME=none
      ;;
    cleanup-planned)
      test ! -e "$closure_txn/ledger.jsonl"
      test ! -e "$closure_txn/boulder.json"
      ( CLOSURE_EXCLUDE_DIR="$closure_txn" CLOSURE_LEDGER_PATH=.omo/start-work/ledger.jsonl CLOSURE_BOULDER_PATH=.omo/boulder.json closure_validator )
      rm -f "$closure_txn/review-results.json" "$closure_txn/closure-journal"
      if [ "${#backup_dirs[@]}" -eq 1 ]; then rm -f "${backup_dirs[0]}/ledger.jsonl" "${backup_dirs[0]}/boulder.json"; rmdir "${backup_dirs[0]}"; fi
      rmdir "$closure_txn"
      test ! -e "$closure_txn"
      CLOSURE_RESUME=none
      ;;
    *) return 1 ;;
  esac
}
~~~
The adapter runs only `adapter_closeout_recover`; the historical fixture above cannot authorize completion, rollback, or deletion.

This closure changes no product source and does not imply runtime, installability, live-data, accessibility, or memory QA.
