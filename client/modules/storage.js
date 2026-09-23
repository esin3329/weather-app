/**
 * Offline Storage Manager
 * Enforces critical invariant: Warnings are NEVER persisted offline.
 * Manages strictly one saved location and one latest compatible forecast snapshot.
 */

const STORAGE_KEYS = {
  LOCATION: 'weather_saved_location_v1',
  FORECAST_SNAPSHOT: 'weather_forecast_snapshot_v1'
};

/**
 * Gets saved location from storage.
 * @param {Storage} [storage=window.localStorage]
 * @returns {{ nx: number, ny: number, regionLabel: string, savedAt: string } | null}
 */
export function getSavedLocation(storage = (typeof window !== 'undefined' ? window.localStorage : null)) {
  if (!storage) return null;
  try {
    const raw = storage.getItem(STORAGE_KEYS.LOCATION);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.error('[Storage] Failed to read saved location:', err);
    return null;
  }
}

/**
 * Saves location to storage. Raw lat/lon coordinates must NEVER be passed.
 * @param {{ nx: number, ny: number, regionLabel: string }} location
 * @param {Storage} [storage=window.localStorage]
 */
export function saveLocation(location, storage = (typeof window !== 'undefined' ? window.localStorage : null)) {
  if (!storage) return;
  const payload = {
    nx: location.nx,
    ny: location.ny,
    regionLabel: location.regionLabel || '',
    savedAt: new Date().toISOString()
  };
  storage.setItem(STORAGE_KEYS.LOCATION, JSON.stringify(payload));
}

/**
 * Gets cached forecast snapshot from storage.
 * @param {Storage} [storage=window.localStorage]
 * @returns {object | null}
 */
export function getForecastSnapshot(storage = (typeof window !== 'undefined' ? window.localStorage : null)) {
  if (!storage) return null;
  try {
    const raw = storage.getItem(STORAGE_KEYS.FORECAST_SNAPSHOT);
    if (!raw) return null;
    const snapshot = JSON.parse(raw);

    // Invariant verification: ensure warnings are always clean/empty
    if (snapshot.warnings) {
      snapshot.warnings = { active: false, items: [] };
    }
    return snapshot;
  } catch (err) {
    console.error('[Storage] Failed to read forecast snapshot:', err);
    return null;
  }
}

/**
 * Saves normalized forecast snapshot to storage.
 * CRITICAL INVARIANT: Warnings are NEVER persisted into offline storage.
 * @param {object} envelope - Full normalized schemaVersion: 1 envelope
 * @param {Storage} [storage=window.localStorage]
 */
export function saveForecastSnapshot(envelope, storage = (typeof window !== 'undefined' ? window.localStorage : null)) {
  if (!storage || !envelope) return;

  // Clone and sanitize: remove warnings completely from snapshot
  const sanitized = {
    schemaVersion: envelope.schemaVersion || 1,
    location: envelope.location,
    timestamps: envelope.timestamps,
    status: {
      forecast: 'cached',
      warnings: 'unavailable' // Explicitly mark unavailable in offline cache
    },
    forecast: envelope.forecast,
    warnings: {
      active: false,
      items: []
    },
    errors: null
  };

  try {
    storage.setItem(STORAGE_KEYS.FORECAST_SNAPSHOT, JSON.stringify(sanitized));
  } catch (err) {
    console.error('[Storage] Failed to save forecast snapshot:', err);
  }
}

/**
 * Computes human-readable Korean data age from ISO 8601 fetchedAt string.
 * @param {string} fetchedAtIso
 * @param {Date} [now=new Date()]
 * @returns {string} e.g. "방금 전", "15분 전", "2시간 전", "어제"
 */
export function formatDataAge(fetchedAtIso, now = new Date()) {
  if (!fetchedAtIso) return '시간 미상';

  const fetchedDate = new Date(fetchedAtIso);
  const diffMs = now.getTime() - fetchedDate.getTime();
  if (diffMs < 0) return '방금 전';

  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffMin < 1) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  if (diffHour < 24) return `${diffHour}시간 전`;
  return `${diffDay}일 전`;
}

/**
 * Completely clears all weather-related items from storage.
 * @param {Storage} [storage=window.localStorage]
 */
export function clearAll(storage = (typeof window !== 'undefined' ? window.localStorage : null)) {
  if (!storage) return;
  storage.removeItem(STORAGE_KEYS.LOCATION);
  storage.removeItem(STORAGE_KEYS.FORECAST_SNAPSHOT);
}
