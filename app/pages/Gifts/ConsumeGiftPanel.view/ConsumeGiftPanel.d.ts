import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface ConsumeGiftPanelProps {
  checkGiftCodeStatus: () => unknown;
  claimGiftCode: () => unknown;
  selectedAccount: SelectedAccount;
}
