import isValidPin from './isValidPin';

describe('PIN is valid', () => {
  test('if made of 6 digits or longer', () => {
    expect(isValidPin('000000')).toBe(true);
    expect(isValidPin('2201241251960')).toBe(true);
    expect(isValidPin('999999')).toBe(true);
    expect(isValidPin('999912414199')).toBe(true);
    expect(isValidPin('999991281213123231212414199')).toBe(true);
  });
});

describe('PIN is not valid', () => {
  test('if less than 6 digits long', () => {
    expect(isValidPin('1')).toBeFalsy();
    expect(isValidPin('12')).toBeFalsy();
    expect(isValidPin('123')).toBeFalsy();
    expect(isValidPin('1234')).toBeFalsy();
    expect(isValidPin('12345')).toBeFalsy();
  });

  test('with non-digits', () => {
    expect(isValidPin('00 00 000')).toBeFalsy();
    expect(isValidPin('22OO96O')).toBeFalsy();
    expect(isValidPin('9NINES')).toBeFalsy();
    expect(isValidPin('00JB')).toBeFalsy();
    expect(isValidPin('220960 ')).toBeFalsy();
    expect(isValidPin('99999NNNN999')).toBeFalsy();
  });
});
