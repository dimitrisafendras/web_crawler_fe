import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF,  DELETE_STUFF} from '../actions/actionTypes';

//FIXME refactor with config obj
const actionHandlers = {
    [FETCH_STUFF]: (state) => state,
    [RECEIVE_STUFF]: (state, fetchedData) => ({...state, fetchedData}),
    [DELETE_STUFF]: () => initialState
};

//FIXME refactor extract
export const dataStore = (state = initialState, action) => {
    const { type, payload } = action;
    const actionHandler = actionHandlers[type];

    return actionHandler
        ? actionHandler(state, payload)
        : state
};