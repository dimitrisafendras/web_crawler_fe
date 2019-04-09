import { map, mergeMap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import {
    initSource,
    fetchFromSource
} from '../api';

import {
    receiveData,
    fetchData
} from '../modules/actions/actions';

import {
    INIT_CRAWLER,
    FETCH_DATA
} from '../modules/actions/actionTypes';

const initCrawler = action$ =>  action$.pipe(
    ofType(INIT_CRAWLER),
    mergeMap(()=> initSource()),
    map(() => fetchData())
);

const getData = action$ => action$.pipe(
    ofType(FETCH_DATA),
    mergeMap( ()=> fetchFromSource()),
    map(data => receiveData(data.data))
);



export const fetchDataEpic = combineEpics(
    initCrawler,
    getData,
);
