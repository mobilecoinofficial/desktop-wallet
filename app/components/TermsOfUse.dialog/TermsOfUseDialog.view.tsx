import React from 'react';

import { Box, Button, Container, Dialog } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { TermsOfUse } from '../TermsOfUse.component';
import { TermsOfUseDialogProps } from './TermsOfUseDialog';

const TermsOfUseDialog = (props: TermsOfUseDialogProps): JSX.Element => {
  const { open, handleCloseTerms } = props;
  const { t } = useTranslation('TermsOfUseDialog');

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
