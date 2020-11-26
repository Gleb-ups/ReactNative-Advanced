export const loginUser = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGIN_USER_LOADING',
    });
    setTimeout(() => {
      dispatch({
        type: 'LOGIN_USER_SUCCESS',
      });
      dispatch({
        type: 'AUTH_USER_SUCCESS',
      });
      dispatch({
        type: 'GET_USER_SUCCESS',
        payload: payload.data,
      });
    }, 1000);
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch({
      type: 'USER_LOGGED_OUT_SUCCESS',
    });
  };
};
