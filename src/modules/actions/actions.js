import { createAction } from 'redux-actions';
import {
    RECEIVE_DATA,
    DELETE_DATA
} from './actionTypes';

//FIXME create config
export const receiveData = createAction(RECEIVE_DATA, data => data);
export const deleteData = createAction(DELETE_DATA);
