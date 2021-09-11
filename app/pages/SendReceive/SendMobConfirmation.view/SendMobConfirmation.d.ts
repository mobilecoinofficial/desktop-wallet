export interface SendMobConfirmationProps {
  confirmation: unknown;
  contactName: string;
  existingPin: unknown;
  handleClose: (x?: unknown, y?: unknown) => void;
  handleConfirmSubmit: (x?: unknown) => void;
  handleSaveConfirmation: (x?: unknown) => void;
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
