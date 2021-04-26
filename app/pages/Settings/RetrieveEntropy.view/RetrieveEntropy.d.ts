export interface RetrieveEntropyViewProps {
  retrieveEntropy: (passphrase: string) => Promise<string | void>;
  onClickBack: () => void;
}
export interface ShowRetrievedEntropyModalProps {
  entropy: string;
  open: boolean;
  onClose: () => void;
}
