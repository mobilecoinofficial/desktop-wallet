import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, FormHelperText, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import { SubmitButton } from '../../../components';
import { importViewOnlyAccount } from '../../../redux/services';
// import { useTranslation } from 'react-i18next';
// import * as Yup from 'yup';

interface ImportViewOnlyAccountFormValues {
  viewOnlyAccountImportRequest: string;
}

const ImportViewOnlyAccountView: FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handlesubmit = async (formData: ImportViewOnlyAccountFormValues) => {
    setError(null);
    const importRequest = JSON.parse(formData.viewOnlyAccountImportRequest);
    try {
      await importViewOnlyAccount(importRequest.jsonRpcRequest.params);
    } catch (_) {
      setError(
        'Something went wrong with the view only account import. Please check your request and try again. For more information see the docs ...(LINK TO DOCS)'
      );
    }
  };

  return (
    <>
      <Typography variant="h2" paragraph>
        Import View Only Account
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Create a view only version of an existing account
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        View only accounts can ....more info about vo accounts and offline flow etc...
      </Typography>
      <Typography variant="body2" color="textPrimary" paragraph>
        ...more info about import vo accounts?
      </Typography>

      <Formik
        initialValues={{
          submit: null,
          viewOnlyAccountImportRequest: '',
        }}
        onSubmit={handlesubmit}
        // validationSchema={Yup.object().shape({
        //   accountName: Yup.string().max(64, t('accountNameValidation')),
        //   entropy: Yup.string()
        //     .test('format', t('entropyMatches'), isValidMnemonicOrHexFormat)
        //     .test('validEntropy', t('entropyIsWrong'), isValidMnemonicOrHexValue)
        //     .required(t('entropyRequired')),
        // })}
      >
        {({ isSubmitting, dirty, isValid, submitForm }) => (
          <Form name="ImportViewOnlyAccountFormName">
            <Field
              id="ImportViewOnlyAccountForm-requestField"
              component={TextField}
              multiline
              rows={8}
              fullWidth
              label="Import view only account request"
              name="viewOnlyAccountImportRequest"
            />
            {error && (
              <Box mt={3}>
                <FormHelperText error>{error}</FormHelperText>
              </Box>
            )}
            <SubmitButton
              disabled={!dirty || !isValid || isSubmitting}
              onClick={submitForm}
              isSubmitting={isSubmitting}
            >
              Import View Only Account
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ImportViewOnlyAccountView;
export { ImportViewOnlyAccountView };
