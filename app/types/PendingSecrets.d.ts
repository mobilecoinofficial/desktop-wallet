import type { StringHex } from './SpecialStrings';

export type PendingSecrets = {
  entropy: StringHex;
  mnemonic: string;
};
