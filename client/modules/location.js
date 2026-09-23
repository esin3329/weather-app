/**
 * Location Picker and One-Shot Opt-in Geolocation Module
 * Strict Privacy: Geolocation coords are immediately coarsened into KMA grid; raw coords are never stored.
 */

import { latLonToGrid, isValidGrid } from './kma-grid.js';

let cachedRegions = null;

/**
 * Loads administrative regions lookup table.
 * @param {string} [url='/data/kma-regions.json']
 * @returns {Promise<Array<object>>}
 */
export async function loadRegions(url = '/data/kma-regions.json') {
  if (cachedRegions) return cachedRegions;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    cachedRegions = data.regions || [];
    return cachedRegions;
  } catch (err) {
    console.error('[Location] Failed to load regions:', err);
    return [];
  }
}

/**
 * Opt-in one-shot geolocation with immediate in-memory coarsening.
 * @returns {Promise<{ nx: number, ny: number, regionLabel: string }>}
 */
export function getOneShotGeolocation() {
  return new Promise((resolve, reject) => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      return reject(new Error('현재 브라우저에서 위치 서비스를 지원하지 않습니다.'));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Immediately coarsen latitude and longitude into 5km KMA grid
        const { latitude, longitude } = position.coords;
        try {
          const grid = latLonToGrid(latitude, longitude);
          if (!isValidGrid(grid.nx, grid.ny)) {
            return reject(new RangeError('현재 위치가 대한민국 기상청 예보 격자 범위를 벗어났습니다.'));
          }

          // Discard latitude and longitude; return only coarse grid
          resolve({
            nx: grid.nx,
            ny: grid.ny,
            regionLabel: '현재 위치 (GPS)'
          });
        } catch (err) {
          reject(err);
        }
      },
      (error) => {
        let msg = '위치 정보를 가져오지 못했습니다.';
        if (error.code === 1) { // PERMISSION_DENIED
          msg = '위치 접근 권한이 거부되었습니다. 목록에서 직접 지역을 선택해주세요.';
        } else if (error.code === 2) { // POSITION_UNAVAILABLE
          msg = '위치 정보를 확인할 수 없습니다.';
        } else if (error.code === 3) { // TIMEOUT
          msg = '위치 요청 시간이 초과되었습니다.';
        }
        reject(new Error(msg));
      },
      {
        enableHighAccuracy: false, // Low-power, fast coarse network/cell lookup
        timeout: 6000,
        maximumAge: 60000
      }
    );
  });
}

/**
 * Initializes cascading dropdown event handlers.
 * @param {object} elements
 * @param {HTMLSelectElement} elements.sidoSelect
 * @param {HTMLSelectElement} elements.sigunguSelect
 * @param {HTMLSelectElement} elements.dongSelect
 * @param {HTMLButtonElement} elements.confirmButton
 * @param {Array<object>} regions
 */
export function setupLocationDropdowns(elements, regions) {
  const { sidoSelect, sigunguSelect, dongSelect, confirmButton } = elements;

  // Populate Sido
  sidoSelect.innerHTML = '<option value="">시/도 선택</option>';
  regions.forEach((region, index) => {
    const opt = document.createElement('option');
    opt.value = String(index);
    opt.textContent = region.sido;
    sidoSelect.appendChild(opt);
  });

  sidoSelect.addEventListener('change', () => {
    const selectedSidoIndex = sidoSelect.value;
    sigunguSelect.innerHTML = '<option value="">시/군/구 선택</option>';
    dongSelect.innerHTML = '<option value="">읍/면/동 선택 (선택 사항)</option>';
    dongSelect.disabled = true;
    confirmButton.disabled = true;

    if (selectedSidoIndex === '') {
      sigunguSelect.disabled = true;
      return;
    }

    const currentRegion = regions[parseInt(selectedSidoIndex, 10)];
    currentRegion.sigungu.forEach((item, index) => {
      const opt = document.createElement('option');
      opt.value = String(index);
      opt.textContent = item.name;
      sigunguSelect.appendChild(opt);
    });

    sigunguSelect.disabled = false;
  });

  sigunguSelect.addEventListener('change', () => {
    const selectedSidoIndex = sidoSelect.value;
    const selectedSigunguIndex = sigunguSelect.value;
    dongSelect.innerHTML = '<option value="">읍/면/동 선택 (선택 사항)</option>';

    if (selectedSigunguIndex === '') {
      dongSelect.disabled = true;
      confirmButton.disabled = true;
      return;
    }

    const currentRegion = regions[parseInt(selectedSidoIndex, 10)];
    const currentSigungu = currentRegion.sigungu[parseInt(selectedSigunguIndex, 10)];

    if (currentSigungu.dongs && currentSigungu.dongs.length > 0) {
      currentSigungu.dongs.forEach((dongName) => {
        const opt = document.createElement('option');
        opt.value = dongName;
        opt.textContent = dongName;
        dongSelect.appendChild(opt);
      });
      dongSelect.disabled = false;
    } else {
      dongSelect.disabled = true;
    }

    confirmButton.disabled = false;
  });
}

/**
 * Extracts current selection from dropdowns.
 * @param {object} elements
 * @param {Array<object>} regions
 * @returns {{ nx: number, ny: number, regionLabel: string } | null}
 */
export function getSelectedLocation(elements, regions) {
  const { sidoSelect, sigunguSelect, dongSelect } = elements;
  if (!sidoSelect.value || !sigunguSelect.value) return null;

  const currentRegion = regions[parseInt(sidoSelect.value, 10)];
  const currentSigungu = currentRegion.sigungu[parseInt(sigunguSelect.value, 10)];
  const selectedDong = dongSelect.value;

  const labelParts = [currentRegion.sido, currentSigungu.name];
  if (selectedDong) {
    labelParts.push(selectedDong);
  }

  return {
    nx: currentSigungu.nx,
    ny: currentSigungu.ny,
    regionLabel: labelParts.join(' ')
  };
}
