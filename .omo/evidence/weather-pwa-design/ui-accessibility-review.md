# Korean Information Architecture, UI Tokens, Responsive Layout, and Accessibility Review

## 1. Executive Summary & Design Principles
This document defines the single-page information architecture, design tokens (디자인 토큰), Korean typography (한국어 타이포그래피), responsive viewport rules, and WCAG 2.2 AA accessibility contracts for the low-memory weather PWA.

### Zero-Dependency Philosophy (Avoided Dependencies)
To strictly respect the app-owned memory budget (<= 20 MiB JS heap, <= 150 KiB compressed shell), the application deliberately excludes heavy runtime libraries:
- **No Web Font**: Custom web font downloads are avoided (out of scope, does not use external web fonts); uses native OS system font stack.
- **No Chart Library**: Third-party SVG/Canvas chart library packages (e.g. Chart.js, D3) are avoided; hourly trends use semantic HTML lists and native CSS bars.
- **No Framework Runtime**: Heavy framework runtime bundles (React, Vue, Angular) are avoided; built with vanilla ES modules, HTML, and CSS.
- **No Icon Package**: Bulky SVG icon package distributions (FontAwesome, Lucide) are avoided; uses platform Unicode weather glyphs and native CSS shapes.
- **No Map or Radar**: Interactive GIS map and Doppler radar canvas libraries are avoided (no map, no radar); focus is strictly on authoritative text/numeric forecasts.

## 2. Component Inventory & Information Hierarchy

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. Header & Location Bar                                    │
│    - Current Region Label: "서울특별시 종로구 청운동"       │
│    - Location Switcher / Reset Button                       │
│    - Manual Refresh Button & Data Freshness Indicator       │
├─────────────────────────────────────────────────────────────┤
│ 2. Emergency Weather Warning Banner (Conditional)           │
│    - aria-live="assertive" high-priority alert              │
│    - Long warning descriptions with CJK line breaking       │
├─────────────────────────────────────────────────────────────┤
│ 3. Current Weather Hero Card                                │
│    - Large Temperature Display (e.g. "21.5°")               │
│    - Weather Condition Text & Glyph (e.g. "맑음 ☀️")         │
│    - Grid Details: 체감온도, 습도, 풍속, 강수량             │
├─────────────────────────────────────────────────────────────┤
│ 4. Hourly Forecast Section                                  │
│    - Horizontally scrollable bounded list (next 24 hours)   │
│    - Time, sky condition icon, temperature, precipitation % │
├─────────────────────────────────────────────────────────────┤
│ 5. Short-Term Daily Forecast Section                         │
│    - 3-day forecast list (오늘, 내일, 모레)                 │
│    - Min/Max temperature range, rain probability            │
├─────────────────────────────────────────────────────────────┤
│ 6. Status & Attribution Footer                              │
│    - "출처: 기상청 (공공데이터포털)"                         │
│    - Offline snapshot badge & exact data age                │
└─────────────────────────────────────────────────────────────┘
```

## 3. Visual Design Tokens (디자인 토큰)

| Token Category | Token Name | Value | Purpose / Notes |
|---|---|---|---|
| **Color (Light)** | `--color-bg-base` | `#F8F9FA` | Page background |
| | `--color-surface` | `#FFFFFF` | Card surface |
| | `--color-text-primary` | `#1A1A1A` | Main text (Contrast 14.8:1 on white) |
| | `--color-text-secondary` | `#595959` | Subtext/captions (Contrast 7.0:1 on white) |
| | `--color-accent` | `#1976D2` | Interactive actions, links, focus outline |
| | `--color-warning-bg` | `#FFF3CD` | Background for weather alerts |
| | `--color-warning-text` | `#664D03` | Text for weather alerts (Contrast 7.5:1) |
| **Color (Dark)** | `--color-bg-base-dark` | `#121212` | Dark mode page background |
| | `--color-surface-dark` | `#1E1E1E` | Dark mode card surface |
| | `--color-text-primary-dark` | `#EDEDED` | Main text (Contrast 13.5:1 on dark) |
| **Typography** | `--font-system` | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Malgun Gothic", "Apple SD Gothic Neo", sans-serif` | Native system font stack |
| | `--text-xs` | `12px / 16px` | Footnotes, source attribution |
| | `--text-sm` | `14px / 20px` | Hourly times, secondary details |
| | `--text-base` | `16px / 24px` | Body copy, administrative labels |
| | `--text-lg` | `20px / 28px` | Section headings, daily dates |
| | `--text-display` | `40px / 48px` | Hero current temperature |
| **Spacing** | `--space-1` | `4px` | Fine adjustments |
| | `--space-2` | `8px` | Inline item spacing |
| | `--space-3` | `12px` | Card internal gap |
| | `--space-4` | `16px` | Container padding |
| | `--space-6` | `24px` | Section margins |
| | `--space-8` | `32px` | Major section breaks |

## 4. Korean CJK Line-Breaking & Long Warning Formatting

Korean UI copy presents specific challenges with word-breaking: arbitrary breaks across Korean syllables result in unnatural reading and poor comprehension.
- **Rules applied**:
  ```css
  /* CJK typography rules */
  .korean-text, .weather-card, .warning-banner {
    word-break: keep-all;        /* Preserve complete Korean words */
    overflow-wrap: break-word;   /* Prevent container overflow on long terms */
    line-break: strict;          /* Respect CJK punctuation rules */
  }
  ```
- **Long Warning Scenario (긴 기상특보 텍스트)**:
  Emergency advisories (e.g. "호우주의보: 서울(동남권, 동북권), 경기도(과천, 성남)") must wrap cleanly across multiple lines without truncating, clipping, or hiding safety information. Minimum padding of 16px ensures legibility on narrow viewports.

## 5. Responsive Viewport Specifications

| Viewport Target | Breakpoint Range | Layout Behavior & Navigation |
|---|---|---|
| **Narrow / Mobile** | `360px <= width < 768px` | Single-column linear flow. Full-width cards. Touch target minimum `44px x 44px`. Horizontal scroll container with native momentum scroll (`-webkit-overflow-scrolling: touch`) for hourly forecasts. |
| **Desktop / Windows PWA** | `width >= 768px` (Optimized for `1280px+`) | Centered layout with max container width `720px` to maintain optimal line length and prevent eye fatigue. Enhanced keyboard focus indicators and desktop mouse wheel support for hourly track. |

## 6. WCAG 2.2 AA Accessibility Specification

1. **Color Contrast**:
   - Primary text against surface: `>= 13:1` (exceeds WCAG 4.5:1 requirement).
   - Secondary text: `>= 7.0:1` (exceeds WCAG 4.5:1 requirement).
   - Interactive focus indicator: 2px solid `#1976D2` with 2px offset (exceeds 3:1 graphical requirement).
2. **Keyboard Navigation**:
   - All interactive controls (Location picker, Refresh, Reset, Dismiss) are fully operable via `Tab`, `Shift+Tab`, `Enter`, and `Space`.
   - Hourly horizontal scroll supports `ArrowLeft` / `ArrowRight` keyboard navigation.
3. **200% Zoom Conformance**:
   - At 200% browser zoom (or Windows Display Scale 200%), content reflows vertically without introducing a horizontal scrollbar on `document.body`.
   - Text boxes expand naturally without clipping text.
4. **Reduced Motion (`prefers-reduced-motion: reduce`)**:
   - When the user enables reduced motion in Windows/OS accessibility settings:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *, *::before, *::after {
         animation-duration: 0.01ms !important;
         transition-duration: 0.01ms !important;
         scroll-behavior: auto !important;
       }
     }
     ```
5. **Screen-Reader & ARIA Semantics**:
   - Semantic landmarks: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
   - Weather updates announce politely via `<div aria-live="polite" aria-atomic="true">`.
   - Emergency warning alerts announce immediately via `<div role="alert" aria-live="assertive">`.
   - Glyphs and decorative icons include `aria-hidden="true"`, accompanied by `.sr-only` descriptive screen-reader text (e.g. `<span class="sr-only">맑음</span>`).

## 7. Accepted Design Debt
1. **Single Saved Place**: To eliminate multi-location data caching overhead, the design supports only one coarse saved place. Multi-place switching requires re-selection.
2. **Tabular vs Visual Charts**: We accept numeric/tabular hourly lists instead of high-memory interactive charts.
3. **Native System Glyphs**: We accept platform-dependent weather emoji/glyphs rather than bundling heavy custom icon sets.
