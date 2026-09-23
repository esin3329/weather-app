---
slug: low-memory-kma-weather-pwa-design
status: approved
intent: clear
review_required: false
plan_path: .omo/plans/low-memory-kma-weather-pwa-design.md
plan_sha256: 21c2433b67329f585374e922f6d4659e75fef58c8c593d953486d88d9ae467d3
review_round_id: weather-plan-review-20260814-r34
pending-action: complete a fresh Metis, Momus, and independent high-accuracy review for .omo/plans/low-memory-kma-weather-pwa-design.md at this exact hash, then hand it to start-work
review:
  metis:
    status: approved
    workspace_root: /home/jeon_huijun/Project/weather
    runtime_home: managed-agent:metis
    target: .omo/plans/low-memory-kma-weather-pwa-design.md
    round_id: weather-plan-review-20260814-r34
    plan_sha256: 21c2433b67329f585374e922f6d4659e75fef58c8c593d953486d88d9ae467d3
    launch_id: opencode-task:ses_review01metis
    session: codex:ses_review01metis
    result: OKAY
  momus:
    status: approved
    workspace_root: /home/jeon_huijun/Project/weather
    runtime_home: managed-agent:momus
    target: .omo/plans/low-memory-kma-weather-pwa-design.md
    round_id: weather-plan-review-20260814-r34
    plan_sha256: 21c2433b67329f585374e922f6d4659e75fef58c8c593d953486d88d9ae467d3
    launch_id: opencode-task:ses_review02momus
    session: codex:ses_review02momus
    result: OKAY
  independent:
    status: approved
    workspace_root: /home/jeon_huijun/Project/weather
    runtime_home: managed-agent:oracle
    target: .omo/plans/low-memory-kma-weather-pwa-design.md
    round_id: weather-plan-review-20260814-r34
    plan_sha256: 21c2433b67329f585374e922f6d4659e75fef58c8c593d953486d88d9ae467d3
    launch_id: opencode-task:ses_review03oracle
    session: codex:ses_review03oracle
    result: OKAY
approach: Produce a provider-neutral architecture specification and DESIGN.md for a vanilla installable Windows PWA backed by a minimal server-side KMA proxy; validate both documents with official-source checks and independent design review, without creating product code.
---

# Draft: low-memory-kma-weather-pwa-design

## Components (topology ledger)
<!-- Lock the SHAPE before depth. One row per top-level component that can succeed or fail independently. -->
<!-- id | outcome (one line) | status: active|deferred | evidence path -->

| id | outcome | status | evidence path |
|---|---|---|---|
| C1 | Official KMA forecast/warning contracts and a versioned normalized envelope are explicit | active | `.omo/evidence/weather-pwa-design/kma-contract-review.md` |
| C2 | Provider-neutral proxy, secret, quota, cache, CORS, abuse, and error boundaries are decision-complete | active | `.omo/evidence/weather-pwa-design/proxy-threat-review.md` |
| C3 | Installable PWA shell, service-worker lifecycle, offline cache, update, and degraded states are explicit | active | `.omo/evidence/weather-pwa-design/pwa-offline-review.md` |
| C4 | Location acquisition, coarsening, persistence, deletion, and privacy boundaries are explicit | active | `.omo/evidence/weather-pwa-design/location-privacy-review.md` |
| C5 | Korean single-page information architecture, visual tokens, responsive states, and WCAG behavior are explicit | active | `.omo/evidence/weather-pwa-design/ui-accessibility-review.md` |
| C6 | App-owned memory/resource budgets and a reproducible future measurement protocol are explicit | active | `.omo/evidence/weather-pwa-design/performance-budget-review.md` |

## Open assumptions (announced defaults)
<!-- Record any default you adopt instead of asking, so the user can veto it at the gate. -->
<!-- assumption | adopted default | rationale | reversible? -->

| assumption | adopted default | rationale | reversible? |
|---|---|---|---|
| Browser target | Current stable Microsoft Edge on supported Windows; Chrome best-effort | Matches the Windows install surface without widening conformance cost | yes |
| Location UX | Manual administrative-place selection first; opt-in one-shot geolocation; persist only label + KMA grid/region | Preserves usefulness while minimizing location exposure | yes |
| Saved places | One saved coarse place and one latest snapshot | Smallest cache/privacy/memory footprint | yes |
| Warning promise | In-app warnings only; no push or background delivery guarantee | Push adds permission, server state, and reliability obligations | yes |
| Data breadth | Current/near-term summary, bounded hourly list, day-grouped short forecast, separate warnings; no mid-term/radar/map | Matches official short-term data and bounded DOM goal | yes |
| Deployment | Provider-neutral static host + serverless/edge proxy contract | Provider choice is explicitly deferred | yes |
| Testing strategy | No fake prose tests; machine-check artifact structure, manually inspect design semantics and official sources, then independent review | The deliverable is documentation, not executable product behavior | yes |
| Accessibility | WCAG 2.2 AA design target; Edge + NVDA future conformance pair; 200% zoom, Windows contrast themes, reduced motion | Concrete Windows-first acceptance target | yes |
| Memory claim | Design budgets app-owned resources only; browser process total is reported as context, never promised | Browser runtime memory is not fully controlled by the app | yes |

## Findings (cited - path:lines)

- `AGENTS.md:7-25`: greenfield design workspace; no source, toolchain, tests, CI, or Git history.
- `AGENTS.md:29-37`: PWA, KMA data, proxy, vanilla runtime, offline snapshot, no analytics, and design-only boundary are locked.
- `AGENTS.md:50-57`: memory distinction, API boundary, credential safety, dependency cost, provider deferral, data-age, and Korean accessibility constraints are locked.
- `AGENTS.md:59-67`: future verification must cover installability, grid/data flow, offline, secrets, performance, accessibility, and responsive screens.
- `https://www.data.go.kr/data/15084084/openapi.do` (updated 2026-07-09): KMA short-forecast REST API supports JSON/XML, 5 km grids, ultra-short through six hours, short forecast through 글피, mandatory `ServiceKey`, and a 10,000-call development quota.
- `https://apihub.kma.go.kr/notice.do?seqNotice=21`: KMA documents ten-minute ultra-short production, hourly intervals, three-hour short-forecast production, and grid/latitude-longitude conversion support.
- `https://www.data.go.kr/data/15000415/openapi.do` (updated 2026-06-01): warnings are a separate authenticated REST service with distinct land/sea areas and warning lifecycle data.
- `https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable`: Chromium installability depends on HTTPS/localhost plus manifest fields; offline support is a separate service-worker concern.
- `https://www.w3.org/TR/service-workers/`: service workers are event-driven and may be terminated between events; persistent timers are not a valid architecture.
- `https://developer.chrome.com/docs/devtools/memory-problems`: JS heap measurements do not equal total browser process memory; budgets and claims must name the measured surface.
- Official KMA/data.go.kr documentation reviewed in this planning wave did not guarantee browser CORS, so the proxy is an architectural risk-control inference rather than a quoted API prohibition.

## Decisions (with rationale)

- Use two independently failing domains, forecast and warnings; one failure must not blank or falsely clear the other.
- Expose provider-neutral `/v1/forecast` and `/v1/warnings` normalized envelopes; upstream bodies and credential-bearing URLs never reach the client.
- Normalize `schemaVersion`, location grid/region, issue/fetch/expiry timestamps, source, status, bounded periods/items, and stable retryable error codes.
- Keep KMA credentials, upstream allowlisting, parameter validation, coalescing, quotas, cache control, and redacted logs inside the proxy boundary.
- Cache a versioned static shell separately from key-free normalized data; retain only the latest compatible snapshot for the saved place.
- Treat forecast freshness and warning validity independently; expired/cancelled or unverifiable warnings are never presented as current or as “all clear.”
- Render a single Korean page with bounded native lists/details and no router, chart package, web font, framework runtime, or icon dependency by default.
- Refresh only on launch, explicit user action, reconnect, or visibility return when stale; no hidden-tab polling or persistent background timers.
- Define numeric budgets in the final spec together with cold/warm measurement method, current stable Edge build, hardware profile, repeated refresh/location-switch leak scenario, and failure threshold.

## Scope IN

- `docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md`: product, architecture, data, security, privacy, offline, error, performance, and future verification specification.
- `DESIGN.md`: research log, visual tokens, typography, spacing, components, responsive rules, Korean copy states, accessibility, and accepted design debt.
- Official-source capture and independent review artifacts under `.omo/evidence/weather-pwa-design/`.
- Decision-complete future implementation boundaries and acceptance scenarios, but no implementation.

## Scope OUT (Must NOT have)

- No application source, manifest, service worker, proxy code, package manager, deployment, API key, live KMA invocation, or Git initialization.
- No provider selection, production secret store, production traffic ownership, or cost commitment.
- No account, analytics, advertising, map, radar, chart library, push notification, background sync, continuous location tracking, or multi-place carousel.
- No claim that runtime behavior, memory targets, accessibility, installability, or offline behavior has already passed implementation QA.

## Open questions

- The current request authorizes carrying these as reversible documentation defaults into the design artifacts; the future implementation owner must explicitly accept or override Edge-first support, manual-first/opt-in geolocation, one saved place, in-app warnings only, no mid-term/map/radar, WCAG 2.2 AA, provider-neutral deployment, and the proposed resource budgets before product implementation.
- Offline snapshot policy is fixed for this design run: persist the latest compatible normalized forecast only; do not persist warnings, and never present offline warning unavailability as “all clear.”

## Approval gate
approval_status: approved
approval_scope: design-only artifact execution, high-accuracy review, evidence, and .omo/ orchestration only (product implementation excluded), authorized by the explicit user request 마스터 오케스트레이션 실행.
approval_reaffirmed: 2026-08-30 — the current-turn user request “자료를 확인하고 작업 진행해줘” (check the materials and proceed with the work) reaffirms the identical design-only scope; product implementation remains excluded.
capability_preflight: Before any .omo/ mutation, the executing OpenCode root observed callable task-tool delegation (spawn/wait/send-input/close semantics mapped from multi_agent_v1__spawn_agent, multi_agent_v1__wait_agent, multi_agent_v1__send_input, multi_agent_v1__close_agent) and a callable bash shell as the exec_command equivalent, with rg, node, curl, sha256sum, awk, sed, GNU find, and mktemp on PATH; delegated sessions are recorded as codex:ses_<opencode-session-id> values in Boulder and ledger state per the plan's OpenCode runtime-adaptation erratum.
next_action: Complete the fresh Metis and dual high-accuracy review against the repaired plan hash until all three reviewers return OKAY, then hand the reviewed plan to the requested `start-work` pillar for design-artifact execution only.
<!-- When exploration is exhausted and unknowns are answered, set status: awaiting-approval. -->
<!-- That durable record is the loop guard: on a later turn read it and resume at the gate instead of re-running exploration. -->
