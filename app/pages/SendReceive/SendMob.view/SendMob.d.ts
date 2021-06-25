import type { Contact } from '../../../types/Contact.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export enum Showing {
  INPUT_FORM,
  CONFIRM_FORM,
  SEND_FORM,
}

export interface SendMobProps {
  confirmation?: unknown;
  contacts: Contact[];
  existingPin: string;
  feePmob: string;
  isSynced: boolean;
  onClickCancel: unknown;
  onClickConfirm: unknown;
  onClickSend: unknown;
  pinThresholdPmob: number;
  selectedAccount: SelectedAccount;
  showing: Showing;
}
