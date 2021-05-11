import type { Account } from '../../types/Account.d';
import axiosFullService from '../axiosFullService';

const IMPORT_ACCOUNT_METHOD = 'import_account';

type ImportAccountParams = {
  mnemonic: string;
  keyDerivationVersion: string;
  firstBlockIndex?: string;
  name: string | null;
};

type ImportAccountResult = {
  account: Account;
};

const importAccount = async ({
  mnemonic,
  keyDerivationVersion,
  firstBlockIndex,
  name,
}: ImportAccountParams): Promise<ImportAccountResult> => {
  const { result, error } = await axiosFullService(IMPORT_ACCOUNT_METHOD, {
    firstBlockIndex,
    keyDerivationVersion,
    mnemonic,
    name,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default importAccount;
