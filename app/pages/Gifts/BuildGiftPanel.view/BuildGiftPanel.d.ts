import type { GiftCode } from '../../../types/GiftCode.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface BuildGiftPanelProps {
  buildGiftCode: (x: unknown) => unknown;
  deleteStoredGiftCodeB58: (x: string) => unknown;
  getAllGiftCodes: () => unknown;
  existingPin: string;
  giftCodes: GiftCode[];
  isSyncedBuffered: (x: bigint, y: bigint) => boolean;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  submitGiftCode: (x: unknown) => unknown;
}
