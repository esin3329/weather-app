import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { gzipSync } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '../..');

function getDirectoryFiles(dir) {
  let results = [];
  const list = readdirSync(dir);
  for (const file of list) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getDirectoryFiles(filePath));
    } else {
      results.push(filePath);
    }
  }
  return results;
}

test('Performance Budget: Initial compressed payload <= 150 KiB', () => {
  const clientDir = join(ROOT_DIR, 'client');
  const files = getDirectoryFiles(clientDir);

  let totalCompressedBytes = 0;
  for (const file of files) {
    const content = readFileSync(file);
    const compressed = gzipSync(content);
    totalCompressedBytes += compressed.length;
  }

  const totalKiB = totalCompressedBytes / 1024;
  console.log(`[Budget] Total client compressed wire size: ${totalKiB.toFixed(2)} KiB (Budget: <= 150 KiB)`);
  assert.ok(totalKiB <= 150, `Compressed wire size ${totalKiB.toFixed(2)} KiB exceeds 150 KiB budget`);
});

test('Performance Budget: data/kma-regions.json <= 100 KiB', () => {
  const regionsPath = join(ROOT_DIR, 'data/kma-regions.json');
  const stats = statSync(regionsPath);
  const sizeKiB = stats.size / 1024;
  console.log(`[Budget] kma-regions.json size: ${sizeKiB.toFixed(2)} KiB (Budget: <= 100 KiB)`);
  assert.ok(sizeKiB <= 100, `kma-regions.json ${sizeKiB.toFixed(2)} KiB exceeds 100 KiB budget`);
});

test('PWA Manifest Budget: Valid standalone manifest', () => {
  const manifestPath = join(ROOT_DIR, 'client/manifest.webmanifest');
  const content = readFileSync(manifestPath, 'utf-8');
  const manifest = JSON.parse(content);

  assert.strictEqual(manifest.display, 'standalone');
  assert.ok(manifest.name);
  assert.ok(manifest.short_name);
  assert.ok(manifest.icons && manifest.icons.length >= 2);
});
