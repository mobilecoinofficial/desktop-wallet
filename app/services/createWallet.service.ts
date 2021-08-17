import { store, wipeAccountContactAndPin } from '../contexts/FullServiceContext';
import { createWalletAction } from '../contexts/actions/createWallet.action';
import { encryptAndStorePassphrase } from '../utils/authentication';

const createWallet = async (passphrase: string): Promise<void> => {
  try {
    await wipeAccountContactAndPin();

    // After successful import, store encryptedPassphrase
    const { encryptedPassphrase, secretKey } = await encryptAndStorePassphrase(passphrase);
    store.dispatch(createWalletAction(encryptedPassphrase, secretKey));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default createWallet;
export { createWallet };
export type CreateWalletService = typeof createWallet;
