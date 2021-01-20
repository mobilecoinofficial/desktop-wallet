import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ConfigureMobilecoindView } from '../../../../app/views/wallet';
import renderSnapshot from '../../../renderSnapshot';

describe('ConfigureMobilecoindView', () => {
  describe('component', () => {
    describe('render', () => {
      test('ConfigureMobilecoindView renders correctly', () => {
        const { asFragment } = renderSnapshot(<ConfigureMobilecoindView />);
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('breadcrumb navigation', () => {
      test('Settings breadcrumb navigates away from current view', () => {
        renderSnapshot(<ConfigureMobilecoindView />);
        const configPanel = screen.queryByText(/This panel allows you to customize the behavior of MobileCoinD/i);
        expect(configPanel).toBeInTheDocument();
        userEvent.click(screen.getByText('Settings'));
        expect(configPanel).not.toBeInTheDocument();
      });
    });
  });
});
