import type { Account, AccountV2 } from '../../types/Account.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAccount from './getAccount';

const IMPORT_ACCOUNT_METHOD = 'import_account';

type ImportAccountParams = {
  mnemonic: string;
  key_derivation_version: string;
  firstBlockIndex?: string;
  name: string | null;
};

type ImportAccountResult = {
  account: Account;
};

type ImportAccountResultV2 = {
  account: AccountV2;
};

const importAccount = async ({
  mnemonic,
  key_derivation_version,
  firstBlockIndex,
  name,
}: ImportAccountParams): Promise<ImportAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<ImportAccountResultV2> = await axiosFullService(
    IMPORT_ACCOUNT_METHOD,
    {
      firstBlockIndex,
      key_derivation_version,
      mnemonic,
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

export default importAccount;
