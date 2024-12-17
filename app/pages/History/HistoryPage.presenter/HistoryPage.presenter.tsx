import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, Typography } from '@material-ui/core';
import { clipboard } from 'electron';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LoadingScreen } from '../../../components';
import { getConfirmations, validateConfirmation } from '../../../fullService/api';
import { useTransactionLogs } from '../../../hooks/useTransactionLogs';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { Confirmations } from '../../../types/Confirmation';
import type { TransactionLog } from '../../../types/TransactionLog.d';
import { errorToString } from '../../../utils/errorHandler';
import { HistoryList } from '../HistoryList.view';
import { TransactionDetails } from '../TransactionDetails.view';

const HISTORY = 'history';
const DETAILS = 'details';

export const HistoryPage: FC = (): JSX.Element => {
  const { selectedAccount } = useSelector((state: ReduxStoreState) => state);
  const [currentTransactionLog, setCurrentTransaction] = useState({} as TransactionLog);
  const [txoValidations, setTxoValidations] = useState({});
  const [showing, setShowing] = useState(HISTORY);
  const [firstToShow, setFirstToShow] = useState(0);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { t } = useTranslation('HistoryView');
  const { enqueueSnackbar } = useSnackbar();
  const logs = useTransactionLogs();

  const handleClickCopyConfirmations = () => {
    (async () => {
      try {
        const result = await getConfirmations({
          transactionLogId: currentTransactionLog.transactionLogId,
        });
        // newer versions of full service use txoId instead of txoIdHex
        // replace newer field with older to maintain backwards compatibility
        clipboard.writeText(JSON.stringify(result.confirmations).replace(/txoId/, 'txoIdHex'));
        enqueueSnackbar('Copied Confirmations to Clipboard');
      } catch (err) {
        const errorMessage = errorToString(err);
        enqueueSnackbar(errorMessage, { variant: 'error' });
      }
    })();
  };

  const handleClickValidateConfirmations = () => {
    (async () => {
      const confirmationsString = clipboard.readText();
      try {
        const confirmations = JSON.parse(
          confirmationsString.replace(/"txoId"/, '"txoIdHex"')
        ) as Confirmations;
        const results: { [txoId: string]: boolean } = {};
        // newer versions of full service use txoId instead of txoIdHex
        // replace newer field with older to maintain backwards compatibility
        await Promise.all(
          confirmations.map(async (confirmation) => {
            try {
              const result = await validateConfirmation({
                accountId: selectedAccount.account.accountId,
                confirmation: confirmation.confirmation,
                txoId: confirmation.txoIdHex,
              });
              results[confirmation.txoIdHex] = result.validated;
            } catch (err) {
              results[confirmation.txoIdHex] = false;
            }
          })
        );

        setTxoValidations(results);
      } catch (err) {
        const errorMessage = errorToString(err);
        enqueueSnackbar(errorMessage, { variant: 'error' });
      }
    })();
  };
  // CREATE VIEW

  if (logs === null) {
    return <LoadingScreen />;
  }

  if (logs.length === 0) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography color="primary">{t('emptyState')}</Typography>
      </Box>
    );
  }

  switch (showing) {
    case HISTORY:
      return (
        <HistoryList
          transactionLogsList={logs}
          firstToShow={firstToShow}
          setFirstToShow={setFirstToShow}
          selectedTabIndex={selectedTabIndex}
          setSelectedTabIndex={setSelectedTabIndex}
          onTransactionClick={(transactionLog) => {
            setCurrentTransaction(transactionLog);
            setShowing(DETAILS);
          }}
        />
      );

    case DETAILS:
      /*
        We should get the TXOs for the transaction
      */

      return (
        <TransactionDetails
          onClickCopyConfirmations={handleClickCopyConfirmations}
          onClickBack={() => setShowing(HISTORY)}
          onClickValidateConfirmations={handleClickValidateConfirmations}
          onChangedComment={() => {}}
          transactionLog={currentTransactionLog}
          txoValidations={txoValidations}
        />
      );

    default:
      return <Redirect to="-" />;
  }
};
