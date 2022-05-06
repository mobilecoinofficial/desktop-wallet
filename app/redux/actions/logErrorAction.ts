export const LOG_ERROR = 'LOG_ERROR';

export type LogErrorAction = {
  type: 'LOG_ERROR';
  payload: {
    error: unknown;
    generatedFrom: string;
  };
};

export const logErrorAction = (error: unknown, generatedFrom: string): LogErrorAction => ({
  payload: {
    error,
    generatedFrom,
  },
  type: LOG_ERROR,
});
