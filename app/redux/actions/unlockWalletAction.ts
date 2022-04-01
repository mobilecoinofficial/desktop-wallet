import { Contact, SelectedAccount, StringUInt64, WalletStatus } from '../../types';

export const UNLOCK_WALLET = 'UNLOCK_WALLET';

export type UnlockWalletAction = {
  type: 'UNLOCK_WALLET';
  payload: {
    addingAccount: boolean;
    contacts: Contact[];
    isPinRequired: boolean;
    pin: string | undefined;
    pinThresholdPmob: StringUInt64;
    secretKey: string;
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
    offlineModeEnabled: boolean;
  };
};

export const unlockWalletAction = (
  addingAccount: boolean,
  contacts: Contact[],
  isPinRequired: boolean,
  pin: string | undefined,
  pinThresholdPmob: StringUInt64,
  secretKey: string,
  selectedAccount: SelectedAccount,
  walletStatus: WalletStatus,
  offlineModeEnabled: boolean
): UnlockWalletAction => ({
  payload: {
    addingAccount,
    contacts,
    isPinRequired,
    offlineModeEnabled,
    pin,
    pinThresholdPmob,
    secretKey,
    selectedAccount,
    walletStatus,
  },
  type: UNLOCK_WALLET,
});
