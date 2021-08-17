import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, Button, FormHelperText, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { Checkbox, TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, TermsOfUseDialog } from '../../../components';
import {
  isValidMnemonicOrHexFormat,
  isValidMnemonicOrHexValue,
} from '../../../utils/bip39Functions';
import type { ImportAccountViewProps } from './ImportAccount.d';

interface ImportAccountFormValues {
  accountName: string;
  checkedSavePassword: boolean;
  entropy: string;
  password: string;
  passwordConfirmation: string;
  submit: null;
}

const ImportAccountView: FC<ImportAccountViewProps> = ({
  onClickImport,
}: ImportAccountViewProps) => {
  const { t } = useTranslation('ImportAccount');

  const handleOnSubmit = async (values: ImportAccountFormValues) =>
    onClickImport(values.accountName, values.entropy);

  return (
    <>
      <Typography variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('header')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <Typography variant="body2" color="textPrimary" paragraph>
        {t('warning')}
      </Typography>
      <Typography variant="body2" color="textPrimary" paragraph>
        {t('legacyHex')}
      </Typography>

      <Formik
        initialValues={{
          accountName: '',
          entropy: '',
          submit: null,
        }}
        onSubmit={handleOnSubmit}
        validationSchema={Yup.object().shape({
          accountName: Yup.string().max(64, t('accountNameValidation')),
          entropy: Yup.string()
            .test('format', t('entropyMatches'), isValidMnemonicOrHexFormat)
            .test('validEntropy', t('entropyIsWrong'), isValidMnemonicOrHexValue)
            .required(t('entropyRequired')),
        })}
      >
        {({ errors, isSubmitting, dirty, isValid, values, submitForm }) => (
          <Form name="ImportAccountFormName">
            <Field
              id="ImportAccountForm-accountNameField"
              component={TextField}
              fullWidth
              label={t('nameLabel')}
              name="accountName"
            />
            {values.checkedSavePassword && !values.accountName && (
              <FormHelperText focused>{t('checkedSavePasswordFormHelper')}</FormHelperText>
            )}
            <Field
              id="ImportAccountForm-entropyField"
              component={TextField}
              fullWidth
              label={t('entropyLabel')}
              margin="dense"
              multiline
              name="entropy"
            />
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <SubmitButton
              disabled={!dirty || !isValid || isSubmitting}
              onClick={submitForm}
              isSubmitting={isSubmitting}
            >
              {t('importAccountButton')}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ImportAccountView;
export { ImportAccountView };
