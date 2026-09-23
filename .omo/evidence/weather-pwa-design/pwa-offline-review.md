# PWA Shell, Service Worker Lifecycle, Offline Strategy, and Degraded State Contract

## 1. Executive Summary & Design Scope
This document specifies the Progressive Web App (PWA) client architecture, offline caching rules, Service Worker lifecycle, and state degradation policies.
**Notice**: These are design requirements, not passed implementation tests. Runtime QA will be conducted during the future implementation phase.

## 2. Windows PWA Installability Checklist
To qualify for standalone windowed execution on Microsoft Edge and Windows 11/10 without requiring a browser tab wrapper:
- [ ] **HTTPS / Localhost Execution**: Delivered exclusively over TLS 1.3 or localhost during development.
- [ ] **Web App Manifest (`manifest.webmanifest`)**:
  - `name`: "대한민국 날씨 (저용량 기상청 PWA)"
  - `short_name`: "KMA 날씨"
  - `start_url`: "/"
  - `display`: "standalone"
  - `background_color`: "#FFFFFF"
  - `theme_color`: "#1976D2"
  - `icons`: Includes 192x192 and 512x512 PNG icons (any and maskable purposes).
- [ ] **Service Worker Registration**: Registered at root scope (`/`) with an active `fetch` event handler.

## 3. Cache Separation & Retention Policy

To preserve a lightweight footprint and protect memory/storage budgets, the application maintains two strictly segregated storage layers:

| Cache Layer | Storage Mechanism | Contents | Invalidation / Lifetime | Strategy |
|---|---|---|---|---|
| **App Shell (`weather-shell-v1`)** | CacheStorage API | `index.html`, `style.css`, `app.js`, app icons | Updated atomically on new Service Worker version deployment | Cache-First, fallback to Network |
| **Normalized Data Snapshot** | LocalStorage / IndexedDB | Single latest compatible normalized forecast snapshot for 1 saved place | Overwritten on each fresh fetch; retained across app restarts | Network-First, fallback to Offline Snapshot |

### Crucial Offline Boundaries & Invariants
1. **Forecast Only Persistence**: The offline snapshot contains forecast only. Warnings are never persisted into offline storage.
2. **Offline Warning Unknown / Unavailable**: When offline or when the warning API fails, the warning surface must display status unavailable or status unknown. It must never display "all clear" or "특보 없음" while disconnected, as emergency weather alerts could have been issued upstream while offline.
3. **Data Age Presentation**: Whenever cached data is rendered (whether offline or during background refresh), the UI must prominently display the exact data age based on `fetchedAt` (e.g., "1시간 전 데이터 (오프라인)").
4. **No Background Polling or Timers**:
  - Background sync is out of scope and must not be used (no background sync).
  - Push notification delivery is out of scope and must not be implemented (no push).
  - Persistent timer mechanisms and hidden-tab polling are strictly forbidden (never run persistent timer, no hidden-tab polling).

## 4. Service Worker Lifecycle & Refresh Triggers

```text
[ Install ] ──► Pre-cache static assets into weather-shell-v1 ──► skipWaiting()
      │
[ Activate ] ──► Purge stale shell caches (weather-shell-v0) ──► clients.claim()
      │
[ Fetch Event ]
   ├── Shell requests: Cache-First
   └── Data requests (/v1/*): Network-First, fallback to cached snapshot
```

### Event-Driven Update Triggers
Data is refreshed only upon user-observable events:
1. **Application Launch**: Fresh fetch initiated on startup.
2. **User Explicit Action**: Tap on manual "새로고침" (refresh) button.
3. **Window Reconnect Event**: Triggered via `window.addEventListener('online')` when network connectivity resumes.
4. **Visibility State Return**: Triggered via `document.addEventListener('visibilitychange')` when the user returns to the tab/window (`document.visibilityState === 'visible'`), but only if data age exceeds the freshness threshold (>15 minutes).

## 5. Degraded State & Failure Scenario Matrix

| Scenario ID | Condition / Trigger | System Behavior & Data Presentation | UI State & Accessibility |
|---|---|---|---|
| **first-load** | User opens app for the very first time with no internet connection. | Shell loads from cache (if pre-cached) or browser offline error. No forecast snapshot exists. | Displays clear Korean message: "네트워크에 연결할 수 없습니다. 첫 실행 시 인터넷 연결이 필요합니다." |
| **incompatible** | Stored snapshot `schemaVersion` does not match client expectation. | Incompatible snapshot is safely discarded. | Fallback to blank initial state with prompt to refresh online. |
| **update race** | User requests manual refresh while a visibility-triggered fetch is pending. | In-flight promise coalescing; the second request awaits the pending fetch rather than creating duplicate network traffic. | Refresh icon indicates loading state without UI flicker. |
| **cache failure** | CacheStorage or LocalStorage quota exceeded or storage disabled by private mode. | Fallback to transient in-memory state. App functions normally for the current session. | Warning logged to developer console; no user crash. |
| **partial domain failure** | Forecast service succeeds but warning service fails (or vice versa). | The successful domain renders fresh data. The failed domain renders its graceful fallback. Warning displays status unavailable. | Forecast displays normally; warning badge shows "특보 확인 불가 (일시적 통신 오류)". |
