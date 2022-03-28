import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@material-ui/core';
import { clipboard } from 'electron';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LoadingScreen } from '../../../components';
import { getConfirmations, validateConfirmation } from '../../../fullService/api';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { Addresses, Contact, SelectedAccount } from '../../../types';
import { Confirmations } from '../../../types/Confirmation';
import type { TransactionLog, TransactionLogs } from '../../../types/TransactionLog.d';
import { HistoryList } from '../HistoryList.view';
import { TransactionDetails } from '../TransactionDetails.view';

const HISTORY = 'history';
const DETAILS = 'details';

type Props = ReduxProps;

const HistoryPage = (props: Props): JSX.Element => {
  const [currentTransactionLog, setCurrentTransaction] = useState({} as TransactionLog);
  const [txoValidations, setTxoValidations] = useState({});
  const [showing, setShowing] = useState(HISTORY);
  const { t } = useTranslation('HistoryView');
  const { enqueueSnackbar } = useSnackbar();
  const [transactionLogsState, setTransactionLogsState] = useState<TransactionLog[]>([]);

  const { addresses, contacts, selectedAccount, transactionLogs } = props;

  const buildList = (): TransactionLog[] => {
    if (transactionLogs) {
      return transactionLogs.transactionLogIds
        .map((id) => transactionLogs.transactionLogMap[id])
        .filter((transactionLog) => transactionLog.assignedAddressId !== addresses.addressIds[1])
        .map((transactionLog) => {
          // If any transaction is associated to a contact, let's attach the contact object.
          // TODO - we can improve this greatly by changing how this information is stored.
          const contact = contacts.find(
            (x) =>
              x.assignedAddress === transactionLog.assignedAddressId ||
              x.recipientAddress === transactionLog.recipientAddressId
          );
          if (contact) {
            transactionLog.contact = contact; /* eslint-disable-line no-param-reassign */
          }
          return transactionLog;
        })
        .sort((a, b) => b.finalizedBlockIndex - a.finalizedBlockIndex);
    }
    return [] as TransactionLog[];
  };

  useEffect(() => {
    setTransactionLogsState(buildList());
  }, [transactionLogs]);

  const handleClickCopyConfirmations = () => {
    (async () => {
      try {
        const result = await getConfirmations({
          transactionLogId: currentTransactionLog.transactionLogId,
        });
        clipboard.writeText(JSON.stringify(result.confirmations));
        enqueueSnackbar('Copied Confirmations to Clipboard');
      } catch (err) {
        enqueueSnackbar(err.message, { variant: 'error' });
      }
    })();
  };

  const handleClickValidateConfirmations = () => {
    (async () => {
      const confirmationsString = clipboard.readText();
      try {
        const confirmations = JSON.parse(confirmationsString) as Confirmations;
        const results: { [txoId: string]: boolean } = {};

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
        enqueueSnackbar(err.message, { variant: 'error' });
      }
    })();
  };
  // CREATE VIEW

  if (transactionLogs === null) {
    return <LoadingScreen />;
  }

  if (transactionLogs.transactionLogIds.length === 0) {
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
          transactionLogsList={transactionLogsState}
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

type ReduxProps = {
  addresses: Addresses;
  contacts: Contact[];
  selectedAccount: SelectedAccount;
  transactionLogs: TransactionLogs | null;
};

const mapState = (state: ReduxStoreState): ReduxProps => ({
  addresses: state.addresses,
  contacts: state.contacts,
  selectedAccount: state.selectedAccount,
  transactionLogs: state.transactionLogs,
});

export const ConnectedHistoryPage = connect<
  ReduxProps,
  Record<string, never>,
  Record<string, never>,
  ReduxStoreState
>(mapState)(HistoryPage);
