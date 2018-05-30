import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './redux/reducer';
import promiseMiddleware from 'redux-promise-middleware';
import authReducer from './ducks/authReducer';
import businessReucer from './ducks/businessReducer';
import nonProfitReducer from './ducks/non-profitReducer'


const reducers = {
    authReducer,
    businessReducer,
    nonProfitReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));
