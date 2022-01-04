import React from 'react';

import { Box, Button, Container, Dialog, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useTranslation } from 'react-i18next';

import { TermsOfUse } from '../TermsOfUse.component';
import { TermsOfUseDialogProps } from './TermsOfUseDialog';

const useStyles = makeStyles({
  fab: {
    '&:active': {
      boxShadow:
        '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);',
    },
    border: '4px solid #80808033',
    borderRadius: '1em',
    bottom: 102,
    cursor: 'default',
    height: '4em',
    position: 'fixed',
    right: 42,
  },
});

const TermsOfUseDialog = (props: TermsOfUseDialogProps): JSX.Element => {
  const { open, handleCloseTerms } = props;
  const { t } = useTranslation('TermsOfUseDialog');
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          onClose(event, reason);
        }
      }}
    >
      <Container maxWidth="md">
        <TermsOfUse />
        <Fab
          disableRipple
          disableTouchRipple
          disableFocusRipple
          aria-label="Scroll Down"
          className={classes.fab}
        >
          <ArrowDownwardIcon color="secondary" fontSize="large" />
        </Fab>
        <Box p={2}>
          <Button
            color="secondary"
            data-testid="closeTerms"
            onClick={handleCloseTerms}
            variant="contained"
            fullWidth
            id="closeTerms"
          >
            {t('close')}
          </Button>
        </Box>
        <Box p={2} />
      </Container>
    </Dialog>
  );
};

export default TermsOfUseDialog;
export { TermsOfUseDialog };
