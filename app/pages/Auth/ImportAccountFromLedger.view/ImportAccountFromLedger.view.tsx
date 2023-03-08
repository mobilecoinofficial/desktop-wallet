import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, FormHelperText, TextField, Typography } from '@material-ui/core';
// import { ipcRenderer } from 'electron';
import { useSnackbar } from 'notistack';
// import { useDispatch } from 'react-redux';

import { SubmitButton } from '../../../components';
// import { camelCaseObjectKeys } from '../../../fullService/utils';
// import { setLoadingAction } from '../../../redux/actions';
import { importViewOnlyAccount } from '../../../redux/services';
import { errorToString } from '../../../utils/errorHandler';

const ImportAccountFromLedgerView: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [accountName, setAccountName] = useState<string | undefined>();
  const { enqueueSnackbar } = useSnackbar();
  //   const dispatch = useDispatch();

  const updateAccountName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountName(event.target.value);
  };

  const handleUploadWithLedger = async () => {
    setError(null);

    try {
      enqueueSnackbar(
        'Importing Account. You may need to confirm the action on your Ledger device',
        { variant: 'info' }
      );
      await importViewOnlyAccount({ fromLedger: true, name: accountName });
    } catch (err) {
      setError(errorToString(err));
    }
  };

  return (
    <>
      <Typography variant="h2" paragraph>
        Import Account from Ledger
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Import an account using the Ledger Hardware Wallet.
      </Typography>

      <TextField value={accountName} onChange={updateAccountName} label="Account Name" />
      <SubmitButton disabled={false} onClick={handleUploadWithLedger} isSubmitting={false}>
        Import Account Using Ledger
      </SubmitButton>

      {error && (
        <Box mt={3}>
          <FormHelperText error>{error}</FormHelperText>
        </Box>
      )}
    </>
  );
};

export default ImportAccountFromLedgerView;
export { ImportAccountFromLedgerView };
