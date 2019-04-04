import {actionTypeCreator} from '../../utils/utils';

const ACTION_TYPES = [
    'FETCH_DATA',
    'RECEIVE_DATA',
    'DELETE_DATA',
];

export const {
    FETCH_DATA,
    RECEIVE_DATA,
    DELETE_DATA
} = actionTypeCreator(ACTION_TYPES);

