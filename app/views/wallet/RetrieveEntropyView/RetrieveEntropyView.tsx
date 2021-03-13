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
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import routePaths from '../../../constants/routePaths';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import useMobileCoinD from '../../../hooks/useMobileCoinD';
import type { Theme } from '../../../theme';
import ShowRetrievedEntropyModal from './ShowRetrievedEntropyModal';

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

const RetrieveEntropyView: FC = () => {
  const classes = useStyles();
  const [entropy, setEntropy] = useState('');
  const isMountedRef = useIsMountedRef();
  const { retrieveEntropy } = useMobileCoinD();
  const handleCloseModal = () => {
    setEntropy('');
  };
  const { t } = useTranslation('RetrieveEntropyView');

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link color="inherit" to={routePaths.APP_SETTINGS} component={RouterLink}>
          <Typography color="textSecondary">{t('settings')}</Typography>
        </Link>
        <Typography color="textPrimary">{t('retrieveSecret')}</Typography>
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
            {t('header')}
          </Typography>
          <Typography variant="body2" display="inline" color="primary">
            {' SECRET KEY '}
          </Typography>
          <Typography variant="body2" display="inline" color="textSecondary">
            {t('description')}
          </Typography>
        </Box>
        <br />
        <Typography variant="body2" color="textSecondary">
          {t('entropyCanBeUsed')}
        </Typography>
        <br />

        <Typography variant="body2" color="textSecondary">
          {t('misplacedYourEntropy')}
        </Typography>
      </Box>
      <Box flexGrow={1} mt={3}>
        <Formik
          initialValues={{
            password: '',
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string().required(t('passwordRequired')),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
            try {
              setSubmitting(true);

              const entropyString = await retrieveEntropy(values.password);

              if (typeof entropyString !== 'string') {
                throw new Error(t('error'));
              }
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
          {({ errors, isSubmitting, dirty, isValid, submitForm }) => (
            <Form>
              <Box pt={4}>
                <FormLabel component="legend">
                  <Typography color="primary">{t('retrieveEntropy')}</Typography>
                </FormLabel>
                <Field
                  component={TextField}
                  fullWidth
                  label={t('password')}
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
                disabled={!dirty || !isValid || isSubmitting}
                onClick={submitForm}
                isSubmitting={isSubmitting}
              >
                {t('retrieveEntropy')}
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Box>
      <ShowRetrievedEntropyModal open={!!entropy} entropy={entropy} onClose={handleCloseModal} />
    </Container>
  );
};

export default RetrieveEntropyView;
