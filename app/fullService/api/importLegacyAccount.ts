import type { Account } from '../../types/Account.d';
import axiosFullService from '../axiosFullService';

const IMPORT_LEGACY_ACCOUNT_METHOD = 'import_account_from_legacy_root_entropy';

type ImportAccountParams = {
  entropy: string;
  firstBlockIndex?: string;
  name: string | null;
};

type ImportAccountResult = {
  account: Account;
};

const importLegacyAccount = async ({
  entropy,
  firstBlockIndex,
  name,
}: ImportAccountParams): Promise<ImportAccountResult> => {
  const { result, error } = await axiosFullService(IMPORT_LEGACY_ACCOUNT_METHOD, {
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

export default importLegacyAccount;
