import type { Contact } from '../../../types/Contact.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';
import type { StringHex } from '../../../types/SpecialStrings';

export enum Showing {
  INPUT_FORM,
  CONFIRM_FORM,
  SEND_FORM,
}

interface SendParameters {
  accountId: string;
  alias: string;
  fee: string;
  isChecked: boolean;
  recipientPublicAddress: StringHex;
  valuePmob: string;
}

export interface SendMobProps {
  confirmation?: unknown;
  contacts: Contact[];
  existingPin: string;
  feePmob: string;
  importTxProposalFromClipboard: () => void;
  isSynced: boolean;
  offlineModeEnabled: boolean;
  onClickCancel: () => void;
  onClickConfirm: () => void;
  onClickCopyTxProposal: () => void;
  onClickSend: (x: SendParameters) => void;
  pinThresholdPmob: number;
  selectedAccount: SelectedAccount;
  showing: Showing;
}
