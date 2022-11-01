import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, FormHelperText, Typography } from '@material-ui/core';
import { ipcRenderer } from 'electron';

import { SubmitButton } from '../../../components';
import { importViewOnlyAccount } from '../../../redux/services';

const ImportViewOnlyAccountView: FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async () => {
    setError(null);
    const rawRequest = await ipcRenderer.invoke('import-file');
    const parsedParams = JSON.parse(rawRequest).jsonRpcRequest.params;

    try {
      await importViewOnlyAccount(parsedParams);
    } catch (_) {
      setError(
        'Something went wrong with the view only account import. Please check your request and try again. For more information see the docs ...(LINK TO DOCS)'
      );
    }
  };

  return (
    <>
      <Typography variant="h2" paragraph>
        Import View Only Account
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Create a view only version of an existing account
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        View only accounts can ....more info about vo accounts and offline flow etc...
      </Typography>
      <Typography variant="body2" color="textPrimary" paragraph>
        ...more info about import vo accounts?
      </Typography>

      <SubmitButton disabled={false} onClick={handleUpload} isSubmitting={false}>
        Upload View Only Account Import Request
      </SubmitButton>

      {error && (
        <Box mt={3}>
          <FormHelperText error>{error}</FormHelperText>
        </Box>
      )}
    </>
  );
};

export default ImportViewOnlyAccountView;
export { ImportViewOnlyAccountView };
