import { SjclCipherEncrypted } from 'sjcl';

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export type UpdatePasswordAction = {
  payload: {
    encryptedPassword: SjclCipherEncrypted;
    secretKey: string;
  };
  type: 'UPDATE_PASSWORD';
};
