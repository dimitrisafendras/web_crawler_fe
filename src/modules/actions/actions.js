import * as types from './actionTypes';
import { createAction } from 'redux-actions';
import {fetch} from '../../api';

export const receiveStuff = createAction(types.RECEIVE_STUFF, data => data);
export const deleteStuff = createAction(types.DELETE_STUFF);

// export const fetchStuff = createAction(types.FETCH_STUFF, data => data)

export function fetchStuff() {
    return dispatch => {
        return fetch()
            .then(response =>
                dispatch(receiveStuff(response.data.contentsPerPage[0].contentPerItem))

            )
    };
}