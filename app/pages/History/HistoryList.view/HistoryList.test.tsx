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
  const testTransactionLogs = [
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
  ];

  test('displays TXOs according to selection = ALL', () => {
    const handleClick = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <HistoryList
          transactionLogsList={testTransactionLogs}
          firstToShow={0}
          setFirstToShow={jest.fn()}
          selectedTabIndex={0}
          setSelectedTabIndex={jest.fn()}
          onTransactionClick={handleClick}
        />
      </Provider>
    );
    expect(container.innerHTML.includes('-0.220960000000')).toBeTruthy();
    expect(container.innerHTML.includes('+0.000031415926')).toBeTruthy();
  });

  test('displays TXOs according to selection = Sent', () => {
    const { container } = render(
      <Provider store={store}>
        <HistoryList
          transactionLogsList={testTransactionLogs}
          firstToShow={0}
          setFirstToShow={jest.fn()}
          selectedTabIndex={1}
          setSelectedTabIndex={jest.fn()}
          onTransactionClick={jest.fn()}
        />
      </Provider>
    );
    expect(container.innerHTML.includes('-0.220960000000')).toBeTruthy();
    expect(container.innerHTML.includes('+0.000031415926')).toBeFalsy();
  });

  test('displays TXOs according to selection = Received', () => {
    const { container } = render(
      <Provider store={store}>
        <HistoryList
          transactionLogsList={testTransactionLogs}
          firstToShow={0}
          setFirstToShow={jest.fn()}
          selectedTabIndex={2}
          setSelectedTabIndex={jest.fn()}
          onTransactionClick={jest.fn()}
        />
      </Provider>
    );
    expect(container.innerHTML.includes('-0.220960000000')).toBeFalsy();
    expect(container.innerHTML.includes('+0.000031415926')).toBeTruthy();
  });

  test('tab selection changes as it should', () => {
    let tabIndex = 0;

    const setSelectedTabIndex = (value: number) => {
      tabIndex = value;
    };

    const { container } = render(
      <Provider store={store}>
        <HistoryList
          transactionLogsList={testTransactionLogs}
          firstToShow={0}
          setFirstToShow={jest.fn()}
          selectedTabIndex={tabIndex}
          setSelectedTabIndex={setSelectedTabIndex}
          onTransactionClick={jest.fn()}
        />
      </Provider>
    );

    const showAll = container.querySelector('[id="show-all"]') as HTMLInputElement;
    const showSent = container.querySelector('[id="show-sent"]') as HTMLInputElement;
    const showReceived = container.querySelector('[id="show-received"]') as HTMLInputElement;

    userEvent.click(showSent);
    expect(tabIndex).toBe(1);

    userEvent.click(showReceived);
    expect(tabIndex).toBe(2);

    userEvent.click(showAll);
    expect(tabIndex).toBe(0);
  });
});
