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
import { TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import routePaths from '../../../constants/routePaths';
import useFullService from '../../../hooks/useFullService';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';

const useStyles = makeStyles((theme: Theme) => {
  return {
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
  };
});

const ChangePasswordView: FC = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const { changePassword } = useFullService();

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link
          color="inherit"
          to={routePaths.APP_SETTINGS}
          component={RouterLink}
        >
          <Typography color="textSecondary">Settings</Typography>
        </Link>
        <Typography color="textPrimary">Change Password</Typography>
      </Breadcrumbs>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        my={3}
        flexDirection="column"
      >
        <Typography variant="body2" color="textSecondary">
          Changing your password will change how we encrypt your secret Entropy.
          You should always use strong (unguessable) passwords and change them
          regularly.
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary">
          To change your current password, please enter your current password
          and your new password.
        </Typography>
      </Box>
      <Box flexGrow={1} mt={3}>
        <Formik
          initialValues={{
            newPassword: '',
            newPasswordConfirmation: '',
            oldPassword: '',
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            newPassword: Yup.string()
              .min(8, 'New Password must be at least 8 characters in length.')
              .max(99, 'Passwords cannot be more than 99 characters.')
              .required('New Password is required'),
            newPasswordConfirmation: Yup.string()
              .oneOf([Yup.ref('newPassword')], 'Must match New Password')
              .required('New Password Confirmation is required'),
          })}
          isInitialValid={false}
          onSubmit={async (
            values,
            {
              setErrors, setStatus, setSubmitting, resetForm,
            },
          ) => {
            try {
              setSubmitting(true);
              await changePassword(values.oldPassword, values.newPassword);
              if (isMountedRef.current) {
                enqueueSnackbar('Successfully change password!', {
                  variant: 'success',
                });
                setStatus({ success: true });
                setSubmitting(false);
                resetForm();
              }
            } catch (err) {
              if (isMountedRef.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
        >
          {({
            errors, isSubmitting, isValid, submitForm,
          }) => {
            return (
              <Form>
                <Box pt={4}>
                  <FormLabel component="legend">
                    <Typography color="primary">Change Password</Typography>
                  </FormLabel>
                  <Field
                    component={TextField}
                    fullWidth
                    label="Old Password"
                    margin="normal"
                    name="oldPassword"
                    type="password"
                  />
                  <Field
                    component={TextField}
                    fullWidth
                    label="New Password"
                    margin="normal"
                    name="newPassword"
                    type="password"
                  />
                  <Field
                    component={TextField}
                    fullWidth
                    label="Confirm New Password"
                    margin="normal"
                    name="newPasswordConfirmation"
                    type="password"
                  />
                </Box>
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
                  Change Password
                </SubmitButton>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
};

export default ChangePasswordView;
