export interface HistoryListTrans {
  amount: number;
  comment: string;
  dateTime: string;
  direction: string;
  id: string;
  name: string;
  sign: string;
  status: string;
}

export interface HistoryListProps {
  transactionsList: HistoryListTrans[];
  onTransactionClick: (trans: HistoryListTrans) => void;
}
