import React from 'react';
import type { FC } from 'react';

import {
  Box,
  Breadcrumbs,
  Container,
  FormHelperText,
  FormLabel,
  Link,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { Checkbox, TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, SavedPasswordsModal } from '../../../components';
import { PASSWORD_MIN_SIZE, PASSWORD_MAX_SIZE } from '../../../constants/codes';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';
import { ChangePasswordViewProps } from './ChangePassword';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: 200,
  },
  cardContainer: {
    paddingBottom: 64,
    paddingTop: 8 * 4,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
    padding: theme.spacing(4),
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  code: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    letterSpacing: '.70rem',
    marginRight: '-.70rem',
    padding: theme.spacing(1),
  },
  form: {
    paddingBottom: theme.spacing(2),
  },
  label: {
    width: '100%',
  },
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const ChangePasswordView: FC<ChangePasswordViewProps> = ({
  accounts,
  onClickBack,
  changePassword,
  setKeychainAccount,
}: ChangePasswordViewProps) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation('ChangePasswordView');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (accounts.length > 0) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link color="inherit" onClick={onClickBack} component="button">
          <Typography color="textSecondary">{t('settingsBreadcrumb')}</Typography>
        </Link>
        <Typography color="textPrimary">{t('changePasswordBreadcrumb')}</Typography>
      </Breadcrumbs>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        my={3}
        flexDirection="column"
      >
        <Typography variant="body2" color="textSecondary">
          {t('description')}
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary">
          {t('instructions')}
        </Typography>
      </Box>
      <Box flexGrow={1} mt={3}>
        <Formik
          initialValues={{
            checkedSavePassword: false,
            newPassword: '',
            newPasswordConfirmation: '',
            password: '',

            submit: null,
          }}
          validationSchema={Yup.object().shape({
            newPassword: Yup.string()
              .min(PASSWORD_MIN_SIZE, t('passwordMin'))
              .max(PASSWORD_MAX_SIZE, t('passwordMax'))
              .required(t('passwordRequired')),
            newPasswordConfirmation: Yup.string()
              .oneOf([Yup.ref('newPassword')], t('passwordConfirmationRef'))
              .required(t('passwordConfirmationRequired')),
            password: Yup.string().required(t('oldPasswordRequired')),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
            try {
              setSubmitting(true);
              if (values.checkedSavePassword) {
                const currentAccount = accounts[0].account;
                await changePassword(values.password, values.newPassword);
                setKeychainAccount(currentAccount, values.newPassword);
              } else {
                await changePassword(values.password, values.newPassword);
              }
              if (isMountedRef.current) {
                enqueueSnackbar(t('enqueue'), {
                  variant: 'success',
                });
                setStatus({ success: true });
                setSubmitting(false);
                resetForm();
              }
            } catch (err) {
              /* istanbul ignore next */
              if (isMountedRef.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
        >
          {({ errors, isSubmitting, dirty, isValid, setFieldValue, submitForm, values }) => (
            <Form>
              <Box pt={4}>
                <FormLabel component="legend">
                  <Typography color="primary">{t('formLabel')}</Typography>
                </FormLabel>
                <Field
                  component={TextField}
                  fullWidth
                  label={t('oldPasswordLabel')}
                  margin="normal"
                  name="password"
                  type="password"
                  onClick={handleClick}
                />
                <Field
                  component={TextField}
                  fullWidth
                  label={t('newPasswordLabel')}
                  margin="normal"
                  name="newPassword"
                  type="password"
                />
                <Field
                  component={TextField}
                  fullWidth
                  label={t('passwordConfirmationLabel')}
                  margin="normal"
                  name="newPasswordConfirmation"
                  type="password"
                />
              </Box>
              {accounts.length > 0 && (
                <Box pt={1} display="flex">
                  <Box display="flex" alignItems="center" flexDirection="row-reverse">
                    <Box>
                      <Typography display="inline" color="textSecondary">
                        {t('checkSavePassword')}
                      </Typography>
                    </Box>
                    <Field
                      component={Checkbox}
                      type="checkbox"
                      name="checkedSavePassword"
                      disabled={
                        values.newPasswordConfirmation === '' ||
                        values.newPasswordConfirmation !== values.newPassword
                      }
                      indeterminate={
                        values.newPasswordConfirmation === '' ||
                        values.newPasswordConfirmation !== values.newPassword
                      }
                    />
                  </Box>
                </Box>
              )}
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
              <SubmitButton
                disabled={!dirty || !isValid || isSubmitting}
                onClick={submitForm}
                isSubmitting={isSubmitting}
              >
                {t('changePasswordButton')}
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default ChangePasswordView;
export { ChangePasswordView };
