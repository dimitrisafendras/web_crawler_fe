import * as types from './actionTypes';
import { createAction } from 'redux-actions';
import {fetch} from '../../api';

export const receiveStuff = createAction(types.RECEIVE_STUFF, data => data)

// export const fetchStuff = createAction(types.FETCH_STUFF, data => data)

export function fetchStuff() {
    console.log('types', types)
    return dispatch => {
        return fetch()
            .then(response =>
                dispatch(receiveStuff(response.data.contentsPerPage[0].contentPerItem))

            )
    };
}