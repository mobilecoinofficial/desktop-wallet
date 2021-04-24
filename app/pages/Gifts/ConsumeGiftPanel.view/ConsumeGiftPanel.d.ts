import SelectedAccount from '../../../types/SelectedAccount';

export interface ConsumeGiftPanelProps {
  checkGiftCodeStatus: () => unknown;
  claimGiftCode: () => unknown;
  selectedAccount: SelectedAccount;
}
