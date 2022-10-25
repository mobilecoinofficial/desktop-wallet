import { store } from '../../redux/store';
import type { Account, AccountStatus } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_ACCOUNT_METHOD = 'get_account_status';

type GetAccountParams = {
  accountId: StringHex;
};

type GetAccountResult = {
  account: Account;
};

export function convertAccountV2(accountStatus: AccountStatus): GetAccountResult {
  return {
    account: {
      accountHeight: accountStatus.account.nextBlockIndex,
      accountId: accountStatus.account.id,
      firstBlockIndex: accountStatus.account.firstBlockIndex,
      mainAddress: accountStatus.account.mainAddress,
      name: accountStatus.account.name,
      nextSubaddressIndex: accountStatus.account.nextSubaddressIndex,
      recoveryMode: accountStatus.account.recoveryMode,
    },
  };
}

export const isAccountSynced = async ({ accountId }: GetAccountParams): Promise<boolean> => {
  const { result, error }: AxiosFullServiceResponse<AccountStatus> = await axiosFullService(
    GET_ACCOUNT_METHOD,
    {
      accountId,
    }
  );
  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    const { selectedAccount } = store.getState();
    const isServerSynced =
      Number(result.account.nextBlockIndex) === Number(result.networkBlockHeight);
    const isClientSynced =
      Number(selectedAccount.balanceStatus.accountBlockHeight) ===
      Number(result.networkBlockHeight);
    return isServerSynced && isClientSynced;
  }
};

const getAccount = async ({ accountId }: GetAccountParams): Promise<GetAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<AccountStatus> = await axiosFullService(
    GET_ACCOUNT_METHOD,
    {
      accountId,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return convertAccountV2(result);
  }
};

export default getAccount;
