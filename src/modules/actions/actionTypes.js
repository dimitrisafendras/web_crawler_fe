import { actionTypeCreator } from '../../utils';

const ACTION_TYPES = [
  'INIT_CRAWLER',
  'FETCH_DATA',
  'RECEIVE_DATA',
  'DELETE_DATA',
];

export const {
  INIT_CRAWLER,
  FETCH_DATA,
  RECEIVE_DATA,
  DELETE_DATA,
} = actionTypeCreator(ACTION_TYPES);
