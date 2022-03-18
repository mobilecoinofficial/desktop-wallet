import { ConfirmEntropyKnownAction, CONFIRM_ENTROPY_KNOWN } from './type';

export const confirmEntropyKnownAction = (): ConfirmEntropyKnownAction => ({
  type: CONFIRM_ENTROPY_KNOWN,
});
