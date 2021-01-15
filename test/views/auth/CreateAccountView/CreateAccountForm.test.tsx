import React from 'react';

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateAccountForm, {
  createAccountFormOnSubmit,
} from '../../../../app/views/auth/CreateAccountView/CreateAccountForm';
import renderSnapshot from '../../../renderSnapshot';

jest.mock('../../../../app/hooks/useMobileCoinD');

function setupComponent() {
  // Variables
  const validAccountName64 = '64llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll';
  const invalidAccountName65 = '65lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll';
  const invalidPasswordShort = 'shooort';
  const validPassword99 = 'longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglon';

  const { mockUseMobileCoinDValues } = renderSnapshot(
    <CreateAccountForm onSubmit={createAccountFormOnSubmit} isTest />,
  );

  // Render Elements
  const form = screen.getByRole('form');
  const accountNameField = screen.getByLabelText('Account Name (optional)', {
    exact: false,
    selector: 'input',
  }) as HTMLInputElement;
  const passwordField = screen.getByLabelText('Password', {
    exact: true,
    selector: 'input',
  }) as HTMLInputElement;
  const passwordConfirmationField = screen.getByLabelText(
    'Password Confirmation',
    {
      exact: true,
      selector: 'input',
    },
  ) as HTMLInputElement;
  const checkTermsField = screen.getByRole('checkbox') as HTMLInputElement;
  const termsButton = screen.getByRole('button', {
    name: 'Terms of Use',
  });
  const submitButton = screen.getByRole('button', { name: 'Create Account' });

  return {
    accountNameField,
    checkTermsField,
    form,
    invalidAccountName65,
    invalidPasswordShort,
    mockUseMobileCoinDValues,
    passwordConfirmationField,
    passwordField,
    submitButton,
    termsButton,
    validAccountName64,
    validPassword99,
  };
}

function setupOnSubmit() {
  // Mocks
  const mockSetStatus = jest.fn();
  const mockSetSubmitting = jest.fn();
  const mockSetErrors = jest.fn();
  const mockCreateAccount = jest.fn();

  // Variables
  const accountName = 'account name';
  const password = 'password';
  const isMountedRefTrue = { current: true };
  const isMountedRefFalse = { current: false };
  const helpers = {
    setErrors: mockSetErrors,
    setStatus: mockSetStatus,
    setSubmitting: mockSetSubmitting,
  };

  return {
    accountName,
    helpers,
    isMountedRefFalse,
    isMountedRefTrue,
    mockCreateAccount,
    mockSetErrors,
    mockSetStatus,
    mockSetSubmitting,
    password,
  };
}

describe('CreateAccountForm', () => {
  describe('component', () => {
    describe('initalValues', () => {
      test('sets correct initial values', async () => {
        const { form } = setupComponent();
        const expectedInitialValues = {
          accountName: '',
          checkedTerms: false,
          password: '',
          passwordConfirmation: '',
        };

        expect(form).toHaveFormValues(expectedInitialValues);
      });
    });

    describe('validations', () => {
      test('limits account name to 64 characters.', async () => {
        const {
          accountNameField,
          invalidAccountName65,
          validAccountName64,
        } = setupComponent();
        const expectedErrorMessage = 'Account Name cannot be more than 64 characters.';

        // Fill out with too long account name
        userEvent.type(accountNameField, invalidAccountName65);
        userEvent.tab(); // Tab to trigger validations

        // Await because validations are async
        const errorMessage = await screen.findByText(expectedErrorMessage);
        await waitFor(() => {
          expect(errorMessage).toBeInTheDocument();
        });

        // Clear and use name under the limit
        userEvent.clear(accountNameField);
        userEvent.type(accountNameField, validAccountName64);
        userEvent.tab(); // Tab to trigger validations
        await waitFor(() => {
          expect(errorMessage).not.toBeInTheDocument();
        });
      });

      test('checkbox is disabled until reading terms', async () => {
        const {
          checkTermsField,
          termsButton,
        } = setupComponent();
        const expectedTermsMessage = 'You must read the Terms of Use before using the wallet.';

        // The checkbox is diabled until user has read terms
        expect(checkTermsField.value).toBe('false');
        userEvent.click(checkTermsField);
        expect(checkTermsField.value).toBe('false');

        const termsMessage = await screen.findByText(expectedTermsMessage);
        await waitFor(() => {
          expect(termsMessage).toBeInTheDocument();
        });

        // Reading the terms removes message and allows you to click terms
        userEvent.click(termsButton);
        await waitFor(() => {
          expect(termsMessage).not.toBeInTheDocument();
        });
        userEvent.click(checkTermsField);
        expect(checkTermsField.value).toBe('true');
      });

      test('password is required and must be between 8 and 99 characters', async () => {
        const {
          passwordField,
          validPassword99,
          invalidPasswordShort,
        } = setupComponent();
        const expectedShortErrorMessage = 'Password must be at least 8 characters in length.';
        const expectedRequiredErrorMessage = 'Password is required';
        const expectedLongErrorMessage = 'Passwords cannot be more than 99 characters.';

        // Type up to 1 short from valid and check error
        userEvent.type(passwordField, invalidPasswordShort);
        userEvent.tab(); // Tab to trigger validations

        // Await because validations are async
        const shortErrorMessage = await screen.findByText(
          expectedShortErrorMessage,
        );
        await waitFor(() => {
          expect(shortErrorMessage).toBeInTheDocument();
        });

        // Add a character to become valid
        userEvent.type(passwordField, '1');
        userEvent.tab(); // Tab to trigger validations
        await waitFor(() => {
          expect(shortErrorMessage).not.toBeInTheDocument();
        });

        // Clear to show required error
        userEvent.clear(passwordField);
        // Await because validations are async
        const requiredErrorMessage = await screen.findByText(
          expectedRequiredErrorMessage,
        );
        await waitFor(() => {
          expect(requiredErrorMessage).toBeInTheDocument();
          expect(shortErrorMessage).not.toBeInTheDocument();
        });

        // Write a password at maximum valid length + 1
        userEvent.type(passwordField, validPassword99);
        userEvent.type(passwordField, '1');
        userEvent.tab(); // Tab to trigger validations
        // Await because validations are async
        const longErrorMessage = await screen.findByText(
          expectedLongErrorMessage,
        );
        await waitFor(() => {
          expect(longErrorMessage).toBeInTheDocument();
          expect(shortErrorMessage).not.toBeInTheDocument();
          expect(requiredErrorMessage).not.toBeInTheDocument();
        });

        // Finally, backspace to become valid again
        userEvent.type(passwordField, '{backspace}1');
        await waitFor(() => {
          expect(longErrorMessage).not.toBeInTheDocument();
          expect(shortErrorMessage).not.toBeInTheDocument();
          expect(requiredErrorMessage).not.toBeInTheDocument();
        });
      });

      test('password confirmation is required and must match password', async () => {
        const {
          passwordConfirmationField,
          passwordField,
          validPassword99,
        } = setupComponent();
        const expectedMustMatchMessage = 'Must match Password';
        const expectedRequiredErrorMessage = 'Password Confirmation is required';

        // Type different passwords and password confirmations
        userEvent.type(passwordField, validPassword99);
        userEvent.type(
          passwordConfirmationField,
          'something completely different',
        );
        userEvent.tab(); // Tab to trigger validations
        // Await because validations are async
        const mustMatchErrorMessage = await screen.findByText(
          expectedMustMatchMessage,
        );
        await waitFor(() => {
          expect(mustMatchErrorMessage).toBeInTheDocument();
        });

        // Clear password confirmation to get error
        userEvent.clear(passwordConfirmationField);
        userEvent.tab(); // Tab to trigger validations
        // Await because validations are async
        const requiredErrorMessage = await screen.findByText(
          expectedRequiredErrorMessage,
        );
        await waitFor(() => {
          expect(requiredErrorMessage).toBeInTheDocument();
        });

        // Type matching confirmation to dismiss errors
        userEvent.type(passwordConfirmationField, validPassword99);
        userEvent.tab(); // Tab to trigger validations
        await waitFor(() => {
          expect(requiredErrorMessage).not.toBeInTheDocument();
          expect(mustMatchErrorMessage).not.toBeInTheDocument();
        });
      });
    });

    describe('submit', () => {
      test('calls createAccount hook with a password and accountName', async () => {
        const {
          accountNameField,
          checkTermsField,
          mockUseMobileCoinDValues,
          passwordConfirmationField,
          passwordField,
          termsButton,
          submitButton,
          validAccountName64,
          validPassword99,
        } = setupComponent();

        // First tests that the button is disabled
        expect(submitButton).toBeDisabled();
        userEvent.click(submitButton);
        await waitFor(() => {
          expect(mockUseMobileCoinDValues.createAccount).not.toBeCalled();
        });

        // Enter valid form information
        userEvent.type(accountNameField, validAccountName64);
        userEvent.type(passwordField, validPassword99);
        userEvent.type(passwordConfirmationField, validPassword99);
        userEvent.click(termsButton);
        userEvent.click(checkTermsField);
        expect(accountNameField.value).toBe(validAccountName64);
        expect(passwordField.value).toBe(validPassword99);
        expect(passwordConfirmationField.value).toBe(validPassword99);
        expect(checkTermsField.value).toBe('true');

        // Submit
        await waitFor(() => {
          expect(submitButton).not.toBeDisabled();
        });
        userEvent.click(submitButton);

        await waitFor(() => {
          expect(mockUseMobileCoinDValues.createAccount).toBeCalledWith(
            validAccountName64,
            validPassword99,
          );
        });
      });

      test('displays error when thrown', async () => {
        const expectedErrorMessage = 'I am an error!';
        const {
          accountNameField,
          checkTermsField,
          mockUseMobileCoinDValues,
          passwordConfirmationField,
          passwordField,
          termsButton,
          submitButton,
          validAccountName64,
          validPassword99,
        } = setupComponent();
        // @ts-ignore mock
        mockUseMobileCoinDValues.createAccount.mockImplementation(() => {
          throw new Error(expectedErrorMessage);
        });

        // Enter valid form information & Submit
        userEvent.type(accountNameField, validAccountName64);
        userEvent.type(passwordField, validPassword99);
        userEvent.type(passwordConfirmationField, validPassword99);
        userEvent.click(termsButton);
        userEvent.click(checkTermsField);
        userEvent.click(submitButton);

        await waitFor(() => {
          expect(screen.getByText(expectedErrorMessage)).toBeInTheDocument();
        });
      });
    });
  });

  describe('functions', () => {
    // CBB: I don't like this. But I want to make sure that the correct
    // hooks are being set with the different scenarios.
    describe('createAccountFormOnSubmit', () => {
      test('calls CreateAccount and helpers when mounted', async () => {
        const {
          accountName,
          helpers,
          isMountedRefTrue,
          mockCreateAccount,
          password,
        } = setupOnSubmit();

        const pseudoProps = {
          createAccount: mockCreateAccount,
          isMountedRef: isMountedRefTrue,
        };
        const values = { accountName, password };
        // @ts-ignore mock
        await createAccountFormOnSubmit(pseudoProps, values, helpers);

        expect(mockCreateAccount).toBeCalledWith(accountName, password);
        expect(helpers.setStatus).toBeCalledWith({ success: true });
        expect(helpers.setSubmitting).toBeCalledWith(false);
        expect(helpers.setErrors).not.toBeCalled();
      });

      test('calls CreateAccount and but not helpers when unmounted', async () => {
        const {
          accountName,
          helpers,
          isMountedRefFalse,
          mockCreateAccount,
          password,
        } = setupOnSubmit();

        const pseudoProps = {
          createAccount: mockCreateAccount,
          isMountedRef: isMountedRefFalse,
        };
        const values = { accountName, password };

        // @ts-ignore mock
        await createAccountFormOnSubmit(pseudoProps, values, helpers);

        expect(helpers.setStatus).not.toBeCalled();
        expect(helpers.setSubmitting).not.toBeCalled();
      });

      test('correctly sets helpers when call fails whem mounted', async () => {
        const {
          accountName,
          helpers,
          isMountedRefTrue,
          mockCreateAccount,
          password,
        } = setupOnSubmit();

        const errorMessage = 'error message.';
        mockCreateAccount.mockRejectedValueOnce(new Error(errorMessage));
        const pseudoProps = {
          createAccount: mockCreateAccount,
          isMountedRef: isMountedRefTrue,
        };
        const values = { accountName, password };

        // @ts-ignore mock
        await createAccountFormOnSubmit(pseudoProps, values, helpers);
        expect(mockCreateAccount).toBeCalled();

        expect(helpers.setStatus).toBeCalledWith({ success: false });
        expect(helpers.setSubmitting).toBeCalledWith(false);
        expect(helpers.setErrors).toBeCalledWith({ submit: errorMessage });
      });

      test('does not call helpers when call fails when unmounted', async () => {
        const {
          accountName,
          helpers,
          isMountedRefFalse,
          mockCreateAccount,
          password,
        } = setupOnSubmit();

        const errorMessage = 'error message.';
        mockCreateAccount.mockRejectedValueOnce(new Error(errorMessage));
        const pseudoProps = {
          createAccount: mockCreateAccount,
          isMountedRef: isMountedRefFalse,
        };
        const values = { accountName, password };

        // @ts-ignore mock
        await createAccountFormOnSubmit(pseudoProps, values, helpers);

        expect(helpers.setStatus).not.toBeCalled();
        expect(helpers.setSubmitting).not.toBeCalled();
        expect(helpers.setErrors).not.toBeCalled();
      });
    });
  });
});
