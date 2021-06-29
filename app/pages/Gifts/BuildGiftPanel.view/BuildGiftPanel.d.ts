import type {
  BuildGiftCodeService,
  DeleteStoredGiftCodeB58Service,
  SubmitGiftCodeService,
} from '../../../services';
import type { GiftCode } from '../../../types/GiftCode.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface BuildGiftPanelProps {
  buildGiftCode: BuildGiftCodeService;
  onClickCode: (code: string, text: string) => void;
  deleteStoredGiftCodeB58: DeleteStoredGiftCodeB58Service;
  feePmob: string;
  existingPin: string;
  giftCodes: GiftCode[];
  handleCopyClick: unknown;
  isSynced: boolean;
  onClickDeleteGiftCode: (code: string) => void;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  submitGiftCode: SubmitGiftCodeService;
}
