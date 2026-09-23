# KMA Contract Review & Normalized Data Specification

## Executive Summary
This document establishes the official data contracts, upstream-to-normalized mapping specifications, and security/reliability boundaries for Korea Meteorological Administration (기상청, KMA) open data integration in the low-memory PWA.

Source rows below are verified against official public documentation endpoints.

Source-Record: 1 | Source-URL: https://www.data.go.kr/data/15084084/openapi.do | Retrieved-At: 2026-09-23T06:58:10Z | Source-Modified: NOT EXPOSED | Body-SHA256: b22cc9e8a72c5ea2c5d44a1bcdbeb60d5764d294f76d85cc6de7239eef6acba6
Digest-Command: sha256sum references/kma-1.body
Source-Record: 2 | Source-URL: https://www.data.go.kr/catalog/15084084/openapi.json | Retrieved-At: 2026-09-23T06:58:10Z | Source-Modified: NOT EXPOSED | Body-SHA256: 8422764cebd82a714cee3ed64d862cb6470faa24209eb3400d06191100be50d9
Digest-Command: sha256sum references/kma-2.body
Source-Record: 3 | Source-URL: https://www.data.go.kr/data/15000415/openapi.do | Retrieved-At: 2026-09-23T06:58:10Z | Source-Modified: NOT EXPOSED | Body-SHA256: 2a0f618c1fed905687b5efb1890f2e3d70951fbfe335851c166835b78477e872
Digest-Command: sha256sum references/kma-3.body
Source-Record: 4 | Source-URL: https://apihub.kma.go.kr/notice.do?seqNotice=21 | Retrieved-At: 2026-09-23T06:58:10Z | Source-Modified: NOT EXPOSED | Body-SHA256: 259cce6910a40af50b6763bc0ba5ac1a11b17d317a780728b8a82e89c377bb6d
Digest-Command: sha256sum references/kma-4.body
Source-Record: 5 | Source-URL: https://apihub.kma.go.kr/notice.do?seqNotice=39 | Retrieved-At: 2026-09-23T06:58:10Z | Source-Modified: NOT EXPOSED | Body-SHA256: 8d2d0d32eb36bdd077c0ef7672b0dc35f44a62e755a2e8ae434cb1abecf116b6
Digest-Command: sha256sum references/kma-5.body
Source-Record: 6 | Source-URL: https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286 | Retrieved-At: 2026-09-23T06:58:10Z | Source-Modified: NOT EXPOSED | Body-SHA256: 53c2df0b08040b1adb10a62403663322f8d5ecc8698e87b802e0017fae06554c
Digest-Command: sha256sum references/kma-6.body

## Capability Matrix

| Domain | Service / Endpoint | Release Schedule | Cadence / Breadth | Target Grid | Upstream Status |
|---|---|---|---|---|---|
| **초단기실황 (Ultra-Short Nowcast)** | `getUltraSrtNcst` | 매시 정시 40분 | 최근 1시간 실황 (기온, 강수, 습도, 풍속, 풍향) | 5 km KMA 격자 (nx, ny) | 공식 단기예보 OpenAPI |
| **초단기예보 (Ultra-Short Forecast)** | `getUltraSrtFcst` | 매시 정시 45분 | +1시간 ~ +6시간 매시각 예보 | 5 km KMA 격자 (nx, ny) | 공식 단기예보 OpenAPI |
| **단기예보 (Short-Term Forecast)** | `getVilageFcst` | 02:00부터 3시간 간격 (일 8회) | 발표시각 +3일 (글피까지) 3시간/1시간별 기온, 강수, 하늘상태 등 | 5 km KMA 격자 (nx, ny) | 공식 단기예보 OpenAPI |
| **기상특보 (Weather Warning)** | `WthrWrnInfoService` | 발생 시 수시 발표 | 호우, 대설, 태풍, 폭염, 한파, 강풍 등 특보 발효/해제 구역 | 전국 육상/해상 특보구역 | 공식 기상특보 OpenAPI |

*Live responses are not fetched in this design phase; contract specifications are derived from official KMA technical guides and data.go.kr schemas.*

## Upstream Category Code Mapping

### 초단기실황 (getUltraSrtNcst)
| Category | Meaning | Unit | Normalized Envelope Field |
|---|---|---|---|
| `T1H` | 기온 (Temperature) | ℃ | `current.temperature` |
| `RN1` | 1시간 강수량 (1-hour precipitation) | mm / 범주 | `current.precipitation1h` |
| `REH` | 습도 (Humidity) | % | `current.humidity` |
| `PTY` | 강수형태 (Precipitation type) | 코드 (0:없음, 1:비, 2:비/눈, 3:눈, 5:빗방울, 6:빗방울눈날림, 7:눈날림) | `current.precipitationType` |
| `VEC` | 풍향 (Wind direction) | deg | `current.windDirection` |
| `WSD` | 풍속 (Wind speed) | m/s | `current.windSpeed` |

### 단기/초단기예보 (getVilageFcst / getUltraSrtFcst)
| Category | Meaning | Unit / Values | Normalized Envelope Field |
|---|---|---|---|
| `TMP` | 1시간 기온 | ℃ | `hourly[].temperature` |
| `SKY` | 하늘상태 | 1:맑음, 3:구름많음, 4:흐림 | `hourly[].skyCondition` |
| `PTY` | 강수형태 | 0:없음, 1:비, 2:비/눈, 3:눈, 4:소나기 | `hourly[].precipitationType` |
| `POP` | 강수확률 | % | `hourly[].precipitationProbability` |
| `PCP` | 1시간 강수량 | mm 범주 (1mm 미만, 1.0~2.9mm 등) | `hourly[].precipitationAmount` |
| `TMN` | 아침 최저기온 | ℃ (일별 06:00 기준) | `daily[].minTemperature` |
| `TMX` | 낮 최고기온 | ℃ (일별 15:00 기준) | `daily[].maxTemperature` |

## Normalized JSON Envelope

Both `/v1/forecast` and `/v1/warnings` adhere to a clean, minimal envelope that avoids exposing upstream XML/JSON artifacts and vendor keys to the client.

```json
{
  "schemaVersion": 1,
  "location": {
    "grid": { "nx": 60, "ny": 127 },
    "regionLabel": "서울특별시 종로구 청운동"
  },
  "timestamps": {
    "issuedAt": "2026-09-23T06:00:00Z",
    "fetchedAt": "2026-09-23T06:45:12Z",
    "expiresAt": "2026-09-23T07:15:00Z"
  },
  "status": {
    "forecast": "fresh",
    "warnings": "current"
  },
  "forecast": {
    "current": {
      "temperature": 21.5,
      "sky": "맑음",
      "precipitationType": "없음",
      "precipitationAmount": 0,
      "humidity": 55,
      "windSpeed": 2.1
    },
    "hourly": [
      {
        "time": "2026-09-23T07:00:00Z",
        "temperature": 22.0,
        "sky": "맑음",
        "precipitationProbability": 0
      }
    ],
    "daily": [
      {
        "date": "2026-09-23",
        "minTemperature": 18.0,
        "maxTemperature": 27.0,
        "condition": "맑음"
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

### Stable Error Codes
- `invalid_location`: Coordinates out of grid range or unrecognized administrative area.
- `upstream_unavailable`: KMA API timeout or 5xx response.
- `quota_exceeded`: Daily quota exhausted at proxy.
- `stale_snapshot`: Live fetch failed; returning previously cached forecast with `status.forecast = "stale"`.

## Boundary Labels & Attribution
- **Security Boundary**: The browser client NEVER sees `ServiceKey` or upstream endpoints (`apis.data.go.kr`). All requests terminate at the lightweight proxy.
- **Attribution Requirement**: 기상청 공공누리 제1유형(출처표시). In accordance with Korean Public Data Law, the UI must prominently display "출처: 기상청".
- **Execution Notice**: No forecast or warning data endpoint was called by this documentation contract review.
