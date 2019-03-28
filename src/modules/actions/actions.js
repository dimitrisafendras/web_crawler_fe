import * as types from './actionTypes';
import { createAction } from 'redux-actions';

//FIXME create config
export const fetchData = createAction(types.FETCH_DATA);
export const receiveData = createAction(types.RECEIVE_STUFF, data => data);
export const deleteData = createAction(types.DELETE_STUFF);
