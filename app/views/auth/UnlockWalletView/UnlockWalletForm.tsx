import React from 'react';
import type { FC } from 'react';

import { Box, FormHelperText } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import type { FormikHelpers } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import type { MobileCoinDContextValue } from '../../../contexts/MobileCoinDContext';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import useMobileCoinD from '../../../hooks/useMobileCoinD';

export interface UnlockWalletFormValues {
  password: string;
  submit: null;
}

interface UnlockWalletFormPseudoProps {
  isMountedRef: { current: boolean };
  unlockWallet: MobileCoinDContextValue['unlockWallet'];
}

export const unlockWalletFormOnSubmit = async (
  pseudoProps: UnlockWalletFormPseudoProps,
  values: UnlockWalletFormValues,
  helpers: FormikHelpers<UnlockWalletFormValues>
): Promise<void> => {
  const { isMountedRef, unlockWallet } = pseudoProps;
  const { password } = values;
  const { setStatus, setErrors, setSubmitting } = helpers;

  try {
    await unlockWallet(password);
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

interface UnlockWalletFormProps {
  onSubmit: typeof unlockWalletFormOnSubmit;
}

const UnlockWalletForm: FC<UnlockWalletFormProps> = ({ onSubmit }: UnlockWalletFormProps) => {
  const isMountedRef = useIsMountedRef();
  const { unlockWallet } = useMobileCoinD();
  const [t] = useTranslation('UnlockWalletForm');

  const handleOnSubmit = async (
    values: UnlockWalletFormValues,
    helpers: FormikHelpers<UnlockWalletFormValues>
  ) => {
    const pseduoProps = { isMountedRef, unlockWallet };
    onSubmit(pseduoProps, values, helpers);
  };

  const initialValues = {
    password: '',
    submit: null,
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required(t('passwordRequired')),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ errors, isSubmitting, dirty, isValid, submitForm }) => (
        <Form name="UnlockWalletInnerForm">
          <Field
            id="passwordField"
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

export default UnlockWalletForm;
