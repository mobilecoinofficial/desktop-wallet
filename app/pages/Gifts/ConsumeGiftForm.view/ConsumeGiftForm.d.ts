import type { CheckGiftCodeStatusService, ClaimGiftCodeService } from '../../../services';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface ConsumeGiftFormProps {
  checkGiftCodeStatus: CheckGiftCodeStatusService;
  claimGiftCode: ClaimGiftCodeService;
  selectedAccount: SelectedAccount;
}
