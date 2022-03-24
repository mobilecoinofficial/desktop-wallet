import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';
import { validatePassphrase } from '../utils/authentication';

export const retrieveEntropy = async (passphrase: string): Promise<string> => {
  try {
    const { encryptedPassphrase, selectedAccount } = store.getState();
    if (encryptedPassphrase === undefined) {
      throw new Error('encryptedPassphrase assertion failed');
    }

    // TODO - use secretKey returned here to pass to Full-Service to get secrets.
    await validatePassphrase(passphrase, encryptedPassphrase);

    const { accountSecrets } = await fullServiceApi.exportAccountSecrets({
      accountId: selectedAccount.account.accountId,
    });

    return accountSecrets.entropy ?? accountSecrets.mnemonic ?? '';
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type RetrieveEntropyService = typeof retrieveEntropy;
