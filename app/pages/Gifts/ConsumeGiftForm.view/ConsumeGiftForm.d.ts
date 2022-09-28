import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface ConsumeGiftFormProps {
  confirmation: {
    giftCodeB58: string;
    giftCodeStatus: string;
    giftValue: number;
  };
  fee: string;
  onClickCancel: () => void;
  onClickClaimGift: () => void;
  onClickOpenGift: (x: string) => void;
  selectedAccount: SelectedAccount;
  showModal: boolean;
}
