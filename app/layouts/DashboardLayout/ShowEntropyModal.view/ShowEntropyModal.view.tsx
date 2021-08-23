import React, { useState } from 'react';
import type { FC } from 'react';

import { Backdrop, Box, Button, Fade, makeStyles, Modal, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ShowRetrievedEntropy from '../../../pages/Settings/ShowRetrievedEntropy.view';
import type { Theme } from '../../../theme';
import { ShowEntropyModalProps } from './ShowEntropyModal';

const useStyles = makeStyles((theme: Theme) => ({
  hiddenEntropy: {
    color: theme.palette.background.paper,
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
    margin: '2rem',
    maxHeight: '-webkit-fill-available',
    maxWidth: 800,
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
  shownEntropy: {},
}));

const ShowEntropyModal: FC<ShowEntropyModalProps> = ({
  isShown,
  mnemonic,
  confirmEntropyKnown,
}: ShowEntropyModalProps) => {
  const classes = useStyles();
  const [alertOpen, setAlertOpen] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [showEntropy, setShowEntropy] = useState(false);
  const { t } = useTranslation('ShowEntropyModal');

  const handleCloseModal = () => confirmEntropyKnown();

  const toggleEntropy = () => {
    if (!canGoForward) {
      setCanGoForward(true);
    }
    setShowEntropy(!showEntropy);
  };

  const handleGoForward = () => {
    setAlertOpen(true);
    setShowEntropy(false);
  };

  const handleGoBack = () => setAlertOpen(false);

  const handleFinalConfirm = async () => {
    await confirmEntropyKnown();
    setAlertOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isShown}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
      disableAutoFocus
      disableEnforceFocus
    >
      <Fade in={isShown}>
        {!alertOpen ? (
          <ShowRetrievedEntropy entropy={mnemonic} open={!alertOpen} onClose={handleGoForward} />
        ) : (
          <Box className={classes.paper}>
            <Typography color="textPrimary" gutterBottom variant="h2">
              {t('confirm')}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary">
              {t('retrieve')}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary">
              {t('recommend')}
            </Typography>
            <br />
            <Box display="flex" justifyContent="space-between">
              <Button
                color="secondary"
                onClick={handleGoBack}
                size="large"
                fullWidth
                type="submit"
                variant="contained"
              >
                {t('back')}
              </Button>
              <Box paddingX={2} />
              <Button
                color="secondary"
                fullWidth
                onClick={handleFinalConfirm}
                size="large"
                type="submit"
                variant="contained"
              >
                {t('yes')}
              </Button>
            </Box>
          </Box>
        )}
      </Fade>
    </Modal>
  );
};

export default ShowEntropyModal;
export { ShowEntropyModal };
