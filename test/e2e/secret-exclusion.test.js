import test from 'node:test';
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '../..');

test('E2E: Zero secrets or upstream credentials in client directory', () => {
  const result = execSync('bash scripts/scan-secrets.sh client/', {
    cwd: ROOT_DIR,
    encoding: 'utf-8'
  });

  assert.ok(result.includes('Zero credentials found in \'client/\''));
});
