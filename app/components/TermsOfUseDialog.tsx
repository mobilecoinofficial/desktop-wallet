import React from 'react';

import {
  Box, Button, Container, Dialog,
} from '@material-ui/core';

import TermsOfUse from './TermsOfUse';

interface TermsOfUseDialogProps {
  open: boolean;
  handleCloseTerms: () => void;
}

const TermsOfUseDialog = (props: TermsOfUseDialogProps): JSX.Element => {
  const { open, handleCloseTerms } = props;

  return (
    <Dialog fullScreen open={open} disableEscapeKeyDown disableBackdropClick>
      <Container maxWidth="md">
        <TermsOfUse />
        <Box p={2}>
          <Button
            color="secondary"
            onClick={handleCloseTerms}
            variant="contained"
            fullWidth
          >
            Close Terms of Use
          </Button>
        </Box>
        <Box p={2} />
      </Container>
    </Dialog>
  );
};

export default TermsOfUseDialog;
