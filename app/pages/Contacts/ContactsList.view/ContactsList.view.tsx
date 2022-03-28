import React, { useState, useEffect, FC } from 'react';

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
import { ContactCard } from '../ContactCard.view';
import { ContactsListProps } from './ContactsList';

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

export const ContactsList: FC<ContactsListProps> = ({
  contactsList,
  onClickAdd,
  onClickEdit,
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

    if (selectedTabIndex === 0) {
      setDataToShow(filteredByName);
    } else if (selectedTabIndex === 1) {
      setDataToShow(filteredByName.filter((x) => x.isFavorite));
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
          onChange={(_e, n) => setSelectedTabIndex(n)}
        >
          <Tab label={t('allContacts')} id="show_all" />
          <Tab label={t('favoriteContacts')} id="show_fav" />
        </Tabs>
      </Box>
      <Box pl={5} pr={5} pt={2}>
        <TextField
          id="standard-basic"
          label={t('filter')}
          fullWidth
          onChange={(e) => setCurrentFilter(e.target.value)}
          inputProps={{
            endadornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Container className={classes.root} maxWidth="lg" style={{ paddingTop: '24px' }}>
        <Grid container spacing={3}>
          {dataToShow.map((contact) => (
            <ContactCard
              key={contact.assignedAddress}
              assignedAddress={contact.assignedAddress}
              abbreviation={contact.abbreviation}
              alias={contact.alias}
              color={contact.color}
              isFavorite={contact.isFavorite}
              onClickEdit={onClickEdit}
            />
          ))}
          <Fab color="primary" size="medium" className={classes.fab} onClick={onClickAdd}>
            +
          </Fab>
        </Grid>
      </Container>
    </Box>
  );
};
