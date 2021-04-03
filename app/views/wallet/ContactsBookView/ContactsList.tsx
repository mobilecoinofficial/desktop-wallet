import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

import {
  Container,
  Grid,
  makeStyles,
  Fab,
  Box,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { SearchIcon } from '../../../components/icons';
import type { Theme } from '../../../theme';
import ContactItem from './ContactItem';
import { ContactsListProps } from './ContactsList.d';

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    margin: '10px auto',
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(6),
  },
}));

const ContactsList: FC<ContactsListProps> = ({
  contactsList,
  onAdd,
  onEdit,
}: ContactsListProps) => {
  const classes = useStyles();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [currentFilter, setCurrentFilter] = useState('');
  const [dataToShow, setDataToShow] = useState(contactsList);

  const { t } = useTranslation('ContactsList');

  useEffect(() => {
    const filteredByName = contactsList.filter((x) =>
      x.alias.toUpperCase().includes(currentFilter.toUpperCase())
    );

    switch (selectedTabIndex) {
      case 0:
        setDataToShow(filteredByName);
        break;
      case 1:
        setDataToShow(filteredByName.filter((x) => x.isFavorite));
        break;
      default:
        throw new Error('WRONG TAB!');
    }
  }, [currentFilter, selectedTabIndex, contactsList]);

  return (
    <Box>
      <Box>
        <Tabs
          variant="fullWidth"
          value={selectedTabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, n) => setSelectedTabIndex(n)}
        >
          <Tab label={t('allContacts')} />
          <Tab label={t('favoriteContacts')} />
        </Tabs>
      </Box>
      <Box pl={5} pr={5} pt={2}>
        <TextField
          id="standard-basic"
          label={t('filter')}
          fullWidth
          onChange={(e) => setCurrentFilter(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Container className={classes.root} maxWidth="lg" style={{ paddingTop: '24px' }}>
        <Grid container spacing={3}>
          {dataToShow.map((contact) => (
            <ContactItem
              key={contact.assignedAddress}
              assignedAddress={contact.assignedAddress}
              abbreviation={contact.abbreviation}
              alias={contact.alias}
              color={contact.color}
              isFavorite={contact.isFavorite}
              onEdit={onEdit}
            />
          ))}
          <Fab color="primary" size="medium" className={classes.fab} onClick={onAdd}>
            +
          </Fab>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactsList;
