import { FC, useEffect } from 'react';

import { ipcRenderer } from 'electron';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { ReduxStoreState } from '../../redux/reducers/reducers';
import { errorToString } from '../../utils/errorHandler';

export const ErrorHandler: FC = () => {
  const { error } = useSelector((state: ReduxStoreState) => state);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (error.length > 0) {
      const latestError = error[error.length - 1];
      const title = errorToString(latestError.error);
      let stack = '';

      if (latestError.error instanceof Error) {
        stack = latestError.error.stack || '';
      }

      enqueueSnackbar(title, {
        onClick: () => {
          ipcRenderer.send('show-error', title, latestError.generatedFrom, stack);
        },
        variant: 'error',
      });
    }
  }, [error]);
  return null;
};
