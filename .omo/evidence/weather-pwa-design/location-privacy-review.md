# Coarse Location Acquisition, Privacy Boundaries, and Deletion Contract

## 1. Executive Summary & Privacy Principles
The application adopts an uncompromising data-minimization and purpose-limitation policy:
- **No Continuous Tracking**: Continuous tracking and background location tracking are strictly forbidden (out of scope, must not be implemented).
- **No Precise Location Retention**: Precise location and raw coordinates (latitude, longitude, altitude, accuracy) are never stored or persisted anywhere (never stored, not persisted).
- **No Analytics or Identifiers**: There are no analytics, device fingerprinting, user accounts, or tracking cookies (no analytics).
- **Manual Selection First**: The user is never forced into location permission prompts.

## 2. Location Acquisition Flow & Decision Table

| Hierarchy Level | Method | User Action / Trigger | Permission Required? | Coarsening & Conversion Process |
|---|---|---|---|---|
| **Primary (Default)** | **Manual Administrative Selection** | User selects 시/도 -> 시/군/구 -> 읍/면/동 from bundled administrative lookup table. | None | Directly maps chosen administrative unit to official KMA grid `(nx, ny)`. Zero coordinate exposure. |
| **Secondary (Convenience)** | **Opt-in One-Shot Geolocation** | User explicitly clicks "현재 위치로 설정" (Set to Current Location) button. | Yes (Browser Geolocation Prompt) | Calls `navigator.geolocation.getCurrentPosition()`. Coordinates are converted locally in memory to `(nx, ny)` grid and discarded immediately. |

```text
[ User clicks "현재 위치" ]
         │
         ▼
[ navigator.geolocation.getCurrentPosition(options) ]
         │
         ├── Permission Denied ──► Show manual picker + explain rationale
         ├── Position Unavailable ──► Show retry or manual picker
         │
         ▼
[ In-Memory Conversion (Lambert Conformal Conic) ]
  (lat, lon) ──► KMA Grid (nx, ny) [5km resolution]
         │
         ▼
[ Discard lat, lon completely ] ──► Raw coordinates are never stored!
         │
         ▼
[ Save only: nx, ny, regionLabel ] ──► Stored in LocalStorage
```

## 3. Stored-Field Allowlist

The application persists only minimal coarse data for exactly one saved place:

| Field Name | Type | Example Value | Description |
|---|---|---|---|
| `nx` | Integer | `60` | KMA 5km Lambert projection X grid |
| `ny` | Integer | `127` | KMA 5km Lambert projection Y grid |
| `regionLabel` | String | `"서울특별시 종로구 청운동"` | Coarse human-readable Korean administrative label |
| `savedAt` | String (ISO-8601) | `"2026-09-23T06:00:00Z"` | Timestamp of selection |

### Explicit Exclusions (Forbidden Storage)
- Raw coordinates (`latitude`, `longitude`): must not be stored, never persisted.
- Precise location data: never persisted.
- Continuous tracking state: out of scope, never stored.
- Device identifiers or IP addresses: no analytics tracking.

## 4. Deletion, Reset, and Error Handling

### Location Deletion / Reset Flow
- In the settings/location view, a prominent **"위치 초기화 및 삭제" (Delete/Reset Location)** action is provided.
- Triggering delete/reset immediately wipes the stored-field record from LocalStorage.
- App state resets to the default administrative center (e.g., "서울특별시 종로구" or prompts the manual selector).

### Error Handling & Boundary Edge Cases

| Scenario | Condition | System Response & User Message |
|---|---|---|
| **Permission Denied** | User denies browser geolocation permission prompt. | Fallback gracefully to manual administrative picker. Copy: "위치 권한이 거부되었습니다. 아래 목록에서 지역을 직접 선택해주세요." |
| **Location Unavailable** | GPS timeout or network location unavailable. | Copy: "위치 정보를 가져올 수 없습니다. 인터넷 상태를 확인하거나 직접 선택해주세요." |
| **Boundary / Out-of-Range** | Coordinates fall outside the KMA forecast boundary (outside Korean territory). | System detects `nx < 1 || nx > 149 || ny < 1 || ny > 253`. Copy: "대한민국 기상청 예보 구역을 벗어난 위치입니다. (out-of-range boundary error) 국내 지역을 선택해주세요." |
| **Ambiguous Location** | One-shot geolocation falls exactly on an administrative boundary line. | Select the nearest grid center and display the verified administrative label with an option to manually refine. |
