import * as fullServiceApi from '../../fullService/api';
import { errorToString } from '../../utils/errorHandler';
import { FogInfo } from '../../utils/fogConstants';
import { importAccountAction } from '../actions';
import { store } from '../store';

// Import the wallet should initialize the basic wallet information
// The wallet status
// Accounts + status
export const importAccount = async (
  name: string | null,
  mnemonic: string,
  fogInfo?: FogInfo
): Promise<void> => {
  try {
    // Attempt import
    const { account } = await fullServiceApi.importAccount({
      fogInfo,
      key_derivation_version: '2',
      mnemonic,
      name,
    });
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

// Import the wallet should initalize the basic wallet information
// The wallet status
// Accounts + status
export const importLegacyAccount = async (
  name: string | null,
  entropy: string,
  fogInfo?: FogInfo
): Promise<void> => {
  try {
    // await wipeAccountContactAndPin();

    // Attempt import
    const { account } = await fullServiceApi.importLegacyAccount({ entropy, fogInfo, name });
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
