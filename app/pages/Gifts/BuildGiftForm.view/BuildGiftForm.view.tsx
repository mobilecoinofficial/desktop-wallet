import React from 'react';
import type { ChangeEvent, FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Container,
  FormHelperText,
  FormLabel,
  InputAdornment,
  Slide,
  Modal,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { MOBNumberFormat } from '../../../components/MOBNumberFormat';
import { SubmitButton } from '../../../components/SubmitButton';
import { MOBIcon } from '../../../components/icons';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import type { Theme } from '../../../theme';
import { convertPicoMobStringToMob } from '../../../utils/convertMob';
import { BuildGiftFormProps } from './BuildGiftForm';

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
    overflow: 'auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    margin: '2rem',
    maxHeight: '-webkit-fill-available',
    maxWidth: 800,
    overflow: 'auto',
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
}));

// TODO -- right now, we can show a progress bar for the sending modal
// But, it would be nice to have a counter that parses up to, say, 10 seconds, before
// warning that it's taking a bit long...
// TODO -- we may want to refactor out the modals and feed them props just to keep
// this component manageable.
const BuildGiftForm: FC<BuildGiftFormProps> = ({
  confirmation,
  existingPin,
  feePmob,
  isSynced,
  onClickCancelBuild,
  onClickConfirmBuild,
  onClickCreateGift,
  pinThresholdPmob,
  selectedAccount,
  showModal,
}: BuildGiftFormProps) => {
  const classes = useStyles();
  const { t } = useTranslation('BuildGiftForm');
  const { tokenId } = useSelector((state: ReduxStoreState) => state);

  // TODO - consider adding minimum gift ~ 1 MOB
  // We'll use this array in prep for future patterns with multiple accounts
  const mockMultipleAccounts: Array<{
    b58Code: string;
    balance: bigint;
    name: string | null;
  }> = [
    {
      b58Code: selectedAccount.account.mainAddress,
      balance: BigInt(selectedAccount.balanceStatus.balancePerToken[tokenId].unspentPmob),
      name: selectedAccount.account.name,
    },
  ];

  const validateAmount = (selectedBalance: bigint, fee: bigint) => (valueString: string) => {
    let error;
    const valueAsPicoMob = BigInt(valueString.replace('.', ''));
    if (valueAsPicoMob + fee + fee > selectedBalance) {
      // TODO - probably want to replace this before launch
      error = t('errorFee', { limit: Number(fee) / 1000000000000 });
    }
    return error;
  };

  // We'll use this to auto-select all text when focused. This is a better user
  // experience than having to click the left-most area to start typing (else)
  // having to spam backspace.
  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <Formik
      initialValues={{
        feeAmount: convertPicoMobStringToMob(feePmob),
        mobValue: '0', // mobs
        pin: '',
        senderPublicAddress: mockMultipleAccounts[0].b58Code,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        mobValue: Yup.number()
          .positive(t('positiveValidation'))
          .required(t('positiveValidationRequired')),
      })}
      onSubmit={async (values) => {
        onClickCreateGift(values.mobValue, values.feeAmount);
      }}
    >
      {({ errors, isSubmitting, isValid, dirty, submitForm, values }) => {
        const selectedBalance =
          // TODO -- this is fine. we'll gut it anyway once we add multiple accounts
          // eslint-disable-next-line
          // @ts-ignore
          BigInt(
            mockMultipleAccounts.find((account) => account.b58Code === values.senderPublicAddress)
              .balance
          );

        let isPinRequiredForTransaction = false;
        if (confirmation.totalValueConfirmation) {
          isPinRequiredForTransaction =
            confirmation?.totalValueConfirmation + confirmation?.feeConfirmation >=
            BigInt(pinThresholdPmob);
        }

        let remainingBalance;
        let totalSent = 0;
        if (confirmation?.totalValueConfirmation && confirmation?.feeConfirmation) {
          remainingBalance =
            selectedBalance -
            BigInt(confirmation?.totalValueConfirmation + confirmation?.feeConfirmation);
          totalSent = confirmation?.totalValueConfirmation + confirmation?.feeConfirmation;
        }

        return (
          <Form>
            {/* {renderSenderPublicAddressOptions(mockMultipleAccounts, isSubmitting)} */}
            <Box pt={4}>
              <FormLabel component="legend">
                <Typography color="primary">{t('giftDetails')}</Typography>
              </FormLabel>
              <Field
                component={TextField}
                fullWidth
                label={t('mobLabel')}
                margin="normal"
                name="mobValue"
                id="mobValue"
                type="text"
                onFocus={handleSelect}
                validate={validateAmount(
                  selectedBalance,
                  BigInt(Number(values.feeAmount) * 1_000_000_000_000)
                )}
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
            {!isSynced && (
              <Box mt={3}>
                <FormHelperText error>{t('errorSyncBeforeSending')}</FormHelperText>
              </Box>
            )}
            <SubmitButton
              disabled={!dirty || !isSynced || !isValid || isSubmitting}
              onClick={submitForm}
              isSubmitting={isSubmitting}
            >
              {isSynced ? t('createGift') : `${t('walletSyncing')}...`}
            </SubmitButton>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={showModal}
              onClose={onClickCancelBuild}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 1000,
              }}
              disableAutoFocus
              disableEnforceFocus
            >
              <Slide in={showModal} timeout={{ enter: 0 }}>
                <Container className={classes.paper}>
                  <Box py={2}>
                    <Typography variant="h1" color="textPrimary">
                      {t('giftConfirmation')}
                    </Typography>
                    <Typography color="textPrimary">{t('giftConfirmationDescription')}:</Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    style={{ borderBottom: '1px solid' }}
                  >
                    <Typography color="textPrimary">{t('accountBalance')}:</Typography>
                    <Typography color="textPrimary">
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={selectedBalance?.toString()}
                      />
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography color="primary">{t('giftValue')}:</Typography>
                    <Typography color="primary">
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={(
                          confirmation?.totalValueConfirmation - confirmation?.feeConfirmation
                        ).toString()}
                      />
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography color="textPrimary">{t('fee')}:</Typography>
                    <Typography color="textPrimary">
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={(
                          confirmation?.feeConfirmation + confirmation?.feeConfirmation
                        ).toString()}
                      />
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    style={{ borderBottom: '1px solid' }}
                  >
                    <Typography color="textPrimary">{t('total')}:</Typography>
                    <Typography color="textPrimary">
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={totalSent?.toString()}
                      />
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography color="primary">{t('remaining')}:</Typography>
                    <Typography color="primary">
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={remainingBalance?.toString()}
                      />
                    </Typography>
                  </Box>
                  {/* TODO - after multiple accounts, we should actually store these gift codes. please check jira for full explanation */}
                  <Typography variant="body2" color="textPrimary">
                    {t('mobWillBeSent')}
                  </Typography>
                  <Box py={1} />
                  {isPinRequiredForTransaction && (
                    <Field
                      component={TextField}
                      fullWidth
                      label={t('enterPin')}
                      margin="normal"
                      name="pin"
                      type="password"
                      style={{ topMargin: 0 }}
                    />
                  )}
                  <Box display="flex" justifyContent="space-between" style={{ padding: '1rem' }}>
                    <Button
                      className={classes.button}
                      color="secondary"
                      onClick={onClickCancelBuild}
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
                      disabled={isPinRequiredForTransaction && values.pin !== existingPin}
                      fullWidth
                      onClick={onClickConfirmBuild}
                      variant="contained"
                      id="confirm-modal"
                    >
                      {t('confirmGift')}
                    </Button>
                  </Box>
                </Container>
              </Slide>
            </Modal>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BuildGiftForm;
export { BuildGiftForm };
