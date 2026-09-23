/**
 * Client Bootstrap and Main Application Controller
 */

import { fetchForecast } from './modules/api.js';
import {
  getSavedLocation,
  saveLocation,
  getForecastSnapshot,
  saveForecastSnapshot,
  clearAll
} from './modules/storage.js';
import {
  loadRegions,
  setupLocationDropdowns,
  getSelectedLocation,
  getOneShotGeolocation
} from './modules/location.js';
import { renderWeather } from './modules/ui.js';

// Default fallback location (Seoul City Hall)
const DEFAULT_LOCATION = {
  nx: 60,
  ny: 127,
  regionLabel: '서울특별시 중구 명동'
};

let currentLocation = null;
let currentEnvelope = null;
let regionsData = [];

/**
 * Registers Service Worker for PWA installability.
 */
async function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('[PWA] ServiceWorker registered');
    } catch (err) {
      console.warn('[PWA] ServiceWorker registration failed:', err);
    }
  }
}

/**
 * Loads weather data for current location.
 * Falls back to offline snapshot if network fails.
 */
async function refreshWeather(force = false) {
  if (!currentLocation) return;

  const refreshBtn = document.getElementById('btn-refresh');
  if (refreshBtn) refreshBtn.classList.add('loading');

  const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

  if (isOnline) {
    try {
      const envelope = await fetchForecast(
        currentLocation.nx,
        currentLocation.ny,
        currentLocation.regionLabel
      );
      currentEnvelope = envelope;
      saveForecastSnapshot(envelope);
      renderWeather(envelope, false);
      return;
    } catch (err) {
      console.warn('[App] Online fetch failed, falling back to offline snapshot:', err);
    } finally {
      if (refreshBtn) refreshBtn.classList.remove('loading');
    }
  }

  // Offline / Degraded Fallback:
  const snapshot = getForecastSnapshot();
  if (snapshot) {
    currentEnvelope = snapshot;
    renderWeather(snapshot, true);
  } else {
    // No snapshot available
    renderWeather({
      schemaVersion: 1,
      location: currentLocation,
      timestamps: { fetchedAt: null },
      status: { forecast: 'cached', warnings: 'unavailable' },
      forecast: { current: null, hourly: [], daily: [] },
      warnings: { active: false, items: [] }
    }, true);
  }

  if (refreshBtn) refreshBtn.classList.remove('loading');
}

/**
 * Sets current location, saves to storage, and refreshes weather.
 */
function setLocation(loc) {
  currentLocation = loc;
  saveLocation(loc);
  refreshWeather(true);
}

/**
 * Initializes location modal and cascade dropdowns.
 */
async function initLocationModal() {
  const dialog = document.getElementById('location-dialog');
  const openBtn = document.getElementById('btn-location-picker');
  const closeBtn = document.getElementById('btn-dialog-close');
  const geoBtn = document.getElementById('btn-geolocation');
  const form = document.getElementById('location-select-form');

  const sidoSelect = document.getElementById('select-sido');
  const sigunguSelect = document.getElementById('select-sigungu');
  const dongSelect = document.getElementById('select-dong');
  const confirmButton = document.getElementById('btn-location-confirm');

  if (!dialog) return;

  // Open modal
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      dialog.showModal();
    });
  }

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      dialog.close();
    });
  }

  // Load regions and wire dropdowns
  regionsData = await loadRegions();
  setupLocationDropdowns({ sidoSelect, sigunguSelect, dongSelect, confirmButton }, regionsData);

  // Form submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const selected = getSelectedLocation({ sidoSelect, sigunguSelect, dongSelect }, regionsData);
      if (selected) {
        setLocation(selected);
        dialog.close();
      }
    });
  }

  // Geolocation button
  if (geoBtn) {
    geoBtn.addEventListener('click', async () => {
      geoBtn.disabled = true;
      const originalText = geoBtn.textContent;
      geoBtn.textContent = '위치 확인 중...';

      try {
        const geoLoc = await getOneShotGeolocation();
        setLocation(geoLoc);
        dialog.close();
      } catch (err) {
        alert(err.message || '위치 정보를 가져올 수 없습니다.');
      } finally {
        geoBtn.disabled = false;
        geoBtn.textContent = originalText;
      }
    });
  }
}

/**
 * Initializes application event listeners.
 */
function initEvents() {
  // Manual refresh
  const refreshBtn = document.getElementById('btn-refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      refreshWeather(true);
    });
  }

  // Reset data button in footer
  const resetBtn = document.getElementById('btn-reset-data');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('저장된 위치와 오프라인 날씨 데이터를 모두 초기화하시겠습니까?')) {
        clearAll();
        currentLocation = DEFAULT_LOCATION;
        setLocation(DEFAULT_LOCATION);
      }
    });
  }

  // Window online auto-refresh
  window.addEventListener('online', () => {
    console.log('[App] Network reconnected, refreshing weather');
    refreshWeather(true);
  });

  // Visibility change auto-refresh if expired
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && currentEnvelope) {
      const expiresAt = currentEnvelope.timestamps?.expiresAt;
      if (expiresAt && new Date() > new Date(expiresAt)) {
        console.log('[App] Weather data expired, auto-refreshing');
        refreshWeather(false);
      }
    }
  });
}

/**
 * Application entry point.
 */
async function bootstrap() {
  await registerServiceWorker();

  // Load saved location or fallback to default
  const saved = getSavedLocation();
  currentLocation = saved || DEFAULT_LOCATION;

  // Initialize UI event listeners & modal
  initEvents();
  await initLocationModal();

  // Initial weather load
  await refreshWeather();
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
