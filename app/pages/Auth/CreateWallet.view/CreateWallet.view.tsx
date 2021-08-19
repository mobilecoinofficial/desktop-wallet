import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, Button, FormHelperText, Tooltip, Typography } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import { Formik, Form, Field } from 'formik';
import { Checkbox, TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, TermsOfUseDialog } from '../../../components';
import type { CreateWalletViewProps } from './CreateWallet';

interface CreateWalletFormValues {
  password: string;
  passwordConfirmation: string;
  startInOfflineMode: boolean;
  submit: null;
}

const CreateWalletView: FC<CreateWalletViewProps> = ({ onClickCreate }: CreateWalletViewProps) => {
  const { t } = useTranslation('UnlockWallet');
  const [canCheck, setCanCheck] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCloseTerms = () => {
    setCanCheck(true);
    setOpen(false);
  };

  const handleOnSubmit = (values: CreateWalletFormValues) =>
    onClickCreate(values.password, values.startInOfflineMode);

  return (
    <>
      <Typography variant="h2" paragraph>
        Create Wallet
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Please enter a passphrase to encrypt your wallet database. If you lose this and don't have
        your account secrets backed up, there will be no way to recover your account!
      </Typography>
      <Formik
        initialValues={{
          checkedTerms: false,
          password: '',
          passwordConfirmation: '',
          startInOfflineMode: false,
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          checkedTerms: Yup.bool().oneOf([true], t('checkedTermsValidation')),
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
            <Box display="flex">
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
            <Box display="flex">
              <Box display="flex" alignItems="center" flexDirection="row-reverse">
                <Tooltip title="This will start Full Service in Offline Mode, which disables the ability to update the ledger and submit transactions">
                  <HelpIcon style={{ marginLeft: '5px' }} />
                </Tooltip>
                <Typography display="inline">Start in Offline Mode</Typography>
                <Field component={Checkbox} type="checkbox" name="startInOfflineMode" />
              </Box>
            </Box>
            <SubmitButton
              data-testid="submit-button"
              disabled={!dirty || !isValid || isSubmitting}
              isSubmitting={isSubmitting}
              onClick={submitForm}
            >
              Create
            </SubmitButton>
            <TermsOfUseDialog open={open} handleCloseTerms={handleCloseTerms} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateWalletView;
export { CreateWalletView };
