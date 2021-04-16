import React, { useState } from 'react';
import type { FC } from 'react';

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

import AccountCard from '../../../components/AccountCard';
import { ReceiveMobProps } from './ReceiveMob.d';

// CBB, really, we should just give the list and work by the indexes.
const ReceiveMob: FC<ReceiveMobProps> = ({ contacts, selectedAccount }: ReceiveMobProps) => {
  const { mainAddress } = selectedAccount.account;
  const [selectedAddress, setSelectedAddress] = useState(mainAddress);
  const { t } = useTranslation('ReceiveMobPanel');

  const nameFromAddress =
    selectedAddress === mainAddress
      ? t('mainPublicAddress')
      : contacts.find((contact) => contact.assignedAddress === selectedAddress)?.alias;

  const dropDownValues = [{ alias: t('mainPublicAddress'), assignedAddress: mainAddress }].concat(
    contacts
  );

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
        value={selectedAddress}
        displayEmpty
        variant="outlined"
        onChange={(x) => setSelectedAddress(x.target.value)}
      >
        {dropDownValues.map((contact) => (
          <MenuItem value={contact.assignedAddress} key={contact.assignedAddress}>
            {contact.alias}
          </MenuItem>
        ))}
      </Select>

      <Box pt={3} display="flex" flexDirection="column" alignItems="center">
        <AccountCard
          account={{
            b58Code: selectedAddress,
            name: nameFromAddress,
          }}
        />
      </Box>
    </Container>
  );
};

ReceiveMob.defaultProps = {};

export default ReceiveMob;
export { ReceiveMob };
