export interface RetrieveEntropyViewProps {
  retrieveEntropy: (passphrase: string) => Promise<string | void>;
  onClickBack: () => void;
}
