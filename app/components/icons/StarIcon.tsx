import * as React from 'react';

import { IconProps } from './IconProps';

function StarIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 30 15" fill="none" {...props}>
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill={color}
      />
    </svg>
  );
}

StarIcon.defaultProps = {
  color: '#ADB0BB',
  height: 20,
  width: 20,
};

export default StarIcon;
