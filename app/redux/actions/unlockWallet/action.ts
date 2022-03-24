import { Contact, SelectedAccount, StringUInt64, WalletStatus } from '../../../types';
import { UnlockWalletAction, UNLOCK_WALLET } from './type';

export const unlockWalletAction = (
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
