import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

import { CircleStrokeMOBIcon } from '../icons';

interface QRMobProps {
  size: number;
  value: string;
}

const useStyles = makeStyles(() => {
  return {
    container: {
      height: '296px',
      position: 'relative',
      width: '296px',
    },
    icon: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: 1000,
    },
    qr: {
      height: '100%',
      left: 6,
      position: 'absolute',
      top: 6,
      width: '100%',
    },
    root: {},
  };
});

const QRMob: FC<QRMobProps> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <QRCode className={classes.qr} level="H" {...props} />
      <Box className={classes.icon}>
        <CircleStrokeMOBIcon color="black" height={64} width={64} />
      </Box>
    </Box>
  );
};

QRMob.propTypes = {
  size: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default QRMob;
