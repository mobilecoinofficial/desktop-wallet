import * as fullServiceApi from '../../fullService/api';
import { decryptContacts } from '../../services';
import * as localStore from '../../utils/LocalStore';
import { validatePassphrase } from '../../utils/authentication';
import { decrypt } from '../../utils/encryption';
import { unlockWalletAction } from '../actions';
import { initialReduxStoreState } from '../reducers/reducers';
import { store } from '../store';
import { getFees } from './getFees';

export const unlockWallet = async (password: string, startInOfflineMode = false): Promise<void> => {
  const { encryptedPassword } = store.getState();
  if (encryptedPassword === undefined) {
    throw new Error('encryptedPassword assertion failed');
  }

  const { secretKey } = await validatePassphrase(password, encryptedPassword);

  const contacts = await decryptContacts(secretKey);

  const { walletStatus } = await fullServiceApi.getWalletStatus();
  const accounts = await fullServiceApi.getAllAccounts();

  await getFees();

  const firstAccountId = (accounts.accountIds ?? [])[0];
  const firstAccount = firstAccountId && (accounts.accountMap ?? {})[firstAccountId];

  let { selectedAccount, addingAccount } = initialReduxStoreState;
  // if an account already exists, use the default to the first account available. Otherwise, use the initial state
  if (firstAccountId && firstAccount) {
    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({
      accountId: firstAccountId,
    });

    selectedAccount = {
      account: firstAccount,
      balanceStatus,
    };
  } else {
    addingAccount = true;
  }

  let isPinRequired = false;
  let pin;

  const encryptedPin = localStore.getEncryptedPin();

  const pinThresholdPmob = localStore.getPinThresholdPmob();

  if (encryptedPin === undefined) {
    isPinRequired = true;
  } else {
    pin = (await decrypt(encryptedPin, secretKey)) as string;
  }
  store.dispatch(
    unlockWalletAction(
      addingAccount,
      contacts,
      isPinRequired,
      pin,
      pinThresholdPmob,
      secretKey,
      selectedAccount,
      walletStatus,
      startInOfflineMode,
      accounts
    )
  );
};
