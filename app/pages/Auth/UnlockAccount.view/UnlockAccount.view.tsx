import React from 'react';
import type { FC } from 'react';

import { Box, FormHelperText } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import type { FormikHelpers } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, SavedPasswordsModal } from '../../../components';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { UnlockAccountViewProps } from './UnlockAccount';

interface UnlockAccountFormValues {
  password: string;
  submit: null;
}

const UnlockAccountView: FC<UnlockAccountViewProps> = ({
  unlockWallet,
  accounts,
}: UnlockAccountViewProps) => {
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation('UnlockAccountView');

  const handleOnSubmit = async (
    values: UnlockAccountFormValues,
    helpers: FormikHelpers<UnlockAccountFormValues>
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (accounts.length > 0) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <Formik
      initialValues={{ password: '', submit: null }}
      validationSchema={Yup.object().shape({
        password: Yup.string().required(t('passwordRequired')),
      })}
      onSubmit={handleOnSubmit}
    >
      {({ errors, isSubmitting, dirty, isValid, setFieldValue, submitForm }) => (
        <Form name="UnlockAccountInnerForm">
          <Field
            data-testid="passwordField"
            component={TextField}
            fullWidth
            label={t('passwordLabel')}
            name="password"
            type="password"
            onClick={handleClick}
          />
          <SavedPasswordsModal
            accounts={accounts}
            anchorEl={anchorEl}
            handleClose={handleClose}
            setFieldValue={setFieldValue}
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
            {t('unlockAccountButton')}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default UnlockAccountView;
export { UnlockAccountView };
