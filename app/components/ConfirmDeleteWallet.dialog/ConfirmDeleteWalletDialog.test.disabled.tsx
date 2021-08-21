// import React from 'react';

// import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import { TermsOfUseDialog } from './ConfirmDeleteWalletDialog.view';
// import '@testing-library/jest-dom/extend-expect';
// import '../../testUtils/i18nForTests';

// const handleCloseTerms = jest.fn();
// describe('TermsOfUseDialog', () => {
//   test('renders TermsOfUse and closes on click', () => {
//     render(<TermsOfUseDialog open handleCloseTerms={handleCloseTerms} />);

//     expect(screen.getByTestId('tos-header').textContent).toEqual(
//       'MOBILECOIN TERMS OF USE FOR MOBILECOINS AND MOBILECOIN WALLETS'
//     );

//     userEvent.click(screen.getByText('Close Terms of Use'));

//     expect(handleCloseTerms).toHaveBeenCalled();
//   });

//   test('TermsOfUse not rendered if open prop is false', () => {
//     render(<TermsOfUseDialog open={false} handleCloseTerms={handleCloseTerms} />);

//     expect(screen.queryByTestId('tos-header')).toBeNull();
//   });
// });
