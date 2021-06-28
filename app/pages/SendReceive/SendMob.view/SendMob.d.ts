import type {
  AssignAddressForAccountService,
  BuildTransactionService,
  SubmitTransactionService,
  UpdateContactsService,
} from '../../../services';
import type { Contact } from '../../../types/Contact.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface SendMobProps {
  assignAddressForAccount: AssignAddressForAccountService;
  buildTransaction: BuildTransactionService;
  contacts: Contact[];
  existingPin: string;
  feePmob: string;
  isSyncedBuffered: (a0: bigint, a1: bigint) => boolean;
  pinThresholdPmob: number;
  selectedAccount: SelectedAccount;
  submitTransaction: SubmitTransactionService;
  updateContacts: UpdateContactsService;
}
