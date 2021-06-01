import React from 'react';

import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import { UnlockWalletView } from './UnlockWallet.view';

const FAKE_PASSWORD = 'fakepassword';

const setUpTest = (unlockWallet = jest.fn()) => {
  const { container } = render(<UnlockWalletView unlockWallet={unlockWallet} accounts={[]} />);

  const passwordField = container.querySelector('[name="password"]') as HTMLInputElement;
  const submitButton = container.querySelector('[data-testid="submit-button"]') as HTMLInputElement;
  return { container, passwordField, submitButton, unlockWallet };
};

test('Password and submit button appear correctly', () => {
  const { passwordField, submitButton } = setUpTest();

  expect(passwordField).not.toBeFalsy();
  expect(passwordField.disabled).toBeFalsy();
  expect(submitButton).not.toBeFalsy();
  expect(submitButton.disabled).toBeTruthy();
});

test('Entering password enables submit button', async () => {
  const { passwordField, submitButton, unlockWallet } = setUpTest();
  /*
    If somebody wonders about the next act(...) call statement,
    read https://github.com/testing-library/user-event/issues/539
  */
  await userEvent.type(passwordField, FAKE_PASSWORD, { delay: 1 });
  expect(passwordField.value).toEqual(FAKE_PASSWORD);
  expect(submitButton.disabled).toBeFalsy();
  expect(unlockWallet).toHaveBeenCalledTimes(0);

  await act(async () => userEvent.click(submitButton));
  expect(unlockWallet).toHaveBeenCalledWith(FAKE_PASSWORD);
});

test('Entering wrong password produces an error', async () => {
  const ERROR_MESSAGE = 'Invalid Password';
  const { container, passwordField, submitButton, unlockWallet } = setUpTest(
    jest.fn(() => Promise.reject(Error(ERROR_MESSAGE)))
  );
  expect(submitButton.disabled).toBeTruthy();

  await act(async () => userEvent.type(passwordField, FAKE_PASSWORD, { delay: 1 }));
  expect(passwordField.value).toEqual(FAKE_PASSWORD);

  await act(async () => userEvent.click(submitButton));
  expect(unlockWallet).toHaveBeenCalledWith(FAKE_PASSWORD);
  expect(container.innerHTML.includes(ERROR_MESSAGE)).toBeTruthy();
});

test('It renders some menu items', async () => {
  const unlockWallet = jest.fn();
  const { getByText } = render(
    <UnlockWalletView
      unlockWallet={unlockWallet}
      accounts={[{ account: 'user', password: 'password' }]}
    />
  );

  expect(getByText('user')).toBeInTheDocument();
  expect(getByText('********')).toBeInTheDocument();
});
