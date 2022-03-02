import React, { createContext, useEffect, useReducer, useState } from 'react';
import type { FC, ReactNode } from 'react';

import type { SjclCipherEncrypted } from 'sjcl';

import * as fullServiceApi from '../fullService/api';
import { fetchAllTransactionLogsForAccount } from '../services/fetchAllTransactionLogsForAccount.service';
import type { Accounts } from '../types/Account.d';
import type { Addresses } from '../types/Address.d';
import type { Contact } from '../types/Contact.d';
import type { GiftCode } from '../types/GiftCode.d';
import type { PendingSecrets } from '../types/PendingSecrets.d';
import type { SelectedAccount } from '../types/SelectedAccount.d';
import type { StringUInt64 } from '../types/SpecialStrings.d';
import type { TransactionLogs } from '../types/TransactionLog.d';
import type { Txos } from '../types/Txo.d';
import type { WalletStatus } from '../types/WalletStatus.d';
import * as localStore from '../utils/LocalStore';
import sameObject from '../utils/sameObject';
//
// NEW DUCKS-STYLE ACTIONS, ACTION BUILDERS, AND CONSTANTS
//
import { ADD_ACCOUNT, AddAccountActionType } from './actions/addAccount.action';
import {
  CONFIRM_ENTROPY_KNOWN,
  ConfirmEntropyKnownActionType,
} from './actions/confirmEntropyKnown.action';
import { CREATE_ACCOUNT, CreateAccountActionType } from './actions/createAccount.action';
import { CREATE_WALLET, CreateWalletActionType } from './actions/createWallet.action';
import { DELETE_ACCOUNT, DeleteAccountActionType } from './actions/deleteAccount.action';
import { DELETE_WALLET, DeleteWalletActionType } from './actions/deleteWallet.action';
import {
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT,
  FetchAllTransactionLogsForAccountActionType,
  fetchAllTransactionLogsForAccountAction,
} from './actions/fetchAllTransactionLogsForAccount.action';
import {
  FETCH_ALL_TXOS_FOR_ACCOUNT,
  FetchAllTxosForAccountActionType,
} from './actions/fetchAllTxosForAccount.action';
import { IMPORT_ACCOUNT, ImportAccountActionType } from './actions/importAccount.action';
import { INITIALIZE, initializeAction, InitializeActionType } from './actions/initialize.action';
import { SELECT_ACCOUNT, SelectAccountActionType } from './actions/selectAccount.action';
import { UNLOCK_WALLET, UnlockWalletActionType } from './actions/unlockWallet.action';
import { UPDATE_CONTACTS, UpdateContactsActionType } from './actions/updateContacts.action';
import { UPDATE_FEE_PMOB, UpdateFeePmobActionType } from './actions/updateFeePmob.action';
import { UPDATE_GIFT_CODES, UpdateGiftCodesActionType } from './actions/updateGiftCodes.action';
import { UPDATE_PASSPHRASE, UpdatePassphraseActionType } from './actions/updatePassphrase.action';
import { UPDATE_PIN, UpdatePinActionType } from './actions/updatePin.action';
import {
  UPDATE_WALLET_STATUS,
  updateStatusAction,
  UpdateStatusActionType,
} from './actions/updateStatus.action';

export interface FullServiceState {
  accounts: Accounts;
  addingAccount: boolean;
  addresses: Addresses;
  contacts: Contact[];
  giftCodes: GiftCode[] | null;
  encryptedPassphrase: SjclCipherEncrypted | undefined;
  feePmob: StringUInt64;
  isAuthenticated: boolean;
  isEntropyKnown: boolean;
  isInitialized: boolean;
  isPinRequired: boolean;
  offlineModeEnabled: boolean;
  pendingSecrets: PendingSecrets | null;
  secretKey: string;
  selectedAccount: SelectedAccount | null;
  transactionLogs: TransactionLogs | null;
  pinThresholdPmob: StringUInt64;
  pin: string | undefined;
  txos: Txos;
  walletStatus: WalletStatus;
}

interface FullServiceProviderProps {
  children: ReactNode;
}

type Action =
  | AddAccountActionType
  | ConfirmEntropyKnownActionType
  | CreateAccountActionType
  | CreateWalletActionType
  | DeleteAccountActionType
  | DeleteWalletActionType
  | FetchAllTransactionLogsForAccountActionType
  | FetchAllTxosForAccountActionType
  | ImportAccountActionType
  | InitializeActionType
  | SelectAccountActionType
  | UnlockWalletActionType
  | UpdateContactsActionType
  | UpdateFeePmobActionType
  | UpdateGiftCodesActionType
  | UpdatePassphraseActionType
  | UpdatePinActionType
  | UpdateStatusActionType;

// TODO -- check if initialized state is the only time thse values are null
// If so, the state type should either be the expected object or empty
// instead of key key with type | null
// TODO -- maybe remove object key from types!
const initialFullServiceState: FullServiceState = {
  accounts: { accountIds: [], accountMap: {} },
  addingAccount: false,
  addresses: { addressIds: [], addressMap: {} },
  contacts: [],
  encryptedPassphrase: undefined,
  feePmob: '',
  giftCodes: null,
  isAuthenticated: false,
  isEntropyKnown: false,
  isInitialized: false,
  isPinRequired: false,
  offlineModeEnabled: false,
  pendingSecrets: null,
  pin: undefined,
  pinThresholdPmob: '',
  secretKey: '',
  selectedAccount: null,
  transactionLogs: null,
  txos: { txoIds: [], txoMap: {} },
  walletStatus: {
    isSyncedAll: false,
    localBlockHeight: '',
    minSyncedBlockIndex: '',
    networkBlockHeight: '',
    totalOrphanedPmob: '',
    totalPendingPmob: '',
    totalSecretedPmob: '',
    totalSpentPmob: '',
    totalUnspentPmob: '',
  },
};

const reducer = (state: FullServiceState, action: Action): FullServiceState => {
  switch (action.type) {
    case INITIALIZE: {
      const { encryptedPassphrase, isAuthenticated } = (action as InitializeActionType).payload;
      return {
        ...state,
        encryptedPassphrase,
        isAuthenticated,
        isInitialized: true,
      };
    }

    case FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT: {
      const { transactionLogs } = (action as FetchAllTransactionLogsForAccountActionType).payload;
      return {
        ...state,
        transactionLogs,
      };
    }

    case FETCH_ALL_TXOS_FOR_ACCOUNT: {
      const { txos } = (action as FetchAllTxosForAccountActionType).payload;
      return {
        ...state,
        txos,
      };
    }

    case ADD_ACCOUNT: {
      const { adding } = (action as AddAccountActionType).payload;
      return {
        ...state,
        addingAccount: adding,
      };
    }

    case DELETE_ACCOUNT: {
      const { accounts } = (action as DeleteAccountActionType).payload;

      return {
        ...state,
        accounts,
      };
    }

    case DELETE_WALLET: {
      return initialFullServiceState;
    }

    case IMPORT_ACCOUNT: {
      const { accounts, addresses, selectedAccount, walletStatus } = (
        action as ImportAccountActionType
      ).payload;
      return {
        ...state,
        accounts,
        addingAccount: false,
        addresses,
        isAuthenticated: true,
        isEntropyKnown: true,
        selectedAccount,
        walletStatus,
      };
    }

    case CREATE_ACCOUNT: {
      const { accounts, addresses, pendingSecrets, selectedAccount, walletStatus } = (
        action as CreateAccountActionType
      ).payload;
      return {
        ...state,
        accounts,
        addingAccount: false,
        addresses,
        isAuthenticated: true,
        isEntropyKnown: false,
        pendingSecrets,
        selectedAccount,
        walletStatus,
      };
    }

    case CREATE_WALLET: {
      const { encryptedPassphrase, secretKey } = (action as CreateWalletActionType).payload;
      return {
        ...state,
        encryptedPassphrase,
        secretKey,
      };
    }

    case UPDATE_GIFT_CODES: {
      const { giftCodes } = (action as UpdateGiftCodesActionType).payload;
      return {
        ...state,
        giftCodes,
      };
    }

    case CONFIRM_ENTROPY_KNOWN: {
      return {
        ...state,
        isEntropyKnown: true,
        pendingSecrets: null, // Clear secrets from in-memory
      };
    }

    case SELECT_ACCOUNT: {
      const { accounts, addresses, selectedAccount } = (action as SelectAccountActionType).payload;
      return {
        ...state,
        accounts,
        addingAccount: false,
        addresses,
        isEntropyKnown: true,
        selectedAccount,
      };
    }

    case UNLOCK_WALLET: {
      const {
        contacts,
        isPinRequired,
        offlineModeEnabled,
        pin,
        pinThresholdPmob,
        secretKey,
        walletStatus,
      } = (action as UnlockWalletActionType).payload;

      return {
        ...state,
        contacts,
        isAuthenticated: true,
        isPinRequired,
        offlineModeEnabled,
        pin,
        pinThresholdPmob,
        secretKey,
        walletStatus,
      };
    }

    case UPDATE_CONTACTS: {
      const { contacts } = (action as UpdateContactsActionType).payload;
      return {
        ...state,
        contacts,
      };
    }

    case UPDATE_FEE_PMOB: {
      const { feePmob } = (action as UpdateFeePmobActionType).payload;
      return {
        ...state,
        feePmob,
      };
    }

    case UPDATE_PASSPHRASE: {
      const { encryptedPassphrase, secretKey } = (action as UpdatePassphraseActionType).payload;
      return {
        ...state,
        encryptedPassphrase,
        secretKey,
      };
    }

    case UPDATE_PIN: {
      const { pin, pinThresholdPmob } = (action as UpdatePinActionType).payload;
      return {
        ...state,
        isPinRequired: false,
        pin,
        pinThresholdPmob,
      };
    }

    case UPDATE_WALLET_STATUS: {
      const { selectedAccount, walletStatus } = (action as UpdateStatusActionType).payload;
      return sameObject(selectedAccount, state.selectedAccount) &&
        sameObject(walletStatus, state.walletStatus)
        ? state
        : {
            ...state,
            selectedAccount,
            walletStatus,
          };
    }

    default: {
      return { ...state };
    }
  }
};

const FullServiceContext = createContext<FullServiceState>({ ...initialFullServiceState });

export const store = {
  dispatch: (() => {}) as React.Dispatch<Action>,
  state: {} as FullServiceState,
};

export const wipeAccountContactAndPin = async (): Promise<void> => {
  // Wipe Contacts and PIN
  localStore.deleteEncryptedContacts();
  localStore.deletePinThresholdPmob();
  localStore.deleteEncryptedPin();
};

export const FullServiceProvider: FC<FullServiceProviderProps> = ({
  children,
}: FullServiceProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialFullServiceState);
  store.state = state;
  store.dispatch = dispatch;

  const [fetchUpdatesTimer, setFetchUpdatesTimer] = useState<null | NodeJS.Timer>(null);

  // Initialize App On Startup
  useEffect(() => {
    try {
      const encryptedPassphrase = localStore.getEncryptedPassphrase();
      dispatch(initializeAction(encryptedPassphrase));
    } catch (err) {
      dispatch(initializeAction(undefined));
    }
  }, []);

  useEffect(() => {
    if (fetchUpdatesTimer !== null) {
      clearInterval(fetchUpdatesTimer);
    }

    const { selectedAccount } = state;

    if (selectedAccount === undefined || selectedAccount === null) {
      return;
    }

    const { accountId } = selectedAccount.account;

    const fetchBalance = async () => {
      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });
      const { walletStatus } = await fullServiceApi.getWalletStatus();
      dispatch(updateStatusAction(selectedAccount.account, balanceStatus, walletStatus));
    };

    const fetchLogs = async () => {
      const transactionLogs = await fetchAllTransactionLogsForAccount(accountId);
      dispatch(fetchAllTransactionLogsForAccountAction(transactionLogs));
    };

    setFetchUpdatesTimer(
      setInterval(() => {
        fetchBalance();
        fetchLogs();
      }, 10000)
    );
  }, [state]);

  return <FullServiceContext.Provider value={{ ...state }}>{children}</FullServiceContext.Provider>;
};

export default FullServiceContext;
