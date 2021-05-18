export interface RetrieveEntropyViewProps {
  retrieveEntropy: (passphrase: string) => Promise<string | void>;
  onClickBack: () => void;
  accounts: { account: string; password: string }[];
}
