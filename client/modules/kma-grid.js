/**
 * KMA Lambert Conformal Conic (LCC) Grid Projection Module
 * Converts geodetic latitude/longitude to/from Korea Meteorological Administration 5km grid coordinates.
 * Reference: KMA Open Data Portal Technical Guide (기상청 동네예보 지침)
 */

const RE = 6371.00877; // Earth radius (km)
const GRID = 5.0; // Grid spacing (km)
const SLAT1 = 30.0; // Standard parallel 1 (degrees)
const SLAT2 = 60.0; // Standard parallel 2 (degrees)
const OLON = 126.0; // Reference point longitude (degrees)
const OLAT = 38.0; // Reference point latitude (degrees)
const XO = 43; // Reference grid X (nx)
const YO = 136; // Reference grid Y (ny)

const DEGRAD = Math.PI / 180.0;
const RADDEG = 180.0 / Math.PI;

const re = RE / GRID;
const slat1 = SLAT1 * DEGRAD;
const slat2 = SLAT2 * DEGRAD;
const olon = OLON * DEGRAD;
const olat = OLAT * DEGRAD;

const sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) /
  Math.log(Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5));
const sf = (Math.pow(Math.tan(Math.PI * 0.25 + slat1 * 0.5), sn) * Math.cos(slat1)) / sn;
const ro = (re * sf) / Math.pow(Math.tan(Math.PI * 0.25 + olat * 0.5), sn);

/**
 * Validates whether the given grid coordinates fall within valid KMA national coverage boundaries.
 * @param {number} nx - Grid X coordinate
 * @param {number} ny - Grid Y coordinate
 * @returns {boolean}
 */
export function isValidGrid(nx, ny) {
  return (
    Number.isInteger(nx) &&
    Number.isInteger(ny) &&
    nx >= 1 &&
    nx <= 149 &&
    ny >= 1 &&
    ny <= 253
  );
}

/**
 * Converts geodetic latitude and longitude to KMA Lambert grid (nx, ny).
 * @param {number} lat - Latitude in decimal degrees (e.g. 37.5665)
 * @param {number} lon - Longitude in decimal degrees (e.g. 126.9780)
 * @returns {{ nx: number, ny: number }}
 */
export function latLonToGrid(lat, lon) {
  if (typeof lat !== 'number' || typeof lon !== 'number' || isNaN(lat) || isNaN(lon)) {
    throw new TypeError('Latitude and longitude must be valid numbers');
  }

  let ra = Math.tan(Math.PI * 0.25 + lat * DEGRAD * 0.5);
  ra = (re * sf) / Math.pow(ra, sn);

  let theta = lon * DEGRAD - olon;
  if (theta > Math.PI) theta -= 2.0 * Math.PI;
  if (theta < -Math.PI) theta += 2.0 * Math.PI;
  theta *= sn;

  const nx = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  const ny = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);

  return { nx, ny };
}

/**
 * Converts KMA Lambert grid (nx, ny) back to approximate geodetic latitude and longitude.
 * @param {number} nx - Grid X coordinate
 * @param {number} ny - Grid Y coordinate
 * @returns {{ lat: number, lon: number }}
 */
export function gridToLatLon(nx, ny) {
  if (!isValidGrid(nx, ny)) {
    throw new RangeError(`Coordinates nx: ${nx}, ny: ${ny} out of valid KMA grid bounds [1..149, 1..253]`);
  }

  const xn = nx - XO;
  const yn = ro - ny + YO;
  let ra = Math.sqrt(xn * xn + yn * yn);
  if (sn < 0.0) ra = -ra;

  let alat = Math.pow((re * sf) / ra, 1.0 / sn);
  alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

  let theta = 0.0;
  if (Math.abs(xn) <= 0.0) {
    theta = 0.0;
  } else {
    if (Math.abs(yn) <= 0.0) {
      theta = Math.PI * 0.5;
      if (xn < 0.0) theta = -theta;
    } else {
      theta = Math.atan2(xn, yn);
    }
  }

  const alon = theta / sn + olon;
  const lat = Number((alat * RADDEG).toFixed(6));
  const lon = Number((alon * RADDEG).toFixed(6));

  return { lat, lon };
}
