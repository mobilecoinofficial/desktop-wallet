import { store } from '../../redux/store';
import { BalanceStatus } from '../../types';
import type { Account, AccountStatus, AccountV2 } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { convertBalanceFromV2 } from './getBalanceForAccount';

const GET_ACCOUNT_METHOD = 'get_account_status';

type GetAccountParams = {
  accountId: StringHex;
};

type GetAccountResult = {
  account: Account;
};

export function convertAccountV2(account: AccountV2): Account {
  return {
    accountHeight: account.nextBlockIndex,
    accountId: account.id,
    firstBlockIndex: account.firstBlockIndex,
    mainAddress: account.mainAddress,
    name: account.name,
    nextSubaddressIndex: account.nextSubaddressIndex,
    recoveryMode: account.recoveryMode,
    viewOnly: account.viewOnly,
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
    const { selectedAccount, offlineModeEnabled } = store.getState();
    const isWalletSynced =
      Number(result.localBlockHeight) === Number(selectedAccount.balanceStatus.accountBlockHeight);

    const ledgerSyncTarget = offlineModeEnabled
      ? result.localBlockHeight
      : result.networkBlockHeight;
    const isLedgerSynced =
      Number(selectedAccount.balanceStatus.localBlockHeight) === Number(ledgerSyncTarget);
    return isLedgerSynced && isWalletSynced;
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
    return { account: convertAccountV2(result.account) };
  }
};

export const getAccountAndBalance = async ({
  accountId,
}: GetAccountParams): Promise<{ account: Account; balance: BalanceStatus }> => {
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
    const account = convertAccountV2(result.account);
    const balance = convertBalanceFromV2(result);

    return {
      account,
      balance,
    };
  }
};

export default getAccount;
