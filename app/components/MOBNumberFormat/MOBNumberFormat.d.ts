import NumberFormat from 'react-number-format';

export interface MOBNumberFormatProps {
  inputRef?: (instance: NumberFormat | null) => void | null;
  onChange?: (event: { target: { name: string; value: string } }) => void | null;
  name?: string;
  prefix?: string;
  suffix?: string;
  valueUnit: 'pMOB' | 'MOB';
  value: string | number;
}
