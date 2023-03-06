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

export function nullPad(str: string, totalLen: number): string {
  if (str.length >= totalLen) {
    return str;
  }

  return str + Array(totalLen - str.length + 1).join('\x00');
}

export function utf8ToHex(string: string): string {
  const utf8Encoder = new TextEncoder();
  const byteArray = utf8Encoder.encode(string);
  let hex = '';
  byteArray.forEach((byte) => {
    hex += `0${byte.toString(16)}`.slice(-2);
  });
  return hex;
}

export function convertEthAddressToMemo(address: string): string {
  const paddedAddress = nullPad(address, 64);
  return utf8ToHex(paddedAddress);
}
