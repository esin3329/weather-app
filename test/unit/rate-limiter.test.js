import test from 'node:test';
import assert from 'node:assert/strict';

import { RateLimiter, validateCoordinates, scrubLog } from '../../proxy/rate-limiter.js';

test('RateLimiter enforces token bucket capacity and rate limiting', () => {
  const limiter = new RateLimiter({ capacity: 5, refillRatePerSec: 1 });
  const t0 = 1000;

  // Consume 5 tokens immediately
  for (let i = 0; i < 5; i++) {
    const res = limiter.consume('127.0.0.1', t0);
    assert.strictEqual(res.allowed, true, `Token ${i + 1} should be allowed`);
  }

  // 6th token should be blocked
  const blocked = limiter.consume('127.0.0.1', t0);
  assert.strictEqual(blocked.allowed, false, '6th request within instant burst should be blocked');

  // After 2 seconds, 2 tokens refilled
  const t2 = t0 + 2000;
  const resRefill1 = limiter.consume('127.0.0.1', t2);
  assert.strictEqual(resRefill1.allowed, true);
  const resRefill2 = limiter.consume('127.0.0.1', t2);
  assert.strictEqual(resRefill2.allowed, true);
  const resRefill3 = limiter.consume('127.0.0.1', t2);
  assert.strictEqual(resRefill3.allowed, false);
});

test('validateCoordinates correctly inspects and rejects invalid coordinates', () => {
  const valid = validateCoordinates('60', '127');
  assert.strictEqual(valid.valid, true);
  assert.strictEqual(valid.nx, 60);
  assert.strictEqual(valid.ny, 127);

  const missing = validateCoordinates('', '127');
  assert.strictEqual(missing.valid, false);

  const nonInteger = validateCoordinates('60.5', '127');
  assert.strictEqual(nonInteger.valid, false);

  const outOfBounds = validateCoordinates('150', '127');
  assert.strictEqual(outOfBounds.valid, false);
  assert.ok(outOfBounds.error.includes('out of valid Korean bounds'));
});

test('scrubLog removes sensitive credentials from query strings and headers', () => {
  const rawUrl = 'http://apis.data.go.kr/1360000?serviceKey=SECRET_ABC_123&nx=60&ny=127';
  const sanitized = scrubLog(rawUrl);
  assert.ok(!sanitized.includes('SECRET_ABC_123'));
  assert.ok(sanitized.includes('serviceKey=[REDACTED]'));

  const authLog = 'Incoming header: authorization: Bearer PRIVATE_TOKEN_456';
  const sanitizedAuth = scrubLog(authLog);
  assert.ok(!sanitizedAuth.includes('PRIVATE_TOKEN_456'));
  assert.ok(sanitizedAuth.includes('authorization: [REDACTED]'));
});
