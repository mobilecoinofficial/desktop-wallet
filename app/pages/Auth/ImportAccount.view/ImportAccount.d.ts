export interface ImportAccountViewProps {
  onClickImport: (
    accountName: string,
    checkedSavePassword: boolean,
    entropy: string,
    password: string
  ) => void;
}
