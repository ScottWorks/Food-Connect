import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './redux/reducer';
import promiseMiddleware from 'redux-promise-middleware';
import authReducer from './ducks/authReducer';
import businessReucer from './ducks/businessReducer';
import nonProfitReducer from './ducks/non-profitReducer'
import analyticsReducer from './ducks/analyticsReducer'

const reducers = {
    authReducer: authReducer,
    businessReducer: businessReucer,
    nonProfitReducer: nonProfitReducer,
    analyticsReducer: analyticsReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));
