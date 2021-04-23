export interface BuildGiftFormProps {
  buildGiftCode: () => unknown;
  existingPin: string;
  isSyncedBuffered: (x: bigint, y: bigint) => boolean;
  pinThresholdPmob: string;
  selectedAccount: unknown;
  submitGiftCode: () => unknown;
}
