import React from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Fab } from '@material-ui/core';

import type { Theme } from '../../../theme';
import ContactBox from './ContactBox';
import { ContactsListProps } from './ContactsList.d';

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    bottom: theme.spacing(2),
    position: 'fixed',
    right: theme.spacing(2),
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
    <>
      <Box className={classes.root}>
        <Grid container spacing={3}>
          {contactsList.map((contact) => (
            <ContactBox
              key={contact.assignedAddress}
              assignedAddress={contact.assignedAddress}
              abbreviation={contact.abbreviation}
              alias={contact.alias}
              recipientAddress={contact.recipientAddress}
              onEdit={onEdit}
            />
          ))}
        </Grid>
        <Fab color="primary" size="medium" className={classes.fab} onClick={onAdd}>
          +
        </Fab>
      </Box>
    </>
  );
};

export default ContactsList;
