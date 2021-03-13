import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  Fab,
  Fade,
  makeStyles,
  Modal,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../../theme';
import { entropyToMnemonic } from '../../../utils/bip39Functions';

interface ShowRetrievedEntropyModalProps {
  entropy: string;
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  hiddenEntropy: {
    letterSpacing: 2.95,
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
  shownEntropy: {
    letterSpacing: 1,
  },
}));

const ShowRetrievedEntropyModal: FC<ShowRetrievedEntropyModalProps> = ({
  entropy,
  open,
  onClose,
}: ShowRetrievedEntropyModalProps) => {
  const classes = useStyles();
  const [showEntropy, setShowEntropy] = useState(false);
  const { t } = useTranslation('ShowRetrievedEntropyModal');

  const passPhrase = entropy ? entropyToMnemonic(entropy) : '';

  // TODO, i should start making a single util for all of this coercing logic
  const toggleEntropy = () => {
    setShowEntropy(!showEntropy);
  };

  const handleOnClose = () => {
    setShowEntropy(false);
    onClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleOnClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
      disableAutoFocus
      disableEnforceFocus
    >
      <Fade in={open}>
        <Box className={classes.paper} display="flex" flexDirection="column">
          <Typography color="textPrimary" gutterBottom variant="h2">
            {t('header')}
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            {t('description')}
          </Typography>
          <br />

          <Card>
            <CardContent>
              <Box py={3} display="flex" alignItems="center" flexDirection="column">
                <Box p={2}>
                  <Fab variant="extended" color="primary" onClick={toggleEntropy} size="small">
                    {(showEntropy ? t('hide') : t('show')) as string}
                  </Fab>
                </Box>
                {showEntropy ? (
                  <Typography className={classes.shownEntropy} variant="body2" color="textPrimary">
                    {passPhrase}
                  </Typography>
                ) : (
                  <>
                    <Typography
                      className={classes.hiddenEntropy}
                      variant="body2"
                      color="textPrimary"
                    >
                      ****************************************************************
                    </Typography>
                    <Typography
                      className={classes.hiddenEntropy}
                      variant="body2"
                      color="textPrimary"
                    >
                      ****************************************************************
                    </Typography>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
          <br />
          <Button
            color="secondary"
            onClick={handleOnClose}
            size="large"
            fullWidth
            type="submit"
            variant="contained"
          >
            {t('secured')}
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ShowRetrievedEntropyModal;
