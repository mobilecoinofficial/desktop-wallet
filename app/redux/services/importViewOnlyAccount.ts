import * as fullServiceApi from '../../fullService/api';
import { ImportViewOnlyAccountParams } from '../../fullService/api/importViewOnlyAccount';
import { errorToString } from '../../utils/errorHandler';
import { importAccountAction } from '../actions';
import { store } from '../store';

// Import the wallet should initialize the basic wallet information
// The wallet status
// Accounts + status
export const importViewOnlyAccount = async (params: ImportViewOnlyAccountParams): Promise<void> => {
  try {
    // Attempt import
    const { account } = await fullServiceApi.importViewOnlyAccount(params);
    const { accountId } = account;

    // Get basic wallet information
    const { walletStatus } = await fullServiceApi.getWalletStatus();
    const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
    const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
      accountId,
    });
    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });

    store.dispatch(
      importAccountAction(
        accountIds,
        accountMap,
        addressIds,
        addressMap,
        account,
        balanceStatus,
        walletStatus
      )
    );
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};
