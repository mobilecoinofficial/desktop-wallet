import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Box,
  FormHelperText,
  Typography,
  Checkbox,
  FormControlLabel,
  Tooltip,
  Link,
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
  title?: string;
  description: string;
};

export const ToggleFogInput: FC<ToggleFogInputProps> = ({
  onChange,
  value,
  title,
  description,
}: ToggleFogInputProps) => (
  <>
    <FormControlLabel
      control={<Checkbox checked={value} onChange={onChange} />}
      label={
        <Box display="flex">
          <Typography>{title}</Typography>
          <Tooltip
            interactive
            title={
              <Typography>
                {description}{' '}
                <Link
                  href="https://mobilecoin.com/learn/explain-like-im-five/fog/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'white', textDecoration: 'underline' }}
                >
                  Learn More
                </Link>
              </Typography>
            }
          >
            <HelpOutlineIcon style={{ color: '#878993', marginLeft: 4 }} />
          </Tooltip>
        </Box>
      }
    />
  </>
);

ToggleFogInput.defaultProps = {
  title: 'Enable Fog',
};

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
            <ToggleFogInput
              value={isFogEnabled}
              onChange={handleChangeFog}
              description="Enabling Fog for this account will make it compatible with Moby."
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
