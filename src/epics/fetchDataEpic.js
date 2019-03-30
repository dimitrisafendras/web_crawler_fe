import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { fetch } from '../api';
import { receiveData } from '../modules/actions/actions';
import {
    FETCH_DATA
} from '../modules/actions/actionTypes';

export const fetchDataEpic = action$ => {
    return action$
        .ofType(FETCH_DATA)
        .switchMap(()=> {
            return fetch()
                .then(
                response => console.log('re', response)
            ).catch(() => console.log('>>>', ))
        })
        .map(data => receiveData(data.data.contentsPerPage[0].contentPerItem))
};
