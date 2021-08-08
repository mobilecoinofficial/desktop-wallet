import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, Button, FormHelperText, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { Checkbox, TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, TermsOfUseDialog } from '../../../components';
import type { CreateAccountViewProps } from './CreateAccount.d';

interface CreateAccountFormValues {
  accountName: string;
  checkedTerms: boolean;
  submit: null;
}

const CreateAccountView: FC<CreateAccountViewProps> = ({
  onClickCreate,
}: CreateAccountViewProps) => {
  const { t } = useTranslation('CreateAccount');
  const [canCheck, setCanCheck] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCloseTerms = () => {
    setCanCheck(true);
    setOpen(false);
  };

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
          checkedSavePassword: false,
          checkedTerms: false,
          password: '',
          passwordConfirmation: '',
          submit: null,
        }}
        onSubmit={handleOnSubmit}
        validationSchema={Yup.object().shape({
          accountName: Yup.string().max(64, t('accountNameValidation')),
          // CBB: It appears that the checkedTerms error message is not working properly.
          checkedTerms: Yup.bool().oneOf([true], t('checkedTermsValidation')),
        })}
      >
        {({ errors, isSubmitting, dirty, isValid, submitForm, _ }) => (
          <Form name="CreateAccountFormName">
            <Field
              id="CreateAccountForm-accountNameField"
              component={TextField}
              fullWidth
              label={t('nameLabel')}
              name="accountName"
            />
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
              {t('createAccountButton')}
            </SubmitButton>
            <TermsOfUseDialog open={open} handleCloseTerms={handleCloseTerms} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateAccountView;
export { CreateAccountView };
