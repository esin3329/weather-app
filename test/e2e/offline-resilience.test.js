import test from 'node:test';
import assert from 'node:assert/strict';

import { saveForecastSnapshot, getForecastSnapshot } from '../../client/modules/storage.js';
import { renderWarnings } from '../../client/modules/ui.js';

class MockStorage {
  constructor() { this.store = new Map(); }
  getItem(k) { return this.store.get(k) || null; }
  setItem(k, v) { this.store.set(k, String(v)); }
  removeItem(k) { this.store.delete(k); }
}

test('E2E: Offline resilience and warning unavailable invariant', () => {
  const storage = new MockStorage();

  const originalEnvelope = {
    schemaVersion: 1,
    location: { grid: { nx: 60, ny: 127 }, regionLabel: '서울' },
    timestamps: { fetchedAt: '2026-09-23T06:00:00Z' },
    status: { forecast: 'fresh', warnings: 'current' },
    forecast: { current: { temperature: 20 }, hourly: [], daily: [] },
    warnings: { active: true, items: [{ title: '태풍경보' }] }
  };

  // 1. Save snapshot while online
  saveForecastSnapshot(originalEnvelope, storage);

  // 2. Simulate offline retrieval
  const offlineSnapshot = getForecastSnapshot(storage);
  assert.strictEqual(offlineSnapshot.status.warnings, 'unavailable');
  assert.strictEqual(offlineSnapshot.warnings.active, false);
  assert.deepStrictEqual(offlineSnapshot.warnings.items, []);

  // 3. UI rendering semantics in offline state
  const mockClassList = {
    classes: new Set(['hidden']),
    add(cls) { this.classes.add(cls); },
    remove(cls) { this.classes.delete(cls); },
    contains(cls) { return this.classes.has(cls); }
  };
  const container = { classList: mockClassList };
  const titleEl = { textContent: '' };
  const messageEl = { textContent: '' };

  globalThis.document = {
    getElementById(id) {
      if (id === 'warning-container') return container;
      if (id === 'warning-title') return titleEl;
      if (id === 'warning-message') return messageEl;
      return null;
    }
  };

  try {
    renderWarnings(offlineSnapshot.warnings, offlineSnapshot.status.warnings, true);

    // Banner must be visible and explicitly inform user that warnings are unavailable
    assert.strictEqual(container.classList.contains('hidden'), false);
    assert.ok(titleEl.textContent.includes('확인 불가') || titleEl.textContent.includes('오프라인'));
    assert.ok(!titleEl.textContent.includes('특보 없음'));
    assert.ok(!titleEl.textContent.includes('정상'));
  } finally {
    delete globalThis.document;
  }
});
