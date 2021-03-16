import React, { createContext, useEffect, useReducer } from 'react';
import type { FC, ReactNode } from 'react';

import * as fullServiceApi from '../fullService/api';
import type { BuildGiftCodeParams, BuildGiftCodeResult } from '../fullService/api/buildGiftCode';
import type { BuildTransactionParams } from '../fullService/api/buildTransaction';
import type { Accounts } from '../types/Account';
import type { Addresses } from '../types/Address';
import type BalanceStatus from '../types/BalanceStatus';
import type { StringHex } from '../types/SpecialStrings';
import type { TransactionLogs } from '../types/TransactionLog';
import type TxProposal from '../types/TxProposal';
import type { Txos } from '../types/Txo';
import type WalletStatus from '../types/WalletStatus';
import * as localStore from '../utils/LocalStore';
import sameObject from '../utils/sameObject';
import scryptKeys from '../utils/scryptKeys';

type PendingSecrets = {
  entropy: StringHex;
};

type SelectedAccount = {
  account: Account;
  balanceStatus: BalanceStatus;
  mobUrl: string;
};

interface FullServiceState {
  accounts: Accounts;
  addresses: Addresses;
  giftCodes: { giftCodeB58: string; giftValueString: string }[] | null;
  hashedPassword: string | null;
  isAuthenticated: boolean;
  isEntropyKnown: boolean;
  isInitialized: boolean;
  pendingSecrets: PendingSecrets | null;
  selectedAccount: SelectedAccount;
  transactionLogs: TransactionLogs | null;
  txos: Txos;
  walletStatus: WalletStatus;
}

// TODO - context can be broken down into seperate files
export interface FullServiceContextValue extends FullServiceState {
  buildGiftCode: (buildGiftCodeParams: BuildGiftCodeParams) => Promise<BuildGiftCodeResult | void>; // include object
  buildTransaction: (buildTransactionParams: BuildTransactionParams) => Promise<TxProposal | void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  confirmEntropyKnown: () => void;
  createAccount: (accountName: string | null, password: string) => Promise<void>;
  deleteStoredGiftCodeB58: (storedGiftCodeB58: string) => void;
  fetchAllTransactionLogsForAccount: (accountId: StringHex) => void;
  fetchAllTxosForAccount: (accountId: StringHex) => void;
  importAccount: (accountName: string | null, entropy: string, password: string) => Promise<void>;
  openGiftCode: (giftCodeB58: string) => Promise<OpenGiftCodeServiceSuccessData | void>;
  retrieveEntropy: (password: string) => Promise<string | void>;
  submitGiftCode: (txProposal: TxProposal, giftCodeB58: string) => Promise<void>;
  submitTransaction: (txProposal: TxProposal) => Promise<void>;
  unlockWallet: (password: string) => Promise<void>;
}

interface FullServiceProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    giftCodes: { giftCodeB58: string; giftValueString: string }[] | null;
    hashedPassword: string | null;
    isAuthenticated: boolean;
  };
};

type UpdateGiftCodesAction = {
  type: 'UPDATE_GIFT_CODES';
  payload: {
    giftCodes: { giftCodeB58: string; giftValueString: string }[];
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
    hashedPassword: string;
    pendingSecrets: PendingSecrets;
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
    hashedPassword: string;
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
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
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
  | UpdateGiftCodesAction
  | UpdateStatusAction;

// TODO -- check if initialized state is the only time thse values are null
// If so, the state type should either be the expected object or empty
// instead of key key with type | null
// TODO -- maybe remove object key from types!
const initialFullServiceState: FullServiceState = {
  accounts: { accountIds: [], accountMap: {} },
  addresses: { addressIds: [], addressMap: {} },
  hashedPassword: null,
  isAuthenticated: false,
  isEntropyKnown: false,
  isInitialized: false,
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
    mobUrl: '',
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
      const { giftCodes, hashedPassword, isAuthenticated } = action.payload;
      // TODO - really, gift codes should be pulled when on the screen, not on startup
      return {
        ...state,
        giftCodes,
        hashedPassword,
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
      const { accounts, addresses, hashedPassword, selectedAccount, walletStatus } = action.payload;
      return {
        ...state,
        accounts,
        addresses,
        hashedPassword,
        isAuthenticated: true,
        isEntropyKnown: true,
        selectedAccount,
        walletStatus,
      };
    }

    case 'CREATE_ACCOUNT': {
      const {
        accounts,
        addresses,
        hashedPassword,
        pendingSecrets,
        selectedAccount,
        walletStatus,
      } = action.payload;
      return {
        ...state,
        accounts,
        addresses,
        hashedPassword,
        isAuthenticated: true,
        isEntropyKnown: false,
        pendingSecrets,
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
      const { accounts, addresses, selectedAccount, walletStatus } = action.payload;
      return {
        ...state,
        accounts,
        addresses,
        isAuthenticated: true,
        isEntropyKnown: true,
        selectedAccount,
        walletStatus,
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
  buildGiftCode: () => Promise.resolve(),
  buildTransaction: () => Promise.resolve(),
  changePassword: () => Promise.resolve(),
  confirmEntropyKnown: () => {},
  createAccount: () => Promise.resolve(),
  deleteStoredGiftCodeB58: () => undefined,
  importAccount: () => Promise.resolve(),
  openGiftCode: () => Promise.resolve(),
  retrieveEntropy: () => Promise.resolve(),
  submitGiftCode: () => Promise.resolve(),
  submitTransaction: () => Promise.resolve(),
  unlockWallet: () => Promise.resolve(),
});

export const FullServiceProvider: FC<FullServiceProviderProps> = ({
  children,
}: FullServiceProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialFullServiceState);

  const buildGiftCode = async (buildGiftCodeParams: BuildGiftCodeParams) => {
    return fullServiceApi.buildGiftCode(buildGiftCodeParams);
  };

  // TODO, better error handling
  const buildTransaction = async (buildTransactionParams: BuildTransactionParams) => {
    return fullServiceApi.buildTransaction(buildTransactionParams);
  };

  const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
      const { hashedPassword } = state;
      const salt = localStore.getHashedPasswordSalt();
      if (!hashedPassword || !salt) {
        throw new Error('hashedPassword not found.');
      }

      // Attempt to match password digest
      const { secretKeyString } = await scryptKeys(oldPassword, salt);
      if (secretKeyString !== hashedPassword) {
        throw new Error('Incorrect Password');
      } // TODO: i18n

      // Set new password
      const { publicSaltString, secretKeyString: newSecretKeyString } = await scryptKeys(
        newPassword
      );
      localStore.setHashedPassword(newSecretKeyString);
      localStore.setHashedPasswordSalt(publicSaltString);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const confirmEntropyKnown = () => dispatch({ type: 'CONFIRM_ENTROPY_KNOWN' });

  const deleteStoredGiftCodeB58 = (storedGiftCodeB58: string) => {
    try {
      const giftCodes = localStore.getGiftCodes();
      if (!Array.isArray(giftCodes)) {
        throw new Error('Cannot find gift codes');
      }

      let giftCodeIndex;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < giftCodes.length; i++) {
        if (giftCodes[i].giftCodeB58 === storedGiftCodeB58) {
          giftCodeIndex = i;
          break;
        }
      }

      if (giftCodeIndex === undefined) {
        throw new Error('Cannot find gift code');
      }

      giftCodes.splice(giftCodeIndex, 1);
      localStore.setGiftCodes(giftCodes);

      // At this point, let's make sure to store the entropy
      // in the context, we can detect the change and begin monitoring the gift code
      // we want the user to be able to retreive the code on click
      // it's not clear to me if these should be encrypted like the account
      dispatch({
        payload: { giftCodes },
        type: 'UPDATE_GIFT_CODES',
      });

      return '';
    } catch (err) {
      return err.message;
    }
  };

  // const openGiftCode = async (giftCodeB58: string) => {
  //   // TODO - for multiple accounts, we'll need to change this select logic
  //   if (!state.receiver) throw new Error('No Receiver found.');
  //   const OpenGiftCodeServiceInstance = new OpenGiftCodeService(client, {
  //     giftCodeB58,
  //     receiver: state.receiver,
  //   });

  //   const { isSuccess, data, errorMessage } = await OpenGiftCodeServiceInstance.call();
  //   if (isSuccess) {
  //     return data;
  //   }
  //   throw new Error(errorMessage);
  // };

  const createAccount = async (name: string | null, password: string) => {
    try {
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

      // After successful import, store password digest
      // TODO - rename secret key as digest
      const { publicSaltString, secretKeyString: hashedPassword } = await scryptKeys(password);
      localStore.setHashedPassword(hashedPassword);
      localStore.setHashedPasswordSalt(publicSaltString);

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
          hashedPassword,
          pendingSecrets,
          selectedAccount: {
            account,
            balanceStatus,
            mobUrl: `https://mobilecoin.com/mob58/${accountId}`,
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
  const importAccount = async (name: string | null, entropy: string, password: string) => {
    try {
      // TODO - allow this once we're setup again!
      // Attempt import
      const { account } = await fullServiceApi.importAccount({ entropy, name });
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
      // After successful import, store password digest
      const { publicSaltString, secretKeyString: hashedPassword } = await scryptKeys(password);
      localStore.setHashedPassword(hashedPassword);
      localStore.setHashedPasswordSalt(publicSaltString);
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
          hashedPassword,
          selectedAccount: {
            account,
            balanceStatus,
            mobUrl: `https://mobilecoin.com/mob58/${accountId}`,
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

  const retrieveEntropy = async (password: string) => {
    try {
      const { hashedPassword, selectedAccount } = state;
      const salt = localStore.getHashedPasswordSalt();
      if (!hashedPassword || !salt) {
        throw new Error('hashedPassword not found.');
      }

      // Attempt to match password digest
      const { secretKeyString } = await scryptKeys(password, salt);
      if (secretKeyString !== hashedPassword) {
        throw new Error('Incorrect Password');
      } // TODO: i18n

      const { accountSecrets } = await fullServiceApi.exportAccountSecrets({
        accountId: selectedAccount.account.accountId,
      });

      return accountSecrets.entropy;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const submitGiftCode = async (txProposal: TxProposal, giftCodeB58: string) => {
    try {
      // TODO probably want to figure out what I want to save about this transaction log
      await fullServiceApi.submitTransaction({ txProposal });

      const giftCodes = localStore.getGiftCodes() || [];
      if (!Array.isArray(giftCodes)) {
        throw new Error('Cannot find gift codes');
      }

      // TODO - this should definitely be in a util
      const giftValue = txProposal.outlayList
        .map((outlay) => BigInt(outlay.value))
        .reduce((acc, cur) => acc + cur);
      const giftValueString = giftValue.toString();
      giftCodes.push({ giftCodeB58, giftValueString });
      localStore.setGiftCodes(giftCodes);

      dispatch({
        payload: { giftCodes },
        type: 'UPDATE_GIFT_CODES',
      });

      return '';
    } catch (err) {
      return err.message;
    }
  };

  const submitTransaction = async (txProposal: TxProposal): Promise<void> => {
    // submit transaction
    await fullServiceApi.submitTransaction({ txProposal }); // and if there was an error?
    const { selectedAccount } = state;
    const { accountId } = selectedAccount.account;

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
          mobUrl: `https://mobilecoin.com/mob58/${accountId}`,
        },
        walletStatus,
      },
      type: 'UPDATE_STATUS',
    });
  };

  const unlockWallet = async (password: string): Promise<void> => {
    try {
      // TODO -- remove scrypt for DB encryption w/ Argon2
      const { hashedPassword } = state;
      const salt = localStore.getHashedPasswordSalt();
      if (!hashedPassword || !salt) {
        throw new Error('hashedPassword not found.');
      }

      // Attempt to match password digest
      const { secretKeyString } = await scryptKeys(password, salt);
      if (secretKeyString !== hashedPassword) {
        throw new Error('Incorrect Password');
      } // TODO: i18n

      // Get main account id
      const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
      // TODO - need better metadata for this; come back and use config data
      const selectedAccount = accountMap[accountIds[0]];

      // Get basic wallet information
      const { walletStatus } = await fullServiceApi.getWalletStatus();

      const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
        accountId: selectedAccount.accountId,
      });

      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({
        accountId: selectedAccount.accountId,
      });
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
          selectedAccount: {
            account: selectedAccount,
            balanceStatus,
            mobUrl: `https://mobilecoin.com/mob58/${selectedAccount.accountId}`,
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
        const hashedPassword = localStore.getHashedPassword();
        const giftCodes = localStore.getGiftCodes();
        const assertedGiftCodes = Array.isArray(giftCodes) ? giftCodes : [];

        dispatch({
          payload: {
            giftCodes: assertedGiftCodes,
            hashedPassword,
            isAuthenticated: false,
          },
          type: 'INITIALIZE',
        });
      } catch (err) {
        dispatch({
          payload: {
            giftCodes: [],
            hashedPassword: null,
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
            mobUrl: `https://mobilecoin.com/mob58/${accountId}`,
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
        buildGiftCode,
        buildTransaction,
        changePassword,
        confirmEntropyKnown,
        createAccount,
        deleteStoredGiftCodeB58,
        fetchAllTransactionLogsForAccount,
        fetchAllTxosForAccount,
        importAccount,
        // openGiftCode,
        // payAddressCode,
        retrieveEntropy,
        submitGiftCode,
        submitTransaction,
        unlockWallet,
      }}
    >
      {children}
    </FullServiceContext.Provider>
  );
};

export default FullServiceContext;
