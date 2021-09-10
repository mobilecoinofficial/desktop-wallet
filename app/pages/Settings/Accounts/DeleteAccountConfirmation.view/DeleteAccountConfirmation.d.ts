export interface DeleteAccountConfirmationViewProps {
  cancel: () => void;
  confirm: () => void;
  selectedAccountId: string;
  shortCode: string;
}
