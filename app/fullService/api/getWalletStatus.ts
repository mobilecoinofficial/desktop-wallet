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
      isSyncedAll: status.isSyncedAll,
      localBlockHeight: status.localBlockHeight,
      minSyncedBlockIndex: status.minSyncedBlockIndex,
      networkBlockHeight: status.networkBlockHeight,
      object: 'wallet_status',
      totalOrphanedPmob: status.balancePerToken[0]?.orphaned,
      totalPendingPmob: status.balancePerToken[0]?.pending,
      totalSecretedPmob: status.balancePerToken[0]?.secreted,
      totalSpentPmob: status.balancePerToken[0]?.spent,
      totalUnspentPmob: status.balancePerToken[0]?.unspent,
    },
  };
}

const getWalletStatus = async (): Promise<GetWalletStatusResult> => {
  const { result, error }: AxiosFullServiceResponse<{ walletStatus: WalletStatusV2 }> =
    await axiosFullService(GET_WALLET_STATUS_METHOD, {});

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
