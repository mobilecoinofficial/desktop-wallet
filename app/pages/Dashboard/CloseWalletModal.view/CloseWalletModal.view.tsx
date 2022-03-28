import React, { useState, FC } from 'react';

import { Box, Card, CardContent, Fade, makeStyles, Modal, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { SubmitButton } from '../../../components';
import { Theme } from '../../../theme';
import { CloseWalletModalProps } from './CloseWalletModal';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    maxWidth: 300,
    width: '35vw',
  },
  card: {
    padding: theme.spacing(0, 3),
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
    padding: theme.spacing(3, 4),
  },
}));

export const CloseWalletModal: FC<CloseWalletModalProps> = ({ onClose }: CloseWalletModalProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('CloseWalletModal');

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <SubmitButton
            testID="close-wallet-button"
            disabled={false}
            isSubmitting={false}
            onClick={handleOpenModal}
          >
            {t('closeWalletButton')}
          </SubmitButton>
        </CardContent>
      </Card>
      <Modal
        data-testid="close-wallet-modal"
        className={classes.modal}
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        disableAutoFocus
        disableEnforceFocus
      >
        <Fade in={open}>
          <Box className={classes.paper}>
            <Typography color="textPrimary" variant="h2" gutterBottom>
              {t('closeVerifyHeader')}
            </Typography>
            <Typography color="textPrimary" variant="body2" gutterBottom>
              {t('closeVerifyBody')}
            </Typography>
            <Box display="flex">
              <SubmitButton
                testID="close-wallet-deny"
                buttonClass={classes.button}
                onClick={handleCloseModal}
                isSubmitting={false}
                disabled={!open}
              >
                {t('closeVerifyDeny')}
              </SubmitButton>
              <Box p={1} />
              <SubmitButton
                testID="close-wallet-confirm"
                buttonClass={classes.button}
                onClick={onClose}
                isSubmitting={false}
                disabled={!open}
              >
                {t('closeVerifyConfirm')}
              </SubmitButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
