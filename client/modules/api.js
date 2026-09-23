/**
 * Proxy API Client
 * Communicates with /v1/forecast with timeouts and error normalization.
 */

const API_TIMEOUT_MS = 6000;

/**
 * Fetches normalized weather envelope from proxy server.
 * @param {number} nx - Grid X
 * @param {number} ny - Grid Y
 * @param {string} [regionLabel=''] - Region label
 * @param {string} [baseUrl=''] - Proxy host URL
 * @returns {Promise<object>}
 */
export async function fetchForecast(nx, ny, regionLabel = '', baseUrl = '') {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  const queryParams = new URLSearchParams({
    nx: String(nx),
    ny: String(ny)
  });
  if (regionLabel) {
    queryParams.set('region', regionLabel);
  }

  const endpoint = `${baseUrl}/v1/forecast?${queryParams.toString()}`;

  try {
    const res = await fetch(endpoint, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json'
      }
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw new Error(errBody.error || `HTTP ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('날씨 서버 응답 시간이 초과되었습니다.');
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
