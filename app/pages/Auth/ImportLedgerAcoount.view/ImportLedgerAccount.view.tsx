import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, FormHelperText, Typography, TextField } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

import { SubmitButton } from '../../../components';
import { setLoadingAction } from '../../../redux/actions';
import { importViewOnlyAccount } from '../../../redux/services';

const ImportLedgerAccountView: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const updateName = (e) => {
    setName(e.target.value);
  };

  const handleUpload = async () => {
    setError(null);

    try {
      enqueueSnackbar('Please approve the import on your ledger device');
      dispatch(setLoadingAction(true));
      await importViewOnlyAccount({ name });
      dispatch(setLoadingAction(false));
      enqueueSnackbar('Account Imported', { variant: 'success' });
    } catch (_) {
      setError(
        'Something went wrong with the view only account import. Please check your request and try again. For more information see the docs at https://github.com/mobilecoinofficial/desktop-wallet#view-only-accounts'
      );
      dispatch(setLoadingAction(false));
    }
  };

  return (
    <>
      <Typography variant="h2" paragraph>
        Import Account From Ledger
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Create an account using the Ledger Hardware Wallet
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Make sure that your ledger device is plugged into the computer and that the MobileCoin app
        is running. You will have to approve the import on the ledger device.
      </Typography>

      <TextField
        fullWidth
        value={name}
        onChange={updateName}
        placeholder="Account Name (optional)"
      />

      <SubmitButton disabled={false} onClick={handleUpload} isSubmitting={false}>
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

export default ImportLedgerAccountView;
export { ImportLedgerAccountView };
