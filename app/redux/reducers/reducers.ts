import { SjclCipherEncrypted } from 'sjcl';

import { TOKENS } from '../../constants/tokens';
import {
  Accounts,
  Addresses,
  Contact,
  GiftCode,
  SelectedAccount,
  StringUInt64,
  TransactionLogs,
  Txos,
  WalletStatus,
} from '../../types';
import { Fees } from '../../types/NetworkStatus';
import sameObject from '../../utils/sameObject';
import {
  INITIALIZE,
  InitializeAction,
  GET_ALL_TXOS_FOR_ACCOUNT,
  GetAllTxosForAccountAction,
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
  GET_ALL_GIFT_CODES,
  GetAllGiftCodesAction,
  CONFIRM_ENTROPY_KNOWN,
  SELECT_ACCOUNT,
  SelectAccountAction,
  UNLOCK_WALLET,
  UnlockWalletAction,
  UPDATE_CONTACTS,
  UpdateContactsAction,
  GET_FEE_PMOB,
  GetFeesAction,
  UPDATE_PASSWORD,
  UpdatePasswordAction,
  UPDATE_PIN,
  UpdatePinAction,
  UPDATE_WALLET_STATUS,
  UpdateStatusAction,
  Action,
  GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT,
  GetAllTransactionLogsForAccountAction,
  SET_TOKEN_ID,
  SetTokenIdAction,
} from '../actions';

export type ReduxStoreState = {
  accounts: Accounts;
  addingAccount: boolean;
  addresses: Addresses;
  contacts: Contact[];
  giftCodes: GiftCode[] | null;
  encryptedPassword: SjclCipherEncrypted | undefined;
  fees: Fees;
  isAuthenticated: boolean;
  isEntropyKnown: boolean;
  isInitialized: boolean;
  isPinRequired: boolean;
  offlineModeEnabled: boolean;
  secretKey: string;
  selectedAccount: SelectedAccount;
  transactionLogs: TransactionLogs | null;
  pinThresholdPmob: StringUInt64;
  pin: string | undefined;
  txos: Txos;
  walletStatus: WalletStatus;
  tokenId: number;
};

export const initialReduxStoreState: ReduxStoreState = {
  accounts: { accountIds: [], accountMap: {} },
  addingAccount: false,
  addresses: { addressIds: [], addressMap: {} },
  contacts: [],
  encryptedPassword: undefined,
  fees: {},
  giftCodes: null,
  isAuthenticated: false,
  isEntropyKnown: false,
  isInitialized: false,
  isPinRequired: false,
  offlineModeEnabled: false,
  pin: undefined,
  pinThresholdPmob: '',
  secretKey: '',
  selectedAccount: {
    account: {
      accountId: '',
      firstBlockIndex: '',
      mainAddress: '',
      name: '',
      nextSubaddressIndex: '',
      recoveryMode: false,
    },
    balanceStatus: {
      balancePerToken: {
        [TOKENS.MOB.id]: {
          orphanedPmob: '',
          pendingPmob: '',
          secretedPmob: '',
          spentPmob: '',
          unspentPmob: '',
        },
        [TOKENS.EUSD.id]: {
          orphanedPmob: '',
          pendingPmob: '',
          secretedPmob: '',
          spentPmob: '',
          unspentPmob: '',
        },
      },
      isSynced: false,
    },
  },
  tokenId: TOKENS.MOB.id,
  transactionLogs: null,
  txos: { txoIds: [], txoMap: {} },
  walletStatus: {
    balancePerToken: {
      [TOKENS.MOB.id]: {
        orphanedPmob: '',
        pendingPmob: '',
        secretedPmob: '',
        spentPmob: '',
        unspentPmob: '',
      },
      [TOKENS.EUSD.id]: {
        orphanedPmob: '',
        pendingPmob: '',
        secretedPmob: '',
        spentPmob: '',
        unspentPmob: '',
      },
    },
    isSyncedAll: false,
    localBlockHeight: '',
    minSyncedBlockIndex: '',
    networkBlockHeight: '',
  },
};

export const reducer = (
  state: ReduxStoreState = initialReduxStoreState,
  action: Action
): ReduxStoreState => {
  switch (action.type) {
    case ADD_ACCOUNT: {
      const { adding } = (action as AddAccountAction).payload;
      return {
        ...state,
        addingAccount: adding,
      };
    }

    case CONFIRM_ENTROPY_KNOWN: {
      return {
        ...state,
        isEntropyKnown: true,
      };
    }

    case CREATE_ACCOUNT: {
      const { accounts, addresses, selectedAccount, walletStatus } = (action as CreateAccountAction)
        .payload;
      return {
        ...state,
        accounts,
        addingAccount: false,
        addresses,
        isAuthenticated: true,
        isEntropyKnown: false,
        selectedAccount,
        walletStatus,
      };
    }

    case CREATE_WALLET: {
      const { encryptedPassword, secretKey } = (action as CreateWalletAction).payload;
      return {
        ...state,
        encryptedPassword,
        secretKey,
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

    case GET_ALL_GIFT_CODES: {
      const { giftCodes } = (action as GetAllGiftCodesAction).payload;
      return {
        ...state,
        giftCodes,
      };
    }

    case GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT: {
      const { transactionLogs } = (action as GetAllTransactionLogsForAccountAction).payload;
      return {
        ...state,
        transactionLogs,
      };
    }

    case GET_ALL_TXOS_FOR_ACCOUNT: {
      const { txos } = (action as GetAllTxosForAccountAction).payload;
      return {
        ...state,
        txos,
      };
    }

    case GET_FEE_PMOB: {
      const { fees } = (action as GetFeesAction).payload;
      return {
        ...state,
        fees,
      };
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

    case INITIALIZE: {
      const { encryptedPassword, isAuthenticated } = (action as InitializeAction).payload;
      return {
        ...state,
        encryptedPassword,
        isAuthenticated,
        isInitialized: true,
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
        addingAccount,
        contacts,
        isPinRequired,
        offlineModeEnabled,
        pin,
        pinThresholdPmob,
        secretKey,
        selectedAccount,
        walletStatus,
        accounts,
      } = (action as UnlockWalletAction).payload;

      return {
        ...state,
        accounts,
        addingAccount,
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

    case UPDATE_PASSWORD: {
      const { encryptedPassword, secretKey } = (action as UpdatePasswordAction).payload;
      return {
        ...state,
        encryptedPassword,
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
      const { selectedAccount } = (action as UpdateStatusAction).payload;
      return sameObject(selectedAccount, state.selectedAccount)
        ? state
        : {
            ...state,
            selectedAccount,
          };
    }

    case SET_TOKEN_ID: {
      const { tokenId } = (action as SetTokenIdAction).payload;
      return {
        ...state,
        tokenId,
      };
    }

    default: {
      return { ...state };
    }
  }
};
