import React, { FC } from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

import { AccountCard } from '../../../components/AccountCard';
import { selectAccount } from '../../../redux/services';
import type { Contact } from '../../../types/Contact.d';
import type { ReceiveMobProps } from './ReceiveMob.d';

// CBB, really, we should just give the list and work by the indexes.
export const ReceiveMob: FC<ReceiveMobProps> = ({
  contacts,
  onClickCode,
  selectedAccount,
}: ReceiveMobProps) => {
  const { t } = useTranslation('ReceiveMobPanel');

  const dropDownValues = [
    {
      alias: t('mainPublicAddress'),
      assignedAddress: selectedAccount.account.publicAddress,
    } as Contact,
  ].concat(contacts);

  return (
    <Container maxWidth="sm">
      <Box mb={3}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{t('howTo')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="body2">{t('howToReceiveDetails')}</Typography>
              <Box paddingY={1} />
              <Typography variant="body2" color="primary">
                {t('mainPublicAddress')}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t('mainPublicAddressDetails')}
              </Typography>
              <Box paddingY={1} />
              <Typography variant="body2" color="primary">
                {t('assignedAddress')}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t('assignedAddressDetails')}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Select
        style={{ width: '100%' }}
        labelId="contactsList"
        id="contactsList"
        value={selectedAccount.account.publicAddress}
        displayEmpty
        variant="outlined"
        onChange={(x) => selectAccount(x.target.value as string)}
      >
        {dropDownValues.map((contact) => (
          <MenuItem value={contact.assignedAddress} key={contact.assignedAddress}>
            {contact.alias}
          </MenuItem>
        ))}
      </Select>

      <Box pt={3} display="flex" flexDirection="column" alignItems="center">
        <AccountCard account={selectedAccount.account} onClickCode={onClickCode} />
      </Box>
    </Container>
  );
};

ReceiveMob.defaultProps = {};
