import type { CheckGiftCodeStatusService, ClaimGiftCodeService } from '../../../services';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface ConsumeGiftPanelProps {
  checkGiftCodeStatus: CheckGiftCodeStatusService;
  claimGiftCode: ClaimGiftCodeService;
  selectedAccount: SelectedAccount;
}
