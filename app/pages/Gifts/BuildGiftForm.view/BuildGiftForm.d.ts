import { Accounts } from '../../../types/Account';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';
import type { TxProposal } from '../../../types/TxProposal';

export interface BuildGiftFormProps {
  accounts: Accounts;
  confirmation: {
    feeConfirmation: number;
    giftCodeB58: string;
    totalValueConfirmation: number;
    txProposal: TxProposal;
  };
  existingPin: string;
  feePmob: string;
  isSynced: boolean;
  onClickCancelBuild: () => void;
  onClickCode: (code: string, text: string) => void;
  onClickConfirmBuild: () => void;
  onClickCreateGift: (x: string, y: string) => void;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  showModal: boolean;
}
