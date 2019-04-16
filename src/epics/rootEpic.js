import { combineEpics } from 'redux-observable';
import { fetchDataEpic } from './fetchDataEpic';

export const rootEpic = combineEpics(fetchDataEpic);
