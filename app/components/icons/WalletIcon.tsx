import * as React from 'react';

import { IconProps } from './IconProps';

function WalletIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M1 8.263a3 3 0 012.176-2.885l14.05-4.014a1 1 0 011.274.962V20a3 3 0 01-3 3H4a3 3 0 01-3-3V8.263z"
        fill="#fff"
        stroke={color}
      />
      <rect x={1} y={7} width={22} height={16} rx={3} fill="#fff" stroke={color} />
      <circle cx={19.5} cy={15.5} r={1.5} fill={color} />
      <path fill="#fff" d="M18 5.5h1v1h-1z" />
    </svg>
  );
}

WalletIcon.defaultProps = {
  color: '#A6AAB4',
  height: 24,
  width: 24,
};

export default WalletIcon;
