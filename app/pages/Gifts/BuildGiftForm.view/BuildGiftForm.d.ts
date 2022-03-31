import { StringB58 } from '../../../types';
import { Accounts } from '../../../types/Account';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';
import type { TxProposal } from '../../../types/TxProposal';

export interface BuildGiftFormProps {
  accounts: Accounts;
  confirmation: {
    feeConfirmation: BigInt;
    giftCodeB58: StringB58;
    totalValueConfirmation: BigInt;
    txProposal: TxProposal;
  };
  existingPin: string;
  feePmob: string;
  isSynced: boolean;
  onClickCancelBuild: () => void;
  onClickConfirmBuild: () => void;
  onClickCreateGift: (x: string, y: string) => void;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  showModal: boolean;
}
