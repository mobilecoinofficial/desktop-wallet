import React, { createContext, useEffect, useReducer } from 'react';
import type { FC, ReactNode } from 'react';

import * as fullServiceApi from '../fullService/api';
import type { BuildGiftCodeParams, BuildGiftCodeResult } from '../fullService/api/buildGiftCode';
import type { BuildTransactionParams } from '../fullService/api/buildTransaction';
import type Address from '../types/Address';
import type BalanceStatus from '../types/BalanceStatus';
import type FullServiceAccount from '../types/FullServiceAccount';
import type { StringHex } from '../types/SpecialStrings';
import type TxProposal from '../types/TxProposal';
import type WalletStatus from '../types/WalletStatus';
import LocalStore from '../utils/LocalStore';
import sameObject from '../utils/sameObject';
import scryptKeys from '../utils/scryptKeys';

type Accounts = {
  accountIds: StringHex[];
  accountMap: { [accountId: string]: FullServiceAccount };
};

type Addresses = {
  addressIds: StringHex[];
  addressMap: { [addressId: string]: Address };
};

type PendingSecrets = {
  entropy: StringHex;
};

type SelectedAccount = {
  account: FullServiceAccount;
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
  selectedAccount: SelectedAccount;
  walletStatus: WalletStatus;
  pendingSecrets: PendingSecrets | null;
}

// TODO - context can be broken down into seperate files
export interface FullServiceContextValue extends FullServiceState {
  buildGiftCode: (buildGiftCodeParams: BuildGiftCodeParams) => Promise<BuildGiftCodeResult | void>; // include object
  buildTransaction: (buildTransactionParams: BuildTransactionParams) => Promise<TxProposal | void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  confirmEntropyKnown: () => void;
  deleteStoredGiftCodeB58: (storedGiftCodeB58: string) => void;
  openGiftCode: (giftCodeB58: string) => Promise<OpenGiftCodeServiceSuccessData | void>;
  createAccount: (accountName: string | null, password: string) => Promise<void>;
  importAccount: (accountName: string | null, entropy: string, password: string) => Promise<void>;
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
  | UpdateGiftCodesAction
  | ConfirmEntropyKnownAction
  | FetchBalanceAction
  | CreateAccountAction
  | ImportAccountAction
  | InitializeAction
  | SyncLedgerAction
  | UnlockWalletAction
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

  const buildGiftCode = async (buildGiftCodeParams: BuildGiftCodeParams) =>
    fullServiceApi.buildGiftCode(buildGiftCodeParams);

  // TODO, better error handling
  const buildTransaction = async (buildTransactionParams: BuildTransactionParams) =>
    fullServiceApi.buildTransaction(buildTransactionParams);

  const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
      const { hashedPassword } = state;
      const LocalStoreInstance = new LocalStore();
      const salt = LocalStoreInstance.getHashedPasswordSalt();
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
      LocalStoreInstance.setHashedPassword(newSecretKeyString);
      LocalStoreInstance.setHashedPasswordSalt(publicSaltString);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const confirmEntropyKnown = () => dispatch({ type: 'CONFIRM_ENTROPY_KNOWN' });

  const deleteStoredGiftCodeB58 = (storedGiftCodeB58: string) => {
    try {
      const LocalStoreInstance = new LocalStore();
      const giftCodes = LocalStoreInstance.getGiftCodes();
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
      LocalStoreInstance.setGiftCodes(giftCodes);

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
      const LocalStoreInstance = new LocalStore();
      LocalStoreInstance.setHashedPassword(hashedPassword);
      LocalStoreInstance.setHashedPasswordSalt(publicSaltString);

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
      const LocalStoreInstance = new LocalStore();
      LocalStoreInstance.setHashedPassword(hashedPassword);
      LocalStoreInstance.setHashedPasswordSalt(publicSaltString);
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

  const retrieveEntropy = async (password: string) => {
    try {
      const { hashedPassword, selectedAccount } = state;
      const LocalStoreInstance = new LocalStore();
      const salt = LocalStoreInstance.getHashedPasswordSalt();
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

      const LocalStoreInstance = new LocalStore();
      const giftCodes = LocalStoreInstance.getGiftCodes() || [];
      if (!Array.isArray(giftCodes)) {
        throw new Error('Cannot find gift codes');
      }

      // TODO - this should definitely be in a util
      const giftValue = txProposal.outlayList
        .map((outlay) => BigInt(outlay.value))
        .reduce((acc, cur) => acc + cur);
      const giftValueString = giftValue.toString();
      giftCodes.push({ giftCodeB58, giftValueString });
      LocalStoreInstance.setGiftCodes(giftCodes);

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
      const LocalStoreInstance = new LocalStore();
      const salt = LocalStoreInstance.getHashedPasswordSalt();
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
        const LocalStoreInstance = new LocalStore();
        const hashedPassword = LocalStoreInstance.getHashedPassword();
        const giftCodes = LocalStoreInstance.getGiftCodes();
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

  // useEffect(() => {
  //   const { monitorId } = state;
  //   // TODO -- am i doing this right? triple check
  //   if (monitorId === null) return () => {};

  //   const fetchLedgerInfo = async () => {
  //     if (monitorId === undefined) return;

  //     const GetStatusServiceInstance = new GetStatusService(client, {
  //       monitorId,
  //     });
  //     const { isSuccess, data, errorMessage } = await GetStatusServiceInstance.call();
  //     if (isSuccess) {
  //       const { localBlockIndex, networkHighestBlockIndex, nextBlock } = data;
  //       if (
  //         state.localBlockIndex === null ||
  //         state.networkHighestBlockIndex === null ||
  //         state.nextBlock === null ||
  //         localBlockIndex !== state.localBlockIndex ||
  //         networkHighestBlockIndex !== state.networkHighestBlockIndex ||
  //         nextBlock !== state.nextBlock
  //       ) {
  //         dispatch({
  //           payload: {
  //             localBlockIndex,
  //             networkHighestBlockIndex,
  //             nextBlock,
  //           },
  //           type: 'SYNC_LEDGER',
  //         });
  //       }
  //     } else {
  //       throw new Error(errorMessage);
  //     }
  //   };
  //   fetchLedgerInfo();
  //   const fetchLedgerInfoForever = setInterval(fetchLedgerInfo, 1000);
  //   return () => {
  //     return clearInterval(fetchLedgerInfoForever);
  //   };
  // }, [state, client]);
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
