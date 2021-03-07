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
import type { FullServiceContextValue } from '../../../contexts/FullServiceContext';
import useFullService from '../../../hooks/useFullService';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

export interface ImportAccountFormValues {
  accountName: string;
  checkedTerms: boolean;
  entropy: string;
  password: string;
  passwordConfirmation: string;
  submit: null;
}

interface ImportAccountFormPseudoProps {
  isMountedRef: { current: boolean };
  importAccount: FullServiceContextValue['importAccount'];
}

export const importAccountFormOnSubmit = async (
  pseudoProps: ImportAccountFormPseudoProps,
  values: ImportAccountFormValues,
  helpers: FormikHelpers<ImportAccountFormValues>,
) => {
  const { isMountedRef, importAccount } = pseudoProps;
  const { accountName, entropy, password } = values;
  const { setStatus, setErrors, setSubmitting } = helpers;

  try {
    await importAccount(accountName, entropy, password);

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

interface ImportAccountFormProps {
  isTest: boolean | undefined;
  onSubmit: typeof importAccountFormOnSubmit;
}

const ImportAccountForm: FC<ImportAccountFormProps> = ({
  isTest,
  onSubmit,
}: ImportAccountFormProps) => {
  const isMountedRef = useIsMountedRef();
  const { importAccount } = useFullService();

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
    values: ImportAccountFormValues,
    helpers: FormikHelpers<ImportAccountFormValues>,
  ) => {
    const pseduoProps = { importAccount, isMountedRef };
    onSubmit(pseduoProps, values, helpers);
  };

  const initalValues = {
    accountName: '',
    checkedTerms: false,
    entropy: '',
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
    entropy: Yup.string()
      .matches(/^[0-9a-f]{64}$/i, 'A valid entropy is 64 hexadecimals.')
      .required('Entropy is required'),
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
      initialValues={initalValues}
      onSubmit={handleOnSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {({
        errors, isSubmitting, isValid, submitForm,
      }) => {
        return (
          <Form name="ImportAccountFormName">
            <Field
              id="ImportAccountForm-accountNameField"
              component={TextField}
              fullWidth
              label="Account Name (optional)"
              name="accountName"
            />
            <Field
              id="ImportAccountForm-entropyField"
              component={TextField}
              fullWidth
              label="Entropy"
              margin="dense"
              name="entropy"
            />
            <Field
              id="ImportAccountForm-passwordField"
              component={TextField}
              fullWidth
              label="Password"
              margin="dense"
              name="password"
              type="password"
            />
            <Field
              id="ImportAccountForm-passwordConfirmationField"
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
              Import Account
            </SubmitButton>
            <TermsOfUseDialog open={open} handleCloseTerms={handleCloseTerms} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ImportAccountForm;
