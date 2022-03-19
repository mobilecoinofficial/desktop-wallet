import { wipeAccountContactAndPin } from '../contexts/FullServiceContext';
import { createWalletAction } from '../contexts/actions/createWallet.action';
import { store } from '../redux/store';
import { encryptAndStorePassphrase } from '../utils/authentication';

export const createWallet = async (passphrase: string): Promise<void> => {
  try {
    await wipeAccountContactAndPin();

    // After successful import, store encryptedPassphrase
    const { encryptedPassphrase, secretKey } = await encryptAndStorePassphrase(passphrase);
    store.dispatch(createWalletAction(encryptedPassphrase, secretKey));
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type CreateWalletService = typeof createWallet;
