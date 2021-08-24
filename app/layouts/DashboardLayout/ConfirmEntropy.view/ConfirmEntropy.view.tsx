import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../../theme';
import { ConfirmEntropyProps } from './ConfirmEntropy';

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

const ConfirmEntropy: FC<ConfirmEntropyProps> = ({
  goForward,
  goBack,
  mnemonic,
}: ConfirmEntropyProps) => {
  const classes = useStyles();

  return (
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
          onClick={goBack}
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
          onClick={goForward}
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
  );
};

export default ConfirmEntropy;
export { ConfirmEntropy };
