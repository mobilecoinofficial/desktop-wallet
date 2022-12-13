import NumberFormat from 'react-number-format';

import { Token } from '../../constants/tokens';

export interface MOBNumberFormatProps {
  inputRef?: (instance: NumberFormat | null) => void | null;
  onChange?: (event: { target: { name: string; value: string } }) => void | null;
  name?: string;
  prefix?: string;
  suffix?: string;
  token: Token;
  value: string | number;
  convert?: boolean;
}
