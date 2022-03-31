import * as localStore from '../../utils/LocalStore';
import { encryptAndStorePassword } from '../../utils/authentication';
import { errorToString } from '../../utils/errorHandler';
import { createWalletAction } from '../actions';
import { store } from '../store';

export const createWallet = async (password: string): Promise<void> => {
  const wipeAccountContactAndPin = async (): Promise<void> => {
    // Wipe Contacts and PIN
    localStore.deleteEncryptedContacts();
    localStore.deletePinThresholdPmob();
    localStore.deleteEncryptedPin();
  };

  try {
    await wipeAccountContactAndPin();

    // After successful import, store encryptedPassword
    const { encryptedPassword, secretKey } = await encryptAndStorePassword(password);
    store.dispatch(createWalletAction(encryptedPassword, secretKey));
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};
