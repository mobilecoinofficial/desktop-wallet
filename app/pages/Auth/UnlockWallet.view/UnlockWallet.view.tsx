import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, Button, FormHelperText, Tooltip, Typography } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import { Formik, Form, Field } from 'formik';
import { Checkbox, TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, SavedPasswordsModal } from '../../../components';
import { ConfirmDeleteWalletDialog } from '../../../components/ConfirmDeleteWallet.dialog';
import type { UnlockWalletViewProps } from './UnlockWallet';

interface UnlockWalletFormValues {
  password: string;
  startInOfflineMode: boolean;
  submit: null;
}

const UnlockWalletView: FC<UnlockWalletViewProps> = ({
  onClickUnlock,
  accounts,
  handleDeleteWallet,
  fullServiceIsRunning,
  offlineStart,
}: UnlockWalletViewProps) => {
  const { t } = useTranslation('UnlockWallet');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [confirmDeleteWalletDialogOpen, setConfirmDeleteWalletDialogOpen] = useState(false);

  const handleClose = () => setAnchorEl(null);
  const handleOnSubmit = (values: UnlockWalletFormValues) =>
    onClickUnlock(values.password, values.startInOfflineMode);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (accounts.length > 0) {
      setAnchorEl(event.currentTarget);
    }
  };

  return (
    <>
      <Typography variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <Formik
        initialValues={{ password: '', startInOfflineMode: !!offlineStart, submit: null }}
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
            {fullServiceIsRunning ? (
              <> </>
            ) : (
              <Box display="flex">
                <Box display="flex" alignItems="center" flexDirection="row-reverse">
                  <Tooltip title={t('offlineModeTooltip')}>
                    <HelpIcon style={{ marginLeft: '5px' }} />
                  </Tooltip>
                  <Typography display="inline">{t('startInOfflineMode')}</Typography>
                  <Field component={Checkbox} type="checkbox" name="startInOfflineMode" />
                </Box>
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
            <Button
              color="primary"
              onClick={() => setConfirmDeleteWalletDialogOpen(true)}
              id="deleteWalletConfirmation"
            >
              {t('deleteWallet')}
            </Button>
            <ConfirmDeleteWalletDialog
              open={confirmDeleteWalletDialogOpen}
              cancel={() => setConfirmDeleteWalletDialogOpen(false)}
              confirm={handleDeleteWallet}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UnlockWalletView;
export { UnlockWalletView };
