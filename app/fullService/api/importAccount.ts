import type Account from '../../types/Account';
import axiosFullService from '../axiosFullService';

const IMPORT_ACCOUNT_METHOD = 'import_account';

type ImportAccountParams = {
  entropy: string;
  firstBlockIndex?: string;
  name: string | null;
};

type ImportAccountResult = {
  account: Account;
};

const importAccount = async ({
  entropy,
  firstBlockIndex,
  name,
}: ImportAccountParams): Promise<ImportAccountResult> => {
  const { result, error } = await axiosFullService(IMPORT_ACCOUNT_METHOD, {
    entropy,
    firstBlockIndex,
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
