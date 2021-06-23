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
  isSynced: boolean;
  pinThresholdPmob: number;
  selectedAccount: SelectedAccount;
  submitTransaction: SubmitTransactionService;
  updateContacts: UpdateContactsService;
}
