# Low-Memory Korean Weather PWA Specification

## 1. Executive Summary & Context

This specification defines the complete technical architecture, security model, data normalization pipeline, and user experience for an installable Progressive Web App (PWA) delivering authoritative Korean weather data.

### Foundation Evidence Artifacts
This architecture synthesizes and enforces the decisions documented across six component evidence reviews:
1. `.omo/evidence/weather-pwa-design/kma-contract-review.md`
2. `.omo/evidence/weather-pwa-design/proxy-threat-review.md`
3. `.omo/evidence/weather-pwa-design/pwa-offline-review.md`
4. `.omo/evidence/weather-pwa-design/location-privacy-review.md`
5. `.omo/evidence/weather-pwa-design/ui-accessibility-review.md`
6. `.omo/evidence/weather-pwa-design/performance-budget-review.md`

### Core Product Decisions
- **Target Platform**: Progressive Web App optimized for standalone execution on Microsoft Edge and Windows 11/10, with best-effort mobile Chromium support.
- **Data Authority**: Official Korea Meteorological Administration (기상청, KMA) open data APIs via `data.go.kr`.
- **Primary Design Driver**: Materially lower app-owned memory consumption than mainstream Electron/commercial weather apps.
- **Security Boundary**: Upstream KMA credentials (`ServiceKey`) must never reach the browser client.
- **Runtime Model**: Vanilla HTML5, CSS, and modern ECMAScript modules; zero frontend framework runtimes by default.

---

## 2. Goals and Non-Goals

### Goals
1. **Low App-Owned Memory Footprint**: Bounded settled V8 JS heap (<= 20 MiB) and DOM node count (<= 500 nodes).
2. **Authoritative & Trustworthy Data**: Official short-term forecasts, nowcasts, and severe weather warnings directly mapped from KMA contracts.
3. **Resilient Offline Utility**: Preserve full readability of the app shell and the latest normalized forecast snapshot when network connectivity is lost.
4. **Strict User Privacy**: Coarse location only (administrative region or KMA 5km grid); zero raw coordinate persistence; zero analytics or device tracking.
5. **Universal Korean Accessibility**: Full WCAG 2.2 AA conformance, native system fonts, natural CJK word-breaking, and high-contrast semantics.

### Non-Goals
1. **No Application Accounts or Analytics**: No user logins, telemetry SDKs, ad networks, or background analytics beacons.
2. **No Interactive Map or Radar Visualizations**: No Leaflet, Mapbox, or WebGL radar overlays, which introduce tens of megabytes of memory bloat.
3. **No Continuous Background Location Tracking**: Geolocation is strictly opt-in and one-shot; `watchPosition` is forbidden.
4. **No Push Notification Infrastructure**: No background push servers, Web Push subscriptions, or background sync workers.
5. **No Multi-Location Carousel**: The client stores exactly one saved coarse location at any given time to eliminate cache and memory proliferation.

---

## 3. System Topology & Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│ BROWSER CLIENT (PWA Sandbox)                                           │
│  - App Shell (HTML/CSS/ES Modules)                                     │
│  - Service Worker (Cache-First Shell, Network-First Data)              │
│  - LocalStorage / IndexedDB (Single latest compatible forecast)        │
│  - Strict Data Invariant: Warnings are NOT persisted offline           │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                       HTTPS / JSON (Normalized)
                      GET /v1/forecast?nx=..&ny=..
                      GET /v1/warnings?region=..
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│ PROVIDER-NEUTRAL PROXY BOUNDARY (Edge / Serverless Function)           │
│  - Origin & CORS Verification                                          │
│  - Coordinate & Parameter Sanitization                                 │
│  - Request Coalescing (In-flight deduplication)                        │
│  - Shared Response Cache (TTL: Forecast 15m, Warnings 5m)              │
│  - Secret Custody: process.env.KMA_SERVICE_KEY                         │
│  - XML/JSON Parsing & Normalization Envelope Constructor               │
│  - Access Log Scrubbing (Redact secrets & query strings)               │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                        HTTPS / REST (Authenticated)
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│ KOREA METEOROLOGICAL ADMINISTRATION (apis.data.go.kr)                  │
│  - 초단기실황 (getUltraSrtNcst)                                         │
│  - 초단기예보 (getUltraSrtFcst)                                         │
│  - 단기예보 (getVilageFcst)                                             │
│  - 기상특보 (WthrWrnInfoService)                                       │
└────────────────────────────────────────────────────────────────────────┘
```

The proxy contract remains completely provider-neutral. It is expressed using standard Web API `fetch`, `Request`, and `Response` interfaces, avoiding any vendor-specific APIs (AWS Lambda, Cloudflare, Fastly, or Vercel). Deployment target selection is explicitly deferred to implementation planning.

---

## 4. Data Authority, Upstream Contracts & Normalized Envelope

### KMA Service Boundaries
1. **초단기실황 (Ultra-Short Nowcast)**: Base time every hour at XX:40. Provides instantaneous observed temperature (`T1H`), 1-hour precipitation (`RN1`), humidity (`REH`), precipitation type (`PTY`), wind direction (`VEC`), and wind speed (`WSD`).
2. **초단기예보 (Ultra-Short Forecast)**: Base time every hour at XX:45. Provides 1-hour through 6-hour forecast cadence for temperature, precipitation probability, and sky condition (`SKY`).
3. **단기예보 (Village Short-Term Forecast)**: Base times 02:00, 05:00, 08:00, 11:00, 14:00, 17:00, 20:00, 23:00 (every 3 hours). Provides predictions through +3 days (오늘, 내일, 모레, 글피) including daily minimum (`TMN`) and maximum (`TMX`) temperatures.
4. **기상특보 (Weather Warning Service)**: Asynchronous event-driven alerts categorized into 호우, 대설, 태풍, 폭염, 한파, 강풍, 풍랑, 건조 등, covering standardized administrative warning zones.

### Normalized JSON Contract (`schemaVersion: 1`)

```json
{
  "schemaVersion": 1,
  "location": {
    "grid": { "nx": 60, "ny": 127 },
    "regionLabel": "서울특별시 종로구 청운동"
  },
  "timestamps": {
    "issuedAt": "2026-09-23T06:00:00Z",
    "fetchedAt": "2026-09-23T06:45:00Z",
    "expiresAt": "2026-09-23T07:15:00Z"
  },
  "status": {
    "forecast": "fresh",
    "warnings": "current"
  },
  "forecast": {
    "current": {
      "temperature": 21.5,
      "apparentTemperature": 22.0,
      "sky": "맑음",
      "precipitationType": "없음",
      "precipitationAmount": 0,
      "humidity": 55,
      "windSpeed": 2.1,
      "windDirection": 180
    },
    "hourly": [
      {
        "time": "2026-09-23T07:00:00Z",
        "temperature": 22.0,
        "sky": "맑음",
        "precipitationProbability": 0,
        "precipitationType": "없음"
      }
    ],
    "daily": [
      {
        "date": "2026-09-23",
        "label": "오늘",
        "minTemperature": 18.0,
        "maxTemperature": 27.0,
        "skyCondition": "맑음"
      }
    ]
  },
  "warnings": {
    "active": false,
    "items": []
  },
  "errors": null
}
```

### Independent Domain Degradation
Forecast and warning domains must degrade independently:
- If the warning service fails upstream while the forecast service succeeds, `status.forecast` remains `"fresh"` while `status.warnings` degrades to `"unavailable"`. The forecast renders normally, and the warning UI displays an informative status rather than crashing or claiming "all clear".
- If both fail, previously cached forecast data is presented with `status.forecast = "stale"`, prominently marking the elapsed data age.

---

## 5. Security & Secret Custody Boundaries

1. **ServiceKey Protection**: The official `data.go.kr` ServiceKey is held exclusively within the proxy runtime environment variables (`KMA_SERVICE_KEY`).
2. **Exclusion from Client Artifacts**:
   - Zero API keys in HTML, JS, CSS, or manifest files.
   - Zero API keys in LocalStorage, IndexedDB, or Service Worker CacheStorage.
   - Zero API keys in client-side telemetry or console logging.
3. **Log Sanitization**: The proxy logging mechanism automatically strips query strings, auth headers, and vendor credentials before emitting log rows.
4. **Coordinate Bounds Sanitization**: The proxy validates grid coordinates against valid Korean boundaries (`1 <= nx <= 149`, `1 <= ny <= 253`), immediately rejecting malformed input with HTTP 400.

---

## 6. PWA Shell, Caching, Offline & Update Semantics

### Cache Strategy
- **App Shell Cache (`weather-shell-v1`)**: Contains `index.html`, `style.css`, `app.js`, and application icons. Handled via a Cache-First strategy for instant startup.
- **Normalized Data Cache**: LocalStorage or IndexedDB storing strictly one compatible forecast snapshot. Handled via a Network-First strategy with fallback to the cached snapshot.

### Critical Offline Rules & Invariants
1. **Forecast Only Retention**: Only the normalized forecast snapshot is persisted.
2. **Offline Warning Status**: Severe weather warnings are never persisted into offline storage. When offline, the warning surface must explicitly report status unavailable or unknown. It must never indicate "특보 없음" or "all clear" while offline, avoiding false safety assurances.
3. **Prominent Data Age**: Whenever cached data is shown, the UI must prominently display the time elapsed since `fetchedAt` (e.g., "1시간 전 데이터 (오프라인)").
4. **Lifecycle & Update Triggers**:
   - Re-fetch on application launch.
   - Re-fetch on explicit user "새로고침" click.
   - Re-fetch on window `online` event when network reconnects.
   - Re-fetch on document `visibilitychange` to `visible` if data is expired (`expiresAt` elapsed).
   - No background sync and no hidden-tab polling.

---

## 7. Location Acquisition, Coarsening & Privacy Contract

1. **Hierarchy**:
   - **Primary**: Manual administrative region picker (시/도 -> 시/군/구 -> 읍/면/동). Completely offline-compatible via a bundled compact lookup table.
   - **Secondary (Opt-in)**: One-shot browser Geolocation API (`navigator.geolocation.getCurrentPosition`) triggered exclusively by user button click.
2. **Coarsening**:
   - Geodetic coordinates (`latitude`, `longitude`) are immediately converted in memory to KMA Lambert projection grid coordinates (`nx`, `ny`).
   - Raw coordinates are discarded immediately after grid calculation.
3. **Stored-Field Allowlist**:
   - Persisted storage contains only: `{ nx: integer, ny: integer, regionLabel: string, savedAt: timestamp }`.
   - Raw coordinates are never stored.
   - Continuous location tracking is strictly out of scope.
4. **Location Reset**: The user can reset and delete the saved location at any time with a single tap, returning the app to an unconfigured selection state.

---

## 8. Memory Surface Distinction & Numeric Resource Budgets

### Memory Surface Distinction
To avoid conflating browser process allocations with application code costs:
- **App-Owned Resources**: V8 JS Heap (objects, closures, arrays), active DOM tree nodes, CSS style rules, and Service Worker storage cache entries. These are directly bounded by this specification.
- **Browser Process Overhead**: Chromium browser host process, GPU compositor, multi-process IPC buffers, and V8 JIT compiler memory. These vary by OS and browser version and are documented for context only.

### Numeric Resource Budgets (Design Proposals)
| Metric | Budget Constraint | Target Surface |
|---|---|---|
| **Initial compressed shell** | `<= 150 KiB` | Gzip/Brotli wire payload |
| **Settled app-owned JS heap** | `<= 20 MiB` | Settled V8 heap after GC |
| **Active DOM nodes** | `<= 500 nodes` | Document node count |
| **Persistent storage cache** | `<= 5 MiB` | CacheStorage + LocalStorage |
| **Hidden-tab idle requests** | `0 requests` | Network activity while minimized |
| **Post-20-cycle JS heap growth** | `<= 2 MiB` | Retained heap after 20 refresh cycles |
| **Post-20-cycle DOM node growth** | `<= 25 nodes` | Retained nodes after 20 refresh cycles |
| **Post-20-cycle cache growth** | `<= 512 KiB` | Storage growth after 20 refresh cycles |

---

## 9. Observability Without Analytics

- The app includes zero tracking beacons, Google Analytics, or third-party monitoring libraries.
- Diagnostic events (such as proxy network errors or Service Worker lifecycle transitions) are logged only to a circular in-memory buffer (maximum 50 entries) accessible via developer console debugging commands (`window.__WEATHER_DEBUG__`).
- No diagnostic data is ever transmitted over the network.

---

## 10. Official Attribution & Licensing

- In compliance with the Korean Public Data Act and 기상청 공공누리 제1유형 (Korea Open Government License Type 1):
  - The UI footer must permanently feature: `"출처: 기상청 (공공데이터포털)"`.
  - All distributed documentation and open source assets must acknowledge KMA as the authoritative source of weather records.

---

## 11. Future Acceptance & Verification Requirements

The table below defines the exact verification protocols that will be executed during the future product implementation phase.

| Scenario-ID | Scenario-Prerequisites | Scenario-Command | Scenario-Steps | Scenario-Expected | Scenario-Failure |
|---|---|---|---|---|---|
| **installability** | Scenario-Prerequisites: Static PWA assets built; hosted on local HTTPS server with valid manifest.webmanifest and sw.js. | Scenario-Command: npx lighthouse http://localhost:8080 --output=json --only-categories=pwa | Scenario-Steps: 1. Launch headless Chromium. 2. Verify manifest link and fields. 3. Verify active service worker registration. 4. Check standalone launch capability. | Scenario-Expected: Lighthouse PWA installability criteria met; manifest validates with standalone display and required icon dimensions. | Scenario-Failure: Missing manifest fields, unregistered service worker, or non-standalone display mode. |
| **grid-data-flow** | Scenario-Prerequisites: Mock KMA proxy running; location fixture set to Seoul (nx: 60, ny: 127). | Scenario-Command: node test/e2e/grid-data-flow.test.js | Scenario-Steps: 1. Send location coordinates to grid converter. 2. Fetch /v1/forecast. 3. Validate normalized envelope structure. 4. Verify temperature and sky rendering. | Scenario-Expected: Valid KMA Lambert conversion; normalized envelope received with status.forecast = 'fresh'; correct UI text rendered. | Scenario-Failure: Grid calculation drift, missing envelope fields, or upstream unhandled exception. |
| **offline-forecast** | Scenario-Prerequisites: App loaded online with successful forecast fetch; network then disconnected. | Scenario-Command: node test/e2e/offline-resilience.test.js | Scenario-Steps: 1. Complete initial online fetch. 2. Disconnect network in browser context. 3. Reload application. 4. Inspect rendered forecast and warning UI. | Scenario-Expected: App shell loads from CacheStorage; saved forecast snapshot displays with prominent data age; warning banner displays status unavailable. | Scenario-Failure: White screen, missing forecast data, or warning banner displaying '특보 없음' while disconnected. |
| **secret-exclusion** | Scenario-Prerequisites: Production client build completed in distribution directory (dist/). | Scenario-Command: bash scripts/scan-secrets.sh dist/ | Scenario-Steps: 1. Scan all client JS, HTML, CSS, and manifest files for ServiceKey patterns, auth tokens, and raw upstream URLs. | Scenario-Expected: Zero secret occurrences found; scan exits with code 0 and empty match list. | Scenario-Failure: Upstream ServiceKey, authorization header, or private token found in client build assets. |
| **performance** | Scenario-Prerequisites: Application loaded in Microsoft Edge with DevTools protocol connection active. | Scenario-Command: node test/perf/memory-budget.test.js | Scenario-Steps: 1. Measure initial shell size. 2. Measure settled JS heap. 3. Count active DOM nodes. 4. Execute 20 location switch cycles and measure post-GC growth. | Scenario-Expected: Settled JS heap <= 20 MiB; DOM nodes <= 500; post-20-cycle heap growth <= 2 MiB; zero idle requests while tab is hidden. | Scenario-Failure: Settled JS heap > 20 MiB, DOM nodes > 500, or memory leak detected during repeated refresh cycles. |
| **accessibility** | Scenario-Prerequisites: Application running on test server with all component states mounted. | Scenario-Command: npx axe-core-cli http://localhost:8080 --tags wcag2aa,wcag22aa | Scenario-Steps: 1. Run automated axe-core rules. 2. Test 200% browser zoom reflow. 3. Verify keyboard tab order and visible focus ring. 4. Check aria-live attributes. | Scenario-Expected: Zero WCAG 2.2 AA violations; visible 2px focus indicator on all interactive controls; clean vertical reflow at 200% zoom. | Scenario-Failure: Contrast below 4.5:1, missing screen-reader labels, clipped content at 200% zoom, or broken keyboard trap. |
| **responsive** | Scenario-Prerequisites: Responsive testing runner connected to Chromium viewport controller. | Scenario-Command: node test/e2e/responsive-viewports.test.js | Scenario-Steps: 1. Set viewport to 360x640 (narrow mobile). 2. Verify single column layout and 44px touch targets. 3. Set viewport to 1280x800 (desktop PWA). 4. Verify centered layout max-width 720px. | Scenario-Expected: Clean layout adaptation across both narrow mobile and desktop viewports without horizontal page overflow. | Scenario-Failure: Content truncated, horizontal scrollbar appearing on body, or interactive targets under 44px on mobile viewport. |
