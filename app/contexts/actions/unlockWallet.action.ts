import type { Contact } from '../../types/Contact.d';
import type { StringUInt64 } from '../../types/SpecialStrings.d';
import type { WalletStatus } from '../../types/WalletStatus.d';

export const UNLOCK_WALLET = 'UNLOCK_WALLET';

export type UnlockWalletActionType = {
  type: 'UNLOCK_WALLET';
  payload: {
    contacts: Contact[];
    isPinRequired: boolean;
    pin: string | undefined;
    pinThresholdPmob: StringUInt64;
    secretKey: string;
    walletStatus: WalletStatus;
  };
};

export const unlockWalletAction = (
  contacts: Contact[],
  isPinRequired: boolean,
  pin: string | undefined,
  pinThresholdPmob: StringUInt64,
  secretKey: string,
  walletStatus: WalletStatus
): UnlockWalletActionType => ({
  payload: {
    contacts,
    isPinRequired,
    pin,
    pinThresholdPmob,
    secretKey,
    walletStatus,
  },
  type: UNLOCK_WALLET,
});
