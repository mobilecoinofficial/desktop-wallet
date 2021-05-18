import { store } from '../contexts/FullServiceContext';
import { confirmEntropyKnownAction } from '../contexts/actions/confirmEntropyKnown.action';

const confirmEntropyKnown = (): void => store.dispatch(confirmEntropyKnownAction());

export default confirmEntropyKnown;
export { confirmEntropyKnown };
