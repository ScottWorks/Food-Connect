import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './redux/reducer';
import promiseMiddleware from 'redux-promise-middleware';
import adminReducer from './ducks/adminReducer';
import businessReucer from './ducks/businessReducer';
import nonProfitReducer from './ducks/non-profitReducer'


const reducers = {
    adminReducer,
    businessReducer,
    nonProfitReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));
