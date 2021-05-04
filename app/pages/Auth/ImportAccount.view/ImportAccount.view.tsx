import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, Button, FormHelperText, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import type { FormikHelpers } from 'formik';
import { Checkbox, TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, TermsOfUseDialog } from '../../../components';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import {
  isHex64,
  isValidMnemonicOrHexFormat,
  isValidMnemonicOrHexValue,
} from '../../../utils/bip39Functions';
import { ImportAccountViewProps } from './ImportAccount.d';

interface ImportAccountFormValues {
  accountName: string;
  checkedTerms: boolean;
  entropy: string;
  password: string;
  passwordConfirmation: string;
  submit: null;
}

const ImportAccountView: FC<ImportAccountViewProps> = ({
  importAccount,
  importLegacyAccount,
}: ImportAccountViewProps) => {
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation('ImportAccountForm');

  const [canCheck, setCanCheck] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCloseTerms = () => {
    setCanCheck(true);
    setOpen(false);
  };

  const handleOnSubmit = async (
    values: ImportAccountFormValues,
    helpers: FormikHelpers<ImportAccountFormValues>
  ) => {
    const { accountName, entropy, password } = values;
    const { setStatus, setErrors, setSubmitting } = helpers;
    setSubmitting(true);

    try {
      if (isHex64(entropy)) {
        await importLegacyAccount(accountName, entropy, password);
      } else {
        await importAccount(accountName, entropy, password);
      }

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

  return (
    <Formik
      initialValues={{
        accountName: '',
        checkedTerms: false,
        entropy: '',
        password: '',
        passwordConfirmation: '',
        submit: null,
      }}
      onSubmit={handleOnSubmit}
      validationSchema={Yup.object().shape({
        accountName: Yup.string().max(64, t('accountNameValidation')),
        // CBB: It appears that the checkedTerms error message is not working properly.
        checkedTerms: Yup.bool().oneOf([true], t('checkedTermsValidation')),
        entropy: Yup.string()
          .test('format', t('entropyMatches'), isValidMnemonicOrHexFormat)
          .test('validEntropy', t('entropyIsWrong'), isValidMnemonicOrHexValue)
          .required(t('entropyRequired')),
        password: Yup.string()
          .min(8, t('passwordMin'))
          .max(99, t('passwordMax'))
          .required(t('passwordRequired')),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password')], t('passwordConfirmationRef'))
          .required(t('passwordConfirmationRequired')),
      })}
    >
      {({ errors, isSubmitting, dirty, isValid, submitForm }) => (
        <Form name="ImportAccountFormName">
          <Field
            id="ImportAccountForm-accountNameField"
            component={TextField}
            fullWidth
            label={t('nameLabel')}
            name="accountName"
          />
          <Field
            id="ImportAccountForm-entropyField"
            component={TextField}
            fullWidth
            label={t('entropyLabel')}
            margin="dense"
            multiline
            name="entropy"
          />
          <Field
            id="ImportAccountForm-passwordField"
            component={TextField}
            fullWidth
            label={t('passwordLabel')}
            margin="dense"
            name="password"
            type="password"
          />
          <Field
            id="ImportAccountForm-passwordConfirmationField"
            component={TextField}
            fullWidth
            label={t('passwordConfirmationLabel')}
            margin="dense"
            name="passwordConfirmation"
            type="password"
          />
          <Box pt={1} display="flex">
            <Box display="flex" alignItems="center" flexDirection="row-reverse">
              <Box>
                <Typography display="inline">{t('acceptTerms')}</Typography>
                <Button color="primary" onClick={() => setOpen(true)} id="openTerms">
                  {t('acceptTermsButton')}
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
          {!canCheck && <FormHelperText focused>{t('acceptTermsFormHelper')}</FormHelperText>}
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
          <TermsOfUseDialog open={open} handleCloseTerms={handleCloseTerms} />
        </Form>
      )}
    </Formik>
  );
};

export default ImportAccountView;
export { ImportAccountView };