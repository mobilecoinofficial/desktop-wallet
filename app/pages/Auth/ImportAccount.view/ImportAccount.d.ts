export interface ImportAccountViewProps {
  onClickImport: (
    accountName: string,
    entropy: string,
    isFogEnabled: boolean,
    fogType: 'MOBILECOIN' | 'SIGNAL'
  ) => void;
}
