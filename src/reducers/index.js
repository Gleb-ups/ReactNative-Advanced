import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import tasksReducer from './tasks.reducer';

const reducers = {
  authReducer,
  userReducer,
  tasksReducer,
  form: formReducer,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT_SUCCESS') {
    state = {};
  }

  return appReducer(state, action);
};

export default rootReducer;
