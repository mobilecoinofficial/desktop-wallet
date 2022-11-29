import React from 'react';

import NumberFormat from 'react-number-format';
import type { NumberFormatValues } from 'react-number-format';

import { convertTokenValueToDisplayValue } from '../../utils/convertMob';
import { MOBNumberFormatProps } from './MOBNumberFormat';

// This component handles converting incoming pico-mobs and mobs into mobs.
// All values from FullService are in pico-mobs, but once it hits our frontend,
// it's more sensible have the display value be mobs. (Sensible my be a strong
// word... The real reason is I have to debug seperating the display value from)
// the calculated value. This would simplify the matter). So, until we have
// standardized all values are pico-mob with flex display, this is what we got.
// eUSD comes in micro precison, rather than pico precision
const MOBNumberFormat = (props: MOBNumberFormatProps): JSX.Element => {
  const { inputRef, onChange, name, value, token, convert, ...rest } = props;
  const fieldValue = convert ? convertTokenValueToDisplayValue(value, token) : value;
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
      decimalScale={Math.log10(token.precision)}
      displayType={displayType}
      getInputRef={inputRef}
      isNumericString
      onValueChange={handleOnChange}
      thousandSeparator
      value={fieldValue}
      {...rest}
    />
  );
};

MOBNumberFormat.defaultProps = {
  convert: true,
  inputRef: null,
  name: '',
  onChange: null,
  prefix: '',
  suffix: '',
};

export default MOBNumberFormat;
export { MOBNumberFormat };
