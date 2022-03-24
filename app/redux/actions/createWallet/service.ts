import * as localStore from '../../../utils/LocalStore';
import { encryptAndStorepassword } from '../../../utils/authentication';
import { store } from '../../store';
import { createWalletAction } from './action';

export const createWallet = async (password: string): Promise<void> => {
  const wipeAccountContactAndPin = async (): Promise<void> => {
    // Wipe Contacts and PIN
    localStore.deleteEncryptedContacts();
    localStore.deletePinThresholdPmob();
    localStore.deleteEncryptedPin();
  };

  try {
    await wipeAccountContactAndPin();

    // After successful import, store encryptedpassword
    const { encryptedpassword, secretKey } = await encryptAndStorepassword(password);
    store.dispatch(createWalletAction(encryptedpassword, secretKey));
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type CreateWalletService = typeof createWallet;
