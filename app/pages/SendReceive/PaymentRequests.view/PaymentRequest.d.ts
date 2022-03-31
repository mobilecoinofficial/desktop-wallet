import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface PaymentRequestProps {
  confirmation?: unknown;
  enqueueSnackbar: () => void;
  feePmob: string;
  onClickCancel: () => void;
  onClickConfirm: (resetForm: () => void) => void;
  // onClickViewPaymentRequest: () => void;
  selectedAccount: SelectedAccount;
}
