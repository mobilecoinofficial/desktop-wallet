import { useContext } from 'react';

import FullServiceContext from '../contexts/FullServiceContext';

// TODO -- rename these files better
const useFullService = () => useContext(FullServiceContext);

export default useFullService;
