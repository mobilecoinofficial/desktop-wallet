export interface SendMobConfirmationProps {
  confirmation: unknown;
  contactName: string;
  existingPin: unknown;
  handleClose: (x?: unknown, y?: unknown) => void;
  handleConfirmSubmit: (x?: () => void) => void;
  handleSaveConfirmation: (x?: () => void) => void;
  isPinRequiredForTransaction: boolean;
  isSubmitting: boolean;
  remainingBalance: unknown;
  offlineModeEnabled: boolean;
  resetForm: () => void;
  selectedBalance: unknown;
  setSubmitting: () => void;
  totalSent: unknown;
  values: unknown;
}
