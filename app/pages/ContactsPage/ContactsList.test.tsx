import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../testUtils/i18nForTests';

import { ContactsList } from './ContactsList.view';

test('Displays list', () => {
  const handleAddClick = jest.fn();
  const handleEditClick = jest.fn();

  const { getByText } = render(
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

  expect(getByText('Foxtrot Golf')).toBeInTheDocument();
  expect(getByText('Kilo Lima')).toBeInTheDocument();
  expect(getByText('Sierra Tango')).toBeInTheDocument();

  expect(getByText('F1')).toBeInTheDocument();
  expect(getByText('K2')).toBeInTheDocument();
  expect(getByText('ST')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Foxtrot Golf'));
  expect(handleEditClick).toHaveBeenCalledWith('11111');

  fireEvent.click(screen.getByText('Kilo Lima'));
  expect(handleEditClick).toHaveBeenCalledWith('22222');

  fireEvent.click(screen.getByText('Sierra Tango'));
  expect(handleEditClick).toHaveBeenCalledWith('33333');

  fireEvent.click(screen.getByText('+'));
  expect(handleAddClick).toHaveBeenCalledTimes(1);
});
