import React, { useState, FC } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Fab,
  Fade,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../../theme';
import { ShowRetrievedEntropyModalProps } from './ShowRetrievedEntropy';

const useStyles = makeStyles((theme: Theme) => ({
  hiddenEntropy: { letterSpacing: 2.95 },
  modal: { alignItems: 'center', display: 'flex', justifyContent: 'center', overflow: 'auto' },
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
  shownEntropy: { letterSpacing: 1 },
}));

export const ShowRetrievedEntropyModal: FC<ShowRetrievedEntropyModalProps> = ({
  entropy,
  open,
  onClose,
}: ShowRetrievedEntropyModalProps) => {
  const classes = useStyles();
  const [showEntropy, setShowEntropy] = useState(false);
  const { t } = useTranslation('ShowRetrievedEntropyModal');

  const toggleEntropy = () => setShowEntropy(!showEntropy);
  const handleOnClose = () => {
    setShowEntropy(false);
    onClose();
  };

  return (
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
                <Fab
                  id="show-hide-button"
                  variant="extended"
                  color="primary"
                  onClick={toggleEntropy}
                  size="small"
                >
                  {(showEntropy ? t('hide') : t('show')) as string}
                </Fab>
              </Box>
              {showEntropy ? (
                <Typography className={classes.shownEntropy} variant="body2" color="textPrimary">
                  {entropy}
                </Typography>
              ) : (
                <>
                  <Typography className={classes.hiddenEntropy} variant="body2" color="textPrimary">
                    ****************************************************************
                  </Typography>
                  <Typography className={classes.hiddenEntropy} variant="body2" color="textPrimary">
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
          id="secured-button"
        >
          {t('secured')}
        </Button>
      </Box>
    </Fade>
  );
};
