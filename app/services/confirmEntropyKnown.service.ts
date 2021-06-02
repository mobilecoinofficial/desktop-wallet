import { store } from '../contexts/FullServiceContext';
import { confirmEntropyKnownAction } from '../contexts/actions/confirmEntropyKnown.action';

const confirmEntropyKnown = async (): Promise<void> => store.dispatch(confirmEntropyKnownAction());

export default confirmEntropyKnown;
export { confirmEntropyKnown };
export type ConfirmEntropyKnownService = typeof confirmEntropyKnown;
