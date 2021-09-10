import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import '../../../../testUtils/i18nForTests';

import { DeleteAccountConfirmationView } from './DeleteAccountConfirmation.view';

const SHORT_CODE = '3b4522e8e42a2269f802f16f6999062c1c0e6aafe765eef8f7b78156f9d6b2c5';
const ACCOUNT_ID = '7AqV3PSf';

describe('Delete Account Confirmation View', () => {
  test('requires confirmation checked and correct short code to enable delete button', async () => {
    const handleOnCancel = jest.fn();
    const handleOnDelete = jest.fn();

    const { container } = render(
      <DeleteAccountConfirmationView
        cancel={handleOnCancel}
        confirm={handleOnDelete}
        selectedAccountId={ACCOUNT_ID}
        shortCode={SHORT_CODE}
      />
    );

    const confirmShortCodeField = container.querySelector(
      '[id="shortCodeConfirmationField"]'
    ) as HTMLInputElement;
    const deleteButton = container.querySelector('[id="confirm-delete"]') as HTMLInputElement;
    const confirmCheckbox = container.querySelector('[id="confirmCheckbox"') as HTMLInputElement;

    expect(deleteButton.disabled).toBeTruthy();
    expect(confirmCheckbox.checked).toBeFalsy();

    await act(async () => userEvent.click(confirmShortCodeField));

    expect(deleteButton.disabled).toBeTruthy();

    await act(async () => userEvent.type(confirmShortCodeField, SHORT_CODE, { delay: 1 }));

    expect(deleteButton.disabled).toBeTruthy();

    await act(async () => userEvent.click(confirmCheckbox));

    expect(confirmCheckbox.checked).toBeTruthy();
    expect(deleteButton.disabled).toBeFalsy();

    await act(async () => userEvent.click(deleteButton));

    expect(handleOnDelete).toHaveBeenCalled();
  });
});
