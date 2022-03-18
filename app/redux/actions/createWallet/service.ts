import * as localStore from '../../../utils/LocalStore';
import { encryptAndStorePassphrase } from '../../../utils/authentication';
import { store } from '../../store';
import { createWalletAction } from './action';

export const createWallet = async (passphrase: string): Promise<void> => {
  const wipeAccountContactAndPin = async (): Promise<void> => {
    // Wipe Contacts and PIN
    localStore.deleteEncryptedContacts();
    localStore.deletePinThresholdPmob();
    localStore.deleteEncryptedPin();
  };

  try {
    await wipeAccountContactAndPin();

    // After successful import, store encryptedPassphrase
    const { encryptedPassphrase, secretKey } = await encryptAndStorePassphrase(passphrase);
    store.dispatch(createWalletAction(encryptedPassphrase, secretKey));
  } catch (err) {
    throw new Error(err.message);
  }
};

export type CreateWalletService = typeof createWallet;
