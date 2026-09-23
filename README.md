# 저메모리 초경량 한국 날씨 PWA (Low-Memory Korean Weather PWA)

기상청(KMA) 공식 데이터를 활용하는 **저메모리(Low-Memory), 고성능, 설치형 한국 날씨 Progressive Web App(PWA)**입니다.

외부 프론트엔드 프레임워크나 비대한 차트/아이콘 라이브러리 없이 순수 **Vanilla Web 표준(HTML5, CSS3, ES Modules)**으로 구축되어, 데스크톱(Windows) 및 모바일 환경에서 매우 적은 메모리와 리소스로 안정적이고 정확한 기상 정보를 제공합니다.

---

## ✨ 주요 특징 (Key Features)

### 1. 극단적인 저메모리 & 경량화 (Ultra Low-Memory Footprint)
- **Zero Frontend Framework**: React, Vue, Webpack, 번들러 등 무거운 런타임 의존성이 전혀 없습니다.
- **초경량 네트워크 전송**: 초기 압축 전송량 약 **20 KiB** (예산 상한: $\le 150\text{ KiB}$).
- **메모리 절약 설계**: 안정화된 V8 JS 힙 메모리 $\le 20\text{ MiB}$, 활성 DOM 노드 $\le 500\text{ 개}$로 철저히 제한.
- **번들 행정구역 데이터**: 전국 시·도/시·군·구/읍·면·동 행정구역 격자 룩업 테이블([`data/kma-regions.json`](data/kma-regions.json))을 44 KiB의 초경량 JSON으로 압축 내장하여 오프라인에서도 즉시 지역 검색이 가능합니다.

### 2. 기상청(KMA) 공식 데이터 연동 & 중립 프록시
- **공식 API 권위성**: 기상청 공공데이터 포털(data.go.kr)의 초단기실황, 초단기예보, 단기예보, 기상특보 API를 직접 연동합니다.
- **표준화된 정규화 엔벨로프**: 비표준적인 XML/JSON 응답을 표준 규격(`schemaVersion: 1`)으로 정규화하여 클라이언트에 제공합니다.
- **요청 결합(Coalescing) 캐시**: 동일 좌표에 대한 동시 요청을 단일 업스트림 호출로 병합하고, 예측 데이터 특성에 맞는 최적의 TTL(예보 15분, 특보 5분)을 적용합니다.
- **완벽한 보안 격리**: 기상청 `KMA_SERVICE_KEY`는 서버/프록시 환경에만 격리되며, 클라이언트 번들, 브라우저 저장소, 로그에 절대 노출되지 않습니다.

### 3. 오프라인 복원력 & 안전성 (Offline Resilience)
- **PWA 오프라인 지원**: Service Worker를 통한 정적 앱 셸 캐싱(Cache-First) 및 최신 예보 스냅샷 로컬 유지(단일 장소).
- **특보 배제 불변식 (Warning Safety Invariant)**: 네트워크 연결이 끊긴 오프라인 상태일 때, 지난 특보를 임의로 보여주거나 "특보 없음(정상)"으로 잘못 안내하지 않고 반드시 **"특보 정보 확인 불가(오프라인)"** 상태로 명시하여 시민 안전을 보장합니다.
- **데이터 신선도(Data Age) 표기**: 현재 화면에 표시된 데이터의 수신 시점(`fetchedAt`)을 기준으로 자연스러운 한국어 경과 시간(예: "방금 전", "15분 전")을 상시 노출합니다.

### 4. 프라이버시 우선 (Privacy First)
- 회원가입, 사용자 계정, 원격 분석(Analytics) 트래커가 전혀 없습니다.
- 사용자가 직접 행정구역을 선택하는 것을 기본으로 하며, GPS 위치 확인은 단발성(One-shot)으로만 동작합니다.
- 단발성 위치 권한으로 얻은 GPS 위·경도는 메모리에서 기상청 5km 격자(`nx, ny`)로 즉각 변환된 후 **원본 좌표는 즉시 파기**됩니다.

### 5. 접근성 & CJK 타이포그래피 (Accessibility)
- **WCAG 2.2 AA 준수**: 스크린 리더 지원(시맨틱 랜드마크, ARIA Live Region 적용) 및 최소 44px 터치 영역, 2px 명확한 포커스 링.
- **한국어 줄바꿈 최적화**: `word-break: keep-all`, `line-break: strict`를 적용하여 단어가 어색하게 끊어지지 않는 유려한 한글 가독성을 제공합니다.
- **다크/라이트 테마 자동 감지**: OS 설정(`prefers-color-scheme`) 및 모션 감소(`prefers-reduced-motion`)를 완벽히 지원합니다.

---

## 🏗️ 시스템 아키텍처 (Architecture)

```text
┌────────────────────────────────────────────────────────────────────────┐
│ BROWSER CLIENT (PWA Sandbox)                                           │
│  - App Shell (Vanilla HTML5 / CSS3 / ES Modules)                       │
│  - Service Worker (Cache-First Shell, Network-First Data)              │
│  - LocalStorage (단일 저장 위치 및 최신 예보 스냅샷)                    │
│  - 안전 원칙: 오프라인 시 기상특보 미저장 및 "확인 불가" 처리          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                       HTTPS / JSON (Normalized)
                      GET /v1/forecast?nx=..&ny=..
                      GET /v1/warnings?region=..
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│ API PROXY SERVER (Node.js HTTP Server)                                 │
│  - 기상청 인증키 보안 격리 (process.env.KMA_SERVICE_KEY)                │
│  - 파라미터 유효성 검증 및 토큰 버킷 IP 레이트 리미터                    │
│  - 동시 요청 결합(In-flight Coalescing) 및 TTL 메모리 캐시             │
│  - schemaVersion: 1 정규화 및 민감 정보 로그 마스킹                    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                        HTTPS / REST (Authenticated)
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│ KOREA METEOROLOGICAL ADMINISTRATION (data.go.kr)                       │
│  - 초단기실황 (getUltraSrtNcst)                                         │
│  - 단기예보 (getVilageFcst)                                             │
│  - 기상특보 (WthrWrnInfoService)                                       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 디렉토리 구조 (Project Structure)

```text
weather/
├── client/                        # 정적 PWA 클라이언트 앱 셸
│   ├── index.html                 # 시맨틱 HTML5 및 ARIA 랜드마크
│   ├── style.css                  # CSS 디자인 토큰, 반응형, 다크모드, CJK 규칙
│   ├── app.js                     # 클라이언트 부트스트랩 및 이벤트 제어기
│   ├── manifest.webmanifest       # PWA 설치형 매니페스트
│   ├── sw.js                      # Service Worker (오프라인 캐싱)
│   ├── modules/
│   │   ├── api.js                 # 프록시 통신 및 타임아웃/오류 처리
│   │   ├── storage.js             # LocalStorage 단일 저장소 매니저
│   │   ├── location.js            # 행정구역 드롭다운 셀렉터 및 단발성 GPS 격자 변환
│   │   ├── kma-grid.js            # 기상청 람베르트 정각원추도법 좌표 변환 모듈
│   │   └── ui.js                  # DOM 렌더러 (현재 날씨, 시간별/일별 예보, 특보)
│   └── assets/                    # PWA 아이콘(192x192, 512x512) 및 파비콘
├── proxy/                         # 초경량 중립 API 프록시 서버
│   ├── server.js                  # HTTP 서버 & 엔드포인트 라우팅 (/v1/forecast, /v1/warnings, /health)
│   ├── kma-client.js              # 기상청 API 클라이언트 (타임아웃 및 시크릿 캡슐화)
│   ├── normalizer.js              # schemaVersion: 1 정규화 엔진
│   ├── cache.js                   # In-flight 요청 결합 및 TTL 캐시
│   └── rate-limiter.js            # IP 기반 토큰 버킷 레이트 리미터 및 로그 마스킹
├── data/
│   └── kma-regions.json           # 전국 행정구역 격자 룩업 테이블 (시도/시군구/읍면동 -> nx, ny)
├── scripts/
│   └── scan-secrets.sh            # 클라이언트 자산 내 시크릿 유출 자동 검증 스크립트
├── test/
│   ├── fixtures/                  # 기상청 업스트림 응답 모의 픽스처
│   ├── unit/                      # 네이티브 Node.js 단위 테스트 (24종)
│   └── e2e/                       # E2E 인수 시나리오 및 성능/보안 예산 테스트 (6종)
├── docs/                          # 시스템 설계서 및 구현 계획서
├── AGENTS.md                      # 작업 가이드라인 및 규칙
├── DESIGN.md                      # 비주얼 디자인 시스템 및 접근성 가이드
└── package.json                   # 의존성 및 스크립트 설정
```

---

## 🚀 시작하기 (Getting Started)

### 요구 사양 (Prerequisites)
- **Node.js**: v18.0.0 이상 (내장 `node:test`, `node:http`, 네이티브 `fetch` 활용)
- 별도의 외부 패키지 설치(`npm install`)가 필요 없는 **Zero-Dependency** 프로젝트입니다.

### 환경 변수 설정 (Environment Variables)
기상청 공공데이터 포털([data.go.kr](https://www.data.go.kr/))에서 발급받은 서비스 키를 환경 변수로 지정합니다:

```bash
# bash / zsh
export KMA_SERVICE_KEY="발급받은_기상청_일반_인증키"
export PORT=8080 # (선택 사항, 기본값: 8080)
```

> **참고**: `KMA_SERVICE_KEY`를 설정하지 않아도 프록시 서버는 정상 기동되며, 단위 및 E2E 테스트는 내장된 모의 픽스처(`test/fixtures/`)를 통해 완벽히 실행됩니다.

### 실행 명령어 (Running the Application)

```bash
# 1. 프록시 및 정적 PWA 서버 시작 (기본 포트: 8080)
npm start

# 2. 개발 모드 (소스 변경 감지 자동 재시작)
npm run dev
```

브라우저에서 `http://localhost:8080`에 접속하여 날씨 앱을 이용하거나 브라우저 주소창의 설치 버튼을 눌러 데스크톱 PWA로 설치할 수 있습니다.

---

## 🧪 테스트 및 품질 검증 (Verification & Testing)

Node.js 내장 테스트 러너를 사용하여 매우 빠르고 가볍게 검증됩니다:

```bash
# 1. 전체 단위 테스트 실행 (24개 단위 테스트)
npm test

# 2. E2E 인수 시나리오 및 성능 예산 테스트 실행 (6개 시나리오)
npm run test:e2e

# 3. 클라이언트 자산 내 시크릿 유출 검사
npm run scan:secrets
```

### 테스트 커버리지 및 예산 항목
- **좌표 변환 정확도**: 기상청 주요 관측 지점(서울시청, 부산, 제주, 독도 등) 격자 변환 및 역변환 일치성.
- **성능 예산 검증**: 압축 전송량 $\le 150\text{ KiB}$ (실제 약 $20.48\text{ KiB}$ 달성), 행정구역 데이터 $\le 100\text{ KiB}$ (실제 약 $43.88\text{ KiB}$ 달성).
- **오프라인 안전성**: 네트워크 차단 시 오프라인 특보 제외 원칙(`unavailable/unknown`) 엄격 준수 확인.
- **비밀키 비노출**: `client/` 정적 자산 디렉토리 내 API 키 및 민감 식별자 0건 검증.

---

## 📄 라이선스 (License)

이 프로젝트는 [Apache-2.0 License](LICENSE)에 따라 배포됩니다.
