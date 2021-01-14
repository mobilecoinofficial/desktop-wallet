import React from 'react';

import NumberFormat from 'react-number-format';
import type { NumberFormatValues } from 'react-number-format';

interface MOBNumberFormatProps {
  inputRef?: (instance: NumberFormat | null) => void | null;
  onChange?: (event: { target: { name: string; value: string } }) => void | null;
  name?: string;
  prefix?: string;
  suffix?: string;
  valueUnit: 'pMOB' | 'MOB';
  value: string | number;
}

// TODO, handle value of BigInt -- this should live in a util
const convertPicoMobStringToMob = (picoMobString: string): string => {
  if (picoMobString.length <= 12) {
    return `0.${'0'.repeat(12 - picoMobString.length)}${picoMobString}`;
  }

  return [
    picoMobString.slice(0, picoMobString.length - 12),
    '.',
    picoMobString.slice(picoMobString.length - 12),
  ].join('');
};
// This component handles converting incoming pico-mobs and mobs into mobs.
// All values from FullService are in pico-mobs, but once it hits our frontend,
// it's more sensible have the display value be mobs. (Sensible my be a strong
// word... The real reason is I have to debug seperating the display value from)
// the calculated value. This would simplify the matter). So, until we have
// standardized all values are pico-mob with flex display, this is what we got.
const MOBNumberFormat = (props: MOBNumberFormatProps): JSX.Element => {
  const { inputRef, onChange, name, value, valueUnit, ...rest } = props;

  const parsedValue =
    valueUnit === 'pMOB' && typeof value === 'string' ? convertPicoMobStringToMob(value) : value;
  const displayType = onChange ? 'input' : 'text';
  const handleOnChange = onChange
    ? (values: NumberFormatValues) => {
        onChange({
          target: {
            name: name || '',
            value: values.value,
          },
        });
      }
    : () => {};
  return (
    <NumberFormat
      allowNegative={false}
      fixedDecimalScale
      decimalScale={12}
      displayType={displayType}
      getInputRef={inputRef}
      isNumericString
      onValueChange={handleOnChange}
      thousandSeparator
      value={parsedValue}
      {...rest}
    />
  );
};

MOBNumberFormat.defaultProps = {
  inputRef: null,
  name: '',
  onChange: null,
  prefix: '',
  suffix: '',
};

export default MOBNumberFormat;
