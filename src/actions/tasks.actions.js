export const addTask = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: 'ADD_TASK',
      payload: payload,
    });
  };
};
