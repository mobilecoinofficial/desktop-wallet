import type {
  BuildGiftCodeService,
  GetAllGiftCodesService,
  SubmitGiftCodeService,
} from '../../../services';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface BuildGiftFormProps {
  buildGiftCode: BuildGiftCodeService;
  existingPin: string;
  feePmob: string;
  getAllGiftCodes: GetAllGiftCodesService;
  isSynced: boolean;
  onClickCode: (code: string, text: string) => void;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  submitGiftCode: SubmitGiftCodeService;
}
