import { confirmEntropyKnownAction } from '../redux/actions';
import { store } from '../redux/store';

const confirmEntropyKnown = async (): Promise<void> => store.dispatch(confirmEntropyKnownAction());

export default confirmEntropyKnown;
export { confirmEntropyKnown };
export type ConfirmEntropyKnownService = typeof confirmEntropyKnown;
