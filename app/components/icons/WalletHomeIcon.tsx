import * as React from 'react';

import { IconProps } from './IconProps';

function WalletHomeIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg
      // width={27}
      // height={27}
      viewBox="0 0 27 27"
      fill="none"
      {...props}
    >
      <path
        d="M25.35 12.258l-.002-.002L14.742 1.65a2.377 2.377 0 00-1.692-.7c-.64 0-1.24.248-1.693.7l-10.6 10.6-.011.012a2.396 2.396 0 00.004 3.38 2.38 2.38 0 001.663.701h.422v7.805a2.805 2.805 0 002.802 2.801h4.149c.42 0 .762-.34.762-.762v-6.119a1.28 1.28 0 011.278-1.278h2.447a1.28 1.28 0 011.278 1.278v6.12c0 .42.341.761.762.761h4.15a2.805 2.805 0 002.801-2.801v-7.805h.392c.64 0 1.24-.249 1.693-.701.932-.933.932-2.45.001-3.384zm-1.079 2.307a.865.865 0 01-.615.255h-1.154a.762.762 0 00-.761.761v8.567a1.28 1.28 0 01-1.279 1.278h-3.387v-5.358a2.805 2.805 0 00-2.802-2.801h-2.447a2.805 2.805 0 00-2.802 2.801v5.358H5.637a1.28 1.28 0 01-1.279-1.278v-8.567a.762.762 0 00-.761-.761H2.463a.864.864 0 01-.635-.255.871.871 0 010-1.231l.001-.001L12.434 2.728a.864.864 0 01.616-.255c.232 0 .45.09.615.255L24.268 13.33l.005.005c.337.34.337.891-.002 1.23z"
        fill={color}
      />
    </svg>
  );
}

WalletHomeIcon.defaultProps = {
  color: '#ADB0BB',
  height: 27,
  width: 27,
};

export default WalletHomeIcon;
