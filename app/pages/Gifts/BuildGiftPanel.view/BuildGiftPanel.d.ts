import GiftCode from '../../../types/GiftCode';
import SelectedAccount from '../../../types/SelectedAccount';

export interface BuildGiftPanelProps {
  buildGiftCode: (x: unknown) => unknown;
  deleteStoredGiftCodeB58: (x: string) => unknown;
  existingPin: string;
  giftCodes: GiftCode[];
  isSyncedBuffered: (x: bigint, y: bigint) => boolean;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  submitGiftCode: (x: unknown) => unknown;
}
