import { useContext } from 'react';

import MobileCoinDContext from '../contexts/MobileCoinDContext';

// TODO -- rename these files better
const useMobileCoinD = () => {
  return useContext(MobileCoinDContext);
};

export default useMobileCoinD;
