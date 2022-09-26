import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';
import { Provider } from 'react-redux';

import { store } from '../../../redux/store';
import { SetPinModal } from './SetPinModal.view';

describe('SetPinModal', () => {
  const setPinMsg =
    'Your Transaction PIN is used as an extra safety measure. It is required if a transaction value is higher than the threshold MOB amount.';
  test('when isShown prop is false the modal is not rendered', () => {
    const handleOnClick = jest.fn();

    render(
      <Provider store={store}>
        <SetPinModal onPinSubmit={handleOnClick} isShown={false} />
      </Provider>
    );

    const pinModal = screen.queryByText(setPinMsg);
    expect(pinModal).toBeNull();
  });

  test('render and submit with valid form data', async () => {
    const handleOnClick = jest.fn();
    const pin = '123456';
    const pinThreshold = '10.000000000000';

    render(
      <Provider store={store}>
        <SetPinModal onPinSubmit={handleOnClick} isShown />
      </Provider>
    );

    const newPinField = screen.getByLabelText('PIN', {
      selector: 'input',
    }) as HTMLInputElement;
    const confirmPinField = screen.getByLabelText('PIN Confirmation', {
      selector: 'input',
    }) as HTMLInputElement;
    const pinThresholdField = screen.getByLabelText('Minimum amount that requires a PIN', {
      selector: 'input',
    }) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Set PIN' });

    userEvent.type(newPinField, pin);
    userEvent.type(confirmPinField, pin);
    userEvent.type(pinThresholdField, pinThreshold);
    await waitFor(() => {
      userEvent.click(submitButton);
    });

    expect(handleOnClick).toBeCalled();
  });

  test('does not submit and throws error with invalid form data', async () => {
    const handleOnClick = jest.fn();
    const pin = '1234';
    const pinThreshold = '10.000000000000';

    render(
      <Provider store={store}>
        <SetPinModal onPinSubmit={handleOnClick} isShown />
      </Provider>
    );

    const newPinField = screen.getByLabelText('PIN', {
      selector: 'input',
    }) as HTMLInputElement;
    const confirmPinField = screen.getByLabelText('PIN Confirmation', {
      selector: 'input',
    }) as HTMLInputElement;
    const pinThresholdField = screen.getByLabelText('Minimum amount that requires a PIN', {
      selector: 'input',
    }) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Set PIN' });

    userEvent.type(newPinField, pin);
    userEvent.type(confirmPinField, pin);
    userEvent.type(pinThresholdField, pinThreshold);
    await waitFor(() => {
      userEvent.click(submitButton);
    });

    expect(screen.getByText('PIN must be at least 6 characters long.')).toBeInTheDocument();
    expect(handleOnClick).not.toHaveBeenCalled();
  });
});
