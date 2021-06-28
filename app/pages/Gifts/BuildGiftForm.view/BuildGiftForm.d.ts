import type {
  BuildGiftCodeService,
  GetAllGiftCodesService,
  SubmitGiftCodeService,
} from '../../../services';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface BuildGiftFormProps {
  buildGiftCode: BuildGiftCodeService;
  getAllGiftCodes: GetAllGiftCodesService;
  codeClicked: (code: string, text: string) => void;
  existingPin: string;
  feePmob: string;
  isSyncedBuffered: (x: bigint, y: bigint) => boolean;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  submitGiftCode: SubmitGiftCodeService;
}
