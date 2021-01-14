import * as React from 'react';

import { IconProps } from './IconProps';

function CircleMOBIcon({
  backgroundColor,
  color,
  ...rest
}: IconProps): JSX.Element {
  return (
    <svg viewBox="0 0 144 144" fill="none" {...rest}>
      <circle
        r={72}
        transform="matrix(-1 0 0 1 72 72)"
        fill={backgroundColor}
      />
      <path
        d="M72.362 134.724C37.975 134.724 10 106.748 10 72.364 10 37.977 37.975 10 72.362 10c34.388 0 62.362 27.977 62.362 62.364 0 34.385-27.975 62.36-62.362 62.36zm30.194-75.406a8.126 8.126 0 01-14.652 4.845H20.33a53.064 53.064 0 00-.636 8.201c0 29.041 23.625 52.669 52.667 52.669 21.268 0 39.632-12.672 47.938-30.859h-62.21a8.125 8.125 0 01-6.658 3.462 8.125 8.125 0 01-8.126-8.127 8.127 8.127 0 0114.512-5.027v-.003h65.808a52.607 52.607 0 001.407-12.114c0-29.043-23.628-52.671-52.67-52.671-22.763 0-42.199 14.516-49.54 34.777h65.082a8.126 8.126 0 0114.652 4.847z"
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
