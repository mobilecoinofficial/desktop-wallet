import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { ContactsList } from './ContactsList.view';

test('Displays list', () => {
  const handleAddClick = jest.fn();
  const handleEditClick = jest.fn();

  const { container } = render(
    <ContactsList
      contactsList={[
        {
          abbreviation: 'F1',
          alias: 'Foxtrot Golf',
          assignedAddress: '11111',
          color: '#FF0000',
          isFavorite: true,
        },
        {
          abbreviation: 'K2',
          alias: 'Kilo Lima',
          assignedAddress: '22222',
          color: '#00FF00',
          isFavorite: false,
        },
        {
          abbreviation: 'ST',
          alias: 'Sierra Tango',
          assignedAddress: '33333',
          color: '#0000FF',
          isFavorite: true,
        },
      ]}
      onAdd={handleAddClick}
      onEdit={handleEditClick}
    />
  );

  expect(container.innerHTML.includes('Foxtrot Golf')).toBeTruthy();
  expect(container.innerHTML.includes('Kilo Lima')).toBeTruthy();
  expect(container.innerHTML.includes('Sierra Tango')).toBeTruthy();

  expect(container.innerHTML.includes('F1')).toBeTruthy();
  expect(container.innerHTML.includes('K2')).toBeTruthy();
  expect(container.innerHTML.includes('ST')).toBeTruthy();

  fireEvent.click(screen.getByText('Foxtrot Golf'));
  expect(handleEditClick).toHaveBeenCalledWith('11111');

  fireEvent.click(screen.getByText('Kilo Lima'));
  expect(handleEditClick).toHaveBeenCalledWith('22222');

  fireEvent.click(screen.getByText('Sierra Tango'));
  expect(handleEditClick).toHaveBeenCalledWith('33333');

  fireEvent.click(screen.getByText('+'));
  expect(handleAddClick).toHaveBeenCalledTimes(1);

  fireEvent.click(container.querySelector('[id="show_fav"]') as HTMLInputElement);
  expect(container.innerHTML.includes('K2')).not.toBeTruthy();
  expect(container.innerHTML.includes('F1')).toBeTruthy();
  expect(container.innerHTML.includes('ST')).toBeTruthy();

  fireEvent.click(container.querySelector('[id="show_all"]') as HTMLInputElement);
  expect(container.innerHTML.includes('F1')).toBeTruthy();
  expect(container.innerHTML.includes('K2')).toBeTruthy();
  expect(container.innerHTML.includes('ST')).toBeTruthy();

  userEvent.type(container.querySelector('[id="standard-basic"]') as HTMLInputElement, 'T');
  expect(container.innerHTML.includes('K2')).not.toBeTruthy();
  expect(container.innerHTML.includes('F1')).toBeTruthy();
  expect(container.innerHTML.includes('ST')).toBeTruthy();
});
