import * as React from 'react';

import { IconProps } from './IconProps';

function KeyIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 34 34" fill="none" {...props}>
      <path
        d="M25 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm2.42-6.046a.652.652 0 01-1.174.389h-5.418A4.228 4.228 0 0025 21.223a4.229 4.229 0 003.843-2.474h-4.987a.651.651 0 11-.022-.777h5.276A4.228 4.228 0 0025 12.777a4.23 4.23 0 00-3.972 2.788h5.218a.651.651 0 011.175.388z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.02 18.8l.47 1.08c1.106 2.546 3.63 4.32 6.563 4.32 3.953 0 7.158-3.223 7.158-7.2 0-3.976-3.205-7.2-7.158-7.2-2.933 0-5.457 1.774-6.563 4.32l-.47 1.08H5.07l-2.537 2.057 2.032 2.472 1.666-1.673 1.792 1.8 1.792-1.8 1.792 1.8 1.051-1.056h5.363zm-6.413 3.6l-1.792-1.8-1.792 1.8-1.792-1.8-1.792 1.8L0 17l3.947-3.201A1.783 1.783 0 015.07 13.4h11.78c1.38-3.179 4.534-5.4 8.203-5.4C29.994 8 34 12.03 34 17s-4.006 9-8.947 9c-3.67 0-6.823-2.221-8.203-5.4h-3.452l-1.791 1.8z"
        fill={color}
      />
    </svg>
  );
}

KeyIcon.defaultProps = {
  color: '#A6AAB4',
  height: 34,
  width: 34,
};

export default KeyIcon;
