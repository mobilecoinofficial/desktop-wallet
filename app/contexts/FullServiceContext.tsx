import React, { createContext, useEffect, useReducer } from 'react';
import type { FC, ReactNode } from 'react';

import * as fullServiceApi from '../fullService/api';
import type { BuildTransactionParams } from '../fullService/api/buildTransaction';
import type Address from '../types/Address';
import type BalanceStatus from '../types/BalanceStatus';
import type FullServiceAccount from '../types/FullServiceAccount';
import type { StringB58, StringUInt64, StringHex } from '../types/SpecialStrings';
import type TxProposal from '../types/TxProposal';
import type WalletStatus from '../types/WalletStatus';
import LocalStore from '../utils/LocalStore';
import scryptKeys from '../utils/scryptKeys';

type Accounts = {
  accountIds: StringHex[];
  accountMap: { [accountId: string]: FullServiceAccount };
};

type Addresses = {
  addressIds: StringHex[];
  addressMap: { [addressId: string]: Address };
};

type SelectedAccount = {
  account: FullServiceAccount;
  balanceStatus: BalanceStatus;
  mobUrl: string;
};

interface FullServiceState {
  accounts: Accounts;
  addresses: Addresses;
  hashedPassword: string | null;
  isAuthenticated: boolean;
  isEntropyKnown: boolean;
  isInitialized: boolean;
  selectedAccount: SelectedAccount;
  walletStatus: WalletStatus;
}

// TODO - context can be broken down into seperate files
export interface FullServiceContextValue extends FullServiceState {
  buildGiftCode: (value: bigint, fee: bigint) => Promise<BuildGiftCodeServiceSuccessData | void>; // include object
  buildTransaction: (buildTransactionParams: BuildTransactionParams) => Promise<TxProposal | void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  confirmEntropyKnown: () => void;
  deleteStoredGiftB58Code: (storedGiftB58Code: string) => void;
  openGiftCode: (giftB58Code: string) => Promise<OpenGiftCodeServiceSuccessData | void>;
  createAccount: (accountName: string | null, password: string) => Promise<void>;
  importAccount: (accountName: string | null, entropy: string, password: string) => Promise<void>;
  payAddressCode: (amount: bigint, fee: bigint, receiverB58Code: string) => Promise<void>;
  retrieveEntropy: (password: string) => Promise<string | void>;
  submitGiftCode: (txProposal: TxProposal, giftB58Code: string) => Promise<void>;
  submitTransaction: (txProposal: TxProposal) => Promise<void>;
  unlockWallet: (password: string) => Promise<void>;
}

interface FullServiceProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    hashedPassword: string | null;
    isAuthenticated: boolean;
  };
};

type UpdateGiftCodesAction = {
  type: 'UPDATE_GIFT_CODES';
  payload: {
    giftCodes: { giftB58Code: string; giftValueString: string }[];
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
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
};

type PayAddressCodeAction = {
  type: 'PAY_ADDRESS_CODE';
  payload: {
    localBlockIndex: string;
    networkHighestBlockIndex: string;
    nextBlock: string;
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
  | PayAddressCodeAction
  | SyncLedgerAction
  | UnlockWalletAction
  | UpdateStatusAction;

// TODO -- check if initailized state is the only time thse values are null
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
      const { hashedPassword, isAuthenticated } = action.payload;

      return {
        ...state,
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
      const {
        accounts,
        addresses,
        selectedAccount,
        walletStatus,
      } = action.payload;
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
    case 'CREATE_ACCOUNT': {
      const {
        accounts,
        addresses,
        selectedAccount,
        walletStatus,
      } = action.payload;
      return {
        ...state,
        accounts,
        addresses,
        isAuthenticated: true,
        isEntropyKnown: false,
        selectedAccount,
        walletStatus,
      };
    }
    case 'PAY_ADDRESS_CODE': {
      const { localBlockIndex, networkHighestBlockIndex, nextBlock } = action.payload;
      return {
        ...state,
        localBlockIndex,
        networkHighestBlockIndex,
        nextBlock,
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
        entropy: null, // Clear entropy from in-memory
        isEntropyKnown: true,
      };
    }
    case 'UNLOCK_WALLET': {
      const {
        accounts,
        addresses,
        selectedAccount,
        walletStatus,
      } = action.payload;
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
      return {
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
  buildGiftCode: () => {
    return Promise.resolve();
  },
  buildTransaction: () => {
    return Promise.resolve();
  },
  changePassword: () => {
    return Promise.resolve();
  },
  confirmEntropyKnown: () => {},
  createAccount: () => {
    return Promise.resolve();
  },
  deleteStoredGiftB58Code: () => {},
  importAccount: () => {
    return Promise.resolve();
  },
  openGiftCode: () => {
    return Promise.resolve();
  },
  payAddressCode: () => {
    return Promise.resolve();
  },
  retrieveEntropy: () => {
    return Promise.resolve();
  },
  submitGiftCode: () => {
    return Promise.resolve();
  },
  submitTransaction: () => {
    return Promise.resolve();
  },
  unlockWallet: () => {
    return Promise.resolve();
  },
});

export const FullServiceProvider: FC<FullServiceProviderProps> = ({
  children,
}: FullServiceProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialFullServiceState);

  // const buildGiftCode = async (value: bigint, fee: bigint) => {
  //   if (state.monitorId === null) {
  //     throw new Error('TODO - need better message - This should never happen');
  //   }
  //   const BuildGiftCodeServiceInstance = new BuildGiftCodeService(client, {
  //     fee,
  //     senderMonitorId: state.monitorId, // TODO, on multiple accounts we need to select from form
  //     value,
  //   });

  //   const { isSuccess, data, errorMessage } = await BuildGiftCodeServiceInstance.call();

  //   if (isSuccess) {
  //     return data;
  //   }
  //   throw new Error(errorMessage);
  // };

  // TODO, better error handling
  const buildTransaction = async (buildTransactionParams: BuildTransactionParams) => {
    return fullServiceApi.buildTransaction(buildTransactionParams);
  };

  // const changePassword = async (oldPassword: string, newPassword: string) => {
  //   const ChangePasswordServiceInstance = new ChangePasswordService(null, {
  //     newPassword,
  //     oldPassword,
  //   });

  //   const { isSuccess, errorMessage } = await ChangePasswordServiceInstance.call();

  //   if (!isSuccess) {
  //     throw new Error(errorMessage);
  //   }
  // };

  // const confirmEntropyKnown = () => {
  //   dispatch({
  //     type: 'CONFIRM_ENTROPY_KNOWN',
  //   });
  // };

  // const deleteStoredGiftB58Code = (storedGiftB58Code: string) => {
  //   const DeleteGiftCodeServiceInstance = new DeleteGiftCodeService(client, {
  //     storedGiftB58Code,
  //   });

  //   const { isSuccess, data, errorMessage } = DeleteGiftCodeServiceInstance.call();
  //   if (isSuccess) {
  //     dispatch({
  //       payload: {
  //         ...data,
  //       },
  //       type: 'UPDATE_GIFT_CODES',
  //     });
  //   } else {
  //     throw new Error(errorMessage);
  //   }
  // };

  // const openGiftCode = async (giftB58Code: string) => {
  //   // TODO - for multiple accounts, we'll need to change this select logic
  //   if (!state.receiver) throw new Error('No Receiver found.');
  //   const OpenGiftCodeServiceInstance = new OpenGiftCodeService(client, {
  //     giftB58Code,
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
      const { account } = await fullServiceApi.createAccount({
        name,
      });
      const { accountId } = account;

      // Get basic wallet information
      const { walletStatus } = await fullServiceApi.getWalletStatus();
      const { accountIds, accountMap } = walletStatus;
      const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
        accountId,
      });
      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });

      // After successful import, store password digest
      // TODO - rename secret key as digest
      const { publicSaltString, secretKeyString } = await scryptKeys(password);
      const LocalStoreInstance = new LocalStore();
      LocalStoreInstance.setHashedPassword(secretKeyString);
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

  // test entropy!
  // ed62ae3259992ec31dc9fe08be1b9964327e0c4846be99a975397a32099b9860
  // Import the wallet should initalize the basic wallet information
  // The wallet status
  // Accounts + status
  const importAccount = async (name: string | null, entropy: string, password: string) => {
    try {
      debugger;
      // TODO - allow this once we're setup again!
      // Attempt import
      const { account } = await fullServiceApi.importAccount({
        entropy,
        name,
      });
      const { accountId } = account;

      // Get basic wallet information
      const { walletStatus } = await fullServiceApi.getWalletStatus();
      const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
      debugger;
      // const accountId = accountIds[0];
      // const account = accountMap[accountId];

      const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
        accountId,
      });

      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });
      debugger;
      // After successful import, store password digest
      const { publicSaltString, secretKeyString } = await scryptKeys(password);
      const LocalStoreInstance = new LocalStore();
      LocalStoreInstance.setHashedPassword(secretKeyString);
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

  // const payAddressCode = async (amount: bigint, fee: bigint, receiverB58Code: string) => {
  //   if (state.monitorId === null) {
  //     throw new Error('TODO - need better message - This should never happen');
  //   }

  //   const SendPaymentServiceInstance = new SendPaymentService(client, {
  //     amount,
  //     fee,
  //     receiverB58Code,
  //     senderMonitorId: state.monitorId,
  //   });

  //   const { isSuccess, data, errorMessage } = await SendPaymentServiceInstance.call();

  //   if (isSuccess) {
  //     dispatch({
  //       payload: {
  //         ...data,
  //       },
  //       type: 'PAY_ADDRESS_CODE',
  //     });
  //   } else {
  //     throw new Error(errorMessage);
  //   }
  // };

  // const retrieveEntropy = async (password: string) => {
  //   const DecryptEntropyServiceInstance = new DecryptEntropyService(client, {
  //     password,
  //   });

  //   const { isSuccess, data, errorMessage } = await DecryptEntropyServiceInstance.call();
  //   if (isSuccess) {
  //     return data.entropy;
  //   }
  //   throw new Error(errorMessage);
  // };

  // const submitGiftCode = async (txProposal: TxProposal, giftB58Code: string) => {
  //   if (state.monitorId === null) {
  //     throw new Error('TODO - need better message - This should never happen');
  //   }

  //   const SubmitGiftCodeServiceInstance = new SubmitGiftCodeService(client, {
  //     giftB58Code,
  //     senderMonitorId: state.monitorId, // TODO, on multiple accounts we need to select from form
  //     txProposal,
  //   });
  //   const { isSuccess, data, errorMessage } = await SubmitGiftCodeServiceInstance.call();
  //   if (isSuccess) {
  //     dispatch({
  //       payload: {
  //         ...data,
  //       },
  //       type: 'UPDATE_GIFT_CODES',
  //     });
  //   }
  //   if (!isSuccess) throw new Error(errorMessage);
  // };

  const submitTransaction = async (txProposal: TxProposal) => {
    // submit transaction
    const result = await fullServiceApi.submitTransaction({ txProposal });
    debugger;
    const { selectedAccount } = state;
    const { accountId } = selectedAccount.account;

    // TODO- right now, we're just using the selected account to refresh
    // this is obviously not ideal
    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });
    const { walletStatus } = await fullServiceApi.getWalletStatus();
    debugger;
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

  const unlockWallet = async (password: string) => {
    try {
      // TODO -- remove scrypt for DB encryption w/ Argon2
      const { hashedPassword } = state;
      const LocalStoreInstance = new LocalStore();
      const salt = LocalStoreInstance.getHashedPasswordSalt();
      if (!hashedPassword || !salt) throw new Error('hashedPassword not found.');
      debugger;

      // Attempt to match password digest
      const { secretKeyString } = await scryptKeys(password, salt);
      // FixMe
      // if (secretKeyString !== hashedPassword) throw new Error('Incorrect Password') // TODO: i18n

      // Get main account id
      const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
      const selectedAccount = accountMap[accountIds[0]]; // TODO - need better metadata for this; come back and use config data
      debugger;

      // Get basic wallet information
      const { walletStatus } = await fullServiceApi.getWalletStatus();
      debugger;

      const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
        accountId: selectedAccount.accountId,
      });
      debugger;

      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId: selectedAccount.accountId });
      debugger;
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
      try {
        const LocalStoreInstance = new LocalStore();
        const hashedPassword = LocalStoreInstance.getHashedPassword();

        dispatch({
          payload: {
            hashedPassword,
            isAuthenticated: false,
          },
          type: 'INITIALIZE',
        });
      } catch (err) {
        dispatch({
          payload: {
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
    if (accountId === '') return () => {};

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
    const fetchBalanceForver = setInterval(fetchBalance, 10000);
    return () => {
      return clearInterval(fetchBalanceForver);
    };
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
        // buildGiftCode,
        buildTransaction,
        // changePassword,
        // confirmEntropyKnown,
        createAccount,
        // deleteStoredGiftB58Code,
        importAccount,
        // openGiftCode,
        // payAddressCode,
        // retrieveEntropy,
        // submitGiftCode,
        submitTransaction,
        unlockWallet,
      }}
    >
      {children}
    </FullServiceContext.Provider>
  );
};

export default FullServiceContext;
