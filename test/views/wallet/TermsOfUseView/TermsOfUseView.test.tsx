import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TermsOfUseView } from '../../../../app/views/wallet';
import renderSnapshot from '../../../renderSnapshot';

describe('TermsOfUseView', () => {
  describe('component', () => {
    describe('render', () => {
      test('it renders correctly', () => {
        const { asFragment } = renderSnapshot(<TermsOfUseView />);
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('breadcrumb navigation', () => {
      test('Settings breadcrumb navigates away from current view', () => {
        renderSnapshot(<TermsOfUseView />);
        const termsPanel = screen.queryByText('MOBILECOIN TERMS OF USE FOR MOBILECOINS AND MOBILECOIN WALLETS');
        expect(termsPanel).toBeInTheDocument();
        userEvent.click(screen.getByText('Settings'));
        expect(termsPanel).not.toBeInTheDocument();
      });
    });
  });
});
