import React, { createContext, useEffect, useReducer } from 'react';
import type { FC, ReactNode } from 'react';

import SplashScreen from '../components/SplashScreen';
import { getBalance } from '../mobilecoind/api';
import type { MobilecoindClient } from '../mobilecoind/client';
import type { PublicAddress } from '../mobilecoind/protos/external_pb';
import type { TxProposal } from '../mobilecoind/protos/mobilecoind_api_pb';
import BuildGiftCodeService from '../mobilecoind/services/BuildGiftCodeService';
import type { BuildGiftCodeServiceSuccessData } from '../mobilecoind/services/BuildGiftCodeService';
import BuildTransactionService from '../mobilecoind/services/BuildTransactionService';
import type { BuildTransactionServiceSuccessData } from '../mobilecoind/services/BuildTransactionService';
import ChangePasswordService from '../mobilecoind/services/ChangePasswordService';
import CreateAccountService from '../mobilecoind/services/CreateAccountService';
import DecryptEntropyService from '../mobilecoind/services/DecryptEntropyService';
import DeleteGiftCodeService from '../mobilecoind/services/DeleteGiftCodeService';
import GetStatusService from '../mobilecoind/services/GetStatusService';
import ImportAccountService from '../mobilecoind/services/ImportAccountService';
import OpenGiftCodeService from '../mobilecoind/services/OpenGiftCodeService';
import type { OpenGiftCodeServiceSuccessData } from '../mobilecoind/services/OpenGiftCodeService';
import SendPaymentService from '../mobilecoind/services/SendPaymentService';
import SubmitGiftCodeService from '../mobilecoind/services/SubmitGiftCodeService';
import SubmitTransactionService from '../mobilecoind/services/SubmitTransactionService';
import UnlockWalletService from '../mobilecoind/services/UnlockWalletService';
import type Account from '../types/Account';
import LocalStore from '../utils/LocalStore';

// TODO - for MVP with only 1 account, I'm stuffing all of the context in one
// location. Once we implement multiple accounts, each account's information (
// account.monitorId, account.balance, account.mobUrl, etc.) will be consolidated
// into an object. We can noramlize the objects under their monitorId.
// The state can, for example, has an array of monitorIds to represent the accounts
// and their order. We will key into the normalized object via monitorId for
// the account's values.
// The reducer's logic will become
// slightly more involved than it is now (nothing complex).
// Future note to self, normalized the accounts by monitorId
interface MobileCoinDState {
  account: Account | null;
  accountName: string | null;
  b58Code: string | null;
  balance: bigint | null;
  encryptedEntropy: string | null;
  entropy: Buffer | null; // TODO -- i don't like keeping the entropy in memory any longer than needed. let's check in on the flow and see where we can remove it
  giftCodes: { giftB58Code: string; giftValueString: string }[] | null;
  isAuthenticated: boolean;
  isEntropyKnown: boolean; // for MVP, we will show entropy once with a call to save. Settings + password will be used later
  isInitialised: boolean;
  localBlockIndex: string | null;
  mobUrl: string | null;
  monitorId: Uint8Array | null;
  networkHighestBlockIndex: string | null;
  nextBlock: string | null;
  receiver: PublicAddress | null;
}

// TODO - context can be broken down into seperate files
export interface MobileCoinDContextValue extends MobileCoinDState {
  buildGiftCode: (
    value: bigint,
    fee: bigint
  ) => Promise<BuildGiftCodeServiceSuccessData | void>; // include object
  buildTransaction: (
    amount: bigint,
    fee: bigint,
    receiverB58Code: string
  ) => Promise<BuildTransactionServiceSuccessData | void>; // include object
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  confirmEntropyKnown: () => void;
  deleteStoredGiftB58Code: (storedGiftB58Code: string) => void;
  openGiftCode: (
    giftB58Code: string
  ) => Promise<OpenGiftCodeServiceSuccessData | void>;
  createAccount: (
    accountName: string | null,
    password: string
  ) => Promise<void>;
  importAccount: (
    accountName: string | null,
    entropy: string,
    password: string
  ) => Promise<void>;
  payAddressCode: (
    amount: bigint,
    fee: bigint,
    receiverB58Code: string
  ) => Promise<void>;
  retrieveEntropy: (password: string) => Promise<string | void>;
  submitGiftCode: (
    txProposal: TxProposal,
    giftB58Code: string
  ) => Promise<void>;
  submitTransaction: (txPropsal: TxProposal) => Promise<void>;
  unlockWallet: (password: string) => Promise<void>;
}

interface MobileCoinDProviderProps {
  client: MobilecoindClient;
  children: ReactNode;
}

// TODO, future iterations will upload multiple accounts
type InitialiseAction = {
  type: 'INITIALISE';
  payload: {
    account: Account | null;
    encryptedEntropy: string | null;
    giftCodes: { giftB58Code: string; giftValueString: string }[] | null;
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
    accountName: string | null;
    b58Code: string;
    balance: bigint;
    encryptedEntropy: string;
    entropy: Buffer;
    monitorId: Buffer;
    receiver: PublicAddress;
  };
};

type ImportAccountAction = {
  type: 'IMPORT_ACCOUNT';
  payload: {
    accountName: string | null;
    b58Code: string;
    balance: bigint;
    encryptedEntropy: string;
    monitorId: Buffer;
    receiver: PublicAddress;
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
    accountName: string | null;
    b58Code: string;
    balance: bigint;
    monitorId: Buffer;
    receiver: PublicAddress;
  };
};

type UpdateStatusAction = {
  type: 'UPDATE_STATUS';
  payload: {
    localBlockIndex: string;
    networkHighestBlockIndex: string;
    nextBlock: string;
  };
};

type Action =
  | UpdateGiftCodesAction
  | ConfirmEntropyKnownAction
  | FetchBalanceAction
  | CreateAccountAction
  | ImportAccountAction
  | InitialiseAction
  | PayAddressCodeAction
  | SyncLedgerAction
  | UnlockWalletAction
  | UpdateStatusAction;

// TODO -- check if initailized state is the only time thse values are null
// If so, the state type should either be the expected object or empty
// instead of key key with type | null
const initialMobileCoinDState: MobileCoinDState = {
  account: null,
  accountName: null,
  b58Code: null,
  balance: null,
  encryptedEntropy: null,
  entropy: null,
  giftCodes: null,
  isAuthenticated: false,
  isEntropyKnown: false,
  isInitialised: false,
  localBlockIndex: null,
  mobUrl: null,
  monitorId: null,
  networkHighestBlockIndex: null,
  nextBlock: null,
  receiver: null,
};

// TODO - i should clean up this reducer
const reducer = (state: MobileCoinDState, action: Action): MobileCoinDState => {
  switch (action.type) {
    case 'INITIALISE': {
      const {
        account,
        encryptedEntropy,
        giftCodes,
        isAuthenticated,
      } = action.payload;

      return {
        ...state,
        account,
        encryptedEntropy,
        giftCodes,
        isAuthenticated,
        isInitialised: true,
      };
    }
    case 'SYNC_LEDGER': {
      const {
        localBlockIndex,
        networkHighestBlockIndex,
        nextBlock,
      } = action.payload;
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
        accountName,
        b58Code,
        balance,
        encryptedEntropy,
        monitorId,
        receiver,
      } = action.payload;
      return {
        ...state,
        accountName,
        b58Code,
        balance,
        encryptedEntropy,
        isAuthenticated: true,
        isEntropyKnown: true,
        mobUrl: `https://mobilecoin.com/mob58/${b58Code}`,
        monitorId,
        receiver,
      };
    }
    case 'CREATE_ACCOUNT': {
      const {
        accountName,
        b58Code,
        balance,
        encryptedEntropy,
        entropy,
        monitorId,
        receiver,
      } = action.payload;
      return {
        ...state,
        accountName,
        b58Code,
        balance,
        encryptedEntropy,
        entropy,
        isAuthenticated: true,
        isEntropyKnown: false,
        mobUrl: `https://mobilecoin.com/mob58/${b58Code}`,
        monitorId,
        receiver,
      };
    }
    case 'PAY_ADDRESS_CODE': {
      const {
        localBlockIndex,
        networkHighestBlockIndex,
        nextBlock,
      } = action.payload;
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
        accountName,
        b58Code,
        balance,
        monitorId,
        receiver,
      } = action.payload;
      return {
        ...state,
        ...action.payload,
        accountName,
        b58Code,
        balance,
        isAuthenticated: true,
        isEntropyKnown: true,
        mobUrl: `https://mobilecoin.com/mob58/${b58Code}`,
        monitorId,
        receiver,
      };
    }
    case 'UPDATE_STATUS': {
      const {
        localBlockIndex,
        networkHighestBlockIndex,
        nextBlock,
      } = action.payload;
      return {
        ...state,
        localBlockIndex,
        networkHighestBlockIndex,
        nextBlock,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const MobileCoinDContext = createContext<MobileCoinDContextValue>({
  ...initialMobileCoinDState,
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

export const MobileCoinDProvider: FC<MobileCoinDProviderProps> = ({
  client,
  children,
}: MobileCoinDProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialMobileCoinDState);

  const buildGiftCode = async (value: bigint, fee: bigint) => {
    if (state.monitorId === null) throw new Error('TODO - need better message - This should never happen');
    const BuildGiftCodeServiceInstance = new BuildGiftCodeService(client, {
      fee,
      senderMonitorId: state.monitorId, // TODO, on multiple accounts we need to select from form
      value,
    });

    const {
      isSuccess,
      data,
      errorMessage,
    } = await BuildGiftCodeServiceInstance.call();

    if (isSuccess) {
      return data;
    }
    throw new Error(errorMessage);
  };

  const buildTransaction = async (
    amount: bigint,
    fee: bigint,
    receiverB58Code: string,
  ) => {
    if (state.monitorId === null) throw new Error('TODO - need better message - This should never happen');

    const BuildTransactionServiceInstance = new BuildTransactionService(
      client,
      {
        amount,
        fee,
        receiverB58Code,
        senderMonitorId: state.monitorId, // TODO, on multiple accounts we need to select from form
      },
    );

    const {
      isSuccess,
      data,
      errorMessage,
    } = await BuildTransactionServiceInstance.call();
    if (isSuccess) {
      return data;
    }
    throw new Error(errorMessage);
  };

  const changePassword = async (oldPassword: string, newPassword: string) => {
    const ChangePasswordServiceInstance = new ChangePasswordService(null, {
      newPassword,
      oldPassword,
    });

    const {
      isSuccess,
      errorMessage,
    } = await ChangePasswordServiceInstance.call();

    if (!isSuccess) {
      throw new Error(errorMessage);
    }
  };

  const confirmEntropyKnown = () => {
    dispatch({
      type: 'CONFIRM_ENTROPY_KNOWN',
    });
  };

  const deleteStoredGiftB58Code = (storedGiftB58Code: string) => {
    const DeleteGiftCodeServiceInstance = new DeleteGiftCodeService(client, {
      storedGiftB58Code,
    });

    const {
      isSuccess,
      data,
      errorMessage,
    } = DeleteGiftCodeServiceInstance.call();
    if (isSuccess) {
      dispatch({
        payload: {
          ...data,
        },
        type: 'UPDATE_GIFT_CODES',
      });
    } else {
      throw new Error(errorMessage);
    }
  };

  const openGiftCode = async (giftB58Code: string) => {
    // TODO - for multiple accounts, we'll need to change this select logic
    if (!state.receiver) throw new Error('No Receiver found.');
    const OpenGiftCodeServiceInstance = new OpenGiftCodeService(client, {
      giftB58Code,
      receiver: state.receiver,
    });

    const {
      isSuccess,
      data,
      errorMessage,
    } = await OpenGiftCodeServiceInstance.call();
    if (isSuccess) {
      return data;
    }
    throw new Error(errorMessage);
  };

  const createAccount = async (name: string | null, password: string) => {
    const CreateAccountServiceInstance = new CreateAccountService(client, {
      name,
      password,
    });

    const {
      isSuccess,
      data,
      errorMessage,
    } = await CreateAccountServiceInstance.call();
    if (isSuccess) {
      dispatch({
        payload: {
          ...data,
        },
        type: 'CREATE_ACCOUNT',
      });
    } else {
      throw new Error(errorMessage);
    }
  };

  const importAccount = async (
    accountName: string | null,
    entropy: string,
    password: string,
  ) => {
    const ImportAccountServiceInstance = new ImportAccountService(client, {
      entropy,
      name: accountName,
      password,
    });

    const {
      isSuccess,
      data,
      errorMessage,
    } = await ImportAccountServiceInstance.call();

    if (isSuccess) {
      dispatch({
        payload: {
          isAuthenticated: true,
          ...data,
        },
        type: 'IMPORT_ACCOUNT',
      });
    } else {
      throw new Error(errorMessage);
    }
    // TODO, so, what we really want to do for accounts...
    // ...is to initialize every account we create/import/load
    // this initaializtion will trigger all required context for that account
    // including the refetch of balance
    // ...but this is an MVP
  };

  const payAddressCode = async (
    amount: bigint,
    fee: bigint,
    receiverB58Code: string,
  ) => {
    if (state.monitorId === null) throw new Error('TODO - need better message - This should never happen');

    const SendPaymentServiceInstance = new SendPaymentService(client, {
      amount,
      fee,
      receiverB58Code,
      senderMonitorId: state.monitorId,
    });

    const {
      isSuccess,
      data,
      errorMessage,
    } = await SendPaymentServiceInstance.call();

    if (isSuccess) {
      dispatch({
        payload: {
          ...data,
        },
        type: 'PAY_ADDRESS_CODE',
      });
    } else {
      throw new Error(errorMessage);
    }
  };

  const retrieveEntropy = async (password: string) => {
    const DecryptEntropyServiceInstance = new DecryptEntropyService(client, {
      password,
    });

    const {
      isSuccess,
      data,
      errorMessage,
    } = await DecryptEntropyServiceInstance.call();
    if (isSuccess) {
      return data.entropy;
    }
    throw new Error(errorMessage);
  };

  const submitGiftCode = async (
    txProposal: TxProposal,
    giftB58Code: string,
  ) => {
    if (state.monitorId === null) throw new Error('TODO - need better message - This should never happen');

    const SubmitGiftCodeServiceInstance = new SubmitGiftCodeService(client, {
      giftB58Code,
      senderMonitorId: state.monitorId, // TODO, on multiple accounts we need to select from form
      txProposal,
    });
    const {
      isSuccess,
      data,
      errorMessage,
    } = await SubmitGiftCodeServiceInstance.call();
    if (isSuccess) {
      dispatch({
        payload: {
          ...data,
        },
        type: 'UPDATE_GIFT_CODES',
      });
    }
    if (!isSuccess) throw new Error(errorMessage);
  };

  const submitTransaction = async (txProposal: TxProposal) => {
    if (state.monitorId === null) throw new Error('TODO - need better message - This should never happen');

    const SubmitTransactionServiceInstance = new SubmitTransactionService(
      client,
      {
        senderMonitorId: state.monitorId, // TODO, on multiple accounts we need to select from form
        txProposal,
      },
    );
    const {
      isSuccess,
      data,
      errorMessage,
    } = await SubmitTransactionServiceInstance.call();

    if (isSuccess) {
      dispatch({
        payload: {
          ...data,
        },
        type: 'UPDATE_STATUS',
      });
    } else {
      throw new Error(errorMessage);
    }
  };

  const unlockWallet = async (password: string) => {
    const { encryptedEntropy } = state;
    if (!encryptedEntropy) return;

    const UnlockWalletServiceInstance = new UnlockWalletService(client, {
      password,
    });

    const {
      isSuccess,
      data,
      errorMessage,
    } = await UnlockWalletServiceInstance.call();
    if (isSuccess) {
      dispatch({
        payload: {
          isAuthenticated: true,
          ...data,
        },
        type: 'UNLOCK_WALLET',
      });
    } else {
      throw new Error(errorMessage);
    }
  };

  useEffect(() => {
    // TODO, i don't need to make this async
    const initialise = async () => {
      try {
        const LocalStoreInstance = new LocalStore();
        // TODO - fix typescript
        const encryptedEntropy = LocalStoreInstance.getEncryptedEntropy();
        const assertedEncryptedEntropy = typeof encryptedEntropy === 'string' ? encryptedEntropy : null;

        const giftCodes = LocalStoreInstance.getGiftCodes();
        const assertedGiftCodes = Array.isArray(giftCodes) ? giftCodes : [];
        // try to get encryptedEntropy from file
        // const accessToken = window.localStorage.getItem('accessToken');
        // TODO - clean up this initalize function in a way that makes sense
        // on initalize, we should pull the encrypted entropy (if its there)
        // the state in dispatch will control the Guards
        dispatch({
          payload: {
            account: null,
            encryptedEntropy: assertedEncryptedEntropy,
            giftCodes: assertedGiftCodes,
            isAuthenticated: false, // TODO - for now, let's set as false
          },
          type: 'INITIALISE',
        });
      } catch (err) {
        dispatch({
          payload: {
            account: null,
            encryptedEntropy: null,
            giftCodes: null,
            isAuthenticated: false,
          },
          type: 'INITIALISE',
        });
      }
    };

    initialise();
  }, []);

  useEffect(() => {
    const { balance, monitorId } = state;
    // TODO - check this early exit
    if (balance === undefined || monitorId === null) return () => {};

    const fetchBalance = async () => {
      // TODO - consider making a GetBalanceService
      // but, currently, it's unclear of its value if it's just 1 call

      // TODO - like most of the api calls, i really want to, instead,
      // attach them directly to the client.
      // Let's time box this for 1 hour today
      const GetBalanceResponse = await getBalance(client, {
        monitorId,
        subaddressIndex: 0,
      });
      const newBalance = BigInt(GetBalanceResponse.getBalance());
      if (newBalance !== balance) {
        dispatch({
          payload: {
            balance: newBalance,
          },
          type: 'FETCH_BALANCE',
        });
      }
    };
    fetchBalance();
    const fetchBalanceForver = setInterval(fetchBalance, 1000);
    return () => {
      return clearInterval(fetchBalanceForver);
    };
    // TODO - consider rebuilding the setInterval based on roundtrip time
    // TODO - Right now, we have 1 monitorID. later, we may have multiple for
    // many accounts. We'll need to parse each monitorId and built a fetcher for each.
    // Or Alternatievly (and I like this idea more), our GetBalanceService can take
    // an array of monitorIds and return a balance for each.
  }, [state, client]);

  useEffect(() => {
    const { monitorId } = state;
    // TODO -- am i doing this right? triple check
    if (monitorId === null) return () => {};

    const fetchLedgerInfo = async () => {
      if (monitorId === undefined) return;

      const GetStatusServiceInstance = new GetStatusService(client, {
        monitorId,
      });
      const {
        isSuccess,
        data,
        errorMessage,
      } = await GetStatusServiceInstance.call();
      if (isSuccess) {
        const { localBlockIndex, networkHighestBlockIndex, nextBlock } = data;
        if (
          state.localBlockIndex === null
          || state.networkHighestBlockIndex === null
          || state.nextBlock === null
          || localBlockIndex !== state.localBlockIndex
          || networkHighestBlockIndex !== state.networkHighestBlockIndex
          || nextBlock !== state.nextBlock
        ) {
          dispatch({
            payload: {
              localBlockIndex,
              networkHighestBlockIndex,
              nextBlock,
            },
            type: 'SYNC_LEDGER',
          });
        }
      } else {
        throw new Error(errorMessage);
      }
    };
    fetchLedgerInfo();
    const fetchLedgerInfoForever = setInterval(fetchLedgerInfo, 1000);
    return () => {
      return clearInterval(fetchLedgerInfoForever);
    };
  }, [state, client]);

  // if (!state.isInitialised) {
  //   return <SplashScreen />;
  // }
  return (
    <MobileCoinDContext.Provider
      value={{
        ...state,
        buildGiftCode,
        buildTransaction,
        changePassword,
        confirmEntropyKnown,
        createAccount,
        deleteStoredGiftB58Code,
        importAccount,
        openGiftCode,
        payAddressCode,
        retrieveEntropy,
        submitGiftCode,
        submitTransaction,
        unlockWallet,
      }}
    >
      {children}
    </MobileCoinDContext.Provider>
  );
};

export default MobileCoinDContext;
