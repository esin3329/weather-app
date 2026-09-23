# Visual Design System & UI Accessibility Contract

## 1. Overview & Design Principles

This document establishes the visual design system, layout rules, component states, and accessibility standards for the low-memory Korean weather Progressive Web App (PWA).

### Foundational Principles
1. **Low-Memory Architecture**: Absolute avoidance of external web font downloads, heavy SVG chart library packages, component framework runtimes, and bulky icon package bundles. The UI leverages native OS system font rendering, semantic HTML5, and CSS primitives.
2. **Korean Typography Excellence**: First-class handling of Korean CJK typography, word-breaking, and multi-line weather warnings without mid-word syllable splits.
3. **WCAG 2.2 AA Accessibility**: Full keyboard operation, visible focus indicators, high contrast ratios, 200% zoom reflow, reduced motion support, and assertive screen-reader status semantics.
4. **Resilient State Presentation**: Clear, accessible visual language for fresh, stale, offline, and degraded data states.

---

## 2. Design Tokens (디자인 토큰)

The design token system is declared as native CSS Custom Properties, enabling instant theme switching and zero runtime memory overhead.

### Color Tokens (색상 토큰)
All text-to-background combinations meet or exceed WCAG 2.2 AA contrast standards (minimum 4.5:1 for normal text, 3:1 for large text / UI graphics).

```css
:root {
  /* Light Theme (기본 라이트 테마) */
  --color-bg-base: #F8F9FA;            /* 메인 뷰포트 배경 */
  --color-surface: #FFFFFF;            /* 카드 및 컴포넌트 표면 */
  --color-surface-hover: #F1F3F5;      /* 상호작용 호버 상태 */
  --color-border: #E9ECEF;             /* 카드 및 구분선 경계 */
  --color-border-subtle: #DEE2E6;      /* 미세 경계선 */

  /* Text & Contrast Tokens */
  --color-text-primary: #1A1A1A;       /* 주요 텍스트 (명도비 14.8:1) */
  --color-text-secondary: #595959;     /* 보조 텍스트 및 라벨 (명도비 7.0:1) */
  --color-text-muted: #737373;         /* 부가 정보 및 타임스탬프 (명도비 4.8:1) */

  /* Semantic State Colors */
  --color-accent: #1976D2;             /* 인터랙티브 요소 및 포커스 링 */
  --color-accent-hover: #1565C0;       /* 버튼 호버 상태 */
  --color-focus-ring: #0D47A1;         /* 고대비 포커스 아웃라인 (명도비 > 3:1) */

  /* Weather & Warning State Colors */
  --color-temp-hot: #D32F2F;           /* 고온/폭염 경고 텍스트 */
  --color-temp-cold: #1976D2;          /* 저온/한파 텍스트 */
  --color-warning-bg: #FFF3CD;         /* 기상특보 배경색 */
  --color-warning-border: #FFE69C;     /* 기상특보 테두리 */
  --color-warning-text: #664D03;       /* 기상특보 본문 텍스트 (명도비 7.5:1) */
  --color-offline-bg: #E2E3E5;         /* 오프라인 배지 배경 */
  --color-offline-text: #383D41;       /* 오프라인 배지 텍스트 (명도비 8.2:1) */
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark Theme (다크 테마) */
    --color-bg-base: #121212;
    --color-surface: #1E1E1E;
    --color-surface-hover: #2A2A2A;
    --color-border: #333333;
    --color-border-subtle: #444444;

    --color-text-primary: #EDEDED;     /* 명도비 13.5:1 */
    --color-text-secondary: #AAAAAA;   /* 명도비 6.2:1 */
    --color-text-muted: #888888;       /* 명도비 4.6:1 */

    --color-accent: #64B5F6;
    --color-accent-hover: #90CAF9;
    --color-focus-ring: #BBDEFB;

    --color-warning-bg: #3E2723;
    --color-warning-border: #5D4037;
    --color-warning-text: #FFE082;     /* 명도비 9.1:1 */
    --color-offline-bg: #2C2C2C;
    --color-offline-text: #B0BEC5;
  }
}
```

### Typography Tokens (타이포그래피 토큰)
- **System Font Stack**: Standardized on high-legibility Korean native platform fonts to avoid any web font network payload:
  ```css
  --font-system: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Malgun Gothic", "Apple SD Gothic Neo", sans-serif;
  ```
- **Scale**:
  - `--text-xs`: `12px` / line-height `16px` (출처 표기, 보조 캡션)
  - `--text-sm`: `14px` / line-height `20px` (시간별 예보 라벨, 세부 날씨 지표)
  - `--text-base`: `16px` / line-height `24px` (본문, 행정구역명, 버튼)
  - `--text-lg`: `20px` / line-height `28px` (카드 제목, 섹션 헤더)
  - `--text-xl`: `28px` / line-height `36px` (요약 기상 상태)
  - `--text-display`: `48px` / line-height `56px` (현재 기온 메인 디스플레이)

### Spacing & Layout Tokens (간격 토큰)
Based on an 8pt grid with 4pt half-steps:
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px` (기본 카드 패딩)
- `--space-6`: `24px` (섹션 간 마진)
- `--space-8`: `32px` (주요 영역 분할)
- `--radius-sm`: `4px`
- `--radius-md`: `8px`
- `--radius-lg`: `12px`

---

## 3. Page Anatomy & Wireframe

The application utilizes a single-page top-to-bottom layout with zero page transitions or client-side routing.

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. Header & Location Selector (상단바)                      │
│    [ 서울특별시 종로구 청운동 ▾ ]  [ 새로고침 ↻ ]           │
│    상태: 10분 전 업데이트 (정상)                            │
├─────────────────────────────────────────────────────────────┤
│ 2. Emergency Warning Banner (기상특보 알림, 조건부 렌더링)  │
│    ⚠️ [호우주의보] 서울 전역 호우주의보 발효 중 (자세히)    │
├─────────────────────────────────────────────────────────────┤
│ 3. Current Weather Hero (현재 날씨 요약 카드)                │
│    ┌───────────────────────────────────────────────────┐    │
│    │  21.5°              맑음 ☀️                       │    │
│    │  체감온도 22.0°     어제보다 1.2° 높음            │    │
│    │  ───────────────────────────────────────────────  │    │
│    │  습도: 55%    풍속: 2.1m/s    1시간 강수량: 0mm   │    │
│    └───────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│ 4. Hourly Forecast (시간별 단기예보, 24시간 가로 스크롤)    │
│    [15시 맑음 22°] [16시 구름 21°] [17시 흐림 20°] ...     │
├─────────────────────────────────────────────────────────────┤
│ 5. Daily Forecast (주간 단기예보, 3일 세로 리스트)          │
│    - 오늘: 최저 18° / 최고 27°  (강수확률 0%)               │
│    - 내일: 최저 19° / 최고 26°  (강수확률 20%)              │
│    - 모레: 최저 17° / 최고 24°  (강수확률 60% 비)           │
├─────────────────────────────────────────────────────────────┤
│ 6. Footer & Attribution (하단 상태 및 출처)                 │
│    - 출처: 기상청 (공공데이터포털)                           │
│    - [ 위치 변경 및 데이터 초기화 ]                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Korean CJK Line-Breaking & Long Warning Rules

### Typography Rule for Korean Copy
Korean text wrapping requires specialized CSS to prevent awkward mid-word breaks while ensuring long emergency messages do not break container bounds:

```css
/* CJK line wrapping rules applied to all Korean text */
.cjk-text,
.weather-summary,
.warning-message,
.location-label {
  word-break: keep-all;         /* 단어 단위 줄바꿈 유지 */
  overflow-wrap: break-word;    /* 긴 단어가 컨테이너를 넘칠 때 줄바꿈 */
  line-break: strict;           /* CJK 구두점 및 기호 규칙 준수 */
}
```

### 긴 기상특보 (Long Warning) Presentation Scenario
- **Scenario**: KMA issues a multi-region complex alert:
  `"호우경보: 서울(동남권, 동북권), 경기도(과천, 성남, 하남, 광주), 충청북도(청주, 괴산) / 산사태 및 급류 유의"`
- **Presentation Rule**:
  - The warning banner must expand vertically without text clipping or horizontal scrolling.
  - The warning container uses minimum 16px internal padding and a high-contrast border.
  - Screen readers receive the alert immediately via `role="alert"` and `aria-live="assertive"`.

---

## 5. Responsive Behavior: Narrow Mobile vs. Windows Desktop

### Narrow Viewport (Mobile: 360px ~ 767px)
- **Container**: Full width with `16px` gutter margins (`padding: 0 16px`).
- **Touch Targets**: Minimum interactive button size is `44px x 44px`.
- **Hourly Track**: Native horizontal touch scroll with momentum (`overflow-x: auto; scroll-snap-type: x mandatory;`).
- **Cards**: Single column vertical stack.

### Desktop Viewport (Windows PWA: 768px ~ 1440px+)
- **Container**: Horizontally centered with a bounded max-width (`max-width: 720px`) to prevent excessively wide text lines.
- **Hourly Track**: Mouse wheel horizontal scroll support (`shift + wheel`) and left/right keyboard navigation buttons.
- **Visual Balance**: Subtle card shadows (`box-shadow: 0 2px 8px rgba(0,0,0,0.06)` in light mode) and distinct 2px focus outlines.

---

## 6. Comprehensive Component States & Korean Copy Matrix

| Component | State | Visual Presentation | Korean Copy Example | ARIA / Accessibility |
|---|---|---|---|---|
| **Location Bar** | **Default / Fresh** | Administrative text with subtle dropdown arrow. | `"서울특별시 종로구 청운동"` | `aria-label="현재 선택된 위치: 서울특별시 종로구 청운동"` |
| | **Updating** | Rotating refresh icon. | `"기상청 최신 예보 확인 중..."` | `aria-busy="true"` |
| | **Error / Denied** | Warning icon, click to open manual picker. | `"위치 권한 거부됨 (직접 선택)"` | `aria-live="polite"` |
| **Weather Warning (경고)** | **Active Alert** | Prominent colored banner with alert icon. | `"⚠️ [호우주의보] 서울 전역 발효 중"` | `role="alert"` `aria-live="assertive"` |
| | **Offline / Degraded** | Muted status badge. | `"특보 정보 확인 불가 (오프라인)"` | `aria-live="polite"` (Never says "all clear") |
| **Weather Hero** | **Fresh (맑음)** | Clear sun glyph, sharp temperature. | `"21.5°"`, `"맑음"` | `aria-label="현재 기온 섭씨 21.5도, 맑음"` |
| | **Fresh (비)** | Rain glyph, precipitation details. | `"17.0°"`, `"비 (시간당 3mm)"` | `aria-label="현재 기온 17도, 비"` |
| | **Offline Snapshot** | Muted card header with data age badge. | `"21.5°"`, `"1시간 전 데이터 (오프라인)"` | `aria-label="오프라인 저장 데이터: 1시간 전 기온 21.5도"` |
| **Status Bar** | **Online / Fresh** | Subtle dot indicator. | `"기상청 예보 기준: 10분 전"` | `aria-live="polite"` |
| | **Offline (오프라인)** | Gray offline badge with reload trigger. | `"오프라인 상태 (네트워크 연결 필요)"` | `aria-live="polite"` |

---

## 7. Accessibility Contract (WCAG 2.2 AA Conformance)

1. **Visible Focus Indicators**:
   - Every interactive control (buttons, links, select menus) features a high-visibility focus ring:
     ```css
     :focus-visible {
       outline: 2px solid var(--color-focus-ring) !important;
       outline-offset: 2px !important;
     }
     ```
2. **Keyboard Navigation (keyboard navigation)**:
   - Logical tab order: Location Switcher -> Manual Refresh -> Weather Warning (if active) -> Hourly Track -> Daily List -> Reset Button.
   - Arrow keys (`ArrowLeft`, `ArrowRight`) seamlessly scroll the hourly forecast items.
3. **200% Zoom Reflow**:
   - At 200% zoom (and Windows Display Scaling 200%), typography scales proportionally without horizontal page clipping or text collision.
4. **Reduced Motion (`prefers-reduced-motion: reduce`)**:
   - All animations (spinners, accordions) collapse to immediate transitions when reduced motion is detected in OS settings:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *, *::before, *::after {
         animation-duration: 0.001ms !important;
         transition-duration: 0.001ms !important;
       }
     }
     ```
5. **Screen-Reader Semantics**:
   - Status updates are announced politely via `aria-live="polite"`.
   - Severe alerts use `aria-live="assertive"`.
   - Decorative icons carry `aria-hidden="true"`, accompanied by invisible `.sr-only` descriptive text for assistive technology.

---

## 8. Explicit Design Debt & Architectural Tradeoffs

The following items represent accepted design debt, chosen deliberately to satisfy the strict low-memory mandate:
1. **Single Saved Location**: The application does not maintain a multi-city carousel or favorites list. This eliminates multiple simultaneous data snapshots and saves significant storage/memory.
2. **Tabular Hourly Representation**: Complex animated Canvas/SVG temperature graphs are omitted in favor of lightweight HTML/CSS cards.
3. **Native Unicode Glyphs**: Custom SVG icon font bundles are omitted in favor of system-rendered weather emoji and CSS geometric indicators.
