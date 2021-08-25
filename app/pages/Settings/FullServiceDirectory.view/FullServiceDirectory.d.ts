export interface FullServiceDirectoryProps {
  exportLedger: () => void;
  fullServiceDbPath: string;
  importLedger: () => void;
  ledgerDbPath: string;
}
