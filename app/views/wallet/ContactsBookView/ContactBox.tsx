import React from 'react';
import type { FC } from 'react';

import {
  Box,
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from '@material-ui/core';

import ContactCircle from '../../../components/ContactCircle';
import type { Theme } from '../../../theme';
import { ContactBoxProps } from './ContactBox.d';

const useStyles = makeStyles((theme: Theme) => ({
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
    color: theme.palette.number.negative,
    fontWeight: 'bold',
  },
  root: {},
  textLeft: { textAlign: 'left', width: '100%' },
  textRight: { textAlign: 'right', width: '100%' },
  textSmall: { fontSize: 'small' },
}));

// This should something else...
const ContactBox: FC<ContactBoxProps> = ({
  assignedAddress,
  abbreviation,
  alias,
  onEdit,
}: ContactBoxProps) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => onEdit(assignedAddress)}>
          <CardContent>
            <Box className={classes.internal}>
              <ContactCircle abbreviation={abbreviation} />
              &nbsp;
              <Typography display="inline">{alias}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

ContactBox.defaultProps = {
  abbreviation: '',
  alias: '',
  assignedAddress: '',
};

export default ContactBox;
