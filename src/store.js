import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import authReducer from './ducks/authReducer';
import businessReducer from './ducks/businessReducer';
import nonProfitReducer from './ducks/non-profitReducer'
import analyticsReducer from './ducks/analyticsReducer'

const reducers = {
    authReducer: authReducer,
    businessReducer: businessReducer,
    nonProfitReducer: nonProfitReducer,
    analyticsReducer: analyticsReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));
