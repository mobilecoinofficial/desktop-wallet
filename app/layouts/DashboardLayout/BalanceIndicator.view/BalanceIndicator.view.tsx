import React from 'react';
import type { FC } from 'react';

import {
  Box,
  Button,
  makeStyles,
  Typography,
  useMediaQuery,
  Select,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOn';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { MOBNumberFormat } from '../../../components';
import { MOBIcon } from '../../../components/icons';
import { TokenIds } from '../../../constants/app';
import { GOLD_LIGHT } from '../../../constants/colors';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { setTokenId } from '../../../redux/services';
import { Theme } from '../../../theme';
import { BalanceIndicatorProps } from './BalanceIndicator';

const useStyles = makeStyles((theme: Theme) => ({
  formControlLabel: {
    left: 24,
  },
  icon: {
    left: 0,
  },
  iconElement: {
    height: 24,
    width: 24,
  },
  iconOpen: {
    transform: 'none',
  },
  item: {
    padding: theme.spacing(3, 0, 0, 0),
    textAlign: 'center',
  },
  selectSelect: {
    paddingLeft: '24px',
    paddingRight: '8px !important',
  },
  valueContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const BalanceIndicator: FC<BalanceIndicatorProps> = ({
  balance,
  importLedger,
  isSynced,
  offlineModeEnabled,
}: BalanceIndicatorProps) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-height:768px)');
  const { tokenId } = useSelector((state: ReduxStoreState) => state);
  const { t } = useTranslation('BalanceIndicator');

  const renderIcon = (token: TokenIds) =>
    token === TokenIds.MOB ? (
      <MOBIcon className={classes.iconElement} />
    ) : (
      <MonetizationOnOutlinedIcon className={classes.icon} />
    );

  return (
    <Box className={classes.item} style={matches ? {} : { padding: '0' }}>
      <Typography variant="h3" color="textSecondary" gutterBottom>
        {t('title')}
      </Typography>
      <Box className={classes.valueContainer}>
        <Select
          value={tokenId}
          classes={{ icon: classes.icon, iconOpen: classes.iconOpen, select: classes.selectSelect }}
          onChange={(e) => setTokenId(e.target.value as TokenIds)}
          renderValue={(value: any) => renderIcon(value)}
        >
          <MenuItem value={TokenIds.MOB}>
            <ListItemIcon>{renderIcon(TokenIds.MOB)}</ListItemIcon>
            MOB
          </MenuItem>
          <MenuItem value={TokenIds.MOBUSD}>
            <ListItemIcon>{renderIcon(TokenIds.MOBUSD)}</ListItemIcon>
            MobileUSD
          </MenuItem>
        </Select>
        <Typography data-testid="balance-figure" variant="h3" color="textPrimary">
          <MOBNumberFormat valueUnit="pMOB" value={balance} />
        </Typography>
      </Box>
      {!isSynced && !offlineModeEnabled && (
        <Typography data-testid="balance-sync-message" variant="h6">
          <span style={{ color: GOLD_LIGHT }}>{t('syncMessage')}</span>
        </Typography>
      )}

      {offlineModeEnabled && (
        <Typography data-testid="balance-sync-message" variant="h6" color="primary">
          {t('offlineMode')}
        </Typography>
      )}

      {offlineModeEnabled && (
        <Button onClick={importLedger}>
          <Typography variant="h6">Import Ledger</Typography>
        </Button>
      )}
    </Box>
  );
};

export default BalanceIndicator;
export { BalanceIndicator };
