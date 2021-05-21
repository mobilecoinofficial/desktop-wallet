import { getPercentSynced } from './getPercentSynced';

describe('getPercentSynced', () => {
  test('works for 0%', () => {
    expect(getPercentSynced(BigInt(0), BigInt(20000))).toBe(0);
  });

  test('works for 10%', () => {
    expect(getPercentSynced(BigInt(40000), BigInt(4000))).toBe(10);
  });

  test('works for 100%', () => {
    expect(getPercentSynced(BigInt(30000), BigInt(30000))).toBe(100);
  });

  test('returns 0 for empty list of blocks', () => {
    expect(getPercentSynced(BigInt(0), BigInt(0))).toBe(0);
  });
});
