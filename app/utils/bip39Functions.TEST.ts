import {
  convertMnemonicOrHexToEntropy,
  entropyToMnemonic,
  isValidMnemonicOrHexFormat,
  isValidMnemonicOrHexValue,
} from './bip39Functions';

const hexOk = '123abd4876590cef'.repeat(4);
const hexBad1 = hexOk.substr(1, 60);
const hexBad2 = `${hexOk}220960`;

const mnemoOk1 = 'alpha bravo charlie delta echo foxtrot golf hotel india joliet kilo lima';
const mnemoOk2 = `${mnemoOk1} mike november oscar papa quebec`;

const validEntropy = 'cfd48cb6f8c5e70a67a4377e4ac1bf78edaa52cfcc2b50a235778b35e845f4ae';
const validMnemonic =
  'sound piece color various fury lunch ozone manage layer figure hurt vault ' +
  'survey city dish lyrics expose balance fuel biology future carry sport text';

const mnemonicBad = `${validMnemonic} plus extra words`;

describe('an entropy has correct format', () => {
  test('if 64 hex characters', () => {
    expect(isValidMnemonicOrHexFormat(hexOk)).toBeTruthy();
    expect(isValidMnemonicOrHexFormat(hexBad1)).toBeFalsy();
    expect(isValidMnemonicOrHexFormat(hexBad2)).toBeFalsy();
  });

  test('if 12 or more words', () => {
    expect(isValidMnemonicOrHexFormat(mnemoOk1)).toBeTruthy();
    expect(isValidMnemonicOrHexFormat(mnemoOk2)).toBeTruthy();
    expect(isValidMnemonicOrHexFormat('')).toBeFalsy();
    expect(isValidMnemonicOrHexFormat('only three words')).toBeFalsy();
  });
});

describe('an entropy', () => {
  test('has correct value', () => {
    expect(isValidMnemonicOrHexValue(validEntropy)).toBeTruthy();
    expect(isValidMnemonicOrHexValue(validMnemonic)).toBeTruthy();
  });

  test('has wrong value', () => {
    expect(isValidMnemonicOrHexValue(hexOk)).not.toBe(validEntropy);
    expect(isValidMnemonicOrHexValue(hexBad1)).not.toBe(validEntropy);
    expect(isValidMnemonicOrHexValue(hexBad2)).not.toBe(validEntropy);
    expect(isValidMnemonicOrHexValue('too short')).not.toBe(validEntropy);
    expect(isValidMnemonicOrHexValue(mnemonicBad)).not.toBe(validEntropy);
  });
});

describe('a valid entropy', () => {
  test('is correctly converted', () => {
    expect(convertMnemonicOrHexToEntropy(validEntropy)).toBe(validEntropy);
    expect(convertMnemonicOrHexToEntropy(validMnemonic)).toBe(validEntropy);
  });
});

describe('a non-valid entropy', () => {
  test('is rejected', () => {
    expect(() => convertMnemonicOrHexToEntropy(hexBad1)).toThrow();
    expect(() => convertMnemonicOrHexToEntropy(hexBad2)).toThrow();
    expect(() => convertMnemonicOrHexToEntropy(mnemonicBad)).toThrow();
  });
});

describe('entropy', () => {
  test('is correctly converted to mnemonic', () => {
    expect(entropyToMnemonic(validEntropy)).toBe(validMnemonic);
  });
});
