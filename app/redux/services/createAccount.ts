import * as fullServiceApi from '../../fullService/api';
import { errorToString } from '../../utils/errorHandler';
import { createAccountAction } from '../actions';
import { store } from '../store';

export const createAccount = async (name: string): Promise<void> => {
  try {
    // Attempt create
    const { account } = await fullServiceApi.createAccount({ name });
    const { accountId } = account;

    const { walletStatus } = await fullServiceApi.getWalletStatus();
    const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
    const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
      accountId,
    });
    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });

    store.dispatch(
      createAccountAction(
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
