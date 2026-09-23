/**
 * Upstream KMA Client with Secret Custody & Strict Timeout
 * Never exposes KMA_SERVICE_KEY to client or logs.
 */

const KMA_BASE_URL = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0';
const KMA_WARNING_URL = 'http://apis.data.go.kr/1360000/WthrWrnInfoService';
const REQUEST_TIMEOUT_MS = 5000;

/**
 * Calculates current base date and time for KMA getUltraSrtNcst (available at XX:40).
 * @param {Date} [now=new Date()]
 * @returns {{ baseDate: string, baseTime: string }}
 */
export function getNcstBaseDateTime(now = new Date()) {
  // Convert now to KST
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  let year = kst.getUTCFullYear();
  let month = kst.getUTCMonth();
  let date = kst.getUTCDate();
  let hours = kst.getUTCHours();
  const minutes = kst.getUTCMinutes();

  // If before 40 minutes, use previous hour
  if (minutes < 40) {
    hours -= 1;
    if (hours < 0) {
      hours = 23;
      date -= 1;
      if (date < 1) {
        month -= 1;
        if (month < 0) {
          month = 11;
          year -= 1;
        }
        date = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
      }
    }
  }

  const baseDate = `${year}${String(month + 1).padStart(2, '0')}${String(date).padStart(2, '0')}`;
  const baseTime = `${String(hours).padStart(2, '0')}00`;
  return { baseDate, baseTime };
}

/**
 * Calculates base date and time for getVilageFcst (02, 05, 08, 11, 14, 17, 20, 23 at +10 min).
 * @param {Date} [now=new Date()]
 * @returns {{ baseDate: string, baseTime: string }}
 */
export function getVilageBaseDateTime(now = new Date()) {
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  let year = kst.getUTCFullYear();
  let month = kst.getUTCMonth();
  let date = kst.getUTCDate();
  const hours = kst.getUTCHours();
  const minutes = kst.getUTCMinutes();

  const baseHours = [2, 5, 8, 11, 14, 17, 20, 23];
  let selectedHour = null;

  for (let i = baseHours.length - 1; i >= 0; i--) {
    const bh = baseHours[i];
    if (hours > bh || (hours === bh && minutes >= 10)) {
      selectedHour = bh;
      break;
    }
  }

  if (selectedHour === null) {
    // Falls back to previous day 23:00
    selectedHour = 23;
    date -= 1;
    if (date < 1) {
      month -= 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
      date = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }
  }

  const baseDate = `${year}${String(month + 1).padStart(2, '0')}${String(date).padStart(2, '0')}`;
  const baseTime = `${String(selectedHour).padStart(2, '0')}00`;
  return { baseDate, baseTime };
}

/**
 * Simple XML tag extractor for basic error envelopes from data.go.kr
 * @param {string} xml
 * @returns {object}
 */
export function parseBasicXml(xml) {
  const getTag = (tag) => {
    const match = xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
    return match ? match[1] : null;
  };

  const returnReasonCode = getTag('returnReasonCode') || getTag('resultCode');
  const returnAuthMsg = getTag('returnAuthMsg') || getTag('resultMsg');

  return {
    response: {
      header: {
        resultCode: returnReasonCode || '99',
        resultMsg: returnAuthMsg || 'XML_RESPONSE'
      },
      body: null
    }
  };
}

/**
 * Fetches data from KMA with strict timeout and secret management.
 * @param {string} url
 * @param {Record<string, string|number>} queryParams
 * @param {object} [options]
 * @param {string} [options.serviceKey]
 * @param {number} [options.timeoutMs=5000]
 * @returns {Promise<object>}
 */
export async function fetchKmaData(url, queryParams, options = {}) {
  const serviceKey = options.serviceKey || process.env.KMA_SERVICE_KEY;
  if (!serviceKey) {
    throw new Error('KMA_SERVICE_KEY environment variable is not configured.');
  }

  const timeoutMs = options.timeoutMs || REQUEST_TIMEOUT_MS;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const searchParams = new URLSearchParams({
    ...queryParams,
    serviceKey,
    dataType: 'JSON'
  });

  const requestUrl = `${url}?${searchParams.toString()}`;

  try {
    const response = await fetch(requestUrl, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json, application/xml, text/xml'
      }
    });

    if (!response.ok) {
      throw new Error(`Upstream KMA HTTP error: ${response.status} ${response.statusText}`);
    }

    const text = await response.text();

    // Check if JSON or XML
    if (text.trim().startsWith('{')) {
      return JSON.parse(text);
    } else {
      return parseBasicXml(text);
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error(`Upstream KMA request timed out after ${timeoutMs}ms.`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Fetches Ultra-Short Nowcast for (nx, ny).
 */
export async function fetchNowcast(nx, ny, options = {}) {
  const { baseDate, baseTime } = getNcstBaseDateTime();
  return fetchKmaData(`${KMA_BASE_URL}/getUltraSrtNcst`, {
    numOfRows: 10,
    pageNo: 1,
    base_date: baseDate,
    base_time: baseTime,
    nx,
    ny
  }, options);
}

/**
 * Fetches Village Forecast for (nx, ny).
 */
export async function fetchVillageForecast(nx, ny, options = {}) {
  const { baseDate, baseTime } = getVilageBaseDateTime();
  return fetchKmaData(`${KMA_BASE_URL}/getVilageFcst`, {
    numOfRows: 250,
    pageNo: 1,
    base_date: baseDate,
    base_time: baseTime,
    nx,
    ny
  }, options);
}

/**
 * Fetches Weather Warnings.
 */
export async function fetchWeatherWarnings(options = {}) {
  return fetchKmaData(`${KMA_WARNING_URL}/getWthrWrnList`, {
    numOfRows: 20,
    pageNo: 1
  }, options);
}
