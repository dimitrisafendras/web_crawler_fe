import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF,  DELETE_STUFF} from '../actions/actionTypes';

//FIXME refactor

export default function stuff(state = initialState, action) {
    let newState;
    switch (action.type) {
        case FETCH_STUFF:
            return action;
        case RECEIVE_STUFF:
            newState = action.payload;
            return newState;
        case DELETE_STUFF:
            newState = initialState;
            return newState;
        default:
            return state;
    }
}