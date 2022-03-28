import type { Account } from '../../types/Account.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const IMPORT_LEGACY_ACCOUNT_METHOD = 'import_account_from_legacy_root_entropy';

type ImportAccountParams = {
  entropy: string;
  firstBlockIndex?: string;
  name: string | null;
};

type ImportAccountResult = {
  account: Account;
};

export const importLegacyAccount = async ({
  entropy,
  firstBlockIndex,
  name,
}: ImportAccountParams): Promise<ImportAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<ImportAccountResult> = await axiosFullService(
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
  } else {
    return result;
  }
};
