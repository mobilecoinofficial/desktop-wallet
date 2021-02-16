import React from 'react';
import type { ChangeEvent, FC } from 'react';

import {
  Box,
  Breadcrumbs,
  Container,
  FormHelperText,
  InputAdornment,
  Link,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat } from '../../../components';
import { MOBIcon } from '../../../components/icons';
import routePaths from '../../../constants/routePaths';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';
import LocalStore from '../../../utils/LocalStore';
import { makeHash } from '../../../utils/hashing';
import isValidPin from '../../../utils/isValidPin';

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

const ChangePinView: FC = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation('ChangePinView');

  const validatePin = (st: string) => (isValidPin(st) ? '' : t('errorPin'));

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link color="inherit" to={routePaths.APP_SETTINGS} component={RouterLink}>
          <Typography color="textSecondary">{t('settingsBreadcrumb')}</Typography>
        </Link>
        <Typography color="textPrimary">{t('changePinBreadcrumb')}</Typography>
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
            minimumForPin: '0.0',
            newPin: '',
            newPinConfirmation: '',
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            newPin: Yup.string()
              .min(6, t('pinMin'))
              .max(12, t('pinMax'))
              .required(t('pinRequired')),
            newPinConfirmation: Yup.string()
              .oneOf([Yup.ref('newPin')], t('pinConfirmationRef'))
              .required(t('pinConfirmationRequired')),
          })}
          onSubmit={(values, { setStatus, resetForm }) => {
            const hashedPin = makeHash(values.newPin);
            const localStore = new LocalStore();
            localStore.setMinimumForPin(Number(values.minimumForPin));
            localStore.setHashedPin(String(hashedPin));
            if (isMountedRef.current) {
              enqueueSnackbar(t('enqueue'), {
                variant: 'success',
              });
            }
            setStatus({ success: true });
            resetForm();
          }}
        >
          {({ errors, isSubmitting, dirty, isValid, submitForm }) => {
            return (
              <Form>
                <Box pt={4}>
                  <Field
                    component={TextField}
                    fullWidth
                    label={t('newPinLabel')}
                    margin="normal"
                    name="newPin"
                    type="Pin"
                    validate={validatePin}
                  />
                  <Field
                    component={TextField}
                    fullWidth
                    label={t('pinConfirmationLabel')}
                    margin="normal"
                    name="newPinConfirmation"
                    type="Pin"
                    validate={validatePin}
                  />
                  <Field
                    component={TextField}
                    fullWidth
                    label={t('minimumForPin')}
                    margin="normal"
                    name="minimumForPin"
                    id="minimumForPin"
                    type="text"
                    onFocus={handleSelect}
                    InputProps={{
                      inputComponent: MOBNumberFormat,
                      startAdornment: (
                        <InputAdornment position="start">
                          <MOBIcon height={20} width={20} />
                        </InputAdornment>
                      ),
                    }}
                  />
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
                  {t('changePinButton')}
                </SubmitButton>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
};

export default ChangePinView;
