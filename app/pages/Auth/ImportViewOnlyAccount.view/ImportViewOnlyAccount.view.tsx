import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, FormHelperText, Typography, Link } from '@material-ui/core';
import { ipcRenderer } from 'electron';

import { SubmitButton } from '../../../components';
import { camelCaseObjectKeys } from '../../../fullService/utils';
import { importViewOnlyAccount } from '../../../redux/services';

const ImportViewOnlyAccountView: FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async () => {
    setError(null);
    const rawRequest = await ipcRenderer.invoke('import-file');
    const parsedParams = camelCaseObjectKeys(JSON.parse(rawRequest).params);

    try {
      await importViewOnlyAccount(parsedParams);
    } catch (_) {
      setError(
        'Something went wrong with the view only account import. Please check your request and try again. For more information see the docs at https://github.com/mobilecoinofficial/desktop-wallet#view-only-accounts'
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
        View only accounts can read transactions, but can not submit transactions or know which
        transactions have been spent. They are a way to use MobileCoin without exposing your spend
        keys to an online computer.
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        View only account import files are created with the MobileCoin Transaction Signer.
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mobilecoinofficial/desktop-wallet#view-only-accounts"
        >
          <Typography>Learn more</Typography>
        </Link>
      </Typography>

      <SubmitButton disabled={false} onClick={handleUpload} isSubmitting={false}>
        Upload View Only Account Import File
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
