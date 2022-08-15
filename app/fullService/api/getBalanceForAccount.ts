import { MOBTOKENID } from '../../constants/app';
import type { AccountStatus } from '../../types/Account.d';
import type { BalanceStatus } from '../../types/BalanceStatus.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

type GetBalanceParams = {
  accountId: StringHex;
};

type GetBalanceResult = {
  balance: BalanceStatus; // TODO - lock in name of object
};

export function convertBalanceFromV2(accountStatus: AccountStatus): BalanceStatus {
  return {
    accountBlockHeight: accountStatus.account.nextBlockIndex,
    isSynced:
      Number(accountStatus.account.nextBlockIndex) >= Number(accountStatus.networkBlockHeight),
    localBlockHeight: accountStatus.localBlockHeight,
    networkBlockHeight: accountStatus.networkBlockHeight,
    object: 'balance',
    orphanedPmob: accountStatus.balancePerToken[MOBTOKENID]?.orphaned || '0',
    pendingPmob: accountStatus.balancePerToken[MOBTOKENID]?.pending || '0',
    secretedPmob: accountStatus.balancePerToken[MOBTOKENID]?.secreted || '0',
    spentPmob: accountStatus.balancePerToken[MOBTOKENID]?.spent || '0',
    unspentPmob: accountStatus.balancePerToken[MOBTOKENID]?.unspent || '0',
  };
}

// full service v2 api does not have a balance endpoint. Instead the balance is a field on account status
const getBalance = async ({ accountId }: GetBalanceParams): Promise<GetBalanceResult> => {
  const { result, error }: AxiosFullServiceResponse<AccountStatus> = await axiosFullService(
    'get_account_status',
    {
      accountId,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return { balance: convertBalanceFromV2(result) };
  }
};

export default getBalance;
