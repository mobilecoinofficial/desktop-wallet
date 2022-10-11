import React from 'react';
import type { FC } from 'react';

import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardHeader,
  Grid,
  makeStyles,
  Tooltip,
} from '@material-ui/core';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import SyncProblemOutlinedIcon from '@material-ui/icons/SyncProblemOutlined';

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
  cardSelected: {
    border: '1px solid white',
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

const AccountItem: FC<AccountItemProps> = ({
  account,
  onClick,
  onClickExport,
  onClickSyncExport,
  onDelete,
  selected,
}: AccountItemProps) => {
  const classes = useStyles();

  let title: string;
  if (account.name) {
    title = account.name;
    if (account.viewOnly) {
      title += ' (view only)';
    }
  } else {
    title = 'unnamed account';
  }

  return (
    <Grid item xs={12}>
      <Card className={selected ? classes.cardSelected : classes.card}>
        <CardActionArea onClick={onClick} name="accountCard">
          <CardHeader
            avatar={
              <Avatar style={{ backgroundColor: '#757575' }}>
                <MOBIcon color={selected ? 'blue' : 'white'} />
              </Avatar>
            }
            title={title}
            subheader={<ShortCode code={account.mainAddress} />}
            classes={{
              action: classes.action,
            }}
          />
        </CardActionArea>
        {!account.viewOnly && (
          <Tooltip title="copy view only account import request to clipboard">
            <Button onClick={onClickExport} name="exportViewOnlyButton">
              <SupervisorAccountOutlinedIcon />
            </Button>
          </Tooltip>
        )}
        {account.viewOnly && (
          <Tooltip title="copy view only account sync request to clipboard">
            <Button onClick={onClickSyncExport} name="syncViewOnlyButton">
              <SyncProblemOutlinedIcon />
            </Button>
          </Tooltip>
        )}

        <Button onClick={onDelete} disabled={selected} name="deleteButton">
          <TrashcanIcon color={selected ? 'grey' : 'red'} />
        </Button>
      </Card>
    </Grid>
  );
};

export default AccountItem;
export { AccountItem };
