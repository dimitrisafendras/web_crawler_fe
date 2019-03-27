import * as types from './actionTypes';
import {fetch} from '../../api';

export function receiveStuff(data) {
    return {type: types.RECEIVE_STUFF, data};
}

export function fetchStuff() {
    return dispatch => {
        return fetch()
            .then(response =>
                dispatch(receiveStuff(response.data.contentsPerPage[0].contentPerItem))
                
            )
    };
}