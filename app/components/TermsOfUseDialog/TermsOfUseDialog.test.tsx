/* eslint-disable jest/no-commented-out-tests */
import React from 'react';

import 'jest-canvas-mock';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TermsOfUseDialog } from './TermsOfUseDialog.view';
import '@testing-library/jest-dom/extend-expect';
import '../../testUtils/i18nForTests';

const handleCloseTerms = jest.fn();
describe('TermsOfUseDialog', () => {
  test('renders long code with tooltip by default and toggles correctly', () => {
    render(<TermsOfUseDialog open handleCloseTerms={handleCloseTerms} />);

    userEvent.click(screen.getByText('Close Terms of Use'));

    expect(handleCloseTerms).toHaveBeenCalled();
  });
});
