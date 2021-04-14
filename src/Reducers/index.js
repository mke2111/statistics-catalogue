import { combineReducers } from 'redux';
import stockReducer from './Stocks';

export default combineReducers({ stock: stockReducer });
