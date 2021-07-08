export interface ChangePinViewProps {
  accounts: { account: string; password: string }[];
  onClickBack: () => void;
  onClickChangePin: (password: string, newPin: string, newThreshold: StringUInt64) => void;
  pin: string | undefined;
  pinThresholdPmob: string;
}
