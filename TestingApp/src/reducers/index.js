import {combineReducers} from 'redux'
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';

import accounts from './accounts';
const rootReducer = combineReducers({
    accounts: accounts,
    routing: routeReducer,
    form: formReducer
});

export default rootReducer;
