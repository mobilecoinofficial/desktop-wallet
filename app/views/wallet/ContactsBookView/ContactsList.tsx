import React, { ChangeEvent, useState } from 'react';
import type { FC } from 'react';

import { Container, Grid, makeStyles, Fab, Box, Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

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
  const [dataToShow, setDataToShow] = useState(contactsList);

  const { t } = useTranslation('ContactsList');

  const handleChange = (_event: ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setSelectedTabIndex(Number(newValue));
    switch (newValue) {
      case 0:
        setDataToShow(contactsList);
        break;
      case 1:
        setDataToShow(contactsList.filter((x) => x.isFavorite));
        break;
      default:
        throw new Error('WRONG TAB!');
    }
  };

  return (
    <Box>
      <Box>
        <Tabs
          variant="fullWidth"
          value={selectedTabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label={t('allContacts')} />
          <Tab label={t('favoriteContacts')} />
        </Tabs>
      </Box>

      <Container className={classes.root} maxWidth="lg" style={{ paddingTop: '24px' }}>
        <Grid container spacing={3}>
          {dataToShow.map((contact) => (
            <ContactItem
              key={contact.assignedAddress}
              assignedAddress={contact.assignedAddress}
              abbreviation={contact.abbreviation}
              alias={contact.alias}
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
