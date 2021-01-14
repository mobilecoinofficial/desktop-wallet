import * as React from 'react';

import { IconProps } from './IconProps';

function CircleMOBIcon({
  backgroundColor,
  color,
  ...rest
}: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 43 43" fill="none" {...rest}>
      <circle
        cx={21.5}
        cy={21.5}
        r={21}
        fill={backgroundColor}
        stroke={color}
      />
      <path
        d="M21.5 40C11.299 40 3 31.7 3 21.5S11.299 3 21.5 3 40 11.3 40 21.5C40 31.702 31.701 40 21.5 40zm8.957-22.37a2.41 2.41 0 01-4.346 1.438H6.064a15.741 15.741 0 00-.188 2.433c0 8.615 7.008 15.624 15.624 15.624 6.309 0 11.757-3.76 14.22-9.154H17.267a2.41 2.41 0 11-.08-2.875v-.001h19.521c.273-1.155.418-2.358.418-3.594 0-8.616-7.01-15.625-15.625-15.625-6.753 0-12.519 4.306-14.696 10.316H26.11a2.41 2.41 0 014.346 1.438z"
        fill={color}
      />
    </svg>
  );
}

CircleMOBIcon.defaultProps = {
  backgroundColor: '#fff',
  color: '#A6AAB4',
  height: 144,
  width: 144,
};

export default CircleMOBIcon;
