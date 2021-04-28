import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';
import { SnackbarProvider } from 'notistack';

import { ChangePinView } from './ChangePin.view';

describe('ChangePinView', () => {
  test('render and submit', async () => {
    const handleOnClick = jest.fn();
    const setPin = jest.fn();
    const pinThresholdPmob = '10.000000000000';
    const pin = '12345678';

    const { getByText } = render(
      <SnackbarProvider>
        <ChangePinView
          onClickBack={handleOnClick}
          setPin={setPin(pin, pinThresholdPmob, 'password')}
          pin={pin}
          pinThresholdPmob={pinThresholdPmob}
        />
      </SnackbarProvider>
    );
    expect(getByText('Transaction PIN settings')).toBeInTheDocument();

    const passwordField = screen.getByLabelText('Current Passphrase', {
      selector: 'input',
    }) as HTMLInputElement;
    const newPinField = screen.getByLabelText('PIN', {
      selector: 'input',
    }) as HTMLInputElement;
    const confirmPinField = screen.getByLabelText('PIN Confirmation', {
      selector: 'input',
    }) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Set PIN' });

    userEvent.type(passwordField, 'password');
    userEvent.type(newPinField, pin);
    userEvent.type(confirmPinField, pin);
    await waitFor(() => {
      userEvent.click(submitButton);
    });

    expect(setPin).toBeCalledWith(pin, pinThresholdPmob, 'password');
  });
});
