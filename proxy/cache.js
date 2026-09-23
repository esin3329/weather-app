/**
 * In-Memory Coalescing Cache with TTL
 * Supports deduplication of concurrent in-flight asynchronous requests and TTL expiration.
 */

export class CoalescingCache {
  /**
   * @param {object} [options]
   * @param {number} [options.maxEntries=500] - Max cache entries before LRU eviction
   * @param {number} [options.defaultTtlMs=900000] - Default TTL in ms (15 minutes)
   */
  constructor(options = {}) {
    this.maxEntries = options.maxEntries || 500;
    this.defaultTtlMs = options.defaultTtlMs || 15 * 60 * 1000;
    this.store = new Map();
    this.inFlight = new Map();
  }

  /**
   * Generates a standard cache key.
   * @param {string} prefix
   * @param {number|string} nx
   * @param {number|string} ny
   * @returns {string}
   */
  static makeKey(prefix, nx, ny) {
    return `${prefix}:${nx}:${ny}`;
  }

  /**
   * Gets an entry if it exists and has not expired.
   * @param {string} key
   * @param {number} [now=Date.now()]
   * @returns {any|null}
   */
  get(key, now = Date.now()) {
    const entry = this.store.get(key);
    if (!entry) return null;

    if (now >= entry.expiresAt) {
      this.store.delete(key);
      return null;
    }

    return entry.value;
  }

  /**
   * Stores a value with a specific TTL.
   * @param {string} key
   * @param {any} value
   * @param {number} [ttlMs]
   * @param {number} [now=Date.now()]
   */
  set(key, value, ttlMs = this.defaultTtlMs, now = Date.now()) {
    // Evict oldest if full
    if (this.store.size >= this.maxEntries && !this.store.has(key)) {
      const oldestKey = this.store.keys().next().value;
      this.store.delete(oldestKey);
    }

    this.store.set(key, {
      value,
      expiresAt: now + ttlMs
    });
  }

  /**
   * Fetches or computes with in-flight deduplication.
   * If a computation is already ongoing for this key, concurrent callers await the same promise.
   *
   * @param {string} key
   * @param {() => Promise<any>} fetcher - Async data fetcher
   * @param {number} [ttlMs]
   * @param {number} [now=Date.now()]
   * @returns {Promise<any>}
   */
  async getOrFetch(key, fetcher, ttlMs = this.defaultTtlMs, now = Date.now()) {
    const cached = this.get(key, now);
    if (cached !== null) {
      return cached;
    }

    // Check if another request is already fetching this key
    if (this.inFlight.has(key)) {
      return this.inFlight.get(key);
    }

    const promise = (async () => {
      try {
        const result = await fetcher();
        this.set(key, result, ttlMs, Date.now());
        return result;
      } finally {
        this.inFlight.delete(key);
      }
    })();

    this.inFlight.set(key, promise);
    return promise;
  }

  /**
   * Purges all expired entries.
   * @param {number} [now=Date.now()]
   * @returns {number} Count of purged items
   */
  purgeExpired(now = Date.now()) {
    let count = 0;
    for (const [key, entry] of this.store.entries()) {
      if (now >= entry.expiresAt) {
        this.store.delete(key);
        count++;
      }
    }
    return count;
  }

  /**
   * Clears everything including in-flight promises.
   */
  clear() {
    this.store.clear();
    this.inFlight.clear();
  }

  /**
   * Returns current active entry count.
   * @returns {number}
   */
  get size() {
    return this.store.size;
  }
}
