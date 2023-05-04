import type { Account, AccountV2 } from '../../types/Account.d';
import { FogInfo } from '../../utils/fogConstants';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAccount from './getAccount';

const IMPORT_VIEW_ONLY_ACCOUNT_METHOD = 'import_view_only_account';
const IMPORT_VIEW_ONLY_ACCOUNT_LEDGER_METHOD = 'import_view_only_account_from_hardware_wallet';

export type ImportViewOnlyAccountParams = {
  firstBlockIndex?: string;
  name?: string;
  nextSubaddressIndex?: string;
  spendPublicKey?: string;
  viewPrivateKey?: string;
  fogInfo?: FogInfo;
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
  fogInfo,
}: ImportViewOnlyAccountParams): Promise<ImportViewOnlyAccountResult> => {
  const method = fogInfo ? IMPORT_VIEW_ONLY_ACCOUNT_LEDGER_METHOD : IMPORT_VIEW_ONLY_ACCOUNT_METHOD;
  const { result, error }: AxiosFullServiceResponse<ImportViewOnlyAccountResultV2> =
    await axiosFullService(method, {
      firstBlockIndex,
      fogInfo,
      name,
      nextSubaddressIndex,
      spendPublicKey,
      viewPrivateKey,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  return getAccount({ accountId: result.account.id });
};

export default importViewOnlyAccount;
