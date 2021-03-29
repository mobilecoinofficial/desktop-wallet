import React from 'react';
import type { FC } from 'react';

import { Avatar, Card, CardActionArea, CardHeader, Grid, makeStyles } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// import ContactCircle from '../../../components/ContactCircle';
import type { Theme } from '../../../theme';

interface ContactItemProps {
  assignedAddress?: string;
  abbreviation?: string;
  alias?: string;
  onEdit: () => unknown;
}

const useStyles = makeStyles((theme: Theme) => ({
  action: { margin: 'auto' },
  card: {
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
  },
  root: {},
}));

// This should something else...
const ContactItem: FC<ContactItemProps> = ({
  assignedAddress,
  abbreviation,
  alias,
  onEdit,
}: ContactItemProps) => {
  const classes = useStyles();

  const avatar = abbreviation.toUpperCase();

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => onEdit(assignedAddress)}>
          <CardHeader
            avatar={<Avatar>{avatar}</Avatar>}
            title={alias}
            action={<ChevronRightIcon fontSize="large" />}
            classes={{
              action: classes.action,
            }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

ContactItem.defaultProps = {
  abbreviation: '',
  alias: '',
  assignedAddress: '',
};

export default ContactItem;
