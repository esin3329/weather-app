# Proxy Threat Model, Security Boundaries, and API Contract Review

## 1. Architectural Boundary & Trust Model
The weather PWA architecture strictly enforces a dual-boundary model:
1. **Client Boundary (Browser PWA)**: Untrusted client environment. Never receives upstream KMA credentials, private service keys, or unrestricted upstream endpoints.
2. **Proxy Boundary (Provider-Neutral Edge/Serverless Proxy)**: Trusted execution environment holding upstream credentials (`KMA_SERVICE_KEY`), handling parameter validation, rate limiting, request coalescing, caching, and log redaction.

```text
[ Browser PWA Client ]
         │
         │  GET /v1/forecast?nx=60&ny=127
         │  GET /v1/warnings?region=11B10101
         ▼
[ Provider-Neutral Proxy Boundary ]  <── Environment Secret: KMA_SERVICE_KEY
   ├── 1. Origin & CORS Filter
   ├── 2. Input Validation (nx, ny, region bounds)
   ├── 3. In-flight Request Coalescing
   ├── 4. In-Memory / Distributed Cache Check
   ├── 5. Upstream Request Signing & Dispatch (5s timeout)
   ├── 6. Response Normalization & Error Mapping
   └── 7. Log Redaction (Mask secrets & query keys)
         │
         │  GET https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/...
         ▼
[ KMA Open Data Upstream (data.go.kr) ]
```

## 2. Request & Response Policy
- **Endpoints**:
  - `/v1/forecast`: Accepts integer query parameters `nx` (1-149) and `ny` (1-253).
  - `/v1/warnings`: Accepts alphanumeric Korean warning region code (e.g. `11B10101`).
- **Response Format**: Always normalized JSON envelope (schemaVersion: 1) with `Cache-Control` header.
- **Provider Neutrality**: The proxy contract is provider-neutral and defined using standard Web Fetch API primitives (`Request`, `Response`, `Headers`), allowing seamless deployment to Node.js, Cloudflare Workers, Fastly, AWS Lambda, or Vercel Edge without vendor lock-in. Provider selection is explicitly deferred.

## 3. Threat-to-Control Matrix

| Threat Category | Risk Description | Control & Mitigation Strategy | Observable Negative Scenario |
|---|---|---|---|
| **Input Tampering & Injection** | Malicious clients pass SQLi, command injection, or out-of-bound grid values. | Strict integer parsing and coordinate range validation (`1 <= nx <= 149`, `1 <= ny <= 253`). Reject unexpected query parameters. | `GET /v1/forecast?nx=999&ny=-1` -> HTTP 400 `{"errors":["invalid_location"]}` (validation rejection) |
| **Cross-Origin Abuse (CORS)** | Third-party websites embedding proxy endpoints to steal quota. | CORS whitelist strictly limited to the PWA origin; disallow wildcard `*` in production. | Unauthorized `Origin: https://evil.com` -> HTTP 403 Forbidden with no `Access-Control-Allow-Origin` (CORS denial) |
| **Quota Exhaustion** | 10,000 daily request limit on data.go.kr exceeded by traffic spikes. | Shared cache with TTL (15m for forecast, 5m for warnings) + in-flight request coalescing. Return HTTP 429 when quota alert threshold reached. | Repeated concurrent requests for grid (60, 127) trigger exactly 1 upstream request (request coalescing); quota exhaustion returns HTTP 429 with `Retry-After: 3600` (quota exhaustion) |
| **Upstream Latency & Hangs** | KMA API slowness hanging proxy workers and client connections. | Strict 5.0-second timeout on upstream `fetch()` with `AbortController`. Fallback to stale cached data or graceful error response. | Upstream response delay > 5000ms -> Proxy aborts connection, returns HTTP 504 `{"errors":["upstream_unavailable"]}` (timeout failure) |
| **Cache Poisoning** | Attacker crafts manipulated headers or parameter casing to cache invalid responses. | Canonicalize cache key strictly to `forecast:${Math.floor(nx)}:${Math.floor(ny)}`. Never cache upstream error payloads. | Client sending `nx=60&nx=60.5` is sanitized to integer grid 60; failed upstream responses bypass cache storage (cache poison prevention) |
| **Denial of Service / Scraping** | High-frequency bots exhausting proxy compute or memory. | Per-IP token bucket rate limiting (max 30 requests/minute per client). | Exceeding 30 req/min -> HTTP 429 Too Many Requests (abuse throttling) |
| **Credential & Key Leakage** | `ServiceKey` or auth tokens leaking through error traces, query dumps, or access logs. | All logging pipelines scrub query strings, authorization headers, and environment tokens. Client responses never echo upstream URLs. | Access log entry records `GET /v1/forecast?nx=60&ny=127 - 200 - 45ms`; all upstream query params containing credentials are completely stripped (redact logs) |

## 4. Upstream Authentication & Secret Non-Disclosure
- The upstream `ServiceKey` is stored exclusively in server-side environment variables or secret vaults (`process.env.KMA_SERVICE_KEY`).
- Upstream URLs, API keys, and vendor response XML structures are strictly forbidden from leaving the proxy boundary.
- Client bundles, service worker scripts, and client-side storage contain zero API secrets.
