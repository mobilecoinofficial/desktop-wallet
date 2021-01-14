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
import { useSnackbar } from 'notistack';

import { AccountCard, MOBNumberFormat } from '../../../../components';
import ShortCode from '../../../../components/ShortCode';
import { CopyIcon, TrashcanIcon } from '../../../../components/icons';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import useMobileCoinD from '../../../../hooks/useMobileCoinD';
import BuildGiftForm from './BuildGiftForm';

const EMPTY_PENDING_DELETE_CODE = ['', '0'];

const { clipboard } = require('electron');

const useStyles = makeStyles(() => {
  return {
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
  };
});

const BuildGiftPanel: FC = () => {
  const classes = useStyles();
  const { deleteStoredGiftB58Code, giftCodes } = useMobileCoinD();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pendingDeleteCode, setPendingDeleteCode] = useState(
    EMPTY_PENDING_DELETE_CODE,
  );

  const handleDialogOpen = (giftCode: string, giftValue: string) => {
    return () => {
      setDialogOpen(true);
      setPendingDeleteCode([giftCode, giftValue]);
    };
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setPendingDeleteCode(EMPTY_PENDING_DELETE_CODE);
  };

  const handleCopyClick = (code: string) => {
    return () => {
      clipboard.writeText(code);
      enqueueSnackbar('Gift Code copied to clipboard!', {
        variant: 'success',
      });
    };
  };

  const handleConfirmDelete = () => {
    handleDialogClose();
    try {
      deleteStoredGiftB58Code(pendingDeleteCode[0]);
      enqueueSnackbar('Deleted!', {
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
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        mb={3}
      >
        <Box>
          <Typography variant="body2" color="textPrimary">
            You can package and gift your MOB!
          </Typography>
          <Box p={1} />
          <Typography variant="body2" color="textSecondary">
            Use this form to create redeemable gift codes with MOB inside. To
            create a gift code, you simply need to input the value you would
            like to gift. You will then be asked to confirm the contents of the
            gift and secure the gift&apos;s secret code.
          </Typography>
        </Box>
      </Box>
      <Box flexGrow={1} mt={3}>
        <BuildGiftForm />
      </Box>
      {giftCodes.length > 0 && (
        <>
          <Box pt={4}>
            <Typography variant="body2" color="textPrimary">
              Manage Gift Codes
            </Typography>
            <Box p={1} />
            <Typography variant="body2" color="textSecondary">
              When you create a gift, this wallet will store its code and value.
              You can click to copy at any time. If you do not wish to store the
              gift code anymore, you can click the trashcan icon to delete.
            </Typography>
          </Box>
          <Box py={2}>
            <TableContainer>
              <Table size="small" aria-label="block status">
                <TableHead component={Paper}>
                  <TableRow>
                    <TableCell>Shortened Gift Code</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {giftCodes?.map(({ giftB58Code, giftValueString }) => {
                    return (
                      <TableRow key={giftB58Code}>
                        <TableCell component="th" scope="row">
                          <ShortCode code={giftB58Code} />
                        </TableCell>
                        <TableCell>
                          <MOBNumberFormat
                            value={giftValueString}
                            valueUnit="pMOB"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Box display="flex" justifyContent="flex-end">
                            <Tooltip
                              title="Click to copy to clipboard."
                              placement="right"
                              arrow
                            >
                              <div
                                className={classes.clickable}
                                onClick={handleCopyClick(giftB58Code)}
                                aria-hidden="true"
                              >
                                <IconButton>
                                  <CopyIcon />
                                </IconButton>
                              </div>
                            </Tooltip>
                            <Tooltip
                              title="Click to delete gift code."
                              placement="right"
                              arrow
                            >
                              <div
                                className={classes.clickable}
                                onClick={handleDialogOpen(
                                  giftB58Code,
                                  giftValueString,
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
            <DialogTitle id="alert-dialog-title">Delete Gift Code?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                If this gift has been claimed, or if you do not want to store
                the code and value anymore, you can delete code here.
              </DialogContentText>
              <AccountCard
                isGift
                account={{
                  b58Code: pendingDeleteCode[0],
                  mobUrl: `https://mobileocoin.com/mob58/${pendingDeleteCode[0]}`,
                  name: 'Gift Code',
                }}
              />
              <Box py={2} display="flex" justifyContent="space-between">
                <Typography color="textPrimary">Gift Value:</Typography>
                <MOBNumberFormat
                  value={pendingDeleteCode[1]}
                  valueUnit="pMOB"
                  suffix=" MOB"
                />
              </Box>
              <DialogContentText color="textPrimary">
                Deleting will not cancel the gift, and a user must claim the
                gift with the code.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary" autoFocus>
                Cancel
              </Button>
              <Button onClick={handleConfirmDelete} color="primary">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Container>
  );
};

export default BuildGiftPanel;
