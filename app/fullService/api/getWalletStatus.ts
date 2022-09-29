import { TOKENS } from '../../constants/tokens';
import type { Accounts } from '../../types/Account.d';
import type { WalletStatusV2, WalletStatus } from '../../types/WalletStatus.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAllAccounts from './getAllAccounts';

const GET_WALLET_STATUS_METHOD = 'get_wallet_status';

type GetWalletStatusResult = {
  walletStatus: WalletStatus;
};

function convertWalletStatusFromV2(
  status: WalletStatusV2,
  accounts: Accounts
): GetWalletStatusResult {
  return {
    walletStatus: {
      accountIds: accounts.accountIds,
      accountMap: accounts.accountMap,
      balancePerToken: {
        [TOKENS.MOB.id]: {
          orphanedPmob: status.balancePerToken[TOKENS.MOB.id]?.orphaned || '0',
          pendingPmob: status.balancePerToken[TOKENS.MOB.id]?.pending || '0',
          secretedPmob: status.balancePerToken[TOKENS.MOB.id]?.secreted || '0',
          spentPmob: status.balancePerToken[TOKENS.MOB.id]?.spent || '0',
          unspentPmob: status.balancePerToken[TOKENS.MOB.id]?.unspent || '0',
        },
        [TOKENS.EUSD.id]: {
          orphanedPmob: status.balancePerToken[TOKENS.EUSD.id]?.orphaned || '0',
          pendingPmob: status.balancePerToken[TOKENS.EUSD.id]?.pending || '0',
          secretedPmob: status.balancePerToken[TOKENS.EUSD.id]?.secreted || '0',
          spentPmob: status.balancePerToken[TOKENS.EUSD.id]?.spent || '0',
          unspentPmob: status.balancePerToken[TOKENS.EUSD.id]?.unspent || '0',
        },
      },
      isSyncedAll: status.isSyncedAll,
      localBlockHeight: status.localBlockHeight,
      minSyncedBlockIndex: status.minSyncedBlockIndex,
      networkBlockHeight: status.networkBlockHeight,
      object: 'wallet_status',
    },
  };
}

const getWalletStatus = async (): Promise<GetWalletStatusResult> => {
  const { result, error }: AxiosFullServiceResponse<{ walletStatus: WalletStatusV2 }> =
    await axiosFullService(GET_WALLET_STATUS_METHOD, null);

  const accounts = await getAllAccounts();

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return convertWalletStatusFromV2(result.walletStatus, accounts);
  }
};

export default getWalletStatus;
