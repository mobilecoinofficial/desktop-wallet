import React, { ChangeEvent, useEffect, useState } from 'react';

import { Box, Container, Fade, Grid, makeStyles, Modal, Tab, Tabs } from '@material-ui/core';
import { clipboard } from 'electron';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { AccountCard } from '../../../components/AccountCard';
import { SubmitButton } from '../../../components/SubmitButton';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import {
  buildGiftCode,
  checkGiftCodeStatus,
  claimGiftCode,
  deleteStoredGiftCodeB58,
  getAllGiftCodes,
  getFeePmob,
  submitGiftCode,
} from '../../../services';
import type { Theme } from '../../../theme';
import { Accounts, GiftCode, SelectedAccount } from '../../../types';
import type { TxProposal } from '../../../types/TxProposal';
import { convertMobStringToPicoMobString } from '../../../utils/convertMob';
import isSyncedBuffered from '../../../utils/isSyncedBuffered';
import { BuildGiftPanel } from '../BuildGiftPanel.view';
import { ConsumeGiftForm } from '../ConsumeGiftForm.view';

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  padding: {
    paddingBottom: theme.spacing(3),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4),
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
  },
}));

// CBB: Shouldn't have to use this hack to get around state issues
const EMPTY_CONFIRMATION_CONSUME = {
  giftCodeB58: '',
  giftCodeStatus: '',
  giftValue: 0,
};

const EMPTY_CONFIRMATION_BUILD = {
  feeConfirmation: 0n,
  giftCodeB58: '',
  totalValueConfirmation: 0n,
  txProposal: {} as TxProposal,
};

type Props = ReduxProps;

const GiftsPage = (props: Props): JSX.Element => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [giftCode, setGiftCode] = useState('');
  const [showGiftCode, setshowGiftCode] = useState(false);
  const [showModalBuild, setShowModalBuild] = useState(false);
  const [showModalConsume, setShowModalConsume] = useState(false);
  const [confirmationBuild, setConfirmationBuild] = useState(EMPTY_CONFIRMATION_BUILD);
  const [confirmationConsume, setConfirmationConsume] = useState(EMPTY_CONFIRMATION_CONSUME);

  const { t } = useTranslation('GiftingView');
  const {
    accounts,
    feePmob,
    giftCodes,
    pin: existingPin,
    pinThresholdPmob,
    // next for both
    selectedAccount,
  } = props;

  const networkBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.networkBlockHeight ?? 0);
  const accountBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.accountBlockHeight ?? 0);

  const isSynced = isSyncedBuffered(networkBlockHeightBigInt, accountBlockHeightBigInt);

  const handleChange = (_event: ChangeEvent<HTMLElement>, newSelectedTabIndex: number) => {
    setSelectedTabIndex(newSelectedTabIndex);
  };

  const handleCodeClicked = (code: string, text: string) => {
    clipboard.writeText(code);
    if (text) {
      enqueueSnackbar(text, { variant: 'success' });
    }
  };

  const onClickCreateGift = async (mobValue: string, feeAmount: string) => {
    try {
      const adjustedValue = Number(mobValue) + Number(feeAmount);

      const result = await buildGiftCode({
        accountId: selectedAccount.account.accountId,
        valuePmob: convertMobStringToPicoMobString(String(adjustedValue)),
      });

      if (result === null || result === undefined) {
        throw new Error(t('errorBuild'));
      }

      const { feeConfirmation, giftCodeB58, totalValueConfirmation, txProposal } = result;

      setConfirmationBuild({
        feeConfirmation,
        giftCodeB58,
        totalValueConfirmation,
        txProposal,
      });

      setShowModalBuild(true);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  };

  const onClickCancelBuild = () => {
    setShowModalBuild(false);
    setConfirmationBuild(EMPTY_CONFIRMATION_BUILD);
    enqueueSnackbar(t('giftCanceled'), { variant: 'warning' });
  };

  const onClickConfirmBuild = async () => {
    setShowModalBuild(false);
    try {
      if (confirmationBuild.txProposal === null || confirmationBuild.txProposal === undefined) {
        throw new Error(t('confirmationNotFound'));
      }
      await submitGiftCode({
        fromAccountId: selectedAccount.account.accountId,
        giftCodeB58: confirmationBuild.giftCodeB58,
        txProposal: confirmationBuild.txProposal,
      });

      await getAllGiftCodes();
      enqueueSnackbar(t('giftCreated'), { variant: 'success' });

      setGiftCode(confirmationBuild.giftCodeB58);
      setshowGiftCode(true);
    } catch (err) {
      enqueueSnackbar(t('errorCreate'), { variant: 'error' });
    }

    setConfirmationBuild(EMPTY_CONFIRMATION_BUILD);
  };

  const onClickDeleteGiftCodeBuild = async (giftCodeToDelete: string) => {
    try {
      await deleteStoredGiftCodeB58(giftCodeToDelete);
      enqueueSnackbar(t('giftDeleted'), { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
    getAllGiftCodes();
  };

  const onClickCancelConsume = () => {
    setShowModalConsume(false);
    enqueueSnackbar(t('giftCanceled'), { variant: 'warning' });
  };

  const onClickOpenGiftConsume = async (giftCodeB58: string) => {
    try {
      const result = await checkGiftCodeStatus({ giftCodeB58 });
      if (result === null || result === undefined) {
        throw new Error(t('giftB58Error'));
      }

      const { giftCodeStatus, giftCodeValue } = result;

      setConfirmationConsume({
        giftCodeB58,
        giftCodeStatus,
        giftValue: giftCodeValue,
      });

      if (giftCodeStatus === 'GiftCodeAvailable') {
        setShowModalConsume(true);
      } else {
        if (giftCodeStatus === 'GiftCodeSubmittedPending') {
          enqueueSnackbar(t('giftB58Error'), { variant: 'warning' });
        }

        if (giftCodeStatus === 'GiftCodeClaimed') {
          enqueueSnackbar(t('giftPreviouslyClaimed'), { variant: 'warning' });
        }
      }
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'warning' });
    }
  };

  const onClickClaimGiftConsume = async () => {
    try {
      await claimGiftCode({
        accountId: selectedAccount.account.accountId,
        giftCodeB58: confirmationConsume.giftCodeB58,
      });

      enqueueSnackbar(t('giftConsumed'), { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(t('giftConsumeError'), { variant: 'error' });
    }

    setShowModalConsume(false);
  };

  useEffect(() => {
    getAllGiftCodes();
  }, []);
  useEffect(() => {
    getFeePmob();
  }, []);

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Tabs
            variant="fullWidth"
            value={selectedTabIndex}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            className={classes.padding}
          >
            <Tab label={t('tabs.createGift')} />
            <Tab label={t('tabs.openGift')} />
          </Tabs>
          {selectedTabIndex === 0 && (
            <>
              <BuildGiftPanel
                accounts={accounts}
                buildGiftCode={buildGiftCode}
                confirmation={confirmationBuild}
                deleteStoredGiftCodeB58={deleteStoredGiftCodeB58}
                existingPin={existingPin as string}
                feePmob={feePmob || '400000000'}
                getAllGiftCodes={getAllGiftCodes}
                giftCodes={giftCodes}
                handleCopyClick={handleCodeClicked}
                isSynced={isSynced}
                onClickCancelBuild={onClickCancelBuild}
                onClickCode={handleCodeClicked}
                onClickConfirmBuild={onClickConfirmBuild}
                onClickCreateGift={onClickCreateGift}
                onClickDeleteGiftCode={onClickDeleteGiftCodeBuild}
                pinThresholdPmob={pinThresholdPmob}
                selectedAccount={selectedAccount}
                showModal={showModalBuild}
                submitGiftCode={submitGiftCode}
              />
              {showGiftCode && (
                <Modal
                  data-testid="close-gift-code-modal"
                  className={classes.modal}
                  open={showGiftCode}
                  onClose={() => setshowGiftCode(false)}
                  closeAfterTransition
                  disableAutoFocus
                  disableEnforceFocus
                >
                  <Fade in={showGiftCode}>
                    <div>
                      <Container className={classes.paper}>
                        <Box py={2}>
                          <AccountCard
                            isGift
                            account={{
                              b58Code: giftCode,
                            }}
                            onClickCode={handleCodeClicked}
                          />
                          <SubmitButton onClick={() => setshowGiftCode(false)} id="gift-code-modal">
                            {t('hideCode')}
                          </SubmitButton>
                        </Box>
                      </Container>
                    </div>
                  </Fade>
                </Modal>
              )}
            </>
          )}
          {selectedTabIndex === 1 && (
            <ConsumeGiftForm
              confirmation={confirmationConsume}
              feePmob={feePmob || '400000000'}
              onClickCancel={onClickCancelConsume}
              onClickClaimGift={onClickClaimGiftConsume}
              onClickOpenGift={onClickOpenGiftConsume}
              selectedAccount={selectedAccount}
              showModal={showModalConsume}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

type ReduxProps = {
  accounts: Accounts;
  feePmob: string;
  giftCodes: GiftCode[] | null;
  pin: string | undefined;
  pinThresholdPmob: string;
  // next for both
  selectedAccount: SelectedAccount | null;
};

const mapState = (state: ReduxStoreState): ReduxProps => ({
  accounts: state.accounts,
  feePmob: state.feePmob,
  giftCodes: state.giftCodes,
  pin: state.pin,
  pinThresholdPmob: state.pinThresholdPmob,
  selectedAccount: state.selectedAccount,
});

export const ConnectedGiftsPage = connect<
  ReduxProps,
  Record<string, never>,
  Record<string, never>,
  ReduxStoreState
>(mapState)(GiftsPage);
