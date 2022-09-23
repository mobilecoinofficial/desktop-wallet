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
import { useTranslation } from 'react-i18next';

import { MOBNumberFormat } from '../../../components';
import { TOKENS } from '../../../constants/tokens';
import { GOLD_LIGHT } from '../../../constants/colors';
import { setTokenId } from '../../../redux/services';
import { Theme } from '../../../theme';
import { BalanceIndicatorProps } from './BalanceIndicator';
import { useCurrentToken } from '../../../hooks/useCurrentToken';

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
  const token = useCurrentToken();
  const { t } = useTranslation('BalanceIndicator');

  return (
    <Box className={classes.item} style={matches ? {} : { padding: '0' }}>
      <Typography variant="h3" color="textSecondary" gutterBottom>
        {t('title')}
      </Typography>
      <Box className={classes.valueContainer}>
        <Select
          value={token.id}
          classes={{
            icon: classes.icon,
            iconOpen: classes.iconOpen,
            select: classes.selectSelect,
          }}
          onChange={(e) => setTokenId(e.target.value as number)}
          renderValue={() => token.icon({ className: classes.iconElement })}
        >
          <MenuItem value={TOKENS.MOB.id}>
            <ListItemIcon>{TOKENS.MOB.icon({ className: classes.iconElement })}</ListItemIcon>
            MOB
          </MenuItem>
          <MenuItem value={TOKENS.USDM.id}>
            <ListItemIcon>{TOKENS.USDM.icon({ className: classes.icon })}</ListItemIcon>
            USDM
          </MenuItem>
        </Select>
        <Typography data-testid="balance-figure" variant="h3" color="textPrimary">
          <MOBNumberFormat token={token} value={balance} />
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
