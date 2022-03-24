import { Contact, SelectedAccount, StringUInt64, WalletStatus } from '../../../types';

export const UNLOCK_WALLET = 'UNLOCK_WALLET';

export type UnlockWalletAction = {
  type: 'UNLOCK_WALLET';
  payload: {
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
