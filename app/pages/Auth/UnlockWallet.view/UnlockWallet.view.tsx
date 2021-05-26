import React from 'react';
import type { FC } from 'react';

import { Box, FormHelperText } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import type { FormikHelpers } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { UnlockWalletViewProps } from './UnlockWallet.d';

interface UnlockWalletFormValues {
  password: string;
  submit: null;
}

const UnlockWalletView: FC<UnlockWalletViewProps> = ({ unlockWallet }: UnlockWalletViewProps) => {
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation('UnlockWalletForm');

  const handleOnSubmit = async (
    values: UnlockWalletFormValues,
    helpers: FormikHelpers<UnlockWalletFormValues>
  ) => {
    const { setStatus, setErrors, setSubmitting } = helpers;
    setSubmitting(true);
    try {
      await unlockWallet(values.password);
      /* istanbul ignore next */
      if (isMountedRef.current) {
        setStatus({ success: true });
        setSubmitting(false);
      }
    } catch (err) {
      /* istanbul ignore next */
      if (isMountedRef.current) {
        setStatus({ success: false });
        setErrors({ submit: err.message });
        setSubmitting(false);
      }
    }
  };

  return (
    <Formik
      initialValues={{ password: '', submit: null }}
      validationSchema={Yup.object().shape({
        password: Yup.string().required(t('passwordRequired')),
      })}
      onSubmit={handleOnSubmit}
    >
      {({ errors, isSubmitting, dirty, isValid, submitForm }) => (
        <Form name="UnlockWalletInnerForm">
          <Field
            data-testid="passwordField"
            component={TextField}
            fullWidth
            label={t('passwordLabel')}
            name="password"
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
            {t('unlockWalletButton')}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default UnlockWalletView;
export { UnlockWalletView };
