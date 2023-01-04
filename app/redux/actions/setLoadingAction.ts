export const SET_LOADING = 'SET_LOADING';

export type SetLoadingAction = {
  type: 'SET_LOADING';
  payload: {
    isLoading: boolean;
  };
};

export const setLoadingAction = (isLoading: boolean): SetLoadingAction => ({
  payload: {
    isLoading,
  },
  type: SET_LOADING,
});
