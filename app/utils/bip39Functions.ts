import * as bip39 from 'bip39';

export const isHex64 = (st: string): boolean =>
  st.length === 64 && st.match(/^[0-9a-f]{64}$/i) !== null;

export const isMnemonic = (st: string): boolean => st.match(/^(\w+\s+){11,}\w+$/) !== null;

export const isValidMnemonicOrHexFormat = (st: string | undefined): boolean =>
  !!st && (isHex64(st) || isMnemonic(st));

export const convertMnemonicOrHexToEntropy = (st: string): string => {
  try {
    return isHex64(st) ? st : bip39.mnemonicToEntropy(st);
  } catch (e) {
    throw new Error('Not a mnemonic or hex');
  }
};

export const isValidMnemonicOrHexValue = (st: string | undefined): boolean => {
  if (!st) {
    return false;
  }

  try {
    convertMnemonicOrHexToEntropy(st);
    return true;
  } catch (e) {
    return false;
  }
};

export const entropyToMnemonic = (st: string): string => bip39.entropyToMnemonic(st);
