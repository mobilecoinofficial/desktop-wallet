import type { Account, AccountV2 } from '../../types/Account.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAccount from './getAccount';

const IMPORT_VIEW_ONLY_ACCOUNT_METHOD = 'import_view_only_account';

export type ImportViewOnlyAccountParams = {
  firstBlockIndex?: string;
  name?: string;
  nextSubaddressIndex?: string;
  spendPublicKey?: string;
  viewPrivateKey?: string;
  fromLedger?: boolean;
};

type ImportViewOnlyAccountResult = {
  account: Account;
};

type ImportViewOnlyAccountResultV2 = {
  account: AccountV2;
};

const importViewOnlyAccount = async ({
  firstBlockIndex,
  name,
  nextSubaddressIndex,
  spendPublicKey,
  viewPrivateKey,
  fromLedger,
}: ImportViewOnlyAccountParams): Promise<ImportViewOnlyAccountResult> => {
  const params = fromLedger
    ? { name }
    : {
        firstBlockIndex,
        name,
        nextSubaddressIndex,
        spendPublicKey,
        viewPrivateKey,
      };

  const { result, error }: AxiosFullServiceResponse<ImportViewOnlyAccountResultV2> =
    await axiosFullService(IMPORT_VIEW_ONLY_ACCOUNT_METHOD, params);

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  return getAccount({ accountId: result.account.id });
};

export default importViewOnlyAccount;
