import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Box,
  FormHelperText,
  Typography,
  Checkbox,
  FormControlLabel,
  Tooltip,
} from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
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

type ToggleFogInputProps = {
  onChange: (event: React.ChangeEvent) => void;
  value: boolean;
};

export const ToggleFogInput: FC<ToggleFogInputProps> = ({
  onChange,
  value,
}: ToggleFogInputProps) => (
  <FormControlLabel
    control={<Checkbox checked={value} onChange={onChange} />}
    label={
      <Box display="flex">
        <Typography>Enable Fog</Typography>
        <Tooltip title="Enabling fog for this account will make it compatible with other fog-enabled services, such as Moby and the Signal wallet">
          <HelpOutlineIcon style={{ color: '#878993', marginLeft: 4 }} />
        </Tooltip>
      </Box>
    }
  />
);

const CreateAccountView: FC<CreateAccountViewProps> = ({
  onClickCreate,
}: CreateAccountViewProps) => {
  const { t } = useTranslation('CreateAccount');
  const [isFogEnabled, setIsFogEnabled] = useState(false);

  const handleOnSubmit = async (values: CreateAccountFormValues) =>
    onClickCreate(values.accountName, isFogEnabled);

  const handleChangeFog = () => {
    setIsFogEnabled(!isFogEnabled);
  };

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
          fogEnabled: true,
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
            <ToggleFogInput value={isFogEnabled} onChange={handleChangeFog} />
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
