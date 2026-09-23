import test from 'node:test';
import assert from 'node:assert/strict';

import {
  saveLocation,
  getSavedLocation,
  saveForecastSnapshot,
  getForecastSnapshot,
  formatDataAge,
  clearAll
} from '../../client/modules/storage.js';

class MockStorage {
  constructor() {
    this.store = new Map();
  }
  getItem(key) {
    return this.store.get(key) || null;
  }
  setItem(key, value) {
    this.store.set(key, String(value));
  }
  removeItem(key) {
    this.store.delete(key);
  }
  clear() {
    this.store.clear();
  }
}

test('saveLocation and getSavedLocation store coarse grid and label only', () => {
  const mockStorage = new MockStorage();

  saveLocation({ nx: 60, ny: 127, regionLabel: '서울특별시 종로구 청운동' }, mockStorage);
  const loaded = getSavedLocation(mockStorage);

  assert.strictEqual(loaded.nx, 60);
  assert.strictEqual(loaded.ny, 127);
  assert.strictEqual(loaded.regionLabel, '서울특별시 종로구 청운동');
  assert.ok(loaded.savedAt);
  // Verify no lat/lon exists in stored data
  assert.strictEqual(loaded.latitude, undefined);
  assert.strictEqual(loaded.longitude, undefined);
});

test('saveForecastSnapshot enforces offline warning exclusion invariant', () => {
  const mockStorage = new MockStorage();

  const mockEnvelope = {
    schemaVersion: 1,
    location: { grid: { nx: 60, ny: 127 }, regionLabel: '서울' },
    timestamps: {
      issuedAt: '2026-09-23T06:00:00Z',
      fetchedAt: '2026-09-23T06:45:00Z',
      expiresAt: '2026-09-23T07:15:00Z'
    },
    status: { forecast: 'fresh', warnings: 'current' },
    forecast: {
      current: { temperature: 21.5, sky: '맑음' },
      hourly: [],
      daily: []
    },
    warnings: {
      active: true,
      items: [{ title: '호우경보', message: '위험' }]
    }
  };

  saveForecastSnapshot(mockEnvelope, mockStorage);
  const loadedSnapshot = getForecastSnapshot(mockStorage);

  assert.strictEqual(loadedSnapshot.schemaVersion, 1);
  assert.strictEqual(loadedSnapshot.forecast.current.temperature, 21.5);
  // Invariant verification: warnings MUST be inactive and empty
  assert.strictEqual(loadedSnapshot.warnings.active, false);
  assert.deepStrictEqual(loadedSnapshot.warnings.items, []);
  assert.strictEqual(loadedSnapshot.status.warnings, 'unavailable');
});

test('formatDataAge returns natural Korean elapsed intervals', () => {
  const baseTime = new Date('2026-09-23T12:00:00Z');

  // 10 seconds ago
  const t10s = new Date(baseTime.getTime() - 10 * 1000).toISOString();
  assert.strictEqual(formatDataAge(t10s, baseTime), '방금 전');

  // 15 minutes ago
  const t15m = new Date(baseTime.getTime() - 15 * 60 * 1000).toISOString();
  assert.strictEqual(formatDataAge(t15m, baseTime), '15분 전');

  // 2 hours ago
  const t2h = new Date(baseTime.getTime() - 2 * 60 * 60 * 1000).toISOString();
  assert.strictEqual(formatDataAge(t2h, baseTime), '2시간 전');

  // 1 day ago
  const t1d = new Date(baseTime.getTime() - 25 * 60 * 60 * 1000).toISOString();
  assert.strictEqual(formatDataAge(t1d, baseTime), '1일 전');
});

test('clearAll wipes saved location and snapshot completely', () => {
  const mockStorage = new MockStorage();

  saveLocation({ nx: 60, ny: 127 }, mockStorage);
  saveForecastSnapshot({ schemaVersion: 1 }, mockStorage);

  assert.ok(getSavedLocation(mockStorage));
  assert.ok(getForecastSnapshot(mockStorage));

  clearAll(mockStorage);

  assert.strictEqual(getSavedLocation(mockStorage), null);
  assert.strictEqual(getForecastSnapshot(mockStorage), null);
});
