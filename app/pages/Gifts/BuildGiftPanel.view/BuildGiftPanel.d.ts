import { Accounts } from '../../../types/Account';
import type { GiftCode } from '../../../types/GiftCode.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';
import type { TxProposal } from '../../../types/TxProposal';

export interface BuildGiftPanelProps {
  accounts: Accounts;
  confirmation: {
    feeConfirmation: bigint;
    giftCodeB58: string;
    totalValueConfirmation: bigint;
    txProposal: TxProposal;
  };
  existingPin: string;
  fee: string;
  giftCodes: GiftCode[];
  handleCopyClick: (s1: string, s2?: string) => void;
  isSynced: boolean;
  onClickCancelBuild: () => void;
  onClickCode: (code: string, text: string) => void;
  onClickConfirmBuild: () => void;
  onClickCreateGift: (x: string, y: string) => void;
  onClickDeleteGiftCode: (x: string) => void;
  pinThresholdPmob: string;
  selectedAccount: SelectedAccount;
  showModal: boolean;
}
