import React, { FC } from 'react';

import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuProps,
  withStyles,
} from '@material-ui/core';

import { Theme } from '../../theme';
import { MOBIcon } from '../icons';
import { SavedPasswordsModalProps } from './SavedPasswordsModal';

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

const StyledMenuItem = withStyles((theme: Theme) => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.primary,
      },
    },
  },
}))(MenuItem);

export const SavedPasswordsModal: FC<SavedPasswordsModalProps> = ({
  accounts,
  setFieldValue,
  handleClose,
  anchorEl,
}: SavedPasswordsModalProps) => (
  <StyledMenu
    id="password-select-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
    PaperProps={{ style: { width: anchorEl?.offsetWidth } }}
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
        <ListItemText primary={account.account} secondary={'*'.repeat(8)} />
      </StyledMenuItem>
    ))}
  </StyledMenu>
);
