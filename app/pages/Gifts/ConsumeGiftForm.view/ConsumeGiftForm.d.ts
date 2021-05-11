import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface ConsumeGiftFormProps {
  checkGiftCodeStatus: () => unknown;
  claimGiftCode: () => unknown;
  selectedAccount: SelectedAccount;
}
