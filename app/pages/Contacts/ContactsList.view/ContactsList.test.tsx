import React from 'react';

import { act, render, screen } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { ContactsList } from './ContactsList.view';

describe('Contacts list', () => {
  test('Displays list', async () => {
    const handleAddClick = jest.fn();
    const handleEditClick = jest.fn();

    const { container } = render(
      <ContactsList
        contactsList={[
          {
            abbreviation: 'F1',
            alias: 'Foxtrot Golf',
            color: '#FF0000',
            id: 'abd',
            isFavorite: true,
            recipientAddress: '11111',
          },
          {
            abbreviation: 'K2',
            alias: 'Kilo Lima',
            color: '#00FF00',
            id: 'abdasd',
            isFavorite: false,
            recipientAddress: '22222',
          },
          {
            abbreviation: 'ST',
            alias: 'Sierra Tango',
            color: '#0000FF',
            id: 'abdasdasd',
            isFavorite: true,
            recipientAddress: '33333',
          },
        ]}
        onClickAdd={handleAddClick}
        onClickEdit={handleEditClick}
      />
    );

    expect(container.innerHTML.includes('Foxtrot Golf')).toBeTruthy();
    expect(container.innerHTML.includes('Kilo Lima')).toBeTruthy();
    expect(container.innerHTML.includes('Sierra Tango')).toBeTruthy();

    expect(container.innerHTML.includes('F1')).toBeTruthy();
    expect(container.innerHTML.includes('K2')).toBeTruthy();
    expect(container.innerHTML.includes('ST')).toBeTruthy();

    await act(async () => userEvent.click(screen.getByText('Foxtrot Golf')));
    expect(handleEditClick).toHaveBeenCalledWith('abd');

    await act(async () => userEvent.click(screen.getByText('Kilo Lima')));
    expect(handleEditClick).toHaveBeenCalledWith('abdasd');

    await act(async () => userEvent.click(screen.getByText('Sierra Tango')));
    expect(handleEditClick).toHaveBeenCalledWith('abdasdasd');

    await act(async () => userEvent.click(screen.getByText('+')));
    expect(handleAddClick).toHaveBeenCalledTimes(1);

    await act(async () =>
      userEvent.click(container.querySelector('[id="show_fav"]') as TargetElement)
    );
    expect(container.innerHTML.includes('K2')).not.toBeTruthy();
    expect(container.innerHTML.includes('F1')).toBeTruthy();
    expect(container.innerHTML.includes('ST')).toBeTruthy();

    await act(async () =>
      userEvent.click(container.querySelector('[id="show_all"]') as TargetElement)
    );
    expect(container.innerHTML.includes('F1')).toBeTruthy();
    expect(container.innerHTML.includes('K2')).toBeTruthy();
    expect(container.innerHTML.includes('ST')).toBeTruthy();

    userEvent.type(container.querySelector('[id="standard-basic"]') as HTMLInputElement, 'T');
    expect(container.innerHTML.includes('K2')).not.toBeTruthy();
    expect(container.innerHTML.includes('F1')).toBeTruthy();
    expect(container.innerHTML.includes('ST')).toBeTruthy();
  });
});
