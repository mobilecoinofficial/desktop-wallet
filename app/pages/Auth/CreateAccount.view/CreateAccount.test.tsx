import React from 'react';

import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../../testUtils/i18nForTests';
import { CreateAccountView } from './CreateAccount.view';

const SOME_NAME = 'Some name';

const setUpTest = (onClickCreate = jest.fn()) => {
  const { container } = render(<CreateAccountView onClickCreate={onClickCreate} />);
  const nameField = container.querySelector(
    '[id="CreateAccountForm-accountNameField"]'
  ) as HTMLInputElement;
  const submitButton = container.querySelector('[data-testid="submit-button"]') as HTMLInputElement;
  return {
    container,
    nameField,
    onClickCreate,
    submitButton,
  };
};

describe('Create Account', () => {
  test('All fields appear correctly', () => {
    const { nameField, submitButton } = setUpTest();

    expect(nameField).not.toBeFalsy();
    expect(submitButton).not.toBeFalsy();
    expect(submitButton.disabled).toBeFalsy();
  });
});
