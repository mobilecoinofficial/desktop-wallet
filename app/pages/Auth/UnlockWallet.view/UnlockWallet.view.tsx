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
import { getKeychainAccounts } from '../../../utils/keytarService';
import type { UnlockWalletViewProps } from './UnlockWallet.d';

interface UnlockWalletFormValues {
  password: string;
  submit: null;
}

const UnlockWalletView: FC<UnlockWalletViewProps> = ({
  unlockWallet,
  // makePassword,
  // getPassword,
  testSubmit,
}: UnlockWalletViewProps) => {
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation('UnlockWalletForm');
  // console.log(getPassword('user'));
  // getPassword('user')
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  const handleOnSubmit =
    testSubmit ||
    (async (values: UnlockWalletFormValues, helpers: FormikHelpers<UnlockWalletFormValues>) => {
      const { setStatus, setErrors, setSubmitting } = helpers;
      setSubmitting(true);
      try {
        console.log('values', values.password);
        await unlockWallet(values.password);
        // makePassword('user', values.password);
        if (isMountedRef.current) {
          setStatus({ success: true });
          setSubmitting(false);
        }
      } catch (err) {
        console.log(err);
        if (isMountedRef.current) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }
    });

  const accounts = getKeychainAccounts();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (accounts.length === 0) {
      return;
    }
    setAnchorEl(event.currentTarget);
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
        <Form name="UnlockWalletInnerForm">
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
            {t('unlockWalletButton')}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default UnlockWalletView;
export { UnlockWalletView };
