export interface RetrieveEntropyViewProps {
  accounts: { account: string; password: string }[];
  entropy: string;
  onClickBack: () => void;
  onClickClose: () => void;
  onClickRetrieveEntropy: (password: string) => void;
}
