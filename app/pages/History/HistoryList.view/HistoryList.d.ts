import type { TransactionLog } from '../../../types/TransactionLog.d';

export interface HistoryListProps {
  onTransactionClick: (transactionLog: TransactionLog) => void;
  transactionLogsList: TransactionLog[];
  firstToShow: number;
  setFirstToShow: (value: number) => void;
  selectedTabIndex: number;
  setSelectedTabIndex: (value: number) => void;
}
