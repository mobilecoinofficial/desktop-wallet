import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import { TermsOfUseView } from './TermsOfUse.view';

describe('TermsOfUseView', () => {
  describe('component', () => {
    const mockOnClickBack = jest.fn();
    describe('render', () => {
      test('it renders correctly', () => {
        const { asFragment } = render(<TermsOfUseView onClickBack={mockOnClickBack} />);
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('breadcrumb navigation', () => {
      test('Settings breadcrumb fires to navigate away from current view', () => {
        render(<TermsOfUseView onClickBack={mockOnClickBack} />);
        const termsPanel = screen.queryByText(
          'TERMS OF USE FOR MOBILECOINS AND MOBILECOIN WALLETS'
        );
        expect(termsPanel).toBeInTheDocument();
        userEvent.click(screen.getByText('Settings'));
        expect(mockOnClickBack).toHaveBeenCalled();
      });
    });
  });
});
