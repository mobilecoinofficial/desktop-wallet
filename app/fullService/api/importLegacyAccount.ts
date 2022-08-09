import type { Account, AccountV2 } from '../../types/Account.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAccount from './getAccount';

const IMPORT_LEGACY_ACCOUNT_METHOD = 'import_account_from_legacy_root_entropy';

type ImportAccountParams = {
  entropy: string;
  firstBlockIndex?: string;
  name: string | null;
};

type ImportAccountResult = {
  account: Account;
};

type ImportAccountResultV2 = {
  account: AccountV2;
};

const importLegacyAccount = async ({
  entropy,
  firstBlockIndex,
  name,
}: ImportAccountParams): Promise<ImportAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<ImportAccountResultV2> = await axiosFullService(
    IMPORT_LEGACY_ACCOUNT_METHOD,
    {
      entropy,
      firstBlockIndex,
      name,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  return getAccount({ accountId: result.account.id });
};

export default importLegacyAccount;
