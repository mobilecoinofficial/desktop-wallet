export interface FullServiceDirectoryProps {
  exportLedger: () => void;
  exportTransactionHistory: () => void;
  fullServiceBinariesPath: string;
  fullServiceDbPath: string;
  importLedger: () => void;
  ledgerDbPath: string;
}
