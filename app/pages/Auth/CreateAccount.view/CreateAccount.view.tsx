import React from 'react';
import type { FC } from 'react';

import { Box, FormHelperText, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import type { CreateAccountViewProps } from './CreateAccount.d';

interface CreateAccountFormValues {
  accountName: string;
  submit: null;
}

const CreateAccountView: FC<CreateAccountViewProps> = ({
  onClickCreate,
}: CreateAccountViewProps) => {
  const { t } = useTranslation('CreateAccount');

  const handleOnSubmit = async (values: CreateAccountFormValues) =>
    onClickCreate(values.accountName);

  return (
    <>
      <Typography color="textPrimary" variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('header')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <Formik
        initialValues={{
          accountName: '',
          submit: null,
        }}
        onSubmit={handleOnSubmit}
        validationSchema={Yup.object().shape({
          accountName: Yup.string().max(64, t('accountNameValidation')),
        })}
      >
        {({ errors, isSubmitting, isValid, submitForm }) => (
          <Form name="CreateAccountFormName">
            <Field
              id="CreateAccountForm-accountNameField"
              component={TextField}
              fullWidth
              label={t('nameLabel')}
              name="accountName"
            />
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <SubmitButton
              disabled={!isValid || isSubmitting}
              onClick={submitForm}
              isSubmitting={isSubmitting}
            >
              {t('createAccountButton')}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateAccountView;
export { CreateAccountView };
