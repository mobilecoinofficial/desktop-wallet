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
  value: string;
}

export interface SendMobProps {
  confirmation?: unknown;
  contacts: Contact[];
  existingPin: string;
  importTxConfirmation: () => Promise<void>;
  importSignedTransaction: () => Promise<void>;
  isSynced: boolean;
  offlineModeEnabled: boolean;
  onClickCancel: () => void;
  onClickConfirm: (resetForm: () => void) => Promise<void>;
  onClickSend: (x: SendParameters) => Promise<void>;
  pinThresholdPmob: number;
  saveTxConfirmation: (resetForm: () => void) => void;
  selectedAccount: SelectedAccount;
  showing: Showing;
}
