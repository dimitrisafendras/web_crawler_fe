import * as types from './actionTypes';
import { createAction } from 'redux-actions';
import {fetch} from '../../api';

//FIXME create config
export const receiveData = createAction(types.RECEIVE_STUFF, data => data);
export const deleteData = createAction(types.DELETE_STUFF);

// export const fetchStuff = createAction(types.FETCH_STUFF, data => data)

//FIXME transfer logic to epics
export function fetchStuff() {
    return dispatch => {
        return fetch()
            .then(response =>
                dispatch(receiveData(response.data.contentsPerPage[0].contentPerItem))

            )
    };
}