/**
 * Data Normalizer for Upstream KMA Responses
 * Maps raw KMA Ultra-Short Nowcast (초단기실황), Ultra-Short Forecast (초단기예보),
 * and Village Forecast (단기예보) to schemaVersion: 1 envelope.
 */

const SKY_MAP = {
  '1': '맑음',
  '3': '구름많음',
  '4': '흐림'
};

const PTY_MAP = {
  '0': '없음',
  '1': '비',
  '2': '비/눈',
  '3': '눈',
  '4': '소나기',
  '5': '빗방울',
  '6': '빗방울눈날림',
  '7': '눈날림'
};

/**
 * Calculates apparent temperature using simplified Steadman / Australian Apparent Temperature formula.
 * @param {number} temp - Temperature in Celsius
 * @param {number} rh - Relative humidity in %
 * @param {number} windSpeed - Wind speed in m/s
 * @returns {number}
 */
export function calculateApparentTemperature(temp, rh, windSpeed) {
  if (temp == null) return null;
  const humidity = rh ?? 50;
  const wind = windSpeed ?? 0;

  // Vapor pressure in hPa
  const e = (humidity / 100) * 6.105 * Math.exp((17.27 * temp) / (237.7 + temp));
  const at = temp + 0.33 * e - 0.7 * wind - 4.0;
  return Number(at.toFixed(1));
}

/**
 * Parses YYYYMMDD and HHmm strings into an ISO 8601 UTC date string.
 * KMA outputs KST (UTC+9).
 * @param {string} dateStr - e.g. "20260923"
 * @param {string} timeStr - e.g. "0600"
 * @returns {string} ISO 8601 string
 */
export function kstToIsoString(dateStr, timeStr) {
  if (!dateStr || !timeStr) return new Date().toISOString();
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 6);
  const day = dateStr.slice(6, 8);
  const hour = timeStr.slice(0, 2);
  const minute = timeStr.slice(2, 4);

  // Parse as KST (+09:00)
  const d = new Date(`${year}-${month}-${day}T${hour}:${minute}:00+09:00`);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

/**
 * Extracts item array from KMA response body, handling both object and array shapes.
 * @param {object} rawResponse
 * @returns {Array<object>}
 */
export function extractItems(rawResponse) {
  if (!rawResponse) return [];
  const items = rawResponse?.response?.body?.items?.item;
  if (!items) return [];
  return Array.isArray(items) ? items : [items];
}

/**
 * Normalizes KMA raw data into the schemaVersion: 1 JSON envelope.
 *
 * @param {object} params
 * @param {number} params.nx - Grid X
 * @param {number} params.ny - Grid Y
 * @param {string} [params.regionLabel] - Human-readable region label
 * @param {object} [params.ncstRaw] - Raw getUltraSrtNcst response
 * @param {object} [params.vilageRaw] - Raw getVilageFcst response
 * @param {object} [params.warningsRaw] - Raw WthrWrnInfoService response
 * @param {boolean} [params.warningFailed=false] - Whether warnings upstream failed
 * @param {Date} [params.now=new Date()]
 * @returns {object} Normalized schemaVersion 1 JSON
 */
export function normalizeWeatherEnvelope({
  nx,
  ny,
  regionLabel = '',
  ncstRaw = null,
  vilageRaw = null,
  warningsRaw = null,
  warningFailed = false,
  now = new Date()
}) {
  const fetchedAt = now.toISOString();
  const expiresAt = new Date(now.getTime() + 15 * 60 * 1000).toISOString();

  // 1. Process Current Weather from Ncst
  const ncstItems = extractItems(ncstRaw);
  const ncstMap = {};
  let issuedAtDate = null;
  let issuedAtTime = null;

  for (const item of ncstItems) {
    ncstMap[item.category] = item.obsrValue;
    if (!issuedAtDate && item.baseDate) issuedAtDate = item.baseDate;
    if (!issuedAtTime && item.baseTime) issuedAtTime = item.baseTime;
  }

  const temp = ncstMap.T1H != null ? parseFloat(ncstMap.T1H) : null;
  const rh = ncstMap.REH != null ? parseFloat(ncstMap.REH) : null;
  const windSpeed = ncstMap.WSD != null ? parseFloat(ncstMap.WSD) : null;
  const windDir = ncstMap.VEC != null ? parseFloat(ncstMap.VEC) : null;
  const ptyCode = ncstMap.PTY ?? '0';
  const rn1 = ncstMap.RN1 != null ? parseFloat(ncstMap.RN1) : 0;

  // 2. Process Village Forecast for Hourly and Daily
  const vilageItems = extractItems(vilageRaw);
  const hourlyGroup = new Map();
  const dailyGroup = new Map();

  for (const item of vilageItems) {
    if (!issuedAtDate && item.baseDate) issuedAtDate = item.baseDate;
    if (!issuedAtTime && item.baseTime) issuedAtTime = item.baseTime;

    const fcstKey = `${item.fcstDate}_${item.fcstTime}`;
    if (!hourlyGroup.has(fcstKey)) {
      hourlyGroup.set(fcstKey, {
        fcstDate: item.fcstDate,
        fcstTime: item.fcstTime,
        time: kstToIsoString(item.fcstDate, item.fcstTime)
      });
    }
    const hEntry = hourlyGroup.get(fcstKey);
    hEntry[item.category] = item.fcstValue;

    // Daily grouping
    if (!dailyGroup.has(item.fcstDate)) {
      dailyGroup.set(item.fcstDate, {
        date: `${item.fcstDate.slice(0, 4)}-${item.fcstDate.slice(4, 6)}-${item.fcstDate.slice(6, 8)}`,
        minTemp: null,
        maxTemp: null,
        skyValues: [],
        popValues: []
      });
    }
    const dEntry = dailyGroup.get(item.fcstDate);
    if (item.category === 'TMN') dEntry.minTemp = parseFloat(item.fcstValue);
    if (item.category === 'TMX') dEntry.maxTemp = parseFloat(item.fcstValue);
    if (item.category === 'TMP') {
      const val = parseFloat(item.fcstValue);
      if (dEntry.minTemp == null || val < dEntry.minTemp) dEntry.minTemp = val;
      if (dEntry.maxTemp == null || val > dEntry.maxTemp) dEntry.maxTemp = val;
    }
    if (item.category === 'SKY') dEntry.skyValues.push(item.fcstValue);
    if (item.category === 'POP') dEntry.popValues.push(parseFloat(item.fcstValue));
  }

  // Build sorted hourly array (limit to next 24 slots with valid temperature or sky)
  const sortedHourlyKeys = Array.from(hourlyGroup.keys())
    .sort()
    .filter((key) => {
      const raw = hourlyGroup.get(key);
      return raw.TMP != null || raw.SKY != null;
    });

  const hourly = sortedHourlyKeys.slice(0, 24).map((key) => {
    const raw = hourlyGroup.get(key);
    return {
      time: raw.time,
      temperature: raw.TMP != null ? parseFloat(raw.TMP) : null,
      sky: SKY_MAP[raw.SKY] || '맑음',
      precipitationProbability: raw.POP != null ? parseInt(raw.POP, 10) : 0,
      precipitationType: PTY_MAP[raw.PTY] || '없음'
    };
  });

  // Current sky condition: take from first hourly if ncst doesn't have it
  const currentSky = hourly.length > 0 ? hourly[0].sky : '맑음';

  // Build sorted daily array (오늘, 내일, 모레)
  const sortedDailyDates = Array.from(dailyGroup.keys()).sort();
  const dayLabels = ['오늘', '내일', '모레', '글피'];
  const daily = sortedDailyDates.slice(0, 4).map((dKey, idx) => {
    const d = dailyGroup.get(dKey);
    const mostCommonSky = d.skyValues.length > 0
      ? d.skyValues.sort((a, b) =>
          d.skyValues.filter((v) => v === a).length - d.skyValues.filter((v) => v === b).length
        ).pop()
      : '1';

    const maxPop = d.popValues.length > 0 ? Math.max(...d.popValues) : 0;

    return {
      date: d.date,
      label: dayLabels[idx] || `${idx}일 후`,
      minTemperature: d.minTemp != null ? Number(d.minTemp.toFixed(1)) : null,
      maxTemperature: d.maxTemp != null ? Number(d.maxTemp.toFixed(1)) : null,
      skyCondition: SKY_MAP[mostCommonSky] || '맑음',
      precipitationProbability: maxPop
    };
  });

  // 3. Process Warnings
  const warningItems = extractItems(warningsRaw);
  const activeWarnings = [];

  for (const item of warningItems) {
    if (item.title || item.warMsg) {
      activeWarnings.push({
        title: item.title || '기상특보',
        message: item.warMsg || item.title || '',
        command: item.command || '발표',
        announcedAt: item.startTime ? kstToIsoString(item.startTime.slice(0, 8), item.startTime.slice(8, 12)) : null
      });
    }
  }

  const warningsStatus = warningFailed ? 'unavailable' : 'current';

  return {
    schemaVersion: 1,
    location: {
      grid: { nx, ny },
      regionLabel: regionLabel || ''
    },
    timestamps: {
      issuedAt: kstToIsoString(issuedAtDate, issuedAtTime),
      fetchedAt,
      expiresAt
    },
    status: {
      forecast: 'fresh',
      warnings: warningsStatus
    },
    forecast: {
      current: {
        temperature: temp,
        apparentTemperature: calculateApparentTemperature(temp, rh, windSpeed),
        sky: currentSky,
        precipitationType: PTY_MAP[ptyCode] || '없음',
        precipitationAmount: isNaN(rn1) ? 0 : rn1,
        humidity: rh,
        windSpeed: windSpeed,
        windDirection: windDir
      },
      hourly,
      daily
    },
    warnings: {
      active: activeWarnings.length > 0,
      items: activeWarnings
    },
    errors: null
  };
}
