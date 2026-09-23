# Performance Budget, App-Owned Memory Limits, and Future Measurement Protocol

## 1. Executive Summary & Memory Surface Distinction
A foundational architectural principle of this project is the strict separation between:
1. **App-Owned Resources & JS Heap**: Memory and allocations directly controlled by our application code (V8 JS heap, DOM nodes, in-memory objects, Service Worker cache entries).
2. **Browser Process Total Overhead**: Chromium browser process overhead, GPU process, compositor memory, V8 JIT code generation, and sandboxing infrastructure (~80 MiB - 150 MiB baseline on Windows).

Our performance budget applies strictly to **app-owned resources**. The browser process total is documented as contextual environment data but is never promised, as browser runtime overhead is outside application control.

**Notice**: Every budget number herein is a design proposal pending future implementation testing. No runtime benchmark has been evaluated or measured yet; these figures are requirements for the future implementation phase.

## 2. Numeric Proposal Resource Budgets

| Metric | Budget Target | Surface Measured | Rationale |
|---|---|---|---|
| **Initial-compressed-shell: <=150 KiB** | `<=150 KiB` | Gzip/Brotli wire transfer size | Fast loading over cellular networks; minimal parse time. |
| **Settled-app-owned-JS-heap: <=20 MiB** | `<=20 MiB` | V8 JS Heap (settled after GC) | Minimizes browser memory footprint on resource-constrained devices. |
| **DOM-nodes: <=500** | `<=500` | Active document DOM tree node count | Bounded lists (24h hourly + 3d daily) prevent DOM bloat. |
| **Persistent-app-cache: <=5 MiB** | `<=5 MiB` | CacheStorage + LocalStorage total | Shell assets (~200 KiB) + single forecast snapshot (~15 KiB). |
| **Hidden-tab-idle-requests: 0** | `0` | Network requests while `hidden` | Zero polling when tab/app is minimized; preserves battery & quota. |
| **Refresh-location-switch-cycles: 20** | `20` | Automated test stress cycle count | Standard leak detection protocol benchmark. |
| **Post-20-cycle-JS-heap-growth: <=2 MiB** | `<=2 MiB` | Retained V8 Heap after 20 cycles | Proves absence of closures or detached DOM leaks. |
| **Post-20-cycle-DOM-node-growth: <=25** | `<=25` | Retained DOM nodes after 20 cycles | Proves DOM cleanup on view re-renders. |
| **Post-20-cycle-cache-growth: <=512 KiB** | `<=512 KiB` | Persistent storage delta after 20 cycles | Proves snapshot overwrite rather than accumulation. |

## 3. Future Measurement Protocol

### Test Environment Profile
- **Target Browser**: Current stable Microsoft Edge (or Google Chrome) on Windows 11/10 (64-bit).
- **Target Hardware**: Reference test machine: 4-core x86_64 CPU, 8 GB RAM baseline hardware.
- **Profiling Tools**:
  - Microsoft Edge DevTools Memory Panel (Heap Snapshot & Allocation instrumentation).
  - Chrome / Edge DevTools Performance Monitor (`performance.memory.usedJSHeapSize`).
  - Microsoft Edge Browser Task Manager (`Shift + Esc`) to observe tab memory vs browser process total.

### Measurement Procedure
1. **Cold Run Protocol**:
   - Launch fresh browser profile with extensions disabled.
   - Navigate to PWA start URL. Record initial compressed payload, parse time, and cold initial heap size.
2. **Warm Run Protocol**:
   - Repeat launch with service worker and shell pre-cached in storage (warm cache scenario).
   - Measure load time from CacheStorage and settled heap after initial rendering.
3. **Repeated Cycle Leak Protocol**:
   - Run 20 consecutive refresh and location switch cycles (`Refresh-location-switch-cycles: 20`).
   - Force manual garbage collection via DevTools.
   - Evaluate post-cycle growth against the proposal thresholds:
     - `Post-20-cycle-JS-heap-growth: <=2 MiB`
     - `Post-20-cycle-DOM-node-growth: <=25`
     - `Post-20-cycle-cache-growth: <=512 KiB`
4. **Sample Count & Failure Interpretation**:
   - Take a sample of at least 5 independent test runs.
   - A failure threshold is crossed if the median JS heap exceeds 20 MiB or post-20-cycle heap growth exceeds 2 MiB.
   - Any failure threshold breach indicates an event listener retention or detached DOM leak requiring immediate remediation.
