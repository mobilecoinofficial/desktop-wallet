import React, { FC } from 'react';

import { Avatar, Card, CardActionArea, CardHeader, Grid, makeStyles } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { StarIcon } from '../../../components/icons';
import type { Theme } from '../../../theme';
import type { ContactCardProps } from './ContactCard.d';

const useStyles = makeStyles((theme: Theme) => ({
  action: { margin: 'auto' },
  card: {
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
  },
  root: {},
}));

export const ContactCard: FC<ContactCardProps> = ({
  assignedAddress,
  abbreviation,
  alias,
  color,
  isFavorite,
  onClickEdit,
}: ContactCardProps) => {
  const classes = useStyles();

  const avatar = (abbreviation as string).toUpperCase();

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => onClickEdit(assignedAddress as string)}>
          <CardHeader
            avatar={<Avatar style={{ backgroundColor: color || '#757575' }}>{avatar}</Avatar>}
            title={
              <>
                {isFavorite ? <StarIcon /> : null}
                {alias}
              </>
            }
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

ContactCard.defaultProps = {
  abbreviation: '',
  alias: '',
  assignedAddress: '',
  color: '#CCCCCC',
  isFavorite: false,
};
