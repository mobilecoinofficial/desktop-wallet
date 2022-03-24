import { SjclCipherEncrypted } from 'sjcl';

export const INITIALIZE = 'INITIALIZE';

export type InitializeAction = {
  payload: {
    encryptedpassword: SjclCipherEncrypted | undefined;
    isAuthenticated: boolean;
  };
  type: 'INITIALIZE';
};
