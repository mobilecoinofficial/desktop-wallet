import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';

import { Confirmation, SelectedAccount, StringB58 } from '../../../types';

export interface PaymentRequestProps {
  confirmation: Confirmation;
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey;
  feePmob: string;
  onClickCancel: () => void;
  onClickConfirm: (resetForm: () => void) => void;
  onClickViewPaymentRequest: ({
    accountId,
    fee,
    recipientPublicAddress,
    valuePmob,
  }: {
    accountId: string;
    fee: string;
    recipientPublicAddress: StringB58;
    valuePmob: string;
  }) => void;
  selectedAccount: SelectedAccount;
}
