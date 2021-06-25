import type {
  BuildGiftCodeService,
  DeleteStoredGiftCodeB58Service,
  GetAllGiftCodesService,
  SubmitGiftCodeService,
} from '../../../services';
import type { GiftCode } from '../../../types/GiftCode.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface BuildGiftPanelProps {
  buildGiftCode: BuildGiftCodeService;
  onClickCode: (code: string, text: string) => void;
  deleteStoredGiftCodeB58: DeleteStoredGiftCodeB58Service;
  feePmob: string;
  getAllGiftCodes: GetAllGiftCodesService;
  existingPin: string;
  giftCodes: GiftCode[];
  handleCopyClick: unknown;
  isSynced: boolean;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  submitGiftCode: SubmitGiftCodeService;
}
