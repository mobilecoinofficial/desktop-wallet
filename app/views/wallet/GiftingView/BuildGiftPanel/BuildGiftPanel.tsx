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
  Paper,
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
import { clipboard } from 'electron';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

import { AccountCard, MOBNumberFormat } from '../../../../components';
import ShortCode from '../../../../components/ShortCode';
import { CopyIcon, TrashcanIcon } from '../../../../components/icons';
import useFullService from '../../../../hooks/useFullService';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import BuildGiftForm from './BuildGiftForm';

const EMPTY_PENDING_DELETE_CODE = ['', '0'];

const useStyles = makeStyles(() => ({
  cardContainer: {
    paddingBottom: 64,
    paddingTop: 64,
  },
  clickable: {
    cursor: 'pointer',
    marginRight: 8,
    paddingLeft: 4,
    paddingRight: 4,
  },
}));

const BuildGiftPanel: FC = () => {
  const classes = useStyles();
  const { deleteStoredGiftCodeB58, giftCodes } = useFullService();
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

  const handleCopyClick = (code: string) => () => {
    clipboard.writeText(code);
    enqueueSnackbar(t('giftCodeCopied'), {
      variant: 'success',
    });
  };

  const handleConfirmDelete = () => {
    handleDialogClose();
    try {
      deleteStoredGiftCodeB58(pendingDeleteCode[0]);
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
    <Container className={classes.cardContainer} maxWidth="sm">
      <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="body2" color="textPrimary">
            {t('title')}
          </Typography>
          <Box p={1} />
          <Typography variant="body2" color="textSecondary">
            {t('description')}
          </Typography>
        </Box>
      </Box>
      <Box flexGrow={1} mt={3}>
        <BuildGiftForm />
      </Box>
      {giftCodes && giftCodes.length > 0 && (
        <>
          <Box pt={4}>
            <Typography variant="body2" color="textPrimary">
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
                <TableHead component={Paper}>
                  <TableRow>
                    <TableCell>{t('shortened')}</TableCell>
                    <TableCell>{t('value')}</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {giftCodes?.map(({ giftCodeB58, giftValueString }) => {
                    return (
                      <TableRow key={giftCodeB58}>
                        <TableCell component="th" scope="row">
                          <ShortCode code={giftCodeB58} />
                        </TableCell>
                        <TableCell>
                          <MOBNumberFormat value={giftValueString} valueUnit="pMOB" />
                        </TableCell>
                        <TableCell align="right">
                          <Box display="flex" justifyContent="flex-end">
                            <Tooltip title={t('clickToCopy')} placement="right" arrow>
                              <div
                                className={classes.clickable}
                                onClick={handleCopyClick(giftCodeB58)}
                                aria-hidden="true"
                              >
                                <IconButton>
                                  <CopyIcon />
                                </IconButton>
                              </div>
                            </Tooltip>
                            <Tooltip title={t('clickToDelete')} placement="right" arrow>
                              <div
                                className={classes.clickable}
                                onClick={handleDialogOpen(giftCodeB58, giftValueString)}
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
                    );
                  })}
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
                  mobUrl: `https://mobilecoin.com/mob58/${pendingDeleteCode[0]}`,
                  name: 'Gift Code',
                }}
              />
              <Box py={2} display="flex" justifyContent="space-between">
                <Typography color="textPrimary">{t('giftValue')}</Typography>
                <MOBNumberFormat value={pendingDeleteCode[1]} valueUnit="pMOB" suffix=" MOB" />
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
        </>
      )}
    </Container>
  );
};

export default BuildGiftPanel;
