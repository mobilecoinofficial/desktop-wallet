import TransactionLog from '../../../types/TransactionLog.d';

export interface HistoryItemProps {
  onClick: () => void;
  transactionLog: TransactionLog;
}
