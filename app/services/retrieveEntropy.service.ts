import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';
import { validatePassword } from '../utils/authentication';

export const retrieveEntropy = async (password: string): Promise<string> => {
  try {
    const { encryptedPassword, selectedAccount } = store.getState();
    if (encryptedPassword === undefined) {
      throw new Error('encryptedPassword assertion failed');
    }

    // TODO - use secretKey returned here to pass to Full-Service to get secrets.
    await validatePassword(password, encryptedPassword);

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
