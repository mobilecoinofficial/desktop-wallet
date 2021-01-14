import * as React from 'react';

import { IconProps } from './IconProps';

function QRCodeIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M19 1h6v6M7 1H1v6M19 25h6v-6M7 25H1v-6M10 4H4v6h6V4z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4h-6v6h6V4zM22 16h-6v6h6v-6zM10 16H4v6h6v-6zM11 13h4M13 18v3M13 8V5M20 13h2M4 13h2"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

QRCodeIcon.defaultProps = {
  color: '#A6AAB4',
  height: 24,
  width: 24,
};

export default QRCodeIcon;
