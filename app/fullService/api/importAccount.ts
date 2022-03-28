import type { Account } from '../../types/Account.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

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

export const importAccount = async ({
  mnemonic,
  key_derivation_version,
  firstBlockIndex,
  name,
}: ImportAccountParams): Promise<ImportAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<ImportAccountResult> = await axiosFullService(
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
  } else {
    return result;
  }
};
