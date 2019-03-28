import {combineReducers} from 'redux';
import {dataStore} from './dataReducer';

const rootReducer = combineReducers({
    dataStore,
});

export default rootReducer;