import React from 'react';

import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../../testUtils/i18nForTests';
import { CreateAccountView } from './CreateAccount.view';

const SOME_NAME = 'Some name';
const VALID_PASSWORD = '12345678';
const WRONG_PASSWORD = '123456789012345';
const SHORT_PASSWORD = '12345';

const setUpTest = (createAccount = jest.fn()) => {
  const { container } = render(<CreateAccountView createAccount={createAccount} />);
  const nameField = container.querySelector(
    '[id="CreateAccountForm-accountNameField"]'
  ) as HTMLInputElement;
  const pass1Field = container.querySelector(
    '[id="CreateAccountForm-passwordField"]'
  ) as HTMLInputElement;
  const pass2Field = container.querySelector(
    '[id="CreateAccountForm-passwordConfirmationField"]'
  ) as HTMLInputElement;
  const termsCheckbox = container.querySelector('[name="checkedTerms"]') as HTMLInputElement;
  const openTermsButton = container.querySelector('[id="openTerms"]') as HTMLInputElement;
  const submitButton = container.querySelector('[data-testid="submit-button"]') as HTMLInputElement;
  return {
    container,
    createAccount,
    nameField,
    openTermsButton,
    pass1Field,
    pass2Field,
    submitButton,
    termsCheckbox,
  };
};

test('All fields appear correctly', () => {
  const {
    nameField,
    openTermsButton,
    pass1Field,
    pass2Field,
    submitButton,
    termsCheckbox,
  } = setUpTest();

  expect(nameField).not.toBeFalsy();
  expect(pass1Field).not.toBeFalsy();
  expect(pass2Field).not.toBeFalsy();
  expect(termsCheckbox).not.toBeFalsy();
  expect(termsCheckbox.disabled).toBeTruthy();
  expect(openTermsButton).not.toBeFalsy();
  expect(submitButton).not.toBeFalsy();
  expect(submitButton.disabled).toBeTruthy();
});

test('Submit button is enabled when all required fields (legacy entropy) are entered', async () => {
  const {
    container,
    createAccount,
    nameField,
    openTermsButton,
    pass1Field,
    pass2Field,
    submitButton,
    termsCheckbox,
  } = setUpTest();

  await act(async () => userEvent.type(nameField, SOME_NAME, { delay: 1 }));
  expect(nameField.value).toEqual(SOME_NAME);
  expect(submitButton.disabled).toBeTruthy();

  await act(async () => userEvent.type(pass1Field, VALID_PASSWORD, { delay: 1 }));
  expect(pass1Field.value).toEqual(VALID_PASSWORD);
  expect(submitButton.disabled).toBeTruthy();

  await act(async () => userEvent.type(pass2Field, VALID_PASSWORD, { delay: 1 }));
  expect(pass2Field.value).toEqual(VALID_PASSWORD);
  expect(submitButton.disabled).toBeTruthy();
  expect(termsCheckbox.disabled).toBeTruthy();

  await act(async () => userEvent.click(openTermsButton));
  const closeTermsButton = container.parentElement?.querySelector(
    '[id="closeTerms"]'
  ) as HTMLInputElement;
  expect(closeTermsButton).not.toBeFalsy();

  await act(async () => userEvent.click(closeTermsButton));
  expect(termsCheckbox.disabled).toBeFalsy();
  expect(submitButton.disabled).toBeTruthy();

  await act(async () => userEvent.click(termsCheckbox));
  expect(submitButton.disabled).toBeFalsy();

  await act(async () => userEvent.click(submitButton));
  expect(createAccount).toHaveBeenCalledWith(SOME_NAME, VALID_PASSWORD);
});

test('Too short password is not accepted', async () => {
  const { container, pass1Field, submitButton } = setUpTest();

  await act(async () => userEvent.type(pass1Field, SHORT_PASSWORD, { delay: 1 }));
  await act(async () => userEvent.tab());
  expect(pass1Field.value).toEqual(SHORT_PASSWORD);
  expect(submitButton.disabled).toBeTruthy();
  expect(container.innerHTML.includes('Passphrase must be at least 8')).toBeTruthy();
});

test('Non-matching passwords are not accepted', async () => {
  const { container, pass1Field, pass2Field, submitButton } = setUpTest();

  await act(async () => userEvent.type(pass1Field, VALID_PASSWORD, { delay: 1 }));
  await act(async () => userEvent.tab());
  expect(pass1Field.value).toEqual(VALID_PASSWORD);

  await act(async () => userEvent.type(pass2Field, WRONG_PASSWORD, { delay: 1 }));
  await act(async () => userEvent.tab());
  expect(pass2Field.value).toEqual(WRONG_PASSWORD);

  expect(submitButton.disabled).toBeTruthy();
  expect(container.innerHTML.includes('Must match Passphrase')).toBeTruthy();
});
