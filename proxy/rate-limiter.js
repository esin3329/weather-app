/**
 * Rate Limiter, CORS Controller & Log Scrubber
 */

import { isValidGrid } from '../client/modules/kma-grid.js';

/**
 * Token Bucket Rate Limiter per client IP.
 */
export class RateLimiter {
  /**
   * @param {object} [options]
   * @param {number} [options.capacity=30] - Max tokens (burst)
   * @param {number} [options.refillRatePerSec=0.5] - 30 tokens per minute = 0.5 per sec
   */
  constructor(options = {}) {
    this.capacity = options.capacity || 30;
    this.refillRatePerSec = options.refillRatePerSec || (30 / 60); // 30 req/min
    this.buckets = new Map();
  }

  /**
   * Attempts to consume 1 token for the specified client key (IP).
   * @param {string} ip
   * @param {number} [now=Date.now()]
   * @returns {{ allowed: boolean, remaining: number, resetMs: number }}
   */
  consume(ip, now = Date.now()) {
    let bucket = this.buckets.get(ip);
    if (!bucket) {
      bucket = {
        tokens: this.capacity,
        lastRefill: now
      };
      this.buckets.set(ip, bucket);
    } else {
      const elapsedSec = (now - bucket.lastRefill) / 1000;
      const refilled = elapsedSec * this.refillRatePerSec;
      bucket.tokens = Math.min(this.capacity, bucket.tokens + refilled);
      bucket.lastRefill = now;
    }

    if (bucket.tokens >= 1) {
      bucket.tokens -= 1;
      return {
        allowed: true,
        remaining: Math.floor(bucket.tokens),
        resetMs: Math.ceil(((this.capacity - bucket.tokens) / this.refillRatePerSec) * 1000)
      };
    }

    return {
      allowed: false,
      remaining: 0,
      resetMs: Math.ceil((1 / this.refillRatePerSec) * 1000)
    };
  }

  /**
   * Purges old entries inactive for more than 10 minutes.
   * @param {number} [now=Date.now()]
   */
  purgeInactive(now = Date.now()) {
    const threshold = 10 * 60 * 1000;
    for (const [ip, bucket] of this.buckets.entries()) {
      if (now - bucket.lastRefill > threshold) {
        this.buckets.delete(ip);
      }
    }
  }

  reset() {
    this.buckets.clear();
  }
}

/**
 * Validates request coordinate parameters.
 * @param {string|number} nxRaw
 * @param {string|number} nyRaw
 * @returns {{ valid: boolean, nx?: number, ny?: number, error?: string }}
 */
export function validateCoordinates(nxRaw, nyRaw) {
  if (nxRaw === undefined || nyRaw === undefined || nxRaw === '' || nyRaw === '') {
    return { valid: false, error: 'Query parameters "nx" and "ny" are required.' };
  }

  const nx = Number(nxRaw);
  const ny = Number(nyRaw);

  if (!Number.isInteger(nx) || !Number.isInteger(ny)) {
    return { valid: false, error: 'Coordinates "nx" and "ny" must be integers.' };
  }

  if (!isValidGrid(nx, ny)) {
    return { valid: false, error: `Coordinates (${nx}, ${ny}) out of valid Korean bounds [1..149, 1..253].` };
  }

  return { valid: true, nx, ny };
}

/**
 * Applies CORS headers and validates origin.
 * @param {import('node:http').IncomingMessage} req
 * @param {import('node:http').ServerResponse} res
 * @param {string[]} [allowedOrigins=['*']]
 * @returns {boolean} True if preflight OPTIONS handled
 */
export function handleCors(req, res, allowedOrigins = ['*']) {
  const origin = req.headers.origin;

  if (allowedOrigins.includes('*')) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return true;
  }

  return false;
}

/**
 * Scrubs credentials and sensitive tokens from log messages or query strings.
 * @param {string} text
 * @returns {string} Sanitized string
 */
export function scrubLog(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/(serviceKey=)[^& \n\r]+/gi, '$1[REDACTED]')
    .replace(/(key=)[^& \n\r]+/gi, '$1[REDACTED]')
    .replace(/(authorization:\s*)(bearer\s+)?[^\r\n]+/gi, '$1[REDACTED]');
}
