import isValidPin from './isValidPin';

describe('PIN is valid', () => {
  test('if made of 6 digits', () => {
    expect(isValidPin('000000')).toBe(true);
    expect(isValidPin('220960')).toBe(true);
    expect(isValidPin('999999')).toBe(true);
  });
});

describe('PIN is not valid', () => {
  test('if not 6 chars long', () => {
    expect(isValidPin('1')).toBeFalsy();
    expect(isValidPin('23')).toBeFalsy();
    expect(isValidPin('456')).toBeFalsy();
    expect(isValidPin('78901234568970')).toBeFalsy();
  });

  test('if 6 chars long, but with non-digits', () => {
    expect(isValidPin('00 000')).toBeFalsy();
    expect(isValidPin('22O96O')).toBeFalsy();
    expect(isValidPin('9NINES')).toBeFalsy();
  });

  test('if not 6 chars long, and with non-digits', () => {
    expect(isValidPin('007JB')).toBeFalsy();
    expect(isValidPin('220960 ')).toBeFalsy();
    expect(isValidPin('99999NNNN999')).toBeFalsy();
  });
});
