import { SjclCipherEncrypted } from 'sjcl';

export const INITIALIZE = 'INITIALIZE';

export type InitializeAction = {
  payload: {
    encryptedPassphrase: SjclCipherEncrypted | undefined;
    isAuthenticated: boolean;
  };
  type: 'INITIALIZE';
};
