export interface BuildGiftPanelProps {
  buildGiftCode: (x: unknown) => unknown;
  deleteStoredGiftCodeB58: (x: string) => unknown;
  existingPin: string;
  giftCodes: {
    accountId: string;
    entropy: string;
    giftCodeB58: string;
    memo: string;
    object: string;
    txoIdHex: string;
    valuePmob: string;
  }[];
  isSyncedBuffered: (x: bigint, y: bigint) => boolean;
  pinThresholdPmob: string;
  selectedAccount: unknown;
  submitGiftCode: (x: unknown) => unknown;
}
