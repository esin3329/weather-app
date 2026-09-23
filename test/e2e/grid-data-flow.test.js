import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { latLonToGrid } from '../../client/modules/kma-grid.js';
import { normalizeWeatherEnvelope } from '../../proxy/normalizer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadFixture(filename) {
  const path = join(__dirname, '../fixtures', filename);
  return JSON.parse(readFileSync(path, 'utf-8'));
}

test('E2E: Full grid calculation to normalized envelope pipeline', () => {
  // 1. Geodetic coordinates for Seoul City Hall
  const seoulCoords = { lat: 37.5665, lon: 126.9780 };
  const grid = latLonToGrid(seoulCoords.lat, seoulCoords.lon);
  assert.strictEqual(grid.nx, 60);
  assert.strictEqual(grid.ny, 127);

  // 2. Mock upstream KMA data
  const ncstRaw = loadFixture('kma-ncst.json');
  const vilageRaw = loadFixture('kma-vilage.json');
  const warningsRaw = loadFixture('kma-warnings.json');

  // 3. Normalization
  const envelope = normalizeWeatherEnvelope({
    nx: grid.nx,
    ny: grid.ny,
    regionLabel: '서울특별시 중구 명동',
    ncstRaw,
    vilageRaw,
    warningsRaw
  });

  // 4. Validate output envelope
  assert.strictEqual(envelope.schemaVersion, 1);
  assert.strictEqual(envelope.status.forecast, 'fresh');
  assert.strictEqual(envelope.forecast.current.temperature, 21.5);
  assert.strictEqual(envelope.forecast.current.sky, '맑음');
  assert.ok(envelope.forecast.hourly.length > 0);
  assert.ok(envelope.forecast.daily.length >= 3);
  assert.strictEqual(envelope.warnings.active, true);
});
