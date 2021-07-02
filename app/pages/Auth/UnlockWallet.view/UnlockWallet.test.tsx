import React from 'react';

import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../../testUtils/i18nForTests';
import { UnlockWalletView } from './UnlockWallet.view';

const FAKE_PASSWORD = 'fakepassword';

const setUpTest = (onClickUnlock = jest.fn()) => {
  const { container } = render(<UnlockWalletView onClickUnlock={onClickUnlock} />);
  const passwordField = container.querySelector('[name="password"]') as HTMLInputElement;
  const submitButton = container.querySelector('[data-testid="submit-button"]') as HTMLInputElement;
  return { container, onClickUnlock, passwordField, submitButton };
};

jest.setTimeout(30000);

describe('Unlock wallet', () => {
  test('Password and submit button appear correctly', () => {
    const { passwordField, submitButton } = setUpTest();

    expect(passwordField).not.toBeFalsy();
    expect(passwordField.disabled).toBeFalsy();
    expect(submitButton).not.toBeFalsy();
    expect(submitButton.disabled).toBeTruthy();
  });

  test('Entering password enables submit button', async () => {
    const { passwordField, submitButton, onClickUnlock } = setUpTest();
    /*
    If somebody wonders about the act(...) call statement below,
    read https://github.com/testing-library/user-event/issues/539
  */
    await userEvent.type(passwordField, FAKE_PASSWORD, { delay: 1 });
    expect(passwordField.value).toEqual(FAKE_PASSWORD);
    expect(submitButton.disabled).toBeFalsy();
    expect(onClickUnlock).toHaveBeenCalledTimes(0);

    await act(async () => userEvent.click(submitButton));
    expect(onClickUnlock).toHaveBeenCalledWith(FAKE_PASSWORD);
  });
});
