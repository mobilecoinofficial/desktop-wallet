import React from 'react';
import type { FC } from 'react';

import { Box, FormHelperText, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import type { CreateWalletViewProps } from './CreateWallet';

interface CreateWalletFormValues {
  password: string;
  passwordConfirmation: string;
  submit: null;
}

const CreateWalletView: FC<CreateWalletViewProps> = ({ onClickCreate }: CreateWalletViewProps) => {
  const { t } = useTranslation('UnlockWallet');

  const handleOnSubmit = (values: CreateWalletFormValues) => onClickCreate(values.password);

  return (
    <>
      <Typography variant="h2" paragraph>
        Create Wallet
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Please enter a passphrase to encrypt your wallet database. If you lose this and don't have your account secrets backed up, there will be no way to recover your account!
      </Typography>
      <Formik
        initialValues={{ password: '', passwordConfirmation: '', submit: null }}
        validationSchema={Yup.object().shape({
          password: Yup.string().min(8, 'min 8').max(99, 'max 99').required(t('passwordRequired')),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Verify Passphrase is required'),
        })}
        onSubmit={handleOnSubmit}
      >
        {({ errors, isSubmitting, dirty, isValid, setFieldValue, submitForm }) => (
          <Form name="UnlockWalletInnerForm">
            <Field
              data-testid="passwordField"
              component={TextField}
              fullWidth
              label={t('passwordLabel')}
              name="password"
              type="password"
            />
            <Field
              data-testid="passwordConfirmationField"
              component={TextField}
              fullWidth
              label="Confirm Passphrase"
              name="passwordConfirmation"
              type="password"
            />
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <SubmitButton
              data-testid="submit-button"
              disabled={!dirty || !isValid || isSubmitting}
              isSubmitting={isSubmitting}
              onClick={submitForm}
            >
              Create
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateWalletView;
export { CreateWalletView };
