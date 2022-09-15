import { TokenIds } from '../../constants/app';
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
    balancePerToken: {
      0: {
        orphanedPmob: accountStatus.balancePerToken[TokenIds.MOB]?.orphaned || '0',
        pendingPmob: accountStatus.balancePerToken[TokenIds.MOB]?.pending || '0',
        secretedPmob: accountStatus.balancePerToken[TokenIds.MOB]?.secreted || '0',
        spentPmob: accountStatus.balancePerToken[TokenIds.MOB]?.spent || '0',
        unspentPmob: accountStatus.balancePerToken[TokenIds.MOB]?.unspent || '0',
      },
      1: {
        orphanedPmob: accountStatus.balancePerToken[TokenIds.MOBUSD]?.orphaned || '0',
        pendingPmob: accountStatus.balancePerToken[TokenIds.MOBUSD]?.pending || '0',
        secretedPmob: accountStatus.balancePerToken[TokenIds.MOBUSD]?.secreted || '0',
        spentPmob: accountStatus.balancePerToken[TokenIds.MOBUSD]?.spent || '0',
        unspentPmob: accountStatus.balancePerToken[TokenIds.MOBUSD]?.unspent || '0',
      },
    },
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
