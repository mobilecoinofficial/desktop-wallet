import React from 'react';

import { ConfigureMobilecoindView } from '../../../../app/views/wallet';
import renderSnapshot from '../../../renderSnapshot';

describe('Configure Mobilecoind View', () => {
  describe('component', () => {
    describe('render', () => {
      test('Configure Mobilecoind View renders correctly', () => {
        const { asFragment } = renderSnapshot(<ConfigureMobilecoindView />);
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
