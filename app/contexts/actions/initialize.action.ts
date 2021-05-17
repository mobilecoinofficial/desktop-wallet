import type { SjclCipherEncrypted } from 'sjcl';

export const INITIALIZE = 'INITIALIZE';

export type InitializeActionType = {
  payload: {
    encryptedPassphrase: SjclCipherEncrypted | undefined;
    isAuthenticated: boolean;
  };
  type: 'INITIALIZE';
};

export const initializeAction = (
  encryptedPassphrase: SjclCipherEncrypted | undefined
): InitializeActionType => ({
  payload: {
    encryptedPassphrase,
    isAuthenticated: false,
  },
  type: INITIALIZE,
});
