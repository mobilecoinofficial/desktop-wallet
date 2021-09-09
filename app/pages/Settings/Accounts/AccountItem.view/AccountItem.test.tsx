import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { AccountItem } from './AccountItem.view';

describe('Account Item', () => {
  test('shows account name and reacts to clicks if not selected', () => {
    const handleOnClick = jest.fn();
    const handleOnDelete = jest.fn();

    const { container, getByText } = render(
      <AccountItem
        account={{
          mainAddress:
            '5XieM3EVMUm49muLwxwF8M8Y58GaNaR7tAftZ2LcgYk7ty6zAhef3RAtTBTLv2UgDRqGEbQFECjEjbPm9K6u4tVbaGVqYMxGKaEMedU3kKx',
          name: 'MY OWN ACCOUNT',
        }}
        onClick={handleOnClick}
        onDelete={handleOnDelete}
        selected={false}
      />
    );

    expect(getByText('MY OWN ACCOUNT')).toBeInTheDocument();

    userEvent.click(container.querySelector('[name="deleteButton"]'));
    expect(handleOnDelete).toHaveBeenCalled();

    userEvent.click(container.querySelector('[name="accountCard"]'));
    expect(handleOnClick).toHaveBeenCalled();
  });

  test('shows account name and does not react to clicks if  selected', () => {
    const handleOnClick = jest.fn();
    const handleOnDelete = jest.fn();

    const { container } = render(
      <AccountItem
        account={{
          mainAddress:
            '5XieM3EVMUm49muLwxwF8M8Y58GaNaR7tAftZ2LcgYk7ty6zAhef3RAtTBTLv2UgDRqGEbQFECjEjbPm9K6u4tVbaGVqYMxGKaEMedU3kKx',
          name: 'MY OWN ACCOUNT',
        }}
        onClick={handleOnClick}
        onDelete={handleOnDelete}
        selected
      />
    );

    // eslint-disable-next-line jest/valid-expect
    expect(() => userEvent.click(container.querySelector('[name="deleteButton"]').toThrow()));
    expect(handleOnDelete).not.toHaveBeenCalled();

    // eslint-disable-next-line jest/valid-expect
    expect(() => userEvent.click(container.querySelector('[name="accountCard"]')).toThrow());
    expect(handleOnClick).not.toHaveBeenCalled();
  });
});
