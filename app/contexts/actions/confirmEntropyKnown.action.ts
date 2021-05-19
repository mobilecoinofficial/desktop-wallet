export const CONFIRM_ENTROPY_KNOWN = 'CONFIRM_ENTROPY_KNOWN';

export type ConfirmEntropyKnownActionType = {
  type: 'CONFIRM_ENTROPY_KNOWN';
};

export const confirmEntropyKnownAction = (): ConfirmEntropyKnownActionType => ({
  type: CONFIRM_ENTROPY_KNOWN,
});
