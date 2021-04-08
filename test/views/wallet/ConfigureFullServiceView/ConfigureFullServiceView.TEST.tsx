import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ConfigureFullServiceView } from '../../../../app/views/wallet';
import renderSnapshot from '../../../renderSnapshot';

describe('ConfigureFullServiceView', () => {
  describe('component', () => {
    describe('render', () => {
      test('ConfigureFullServiceView renders correctly', () => {
        const { asFragment } = renderSnapshot(<ConfigureFullServiceView />);
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('breadcrumb navigation', () => {
      test('Settings breadcrumb navigates away from current view', () => {
        renderSnapshot(<ConfigureFullServiceView />);
        const configPanel = screen.queryByText(
          /This panel allows you to customize the behavior of FullService/i
        );
        expect(configPanel).toBeInTheDocument();
        userEvent.click(screen.getByText('Settings'));
        expect(configPanel).not.toBeInTheDocument();
      });
    });
  });
});
