import React from 'react';

import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../../testUtils/i18nForTests';
import { CreateWalletView } from './CreateWallet.view';

const FAKE_PASSWORD = 'fakepassword';
const SHORT_PASSWORD = 'short';
const VALID_PASSWORD = 'validpassword';
const WRONG_PASSWORD = 'wrongpassword';

const setUpTest = (onClickCreate = jest.fn()) => {
  const { container } = render(<CreateWalletView onClickCreate={onClickCreate} />);
  const passwordField = container.querySelector('[name="password"]') as HTMLInputElement;
  const passwordConfirmationField = container.querySelector(
    '[name="passwordConfirmation"]'
  ) as HTMLInputElement;
  const termsCheckbox = container.querySelector('[name="checkedTerms"]') as HTMLInputElement;
  const submitButton = container.querySelector('[data-testid="submit-button"]') as HTMLInputElement;
  const termsButton = container.querySelector('[data-testid="openTerms"]') as HTMLInputElement;
  const offlineModeCheckbox = container.querySelector(
    '[name="startInOfflineMode"]'
  ) as HTMLInputElement;

  return {
    container,
    offlineModeCheckbox,
    onClickCreate,
    passwordConfirmationField,
    passwordField,
    submitButton,
    termsButton,
    termsCheckbox,
  };
};

jest.setTimeout(30000);

describe('Create Wallet', () => {
  test('Password, password confirmation, terms checkbox, and submit button appear correctly', () => {
    const {
      offlineModeCheckbox,
      passwordConfirmationField,
      passwordField,
      submitButton,
      termsButton,
      termsCheckbox,
    } = setUpTest();

    expect(passwordField).not.toBeFalsy();
    expect(passwordField.disabled).toBeFalsy();
    expect(passwordConfirmationField).not.toBeFalsy();
    expect(passwordConfirmationField.disabled).toBeFalsy();
    expect(submitButton).not.toBeFalsy();
    expect(submitButton.disabled).toBeTruthy();
    expect(termsButton.disabled).toBeFalsy();
    expect(termsCheckbox.checked).toBeFalsy();
    expect(offlineModeCheckbox.checked).toBeFalsy();
  });

  test('Entering passwords and checking terms enables submit button and offline mode is false', async () => {
    const {
      container,
      passwordConfirmationField,
      passwordField,
      submitButton,
      termsButton,
      termsCheckbox,
      onClickCreate,
    } = setUpTest();
    /*
    If somebody wonders about the act(...) call statement below,
    read https://github.com/testing-library/user-event/issues/539
  */
    await act(async () => userEvent.type(passwordField, FAKE_PASSWORD, { delay: 1 }));
    await waitFor(() => expect(passwordField.value).toEqual(FAKE_PASSWORD));

    await act(async () => userEvent.type(passwordConfirmationField, FAKE_PASSWORD, { delay: 1 }));
    await waitFor(() => expect(passwordConfirmationField.value).toEqual(FAKE_PASSWORD));

    await act(async () => userEvent.click(termsButton));
    const closeTermsButton = container.parentElement?.querySelector(
      '[id="closeTerms"]'
    ) as HTMLInputElement;
    expect(closeTermsButton).not.toBeFalsy();

    await act(async () => userEvent.click(closeTermsButton));
    expect(termsCheckbox.disabled).toBeFalsy();
    expect(submitButton.disabled).toBeTruthy();

    await act(async () => userEvent.click(termsCheckbox));
    await waitFor(() => expect(termsCheckbox.checked).toBeTruthy());

    expect(submitButton.disabled).toBeFalsy();
    expect(onClickCreate).toHaveBeenCalledTimes(0);

    await act(async () => userEvent.click(submitButton));
    expect(onClickCreate).toHaveBeenCalledWith(FAKE_PASSWORD, false);
  });

  test('Entering passwords and checking terms enables submit button and offline mode is true', async () => {
    const {
      container,
      offlineModeCheckbox,
      passwordConfirmationField,
      passwordField,
      submitButton,
      termsButton,
      termsCheckbox,
      onClickCreate,
    } = setUpTest();
    /*
    If somebody wonders about the act(...) call statement below,
    read https://github.com/testing-library/user-event/issues/539
  */
    await act(async () => userEvent.type(passwordField, FAKE_PASSWORD, { delay: 1 }));
    await waitFor(() => expect(passwordField.value).toEqual(FAKE_PASSWORD));

    await act(async () => userEvent.type(passwordConfirmationField, FAKE_PASSWORD, { delay: 1 }));
    await waitFor(() => expect(passwordConfirmationField.value).toEqual(FAKE_PASSWORD));

    await act(async () => userEvent.click(termsButton));
    const closeTermsButton = container.parentElement?.querySelector(
      '[id="closeTerms"]'
    ) as HTMLInputElement;
    expect(closeTermsButton).not.toBeFalsy();

    await act(async () => userEvent.click(closeTermsButton));
    expect(termsCheckbox.disabled).toBeFalsy();
    expect(submitButton.disabled).toBeTruthy();

    await act(async () => userEvent.click(termsCheckbox));
    await waitFor(() => expect(termsCheckbox.checked).toBeTruthy());

    await act(async () => userEvent.click(offlineModeCheckbox));
    await waitFor(() => expect(offlineModeCheckbox.checked).toBeTruthy());

    expect(submitButton.disabled).toBeFalsy();
    expect(onClickCreate).toHaveBeenCalledTimes(0);

    await act(async () => userEvent.click(submitButton));
    expect(onClickCreate).toHaveBeenCalledWith(FAKE_PASSWORD, true);
  });

  test('Too short password is not accepted', async () => {
    const { container, passwordField, submitButton } = setUpTest();

    await act(async () => userEvent.type(passwordField, SHORT_PASSWORD, { delay: 1 }));
    await act(async () => userEvent.tab());
    expect(passwordField.value).toEqual(SHORT_PASSWORD);
    expect(submitButton.disabled).toBeTruthy();
    expect(
      container.innerHTML.includes('Password must be at least 8 characters in length.')
    ).toBeTruthy();
  });

  test('Non-matching passwords are not accepted', async () => {
    const { container, passwordField, passwordConfirmationField, submitButton } = setUpTest();

    await act(async () => userEvent.type(passwordField, VALID_PASSWORD, { delay: 1 }));
    await act(async () => userEvent.tab());
    expect(passwordField.value).toEqual(VALID_PASSWORD);

    await act(async () => userEvent.type(passwordConfirmationField, WRONG_PASSWORD, { delay: 1 }));
    await act(async () => userEvent.tab());
    expect(passwordConfirmationField.value).toEqual(WRONG_PASSWORD);

    expect(submitButton.disabled).toBeTruthy();
    expect(container.innerHTML.includes('Must match Password')).toBeTruthy();
  });
});
