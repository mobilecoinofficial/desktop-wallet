import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, FormHelperText, TextField, Typography, Link } from '@material-ui/core';
import { ipcRenderer } from 'electron';

import { SubmitButton } from '../../../components';
import { camelCaseObjectKeys } from '../../../fullService/utils';
import { importViewOnlyAccount } from '../../../redux/services';
import { errorToString } from '../../../utils/errorHandler';

const ImportViewOnlyAccountView: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [accountName, setAccountName] = useState<string | undefined>();

  const updateAccountName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountName(event.target.value);
  };

  const handleUpload = async () => {
    setError(null);
    const rawRequest = await ipcRenderer.invoke('import-file');
    const parsedParams = camelCaseObjectKeys(JSON.parse(rawRequest).params);

    try {
      await importViewOnlyAccount(parsedParams);
    } catch (err) {
      setError(errorToString(err));
    }
  };

  const handleUploadWithLedger = async () => {
    setError(null);

    try {
      await importViewOnlyAccount({ fromLedger: true, name: accountName });
    } catch (err) {
      setError(errorToString(err));
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
        transactions have been spent. They are created using your view keys and do not require or
        save your spend keys.
      </Typography>
      <Typography variant="body2" color="textPrimary" paragraph>
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

      <Typography align="center" style={{ marginBottom: 8, marginTop: 36 }}>
        or
      </Typography>

      <TextField value={accountName} onChange={updateAccountName} label="Account Name" />
      <SubmitButton disabled={false} onClick={handleUploadWithLedger} isSubmitting={false}>
        Import View Only Account Using Ledger
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
