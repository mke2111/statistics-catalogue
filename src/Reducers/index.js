import { combineReducers } from 'redux';
import stockReducer from './Stocks';
import FilterReducer from './Filter';

export default combineReducers({ stock: stockReducer, filter: FilterReducer });
