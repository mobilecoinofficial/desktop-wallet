import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  FormLabel,
  Typography,
  Fade,
  Modal,
  makeStyles,
} from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { useTranslation } from 'react-i18next';

import { SubmitButton } from '../../../components';
import type { Theme } from '../../../theme';

const useStyles = makeStyles((theme: Theme) => {
  return {
    cardContainer: {
      paddingBottom: 64,
      paddingTop: 8 * 4,
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
  };
});

const ResetLedger: FC = () => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation('ResetLedger');

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleResetLedger = () => {
    setIsModalOpen(true);
  };
  const handleConfirmResetLedger = () => {
    ipcRenderer.send('reset-ledger');
  };

  return (
    <Box flexGrow={1} mt={3}>
      <Box pt={3}>
        <FormLabel component="legend">
          <Typography color="primary">{t('formLabel')}</Typography>
        </FormLabel>
      </Box>
      <Box pt={2}>
        <Typography variant="body2" color="textSecondary">
          {t('description')}
        </Typography>
        <SubmitButton
          disabled={false}
          isSubmitting={false}
          onClick={handleResetLedger}
        >
          {t('resetButton')}
        </SubmitButton>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
        disableAutoFocus
        disableEnforceFocus
      >
        <Fade in={isModalOpen}>
          <Box className={classes.paper}>
            <Typography variant="h2" color="textPrimary">
              {t('resetLedgerModal')}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {t('resetLedgerModalDescription')}
            </Typography>
            <Box pt={2} />
            <Box display="flex" justifyContent="space-between">
              <Button
                color="secondary"
                onClick={handleCancel}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                {t('cancelButton')}
              </Button>
              <Box px={3} />
              <Button
                color="secondary"
                onClick={handleConfirmResetLedger}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                {t('confirmButton')}
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ResetLedger;
