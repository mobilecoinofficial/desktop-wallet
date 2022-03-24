import { SjclCipherEncrypted } from 'sjcl';

import {
  Accounts,
  Addresses,
  Contact,
  GiftCode,
  PendingSecrets,
  SelectedAccount,
  StringUInt64,
  TransactionLogs,
  Txos,
  WalletStatus,
} from '../../types';
import sameObject from '../../utils/sameObject';
import {
  INITIALIZE,
  InitializeAction,
  FETCH_ALL_TXOS_FOR_ACCOUNT,
  FetchAllTxosForAccountAction,
  ADD_ACCOUNT,
  AddAccountAction,
  DELETE_ACCOUNT,
  DeleteAccountAction,
  DELETE_WALLET,
  IMPORT_ACCOUNT,
  ImportAccountAction,
  CREATE_ACCOUNT,
  CreateAccountAction,
  CREATE_WALLET,
  CreateWalletAction,
  UPDATE_GIFT_CODES,
  UpdateGiftCodesAction,
  CONFIRM_ENTROPY_KNOWN,
  SELECT_ACCOUNT,
  SelectAccountAction,
  UNLOCK_WALLET,
  UnlockWalletAction,
  UPDATE_CONTACTS,
  UpdateContactsAction,
  UPDATE_FEE_PMOB,
  UpdateFeePmobAction,
  UPDATE_PASSWORD,
  UpdatePasswordAction,
  UPDATE_PIN,
  UpdatePinAction,
  UPDATE_WALLET_STATUS,
  UpdateStatusAction,
  Action,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_STARTED,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_SUCCESS,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_FAILURE,
  FetchAllTransactionLogsForAccountSuccessAction,
  FetchAllTransactionLogsForAccountFailureAction,
} from '../actions';

export type ReduxStoreState = {
  accounts: Accounts;
  addingAccount: boolean;
  addresses: Addresses;
  contacts: Contact[];
  giftCodes: GiftCode[] | null;
  encryptedPassphrase: SjclCipherEncrypted | undefined;
  error: Error | undefined;
  feePmob: StringUInt64;
  isAuthenticated: boolean;
  isEntropyKnown: boolean;
  isInitialized: boolean;
  isPinRequired: boolean;
  offlineModeEnabled: boolean;
  pendingSecrets: PendingSecrets | null;
  secretKey: string;
  selectedAccount: SelectedAccount;
  transactionLogs: TransactionLogs | null;
  pinThresholdPmob: StringUInt64;
  pin: string | undefined;
  txos: Txos;
  walletStatus: WalletStatus;
};

export const initialReduxStoreState: ReduxStoreState = {
  accounts: { accountIds: [], accountMap: {} },
  addingAccount: false,
  addresses: { addressIds: [], addressMap: {} },
  contacts: [],
  encryptedPassphrase: undefined,
  error: undefined,
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
  selectedAccount: {
    account: {
      accountId: '',
      firstBlockIndex: '',
      key_derivation_version: '',
      mainAddress: '',
      name: '',
      nextSubaddressIndex: '',
      object: 'account' as const,
      recoveryMode: false,
    },
    balanceStatus: {
      isSynced: false,
      orphanedPmob: '',
      pendingPmob: '',
      secretedPmob: '',
      spentPmob: '',
      unspentPmob: '',
    },
  },
  transactionLogs: null,
  txos: { txoIds: [], txoMap: {} },
  walletStatus: {
    accountIds: [],
    accountMap: {},
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

export const reducer = (
  state: ReduxStoreState = initialReduxStoreState,
  action: Action
): ReduxStoreState => {
  switch (action.type) {
    case INITIALIZE: {
      const { encryptedPassphrase, isAuthenticated } = (action as InitializeAction).payload;
      return {
        ...state,
        encryptedPassphrase,
        isAuthenticated,
        isInitialized: true,
      };
    }

    case FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_STARTED: {
      return {
        ...state,
      };
    }

    case FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_SUCCESS: {
      const { transactionLogs } = (action as FetchAllTransactionLogsForAccountSuccessAction)
        .payload;
      return {
        ...state,
        transactionLogs,
      };
    }

    case FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_FAILURE: {
      const { error } = (action as FetchAllTransactionLogsForAccountFailureAction).payload;
      return {
        ...state,
        error,
      };
    }

    case FETCH_ALL_TXOS_FOR_ACCOUNT: {
      const { txos } = (action as FetchAllTxosForAccountAction).payload;
      return {
        ...state,
        txos,
      };
    }

    case ADD_ACCOUNT: {
      const { adding } = (action as AddAccountAction).payload;
      return {
        ...state,
        addingAccount: adding,
      };
    }

    case DELETE_ACCOUNT: {
      const { accounts } = (action as DeleteAccountAction).payload;

      return {
        ...state,
        accounts,
      };
    }

    case DELETE_WALLET: {
      return initialReduxStoreState;
    }

    case IMPORT_ACCOUNT: {
      const { accounts, addresses, selectedAccount, walletStatus } = (action as ImportAccountAction)
        .payload;
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
        action as CreateAccountAction
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
      const { encryptedPassphrase, secretKey } = (action as CreateWalletAction).payload;
      return {
        ...state,
        encryptedPassphrase,
        secretKey,
      };
    }

    case UPDATE_GIFT_CODES: {
      const { giftCodes } = (action as UpdateGiftCodesAction).payload;
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
      const { accounts, addresses, selectedAccount } = (action as SelectAccountAction).payload;
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
        selectedAccount,
        walletStatus,
      } = (action as UnlockWalletAction).payload;

      return {
        ...state,
        contacts,
        isAuthenticated: true,
        isPinRequired,
        offlineModeEnabled,
        pin,
        pinThresholdPmob,
        secretKey,
        selectedAccount,
        walletStatus,
      };
    }

    case UPDATE_CONTACTS: {
      const { contacts } = (action as UpdateContactsAction).payload;
      return {
        ...state,
        contacts,
      };
    }

    case UPDATE_FEE_PMOB: {
      const { feePmob } = (action as UpdateFeePmobAction).payload;
      return {
        ...state,
        feePmob,
      };
    }

    case UPDATE_PASSWORD: {
      const { encryptedPassphrase, secretKey } = (action as UpdatePasswordAction).payload;
      return {
        ...state,
        encryptedPassphrase,
        secretKey,
      };
    }

    case UPDATE_PIN: {
      const { pin, pinThresholdPmob } = (action as UpdatePinAction).payload;
      return {
        ...state,
        isPinRequired: false,
        pin,
        pinThresholdPmob,
      };
    }

    case UPDATE_WALLET_STATUS: {
      const { selectedAccount, walletStatus } = (action as UpdateStatusAction).payload;
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
