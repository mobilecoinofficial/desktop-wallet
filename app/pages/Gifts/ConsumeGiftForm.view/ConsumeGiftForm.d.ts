import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface ConsumeGiftFormProps {
  confirmation: unknown;
  feePmob: string;
  onClickCancel: () => void;
  onClickClaimGift: () => void;
  onClickOpenGift: (x: string) => void;
  selectedAccount: SelectedAccount;
  showModal: boolean;
}
