import React from 'react';

import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../../testUtils/i18nForTests';
import { ImportAccountView } from './ImportAccount.view';

jest.setTimeout(30000);

const VALID_LEGACY_ENTROPY = 'cfd48cb6f8c5e70a67a4377e4ac1bf78edaa52cfcc2b50a235778b35e845f4ae';
const VALID_PHRASE_ENTROPY =
  'sound piece color various fury lunch ozone manage layer figure hurt vault survey city dish lyrics expose balance fuel biology future carry sport text';
const WRONG_LEGACY_ENTROPY = '22091960';
const WRONG_PHRASE_ENTROPY = 'what a wonderful world';
const SOME_NAME = 'Some name';
const VALID_PASSWORD = '12345678';
const WRONG_PASSWORD = '123456789012345';
const SHORT_PASSWORD = '12345';

const setUpTest = (
  importAccount = jest.fn(),
  importLegacyAccount = jest.fn(),
  setKeychainAccount = jest.fn()
) => {
  const { container } = render(
    <ImportAccountView
      setKeychainAccount={setKeychainAccount}
      importAccount={importAccount}
      importLegacyAccount={importLegacyAccount}
    />
  );
  const nameField = container.querySelector(
    '[id="ImportAccountForm-accountNameField"]'
  ) as HTMLInputElement;
  const entropyField = container.querySelector(
    '[id="ImportAccountForm-entropyField"]'
  ) as HTMLInputElement;
  const pass1Field = container.querySelector(
    '[id="ImportAccountForm-passwordField"]'
  ) as HTMLInputElement;
  const pass2Field = container.querySelector(
    '[id="ImportAccountForm-passwordConfirmationField"]'
  ) as HTMLInputElement;
  const termsCheckbox = container.querySelector('[name="checkedTerms"]') as HTMLInputElement;
  const openTermsButton = container.querySelector('[id="openTerms"]') as HTMLInputElement;
  const submitButton = container.querySelector('[data-testid="submit-button"]') as HTMLInputElement;
  return {
    container,
    entropyField,
    importAccount,
    importLegacyAccount,
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
    entropyField,
    nameField,
    openTermsButton,
    pass1Field,
    pass2Field,
    submitButton,
    termsCheckbox,
  } = setUpTest();

  expect(nameField).not.toBeFalsy();
  expect(entropyField).not.toBeFalsy();
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
    entropyField,
    importAccount,
    importLegacyAccount,
    nameField,
    openTermsButton,
    pass1Field,
    pass2Field,
    submitButton,
    termsCheckbox,
  } = setUpTest();

  await act(async () => userEvent.type(nameField, SOME_NAME, { delay: 1 }));
  await waitFor(() => expect(nameField.value).toEqual(SOME_NAME));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());

  await act(async () => userEvent.type(entropyField, VALID_LEGACY_ENTROPY, { delay: 1 }));
  await waitFor(() => expect(entropyField.value).toEqual(VALID_LEGACY_ENTROPY));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());

  await act(async () => userEvent.type(pass1Field, VALID_PASSWORD, { delay: 1 }));
  await waitFor(() => expect(pass1Field.value).toEqual(VALID_PASSWORD));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());

  await act(async () => userEvent.type(pass2Field, VALID_PASSWORD, { delay: 1 }));
  await waitFor(() => expect(pass2Field.value).toEqual(VALID_PASSWORD));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());
  await waitFor(() => expect(termsCheckbox.disabled).toBeTruthy());

  await act(async () => userEvent.click(openTermsButton));
  const closeTermsButton = container.parentElement?.querySelector(
    '[id="closeTerms"]'
  ) as HTMLInputElement;
  await waitFor(() => expect(closeTermsButton).not.toBeFalsy());

  await act(async () => userEvent.click(closeTermsButton));
  await waitFor(() => expect(termsCheckbox.disabled).toBeFalsy());
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());

  await act(async () => userEvent.click(termsCheckbox));
  await waitFor(() => expect(submitButton.disabled).toBeFalsy());

  await act(async () => userEvent.click(submitButton));
  await waitFor(() => expect(importAccount).not.toHaveBeenCalled());
  await waitFor(() =>
    expect(importLegacyAccount).toHaveBeenCalledWith(
      SOME_NAME,
      VALID_LEGACY_ENTROPY,
      VALID_PASSWORD
    )
  );
});

test('Submit button is enabled when all required fields (phrase entropy) are entered', async () => {
  const {
    container,
    entropyField,
    importAccount,
    importLegacyAccount,
    nameField,
    openTermsButton,
    pass1Field,
    pass2Field,
    submitButton,
    termsCheckbox,
  } = setUpTest();

  await act(async () => userEvent.type(nameField, SOME_NAME, { delay: 1 }));
  await act(async () => userEvent.type(entropyField, VALID_PHRASE_ENTROPY, { delay: 1 }));
  await act(async () => userEvent.type(pass1Field, VALID_PASSWORD, { delay: 1 }));
  await act(async () => userEvent.type(pass2Field, VALID_PASSWORD, { delay: 1 }));
  await act(async () => userEvent.click(openTermsButton));
  const closeTermsButton = container.parentElement?.querySelector(
    '[id="closeTerms"]'
  ) as HTMLInputElement;
  await act(async () => userEvent.click(closeTermsButton));
  await act(async () => userEvent.click(termsCheckbox));
  await act(async () => userEvent.click(submitButton));
  await waitFor(() =>
    expect(importAccount).toHaveBeenCalledWith(SOME_NAME, VALID_PHRASE_ENTROPY, VALID_PASSWORD)
  );
  await waitFor(() => expect(importLegacyAccount).not.toHaveBeenCalled());
});

test('Wrong legacy entropy is not accepted', async () => {
  const { container, entropyField, submitButton } = setUpTest();

  await act(async () => userEvent.type(entropyField, WRONG_LEGACY_ENTROPY, { delay: 1 }));
  await act(async () => userEvent.tab());
  await waitFor(() => expect(entropyField.value).toEqual(WRONG_LEGACY_ENTROPY));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());
  await waitFor(() => expect(container.innerHTML.includes('A valid Entropy is')).toBeTruthy());
});

test('Wrong phrase entropy is not accepted', async () => {
  const { container, entropyField, submitButton } = setUpTest();

  await act(async () => userEvent.type(entropyField, WRONG_PHRASE_ENTROPY, { delay: 1 }));
  await act(async () => userEvent.tab());
  await waitFor(() => expect(entropyField.value).toEqual(WRONG_PHRASE_ENTROPY));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());
  await waitFor(() => expect(container.innerHTML.includes('A valid Entropy is 24')).toBeTruthy());
});

test('Too short password is not accepted', async () => {
  const { container, pass1Field, submitButton } = setUpTest();

  await act(async () => userEvent.type(pass1Field, SHORT_PASSWORD, { delay: 1 }));
  await act(async () => userEvent.tab());
  await waitFor(() => expect(pass1Field.value).toEqual(SHORT_PASSWORD));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());
  await waitFor(() =>
    expect(container.innerHTML.includes('Passphrase must be at least 8')).toBeTruthy()
  );
});

test('Non-matching passwords are not accepted', async () => {
  const { container, pass1Field, pass2Field, submitButton } = setUpTest();

  await act(async () => userEvent.type(pass1Field, VALID_PASSWORD, { delay: 1 }));
  await act(async () => userEvent.tab());
  await waitFor(() => expect(pass1Field.value).toEqual(VALID_PASSWORD));
  await act(async () => userEvent.type(pass2Field, WRONG_PASSWORD, { delay: 1 }));
  await act(async () => userEvent.tab());
  await waitFor(() => expect(pass2Field.value).toEqual(WRONG_PASSWORD));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());
  await waitFor(() => expect(container.innerHTML.includes('Must match Passphrase')).toBeTruthy());
});
