import test from 'node:test';
import assert from 'node:assert/strict';

import { getWeatherGlyph, renderWarnings } from '../../client/modules/ui.js';

test('getWeatherGlyph returns correct emoji for weather conditions', () => {
  assert.strictEqual(getWeatherGlyph('맑음'), '☀️');
  assert.strictEqual(getWeatherGlyph('구름많음'), '⛅');
  assert.strictEqual(getWeatherGlyph('흐림'), '☁️');
  assert.strictEqual(getWeatherGlyph('맑음', '비'), '🌧️');
  assert.strictEqual(getWeatherGlyph('흐림', '눈'), '❄️');
  assert.strictEqual(getWeatherGlyph('구름많음', '소나기'), '🌦️');
});

test('renderWarnings strictly enforces offline warning exclusion invariant', () => {
  // Mock DOM elements
  const mockClassList = {
    classes: new Set(['hidden']),
    add(cls) { this.classes.add(cls); },
    remove(cls) { this.classes.delete(cls); },
    contains(cls) { return this.classes.has(cls); }
  };

  const container = { classList: mockClassList };
  const titleEl = { textContent: '' };
  const messageEl = { textContent: '' };

  globalThis.document = {
    getElementById(id) {
      if (id === 'warning-container') return container;
      if (id === 'warning-title') return titleEl;
      if (id === 'warning-message') return messageEl;
      return null;
    }
  };

  try {
    // 1. OFFLINE INVARIANT: When offline, MUST NOT indicate "all clear" or "no warning"
    renderWarnings({ active: false, items: [] }, 'unavailable', true);
    assert.strictEqual(container.classList.contains('hidden'), false, 'Warning container must be visible offline');
    assert.ok(titleEl.textContent.includes('확인 불가') || titleEl.textContent.includes('오프라인'));
    assert.ok(!titleEl.textContent.includes('정상'));
    assert.ok(!messageEl.textContent.includes('특보 없음'));

    // 2. ACTIVE WARNING CASE: Active warning present
    renderWarnings(
      { active: true, items: [{ title: '대설주의보', message: '대설주의보 발효 중' }] },
      'current',
      false
    );
    assert.strictEqual(container.classList.contains('hidden'), false);
    assert.strictEqual(titleEl.textContent, '대설주의보');
    assert.strictEqual(messageEl.textContent, '대설주의보 발효 중');

    // 3. NORMAL ONLINE CASE: No active warnings
    renderWarnings({ active: false, items: [] }, 'current', false);
    assert.strictEqual(container.classList.contains('hidden'), true, 'Container must be hidden when all clear online');
  } finally {
    delete globalThis.document;
  }
});
