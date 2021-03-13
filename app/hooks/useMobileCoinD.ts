import { useContext } from 'react';

import MobileCoinDContext, { MobileCoinDContextValue } from '../contexts/MobileCoinDContext';

// TODO -- rename these files better
const useMobileCoinD = (): MobileCoinDContextValue => useContext(MobileCoinDContext);

export default useMobileCoinD;
