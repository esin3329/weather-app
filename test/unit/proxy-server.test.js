import test from 'node:test';
import assert from 'node:assert/strict';

import { createServer } from '../../proxy/server.js';

test('Proxy HTTP server basic endpoint behavior', async () => {
  const server = createServer();

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  try {
    // 1. /health
    const healthRes = await fetch(`${baseUrl}/health`);
    assert.strictEqual(healthRes.status, 200);
    const healthJson = await healthRes.json();
    assert.strictEqual(healthJson.status, 'ok');

    // 2. /v1/forecast with missing parameters
    const badReq = await fetch(`${baseUrl}/v1/forecast?nx=`);
    assert.strictEqual(badReq.status, 400);
    const badJson = await badReq.json();
    assert.ok(badJson.error.includes('required'));

    // 3. /v1/forecast with out-of-bounds coordinates
    const outOfBounds = await fetch(`${baseUrl}/v1/forecast?nx=999&ny=999`);
    assert.strictEqual(outOfBounds.status, 400);

    // 4. CORS preflight OPTIONS
    const optionsRes = await fetch(`${baseUrl}/v1/forecast`, {
      method: 'OPTIONS',
      headers: {
        Origin: 'http://localhost:3000',
        'Access-Control-Request-Method': 'GET'
      }
    });
    assert.strictEqual(optionsRes.status, 204);
    assert.strictEqual(optionsRes.headers.get('access-control-allow-origin'), '*');
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
