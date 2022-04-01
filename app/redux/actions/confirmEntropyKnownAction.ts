export const CONFIRM_ENTROPY_KNOWN = 'CONFIRM_ENTROPY_KNOWN';

export type ConfirmEntropyKnownAction = {
  type: 'CONFIRM_ENTROPY_KNOWN';
};

export const confirmEntropyKnownAction = (): ConfirmEntropyKnownAction => ({
  type: CONFIRM_ENTROPY_KNOWN,
});
