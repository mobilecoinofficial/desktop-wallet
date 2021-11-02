export interface FullServiceDirectoryProps {
  exportLedger: () => void;
  exportTransactionHistory: () => void;
  fullServiceDbPath: string;
  importLedger: () => void;
  ledgerDbPath: string;
}
