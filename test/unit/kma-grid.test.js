import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { latLonToGrid, gridToLatLon, isValidGrid } from '../../client/modules/kma-grid.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('latLonToGrid matches authoritative KMA landmark coordinates', () => {
  const landmarks = [
    { name: 'Seoul City Hall', lat: 37.5665, lon: 126.9780, expectedNx: 60, expectedNy: 127 },
    { name: 'Busan City Hall', lat: 35.1796, lon: 129.0756, expectedNx: 98, expectedNy: 76 },
    { name: 'Jeju City Hall', lat: 33.4996, lon: 126.5312, expectedNx: 53, expectedNy: 38 },
    { name: 'Jeju Airport', lat: 33.5140, lon: 126.4930, expectedNx: 52, expectedNy: 38 },
    { name: 'Dokdo', lat: 37.2408, lon: 131.8696, expectedNx: 144, expectedNy: 123 },
    { name: 'Gangneung City Hall', lat: 37.7519, lon: 128.8761, expectedNx: 92, expectedNy: 132 },
    { name: 'Daejeon City Hall', lat: 36.3504, lon: 127.3845, expectedNx: 67, expectedNy: 100 },
    { name: 'Gwangju City Hall', lat: 35.1595, lon: 126.8526, expectedNx: 58, expectedNy: 74 },
    { name: 'Daegu City Hall', lat: 35.8714, lon: 128.6014, expectedNx: 89, expectedNy: 91 },
    { name: 'Incheon City Hall', lat: 37.4563, lon: 126.7052, expectedNx: 55, expectedNy: 124 }
  ];

  for (const { name, lat, lon, expectedNx, expectedNy } of landmarks) {
    const grid = latLonToGrid(lat, lon);
    assert.strictEqual(grid.nx, expectedNx, `${name} nx mismatch`);
    assert.strictEqual(grid.ny, expectedNy, `${name} ny mismatch`);
  }
});

test('gridToLatLon round-trip accurately recovers original grid coordinates', () => {
  const testGrids = [
    { nx: 60, ny: 127 },
    { nx: 98, ny: 76 },
    { nx: 52, ny: 38 },
    { nx: 144, ny: 123 },
    { nx: 67, ny: 100 }
  ];

  for (const { nx, ny } of testGrids) {
    const { lat, lon } = gridToLatLon(nx, ny);
    assert.ok(typeof lat === 'number' && !isNaN(lat));
    assert.ok(typeof lon === 'number' && !isNaN(lon));

    const recomputed = latLonToGrid(lat, lon);
    assert.strictEqual(recomputed.nx, nx, `Recomputed nx mismatch for (${nx}, ${ny})`);
    assert.strictEqual(recomputed.ny, ny, `Recomputed ny mismatch for (${nx}, ${ny})`);
  }
});

test('isValidGrid accurately distinguishes valid bounds', () => {
  assert.strictEqual(isValidGrid(1, 1), true);
  assert.strictEqual(isValidGrid(149, 253), true);
  assert.strictEqual(isValidGrid(60, 127), true);

  assert.strictEqual(isValidGrid(0, 127), false);
  assert.strictEqual(isValidGrid(150, 127), false);
  assert.strictEqual(isValidGrid(60, 0), false);
  assert.strictEqual(isValidGrid(60, 254), false);
  assert.strictEqual(isValidGrid(60.5, 127), false);
  assert.strictEqual(isValidGrid(null, 127), false);
  assert.strictEqual(isValidGrid(60, undefined), false);
});

test('latLonToGrid and gridToLatLon handle invalid inputs gracefully', () => {
  assert.throws(() => latLonToGrid('37.5', 127), TypeError);
  assert.throws(() => latLonToGrid(NaN, 127), TypeError);
  assert.throws(() => gridToLatLon(0, 127), RangeError);
  assert.throws(() => gridToLatLon(150, 127), RangeError);
});

test('bundled kma-regions.json contains valid data and bounds', () => {
  const regionsPath = join(__dirname, '../../data/kma-regions.json');
  const rawData = readFileSync(regionsPath, 'utf-8');
  const parsed = JSON.parse(rawData);

  assert.strictEqual(parsed.version, 1);
  assert.ok(Array.isArray(parsed.regions));
  assert.strictEqual(parsed.regions.length, 17, 'Must contain all 17 Korean metropolitan/provincial areas');

  for (const region of parsed.regions) {
    assert.ok(region.sido && typeof region.sido === 'string');
    assert.ok(Array.isArray(region.sigungu) && region.sigungu.length > 0);

    for (const item of region.sigungu) {
      assert.ok(item.name && typeof item.name === 'string');
      assert.ok(isValidGrid(item.nx, item.ny), `Invalid grid for ${region.sido} ${item.name}: (${item.nx}, ${item.ny})`);
      assert.ok(Array.isArray(item.dongs) && item.dongs.length > 0);
    }
  }
});
