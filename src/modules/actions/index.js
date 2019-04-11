import { createAction } from 'redux-actions';
import {
    RECEIVE_DATA,
    INIT_CRAWLER,
    DELETE_DATA,
    FETCH_DATA,
} from './actionTypes';

//FIXME create 2configs one for actions one for actionsWithPayload
export const initCrawler = createAction(INIT_CRAWLER);
export const receiveData = createAction(RECEIVE_DATA, data => data);
export const deleteData = createAction(DELETE_DATA);
export const fetchData = createAction(FETCH_DATA);