import { useContext } from 'react';

import FullServiceContext from '../contexts/FullServiceContext';
import type { FullServiceState } from '../contexts/FullServiceContext';

// TODO -- rename these files better
const useFullService = (): FullServiceState => useContext(FullServiceContext);

export default useFullService;
