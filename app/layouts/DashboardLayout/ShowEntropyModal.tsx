import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  Fade,
  makeStyles,
  Modal,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../theme';

interface ShowEntropyModalProps {
  isShown: boolean;
  mnemonic: string;
  onEntropyConfirmed: () => void;
}

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
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
  shownEntropy: {},
}));

const ShowEntropyModal: FC<ShowEntropyModalProps> = ({
  isShown,
  mnemonic,
  onEntropyConfirmed,
}: ShowEntropyModalProps) => {
  const classes = useStyles();
  const [alertOpen, setAlertOpen] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [showEntropy, setShowEntropy] = useState(false);
  const { t } = useTranslation('ShowEntropyModal');

  const handleCloseModal = () => {
    onEntropyConfirmed();
  };

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

  const handleGoBack = () => {
    setAlertOpen(false);
  };

  const handleFinalConfirm = () => {
    onEntropyConfirmed();
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
      disableBackdropClick
    >
      <Fade in={isShown}>
        {!alertOpen ? (
          <Box className={classes.paper} display="flex" flexDirection="column">
            <Typography color="textPrimary" gutterBottom variant="h2">
              {t('header')}
            </Typography>
            <br />
            <Typography variant="body2" color="textPrimary">
              {t('description')}
            </Typography>
            <br />

            <Card>
              <CardContent>
                <Box py={3} display="flex" alignItems="center" flexDirection="column">
                  <Box p={2}>
                    <Fab variant="extended" color="primary" onClick={toggleEntropy} size="small">
                      {showEntropy ? (t('hide') as string) : (t('show') as string)}
                    </Fab>
                  </Box>
                  <Container maxWidth="sm">
                    <Typography
                      className={showEntropy ? classes.shownEntropy : classes.hiddenEntropy}
                      variant="body2"
                      color="textPrimary"
                    >
                      {mnemonic}
                    </Typography>
                  </Container>
                </Box>
              </CardContent>
            </Card>
            <br />
            <Button
              color="secondary"
              disabled={!canGoForward}
              onClick={handleGoForward}
              size="large"
              fullWidth
              type="submit"
              variant="contained"
            >
              {t('secured')}
            </Button>
          </Box>
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
