/* eslint-disable  @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import React from 'react';

import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';
import { SnackbarProvider } from 'notistack';

import { convertMobStringToPicoMobString } from '../../../utils/convertMob';
import { ChangePinView } from './ChangePin.view';

const PASSWORD = 'password';
const PIN_MOB = '10.000000000000';
const NEW_PIN = '12345678';
const WRONG_PIN = '987654';

const setUpTest = (setPin = jest.fn()) => {
  const handleOnClick = jest.fn();

  const { container } = render(
    <SnackbarProvider>
      <ChangePinView
        onClickBack={handleOnClick}
        setPin={setPin}
        pin=""
        pinThresholdPmob="15.0000000"
      />
    </SnackbarProvider>
  );

  const passwordField = container.querySelector(
    '[id="CPV-currentPasswordField"]'
    // '[name="currentPassword"]'
  ) as HTMLInputElement;
  const newPinField = container.querySelector('[id="CPV-newPinField"]') as HTMLInputElement;
  const confirmPinField = container.querySelector('[id="CPV-confirmPinField"]') as HTMLInputElement;
  const minPinMob = container.querySelector('[id="CPV-pinThresholdMob"]') as HTMLInputElement;
  const submitButton = container.querySelector('[data-testid="submit-button"]') as HTMLInputElement;

  return {
    confirmPinField,
    container,
    handleOnClick,
    minPinMob,
    newPinField,
    passwordField,
    setPin,
    submitButton,
  };
};

describe('ChangePinView', () => {
  /* FK TO REVIEW...
  test('requires PINs to match', async () => {
    const { confirmPinField, container, newPinField, passwordField } = setUpTest();

    expect(container.innerHTML.includes('Transaction PIN settings')).toBeTruthy();

    await act(async () => userEvent.type(passwordField, PASSWORD, { delay: 1 }));
    await act(async () => userEvent.type(newPinField, NEW_PIN, { delay: 1 }));
    await act(async () => userEvent.type(confirmPinField, WRONG_PIN, { delay: 1 }));
    await act(async () => userEvent.tab());
    await waitFor(() => expect(container.innerHTML.includes('Must match PIN')).toBeTruthy());
  });

  test('calls API if everything is OK', async () => {
    const {
      confirmPinField,
      container,
      minPinMob,
      newPinField,
      passwordField,
      setPin,
      submitButton,
    } = setUpTest(jest.fn().mockResolvedValue(true));

    await act(async () => userEvent.type(passwordField, PASSWORD, { delay: 1 }));
    await act(async () => userEvent.type(newPinField, NEW_PIN, { delay: 1 }));
    await act(async () => userEvent.type(confirmPinField, NEW_PIN, { delay: 1 }));
    await act(async () => userEvent.type(minPinMob, PIN_MOB, { delay: 1 }));
    await act(async () => userEvent.tab());
    expect(setPin).not.toHaveBeenCalled();

    await waitFor(() => expect(submitButton.disabled).toBeFalsy());
    await act(async () => userEvent.click(submitButton));
    await waitFor(() =>
      expect(setPin).toHaveBeenCalledWith(
        NEW_PIN,
        convertMobStringToPicoMobString(PIN_MOB),
        PASSWORD
      )
    );

    expect(container.innerHTML.includes('Invalid Password')).toBeFalsy();
  });

  test('does not close on error', async () => {
    const {
      confirmPinField,
      container,
      minPinMob,
      newPinField,
      passwordField,
      setPin,
      submitButton,
    } = setUpTest(jest.fn().mockRejectedValue(new Error('Invalid Password')));

    await act(async () => userEvent.type(passwordField, PASSWORD, { delay: 1 }));
    await act(async () => userEvent.type(newPinField, NEW_PIN, { delay: 1 }));
    await act(async () => userEvent.type(confirmPinField, NEW_PIN, { delay: 1 }));
    await act(async () => userEvent.type(minPinMob, PIN_MOB, { delay: 1 }));
    await act(async () => userEvent.click(submitButton));
    await waitFor(() =>
      expect(setPin).toHaveBeenCalledWith(
        NEW_PIN,
        convertMobStringToPicoMobString(PIN_MOB),
        PASSWORD
      )

  END OF FK TO REVIEW */
  /* JOHN CODE 
  test('render and submit', async () => {
    const handleOnClick = jest.fn();
    const setPin = jest.fn();
    const pinThresholdPmob = '10.000000000000';
    const pin = '12345678';

    const { getByText } = render(
      <SnackbarProvider>
        <ChangePinView
          accounts={[]}
          onClickBack={handleOnClick}
          setPin={setPin(pin, pinThresholdPmob, 'password')}
          pin={pin}
          pinThresholdPmob={pinThresholdPmob}
        />
      </SnackbarProvider>
    );

    await waitFor(() => expect(container.innerHTML.includes('Invalid Password')).toBeTruthy());
  });
  */
});
