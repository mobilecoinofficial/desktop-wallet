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
import { UnlockWalletViewProps } from './UnlockWallet.d';

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

/*
      SCREEN IS {
        debug: [Function: debug],
        findAllByAltText: [Function: bound ],
        findAllByDisplayValue: [Function: bound ],
        findAllByLabelText: [Function: bound ],
        findAllByPlaceholderText: [Function: bound ],
        findAllByRole: [Function: bound ],
        findAllByTestId: [Function: bound ],
        findAllByText: [Function: bound ],
        findAllByTitle: [Function: bound ],
        findByAltText: [Function: bound ],
        findByDisplayValue: [Function: bound ],
        findByLabelText: [Function: bound ],
        findByPlaceholderText: [Function: bound ],
        findByRole: [Function: bound ],
        findByTestId: [Function: bound ]
        findByText: [Function: bound ],
        findByTitle: [Function: bound ],
        getAllByAltText: [Function: bound ],
        getAllByDisplayValue: [Function: bound ],
        getAllByLabelText: [Function: bound ],
        getAllByPlaceholderText: [Function: bound ],
        getAllByRole: [Function: bound ],
        getAllByTestId: [Function: bound ],
        getAllByText: [Function: bound ],
        getAllByTitle: [Function: bound ],
        getByAltText: [Function: bound ],
        getByDisplayValue: [Function: bound ],
        getByLabelText: [Function: bound ],
        getByPlaceholderText: [Function: bound ],
        getByRole: [Function: bound ],
        getByTestId: [Function: bound ],
        getByText: [Function: bound ],
        getByTitle: [Function: bound ],
        logTestingPlaygroundURL: [Function: logTestingPlaygroundURL],
        queryAllByAltText: [Function: bound ],
        queryAllByDisplayValue: [Function: bound ],
        queryAllByLabelText: [Function: bound ],
        queryAllByPlaceholderText: [Function: bound ],
        queryAllByRole: [Function: bound ],
        queryAllByTestId: [Function: bound ],
        queryAllByText: [Function: bound ],
        queryAllByTitle: [Function: bound ],
        queryByAltText: [Function: bound ],
        queryByDisplayValue: [Function: bound ],
        queryByLabelText: [Function: bound ],
        queryByPlaceholderText: [Function: bound ],
        queryByRole: [Function: bound ],
        queryByTestId: [Function: bound ],
        queryByText: [Function: bound ],
        queryByTitle: [Function: bound ],
      }
*/
