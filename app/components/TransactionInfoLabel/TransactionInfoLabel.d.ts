import { Token } from '../../constants/tokens';

export interface TransactionInfoLabelProps {
  value: string;
  sign: '+' | '-';
  label: string;
  token: Token;
}
