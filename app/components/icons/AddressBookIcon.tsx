import * as React from 'react';

import { IconProps } from './IconProps';

function AddressBookIcon(props: IconProps): JSX.Element {
  const { color } = props;
  return (
    <svg viewBox="0 0 22 22" fill="none" {...props}>
      <path
        d="M21 0H3a1 1 0 00-1 1v4H1a1 1 0 000 2h1v3H1a1 1 0 000 2h1v3H1a1 1 0 000 2h1v4a1 1 0 001 1h18a1 1 0 001-1V1a1 1 0 00-1-1zm-1 20H4v-3h1a1 1 0 000-2H4v-3h1a1 1 0 000-2H4V7h1a1 1 0 000-2H4V2h16v18z"
        fill={color}
      />
      <path
        d="M12 11a3 3 0 100-5.999A3 3 0 0012 11zm0-4a1 1 0 110 2 1 1 0 010-2zM8 18h8a1 1 0 001-1 5 5 0 10-10 0 1 1 0 001 1zm4-4a3 3 0 012.83 2H9.17A3 3 0 0112 14z"
        fill={color}
      />
    </svg>
  );
}

AddressBookIcon.defaultProps = {
  color: '#A6AAB4',
  height: 22,
  width: 22,
};

export default AddressBookIcon;
