export interface BalanceIndicatorProps {
  balance: string;
  importLedger: () => void;
  isSynced: boolean;
  offlineModeEnabled: boolean;
}
