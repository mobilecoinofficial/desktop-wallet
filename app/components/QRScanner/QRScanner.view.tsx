import React, { useEffect, useState } from 'react';
import type { FC } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Html5Qrcode } from 'html5-qrcode';

import { logError } from '../../redux/services/logError';
import { QRScannerProps } from './QRScanner';

const QRScanner: FC<QRScannerProps> = ({ setFieldValue, handleClose }: QRScannerProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode('reader');

    (async () => {
      const cameraId = await Html5Qrcode.getCameras()
        .then((devices) => devices[0].id)
        .catch((err) => {
          handleClose();
          logError(err, 'app/components/QRScanner/QRScanner.view.tsx:cameraId');
          throw new Error(err);
        });
      await html5QrCode.start(
        cameraId,
        {
          fps: 10,
          qrbox: {
            height: 250,
            width: 250,
          },
        },
        (decodedText) => {
          setFieldValue('recipientPublicAddress', decodedText);
          handleClose();
        },
        (errorMessage) => {
          console.log(errorMessage);
        }
      );
      setLoading(false);
    })();

    return () => {
      html5QrCode.stop();
    };
  }, []);

  return (
    <>
      <Box id="reader" />
      {loading ? (
        <Box width="100%" p={3}>
          <LinearProgress />
        </Box>
      ) : (
        <>
          <Button
            id="cancelScan"
            color="secondary"
            onClick={handleClose}
            size="large"
            fullWidth
            type="button"
            variant="contained"
          >
            Cancel QR Scan
          </Button>
        </>
      )}
    </>
  );
};

export default QRScanner;
export { QRScanner };
