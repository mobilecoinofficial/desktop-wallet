import React from 'react';
import type { FC } from 'react';

import { Container, Grid, makeStyles, Fab } from '@material-ui/core';

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
  },
}));

const ContactsList: FC<ContactsListProps> = ({
  contactsList,
  onAdd,
  onEdit,
}: ContactsListProps) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        {contactsList.map((contact) => (
          <ContactItem
            key={contact.assignedAddress}
            assignedAddress={contact.assignedAddress}
            abbreviation={contact.abbreviation}
            alias={contact.alias}
            onEdit={onEdit}
          />
        ))}
        <Fab color="primary" size="medium" className={classes.fab} onClick={onAdd}>
          +
        </Fab>
      </Grid>
    </Container>
  );
};

export default ContactsList;
