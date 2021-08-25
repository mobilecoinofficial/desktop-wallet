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

const setUpTest = (onClickImport = jest.fn()) => {
  const { container } = render(<ImportAccountView onClickImport={onClickImport} />);
  const nameField = container.querySelector(
    '[id="ImportAccountForm-accountNameField"]'
  ) as HTMLInputElement;
  const entropyField = container.querySelector(
    '[id="ImportAccountForm-entropyField"]'
  ) as HTMLInputElement;
  const submitButton = container.querySelector('[data-testid="submit-button"]') as HTMLInputElement;
  return {
    container,
    entropyField,
    nameField,
    onClickImport,
    submitButton,
  };
};

test('All fields appear correctly', () => {
  const { entropyField, nameField, submitButton } = setUpTest();

  expect(nameField).not.toBeFalsy();
  expect(entropyField).not.toBeFalsy();
  expect(submitButton).not.toBeFalsy();
  expect(submitButton.disabled).toBeTruthy();
});

test('Submit button is enabled when all required fields (legacy entropy) are entered', async () => {
  const { entropyField, nameField, onClickImport, submitButton } = setUpTest();

  await act(async () => userEvent.type(nameField, SOME_NAME, { delay: 1 }));
  await waitFor(() => expect(nameField.value).toEqual(SOME_NAME));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());

  await act(async () => userEvent.type(entropyField, VALID_LEGACY_ENTROPY, { delay: 1 }));
  await waitFor(() => expect(entropyField.value).toEqual(VALID_LEGACY_ENTROPY));
  await waitFor(() => expect(submitButton.disabled).toBeFalsy());

  await act(async () => userEvent.click(submitButton));
  await waitFor(() => expect(onClickImport).toHaveBeenCalled());
});

test('Submit button is enabled when all required fields (phrase entropy) are entered', async () => {
  const { entropyField, nameField, onClickImport, submitButton } = setUpTest();

  await act(async () => userEvent.type(nameField, SOME_NAME, { delay: 1 }));
  await act(async () => userEvent.type(entropyField, VALID_PHRASE_ENTROPY, { delay: 1 }));
  await act(async () => userEvent.click(submitButton));
  await waitFor(() => expect(onClickImport).toHaveBeenCalled());
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
