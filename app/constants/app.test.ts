import { RANDOM_COLORS, randomColor } from './app';

describe('Test random colors', () => {
  test('100 times', () => {
    for (let i = 0; i < 100; i++) {
      expect(RANDOM_COLORS.includes(randomColor())).toBeTruthy();
    }
  });
});
