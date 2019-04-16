import initialState from './initialState';
import { RECEIVE_DATA, DELETE_DATA } from '../actions/actionTypes';

const actionHandlers = {
  [RECEIVE_DATA]: (state, fetchedData) => ({ ...state, fetchedData }),
  [DELETE_DATA]: () => initialState,
};

// FIXME refactor extract
export const dataStore = (state = initialState, action) => {
  const { type, payload } = action;
  const actionHandler = actionHandlers[type];

  return actionHandler ? actionHandler(state, payload) : state;
};
