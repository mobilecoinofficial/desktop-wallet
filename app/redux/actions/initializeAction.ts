import { SjclCipherEncrypted } from 'sjcl';

export const INITIALIZE = 'INITIALIZE';

export type InitializeAction = {
  payload: {
    encryptedPassword: SjclCipherEncrypted | undefined;
    isAuthenticated: boolean;
  };
  type: 'INITIALIZE';
};

export const initializeAction = (
  encryptedPassword: SjclCipherEncrypted | undefined
): InitializeAction => ({
  payload: {
    encryptedPassword,
    isAuthenticated: false,
  },
  type: INITIALIZE,
});
