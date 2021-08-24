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
  Grid,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from '@material-ui/core';
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
  wordBox: {
    border: '1px solid',
    borderColor: theme.palette.text.secondary,
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const ShowEntropyModal: FC<ShowEntropyModalProps> = ({
  isShown,
  mnemonic,
  confirmEntropyKnown,
}: ShowEntropyModalProps) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [showEntropy, setShowEntropy] = useState(false);
  const { t } = useTranslation('ShowEntropyModal');

  const handleCloseModal = () => confirmEntropyKnown();

  // const toggleEntropy = () => {
  //   if (!canGoForward) {
  //     setCanGoForward(true);
  //   }
  //   setShowEntropy(!showEntropy);
  // };

  const handleGoForward = () => {
    setCurrentPage(currentPage + 1);
    // setAlertOpen(true);
    // setShowEntropy(false);
  };

  const handleGoBack = () => setCurrentPage(currentPage - 1);

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
        <>
          {currentPage === 0 && (
            <ShowRetrievedEntropy entropy={mnemonic} open={!alertOpen} onClose={handleGoForward} />
          )}

          {currentPage === 1 && (
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
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                      <Grid container justifyContent="center" spacing={2}>
                        {mnemonic.split(' ').map((value, index) => (
                          <Grid key={value} item xs={4}>
                            <Box className={classes.wordBox}>
                              {index + 1} <TextField />
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
              <br />
              <Box display="flex" justifyContent="space-between">
                <Button
                  color="secondary"
                  onClick={handleGoBack}
                  size="large"
                  fullWidth
                  type="submit"
                  variant="contained"
                  id="secured-button"
                  style={{ marginRight: '5px' }}
                >
                  Go Back
                </Button>
                <Button
                  color="secondary"
                  onClick={handleGoForward}
                  size="large"
                  fullWidth
                  type="submit"
                  variant="contained"
                  id="secured-button"
                  style={{ marginLeft: '5px' }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          )}

          {currentPage === 2 && (
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
        </>
      </Fade>
    </Modal>
  );
};

export default ShowEntropyModal;
export { ShowEntropyModal };
