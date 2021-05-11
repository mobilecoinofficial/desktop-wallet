import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface BuildGiftFormProps {
  buildGiftCode: () => unknown;
  existingPin: string;
  isSyncedBuffered: (x: bigint, y: bigint) => boolean;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  submitGiftCode: () => unknown;
}
