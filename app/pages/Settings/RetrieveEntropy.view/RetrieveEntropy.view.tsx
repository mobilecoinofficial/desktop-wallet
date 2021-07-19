import React from 'react';
import type { FC } from 'react';

import {
  Backdrop,
  Box,
  Breadcrumbs,
  Container,
  FormHelperText,
  FormLabel,
  Link,
  Modal,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, SavedPasswordsModal } from '../../../components';
import type { Theme } from '../../../theme';
import { ShowRetrievedEntropyModal } from '../ShowRetrievedEntropy.view';
import { RetrieveEntropyViewProps } from './RetrieveEntropy';

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

const RetrieveEntropyView: FC<RetrieveEntropyViewProps> = ({
  accounts,
  entropy,
  onClickBack,
  onClickClose,
  onClickRetrieveEntropy,
}: RetrieveEntropyViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('RetrieveEntropyView');
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
          onSubmit={async (values) => onClickRetrieveEntropy(values.password)}
        >
          {({ errors, isSubmitting, dirty, isValid, setFieldValue, submitForm }) => (
            <Form>
              <Box pt={4}>
                <FormLabel component="legend">
                  <Typography color="primary">{t('retrieveEntropy')}</Typography>
                </FormLabel>
                <Field
                  id="RetrieveEntropyForm-passwordField"
                  component={TextField}
                  fullWidth
                  label={t('password')}
                  margin="normal"
                  name="password"
                  type="password"
                  onClick={handleClick}
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
                {t('retrieveEntropy')}
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={!!entropy}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
        disableAutoFocus
        disableEnforceFocus
      >
        <div>
          <ShowRetrievedEntropyModal open={!!entropy} entropy={entropy} onClose={onClickClose} />
        </div>
      </Modal>
    </Container>
  );
};

export default RetrieveEntropyView;
export { RetrieveEntropyView };
