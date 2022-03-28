import * as React from 'react';

import { IconProps } from './IconProps';

export function TransactionIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 28 22" fill="none" {...props}>
      <path
        d="M27.707 7.293l-7-7A1 1 0 0019 1v3h-7a1 1 0 100 2h8a1 1 0 001-1V3.414L25.586 8 21 12.586V11a1 1 0 00-1-1H9V7a1 1 0 00-1.707-.707l-7 7a1 1 0 000 1.414l7 7A1 1 0 009 21v-3h7a1 1 0 000-2H8a1 1 0 00-1 1v1.586L2.414 14 7 9.414V11a1 1 0 001 1h11v3a1 1 0 001.707.707l7-7a1 1 0 000-1.414z"
        fill={color}
      />
    </svg>
  );
}

TransactionIcon.defaultProps = {
  color: '#ADB0BB',
  height: 22,
  width: 28,
};
