import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Box,
  FormHelperText,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import {
  isValidMnemonicOrHexFormat,
  isValidMnemonicOrHexValue,
} from '../../../utils/bip39Functions';
import { ToggleFogInput } from '../CreateAccount.view/CreateAccount.view';
import type { ImportAccountViewProps } from './ImportAccount.d';

interface ImportAccountFormValues {
  accountName: string;
  entropy: string;
}

const ImportAccountView: FC<ImportAccountViewProps> = ({
  onClickImport,
}: ImportAccountViewProps) => {
  const { t } = useTranslation('ImportAccount');
  const [isFogEnabled, setIsFogEnabled] = useState(false);
  const [fogType, setFogType] = useState<'MOBILECOIN' | 'SIGNAL'>('MOBILECOIN');

  const handleOnSubmit = async (values: ImportAccountFormValues) =>
    onClickImport(values.accountName, values.entropy);

  const handleChangeFog = () => {
    setIsFogEnabled(!isFogEnabled);
  };
  const handleChangeFogType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFogType(e.target.value as 'MOBILECOIN' | 'SIGNAL');
  };

  return (
    <>
      <Typography variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('header')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <Typography variant="body2" color="textPrimary" paragraph>
        {t('warning')}
      </Typography>
      <Typography variant="body2" color="textPrimary" paragraph>
        {t('legacyHex')}
      </Typography>

      <Formik
        initialValues={{
          accountName: '',
          entropy: '',
          submit: null,
        }}
        onSubmit={handleOnSubmit}
        validationSchema={Yup.object().shape({
          accountName: Yup.string().max(64, t('accountNameValidation')),
          entropy: Yup.string()
            .test('format', t('entropyMatches'), isValidMnemonicOrHexFormat)
            .test('validEntropy', t('entropyIsWrong'), isValidMnemonicOrHexValue)
            .required(t('entropyRequired')),
        })}
      >
        {({ errors, isSubmitting, dirty, handleBlur, isValid, setFieldValue, submitForm }) => (
          <Form name="ImportAccountFormName">
            <Field
              id="ImportAccountForm-accountNameField"
              component={TextField}
              fullWidth
              label={t('nameLabel')}
              name="accountName"
            />
            <Field
              id="ImportAccountForm-entropyField"
              component={TextField}
              fullWidth
              label={t('entropyLabel')}
              margin="dense"
              multiline
              name="entropy"
              onBlur={(event) => {
                handleBlur(event);
                setFieldValue('entropy', event.target.value.trim());
              }}
            />

            <Box display="flex" flexDirection="column" marginTop={1} marginBottom={1}>
              <ToggleFogInput
                value={isFogEnabled}
                onChange={handleChangeFog}
                title="This is a Fog account"
                description="Check this box if you are importing an account from Moby or Signal, or are importing a Desktop Wallet account that included Fog compatibility when it was created."
              />
              {isFogEnabled && (
                <FormControl>
                  <InputLabel>Fog Application</InputLabel>
                  <Select
                    labelId="fog-type"
                    value={fogType}
                    onChange={handleChangeFogType}
                    fullWidth={false}
                  >
                    <MenuItem value="MOBILECOIN">Mobilecoin</MenuItem>
                    <MenuItem value="SIGNAL">Signal</MenuItem>
                  </Select>
                </FormControl>
              )}
            </Box>

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
              {t('importAccountButton')}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ImportAccountView;
export { ImportAccountView };
