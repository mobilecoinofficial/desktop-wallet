import React from 'react';
import type { FC } from 'react';

import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuProps,
  withStyles,
} from '@material-ui/core';

import { MOBIcon } from '../icons';

export interface UserAccount {
  account: string;
  password: string;
}

export interface SavedPasswordsModalProps {
  accounts: UserAccount[];
  setFieldValue: (field: string, value: string) => void;
  handleClose: () => void;
  anchorEl: HTMLElement | null;
}

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
    transformOrigin={{ horizontal: 'left', vertical: 'top' }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const SavedPasswordsModal: FC<SavedPasswordsModalProps> = ({
  accounts,
  setFieldValue,
  handleClose,
  anchorEl,
}: SavedPasswordsModalProps) => {
  return (
    <StyledMenu
      id="password-select-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {accounts.map((account: { account: string; password: string }) => (
        <StyledMenuItem
          key={`item-${account.account}-${account.password}`}
          onClick={() => {
            setFieldValue('password', account.password);
            handleClose();
          }}
        >
          <ListItemIcon>
            <MOBIcon height={20} width={20} />
          </ListItemIcon>
          <ListItemText primary={account.account} secondary={'*'.repeat(account.password.length)} />
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

export default SavedPasswordsModal;
