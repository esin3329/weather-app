import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  normalizeWeatherEnvelope,
  calculateApparentTemperature,
  kstToIsoString
} from '../../proxy/normalizer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadFixture(filename) {
  const path = join(__dirname, '../fixtures', filename);
  return JSON.parse(readFileSync(path, 'utf-8'));
}

test('calculateApparentTemperature calculates reasonable values', () => {
  // 21.5°C, 55% RH, 2.1 m/s wind
  const at = calculateApparentTemperature(21.5, 55, 2.1);
  assert.ok(typeof at === 'number');
  assert.ok(at >= 20.0 && at <= 23.0, `Apparent temp ${at} should be close to 22.0°C`);
  assert.strictEqual(calculateApparentTemperature(null, 50, 2), null);
});

test('kstToIsoString converts Korean standard time to UTC ISO 8601', () => {
  const iso = kstToIsoString('20260923', '0600');
  // 2026-09-23 06:00 KST is 2026-09-22 21:00 UTC
  const d = new Date(iso);
  assert.strictEqual(d.getUTCFullYear(), 2026);
  assert.strictEqual(d.getUTCMonth(), 8); // 0-indexed September
  assert.strictEqual(d.getUTCDate(), 22);
  assert.strictEqual(d.getUTCHours(), 21);
});

test('normalizeWeatherEnvelope creates compliant schemaVersion: 1 envelope from fixtures', () => {
  const ncstRaw = loadFixture('kma-ncst.json');
  const vilageRaw = loadFixture('kma-vilage.json');
  const warningsRaw = loadFixture('kma-warnings.json');

  const envelope = normalizeWeatherEnvelope({
    nx: 60,
    ny: 127,
    regionLabel: '서울특별시 종로구 청운동',
    ncstRaw,
    vilageRaw,
    warningsRaw,
    now: new Date('2026-09-23T06:45:00Z')
  });

  assert.strictEqual(envelope.schemaVersion, 1);
  assert.deepStrictEqual(envelope.location.grid, { nx: 60, ny: 127 });
  assert.strictEqual(envelope.location.regionLabel, '서울특별시 종로구 청운동');

  // Timestamps
  assert.strictEqual(envelope.timestamps.fetchedAt, '2026-09-23T06:45:00.000Z');
  assert.ok(envelope.timestamps.issuedAt);
  assert.ok(envelope.timestamps.expiresAt);

  // Status
  assert.strictEqual(envelope.status.forecast, 'fresh');
  assert.strictEqual(envelope.status.warnings, 'current');

  // Current weather
  const current = envelope.forecast.current;
  assert.strictEqual(current.temperature, 21.5);
  assert.strictEqual(current.humidity, 55);
  assert.strictEqual(current.windSpeed, 2.1);
  assert.strictEqual(current.windDirection, 180);
  assert.strictEqual(current.precipitationType, '없음');
  assert.strictEqual(current.precipitationAmount, 0);

  // Hourly array
  assert.ok(Array.isArray(envelope.forecast.hourly));
  assert.ok(envelope.forecast.hourly.length > 0);
  const firstHourly = envelope.forecast.hourly[0];
  assert.ok(firstHourly.temperature != null);
  assert.ok(firstHourly.sky);
  assert.ok(firstHourly.time);

  // Daily array
  assert.ok(Array.isArray(envelope.forecast.daily));
  assert.ok(envelope.forecast.daily.length >= 3);
  const today = envelope.forecast.daily[0];
  assert.strictEqual(today.label, '오늘');
  assert.strictEqual(today.minTemperature, 18.0);
  assert.strictEqual(today.maxTemperature, 27.0);

  // Warnings
  assert.strictEqual(envelope.warnings.active, true);
  assert.strictEqual(envelope.warnings.items.length, 1);
  assert.strictEqual(envelope.warnings.items[0].title, '호우주의보');
});

test('normalizeWeatherEnvelope supports independent warning domain degradation', () => {
  const ncstRaw = loadFixture('kma-ncst.json');
  const vilageRaw = loadFixture('kma-vilage.json');

  // When warnings fail upstream
  const envelope = normalizeWeatherEnvelope({
    nx: 60,
    ny: 127,
    ncstRaw,
    vilageRaw,
    warningsRaw: null,
    warningFailed: true
  });

  assert.strictEqual(envelope.status.forecast, 'fresh');
  assert.strictEqual(envelope.status.warnings, 'unavailable');
  assert.strictEqual(envelope.forecast.current.temperature, 21.5);
  assert.strictEqual(envelope.warnings.active, false);
});
