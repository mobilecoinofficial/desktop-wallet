import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { store } from '../../../redux/store';
import type { TransactionLog } from '../../../types/TransactionLog.d';
import '../../../testUtils/i18nForTests';
import { HistoryList } from './HistoryList.view';

describe('History list', () => {
  test('displays TXOs according to selection', () => {
    const handleClick = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <HistoryList
          transactionLogsList={[
            {
              assignedAddressId: 'XYZABC123456',
              contact: undefined,
              direction: 'tx_direction_sent',
              finalizedBlockIndex: '123456',
              recipientAddressId: null,
              tokenId: 0,
              transactionLogId: '123456',
              value: '220960000000',
            } as TransactionLog,
            {
              assignedAddressId: 'LMNTARYWATSON',
              contact: undefined,
              direction: 'tx_direction_received',
              finalizedBlockIndex: '345678',
              recipientAddressId: '101010101010101',
              tokenId: 0,
              transactionLogId: '789012',
              value: '31415926',
            } as TransactionLog,
          ]}
          onTransactionClick={handleClick}
        />
      </Provider>
    );

    const showAll = container.querySelector('[id="show-all"]') as HTMLInputElement;
    const showSent = container.querySelector('[id="show-sent"]') as HTMLInputElement;
    const showReceived = container.querySelector('[id="show-received"]') as HTMLInputElement;

    expect(container.innerHTML.includes('-0.220960000000')).toBeTruthy();
    expect(container.innerHTML.includes('+0.000031415926')).toBeTruthy();

    userEvent.click(showSent);
    expect(container.innerHTML.includes('-0.220960000000')).toBeTruthy();
    expect(container.innerHTML.includes('+0.000031415926')).toBeFalsy();

    userEvent.click(showReceived);
    expect(container.innerHTML.includes('-0.220960000000')).toBeFalsy();
    expect(container.innerHTML.includes('+0.000031415926')).toBeTruthy();

    userEvent.click(showAll);
    expect(container.innerHTML.includes('-0.220960000000')).toBeTruthy();
    expect(container.innerHTML.includes('+0.000031415926')).toBeTruthy();
  });
});
