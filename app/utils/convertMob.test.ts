import { convertMobStringToPicoMobString, convertPicoMobStringToMob, commafy } from './convertMob';

describe('convertMobStringToPicoMobString', () => {
  test('works for 0', () => {
    expect(convertMobStringToPicoMobString('0')).toBe('0');
  });

  test('works for 1', () => {
    expect(convertMobStringToPicoMobString('1')).toBe('1000000000000');
  });

  test('works for 22.0960', () => {
    expect(convertMobStringToPicoMobString('22.0960000')).toBe('22096000000000');
  });

  test('works for a large value like 12345678901234', () => {
    expect(convertMobStringToPicoMobString('12345678901234.0001')).toBe(
      '12345678901234000100000000'
    );
  });

  test('throws for non-numbers', () => {
    expect(() => convertMobStringToPicoMobString('FEFK')).toThrowError();
  });
});

describe('commafy', () => {
  test('works for 0', () => {
    expect(commafy('0')).toBe('0');
  });

  test('works for 22.0960', () => {
    expect(commafy('22.09600000')).toBe('22.09600000');
  });

  test('works for large values like 12345678901.234', () => {
    expect(commafy('12345678901.234')).toBe('12,345,678,901.234');
  });
});

describe('convertPicoMobStringToMob', () => {
  test('works for 0', () => {
    expect(convertPicoMobStringToMob('0')).toBe('0.000000000000');
  });

  test('works for 220960', () => {
    expect(convertPicoMobStringToMob('2209600000')).toBe('0.002209600000');
  });

  test('works for large values like 12345678901234', () => {
    expect(convertPicoMobStringToMob('12345678901234')).toBe('12.345678901234');
  });
});
