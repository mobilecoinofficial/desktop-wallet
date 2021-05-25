import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  IconButton,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

import { AccountCard, MOBNumberFormat } from '../../../components';
import { ShortCode } from '../../../components/ShortCode';
import { CopyIcon, TrashcanIcon } from '../../../components/icons';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import { BuildGiftForm } from '../BuildGiftForm.view';
import type { BuildGiftPanelProps } from './BuildGiftPanel.d';

const EMPTY_PENDING_DELETE_CODE = ['', '0'];

const useStyles = makeStyles(() => ({
  clickable: {
    cursor: 'pointer',
    marginRight: 8,
    paddingLeft: 4,
    paddingRight: 4,
  },
}));

const BuildGiftPanel: FC<BuildGiftPanelProps> = ({
  codeClicked,
  deleteStoredGiftCodeB58,
  getAllGiftCodes,
  giftCodes,
  buildGiftCode,
  existingPin,
  isSyncedBuffered,
  pinThresholdPmob,
  selectedAccount,
  submitGiftCode,
}: BuildGiftPanelProps) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pendingDeleteCode, setPendingDeleteCode] = useState(EMPTY_PENDING_DELETE_CODE);

  const { t } = useTranslation('BuildGiftPanel');

  const handleDialogOpen = (giftCode: string, giftValue: string) => () => {
    setDialogOpen(true);
    setPendingDeleteCode([giftCode, giftValue]);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setPendingDeleteCode(EMPTY_PENDING_DELETE_CODE);
  };

  const handleCopyClick = (code: string) => {
    codeClicked(code, t('giftCodeCopied'));
  };

  const handleConfirmDelete = async () => {
    handleDialogClose();
    try {
      await deleteStoredGiftCodeB58(pendingDeleteCode[0]);
      await getAllGiftCodes();
      enqueueSnackbar(t('deleted'), {
        variant: 'success',
      });
    } catch (err) {
      if (isMountedRef.current) {
        enqueueSnackbar(err.message, {
          variant: 'error',
        });
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
            <Box>
              <Typography variant="body1" color="textPrimary">
                {t('title')}
              </Typography>
              <Box p={1} />
              <Typography variant="body2" color="textSecondary">
                {t('description')}
              </Typography>
            </Box>
          </Box>
          <Box flexGrow={1} mt={3}>
            <BuildGiftForm
              buildGiftCode={buildGiftCode}
              existingPin={existingPin}
              getAllGiftCodes={getAllGiftCodes}
              isSyncedBuffered={isSyncedBuffered}
              pinThresholdPmob={pinThresholdPmob}
              selectedAccount={selectedAccount}
              submitGiftCode={submitGiftCode}
              codeClicked={codeClicked}
            />
          </Box>
        </CardContent>
      </Card>
      {giftCodes && giftCodes.length > 0 && (
        <Box mt={3}>
          <Card>
            <CardContent>
              <Box pt={1}>
                <Typography variant="body1" color="textPrimary">
                  {t('manageGiftCodes')}
                </Typography>
                <Box p={1} />
                <Typography variant="body2" color="textSecondary">
                  {t('manageGiftCodesDescription')}
                </Typography>
              </Box>
              <Box py={2}>
                <TableContainer>
                  <Table size="small" aria-label="block status">
                    <TableHead component={Card}>
                      <TableRow>
                        <TableCell>{t('shortened')}</TableCell>
                        <TableCell>{t('value')}</TableCell>
                        <TableCell />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {giftCodes?.map((giftCode) => (
                        <TableRow key={giftCode.giftCodeB58}>
                          <TableCell component="th" scope="row">
                            <ShortCode code={giftCode.giftCodeB58} />
                          </TableCell>
                          <TableCell>
                            <MOBNumberFormat
                              // FIX-ME right now, we subtract the hardcoded fee
                              value={(
                                BigInt(giftCode.valuePmob) - BigInt('10000000000')
                              ).toString()}
                              valueUnit="pMOB"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Box display="flex" justifyContent="flex-end">
                              <Tooltip title={t('clickToCopy') as string} placement="right" arrow>
                                <div
                                  className={classes.clickable}
                                  onClick={() => handleCopyClick(giftCode.giftCodeB58)}
                                  aria-hidden="true"
                                >
                                  <IconButton>
                                    <CopyIcon />
                                  </IconButton>
                                </div>
                              </Tooltip>
                              <Tooltip title={t('clickToDelete') as string} placement="right" arrow>
                                <div
                                  className={classes.clickable}
                                  onClick={handleDialogOpen(
                                    giftCode.giftCodeB58,
                                    giftCode.valuePmob
                                  )}
                                  aria-hidden="true"
                                >
                                  <IconButton>
                                    <TrashcanIcon />
                                  </IconButton>
                                </div>
                              </Tooltip>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{t('deleteDialogTitle')}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {t('deleteDialogDescription')}
                  </DialogContentText>
                  <AccountCard
                    isGift
                    account={{
                      b58Code: pendingDeleteCode[0],
                      name: 'Gift Code',
                    }}
                    codeClicked={codeClicked}
                  />
                  <Box py={2} display="flex" justifyContent="space-between">
                    <Typography color="textPrimary">{t('giftValue')}</Typography>
                    {/* FIX-ME right now, we subtract the hardcoded fee */}
                    <MOBNumberFormat
                      value={(BigInt(pendingDeleteCode[1]) - BigInt('10000000000')).toString()}
                      valueUnit="pMOB"
                      suffix=" MOB"
                    />
                  </Box>
                  <DialogContentText color="textPrimary">{t('deleteDialogText')}</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDialogClose} color="primary" autoFocus>
                    {t('cancelButton')}
                  </Button>
                  <Button onClick={handleConfirmDelete} color="primary">
                    {t('deleteButton')}
                  </Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  );
};

BuildGiftPanel.defaultProps = {
  deleteStoredGiftCodeB58: () => {},
  giftCodes: [],
};

export default BuildGiftPanel;
export { BuildGiftPanel };
