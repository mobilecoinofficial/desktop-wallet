export interface HistoryItemProps {
  amount: number;
  comment: string;
  dateTime: Date;
  direction: string;
  id: string;
  name: string;
  onClick: () => void;
  sign: '+' | '-';
  status: string;
}
