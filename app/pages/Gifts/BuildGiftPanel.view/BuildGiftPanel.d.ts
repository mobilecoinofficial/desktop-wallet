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
  codeClicked: (code: string, text: string) => void;
  deleteStoredGiftCodeB58: DeleteStoredGiftCodeB58Service;
  getAllGiftCodes: GetAllGiftCodesService;
  existingPin: string;
  giftCodes: GiftCode[];
  isSyncedBuffered: (x: bigint, y: bigint) => boolean;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  submitGiftCode: SubmitGiftCodeService;
}
