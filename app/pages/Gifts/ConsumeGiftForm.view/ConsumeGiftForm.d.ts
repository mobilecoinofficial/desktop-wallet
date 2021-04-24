import SelectedAccount from '../../../types/SelectedAccount';

export interface ConsumeGiftFormProps {
  checkGiftCodeStatus: () => unknown;
  claimGiftCode: () => unknown;
  selectedAccount: SelectedAccount;
}
