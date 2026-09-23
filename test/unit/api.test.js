import test from 'node:test';
import assert from 'node:assert/strict';

import { fetchForecast } from '../../client/modules/api.js';

test('fetchForecast makes request with correct query params', async () => {
  const originalFetch = globalThis.fetch;
  let requestedUrl = null;

  globalThis.fetch = async (url) => {
    requestedUrl = url;
    return {
      ok: true,
      json: async () => ({ schemaVersion: 1, test: true })
    };
  };

  try {
    const data = await fetchForecast(60, 127, '서울시', 'http://localhost:8080');
    assert.strictEqual(data.schemaVersion, 1);
    assert.ok(requestedUrl.includes('nx=60'));
    assert.ok(requestedUrl.includes('ny=127'));
    assert.ok(requestedUrl.includes('region=%EC%84%9C%EC%9A%B8%EC%8B%9C') || requestedUrl.includes('region='));
  } finally {
    globalThis.fetch = originalFetch;
  }
});
