import * as types from './actionTypes';
import { createAction } from 'redux-actions';

//FIXME create config
export const fetchData = createAction(types.FETCH_DATA);
export const receiveData = createAction(types.RECEIVE_DATA, data => data);
export const deleteData = createAction(types.DELETE_DATA);
