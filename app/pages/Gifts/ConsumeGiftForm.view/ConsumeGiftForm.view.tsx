import React from 'react';
import type { FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormHelperText,
  FormLabel,
  Slide,
  Modal,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat } from '../../../components';
import type { Theme } from '../../../theme';
import { ConsumeGiftFormProps } from './ConsumeGiftForm';
import { useCurrentToken } from '../../../hooks/useCurrentToken';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: 300,
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
  formControlLabelRoot: {
    marginRight: 0,
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
    maxWidth: 800,
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
}));

// TODO -- right now, we can show a progress bar for the sending modal
// But, it would be nice to have a counter that parses up to, say, 10 seconds, before
// warning that it's taking a bit long...
// TODO -- we may want to refactor out the modals and feed them props just to keep
// this component managable.
const ConsumeGiftForm: FC<ConsumeGiftFormProps> = ({
  confirmation,
  fee,
  onClickCancel,
  onClickClaimGift,
  onClickOpenGift,
  selectedAccount,
  showModal,
}: ConsumeGiftFormProps) => {
  const classes = useStyles();
  const { t } = useTranslation('ConsumeGiftForm');
  const token = useCurrentToken();

  // We'll use this array in prep for future patterns with multiple accounts
  // TODO - fix the type for Account
  const mockMultipleAccounts: Array<{
    b58Code: string;
    balance: bigint;
    name: string | null;
  }> = [
    {
      b58Code: selectedAccount.account.mainAddress,
      balance: BigInt(selectedAccount.balanceStatus.balancePerToken[token.id].unspentPmob),
      name: selectedAccount.account.name,
    },
  ];

  return (
    <Formik
      initialValues={{
        giftCodeB58: '', // mobs
        senderPublicAddress: mockMultipleAccounts[0].b58Code,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        giftCodeB58: Yup.string().required(t('giftB58Validation')),
      })}
      onSubmit={(values) => onClickOpenGift(values.giftCodeB58)}
    >
      {({
        errors,
        isSubmitting,
        dirty,
        handleBlur,
        isValid,
        setFieldValue,
        submitForm,
        values,
      }) => {
        const selectedBalance =
          // TODO -- this is fine. we'll gut it anyway once we add multiple accounts
          // eslint-disable-next-line
          // @ts-ignore
          mockMultipleAccounts.find(
            (account) => account.b58Code === values.senderPublicAddress
          ).balance;
        let increasedBalance;
        let totalSent;

        if (confirmation?.giftValue) {
          increasedBalance = Number(selectedBalance) + confirmation?.giftValue - Number(fee);
          totalSent = confirmation?.giftValue;
        }

        return (
          <Container className={classes.root} maxWidth="sm">
            <Card>
              <CardContent>
                <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
                  <Box width="100%">
                    <Typography variant="body1" color="textPrimary">
                      {t('title')}
                    </Typography>
                    <Box p={1} />
                    <Typography variant="body2" color="textSecondary">
                      {t('description')}
                    </Typography>
                  </Box>
                </Box>
                <Form>
                  {/* {renderSenderPublicAdddressOptions(mockMultipleAccounts, isSubmitting)} */}
                  <Box pt={4}>
                    <FormLabel component="legend">
                      <Typography color="primary">{t('giftDetails')}</Typography>
                    </FormLabel>
                    <Field
                      component={TextField}
                      fullWidth
                      label={t('giftCode')}
                      margin="normal"
                      name="giftCodeB58"
                      id="giftCodeB58"
                      type="text"
                      onBlur={(event) => {
                        handleBlur(event);
                        setFieldValue('giftCodeB58', event.target.value.trim());
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
                    {t('openGift')}
                  </SubmitButton>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={showModal}
                    onClose={onClickCancel}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 1000,
                    }}
                    disableAutoFocus
                    disableEnforceFocus
                  >
                    <Slide in={showModal} timeout={{ enter: 0, exit: 0 }}>
                      <Container className={classes.paper}>
                        <Typography color="textPrimary" variant="h1" id="transition-modal-title">
                          {t('giftConfirmation')}
                        </Typography>
                        <Box py={2} />
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          style={{ borderBottom: '1px solid' }}
                        >
                          <Typography color="textPrimary">{t('accountBalance')}:</Typography>
                          <Typography color="textPrimary">
                            <MOBNumberFormat
                              suffix={` ${token.name}`}
                              token={token}
                              value={selectedBalance?.toString()}
                            />
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="textPrimary">{t('total')}:</Typography>
                          <Typography color="textPrimary">
                            <MOBNumberFormat
                              suffix={` ${token.name}`}
                              token={token}
                              value={totalSent?.toString() as string}
                            />
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="textPrimary">{t('fee')}:</Typography>
                          <Typography color="textPrimary">
                            <MOBNumberFormat suffix={` ${token.name}`} token={token} value={fee} />
                          </Typography>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          style={{ borderBottom: '1px solid' }}
                        >
                          <Typography color="primary">{t('giftValue')}:</Typography>
                          <Typography color="primary">
                            <MOBNumberFormat
                              suffix={` ${token.name}`}
                              token={token}
                              value={(confirmation?.giftValue - Number(fee)).toString()}
                            />
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="primary">{t('newBalance')}:</Typography>
                          <Typography color="primary">
                            <MOBNumberFormat
                              suffix={` ${token.name}`}
                              token={token}
                              value={increasedBalance?.toString() as string}
                            />
                          </Typography>
                        </Box>
                        <Box py={1} />
                        <Box display="flex" justifyContent="space-between">
                          <Button
                            className={classes.button}
                            color="secondary"
                            onClick={onClickCancel}
                            size="large"
                            fullWidth
                            variant="contained"
                            id="cancel-modal"
                          >
                            {t('cancel')}
                          </Button>
                          <Box px={2} />
                          <Button
                            className={classes.button}
                            color="secondary"
                            fullWidth
                            onClick={onClickClaimGift}
                            variant="contained"
                            id="claim-modal"
                          >
                            {t('claimGift')}
                          </Button>
                        </Box>
                      </Container>
                    </Slide>
                  </Modal>
                </Form>
              </CardContent>
            </Card>
          </Container>
        );
      }}
    </Formik>
  );
};

export default ConsumeGiftForm;
export { ConsumeGiftForm };
