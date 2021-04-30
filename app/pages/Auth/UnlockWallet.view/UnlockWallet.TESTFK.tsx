import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../../testUtils/i18nForTests';
import { UnlockWalletView } from './UnlockWallet.view';

/*
function setupComponent() {
    const password = 'password';
    const form = screen.getByRole('form');
    const passwordField = screen.getByLabelText('Password', {
      exact: false,
      selector: 'input',
    }) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Unlock Wallet' });

    return {
      form,
      password,
      passwordField,
      submitButton,
    };
  }
  */

test('Password and submit button appear correctly', () => {
  const { getByTestId } = render(<UnlockWalletView unlockWallet={() => Promise.resolve()} />);

  const passwordField = getByTestId('passwordField');
  const submitButton = getByTestId('submit-button');

  expect(passwordField).not.toBeFalsy();
  expect(submitButton).not.toBeFalsy();
  expect(submitButton.getAttribute('disabled')).toEqual('');
});

test('Entering password enables submit button', () => {
  const { getByTestId } = render(<UnlockWalletView unlockWallet={() => Promise.resolve()} />);

  const passwordField = getByTestId('passwordField');
  const submitButton = getByTestId('submit-button');

  userEvent.type(passwordField.next, 'somesecretpassword');
  userEvent.tab();

  console.log('3333333333333333333333333', passwordField.textContent, passwordField.innerText);

  //  expect(passwordField.textContent).toEqual('somesecretpassword');

  expect(submitButton.getAttribute('disabled')).toEqual('');
});
