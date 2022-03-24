import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';
import { validatepassword } from '../utils/authentication';

export const retrieveEntropy = async (password: string): Promise<string> => {
  try {
    const { encryptedpassword, selectedAccount } = store.getState();
    if (encryptedpassword === undefined) {
      throw new Error('encryptedpassword assertion failed');
    }

    // TODO - use secretKey returned here to pass to Full-Service to get secrets.
    await validatepassword(password, encryptedpassword);

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
