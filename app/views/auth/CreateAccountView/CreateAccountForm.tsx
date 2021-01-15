import React from 'react';
import type { FC } from 'react';

import {
  Box, Button, FormHelperText, Typography,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import type { FormikHelpers } from 'formik';
import { Checkbox, TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import { SubmitButton, TermsOfUseDialog } from '../../../components';
import type { MobileCoinDContextValue } from '../../../contexts/MobileCoinDContext';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import useMobileCoinD from '../../../hooks/useMobileCoinD';

export interface CreateAccountFormValues {
  accountName: string;
  checkedTerms: boolean;
  password: string;
  passwordConfirmation: string;
  submit: null;
}

interface CreateAccountFormPseudoProps {
  isMountedRef: { current: boolean };
  createAccount: MobileCoinDContextValue['createAccount'];
}

export const createAccountFormOnSubmit = async (
  pseudoProps: CreateAccountFormPseudoProps,
  values: CreateAccountFormValues,
  helpers: FormikHelpers<CreateAccountFormValues>,
) => {
  const { isMountedRef, createAccount } = pseudoProps;
  const { accountName, password } = values;
  const { setStatus, setErrors, setSubmitting } = helpers;

  try {
    await createAccount(accountName, password);

    if (isMountedRef.current) {
      setStatus({ success: true });
      setSubmitting(false);
    }
  } catch (err) {
    if (isMountedRef.current) {
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  }
};

interface CreateAccountFormProps {
  isTest: boolean | undefined;
  onSubmit: typeof createAccountFormOnSubmit;
}

const CreateAccountForm: FC<CreateAccountFormProps> = ({
  isTest,
  onSubmit,
}: CreateAccountFormProps) => {
  const isMountedRef = useIsMountedRef();
  const { createAccount } = useMobileCoinD();

  const [canCheck, setCanCheck] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleCloseTerms = () => {
    setCanCheck(true);
    setOpen(false);
  };

  // FIX-ME: This hack is to avoid opening the Dialog -- which is causing some
  // headaches in testing.
  const handleClickOpen = () => {
    return isTest ? handleCloseTerms() : setOpen(true);
  };

  const handleOnSubmit = async (
    values: CreateAccountFormValues,
    helpers: FormikHelpers<CreateAccountFormValues>,
  ) => {
    const pseduoProps = { createAccount, isMountedRef };
    onSubmit(pseduoProps, values, helpers);
  };

  const initialValues = {
    accountName: '',
    checkedTerms: false,
    password: '',
    passwordConfirmation: '',
    submit: null,
  };

  const validationSchema = Yup.object().shape({
    accountName: Yup.string().max(
      64,
      'Account Name cannot be more than 64 characters.',
    ),
    // CBB: It appears that the checkedTerms error message is not working properly.
    checkedTerms: Yup.bool().oneOf(
      [true],
      'You must accept Terms of Use to use wallet.',
    ),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters in length.')
      .max(99, 'Passwords cannot be more than 99 characters.')
      .required('Password is required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password')], 'Must match Password')
      .required('Password Confirmation is required'),
  });

  return (
    <Formik
      isInitialValid={false}
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {({
        errors, isSubmitting, isValid, submitForm,
      }) => {
        return (
          <Form name="CreateAccountFormName">
            <Field
              id="CreateAccountForm-accountNameField"
              component={TextField}
              fullWidth
              label="Account Name (optional)"
              name="accountName"
            />
            <Field
              id="CreateAccountForm-passwordField"
              component={TextField}
              fullWidth
              label="Password"
              margin="dense"
              name="password"
              type="password"
            />
            <Field
              id="CreateAccountForm-passwordConfirmationField"
              component={TextField}
              fullWidth
              label="Password Confirmation"
              margin="dense"
              name="passwordConfirmation"
              type="password"
            />
            <Box pt={1} display="flex">
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row-reverse"
              >
                <Box>
                  <Typography display="inline">
                    I have read and accept the
                  </Typography>
                  <Button color="primary" onClick={handleClickOpen}>
                    Terms of Use
                  </Button>
                </Box>
                <Field
                  component={Checkbox}
                  type="checkbox"
                  name="checkedTerms"
                  disabled={!canCheck}
                  indeterminate={!canCheck}
                />
              </Box>
            </Box>
            {!canCheck && (
              <FormHelperText focused>
                You must read the Terms of Use before using the wallet.
              </FormHelperText>
            )}
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <SubmitButton
              disabled={!isValid || isSubmitting}
              onClick={submitForm}
              isSubmitting={isSubmitting}
            >
              Create Account
            </SubmitButton>
            <TermsOfUseDialog open={open} handleCloseTerms={handleCloseTerms} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateAccountForm;
