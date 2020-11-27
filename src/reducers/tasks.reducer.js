import {combineReducers} from 'redux';

const defaultState = {
  tasks: [],
};

const getTasks = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export default combineReducers({
  getTasks,
});
