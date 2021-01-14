import React, { useState } from 'react';
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
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import routePaths from '../../../constants/routePaths';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import useMobileCoinD from '../../../hooks/useMobileCoinD';
import type { Theme } from '../../../theme';
import ShowRetrievedEntropyModal from './ShowRetrievedEntropyModal';

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

const RetrieveEntropyView: FC = () => {
  const classes = useStyles();
  const [entropy, setEntropy] = useState();
  const isMountedRef = useIsMountedRef();
  const { retrieveEntropy } = useMobileCoinD();
  const handleCloseModal = () => {
    setEntropy(null);
  };

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
        <Typography color="textPrimary">Retrieve Secret Entropy</Typography>
      </Breadcrumbs>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        my={3}
        flexDirection="column"
      >
        <Box>
          <Typography variant="body2" display="inline" color="textSecondary">
            Your Entropy is the
          </Typography>
          <Typography variant="body2" display="inline" color="primary">
            {' SECRET KEY '}
          </Typography>
          <Typography variant="body2" display="inline" color="textSecondary">
            that unlocks your wallet and allows you to use MobileCoin. It is
            unique to your account. It is important that you never share this
            code. You may wish to use this code in a secure, safe manner. This
            wallet uses your password to store an encrypted Entropy.
          </Typography>
        </Box>
        <br />
        <Typography variant="body2" color="textSecondary">
          The Entropy can be used to import your wallet in case your device is
          damaged or lost. It allows you to add your account to other wallets.
        </Typography>
        <br />

        <Typography variant="body2" color="textSecondary">
          If you have forgotten or misplaced your Entropy, you may retrieve here
          with your password.
        </Typography>
      </Box>
      <Box flexGrow={1} mt={3}>
        <Formik
          isInitialValid={false}
          initialValues={{
            password: '',
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string().required('Password is required'),
          })}
          validateOnMount
          onSubmit={async (
            values,
            {
              setErrors, setStatus, setSubmitting, resetForm,
            },
          ) => {
            try {
              setSubmitting(true);

              const entropyString = await retrieveEntropy(values.password);

              if (typeof entropyString !== 'string') throw new Error('Something went wrong.');
              if (isMountedRef.current) {
                setStatus({ success: true });
                setSubmitting(false);
                resetForm();
                setEntropy(entropyString);
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
                    <Typography color="primary">Retrieve Entropy</Typography>
                  </FormLabel>
                  <Field
                    component={TextField}
                    fullWidth
                    label="Password"
                    margin="normal"
                    name="password"
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
                  Retrieve Entropy
                </SubmitButton>
              </Form>
            );
          }}
        </Formik>
      </Box>
      <ShowRetrievedEntropyModal
        open={!!entropy}
        entropy={entropy || ''}
        onClose={handleCloseModal}
      />
    </Container>
  );
};

export default RetrieveEntropyView;
