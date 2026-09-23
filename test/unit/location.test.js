import test from 'node:test';
import assert from 'node:assert/strict';

import { getSelectedLocation } from '../../client/modules/location.js';

test('getSelectedLocation extracts correct coordinates and label from mock dropdowns', () => {
  const mockRegions = [
    {
      sido: '서울특별시',
      sigungu: [
        { name: '종로구', nx: 60, ny: 127, dongs: ['청운동', '사직동'] },
        { name: '중구', nx: 60, ny: 127, dongs: ['명동', '을지로동'] }
      ]
    },
    {
      sido: '부산광역시',
      sigungu: [
        { name: '해운대구', nx: 99, ny: 75, dongs: ['우동', '중동'] }
      ]
    }
  ];

  const elements = {
    sidoSelect: { value: '0' },
    sigunguSelect: { value: '1' },
    dongSelect: { value: '명동' }
  };

  const selected = getSelectedLocation(elements, mockRegions);
  assert.deepStrictEqual(selected, {
    nx: 60,
    ny: 127,
    regionLabel: '서울특별시 중구 명동'
  });

  // Empty selection returns null
  assert.strictEqual(getSelectedLocation({ sidoSelect: { value: '' }, sigunguSelect: { value: '' }, dongSelect: { value: '' } }, mockRegions), null);
});
