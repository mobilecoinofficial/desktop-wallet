import React, { createContext, useEffect, useReducer } from 'react';
import type { FC, ReactNode } from 'react';

import { SjclCipherEncrypted } from 'sjcl';

import * as fullServiceApi from '../fullService/api';
import type { BuildGiftCodeParams, BuildGiftCodeResult } from '../fullService/api/buildGiftCode';
import type { BuildTransactionParams } from '../fullService/api/buildTransaction';
import type {
  CheckGiftCodeStatusParams,
  CheckGiftCodeStatusResult,
} from '../fullService/api/checkGiftCodeStatus';
import type { ClaimGiftCodeParams, ClaimGiftCodeResult } from '../fullService/api/claimGiftCode';
import type { RemoveAccountParams, RemoveAccountResult } from '../fullService/api/removeAccount';
import type { SubmitGiftCodeParams, SubmitGiftCodeResult } from '../fullService/api/submitGiftCode';
import decryptContacts from '../models/Contact/decryptContacts';
import deleteAllContacts from '../models/Contact/deleteAllContacts';
import encryptContacts from '../models/Contact/encryptContacts';
import Account, { Accounts } from '../types/Account';
import type { Addresses } from '../types/Address';
import type BalanceStatus from '../types/BalanceStatus';
import Contact from '../types/Contact';
import type GiftCode from '../types/GiftCode';
import type { StringHex, StringUInt64 } from '../types/SpecialStrings';
import type { TransactionLogs } from '../types/TransactionLog';
import type TxProposal from '../types/TxProposal';
import type { Txos } from '../types/Txo';
import type WalletStatus from '../types/WalletStatus';
import * as localStore from '../utils/LocalStore';
import { encryptAndStorePassphrase, validatePassphrase } from '../utils/authentication';
import { decrypt, encrypt } from '../utils/encryption';
import sameObject from '../utils/sameObject';

type PendingSecrets = {
  entropy: StringHex;
  mnemonic: string;
};

type SelectedAccount = {
  account: Account;
  balanceStatus: BalanceStatus;
};

interface FullServiceState {
  accounts: Accounts;
  addresses: Addresses;
  contacts: Contact[];
  giftCodes: GiftCode[] | null;
  encryptedPassphrase: SjclCipherEncrypted | undefined;
  isAuthenticated: boolean;
  isEntropyKnown: boolean;
  isInitialized: boolean;
  isPinRequired: boolean;
  pendingSecrets: PendingSecrets | null;
  secretKey: string;
  selectedAccount: SelectedAccount;
  transactionLogs: TransactionLogs | null;
  pinThresholdPmob: StringUInt64;
  pin: string | undefined;
  txos: Txos;
  walletStatus: WalletStatus;
}

// TODO - context can be broken down into seperate files
export interface FullServiceContextValue extends FullServiceState {
  assignAddressForAccount: (x: unknown) => Promise<unknown>;
  buildGiftCode: (buildGiftCodeParams: BuildGiftCodeParams) => Promise<BuildGiftCodeResult | void>; // include object
  buildTransaction: (buildTransactionParams: BuildTransactionParams) => Promise<TxProposal | void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  checkGiftCodeStatus: (
    checkGiftCodeStatusParams: CheckGiftCodeStatusParams
  ) => Promise<CheckGiftCodeStatusResult | void>;
  claimGiftCode: (claimGiftCodeParams: ClaimGiftCodeParams) => Promise<ClaimGiftCodeResult | void>;
  confirmEntropyKnown: () => void;
  createAccount: (accountName: string | null, passphrase: string) => Promise<void>;
  deleteStoredGiftCodeB58: (storedGiftCodeB58: string) => void;
  fetchAllTransactionLogsForAccount: (accountId: StringHex) => void;
  fetchAllTxosForAccount: (accountId: StringHex) => void;
  importAccount: (
    accountName: string | null,
    mnemonic: string,
    passphrase: string
  ) => Promise<void>;
  importLegacyAccount: (
    accountName: string | null,
    entropy: string,
    passphrase: string
  ) => Promise<void>;
  removeAccount: (removeAccountParams: RemoveAccountParams) => Promise<RemoveAccountResult | void>;
  retrieveEntropy: (passphrase: string) => Promise<string | void>;
  setPin: (pin: string, pinThresholdPmob: StringUInt64, passphrase?: string) => Promise<void>;
  submitGiftCode: (
    submitGiftCodeParams: SubmitGiftCodeParams
  ) => Promise<SubmitGiftCodeResult | void>;
  submitTransaction: (txProposal: TxProposal) => Promise<void>;
  unlockWallet: (passphrase: string) => Promise<void>;
  updateContacts: (contacts: Contact[]) => void;
}

interface FullServiceProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    encryptedPassphrase: SjclCipherEncrypted | undefined;
    isAuthenticated: boolean;
  };
};

type UpdateGiftCodesAction = {
  type: 'UPDATE_GIFT_CODES';
  payload: {
    giftCodes: GiftCode[];
  };
};

type ConfirmEntropyKnownAction = {
  type: 'CONFIRM_ENTROPY_KNOWN';
};

type FetchBalanceAction = {
  type: 'FETCH_BALANCE';
  payload: {
    balance: bigint;
  };
};

type FetchAllTransactionLogsForAccountAction = {
  type: 'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT';
  payload: {
    transactionLogs: TransactionLogs;
  };
};

type FetchAllTxosForAccountAction = {
  type: 'FETCH_ALL_TXOS_FOR_ACCOUNT';
  payload: {
    txos: Txos;
  };
};

type CreateAccountAction = {
  type: 'CREATE_ACCOUNT';
  payload: {
    accounts: Accounts;
    addresses: Addresses;
    encryptedPassphrase: SjclCipherEncrypted;
    pendingSecrets: PendingSecrets;
    secretKey: string;
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
};

// TODO - we should move wallet status under account
type ImportAccountAction = {
  type: 'IMPORT_ACCOUNT';
  payload: {
    accounts: Accounts;
    addresses: Addresses;
    encryptedPassphrase: SjclCipherEncrypted;
    secretKey: string;
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
};

type SyncLedgerAction = {
  type: 'SYNC_LEDGER';
  payload: {
    localBlockIndex: string;
    networkHighestBlockIndex: string;
    nextBlock: string;
  };
};

type UnlockWalletAction = {
  type: 'UNLOCK_WALLET';
  payload: {
    accounts: Accounts;
    addresses: Addresses;
    contacts: Contact[];
    isPinRequired: boolean;
    pin: string;
    pinThresholdPmob: StringUInt64;
    secretKey: string;
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
};

type UpdateContacts = {
  type: 'UPDATE_CONTACTS';
  payload: {
    contacts: Contact[];
  };
};

type UpdatePassphrase = {
  type: 'UPDATE_PASSPHRASE';
  payload: {
    encryptedPassphrase: SjclCipherEncrypted;
  };
};

type UpdatePin = {
  type: 'UPDATE_PIN';
  payload: {
    pin: string;
    pinThresholdPmob: StringUInt64;
  };
};

type UpdateStatusAction = {
  type: 'UPDATE_STATUS';
  payload: {
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
};

type Action =
  | ConfirmEntropyKnownAction
  | CreateAccountAction
  | FetchAllTransactionLogsForAccountAction
  | FetchAllTxosForAccountAction
  | FetchBalanceAction
  | ImportAccountAction
  | InitializeAction
  | SyncLedgerAction
  | UnlockWalletAction
  | UpdateContacts
  | UpdateGiftCodesAction
  | UpdatePassphrase
  | UpdatePin
  | UpdateStatusAction;

// TODO -- check if initialized state is the only time thse values are null
// If so, the state type should either be the expected object or empty
// instead of key key with type | null
// TODO -- maybe remove object key from types!
const initialFullServiceState: FullServiceState = {
  accounts: { accountIds: [], accountMap: {} },
  addresses: { addressIds: [], addressMap: {} },
  contacts: [],
  encryptedPassphrase: undefined,
  isAuthenticated: false,
  isEntropyKnown: false,
  isInitialized: false,
  isPinRequired: false,
  secretKey: '',
  selectedAccount: {
    account: {
      accountHeight: '',
      accountId: '',
      accountKey: {
        fogAuthoritySpki: '',
        fogReportId: '',
        fogReportUrl: '',
        spendPrivateKey: '',
        viewPrivateKey: '',
      },
      entropy: '',
      mainAddress: '',
      name: null,
      nextSubaddressIndex: '',
      // offsetCount: 0,
      recoveryMode: false,
    },
    balanceStatus: {
      accountBlockCount: '',
      isSynced: false,
      localBlockCount: '',
      networkBlockCount: '',
      orphanedPmob: '',
      pendingPmob: '',
      secretedPmob: '',
      spentPmob: '',
      unspentPmob: '',
    },
  },
  transactionLogs: null,
  walletStatus: {
    isSyncedAll: false,
    localBlockCount: '',
    minSyncedBlockIndex: '',
    networkBlockCount: '',
    networkHeight: '',
    totalOrphanedPmob: '',
    totalPendingPmob: '',
    totalSecretedPmob: '',
    totalSpentPmob: '',
    totalUnspentPmob: '',
  },
};

// TODO - i should clean up this reducer
const reducer = (state: FullServiceState, action: Action): FullServiceState => {
  switch (action.type) {
    case 'INITIALIZE': {
      const { encryptedPassphrase, isAuthenticated } = action.payload;
      // TODO - really, gift codes should be pulled when on the screen, not on startup
      return {
        ...state,
        encryptedPassphrase,
        isAuthenticated,
        isInitialized: true,
      };
    }

    case 'SYNC_LEDGER': {
      const { localBlockIndex, networkHighestBlockIndex, nextBlock } = action.payload;
      return {
        ...state,
        localBlockIndex,
        networkHighestBlockIndex,
        nextBlock,
      };
    }

    case 'FETCH_BALANCE': {
      const { balance } = action.payload;
      return {
        ...state,
        balance,
      };
    }

    case 'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT': {
      const { transactionLogs } = action.payload;
      return {
        ...state,
        transactionLogs,
      };
    }

    case 'FETCH_ALL_TXOS_FOR_ACCOUNT': {
      const { txos } = action.payload;
      return {
        ...state,
        txos,
      };
    }

    case 'IMPORT_ACCOUNT': {
      const {
        accounts,
        addresses,
        encryptedPassphrase,
        secretKey,
        selectedAccount,
        walletStatus,
      } = action.payload;
      return {
        ...state,
        accounts,
        addresses,
        encryptedPassphrase,
        isAuthenticated: true,
        isEntropyKnown: true,
        isPinRequired: true,
        secretKey,
        selectedAccount,
        walletStatus,
      };
    }

    case 'CREATE_ACCOUNT': {
      const {
        accounts,
        addresses,
        encryptedPassphrase,
        pendingSecrets,
        secretKey,
        selectedAccount,
        walletStatus,
      } = action.payload;
      return {
        ...state,
        accounts,
        addresses,
        encryptedPassphrase,
        isAuthenticated: true,
        isEntropyKnown: false,
        isPinRequired: true,
        pendingSecrets,
        secretKey,
        selectedAccount,
        walletStatus,
      };
    }

    case 'UPDATE_GIFT_CODES': {
      const { giftCodes } = action.payload;
      return {
        ...state,
        giftCodes,
      };
    }

    case 'CONFIRM_ENTROPY_KNOWN': {
      return {
        ...state,
        isEntropyKnown: true,
        pendingSecrets: null, // Clear secrets from in-memory
      };
    }

    case 'UNLOCK_WALLET': {
      const {
        accounts,
        addresses,
        contacts,
        isPinRequired,
        pin,
        pinThresholdPmob,
        secretKey,
        selectedAccount,
        walletStatus,
      } = action.payload;
      return {
        ...state,
        accounts,
        addresses,
        contacts,
        isAuthenticated: true,
        isEntropyKnown: true,
        isPinRequired,
        pin,
        pinThresholdPmob,
        secretKey,
        selectedAccount,
        walletStatus,
      };
    }

    case 'UPDATE_CONTACTS': {
      const { contacts } = action.payload;

      return {
        ...state,
        contacts,
      };
    }

    case 'UPDATE_PASSPHRASE': {
      const { encryptedPassphrase } = action.payload;

      return {
        ...state,
        encryptedPassphrase,
      };
    }

    case 'UPDATE_PIN': {
      const { pin, pinThresholdPmob } = action.payload;

      return {
        ...state,
        isPinRequired: false,
        pin,
        pinThresholdPmob,
      };
    }

    case 'UPDATE_STATUS': {
      const { selectedAccount, walletStatus } = action.payload;

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

const FullServiceContext = createContext<FullServiceContextValue>({
  ...initialFullServiceState,
  assignAddressForAccount: () => Promise.resolve(),
  buildGiftCode: () => Promise.resolve(),
  buildTransaction: () => Promise.resolve(),
  changePassword: () => Promise.resolve(),
  checkGiftCodeStatus: () => Promise.resolve(),
  claimGiftCode: () => Promise.resolve(),
  confirmEntropyKnown: () => {},
  createAccount: () => Promise.resolve(),
  deleteStoredGiftCodeB58: () => undefined,
  importAccount: () => Promise.resolve(),
  importLegacyAccount: () => Promise.resolve(),
  removeAccount: () => Promise.resolve(),
  retrieveEntropy: () => Promise.resolve(),
  setPin: () => Promise.resolve(),
  submitGiftCode: () => Promise.resolve(),
  submitTransaction: () => Promise.resolve(),
  unlockWallet: () => Promise.resolve(),
  updateContacts: () => Promise.resolve(),
});

export const FullServiceProvider: FC<FullServiceProviderProps> = ({
  children,
}: FullServiceProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialFullServiceState);

  const assignAddressForAccount = async (x: unknown) => fullServiceApi.assignAddressForAccount(x);

  const buildGiftCode = async (buildGiftCodeParams: BuildGiftCodeParams) =>
    fullServiceApi.buildGiftCode(buildGiftCodeParams);

  // TODO, better error handling
  const buildTransaction = async (buildTransactionParams: BuildTransactionParams) =>
    fullServiceApi.buildTransaction(buildTransactionParams);

  const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
      const { encryptedPassphrase } = state;
      if (encryptedPassphrase === undefined) {
        throw new Error('encryptedPassphrase assertion failed');
      }

      await validatePassphrase(oldPassword, encryptedPassphrase);

      const newEncryptedPassphrase = await encryptAndStorePassphrase(newPassword);

      dispatch({
        payload: { encryptedPassphrase: newEncryptedPassphrase },
        type: 'UPDATE_PASSPHRASE',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const checkGiftCodeStatus = async (checkGiftCodeStatusParams: CheckGiftCodeStatusParams) =>
    fullServiceApi.checkGiftCodeStatus(checkGiftCodeStatusParams);

  const claimGiftCode = async (claimGiftCodeParams: ClaimGiftCodeParams) =>
    fullServiceApi.claimGiftCode(claimGiftCodeParams);

  const confirmEntropyKnown = () => dispatch({ type: 'CONFIRM_ENTROPY_KNOWN' });

  const getAllGiftCodes = async () => {
    const result = await fullServiceApi.getAllGiftCodes();

    dispatch({
      payload: { giftCodes: result.giftCodes },
      type: 'UPDATE_GIFT_CODES',
    });
  };

  const deleteStoredGiftCodeB58 = async (storedGiftCodeB58: string) => {
    try {
      // TO DO - Hook into full service delete gift code API call
      await fullServiceApi.removeGiftCode({ giftCodeB58: storedGiftCodeB58 });
      getAllGiftCodes();

      return '';
    } catch (err) {
      return err.message;
    }
  };

  const removeAccount = async (accountId: string) => {
    try {
      const removed = await fullServiceApi.removeAccount({ accountId });

      return removed;
      // Now we need to reflect the fact that we just removed an account from Full Service
      // wallet_db in our Desktop Wallet's FullServiceContext state to then get passed on
      // to any UI elements that care about it.
      // const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const removeAllAccounts = async (excludedAccountIds: string[]) => {
    try {
      const { accountIds } = await fullServiceApi.getAllAccounts();
      accountIds.forEach(async (accountId) => {
        if (excludedAccountIds.includes(accountId)) {
          return;
        }
        await removeAccount(accountId);
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const createAccount = async (name: string | null, passphrase: string) => {
    try {
      // Wipe Accounts, Contacts, and PIN
      await removeAllAccounts([]);
      deleteAllContacts();
      localStore.deletePinThresholdPmob();
      localStore.deleteEncryptedPin();

      // Attempt create
      const { account } = await fullServiceApi.createAccount({ name });
      const { accountId } = account;

      // Get basic wallet information
      const { accountSecrets: pendingSecrets } = await fullServiceApi.exportAccountSecrets({
        accountId,
      });

      const { walletStatus } = await fullServiceApi.getWalletStatus();
      const { accountIds, accountMap } = walletStatus;
      const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
        accountId,
      });
      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });

      // After successful import, store encryptedPassphrase
      const { encryptedPassphrase, secretKey } = await encryptAndStorePassphrase(passphrase);
      dispatch({
        payload: {
          accounts: {
            accountIds,
            accountMap,
          },
          addresses: {
            addressIds,
            addressMap,
          },
          encryptedPassphrase,
          pendingSecrets,
          secretKey,
          selectedAccount: {
            account,
            balanceStatus,
          },
          walletStatus,
        },
        type: 'CREATE_ACCOUNT',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // Import the wallet should initalize the basic wallet information
  // The wallet status
  // Accounts + status
  const importAccount = async (name: string | null, mnemonic: string, passphrase: string) => {
    try {
      // Wipe Accounts, Contacts, and PIN
      await removeAllAccounts([]);
      deleteAllContacts();
      localStore.deletePinThresholdPmob();
      localStore.deleteEncryptedPin();

      // Attempt import
      const { account } = await fullServiceApi.importAccount({
        keyDerivationVersion: '2',
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

      // After successful import, store encryptedPassphrase
      const { encryptedPassphrase, secretKey } = await encryptAndStorePassphrase(passphrase);

      dispatch({
        payload: {
          accounts: {
            accountIds,
            accountMap,
          },
          addresses: {
            addressIds,
            addressMap,
          },
          encryptedPassphrase,
          secretKey,
          selectedAccount: {
            account,
            balanceStatus,
          },
          walletStatus,
        },
        type: 'IMPORT_ACCOUNT',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // Import the wallet should initalize the basic wallet information
  // The wallet status
  // Accounts + status
  const importLegacyAccount = async (name: string | null, entropy: string, passphrase: string) => {
    try {
      // Wipe Accounts, Contacts, and PIN
      await removeAllAccounts([]);
      deleteAllContacts();
      localStore.deletePinThresholdPmob();
      localStore.deleteEncryptedPin();

      // Attempt import
      const { account } = await fullServiceApi.importLegacyAccount({ entropy, name });
      const { accountId } = account;

      // Get basic wallet information
      const { walletStatus } = await fullServiceApi.getWalletStatus();
      const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
      // const accountId = accountIds[0];
      // const account = accountMap[accountId];

      const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
        accountId,
      });

      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });

      // After successful import, store encryptedPassphrase
      const { encryptedPassphrase, secretKey } = await encryptAndStorePassphrase(passphrase);

      dispatch({
        payload: {
          accounts: {
            accountIds,
            accountMap,
          },
          addresses: {
            addressIds,
            addressMap,
          },
          encryptedPassphrase,
          secretKey,
          selectedAccount: {
            account,
            balanceStatus,
          },
          walletStatus,
        },
        type: 'IMPORT_ACCOUNT',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const fetchAllTransactionLogsForAccount = async (accountId: StringHex) => {
    try {
      // TODO - allow this once we're setup again!
      // Attempt import
      const transactionLogs = await fullServiceApi.getAllTransactionLogsForAccount({
        accountId,
      });

      // TODO add logic to only trigger if different object

      dispatch({
        payload: {
          transactionLogs,
        },
        type: 'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const fetchAllTxosForAccount = async (accountId: StringHex) => {
    try {
      // TODO - allow this once we're setup again!
      // Attempt import
      const txos = await fullServiceApi.getAllTxosForAccount({
        accountId,
      });

      // TODO add logic to only trigger if different object

      dispatch({
        payload: { txos },
        type: 'FETCH_ALL_TXOS_FOR_ACCOUNT',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const retrieveEntropy = async (passphrase: string) => {
    try {
      const { encryptedPassphrase, selectedAccount } = state;
      if (encryptedPassphrase === undefined) {
        throw new Error('encryptedPassphrase assertion failed');
      }

      // TODO - use secretKey returned here to pass to Full-Service to get secrets.
      await validatePassphrase(passphrase, encryptedPassphrase);

      const { accountSecrets } = await fullServiceApi.exportAccountSecrets({
        accountId: selectedAccount.account.accountId,
      });

      return accountSecrets.entropy ?? accountSecrets.mnemonic ?? '';
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const updateContacts = (contacts: Contact[]) => {
    try {
      const { secretKey } = state;
      encryptContacts(contacts, secretKey);
      dispatch({
        payload: {
          contacts,
        },
        type: 'UPDATE_CONTACTS',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // This call does not require a password. It should only be used when no PIN is set.
  const setPin = async (pin: string, pinThresholdPmob: StringUInt64, passphrase?: string) => {
    const { pin: existingPin, secretKey, encryptedPassphrase } = state;

    try {
      if (encryptedPassphrase === undefined) {
        throw new Error('encryptedPassphrase assertion failed');
      }

      if (passphrase) {
        await validatePassphrase(passphrase, encryptedPassphrase);
      } else if (existingPin) {
        // This only triggers if attempting to set pin without passphrase.
        // You cannot overwrite an existing PIN without the correct passphrase!
        throw new Error('PIN already exists');
      }

      // encrypt and save PIN to local store
      const encryptedPin = await encrypt(pin, secretKey);
      localStore.setEncryptedPin(encryptedPin);

      // save threshold to local store
      localStore.setPinThresholdPmob(pinThresholdPmob);

      dispatch({
        payload: {
          pin,
          pinThresholdPmob,
        },
        type: 'UPDATE_PIN',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const submitGiftCode = async (submitGiftCodeParams: SubmitGiftCodeParams) => {
    try {
      await fullServiceApi.submitGiftCode(submitGiftCodeParams);
      getAllGiftCodes();

      return '';
    } catch (err) {
      return err.message;
    }
  };

  const submitTransaction = async (txProposal: TxProposal): Promise<void> => {
    const { selectedAccount } = state;
    const { accountId } = selectedAccount.account;
    // submit transaction
    // TODO probably want to figure out what I want to save about this transaction log
    await fullServiceApi.submitTransaction({
      accountId,
      txProposal,
    });

    // TODO- right now, we're just using the selected account to refresh
    // this is obviously not ideal
    // const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });
    // const { walletStatus } = await fullServiceApi.getWalletStatus();

    // FIX-ME: Currently, Full-Service does not seperate pending change and pending outgoing.
    // We will need Full-Service to clearly seperate these values for us to properly show pending.
    // Until we have that, the balance may dip as long as the UTXO spent on the transaction before
    // bouncing back up.
    // Alternately, we can just make balance equal to balance + pending (for now)
    // dispatch({
    //   payload: {
    //     selectedAccount: {
    //       account: selectedAccount.account,
    //       balanceStatus,
    //     },
    //     walletStatus,
    //   },
    //   type: 'UPDATE_STATUS',
    // });
  };

  const unlockWallet = async (passphrase: string): Promise<void> => {
    try {
      const { encryptedPassphrase } = state;
      if (encryptedPassphrase === undefined) {
        throw new Error('encryptedPassphrase assertion failed');
      }

      const { secretKey } = await validatePassphrase(passphrase, encryptedPassphrase);

      // Get main account id
      const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
      // TODO - need better metadata for this; come back and use config data
      const selectedAccount = accountMap[accountIds[0]];

      // Decrypt Contacts
      const contacts = await decryptContacts(secretKey);

      // Get basic wallet information
      const { walletStatus } = await fullServiceApi.getWalletStatus();

      const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
        accountId: selectedAccount.accountId,
      });

      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({
        accountId: selectedAccount.accountId,
      });

      // Determine if PIN needs to be set (edge case)
      let isPinRequired = false;
      let pin;
      const encryptedPin = localStore.getEncryptedPin();
      const pinThresholdPmob = localStore.getPinThresholdPmob();

      if (encryptedPin === undefined) {
        isPinRequired = true;
      } else {
        pin = await decrypt(encryptedPin, secretKey);
      }

      dispatch({
        payload: {
          accounts: {
            accountIds,
            accountMap,
          },
          addresses: {
            addressIds,
            addressMap,
          },
          contacts,
          isPinRequired,
          pin,
          pinThresholdPmob,
          secretKey,
          selectedAccount: {
            account: selectedAccount,
            balanceStatus,
          },
          walletStatus,
        },
        type: 'UNLOCK_WALLET',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // Inialize App On Startup
  useEffect(() => {
    const initialize = () => {
      // TODO - no real reason to try
      try {
        const encryptedPassphrase = localStore.getEncryptedPassphrase();
        getAllGiftCodes(); // TODO - this should not occur until unlock
        dispatch({
          payload: {
            encryptedPassphrase,
            isAuthenticated: false,
          },
          type: 'INITIALIZE',
        });
      } catch (err) {
        dispatch({
          payload: {
            encryptedPassphrase: null,
            isAuthenticated: false,
          },
          type: 'INITIALIZE',
        });
      }
    };

    initialize();
  }, []);

  // Poll Status
  useEffect(() => {
    const { selectedAccount } = state;
    const { accountId } = selectedAccount.account;
    // // TODO - check this early exit
    if (accountId === '') {
      return () => undefined;
    }

    const fetchBalance = async () => {
      // TODO - consider making a GetBalanceService
      // but, currently, it's unclear of its value if it's just 1 call

      // TODO - like most of the api calls, i really want to, instead,
      // attach them directly to the client.
      // Let's time box this for 1 hour today

      // TODO- right now, we're just using the selected account to refresh
      // this is obviously not ideal
      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });
      const { walletStatus } = await fullServiceApi.getWalletStatus();
      // TODO - get new balance (now that is it pending)

      dispatch({
        payload: {
          selectedAccount: {
            account: selectedAccount.account,
            balanceStatus,
          },
          walletStatus,
        },
        type: 'UPDATE_STATUS',
      });
    };

    fetchBalance();
    const fetchBalanceForever = setInterval(fetchBalance, 10000);
    return () => clearInterval(fetchBalanceForever);
    // TODO - consider rebuilding the setInterval based on roundtrip time
    // TODO - Right now, we have 1 monitorID. later, we may have multiple for
    // many accounts. We'll need to parse each monitorId and built a fetcher for each.
    // Or Alternatievly (and I like this idea more), our GetBalanceService can take
    // an array of monitorIds and return a balance for each.
  }, [state]);

  return (
    <FullServiceContext.Provider
      value={{
        ...state,
        assignAddressForAccount,
        buildGiftCode,
        buildTransaction,
        changePassword,
        checkGiftCodeStatus,
        claimGiftCode,
        confirmEntropyKnown,
        createAccount,
        deleteStoredGiftCodeB58,
        fetchAllTransactionLogsForAccount,
        fetchAllTxosForAccount,
        importAccount,
        importLegacyAccount,
        retrieveEntropy,
        setPin,
        submitGiftCode,
        submitTransaction,
        unlockWallet,
        updateContacts,
      }}
    >
      {children}
    </FullServiceContext.Provider>
  );
};

export default FullServiceContext;
