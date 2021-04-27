import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import { PrivacyPolicyView } from '.';

describe('PrivacyPolicyView', () => {
  describe('component', () => {
    const mockOnClickBack = jest.fn();
    describe('render', () => {
      test('it renders correctly', () => {
        const { asFragment } = render(<PrivacyPolicyView onClickBack={mockOnClickBack} />);
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('breadcrumb navigation', () => {
      test('Settings breadcrumb fires to navigate away from current view', () => {
        render(<PrivacyPolicyView onClickBack={mockOnClickBack} />);
        const privacyMessage = screen.queryByText(
          'This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.'
        );
        expect(privacyMessage).toBeInTheDocument();
        userEvent.click(screen.getByText('Settings'));
        expect(mockOnClickBack).toHaveBeenCalled();
      });
    });
  });
});
