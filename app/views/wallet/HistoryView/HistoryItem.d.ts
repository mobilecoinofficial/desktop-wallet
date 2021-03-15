import TransactionLog from '../../../types/TransactionLog';

export interface HistoryItemProps {
  onClick: () => void;
  transactionLog: TransactionLog;
}
