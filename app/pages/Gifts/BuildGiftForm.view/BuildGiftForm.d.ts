import type { BuildGiftCodeService, SubmitGiftCodeService } from '../../../services';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface BuildGiftFormProps {
  buildGiftCode: BuildGiftCodeService;
  existingPin: string;
  isSyncedBuffered: (x: bigint, y: bigint) => boolean;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  submitGiftCode: SubmitGiftCodeService;
}
