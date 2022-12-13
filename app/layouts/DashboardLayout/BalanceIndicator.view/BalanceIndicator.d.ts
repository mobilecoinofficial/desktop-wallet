export interface BalanceIndicatorProps {
  balance: string;
  containsUnverified: boolean;
  getViewOnlySync: () => Promise<void>;
  importLedger: () => Promise<void>;
  importViewOnlySync: () => Promise<void>;
  isSynced: boolean;
  offlineModeEnabled: boolean;
  viewOnly: boolean;
}
