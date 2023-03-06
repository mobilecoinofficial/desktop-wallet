import { TextEncoder } from 'util';

import {
  convertMnemonicOrHexToEntropy,
  entropyToMnemonic,
  isValidMnemonicOrHexFormat,
  isValidMnemonicOrHexValue,
  convertEthAddressToMemo,
} from './bip39Functions';

global.TextEncoder = TextEncoder;

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

  test('not if empty', () => {
    expect(isValidMnemonicOrHexValue('')).toBeFalsy();
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

describe('convert eth address to memo', () => {
  test('returns expected memo', () => {
    const expectedMemo =
      '30786639633263413534356533343364393366633945373938304237383937353763393631423163353600000000000000000000000000000000000000000000';
    const inputAddress = '0xf9c2cA545e343d93fc9E7980B789757c961B1c56';

    expect(convertEthAddressToMemo(inputAddress)).toBe(expectedMemo);
  });
  test('returns expected memo for a different adress', () => {
    const expectedMemo =
      '30783039353535333136373235303733654630433231396637343162453439313861393844456342393600000000000000000000000000000000000000000000';
    const inputAddress = '0x09555316725073eF0C219f741bE4918a98DEcB96';

    expect(convertEthAddressToMemo(inputAddress)).toBe(expectedMemo);
  });
});
