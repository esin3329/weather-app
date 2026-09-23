import test from 'node:test';
import assert from 'node:assert/strict';

import { CoalescingCache } from '../../proxy/cache.js';

test('CoalescingCache basic get, set, and TTL expiration', () => {
  const cache = new CoalescingCache({ maxEntries: 10, defaultTtlMs: 1000 });
  const t0 = 1000000;

  cache.set('key1', 'value1', 500, t0);
  assert.strictEqual(cache.get('key1', t0), 'value1');
  assert.strictEqual(cache.get('key1', t0 + 499), 'value1');
  assert.strictEqual(cache.get('key1', t0 + 500), null, 'Expired entry should return null');
  assert.strictEqual(cache.get('nonexistent', t0), null);
});

test('CoalescingCache coalesces concurrent in-flight requests', async () => {
  const cache = new CoalescingCache();
  let fetchCount = 0;

  const slowFetcher = async () => {
    fetchCount++;
    await new Promise((r) => setTimeout(r, 50));
    return { data: 'payload' };
  };

  // Launch 5 concurrent fetches for the same key
  const [res1, res2, res3, res4, res5] = await Promise.all([
    cache.getOrFetch('test-key', slowFetcher),
    cache.getOrFetch('test-key', slowFetcher),
    cache.getOrFetch('test-key', slowFetcher),
    cache.getOrFetch('test-key', slowFetcher),
    cache.getOrFetch('test-key', slowFetcher)
  ]);

  assert.strictEqual(fetchCount, 1, 'Fetcher must be executed exactly once for coalesced concurrent calls');
  assert.deepStrictEqual(res1, { data: 'payload' });
  assert.deepStrictEqual(res2, { data: 'payload' });
  assert.deepStrictEqual(res5, { data: 'payload' });

  // Subsequent call should hit cache without calling fetcher
  const cached = await cache.getOrFetch('test-key', slowFetcher);
  assert.strictEqual(fetchCount, 1);
  assert.deepStrictEqual(cached, { data: 'payload' });
});

test('CoalescingCache purgeExpired removes dead items', () => {
  const cache = new CoalescingCache();
  const t0 = 1000;
  cache.set('a', 1, 100, t0);
  cache.set('b', 2, 500, t0);
  cache.set('c', 3, 1000, t0);

  const purged = cache.purgeExpired(t0 + 200);
  assert.strictEqual(purged, 1, 'Only item a should be purged');
  assert.strictEqual(cache.size, 2);
  assert.strictEqual(cache.get('b', t0 + 200), 2);
});
