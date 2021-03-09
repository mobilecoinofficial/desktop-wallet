import React from 'react';

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UnlockWalletForm, {
  unlockWalletFormOnSubmit,
} from '../../../../app/views/auth/UnlockWalletView/UnlockWalletForm';
import renderSnapshot from '../../../renderSnapshot';

jest.mock('../../../../app/hooks/useFullService');

function setupComponent() {
  // Variables
  const password = 'password';

  const { asFragment, mockUseFullServiceValues } = renderSnapshot(
    <UnlockWalletForm onSubmit={unlockWalletFormOnSubmit} />
  );

  // Render Elements
  const form = screen.getByRole('form');
  const passwordField = screen.getByLabelText('Password', {
    exact: false,
    selector: 'input',
  }) as HTMLInputElement;
  const submitButton = screen.getByRole('button', { name: 'Unlock Wallet' });

  return {
    asFragment,
    form,
    mockUseFullServiceValues,
    password,
    passwordField,
    submitButton,
  };
}

function setupOnSubmit() {
  // Mocks
  const mockSetStatus = jest.fn();
  const mockSetSubmitting = jest.fn();
  const mockSetErrors = jest.fn();
  const mockUnlockWallet = jest.fn();

  // Variables
  const password = 'password';
  const isMountedRefTrue = { current: true };
  const isMountedRefFalse = { current: false };
  const helpers = {
    setErrors: mockSetErrors,
    setStatus: mockSetStatus,
    setSubmitting: mockSetSubmitting,
  };

  return {
    helpers,
    isMountedRefFalse,
    isMountedRefTrue,
    mockSetErrors,
    mockSetStatus,
    mockSetSubmitting,
    mockUnlockWallet,
    password,
  };
}

describe('UnlockWalletForm', () => {
  describe('component', () => {
    describe('initalValues', () => {
      test('sets correct initial values', async () => {
        const { form } = setupComponent();
        const expectedInitialValues = { password: '' };

        expect(form).toHaveFormValues(expectedInitialValues);
      });
    });

    describe('submit', () => {
      test('calls unlockWallet hook with the password', async () => {
        const {
          mockUseFullServiceValues,
          password,
          passwordField,
          submitButton,
        } = setupComponent();
        userEvent.click(submitButton);
        await waitFor(() => {
          expect(mockUseFullServiceValues.unlockWallet).not.toBeCalled();
        });

        userEvent.type(passwordField, password);
        userEvent.click(submitButton);
        await waitFor(() => {
          expect(mockUseFullServiceValues.unlockWallet).toBeCalledWith(password);
        });
      });

      test('displays error when thrown', async () => {
        const expectedErrorMessage = 'I am an error!';
        const {
          mockUseFullServiceValues,
          password,
          passwordField,
          submitButton,
        } = setupComponent();
        // @ts-ignore mock
        mockUseFullServiceValues.unlockWallet.mockImplementation(() => {
          throw new Error(expectedErrorMessage);
        });

        // Enter valid form information & Submit
        userEvent.type(passwordField, password);
        userEvent.click(submitButton);

        await waitFor(() => {
          expect(screen.getByText(expectedErrorMessage)).toBeInTheDocument();
        });
      });
    });
  });

  describe('functions', () => {
    // CBB -- I don't like this. But I want to make sure that the correct
    // hooks are being set with the different scenarios.
    describe('unlockWalletFormOnSubmit', () => {
      test('it calls unlockWallet and helpers when mounted', async () => {
        const { helpers, isMountedRefTrue, mockUnlockWallet, password } = setupOnSubmit();

        const pseudoProps = {
          isMountedRef: isMountedRefTrue,
          unlockWallet: mockUnlockWallet,
        };
        const values = { password };
        // @ts-ignore mock
        await unlockWalletFormOnSubmit(pseudoProps, values, helpers);

        expect(mockUnlockWallet).toBeCalledWith(password);
        expect(helpers.setStatus).toBeCalledWith({ success: true });
        expect(helpers.setSubmitting).toBeCalledWith(false);
        expect(helpers.setErrors).not.toBeCalled();
      });

      test('it calls unlockWallet and but not helpers when unmounted', async () => {
        const { helpers, isMountedRefFalse, mockUnlockWallet, password } = setupOnSubmit();

        const pseudoProps = {
          isMountedRef: isMountedRefFalse,
          unlockWallet: mockUnlockWallet,
        };
        const values = { password };
        // @ts-ignore mock
        await unlockWalletFormOnSubmit(pseudoProps, values, helpers);

        expect(helpers.setStatus).not.toBeCalled();
        expect(helpers.setSubmitting).not.toBeCalled();
      });

      test('correctly sets helpers when call fails whem mounted', async () => {
        const { helpers, isMountedRefTrue, mockUnlockWallet, password } = setupOnSubmit();

        const errorMessage = 'error message.';
        mockUnlockWallet.mockRejectedValueOnce(new Error(errorMessage));
        const pseudoProps = {
          isMountedRef: isMountedRefTrue,
          unlockWallet: mockUnlockWallet,
        };
        const values = { password };

        // @ts-ignore mock
        await unlockWalletFormOnSubmit(pseudoProps, values, helpers);
        expect(mockUnlockWallet).toBeCalled();

        expect(helpers.setStatus).toBeCalledWith({ success: false });
        expect(helpers.setSubmitting).toBeCalledWith(false);
        expect(helpers.setErrors).toBeCalledWith({ submit: errorMessage });
      });

      test('does not call helpers when call fails when unmounted', async () => {
        const { helpers, isMountedRefFalse, mockUnlockWallet, password } = setupOnSubmit();

        const errorMessage = 'error message.';
        mockUnlockWallet.mockRejectedValueOnce(new Error(errorMessage));
        const pseudoProps = {
          isMountedRef: isMountedRefFalse,
          unlockWallet: mockUnlockWallet,
        };
        const values = { password };

        // @ts-ignore mock
        await unlockWalletFormOnSubmit(pseudoProps, values, helpers);

        expect(helpers.setStatus).not.toBeCalled();
        expect(helpers.setSubmitting).not.toBeCalled();
        expect(helpers.setErrors).not.toBeCalled();
      });
    });
  });
});
