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
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat, SavedPasswordsModal } from '../../../components';
import { MOBIcon } from '../../../components/icons';
import { PIN_MIN_SIZE } from '../../../constants/codes';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';
import {
  convertMobStringToPicoMobString,
  convertPicoMobStringToMob,
} from '../../../utils/convertMob';
import isValidPin from '../../../utils/isValidPin';
import { ChangePinViewProps } from './ChangePin';

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

const ChangePinView: FC<ChangePinViewProps> = ({
  accounts,
  onClickBack,
  pinThresholdPmob,
  pin,
  setPin,
}: ChangePinViewProps) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation('ChangePinView');

  const validatePin = (st: string) => (isValidPin(st) ? '' : t('errorPin'));

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.select();
  };

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
            newPin: pin || '',
            newPinConfirmation: '',
            password: '',
            pinThresholdMob: convertPicoMobStringToMob(pinThresholdPmob),
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            newPin: Yup.string().min(PIN_MIN_SIZE, t('pinSize')).required(t('pinRequired')),
            newPinConfirmation: Yup.string()
              .oneOf([Yup.ref('newPin')], t('pinConfirmationRef'))
              .required(t('pinConfirmationRequired')),
            password: Yup.string().required(t('currentPasswordRequired')),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
            try {
              await setPin(
                values.newPin,
                convertMobStringToPicoMobString(values.pinThresholdMob),
                values.password
              );
              if (isMountedRef.current) {
                setSubmitting(false);

                enqueueSnackbar(t('enqueue'), { variant: 'success' });
                setStatus({ success: true });
                resetForm({
                  values: {
                    newPin: values.newPin,
                    newPinConfirmation: '',
                    password: '',
                    pinThresholdMob: values.pinThresholdMob,
                    submit: null,
                  },
                });
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
          {({ errors, isSubmitting, dirty, isValid, setFieldValue, submitForm }) => (
            <Form>
              <Box>
                <Field
                  id="ChangePinView-currentPasswordField"
                  component={TextField}
                  fullWidth
                  label={t('currentPasswordLabel')}
                  margin="normal"
                  name="password"
                  type="password"
                  onClick={handleClick}
                />
                <Field
                  id="ChangePinView-newPinField"
                  component={TextField}
                  fullWidth
                  label={t('newPinLabel')}
                  margin="normal"
                  name="newPin"
                  type="password"
                  validate={validatePin}
                />
                <Field
                  id="ChangePinView-confirmPinField"
                  component={TextField}
                  fullWidth
                  label={t('pinConfirmationLabel')}
                  margin="normal"
                  name="newPinConfirmation"
                  type="password"
                  validate={validatePin}
                />
                <Field
                  component={TextField}
                  fullWidth
                  label={t('pinThreshold')}
                  margin="normal"
                  name="pinThresholdMob"
                  id="pinThresholdMob"
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
                {t('changePinButton')}
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default ChangePinView;
export { ChangePinView };
