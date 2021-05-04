import React from 'react';

import { Box, Button, Container, Dialog } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import TermsOfUse from './TermsOfUse';

interface TermsOfUseDialogProps {
  open: boolean;
  handleCloseTerms: () => void;
}

const TermsOfUseDialog = (props: TermsOfUseDialogProps): JSX.Element => {
  const { open, handleCloseTerms } = props;
  const { t } = useTranslation('TermsOfUseDialog');

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
