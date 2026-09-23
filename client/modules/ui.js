/**
 * UI Renderer Module
 * Renders Hero, Hourly, Daily, Warning, and Status components adhering to DESIGN.md.
 */

import { formatDataAge } from './storage.js';

const WEATHER_GLYPHS = {
  '맑음': '☀️',
  '구름많음': '⛅',
  '흐림': '☁️',
  '비': '🌧️',
  '비/눈': '🌨️',
  '눈': '❄️',
  '소나기': '🌦️',
  '빗방울': '🌦️',
  '빗방울눈날림': '🌨️',
  '눈날림': '❄️'
};

/**
 * Gets emoji glyph for sky and precipitation conditions.
 * @param {string} sky
 * @param {string} [pty='없음']
 * @returns {string}
 */
export function getWeatherGlyph(sky, pty = '없음') {
  if (pty && pty !== '없음' && WEATHER_GLYPHS[pty]) {
    return WEATHER_GLYPHS[pty];
  }
  return WEATHER_GLYPHS[sky] || '☀️';
}

/**
 * Renders complete weather dashboard from normalized envelope.
 * @param {object} envelope - Normalized schemaVersion: 1 JSON
 * @param {boolean} [isOffline=false]
 */
export function renderWeather(envelope, isOffline = false) {
  if (!envelope) return;

  renderLocation(envelope.location);
  renderStatus(envelope, isOffline);
  renderHero(envelope.forecast.current);
  renderHourly(envelope.forecast.hourly || []);
  renderDaily(envelope.forecast.daily || []);
  renderWarnings(envelope.warnings, envelope.status?.warnings, isOffline);
}

/**
 * Renders current location label in header.
 */
export function renderLocation(location) {
  const labelEl = document.getElementById('current-location-label');
  if (labelEl && location) {
    labelEl.textContent = location.regionLabel || `격자 (${location.grid.nx}, ${location.grid.ny})`;
  }
}

/**
 * Renders header status badge and data age.
 */
export function renderStatus(envelope, isOffline = false) {
  const badgeEl = document.getElementById('status-badge');
  const textEl = document.getElementById('update-time-text');
  if (!badgeEl || !textEl) return;

  const fetchedAt = envelope.timestamps?.fetchedAt;
  const ageStr = formatDataAge(fetchedAt);

  if (isOffline || envelope.status?.forecast === 'cached') {
    badgeEl.className = 'badge badge-offline';
    badgeEl.textContent = '오프라인';
    textEl.textContent = `${ageStr} 저장된 데이터`;
  } else {
    badgeEl.className = 'badge badge-normal';
    badgeEl.textContent = '최신 정보';
    textEl.textContent = `${ageStr} 업데이트`;
  }
}

/**
 * Renders Hero section (current weather).
 */
export function renderHero(current) {
  if (!current) return;

  const tempEl = document.getElementById('current-temp');
  const glyphEl = document.getElementById('current-weather-glyph');
  const skyTextEl = document.getElementById('current-sky-text');
  const apparentTempEl = document.getElementById('apparent-temp');
  const humidityEl = document.getElementById('metric-humidity');
  const windEl = document.getElementById('metric-wind');
  const rainEl = document.getElementById('metric-rain');

  if (tempEl) {
    tempEl.textContent = current.temperature != null ? String(current.temperature) : '--';
  }

  const glyph = getWeatherGlyph(current.sky, current.precipitationType);
  if (glyphEl) glyphEl.textContent = glyph;

  if (skyTextEl) {
    const textParts = [];
    if (current.precipitationType && current.precipitationType !== '없음') {
      textParts.push(current.precipitationType);
    } else {
      textParts.push(current.sky || '맑음');
    }
    skyTextEl.textContent = textParts.join(' ');
  }

  if (apparentTempEl) {
    apparentTempEl.textContent = current.apparentTemperature != null ? `${current.apparentTemperature}°` : '--°';
  }

  if (humidityEl) {
    humidityEl.textContent = current.humidity != null ? `${current.humidity}%` : '--%';
  }

  if (windEl) {
    windEl.textContent = current.windSpeed != null ? `${current.windSpeed} m/s` : '-- m/s';
  }

  if (rainEl) {
    rainEl.textContent = current.precipitationAmount != null ? `${current.precipitationAmount} mm` : '0 mm';
  }
}

/**
 * Renders 24-hour horizontal hourly forecast.
 */
export function renderHourly(hourlyList) {
  const trackEl = document.getElementById('hourly-track');
  if (!trackEl) return;

  if (!hourlyList || hourlyList.length === 0) {
    trackEl.innerHTML = '<div class="empty-placeholder">시간별 예보 데이터가 없습니다.</div>';
    return;
  }

  trackEl.innerHTML = '';
  const fragment = document.createDocumentFragment();

  hourlyList.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'hourly-item';

    // Format hour e.g. "15시"
    let hourLabel = '';
    if (item.time) {
      const d = new Date(item.time);
      hourLabel = isNaN(d.getTime()) ? '' : `${d.getHours()}시`;
    }

    const glyph = getWeatherGlyph(item.sky, item.precipitationType);
    const popText = item.precipitationProbability > 0 ? `${item.precipitationProbability}%` : '';

    itemEl.innerHTML = `
      <span class="hourly-time">${hourLabel}</span>
      <span class="hourly-glyph" aria-hidden="true">${glyph}</span>
      <span class="hourly-temp">${item.temperature != null ? Math.round(item.temperature) : '--'}°</span>
      <span class="hourly-pop">${popText}</span>
    `;

    fragment.appendChild(itemEl);
  });

  trackEl.appendChild(fragment);
}

/**
 * Renders 3-day daily forecast list.
 */
export function renderDaily(dailyList) {
  const listEl = document.getElementById('daily-list');
  if (!listEl) return;

  if (!dailyList || dailyList.length === 0) {
    listEl.innerHTML = '<li class="empty-placeholder">주간 예보 데이터가 없습니다.</li>';
    return;
  }

  listEl.innerHTML = '';
  const fragment = document.createDocumentFragment();

  dailyList.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'daily-item';

    const glyph = getWeatherGlyph(item.skyCondition);
    const popText = item.precipitationProbability > 0 ? ` (${item.precipitationProbability}%)` : '';

    li.innerHTML = `
      <span class="daily-day">${item.label || item.date}</span>
      <div class="daily-condition">
        <span aria-hidden="true">${glyph}</span>
        <span>${item.skyCondition || '맑음'}${popText}</span>
      </div>
      <div class="daily-temps">
        <span class="daily-min">${item.minTemperature != null ? Math.round(item.minTemperature) : '--'}°</span>
        <span class="daily-divider">/</span>
        <span class="daily-max">${item.maxTemperature != null ? Math.round(item.maxTemperature) : '--'}°</span>
      </div>
    `;

    fragment.appendChild(li);
  });

  listEl.appendChild(fragment);
}

/**
 * Renders weather warning banner.
 * ENFORCES INVARIANT: Never displays "all clear" or "특보 없음" when offline or unavailable.
 */
export function renderWarnings(warnings, warningsStatus, isOffline = false) {
  const container = document.getElementById('warning-container');
  const titleEl = document.getElementById('warning-title');
  const messageEl = document.getElementById('warning-message');

  if (!container || !titleEl || !messageEl) return;

  // 1. Offline or Upstream Unavailable Case:
  if (isOffline || warningsStatus === 'unavailable') {
    container.classList.remove('hidden');
    titleEl.textContent = '기상특보 확인 불가 (오프라인)';
    messageEl.textContent = '현재 네트워크 연결이 없거나 특보 서비스를 불러올 수 없습니다. 안전을 위해 최신 기상정보를 확인해주세요.';
    return;
  }

  // 2. Active Severe Weather Warnings Case:
  if (warnings && warnings.active && warnings.items && warnings.items.length > 0) {
    container.classList.remove('hidden');
    const firstAlert = warnings.items[0];
    titleEl.textContent = firstAlert.title || '기상특보 발효 중';
    messageEl.textContent = firstAlert.message || firstAlert.title || '';
    return;
  }

  // 3. Normal Online Case (No active warnings):
  // Hide banner completely to keep screen clean
  container.classList.add('hidden');
}
