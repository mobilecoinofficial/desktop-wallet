import React, { FC } from 'react';

import {
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Box,
} from '@material-ui/core';
import { Field, Formik } from 'formik';
import { Checkbox, TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { DeleteAccountConfirmationViewProps } from './DeleteAccountConfirmation';

export const DeleteAccountConfirmationView: FC<DeleteAccountConfirmationViewProps> = ({
  confirm,
  cancel,
  shortCode,
}: DeleteAccountConfirmationViewProps) => {
  const { t } = useTranslation('DeleteAccountConfirmationView');
  return (
    <Formik
      initialValues={{
        checkedConfirm: false,
        shortCodeConfirmation: '',
      }}
      validationSchema={Yup.object().shape({
        checkedConfirm: Yup.bool().oneOf([true], t('checkedConfirmValidation')),
        shortCodeConfirmation: Yup.string()
          .oneOf([shortCode], t('shortCodeConfirmationDoesntMatch'))
          .required(t('verifyShortCodeRequired')),
      })}
      onSubmit={confirm}
    >
      {({ dirty, isValid, submitForm }) => (
        <>
          <DialogTitle id="alert-dialog-title">{t('deleteDialogTitle')}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {t('deleteDialogDescription')}
            </DialogContentText>
            <Field
              component={TextField}
              fullWidth
              id="shortCodeConfirmationField"
              label={t('confirmShortCodeFieldLabel')}
              name="shortCodeConfirmation"
            />
            <Box display="flex">
              <Box display="flex" alignItems="center" flexDirection="row-reverse">
                <Typography display="inline">{t('acceptTerms')}</Typography>
                <Field
                  id="confirmCheckbox"
                  component={Checkbox}
                  type="checkbox"
                  name="checkedConfirm"
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={cancel} color="primary" autoFocus id="cancel-delete">
              {t('cancelButton')}
            </Button>
            <Button
              onClick={submitForm}
              disabled={!dirty || !isValid}
              color="primary"
              id="confirm-delete"
            >
              {t('deleteButton')}
            </Button>
          </DialogActions>
        </>
      )}
    </Formik>
  );
};
