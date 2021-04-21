export interface BuildGiftPanelProps {
  buildGiftCode: (x: unknown) => unknown;
  deleteStoredGiftCodeB58: (x: string) => unknown;
  existingPin: string;
  giftCodes: unknown;
  isSyncedBuffered: (x: bigint, y: bigint) => boolean;
  pinThresholdPmob: string;
  selectedAccount: unknown;
  submitGiftCode: (x: unknown) => unknown;
}
