import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, FormHelperText, Typography, TextField } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import { SubmitButton } from '../../../components';
import { setLoadingAction } from '../../../redux/actions';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { importViewOnlyAccount } from '../../../redux/services';
import { getFogInfo } from '../../../utils/fogConstants';
import { ToggleFogInput } from '../CreateAccount.view/CreateAccount.view';

const ImportLedgerAccountView: FC = () => {
  const { network } = useSelector((state: ReduxStoreState) => state);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const { enqueueSnackbar } = useSnackbar();
  const [isFogEnabled, setIsFogEnabled] = useState(true);
  const dispatch = useDispatch();

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeFog = () => {
    setIsFogEnabled(!isFogEnabled);
  };

  const handleUpload = async () => {
    setError(null);

    try {
      if (!network) {
        throw new Error('consensus network not set');
      }

      const fogInfo = isFogEnabled
        ? getFogInfo({
            application: 'MOBILECOIN',
            network,
          })
        : undefined;

      enqueueSnackbar('Please approve the import on your ledger device');
      dispatch(setLoadingAction(true));
      await importViewOnlyAccount({ fogInfo, name, useLedger: true });
      dispatch(setLoadingAction(false));
      enqueueSnackbar('Account Imported', { variant: 'success' });
    } catch (e) {
      setError(`Something went wrong with the ledger account import. ${e}`);
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

      <ToggleFogInput
        value={isFogEnabled}
        onChange={handleChangeFog}
        description="Creating this account with fog enabled makes it possible to import the account to Moby on you mobile phone."
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
