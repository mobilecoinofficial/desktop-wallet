import type { TransactionLog } from '../../../types/TransactionLog.d';

export interface HistoryListProps {
  onTransactionClick: (transactionLog: TransactionLog) => void;
  transactionLogsList: TransactionLog[];
}
