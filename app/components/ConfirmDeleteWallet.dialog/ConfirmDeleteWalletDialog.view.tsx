import React from 'react';

import { Box, Button, Container, Dialog, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { Checkbox } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton } from '..';
import { ConfirmDeleteWalletDialogProps } from './ConfirmDeleteWalletDialog';

const ConfirmDeleteWalletDialog = (props: ConfirmDeleteWalletDialogProps): JSX.Element => {
  const { open, cancel, confirm } = props;
  const { t } = useTranslation('ConfirmDeleteWalletDialog');

  const handleOnSubmit = () => confirm();

  return (
    <Dialog
      open={open}
      onClose={() => {
        cancel();
      }}
    >
      <Container maxWidth="md" style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Typography variant="h2" paragraph>
          {t('title')}
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {t('description')}
        </Typography>
        <Formik
          initialValues={{ confirmationChecked: false, submit: null }}
          validationSchema={Yup.object().shape({
            confirmationChecked: Yup.bool().oneOf([true], t('confirmationChecked')),
          })}
          onSubmit={handleOnSubmit}
        >
          {({ errors, isSubmitting, dirty, isValid, setFieldValue, submitForm }) => (
            <Form name="UnlockWalletInnerForm">
              <Box display="flex">
                <Box display="flex" alignItems="center" flexDirection="row-reverse">
                  <Box>
                    <Typography display="inline">{t('understandCheckText')}</Typography>
                  </Box>
                  <Field component={Checkbox} type="checkbox" name="confirmationChecked" />
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="center">
                <SubmitButton
                  data-testid="submit-button"
                  disabled={!dirty || !isValid || isSubmitting}
                  isSubmitting={isSubmitting}
                  onClick={submitForm}
                >
                  {t('deleteWalletButton')}
                </SubmitButton>
                <Button
                  color="secondary"
                  variant="outlined"
                  style={{ marginTop: '10px' }}
                  onClick={cancel}
                >
                  {t('cancelButton')}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Dialog>
  );
};

export default ConfirmDeleteWalletDialog;
export { ConfirmDeleteWalletDialog };
