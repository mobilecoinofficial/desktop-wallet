import React, { FC } from 'react';

import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  Grid,
  makeStyles,
  Button,
} from '@material-ui/core';

import { ShortCode } from '../../../../components/ShortCode';
import { MOBIcon, TrashcanIcon } from '../../../../components/icons';
import { Theme } from '../../../../theme';
import type { AccountItemProps } from './AccountItem';

const useStyles = makeStyles((theme: Theme) => ({
  action: { margin: 'unset' },
  card: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'row',
  },
  internal: {
    display: 'flex',
    flexDirection: 'row',
  },
  negative: {
    color: theme.palette.number?.negative || '#FF0000',
    fontWeight: 'bold',
  },
  root: {},
  textSmallRight: { fontSize: 'small', textAlign: 'right' },
}));

export const AccountItem: FC<AccountItemProps> = ({
  account,
  onClick,
  onDelete,
  selected,
}: AccountItemProps) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardActionArea onClick={onClick} name="accountCard">
          <CardHeader
            avatar={
              <Avatar style={{ backgroundColor: '#757575' }}>
                <MOBIcon color={selected ? 'blue' : 'white'} />
              </Avatar>
            }
            title={account.name ?? 'Unnamed'}
            subheader={<ShortCode code={account.mainAddress} />}
            classes={{
              action: classes.action,
            }}
          />
        </CardActionArea>
        <Button onClick={onDelete} disabled={selected} name="deleteButton">
          <TrashcanIcon color={selected ? 'grey' : 'red'} />
        </Button>
      </Card>
    </Grid>
  );
};
