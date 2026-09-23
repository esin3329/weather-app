# Low-Memory Korean Weather PWA Implementation Plan

## 1. Overview & Context

This document outlines the phased, step-by-step engineering plan for implementing the installable, low-memory Korean weather Progressive Web App (PWA) specified in [docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md](file:///home/jeon_huijun/Project/weather/docs/superpowers/specs/2026-08-10-low-memory-kma-weather-pwa-design.md) and designed in [DESIGN.md](file:///home/jeon_huijun/Project/weather/DESIGN.md).

### Non-Negotiable Architectural Invariants
1. **Zero External Frontend Dependencies**: Pure vanilla HTML5, CSS3, and modern ES modules. No React/Vue, no Webpack/Vite bundle complexity, no external web fonts, no chart libraries, no SVG icon packages.
2. **App-Owned Memory Limits**:
   - Initial wire transfer payload: `<= 150 KiB`
   - Settled V8 JS heap: `<= 20 MiB`
   - Active DOM nodes: `<= 500 nodes`
   - Persistent cache storage: `<= 5 MiB`
   - Zero background requests when tab/window is hidden.
3. **Secret Non-Disclosure**: `KMA_SERVICE_KEY` resides strictly in the proxy environment. Zero credentials in client bundles, storage, or logs.
4. **Offline Resilience & Integrity**:
   - Single compatible normalized forecast snapshot retained for 1 saved place.
   - Warnings are **never** persisted offline; offline warning state is explicitly `unavailable` / `unknown`, **never** "all clear".
   - Data age based on `fetchedAt` is prominently presented whenever cached data is displayed.
5. **Privacy First**:
   - Manual administrative selection is primary.
   - Opt-in one-shot geolocation converted immediately in memory to KMA grid `(nx, ny)`; raw coordinates are never stored.
   - Zero analytics, device tracking, or user accounts.

---

## 2. Target File Tree Structure

```text
weather/
├── .gitignore
├── AGENTS.md
├── DESIGN.md
├── package.json                   # Scripts, linting, test runner definitions
├── client/                        # Static PWA App Shell
│   ├── index.html                 # Semantic HTML skeleton & ARIA landmarks
│   ├── style.css                  # CSS tokens, CJK rules, dark mode, responsive styles
│   ├── app.js                     # Client bootstrap and controller
│   ├── manifest.webmanifest       # PWA standalone manifest
│   ├── sw.js                      # Service Worker (Cache-First Shell, Network-First Data)
│   ├── modules/
│   │   ├── api.js                 # Proxy fetch client with timeout & error normalization
│   │   ├── storage.js             # LocalStorage manager for single saved place & forecast snapshot
│   │   ├── location.js            # Administrative picker logic & opt-in geolocation
│   │   ├── kma-grid.js            # Lambert Conformal Conic math (lat, lon <-> nx, ny)
│   │   └── ui.js                  # DOM renderer (Hero, Hourly, Daily, Warning, Status)
│   └── assets/
│       ├── icon-192.png           # PWA icon 192x192
│       ├── icon-512.png           # PWA icon 512x512
│       └── favicon.ico
├── proxy/                         # Provider-Neutral Proxy Server (Node.js / Edge HTTP handler)
│   ├── server.js                  # HTTP server & routing (/v1/forecast, /v1/warnings, /health)
│   ├── kma-client.js              # KMA API caller with timeout & secret custody
│   ├── normalizer.js              # Raw KMA XML/JSON to schemaVersion: 1 normalizer
│   ├── cache.js                   # In-memory coalescing cache with TTL
│   └── rate-limiter.js            # Token-bucket rate limiter & CORS verification
├── data/
│   └── kma-regions.json           # Bundled administrative lookup table (시도/시군구/읍면동 -> nx, ny)
├── test/
│   ├── fixtures/                  # Upstream KMA response fixtures (nowcast, forecast, warning)
│   ├── unit/                      # Fast unit tests (native Node test runner)
│   │   ├── kma-grid.test.js       # Coordinate-to-grid math tests
│   │   ├── normalizer.test.js     # Upstream-to-normalized envelope tests
│   │   ├── storage.test.js        # Offline storage & data-age tests
│   │   ├── rate-limiter.test.js   # Rate limiting & CORS tests
│   │   └── cache.test.js          # Request coalescing & TTL tests
│   └── e2e/                       # Acceptance scenarios
│       ├── offline-resilience.test.js
│       ├── secret-exclusion.test.js
│       └── performance-budget.test.js
└── docs/                          # Architecture, specs, and plans
```

---

## 3. Implementation Phases & Work Breakdown

### Phase 1: Foundations & Core Mathematical Models
- **Task 1.1: Toolchain & Project Configuration**
  - Create minimal `package.json` with scripts for `start`, `dev`, `test`, `test:unit`, `test:e2e`, and `lint`.
  - Zero production dependencies (`node:http`, `node:test`, native `fetch`).
- **Task 1.2: KMA Lambert Conformal Conic Grid Conversion Module**
  - Implement `client/modules/kma-grid.js` using official KMA Lambert projection parameters:
    - Standard parallels: 30.0°, 60.0°
    - Grid origin: 38.0° N, 126.0° E
    - Reference coordinate: (nx: 210 / 5 km, ny: 675 / 5 km) -> X: 43, Y: 136
  - Unit test against known reference coordinates (e.g. Seoul City Hall, Busan, Jeju, Dokdo).
- **Task 1.3: Bundled Korean Administrative Areas Lookup Table**
  - Generate compact `data/kma-regions.json` containing Korean administrative regions (시도, 시군구, 읍면동) mapped to pre-calculated `(nx, ny)` coordinates.
  - Optimize file size (compact JSON, <= 100 KiB) to support instant offline lookup.

### Phase 2: Provider-Neutral API Proxy Server
- **Task 2.1: Upstream KMA Client & Secret Custody**
  - Implement `proxy/kma-client.js`.
  - Read `process.env.KMA_SERVICE_KEY`.
  - Enforce strict 5.0-second timeout with `AbortController`.
  - Handle both JSON and XML responses from data.go.kr gracefully.
- **Task 2.2: Data Normalizer (`proxy/normalizer.js`)**
  - Map `T1H`, `RN1`, `REH`, `PTY`, `VEC`, `WSD` to current weather.
  - Map `TMP`, `SKY`, `POP`, `PCP` to 24-hour hourly array.
  - Group 3-day short-term forecast by date with daily `TMN` / `TMX`.
  - Parse warning service areas into active/inactive alert items.
  - Assemble standard JSON envelope (`schemaVersion: 1`).
- **Task 2.3: In-Memory Coalescing Cache (`proxy/cache.js`)**
  - Deduplicate concurrent in-flight requests for identical `(nx, ny)` grids.
  - Implement TTL: 15 minutes for forecast, 5 minutes for warnings.
- **Task 2.4: Proxy HTTP Server & Security Controls (`proxy/server.js`, `rate-limiter.js`)**
  - Input validation: reject coordinates outside `1 <= nx <= 149, 1 <= ny <= 253`.
  - CORS policy: reject unauthorized origins in production.
  - Per-IP rate limiting (token bucket, 30 req/min).
  - Log scrubbing: sanitize secrets from query strings and headers.

### Phase 3: PWA Client Shell & Offline Storage
- **Task 3.1: Semantic HTML Skeleton (`client/index.html`)**
  - Implement semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`.
  - Embed ARIA live regions: `aria-live="polite"` for weather updates, `role="alert"` `aria-live="assertive"` for emergency warnings.
  - Include `.sr-only` class for screen-reader text.
- **Task 3.2: CSS Tokens & Responsive Styling (`client/style.css`)**
  - Declare CSS Custom Properties for light/dark themes matching `DESIGN.md`.
  - Apply system font stack and Korean CJK line-breaking (`word-break: keep-all; overflow-wrap: break-word; line-break: strict;`).
  - Implement 44px minimum touch targets and 2px visible focus rings.
  - Implement `@media (prefers-reduced-motion: reduce)`.
  - Support 200% zoom reflow without horizontal body scroll.
- **Task 3.3: Offline Storage Manager (`client/modules/storage.js`)**
  - Manage single saved location: `{ nx, ny, regionLabel, savedAt }`.
  - Manage forecast snapshot: save latest normalized forecast; calculate data age from `fetchedAt`.
  - Enforce invariant: **never** store warnings in offline storage.
  - Provide complete location deletion and data reset flow.
- **Task 3.4: PWA Manifest & Service Worker (`manifest.webmanifest`, `sw.js`)**
  - Configure standalone display, theme colors, and icons.
  - Implement `sw.js`: Pre-cache `weather-shell-v1` on `install`; clean up stale versions on `activate`.
  - Implement `fetch` routing: Cache-First for static assets, Network-First for `/v1/*` data.
  - Generate 192x192 and 512x512 PWA icons.

### Phase 4: Client Application Logic & UI Rendering
- **Task 4.1: Location Selector & Opt-in Geolocation (`client/modules/location.js`)**
  - Render administrative dropdown picker with searchable filtering.
  - Implement opt-in one-shot geolocation: invoke `getCurrentPosition()`, convert to grid, discard raw coordinates, and persist only coarse grid.
  - Handle permission denial and out-of-range errors gracefully.
- **Task 4.2: UI Renderer (`client/modules/ui.js`)**
  - Render Hero Card (current temperature, apparent temp, weather glyph, humidity, wind, rain).
  - Render Hourly Track (24-hour horizontal scrollable list with native momentum).
  - Render 3-Day Forecast (daily min/max temperature and precipitation probability).
  - Render Weather Warning Banner: display active alerts or status unavailable/unknown when offline; **never** display "all clear" when disconnected.
  - Render Status Footer: prominent data age badge and official attribution (`"출처: 기상청"`).
- **Task 4.3: App Controller & Event Triggers (`client/app.js`)**
  - Wire startup data fetch.
  - Wire manual "새로고침" refresh button.
  - Wire `online` window event to auto-refresh when connectivity resumes.
  - Wire `visibilitychange` event to refresh if data has expired.

### Phase 5: Verification, Quality Assurance & Benchmarks
- **Task 5.1: Unit Test Suite**
  - Execute unit tests for grid math, normalizer, storage, and rate limiter.
- **Task 5.2: Secret Scanning Audit**
  - Run automated scan on all client assets to verify zero credentials exist in client-side code.
- **Task 5.3: Future-Acceptance Scenario Verification**
  - Validate all 7 defined scenarios:
    1. Installability (Lighthouse PWA audit).
    2. Grid Data Flow (E2E conversion & rendering).
    3. Offline Forecast & Warning Unavailable Semantics.
    4. Secret Exclusion.
    5. Performance Budget (JS heap <= 20 MiB, DOM nodes <= 500, post-20-cycle growth <= 2 MiB).
    6. Accessibility (axe-core WCAG 2.2 AA zero violations, 200% zoom reflow).
    7. Responsive Viewports (360px mobile to 1280px+ desktop PWA).

---

## 4. Execution Readiness Checklist
- [x] Design specification complete and approved (`docs/superpowers/specs/`).
- [x] Visual design system and tokens defined (`DESIGN.md`).
- [x] Official KMA contracts and threat reviews verified (`.omo/evidence/`).
- [x] Git repository initialized and design baseline committed to `main`.
- [ ] User authorization to begin Phase 1 implementation.
