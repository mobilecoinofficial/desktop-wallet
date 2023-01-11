import { some } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import * as fullServiceApi from '../../fullService/api';
import { decryptContacts, encryptContacts } from '../../services';
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

  let contacts = await decryptContacts(secretKey);
  // required for backwards compatibility. pre-1.7 contacts did not have an ID field
  const hasContactsWithoutID = some(contacts, (c) => !c.id);
  if (hasContactsWithoutID) {
    contacts = contacts.map((contact) => {
      if (contact.id) {
        return contact;
      }
      return {
        ...contact,
        id: uuidv4(),
      };
    });

    await encryptContacts(contacts, secretKey);
  }

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
